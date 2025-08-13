/**
 * CSS Scoping Loader for Tailwind MFE - Dynamic Manifest-Based Loading
 * 
 * Proper Module Federation approach using manifest for dynamic asset resolution.
 * Follows best practices with no hardcoded asset filenames.
 */

(function() {
  'use strict';
  
  console.log('🚀 CSS Scoping Loader starting...');
  
  const CONTAINER_ID = 'tailwind-mfe-container';
  const MFE_FOLDER = 'tailwind-mfe';
  const BASE_URL = 'http://nor-vltrx-t02.htseng.com/files/RepWebFileLibrary';
  
  /**
   * Get base path for MFE assets
   */
  function getBasePath() {
    return `${BASE_URL}/${MFE_FOLDER}`;
  }
  
  /**
   * Show loading spinner
   */
  function showSpinner(container) {
    container.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px; font-family: system-ui, sans-serif; color: #666;">
        <div style="width: 20px; height: 20px; border: 2px solid #e5e7eb; border-top: 2px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 12px;"></div>
        Loading Tailwind MFE...
        <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
      </div>
    `;
  }

  /**
   * Load manifest file to get dynamic asset names
   */
  async function loadManifest(basePath) {
    const manifestUrl = `${basePath}/dist/mfe-manifest.json`;
    console.log('📋 Loading manifest:', manifestUrl);
    
    try {
      const response = await fetch(manifestUrl);
      if (!response.ok) {
        throw new Error(`Manifest fetch failed: ${response.status}`);
      }
      const manifest = await response.json();
      console.log('✅ Manifest loaded:', manifest);
      return manifest;
    } catch (error) {
      console.error('❌ Failed to load manifest:', error);
      throw error;
    }
  }

  /**
   * Load CSS file
   */
  function loadCSS(cssUrl) {
    return new Promise((resolve, reject) => {
      console.log('🎨 Loading CSS:', cssUrl);
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssUrl;
      link.onload = () => {
        console.log('✅ CSS loaded successfully');
        resolve();
      };
      link.onerror = (error) => {
        console.error('❌ CSS failed to load:', error);
        reject(new Error(`CSS failed to load: ${cssUrl}`));
      };
      document.head.appendChild(link);
    });
  }

  /**
   * Main MFE loading function
   */
  async function loadMFE() {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) {
      console.error(`❌ Container #${CONTAINER_ID} not found`);
      return;
    }

    try {
      showSpinner(container);
      
      const basePath = getBasePath();
      console.log('📦 Base path:', basePath);
      
      // Step 1: Load manifest to get dynamic asset names
      const manifest = await loadManifest(basePath);
      
      // Step 2: Load CSS using manifest
      const cssUrl = `${basePath}/dist/assets/${manifest.css}`;
      await loadCSS(cssUrl);
      
      // Step 3: Load bootstrap module using manifest
      const bootstrapUrl = `${basePath}/dist/assets/${manifest.bootstrap}`;
      console.log('📥 Loading bootstrap module:', bootstrapUrl);
      
      const module = await import(bootstrapUrl);
      console.log('✅ Bootstrap module loaded:', module);
      
      // Step 4: Get mount function
      const mount = module.mount || module.default?.mount || module.default;
      if (!mount) {
        throw new Error('Mount function not found in bootstrap module');
      }
      
      // Step 5: Mount MFE with CSS scoping
      console.log('🎯 Mounting MFE to container...');
      const result = mount(container);
      
      if (result) {
        console.log('🎉 Tailwind MFE mounted successfully with CSS scoping!');
      } else {
        throw new Error('Mount function returned null/undefined');
      }
      
      // Dispatch success event
      window.dispatchEvent(new CustomEvent('mfe:loaded', {
        detail: { container: CONTAINER_ID }
      }));
      
      return result;
      
    } catch (error) {
      console.error('❌ MFE loading failed:', error);
      
      // Show error in container
      container.innerHTML = `
        <div style="padding: 20px; border: 1px solid #fecaca; border-radius: 8px; background-color: #fef2f2; font-family: system-ui, sans-serif; color: #dc2626; margin: 20px 0;">
          <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">❌ Tailwind MFE Loading Failed</h3>
          <p style="margin: 0 0 10px 0; font-size: 14px;">${error.message}</p>
          <details style="margin-top: 10px;">
            <summary style="cursor: pointer; font-size: 12px; color: #7f1d1d;">Technical Details</summary>
            <pre style="margin: 10px 0 0 0; padding: 10px; background: #fee2e2; border-radius: 4px; font-size: 11px; overflow-x: auto;">${error.stack}</pre>
          </details>
        </div>
      `;
      
      // Dispatch error event
      window.dispatchEvent(new CustomEvent('mfe:error', {
        detail: error.message
      }));
    }
  }
  
  // Auto-start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMFE);
  } else {
    loadMFE();
  }
  
})();

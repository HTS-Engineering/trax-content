/**
 * Module loader for Expenses MFE
 * Dynamically detects location and loads assets from manifest
 */

(function() {
  'use strict';
  
  console.log('🚀 Dynamic CSS Scoping Loader starting...');
  
  const CONTAINER_ID = 'module-mfe';
  const SCOPE_CLASS = 'expenses-mfe-scope';
  const FILE_NAME = 'moduleLoader.js';
  
  function getCurrentScript() {
    if (document.currentScript) {
      return document.currentScript;
    }

    const scripts = document.scripts;
    for (let i = 0; i < scripts.length; i++) {
      const s = scripts[i];
      const srcAttr = s.getAttribute('src');
      if (!srcAttr) continue;
      try {
        const u = new URL(srcAttr, document.baseURI);
        const last = (u.pathname.split('/').pop() || '').toLowerCase();
        if (last === FILE_NAME.toLowerCase()) return s;
      } catch {
        continue;
      }
    }
    
    return null;
  }
  
  function getBasePath() {
    const currentScript = getCurrentScript();
    if (!currentScript?.src) {
      console.error('❌ Could not detect current script location');
      return null;
    }
    
    try {
      const scriptUrl = new URL(currentScript.src);
      const scriptPath = scriptUrl.pathname.replace(/\/[^\/]*$/, '');
      const basePath = scriptUrl.origin + scriptPath;
      
      console.log('✅ Detected base path:', basePath);
      return basePath;
    } catch (error) {
      console.error('❌ Error determining base path:', error);
      return null;
    }
  }
  
  async function loadManifest(basePath) {
    const possibleManifestPaths = [
      `${basePath}/expenses-mfe-dev/mfe-manifest.json`,
      `${basePath}/mfe-manifest.json`,
      `${window.location.origin}/expenses-mfe-dev/mfe-manifest.json`,
      `${window.location.origin}/mfe-manifest.json`
    ];
    
    let lastError = null;
    
    for (const manifestUrl of possibleManifestPaths) {
      try {
        console.log('🔍 Trying to load manifest from:', manifestUrl);
        const response = await fetch(manifestUrl);
        if (response.ok) {
          const manifest = await response.json();
          console.log('✅ Manifest loaded from:', manifestUrl);
          return manifest;
        }
      } catch (error) {
        lastError = error;
        console.warn(`⚠️ Failed to load manifest from ${manifestUrl}:`, error);
      }
    }
    
    throw lastError || new Error('Failed to load manifest from all possible locations');
  }
  
  /**
   * Add CSS scoping class to container
   */
  function addScopingClass(container) {
    if (!container.classList.contains(SCOPE_CLASS)) {
      container.classList.add(SCOPE_CLASS);
      console.log(`✅ Added scoping class: ${SCOPE_CLASS}`);
    }
  }
  
  async function loadMFE() {
    try {
      console.log('📦 Loading MFE dynamically...');
      
      let basePath = getBasePath();
      if (!basePath) {
        console.warn('⚠️ Could not determine base path, falling back to current location');
        basePath = window.location.origin;
      }
      
      const container = document.getElementById(CONTAINER_ID);
      if (!container) {
        throw new Error(`Container #${CONTAINER_ID} not found`);
      }
      
      console.log('✅ Container found, base path:', basePath);
      
      addScopingClass(container);
      
      const manifest = await loadManifest(basePath);
      if (!manifest) {
        throw new Error('Failed to load manifest');
      }
      
      const getAssetUrl = (filename) => {
        const possiblePaths = [
          `${basePath}/expenses-mfe-dev/assets/${filename}`,
          `${basePath}/assets/${filename}`,
          `/expenses-mfe-dev/assets/${filename}`,
          `/assets/${filename}`,
          `${window.location.origin}/expenses-mfe-dev/assets/${filename}`,
          `${window.location.origin}/assets/${filename}`
        ];
        
        console.log(`🔍 Possible paths for ${filename}:`, possiblePaths);
        return possiblePaths[0];
      };
      
      const cssUrl = getAssetUrl(manifest.css);
      console.log('🎨 Loading CSS from:', cssUrl);
      
      await new Promise((resolve) => {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = cssUrl;
        cssLink.onload = () => {
          console.log('✅ CSS loaded successfully');
          resolve(true);
        };
        cssLink.onerror = () => {
          console.warn('⚠️ CSS loading failed, continuing without it');
          resolve(false);
        };
        document.head.appendChild(cssLink);
      });
      
      const bootstrapUrl = getAssetUrl(manifest.bootstrap);
      console.log('📥 Loading bootstrap from:', bootstrapUrl);
      
      const bootstrap = await import(/* @vite-ignore */bootstrapUrl).catch(error => {
        console.error('❌ Failed to load bootstrap module:', error);
        throw new Error(`Failed to load bootstrap module: ${error.message}`);
      });
      
      if (!bootstrap?.mount) {
        throw new Error('Mount function not found in bootstrap module');
      }
      
      console.log('✅ Bootstrap module loaded successfully');
      
      console.log('🎯 Mounting MFE...');
      const result = await bootstrap.mount(container);
      
      console.log('🎉 MFE mounted successfully!');
      
      window.dispatchEvent(new CustomEvent('mfe:loaded', {
        detail: { 
          container: CONTAINER_ID, 
          basePath,
          manifest,
          timestamp: new Date().toISOString()
        }
      }));
      
      return result;
      
    } catch (error) {
      const errorMsg = `❌ MFE loading failed: ${error.message}`;
      console.error(errorMsg, error);
      
      window.dispatchEvent(new CustomEvent('mfe:error', {
        detail: {
          message: error.message,
          stack: error.stack,
          timestamp: new Date().toISOString()
        }
      }));
      
      const container = document.getElementById(CONTAINER_ID);
      if (container) {
        container.innerHTML = `
          <div style="color: #721c24; background-color: #f8d7da; 
                     border: 1px solid #f5c6cb; padding: 10px; border-radius: 4px;">
            <h3>Application Error</h3>
            <p>${error.message}</p>
            <p>Please try refreshing the page or contact support if the problem persists.</p>
            <button onclick="window.location.reload()" 
                    style="background: #dc3545; color: white; border: none; 
                           padding: 5px 10px; border-radius: 3px; cursor: pointer;">
              Reload Page
            </button>
          </div>
        `;
      }
      
      throw error;
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMFE);
  } else {
    loadMFE();
  }
  
})();

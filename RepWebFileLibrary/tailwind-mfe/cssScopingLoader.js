/**
 * Ultra-Simple CSS Scoping MFE Loader - Self-Contained
 * 
 * This loader automatically detects its own location and loads assets
 * from the same base path, making it cross-origin compatible.
 * 
 * Features:
 * 1. Auto-detects its own script location
 * 2. Loads CSS via link tag with proper base path
 * 3. Loads bootstrap module with proper base path
 * 4. Mounts MFE with CSS scoping class
 */

(function() {
  'use strict';
  
  console.log('🚀 Ultra-Simple CSS Scoping Loader starting...');
  
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  /**
   * Get the current script element
   */
  function getCurrentScript() {
    // Modern browsers
    if (document.currentScript) {
      return document.currentScript;
    }
    
    // Fallback for older browsers
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  }
  
  /**
   * Get the base path where this script is located
   */
  function getBasePath() {
    const currentScript = getCurrentScript();
    
    if (currentScript && currentScript.src) {
      const scriptSrc = currentScript.src;
      const lastSlash = scriptSrc.lastIndexOf('/');
      const basePath = lastSlash !== -1 ? scriptSrc.substring(0, lastSlash) : '';
      console.log('📍 Derived base path from script source:', basePath);
      console.log('📍 Script source URL:', scriptSrc);
      return basePath;
    }
    
    console.error('❌ Could not determine script source URL');
    return '';
  }
  
  async function loadMFE() {
    try {
      console.log('📦 Loading MFE...');
      
      // Step 1: Get the base path from our own script location
      const basePath = getBasePath();
      if (!basePath) {
        console.error('❌ Could not determine base path for loading assets');
        return;
      }
      
      // Step 2: Find container
      const container = document.getElementById(CONTAINER_ID);
      if (!container) {
        console.error(`❌ Container #${CONTAINER_ID} not found`);
        return;
      }
      
      console.log('✅ Container found');
      
      // Step 3: Load manifest to get dynamic file paths
      console.log('📋 Loading manifest...');
      const manifestUrl = `${basePath}/mfe-manifest.json`;
      console.log('📋 Manifest URL:', manifestUrl);
      const manifestResponse = await fetch(manifestUrl);
      const manifest = await manifestResponse.json();
      console.log('✅ Manifest loaded:', manifest);
      
      // Step 4: Load CSS
      const cssUrl = `${basePath}/assets/${manifest.css}`;
      console.log('🎨 CSS URL:', cssUrl);
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = cssUrl;
      cssLink.onload = () => console.log('✅ CSS loaded');
      cssLink.onerror = () => console.warn('⚠️ CSS loading failed');
      document.head.appendChild(cssLink);
      
      // Step 5: Load bootstrap module
      console.log('📥 Loading bootstrap module...');
      const bootstrapUrl = `${basePath}/assets/${manifest.bootstrap}`;
      console.log('📥 Bootstrap URL:', bootstrapUrl);
      
      const bootstrap = await import(bootstrapUrl);
      console.log('✅ Bootstrap module loaded');
      
      if (!bootstrap.mount) {
        throw new Error('Mount function not found');
      }
      
      // Step 4: Mount MFE
      console.log('🎯 Mounting MFE...');
      const result = await bootstrap.mount(container);
      
      console.log('🎉 MFE mounted successfully with CSS scoping!');
      
      // Dispatch success event
      window.dispatchEvent(new CustomEvent('mfe:loaded', {
        detail: { container: CONTAINER_ID }
      }));
      
      return result;
      
    } catch (error) {
      console.error('❌ MFE loading failed:', error);
      
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

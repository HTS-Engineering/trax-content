/**
 * CSS Scoping Loader for Tailwind MFE - Hardcoded Configuration
 * 
 * This loader has all URLs hardcoded to eliminate configuration complexity
 * and ensure reliable loading in any environment.
 */

(function() {
  'use strict';
  
  console.log('🚀 CSS Scoping Loader starting...');
  
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  // Hardcoded configuration - NO CONFIGURATION NEEDED!
  const HARDCODED_CONFIG = {
    baseUrl: 'http://nor-vltrx-t02.htseng.com/files/RepWebFileLibrary',
    css: 'style-DQMKYuWw.css',
    bootstrap: '__federation_expose_Mount-lj_xqXyM.js',
    mfeFolder: 'tailwind-mfe'
  };
  
  /**
   * Get hardcoded base path - no detection needed
   */
  function getBasePath() {
    console.log('✅ Using hardcoded base path:', HARDCODED_CONFIG.baseUrl);
    return HARDCODED_CONFIG.baseUrl;
  }
  
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
      
      // Step 3: Use hardcoded asset names (no manifest needed)
      console.log('📋 Using hardcoded asset configuration');
      
      // Step 4: Load CSS
      const cssUrl = `${basePath}/${HARDCODED_CONFIG.mfeFolder}/assets/${HARDCODED_CONFIG.css}`;
      console.log('🎨 CSS URL:', cssUrl);
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = cssUrl;
      cssLink.onload = () => console.log('✅ CSS loaded');
      cssLink.onerror = () => console.warn('⚠️ CSS loading failed');
      document.head.appendChild(cssLink);
      
      // Step 5: Load bootstrap module
      console.log('📥 Loading bootstrap module...');
      const bootstrapUrl = `${basePath}/${HARDCODED_CONFIG.mfeFolder}/assets/${HARDCODED_CONFIG.bootstrap}`;
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

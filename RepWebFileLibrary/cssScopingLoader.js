/**
 * Self-Contained Tailwind MFE Loader - Hardcoded Configuration
 * 
 * This loader has all URLs hardcoded to eliminate any configuration complexity
 * and bypass CORS issues completely.
 * 
 * Usage:
 * <div id="tailwind-mfe-container"></div>
 * <script src="http://nor-vltrx-t02.htseng.com/files/RepWebFileLibrary/selfContainedLoader.js"></script>
 */

(function() {
  'use strict';
  
  console.log('🚀 Self-Contained MFE Loader starting...');
  
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  // Hardcoded configuration - NO CONFIGURATION NEEDED!
  const HARDCODED_CONFIG = {
    baseUrl: 'http://nor-vltrx-t02.htseng.com/files/RepWebFileLibrary',
    css: 'style-DQMKYuWw.css',
    bootstrap: '__federation_expose_Mount-lj_xqXyM.js',
    mfeFolder: 'tailwind-mfe'
  };
  
  /**
   * Get hardcoded base URL - no detection needed
   */
  function getBaseUrl() {
    console.log('✅ Using hardcoded base URL:', HARDCODED_CONFIG.baseUrl);
    return HARDCODED_CONFIG.baseUrl;
  }
  
  /**
   * Create asset URLs
   */
  function createAssetUrls(baseUrl) {
    return {
      css: `${baseUrl}/${HARDCODED_CONFIG.mfeFolder}/assets/${HARDCODED_CONFIG.css}`,
      bootstrap: `${baseUrl}/${HARDCODED_CONFIG.mfeFolder}/assets/${HARDCODED_CONFIG.bootstrap}`
    };
  }
  
  /**
   * Load CSS with error handling
   */
  function loadCSS(url) {
    return new Promise((resolve) => {
      console.log('🎨 Loading CSS:', url);
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = () => {
        console.log('✅ CSS loaded successfully');
        resolve(true);
      };
      link.onerror = () => {
        console.warn('⚠️ CSS failed to load, continuing anyway');
        resolve(false);
      };
      document.head.appendChild(link);
    });
  }
  
  /**
   * Load bootstrap module with error handling
   */
  async function loadBootstrap(url) {
    try {
      console.log('📥 Loading bootstrap module:', url);
      const module = await import(url);
      console.log('✅ Bootstrap module loaded successfully');
      return module;
    } catch (error) {
      console.error('❌ Bootstrap module failed to load:', error);
      throw error;
    }
  }
  
  /**
   * Show error message in container
   */
  function showError(container, message, details = '') {
    container.innerHTML = `
      <div style="
        padding: 20px; 
        border: 2px solid #ef4444; 
        border-radius: 8px; 
        background: #fef2f2; 
        color: #dc2626;
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 20px auto;
      ">
        <h3 style="margin: 0 0 10px 0; color: #dc2626;">⚠️ Microfrontend Loading Failed</h3>
        <p style="margin: 0 0 10px 0; font-size: 14px;">${message}</p>
        ${details ? `<details style="margin-top: 10px;">
          <summary style="cursor: pointer; font-weight: bold;">Technical Details</summary>
          <pre style="margin: 10px 0; padding: 10px; background: #fee2e2; border-radius: 4px; font-size: 12px; overflow-x: auto;">${details}</pre>
        </details>` : ''}
        <p style="margin: 10px 0 0 0; font-size: 12px; color: #991b1b;">
          Check browser console for detailed error information.
        </p>
      </div>
    `;
  }
  
  /**
   * Show loading message
   */
  function showLoading(container) {
    container.innerHTML = `
      <div style="
        padding: 20px; 
        text-align: center; 
        color: #6b7280;
        font-family: Arial, sans-serif;
      ">
        <div style="
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 10px;
        "></div>
        Loading Microfrontend...
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </div>
    `;
  }
  
  /**
   * Main loader function
   */
  async function loadMFE() {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) {
      console.error(`❌ Container #${CONTAINER_ID} not found`);
      return;
    }
    
    try {
      console.log('📦 Starting MFE loading...');
      showLoading(container);
      
      // Get base URL
      const baseUrl = getBaseUrl();
      if (!baseUrl) {
        throw new Error('Base URL not configured. Please set window.MFE_CONFIG.baseUrl');
      }
      
      // Create asset URLs
      const urls = createAssetUrls(baseUrl);
      console.log('🔗 Asset URLs:', urls);
      
      // Load CSS (non-blocking)
      await loadCSS(urls.css);
      
      // Load bootstrap module
      const bootstrap = await loadBootstrap(urls.bootstrap);
      
      // Add scoping class
      container.classList.add('tailwind-mfe-scope');
      console.log('✅ Added CSS scoping class');
      
      // Clear loading message
      container.innerHTML = '';
      
      // Mount MFE
      if (bootstrap.mount) {
        console.log('🎯 Mounting MFE...');
        await bootstrap.mount(container);
        console.log('✅ MFE mounted successfully!');
      } else {
        throw new Error('Bootstrap module does not export mount function');
      }
      
    } catch (error) {
      console.error('❌ MFE Loading failed:', error);
      showError(
        container, 
        error.message,
        `Error: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`
      );
    }
  }
  
  /**
   * Initialize when DOM is ready
   */
  function initialize() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadMFE);
    } else {
      // Small delay to ensure script has finished loading
      setTimeout(loadMFE, 100);
    }
  }
  
  // Start the process
  initialize();
  
})();

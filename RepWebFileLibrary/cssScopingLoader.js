/**
 * Tailwind MFE External Loader - Sibling File
 * 
 * This file should be placed as a SIBLING to the tailwind-mfe folder:
 * 
 * /files/RepWebFileLibrary/
 * ├── loadTailwindMFE.js          ← THIS FILE (sibling)
 * └── tailwind-mfe/               ← Bundle folder
 *     └── dist/assets/             ← Assets location
 * 
 * Usage in shell application:
 * <div id="tailwind-mfe-container"></div>
 * <script src="http://nor-vltrx-t02.htseng.com/files/RepWebFileLibrary/loadTailwindMFE.js"></script>
 */

(function() {
  'use strict';
  
  console.log('🚀 Tailwind MFE External Loader starting...');
  
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  // Hardcoded configuration - NO CONFIGURATION NEEDED!
  const HARDCODED_CONFIG = {
    baseUrl: 'http://nor-vltrx-t02.htseng.com/files/RepWebFileLibrary',
    css: 'style-i_jNjutn.css',
    bootstrap: '__federation_expose_Mount-BlhroOrS.js',
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
   * Show loading spinner
   */
  function showSpinner(container) {
    container.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #666;
      ">
        <div style="
          width: 20px;
          height: 20px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 12px;
        "></div>
        Loading Tailwind MFE...
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
   * Show error message
   */
  function showError(container, message, details = '') {
    container.innerHTML = `
      <div style="
        padding: 20px;
        border: 1px solid #fecaca;
        border-radius: 8px;
        background-color: #fef2f2;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #dc2626;
        margin: 20px 0;
      ">
        <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
          ❌ Tailwind MFE Loading Failed
        </h3>
        <p style="margin: 0 0 10px 0; font-size: 14px;">
          ${message}
        </p>
        ${details ? `<details style="margin-top: 10px;">
          <summary style="cursor: pointer; font-size: 12px; color: #7f1d1d;">Technical Details</summary>
          <pre style="margin: 10px 0 0 0; padding: 10px; background: #fee2e2; border-radius: 4px; font-size: 11px; overflow-x: auto;">${details}</pre>
        </details>` : ''}
      </div>
    `;
  }
  
  /**
   * Load CSS file
   */
  function loadCSS(baseUrl, cssFile) {
    return new Promise((resolve, reject) => {
      const cssUrl = `${baseUrl}/${HARDCODED_CONFIG.mfeFolder}/dist/assets/${cssFile}`;
      console.log('📄 Loading CSS:', cssUrl);
      
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
   * Load and mount the microfrontend
   */
  async function loadMFE() {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) {
      console.error(`❌ Container element #${CONTAINER_ID} not found`);
      return;
    }
    
    try {
      // Show loading spinner
      showSpinner(container);
      
      const baseUrl = getBaseUrl();
      
      // Load CSS first
      await loadCSS(baseUrl, HARDCODED_CONFIG.css);
      
      // Load bootstrap module
      const bootstrapUrl = `${baseUrl}/${HARDCODED_CONFIG.mfeFolder}/dist/assets/${HARDCODED_CONFIG.bootstrap}`;
      console.log('📦 Loading bootstrap module:', bootstrapUrl);
      
      const module = await import(bootstrapUrl);
      console.log('✅ Bootstrap module loaded:', module);
      
      // Get mount function
      const mount = module.mount || module.default?.mount || module.default;
      if (!mount) {
        throw new Error('Mount function not found in bootstrap module');
      }
      
      console.log('🎯 Mounting MFE to container...');
      const result = mount(container);
      
      if (result) {
        console.log('🎉 Tailwind MFE mounted successfully!');
      } else {
        throw new Error('Mount function returned null/undefined');
      }
      
    } catch (error) {
      console.error('❌ MFE loading failed:', error);
      
      // Check if it's a CORS error
      if (error.message.includes('CORS') || 
          error.message.includes('cross-origin') ||
          error.message.includes('Failed to fetch') ||
          error.name === 'TypeError') {
        
        showError(container, 
          'Cross-origin request blocked by browser security policy.',
          `The static file server needs to be configured with CORS headers for JavaScript files.

Server Configuration Needed:
Add these headers for .js files on ${HARDCODED_CONFIG.baseUrl}:

Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS

Contact your server administrator to add these headers.

Error Details: ${error.message}`
        );
      } else {
        showError(container, 
          'Failed to load microfrontend.',
          `Error: ${error.message}
Stack: ${error.stack}`
        );
      }
    }
  }
  
  // Auto-load when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMFE);
  } else {
    loadMFE();
  }
  
})();

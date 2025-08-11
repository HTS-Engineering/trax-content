/**
 * External Tailwind MFE Launcher - Cross-Origin Compatible
 * 
 * This file should be placed next to the "tailwind-mfe" folder on your server.
 * It dynamically loads and executes the cssScopingLoader.js from the tailwind-mfe folder.
 * 
 * Supports multiple configuration methods for different deployment scenarios:
 * 1. Auto-detection (default)
 * 2. Manual base URL configuration
 * 3. Data attributes configuration
 * 
 * Usage in Shell App:
 * <div id="tailwind-mfe-container"></div>
 * <script src="/path/to/loadTailwindMFE.js"></script>
 * 
 * Advanced Usage with Manual Base URL:
 * <script>
 *   window.TAILWIND_MFE_CONFIG = {
 *     baseUrl: 'http://nor-vltrx-102.htseng.com/files/RepWebFileLibrary'
 *   };
 * </script>
 * <script src="/path/to/loadTailwindMFE.js"></script>
 * 
 * Or with data attributes:
 * <script src="/path/to/loadTailwindMFE.js" 
 *         data-base-url="http://nor-vltrx-102.htseng.com/files/RepWebFileLibrary"></script>
 */

(function() {
  'use strict';
  
  console.log('🚀 External Tailwind MFE Launcher starting...');
  
  // Configuration
  const MFE_FOLDER_NAME = 'tailwind-mfe';
  const LOADER_FILENAME = 'cssScopingLoader.js';
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  /**
   * Get the base URL for loading MFE assets
   * Tries multiple methods in order of preference:
   * 1. Data attribute on script tag
   * 2. Global configuration object
   * 3. Auto-detection from script URL
   */
  function getBaseUrl() {
    // Method 1: Check for data attribute on current script
    const currentScript = getCurrentScript();
    if (currentScript && currentScript.dataset.baseUrl) {
      const baseUrl = currentScript.dataset.baseUrl;
      console.log('📍 Using base URL from data attribute:', baseUrl);
      return baseUrl;
    }
    
    // Method 2: Check for global configuration
    if (window.TAILWIND_MFE_CONFIG && window.TAILWIND_MFE_CONFIG.baseUrl) {
      const baseUrl = window.TAILWIND_MFE_CONFIG.baseUrl;
      console.log('📍 Using base URL from global config:', baseUrl);
      return baseUrl;
    }
    
    // Method 3: Auto-detect from script URL (fallback)
    if (currentScript && currentScript.src) {
      const scriptSrc = currentScript.src;
      const lastSlash = scriptSrc.lastIndexOf('/');
      const baseUrl = lastSlash !== -1 ? scriptSrc.substring(0, lastSlash) : '';
      console.log('📍 Auto-detected base URL from script:', baseUrl);
      return baseUrl;
    }
    
    // Method 4: Use current origin as last resort
    const fallbackUrl = window.location.origin;
    console.warn('⚠️ Using fallback base URL (current origin):', fallbackUrl);
    return fallbackUrl;
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
  
  /**
   * Test if a URL is accessible
   */
  async function testUrl(url) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      return false;
    }
  }
  
  /**
   * Load and execute the CSS Scoping Loader with robust URL handling
   */
  async function loadMFELoader() {
    try {
      // Check if container exists
      const container = document.getElementById(CONTAINER_ID);
      if (!container) {
        console.error(`❌ Container #${CONTAINER_ID} not found. Please add <div id="${CONTAINER_ID}"></div> to your HTML.`);
        return;
      }
      
      console.log('✅ Container found, loading MFE loader...');
      
      // Get the base URL using our robust method
      const baseUrl = getBaseUrl();
      const loaderPath = `${baseUrl}/${MFE_FOLDER_NAME}/${LOADER_FILENAME}`;
      
      console.log(`📦 Attempting to load CSS Scoping Loader from: ${loaderPath}`);
      
      // Test if the URL is accessible (optional, but helpful for debugging)
      const isAccessible = await testUrl(loaderPath);
      if (!isAccessible) {
        console.warn(`⚠️ URL test failed for: ${loaderPath}`);
        console.warn('This might be due to CORS restrictions or the file not existing.');
        console.warn('Proceeding with script loading anyway...');
      }
      
      // Create and load the script
      const script = document.createElement('script');
      script.src = loaderPath;
      script.type = 'text/javascript';
      
      // Handle load success
      script.onload = function() {
        console.log('✅ CSS Scoping Loader loaded successfully');
      };
      
      // Handle load error with detailed troubleshooting
      script.onerror = function() {
        console.error(`❌ Failed to load CSS Scoping Loader from: ${loaderPath}`);
        console.error('🔍 Troubleshooting steps:');
        console.error(`1. Verify the "${MFE_FOLDER_NAME}" folder exists at: ${baseUrl}/${MFE_FOLDER_NAME}/`);
        console.error(`2. Verify the "${LOADER_FILENAME}" file exists inside the folder`);
        console.error('3. Check server CORS configuration for cross-origin requests');
        console.error('4. Ensure static file serving is properly configured');
        console.error('5. Check browser network tab for detailed error information');
        console.error('');
        console.error('💡 Configuration options:');
        console.error('• Set data-base-url attribute on script tag');
        console.error('• Set window.TAILWIND_MFE_CONFIG = { baseUrl: "your-url" }');
        console.error('• Current base URL:', baseUrl);
      };
      
      // Add script to document
      document.head.appendChild(script);
      
    } catch (error) {
      console.error('❌ Error in MFE Launcher:', error);
    }
  }
  
  /**
   * Initialize the launcher when DOM is ready
   */
  function initialize() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadMFELoader);
    } else {
      // DOM is already ready
      loadMFELoader();
    }
  }
  
  // Start the launcher
  initialize();
  
})();

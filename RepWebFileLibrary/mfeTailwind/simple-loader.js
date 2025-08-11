/**
 * Simple Tailwind MFE Loader with CSS Scoping
 * 
 * This loader uses standard CSS loading with Tailwind scoping for style isolation
 * No Shadow DOM complexity - just simple, reliable CSS scoping
 */

(function() {
  'use strict';
  
  const MFE_BASE_PATH = '/tailwind-mfe';
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  console.log('🚀 Simple CSS Scoping MFE Loader starting...');
  
  class SimpleMFELoader {
    constructor() {
      this.basePath = MFE_BASE_PATH;
      this.isLoaded = false;
      this.bootstrapModule = null;
      
      console.log(`📦 Simple loader initialized`);
    }
    
    async loadCSS() {
      try {
        console.log('🎨 Loading CSS with scoping...');
        
        // Try to get CSS file from manifest
        let cssUrl = null;
        
        try {
          const manifestResponse = await fetch(`${this.basePath}/mfe-manifest.json`);
          if (manifestResponse.ok) {
            const manifest = await manifestResponse.json();
            if (manifest.css) {
              cssUrl = `${this.basePath}/assets/${manifest.css}`;
              console.log(`✅ Found CSS from manifest: ${manifest.css}`);
            }
          }
        } catch (e) {
          console.log('📄 No manifest found, trying fallback CSS...');
        }
        
        // Fallback CSS detection
        if (!cssUrl) {
          const fallbackFiles = ['index.css', 'style.css', 'main.css'];
          for (const file of fallbackFiles) {
            try {
              const testUrl = `${this.basePath}/assets/${file}`;
              const response = await fetch(testUrl, { method: 'HEAD' });
              if (response.ok) {
                cssUrl = testUrl;
                console.log(`✅ Found CSS via fallback: ${file}`);
                break;
              }
            } catch (e) {
              // Continue to next file
            }
          }
        }
        
        if (!cssUrl) {
          console.warn('⚠️ No CSS file found - styles may not load');
          return;
        }
        
        // Load CSS via standard link element
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssUrl;
        link.onload = () => console.log('✅ CSS loaded successfully');
        link.onerror = () => console.warn('⚠️ CSS loading failed');
        
        document.head.appendChild(link);
        
      } catch (error) {
        console.warn('⚠️ CSS loading error:', error);
      }
    }
    
    async loadBootstrap() {
      if (this.isLoaded && this.bootstrapModule) {
        return this.bootstrapModule;
      }
      
      try {
        console.log('📥 Loading bootstrap module...');
        
        // Get bootstrap file from manifest
        const manifestResponse = await fetch(`${this.basePath}/mfe-manifest.json`);
        if (!manifestResponse.ok) {
          throw new Error('Manifest not found');
        }
        
        const manifest = await manifestResponse.json();
        if (!manifest.bootstrap) {
          throw new Error('Bootstrap module not specified in manifest');
        }
        
        const bootstrapUrl = `${this.basePath}/assets/${manifest.bootstrap}`;
        console.log(`🔗 Loading bootstrap: ${manifest.bootstrap}`);
        
        // Import the bootstrap module
        const module = await import(bootstrapUrl);
        
        if (!module || !module.mount) {
          throw new Error('Mount function not found in bootstrap module');
        }
        
        this.bootstrapModule = module;
        this.isLoaded = true;
        
        console.log('✅ Bootstrap module loaded successfully');
        return module;
        
      } catch (error) {
        console.error('❌ Failed to load bootstrap module:', error);
        throw error;
      }
    }
    
    async mount(containerId = CONTAINER_ID, props = {}) {
      try {
        console.log(`🎯 Mounting MFE to #${containerId}...`);
        
        // Find container
        const container = document.getElementById(containerId);
        if (!container) {
          throw new Error(`Container #${containerId} not found`);
        }
        
        // Load CSS first
        await this.loadCSS();
        
        // Load bootstrap module
        const bootstrap = await this.loadBootstrap();
        
        // Mount the MFE (bootstrap will add .tailwind-mfe-scope class)
        const result = await bootstrap.mount(container, props);
        
        console.log('🎉 MFE mounted successfully with CSS scoping!');
        
        // Dispatch success event
        window.dispatchEvent(new CustomEvent('mfe:loaded', {
          detail: { containerId, props }
        }));
        
        return result;
        
      } catch (error) {
        console.error('❌ MFE mounting failed:', error);
        
        // Dispatch error event
        window.dispatchEvent(new CustomEvent('mfe:error', {
          detail: error.message
        }));
        
        throw error;
      }
    }
  }
  
  // Auto-mount when DOM is ready
  function autoMount() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoMount);
      return;
    }
    
    const container = document.getElementById(CONTAINER_ID);
    if (!container) {
      console.log(`ℹ️ Container #${CONTAINER_ID} not found, skipping auto-mount`);
      return;
    }
    
    console.log('🔄 Auto-mounting MFE...');
    
    const loader = new SimpleMFELoader();
    loader.mount().catch(error => {
      console.error('❌ Auto-mount failed:', error);
    });
  }
  
  // Make loader available globally
  window.SimpleMFELoader = SimpleMFELoader;
  
  // Start auto-mount
  autoMount();
  
})();

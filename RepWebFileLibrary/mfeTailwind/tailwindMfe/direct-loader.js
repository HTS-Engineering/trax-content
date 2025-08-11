/**
 * Simple Tailwind MFE Loader with CSS Scoping
 * 
 * This loader uses CSS scoping instead of Shadow DOM for style isolation
 * Works with static files served from the Shell App's public folder
 */

(function() {
  'use strict';
  
  // Configuration for static files
  const MFE_BASE_PATH = '/tailwind-mfe'; // Path in Shell App's public folder
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  console.log('🚀 Simple Tailwind MFE Loader starting...');
  console.log('📁 Base path:', MFE_BASE_PATH);
  
  // Simple loader class with CSS scoping
  class SimpleTailwindMFELoader {
    constructor() {
      this.basePath = '/tailwind-mfe';
      this.isLoaded = false;
      this.mountedInstances = new Map();
      this.bootstrapModule = null;
      
      console.log(`📦 Simple loader initialized with base path: ${this.basePath}`);
    }
    
    async loadCSS() {
      try {
        console.log('🎨 Loading CSS styles...');
        
        // Try to get CSS file from manifest
        let cssUrl = null;
        
        try {
          const manifestUrl = `${this.basePath}/mfe-manifest.json`;
          const manifestResponse = await fetch(manifestUrl);
          
          if (manifestResponse.ok) {
            const manifest = await manifestResponse.json();
            if (manifest.css) {
              cssUrl = `${this.basePath}/assets/${manifest.css}`;
              console.log(`✅ Found CSS from manifest: ${manifest.css}`);
            }
          }
        } catch (e) {
          console.log('📄 No manifest found for CSS, using fallback...');
        }
        
        // Fallback: try to find any CSS file in assets
        if (!cssUrl) {
          const possibleCssFiles = [
            'style-CLvzXwsa.css', // Latest hash
            'index.css',
            'main.css',
            'app.css'
          ];
          
          for (const cssFile of possibleCssFiles) {
            const testUrl = `${this.basePath}/assets/${cssFile}`;
            try {
              const response = await fetch(testUrl, { method: 'HEAD' });
              if (response.ok) {
                cssUrl = testUrl;
                console.log(`✅ Found CSS via fallback: ${cssFile}`);
                break;
              }
            } catch (e) {
              // Continue to next file
            }
          }
        }
        
        if (!cssUrl) {
          console.warn('⚠️ No CSS file found');
          return;
        }
        
        console.log('🔗 Loading CSS from:', cssUrl);
        
        // Load CSS via standard link element (CSS scoping handles isolation)
        this.loadCSSViaLink(cssUrl);
        
      } catch (error) {
        console.warn('⚠️ CSS loading failed:', error);
        // Don't throw error, continue without CSS
      }
    }
    
    fallbackCSSLoading(cssUrl) {
      if (this.shadowRoot) {
        // Fallback: create link element in Shadow DOM
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssUrl;
        
        this.shadowRoot.appendChild(link);
        console.log('⚠️ CSS loaded via fallback link to Shadow DOM');
      } else {
        // In Shell App mode, do NOT load CSS globally - this would cause style leakage
        console.error('❌ Cannot load CSS: No Shadow DOM found and global loading is disabled to prevent style leakage');
        console.error('❌ This means CSS isolation failed. Check Shadow DOM creation.');
      }
    }
    
    async findBootstrapModule() {
      console.log('🔍 Looking for bootstrap module via manifest...');
      
      try {
        // Load the manifest file that contains actual file names
        const manifestUrl = `${this.basePath}/mfe-manifest.json`;
        console.log('📄 Loading manifest from:', manifestUrl);
        
        const manifestResponse = await fetch(manifestUrl);
        
        if (!manifestResponse.ok) {
          throw new Error(`Manifest not found: ${manifestResponse.status}`);
        }
        
        const manifest = await manifestResponse.json();
        console.log('📋 Manifest loaded:', manifest);
        
        if (!manifest.bootstrap) {
          throw new Error('Bootstrap module not specified in manifest');
        }
        
        const bootstrapUrl = `${this.basePath}/assets/${manifest.bootstrap}`;
        console.log(`✅ Found bootstrap from manifest: ${manifest.bootstrap}`);
        
        // Verify the file exists
        const verifyResponse = await fetch(bootstrapUrl, { method: 'HEAD' });
        if (!verifyResponse.ok) {
          throw new Error(`Bootstrap file not accessible: ${bootstrapUrl}`);
        }
        
        return bootstrapUrl;
        
      } catch (error) {
        console.error('❌ Failed to load bootstrap from manifest:', error);
        throw new Error(`Could not find bootstrap module: ${error.message}. Make sure to run 'npm run build' to generate the manifest file.`);
      }
    }
    
    async loadBootstrap() {
      if (this.isLoaded && this.bootstrapModule) {
        return this.bootstrapModule;
      }
      
      try {
        console.log('📥 Loading bootstrap module...');
        
        // Try to find the correct bootstrap module dynamically
        const bootstrapUrl = await this.findBootstrapModule();
        console.log('🔗 Loading from:', bootstrapUrl);
        
        // Load the bootstrap module
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
        
        // Try alternative approach - load all required chunks
        try {
          console.log('🔄 Trying alternative loading approach...');
          await this.loadAllChunks();
          return this.bootstrapModule;
        } catch (altError) {
          console.error('❌ Alternative loading also failed:', altError);
          throw error;
        }
      }
    }
    
    async loadAllChunks() {
      // Load required chunks in order
      const chunks = [
        'jsx-runtime-XI9uIe3W.js',
        '_commonjsHelpers-B85MJLTf.js',
        '__federation_shared_react-BrALZ0a1.js',
        '__federation_shared_react-dom-B-igiCQ4.js',
        '__federation_shared_react-router-dom-D6v5hdKT.js',
        'index-CIQ6_Rzc.js',
        '__federation_expose_Mount-BPZaNzjs.js'
      ];
      
      console.log('📦 Loading chunks sequentially...');
      
      for (const chunk of chunks) {
        try {
          const chunkUrl = `${this.basePath}/assets/${chunk}`;
          console.log(`📥 Loading chunk: ${chunk}`);
          await import(chunkUrl);
          console.log(`✅ Loaded: ${chunk}`);
        } catch (error) {
          console.warn(`⚠️ Failed to load chunk ${chunk}:`, error);
          // Continue with other chunks
        }
      }
      
      // Try to get the mount function from window
      if (window.mount) {
        this.bootstrapModule = { mount: window.mount };
        this.isLoaded = true;
        console.log('✅ Found mount function on window');
        return;
      }
      
      throw new Error('Could not find mount function after loading chunks');
    }
    
    async load() {
      if (this.isLoaded) {
        console.log('🔄 MFE already loaded');
        return;
      }
      
      try {
        console.log('🚀 Loading Tailwind MFE...');
        
        // Load bootstrap module first
        const bootstrap = await this.loadBootstrap();
        
        // Find container
        const container = document.getElementById('tailwind-mfe-root') || 
                         document.getElementById('tailwind-mfe-container') ||
                         document.getElementById('root');
        
        if (!container) {
          throw new Error('No container found for MFE mounting');
        }
        
        console.log('🎯 Mounting MFE directly...');
        const shadowOptions = { shadowMode: 'closed' }; // Shadow DOM configuration
        
        // Mount the MFE first to create Shadow DOM (now async)
        const mountResult = await bootstrap.mount(container, {}, shadowOptions);
        
        // Store shadow root reference from mount result (works with closed mode)
        this.shadowRoot = mountResult?.shadowRoot || container.shadowRoot || this.findShadowRoot(container);
        
        console.log('🔍 Shadow DOM detection:', {
          containerShadowRoot: !!container.shadowRoot,
          foundShadowRoot: !!this.shadowRoot,
          shadowMode: shadowOptions.shadowMode
        });
        
        if (!this.shadowRoot) {
          console.warn('⚠️ Shadow DOM not found! CSS will be loaded globally.');
        }
        
        // Load CSS into Shadow DOM AFTER mounting
        await this.loadCSS();
        
        this.isLoaded = true;
        console.log('✅ Tailwind MFE loaded successfully with Shadow DOM CSS');
        
      } catch (error) {
        console.error('❌ Failed to load Tailwind MFE:', error);
        throw error;
      }
    }
    
    findShadowRoot(container) {
      console.log('🔍 Searching for Shadow DOM...');
      
      // First, try direct access
      if (container.shadowRoot) {
        console.log('✅ Found Shadow DOM via direct access');
        return container.shadowRoot;
      }
      
      // Try to find shadow root in mounted instances registry
      if (typeof window !== 'undefined' && window.tailwindMFE && window.tailwindMFE.mountedInstances) {
        const instance = window.tailwindMFE.mountedInstances.get(container);
        if (instance && instance.shadowRoot) {
          console.log('✅ Found Shadow DOM via registry');
          return instance.shadowRoot;
        }
      }
      
      // Check if Shadow DOM exists but is closed (mode: 'closed')
      // In closed mode, shadowRoot is not accessible, but we can check if it was created
      const hasClosedShadow = container.innerHTML === '' && container.childNodes.length === 0;
      if (hasClosedShadow) {
        console.warn('⚠️ Shadow DOM appears to be in closed mode - cannot access shadowRoot');
      }
      
      console.warn('❌ Shadow DOM not found');
      return null;
    }
    
    async mount(containerId = CONTAINER_ID, props = {}) {
      try {
        console.log(`🔧 Mounting to container: ${containerId}`);
        
        // Find container
        const container = typeof containerId === 'string' 
          ? document.getElementById(containerId)
          : containerId;
          
        if (!container) {
          throw new Error(`Container not found: ${containerId}`);
        }
        
        // Load bootstrap if needed
        if (!this.isLoaded) {
          await this.load();
        }
        
        if (!this.bootstrapModule || !this.bootstrapModule.mount) {
          throw new Error('Bootstrap module or mount function not available');
        }
        
        // Clear container
        container.innerHTML = '';
        
        // Mount the MFE with Shadow DOM options
        console.log('🎯 Mounting MFE directly...');
        const shadowOptions = { shadowMode: 'closed' }; // Shadow DOM configuration
        const instance = this.bootstrapModule.mount(container, props, shadowOptions);
        
        // Store instance
        this.mountedInstances.set(container, instance);
        
        console.log('✅ MFE mounted successfully via direct import!');
        
        return {
          dispose: () => {
            if (instance && instance.dispose) {
              instance.dispose();
            }
            this.mountedInstances.delete(container);
            console.log('🗑️ Direct MFE disposed');
          }
        };
        
      } catch (error) {
        console.error('❌ Direct mount failed:', error);
        this.showError(containerId, error);
        return { dispose: () => {} };
      }
    }
    
    showError(containerId, error) {
      const container = typeof containerId === 'string' 
        ? document.getElementById(containerId)
        : containerId;
        
      if (container) {
        container.innerHTML = `
          <div style="
            padding: 20px; 
            border: 2px solid #ef4444; 
            border-radius: 8px; 
            background: #fef2f2; 
            color: #991b1b; 
            text-align: center;
            font-family: system-ui, -apple-system, sans-serif;
          ">
            <h3 style="margin: 0 0 10px 0; color: #dc2626;">
              ⚠️ Direct Tailwind MFE Load Error
            </h3>
            <p style="margin: 0; font-size: 14px;">
              ${error.message || 'Unknown error'}
            </p>
            <details style="margin-top: 10px; text-align: left;">
              <summary style="cursor: pointer; font-size: 12px;">Debug Info</summary>
              <pre style="font-size: 10px; margin: 5px 0; overflow: auto; background: #fee2e2; padding: 10px; border-radius: 4px;">
Base Path: ${this.basePath}
Container: ${containerId}
Bootstrap URL: ${this.basePath}/assets/__federation_expose_Mount-Dl_1BgSw.js
Current URL: ${window.location.href}
Error: ${error.stack || error.message}

Expected files:
- ${window.location.origin}${this.basePath}/assets/__federation_expose_Mount-Dl_1BgSw.js
- ${window.location.origin}${this.basePath}/assets/* (other chunks)

Make sure the dist/assets/ folder is copied to your Shell App's public/tailwind-mfe/assets/
              </pre>
            </details>
          </div>
        `;
      }
    }
    
    unmountAll() {
      console.log(`🗑️ Unmounting ${this.mountedInstances.size} direct instances`);
      this.mountedInstances.forEach((instance) => {
        if (instance && instance.dispose) {
          instance.dispose();
        }
      });
      this.mountedInstances.clear();
    }
  }
  
  // Create global instance
  window.DirectTailwindMFELoader = new DirectTailwindMFELoader();
  
  // Auto-mount function
  async function autoMount() {
    try {
      // Wait for DOM
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }
      
      // Additional delay for SSR
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find container
      const container = document.getElementById(CONTAINER_ID);
      if (container) {
        console.log(`🎯 Auto-loading direct MFE to #${CONTAINER_ID}`);
        await window.DirectTailwindMFELoader.load();
      } else {
        console.log(`ℹ️ No container found with ID: ${CONTAINER_ID}`);
      }
      
    } catch (error) {
      console.error('❌ Direct auto-mount failed:', error);
    }
  }
  
  // Start auto-mount
  autoMount();
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    window.DirectTailwindMFELoader.unmountAll();
  });
  
  console.log('✅ Direct Tailwind MFE Loader ready!');
  
})();

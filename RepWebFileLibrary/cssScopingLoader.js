/**
 * Ultra-Simple CSS Scoping MFE Loader
 * 
 * This is the simplest possible loader that just:
 * 1. Loads CSS via link tag
 * 2. Loads bootstrap module
 * 3. Mounts MFE with CSS scoping class
 */

(function() {
  
  console.log('🚀 Ultra-Simple CSS Scoping Loader starting...');
  
  const BASE_PATH = '/tailwind-mfe';
  const CONTAINER_ID = 'tailwind-mfe-container';
  
  async function loadMFE() {
    try {
      console.log('📦 Loading MFE...');
      
      // Step 1: Find container
      const container = document.getElementById(CONTAINER_ID);
      if (!container) {
        console.error(`❌ Container #${CONTAINER_ID} not found`);
        return;
      }
      
      console.log('✅ Container found');
      
      // Step 2: Load manifest to get dynamic file paths
      console.log('📋 Loading manifest...');
      const manifestResponse = await fetch(`${BASE_PATH}/mfeTailwind/mfe-manifest.json`);
      const manifest = await manifestResponse.json();
      console.log('✅ Manifest loaded:', manifest);
      
      // Step 3: Load CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = `${BASE_PATH}/mfeTailwind/assets/${manifest.css}`;
      cssLink.onload = () => console.log('✅ CSS loaded');
      cssLink.onerror = () => console.warn('⚠️ CSS loading failed');
      document.head.appendChild(cssLink);
      
      // Step 4: Load bootstrap module
      console.log('📥 Loading bootstrap module...');
      const bootstrapUrl = `${BASE_PATH}/mfeTailwind/assets/${manifest.bootstrap}`;
      
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

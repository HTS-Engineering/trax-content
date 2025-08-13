/**
 * Tailwind MFE Loader - External integration script for SSR applications
 * Handles loading, mounting, and cleanup of the Tailwind microfrontend
 */

class TailwindMFELoader {
  constructor() {
    this.mfeRoot = null;
    this.isLoaded = false;
    this.isLoading = false;
    this.containerId = 'tailwind-mfe-container';
    this.remoteEntryUrl = 'http://localhost:3002/assets/remoteEntry.js';
    
    // Bind methods to preserve context
    this.handleBeforeUnload = this.handleBeforeUnload.bind(this);
    this.handlePageHide = this.handlePageHide.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    
    // Setup cleanup listeners
    this.setupCleanupListeners();
  }

  /**
   * Configure the loader with custom options
   */
  configure(options = {}) {
    if (options.containerId) this.containerId = options.containerId;
    if (options.remoteEntryUrl) this.remoteEntryUrl = options.remoteEntryUrl;
    return this;
  }

  /**
   * Load and mount the microfrontend
   */
  async load() {
    if (this.isLoaded || this.isLoading) {
      console.log('Tailwind MFE: Already loaded or loading');
      return this.mfeRoot;
    }

    this.isLoading = true;

    try {
      console.log('Tailwind MFE: Loading remote entry...');
      
      // Load the remote entry
      await import(this.remoteEntryUrl);
      
      console.log('Tailwind MFE: Remote entry loaded, mounting...');
      
      // Import and mount the bootstrap
      const { mount } = await import('tailwind-mfe/bootstrap');
      
      // The bootstrap will auto-mount to the container
      // But we can also manually mount if needed
      const container = document.getElementById(this.containerId);
      if (container && !container.hasChildNodes()) {
        this.mfeRoot = mount(container);
      }
      
      this.isLoaded = true;
      this.isLoading = false;
      
      console.log('Tailwind MFE: Successfully loaded and mounted');
      
      // Dispatch custom event for integration tracking
      this.dispatchEvent('mfe:loaded');
      
      return this.mfeRoot;
      
    } catch (error) {
      this.isLoading = false;
      console.error('Tailwind MFE: Failed to load', error);
      
      // Show error in container if it exists
      this.showError(error.message);
      
      // Dispatch error event
      this.dispatchEvent('mfe:error', { error: error.message });
      
      throw error;
    }
  }

  /**
   * Manually unmount the microfrontend
   */
  async unload() {
    if (!this.isLoaded || !this.mfeRoot) {
      console.log('Tailwind MFE: Nothing to unload');
      return;
    }

    try {
      console.log('Tailwind MFE: Unloading...');
      
      // Import unmount function and cleanup
      const { unmount } = await import('tailwind-mfe/bootstrap');
      unmount(this.mfeRoot);
      
      // Clear container
      const container = document.getElementById(this.containerId);
      if (container) {
        container.innerHTML = '';
      }
      
      this.mfeRoot = null;
      this.isLoaded = false;
      
      console.log('Tailwind MFE: Successfully unloaded');
      
      // Dispatch unload event
      this.dispatchEvent('mfe:unloaded');
      
    } catch (error) {
      console.error('Tailwind MFE: Error during unload', error);
    }
  }

  /**
   * Reload the microfrontend
   */
  async reload() {
    await this.unload();
    return this.load();
  }

  /**
   * Setup cleanup listeners for SSR page navigation/reload
   */
  setupCleanupListeners() {
    // Handle page unload (navigation/reload in SSR)
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    
    // Handle page hide (mobile/tab switching)
    window.addEventListener('pagehide', this.handlePageHide);
    
    // Handle visibility change
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    
    // Handle popstate (back/forward navigation)
    window.addEventListener('popstate', () => {
      console.log('Tailwind MFE: Page navigation detected, cleaning up...');
      this.cleanup();
    });
  }

  /**
   * Handle before unload event
   */
  handleBeforeUnload(event) {
    console.log('Tailwind MFE: Page unloading, cleaning up...');
    this.cleanup();
  }

  /**
   * Handle page hide event
   */
  handlePageHide(event) {
    if (event.persisted) {
      console.log('Tailwind MFE: Page cached, cleaning up...');
      this.cleanup();
    }
  }

  /**
   * Handle visibility change
   */
  handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      console.log('Tailwind MFE: Page hidden, preparing for cleanup...');
      // Don't immediately cleanup on visibility change, just prepare
      this.prepareForCleanup();
    }
  }

  /**
   * Prepare for cleanup (lighter cleanup for visibility changes)
   */
  prepareForCleanup() {
    // Cancel any pending operations
    this.isLoading = false;
  }

  /**
   * Perform full cleanup
   */
  cleanup() {
    try {
      // Synchronous cleanup for immediate page unload
      if (this.mfeRoot) {
        // Try to cleanup React root synchronously if possible
        if (this.mfeRoot.unmount) {
          this.mfeRoot.unmount();
        }
        this.mfeRoot = null;
      }
      
      // Clear container
      const container = document.getElementById(this.containerId);
      if (container) {
        container.innerHTML = '';
      }
      
      // Reset state
      this.isLoaded = false;
      this.isLoading = false;
      
      // Remove event listeners to prevent memory leaks
      this.removeCleanupListeners();
      
      console.log('Tailwind MFE: Cleanup completed');
      
    } catch (error) {
      console.error('Tailwind MFE: Error during cleanup', error);
    }
  }

  /**
   * Remove cleanup listeners
   */
  removeCleanupListeners() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    window.removeEventListener('pagehide', this.handlePageHide);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  /**
   * Show error message in container
   */
  showError(message) {
    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = `
        <div style="
          padding: 20px;
          text-align: center;
          color: #ef4444;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          margin: 10px 0;
        ">
          <h3 style="margin: 0 0 10px 0; font-size: 16px;">Failed to Load Microfrontend</h3>
          <p style="margin: 0 0 10px 0; font-size: 14px;">Error: ${message}</p>
          <button 
            onclick="window.tailwindMFE.reload()" 
            style="
              background: #3b82f6;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
            "
          >
            Retry
          </button>
        </div>
      `;
    }
  }

  /**
   * Dispatch custom events for integration tracking
   */
  dispatchEvent(eventName, detail = {}) {
    const event = new CustomEvent(eventName, {
      detail: {
        loader: this,
        timestamp: Date.now(),
        ...detail
      }
    });
    window.dispatchEvent(event);
  }

  /**
   * Get current status
   */
  getStatus() {
    return {
      isLoaded: this.isLoaded,
      isLoading: this.isLoading,
      containerId: this.containerId,
      remoteEntryUrl: this.remoteEntryUrl,
      hasMfeRoot: !!this.mfeRoot
    };
  }
}

// Create global instance
window.tailwindMFE = new TailwindMFELoader();

// Auto-load when DOM is ready (for simple integration)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Only auto-load if container exists
    if (document.getElementById('tailwind-mfe-container')) {
      window.tailwindMFE.load().catch(console.error);
    }
  });
} else {
  // DOM already ready
  if (document.getElementById('tailwind-mfe-container')) {
    window.tailwindMFE.load().catch(console.error);
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TailwindMFELoader;
}

// Export for ES modules
if (typeof window !== 'undefined') {
  window.TailwindMFELoader = TailwindMFELoader;
}

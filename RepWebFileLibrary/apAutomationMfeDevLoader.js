/**
 * Loader script the Trax Base System page includes for this MFE.
 *
 * Locates itself in the DOM to derive the base URL, reads the build manifest,
 * loads the CSS and the federated bootstrap chunk, then calls mount().
 *
 * The placeholder constants below are substituted at build time by the
 * mfe-post-build plugin, from config/mfe.config.js. Under `npm run dev` this
 * file is served unsubstituted, which is harmless because the dev server mounts
 * through index.html instead.
 */

(function () {
  'use strict';

  // All five are substituted at build time by vite-plugins/mfe-post-build.js.
  // The comment form is deliberate: an identifier-shaped placeholder such as
  // `'__CONTAINER_ID__'` cannot be told apart from a real global like
  // `window.__TRAX_MFE__`, and the plugin's leftover-token guard then fires on
  // working code. This form can only ever be a placeholder, and the
  // unsubstituted file is still valid JS, which is what `npm run dev` serves.
  const CONTAINER_ID = "apAutomation-mfe";
  const SCOPE_CLASS = "apAutomation-mfe-scope";
  const BUNDLE_DIR = "apAutomation-mfe-dev";
  const FILE_NAME = "apAutomationMfeDevLoader.js";
  const INLINED_MANIFEST = {
  "version": "0.1.0-dev.local-1785346518788",
  "commit": "61b3c41",
  "branch": "fix/review-followups",
  "timestamp": "2026-07-29T17:35:18.847Z",
  "environment": "apAutomation-mfe-dev",
  "bootstrap": "__federation_expose_Mount-CrcwIEID.js",
  "css": "style-r3CrKg42.css"
};

  const LOG_PREFIX = '[' + (BUNDLE_DIR || 'mfe') + ']';

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
      console.error(LOG_PREFIX, 'could not locate own <script> tag');
      return null;
    }

    try {
      const scriptUrl = new URL(currentScript.src);
      const scriptPath = scriptUrl.pathname.replace(/\/[^/]*$/, '');
      return scriptUrl.origin + scriptPath;
    } catch (error) {
      console.error(LOG_PREFIX, 'could not derive base path:', error);
      return null;
    }
  }

  /**
   * Resolves the manifest and the directory it was found in. Assets are
   * addressed relative to that directory, not to a fixed bundle name: the two
   * layouts below put the manifest in different places, and hard-coding
   * BUNDLE_DIR made every asset 404 whenever the second one won.
   *
   * Returns `{ manifest, assetBase }`.
   */
  async function loadManifest(basePath) {
    // Two real layouts:
    //   [0] deployed builds: the loader sits beside the bundle directory
    //   [1] flat: the loader sits inside it (the in-bundle copy, and localdev)
    const candidates = [`${basePath}/${BUNDLE_DIR}`, basePath];

    if (INLINED_MANIFEST) {
      // The inlined copy says nothing about where this loader ended up, so the
      // directory still has to be probed - cheaply, with the manifest itself.
      for (const base of candidates) {
        try {
          const response = await fetch(`${base}/mfe-manifest.json`, { method: 'HEAD' });
          if (response.ok) return { manifest: INLINED_MANIFEST, assetBase: base };
        } catch {
          continue;
        }
      }
      return { manifest: INLINED_MANIFEST, assetBase: candidates[0] };
    }

    let lastError = null;

    for (const base of candidates) {
      try {
        const response = await fetch(`${base}/mfe-manifest.json`);
        if (response.ok) {
          return { manifest: await response.json(), assetBase: base };
        }
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error(`manifest not found, tried: ${candidates.join(', ')}`);
  }

  function renderFailure(message) {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    // Built as nodes rather than a template string: `message` comes from a
    // fetch/import failure and can carry a URL or a server-supplied fragment,
    // and innerHTML would run whatever markup is in it.
    container.textContent = '';

    const panel = document.createElement('div');
    panel.setAttribute('role', 'alert');
    panel.style.cssText =
      'color:#721c24;background-color:#f8d7da;border:1px solid #f5c6cb;padding:10px;border-radius:4px';

    const heading = document.createElement('h3');
    heading.textContent = 'Application Error';

    const detail = document.createElement('p');
    detail.textContent = message;

    const advice = document.createElement('p');
    advice.textContent =
      'Please try refreshing the page or contact support if the problem persists.';

    const reload = document.createElement('button');
    reload.type = 'button';
    reload.textContent = 'Reload Page';
    reload.style.cssText =
      'background:#dc3545;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer';
    reload.addEventListener('click', function () {
      window.location.reload();
    });

    panel.appendChild(heading);
    panel.appendChild(detail);
    panel.appendChild(advice);
    panel.appendChild(reload);
    container.appendChild(panel);
  }

  async function loadMFE() {
    try {
      const basePath = getBasePath() || window.location.origin;

      const container = document.getElementById(CONTAINER_ID);
      if (!container) {
        throw new Error(`container #${CONTAINER_ID} not found`);
      }

      container.classList.add(SCOPE_CLASS);

      const { manifest, assetBase } = await loadManifest(basePath);
      const assetUrl = (filename) => `${assetBase}/assets/${filename}`;

      // CSS failure is not fatal: an unstyled app beats no app.
      await new Promise((resolve) => {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = assetUrl(manifest.css);
        cssLink.onload = () => resolve(true);
        cssLink.onerror = () => {
          console.warn(LOG_PREFIX, 'stylesheet failed to load, continuing without it');
          resolve(false);
        };
        document.head.appendChild(cssLink);
      });

      const bootstrap = await import(/* @vite-ignore */ assetUrl(manifest.bootstrap));
      if (!bootstrap?.mount) {
        throw new Error('bootstrap chunk exports no mount()');
      }

      const root = await bootstrap.mount(container);

      // The host has no other handle on the running app: it never imported the
      // chunk, so `unmount` is only reachable if the loader hands it over.
      const unmount = function () {
        return bootstrap.unmount(root);
      };

      // Merged, not assigned: the bootstrap chunk has already written its build
      // metadata here, and by the documented convention CONTAINER_ID and the
      // service name are the same string - so a plain assignment silently threw
      // away the version/commit/branch a rollback check reads.
      window.__TRAX_MFE__ = window.__TRAX_MFE__ || {};
      window.__TRAX_MFE__[CONTAINER_ID] = Object.assign({}, window.__TRAX_MFE__[CONTAINER_ID], {
        bundleDir: BUNDLE_DIR,
        basePath,
        manifest,
        unmount,
      });

      console.info(LOG_PREFIX, `mounted (v${manifest.version || 'unknown'}, ${manifest.commit || 'unknown'})`);

      window.dispatchEvent(
        new CustomEvent('mfe:loaded', {
          detail: {
            container: CONTAINER_ID,
            bundleDir: BUNDLE_DIR,
            basePath,
            manifest,
            unmount,
            timestamp: new Date().toISOString(),
          },
        }),
      );

      return root;
    } catch (error) {
      console.error(LOG_PREFIX, 'failed to load:', error);

      window.dispatchEvent(
        new CustomEvent('mfe:error', {
          detail: {
            container: CONTAINER_ID,
            bundleDir: BUNDLE_DIR,
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
          },
        }),
      );

      renderFailure(error.message);
      throw error;
    }
  }

  // `loadMFE` re-throws after it has logged, dispatched `mfe:error` and drawn
  // the failure panel, so the rejection carries nothing new - but nobody awaits
  // it here, and an unhandled rejection surfaces on the HOST page, where it
  // reads as the Base System throwing. Swallowed explicitly at the call site
  // rather than by deleting the re-throw, so a future caller that does await
  // still gets the error.
  const start = () => {
    loadMFE().catch(function () {});
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();

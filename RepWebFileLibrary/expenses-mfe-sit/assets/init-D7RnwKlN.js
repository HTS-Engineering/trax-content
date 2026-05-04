const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-C9dh01Fz.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-response-mappers-i_3aI58-.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-api-CkfEvbcZ.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-CJZmLbkm.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/date-format-Dh5rGvDF.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-D1uLEIcR.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index-BZGB3DCm.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-TULtkvNU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index.es-CApEQq_T.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/configuration-DOdFh11b.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-data-Du2WjKhi.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-BsmNC0BQ.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { a as devLog, b as devWarn } from "./index-BZGB3DCm.js";
let initialized = false;
let activeStrategy = null;
async function canUseServiceWorker() {
  if (typeof window === "undefined") return false;
  if (!("serviceWorker" in navigator)) return false;
  try {
    const response = await fetch("/mockServiceWorker.js", { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
async function initializeMocking(axiosInstance) {
  if (initialized) {
    devWarn("Mocking already initialized");
    return;
  }
  if (await canUseServiceWorker()) {
    try {
      const { MSWStrategy } = await __vitePreload(async () => {
        const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-C9dh01Fz.js");
        return { MSWStrategy: MSWStrategy2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
      activeStrategy = new MSWStrategy();
      await activeStrategy.initialize();
      initialized = true;
      devLog("Mocking initialized (MSW Service Worker)");
      return;
    } catch (error) {
      devWarn("MSW initialization failed, falling back to Axios interceptor:", error);
    }
  }
  const { AxiosStrategy } = await __vitePreload(async () => {
    const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-BsmNC0BQ.js");
    return { AxiosStrategy: AxiosStrategy2 };
  }, true ? __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
  activeStrategy = new AxiosStrategy(axiosInstance);
  await activeStrategy.initialize();
  initialized = true;
  devLog("Mocking initialized (Axios interceptor)");
}
async function stopMocking() {
  if (activeStrategy) {
    await activeStrategy.stop();
    activeStrategy = null;
    initialized = false;
    devLog("Mocking stopped");
  }
}
function isMockingActive() {
  return initialized && (activeStrategy == null ? void 0 : activeStrategy.isActive()) === true;
}
export {
  initializeMocking,
  isMockingActive,
  stopMocking
};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-BsbRBXWg.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-response-mappers-DrILCC3T.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-api-BydMcbUn.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-VIrFz_yB.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-TULtkvNU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-PRbHj7CX.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/configuration-DWZWsCI4.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index-CE7gIUWB.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/use-scroll-into-view-ref-ZicIsKJr.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-data-Du2WjKhi.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-BcDG29Pf.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { a as devLog, b as devWarn } from "./index-CE7gIUWB.js";
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
        const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-BsbRBXWg.js");
        return { MSWStrategy: MSWStrategy2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url);
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
    const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-BcDG29Pf.js");
    return { AxiosStrategy: AxiosStrategy2 };
  }, true ? __vite__mapDeps([10,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url);
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

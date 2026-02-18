const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-DW5mKYf2.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-response-mappers-R6jJ0R4g.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/ExpenseFormLeftColumn-DswRjv82.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/zod-PpMdyx4R.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-VIrFz_yB.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-TULtkvNU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index.es-BigkB81S.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index-D4vrrc7u.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/Icon-BxYHdB7c.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/preload-helper-e_IRvegh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/currency-JXWfr4-r.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-Ek46IKmV.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/factory-BInrSL3y.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-B7bdIZTT.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/configuration-DJ3bBcF4.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-DKAw56vD.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/use-debounced-callback-BEaEMF-E.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/plus-CiLynJ8e.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/createLucideIcon-CWwrLivU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/mileage-trip-sections-Bp5wAoAZ.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expenses-DrZhDcIg.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/credit-card-DGksABcy.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-DUr7dvuT.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-CLF4KpVH.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/routes-C5J7GVU-.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-ClU62_Tm.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { a as devLog, b as devWarn } from "./index-D4vrrc7u.js";
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
        const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-DW5mKYf2.js");
        return { MSWStrategy: MSWStrategy2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]) : void 0, import.meta.url);
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
    const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-ClU62_Tm.js");
    return { AxiosStrategy: AxiosStrategy2 };
  }, true ? __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]) : void 0, import.meta.url);
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

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-maA3bq_O.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/ExpenseFormLeftColumn-DcKgV5GH.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/zod-PpMdyx4R.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-VIrFz_yB.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-TULtkvNU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index.es-fHErn31W.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/use-debounced-callback-B5VkIVS7.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/factory-D3SqUmAa.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-DEJx0M-h.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/cost-allocation-DRGo4_AN.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/Icon-BxYHdB7c.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/preload-helper-e_IRvegh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/currency-DF2IpVR4.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-D4GXtibc.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/configuration-DaO8U7T3.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-D4KB6dNM.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/plus-CiLynJ8e.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/createLucideIcon-CWwrLivU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-response-mappers-K4osEiqC.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-item-C9lElBqU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-BMImQo3R.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/routes-C5J7GVU-.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/mileage-trip-sections-C53x3xmd.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/credit-card-DGksABcy.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-B9sPbzGE.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-CH6UvYl6.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expenses-BLPZFCX-.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/mileage-BTs75OAc.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
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
    console.log("⚠️ Mocking already initialized");
    return;
  }
  if (await canUseServiceWorker()) {
    try {
      const { MSWStrategy } = await __vitePreload(async () => {
        const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-maA3bq_O.js");
        return { MSWStrategy: MSWStrategy2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]) : void 0, import.meta.url);
      activeStrategy = new MSWStrategy();
      await activeStrategy.initialize();
      initialized = true;
      console.log("✅ Mocking initialized (MSW Service Worker)");
      return;
    } catch (error) {
      console.warn("⚠️ MSW initialization failed, falling back to Axios interceptor:", error);
    }
  }
  const { AxiosStrategy } = await __vitePreload(async () => {
    const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-CH6UvYl6.js");
    return { AxiosStrategy: AxiosStrategy2 };
  }, true ? __vite__mapDeps([25,18,9,19,20,21,3,13,7,4,8,6,14,26,27]) : void 0, import.meta.url);
  activeStrategy = new AxiosStrategy(axiosInstance);
  await activeStrategy.initialize();
  initialized = true;
  console.log("✅ Mocking initialized (Axios interceptor)");
}
async function stopMocking() {
  if (activeStrategy) {
    await activeStrategy.stop();
    activeStrategy = null;
    initialized = false;
    console.log("✅ Mocking stopped");
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

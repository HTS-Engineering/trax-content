const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-CG-H9Ts3.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-response-mappers-DhgImaNn.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-api-DJdfwUeG.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-B1oJrOwd.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/date-format-YDPu17W4.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-DN4OVlUD.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index-vtzBEVcA.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-aCTp6CKK.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/index.es-e_EjaQiF.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/configuration-CF_T8dQy.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-data-Du2WjKhi.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-tmEzsi9X.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { _ as __vitePreload } from "./preload-helper-Bsq79q8M.js";
import { a as devLog, b as devWarn } from "./index-vtzBEVcA.js";
let initialized = false;
let activeStrategy = null;
async function initializeMocking({
  axiosInstance,
  forceMSW = false
}) {
  if (initialized) {
    devWarn("Mocking already initialized");
    return;
  }
  if (forceMSW || false) {
    try {
      const { MSWStrategy } = await __vitePreload(async () => {
        const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-CG-H9Ts3.js");
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
    const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-tmEzsi9X.js");
    return { AxiosStrategy: AxiosStrategy2 };
  }, true ? __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
  activeStrategy = new AxiosStrategy(axiosInstance);
  await activeStrategy.initialize();
  initialized = true;
  devLog("Mocking initialized (Axios interceptor)");
}
__name(initializeMocking, "initializeMocking");
async function stopMocking() {
  if (activeStrategy) {
    await activeStrategy.stop();
    activeStrategy = null;
    initialized = false;
    devLog("Mocking stopped");
  }
}
__name(stopMocking, "stopMocking");
function isMockingActive() {
  return initialized && (activeStrategy == null ? void 0 : activeStrategy.isActive()) === true;
}
__name(isMockingActive, "isMockingActive");
export {
  initializeMocking,
  isMockingActive,
  stopMocking
};

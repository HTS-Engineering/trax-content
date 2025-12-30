const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-Dc1JzMEh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/SupportingFilesSection-CTksD8zF.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/zod-B48RR00p.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-DYyjX-5O.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-TULtkvNU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-DUJjI5vT.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/Icon-31ae5cox.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/preload-helper-e_IRvegh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/cost-allocation-DRGo4_AN.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/plus-BnI4mDhe.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/config-Ccvmi0cL.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/endpoints-DxtWhZvG.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/mileage-trip-sections-D_q9aBPt.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-5qFnkZML.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/query-keys-g3E7RVOI.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/store-EQUAC0eo.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-DS_RkUtz.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/credit-card-4GDR-kWX.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/currency-09NwL3yu.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-XUmXm6Pv.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/errorSimulation-DtKiZiPZ.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-BawvpaoI.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/routes-FmtfUqYj.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
const hasServiceWorkerSupport = () => {
  return typeof window !== "undefined" && "serviceWorker" in navigator && "navigator" in window;
};
class UnifiedMockingStrategy {
  activeStrategy = null;
  isInitialized = false;
  async initialize() {
    if (this.isInitialized) {
      console.warn("Mocking strategy already initialized");
      return;
    }
    if (hasServiceWorkerSupport()) {
      try {
        const { MSWStrategy } = await __vitePreload(async () => {
          const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-Dc1JzMEh.js");
          return { MSWStrategy: MSWStrategy2 };
        }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]) : void 0, import.meta.url);
        this.activeStrategy = new MSWStrategy();
        await this.activeStrategy.initialize();
        console.log("✅ Mocking: Using MSW (Service Worker)");
      } catch (error) {
        console.warn("⚠️ Mocking: MSW failed to initialize, falling back to Axios interceptor", error);
        await this.initializeAxiosStrategy();
      }
    } else {
      console.log("🔄 Mocking: Service Worker not available, using Axios interceptor");
      await this.initializeAxiosStrategy();
    }
    this.isInitialized = true;
  }
  async initializeAxiosStrategy() {
    const { AxiosStrategy } = await __vitePreload(async () => {
      const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-BawvpaoI.js");
      return { AxiosStrategy: AxiosStrategy2 };
    }, true ? __vite__mapDeps([21,5,3,4,10,11,22,20,8]) : void 0, import.meta.url);
    this.activeStrategy = new AxiosStrategy();
    await this.activeStrategy.initialize();
    console.log("✅ Mocking: Using Axios interceptor");
  }
  async stop() {
    if (this.activeStrategy) {
      await this.activeStrategy.stop();
      this.activeStrategy = null;
      this.isInitialized = false;
      console.log("🛑 Mocking: Strategy stopped");
    }
  }
  isActive() {
    var _a;
    return ((_a = this.activeStrategy) == null ? void 0 : _a.isActive()) ?? false;
  }
  getStrategy() {
    if (!this.activeStrategy) return "none";
    return this.activeStrategy.constructor.name.replace("Strategy", "").toLowerCase();
  }
}
const mockingStrategy = new UnifiedMockingStrategy();
export {
  mockingStrategy
};

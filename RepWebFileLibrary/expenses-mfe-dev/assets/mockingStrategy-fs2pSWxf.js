const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-cH1XdUWw.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/SupportingFilesSection-x5eH3RXh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/zod-QmC9MztX.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-DCl-vMH-.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-CzdF90_e.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-SeFXieo9.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/Icon-5_58Mq6r.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/preload-helper-e_IRvegh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/cost-allocation-DRGo4_AN.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/plus-tgdzQH9h.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/config-Dtx7ka0E.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/endpoints-B5IysDN2.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-form-sections-ocH1unEc.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/MileageJustificationSection-B7iRjRa6.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-BNpCkowG.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/query-keys-CUQuTCZz.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/store-RVPnQbuG.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-zsevi8OR.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-CveEQJee.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/form-options-BKSnsJQ4.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/credit-card-CB6wVdAZ.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/mileage-trip-sections-DU8HzodE.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expenses-list-BokGhRcU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-C6nCag3o.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/routes-Hoq8D-3z.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
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
          const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-cH1XdUWw.js");
          return { MSWStrategy: MSWStrategy2 };
        }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]) : void 0, import.meta.url);
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
      const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-C6nCag3o.js");
      return { AxiosStrategy: AxiosStrategy2 };
    }, true ? __vite__mapDeps([23,5,3,4,10,11,24,22,8]) : void 0, import.meta.url);
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

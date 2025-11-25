const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/mswStrategy-CKWRqaOc.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/SupportingFilesFormSection-BzjJ0GRA.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/zod-BRdb-B2v.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/__federation_fn_import-DD1J_cWq.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/jsx-runtime-CzdF90_e.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosInstance-C-3zYJ_U.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-1GCezcmM.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/query-keys-DpYAYDxu.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/store-BA0spBdd.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/config-BXYbqO6g.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/endpoints-BX9yOQ37.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-ChGbT6q2.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/api-blHWSJam.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/Icon-DYEjfqv0.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/preload-helper-e_IRvegh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/plus-CFGTykQ-.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expense-form-sections-B0S4VHcM.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/MileageJustificationSection-BAMoq5W2.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/form-options-BKSnsJQ4.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/credit-card-J2Xp71zi.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/mileage-trip-sections-8hAt_bqU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/expenses-list-Bk695Vhj.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/axiosStrategy-CSb89Xhh.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/routes-nW3dHYkG.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
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
          const { MSWStrategy: MSWStrategy2 } = await import("./mswStrategy-CKWRqaOc.js");
          return { MSWStrategy: MSWStrategy2 };
        }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]) : void 0, import.meta.url);
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
      const { AxiosStrategy: AxiosStrategy2 } = await import("./axiosStrategy-CSb89Xhh.js");
      return { AxiosStrategy: AxiosStrategy2 };
    }, true ? __vite__mapDeps([22,5,3,4,9,10,23,21]) : void 0, import.meta.url);
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

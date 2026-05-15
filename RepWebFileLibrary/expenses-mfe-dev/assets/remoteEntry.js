var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const currentImports = {};
const exportSet = /* @__PURE__ */ new Set(["Module", "__esModule", "default", "_export_sfc"]);
let moduleMap = {
  "./mount": /* @__PURE__ */ __name(() => {
    dynamicLoadingCss(["style-BMkXb0rV.css"], false, "./mount");
    return __federation_import("./assets/__federation_expose_Mount-BecDF3ao.js").then((module) => Object.keys(module).every((item) => exportSet.has(item)) ? () => module.default : () => module);
  }, "./mount")
};
const seen = {};
const dynamicLoadingCss = /* @__PURE__ */ __name((cssFilePaths, dontAppendStylesToHead, exposeItemName) => {
  const metaUrl = import.meta.url;
  if (typeof metaUrl === "undefined") {
    console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
    return;
  }
  const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf("remoteEntry.js"));
  const base = './';
  'assets';
  cssFilePaths.forEach((cssPath) => {
    let href = "";
    const baseUrl = base || curUrl;
    if (baseUrl) {
      const trimmer = {
        trailing: /* @__PURE__ */ __name((path) => path.endsWith("/") ? path.slice(0, -1) : path, "trailing"),
        leading: /* @__PURE__ */ __name((path) => path.startsWith("/") ? path.slice(1) : path, "leading")
      };
      const isAbsoluteUrl = /* @__PURE__ */ __name((url) => url.startsWith("http") || url.startsWith("//"), "isAbsoluteUrl");
      const cleanBaseUrl = trimmer.trailing(baseUrl);
      const cleanCssPath = trimmer.leading(cssPath);
      const cleanCurUrl = trimmer.trailing(curUrl);
      if (isAbsoluteUrl(baseUrl)) {
        href = [cleanBaseUrl, cleanCssPath].filter(Boolean).join("/");
      } else {
        if (cleanCurUrl.includes(cleanBaseUrl)) {
          href = [cleanCurUrl, cleanCssPath].filter(Boolean).join("/");
        } else {
          href = [cleanCurUrl + cleanBaseUrl, cleanCssPath].filter(Boolean).join("/");
        }
      }
    } else {
      href = cssPath;
    }
    if (dontAppendStylesToHead) {
      const key = "css__expenses-mfe-dev__" + exposeItemName;
      window[key] = window[key] || [];
      window[key].push(href);
      return;
    }
    if (href in seen) return;
    seen[href] = true;
    const element = document.createElement("link");
    element.rel = "stylesheet";
    element.href = href;
    document.head.appendChild(element);
  });
}, "dynamicLoadingCss");
async function __federation_import(name) {
  currentImports[name] ??= import(name);
  return currentImports[name];
}
__name(__federation_import, "__federation_import");
const get = /* @__PURE__ */ __name((module) => {
  if (!moduleMap[module]) throw new Error("Can not find remote module " + module);
  return moduleMap[module]();
}, "get");
const init = /* @__PURE__ */ __name((shareScope) => {
  globalThis.__federation_shared__ = globalThis.__federation_shared__ || {};
  Object.entries(shareScope).forEach(([key, value]) => {
    for (const [versionKey, versionValue] of Object.entries(value)) {
      const scope = versionValue.scope || "default";
      globalThis.__federation_shared__[scope] = globalThis.__federation_shared__[scope] || {};
      const shared = globalThis.__federation_shared__[scope];
      (shared[key] = shared[key] || {})[versionKey] = versionValue;
    }
  });
}, "init");
export {
  dynamicLoadingCss,
  get,
  init
};

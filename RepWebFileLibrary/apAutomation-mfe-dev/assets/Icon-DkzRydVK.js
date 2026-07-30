var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { _ as __vitePreload } from "./preload-helper-Bsq79q8M.js";
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, d as devError } from "./index-CFVMMdzN.js";
const __variableDynamicImportRuntimeHelper = /* @__PURE__ */ __name((glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, "__variableDynamicImportRuntimeHelper");
const { useEffect, useId, useState } = await importShared("react");
const iconCache = /* @__PURE__ */ new Map();
const inFlight = /* @__PURE__ */ new Map();
async function loadIcon(name) {
  if (iconCache.has(name)) return iconCache.get(name) ?? null;
  const existing = inFlight.get(name);
  if (existing) return existing;
  const request = (async () => {
    try {
      const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../assets/icons/activity.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./activity-pNzlcXjr.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/activity.svg"), "../../assets/icons/alert-triangle.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./alert-triangle-D738mzvv.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/alert-triangle.svg"), "../../assets/icons/arrow-left.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./arrow-left-BYBIWbUB.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/arrow-left.svg"), "../../assets/icons/bell.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./bell-Bm7q2NhC.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/bell.svg"), "../../assets/icons/briefcase.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./briefcase-CQE3jsOv.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/briefcase.svg"), "../../assets/icons/check-circle.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./check-circle-DMyibZpP.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/check-circle.svg"), "../../assets/icons/check.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./check-B8sqyN2P.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/check.svg"), "../../assets/icons/chevron-down.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./chevron-down-DYa3lAct.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/chevron-down.svg"), "../../assets/icons/chevron-right.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./chevron-right-BB9ZYGqi.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/chevron-right.svg"), "../../assets/icons/clock.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./clock-DdM_m1Ym.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/clock.svg"), "../../assets/icons/close.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./close-CVf2sBdc.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/close.svg"), "../../assets/icons/copy.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./copy-D-a5YPPN.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/copy.svg"), "../../assets/icons/dollar-sign.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./dollar-sign-dN7wLHfy.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/dollar-sign.svg"), "../../assets/icons/download.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./download-DCe1CkaJ.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/download.svg"), "../../assets/icons/error-outline.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./error-outline-CCVQecVj.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/error-outline.svg"), "../../assets/icons/external-link.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./external-link-Caqn3mzx.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/external-link.svg"), "../../assets/icons/file-text.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./file-text-CGxMGAlf.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/file-text.svg"), "../../assets/icons/filter.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./filter-DR5nRiTB.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/filter.svg"), "../../assets/icons/inbox.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./inbox-BpUMbvoN.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/inbox.svg"), "../../assets/icons/info.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./info-BrMNRbND.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/info.svg"), "../../assets/icons/layers.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./layers-B7iC8v1y.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/layers.svg"), "../../assets/icons/layout-dashboard.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./layout-dashboard-CxnhJNGr.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/layout-dashboard.svg"), "../../assets/icons/link.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./link-xyzgzJJ4.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/link.svg"), "../../assets/icons/more-vertical.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./more-vertical-DftXSxPc.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/more-vertical.svg"), "../../assets/icons/panel-right.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./panel-right-CfG3vgkw.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/panel-right.svg"), "../../assets/icons/pencil.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./pencil-BBqqQ7DP.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/pencil.svg"), "../../assets/icons/plus.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./plus-CSLP15ao.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/plus.svg"), "../../assets/icons/refresh.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./refresh-CQ_aGPP2.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/refresh.svg"), "../../assets/icons/search.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./search-qXWEChJK.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/search.svg"), "../../assets/icons/server.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./server-GPWpsdYi.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/server.svg"), "../../assets/icons/settings-2.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./settings-2-LZOKKpkT.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/settings-2.svg"), "../../assets/icons/trash.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./trash-hO5OUxe_.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/trash.svg"), "../../assets/icons/trending-up.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./trending-up-CheIKPVQ.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/trending-up.svg"), "../../assets/icons/type.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./type-BuSMAX6q.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/type.svg"), "../../assets/icons/user.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./user-C8V7P1K7.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/user.svg"), "../../assets/icons/x-circle.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./x-circle-DtHhw3R_.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/x-circle.svg"), "../../assets/icons/zap.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./zap-DmNdaVqB.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/zap.svg") }), `../../assets/icons/${name}.svg`, 5);
      const content = module.default ?? module;
      iconCache.set(name, content);
      return content;
    } catch (error) {
      devError(`Icon "${name}" could not be loaded`, error);
      iconCache.set(name, null);
      return null;
    } finally {
      inFlight.delete(name);
    }
  })();
  inFlight.set(name, request);
  return request;
}
__name(loadIcon, "loadIcon");
const ID_ATTRIBUTE = /\sid="([^"]+)"/g;
const SVG_TAG = /<svg\b/;
function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
__name(escapeForRegExp, "escapeForRegExp");
function namespaceIds(svg, prefix) {
  const ids = /* @__PURE__ */ new Set();
  for (const [, id] of svg.matchAll(ID_ATTRIBUTE)) ids.add(id);
  if (ids.size === 0) return svg;
  const rename = /* @__PURE__ */ __name((id) => ids.has(id) ? `${prefix}-${id}` : id, "rename");
  let out = svg;
  for (const id of ids) {
    const escaped = escapeForRegExp(id);
    out = out.replace(new RegExp(`\\sid="${escaped}"`, "g"), ` id="${prefix}-${id}"`).replace(new RegExp(`url\\(#${escaped}\\)`, "g"), `url(#${prefix}-${id})`).replace(new RegExp(`(\\s(?:xlink:)?href)="#${escaped}"`, "g"), `$1="#${prefix}-${id}"`);
  }
  return out.replace(
    /\s(aria-labelledby|aria-describedby)="([^"]+)"/g,
    (_match, attribute, value) => ` ${attribute}="${value.split(/\s+/).map(rename).join(" ")}"`
  );
}
__name(namespaceIds, "namespaceIds");
function prepare(svg, prefix) {
  return namespaceIds(svg, prefix).replace(
    SVG_TAG,
    '<svg style="width:100%;height:100%;display:block"'
  );
}
__name(prepare, "prepare");
const WRAPPER_STYLE = {
  lineHeight: 1,
  verticalAlign: "middle",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
function Icon({ name, className = "", "aria-label": ariaLabel, loading = false }) {
  const prefix = useId().replace(/:/g, "");
  const [content, setContent] = useState(
    () => iconCache.has(name) ? iconCache.get(name) : void 0
  );
  useEffect(() => {
    if (iconCache.has(name)) {
      setContent(iconCache.get(name) ?? null);
      return;
    }
    let cancelled = false;
    setContent(void 0);
    loadIcon(name).then((loaded) => {
      if (!cancelled) setContent(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [name]);
  const labelling = ariaLabel ? { role: "img", "aria-label": ariaLabel } : { "aria-hidden": true };
  if (loading || content === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `inline-block animate-pulse rounded bg-trax-grey-100 ${className}`,
        ...labelling
      }
    );
  }
  if (content === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block ${className}`, ...labelling });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-block ${className}`,
      dangerouslySetInnerHTML: { __html: prepare(content, prefix) },
      style: WRAPPER_STYLE,
      ...labelling
    }
  );
}
__name(Icon, "Icon");
export {
  Icon as I
};

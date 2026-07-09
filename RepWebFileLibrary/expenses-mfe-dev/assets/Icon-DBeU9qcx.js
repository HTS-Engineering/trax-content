var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { _ as __vitePreload } from "./preload-helper-Bsq79q8M.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
const __variableDynamicImportRuntimeHelper = /* @__PURE__ */ __name((glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, "__variableDynamicImportRuntimeHelper");
const React = await importShared("react");
const { useEffect, useMemo, useState } = React;
const iconCache = {};
const loadingState = {};
const loadIcon = /* @__PURE__ */ __name(async (name) => {
  if (iconCache[name]) {
    return iconCache[name];
  }
  const existingPromise = loadingState[name];
  if (existingPromise) {
    return await existingPromise;
  }
  const loadPromise = (async () => {
    try {
      const svgContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../assets/icons/action.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./action-W-CKhWfr.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/action.svg"), "../../assets/icons/add.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./add-icfRePbu.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/add.svg"), "../../assets/icons/add_chart.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./add_chart-DNJo-Cir.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/add_chart.svg"), "../../assets/icons/arrow-drop-down.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./arrow-drop-down-BL-yn1g1.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/arrow-drop-down.svg"), "../../assets/icons/back.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./back-DfpfOr1w.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/back.svg"), "../../assets/icons/briefcase.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./briefcase-DD3c3s-f.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/briefcase.svg"), "../../assets/icons/calculate.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./calculate-DS43AqUd.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/calculate.svg"), "../../assets/icons/car.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./car-DwjRpG-v.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/car.svg"), "../../assets/icons/check-circle-fill.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./check-circle-fill-BVdcA3fV.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/check-circle-fill.svg"), "../../assets/icons/check-list.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./check-list-BC0xY258.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/check-list.svg"), "../../assets/icons/check.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./check-C-6kWaRG.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/check.svg"), "../../assets/icons/clipboard-warning.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./clipboard-warning-QG7vi-B5.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/clipboard-warning.svg"), "../../assets/icons/close.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./close-CQI9eD-c.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/close.svg"), "../../assets/icons/credit-card.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./credit-card-CzfCqygX.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/credit-card.svg"), "../../assets/icons/delete.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./delete-CIxmXS6N.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/delete.svg"), "../../assets/icons/directions-car.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./directions-car-DpvrFZ12.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/directions-car.svg"), "../../assets/icons/done-all.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./done-all-BONGr5L0.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/done-all.svg"), "../../assets/icons/ellipsis-vertical.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./ellipsis-vertical-BfFFFSB3.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/ellipsis-vertical.svg"), "../../assets/icons/error-outline.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./error-outline-DfZXRXSN.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/error-outline.svg"), "../../assets/icons/featured-play-list.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./featured-play-list-y6q3W8PD.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/featured-play-list.svg"), "../../assets/icons/file-download.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./file-download-L3juxhgg.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/file-download.svg"), "../../assets/icons/file-upload.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./file-upload-CzqMIJK4.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/file-upload.svg"), "../../assets/icons/icon-file-img.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./icon-file-img-BGzKl0aA.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/icon-file-img.svg"), "../../assets/icons/icon-file-pdf.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./icon-file-pdf-Ci1K-nc7.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/icon-file-pdf.svg"), "../../assets/icons/info.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./info-DxPMWh-7.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/info.svg"), "../../assets/icons/layout-dashboard.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./layout-dashboard-DxvV_nxg.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/layout-dashboard.svg"), "../../assets/icons/map.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./map-D5fdHlsA.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/map.svg"), "../../assets/icons/note-stack-add.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./note-stack-add-CjDDS7WP.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/note-stack-add.svg"), "../../assets/icons/open-in-new.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./open-in-new-tlr79Hkw.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/open-in-new.svg"), "../../assets/icons/paper-clip.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./paper-clip-ppDjgzqP.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/paper-clip.svg"), "../../assets/icons/pdf-file-green-check.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./pdf-file-green-check-DMKJZdAQ.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/pdf-file-green-check.svg"), "../../assets/icons/pencil.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./pencil-B3cnqUoc.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/pencil.svg"), "../../assets/icons/person-add-alt.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./person-add-alt-PwMIhjYU.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/person-add-alt.svg"), "../../assets/icons/receipt.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./receipt-BW5bPfyM.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/receipt.svg"), "../../assets/icons/receipt_long.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./receipt_long-7Dnx6u7m.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/receipt_long.svg"), "../../assets/icons/request-quote.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./request-quote-DTPO1WzV.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/request-quote.svg"), "../../assets/icons/route.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./route-DkyYa9w5.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/route.svg"), "../../assets/icons/space-dashboard.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./space-dashboard-CvCRyuME.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/space-dashboard.svg"), "../../assets/icons/sticky_note_2.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./sticky_note_2-EEpontN4.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/sticky_note_2.svg"), "../../assets/icons/summarize.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./summarize-f6NqYbOk.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/summarize.svg"), "../../assets/icons/sync-alt.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./sync-alt-BoWysLXo.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/sync-alt.svg"), "../../assets/icons/sync-problem.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./sync-problem-HQLZazuS.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/sync-problem.svg"), "../../assets/icons/text-line-unknown.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./text-line-unknown-T_6c8lUf.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/text-line-unknown.svg"), "../../assets/icons/text_snippet.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./text_snippet-Cz6YQlql.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/text_snippet.svg"), "../../assets/icons/textsms.svg": /* @__PURE__ */ __name(() => __vitePreload(() => import("./textsms-Dkr4K6Is.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/textsms.svg") }), `../../assets/icons/${name}.svg`, 5);
      const content = svgContent.default || svgContent;
      iconCache[name] = content;
      return content;
    } catch {
      iconCache[name] = "";
      return "";
    } finally {
      delete loadingState[name];
    }
  })();
  loadingState[name] = loadPromise;
  return loadPromise;
}, "loadIcon");
const Icon = /* @__PURE__ */ __name(({
  name,
  className = "",
  "aria-label": ariaLabel,
  loading = false,
  useCurrentColor = true
}) => {
  const [iconContent, setIconContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    let isCancelled = false;
    const loadIconContent = /* @__PURE__ */ __name(async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const content = await loadIcon(name);
        if (!isCancelled) {
          setIconContent(content);
          setHasError(!content);
        }
      } catch {
        if (!isCancelled) {
          setHasError(true);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }, "loadIconContent");
    loadIconContent();
    return () => {
      isCancelled = true;
    };
  }, [name]);
  const processedSvg = useMemo(() => {
    if (!iconContent || hasError) return "";
    const uniqueId = `icon-${name}-${Math.random().toString(36).substring(2, 11)}`;
    const processed = iconContent.replace("<svg", '<svg style="width: 100%; height: 100%; display: block;"').replace(/id="([^"]+)"/g, `id="${uniqueId}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${uniqueId}-$1)`);
    if (!useCurrentColor) {
      return processed;
    }
    return processed;
  }, [iconContent, hasError, useCurrentColor, name]);
  if (loading || isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `inline-block animate-pulse bg-gray-200 rounded ${className}`,
        "aria-label": ariaLabel || `Loading ${name} icon`
      }
    );
  }
  if (hasError || !iconContent) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `inline-flex items-center justify-center bg-gray-100 text-gray-400 text-xs rounded ${className}`,
        "aria-label": ariaLabel || `${name} icon not found`,
        title: `Icon "${name}" not found`,
        children: "?"
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-block ${className}`,
      dangerouslySetInnerHTML: { __html: processedSvg },
      "aria-label": ariaLabel || `${name} icon`,
      role: "img",
      style: {
        lineHeight: 1,
        verticalAlign: "middle",
        // Ensure SVG fills the container properly
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }
  );
}, "Icon");
export {
  Icon as I
};

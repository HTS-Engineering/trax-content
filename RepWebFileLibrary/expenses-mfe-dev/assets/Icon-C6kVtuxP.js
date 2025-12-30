import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
const React = await importShared("react");
const { useEffect, useMemo, useState } = React;
const iconCache = {};
const loadingState = {};
const loadIcon = async (name) => {
  if (iconCache[name]) {
    return iconCache[name];
  }
  const existingPromise = loadingState[name];
  if (existingPromise) {
    return await existingPromise;
  }
  const loadPromise = (async () => {
    try {
      const svgContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../assets/icons/action.svg": () => __vitePreload(() => import("./action-W-CKhWfr.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/add_chart.svg": () => __vitePreload(() => import("./add_chart-DNJo-Cir.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/check-circle-fill.svg": () => __vitePreload(() => import("./check-circle-fill-BVdcA3fV.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/credit-card.svg": () => __vitePreload(() => import("./credit-card-CzfCqygX.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/delete.svg": () => __vitePreload(() => import("./delete-CIxmXS6N.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/directions-car.svg": () => __vitePreload(() => import("./directions-car-DpvrFZ12.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/error-outline.svg": () => __vitePreload(() => import("./error-outline-DfZXRXSN.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/icon-file-img.svg": () => __vitePreload(() => import("./icon-file-img-BGzKl0aA.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/icon-file-pdf.svg": () => __vitePreload(() => import("./icon-file-pdf-Ci1K-nc7.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/map.svg": () => __vitePreload(() => import("./map-D5fdHlsA.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/open-in-new.svg": () => __vitePreload(() => import("./open-in-new-tlr79Hkw.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/paper-clip.svg": () => __vitePreload(() => import("./paper-clip-ppDjgzqP.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/pdf-file-green-check.svg": () => __vitePreload(() => import("./pdf-file-green-check-DMKJZdAQ.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/receipt.svg": () => __vitePreload(() => import("./receipt-BW5bPfyM.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/receipt_long.svg": () => __vitePreload(() => import("./receipt_long-7Dnx6u7m.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/route.svg": () => __vitePreload(() => import("./route-DkyYa9w5.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/sticky_note_2.svg": () => __vitePreload(() => import("./sticky_note_2-EEpontN4.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/summarize.svg": () => __vitePreload(() => import("./summarize-f6NqYbOk.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/text-line-unknown.svg": () => __vitePreload(() => import("./text-line-unknown-T_6c8lUf.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/text_snippet.svg": () => __vitePreload(() => import("./text_snippet-Cz6YQlql.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/textsms.svg": () => __vitePreload(() => import("./textsms-Dkr4K6Is.js"), true ? [] : void 0, import.meta.url) }), `../../assets/icons/${name}.svg`, 5);
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
};
const Icon = ({
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
    const loadIconContent = async () => {
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
    };
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
};
export {
  Icon as I
};

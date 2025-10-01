import { importShared } from "./__federation_fn_import-CFnudcB9.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-DLKWXVrv.js";
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
const ICON_NAMES = [
  "business_center",
  "icon-file-pdf",
  "money",
  "open_in_new",
  "summarize",
  "text_line_unknown",
  "textsms"
];
const ICON_METADATA = {
  generatedAt: "2025-10-01T03:03:43.254Z"
};
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
const React$1 = await importShared("react");
const { useEffect, useMemo: useMemo$1, useState: useState$1 } = React$1;
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
      const svgContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../assets/icons/business_center.svg": () => __vitePreload(() => import("./business_center-BmXtYs3i.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/icon-file-pdf.svg": () => __vitePreload(() => import("./icon-file-pdf-Ci1K-nc7.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/money.svg": () => __vitePreload(() => import("./money-BlUcAl_2.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/open_in_new.svg": () => __vitePreload(() => import("./open_in_new-C_nU4sIe.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/summarize.svg": () => __vitePreload(() => import("./summarize-BGDGgvzK.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/text_line_unknown.svg": () => __vitePreload(() => import("./text_line_unknown-DIon-vxW.js"), true ? [] : void 0, import.meta.url), "../../assets/icons/textsms.svg": () => __vitePreload(() => import("./textsms-Dl-rTF30.js"), true ? [] : void 0, import.meta.url) }), `../../assets/icons/${name}.svg`, 5);
      const content = svgContent.default || svgContent;
      iconCache[name] = content;
      return content;
    } catch (error) {
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
  const [iconContent, setIconContent] = useState$1("");
  const [isLoading, setIsLoading] = useState$1(true);
  const [hasError, setHasError] = useState$1(false);
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
  const processedSvg = useMemo$1(() => {
    if (!iconContent || hasError) return "";
    const uniqueId = `icon-${name}-${Math.random().toString(36).substring(2, 11)}`;
    let processed = iconContent.replace("<svg", '<svg style="width: 100%; height: 100%; display: block;"').replace(/id="([^"]+)"/g, `id="${uniqueId}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${uniqueId}-$1)`);
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
const React = await importShared("react");
const { useState, useMemo } = React;
const IconCard = ({ iconName, className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            name: iconName,
            className: `size-10 ${className}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-exp-grey-600 mb-1", children: iconName }) })
      ] })
    }
  );
};
const IconsTestingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allIcons = useMemo(() => [...ICON_NAMES], []);
  const filteredIcons = useMemo(() => {
    return allIcons.filter(
      (iconName) => iconName.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.localeCompare(b));
  }, [allIcons, searchTerm]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Icons Testing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Browse and test all available icons in the application. Click any icon to copy its usage code." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search icons...",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500", children: [
        "Showing ",
        filteredIcons.length,
        " of ",
        allIcons.length,
        " icons"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-400", children: [
        "Auto-generated from src/shared/assets/icons/ • Generated: ",
        new Date(ICON_METADATA.generatedAt).toLocaleString()
      ] })
    ] }),
    filteredIcons.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-10", children: filteredIcons.map((iconName) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconCard,
      {
        iconName,
        className: "text-gray-400"
      },
      iconName
    )) })
  ] });
};
export {
  IconsTestingPage as default
};

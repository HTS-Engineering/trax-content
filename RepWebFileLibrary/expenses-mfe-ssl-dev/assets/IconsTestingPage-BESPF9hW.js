import { importShared } from "./__federation_fn_import-DCl-vMH-.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { I as Icon } from "./Icon-5_58Mq6r.js";
const ICON_NAMES = [
  "action",
  "add_chart",
  "check-circle-fill",
  "credit-card",
  "delete",
  "directions-car",
  "error-outline",
  "icon-file-img",
  "icon-file-pdf",
  "map",
  "open-in-new",
  "paper-clip",
  "pdf-file-green-check",
  "receipt",
  "receipt_long",
  "route",
  "sticky_note_2",
  "summarize",
  "text-line-unknown",
  "text_snippet",
  "textsms"
];
const ICON_METADATA = {
  generatedAt: "2025-12-16T05:39:46.479Z"
};
const React = await importShared("react");
const { useMemo, useState } = React;
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

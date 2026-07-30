var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, h } from "./index-CFVMMdzN.js";
const PageHeader = /* @__PURE__ */ __name(({
  title,
  description,
  above,
  badge,
  actions,
  className
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: h("flex flex-col gap-3", className), children: [
  above,
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "truncate text-xl font-semibold text-trax-neutral-900", children: title }),
        badge
      ] }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-2xl text-sm text-trax-grey-600", children: description })
    ] }),
    actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })
  ] })
] }), "PageHeader");
export {
  PageHeader as P
};

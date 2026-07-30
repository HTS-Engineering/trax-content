var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, h } from "./index-CFVMMdzN.js";
const VALUE_TONE = {
  normal: "text-trax-neutral-900",
  warning: "text-trax-yellow-800",
  danger: "text-trax-red-600"
};
const KeyValueList = /* @__PURE__ */ __name(({ items, columns = 1, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "dl",
  {
    className: h(
      "grid gap-x-6 gap-y-3 text-sm",
      columns === 2 ? "sm:grid-cols-2" : "grid-cols-1",
      className
    ),
    children: items.map(({ label, value, tone = "normal", mono }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs font-medium tracking-wide text-trax-neutral-100 uppercase", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: h("font-medium", VALUE_TONE[tone], mono && "font-mono break-all"), children: value })
    ] }, label))
  }
), "KeyValueList");
export {
  KeyValueList as K
};

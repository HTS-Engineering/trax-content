var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { F as FormTypeId } from "./TaxTypeSearchSelect-BWWNgvpC.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { f as Mt, E as Et, P as Pt } from "./configuration-CaBH14y1.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
import { E as ETL_ERROR_MESSAGE } from "./constants-D3EhCWcC.js";
const getExpenseTypeBadgeColor = /* @__PURE__ */ __name((formTypeId) => {
  switch (formTypeId) {
    case FormTypeId.MILEAGE:
      return {
        bgColor: "bg-exp-yellow-100",
        textColor: "text-exp-yellow-800"
      };
    case FormTypeId.ENTERTAINMENT:
      return {
        bgColor: "bg-exp-green-100",
        textColor: "text-exp-green-800"
      };
    case FormTypeId.STANDARD:
    default:
      return {
        bgColor: "bg-exp-primary-blue-50",
        textColor: "text-exp-primary-blue-600"
      };
  }
}, "getExpenseTypeBadgeColor");
const getExpenseTypeBadgeConfig = /* @__PURE__ */ __name(({ formTypeId, label }) => {
  return {
    ...getExpenseTypeBadgeColor(formTypeId),
    label
  };
}, "getExpenseTypeBadgeConfig");
const EtlErrorIndicator = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "aria-label": ETL_ERROR_MESSAGE,
      className: "inline-flex items-center justify-center rounded text-exp-yellow-y-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sync-problem", className: "size-5" })
    }
  ) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Pt,
    {
      side: "bottom",
      align: "end",
      size: "sm",
      className: "max-w-48 rounded-lg border-none bg-exp-yellow-100 p-2 text-xs font-medium leading-[1.4] text-exp-yellow-800",
      arrowClassName: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] border-none fill-exp-yellow-100 bg-exp-yellow-100",
      children: ETL_ERROR_MESSAGE
    }
  )
] }) }), "EtlErrorIndicator");
export {
  EtlErrorIndicator as E,
  getExpenseTypeBadgeConfig as g
};

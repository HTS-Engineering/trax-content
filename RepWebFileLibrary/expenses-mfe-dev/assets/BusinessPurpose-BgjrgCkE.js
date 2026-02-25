import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { B as BUSINESS_PURPOSE_MESSAGES, c as BusinessPurposeTable } from "./MileageTypeTable-DNkQadBO.js";
import "./axiosInstance-Dp1zAOAB.js";
import "./index-CE7gIUWB.js";
import "./expense-api-8-6W2Gtz.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
const BusinessPurpose = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "briefcase", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: BUSINESS_PURPOSE_MESSAGES.PAGE_TITLE }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: BUSINESS_PURPOSE_MESSAGES.PAGE_DESCRIPTION })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessPurposeTable, {}) })
  ] });
};
export {
  BusinessPurpose as default
};

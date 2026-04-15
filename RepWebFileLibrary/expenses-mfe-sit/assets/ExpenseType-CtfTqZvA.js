import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { E as EXPENSE_TYPE_MESSAGES, a as ExpenseTypeTable } from "./MileageTypeTable-Cts8mO2j.js";
import "./axiosInstance-CEIQAuKQ.js";
import "./index-BZGB3DCm.js";
import "./expense-api-Dp6Itv45.js";
import "./index.es-BcmpdPPF.js";
import { I as Icon } from "./Icon-DZapo79l.js";
const ExpenseType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "layout-dashboard", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: EXPENSE_TYPE_MESSAGES.PAGE_TITLE }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: EXPENSE_TYPE_MESSAGES.PAGE_DESCRIPTION })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTypeTable, {}) })
  ] });
};
export {
  ExpenseType as default
};

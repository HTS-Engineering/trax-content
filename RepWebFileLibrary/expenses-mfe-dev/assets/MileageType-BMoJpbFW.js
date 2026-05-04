import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { M as MILEAGE_TYPE_MESSAGES, b as MileageTypeTable } from "./MileageTypeTable-B04_9Zdo.js";
import "./axiosInstance-DyMZFiGB.js";
import "./index-DGIiGjWN.js";
import "./expense-api-E_z7Shit.js";
import "./date-format-oMF6p_ER.js";
import "./index.es-CeB-gwY0.js";
import { I as Icon } from "./Icon-08JP3B1K.js";
const MileageType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "car", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: MILEAGE_TYPE_MESSAGES.PAGE_TITLE }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: MILEAGE_TYPE_MESSAGES.PAGE_DESCRIPTION })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MileageTypeTable, {}) })
  ] });
};
export {
  MileageType as default
};

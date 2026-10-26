var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { v as jsxRuntimeExports, a8 as lo, bT as STATUS_BADGE_CONFIG } from "./__federation_expose_Mount-DFVe_XhY.js";
const ExpenseStatusBadge = /* @__PURE__ */ __name(({ status, className = "" }) => {
  const config = STATUS_BADGE_CONFIG[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    lo,
    {
      variant: "outline",
      className: `rounded-20! ${config.bgColor} ${config.textColor} ${className}`,
      children: config.label
    }
  );
}, "ExpenseStatusBadge");
export {
  ExpenseStatusBadge as E
};

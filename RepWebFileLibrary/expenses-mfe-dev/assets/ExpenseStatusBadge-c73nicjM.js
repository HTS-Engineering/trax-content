var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, v as jr, by as STATUS_BADGE_CONFIG } from "./queryClient-0Aid_vzr.js";
const ExpenseStatusBadge = /* @__PURE__ */ __name(({ status, className = "" }) => {
  const config = STATUS_BADGE_CONFIG[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    jr,
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

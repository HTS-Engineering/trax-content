var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { a5 as parseExpenseStatus, v as jsxRuntimeExports, bR as getExpenseStatusLabel, ab as lo, cQ as STATUS_BADGE_CONFIG } from "./__federation_expose_Mount-rgEhXzD1.js";
const ExpenseStatusBadge = /* @__PURE__ */ __name(({ status, className = "" }) => {
  const knownStatus = parseExpenseStatus(status);
  if (!knownStatus) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-normal text-exp-grey-800 ${className}`, children: getExpenseStatusLabel(status) });
  }
  const config = STATUS_BADGE_CONFIG[knownStatus];
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

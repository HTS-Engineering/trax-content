var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { s as getExpenseActionSubtitle, i as isMileageTripData, e as isMileagePeriodData } from "./CostAllocationSection-CC7EWCqn.js";
import { x as isMileageExpense, j as formatAmountWithCurrency, a7 as getExpenseItemAmount, s as isExpenseItemSubmitted, H as formatExpensePeriod, w as isRegularExpense } from "./use-scroll-into-view-ref-DRd2DuRO.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { l as os, m as ss, p as ls, Y as Yn } from "./configuration-CXYlvGz8.js";
const MISSING_VALUE_INDICATOR = "-";
function buildTitleSuffix(expenseItem) {
  if (isMileageExpense(expenseItem)) {
    if (isMileageTripData(expenseItem.data)) {
      const location = expenseItem.data.toLocation || MISSING_VALUE_INDICATOR;
      return `Mileage (${location})`;
    }
    if (isMileagePeriodData(expenseItem.data)) {
      const period = formatExpensePeriod(expenseItem.data.expensePeriod);
      return `Mileage (${period || MISSING_VALUE_INDICATOR})`;
    }
    return "Mileage";
  }
  if (isRegularExpense(expenseItem)) {
    const vendor = expenseItem.data.vendor;
    return vendor && vendor !== MISSING_VALUE_INDICATOR ? vendor : "";
  }
  return "";
}
__name(buildTitleSuffix, "buildTitleSuffix");
function buildHeaderFromExpenseItem(expenseItem) {
  var _a;
  const title = expenseItem.employeeFullName || "Expense Details";
  const titleSuffix = buildTitleSuffix(expenseItem);
  const amount = isMileageExpense(expenseItem) ? "" : formatAmountWithCurrency(getExpenseItemAmount(expenseItem), (_a = expenseItem.data.totalCurrency) == null ? void 0 : _a.code);
  const status = expenseItem.status;
  const subtitle = isExpenseItemSubmitted(expenseItem) ? getExpenseActionSubtitle(expenseItem) : "";
  return {
    title,
    titleSuffix,
    amount,
    status,
    subtitle
  };
}
__name(buildHeaderFromExpenseItem, "buildHeaderFromExpenseItem");
const ExpenseDialogHeader = /* @__PURE__ */ __name(({
  header,
  historyLog,
  mode
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(os, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: header ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ss, { className: "text-exp-neutral-900 text-xl font-bold flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ls,
        {
          variant: "light",
          size: "sm",
          maxWidth: 320,
          className: "text-exp-neutral-900 text-xl font-bold",
          children: header.title
        }
      ) }),
      header.titleSuffix && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ls,
        {
          variant: "light",
          size: "sm",
          maxWidth: 320,
          className: "text-base font-medium text-exp-neutral-900",
          children: header.titleSuffix
        }
      ),
      header.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
        "(",
        header.amount,
        ")"
      ] }),
      header.status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: historyLog })
    ] }),
    mode === "preview" && header.subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: header.subtitle }) : null
  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 h-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5 text-exp-primary-blue-600" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading expense details..." })
  ] }) });
}, "ExpenseDialogHeader");
export {
  ExpenseDialogHeader as E,
  buildHeaderFromExpenseItem as b
};

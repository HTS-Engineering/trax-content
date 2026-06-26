var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { e as getExpenseActionSubtitle, i as isMileageTripData, a as isMileagePeriodData } from "./http-errors-D-7DCEFK.js";
import { x as isMileageExpense, k as formatAmountWithCurrency, aJ as getExpenseItemAmount, s as isExpenseItemSubmitted, W as formatExpensePeriod, w as isRegularExpense } from "./use-scroll-into-view-ref-C9Kl5FyD.js";
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
function getExpenseErrorMessage(error) {
  const code = error == null ? void 0 : error.code;
  if (code === "404") {
    return "Expense form could not be found.";
  }
  if (code === "403") {
    return "You do not have permission to view this expense form.";
  }
  return "Failed to load expense form. Please check your connection and try again.";
}
__name(getExpenseErrorMessage, "getExpenseErrorMessage");
export {
  buildHeaderFromExpenseItem as b,
  getExpenseErrorMessage as g
};

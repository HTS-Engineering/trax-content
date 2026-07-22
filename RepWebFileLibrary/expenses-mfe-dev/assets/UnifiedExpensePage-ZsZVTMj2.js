var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { Z as Zs, l as ls } from "./configuration-CaBH14y1.js";
import { E as ExpensesList } from "./ExpensesList-BxKT3THQ.js";
import { e as useNavigate, d as useLocation, m as useParams, t as useSearchParams, w as useNavigateBack, v as generatePath, a as RoutePaths } from "./formatters-Dvm414Po.js";
import { j as ExpenseItemType, b as getExpenseErrorMessage, k as useExpenseItemForm, f as ExpenseFormHistoryLog, h as EtlErrorBanner, E as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, d as isMileagePeriodData, e as MileagePeriodPreview } from "./CostAllocationSection-C8xQU--T.js";
import { i as isExpenseItemSubmitted, b as isRegularExpense, c as isMileageExpense } from "./TaxTypeSearchSelect-BWWNgvpC.js";
import { b as buildExpenseItemFormDialogProps, F as FormPageDialog, E as ExpenseItemFormBody } from "./FormPageDialog-D3oCcHvk.js";
import "./Icon-DBeU9qcx.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-CGQZd07D.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
const { useCallback } = await importShared("react");
const VALID_EXPENSE_TYPES = /* @__PURE__ */ new Set([
  ExpenseItemType.Expense,
  ExpenseItemType.MileageTrip,
  ExpenseItemType.MileagePeriod
]);
function parseExpenseTypeFromQuery(typeParam) {
  if (typeParam && VALID_EXPENSE_TYPES.has(typeParam)) {
    return typeParam;
  }
  return ExpenseItemType.Expense;
}
__name(parseExpenseTypeFromQuery, "parseExpenseTypeFromQuery");
function useUnifiedExpensePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { navigateBack } = useNavigateBack();
  const itemId = !id || id === "new" ? null : id;
  const defaultItemType = parseExpenseTypeFromQuery(searchParams.get("type"));
  const onDraftCreated = useCallback(
    (draftId, itemType) => {
      const path = generatePath(RoutePaths.ExpensesId, { id: draftId });
      const url = itemType === ExpenseItemType.Expense ? path : `${path}?type=${itemType}`;
      navigate(url, { replace: true, state: location.state });
    },
    [navigate, location.state]
  );
  const onLoadError = useCallback(
    (error) => {
      const state = location.state;
      if (state == null ? void 0 : state.returnUrl) {
        Zs.error(getExpenseErrorMessage(error), { duration: 5e3 });
        navigate(state.returnUrl, { replace: true });
        return;
      }
      navigate(RoutePaths.ExpensesNew, { replace: true });
    },
    [navigate, location.state]
  );
  return useExpenseItemForm({
    itemId,
    defaultItemType,
    onExit: navigateBack,
    onDraftCreated,
    onLoadError
  });
}
__name(useUnifiedExpensePage, "useUnifiedExpensePage");
const UnifiedExpensePage = /* @__PURE__ */ __name(() => {
  const pageState = useUnifiedExpensePage();
  const {
    mode,
    isLoading,
    expenseItem,
    title,
    titleSuffix,
    amount,
    status,
    headerSubtitle,
    handleOpenChange
  } = pageState;
  const { footer, deleteDialog } = buildExpenseItemFormDialogProps(pageState);
  const statusBadge = (() => {
    if (mode === "preview" && expenseItem && isExpenseItemSubmitted(expenseItem)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormHistoryLog, { expenseFormId: Number(expenseItem.id) });
    }
    return status ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status }) : void 0;
  })();
  const renderTitleSuffix = /* @__PURE__ */ __name(() => {
    if (!titleSuffix) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ls,
      {
        variant: "light",
        size: "sm",
        maxWidth: 320,
        className: "text-base font-medium text-exp-neutral-900",
        children: titleSuffix
      }
    );
  }, "renderTitleSuffix");
  const renderContent = /* @__PURE__ */ __name(() => {
    if (mode === "preview" && expenseItem && isExpenseItemSubmitted(expenseItem)) {
      if (isRegularExpense(expenseItem)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensePreview, { expense: expenseItem });
      }
      if (isMileageExpense(expenseItem)) {
        if (isMileageTripData(expenseItem.data)) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            MileageTripPreview,
            {
              mileage: {
                ...expenseItem,
                data: expenseItem.data
              }
            }
          );
        }
        if (isMileagePeriodData(expenseItem.data)) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            MileagePeriodPreview,
            {
              mileage: {
                ...expenseItem,
                data: expenseItem.data
              }
            }
          );
        }
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseItemFormBody, { result: pageState });
  }, "renderContent");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormPageDialog,
    {
      header: {
        title,
        titleSuffix: renderTitleSuffix(),
        amount,
        statusBadge,
        subtitle: headerSubtitle
      },
      footer,
      deleteDialog,
      isLoading,
      onOpenChange: handleOpenChange,
      renderContent,
      backgroundContent: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
      banner: mode === "preview" && expenseItem && isExpenseItemSubmitted(expenseItem) && expenseItem.hasEtlError ? /* @__PURE__ */ jsxRuntimeExports.jsx(EtlErrorBanner, {}) : void 0
    }
  );
}, "UnifiedExpensePage");
export {
  UnifiedExpensePage as default
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { C as useNavigate, x as useLocation, ae as useParams, w as useSearchParams, af as useNavigateBack, G as generatePath, a as RoutePaths, ak as devError, ah as isExpenseItemSubmitted, j as jsxRuntimeExports, au as isSubmittedPreviewRenderable, ao as isRegularExpense, ap as isMileageExpense, ax as us } from "./queryClient-3qLEUwRX.js";
import { E as ExpensesList } from "./ExpensesList-B7WOqPXl.js";
import { g as ExpenseItemType, h as useExpenseItemForm, e as ExpenseFormHistoryLog, f as EtlErrorBanner, P as PreviewLoadError, E as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, b as isMileagePeriodData, d as MileagePeriodPreview } from "./CostAllocationSection-DFm5P47r.js";
import { b as buildExpenseItemFormDialogProps, F as FormPageDialog, E as ExpenseItemFormBody } from "./FormPageDialog-Br-UFD0S.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-DhIpiKCF.js";
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
      devError("Failed to load expense:", error);
      const state = location.state;
      navigate((state == null ? void 0 : state.returnUrl) ?? RoutePaths.ExpensesNew, { replace: true });
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
      us,
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
      if (!isSubmittedPreviewRenderable(expenseItem)) return /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewLoadError, {});
      if (isRegularExpense(expenseItem)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensePreview, { expense: expenseItem, showTaxWarning: true });
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

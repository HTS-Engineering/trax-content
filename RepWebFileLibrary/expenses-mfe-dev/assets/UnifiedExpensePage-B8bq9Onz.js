var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ah as useQueryClient, k as useCompanyStore, ai as useMutation, q as queryKeys, aj as Qs, p as apiClient, o as EXPENSE_ENDPOINTS, ak as classifyError, al as AppError, u as useJWTStore, am as canRecallExpenseItem, C as useNavigate, x as useLocation, ae as useParams, w as useSearchParams, af as useNavigateBack, G as generatePath, a as RoutePaths, an as devError, ao as isExpenseItemSubmitted, j as jsxRuntimeExports, ap as isSubmittedPreviewRenderable, aq as isRegularExpense, ar as isMileageExpense, as as us } from "./queryClient-1dC5FT_E.js";
import { E as ExpensesList } from "./ExpensesList-D087c1j4.js";
import { E as ExpenseItemType, u as useExpenseItemForm, a as ExpenseFormHistoryLog, b as EtlErrorBanner, P as PreviewLoadError, c as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, d as isMileagePeriodData, e as MileagePeriodPreview } from "./CostAllocationSection-DUvxZ3TJ.js";
import { b as buildExpenseItemFormDialogProps, F as FormPageDialog, E as ExpenseItemFormBody } from "./FormPageDialog-Pyohat6F.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-DKoVbbOb.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
const _RecallRefusedError = class _RecallRefusedError extends AppError {
};
__name(_RecallRefusedError, "RecallRefusedError");
let RecallRefusedError = _RecallRefusedError;
const RECALL_REFUSED_MESSAGE = "This expense can no longer be recalled.";
const useRecallExpense = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    meta: { errorCopy: { fallback: "Could not recall this expense. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async ({ expenseId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      try {
        await apiClient.post(EXPENSE_ENDPOINTS.RECALL.build({ tenant: company, id: expenseId }));
      } catch (error) {
        if (classifyError(error).kind === "badRequest") throw new RecallRefusedError(RECALL_REFUSED_MESSAGE);
        throw error;
      }
      return { expenseId };
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(async (_data, { expenseId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.approvalsList.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseHistory.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.cardholderTransactions.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.transactions.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.bankStatements.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.companyTransactions.all() });
      Qs.success("Expense recalled", { duration: 3e3 });
      await queryClient.invalidateQueries({ queryKey: queryKeys.expenseItem.detail(expenseId) });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name(async (error, { expenseId }) => {
      if (!(error instanceof RecallRefusedError)) return;
      await queryClient.invalidateQueries({ queryKey: queryKeys.expenseItem.detail(expenseId) });
    }, "onError")
  });
}, "useRecallExpense");
function useExpenseItemRecall(expenseItem) {
  const currentUserId = useJWTStore((state) => {
    var _a;
    return ((_a = state.payload) == null ? void 0 : _a.oid) ?? null;
  });
  const { mutate, isPending } = useRecallExpense();
  if (!expenseItem || !canRecallExpenseItem(expenseItem, currentUserId)) return null;
  const { id } = expenseItem;
  return { isRecalling: isPending, onRecall: /* @__PURE__ */ __name(() => mutate({ expenseId: id }), "onRecall") };
}
__name(useExpenseItemRecall, "useExpenseItemRecall");
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
  const recall = useExpenseItemRecall(expenseItem);
  const { footer, deleteDialog } = buildExpenseItemFormDialogProps(pageState, { recall });
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

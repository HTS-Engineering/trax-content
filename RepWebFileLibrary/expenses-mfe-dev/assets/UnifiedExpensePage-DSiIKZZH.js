var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ah as useQueryClient, k as useCompanyStore, ai as useMutation, q as queryKeys, aj as Qs, p as apiClient, o as EXPENSE_ENDPOINTS, ak as classifyError, al as AppError, u as useJWTStore, am as getRecallIntent, an as isMileageExpense, C as useNavigate, x as useLocation, ae as useParams, w as useSearchParams, af as useNavigateBack, G as generatePath, a as RoutePaths, ao as devError, ap as isExpenseItemSubmitted, j as jsxRuntimeExports, aq as ExpenseFormHistoryLog, ar as ExpenseFormStatus, as as isSubmittedPreviewRenderable, at as isRegularExpense, au as us } from "./queryClient-0Aid_vzr.js";
import { E as ExpensesList } from "./ExpensesList-CZVkxm8V.js";
import { c as clearDraftEdited, E as ExpenseItemType, u as useExpenseItemForm, a as EtlErrorBanner, P as PreviewLoadError, b as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, d as isMileagePeriodData, e as MileagePeriodPreview } from "./CostAllocationSection-9v3dHwyF.js";
import { b as buildExpenseItemFormDialogProps, F as FormPageDialog, E as ExpenseItemFormBody } from "./FormPageDialog-DHPoTRHM.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-c73nicjM.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
const _RecallRefusedError = class _RecallRefusedError extends AppError {
};
__name(_RecallRefusedError, "RecallRefusedError");
let RecallRefusedError = _RecallRefusedError;
function copyFor(intent, subject) {
  const name = subject === "mileage" ? "mileage claim" : "expense";
  const title = subject === "mileage" ? "Mileage claim" : "Expense";
  if (intent === "recall") {
    return {
      refused: `This ${name} can no longer be recalled.`,
      failed: `Could not recall this ${name}. Please try again.`,
      success: `${title} recalled`
    };
  }
  return {
    refused: `This ${name} can no longer be edited.`,
    failed: `Could not reopen this ${name} for editing. Please try again.`,
    success: `${title} reopened for editing`
  };
}
__name(copyFor, "copyFor");
const useRecallExpense = /* @__PURE__ */ __name(({ intent, subject }) => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const copy = copyFor(intent, subject);
  return useMutation({
    meta: { errorCopy: { fallback: copy.failed } },
    mutationFn: /* @__PURE__ */ __name(async ({ expenseId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      try {
        await apiClient.post(EXPENSE_ENDPOINTS.RECALL.build({ tenant: company, id: expenseId }));
      } catch (error) {
        if (classifyError(error).kind === "badRequest") throw new RecallRefusedError(copy.refused);
        throw error;
      }
      return { expenseId };
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(async (_data, { expenseId }) => {
      clearDraftEdited(expenseId);
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.approvalsList.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseHistory.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.cardholderTransactions.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.transactions.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.bankStatements.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.companyTransactions.all() });
      Qs.success(copy.success, { duration: 3e3 });
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
  const intent = expenseItem ? getRecallIntent(expenseItem, currentUserId) : null;
  const subject = expenseItem && isMileageExpense(expenseItem) ? "mileage" : "expense";
  const { mutate, isPending } = useRecallExpense({ intent: intent ?? "recall", subject });
  if (!expenseItem || !intent) return null;
  const { id } = expenseItem;
  return { intent, isRecalling: isPending, onRecall: /* @__PURE__ */ __name(() => mutate({ expenseId: id }), "onRecall") };
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
    sentBackFrom,
    companyShortName,
    handleOpenChange
  } = pageState;
  const recall = useExpenseItemRecall(expenseItem);
  const { footer, deleteDialog } = buildExpenseItemFormDialogProps(pageState, { recall });
  const statusBadge = (() => {
    if (mode === "preview" && expenseItem && isExpenseItemSubmitted(expenseItem)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExpenseFormHistoryLog,
        {
          expenseFormId: Number(expenseItem.id),
          companyShortName
        }
      );
    }
    if (mode === "draft" && expenseItem && sentBackFrom) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExpenseFormHistoryLog,
        {
          expenseFormId: Number(expenseItem.id),
          companyShortName,
          status: ExpenseFormStatus.Draft
        }
      );
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

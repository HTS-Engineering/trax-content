var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { o as oi, r as rs, l as os, m as ss, p as ls, Y as Yn, e as as, f as Mt, E as Et, U as Ue, P as Pt, Z as Zs } from "./configuration-C1Nhb7Ag.js";
import { E as ExpensesList } from "./ExpensesList-DZZLPJPK.js";
import { d as useNavigate, u as useLocation, m as useParams, t as useSearchParams, w as useNavigateBack, v as generatePath, a as RoutePaths } from "./use-scroll-into-view-ref-DGEXoh0D.js";
import { j as ExpenseItemType, b as getExpenseErrorMessage, k as useExpenseItemForm, f as ExpenseFormHistoryLog, h as EtlErrorBanner, E as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, d as isMileagePeriodData, e as MileagePeriodPreview } from "./CostAllocationSection-ARXAoilk.js";
import { i as isExpenseItemSubmitted, b as isRegularExpense, c as isMileageExpense, e as isExpenseItemDraft } from "./TaxTypeSearchSelect-C6ZIK7vh.js";
import { M as MileageTripForm, a as MileagePeriodForm, E as ExpenseForm } from "./ExpenseFormDialog-CU4Dt32t.js";
import "./Icon-DBeU9qcx.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-CEVgRUhm.js";
import { C as ConfirmDialog } from "./schemas-BFzgcPY3.js";
import { T as Trash2, S as Send } from "./trash-2-Dy1vaH3F.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
function FormPageDialog({
  header,
  footer,
  deleteDialog,
  isLoading,
  onOpenChange,
  renderContent,
  backgroundContent,
  banner
}) {
  const renderHeader = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx(os, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ss, { className: "text-exp-neutral-900 text-xl font-bold flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { variant: "light", size: "sm", maxWidth: 320, tooltipDisabled: true, className: "text-exp-neutral-900 text-xl font-bold", children: header.title }) }),
      header.titleSuffix,
      header.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
        "$",
        header.amount
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", "data-testid": "expense-status-badge", children: header.statusBadge })
    ] }),
    header.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: header.subtitle }) })
  ] }) }) }) }), "renderHeader");
  const renderFooter = /* @__PURE__ */ __name(() => {
    if (!footer) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: footer.showDeleteButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Ue,
          {
            type: "button",
            variant: "ghost",
            onClick: footer.onDeleteClick,
            className: "text-exp-red-500 hover:text-exp-red-600",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }),
              "Delete"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { className: "text-sm", children: "Delete draft" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              type: "button",
              variant: "outlined",
              onClick: footer.onSaveDraftClick,
              disabled: footer.saveDraftButtonState.disabled,
              children: footer.isSavingDraft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }),
                "Save Draft"
              ] }) : "Save Draft"
            }
          ) }) }),
          footer.saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: footer.saveDraftButtonState.tooltip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Ue,
            {
              type: "button",
              variant: "primary",
              onClick: footer.onSubmitClick,
              disabled: footer.submitButtonState.disabled,
              children: [
                footer.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                "Submit Expense"
              ]
            }
          ) }) }),
          footer.submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { className: "text-sm", children: footer.submitButtonState.tooltip })
        ] })
      ] })
    ] }) });
  }, "renderFooter");
  const renderLoadingOrContent = /* @__PURE__ */ __name(() => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }) });
    }
    return renderContent();
  }, "renderLoadingOrContent");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    backgroundContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { open: true, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      rs,
      {
        className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col",
        onEscapeKeyDown: /* @__PURE__ */ __name((e) => {
          if (document.querySelector('[role="listbox"]')) {
            e.preventDefault();
          }
        }, "onEscapeKeyDown"),
        onInteractOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onInteractOutside"),
        children: [
          renderHeader(),
          banner,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: renderLoadingOrContent() }),
            renderFooter()
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deleteDialog.isOpen,
        onOpenChange: deleteDialog.onOpenChange,
        title: "Delete draft",
        description: deleteDialog.description,
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: deleteDialog.onConfirm,
        onCancel: deleteDialog.onCancel,
        onCloseComplete: deleteDialog.onCloseComplete,
        isLoading: deleteDialog.isDeleting
      }
    )
  ] });
}
__name(FormPageDialog, "FormPageDialog");
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
    formRef,
    formKey,
    mode,
    itemType,
    isLoading,
    isNewItem,
    currentDraftId,
    expenseItem,
    title,
    titleSuffix,
    amount,
    status,
    headerSubtitle,
    submitButtonState,
    saveDraftButtonState,
    isSavingDraft,
    isSubmitting,
    isDeleting,
    draftSaveError,
    isDeleteDialogOpen,
    handleDeleteDialogOpenChange,
    handleDeleteDialogCloseComplete,
    handleDeleteConfirm,
    handleDeleteCancel,
    handleOpenChange,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload,
    handleDeleteDraft,
    handleSaveDraftClick,
    handleSubmitClick,
    handleButtonStateChange
  } = pageState;
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
    if (itemType === "mileage-trip" || expenseItem && isMileageExpense(expenseItem) && isMileageTripData(expenseItem.data)) {
      const initialData2 = expenseItem && isExpenseItemDraft(expenseItem) && isMileageExpense(expenseItem) && isMileageTripData(expenseItem.data) ? expenseItem.data : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MileageTripForm,
        {
          ref: formRef,
          onSubmit: handleMileageSubmit,
          onSaveDraft: handleMileageSaveDraft,
          initialData: initialData2,
          draftId: currentDraftId,
          isSubmitting,
          isDrafting: isSavingDraft,
          draftSaveError,
          onButtonStateChange: handleButtonStateChange
        },
        formKey
      );
    }
    if (itemType === "mileage-period" || expenseItem && isMileageExpense(expenseItem) && isMileagePeriodData(expenseItem.data)) {
      const initialData2 = expenseItem && isExpenseItemDraft(expenseItem) && isMileageExpense(expenseItem) && isMileagePeriodData(expenseItem.data) ? expenseItem.data : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MileagePeriodForm,
        {
          ref: formRef,
          onSubmit: handleMileageSubmit,
          onSaveDraft: handleMileageSaveDraft,
          onSaveDraftForUpload: handleMileageSaveDraftForUpload,
          initialData: initialData2,
          draftId: currentDraftId,
          isSubmitting,
          isDrafting: isSavingDraft,
          draftSaveError,
          onButtonStateChange: handleButtonStateChange
        },
        formKey
      );
    }
    const initialData = expenseItem && isExpenseItemDraft(expenseItem) && isRegularExpense(expenseItem) ? expenseItem.data : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseForm,
      {
        ref: formRef,
        onSubmit: handleExpenseSubmit,
        onSaveDraft: handleExpenseSaveDraft,
        onSaveDraftForUpload: handleExpenseSaveDraftForUpload,
        initialData,
        draftId: currentDraftId,
        isSubmitting,
        isDrafting: isSavingDraft,
        draftSaveError,
        onButtonStateChange: handleButtonStateChange
      },
      formKey
    );
  }, "renderContent");
  const showFooter = mode !== "preview" && (isNewItem || !isLoading);
  const getDeleteDialogDescription = /* @__PURE__ */ __name(() => {
    if (itemType === "expense") {
      return "Are you sure you want to delete this expense draft? This action cannot be undone.";
    }
    return "Are you sure you want to delete this mileage draft? This action cannot be undone.";
  }, "getDeleteDialogDescription");
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
      footer: showFooter ? {
        showDeleteButton: !!currentDraftId,
        submitButtonState,
        saveDraftButtonState,
        isSavingDraft,
        isSubmitting,
        onDeleteClick: handleDeleteDraft,
        onSaveDraftClick: handleSaveDraftClick,
        onSubmitClick: handleSubmitClick
      } : void 0,
      deleteDialog: {
        isOpen: isDeleteDialogOpen,
        isDeleting,
        description: getDeleteDialogDescription(),
        onOpenChange: handleDeleteDialogOpenChange,
        onCloseComplete: handleDeleteDialogCloseComplete,
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel
      },
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

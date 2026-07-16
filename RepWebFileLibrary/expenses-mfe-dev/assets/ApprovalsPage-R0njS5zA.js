var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { M as MISSING_VALUE_INDICATOR, A as ApprovalTab, u as useRoles, R as Role, c as useExpenseSwapStore, d as ApprovalsList } from "./ApprovalsList-BFAKe5Yf.js";
import { d as devError, Z as Zs, b as apiClient, e as as, H as Ha, U as Ue, Y as Yn, f as Mt, E as Et, P as Pt, g as gr, o as oi, r as rs } from "./configuration-BMQ0fbSl.js";
import { h as useQueryClient, e as useCompanyStore, i as useMutation, q as queryKeys, E as EXPENSE_ENDPOINTS, j as useScrollIntoViewRef, k as useErrorToast, l as formatDate, m as useParams, u as useLocation, d as useNavigate, a as RoutePaths } from "./use-scroll-into-view-ref-BwZ0vqtT.js";
import { m as mapCostAllocation, g as getExpenseBaseAmount, u as useCostAllocationHandlers, C as CostAllocationHeaderActions, a as CostAllocationSection, v as validateCostAllocation, c as costAllocationItemSchema, b as getExpenseErrorMessage, E as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, d as isMileagePeriodData, e as MileagePeriodPreview, f as ExpenseFormHistoryLog, h as EtlErrorBanner } from "./CostAllocationSection-BBoLgVHl.js";
import { F as FormTypeId, i as isExpenseItemSubmitted, b as isRegularExpense, c as isMileageExpense, d as useExpenseItem } from "./TaxTypeSearchSelect-BOGrOto7.js";
import { b as buildHeaderFromExpenseItem, E as ExpenseDialogHeader } from "./ExpenseDialogHeader-iPvvfgaT.js";
import "./hooks-BvR8ZH8t.js";
import { u as useForm, a as u, o as object, b as array, s as string, c as boolean, d as custom, C as ConfirmDialog } from "./schemas-Cit7x-Zn.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
var SaveButtonDisabledReason = /* @__PURE__ */ ((SaveButtonDisabledReason2) => {
  SaveButtonDisabledReason2["NoChanges"] = "No changes to save";
  SaveButtonDisabledReason2["NotFullyAllocated"] = "Expense must be fully allocated";
  SaveButtonDisabledReason2["Saving"] = "Saving...";
  return SaveButtonDisabledReason2;
})(SaveButtonDisabledReason || {});
const ACTION_DATE_PREFIX = {
  [ApprovalTab.Submitted]: "Submitted on",
  [ApprovalTab.Approved]: "Approved on",
  [ApprovalTab.Rejected]: "Rejected on",
  [ApprovalTab.Cancelled]: "Cancelled on"
};
function buildHeaderConfig(item) {
  const datePrefix = ACTION_DATE_PREFIX[item.status];
  return {
    title: item.employeeFullName,
    titleSuffix: item.vendor !== MISSING_VALUE_INDICATOR ? item.vendor : "",
    amount: item.formTypeId == FormTypeId.MILEAGE ? "" : item.totalAmount,
    status: item.status,
    subtitle: `${item.businessId} • ${datePrefix} ${item.actionDate}`
  };
}
__name(buildHeaderConfig, "buildHeaderConfig");
function isAllocationDeferredAndEmpty(expenseItem) {
  if (!isExpenseItemSubmitted(expenseItem)) return false;
  const { data } = expenseItem;
  return !!data.deferToApprover && (!data.costAllocations || data.costAllocations.length === 0);
}
__name(isAllocationDeferredAndEmpty, "isAllocationDeferredAndEmpty");
const useApproveExpense = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ expenseFormId, comment = "" }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const payload = {
        action: "approved",
        comment
      };
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.MANAGER_DECISION.build({
          tenant: userDefaultCompany.shortName,
          expenseFormId
        }),
        payload
      );
      return response.data;
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { expenseFormId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(expenseFormId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.approvalsList.all()
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseHistory.all()
      });
      Zs.success("Expense approved successfully");
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to approve expense:", error);
      Zs.error("Failed to approve. Please try again.");
    }, "onError")
  });
}, "useApproveExpense");
const useCancelExpense = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ logicalCompanyShortName, expenseFormId, comment }) => {
      await apiClient.post(
        EXPENSE_ENDPOINTS.CANCEL_EXPENSE.build({
          tenant: logicalCompanyShortName,
          expenseFormId
        }),
        { comment }
      );
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { expenseFormId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(expenseFormId),
        refetchType: "none"
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseHistory.all()
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.approvalsList.all()
      });
      Zs.success("Expense cancelled");
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to cancel expense:", error);
      Zs.error("Failed to cancel. Please try again.");
    }, "onError")
  });
}, "useCancelExpense");
const useManagerDecision = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ logicalCompanyShortName, expenseFormId, action, comment }) => {
      await apiClient.post(
        EXPENSE_ENDPOINTS.MANAGER_DECISION.build({
          tenant: logicalCompanyShortName,
          expenseFormId
        }),
        { action, comment }
      );
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { expenseFormId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(expenseFormId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseHistory.all()
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.approvalsList.all()
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error, { action }) => {
      devError("Failed to save manager decision:", error);
      Zs.error(
        action === "rejected" ? "Failed to reject. Please try again." : "Failed to save manager decision. Please try again."
      );
    }, "onError")
  });
}, "useManagerDecision");
const useSaveCostAllocation = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ expenseFormId, costAllocations }) => {
      const payload = costAllocations.map(mapCostAllocation);
      const response = await apiClient.put(
        EXPENSE_ENDPOINTS.SAVE_COST_ALLOCATION.build({ expenseFormId }),
        payload
      );
      return response.data;
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { expenseFormId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(expenseFormId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.approvalsList.all()
      });
      Zs.success("Cost allocation saved successfully");
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to save cost allocation:", error);
      Zs.error("Failed to save cost allocation. Please try again.");
    }, "onError")
  });
}, "useSaveCostAllocation");
const REJECTION_COMMENT_LIMIT = 1e3;
const CANCELLATION_NOTE_LIMIT = 150;
const ApproverFooter = /* @__PURE__ */ __name(({
  isAllocationRequired,
  isApproving = false,
  onApprove,
  onReject,
  onEditAllocation,
  isRejecting = false,
  rejectionComment = "",
  rejectionCommentLimit = REJECTION_COMMENT_LIMIT,
  isSubmittingDecision = false,
  onRejectionCommentChange,
  onRejectCancel,
  onRejectSave
}) => {
  const isRejectSaveDisabled = !rejectionComment.trim() || isSubmittingDecision;
  const isApproveDisabled = isAllocationRequired || isApproving;
  if (isRejecting) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "pt-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ha,
        {
          "aria-label": "Rejection Comment",
          value: rejectionComment,
          onChange: /* @__PURE__ */ __name((e) => onRejectionCommentChange == null ? void 0 : onRejectionCommentChange(e.target.value), "onChange"),
          placeholder: "Add rejection note...",
          showCharacterCount: true,
          maxCharacters: rejectionCommentLimit,
          enforceMaxLength: true,
          required: true,
          disabled: isSubmittingDecision
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Ue,
          {
            type: "button",
            variant: "error",
            className: "h-9 px-4 py-2",
            onClick: onRejectSave,
            disabled: isRejectSaveDisabled,
            children: [
              isSubmittingDecision && /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }),
              "Reject"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            type: "button",
            variant: "secondary",
            className: "h-9 px-4 py-2",
            onClick: onRejectCancel,
            disabled: isSubmittingDecision,
            children: "Cancel"
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "pt-4 gap-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end w-full gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        type: "button",
        variant: "secondary-error",
        onClick: onReject,
        disabled: isApproving,
        children: "Reject"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        type: "button",
        variant: "secondary",
        onClick: onEditAllocation,
        disabled: isApproving,
        children: "Edit Allocation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ue,
        {
          type: "button",
          variant: "primary",
          onClick: onApprove,
          disabled: isApproveDisabled,
          children: [
            isApproving ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" }),
            "Approve"
          ]
        }
      ) }) }),
      isAllocationRequired && !isApproving && /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { className: "text-sm", children: "Cost allocation must be added before approval" })
    ] })
  ] }) });
}, "ApproverFooter");
const { useCallback: useCallback$2, useEffect: useEffect$1, useImperativeHandle, useMemo: useMemo$1, useRef: useRef$1 } = await importShared("react");
const currencySchema = custom(
  (val) => typeof val === "object" && val !== null && typeof val.code === "string" && val.code.length > 0
);
const approverAllocationSchema = object({
  costAllocations: array(costAllocationItemSchema).min(1, "At least one allocation is required"),
  isEqualSplit: boolean(),
  deferToApprover: boolean(),
  netAmount: string(),
  totalAmount: string(),
  netCurrency: currencySchema,
  totalCurrency: currencySchema
}).superRefine((data, ctx) => {
  var _a, _b;
  const amount = data.totalAmount || data.netAmount || "0";
  const currencyCode = ((_a = data.totalCurrency) == null ? void 0 : _a.code) ?? ((_b = data.netCurrency) == null ? void 0 : _b.code);
  validateCostAllocation(ctx, data.costAllocations, amount, false, currencyCode);
});
const FIELD_CONFIG = {
  netAmountField: "netAmount",
  totalAmountField: "totalAmount",
  netCurrencyField: "netCurrency",
  totalCurrencyField: "totalCurrency",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
};
const ApproverAllocationForm = /* @__PURE__ */ __name(({ ref, expense, onSave, isSaving, onStateChange }) => {
  const defaultValues = useMemo$1(() => {
    if (isRegularExpense(expense)) {
      const expData = expense.data;
      const netCurrency = expData.netCurrency ?? expData.totalCurrency ?? { code: "", symbol: "" };
      const totalCurrency2 = expData.totalCurrency ?? { code: "", symbol: "" };
      return {
        costAllocations: expData.costAllocations ?? [],
        isEqualSplit: false,
        deferToApprover: false,
        netAmount: expData.netAmount ?? "0",
        totalAmount: expData.totalAmount ?? "0",
        netCurrency,
        totalCurrency: totalCurrency2
      };
    }
    const milData = expense.data;
    const totalCurrency = milData.totalCurrency ?? { code: "", symbol: "" };
    return {
      costAllocations: milData.costAllocations ?? [],
      isEqualSplit: false,
      deferToApprover: false,
      netAmount: milData.reimbursableAmount ?? "0",
      totalAmount: milData.reimbursableAmount ?? "0",
      netCurrency: totalCurrency,
      totalCurrency
    };
  }, [expense]);
  const {
    control,
    setValue,
    trigger,
    getValues,
    handleSubmit,
    formState: { isDirty, errors }
  } = useForm({
    defaultValues,
    resolver: u(approverAllocationSchema),
    mode: "onChange"
  });
  const getBaseAmount = useCallback$2(() => {
    var _a, _b;
    if (isMileageExpense(expense)) {
      return parseFloat(expense.data.reimbursableAmount || "0");
    }
    return getExpenseBaseAmount(
      (_a = expense.data.netCurrency) == null ? void 0 : _a.code,
      (_b = expense.data.totalCurrency) == null ? void 0 : _b.code,
      expense.data.netAmount,
      expense.data.totalAmount
    );
  }, [expense]);
  const { actions, helpers } = useCostAllocationHandlers(
    setValue,
    getValues,
    trigger,
    FIELD_CONFIG.costAllocationsField,
    FIELD_CONFIG.isEqualSplitField,
    getBaseAmount
  );
  const submitForm = useMemo$1(
    () => handleSubmit((formData) => {
      onSave(formData.costAllocations);
    }),
    [handleSubmit, onSave]
  );
  const hasErrors = !!errors.costAllocations;
  const onStateChangeRef = useRef$1(onStateChange);
  onStateChangeRef.current = onStateChange;
  useEffect$1(() => {
    var _a;
    (_a = onStateChangeRef.current) == null ? void 0 : _a.call(onStateChangeRef);
  }, [isDirty, hasErrors]);
  useImperativeHandle(ref, () => ({
    submit: submitForm,
    getSaveButtonState: /* @__PURE__ */ __name(() => {
      if (isSaving) {
        return { disabled: true, tooltip: SaveButtonDisabledReason.Saving };
      }
      if (!isDirty) {
        return { disabled: true, tooltip: SaveButtonDisabledReason.NoChanges };
      }
      if (errors.costAllocations) {
        return { disabled: true, tooltip: SaveButtonDisabledReason.NotFullyAllocated };
      }
      return { disabled: false, tooltip: null };
    }, "getSaveButtonState"),
    getIsDirty: /* @__PURE__ */ __name(() => isDirty, "getIsDirty")
  }), [submitForm, isSaving, isDirty, errors.costAllocations]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col gap-4",
      ref: useScrollIntoViewRef(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            gr,
            {
              title: "COST ALLOCATION",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
              iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CostAllocationHeaderActions,
            {
              control,
              setValue,
              trigger,
              helpers,
              fieldConfig: FIELD_CONFIG,
              hideDeferToApprover: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CostAllocationSection,
          {
            control,
            setValue,
            trigger,
            actions,
            helpers,
            fieldConfig: FIELD_CONFIG,
            hideDeferToApprover: true
          }
        )
      ]
    }
  );
}, "ApproverAllocationForm");
const ApproverEditFooter = /* @__PURE__ */ __name(({
  saveButtonState,
  isSaving,
  onSave,
  onCancel
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "pt-4 gap-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end w-full gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        type: "button",
        variant: "soft",
        onClick: onCancel,
        disabled: isSaving,
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          type: "button",
          variant: "primary",
          onClick: onSave,
          disabled: saveButtonState.disabled,
          children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }) : "Save Changes"
        }
      ) }) }),
      saveButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { className: "text-sm", children: saveButtonState.tooltip })
    ] })
  ] }) });
}, "ApproverEditFooter");
const CancelExpenseFooter = /* @__PURE__ */ __name(({
  isEditingNote,
  cancellationNote,
  isSubmitting,
  onStartCancel,
  onNoteChange,
  onConfirm,
  onDiscard
}) => {
  const isConfirmDisabled = !cancellationNote.trim() || isSubmitting;
  if (isEditingNote) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "pt-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ha,
        {
          autoFocus: true,
          "aria-label": "Cancellation Note",
          value: cancellationNote,
          onChange: /* @__PURE__ */ __name((e) => onNoteChange(e.target.value), "onChange"),
          placeholder: "Add cancellation note...",
          showCharacterCount: true,
          maxCharacters: CANCELLATION_NOTE_LIMIT,
          enforceMaxLength: true,
          required: true,
          disabled: isSubmitting
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Ue,
          {
            type: "button",
            variant: "error",
            className: "h-9 px-4 py-2",
            onClick: onConfirm,
            disabled: isConfirmDisabled,
            children: [
              isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }),
              "Confirm"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            type: "button",
            variant: "secondary",
            className: "h-9 px-4 py-2",
            onClick: onDiscard,
            disabled: isSubmitting,
            children: "Discard"
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "pt-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ue,
    {
      className: "h-9",
      type: "button",
      variant: "secondary",
      onClick: onStartCancel,
      children: "Cancel Expense"
    }
  ) }) });
}, "CancelExpenseFooter");
const { useCallback: useCallback$1, useEffect, useMemo, useRef, useState } = await importShared("react");
const ApproverExpenseDetail = /* @__PURE__ */ __name(({ expenseId, item, onClose }) => {
  var _a;
  const { hasAnyRole, isEmployee, isAP } = useRoles();
  const canTakeApprovalAction = hasAnyRole([Role.Manager, Role.Admin]);
  const logicalCompanyShortName = useCompanyStore((state) => {
    var _a2;
    return ((_a2 = state.userDefaultCompany) == null ? void 0 : _a2.shortName) ?? null;
  });
  const unpostedReviewExpenseId = useExpenseSwapStore((state) => state.unpostedReviewExpenseId);
  const clearUnpostedReviewExpenseId = useExpenseSwapStore((state) => state.clearUnpostedReviewExpenseId);
  const [isEditingAllocation, setIsEditingAllocation] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [rejectionComment, setRejectionComment] = useState("");
  const [isEditingCancellationNote, setIsEditingCancellationNote] = useState(false);
  const [cancellationNote, setCancellationNote] = useState("");
  const [statusOverride, setStatusOverride] = useState(null);
  const [actionDateOverride, setActionDateOverride] = useState(null);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const pendingActionRef = useRef(null);
  const allocationFormRef = useRef(null);
  const [, setFooterTick] = useState(0);
  const handleFormStateChange = useCallback$1(() => {
    setFooterTick((t) => t + 1);
  }, []);
  const hasUnsavedRejectionComment = isRejecting && rejectionComment.trim().length > 0;
  const hasUnsavedCancellationNote = isEditingCancellationNote && cancellationNote.trim().length > 0;
  const beforeUnloadHandler = useCallback$1((event) => {
    var _a2;
    if (isEditingAllocation && ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty())) {
      event.preventDefault();
      event.returnValue = "";
      return;
    }
    if (hasUnsavedRejectionComment || hasUnsavedCancellationNote) {
      event.preventDefault();
      event.returnValue = "";
    }
  }, [isEditingAllocation, hasUnsavedRejectionComment, hasUnsavedCancellationNote]);
  useEffect(() => {
    if (isEditingAllocation || hasUnsavedRejectionComment || hasUnsavedCancellationNote) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
      return () => {
        window.removeEventListener("beforeunload", beforeUnloadHandler);
      };
    }
  }, [isEditingAllocation, hasUnsavedRejectionComment, hasUnsavedCancellationNote, beforeUnloadHandler]);
  useEffect(() => {
    if (!isEmployee) {
      devError("ApproverExpenseDetail: user lacks Expense.Employee role, expense detail endpoint will return 403");
      Zs.error("Insufficient permissions to view expense details.", { duration: 5e3 });
      onClose();
    }
  }, [isEmployee, onClose]);
  const { data: expenseItem, isPending, isError, error: fetchError } = useExpenseItem(expenseId, { companyShortName: logicalCompanyShortName, enabled: isEmployee });
  const errorMessage = useMemo(
    () => isError ? getExpenseErrorMessage(fetchError) : "",
    [isError, fetchError]
  );
  const hasCommittedStatusChange = statusOverride !== null;
  useErrorToast(isError && !hasCommittedStatusChange, errorMessage, 5e3);
  useEffect(() => {
    if (isError && !hasCommittedStatusChange) onClose();
  }, [isError, hasCommittedStatusChange, onClose]);
  useEffect(() => {
    if (expenseItem && expenseItem.status === "draft") {
      Zs.error("Expense form is still in draft and cannot be viewed in the approval flow.", { duration: 5e3 });
      onClose();
    }
  }, [expenseItem, onClose]);
  const getActionDateForStatus = useCallback$1((status, submittedExpense) => {
    if (!status || !submittedExpense || !isExpenseItemSubmitted(submittedExpense)) return void 0;
    const rawDate = (() => {
      if (status === ApprovalTab.Approved) return submittedExpense.approvedAt;
      if (status === ApprovalTab.Rejected) return submittedExpense.rejectedAt;
      if (status === ApprovalTab.Cancelled) return submittedExpense.cancelledAt;
      return submittedExpense.submittedAt;
    })();
    return rawDate ? formatDate(rawDate) : void 0;
  }, []);
  const header = useMemo(() => {
    const derivedStatus = statusOverride ?? (expenseItem == null ? void 0 : expenseItem.status) ?? (item == null ? void 0 : item.status);
    const derivedActionDate = actionDateOverride ?? getActionDateForStatus(derivedStatus, expenseItem) ?? (item == null ? void 0 : item.actionDate);
    if (expenseItem) {
      const baseHeader = buildHeaderFromExpenseItem(expenseItem);
      if (!derivedStatus || !actionDateOverride && derivedStatus === baseHeader.status) return baseHeader;
      const overriddenDatePart = `${ACTION_DATE_PREFIX[derivedStatus] ?? "Submitted on"} ${derivedActionDate ?? ""}`.trim();
      const overriddenSubtitle = [expenseItem.businessId, overriddenDatePart].filter(Boolean).join(" • ");
      return {
        ...baseHeader,
        status: derivedStatus,
        subtitle: overriddenSubtitle
      };
    }
    if (item && derivedStatus && derivedActionDate) {
      return buildHeaderConfig({
        ...item,
        status: derivedStatus,
        actionDate: derivedActionDate
      });
    }
    return null;
  }, [item, expenseItem, statusOverride, actionDateOverride, getActionDateForStatus]);
  const effectiveStatus = statusOverride ?? (expenseItem == null ? void 0 : expenseItem.status) ?? (item == null ? void 0 : item.status);
  const isAllocationRequired = useMemo(
    () => expenseItem ? isAllocationDeferredAndEmpty(expenseItem) : false,
    [expenseItem]
  );
  const saveCostAllocation = useSaveCostAllocation();
  const approveExpense = useApproveExpense();
  const managerDecision = useManagerDecision();
  const cancelExpense = useCancelExpense();
  const canCancelExpense = isAP && unpostedReviewExpenseId === expenseId && effectiveStatus === ApprovalTab.Approved;
  useEffect(() => {
    if (!canCancelExpense && isEditingCancellationNote) {
      setIsEditingCancellationNote(false);
      setCancellationNote("");
    }
  }, [canCancelExpense, isEditingCancellationNote]);
  const handleApprove = useCallback$1(() => {
    if (approveExpense.isPending) return;
    approveExpense.mutate(
      { expenseFormId: expenseId },
      { onSuccess: /* @__PURE__ */ __name(() => onClose(), "onSuccess") }
    );
  }, [approveExpense, expenseId, onClose]);
  const handleEditAllocation = useCallback$1(() => {
    setIsRejecting(false);
    setRejectionComment("");
    setIsEditingAllocation(true);
  }, []);
  const handleReject = useCallback$1(() => {
    setIsEditingAllocation(false);
    setIsRejecting(true);
  }, []);
  const handleRejectCommentChange = useCallback$1((comment) => {
    setRejectionComment(comment);
  }, []);
  const handleRejectCancel = useCallback$1(() => {
    setIsRejecting(false);
    setRejectionComment("");
  }, []);
  const handleCancelEdit = useCallback$1(() => {
    var _a2;
    const isDirty = ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty()) ?? false;
    if (isDirty) {
      pendingActionRef.current = "edit-cancel";
      setShowUnsavedDialog(true);
      return;
    }
    setIsEditingAllocation(false);
  }, []);
  const handleSaveAllocation = useCallback$1((allocations) => {
    saveCostAllocation.mutate(
      { expenseFormId: expenseId, costAllocations: allocations },
      {
        onSuccess: /* @__PURE__ */ __name(() => {
          setIsEditingAllocation(false);
        }, "onSuccess")
      }
    );
  }, [saveCostAllocation, expenseId]);
  const handleFormSubmit = useCallback$1(() => {
    var _a2;
    (_a2 = allocationFormRef.current) == null ? void 0 : _a2.submit();
  }, []);
  const handleRejectSave = useCallback$1(() => {
    if (managerDecision.isPending) return;
    const comment = rejectionComment.trim();
    if (!logicalCompanyShortName || !comment) {
      return;
    }
    managerDecision.mutate(
      {
        logicalCompanyShortName,
        expenseFormId: expenseId,
        action: "rejected",
        comment
      },
      {
        onSuccess: /* @__PURE__ */ __name(() => {
          setStatusOverride(ApprovalTab.Rejected);
          setActionDateOverride(formatDate((/* @__PURE__ */ new Date()).toISOString()));
          setIsRejecting(false);
          setRejectionComment("");
          Zs.success("Expense rejected");
        }, "onSuccess"),
        onError: /* @__PURE__ */ __name(() => {
        }, "onError")
      }
    );
  }, [managerDecision, logicalCompanyShortName, expenseId, rejectionComment]);
  const handleStartCancelExpense = useCallback$1(() => {
    setIsEditingCancellationNote(true);
  }, []);
  const handleCancellationNoteChange = useCallback$1((note) => {
    setCancellationNote(note);
  }, []);
  const handleCancelDiscard = useCallback$1(() => {
    setIsEditingCancellationNote(false);
    setCancellationNote("");
  }, []);
  const handleCancelConfirm = useCallback$1(() => {
    if (cancelExpense.isPending) return;
    const comment = cancellationNote.trim();
    if (!logicalCompanyShortName || !comment) {
      return;
    }
    cancelExpense.mutate(
      {
        logicalCompanyShortName,
        expenseFormId: expenseId,
        comment
      },
      {
        onSuccess: /* @__PURE__ */ __name(() => {
          setStatusOverride(ApprovalTab.Cancelled);
          setActionDateOverride(formatDate((/* @__PURE__ */ new Date()).toISOString()));
          setIsEditingCancellationNote(false);
          setCancellationNote("");
          clearUnpostedReviewExpenseId();
        }, "onSuccess"),
        onError: /* @__PURE__ */ __name(() => {
        }, "onError")
      }
    );
  }, [cancelExpense, cancellationNote, logicalCompanyShortName, expenseId, clearUnpostedReviewExpenseId]);
  const handleDialogOpenChange = useCallback$1((open) => {
    var _a2;
    if (!open && (approveExpense.isPending || managerDecision.isPending || cancelExpense.isPending)) return;
    if (!open && isEditingAllocation) {
      const isDirty = ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty()) ?? false;
      if (isDirty) {
        pendingActionRef.current = "dialog-close";
        setShowUnsavedDialog(true);
        return;
      }
    }
    if (!open && (hasUnsavedRejectionComment || hasUnsavedCancellationNote)) {
      pendingActionRef.current = "dialog-close";
      setShowUnsavedDialog(true);
      return;
    }
    if (!open) {
      setIsEditingAllocation(false);
      setIsRejecting(false);
      setRejectionComment("");
      setIsEditingCancellationNote(false);
      setCancellationNote("");
      onClose();
    }
  }, [approveExpense.isPending, managerDecision.isPending, cancelExpense.isPending, isEditingAllocation, hasUnsavedRejectionComment, hasUnsavedCancellationNote, onClose]);
  const handleDiscardAndClose = useCallback$1(() => {
    const pendingAction = pendingActionRef.current;
    setShowUnsavedDialog(false);
    setIsEditingAllocation(false);
    setIsRejecting(false);
    setRejectionComment("");
    setIsEditingCancellationNote(false);
    setCancellationNote("");
    if (pendingAction === "dialog-close") {
      pendingActionRef.current = null;
      onClose();
      return;
    }
    pendingActionRef.current = null;
  }, [onClose]);
  const handleKeepEditing = useCallback$1(() => {
    pendingActionRef.current = null;
    setShowUnsavedDialog(false);
  }, []);
  const renderContent = useCallback$1((expenseItemData) => {
    if (!isExpenseItemSubmitted(expenseItemData)) return null;
    const allocationSlot = isEditingAllocation ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApproverAllocationForm,
      {
        ref: allocationFormRef,
        expense: expenseItemData,
        onSave: handleSaveAllocation,
        isSaving: saveCostAllocation.isPending,
        onStateChange: handleFormStateChange
      }
    ) : void 0;
    if (isRegularExpense(expenseItemData)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensePreview, { expense: expenseItemData, renderCostAllocation: allocationSlot });
    }
    if (isMileageExpense(expenseItemData)) {
      if (isMileageTripData(expenseItemData.data)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MileageTripPreview, { mileage: { ...expenseItemData, data: expenseItemData.data }, renderCostAllocation: allocationSlot });
      }
      if (isMileagePeriodData(expenseItemData.data)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MileagePeriodPreview, { mileage: { ...expenseItemData, data: expenseItemData.data }, renderCostAllocation: allocationSlot });
      }
    }
    return null;
  }, [isEditingAllocation, handleSaveAllocation, saveCostAllocation.isPending, handleFormStateChange]);
  const isSubmitted = effectiveStatus === ApprovalTab.Submitted;
  const saveButtonState = ((_a = allocationFormRef.current) == null ? void 0 : _a.getSaveButtonState()) ?? { disabled: true, tooltip: SaveButtonDisabledReason.NoChanges };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { open: true, onOpenChange: handleDialogOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      rs,
      {
        className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col",
        onInteractOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onInteractOutside"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExpenseDialogHeader,
            {
              header,
              historyLog: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormHistoryLog, { expenseFormId: (expenseItem == null ? void 0 : expenseItem.id) ? Number(expenseItem.id) : 0, className: "ml-2" }),
              mode: "preview"
            }
          ),
          expenseItem && isExpenseItemSubmitted(expenseItem) && expenseItem.hasEtlError && /* @__PURE__ */ jsxRuntimeExports.jsx(EtlErrorBanner, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden flex flex-col min-w-[600px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }) }) : expenseItem && renderContent(expenseItem) }),
            canTakeApprovalAction && !isPending && expenseItem && isSubmitted && !isEditingAllocation && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ApproverFooter,
              {
                isAllocationRequired,
                isApproving: approveExpense.isPending,
                rejectionComment,
                rejectionCommentLimit: REJECTION_COMMENT_LIMIT,
                isRejecting,
                isSubmittingDecision: managerDecision.isPending,
                onApprove: handleApprove,
                onReject: handleReject,
                onEditAllocation: handleEditAllocation,
                onRejectCancel: handleRejectCancel,
                onRejectionCommentChange: handleRejectCommentChange,
                onRejectSave: handleRejectSave
              }
            ),
            canTakeApprovalAction && isEditingAllocation && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ApproverEditFooter,
              {
                saveButtonState,
                isSaving: saveCostAllocation.isPending,
                onSave: handleFormSubmit,
                onCancel: handleCancelEdit
              }
            ),
            canCancelExpense && /* @__PURE__ */ jsxRuntimeExports.jsx(
              CancelExpenseFooter,
              {
                isEditingNote: isEditingCancellationNote,
                cancellationNote,
                isSubmitting: cancelExpense.isPending,
                onStartCancel: handleStartCancelExpense,
                onNoteChange: handleCancellationNoteChange,
                onConfirm: handleCancelConfirm,
                onDiscard: handleCancelDiscard
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: showUnsavedDialog,
        onOpenChange: /* @__PURE__ */ __name((open) => {
          if (!open) handleKeepEditing();
        }, "onOpenChange"),
        title: "Unsaved changes",
        description: "If you leave now, your progress will be lost.",
        confirmLabel: "Discard Changes",
        cancelLabel: "Keep Editing",
        onConfirm: handleDiscardAndClose,
        onCancel: handleKeepEditing,
        variant: "error"
      }
    )
  ] });
}, "ApproverExpenseDetail");
const { useCallback } = await importShared("react");
const ApprovalsPage = /* @__PURE__ */ __name(() => {
  const { id: selectedExpenseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state;
  const clearUnpostedReviewExpenseId = useExpenseSwapStore(
    (state) => state.clearUnpostedReviewExpenseId
  );
  const handleDetailClose = useCallback(() => {
    clearUnpostedReviewExpenseId();
    navigate(RoutePaths.Approvals + location.search, { replace: true });
  }, [clearUnpostedReviewExpenseId, navigate, location.search]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApprovalsList, {}),
    selectedExpenseId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApproverExpenseDetail,
      {
        expenseId: selectedExpenseId,
        item: locationState == null ? void 0 : locationState.item,
        onClose: handleDetailClose
      }
    )
  ] });
}, "ApprovalsPage");
export {
  ApprovalsPage as default
};

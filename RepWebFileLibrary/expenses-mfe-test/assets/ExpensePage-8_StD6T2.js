import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { E as ExpensesList } from "./ExpensesList-D3awfKDx.js";
import { o as os, k as ks, a as apiClient, B as Bs, O as Oa, A as Aa, G as Ga, P as Pe, b as Ba, $ as $r, d as Vr, z as zr, S as Sn } from "./axiosInstance-DP9FWpUw.js";
import { E as EXPENSE_DETAILS_SECTION, a as EXPENSE_JUSTIFICATION_SECTION, C as COST_ALLOCATION_SECTION, A as ADDITIONAL_COMMENTS_SECTION } from "./expense-form-sections-DHoO3PSJ.js";
import { E as ExpenseFormField, u as useFormFieldValues, a as useAmountAllocationSync, b as useReceiptCheckboxEffects, c as useExpenseFormLeftColumn, S as SupportingFiles, d as useExpenseFormHandlers, f as fullExpenseValidationStrategy, C as ConfirmDialog } from "./SupportingFilesFormSection-TqfCDwXq.js";
import { I as Icon } from "./Icon-DYEjfqv0.js";
import "./api-Kj9jIhjr.js";
import { a as useMutation } from "./store-3xC2HOBr.js";
import "./api-B1xsbpTB.js";
import "./api-BMAnnOHy.js";
import "./mileage-trip-sections-CWUG_uCR.js";
import { c as createExpenseForm } from "./form-factory-k8BNxHXm.js";
import { R as ReceiptSection } from "./ReceiptSection-Dhri7abj.js";
import { u as useNavigate, f as useParams, a as RoutePaths } from "./routes-nW3dHYkG.js";
import { u as useQueryClient, k as useQuery, q as queryKeys } from "./query-keys-DpYAYDxu.js";
import { E as EXPENSE_ENDPOINTS } from "./endpoints-BX9yOQ37.js";
import { C as ChevronLeft } from "./chevron-left-BoGTESgu.js";
import { C as ChevronRight } from "./chevron-right-IOQTudeL.js";
import { T as Trash2, S as Send } from "./trash-2-BycJJ2vW.js";
const mapFullExpenseToDefaultValues = (initialData) => {
  return {
    [ExpenseFormField.ExpenseType]: (initialData == null ? void 0 : initialData.expenseType) ?? "",
    [ExpenseFormField.Vendor]: (initialData == null ? void 0 : initialData.vendor) ?? "",
    [ExpenseFormField.ExpenseDate]: (initialData == null ? void 0 : initialData.expenseDate) ?? "",
    [ExpenseFormField.ExpenseLocation]: (initialData == null ? void 0 : initialData.expenseLocation) ?? "",
    [ExpenseFormField.PaymentMethod]: (initialData == null ? void 0 : initialData.paymentMethod) ?? "",
    [ExpenseFormField.NetAmount]: (initialData == null ? void 0 : initialData.netAmount) ?? "",
    [ExpenseFormField.TotalAmount]: (initialData == null ? void 0 : initialData.totalAmount) ?? "",
    [ExpenseFormField.BusinessPurpose]: (initialData == null ? void 0 : initialData.businessPurpose) ?? "",
    [ExpenseFormField.ExpenseDescription]: (initialData == null ? void 0 : initialData.expenseDescription) ?? "",
    [ExpenseFormField.PersonsEntertained]: (initialData == null ? void 0 : initialData.personsEntertained) ?? "",
    [ExpenseFormField.AdditionalComments]: (initialData == null ? void 0 : initialData.additionalComments) ?? "",
    [ExpenseFormField.ReceiptAttachment]: (initialData == null ? void 0 : initialData.receiptAttachment) ?? null,
    [ExpenseFormField.IsReceiptUnavailable]: (initialData == null ? void 0 : initialData.isReceiptUnavailable) ?? false,
    [ExpenseFormField.Affidavit]: (initialData == null ? void 0 : initialData.affidavit) ?? null,
    [ExpenseFormField.SupportingFiles]: (initialData == null ? void 0 : initialData.supportingFiles) ?? [],
    [ExpenseFormField.IsDifferentCurrency]: (initialData == null ? void 0 : initialData.isDifferentCurrency) ?? false,
    [ExpenseFormField.NetCurrency]: (initialData == null ? void 0 : initialData.netCurrency) ?? { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.TotalCurrency]: (initialData == null ? void 0 : initialData.totalCurrency) ?? { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.CostAllocations]: (initialData == null ? void 0 : initialData.costAllocations) ?? [],
    [ExpenseFormField.IsEqualSplit]: (initialData == null ? void 0 : initialData.isEqualSplit) ?? false
  };
};
const useExpenseFormSync = ({
  control,
  setValue,
  getValues,
  watch
}) => {
  const { totalAmount } = useFormFieldValues(control, [
    ExpenseFormField.TotalAmount
  ]);
  useAmountAllocationSync({
    amount: parseFloat(totalAmount || "0"),
    setValue,
    getValues,
    costAllocationsField: ExpenseFormField.CostAllocations,
    isEqualSplitField: ExpenseFormField.IsEqualSplit
  });
  useReceiptCheckboxEffects({
    watch,
    setValue,
    receiptAttachmentField: ExpenseFormField.ReceiptAttachment,
    isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
    affidavitField: ExpenseFormField.Affidavit
  });
};
const ExpenseFormLeftColumn = ({
  control,
  setValue,
  getValues,
  isSubmitting,
  isDrafting,
  draftId,
  onSaveDraft
}) => {
  const {
    receiptAttachment,
    supportingFiles,
    shouldShowReceiptCheckbox,
    handleReceiptChange,
    handleSupportingFilesChange,
    setIsReceiptUploading
  } = useExpenseFormLeftColumn({
    control,
    setValue,
    getValues,
    isDrafting,
    draftId,
    onSaveDraft
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "w-full h-full flex flex-col pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptSection,
      {
        control,
        isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
        receiptAttachment,
        shouldShowCheckbox: shouldShowReceiptCheckbox,
        onReceiptChange: handleReceiptChange,
        onUploadingChange: setIsReceiptUploading,
        disabled: isSubmitting
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SupportingFiles,
      {
        onFilesChange: handleSupportingFilesChange,
        initialFiles: supportingFiles || [],
        disabled: isSubmitting
      }
    ) })
  ] });
};
const FULL_EXPENSE_SECTIONS_CONFIG = [
  EXPENSE_DETAILS_SECTION,
  EXPENSE_JUSTIFICATION_SECTION,
  COST_ALLOCATION_SECTION,
  ADDITIONAL_COMMENTS_SECTION
];
const ExpenseForm = createExpenseForm({
  validationStrategy: fullExpenseValidationStrategy,
  sections: FULL_EXPENSE_SECTIONS_CONFIG,
  layout: "two-column",
  initialDataTransformer: mapFullExpenseToDefaultValues,
  leftColumnRenderer: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormLeftColumn, { ...params }),
  // A placeholder for error displaing in a form
  errorDisplayRenderer: ({ errors }) => {
    console.log(errors);
    return null;
  },
  customHook: useExpenseFormSync,
  handlersHook: useExpenseFormHandlers
});
ExpenseForm.displayName = "ExpenseForm";
const useSaveExpenseDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, draftId }) => {
      const endpoint = draftId ? EXPENSE_ENDPOINTS.UPDATE_DRAFT(draftId) : EXPENSE_ENDPOINTS.SAVE_DRAFT;
      const method = draftId ? "put" : "post";
      const response = await apiClient[method](endpoint, { data });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save expense draft:", error);
      ks.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data }) => {
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.SUBMIT_EXPENSE,
        { data }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit expense:", error);
      ks.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useExpenseDraft = (draftId) => {
  return useQuery({
    queryKey: draftId ? queryKeys.expenseDrafts.detail(draftId) : queryKeys.expenseDrafts.details(),
    queryFn: async () => {
      if (!draftId) throw new Error("Draft ID is required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_DRAFT(draftId)
      );
      return response.data;
    },
    enabled: !!draftId,
    retry: false,
    staleTime: 0
    // Always fetch when ID changes
  });
};
const useDeleteExpenseDraft = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (draftId) => {
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT(draftId));
    },
    onSuccess: () => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      console.error("Failed to delete draft:", error);
      ks.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
const { useCallback, useEffect, useRef, useState } = await importShared("react");
const NewExpensePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const expenseFormRef = useRef(null);
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [stableFormKey] = useState(() => id || "new");
  const saveDraftMutation = useSaveExpenseDraft();
  const submitExpenseMutation = useSubmitExpense();
  const deleteDraftMutation = useDeleteExpenseDraft({
    onSuccess: () => {
      setIsDeleteDialogOpen(false);
      setTimeout(() => {
        navigate(RoutePaths.Expenses);
      }, 100);
    }
  });
  const shouldFetchDraft = id && id !== "new";
  const { data: existingDraft, error: draftError, isLoading: isDraftLoading } = useExpenseDraft(shouldFetchDraft ? id : null);
  const draftData = draftError || !existingDraft ? null : existingDraft;
  const expenseTitle = (draftData == null ? void 0 : draftData.data.vendor) || "New Expense";
  const isDraft = !!draftData;
  const currentDraftId = shouldFetchDraft && !draftError && (draftData || isDraftLoading) ? id : null;
  useEffect(() => {
    if (draftError && shouldFetchDraft) {
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [draftError, shouldFetchDraft, navigate]);
  const handleSubmit = async (data) => {
    try {
      await submitExpenseMutation.mutateAsync({ data });
      navigate(RoutePaths.Expenses);
    } catch (error) {
      console.error("Failed to submit expense:", error);
    }
  };
  const handleSaveDraft = async (data) => {
    try {
      const result = await saveDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId || void 0
      });
      if (result.id && !currentDraftId) {
        navigate(`/expenses/${result.id}`, { replace: true });
      }
    } catch (error) {
      console.error("Failed to save draft:", error);
    }
  };
  const handleDeleteDraft = () => {
    if (!currentDraftId) return;
    setIsDeleteDialogOpen(true);
  };
  const handleDeleteConfirm = () => {
    if (!currentDraftId) return;
    deleteDraftMutation.mutate(currentDraftId);
  };
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
  };
  const handleDeleteDialogOpenChange = (open) => {
    if (!open && deleteDraftMutation.isPending) {
      return;
    }
    setIsDeleteDialogOpen(open);
  };
  const handleOpenChange = (open) => {
    if (!open) {
      navigate(RoutePaths.Expenses);
    }
  };
  const handleSaveDraftClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = expenseFormRef.current) == null ? void 0 : _a.saveDraft();
  };
  const handleSubmitClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = expenseFormRef.current) == null ? void 0 : _a.submitForm();
  };
  const handleButtonStateChange = useCallback((submitState, draftState) => {
    setSubmitButtonState(submitState);
    setSaveDraftButtonState(draftState);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bs, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Aa, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { className: "text-exp-neutral-900 text-xl font-bold", children: expenseTitle }),
            (draftData == null ? void 0 : draftData.data.totalAmount) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
              "$",
              draftData.data.totalAmount
            ] }),
            isDraft && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 bg-exp-yellow-200 text-exp-yellow-900 text-sm font-medium rounded-20", children: "DRAFT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: currentDraftId && draftData && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-exp-neutral-300", children: [
            currentDraftId,
            " • Created on ",
            new Date(draftData.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-38px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pe, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pe, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExpenseForm,
          {
            ref: expenseFormRef,
            onSubmit: handleSubmit,
            onSaveDraft: handleSaveDraft,
            onDraftSaved: () => {
            },
            initialData: draftData == null ? void 0 : draftData.data,
            draftId: currentDraftId,
            isSubmitting: submitExpenseMutation.isPending,
            isDrafting: saveDraftMutation.isPending,
            draftSaveError: saveDraftMutation.isError,
            onButtonStateChange: handleButtonStateChange
          },
          stableFormKey
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: currentDraftId && /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Pe,
              {
                type: "button",
                variant: "ghost",
                onClick: handleDeleteDraft,
                className: "text-red-600 hover:text-red-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }),
                  "Delete"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { className: "text-sm", children: "Delete draft" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Pe,
                {
                  type: "button",
                  variant: "outlined",
                  onClick: handleSaveDraftClick,
                  disabled: saveDraftButtonState.disabled,
                  children: saveDraftMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-5" }),
                    "Save Draft"
                  ] }) : "Save Draft"
                }
              ) }) }),
              saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: saveDraftButtonState.tooltip })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Pe,
                {
                  type: "button",
                  variant: "primary",
                  onClick: handleSubmitClick,
                  disabled: submitButtonState.disabled,
                  children: [
                    submitExpenseMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                    "Submit Expense"
                  ]
                }
              ) }) }),
              submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { className: "text-sm", children: submitButtonState.tooltip })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: handleDeleteDialogOpenChange,
        title: "Delete draft",
        description: "Are you sure you want to delete this expense draft? This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: deleteDraftMutation.isPending
      }
    )
  ] });
};
export {
  NewExpensePage as default
};

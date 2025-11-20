import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { E as ExpensesList } from "./ExpensesList-Ny2FmLOX.js";
import { E as Ea, l as ls, p as ps, f as fa, m as ma, h as ha, G as Ge, b as pa, v as vr, d as br, S as Sr } from "./createLucideIcon-CJLbBnZK.js";
import { E as EXPENSE_DETAILS_SECTION, a as EXPENSE_JUSTIFICATION_SECTION, C as COST_ALLOCATION_SECTION, A as ADDITIONAL_COMMENTS_SECTION } from "./expense-form-sections-DljJryko.js";
import { E as ExpenseFormField, u as useFormFieldValues, a as useAmountAllocationSync, b as useReceiptCheckboxEffects, c as useExpenseFormLeftColumn, S as SupportingFiles, d as useExpenseFormHandlers, f as fullExpenseValidationStrategy, C as ConfirmDialog } from "./SupportingFilesFormSection-BUAfmG7V.js";
import { I as Icon } from "./Icon-DYEjfqv0.js";
import "./api-BmdlBUGU.js";
import { k as useQueryClient, l as useQuery, q as queryKeys, L as LoadingSpinner } from "./LoadingSpinner-oVaRtv3i.js";
import "./api-De49E1Ub.js";
import "./api-nyXpf5b_.js";
import "./mileage-trip-sections-Dkx3GtLu.js";
import { c as createExpenseForm } from "./form-factory-pMqVnVZO.js";
import { R as ReceiptSection } from "./ReceiptSection-Cw8JqLFY.js";
import { u as useNavigate, f as useParams, a as RoutePaths, C as ChevronRight } from "./routes-BPGuc5lC.js";
import { u as useMutation } from "./zod-hmtOKhFn.js";
import { a as apiClient } from "./axiosInstance-4lu4Zxe-.js";
import { E as EXPENSE_ENDPOINTS } from "./config-BOIMHUBa.js";
import { C as ChevronLeft } from "./chevron-left-CnEQmRhR.js";
import { T as Trash2, S as Send } from "./trash-2-CQ3U4wp1.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ea, { className: "w-full h-full flex flex-col pt-1", children: [
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
      ls.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save expense draft:", error);
      ls.error("Failed to save. Please try again", {
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
      ls.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit expense:", error);
      ls.error("Fail to submit", {
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
      ls.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      console.error("Failed to delete draft:", error);
      ls.error("Fail to delete. Please try again.", {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(fa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { className: "text-exp-neutral-900 text-xl font-bold", children: expenseTitle }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ge, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ge, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(pa, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: currentDraftId && /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(br, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Ge,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { className: "text-sm", children: "Delete draft" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(br, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ge,
                {
                  type: "button",
                  variant: "outlined",
                  onClick: handleSaveDraftClick,
                  disabled: saveDraftButtonState.disabled,
                  children: saveDraftMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }),
                    "Save Draft"
                  ] }) : "Save Draft"
                }
              ) }) }),
              saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: saveDraftButtonState.tooltip })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(br, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Ge,
                {
                  type: "button",
                  variant: "primary",
                  onClick: handleSubmitClick,
                  disabled: submitButtonState.disabled,
                  children: [
                    submitExpenseMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                    "Submit Expense"
                  ]
                }
              ) }) }),
              submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { className: "text-sm", children: submitButtonState.tooltip })
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

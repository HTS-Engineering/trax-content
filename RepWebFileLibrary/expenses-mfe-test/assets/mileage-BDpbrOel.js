import { u as useFormFieldValues, H as useMileageRateSync, I as useReimbursableAmountSync, a as useAmountAllocationSync, C as ConfirmDialog } from "./SupportingFilesSection-CJh3DL8H.js";
import { importShared } from "./__federation_fn_import-DCl-vMH-.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { B as Bs, O as Oa, e as Aa, G as Ga, M as Me, f as Ba, $ as $r, g as Vr, z as zr, S as Sn, k as ks, d as apiClient } from "./axiosInstance-DJ0IFTL8.js";
import { C as ChevronLeft } from "./use-navigate-back-CQbfJyFC.js";
import { C as ChevronRight } from "./chevron-right-BwsBCAZW.js";
import { T as Trash2, S as Send } from "./trash-2-CaXe8WRt.js";
import { u as useQueryClient, k as useQuery, q as queryKeys } from "./query-keys-Cg9Inajk.js";
import { a as useMutation } from "./store-DwzDWWWf.js";
import { M as MILEAGE_ENDPOINTS } from "./endpoints-B5IysDN2.js";
function useMileageFormSync({
  control,
  setValue,
  getValues
}) {
  const { mileageType, totalDistance, ratePerUnit, reimbursableAmount } = useFormFieldValues(
    control,
    ["mileageType", "totalDistance", "ratePerUnit", "reimbursableAmount"]
  );
  useMileageRateSync({
    mileageType: mileageType || "",
    setValue,
    getValues
  });
  useReimbursableAmountSync({
    totalDistance: totalDistance || "",
    ratePerUnit: ratePerUnit || "",
    setValue,
    getValues,
    reimbursableAmountField: "reimbursableAmount"
  });
  useAmountAllocationSync({
    amount: parseFloat(reimbursableAmount || "0"),
    setValue,
    getValues,
    costAllocationsField: "costAllocations",
    isEqualSplitField: "isEqualSplit"
  });
}
const isValidDate = (date) => !isNaN(date.getTime());
const parseISODateAsLocal = (dateString) => {
  const isoDateMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoDateMatch) {
    const [, year, month, day] = isoDateMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return new Date(dateString);
};
const normalizeDateRange = (range) => {
  if (!(range == null ? void 0 : range.from)) return void 0;
  try {
    const fromDate = typeof range.from === "string" ? parseISODateAsLocal(range.from) : range.from;
    if (!isValidDate(fromDate)) return void 0;
    const toDate = range.to ? typeof range.to === "string" ? parseISODateAsLocal(range.to) : range.to : void 0;
    if (toDate && !isValidDate(toDate)) return void 0;
    return { from: fromDate, to: toDate };
  } catch {
    return void 0;
  }
};
const formatExpenseDate = (date) => {
  if (!date) return "";
  try {
    const parsedDate = typeof date === "string" ? parseISODateAsLocal(date) : date;
    if (!isValidDate(parsedDate)) return "";
    const month = parsedDate.toLocaleDateString("en-US", { month: "short" });
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
    return `${month} ${day}, ${year}`;
  } catch {
    return "";
  }
};
const formatExpensePeriod = (range) => {
  const normalizedRange = normalizeDateRange(range);
  if (!(normalizedRange == null ? void 0 : normalizedRange.from)) return "";
  try {
    const fromDate = normalizedRange.from;
    const toDate = normalizedRange.to;
    const formatDate = (date, includeYear = false) => {
      const month = date.toLocaleDateString("en-US", { month: "short" });
      const day = date.getDate();
      const year = date.getFullYear();
      return includeYear ? `${month} ${day}, ${year}` : `${month} ${day}`;
    };
    if (toDate && fromDate.getTime() !== toDate.getTime()) {
      const isCrossYear = fromDate.getFullYear() !== toDate.getFullYear();
      if (isCrossYear) {
        return `${formatDate(fromDate, true)} - ${formatDate(toDate, true)}`;
      }
      return `${formatDate(fromDate)} - ${formatDate(toDate)}, ${fromDate.getFullYear()}`;
    }
    return `${formatDate(fromDate)}, ${fromDate.getFullYear()}`;
  } catch {
    return "";
  }
};
const { useCallback, useRef, useState } = await importShared("react");
function ExpenseFormDialog({
  formKey,
  title,
  formComponent: FormComponent,
  initialData,
  draftId,
  isSubmitting,
  isDrafting,
  draftSaveError,
  onSubmit,
  onSaveDraft,
  onDeleteDraft,
  onClose,
  isDraft: _isDraft,
  draftInfo,
  amountDisplay,
  statusBadge
}) {
  const formRef = useRef(null);
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleButtonStateChange = useCallback(
    (submitState, draftState) => {
      setSubmitButtonState(submitState);
      setSaveDraftButtonState(draftState);
    },
    []
  );
  const handleOpenChange = (open) => {
    if (!open) {
      onClose();
    }
  };
  const handleSaveDraftClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.saveDraft();
  };
  const handleSubmitClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.submitForm();
  };
  const handleDeleteDraft = () => {
    if (!draftId) return;
    setIsDeleteDialogOpen(true);
  };
  const handleDeleteConfirm = async () => {
    if (!draftId || !onDeleteDraft) return;
    try {
      setIsDeleting(true);
      await onDeleteDraft();
      setIsDeleteDialogOpen(false);
    } finally {
      setIsDeleting(false);
    }
  };
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
  };
  const handleDeleteDialogOpenChange = (open) => {
    if (!open && isDeleting) {
      return;
    }
    setIsDeleteDialogOpen(open);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bs, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Aa, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { className: "text-exp-neutral-900 text-xl font-bold", children: title }),
            amountDisplay,
            statusBadge
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: draftId && draftInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-exp-neutral-300", children: [
            draftId,
            " • Created on",
            " ",
            new Date(draftInfo.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-38px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Me,
            {
              variant: "outlined",
              iconPosition: "center",
              className: "text-exp-neutral-70 hover:text-exp-neutral-200",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Me,
            {
              variant: "outlined",
              iconPosition: "center",
              className: "text-exp-neutral-70 hover:text-exp-neutral-200",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
            }
          )
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormComponent,
          {
            ref: formRef,
            onSubmit,
            onSaveDraft,
            onDraftSaved: () => {
            },
            initialData,
            draftId,
            isSubmitting,
            isDrafting,
            draftSaveError,
            onButtonStateChange: handleButtonStateChange
          },
          formKey
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: draftId && onDeleteDraft && /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Me,
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
                Me,
                {
                  type: "button",
                  variant: "outlined",
                  onClick: handleSaveDraftClick,
                  disabled: saveDraftButtonState.disabled,
                  children: isDrafting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-5" }),
                    "Save Draft"
                  ] }) : "Save Draft"
                }
              ) }) }),
              saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: saveDraftButtonState.tooltip })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Me,
                {
                  type: "button",
                  variant: "primary",
                  onClick: handleSubmitClick,
                  disabled: submitButtonState.disabled,
                  children: [
                    isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
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
    onDeleteDraft && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: handleDeleteDialogOpenChange,
        title: "Delete draft",
        description: "Are you sure you want to delete this draft? This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: isDeleting
      }
    )
  ] });
}
const useSaveMileageDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, draftId }) => {
      const endpoint = draftId ? MILEAGE_ENDPOINTS.UPDATE_DRAFT(draftId) : MILEAGE_ENDPOINTS.SAVE_DRAFT;
      const method = draftId ? "put" : "post";
      const response = await apiClient[method](endpoint, { data });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save mileage draft:", error);
      ks.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitMileage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data }) => {
      const response = await apiClient.post(
        MILEAGE_ENDPOINTS.SUBMIT_MILEAGE,
        { data }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageTrips.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("Mileage claim submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit mileage:", error);
      ks.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useMileageDraft = (draftId) => {
  return useQuery({
    queryKey: draftId ? queryKeys.mileageDrafts.detail(draftId) : queryKeys.mileageDrafts.details(),
    queryFn: async () => {
      if (!draftId) throw new Error("Draft ID is required");
      const response = await apiClient.get(
        MILEAGE_ENDPOINTS.GET_DRAFT(draftId)
      );
      return response.data;
    },
    enabled: !!draftId,
    retry: false,
    staleTime: 0
  });
};
const useDeleteMileageDraft = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (draftId) => {
      await apiClient.delete(MILEAGE_ENDPOINTS.DELETE_DRAFT(draftId));
    },
    onSuccess: () => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
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
export {
  ExpenseFormDialog as E,
  useSaveMileageDraft as a,
  useSubmitMileage as b,
  useDeleteMileageDraft as c,
  useMileageDraft as d,
  formatExpensePeriod as e,
  formatExpenseDate as f,
  useMileageFormSync as u
};

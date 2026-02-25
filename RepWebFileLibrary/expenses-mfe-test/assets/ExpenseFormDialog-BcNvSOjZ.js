const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/core-CAB4bpNs.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/_commonjsHelpers-CUmg6egw.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { d as devError, a as devLog, b as devWarn } from "./index-CvL7PQqL.js";
import { c as createLucideIcon, x as xs, v as bs, y as ws, S as Ss, z as Cs, H as ys, $ as $e, E as En, B as Bs, a as $a, i as Va, t as ka, J as Jn, G as Ga, T as Ta, d as cs, g as gs, Q as Qn, u as us, p as ps, L as zt, O as Ba, M as Mn, P as Pn, V as Vn, a0 as Ls, a1 as Hs, a2 as Os, a3 as Zn, a4 as za, a5 as Ks, a6 as Te, a7 as vs, a8 as Ar } from "./configuration-DCdBxpzA.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import { b as useMutation, n as useCountries, E as ExpenseFormType, A as AllowedMimeType, o as FILE_SIZE_LIMITS, p as MIME_TYPE_CONFIG, q as useDebouncedCallback, F as FormTypeId, r as useFormTypeId, s as FilePreviewType, a as useExpenseTypes, t as useCurrencies, c as useTaxTypesDisplay } from "./expense-api-PLgCxMEa.js";
import { c as create, d as devtools, a as apiClient } from "./axiosInstance-Cvzcyh16.js";
import { b as useQueryClient, a as useCompanyStore, q as queryKeys, E as EXPENSE_ENDPOINTS, c as useQuery, f as useDefaultCompany } from "./company-api-KM6oEmLj.js";
import { a as DEFAULT_CURRENCY, D as DEFAULT_CURRENCY_CODE, g as getCurrencyLocale } from "./currency-BubACaL0.js";
import { u as useForm, a, h as useWatch, s as string, D as DECIMAL_FORMAT_REGEX, o as object, j as boolean, k as custom, m as array, g as date, p as unknown, n as number, l as literal, C as Controller, c as createDecimalChangeHandler, f as useBusinessPurposes, q as useFormState } from "./business-purpose-api-Bz3oA18K.js";
import { E as ECostAllocation, I as ItemCategory } from "./expense-item-oPdxtthH.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { q as queryClient, C as CreditCard } from "./queryClient-CfTqsbNY.js";
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { P as Plus } from "./plus-CpghNPeZ.js";
const __iconNode = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode);
const FILE_ENDPOINTS = {
  // Upload file (receipt or supporting) - requires company and expenseId
  UPLOAD: (company, expenseId) => `/api/v1.0/expense-forms/${company}/files/drafts/${expenseId}/files`,
  // Download/Delete file by ID
  DOWNLOAD: (fileId) => `/api/v1.0/files/${fileId}`,
  DELETE: (fileId) => `/api/v1.0/files/${fileId}`
};
const { useCallback: useCallback$n, useEffect: useEffect$j, useRef: useRef$g, useState: useState$7 } = await importShared("react");
const ANIMATION_FALLBACK_MS = 300;
const ConfirmDialog = ({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  onCloseComplete,
  isLoading = false,
  variant = "error",
  confirmButtonClassName = "",
  cancelButtonClassName = ""
}) => {
  const [wasOpen, setWasOpen] = useState$7(open);
  const onCloseCompleteRef = useRef$g(onCloseComplete);
  const closeCompleteFiredRef = useRef$g(false);
  useEffect$j(() => {
    onCloseCompleteRef.current = onCloseComplete;
  }, [onCloseComplete]);
  useEffect$j(() => {
    let fallbackTimer;
    if (open) {
      setWasOpen(true);
      closeCompleteFiredRef.current = false;
    } else if (wasOpen && !closeCompleteFiredRef.current) {
      fallbackTimer = setTimeout(() => {
        var _a;
        if (!closeCompleteFiredRef.current) {
          closeCompleteFiredRef.current = true;
          setWasOpen(false);
          (_a = onCloseCompleteRef.current) == null ? void 0 : _a.call(onCloseCompleteRef);
        }
      }, ANIMATION_FALLBACK_MS);
    }
    return () => clearTimeout(fallbackTimer);
  }, [open, wasOpen]);
  const handleAnimationEnd = useCallback$n(() => {
    var _a;
    if (wasOpen && !open && !closeCompleteFiredRef.current) {
      closeCompleteFiredRef.current = true;
      setWasOpen(false);
      (_a = onCloseCompleteRef.current) == null ? void 0 : _a.call(onCloseCompleteRef);
    }
  }, [wasOpen, open]);
  const handleConfirm = async () => {
    await onConfirm();
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onOpenChange(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(xs, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    bs,
    {
      className: "max-w-md",
      onAnimationEnd: handleAnimationEnd,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ws, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "text-base font-semibold text-exp-neutral-600", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "text-sm font-normal text-exp-grey-600", children: description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "gap-3 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              variant: "soft",
              onClick: handleCancel,
              disabled: isLoading,
              className: `min-w-20 ${cancelButtonClassName}`,
              children: cancelLabel
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              variant,
              onClick: handleConfirm,
              disabled: isLoading,
              className: `min-w-20 ${confirmButtonClassName}`,
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-5" }) : confirmLabel
            }
          )
        ] })
      ]
    }
  ) });
};
const receiptInitialState = {
  pendingFile: null,
  uploadedAttachment: null,
  status: "idle",
  errorMessage: null
};
const supportingFilesInitialState = {
  pendingFiles: [],
  uploadedFiles: [],
  status: "idle",
  errorMessage: null
};
const usePendingUploadStore = create()(
  devtools(
    (set, get) => ({
      targetDraftId: null,
      receipt: {
        ...receiptInitialState,
        setPendingFile: (file) => set((state) => ({
          receipt: { ...state.receipt, pendingFile: file }
        })),
        clearPendingFile: () => set((state) => ({
          receipt: { ...state.receipt, pendingFile: null }
        })),
        setUploadedAttachment: (attachment) => set((state) => ({
          receipt: {
            ...state.receipt,
            uploadedAttachment: attachment,
            status: "complete"
          }
        })),
        clearUploadedAttachment: () => set((state) => ({
          receipt: {
            ...state.receipt,
            uploadedAttachment: null,
            status: "idle"
          }
        })),
        setStatus: (status, error) => set((state) => ({
          receipt: {
            ...state.receipt,
            status,
            errorMessage: error || null
          }
        }))
      },
      supportingFiles: {
        ...supportingFilesInitialState,
        setPendingFiles: (files) => set((state) => ({
          supportingFiles: { ...state.supportingFiles, pendingFiles: files }
        })),
        clearPendingFiles: () => set((state) => ({
          supportingFiles: { ...state.supportingFiles, pendingFiles: [] }
        })),
        setUploadedFiles: (attachments) => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            uploadedFiles: attachments,
            status: "complete"
          }
        })),
        addUploadedFiles: (attachments) => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            uploadedFiles: [...state.supportingFiles.uploadedFiles, ...attachments],
            status: "complete"
          }
        })),
        clearUploadedFiles: () => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            uploadedFiles: [],
            status: "idle"
          }
        })),
        setStatus: (status, error) => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            status,
            errorMessage: error || null
          }
        }))
      },
      startUploadFlow: (draftId) => set((state) => ({
        targetDraftId: draftId,
        receipt: {
          ...state.receipt,
          status: "idle",
          errorMessage: null
        },
        supportingFiles: {
          ...state.supportingFiles,
          status: "idle",
          errorMessage: null
        }
      })),
      updateDraftId: (newDraftId) => set({ targetDraftId: newDraftId }),
      reset: () => set({
        targetDraftId: null,
        receipt: { ...get().receipt, ...receiptInitialState },
        supportingFiles: { ...get().supportingFiles, ...supportingFilesInitialState }
      }),
      isForDraft: (draftId) => {
        const { targetDraftId } = get();
        if (!targetDraftId && !draftId) return true;
        return targetDraftId === draftId;
      }
    }),
    {
      name: "pending-upload-storage"
    }
  )
);
var MileageFormType = /* @__PURE__ */ ((MileageFormType2) => {
  MileageFormType2["Trip"] = "trip";
  MileageFormType2["Period"] = "period";
  return MileageFormType2;
})(MileageFormType || {});
function isMileageTripData(data) {
  return data.formType === "trip";
}
function isMileagePeriodData(data) {
  return data.formType === "period";
}
function parseOptionalInt(value) {
  if (!value || value.trim() === "") return null;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? null : parsed;
}
function parseOptionalDecimal(value) {
  if (!value || value.trim() === "") return null;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}
function toISODateString(dateStr) {
  if (!dateStr || dateStr.trim() === "") return null;
  try {
    const date2 = new Date(dateStr);
    if (isNaN(date2.getTime())) return null;
    return date2.toISOString();
  } catch {
    return null;
  }
}
function mapCostAllocation(allocation) {
  const entityData = allocation.entityData;
  const base = {
    amount: allocation.amount,
    percentage: allocation.percentage
  };
  switch (allocation.type) {
    case ECostAllocation.Rep:
      return {
        ...base,
        salesRepId: (entityData == null ? void 0 : entityData.id) ?? null
      };
    case ECostAllocation.Team:
      return {
        ...base,
        teamId: (entityData == null ? void 0 : entityData.id) ? parseInt(entityData.id, 10) : null
      };
    case ECostAllocation.Project:
      return {
        ...base,
        projectId: (entityData == null ? void 0 : entityData.projectDbId) ?? null,
        purchaseOrderId: (entityData == null ? void 0 : entityData.poDbId) ?? null,
        supplierId: (entityData == null ? void 0 : entityData.supplierId) ?? null
      };
    case ECostAllocation.Admin:
      return {
        ...base,
        projectId: (entityData == null ? void 0 : entityData.projectDbId) ?? null,
        purchaseOrderId: (entityData == null ? void 0 : entityData.poDbId) ?? null,
        supplierId: (entityData == null ? void 0 : entityData.supplierId) ?? null
      };
    default:
      return base;
  }
}
function mapFormDataToCreateRequest(data, expenseTypes) {
  var _a, _b, _c, _d;
  const typeId = parseOptionalInt(data.expenseType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? null,
    vendor: data.vendor || null,
    date: toISODateString(data.expenseDate),
    locationId: parseOptionalInt(data.expenseLocation),
    paymentMethodId: parseOptionalInt(data.paymentMethod),
    foreignAmount: parseOptionalDecimal(data.netAmount),
    totalAmount: parseOptionalDecimal(data.totalAmount),
    taxTypeId: parseOptionalInt(data.taxType),
    tax: parseOptionalDecimal(data.taxAmount),
    businessPurposeId: parseOptionalInt(data.businessPurpose),
    description: data.expenseDescription || null,
    personsEntertained: data.personsEntertained || null,
    additionalComments: data.additionalComments || null,
    affidavitJustification: ((_a = data.affidavit) == null ? void 0 : _a.justification) || null,
    affidavitInitials: ((_b = data.affidavit) == null ? void 0 : _b.digitalSignature) || null,
    // Tax currency is always CAD per business rules (TRX-117)
    taxCurrencyCode: parseOptionalDecimal(data.taxAmount) ? "CAD" : null,
    foreignCurrencyCode: ((_c = data.netCurrency) == null ? void 0 : _c.code) || null,
    totalCurrencyCode: ((_d = data.totalCurrency) == null ? void 0 : _d.code) || null,
    costAllocationDeferred: data.deferToApprover ?? null,
    costAllocations: data.costAllocations && data.costAllocations.length > 0 ? data.costAllocations.map(mapCostAllocation) : null
  };
}
const mapFormDataToUpdateRequest = mapFormDataToCreateRequest;
const mapToPaymentMethod = (api) => ({
  id: String(api.id),
  name: api.name
});
function normalizeExpenseDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    vendor: response.vendor,
    expenseDate: response.date,
    totalAmount: response.totalAmount,
    totalCurrencyCode: response.totalCurrencyCode,
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
function buildExpenseItemForCache(response, formData) {
  return {
    id: String(response.id),
    itemType: ItemCategory.Expense,
    status: "draft",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate ?? response.createdDate,
    userId: response.formOwner,
    data: formData
  };
}
const useSaveExpenseDraft = () => {
  const queryClient2 = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ data, draftId, signal }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      const expenseTypes = queryClient2.getQueryData(
        queryKeys.expenseTypes.list(company, false)
      );
      if (draftId) {
        const payload = mapFormDataToUpdateRequest(data, expenseTypes);
        devLog("📤 Update draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT(company, draftId),
          payload,
          { signal }
        );
        devLog("📥 Update draft response:", response.data);
        return {
          draft: normalizeExpenseDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      } else {
        const payload = mapFormDataToCreateRequest(data, expenseTypes);
        devLog("📤 Create draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT(company),
          payload,
          { signal }
        );
        devLog("📥 Create draft response:", response.data);
        return {
          draft: normalizeExpenseDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      }
    },
    onSuccess: ({ draft, response, formData }, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      const expenseItem = buildExpenseItemForCache(response, formData);
      if (variables.draftId) {
        queryClient2.setQueryData(
          queryKeys.expenseItem.detail(variables.draftId),
          expenseItem
        );
      } else {
        queryClient2.setQueryData(queryKeys.expenseItem.detail(draft.id), expenseItem);
      }
      Bs.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      devError("Failed to save expense draft:", error);
      Bs.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useDeleteExpenseDraft = (options) => {
  const queryClient2 = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ draftId }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT(company, draftId));
    },
    onSuccess: async (_data, variables) => {
      var _a;
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient2.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient2.removeQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      Bs.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      devError("Failed to delete draft:", error);
      Bs.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
const useSubmitExpense = () => {
  const queryClient2 = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ draftId }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.SUBMIT_DRAFT(company, draftId)
      );
      return normalizeExpenseDraftResponse(response.data);
    },
    onSuccess: (data) => {
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient2.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(data.id)
      });
      Bs.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      devError("Failed to submit expense:", error);
      Bs.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const usePaymentMethods = () => {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const company = selectedCompany == null ? void 0 : selectedCompany.shortName;
  return useQuery({
    queryKey: queryKeys.paymentMethods.list(company ?? ""),
    queryFn: async () => {
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_PAYMENT_METHODS(company)
      );
      return response.data.map(mapToPaymentMethod);
    },
    enabled: !!company,
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
};
const { useCallback: useCallback$m, useEffect: useEffect$i, useMemo: useMemo$k, useRef: useRef$f } = await importShared("react");
function useBaseExpenseForm(config2, props) {
  const {
    onSubmit,
    onSaveDraft,
    onDraftSaved,
    isSubmitting = false,
    isDrafting = false,
    draftSaveError = false
  } = props;
  const FORM_VALIDATION_CONFIG = {
    validationTrigger: "onTouched",
    revalidationTrigger: "onChange",
    errorDisplayMode: "all"
  };
  const form = useForm({
    resolver: a(config2.schema),
    defaultValues: config2.defaultValues,
    mode: FORM_VALIDATION_CONFIG.validationTrigger,
    reValidateMode: FORM_VALIDATION_CONFIG.revalidationTrigger,
    criteriaMode: FORM_VALIDATION_CONFIG.errorDisplayMode
  });
  const {
    handleSubmit: rhfHandleSubmit,
    control,
    getValues,
    formState: { isDirty, errors, isValid },
    trigger,
    reset
  } = form;
  const prevIsDraftingRef = useRef$f(isDrafting);
  useEffect$i(() => {
    if (prevIsDraftingRef.current === true && isDrafting === false && !draftSaveError) {
      const currentValues = getValues();
      reset(currentValues, { keepValues: true, keepDirty: false });
      onDraftSaved == null ? void 0 : onDraftSaved();
    }
    prevIsDraftingRef.current = isDrafting;
  }, [isDrafting, draftSaveError, getValues, reset, onDraftSaved]);
  const fieldsForValidation = useMemo$k(() => {
    const draftFields = config2.fieldsForDraftCheck || [];
    return draftFields.length > 0 ? [...draftFields] : void 0;
  }, [config2.fieldsForDraftCheck]);
  const watchedFieldValues = useWatch({
    control,
    name: fieldsForValidation ?? [],
    disabled: !fieldsForValidation
  });
  const allFormData = useWatch({ control, disabled: !!fieldsForValidation });
  const formDataForValidation = useMemo$k(() => {
    if (!fieldsForValidation) {
      return allFormData;
    }
    if (!Array.isArray(watchedFieldValues)) {
      return {};
    }
    return fieldsForValidation.reduce((acc, field, index) => {
      acc[field] = watchedFieldValues[index];
      return acc;
    }, {});
  }, [fieldsForValidation, watchedFieldValues, allFormData]);
  const validationErrors = useMemo$k(() => {
    const errorMessages = [];
    Object.entries(errors).forEach(([, error]) => {
      if (error == null ? void 0 : error.message) {
        errorMessages.push(error.message);
      }
      const rootError = error == null ? void 0 : error.root;
      if (rootError && typeof rootError === "object" && "message" in rootError) {
        errorMessages.push(rootError.message);
      }
    });
    return errorMessages;
  }, [errors, Object.keys(errors).length]);
  const hasErrors = validationErrors.length > 0;
  const canSave = useMemo$k(
    () => config2.canSaveDraft(formDataForValidation),
    [formDataForValidation, config2]
  );
  const canSubmit = isValid && !isSubmitting;
  const handleFormSubmit = useCallback$m(
    async (data) => {
      try {
        const result = config2.validateForSubmission(data);
        if (!result.success) {
          devError("Validation failed:", result.error);
          return;
        }
        await (onSubmit == null ? void 0 : onSubmit(data));
      } catch (error) {
        devError("Form submission error:", error);
        throw error;
      }
    },
    [config2, onSubmit]
  );
  const handleDraftSave = useCallback$m(
    async () => {
      try {
        const data = getValues();
        if (!canSave) {
          return;
        }
        if (config2.validateForDraft) {
          const result = config2.validateForDraft(data);
          if (!result.success) {
            devError("Draft validation failed:", result.error);
            return;
          }
        }
        await (onSaveDraft == null ? void 0 : onSaveDraft(data));
      } catch (error) {
        devError("Draft save error:", error);
        throw error;
      }
    },
    [getValues, canSave, config2, onSaveDraft]
  );
  const validateForm = useCallback$m(async () => {
    const isFormValid = await trigger();
    return isFormValid && !isSubmitting;
  }, [trigger, isSubmitting]);
  const getSubmitButtonState = useCallback$m(() => {
    if (isSubmitting) {
      return { disabled: true, tooltip: "Submitting..." };
    }
    if (hasErrors) {
      return { disabled: true, tooltip: "Please fix validation errors" };
    }
    if (!isValid) {
      return { disabled: true, tooltip: "Please fill all required fields" };
    }
    return { disabled: false };
  }, [isSubmitting, hasErrors, isValid]);
  const getSaveDraftButtonState = useCallback$m(() => {
    if (isDrafting) {
      return { disabled: true, tooltip: "Saving draft..." };
    }
    if (!isDirty) {
      return { disabled: true, tooltip: "No changes to save" };
    }
    if (!canSave) {
      return { disabled: true, tooltip: "At least one field must be filled" };
    }
    return { disabled: false };
  }, [isDrafting, isDirty, canSave]);
  return {
    form,
    validationErrors,
    hasErrors,
    canSave,
    canSubmit,
    handleSubmit: rhfHandleSubmit(handleFormSubmit),
    handleDraftSave,
    validateForm,
    getSubmitButtonState,
    getSaveDraftButtonState,
    getValues
  };
}
var EXP_LIMIT = 9e15, MAX_DIGITS = 1e9, NUMERALS = "0123456789abcdef", LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", DEFAULTS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -EXP_LIMIT,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: EXP_LIMIT,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: false
  // true/false
}, inexact, quadrant, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", precisionLimitExceeded = decimalError + "Precision limit exceeded", cryptoUnavailable = decimalError + "crypto unavailable", tag = "[object Decimal]", mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0) x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s) return new Ctor(NaN);
  if (min2.gt(max2)) throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs2 = x.s, ys2 = y.s;
  if (!xd || !yd) {
    return !xs2 || !ys2 ? NaN : xs2 !== ys2 ? xs2 : xd === yd ? 0 : !xd ^ xs2 < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0]) return xd[0] ? xs2 : yd[0] ? -ys2 : 0;
  if (xs2 !== ys2) return xs2;
  if (x.e !== y.e) return x.e > y.e ^ xs2 < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs2 < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs2 < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d) return new Ctor(NaN);
  if (!x.d[0]) return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w) for (; w % 10 == 0; w /= 10) n--;
    if (n < 0) n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero()) return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(x.s);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero()) return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s) return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--; ) ;
  }
  if (k) r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; ) k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (x.d) y.s = -y.s;
    else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0]) y.s = -y.s;
    else if (xd[0]) y = new Ctor(x);
    else return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; ) d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; ) xd.pop();
  for (; xd[0] === 0; xd.shift()) --e;
  if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0]) y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; ) d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; ) xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k) k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0) n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; ) r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; ) r.pop();
  if (carry) ++e;
  else r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0) return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd) return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1) break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d) return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d) return y.s ? x : y;
    if (!y.d) {
      if (y.s) y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1)) return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1)) return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1) return new Ctor(NaN);
    if ((y.d[e] & 1) == 0) s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws2, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws2 = d[i] + "";
      k = LOG_BASE - ws2.length;
      if (k) str += getZeroString(k);
      str += ws2;
    }
    w = d[i];
    ws2 = w + "";
    k = LOG_BASE - ws2.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; ) w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10) --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0) rd = rd / 100 | 0;
      else if (i == 1) rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0) rd = rd / 1e3 | 0;
      else if (i == 1) rd = rd / 100 | 0;
      else if (i == 2) rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0) arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero()) return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = /* @__PURE__ */ (function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry) x.unshift(carry);
    return x;
  }
  function compare(a2, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a2[i] != b[i]) {
          r = a2[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a2, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a2[aL] -= i;
      i = a2[aL] < b[aL] ? 1 : 0;
      a2[aL] = i * base + a2[aL] - b[aL];
    }
    for (; !a2[0] && a2.length > 1; ) a2.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(
        // Return NaN if either NaN, or both Infinity or 0.
        !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
        )
      );
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++) ;
    if (yd[i] > (xd[i] || 0)) e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; ) rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2) ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base) k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0) cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0]) qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
})();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out: if (sd != null) {
    xd = x.d;
    if (!xd) return x;
    for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
    i = sd - digits;
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];
      rd = w / mathpow(10, digits - j - 1) % 10 | 0;
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k = xd.length;
      if (xdi >= k) {
        if (isTruncated) {
          for (; k++ <= xdi; ) xd.push(0);
          w = rd = 0;
          digits = 1;
          i %= LOG_BASE;
          j = i - LOG_BASE + 1;
        } else {
          break out;
        }
      } else {
        w = k = xd[xdi];
        for (digits = 1; k >= 10; k /= 10) digits++;
        i %= LOG_BASE;
        j = i - LOG_BASE + digits;
        rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
      }
    }
    isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
    roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
    if (sd < 1 || !xd[0]) {
      xd.length = 0;
      if (roundUp) {
        sd -= x.e + 1;
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x.e = -sd || 0;
      } else {
        xd[0] = x.e = 0;
      }
      return x;
    }
    if (i == 0) {
      xd.length = xdi;
      k = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k = mathpow(10, LOG_BASE - i);
      xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
    }
    if (roundUp) {
      for (; ; ) {
        if (xdi == 0) {
          for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
          j = xd[0] += k;
          for (k = 1; j >= 10; j /= 10) k++;
          if (i != k) {
            x.e++;
            if (xd[0] == BASE) xd[0] = 1;
          }
          break;
        } else {
          xd[xdi] += k;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k = 1;
        }
      }
    }
    for (i = xd.length; xd[--i] === 0; ) xd.pop();
  }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite()) return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10) e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10) len--;
    for (w = digits[0]; w >= 10; w /= 10) len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; ) zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k)) isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0) ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
  var k, y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    }
    k = x.cmp(y);
    if (k === n || k === 0 && x.s === n) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++) ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;
    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; ) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; ) str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str)) return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str) x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i) xd.pop();
  if (i < 0) return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat) x = divide(x, divisor, len * 4);
  if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; ) ;
      if (j == -1) break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e) n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; ) xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len) ;
      for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++) str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len) ;
            for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; ) str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len) for (e -= len; e--; ) str += "0";
        else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps2 = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps2.length; i += 3) {
    if (p = ps2[i], useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps2[i + 1] && v <= ps2[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps2;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2)) return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      }
      if (v * 0 !== 0) {
        if (!v) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    }
    if (t === "string") {
      if ((i2 = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        if (i2 === 43) v = v.slice(1);
        x.s = 1;
      }
      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }
    if (t === "bigint") {
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      return parseDecimal(x, v.toString());
    }
    throw Error(invalidArgument + v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0) obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps2 = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps2.length; ) if (!obj.hasOwnProperty(p = ps2[i++])) obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, -1);
}
function min() {
  return maxOrMin(this, arguments, 1);
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0) sd = this.precision;
  else checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; ) rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--) rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
    if (k < LOG_BASE) e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; ) x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
const { useMemo: useMemo$j } = await importShared("react");
const useCostAllocation = ({
  allocations,
  totalAmount
}) => {
  const isEnabled = useMemo$j(
    () => allocations.length > 0 || totalAmount > 0,
    [allocations.length, totalAmount]
  );
  const allocatedPercentage = useMemo$j(() => {
    const totalPercentageDecimal = allocations.reduce(
      (sum2, allocation) => sum2.plus(allocation.percentage ?? 0),
      new Decimal(0)
    );
    return totalPercentageDecimal.toNumber();
  }, [allocations]);
  const remainingPercentage = useMemo$j(() => {
    return Math.max(0, 100 - allocatedPercentage);
  }, [allocatedPercentage]);
  const progressValue = useMemo$j(() => {
    return parseFloat(allocatedPercentage.toFixed(2));
  }, [allocatedPercentage]);
  const progressError = useMemo$j(() => {
    const roundedPercentage = parseFloat(allocatedPercentage.toFixed(2));
    if (roundedPercentage > 100) {
      return "Total allocation cannot exceed 100%";
    }
    return void 0;
  }, [allocatedPercentage]);
  return {
    isEnabled,
    allocatedPercentage,
    remainingPercentage,
    progressValue,
    progressError
  };
};
const generateId = () => crypto.randomUUID();
const { useCallback: useCallback$l } = await importShared("react");
const useDisableEqualSplit = (setValue, getValues, field) => {
  return useCallback$l(() => {
    if (!field) return;
    const current = getValues(field);
    if (current) {
      setValue(
        field,
        false,
        {
          shouldValidate: false,
          shouldDirty: true
        }
      );
    }
  }, [field, setValue, getValues]);
};
const COST_ALLOCATION_CONSTANTS = {
  DECIMAL_PLACES: 2,
  MIN_SEARCH_LENGTH: 2,
  SEARCH_DELAY_MS: 300,
  LABELS: {
    PURCHASE_ORDER: "Purchase Order (PO)",
    EQUAL_SPLIT: "Equal Split",
    ADD_ALLOCATION: "Add Allocation"
  },
  TOLERANCE: {
    FLOATING_POINT: 0.01
  }
};
const COST_ALLOCATION_LABELS = COST_ALLOCATION_CONSTANTS.LABELS;
const COST_ALLOCATION_TOLERANCE = COST_ALLOCATION_CONSTANTS.TOLERANCE.FLOATING_POINT;
const DECIMAL_PLACES = COST_ALLOCATION_CONSTANTS.DECIMAL_PLACES;
const MIN_SEARCH_LENGTH = COST_ALLOCATION_CONSTANTS.MIN_SEARCH_LENGTH;
const SEARCH_DELAY_MS = COST_ALLOCATION_CONSTANTS.SEARCH_DELAY_MS;
Decimal.set({ precision: 20, rounding: Decimal.ROUND_HALF_UP });
const areAllocationsEqual = (allocations, totalAmount) => {
  if (allocations.length <= 1) return false;
  const expectedPercentage = 100 / allocations.length;
  if (totalAmount === 0) {
    return allocations.every(
      (allocation) => Math.abs(allocation.percentage - expectedPercentage) < COST_ALLOCATION_TOLERANCE && allocation.amount === 0
    );
  }
  const expectedAmount = totalAmount / allocations.length;
  return allocations.every((allocation, index) => {
    const isLastItem = index === allocations.length - 1;
    if (isLastItem) {
      const sumOfOthers = allocations.slice(0, -1).reduce((sum2, a2) => sum2 + a2.amount, 0);
      const expectedLastAmount = totalAmount - sumOfOthers;
      return Math.abs(allocation.amount - expectedLastAmount) < COST_ALLOCATION_TOLERANCE;
    }
    return Math.abs(allocation.amount - expectedAmount) < COST_ALLOCATION_TOLERANCE && Math.abs(allocation.percentage - expectedPercentage) < COST_ALLOCATION_TOLERANCE;
  });
};
const calculateEqualDistribution = (allocations, totalAmount) => {
  if (allocations.length === 0) return allocations;
  const count = allocations.length;
  if (!totalAmount) {
    const equalPercentageDecimal = new Decimal(100).dividedBy(count);
    const roundedEqualPercentage = parseFloat(
      equalPercentageDecimal.toDecimalPlaces(DECIMAL_PLACES).toString()
    );
    return allocations.map((allocation, index) => {
      const isLastItem = index === count - 1;
      if (isLastItem) {
        const sumOfOthersPercentage = new Decimal(roundedEqualPercentage).times(count - 1);
        const lastPercentage = new Decimal(100).minus(sumOfOthersPercentage);
        return {
          ...allocation,
          amount: 0,
          percentage: parseFloat(lastPercentage.toDecimalPlaces(DECIMAL_PLACES).toString())
        };
      }
      return {
        ...allocation,
        amount: 0,
        percentage: roundedEqualPercentage
      };
    });
  }
  const totalDecimal = new Decimal(totalAmount);
  const countDecimal = new Decimal(count);
  const equalAmountDecimal = totalDecimal.dividedBy(countDecimal);
  const baseAmount = parseFloat(
    equalAmountDecimal.toDecimalPlaces(DECIMAL_PLACES, Decimal.ROUND_DOWN).toString()
  );
  const totalBaseAmount = new Decimal(baseAmount).times(count);
  const remainder = totalDecimal.minus(totalBaseAmount);
  const extraCent = new Decimal(0.01);
  const itemsWithExtra = Math.floor(remainder.dividedBy(extraCent).toNumber());
  const amounts = allocations.map((_, index) => {
    const shouldGetExtra = index < itemsWithExtra;
    const amount = shouldGetExtra ? parseFloat(new Decimal(baseAmount).plus(extraCent).toDecimalPlaces(DECIMAL_PLACES).toString()) : baseAmount;
    return amount;
  });
  const percentages = amounts.map((amount, index) => {
    const isLastItem = index === count - 1;
    if (isLastItem) {
      const sumOfOthersPercentage = amounts.slice(0, -1).reduce((sum2, amt) => {
        const pct = new Decimal(amt).dividedBy(totalDecimal).times(100);
        const roundedPct = parseFloat(pct.toDecimalPlaces(DECIMAL_PLACES).toString());
        return sum2.plus(roundedPct);
      }, new Decimal(0));
      return parseFloat(
        new Decimal(100).minus(sumOfOthersPercentage).toDecimalPlaces(DECIMAL_PLACES).toString()
      );
    }
    return parseFloat(
      new Decimal(amount).dividedBy(totalDecimal).times(100).toDecimalPlaces(DECIMAL_PLACES).toString()
    );
  });
  return allocations.map((allocation, index) => ({
    ...allocation,
    amount: amounts[index],
    percentage: percentages[index]
  }));
};
const recalculateAmounts = (allocations, totalAmount) => {
  if (allocations.length === 0) return allocations;
  if (totalAmount === 0) {
    return allocations.map((allocation) => ({
      ...allocation,
      amount: 0
    }));
  }
  const totalDecimal = new Decimal(totalAmount);
  const totalPercentageDecimal = allocations.reduce(
    (sum2, a2) => sum2.plus(a2.percentage),
    new Decimal(0)
  );
  const totalPercentage = totalPercentageDecimal.toNumber();
  const isFullAllocation = Math.abs(100 - totalPercentage) < COST_ALLOCATION_TOLERANCE;
  if (isFullAllocation) {
    return allocations.map((allocation, index) => {
      const isLastItem = index === allocations.length - 1;
      if (isLastItem) {
        const sumOfOthersDecimal = allocations.slice(0, -1).reduce((sum2, a2) => {
          const percentDecimal2 = new Decimal(a2.percentage);
          const amountDecimal = totalDecimal.times(percentDecimal2).dividedBy(100);
          return sum2.plus(amountDecimal);
        }, new Decimal(0));
        const lastAmount = totalDecimal.minus(sumOfOthersDecimal);
        return {
          ...allocation,
          amount: parseFloat(lastAmount.toDecimalPlaces(DECIMAL_PLACES).toString())
        };
      }
      const percentDecimal = new Decimal(allocation.percentage);
      const newAmount = totalDecimal.times(percentDecimal).dividedBy(100);
      return {
        ...allocation,
        amount: parseFloat(newAmount.toDecimalPlaces(DECIMAL_PLACES).toString())
      };
    });
  }
  return allocations.map((allocation) => {
    const percentDecimal = new Decimal(allocation.percentage);
    const newAmount = totalDecimal.times(percentDecimal).dividedBy(100);
    return {
      ...allocation,
      amount: parseFloat(newAmount.toDecimalPlaces(DECIMAL_PLACES).toString())
    };
  });
};
const { useCallback: useCallback$k, useMemo: useMemo$i } = await importShared("react");
const useCostAllocationHandlers = (setValue, getValues, costAllocationsField, isEqualSplitField, totalAmountField2) => {
  const disableEqualSplit = useDisableEqualSplit(setValue, getValues, isEqualSplitField);
  const addAllocation = useCallback$k(
    (type) => {
      const currentAllocations = getValues(costAllocationsField) || [];
      const isFirstAllocation = currentAllocations.length === 0;
      const initialAmount = isFirstAllocation && totalAmountField2 ? parseFloat(getValues(totalAmountField2) || "0") : 0;
      const initialPercentage = isFirstAllocation ? 100 : 0;
      const newAllocation = {
        id: generateId(),
        name: "",
        percentage: initialPercentage,
        amount: initialAmount,
        type
      };
      setValue(
        costAllocationsField,
        [...currentAllocations, newAllocation],
        {
          shouldValidate: true,
          shouldDirty: true
        }
      );
      disableEqualSplit();
    },
    [setValue, getValues, costAllocationsField, totalAmountField2, disableEqualSplit]
  );
  const updateAllocationEntity = useCallback$k(
    (id, entity) => {
      const currentAllocations = getValues(costAllocationsField) || [];
      const updatedAllocations = currentAllocations.map(
        (allocation) => allocation.id === id ? {
          ...allocation,
          name: (entity == null ? void 0 : entity.label) || "",
          entityData: (entity == null ? void 0 : entity.data) || void 0
        } : allocation
      );
      setValue(
        costAllocationsField,
        updatedAllocations,
        {
          shouldValidate: true,
          shouldDirty: true
        }
      );
    },
    [setValue, getValues, costAllocationsField]
  );
  const removeAllocation = useCallback$k(
    (id) => {
      const currentAllocations = getValues(costAllocationsField) || [];
      const isEqualSplit = isEqualSplitField ? getValues(isEqualSplitField) : false;
      const filteredAllocations = currentAllocations.filter(
        (allocation) => allocation.id !== id
      );
      let finalAllocations = filteredAllocations;
      if (isEqualSplit && totalAmountField2 && filteredAllocations.length > 1) {
        const totalAmountStr = getValues(totalAmountField2);
        const totalAmount = parseFloat(totalAmountStr || "0");
        finalAllocations = calculateEqualDistribution(filteredAllocations, totalAmount);
      }
      setValue(
        costAllocationsField,
        finalAllocations,
        {
          shouldValidate: true,
          shouldDirty: true
        }
      );
      if (!isEqualSplit || filteredAllocations.length < 2) {
        disableEqualSplit();
      }
    },
    [setValue, getValues, costAllocationsField, isEqualSplitField, totalAmountField2, disableEqualSplit]
  );
  const getSelectedValue = useCallback$k(
    (allocationId, allocations) => {
      const allocation = allocations.find((a2) => a2.id === allocationId);
      if (!allocation || !allocation.name) {
        return null;
      }
      return {
        value: allocationId,
        label: allocation.name,
        data: allocation.entityData
      };
    },
    []
  );
  return useMemo$i(() => ({
    actions: {
      addAllocation,
      updateAllocationEntity,
      removeAllocation
    },
    helpers: {
      getSelectedValue,
      getValues
    }
  }), [addAllocation, updateAllocationEntity, removeAllocation, getSelectedValue, getValues]);
};
const { useCallback: useCallback$j, useEffect: useEffect$h, useRef: useRef$e } = await importShared("react");
const useAllocationSync = ({
  index,
  totalAmount,
  setValue,
  trigger,
  getValues,
  isEqualSplitField
}) => {
  const isEditingAmountRef = useRef$e(false);
  const isEditingPercentageRef = useRef$e(false);
  const disableEqualSplit = useDisableEqualSplit(setValue, getValues, isEqualSplitField);
  const setAmountEditing = useCallback$j((editing) => {
    isEditingAmountRef.current = editing;
  }, []);
  const setPercentageEditing = useCallback$j((editing) => {
    isEditingPercentageRef.current = editing;
  }, []);
  const syncPercentageFromAmount = useCallback$j(
    (amount) => {
      if (isEditingPercentageRef.current) return;
      if (totalAmount === 0 || !isFinite(amount) || isNaN(amount) || amount < 0) return;
      disableEqualSplit();
      const amountDecimal = new Decimal(amount);
      const totalDecimal = new Decimal(totalAmount);
      const rawPercentage = amountDecimal.dividedBy(totalDecimal).times(100);
      const roundedPercentage = parseFloat(rawPercentage.toDecimalPlaces(DECIMAL_PLACES).toString());
      setValue(`costAllocations.${index}.percentage`, roundedPercentage, {
        shouldValidate: false,
        shouldDirty: true
      });
      trigger([
        `costAllocations.${index}.percentage`,
        `costAllocations.${index}.amount`,
        "costAllocations"
      ]);
    },
    [index, totalAmount, setValue, trigger, disableEqualSplit]
  );
  const syncAmountFromPercentage = useCallback$j(
    (percentage) => {
      if (isEditingAmountRef.current) return;
      if (!isFinite(percentage) || isNaN(percentage)) return;
      disableEqualSplit();
      if (!totalAmount) {
        setValue(`costAllocations.${index}.amount`, 0, {
          shouldValidate: false,
          shouldDirty: true
        });
      } else {
        const totalDecimal = new Decimal(totalAmount);
        const percentDecimal = new Decimal(percentage);
        const rawAmount = totalDecimal.times(percentDecimal).dividedBy(100);
        const roundedAmount = parseFloat(rawAmount.toDecimalPlaces(DECIMAL_PLACES).toString());
        setValue(`costAllocations.${index}.amount`, roundedAmount, {
          shouldValidate: false,
          shouldDirty: true
        });
      }
      trigger([
        `costAllocations.${index}.amount`,
        `costAllocations.${index}.percentage`,
        "costAllocations"
      ]);
    },
    [index, totalAmount, setValue, trigger, disableEqualSplit]
  );
  useEffect$h(() => {
    return () => {
      isEditingAmountRef.current = false;
      isEditingPercentageRef.current = false;
    };
  }, []);
  return {
    syncPercentageFromAmount,
    syncAmountFromPercentage,
    setAmountEditing,
    setPercentageEditing
  };
};
const { useCallback: useCallback$i, useEffect: useEffect$g, useMemo: useMemo$h } = await importShared("react");
const useEqualSplit = ({
  allocations,
  isEqualSplit,
  setValue,
  getValues,
  totalAmount,
  totalAmountField: totalAmountField2,
  costAllocationsField,
  isEqualSplitField
}) => {
  const canEnableEqualSplit = useMemo$h(() => {
    return allocations.length > 1;
  }, [allocations.length]);
  const isCurrentlyEqual = useMemo$h(() => {
    return areAllocationsEqual(allocations, totalAmount);
  }, [allocations, totalAmount]);
  const distributeEqually = useCallback$i(() => {
    const currentAllocations = getValues(costAllocationsField) || [];
    const currentTotalAmountStr = getValues(totalAmountField2);
    const currentTotalAmount = parseFloat(currentTotalAmountStr || "0");
    if (currentAllocations.length <= 1) return;
    const distributedAllocations = calculateEqualDistribution(currentAllocations, currentTotalAmount);
    setValue(
      costAllocationsField,
      distributedAllocations,
      {
        shouldValidate: true,
        shouldDirty: true
      }
    );
    setValue(
      isEqualSplitField,
      true,
      {
        shouldValidate: false,
        shouldDirty: true
      }
    );
  }, [getValues, setValue, costAllocationsField, totalAmountField2, isEqualSplitField]);
  const toggleEqualSplit = useCallback$i(() => {
    if (!canEnableEqualSplit) return;
    if (isEqualSplit) {
      setValue(
        isEqualSplitField,
        false,
        {
          shouldValidate: false,
          shouldDirty: true
        }
      );
    } else {
      distributeEqually();
    }
  }, [isEqualSplit, canEnableEqualSplit, distributeEqually, setValue, isEqualSplitField]);
  const shouldDisableEqualSplit = useMemo$h(() => {
    if (!isEqualSplit) return false;
    return !canEnableEqualSplit;
  }, [isEqualSplit, canEnableEqualSplit]);
  useEffect$g(() => {
    if (shouldDisableEqualSplit) {
      setValue(
        isEqualSplitField,
        false,
        {
          shouldValidate: false,
          shouldDirty: false
        }
      );
    }
  }, [shouldDisableEqualSplit, setValue, isEqualSplitField]);
  return {
    canEnableEqualSplit,
    isCurrentlyEqual,
    toggleEqualSplit,
    distributeEqually
  };
};
const { useEffect: useEffect$f, useRef: useRef$d } = await importShared("react");
const useAmountAllocationSync = ({
  amount,
  setValue,
  getValues,
  costAllocationsField,
  isEqualSplitField
}) => {
  const prevAmountRef = useRef$d(amount);
  const setValueRef = useRef$d(setValue);
  const getValuesRef = useRef$d(getValues);
  useEffect$f(() => {
    setValueRef.current = setValue;
    getValuesRef.current = getValues;
  }, [setValue, getValues]);
  useEffect$f(() => {
    const amountChanged = prevAmountRef.current !== amount;
    prevAmountRef.current = amount;
    if (!amountChanged) {
      return;
    }
    const currentAllocations = getValuesRef.current(costAllocationsField) || [];
    if (currentAllocations.length === 0) {
      return;
    }
    const currentIsEqualSplit = getValuesRef.current(isEqualSplitField) ?? false;
    const recalculatedAllocations = currentIsEqualSplit ? calculateEqualDistribution(currentAllocations, amount) : recalculateAmounts(currentAllocations, amount);
    setValueRef.current(
      costAllocationsField,
      recalculatedAllocations,
      {
        shouldValidate: true,
        shouldDirty: true
      }
    );
  }, [amount, costAllocationsField, isEqualSplitField]);
};
var ExpenseFormField = /* @__PURE__ */ ((ExpenseFormField2) => {
  ExpenseFormField2["ExpenseType"] = "expenseType";
  ExpenseFormField2["Vendor"] = "vendor";
  ExpenseFormField2["ExpenseDate"] = "expenseDate";
  ExpenseFormField2["ExpenseLocation"] = "expenseLocation";
  ExpenseFormField2["PaymentMethod"] = "paymentMethod";
  ExpenseFormField2["NetAmount"] = "netAmount";
  ExpenseFormField2["TotalAmount"] = "totalAmount";
  ExpenseFormField2["TaxType"] = "taxType";
  ExpenseFormField2["TaxAmount"] = "taxAmount";
  ExpenseFormField2["BusinessPurpose"] = "businessPurpose";
  ExpenseFormField2["ExpenseDescription"] = "expenseDescription";
  ExpenseFormField2["PersonsEntertained"] = "personsEntertained";
  ExpenseFormField2["AdditionalComments"] = "additionalComments";
  ExpenseFormField2["ReceiptAttachment"] = "receiptAttachment";
  ExpenseFormField2["IsReceiptUnavailable"] = "isReceiptUnavailable";
  ExpenseFormField2["Affidavit"] = "affidavit";
  ExpenseFormField2["SupportingFiles"] = "supportingFiles";
  ExpenseFormField2["IsDifferentCurrency"] = "isDifferentCurrency";
  ExpenseFormField2["NetCurrency"] = "netCurrency";
  ExpenseFormField2["TotalCurrency"] = "totalCurrency";
  ExpenseFormField2["CostAllocations"] = "costAllocations";
  ExpenseFormField2["IsEqualSplit"] = "isEqualSplit";
  ExpenseFormField2["DeferToApprover"] = "deferToApprover";
  return ExpenseFormField2;
})(ExpenseFormField || {});
const getDraftSaveableFields = () => [
  ExpenseFormField.ExpenseType,
  ExpenseFormField.Vendor,
  ExpenseFormField.ExpenseDate,
  ExpenseFormField.ExpenseLocation,
  ExpenseFormField.PaymentMethod,
  ExpenseFormField.NetAmount,
  ExpenseFormField.TotalAmount,
  ExpenseFormField.TaxType,
  ExpenseFormField.TaxAmount,
  ExpenseFormField.BusinessPurpose,
  ExpenseFormField.ExpenseDescription,
  ExpenseFormField.PersonsEntertained,
  ExpenseFormField.AdditionalComments
];
const FILE_UPLOAD_TIMEOUT = 12e4;
const FILE_UPLOAD_MAX_RETRIES = 2;
const TOOLTIP_DELAY_QUICK = 120;
const TOOLTIP_DELAY_TRUNCATED_TEXT = 500;
const DEFAULT_PAYMENT_METHOD = { id: "1" };
const mapFullExpenseToDefaultValues = (initialData) => {
  return {
    [ExpenseFormField.ExpenseType]: (initialData == null ? void 0 : initialData.expenseType) ?? "",
    [ExpenseFormField.Vendor]: (initialData == null ? void 0 : initialData.vendor) ?? "",
    [ExpenseFormField.ExpenseDate]: (initialData == null ? void 0 : initialData.expenseDate) ?? "",
    [ExpenseFormField.ExpenseLocation]: (initialData == null ? void 0 : initialData.expenseLocation) ?? "",
    [ExpenseFormField.PaymentMethod]: (initialData == null ? void 0 : initialData.paymentMethod) ?? DEFAULT_PAYMENT_METHOD.id,
    [ExpenseFormField.NetAmount]: (initialData == null ? void 0 : initialData.netAmount) ?? "",
    [ExpenseFormField.TotalAmount]: (initialData == null ? void 0 : initialData.totalAmount) ?? "",
    [ExpenseFormField.TaxType]: (initialData == null ? void 0 : initialData.taxType) ?? "",
    [ExpenseFormField.TaxAmount]: (initialData == null ? void 0 : initialData.taxAmount) ?? "",
    [ExpenseFormField.BusinessPurpose]: (initialData == null ? void 0 : initialData.businessPurpose) ?? "",
    [ExpenseFormField.ExpenseDescription]: (initialData == null ? void 0 : initialData.expenseDescription) ?? "",
    [ExpenseFormField.PersonsEntertained]: (initialData == null ? void 0 : initialData.personsEntertained) ?? "",
    [ExpenseFormField.AdditionalComments]: (initialData == null ? void 0 : initialData.additionalComments) ?? "",
    [ExpenseFormField.ReceiptAttachment]: (initialData == null ? void 0 : initialData.receiptAttachment) ?? null,
    [ExpenseFormField.IsReceiptUnavailable]: (initialData == null ? void 0 : initialData.isReceiptUnavailable) ?? false,
    [ExpenseFormField.Affidavit]: (initialData == null ? void 0 : initialData.affidavit) ?? null,
    [ExpenseFormField.SupportingFiles]: (initialData == null ? void 0 : initialData.supportingFiles) ?? [],
    [ExpenseFormField.IsDifferentCurrency]: (initialData == null ? void 0 : initialData.isDifferentCurrency) ?? false,
    [ExpenseFormField.NetCurrency]: (initialData == null ? void 0 : initialData.netCurrency) ?? DEFAULT_CURRENCY,
    [ExpenseFormField.TotalCurrency]: (initialData == null ? void 0 : initialData.totalCurrency) ?? DEFAULT_CURRENCY,
    [ExpenseFormField.CostAllocations]: (initialData == null ? void 0 : initialData.costAllocations) ?? [],
    [ExpenseFormField.DeferToApprover]: (initialData == null ? void 0 : initialData.deferToApprover) ?? false,
    [ExpenseFormField.IsEqualSplit]: (initialData == null ? void 0 : initialData.isEqualSplit) ?? false
  };
};
const ZodIssueCode = {
  custom: "custom"
};
string().min(1, "Vendor is required");
const vendorFieldWithMax = string().min(1, "Vendor is required").max(100, "Vendor name is too long");
string().max(100).optional();
string().min(1, "Expense location is required");
const expenseLocationFieldWithMax = string().min(1, "Expense location is required").max(100, "Location is too long");
string().max(100).optional();
const expenseDateField = string().min(1, "Expense date is required");
const expenseDateFieldOptional = string().optional();
const expenseTypeField = string().min(1, "Expense type is required");
string().optional();
const paymentMethodField = string().min(1, "Payment method is required");
string().optional();
const splitFilename = (filename) => {
  if (!filename) return { name: "", ext: "" };
  const lastDot = filename.lastIndexOf(".");
  if (lastDot <= 0) return { name: filename, ext: "" };
  return {
    name: filename.slice(0, lastDot),
    ext: filename.slice(lastDot)
  };
};
const renameConflictingFiles = (newFiles, existingFilenames) => {
  const filesWithUniqueNames = newFiles.map((file) => {
    let finalName = file.name;
    if (existingFilenames.has(finalName)) {
      const { name, ext } = splitFilename(file.name);
      let counter = 1;
      do {
        finalName = `${name} (${counter})${ext}`;
        counter++;
      } while (existingFilenames.has(finalName));
    }
    existingFilenames.add(finalName);
    if (finalName !== file.name) {
      return new File([file], finalName, { type: file.type, lastModified: file.lastModified });
    }
    return file;
  });
  return filesWithUniqueNames;
};
function calculateExponentialBackoff(retryCount, baseDelay = 1e3, maxDelay = 5e3) {
  const exponentialDelay = baseDelay * Math.pow(2, retryCount);
  return Math.min(exponentialDelay, maxDelay);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const netAmountField = string().min(1, "Receipt total is required").regex(DECIMAL_FORMAT_REGEX, "Invalid amount format");
const totalAmountField = string().min(1, "Total amount is required").regex(DECIMAL_FORMAT_REGEX, "Invalid amount format");
string().optional();
string().optional();
const currencyObjectSchema = object({
  code: string(),
  locale: string()
});
const isDifferentCurrencyField = boolean().optional();
const netCurrencyField = currencyObjectSchema.optional();
const totalCurrencyField = currencyObjectSchema.optional();
const businessPurposeField = string().min(1, "Business purpose is required");
const businessPurposeFieldOptional = string().optional();
const expenseDescriptionField = string().min(1, "Expense description is required").max(500, "Description is too long");
const expenseDescriptionFieldOptional = string().max(500).optional();
const personsEntertainedField = string().max(500).optional();
const additionalCommentsField = string().max(500, "Comments are too long").optional();
const additionalCommentsFieldOptional = additionalCommentsField;
const receiptAttachmentField = custom().optional().nullable();
const isReceiptUnavailableField = boolean().optional();
const affidavitSchema = object({
  justification: string().min(1, "Justification is required").max(150, "Maximum 150 characters allowed"),
  digitalSignature: string().min(1, "Digital signature is required").max(3, "Maximum 3 initials allowed").regex(/^[A-Z]{1,3}$/, "Must be 1-3 uppercase letters").refine((val) => val.length >= 1 && val.length <= 3, {
    message: "Digital signature must be 1-3 initials"
  })
});
const affidavitField = affidavitSchema.optional().nullable();
const isValidFileAttachment = (file) => {
  if (!file) return false;
  if (file.status === "error") return false;
  if (file.errorMessage) return false;
  return true;
};
const fileAttachmentSchema = custom((val) => {
  return isValidFileAttachment(val);
}, {
  message: "Invalid or corrupted file"
});
const supportingFilesField = array(fileAttachmentSchema).max(3, "Maximum 3 supporting files allowed").optional();
const mileageTypeField = string().min(1, "Mileage type is required");
const mileageTypeFieldOptional = string().optional();
const locationField = string().min(1, "Location is required").max(100, "Maximum 100 characters allowed");
const locationFieldOptional = string().max(100, "Maximum 100 characters allowed").optional();
const isRoundTripField = boolean().default(false);
const distanceRegex = /^\d+(\.\d{1,2})?$/;
const totalDistanceField = string().min(1, "Total distance is required").regex(distanceRegex, "Invalid distance format").refine((val) => {
  const num = parseFloat(val);
  return !isNaN(num) && num > 0;
}, "Distance must be greater than zero");
const totalDistanceFieldOptional = string().regex(distanceRegex, "Invalid distance format").optional().nullable();
const ratePerUnitField = string().min(1, "Rate is required").regex(/^\d+(\.\d{1,4})?$/, "Invalid rate format");
const ratePerUnitFieldOptional = string().regex(/^\d+(\.\d{1,4})?$/, "Invalid rate format").optional();
const rateUnitField = string().min(1, "Rate unit is required");
const rateUnitFieldOptional = string().optional();
const reimbursableAmountField = string().min(1, "Reimbursable amount is required").regex(distanceRegex, "Invalid amount format");
const reimbursableAmountFieldOptional = string().regex(distanceRegex, "Invalid amount format").optional();
const expensePeriodField = object({
  from: date(),
  to: date()
}, { error: "Expense period is required" });
const expensePeriodFieldOptional = object({
  from: date(),
  to: date()
}).optional();
string().min(1, "Tax type is required");
string().min(1, "Tax amount is required").regex(DECIMAL_FORMAT_REGEX, "Invalid amount format");
const taxTypeFieldOptional = string().optional();
const taxAmountFieldOptional = string().optional().refine(
  (val) => !val || DECIMAL_FORMAT_REGEX.test(val),
  "Invalid amount format"
);
const expenseDetailsSchema = object({
  expenseType: expenseTypeField,
  vendor: vendorFieldWithMax,
  expenseDate: expenseDateField,
  expenseLocation: expenseLocationFieldWithMax,
  paymentMethod: paymentMethodField,
  isDifferentCurrency: isDifferentCurrencyField,
  netCurrency: netCurrencyField,
  totalCurrency: totalCurrencyField,
  netAmount: netAmountField,
  totalAmount: totalAmountField,
  taxType: taxTypeFieldOptional,
  taxAmount: taxAmountFieldOptional
});
const expenseJustificationSchema = object({
  businessPurpose: businessPurposeField,
  expenseDescription: expenseDescriptionField,
  personsEntertained: personsEntertainedField
});
const CostAllocationValidationRules = {
  /**
   * Validates that the sum of all allocation amounts equals the total amount (within tolerance).
   */
  isSumValid(allocations, totalAmount) {
    if (!allocations || allocations.length === 0) {
      return true;
    }
    const allocationsSum = allocations.reduce((sum2, allocation) => sum2 + allocation.amount, 0);
    return Math.abs(allocationsSum - totalAmount) <= COST_ALLOCATION_TOLERANCE;
  },
  /**
   * Validates that the sum of all allocation percentages equals 100% (within tolerance).
   */
  isPercentageValid(allocations) {
    if (!allocations || allocations.length === 0) {
      return true;
    }
    const totalPercentage = allocations.reduce((sum2, allocation) => sum2 + allocation.percentage, 0);
    return Math.abs(totalPercentage - 100) <= COST_ALLOCATION_TOLERANCE;
  },
  /**
   * Validates that individual allocation amount doesn't exceed total amount.
   */
  isAmountWithinLimit(amount, totalAmount) {
    return amount <= totalAmount;
  },
  /**
   * Validates that percentage is within valid range (0-100).
   */
  isPercentageWithinRange(percentage) {
    return percentage >= 0 && percentage <= 100;
  },
  /**
   * Gets error message for sum validation failure.
   */
  getSumErrorMessage(allocationsSum, totalAmount) {
    return `Total allocations (${allocationsSum.toFixed(2)}) must equal total amount (${totalAmount.toFixed(2)})`;
  },
  /**
   * Gets error message for percentage validation failure.
   */
  getPercentageErrorMessage() {
    return "Total allocation must equal 100%";
  },
  /**
   * Gets error message for amount exceeding limit.
   */
  getAmountExceedsErrorMessage(totalAmount) {
    return `Value cannot exceed expense total $${totalAmount.toFixed(2)}`;
  },
  /**
   * Gets error message for invalid percentage range.
   */
  getPercentageRangeErrorMessage() {
    return "Percentage cannot exceed 100%";
  },
  /**
   * Gets error message for cost allocations required.
   */
  getCostAllocationsRequiredErrorMessage() {
    return "Cost allocations are required";
  },
  /**
   * Gets error message for PO supplier currency mismatch with expense currency.
   */
  getCurrencyMismatchErrorMessage() {
    return "PO supplier currency doesn't match expense currency";
  }
};
const costAllocationTypeSchema = custom(
  (val) => Object.values(ECostAllocation).includes(val),
  { message: "Invalid cost allocation type" }
);
const costAllocationItemSchema = object({
  id: string(),
  name: string().min(1, "Selection required"),
  percentage: number().min(0, "Min 0"),
  amount: number().min(0, "Amount must be at least 0"),
  type: costAllocationTypeSchema,
  entityData: unknown().optional()
});
const costAllocationSchema = object({
  costAllocations: array(costAllocationItemSchema).optional(),
  isEqualSplit: boolean().optional().default(false),
  deferToApprover: boolean().optional()
});
const validateCostAllocation = (ctx, costAllocations, totalAmount, defer, currencyCode) => {
  if (defer) {
    return;
  }
  if (!costAllocations || costAllocations.length === 0) {
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getCostAllocationsRequiredErrorMessage(),
      path: ["costAllocations"]
    });
    return;
  }
  const allocations = costAllocations;
  const totalAmountValue = parseFloat(totalAmount || "0");
  allocations.forEach((allocation, index) => {
    if (allocation.percentage > 100) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getPercentageRangeErrorMessage(),
        path: ["costAllocations", index, "percentage"]
      });
    }
    if (totalAmountValue > 0 && allocation.amount > totalAmountValue) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getAmountExceedsErrorMessage(totalAmountValue),
        path: ["costAllocations", index, "amount"]
      });
    }
    if (currencyCode && allocation.entityData) {
      const { supplierCurrency } = allocation.entityData;
      if (supplierCurrency && supplierCurrency !== currencyCode && (allocation.type === ECostAllocation.Project || allocation.type === ECostAllocation.Admin)) {
        ctx.addIssue({
          code: "custom",
          message: CostAllocationValidationRules.getCurrencyMismatchErrorMessage(),
          path: ["costAllocations", index, "name"]
        });
      }
    }
  });
  if (!CostAllocationValidationRules.isPercentageValid(allocations)) {
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getPercentageErrorMessage(),
      path: ["costAllocations"]
    });
  }
  if (totalAmountValue > 0 && !CostAllocationValidationRules.isSumValid(allocations, totalAmountValue)) {
    const allocationsSum = allocations.reduce((sum2, a2) => sum2 + a2.amount, 0);
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getSumErrorMessage(allocationsSum, totalAmountValue),
      path: ["costAllocations"]
    });
  }
};
const additionalCommentsSchema = object({
  additionalComments: additionalCommentsField
});
const basicDetailsSchema = object({
  vendor: vendorFieldWithMax,
  expenseLocation: expenseLocationFieldWithMax
});
const receiptSchema = object({
  receiptAttachment: receiptAttachmentField,
  isReceiptUnavailable: isReceiptUnavailableField,
  affidavit: affidavitField
}).refine((data) => {
  if (data.isReceiptUnavailable) {
    return data.affidavit !== null && data.affidavit !== void 0 && data.affidavit.justification.length > 0 && data.affidavit.digitalSignature.length > 0;
  }
  if (!data.isReceiptUnavailable) {
    return data.receiptAttachment !== null && data.receiptAttachment !== void 0;
  }
  return true;
}, {
  message: ((data) => (data == null ? void 0 : data.isReceiptUnavailable) ? "Affidavit is required when receipt is unavailable" : "Receipt is required unless marked as unavailable")(),
  path: ["receiptAttachment"]
}).refine((data) => {
  if (data.receiptAttachment && !data.isReceiptUnavailable) {
    return isValidFileAttachment(data.receiptAttachment);
  }
  return true;
}, {
  message: "Receipt file is invalid or corrupted",
  path: ["receiptAttachment"]
});
const receiptWithSupportingFilesSchema = receiptSchema.safeExtend({
  supportingFiles: supportingFilesField
});
const supportingFilesSchema = object({
  supportingFiles: supportingFilesField
});
var MileageTripFormField = /* @__PURE__ */ ((MileageTripFormField2) => {
  MileageTripFormField2["MileageType"] = "mileageType";
  MileageTripFormField2["ExpenseDate"] = "expenseDate";
  MileageTripFormField2["FromLocation"] = "fromLocation";
  MileageTripFormField2["ToLocation"] = "toLocation";
  MileageTripFormField2["IsRoundTrip"] = "isRoundTrip";
  MileageTripFormField2["TotalDistance"] = "totalDistance";
  MileageTripFormField2["RatePerUnit"] = "ratePerUnit";
  MileageTripFormField2["RateUnit"] = "rateUnit";
  MileageTripFormField2["ReimbursableAmount"] = "reimbursableAmount";
  MileageTripFormField2["BusinessPurpose"] = "businessPurpose";
  MileageTripFormField2["ExpenseDescription"] = "expenseDescription";
  MileageTripFormField2["CostAllocations"] = "costAllocations";
  MileageTripFormField2["IsEqualSplit"] = "isEqualSplit";
  MileageTripFormField2["DeferToApprover"] = "deferToApprover";
  MileageTripFormField2["AdditionalComments"] = "additionalComments";
  return MileageTripFormField2;
})(MileageTripFormField || {});
const mileageDetailsSchema = object({
  [MileageTripFormField.MileageType]: mileageTypeField,
  [MileageTripFormField.ExpenseDate]: expenseDateField,
  [MileageTripFormField.FromLocation]: locationField,
  [MileageTripFormField.ToLocation]: locationField,
  [MileageTripFormField.IsRoundTrip]: isRoundTripField,
  [MileageTripFormField.TotalDistance]: totalDistanceField,
  [MileageTripFormField.RatePerUnit]: ratePerUnitField,
  [MileageTripFormField.RateUnit]: rateUnitField,
  [MileageTripFormField.ReimbursableAmount]: reimbursableAmountField
});
const mileageJustificationSchema = object({
  [MileageTripFormField.BusinessPurpose]: businessPurposeField,
  [MileageTripFormField.ExpenseDescription]: expenseDescriptionField
});
const { useMemo: useMemo$g } = await importShared("react");
const CANADA_ISO_CODE = "CAN";
function checkTaxFieldVisibility(countries, expenseLocationId) {
  if (!countries || countries.length === 0) {
    return { showTaxFields: false, isEmployeeCanadian: false, isExpenseInCanada: false };
  }
  const isEmployeeCanadian = countries[0].isoCode === CANADA_ISO_CODE;
  const isExpenseInCanada = expenseLocationId ? countries.some(
    (c) => c.id.toString() === expenseLocationId && c.isoCode === CANADA_ISO_CODE
  ) : false;
  return {
    showTaxFields: isEmployeeCanadian && isExpenseInCanada,
    isEmployeeCanadian,
    isExpenseInCanada
  };
}
const useTaxFieldVisibility = (expenseLocationId) => {
  const { data: countries } = useCountries();
  return useMemo$g(() => {
    var _a;
    const result = checkTaxFieldVisibility(countries, expenseLocationId);
    devLog("[TaxVisibility]", {
      expenseLocationId,
      countriesCount: (countries == null ? void 0 : countries.length) ?? 0,
      firstCountryIso: (_a = countries == null ? void 0 : countries[0]) == null ? void 0 : _a.isoCode,
      ...result
    });
    return result;
  }, [countries, expenseLocationId]);
};
const fullExpenseFormSchema = receiptWithSupportingFilesSchema.safeExtend(expenseDetailsSchema.shape).safeExtend(expenseJustificationSchema.shape).safeExtend(costAllocationSchema.shape).safeExtend(additionalCommentsSchema.shape).safeExtend({
  formType: string().optional()
}).refine((data) => {
  const net = parseFloat(data.netAmount || "0");
  const total = parseFloat(data.totalAmount || "0");
  return total >= net;
}, {
  message: "Total amount must be greater than or equal to receipt total",
  path: [ExpenseFormField.TotalAmount]
}).refine((data) => {
  if (!data.taxAmount) return true;
  if (!DECIMAL_FORMAT_REGEX.test(data.taxAmount)) return true;
  const taxAmt = parseFloat(data.taxAmount);
  const receiptTotal = parseFloat(data.netAmount || "0");
  return taxAmt <= receiptTotal;
}, {
  message: "Tax amount must not exceed receipt total",
  path: [ExpenseFormField.TaxAmount]
}).refine((data) => {
  if (data.formType === ExpenseFormType.ENTERTAINMENT) {
    return data.personsEntertained && data.personsEntertained.trim() !== "";
  }
  return true;
}, {
  message: "Persons entertained is required",
  path: ["personsEntertained"]
}).superRefine((data, ctx) => {
  var _a;
  const countries = queryClient.getQueryData(queryKeys.countries.list());
  const { showTaxFields } = checkTaxFieldVisibility(countries, data.expenseLocation);
  if (showTaxFields) {
    if (!data.taxType || data.taxType.trim() === "") {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Tax type is required",
        path: [ExpenseFormField.TaxType]
      });
    }
    if (!data.taxAmount || data.taxAmount.trim() === "") {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Tax amount is required",
        path: [ExpenseFormField.TaxAmount]
      });
    }
  }
  validateCostAllocation(ctx, data.costAllocations, data.totalAmount, data.deferToApprover, (_a = data.netCurrency) == null ? void 0 : _a.code);
});
function hasFieldValue(value) {
  if (value === null || value === void 0) {
    return false;
  }
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  if (typeof value === "number") {
    return !isNaN(value);
  }
  if (typeof value === "boolean") {
    return true;
  }
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length > 0;
  }
  return false;
}
function hasAnyFieldValue(data, fields) {
  return fields.some((field) => {
    const value = data[field];
    return hasFieldValue(value);
  });
}
function createDraftSaveChecker(draftFields, additionalCheck) {
  return (data) => {
    const hasTextFields = hasAnyFieldValue(data, [...draftFields]);
    if (hasTextFields) {
      return true;
    }
    if (additionalCheck) {
      return additionalCheck(data);
    }
    return false;
  };
}
const defaultGetValidationErrors = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    return result.error.issues.map((issue) => issue.message);
  }
  return [];
};
const defaultCanSaveDraft = (data) => {
  return Object.values(data).some((value) => hasFieldValue(value));
};
const createValidationStrategy = (schema, options) => {
  return {
    schema,
    validateForSubmission: (data) => schema.safeParse(data),
    validateForDraft: options == null ? void 0 : options.validateForDraft,
    getValidationErrors: (options == null ? void 0 : options.getValidationErrors) || ((data) => defaultGetValidationErrors(schema, data)),
    canSaveDraft: (options == null ? void 0 : options.canSaveDraft) || ((data) => defaultCanSaveDraft(data)),
    fieldsForDraftCheck: options == null ? void 0 : options.fieldsForDraftCheck
  };
};
const draftExpenseFormSchema = object({
  [ExpenseFormField.ReceiptAttachment]: custom().optional().nullable(),
  [ExpenseFormField.IsReceiptUnavailable]: boolean().default(false),
  [ExpenseFormField.Affidavit]: object({
    justification: string().max(150).optional(),
    digitalSignature: string().max(3).optional()
  }).optional().nullable(),
  [ExpenseFormField.SupportingFiles]: array(custom()).max(3, "Maximum 3 supporting files allowed").optional().default([]),
  [ExpenseFormField.ExpenseType]: string().optional(),
  [ExpenseFormField.Vendor]: string().max(100).optional(),
  [ExpenseFormField.ExpenseDate]: string().optional(),
  [ExpenseFormField.ExpenseLocation]: string().max(100).optional(),
  [ExpenseFormField.PaymentMethod]: string().optional(),
  [ExpenseFormField.IsDifferentCurrency]: boolean().optional(),
  [ExpenseFormField.NetCurrency]: object({
    code: string(),
    locale: string()
  }).optional(),
  [ExpenseFormField.TotalCurrency]: object({
    code: string(),
    locale: string()
  }).optional(),
  [ExpenseFormField.NetAmount]: string().optional(),
  [ExpenseFormField.TotalAmount]: string().optional(),
  [ExpenseFormField.TaxType]: string().optional(),
  [ExpenseFormField.TaxAmount]: string().optional(),
  [ExpenseFormField.BusinessPurpose]: string().optional(),
  [ExpenseFormField.ExpenseDescription]: string().max(500).optional(),
  [ExpenseFormField.PersonsEntertained]: string().optional(),
  [ExpenseFormField.AdditionalComments]: string().max(500).optional(),
  [ExpenseFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })).optional()
});
const validateExpenseForSubmission = (data) => {
  return fullExpenseFormSchema.safeParse(data);
};
const validateExpenseForDraft = (data) => {
  return draftExpenseFormSchema.safeParse(data);
};
const getFormValidationErrors$2 = (data) => {
  const result = validateExpenseForSubmission(data);
  if (!result.success) {
    return result.error.issues.map((issue) => issue.message);
  }
  return [];
};
const canSaveDraft$2 = createDraftSaveChecker(
  getDraftSaveableFields(),
  (data) => {
    var _a, _b, _c, _d;
    const hasAffidavitData = !!(((_b = (_a = data[ExpenseFormField.Affidavit]) == null ? void 0 : _a.justification) == null ? void 0 : _b.trim()) || ((_d = (_c = data[ExpenseFormField.Affidavit]) == null ? void 0 : _c.digitalSignature) == null ? void 0 : _d.trim()));
    return hasAffidavitData;
  }
);
const FIELDS_FOR_DRAFT_CHECK = [
  ...getDraftSaveableFields(),
  ExpenseFormField.ReceiptAttachment,
  ExpenseFormField.IsReceiptUnavailable,
  ExpenseFormField.Affidavit,
  ExpenseFormField.SupportingFiles
];
const fullExpenseValidationStrategy = createValidationStrategy(
  fullExpenseFormSchema,
  {
    validateForDraft: validateExpenseForDraft,
    getValidationErrors: getFormValidationErrors$2,
    canSaveDraft: canSaveDraft$2,
    fieldsForDraftCheck: FIELDS_FOR_DRAFT_CHECK
  }
);
const { useCallback: useCallback$h, useMemo: useMemo$f } = await importShared("react");
let fileTypeModule = null;
const loadFileTypeModule = async () => {
  if (!fileTypeModule) {
    fileTypeModule = await __vitePreload(() => import("./core-CAB4bpNs.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  }
  return fileTypeModule;
};
const validateFileContentEnhanced = async (file) => {
  try {
    const shouldUseFileType = file.type === "image/heic" || file.type === "image/heif" || !file.type || // Windows may not provide MIME type
    file.name.toLowerCase().endsWith(".heic") || file.name.toLowerCase().endsWith(".heif");
    if (shouldUseFileType) {
      try {
        const fileType = await loadFileTypeModule();
        const buffer = await file.slice(0, 4100).arrayBuffer();
        const result = await fileType.fileTypeFromBuffer(new Uint8Array(buffer));
        if (result) {
          const mimeMapping = {
            "image/heic": AllowedMimeType.HEIC,
            "image/heif": AllowedMimeType.HEIF,
            "image/jpeg": AllowedMimeType.JPEG,
            "image/png": AllowedMimeType.PNG,
            "image/webp": AllowedMimeType.WEBP,
            "application/pdf": AllowedMimeType.PDF
          };
          const mappedMime = mimeMapping[result.mime];
          if (mappedMime) {
            return {
              isValid: true,
              actualMimeType: mappedMime
            };
          } else {
            return {
              isValid: false,
              message: `Unsupported file type detected: ${result.mime}`
            };
          }
        } else {
          return {
            isValid: false,
            message: "Unable to verify file type. File may be corrupted or unsupported."
          };
        }
      } catch (error) {
        devError("file-type validation failed:", error);
        return {
          isValid: false,
          message: "File validation failed. Please try again with a valid file."
        };
      }
    }
    const { validateFileContent: validateFileContent2 } = await __vitePreload(async () => {
      const { validateFileContent: validateFileContent3 } = await Promise.resolve().then(() => securityUtils);
      return { validateFileContent: validateFileContent3 };
    }, true ? void 0 : void 0, import.meta.url);
    return validateFileContent2(file);
  } catch (error) {
    devError("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
};
const shouldUseEnhancedValidation = (file) => {
  const fileName = file.name.toLowerCase();
  return !file.type || // No MIME type - need enhanced detection
  fileName.endsWith(".heic") || fileName.endsWith(".heif") || file.type === "image/heic" || file.type === "image/heif";
};
({
  allowedMimeTypes: Object.values(AllowedMimeType)
});
const MIME_TO_EXTENSION_MAP = {
  [AllowedMimeType.PNG]: [".png"],
  [AllowedMimeType.JPEG]: [".jpeg"],
  [AllowedMimeType.JPG]: [".jpg"],
  [AllowedMimeType.WEBP]: [".webp"],
  [AllowedMimeType.HEIC]: [".heic"],
  [AllowedMimeType.HEIF]: [".heif"],
  [AllowedMimeType.PDF]: [".pdf"]
};
const generateAcceptAttribute = () => {
  const mimeTypes = Object.values(AllowedMimeType);
  const extensions = mimeTypes.flatMap((mimeType) => MIME_TO_EXTENSION_MAP[mimeType]);
  return [...extensions, ...mimeTypes].join(",");
};
const receiptUploadInstructions = () => `Upload an image (max. ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB) or a PDF (max. ${FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB}MB)`;
const getSupportedFormatsText = () => {
  const imageFormats = ["PNG", "JPG/JPEG", "HEIC/HEIF", "WebP"];
  const pdfFormat = "PDF";
  return `Upload ${imageFormats.join(", ")} (max. ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB) or ${pdfFormat} (max. ${FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB}MB)`;
};
({
  SUPPORTED_FORMATS: Object.values(AllowedMimeType),
  MAX_FILE_SIZE_PDF: MIME_TYPE_CONFIG.get(AllowedMimeType.PDF).maxSizeBytes,
  MAX_FILE_SIZE_IMAGE: MIME_TYPE_CONFIG.get(AllowedMimeType.PNG).maxSizeBytes
});
const isReceiptValidSimple = (data) => {
  if (data.isReceiptUnavailable) {
    return true;
  }
  if (!data.receiptAttachment) {
    return false;
  }
  return isValidFileAttachment(data.receiptAttachment);
};
function useFormFieldValues(control, fields) {
  const values = useWatch({
    control,
    name: [...fields]
  });
  if (!Array.isArray(values)) {
    return {};
  }
  return fields.reduce((acc, field, index) => {
    acc[field] = values[index];
    return acc;
  }, {});
}
const { useCallback: useCallback$g, useEffect: useEffect$e, useMemo: useMemo$e, useRef: useRef$c } = await importShared("react");
const { useCallback: useCallback$f, useMemo: useMemo$d } = await importShared("react");
const { useCallback: useCallback$e, useEffect: useEffect$d, useImperativeHandle, useRef: useRef$b } = await importShared("react");
const useFormImperativeHandle = ({
  ref,
  form,
  onFormErrors
}) => {
  const formRef = useRef$b(form);
  const onFormErrorsRef = useRef$b(onFormErrors);
  useEffect$d(() => {
    formRef.current = form;
    onFormErrorsRef.current = onFormErrors;
  });
  const handleFormSubmit = useCallback$e(async () => {
    var _a;
    const isValid = await formRef.current.validateForm();
    if (isValid) {
      await formRef.current.handleSubmit();
    } else {
      (_a = onFormErrorsRef.current) == null ? void 0 : _a.call(onFormErrorsRef, formRef.current.validationErrors);
    }
  }, []);
  const handleDraftSave = useCallback$e(async () => {
    await formRef.current.handleDraftSave();
  }, []);
  useImperativeHandle(
    ref,
    () => ({
      submitForm: handleFormSubmit,
      saveDraft: handleDraftSave,
      getFormData: () => formRef.current.getValues(),
      validateForm: () => ({
        isValid: formRef.current.canSubmit,
        errors: formRef.current.validationErrors
      }),
      get submitButtonState() {
        return formRef.current.getSubmitButtonState();
      },
      get saveDraftButtonState() {
        return formRef.current.getSaveDraftButtonState();
      }
    }),
    [handleFormSubmit, handleDraftSave]
  );
  return {
    handleFormSubmit,
    handleDraftSave
  };
};
const { useEffect: useEffect$c, useRef: useRef$a } = await importShared("react");
const useFormButtonStateSync = ({
  form,
  formState,
  isSubmitting,
  isDrafting,
  onButtonStateChange
}) => {
  const formRef = useRef$a(form);
  const onButtonStateChangeRef = useRef$a(onButtonStateChange);
  useEffect$c(() => {
    formRef.current = form;
    onButtonStateChangeRef.current = onButtonStateChange;
  });
  useEffect$c(() => {
    if (!onButtonStateChangeRef.current) return;
    const submitState = formRef.current.getSubmitButtonState();
    const draftState = formRef.current.getSaveDraftButtonState();
    onButtonStateChangeRef.current(submitState, draftState);
  }, [
    formState.isDirty,
    formState.isValid,
    form.hasErrors,
    form.canSave,
    isSubmitting,
    isDrafting
  ]);
};
const { useCallback: useCallback$d } = await importShared("react");
const useFileHandlers = (options) => {
  const {
    setValue,
    receiptAttachmentField: receiptAttachmentField2,
    supportingFilesField: supportingFilesField2,
    onReceiptUploaded,
    onSupportingFilesChanged
  } = options;
  const handleReceiptChange = useCallback$d(
    (attachment) => {
      setValue(
        receiptAttachmentField2,
        attachment || null,
        { shouldValidate: true, shouldDirty: false }
      );
      if (attachment) {
        onReceiptUploaded == null ? void 0 : onReceiptUploaded(attachment);
      }
    },
    [setValue, receiptAttachmentField2, onReceiptUploaded]
  );
  const handleSupportingFilesChange = useCallback$d(
    (attachments) => {
      if (supportingFilesField2) {
        setValue(
          supportingFilesField2,
          attachments,
          { shouldValidate: true, shouldDirty: false }
        );
        onSupportingFilesChanged == null ? void 0 : onSupportingFilesChanged(attachments);
      }
    },
    [setValue, supportingFilesField2, onSupportingFilesChanged]
  );
  return {
    handleReceiptChange,
    handleSupportingFilesChange
  };
};
const { useCallback: useCallback$c, useRef: useRef$9 } = await importShared("react");
const DEFAULT_DEBOUNCE_MS = 500;
const useAutoSave = (options) => {
  const { draftId, isDrafting, onSaveDraft, getFormValues, debounceMs = DEFAULT_DEBOUNCE_MS } = options;
  const onSaveDraftRef = useRef$9(onSaveDraft);
  onSaveDraftRef.current = onSaveDraft;
  const performAutoSave = useCallback$c(() => {
    if (!draftId && onSaveDraftRef.current && !isDrafting) {
      const currentData = getFormValues();
      onSaveDraftRef.current(currentData);
    }
  }, [draftId, isDrafting, getFormValues]);
  const triggerAutoSave = useDebouncedCallback(performAutoSave, debounceMs);
  return { triggerAutoSave };
};
const { useEffect: useEffect$b } = await importShared("react");
const useReceiptCheckboxEffects = (options) => {
  const {
    watch,
    setValue,
    receiptAttachmentField: receiptAttachmentField2,
    isReceiptUnavailableField: isReceiptUnavailableField2,
    affidavitField: affidavitField2
  } = options;
  const isReceiptUnavailable = watch(isReceiptUnavailableField2);
  const receiptAttachment = watch(receiptAttachmentField2);
  useEffect$b(() => {
    if (isReceiptUnavailable) {
      setValue(
        receiptAttachmentField2,
        null,
        { shouldValidate: false, shouldDirty: false }
      );
      if (affidavitField2) {
        setValue(
          affidavitField2,
          { justification: "", digitalSignature: "" },
          { shouldValidate: false }
        );
      }
    } else if (affidavitField2) {
      setValue(
        affidavitField2,
        null,
        { shouldValidate: false }
      );
    }
  }, [isReceiptUnavailable, setValue, receiptAttachmentField2, affidavitField2]);
  useEffect$b(() => {
    if (receiptAttachment && isReceiptUnavailable) {
      setValue(
        isReceiptUnavailableField2,
        false,
        { shouldValidate: false }
      );
      if (affidavitField2) {
        setValue(
          affidavitField2,
          null,
          { shouldValidate: false }
        );
      }
    }
  }, [receiptAttachment, isReceiptUnavailable, setValue, isReceiptUnavailableField2, affidavitField2]);
};
const mileageTripFormSchema = object({
  formType: literal("trip"),
  [MileageTripFormField.MileageType]: mileageTypeField,
  [MileageTripFormField.ExpenseDate]: expenseDateField,
  [MileageTripFormField.FromLocation]: locationField,
  [MileageTripFormField.ToLocation]: locationField,
  [MileageTripFormField.IsRoundTrip]: isRoundTripField,
  [MileageTripFormField.TotalDistance]: totalDistanceField,
  [MileageTripFormField.RatePerUnit]: ratePerUnitField,
  [MileageTripFormField.RateUnit]: rateUnitField,
  [MileageTripFormField.ReimbursableAmount]: reimbursableAmountField,
  [MileageTripFormField.BusinessPurpose]: businessPurposeField,
  [MileageTripFormField.ExpenseDescription]: expenseDescriptionField,
  [MileageTripFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })).optional(),
  [MileageTripFormField.IsEqualSplit]: boolean().optional(),
  [MileageTripFormField.DeferToApprover]: boolean().optional(),
  [MileageTripFormField.AdditionalComments]: additionalCommentsFieldOptional
}).superRefine((data, ctx) => {
  validateCostAllocation(ctx, data.costAllocations, data.reimbursableAmount, data.deferToApprover);
});
object({
  formType: literal("trip"),
  [MileageTripFormField.MileageType]: mileageTypeFieldOptional,
  [MileageTripFormField.ExpenseDate]: expenseDateFieldOptional,
  [MileageTripFormField.FromLocation]: locationFieldOptional,
  [MileageTripFormField.ToLocation]: locationFieldOptional,
  [MileageTripFormField.IsRoundTrip]: isRoundTripField,
  [MileageTripFormField.TotalDistance]: totalDistanceFieldOptional,
  [MileageTripFormField.RatePerUnit]: ratePerUnitFieldOptional,
  [MileageTripFormField.RateUnit]: rateUnitFieldOptional,
  [MileageTripFormField.ReimbursableAmount]: reimbursableAmountFieldOptional,
  [MileageTripFormField.BusinessPurpose]: businessPurposeFieldOptional,
  [MileageTripFormField.ExpenseDescription]: expenseDescriptionFieldOptional,
  [MileageTripFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })).optional(),
  [MileageTripFormField.IsEqualSplit]: boolean().optional(),
  [MileageTripFormField.DeferToApprover]: boolean().optional(),
  [MileageTripFormField.AdditionalComments]: additionalCommentsFieldOptional
});
const draftSaveableFields$1 = [
  MileageTripFormField.MileageType,
  MileageTripFormField.ExpenseDate,
  MileageTripFormField.FromLocation,
  MileageTripFormField.ToLocation,
  MileageTripFormField.TotalDistance,
  MileageTripFormField.BusinessPurpose,
  MileageTripFormField.ExpenseDescription,
  MileageTripFormField.AdditionalComments
];
const canSaveDraft$1 = createDraftSaveChecker(draftSaveableFields$1);
const getFormValidationErrors$1 = (data) => {
  const errors = [];
  const result = mileageTripFormSchema.safeParse(data);
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors.push(issue.message);
    });
  }
  return errors;
};
const mileageTripValidationStrategy = createValidationStrategy(mileageTripFormSchema, {
  canSaveDraft: canSaveDraft$1,
  getValidationErrors: getFormValidationErrors$1
});
const { useCallback: useCallback$b, useMemo: useMemo$c } = await importShared("react");
const mapMileageTripToDefaultValues = (data) => {
  return {
    formType: MileageFormType.Trip,
    [MileageTripFormField.MileageType]: (data == null ? void 0 : data.mileageType) ?? "",
    [MileageTripFormField.ExpenseDate]: (data == null ? void 0 : data.expenseDate) ?? "",
    [MileageTripFormField.FromLocation]: (data == null ? void 0 : data.fromLocation) ?? "",
    [MileageTripFormField.ToLocation]: (data == null ? void 0 : data.toLocation) ?? "",
    [MileageTripFormField.IsRoundTrip]: (data == null ? void 0 : data.isRoundTrip) ?? false,
    [MileageTripFormField.TotalDistance]: (data == null ? void 0 : data.totalDistance) ?? "",
    [MileageTripFormField.RatePerUnit]: (data == null ? void 0 : data.ratePerUnit) ?? "",
    [MileageTripFormField.RateUnit]: (data == null ? void 0 : data.rateUnit) ?? "",
    [MileageTripFormField.ReimbursableAmount]: (data == null ? void 0 : data.reimbursableAmount) ?? "",
    [MileageTripFormField.BusinessPurpose]: (data == null ? void 0 : data.businessPurpose) ?? "",
    [MileageTripFormField.ExpenseDescription]: (data == null ? void 0 : data.expenseDescription) ?? "",
    [MileageTripFormField.CostAllocations]: (data == null ? void 0 : data.costAllocations) ?? [],
    [MileageTripFormField.DeferToApprover]: (data == null ? void 0 : data.deferToApprover) ?? false,
    [MileageTripFormField.IsEqualSplit]: (data == null ? void 0 : data.isEqualSplit) ?? false,
    [MileageTripFormField.AdditionalComments]: (data == null ? void 0 : data.additionalComments) ?? ""
  };
};
const { useEffect: useEffect$a, useMemo: useMemo$b } = await importShared("react");
const useReimbursableAmountSync = ({
  totalDistance,
  ratePerUnit,
  setValue,
  getValues,
  reimbursableAmountField: reimbursableAmountField2
}) => {
  const calculatedAmount = useMemo$b(() => {
    try {
      const distanceDecimal = new Decimal(totalDistance || 0);
      const rateDecimal = new Decimal(ratePerUnit || 0);
      if (distanceDecimal.gt(0) && rateDecimal.gt(0)) {
        return distanceDecimal.times(rateDecimal).toDecimalPlaces(DECIMAL_PLACES).toString();
      }
      return "0.00";
    } catch (error) {
      devError("Error calculating reimbursable amount:", error);
      return "0.00";
    }
  }, [totalDistance, ratePerUnit]);
  useEffect$a(() => {
    const currentValue = getValues(reimbursableAmountField2);
    if (currentValue !== calculatedAmount) {
      setValue(
        reimbursableAmountField2,
        calculatedAmount,
        {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: false
        }
      );
    }
  }, [calculatedAmount, setValue, getValues, reimbursableAmountField2]);
};
const { useEffect: useEffect$9, useMemo: useMemo$a } = await importShared("react");
const useMileageRateSync = ({
  mileageType,
  setValue,
  getValues
}) => {
  const queryClient2 = useQueryClient();
  const { company } = useDefaultCompany();
  const companyShortName = (company == null ? void 0 : company.shortName) || null;
  const mileageRate = useMemo$a(() => {
    if (!mileageType || !companyShortName) return null;
    const expenseTypes = queryClient2.getQueryData(
      [...queryKeys.expenseTypes.list(companyShortName, false), { formTypeIds: [FormTypeId.MILEAGE] }]
    );
    const selectedType = expenseTypes == null ? void 0 : expenseTypes.find((et) => et.id === mileageType);
    if (!(selectedType == null ? void 0 : selectedType.mileageEffectiveRate)) return null;
    return {
      rate: String(selectedType.mileageEffectiveRate.rate),
      unit: selectedType.unitOfMeasurement || "km"
    };
  }, [mileageType, companyShortName, queryClient2]);
  useEffect$9(() => {
    if (!mileageRate) {
      return;
    }
    const { rate, unit } = mileageRate;
    const rateField = MileageTripFormField.RatePerUnit;
    const unitField = MileageTripFormField.RateUnit;
    const currentRate = getValues(rateField);
    const currentUnit = getValues(unitField);
    if (currentRate !== rate) {
      setValue(
        rateField,
        rate,
        {
          shouldDirty: true
        }
      );
    }
    if (currentUnit !== unit) {
      setValue(
        unitField,
        unit,
        {
          shouldDirty: true
        }
      );
    }
  }, [mileageRate, setValue, getValues]);
};
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
const { useEffect: useEffect$8 } = await importShared("react");
const useExpenseFormSync = ({
  control,
  setValue,
  getValues,
  watch,
  trigger
}) => {
  const companyShortName = useCompanyStore((state) => {
    var _a;
    return ((_a = state.selectedCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const { totalAmount, expenseType } = useFormFieldValues(control, [
    ExpenseFormField.TotalAmount,
    ExpenseFormField.ExpenseType
  ]);
  const formType = useFormTypeId(expenseType, companyShortName);
  useEffect$8(() => {
    if (formType) {
      setValue("formType", formType);
      if (formType !== ExpenseFormType.ENTERTAINMENT) {
        trigger("personsEntertained");
      }
    }
  }, [formType, setValue, trigger]);
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
var FormSectionType = /* @__PURE__ */ ((FormSectionType2) => {
  FormSectionType2["Receipt"] = "receipt";
  FormSectionType2["ExpenseDetails"] = "expense-details";
  FormSectionType2["ExpenseJustification"] = "expense-justification";
  FormSectionType2["CostAllocation"] = "cost-allocation";
  FormSectionType2["AdditionalComments"] = "additional-comments";
  FormSectionType2["SupportingFiles"] = "supporting-files";
  FormSectionType2["MileageDetails"] = "mileage-details";
  FormSectionType2["MileageJustification"] = "mileage-justification";
  return FormSectionType2;
})(FormSectionType || {});
const { useMemo: useMemo$9 } = await importShared("react");
const useExpenseFormHandlers = (setValue, getValues) => {
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    ExpenseFormField.CostAllocations,
    ExpenseFormField.IsEqualSplit,
    ExpenseFormField.TotalAmount
  );
  return useMemo$9(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers
    }),
    [costAllocationHandlers]
  );
};
const { useMemo: useMemo$8, useState: useState$6 } = await importShared("react");
const useExpenseFormLeftColumn = ({
  control,
  setValue,
  getValues,
  isDrafting,
  draftId,
  onSaveDraft
}) => {
  const [isReceiptUploading, setIsReceiptUploading] = useState$6(false);
  const { receiptAttachment, supportingFiles } = useFormFieldValues(control, [
    ExpenseFormField.ReceiptAttachment,
    ExpenseFormField.SupportingFiles
  ]);
  const { triggerAutoSave } = useAutoSave({
    draftId,
    isDrafting,
    onSaveDraft,
    getFormValues: getValues
  });
  const { handleReceiptChange, handleSupportingFilesChange } = useFileHandlers({
    setValue,
    receiptAttachmentField: ExpenseFormField.ReceiptAttachment,
    supportingFilesField: ExpenseFormField.SupportingFiles,
    onReceiptUploaded: () => triggerAutoSave(),
    onSupportingFilesChanged: (attachments) => {
      const hasValidAttachment = attachments.some((a2) => a2.status !== "error");
      if (hasValidAttachment) {
        triggerAutoSave();
      }
    }
  });
  const shouldShowReceiptCheckbox = useMemo$8(() => {
    return !receiptAttachment && !isReceiptUploading;
  }, [receiptAttachment, isReceiptUploading]);
  return {
    isReceiptUploading,
    setIsReceiptUploading,
    receiptAttachment,
    supportingFiles,
    handleReceiptChange,
    handleSupportingFilesChange,
    shouldShowReceiptCheckbox
  };
};
const { useMemo: useMemo$7 } = await importShared("react");
const useMileageTripFormHandlers = (setValue, getValues) => {
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    MileageTripFormField.CostAllocations,
    MileageTripFormField.IsEqualSplit,
    MileageTripFormField.ReimbursableAmount
  );
  return useMemo$7(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers
    }),
    [costAllocationHandlers]
  );
};
const { useCallback: useCallback$a, useEffect: useEffect$7, useMemo: useMemo$6, useRef: useRef$8 } = await importShared("react");
function useBlobUrlManager(options = {}) {
  const { shouldKeepUrl } = options;
  const blobUrlsRef = useRef$8(/* @__PURE__ */ new Set());
  const abortControllerRef = useRef$8(null);
  const batchControllersRef = useRef$8(/* @__PURE__ */ new Set());
  const shouldKeepUrlRef = useRef$8(shouldKeepUrl);
  shouldKeepUrlRef.current = shouldKeepUrl;
  const trackUrl = useCallback$a((url) => {
    blobUrlsRef.current.add(url);
  }, []);
  const revokeUrl = useCallback$a((url) => {
    blobUrlsRef.current.delete(url);
    try {
      URL.revokeObjectURL(url);
    } catch {
    }
  }, []);
  const isOwned = useCallback$a((url) => {
    return blobUrlsRef.current.has(url);
  }, []);
  const getAbortSignal = useCallback$a(() => {
    var _a;
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
    abortControllerRef.current = new AbortController();
    return abortControllerRef.current.signal;
  }, []);
  const createBatchController = useCallback$a(() => {
    const controller = new AbortController();
    batchControllersRef.current.add(controller);
    controller.signal.addEventListener("abort", () => {
      batchControllersRef.current.delete(controller);
    });
    const release = () => {
      batchControllersRef.current.delete(controller);
    };
    return Object.assign(controller, { release });
  }, []);
  useEffect$7(() => {
    const urls = blobUrlsRef.current;
    const batchControllers = batchControllersRef.current;
    return () => {
      var _a;
      (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
      [...batchControllers].forEach((controller) => controller.abort());
      batchControllers.clear();
      urls.forEach((url) => {
        var _a2;
        if ((_a2 = shouldKeepUrlRef.current) == null ? void 0 : _a2.call(shouldKeepUrlRef, url)) {
          return;
        }
        try {
          URL.revokeObjectURL(url);
        } catch {
        }
      });
      urls.clear();
    };
  }, []);
  return useMemo$6(
    () => ({
      trackUrl,
      revokeUrl,
      isOwned,
      getAbortSignal,
      createBatchController
    }),
    [trackUrl, revokeUrl, isOwned, getAbortSignal, createBatchController]
  );
}
const getFileExtension = (filename) => {
  if (!filename) return "unknown";
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex <= 0) return "unknown";
  return filename.slice(lastDotIndex + 1).toLowerCase() || "unknown";
};
const getSafeFileExtension = (filename) => {
  return getFileExtension(filename).replace(/[^a-z0-9]/g, "") || "unknown";
};
const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /<iframe/gi,
  /<embed/gi,
  /<object/gi,
  /data:text\/html/gi
];
const MAX_FILENAME_LENGTH = 255;
const sanitizeFileName = (fileName) => {
  if (!fileName || typeof fileName !== "string") {
    return "unnamed_file";
  }
  let sanitized = fileName.trim();
  sanitized = sanitized.replace(/\.\./g, "");
  sanitized = sanitized.replace(/[/\\]/g, "_");
  sanitized = sanitized.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
  sanitized = sanitized.replace(/[<>:"'|?*]/g, "_");
  if (sanitized.length > MAX_FILENAME_LENGTH) {
    const extension = sanitized.split(".").pop();
    const nameWithoutExt = sanitized.substring(0, sanitized.lastIndexOf("."));
    const maxNameLength = MAX_FILENAME_LENGTH - (extension ? extension.length + 1 : 0);
    sanitized = nameWithoutExt.substring(0, maxNameLength) + (extension ? `.${extension}` : "");
  }
  if (!sanitized || sanitized === "." || sanitized === "..") {
    sanitized = `file_${Date.now()}`;
  }
  return sanitized;
};
const sanitizeUrl = (url) => {
  if (!url || typeof url !== "string") {
    return null;
  }
  const trimmedUrl = url.trim();
  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(trimmedUrl)) {
      devWarn("Potentially dangerous URL detected:", trimmedUrl);
      return null;
    }
  }
  if (trimmedUrl.startsWith("/") && !trimmedUrl.startsWith("//")) {
    if (trimmedUrl.includes("..") || trimmedUrl.includes("\\")) {
      return null;
    }
    return trimmedUrl;
  }
  const allowedProtocols = ["http:", "https:", "blob:", "data:"];
  try {
    const urlObj = new URL(trimmedUrl);
    if (!allowedProtocols.includes(urlObj.protocol)) {
      return null;
    }
    if (urlObj.protocol === "data:") {
      const dataUrlPattern = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9+.-]+)(;base64)?,/;
      if (!dataUrlPattern.test(trimmedUrl)) {
        return null;
      }
      const safeMimeTypes = Object.values(AllowedMimeType);
      const mimeTypeMatch = trimmedUrl.match(/^data:([^;,]+)/);
      if (mimeTypeMatch && !safeMimeTypes.includes(mimeTypeMatch[1])) {
        return null;
      }
    }
    return trimmedUrl;
  } catch {
    return null;
  }
};
const validateFileContent = async (file) => {
  var _a;
  const fileSignatures = [
    {
      mimeTypes: [AllowedMimeType.PNG],
      signatures: [new Uint8Array([137, 80, 78, 71])],
      description: "PNG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.JPEG, AllowedMimeType.JPG],
      signatures: [
        new Uint8Array([255, 216, 255])
      ],
      description: "JPEG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.PDF],
      signatures: [new Uint8Array([37, 80, 68, 70])],
      description: "PDF document signature"
    },
    {
      mimeTypes: [AllowedMimeType.WEBP],
      signatures: [
        new Uint8Array([82, 73, 70, 70])
      ],
      description: "WebP image signature (RIFF container)"
    }
  ];
  try {
    const headerSize = 512;
    const arrayBuffer = await file.slice(0, headerSize).arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let detectedType = null;
    for (const check of fileSignatures) {
      const matches = check.signatures.some((signature) => {
        if (bytes.length < signature.length) return false;
        return signature.every((byte, index) => bytes[index] === byte);
      });
      if (matches) {
        detectedType = check.mimeTypes[0];
        break;
      }
    }
    if (detectedType) {
      const maliciousSignatures = [
        [77, 90],
        // MZ (EXE/DLL)
        [127, 69, 76, 70],
        // ELF (Linux executable)
        [202, 254, 186, 190],
        // Mach-O (macOS executable)
        [35, 33],
        // #! (Shell script)
        [60, 63, 112, 104, 112]
      ];
      for (let i = 1; i < Math.min(bytes.length - 4, headerSize - 4); i++) {
        for (const malSig of maliciousSignatures) {
          if (malSig.every((byte, offset) => bytes[i + offset] === byte)) {
            return {
              isValid: false,
              message: "File contains suspicious executable patterns. Possible polyglot attack."
            };
          }
        }
      }
    }
    if (detectedType === AllowedMimeType.WEBP) {
      const webpCheck = new Uint8Array([87, 69, 66, 80]);
      const webpMatches = webpCheck.every((byte, index) => bytes[index + 8] === byte);
      if (!webpMatches) {
        detectedType = null;
      }
    }
    if (detectedType === AllowedMimeType.PDF) {
      const pdfText = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
      const dangerousPatterns = [
        "/JavaScript",
        "/JS",
        "/Launch",
        "/SubmitForm",
        "/ImportData"
      ];
      if (dangerousPatterns.some((pattern) => pdfText.includes(pattern))) {
        devWarn("PDF contains potentially dangerous features:", pdfText.substring(0, 200));
      }
    }
    if (!detectedType) {
      return {
        isValid: false,
        message: "Unable to verify file type. File content does not match any supported format."
      };
    }
    const expectedTypes = ((_a = fileSignatures.find(
      (s) => s.mimeTypes.includes(detectedType)
    )) == null ? void 0 : _a.mimeTypes) || [];
    if (expectedTypes.includes(file.type)) {
      return { isValid: true, actualMimeType: detectedType };
    }
    return {
      isValid: false,
      actualMimeType: detectedType,
      message: `File type mismatch. File appears to be ${detectedType} but was declared as ${file.type}`
    };
  } catch (error) {
    devError("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
};
const createSafeFileMetadata = (file, response) => {
  return {
    id: response.id || `receipt-${Date.now()}`,
    url: sanitizeUrl(response.url || "") || "",
    blobUrl: response.blobUrl,
    filename: sanitizeFileName(response.fileName || file.name),
    originalName: sanitizeFileName(file.name),
    size: Math.min(response.fileSize || file.size, Number.MAX_SAFE_INTEGER),
    type: getSafeFileExtension(file.name),
    mimeType: response.mimeType || file.type,
    uploadedAt: new Date(response.uploadedAt || Date.now()).toISOString(),
    status: "uploaded"
  };
};
const rateLimitMap = /* @__PURE__ */ new Map();
const checkRateLimit = (key, maxRequests = 5, windowMs = 6e4) => {
  const now = Date.now();
  for (const [k, e] of rateLimitMap.entries()) {
    if (now > e.resetTime) {
      rateLimitMap.delete(k);
    }
  }
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }
  if (entry.count >= maxRequests) {
    return false;
  }
  entry.count++;
  return true;
};
const validateCSPHeaders = (headers) => {
  const csp = headers.get("Content-Security-Policy");
  if (!csp) return true;
  const unsafePatterns = [
    /unsafe-inline/i,
    /unsafe-eval/i,
    /\*/
  ];
  for (const pattern of unsafePatterns) {
    if (pattern.test(csp)) {
      devWarn("Potentially unsafe CSP directive detected");
      return false;
    }
  }
  return true;
};
const securityUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkRateLimit,
  createSafeFileMetadata,
  sanitizeFileName,
  sanitizeUrl,
  validateCSPHeaders,
  validateFileContent
}, Symbol.toStringTag, { value: "Module" }));
const canBrowserDisplayImage = (mimeType) => {
  const browserSupportedImages = [
    AllowedMimeType.PNG,
    AllowedMimeType.JPEG,
    AllowedMimeType.JPG,
    AllowedMimeType.WEBP
  ];
  return browserSupportedImages.includes(mimeType);
};
const getFilePreviewType = (mimeType) => {
  const config2 = MIME_TYPE_CONFIG.get(mimeType);
  if ((config2 == null ? void 0 : config2.type) === FilePreviewType.IMAGE) {
    if (canBrowserDisplayImage(mimeType)) {
      return FilePreviewType.IMAGE;
    }
    return FilePreviewType.UNKNOWN;
  }
  if ((config2 == null ? void 0 : config2.type) === FilePreviewType.PDF) {
    return FilePreviewType.PDF;
  }
  return FilePreviewType.UNKNOWN;
};
const isValidMimeType = (mimeType) => {
  return MIME_TYPE_CONFIG.has(mimeType);
};
const validateReceiptFile = (file) => {
  const fileName = file.name.toLowerCase();
  const hasAllowedExtension = [".png", ".jpg", ".jpeg", ".heic", ".heif", ".webp", ".pdf"].some((ext) => fileName.endsWith(ext));
  if (file.type && !isValidMimeType(file.type)) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Received MIME type: ${file.type}`
    };
  }
  if (!file.type && !hasAllowedExtension) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Unknown file type with extension: ${getFileExtension(fileName)}`
    };
  }
  let mimeType = file.type;
  if (!file.type && hasAllowedExtension) {
    if (fileName.endsWith(".heic")) mimeType = AllowedMimeType.HEIC;
    else if (fileName.endsWith(".heif")) mimeType = AllowedMimeType.HEIF;
    else if (fileName.endsWith(".png")) mimeType = AllowedMimeType.PNG;
    else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) mimeType = AllowedMimeType.JPEG;
    else if (fileName.endsWith(".webp")) mimeType = AllowedMimeType.WEBP;
    else if (fileName.endsWith(".pdf")) mimeType = AllowedMimeType.PDF;
  }
  const config2 = MIME_TYPE_CONFIG.get(mimeType);
  if (!config2) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Could not determine file configuration for: ${mimeType}`
    };
  }
  if (file.size > config2.maxSizeBytes) {
    return {
      type: "size",
      message: `File size exceeds limit. Max size for ${config2.displayName} is ${config2.maxSizeMB}MB`,
      details: `File size: ${(file.size / 1024 / 1024).toFixed(1)}MB`
    };
  }
  return null;
};
const createErrorAttachment = (file, errorMessage, index, errorType = "validation") => {
  const idPrefix = errorType === "upload" ? "upload-error" : "error";
  return {
    id: `${idPrefix}-${Date.now()}-${index}`,
    url: "",
    blobUrl: void 0,
    filename: file.name,
    originalName: file.name,
    size: file.size,
    type: getFileExtension(file.name),
    mimeType: file.type,
    uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
    status: "error",
    errorMessage
  };
};
const getPlaceholderByType = (type) => {
  const placeholderMap = {
    [ECostAllocation.Project]: "Enter the complete PO number",
    [ECostAllocation.Admin]: "Enter the complete internal PO number",
    [ECostAllocation.Team]: "Enter sales team # (e.g., 01)",
    [ECostAllocation.Rep]: "Enter sales rep's name"
  };
  return placeholderMap[type];
};
const renderProjectItem = (item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.data.poNumber }),
      " ",
      item.data.supplier
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
};
const renderAdminItem = (item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.data.poNumber }),
      " ",
      item.data.supplier
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
};
const renderTeamItem = (item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: item.data.number }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
};
const renderAllocationItem = (type, item) => {
  switch (type) {
    case ECostAllocation.Project:
      return renderProjectItem(item);
    case ECostAllocation.Admin:
      return renderAdminItem(item);
    case ECostAllocation.Team:
      return renderTeamItem(item);
    case ECostAllocation.Rep:
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: item.label });
  }
};
const getDisplayLabel = (type, item) => {
  if (!item || !item.data) return void 0;
  const data = item.data;
  switch (type) {
    case ECostAllocation.Project: {
      const poNumber = data.poNumber || "";
      const supplier = data.supplier || "";
      const description = data.description || "";
      return supplier ? `${poNumber} ${supplier} / ${description}` : `${poNumber} / ${description}`;
    }
    case ECostAllocation.Admin: {
      const poNumber = data.poNumber || "";
      const supplier = data.supplier || "";
      const description = data.description || "";
      return supplier ? `${poNumber} ${supplier} / ${description}` : `${poNumber} / ${description}`;
    }
    case ECostAllocation.Team: {
      const number2 = data.number || "";
      const description = data.description || "";
      return `${number2} / ${description}`;
    }
    default:
      return void 0;
  }
};
const getProjectDetails = (item) => {
  if (!item || !item.data) return null;
  const data = item.data;
  const projectId = data.projectId || data.poNumber || "";
  const projectDescription = data.projectDescription || data.description || "";
  if (!projectId) return null;
  return {
    projectId,
    projectDescription
  };
};
function isApiError(error) {
  return error instanceof Error && "response" in error;
}
function getErrorMessage(error) {
  var _a;
  if (isApiError(error)) {
    const data = (_a = error.response) == null ? void 0 : _a.data;
    const detail = typeof (data == null ? void 0 : data.detail) === "string" ? data.detail : void 0;
    return (data == null ? void 0 : data.message) || detail || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}
function isViteDevMode() {
  try {
    const url = new URL(import.meta.url);
    return url.pathname.includes("/src/") || url.pathname.includes("/@fs/");
  } catch {
    return false;
  }
}
function getMfeBaseUrl() {
  if (isViteDevMode()) {
    return "";
  }
  try {
    const url = new URL(import.meta.url);
    const pathParts = url.pathname.split("/");
    const assetsIndex = pathParts.indexOf("assets");
    if (assetsIndex > 0) {
      const basePath2 = pathParts.slice(0, assetsIndex).join("/");
      return `${url.origin}${basePath2}`;
    }
    const basePath = pathParts.slice(0, -1).join("/");
    return `${url.origin}${basePath}`;
  } catch {
    return "";
  }
}
function getMockAssetUrl(path) {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const baseUrl = getMfeBaseUrl();
  if (baseUrl) {
    return `${baseUrl}/${cleanPath}`;
  }
  return `/${cleanPath}`;
}
function resolveFileUrl(blobUrl, url) {
  if (blobUrl) {
    return blobUrl;
  }
  if (!url) {
    return "";
  }
  if (url.startsWith("/mocks/")) {
    return getMockAssetUrl(url);
  }
  return url;
}
function mapBackendFileToResponse(backend, blobUrl) {
  return {
    id: backend.id,
    fileName: backend.name,
    fileSize: backend.size,
    mimeType: backend.mimeType,
    url: FILE_ENDPOINTS.DOWNLOAD(backend.id),
    uploadedAt: backend.uploadedAt,
    blobUrl,
    type: backend.mimeType.split("/")[1] || "unknown"
  };
}
async function validateAndPrepareFile(file) {
  const validationResult = shouldUseEnhancedValidation(file) ? await validateFileContentEnhanced(file) : await validateFileContent(file);
  if (!validationResult.isValid) {
    throw new Error(validationResult.message || "File content does not match the declared type.");
  }
  if (validationResult.actualMimeType && validationResult.actualMimeType !== file.type) {
    return new File([file], file.name, {
      type: validationResult.actualMimeType,
      lastModified: file.lastModified
    });
  }
  return file;
}
function handleUploadError(error) {
  var _a, _b;
  if (error instanceof Error && (error.name === "CanceledError" || error.code === "ECONNABORTED")) {
    throw new Error("Upload timeout. Please check your connection and try again.");
  }
  if (isApiError(error)) {
    const status = (_a = error.response) == null ? void 0 : _a.status;
    const data = (_b = error.response) == null ? void 0 : _b.data;
    const detail = typeof (data == null ? void 0 : data.detail) === "string" ? data.detail : void 0;
    const message = (data == null ? void 0 : data.message) || detail;
    switch (status) {
      case 409:
        throw new Error(message || "File limit exceeded. Maximum 1 receipt or 3 supporting documents per expense.");
      case 413:
        throw new Error("File size too large. Please choose a smaller file.");
      case 415:
        throw new Error("Unsupported file type. Please upload a PNG, JPG, or PDF file.");
      case 422:
        throw new Error(message || "File validation failed.");
      case 401:
      case 403:
        throw new Error("Authentication failed. Please log in again.");
      default:
        throw new Error(message || "Upload failed. Please try again.");
    }
  }
  throw new Error(getErrorMessage(error));
}
const uploadFile = async (params, retryCount = 0) => {
  var _a;
  const { file, companyShortName, expenseId, documentType, onProgress, signal } = params;
  if (signal == null ? void 0 : signal.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }
  const userKey = `file_upload_${documentType}`;
  if (!checkRateLimit(userKey, 10, 6e4)) {
    throw new Error("Too many upload attempts. Please wait before trying again.");
  }
  const fileToUpload = await validateAndPrepareFile(file);
  const formData = new FormData();
  formData.append("file", fileToUpload);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FILE_UPLOAD_TIMEOUT);
  const abortHandler = () => controller.abort();
  signal == null ? void 0 : signal.addEventListener("abort", abortHandler);
  try {
    const url = `${FILE_ENDPOINTS.UPLOAD(companyShortName, expenseId)}?document_type=${documentType}`;
    const response = await apiClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      timeout: FILE_UPLOAD_TIMEOUT,
      signal: controller.signal,
      onUploadProgress: (progressEvent) => {
        devLog("Upload progress event:", { loaded: progressEvent.loaded, total: progressEvent.total });
        if (onProgress && progressEvent.total) {
          const percentage = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          onProgress({
            loaded: progressEvent.loaded,
            total: progressEvent.total,
            percentage
          });
        }
      }
    });
    const blobUrl = URL.createObjectURL(fileToUpload);
    return mapBackendFileToResponse(response.data, blobUrl);
  } catch (error) {
    if (error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError")) {
      throw error;
    }
    if (isApiError(error) && !(signal == null ? void 0 : signal.aborted)) {
      const status = (_a = error.response) == null ? void 0 : _a.status;
      if (status && status >= 500 && status < 600 && retryCount < FILE_UPLOAD_MAX_RETRIES) {
        const delay = calculateExponentialBackoff(retryCount);
        await sleep(delay);
        return uploadFile(params, retryCount + 1);
      }
    }
    handleUploadError(error);
  } finally {
    clearTimeout(timeoutId);
    signal == null ? void 0 : signal.removeEventListener("abort", abortHandler);
  }
};
const deleteFile = async (fileId) => {
  var _a, _b;
  try {
    await apiClient.delete(FILE_ENDPOINTS.DELETE(fileId));
  } catch (error) {
    const message = isApiError(error) ? ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to delete file" : getErrorMessage(error);
    throw new Error(message);
  }
};
const downloadFile = async (fileId, signal, retryCount = 0) => {
  var _a;
  try {
    const response = await apiClient.get(FILE_ENDPOINTS.DOWNLOAD(fileId), {
      responseType: "blob",
      signal
    });
    return URL.createObjectURL(response.data);
  } catch (error) {
    if (error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError")) {
      throw error;
    }
    if (isApiError(error)) {
      const status = (_a = error.response) == null ? void 0 : _a.status;
      if (status === 404) {
        throw new Error("File not found");
      }
      if (status && status >= 500 && status < 600 && retryCount < FILE_UPLOAD_MAX_RETRIES) {
        if (signal == null ? void 0 : signal.aborted) {
          throw new DOMException("Aborted", "AbortError");
        }
        const delay = calculateExponentialBackoff(retryCount);
        await sleep(delay);
        return downloadFile(fileId, signal, retryCount + 1);
      }
    }
    throw new Error(getErrorMessage(error));
  }
};
const PREVIEWABLE_MIME_TYPES = /* @__PURE__ */ new Set([
  AllowedMimeType.PNG,
  AllowedMimeType.JPEG,
  AllowedMimeType.JPG,
  AllowedMimeType.PDF,
  AllowedMimeType.WEBP
]);
const canPreviewFile = (attachment) => {
  return PREVIEWABLE_MIME_TYPES.has(attachment.mimeType);
};
const BLOB_URL_CLEANUP_DELAY = 5e3;
const BLOB_URL_REGISTRY = /* @__PURE__ */ new WeakMap();
const registerBlobUrl = (window2, url) => {
  var _a;
  if (!BLOB_URL_REGISTRY.has(window2)) {
    BLOB_URL_REGISTRY.set(window2, /* @__PURE__ */ new Set());
  }
  (_a = BLOB_URL_REGISTRY.get(window2)) == null ? void 0 : _a.add(url);
};
const cleanupBlobUrl = (url) => {
  try {
    URL.revokeObjectURL(url);
  } catch {
  }
};
const openFilePreview = async (attachment) => {
  const rawUrl = resolveFileUrl(attachment.blobUrl, attachment.url);
  const previewUrl = sanitizeUrl(rawUrl);
  if (!previewUrl) {
    devError("Invalid or unsafe URL detected");
    throw new Error("Cannot open file: Invalid URL");
  }
  if (!canPreviewFile(attachment)) {
    const link = document.createElement("a");
    link.href = previewUrl;
    link.download = attachment.originalName;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  if (previewUrl.startsWith("blob:") || previewUrl.startsWith("data:")) {
    const newWindow = window.open(previewUrl, "_blank", "noopener,noreferrer");
    if (newWindow && previewUrl.startsWith("blob:")) {
      registerBlobUrl(newWindow, previewUrl);
    }
    return;
  }
  if (previewUrl.startsWith("https://storage.expensesapp.com/")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FILE_UPLOAD_TIMEOUT);
      const response = await fetch(previewUrl, {
        signal: controller.signal,
        mode: "cors",
        credentials: "omit"
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const newWindow = window.open(blobUrl, "_blank", "noopener,noreferrer");
      if (newWindow) {
        registerBlobUrl(newWindow, blobUrl);
        newWindow.addEventListener("beforeunload", () => cleanupBlobUrl(blobUrl), { once: true });
        setTimeout(() => cleanupBlobUrl(blobUrl), BLOB_URL_CLEANUP_DELAY);
      } else {
        cleanupBlobUrl(blobUrl);
      }
    } catch (error) {
      devError("Failed to open file preview:", error);
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    }
    return;
  }
  window.open(previewUrl, "_blank", "noopener,noreferrer");
};
const { useCallback: useCallback$9 } = await importShared("react");
function useFileOperations(options) {
  const { documentType, expenseId, shouldKeepUrl } = options;
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const { isForDraft } = usePendingUploadStore();
  const blobManager = useBlobUrlManager({ shouldKeepUrl });
  const isStoreDataRelevant = isForDraft(expenseId);
  const validateFile = useCallback$9(
    (file) => {
      return validateReceiptFile(file);
    },
    []
  );
  const createAttachmentFromResponse = useCallback$9(
    (file, response) => {
      const attachment = createSafeFileMetadata(file, response);
      if (response.blobUrl) {
        blobManager.trackUrl(response.blobUrl);
      }
      return attachment;
    },
    [blobManager]
  );
  const uploadSingleFile = useCallback$9(
    async (file, targetExpenseId, signal, onProgress) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const response = await uploadFile({
        file,
        companyShortName: selectedCompany.shortName,
        expenseId: targetExpenseId,
        documentType,
        signal,
        onProgress
      });
      return createAttachmentFromResponse(file, response);
    },
    [selectedCompany == null ? void 0 : selectedCompany.shortName, documentType, createAttachmentFromResponse]
  );
  const deleteFileById = useCallback$9(async (fileId) => {
    await deleteFile(fileId);
  }, []);
  const loadFileContent = useCallback$9(
    async (fileId, signal) => {
      const blobUrl = await downloadFile(fileId, signal);
      blobManager.trackUrl(blobUrl);
      return blobUrl;
    },
    [blobManager]
  );
  const openPreview = useCallback$9(
    async (attachment) => {
      try {
        await openFilePreview(attachment);
      } catch (error) {
        devError("Failed to open preview:", error);
        throw error;
      }
    },
    []
  );
  return {
    selectedCompany,
    blobManager,
    isStoreDataRelevant,
    validateFile,
    uploadSingleFile,
    deleteFileById,
    loadFileContent,
    openPreview,
    createAttachmentFromResponse
  };
}
const affidavitExpenseSchema = object({
  affidavit: affidavitSchema,
  expenseDate: string().min(1, "Expense date is required")
}).extend(basicDetailsSchema.pick({ vendor: true }).shape);
const affidavitExpenseDraftSchema = object({
  affidavit: object({
    justification: string().optional(),
    digitalSignature: string().optional()
  }).optional(),
  vendor: string().optional(),
  expenseDate: string().optional()
});
const affidavitExpenseValidationStrategy = createValidationStrategy(
  affidavitExpenseSchema,
  {
    validateForDraft: (data) => affidavitExpenseDraftSchema.safeParse(data),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseDate"],
      (data) => {
        var _a, _b;
        return !!(((_a = data.affidavit) == null ? void 0 : _a.justification) || ((_b = data.affidavit) == null ? void 0 : _b.digitalSignature));
      }
    )
  }
);
const minimalExpenseSchema = object({
  receiptAttachment: custom().optional().nullable(),
  isReceiptUnavailable: boolean()
}).safeExtend(basicDetailsSchema.shape).refine(
  (data) => isReceiptValidSimple(data),
  {
    message: "Receipt is required unless marked as unavailable",
    path: ["receiptAttachment"]
  }
);
const minimalExpenseDraftSchema = object({
  receiptAttachment: custom().optional().nullable(),
  isReceiptUnavailable: boolean(),
  vendor: string().optional(),
  expenseLocation: string().optional()
});
const minimalExpenseValidationStrategy = createValidationStrategy(
  minimalExpenseSchema,
  {
    validateForDraft: (data) => minimalExpenseDraftSchema.safeParse(data),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseLocation"],
      (data) => !!data.receiptAttachment
    )
  }
);
var MileagePeriodFormField = /* @__PURE__ */ ((MileagePeriodFormField2) => {
  MileagePeriodFormField2["MileageType"] = "mileageType";
  MileagePeriodFormField2["ExpensePeriod"] = "expensePeriod";
  MileagePeriodFormField2["TotalDistance"] = "totalDistance";
  MileagePeriodFormField2["RatePerUnit"] = "ratePerUnit";
  MileagePeriodFormField2["RateUnit"] = "rateUnit";
  MileagePeriodFormField2["ReimbursableAmount"] = "reimbursableAmount";
  MileagePeriodFormField2["BusinessPurpose"] = "businessPurpose";
  MileagePeriodFormField2["ExpenseDescription"] = "expenseDescription";
  MileagePeriodFormField2["CostAllocations"] = "costAllocations";
  MileagePeriodFormField2["IsEqualSplit"] = "isEqualSplit";
  MileagePeriodFormField2["DeferToApprover"] = "deferToApprover";
  MileagePeriodFormField2["SupportingFiles"] = "supportingFiles";
  MileagePeriodFormField2["AdditionalComments"] = "additionalComments";
  return MileagePeriodFormField2;
})(MileagePeriodFormField || {});
const mileagePeriodFormSchema = object({
  formType: literal("period"),
  [MileagePeriodFormField.MileageType]: mileageTypeField,
  [MileagePeriodFormField.ExpensePeriod]: expensePeriodField,
  [MileagePeriodFormField.TotalDistance]: totalDistanceField,
  [MileagePeriodFormField.RatePerUnit]: ratePerUnitField,
  [MileagePeriodFormField.RateUnit]: rateUnitField,
  [MileagePeriodFormField.ReimbursableAmount]: reimbursableAmountField,
  [MileagePeriodFormField.BusinessPurpose]: businessPurposeField,
  [MileagePeriodFormField.ExpenseDescription]: expenseDescriptionField,
  [MileagePeriodFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })).optional(),
  [MileagePeriodFormField.IsEqualSplit]: boolean().optional(),
  [MileagePeriodFormField.DeferToApprover]: boolean().optional(),
  [MileagePeriodFormField.SupportingFiles]: supportingFilesField,
  [MileagePeriodFormField.AdditionalComments]: additionalCommentsFieldOptional
}).superRefine((data, ctx) => {
  validateCostAllocation(ctx, data.costAllocations, data.reimbursableAmount, data.deferToApprover);
});
const ExpenseTypeSelect = ({
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  placeholder = "Select expense type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingExpenses } = useExpenseTypes(companyId, false);
  const options = (expenseTypes == null ? void 0 : expenseTypes.map((et) => ({
    value: et.id,
    label: et.name
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingExpenses;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingExpenses ? "Loading expense types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $a,
    {
      label: "Expense type",
      placeholder: displayPlaceholder,
      options,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled: disabled || isLoading || !companyId,
      error
    }
  );
};
const { useEffect: useEffect$6, useRef: useRef$7 } = await importShared("react");
const TAX_CURRENCY = "CAD";
const ExpenseDetailsSection = ({
  control,
  setValue,
  disabled = false
}) => {
  const { netCurrency, expenseLocation } = useFormFieldValues(control, [
    "isDifferentCurrency",
    "netCurrency",
    "totalCurrency",
    "expenseLocation"
  ]);
  const { data: currencies, isLoading: currenciesLoading } = useCurrencies();
  const { data: countries, isLoading: countriesLoading } = useCountries();
  const { data: paymentMethods, isLoading: paymentMethodsLoading } = usePaymentMethods();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const { showTaxFields } = useTaxFieldVisibility(expenseLocation);
  const { data: taxTypes, isLoading: taxTypesLoading } = useTaxTypesDisplay({
    companyShortName: (selectedCompany == null ? void 0 : selectedCompany.shortName) ?? null,
    enabled: showTaxFields
  });
  const prevShowTaxFields = useRef$7(showTaxFields);
  useEffect$6(() => {
    if (prevShowTaxFields.current && !showTaxFields) {
      setValue("taxType", "", { shouldValidate: false, shouldDirty: false });
      setValue("taxAmount", "", { shouldValidate: false, shouldDirty: false });
    }
    prevShowTaxFields.current = showTaxFields;
  }, [showTaxFields, setValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseType",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExpenseTypeSelect,
            {
              value: field.value || "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "vendor",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Va,
            {
              label: "Vendor",
              placeholder: "Enter vendor name",
              ...field,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDate",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ka,
            {
              label: "Expense date",
              placeholder: "Select date expense incurred",
              value: field.value ? new Date(field.value) : void 0,
              onChange: (date2) => field.onChange(date2 ? date2.toISOString() : ""),
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              maxDate: /* @__PURE__ */ new Date()
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseLocation",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          const selectedCountry = countries == null ? void 0 : countries.find((c) => c.id.toString() === field.value);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Jn,
            {
              label: "Expense location",
              placeholder: "Select country",
              value: field.value ? {
                value: field.value,
                label: (selectedCountry == null ? void 0 : selectedCountry.name) || "",
                data: (selectedCountry == null ? void 0 : selectedCountry.defaultCurrencyIso) || DEFAULT_CURRENCY_CODE
                // TODO(TRX-90): Implement user default currency based on home company
              } : null,
              onValueChange: (item) => {
                const currencyCode = (item == null ? void 0 : item.data) || DEFAULT_CURRENCY_CODE;
                field.onChange((item == null ? void 0 : item.value) || "");
                setValue("netCurrency", { code: currencyCode, locale: getCurrencyLocale(currencyCode) });
              },
              onSearch: async (query) => {
                return (countries ?? []).reduce((acc, option) => {
                  if (option.name.toLowerCase().includes(query.toLowerCase())) {
                    acc.push({ value: option.id.toString(), label: option.name, data: option.defaultCurrencyIso });
                  }
                  return acc;
                }, []);
              },
              searchOnFocus: true,
              searchDelay: 0,
              minSearchLength: 0,
              onBlur: field.onBlur,
              clearOnBlur: false,
              dropdownClassName: "max-h-47",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled: disabled || countriesLoading
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "paymentMethod",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            $a,
            {
              label: "Payment method",
              placeholder: "Select payment method",
              options: (paymentMethods == null ? void 0 : paymentMethods.map((pm) => ({
                value: pm.id,
                label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  pm.id === DEFAULT_PAYMENT_METHOD.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 text-exp-yellow-y-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 text-trax-neutral-1000" }),
                  pm.name
                ] })
              }))) || [],
              value: field.value || "",
              onValueChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled: disabled || paymentMethodsLoading
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-start-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "netAmount",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ga,
              {
                label: "Receipt total",
                placeholder: "0.00",
                textAlign: "right",
                value: field.value || "",
                onChange: createDecimalChangeHandler(field.onChange),
                onBlur: field.onBlur,
                suffix: {
                  type: "searchSelect",
                  value: netCurrency ? {
                    value: netCurrency.code,
                    label: netCurrency.code
                  } : {
                    value: DEFAULT_CURRENCY_CODE,
                    label: DEFAULT_CURRENCY_CODE
                  },
                  onValueChange: (value) => {
                    const currencyCode = (value == null ? void 0 : value.value) || DEFAULT_CURRENCY_CODE;
                    setValue("netCurrency", { code: currencyCode, locale: getCurrencyLocale(currencyCode) });
                  },
                  placeholder: "Search currency",
                  buttonLabel: (netCurrency == null ? void 0 : netCurrency.code) || DEFAULT_CURRENCY_CODE,
                  onSearch: async (query) => {
                    return (currencies ?? []).reduce((acc, option) => {
                      if (option.isoCode.toLowerCase().includes(query.toLowerCase()) || option.name.toLowerCase().includes(query.toLowerCase())) {
                        acc.push({ value: option.isoCode, label: option.name });
                      }
                      return acc;
                    }, []);
                  },
                  renderItem: (item, highlight, isSelected) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight(item.value) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xxs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(item.label) })
                  ] }),
                  searchOnFocus: true,
                  minSearchLength: 0,
                  searchDelay: 0,
                  dropdownClassName: "left-0 max-h-48 -mt-1 border-0 rounded-t-none",
                  popoverClassName: "w-[128px]",
                  disabled: disabled || currenciesLoading
                },
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled: disabled || currenciesLoading
              }
            );
          }
        }
      ),
      showTaxFields && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "taxType",
            control,
            render: ({ field, fieldState }) => {
              var _a;
              const selectedTaxType = taxTypes == null ? void 0 : taxTypes.find((tt) => tt.id.toString() === field.value);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Jn,
                {
                  label: "Tax type",
                  placeholder: "Select type",
                  value: field.value ? {
                    value: field.value,
                    label: selectedTaxType ? `${selectedTaxType.taxCode} ${selectedTaxType.taxRate}%` : ""
                  } : null,
                  onValueChange: (item) => {
                    field.onChange((item == null ? void 0 : item.value) || "");
                  },
                  onSearch: async (query) => {
                    return (taxTypes ?? []).reduce((acc, tt) => {
                      const label = `${tt.taxCode} ${tt.taxRate}%`;
                      if (tt.taxCode.toLowerCase().includes(query.toLowerCase()) || tt.taxRate.includes(query) || label.toLowerCase().includes(query.toLowerCase())) {
                        acc.push({ value: tt.id.toString(), label });
                      }
                      return acc;
                    }, []);
                  },
                  renderItem: (item, highlight, isSelected) => {
                    const tt = taxTypes == null ? void 0 : taxTypes.find((t) => t.id.toString() === item.value);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight((tt == null ? void 0 : tt.taxCode) || item.value) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(`${(tt == null ? void 0 : tt.taxRate) || ""}%`) })
                    ] });
                  },
                  searchOnFocus: true,
                  searchDelay: 0,
                  minSearchLength: 0,
                  onBlur: field.onBlur,
                  clearOnBlur: false,
                  dropdownClassName: "max-h-47",
                  tooltipProps: { delayDuration: 300 },
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled: disabled || taxTypesLoading
                }
              );
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "taxAmount",
            control,
            render: ({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ga,
                {
                  label: "Tax amount",
                  placeholder: "0.00",
                  textAlign: "right",
                  suffix: TAX_CURRENCY,
                  value: field.value || "",
                  onBlur: field.onBlur,
                  onChange: createDecimalChangeHandler(field.onChange),
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled
                }
              );
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "totalAmount",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ga,
              {
                label: "Total amount",
                placeholder: "0.00",
                textAlign: "right",
                suffix: (netCurrency == null ? void 0 : netCurrency.code) || DEFAULT_CURRENCY_CODE,
                value: field.value || "",
                onChange: createDecimalChangeHandler(field.onChange),
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }
        }
      )
    ] })
  ] });
};
const BusinessPurposeSelect = ({
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  placeholder = "Select business purpose",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: businessPurposes, isLoading: isLoadingPurposes } = useBusinessPurposes(companyId, false);
  const options = (businessPurposes == null ? void 0 : businessPurposes.map((bp) => ({
    value: bp.id,
    label: bp.businessPurpose
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingPurposes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingPurposes ? "Loading business purposes..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $a,
    {
      label: "Business purpose",
      placeholder: displayPlaceholder,
      options,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled: disabled || isLoading || !companyId,
      error
    }
  );
};
const { useEffect: useEffect$5, useRef: useRef$6 } = await importShared("react");
const ExpenseJustificationSection = ({
  control,
  setValue,
  disabled = false
}) => {
  const companyShortName = useCompanyStore((state) => {
    var _a;
    return ((_a = state.selectedCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const expenseTypeId = useFormFieldValues(control, ["expenseType"]).expenseType;
  const formType = useFormTypeId(expenseTypeId, companyShortName);
  const showPersonsEntertained = formType === ExpenseFormType.ENTERTAINMENT;
  const prevShowPersonsEntertained = useRef$6(showPersonsEntertained);
  useEffect$5(() => {
    if (prevShowPersonsEntertained.current && !showPersonsEntertained) {
      setValue("personsEntertained", "", { shouldValidate: false, shouldDirty: false });
    }
    prevShowPersonsEntertained.current = showPersonsEntertained;
  }, [showPersonsEntertained, setValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "businessPurpose",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            BusinessPurposeSelect,
            {
              value: field.value || "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDescription",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ta,
            {
              ...field,
              label: "Expense description",
              placeholder: "Describe what was purchased",
              rows: 1,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }
      }
    ),
    showPersonsEntertained && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "personsEntertained",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ta,
            {
              ...field,
              label: "Persons entertained",
              placeholder: "Enter the full names of clients/guests entertained",
              rows: 1,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }
      }
    )
  ] });
};
const AdditionalCommentsSection = ({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "additionalComments",
      control,
      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ta,
        {
          ...field,
          placeholder: "Add any additional comments...",
          rows: 1,
          value: field.value || "",
          disabled
        }
      )
    }
  ) });
};
function AffidavitContent({
  control,
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "w-full max-h-full bg-yellow-50 border border-yellow-200 p-3 flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600", children: "Please sign the affidavit:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.justification",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ta,
            {
              name: field.name,
              ref: field.ref,
              onBlur: field.onBlur,
              value: field.value || "",
              onChange: field.onChange,
              onInput: (e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight + 5, 200)}px`;
              },
              className: "w-full text-wrap bg-white border resize-none overflow-y-auto min-h-16 max-h-34 leading-4 placeholder:text-sm placeholder:font-normal placeholder:text-exp-grey-500",
              label: "Justification",
              placeholder: "State reason for missing receipt",
              maxCharacters: 150,
              showCharacterCount: true,
              enforceMaxLength: true,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              required: true
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.digitalSignature",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Va,
            {
              name: field.name,
              ref: field.ref,
              onBlur: field.onBlur,
              value: field.value || "",
              onChange: (e) => {
                const upperValue = e.target.value.toUpperCase();
                const filteredValue = upperValue.replace(/[^A-Z]/g, "").slice(0, 3);
                field.onChange(filteredValue);
              },
              className: "w-full text-sm bg-white border h-6 resize-none placeholder:font-normal placeholder:text-exp-grey-500 px-2 py-4",
              label: "Digital Signature",
              placeholder: "Enter initials",
              maxLength: 3,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              required: true
            }
          );
        }
      }
    )
  ] }) }) });
}
const React$2 = await importShared("react");
const { useCallback: useCallback$8, useEffect: useEffect$4, useRef: useRef$5, useState: useState$5 } = React$2;
const ReceiptUpload = ({
  onReceiptChange,
  onUploadingChange,
  initialReceipt,
  disabled = false,
  className = "",
  expenseId,
  onSaveDraftForUpload
}) => {
  const fileInputRef = useRef$5(null);
  const initialReceiptRef = useRef$5(initialReceipt);
  const attachmentRef = useRef$5(void 0);
  const {
    selectedCompany,
    blobManager,
    isStoreDataRelevant,
    validateFile,
    uploadSingleFile,
    deleteFileById,
    loadFileContent,
    openPreview
  } = useFileOperations({
    documentType: "receipt",
    expenseId,
    shouldKeepUrl: (url) => {
      var _a, _b;
      return ((_a = attachmentRef.current) == null ? void 0 : _a.blobUrl) === url || ((_b = initialReceiptRef.current) == null ? void 0 : _b.blobUrl) === url;
    }
  });
  const { receipt, startUploadFlow, updateDraftId } = usePendingUploadStore();
  const {
    pendingFile,
    uploadedAttachment,
    status: uploadStatus,
    setPendingFile,
    clearPendingFile,
    setUploadedAttachment,
    clearUploadedAttachment,
    setStatus: setUploadStatus
  } = receipt;
  const effectiveInitialReceipt = isStoreDataRelevant ? uploadedAttachment || initialReceipt : initialReceipt;
  const [attachment, setAttachment] = useState$5(effectiveInitialReceipt);
  const [localError, setLocalError] = useState$5();
  const [dragActive, setDragActive] = useState$5(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState$5(false);
  const [isDeleting, setIsDeleting] = useState$5(false);
  const [deleteError, setDeleteError] = useState$5(null);
  const [isLoadingFile, setIsLoadingFile] = useState$5(false);
  const [fileLoadError, setFileLoadError] = useState$5(null);
  const [loadedBlobUrl, setLoadedBlobUrl] = useState$5(null);
  const fileLoadAttemptedRef = useRef$5(/* @__PURE__ */ new Set());
  const handleFileUploadInternalRef = useRef$5(null);
  const isProcessing = uploadStatus === "saving-draft" || uploadStatus === "uploading";
  const isUploadDisabled = disabled;
  initialReceiptRef.current = initialReceipt;
  attachmentRef.current = attachment;
  if (effectiveInitialReceipt == null ? void 0 : effectiveInitialReceipt.blobUrl) {
    blobManager.trackUrl(effectiveInitialReceipt.blobUrl);
  }
  useEffect$4(() => {
    const newAttachment = isStoreDataRelevant ? uploadedAttachment || initialReceipt : initialReceipt;
    if (newAttachment == null ? void 0 : newAttachment.blobUrl) {
      blobManager.trackUrl(newAttachment.blobUrl);
    }
    if (isStoreDataRelevant && uploadedAttachment && !initialReceipt) {
      onReceiptChange == null ? void 0 : onReceiptChange(uploadedAttachment);
    }
    if (isStoreDataRelevant && uploadedAttachment && (initialReceipt == null ? void 0 : initialReceipt.id) === uploadedAttachment.id) {
      clearUploadedAttachment();
    }
    if (newAttachment !== attachment) {
      setAttachment(newAttachment);
    }
  }, [initialReceipt, uploadedAttachment, isStoreDataRelevant, attachment, clearUploadedAttachment, onReceiptChange, blobManager]);
  useEffect$4(() => {
    var _a;
    if (expenseId && pendingFile && isStoreDataRelevant && uploadStatus !== "uploading" && !attachment) {
      const fileToUpload = pendingFile;
      clearPendingFile();
      setUploadStatus("uploading");
      (_a = handleFileUploadInternalRef.current) == null ? void 0 : _a.call(handleFileUploadInternalRef, fileToUpload);
    }
  }, [expenseId, pendingFile, isStoreDataRelevant, uploadStatus, attachment, clearPendingFile, setUploadStatus]);
  const loadFile = useCallback$8(async (targetAttachment) => {
    const signal = blobManager.getAbortSignal();
    fileLoadAttemptedRef.current.add(targetAttachment.id);
    setIsLoadingFile(true);
    setFileLoadError(null);
    try {
      const blobUrl = await loadFileContent(targetAttachment.id, signal);
      setLoadedBlobUrl(blobUrl);
      setIsLoadingFile(false);
    } catch (error) {
      const isCanceled = error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError");
      if (isCanceled) return;
      setFileLoadError(getErrorMessage(error));
      setIsLoadingFile(false);
    }
  }, [blobManager, loadFileContent]);
  useEffect$4(() => {
    setLoadedBlobUrl(null);
    const hasValidBlobUrl = (attachment == null ? void 0 : attachment.blobUrl) && blobManager.isOwned(attachment.blobUrl);
    const needsLazyLoad = attachment && attachment.url && !hasValidBlobUrl && attachment.url.startsWith("/api/") && !fileLoadAttemptedRef.current.has(attachment.id);
    if (needsLazyLoad) {
      loadFile(attachment);
    }
  }, [attachment, loadFile, blobManager]);
  const handleRetry = useCallback$8(() => {
    if (!attachment) return;
    fileLoadAttemptedRef.current.delete(attachment.id);
    loadFile(attachment);
  }, [attachment, loadFile]);
  const handleError = useCallback$8((error) => {
    setLocalError(error);
    setUploadStatus("error", error.message);
  }, [setUploadStatus]);
  const handleFileUploadInternal = useCallback$8(async (file, targetExpenseId) => {
    const effectiveExpenseId = targetExpenseId || expenseId;
    if (!effectiveExpenseId) return;
    const signal = blobManager.getAbortSignal();
    setLocalError(void 0);
    setAttachment(void 0);
    onUploadingChange == null ? void 0 : onUploadingChange(true);
    if (!effectiveExpenseId || !(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
      const errorMsg = !(selectedCompany == null ? void 0 : selectedCompany.shortName) ? "Company not selected. Please select a company first." : "Cannot upload file without expense ID.";
      Bs.error(errorMsg, { duration: 4e3 });
      onUploadingChange == null ? void 0 : onUploadingChange(false);
      return;
    }
    try {
      const newAttachment = await uploadSingleFile(
        file,
        effectiveExpenseId,
        signal,
        (progress) => {
          devLog(`Receipt upload: ${progress.percentage}% (${progress.loaded}/${progress.total} bytes)`);
        }
      );
      setUploadedAttachment(newAttachment);
      setAttachment(newAttachment);
      onUploadingChange == null ? void 0 : onUploadingChange(false);
      onReceiptChange == null ? void 0 : onReceiptChange(newAttachment);
    } catch (error) {
      const isCanceled = error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError");
      if (isCanceled) return;
      setUploadStatus("error", getErrorMessage(error));
      handleError({
        type: "network",
        message: getErrorMessage(error),
        details: error instanceof Error ? error.toString() : String(error)
      });
      onUploadingChange == null ? void 0 : onUploadingChange(false);
    }
  }, [handleError, onReceiptChange, onUploadingChange, expenseId, selectedCompany == null ? void 0 : selectedCompany.shortName, setUploadedAttachment, setUploadStatus, blobManager, uploadSingleFile]);
  handleFileUploadInternalRef.current = handleFileUploadInternal;
  const handleFileUpload = useCallback$8(async (file) => {
    const validationError = validateFile(file);
    if (validationError) {
      handleError(validationError);
      return;
    }
    if (expenseId) {
      setUploadStatus("uploading");
      await handleFileUploadInternal(file);
      return;
    }
    if (!onSaveDraftForUpload) {
      handleError({
        type: "server",
        message: "Cannot upload file: draft save not available"
      });
      return;
    }
    const signal = blobManager.getAbortSignal();
    startUploadFlow(null);
    setPendingFile(file);
    setUploadStatus("saving-draft");
    try {
      const { draftId } = await onSaveDraftForUpload();
      if (signal.aborted) {
        clearPendingFile();
        return;
      }
      updateDraftId(draftId);
    } catch (error) {
      if (signal.aborted) return;
      clearPendingFile();
      handleError({
        type: "network",
        message: getErrorMessage(error),
        details: error instanceof Error ? error.toString() : String(error)
      });
    }
  }, [expenseId, handleFileUploadInternal, handleError, onSaveDraftForUpload, startUploadFlow, updateDraftId, setPendingFile, clearPendingFile, setUploadStatus, blobManager, validateFile]);
  const handleFileSelect = useCallback$8((event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      handleFileUpload(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [handleFileUpload]);
  const handleChooseFileClick = useCallback$8(() => {
    var _a;
    if (isUploadDisabled || isProcessing) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [isUploadDisabled, isProcessing]);
  const handleDeleteClick = useCallback$8(() => {
    if (!attachment || disabled) return;
    setDeleteError(null);
    setIsDeleteDialogOpen(true);
  }, [attachment, disabled]);
  const handleDeleteConfirm = useCallback$8(async () => {
    if (!attachment || disabled) return;
    setIsDeleting(true);
    setDeleteError(null);
    try {
      await deleteFileById(attachment.id);
      const blobUrlToClean = loadedBlobUrl || attachment.blobUrl;
      if (blobUrlToClean) {
        blobManager.revokeUrl(blobUrlToClean);
      }
      setLoadedBlobUrl(null);
      fileLoadAttemptedRef.current.delete(attachment.id);
      setAttachment(void 0);
      clearUploadedAttachment();
      onReceiptChange == null ? void 0 : onReceiptChange(void 0);
      setIsDeleteDialogOpen(false);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setDeleteError(errorMessage);
    } finally {
      setIsDeleting(false);
    }
  }, [attachment, disabled, onReceiptChange, clearUploadedAttachment, loadedBlobUrl, blobManager, deleteFileById]);
  const handleDeleteCancel = useCallback$8(() => {
    setIsDeleteDialogOpen(false);
    setDeleteError(null);
  }, []);
  const handlePreviewClick = useCallback$8(async () => {
    if (attachment) {
      await openPreview(attachment).catch(() => {
      });
    }
  }, [attachment, openPreview]);
  const handleDragOver = useCallback$8((e) => {
    e.preventDefault();
    if (!isUploadDisabled && !isProcessing) {
      setDragActive(true);
    }
  }, [isUploadDisabled, isProcessing]);
  const handleDragLeave = useCallback$8((e) => {
    e.preventDefault();
    setDragActive(false);
  }, []);
  const handleDrop = useCallback$8((e) => {
    e.preventDefault();
    setDragActive(false);
    if (isUploadDisabled || isProcessing) return;
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [isUploadDisabled, isProcessing, handleFileUpload]);
  const renderLoadingState = (message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-14" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600 font-normal", children: message })
  ] });
  const renderFileLoadErrorState = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: [
      "Failed to load receipt: ",
      fileLoadError
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx($e, { variant: "soft", size: "sm", onClick: handleRetry, children: "Retry" })
  ] });
  const renderErrorState = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: localError == null ? void 0 : localError.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx($e, { variant: "soft", size: "sm", onClick: handleChooseFileClick, disabled: isUploadDisabled, children: "Choose file" })
  ] });
  const renderUploadedState = () => {
    if (!attachment) return null;
    const previewType = getFilePreviewType(attachment.mimeType);
    const ownedBlobUrl = attachment.blobUrl && blobManager.isOwned(attachment.blobUrl) ? attachment.blobUrl : void 0;
    const fileUrl = resolveFileUrl(loadedBlobUrl || ownedBlobUrl, attachment.url);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 h-full", children: previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: fileUrl,
          alt: attachment.originalName,
          className: "w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity",
          onClick: handlePreviewClick,
          onError: () => {
            devWarn("Image failed to load:", fileUrl);
          }
        }
      ) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full scale-100 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors gap-1",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pdf-file-green-check", className: "size-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-grey-700 text-center overflow-hidden text-ellipsis px-2 max-w-full", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: "PDF preview isn't available." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full scale-100 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors gap-1",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text-line-unknown", className: "w-12 h-12 text-trax-neutral-400 mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-trax-neutral-700 text-center overflow-hidden text-ellipsis whitespace-nowrap px-2 max-w-full", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-trax-neutral-500", children: attachment.mimeType.includes("heif") || attachment.mimeType.includes("heic") ? "HEIF/HEIC preview not supported by browser" : "File preview isn't available." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full absolute bottom-0 left-0 right-0 pb-4 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          $e,
          {
            variant: "ghost",
            onClick: handlePreviewClick,
            className: "rounded-full !bg-white/70 !backdrop-blur-2xl",
            title: "Preview file",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 " })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          $e,
          {
            variant: "error-ghost",
            onClick: handleDeleteClick,
            className: "rounded-full !bg-white/70",
            title: "Delete receipt",
            "data-testid": "delete-receipt-button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-5 text-exp-red-500" })
          }
        )
      ] })
    ] });
  };
  const renderEmptyState = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `flex-1 h-full items-center justify-center p-8 text-center bg-white rounded-lg transition-colors ${dragActive ? "border-trax-blue-400 bg-trax-blue-50" : "border-trax-neutral-300 hover:border-trax-neutral-400"} ${isUploadDisabled ? "opacity-60" : ""}`,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "size-14 text-exp-teal-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: receiptUploadInstructions() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              $e,
              {
                variant: "soft",
                size: "sm",
                onClick: handleChooseFileClick,
                disabled: isUploadDisabled,
                "data-testid": "receipt-upload-choose-file-button",
                children: "Choose file"
              }
            )
          ] })
        ] })
      }
    );
  };
  const renderContent = () => {
    if (uploadStatus === "saving-draft") return renderLoadingState("Saving expense...");
    if (uploadStatus === "uploading") return renderLoadingState("Uploading file...");
    if (localError) return renderErrorState();
    if (fileLoadError) return renderFileLoadErrorState();
    if (isLoadingFile) return renderLoadingState("Loading receipt...");
    if (attachment) return renderUploadedState();
    return renderEmptyState();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${className}`, children: [
    renderContent(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: generateAcceptAttribute(),
        onChange: handleFileSelect,
        className: "hidden",
        disabled: isUploadDisabled,
        "data-testid": "receipt-upload-input"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: (open) => {
          if (!open && !isDeleting) {
            handleDeleteCancel();
          }
        },
        title: "Delete receipt",
        description: deleteError ? `Failed to delete: ${deleteError}` : "Are you sure you want to delete this receipt?",
        confirmLabel: deleteError ? "Retry" : "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: isDeleting
      }
    )
  ] });
};
function ReceiptSection({
  control,
  isReceiptUnavailableField: isReceiptUnavailableField2,
  receiptAttachment,
  shouldShowCheckbox,
  onReceiptChange,
  onUploadingChange,
  disabled = false,
  hideUploadWhenUnavailable = false,
  expenseId,
  onSaveDraftForUpload
}) {
  const isReceiptUnavailable = useWatch({
    control,
    name: isReceiptUnavailableField2,
    defaultValue: false
  });
  const shouldHideUpload = hideUploadWhenUnavailable && isReceiptUnavailable;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qn,
        {
          iconClassName: "bg-exp-yellow-001 justify-center items-center flex",
          title: "RECEIPT",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
          required: true,
          className: ""
        }
      ),
      shouldShowCheckbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: isReceiptUnavailableField2,
          control,
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            us,
            {
              label: "Unavailable",
              checked: field.value,
              onCheckedChange: (checked) => field.onChange(checked),
              disabled
            }
          )
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "min-h-0 h-full", children: isReceiptUnavailable ? hideUploadWhenUnavailable ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(AffidavitContent, { control, disabled }) : !shouldHideUpload && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptUpload,
      {
        onReceiptChange,
        onUploadingChange,
        initialReceipt: receiptAttachment || void 0,
        disabled: disabled || isReceiptUnavailable,
        className: "h-full",
        expenseId: expenseId || void 0,
        onSaveDraftForUpload
      }
    ) })
  ] });
}
const MileageTypeSelect = ({
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  placeholder = "Select mileage type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingTypes } = useExpenseTypes(companyId, {
    formTypeIds: [FormTypeId.MILEAGE]
  });
  const options = (expenseTypes == null ? void 0 : expenseTypes.map((et) => ({
    value: et.id,
    label: et.name
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingTypes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingTypes ? "Loading mileage types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $a,
    {
      label: "Mileage type",
      placeholder: displayPlaceholder,
      options,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled: disabled || isLoading || !companyId,
      error
    }
  );
};
const { createContext, useContext: useContext$1 } = await importShared("react");
const FormSectionContext = createContext(null);
function FormSectionProvider({
  value,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionContext.Provider, { value, children });
}
const { useEffect: useEffect$3, useRef: useRef$4 } = await importShared("react");
function ConditionalSection({
  control,
  behavior,
  children,
  onDisabledChange
}) {
  const shouldWatch = behavior.isVisible || behavior.isEnabled;
  const hasDependencies = behavior.dependsOn && behavior.dependsOn.length > 0;
  const previousDisabledRef = useRef$4(void 0);
  const watchedFieldsArray = useWatch({
    control,
    name: behavior.dependsOn ?? [],
    disabled: !shouldWatch || !hasDependencies
  });
  const allFormValues = useWatch({
    control,
    disabled: shouldWatch && hasDependencies
  });
  const formValues = hasDependencies && shouldWatch ? behavior.dependsOn.reduce((acc, fieldName, index) => {
    acc[fieldName] = Array.isArray(watchedFieldsArray) ? watchedFieldsArray[index] : watchedFieldsArray;
    return acc;
  }, {}) : allFormValues;
  const isDisabled = behavior.isEnabled ? !behavior.isEnabled(formValues) : false;
  useEffect$3(() => {
    if (previousDisabledRef.current !== isDisabled) {
      previousDisabledRef.current = isDisabled;
      onDisabledChange == null ? void 0 : onDisabledChange(isDisabled);
    }
  }, [isDisabled, onDisabledChange]);
  if (behavior.isVisible && !behavior.isVisible(formValues)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
const { Fragment, memo: memo$3, useCallback: useCallback$7, useContext, useMemo: useMemo$5, useState: useState$4 } = await importShared("react");
const FormSectionComponent = ({
  section,
  handlersMap
}) => {
  const renderProps = useContext(FormSectionContext);
  const [conditionalDisabled, setConditionalDisabled] = useState$4(false);
  if (!renderProps) {
    throw new Error("FormSection must be used within FormSectionProvider");
  }
  const handleDisabledChange = useCallback$7((disabled) => {
    setConditionalDisabled((prev) => {
      if (prev !== disabled) {
        return disabled;
      }
      return prev;
    });
  }, []);
  const behavior = useMemo$5(
    () => ({
      isVisible: section.isVisible,
      isEnabled: section.isEnabled,
      dependsOn: section.dependsOn
    }),
    [section.isVisible, section.isEnabled, section.dependsOn]
  );
  const propsWithDisabled = useMemo$5(
    () => ({
      ...renderProps,
      disabled: conditionalDisabled || renderProps.disabled
    }),
    [renderProps, conditionalDisabled]
  );
  const finalProps = useMemo$5(() => {
    const sectionHandlers = handlersMap == null ? void 0 : handlersMap[section.type];
    return sectionHandlers ? { ...propsWithDisabled, ...sectionHandlers } : propsWithDisabled;
  }, [propsWithDisabled, handlersMap, section.type]);
  const headerActionsNode = section.headerActions ? section.headerActions(finalProps) : null;
  const isCostAllocationSection = section.id === "cost-allocation";
  const deferToApprover = useWatch({
    control: renderProps.control,
    name: ExpenseFormField.DeferToApprover,
    disabled: !isCostAllocationSection
  });
  const hideCardGap = isCostAllocationSection && deferToApprover ? "gap-0" : void 0;
  if (section.hideHeader) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConditionalSection,
      {
        control: renderProps.control,
        behavior,
        onDisabledChange: handleDisabledChange,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-section-id": section.id, children: /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { children: section.render(finalProps) }) }) }, section.id)
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConditionalSection,
    {
      control: renderProps.control,
      behavior,
      onDisabledChange: handleDisabledChange,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-section-id": section.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: hideCardGap, children: [
        "    ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: hideCardGap, children: headerActionsNode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Qn,
            {
              title: section.title,
              icon: section.icon,
              iconClassName: section.iconClassName,
              required: section.required
            }
          ),
          headerActionsNode
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Qn,
          {
            title: section.title,
            icon: section.icon,
            iconClassName: section.iconClassName,
            required: section.required
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { children: section.render(finalProps) })
      ] }) }, section.id)
    }
  );
};
const FormSection = memo$3(FormSectionComponent);
function FormRenderer({
  sections,
  handlersMap
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Fragment, { children: sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormSection,
    {
      section,
      handlersMap
    },
    section.id
  )) });
}
const { useMemo: useMemo$4 } = await importShared("react");
const BaseExpenseFormRenderer = ({
  control,
  setValue,
  trigger,
  errors,
  disabled,
  sections,
  handlersMap,
  layout = "single-column",
  leftColumn,
  errorDisplay
}) => {
  const renderProps = useMemo$4(
    () => ({
      control,
      setValue,
      trigger,
      errors,
      disabled
    }),
    [control, setValue, trigger, errors, disabled]
  );
  const content = /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionProvider, { value: renderProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { sections, handlersMap }) });
  if (layout === "two-column") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 h-full overflow-y-auto", children: [
      leftColumn && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 flex-1 sticky top-0 bottom-0 h-full", children: leftColumn }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-2 flex-col gap-3 exp-custom-scrollbar", children: [
        errorDisplay,
        content
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    errorDisplay,
    content
  ] });
};
const costAllocationTypes = () => [
  {
    type: ECostAllocation.Project,
    label: "Project",
    tooltip: "Allocate expense to a sales, parts, or service project"
  },
  {
    type: ECostAllocation.Admin,
    label: "Admin",
    tooltip: "Allocate expense to an internal project for admin and operational costs"
  },
  {
    type: ECostAllocation.Team,
    label: "CCB Team",
    tooltip: "Allocate expense to a commission sales team"
  },
  {
    type: ECostAllocation.Rep,
    label: "CCB Rep",
    tooltip: "Allocate expense to a commission sales rep"
  }
];
function mapPurchaseOrderToProject(po) {
  return {
    id: String(po.poId),
    poNumber: po.poBaseId,
    supplier: po.supplierName,
    description: po.poDescription,
    projectId: po.projectBaseId,
    projectDescription: po.projectDescription,
    projectDbId: po.projectId,
    poDbId: po.poId,
    supplierId: po.supplierId,
    supplierCurrency: po.supplierCurrency
  };
}
function mapPurchaseOrderToAdmin(po) {
  return {
    id: String(po.poId),
    poNumber: po.poBaseId,
    supplier: po.supplierName,
    description: po.poDescription,
    projectId: po.projectBaseId,
    projectDescription: po.projectDescription,
    projectDbId: po.projectId,
    poDbId: po.poId,
    supplierId: po.supplierId,
    supplierCurrency: po.supplierCurrency
  };
}
function mapSalesTeam(team) {
  return {
    id: String(team.id),
    number: team.baseId,
    description: team.description
  };
}
function mapUser(user) {
  return {
    id: user.userGuid,
    name: user.fullName
  };
}
const searchProjects = async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_PROJECT(query)
    );
    const entity = mapPurchaseOrderToProject(response.data);
    return [{
      value: entity.id,
      label: entity.poNumber,
      data: entity
    }];
  } catch {
    devError("Cost allocation: project search failed for PO#", query);
    return [];
  }
};
const searchAdmins = async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_ADMIN(query)
    );
    const entity = mapPurchaseOrderToAdmin(response.data);
    return [{
      value: entity.id,
      label: entity.poNumber,
      data: entity
    }];
  } catch {
    devError("Cost allocation: admin search failed for PO#", query);
    return [];
  }
};
const searchTeams = async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_SALES_TEAMS,
      { params: { query } }
    );
    return response.data.map((team) => {
      const entity = mapSalesTeam(team);
      return {
        value: entity.id,
        label: entity.number,
        data: entity
      };
    });
  } catch {
    devError("Cost allocation: teams search failed for query", query);
    return [];
  }
};
const searchReps = async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_SALES_REP,
      { params: { query } }
    );
    return response.data.map((user) => {
      const entity = mapUser(user);
      return {
        value: entity.id,
        label: entity.name,
        data: entity
      };
    });
  } catch {
    devError("Cost allocation: reps search failed for query", query);
    return [];
  }
};
const getSearchFunctionByType = (type) => {
  const searchMap = {
    [ECostAllocation.Project]: searchProjects,
    [ECostAllocation.Admin]: searchAdmins,
    [ECostAllocation.Team]: searchTeams,
    [ECostAllocation.Rep]: searchReps
  };
  return searchMap[type];
};
const { useMemo: useMemo$3 } = await importShared("react");
const CostAllocationFieldComponent = ({
  control,
  setValue,
  trigger,
  getValues,
  index,
  type,
  value,
  onValueChange,
  totalAmount,
  currencyCode,
  disabled = false,
  onRemove,
  isEqualSplitField
}) => {
  var _a, _b, _c, _d;
  const {
    syncPercentageFromAmount,
    syncAmountFromPercentage,
    setAmountEditing,
    setPercentageEditing
  } = useAllocationSync({
    index,
    totalAmount,
    setValue,
    trigger,
    getValues,
    isEqualSplitField
  });
  const { errors } = useFormState({ control });
  const allocationConfig = useMemo$3(
    () => costAllocationTypes().find((config2) => config2.type === type),
    [type]
  );
  const currentAllocationErrors = (_a = errors.costAllocations) == null ? void 0 : _a[index];
  const nameError = (_b = currentAllocationErrors == null ? void 0 : currentAllocationErrors.name) == null ? void 0 : _b.message;
  const amountError = (_c = currentAllocationErrors == null ? void 0 : currentAllocationErrors.amount) == null ? void 0 : _c.message;
  const percentageError = (_d = currentAllocationErrors == null ? void 0 : currentAllocationErrors.percentage) == null ? void 0 : _d.message;
  const searchFunction = useMemo$3(
    () => getSearchFunctionByType(type),
    [type]
  );
  const placeholder = useMemo$3(
    () => getPlaceholderByType(type),
    [type]
  );
  const displayLabel = useMemo$3(
    () => getDisplayLabel(type, value),
    [type, value]
  );
  const projectDetails = useMemo$3(
    () => type === ECostAllocation.Project || type === ECostAllocation.Admin ? getProjectDetails(value) : null,
    [type, value]
  );
  const inputLabel = useMemo$3(
    () => projectDetails ? COST_ALLOCATION_LABELS.PURCHASE_ORDER : "",
    [projectDetails]
  );
  if (!allocationConfig) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 bg-exp-neutral-10 rounded-lg p-3 shadow-exp-menu", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        zt,
        {
          pressed: true,
          disabled,
          children: allocationConfig.label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => !disabled && onRemove(),
          disabled,
          className: "text-exp-red-500 hover:text-exp-red-600 h-8 px-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Jn,
        {
          placeholder,
          label: inputLabel,
          value,
          onValueChange,
          onSearch: searchFunction,
          searchDelay: SEARCH_DELAY_MS,
          minSearchLength: MIN_SEARCH_LENGTH,
          searchingText: "Searching...",
          noResultsText: "No results found",
          disabled,
          clearOnBlur: false,
          displayLabel,
          error: nameError,
          renderItem: (item) => renderAllocationItem(type, item),
          tooltipProps: {
            delayDuration: TOOLTIP_DELAY_QUICK,
            variant: "light",
            size: "sm",
            showArrow: false,
            renderContent: (displayValue) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-full font-normal text-xs text-exp-grey-600", children: displayValue })
          }
        }
      ),
      value && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 ${inputLabel ? "mt-5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: `costAllocations.${index}.amount`,
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                className: "min-w-32",
                currencyCode,
                locale: "en-CA",
                ...field,
                value: field.value && field.value !== 0 ? field.value : "",
                onFocus: () => setAmountEditing(true),
                onChange: (e) => {
                  const value2 = e.target.value;
                  const newAmount = value2 === "" ? 0 : parseFloat(value2);
                  field.onChange(newAmount);
                  if (!isNaN(newAmount)) {
                    syncPercentageFromAmount(newAmount);
                  }
                },
                onBlur: () => {
                  setAmountEditing(false);
                  field.onBlur();
                },
                disabled,
                placeholder: "0.00",
                error: amountError || void 0
              }
            )
          },
          `${value.value}-amount-${index}`
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 ${inputLabel ? "mt-5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: `costAllocations.${index}.percentage`,
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Va,
                {
                  type: "number",
                  step: "0.01",
                  min: "0",
                  ...field,
                  value: field.value && field.value !== 0 ? field.value : "",
                  onFocus: () => setPercentageEditing(true),
                  onChange: (e) => {
                    const value2 = e.target.value;
                    const newPercentage = value2 === "" ? 0 : parseFloat(value2);
                    field.onChange(newPercentage);
                    if (!isNaN(newPercentage)) {
                      syncAmountFromPercentage(newPercentage);
                    }
                  },
                  onBlur: () => {
                    setPercentageEditing(false);
                    field.onBlur();
                  },
                  disabled,
                  className: "text-right pr-7! min-w-28",
                  placeholder: "0.00",
                  error: percentageError || void 0
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-2 text-xs text-trax-grey-900 pointer-events-none", children: "%" })
            ] })
          },
          `${value.value}-percentage-${index}`
        ) })
      ] }) })
    ] }),
    projectDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-xs text-exp-grey-600 pl-1 mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-trax-grey-900 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-exp-grey-600", children: "Allocated to:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-trax-grey-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle-fill", className: "text-exp-green-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: projectDetails.projectId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: projectDetails.projectDescription })
        ] })
      ] })
    ] })
  ] });
};
const CostAllocationField = CostAllocationFieldComponent;
CostAllocationField.displayName = "CostAllocationField";
const { memo: memo$2 } = await importShared("react");
const AllocationTypeChips = memo$2(({
  onSelect,
  disabled = false
}) => {
  const allocationTypes = costAllocationTypes();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: allocationTypes.map((allocationType) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      zt,
      {
        disabled,
        onPressedChange: () => onSelect(allocationType.type),
        children: allocationType.label
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Vn,
      {
        variant: "light",
        size: "sm",
        side: "bottom",
        showArrow: false,
        className: "max-w-full font-normal text-xs text-exp-grey-600",
        children: allocationType.tooltip
      }
    )
  ] }, allocationType.type)) });
});
AllocationTypeChips.displayName = "AllocationTypeChips";
const { memo: memo$1, useCallback: useCallback$6, useState: useState$3 } = await importShared("react");
const AddAllocationExpandable = memo$1(({
  onTypeSelect,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState$3(false);
  const handleTypeSelect = useCallback$6(
    (type) => {
      onTypeSelect(type);
      setIsOpen(false);
    },
    [onTypeSelect]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ls, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hs, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { variant: "outlined", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}), disabled, children: COST_ALLOCATION_LABELS.ADD_ALLOCATION }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Os, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AllocationTypeChips, { onSelect: handleTypeSelect, disabled }) })
  ] });
});
AddAllocationExpandable.displayName = "AddAllocationExpandable";
const React$1 = await importShared("react");
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React$1.createContext && /* @__PURE__ */ React$1.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
const React = await importShared("react");
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function GrCircleInformation(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeWidth": "2", "d": "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8" }, "child": [] }] })(props);
}
function FaPlus(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }, "child": [] }] })(props);
}
const MAX_SUPPORTING_FILES_FOR_STANDARD_EXPENSE = 3;
const MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD = 1;
function MdError(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }, "child": [] }] })(props);
}
function RxCross2(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", "fill": "currentColor" }, "child": [] }] })(props);
}
const { useEffect: useEffect$2, useRef: useRef$3, useState: useState$2 } = await importShared("react");
function FileName({ name, showTooltip = true }) {
  const { ref, isTruncated } = Zn({
    deps: [name]
  });
  const [isOpen, setIsOpen] = useState$2(false);
  const timeoutRef = useRef$3(null);
  const canShowTooltip = showTooltip && isTruncated;
  const handleMouseEnter = () => {
    if (!canShowTooltip) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, TOOLTIP_DELAY_TRUNCATED_TEXT);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(false);
  };
  useEffect$2(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { open: canShowTooltip && isOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        ref,
        className: "block truncate text-sm text-trax-blue-600 hover:cursor-pointer min-w-0",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: name
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Vn,
      {
        variant: "light",
        size: "sm",
        side: "bottom",
        showArrow: false,
        className: "max-w-full font-normal text-xs text-exp-grey-600",
        children: name
      }
    )
  ] });
}
function SupportingFileCard({
  file,
  error,
  onRemove,
  onPreview,
  index,
  isUploading,
  isLoadingPreview,
  disabled
}) {
  var _a;
  const previewType = getFilePreviewType(file.mimeType);
  if (isUploading || isLoadingPreview) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileName, { name: file.originalName, showTooltip: false })
    ] }) });
  }
  const hasError = error || file.status === "error";
  const errorMessage = (error == null ? void 0 : error.message) || file.errorMessage || "Invalid file";
  if (hasError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "bg-exp-red-100 px-2 py-2 w-full flex justify-between flex-row items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1 min-w-0 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MdError, { className: "text-exp-red-600 scale-110 shrink-0", title: "File error icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileName, { name: file.originalName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 mr-2 text-sm h-full text-trax-red-600", children: errorMessage.includes("Unsupported file type") ? "Invalid format" : errorMessage.includes("exceeds limit") ? `>${((_a = errorMessage.match(/\d+MB/)) == null ? void 0 : _a[0]) || "Size limit"}` : errorMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "flex hover:cursor-pointer",
            onClick: () => onRemove(index),
            disabled,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-red-600", "data-testid": "delete-supporting-file-button" })
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "bg-white hover:bg-trax-neutral-20 px-2 py-2 w-full flex justify-between flex-row items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center flex-1 min-w-0 gap-2 hover:cursor-pointer hover:underline",
        onClick: () => onPreview(file),
        children: [
          previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-img", "data-testid": "icon-file-img" }) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-pdf", "data-testid": "icon-file-pdf" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "text-line-unknown", "data-testid": "icon-file-unknown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileName, { name: file.originalName })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "flex hover:cursor-pointer shrink-0 ml-2",
        onClick: () => onRemove(index),
        disabled,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-grey-200 hover:text-trax-neutral-900", "data-testid": "delete-supporting-file-button" })
      }
    )
  ] });
}
const { useCallback: useCallback$5, useEffect: useEffect$1, useRef: useRef$2, useState: useState$1 } = await importShared("react");
function SupportingFiles({
  onFilesChange,
  initialFiles = [],
  disabled = false,
  className = "",
  maxFiles = MAX_SUPPORTING_FILES_FOR_STANDARD_EXPENSE,
  title,
  tooltipContent,
  hideAddButtonWhenFull = false,
  expenseId,
  onSaveDraftForUpload
}) {
  const fileInputRef = useRef$2(null);
  const attachmentsForCleanupRef = useRef$2([]);
  const {
    selectedCompany,
    blobManager,
    isStoreDataRelevant,
    validateFile,
    uploadSingleFile,
    deleteFileById,
    loadFileContent,
    openPreview
  } = useFileOperations({
    documentType: "supporting",
    expenseId: expenseId ?? void 0,
    shouldKeepUrl: (url) => attachmentsForCleanupRef.current.some((a2) => a2.blobUrl === url) || initialFiles.some((a2) => a2.blobUrl === url)
  });
  const { supportingFiles: sfStore, startUploadFlow, updateDraftId } = usePendingUploadStore();
  const {
    pendingFiles: pendingSupportingFiles,
    uploadedFiles: uploadedSupportingFiles,
    status: supportingFilesUploadStatus,
    setPendingFiles: setPendingSupportingFiles,
    clearPendingFiles: clearPendingSupportingFiles,
    addUploadedFiles: addUploadedSupportingFiles,
    clearUploadedFiles: clearUploadedSupportingFiles,
    setStatus: setSupportingFilesUploadStatus
  } = sfStore;
  const effectiveInitialFiles = isStoreDataRelevant && uploadedSupportingFiles.length > 0 ? [...initialFiles, ...uploadedSupportingFiles.filter(
    (sf) => !initialFiles.some((f) => f.id === sf.id)
  )] : initialFiles;
  const [state, setState] = useState$1({
    attachments: effectiveInitialFiles,
    isUploading: false,
    errors: /* @__PURE__ */ new Map()
  });
  const [deleteDialogState, setDeleteDialogState] = useState$1({
    isOpen: false,
    fileIndex: null,
    isDeleting: false
  });
  const previousAttachmentsRef = useRef$2(effectiveInitialFiles);
  const [loadedBlobUrls, setLoadedBlobUrls] = useState$1(/* @__PURE__ */ new Map());
  const [loadingPreviewFileIds, setLoadingPreviewFileIds] = useState$1(/* @__PURE__ */ new Set());
  const isSavingDraft = supportingFilesUploadStatus === "saving-draft";
  const isUploading = supportingFilesUploadStatus === "uploading";
  const attachmentsRef = useRef$2(effectiveInitialFiles);
  attachmentsRef.current = state.attachments;
  const handleFilesUploadRef = useRef$2(null);
  const previewAbortControllersRef = useRef$2(/* @__PURE__ */ new Map());
  const deletedFileIdsRef = useRef$2(/* @__PURE__ */ new Set());
  attachmentsForCleanupRef.current = state.attachments;
  useEffect$1(() => {
    uploadedSupportingFiles.forEach((file) => {
      if (file.blobUrl) {
        blobManager.trackUrl(file.blobUrl);
      }
    });
    if (isStoreDataRelevant && uploadedSupportingFiles.length > 0 && initialFiles.length === 0) {
      setState((prev) => {
        const newFiles = uploadedSupportingFiles.filter(
          (sf) => !prev.attachments.some((f) => f.id === sf.id)
        );
        if (newFiles.length === 0) return prev;
        return {
          ...prev,
          attachments: [...prev.attachments, ...newFiles]
        };
      });
      onFilesChange == null ? void 0 : onFilesChange(uploadedSupportingFiles);
    }
    if (isStoreDataRelevant && uploadedSupportingFiles.length > 0) {
      const allSynced = uploadedSupportingFiles.every(
        (sf) => initialFiles.some((f) => f.id === sf.id)
      );
      if (allSynced) {
        clearUploadedSupportingFiles();
      }
    }
  }, [isStoreDataRelevant, uploadedSupportingFiles, initialFiles, blobManager, onFilesChange, clearUploadedSupportingFiles]);
  useEffect$1(() => {
    if (previousAttachmentsRef.current !== state.attachments) {
      previousAttachmentsRef.current = state.attachments;
      onFilesChange == null ? void 0 : onFilesChange(state.attachments);
    }
  }, [state.attachments, onFilesChange]);
  useEffect$1(() => {
    initialFiles.forEach((file) => {
      if (file.blobUrl) {
        blobManager.trackUrl(file.blobUrl);
      }
    });
  }, [initialFiles, blobManager]);
  useEffect$1(() => {
    const controllers = previewAbortControllersRef.current;
    return () => {
      controllers.forEach((controller) => controller.abort());
      controllers.clear();
    };
  }, []);
  const handleAddSupportingDocumentClick = useCallback$5((e) => {
    var _a;
    e.preventDefault();
    if (disabled || state.isUploading || isSavingDraft) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [disabled, state.isUploading, isSavingDraft]);
  const handleFilesUpload = useCallback$5(async (filesToProcess, targetExpenseId) => {
    if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
      devError("[SF] No company selected for file upload");
      return;
    }
    setState((prev) => ({
      ...prev,
      isUploading: true,
      uploadingFileIndex: prev.attachments.length
    }));
    const processedFiles = [];
    const fileErrors = /* @__PURE__ */ new Map();
    const batchController = blobManager.createBatchController();
    const signal = batchController.signal;
    for (let i = 0; i < filesToProcess.length; i++) {
      const { file, error } = filesToProcess[i];
      const currentIndex = state.attachments.length + i;
      setState((prev) => ({
        ...prev,
        uploadingFileIndex: currentIndex
      }));
      if (error) {
        const errorAttachment = createErrorAttachment(file, error.message, i, "validation");
        processedFiles.push(errorAttachment);
        fileErrors.set(currentIndex, error);
      } else {
        try {
          const attachment = await uploadSingleFile(file, targetExpenseId, signal);
          processedFiles.push(attachment);
        } catch (error2) {
          const isCanceled = error2 instanceof Error && (error2.name === "AbortError" || error2.name === "CanceledError");
          if (isCanceled) {
            if (signal.aborted) {
              devWarn("[SF] Batch aborted, stopping upload");
              break;
            }
            devWarn(`[SF] File ${file.name} upload canceled (likely timeout)`);
            const cancelMessage = "Upload failed. Please try again.";
            const errorAttachment2 = createErrorAttachment(file, cancelMessage, i, "upload");
            processedFiles.push(errorAttachment2);
            fileErrors.set(currentIndex, {
              type: "network",
              message: cancelMessage,
              details: "Request canceled (timeout or connection issue)"
            });
            continue;
          }
          devError(`[SF] File ${file.name} upload failed:`, error2);
          const errorMessage = getErrorMessage(error2);
          const errorAttachment = createErrorAttachment(file, errorMessage, i, "upload");
          processedFiles.push(errorAttachment);
          fileErrors.set(currentIndex, {
            type: "network",
            message: errorMessage,
            details: error2 instanceof Error ? error2.toString() : String(error2)
          });
        }
      }
    }
    if (signal.aborted) {
      return;
    }
    const successfulUploads = processedFiles.filter((f) => f.status !== "error");
    if (successfulUploads.length > 0) {
      addUploadedSupportingFiles(successfulUploads);
    }
    setState((prev) => {
      const newAttachments = [...prev.attachments, ...processedFiles];
      const newErrors = new Map([...prev.errors, ...fileErrors]);
      return {
        ...prev,
        attachments: newAttachments,
        isUploading: false,
        uploadingFileIndex: void 0,
        errors: newErrors
      };
    });
    batchController.release();
    clearPendingSupportingFiles();
    setSupportingFilesUploadStatus("complete");
  }, [selectedCompany == null ? void 0 : selectedCompany.shortName, state.attachments.length, blobManager, uploadSingleFile, addUploadedSupportingFiles, clearPendingSupportingFiles, setSupportingFilesUploadStatus]);
  handleFilesUploadRef.current = handleFilesUpload;
  useEffect$1(() => {
    var _a;
    if (expenseId && pendingSupportingFiles.length > 0 && isStoreDataRelevant && !isUploading) {
      const filesToUpload = pendingSupportingFiles.map((file) => ({ file, error: null }));
      setSupportingFilesUploadStatus("uploading");
      (_a = handleFilesUploadRef.current) == null ? void 0 : _a.call(handleFilesUploadRef, filesToUpload, expenseId);
    }
  }, [expenseId, pendingSupportingFiles, isStoreDataRelevant, isUploading, setSupportingFilesUploadStatus]);
  const handleFileChange = useCallback$5(async (e) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    const totalFiles = state.attachments.length + newFiles.length;
    if (totalFiles > maxFiles) {
      const filesToAdd = maxFiles - state.attachments.length;
      if (filesToAdd <= 0) {
        Bs.error(`Maximum ${maxFiles} supporting file${maxFiles > 1 ? "s" : ""} allowed`, {
          duration: 3e3
        });
        return;
      }
      Bs.error(`Only ${filesToAdd} more file(s) can be added`, {
        duration: 3e3
      });
      newFiles.splice(filesToAdd);
    }
    const filesToProcess = [];
    const existingFilenames = new Set(state.attachments.map((a2) => a2.originalName));
    const filesWithUniqueNames = renameConflictingFiles(
      newFiles,
      existingFilenames
    );
    filesWithUniqueNames.forEach((file) => {
      const error = validateFile(file);
      filesToProcess.push({ file, error });
    });
    if (filesToProcess.length === 0) return;
    if (expenseId) {
      const validFiles2 = filesToProcess.filter((f) => !f.error).map((f) => f.file);
      if (validFiles2.length > 0) {
        setSupportingFilesUploadStatus("uploading");
        setPendingSupportingFiles(validFiles2);
      }
      await handleFilesUpload(filesToProcess, expenseId);
      return;
    }
    if (!onSaveDraftForUpload) {
      Bs.error("Cannot upload files: please save the expense first", {
        duration: 3e3
      });
      return;
    }
    const validFiles = filesToProcess.filter((f) => !f.error).map((f) => f.file);
    const errorFiles = filesToProcess.filter((f) => f.error);
    if (errorFiles.length > 0) {
      const errorAttachments = errorFiles.map(
        (f, i) => createErrorAttachment(f.file, f.error.message, i, "validation")
      );
      const errorMap = /* @__PURE__ */ new Map();
      errorFiles.forEach((f, i) => {
        errorMap.set(state.attachments.length + i, f.error);
      });
      setState((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...errorAttachments],
        errors: new Map([...prev.errors, ...errorMap])
      }));
    }
    if (validFiles.length === 0) return;
    const filesToStore = validFiles.map((f) => {
      const fileData = filesToProcess.find((fp) => fp.file === f);
      return (fileData == null ? void 0 : fileData.file) || f;
    });
    startUploadFlow(null);
    setPendingSupportingFiles(filesToStore);
    setSupportingFilesUploadStatus("saving-draft");
    try {
      const { draftId } = await onSaveDraftForUpload();
      updateDraftId(draftId);
    } catch (error) {
      clearPendingSupportingFiles();
      setSupportingFilesUploadStatus("idle");
      devError("Failed to save draft for file upload:", error);
      Bs.error("Failed to save expense. Please try again.", {
        duration: 3e3
      });
    }
  }, [state.attachments, maxFiles, expenseId, onSaveDraftForUpload, handleFilesUpload, startUploadFlow, setPendingSupportingFiles, setSupportingFilesUploadStatus, updateDraftId, clearPendingSupportingFiles, validateFile]);
  const handleRemoveFile = useCallback$5((index) => {
    if (disabled || state.isUploading) return;
    setDeleteDialogState({
      isOpen: true,
      fileIndex: index,
      isDeleting: false
    });
  }, [disabled, state.isUploading]);
  const handleDeleteConfirm = useCallback$5(async () => {
    const fileIndex = deleteDialogState.fileIndex;
    if (fileIndex === null || disabled) return;
    setDeleteDialogState((prev) => ({ ...prev, isDeleting: true }));
    const file = state.attachments[fileIndex];
    if (file) {
      deletedFileIdsRef.current.add(file.id);
      const previewController = previewAbortControllersRef.current.get(file.id);
      if (previewController) {
        previewController.abort();
        previewAbortControllersRef.current.delete(file.id);
      }
      try {
        if (file.status !== "error" && !file.id.startsWith("error-") && !file.id.startsWith("upload-error-")) {
          await deleteFileById(file.id);
        }
        const blobUrlToClean = loadedBlobUrls.get(file.id) || file.blobUrl;
        if (blobUrlToClean) {
          blobManager.revokeUrl(blobUrlToClean);
        }
        setLoadedBlobUrls((prev) => {
          const newMap = new Map(prev);
          newMap.delete(file.id);
          return newMap;
        });
        setState((prev) => {
          const newAttachments = prev.attachments.filter((_, i) => i !== fileIndex);
          const newErrors = new Map(prev.errors);
          newErrors.delete(fileIndex);
          const reindexedErrors = /* @__PURE__ */ new Map();
          newErrors.forEach((error, oldIndex) => {
            if (oldIndex > fileIndex) {
              reindexedErrors.set(oldIndex - 1, error);
            } else if (oldIndex < fileIndex) {
              reindexedErrors.set(oldIndex, error);
            }
          });
          return {
            ...prev,
            attachments: newAttachments,
            errors: reindexedErrors
          };
        });
      } catch {
        Bs.error("Failed to delete file", {
          duration: 3e3
        });
      }
    }
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, [deleteDialogState.fileIndex, state.attachments, disabled, loadedBlobUrls, blobManager, deleteFileById]);
  const handleDeleteCancel = useCallback$5(() => {
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, []);
  const handlePreviewClick = useCallback$5(async (file) => {
    var _a;
    if (file.status === "error") {
      return;
    }
    if (loadingPreviewFileIds.has(file.id)) {
      return;
    }
    let blobUrl = loadedBlobUrls.get(file.id) || file.blobUrl;
    if (!blobUrl && ((_a = file.url) == null ? void 0 : _a.startsWith("/api/"))) {
      const controller = new AbortController();
      previewAbortControllersRef.current.set(file.id, controller);
      setLoadingPreviewFileIds((prev) => new Set(prev).add(file.id));
      try {
        blobUrl = await loadFileContent(file.id, controller.signal);
        if (deletedFileIdsRef.current.has(file.id)) {
          URL.revokeObjectURL(blobUrl);
          return;
        }
        setLoadedBlobUrls((prev) => new Map(prev).set(file.id, blobUrl));
      } catch (error) {
        const isCanceled = error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError");
        if (isCanceled) return;
        Bs.error("Failed to download file. Please try again.", { duration: 3e3 });
        return;
      } finally {
        previewAbortControllersRef.current.delete(file.id);
        setLoadingPreviewFileIds((prev) => {
          const next = new Set(prev);
          next.delete(file.id);
          return next;
        });
      }
    }
    try {
      const fileWithBlobUrl = blobUrl ? { ...file, blobUrl } : file;
      await openPreview(fileWithBlobUrl);
    } catch {
      Bs.error("Failed to open file preview", {
        duration: 3e3
      });
    }
  }, [loadedBlobUrls, loadingPreviewFileIds, loadFileContent, openPreview]);
  const displayTitle = title ?? `SUPPORTING FILE${maxFiles > 1 ? "S" : ""} (MAX ${maxFiles})`;
  const displayTooltip = tooltipContent ?? `You can attach up to ${maxFiles} document${maxFiles > 1 ? "s" : ""}, such as pre-approvals, order confirmations, or bank statements to support this expense. ${getSupportedFormatsText()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(gs, { className: `flex items-center flex-col w-full h-fit overflow-clip ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row w-full items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qn,
        {
          iconClassName: "bg-trax-neutral-30 flex justify-center items-center",
          title: displayTitle,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
          className: "text-nowrap w-auto"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center w-full ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { delayDuration: TOOLTIP_DELAY_QUICK, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GrCircleInformation, { className: "text-gray-500 hover:cursor-pointer select-none" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { variant: "default", side: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-trax-blue-700 text-white border-none text-sm p-2 w-64", children: displayTooltip }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center h-full", children: state.attachments.length < maxFiles ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleAddSupportingDocumentClick,
          disabled: disabled || state.isUploading,
          "aria-label": "Add supporting file",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FaPlus,
            {
              className: `${disabled || state.isUploading ? "opacity-20 hover:cursor-not-allowed" : "fill-trax-blue-600 hover:cursor-pointer"}`
            }
          )
        }
      ) : !hideAddButtonWhenFull ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { delayDuration: TOOLTIP_DELAY_QUICK, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddSupportingDocumentClick, disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPlus, { className: "opacity-20 hover:cursor-not-allowed" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Vn,
          {
            variant: "light",
            size: "sm",
            className: "max-w-full",
            side: "bottom",
            align: "start",
            showArrow: false,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
              "Cannot add more than ",
              maxFiles,
              " file",
              maxFiles > 1 ? "s" : ""
            ] })
          }
        )
      ] }) : null }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "file",
          ref: fileInputRef,
          accept: generateAcceptAttribute(),
          multiple: true,
          onChange: handleFileChange,
          style: { display: "none" },
          disabled,
          "data-testid": "supporting-file-input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: `bg-white w-full p-0 ${state.attachments.length === 0 && !state.isUploading && pendingSupportingFiles.length === 0 ? "h-0" : "h-auto"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col my-1 mx-2 gap-1", children: [
      state.attachments.map((file, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SupportingFileCard,
        {
          file,
          error: state.errors.get(index),
          onRemove: handleRemoveFile,
          onPreview: handlePreviewClick,
          index,
          isUploading: state.isUploading && state.uploadingFileIndex === index,
          isLoadingPreview: loadingPreviewFileIds.has(file.id),
          disabled
        },
        file.id
      )),
      (isSavingDraft || isUploading) && pendingSupportingFiles.map((file, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-trax-neutral-600 flex flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-sm text-trax-blue-600 hover:cursor-pointer min-w-0 shrink", children: file.name }) })
      ] }) }, `pending-${index}`))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deleteDialogState.isOpen,
        onOpenChange: (open) => {
          if (!open) handleDeleteCancel();
        },
        title: "Delete file",
        description: "Are you sure you want to delete this file?",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: deleteDialogState.isDeleting
      }
    )
  ] });
}
const { useCallback: useCallback$4 } = await importShared("react");
const ExpenseFormLeftColumn = ({
  control,
  setValue,
  getValues,
  isSubmitting,
  isDrafting,
  draftId,
  onSaveDraft,
  onSaveDraftForUpload
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
  const handleSaveDraftForUpload = useCallback$4(async () => {
    if (!onSaveDraftForUpload) {
      throw new Error("onSaveDraftForUpload is not defined");
    }
    const formData = getValues();
    return onSaveDraftForUpload(formData);
  }, [getValues, onSaveDraftForUpload]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "w-full h-full flex flex-col pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptSection,
      {
        control,
        isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
        receiptAttachment,
        shouldShowCheckbox: shouldShowReceiptCheckbox,
        onReceiptChange: handleReceiptChange,
        onUploadingChange: setIsReceiptUploading,
        disabled: isSubmitting,
        expenseId: draftId,
        onSaveDraftForUpload: onSaveDraftForUpload ? handleSaveDraftForUpload : void 0
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SupportingFiles,
      {
        onFilesChange: handleSupportingFilesChange,
        initialFiles: supportingFiles || [],
        disabled: isSubmitting,
        expenseId: draftId,
        onSaveDraftForUpload: onSaveDraftForUpload ? handleSaveDraftForUpload : void 0
      }
    ) })
  ] });
};
const { memo, useEffect, useRef: useRef$1 } = await importShared("react");
function CostAllocationHeaderActions({
  control,
  setValue,
  trigger,
  disabled,
  helpers,
  fieldConfig
}) {
  const totalAmount = useWatch({
    control,
    name: fieldConfig.totalAmountField
  });
  const costAllocations = useWatch({
    control,
    name: fieldConfig.costAllocationsField
  });
  const isEqualSplit = useWatch({
    control,
    name: fieldConfig.isEqualSplitField
  });
  const deferToApprover = useWatch({
    control,
    name: fieldConfig.deferToApproverField
  });
  const allocations = costAllocations || [];
  const parsedTotalAmount = parseFloat(totalAmount || "0");
  const {
    canEnableEqualSplit,
    toggleEqualSplit
  } = useEqualSplit({
    allocations,
    isEqualSplit: isEqualSplit ?? false,
    setValue,
    getValues: helpers.getValues,
    totalAmount: parsedTotalAmount,
    totalAmountField: fieldConfig.totalAmountField,
    costAllocationsField: fieldConfig.costAllocationsField,
    isEqualSplitField: fieldConfig.isEqualSplitField
  });
  const isEqualSplitDisabled = parsedTotalAmount === 0;
  const hasNoAllocations = allocations.length === 0;
  const noAmountEntered = totalAmount === "0" || totalAmount === "";
  if (hasNoAllocations) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      us,
      {
        id: "defer-to-approver",
        label: "Defer to approver",
        checked: deferToApprover ?? false,
        onCheckedChange: (checked) => {
          setValue(
            fieldConfig.deferToApproverField,
            checked,
            {
              shouldValidate: true,
              shouldDirty: true
            }
          );
          trigger(fieldConfig.costAllocationsField);
        },
        disabled: noAmountEntered
      }
    ) });
  }
  if (!canEnableEqualSplit) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ks,
      {
        id: "equal-split-toggle",
        checked: isEqualSplit ?? false,
        onCheckedChange: toggleEqualSplit,
        disabled: isEqualSplitDisabled || disabled
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Te,
      {
        htmlFor: "equal-split-toggle",
        className: "text-xs font-medium text-exp-neutral-700 cursor-pointer",
        children: COST_ALLOCATION_LABELS.EQUAL_SPLIT
      }
    )
  ] });
}
function CostAllocationSectionComponent({
  control,
  setValue,
  trigger,
  disabled = false,
  actions,
  helpers,
  fieldConfig
}) {
  const totalAmount = useWatch({
    control,
    name: fieldConfig.totalAmountField
  });
  const totalCurrency = useWatch({
    control,
    name: fieldConfig.currencyField ?? fieldConfig.totalAmountField,
    disabled: !fieldConfig.currencyField
  });
  const costAllocations = useWatch({
    control,
    name: fieldConfig.costAllocationsField
  });
  const deferToApprover = useWatch({
    control,
    name: fieldConfig.deferToApproverField
  });
  const allocations = costAllocations || [];
  const parsedTotalAmount = parseFloat(totalAmount || "0");
  const getCurrencyCode = () => {
    if (totalCurrency && typeof totalCurrency === "object" && "code" in totalCurrency) {
      return totalCurrency.code || fieldConfig.defaultCurrencyCode || DEFAULT_CURRENCY_CODE;
    }
    return fieldConfig.defaultCurrencyCode || DEFAULT_CURRENCY_CODE;
  };
  const currencyCode = getCurrencyCode();
  const prevCurrencyCodeRef = useRef$1(currencyCode);
  useEffect(() => {
    if (prevCurrencyCodeRef.current !== currencyCode) {
      prevCurrencyCodeRef.current = currencyCode;
      if (allocations.length > 0) {
        trigger(fieldConfig.costAllocationsField);
      }
    }
  }, [currencyCode, allocations.length, trigger, fieldConfig.costAllocationsField]);
  const {
    progressValue,
    progressError
  } = useCostAllocation({
    allocations,
    totalAmount: parsedTotalAmount
  });
  const hasAllocations = allocations.length > 0;
  const { addAllocation, updateAllocationEntity, removeAllocation } = actions;
  const { getSelectedValue } = helpers;
  const isProgressDisabled = !hasAllocations && parsedTotalAmount === 0;
  if (deferToApprover) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(za, { value: progressValue, disabled: isProgressDisabled, error: progressError }),
    !hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AllocationTypeChips,
      {
        onSelect: (type) => addAllocation(type),
        disabled
      }
    ) }),
    hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      allocations.map((allocation, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CostAllocationField,
        {
          control,
          setValue,
          trigger,
          getValues: helpers.getValues,
          index,
          type: allocation.type,
          value: getSelectedValue(allocation.id, allocations),
          onValueChange: (item) => updateAllocationEntity(allocation.id, item),
          totalAmount: parsedTotalAmount,
          currencyCode,
          disabled,
          onRemove: () => removeAllocation(allocation.id),
          isEqualSplitField: fieldConfig.isEqualSplitField
        },
        allocation.id
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AddAllocationExpandable,
        {
          onTypeSelect: (type) => addAllocation(type),
          disabled
        }
      )
    ] })
  ] });
}
const MemoizedCostAllocationSection = memo(CostAllocationSectionComponent);
const CostAllocationSection = MemoizedCostAllocationSection;
MemoizedCostAllocationSection.displayName = "CostAllocationSection";
const { useCallback: useCallback$3 } = await importShared("react");
const SupportingFilesFormSection = ({
  control,
  setValue,
  disabled = false,
  expenseId,
  onSaveDraftForUpload
}) => {
  const supportingFiles = useWatch({
    control,
    name: MileagePeriodFormField.SupportingFiles
  });
  const handleFilesChange = useCallback$3(
    (attachments) => {
      setValue(MileagePeriodFormField.SupportingFiles, attachments, {
        shouldValidate: true,
        shouldDirty: true
      });
    },
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SupportingFiles,
    {
      onFilesChange: handleFilesChange,
      initialFiles: supportingFiles || [],
      disabled,
      maxFiles: MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD,
      title: "SUPPORTING FILE",
      tooltipContent: "Attach a JPEG/JPG, PNG, HEIC/HEIF, WebP (max. 25MB) or PDF (max. 50MB)",
      hideAddButtonWhenFull: true,
      expenseId,
      onSaveDraftForUpload
    }
  );
};
const MileageDetailsSection = ({
  control,
  disabled = false,
  mode = "trip"
}) => {
  const isTripMode = mode === "trip";
  const { ratePerUnit, rateUnit, reimbursableAmount } = useFormFieldValues(
    control,
    ["ratePerUnit", "rateUnit", "reimbursableAmount"]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "mileageType",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              MileageTypeSelect,
              {
                value: field.value || "",
                onChange: field.onChange,
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }
        }
      ),
      isTripMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expenseDate",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              ka,
              {
                mode: "single",
                label: "Expense date",
                placeholder: "Select date mileage incurred",
                value: typeof field.value === "string" && field.value ? new Date(field.value) : void 0,
                onChange: (date2) => {
                  field.onChange(date2 ? date2.toISOString() : "");
                },
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled,
                numberOfMonths: 1,
                maxDate: /* @__PURE__ */ new Date()
              }
            );
          }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expensePeriod",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              ka,
              {
                mode: "range",
                label: "Expense period",
                placeholder: "Select period range",
                value: field.value,
                onChange: (range) => {
                  field.onChange(range);
                },
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled,
                numberOfMonths: 2,
                maxDate: /* @__PURE__ */ new Date()
              }
            );
          }
        }
      ),
      isTripMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "fromLocation",
            control,
            render: ({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Va,
                {
                  label: "From",
                  placeholder: "Specify origin location",
                  ...field,
                  value: field.value || "",
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled,
                  maxCharacters: 100,
                  showCharacterCount: true,
                  enforceMaxLength: true
                }
              );
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center absolute top-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "isRoundTrip",
              control,
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                us,
                {
                  label: "Round trip",
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  disabled
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "toLocation",
              control,
              render: ({ field, fieldState }) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Va,
                  {
                    label: "To",
                    placeholder: "Specify destination location",
                    ...field,
                    value: field.value || "",
                    error: (_a = fieldState.error) == null ? void 0 : _a.message,
                    disabled,
                    maxCharacters: 100,
                    showCharacterCount: true,
                    enforceMaxLength: true
                  }
                );
              }
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "totalDistance",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Va,
              {
                label: `Total distance${rateUnit ? ` (${rateUnit})` : ""}`,
                placeholder: "0.00",
                ...field,
                value: field.value || "",
                onChange: createDecimalChangeHandler(field.onChange),
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Va,
        {
          label: "Rate",
          value: ratePerUnit ? `$ ${ratePerUnit} per ${rateUnit || "unit"}` : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Va,
        {
          label: "Reimbursable amount",
          value: reimbursableAmount ? `$ ${reimbursableAmount} CAD` : "$ CAD",
          disabled: true,
          readOnly: true
        }
      )
    ] })
  ] });
};
const MileageJustificationSection = ({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "businessPurpose",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            BusinessPurposeSelect,
            {
              value: field.value || "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDescription",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ta,
            {
              label: "Expense description",
              placeholder: "Add any additional details about this claim",
              ...field,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              maxLength: 500,
              rows: 4
            }
          );
        }
      }
    )
  ] });
};
const EXPENSE_DETAILS_SECTION = {
  id: "expense-details",
  type: FormSectionType.ExpenseDetails,
  title: "EXPENSE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: expenseDetailsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseDetailsSection, { ...props })
};
const EXPENSE_JUSTIFICATION_SECTION = {
  id: "expense-justification",
  type: FormSectionType.ExpenseJustification,
  title: "EXPENSE JUSTIFICATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 2,
  schema: expenseJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseJustificationSection, { ...props })
};
const EXPENSE_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "totalAmount",
  // Uses netCurrency because totalCurrency is not yet synced (TODO: TRX-90 isDifferentCurrency)
  currencyField: "netCurrency",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
};
const COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 3,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG }),
  headerActions: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG
    }
  ),
  isEnabled: (formValues) => {
    const totalAmount = parseFloat(formValues.totalAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || totalAmount > 0;
  },
  dependsOn: ["totalAmount", "netCurrency", "costAllocations", "isEqualSplit", "deferToApprover"]
};
const ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 4,
  schema: additionalCommentsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props })
};
const MILEAGE_DETAILS_SECTION = {
  id: "mileage-details",
  type: FormSectionType.MileageDetails,
  title: "MILEAGE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: mileageDetailsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "trip" })
};
const MILEAGE_JUSTIFICATION_SECTION = {
  id: "mileage-justification",
  type: FormSectionType.MileageJustification,
  title: "MILEAGE JUSTIFICATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 2,
  schema: mileageJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props })
};
const MILEAGE_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover",
  defaultCurrencyCode: DEFAULT_CURRENCY_CODE
};
const MILEAGE_COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 3,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG }),
  headerActions: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG
    }
  ),
  isEnabled: (formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  },
  dependsOn: [
    MileageTripFormField.ReimbursableAmount,
    MileageTripFormField.CostAllocations,
    MileageTripFormField.IsEqualSplit,
    MileageTripFormField.DeferToApprover
  ]
};
const MILEAGE_ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 4,
  schema: additionalCommentsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props })
};
const FULL_EXPENSE_SECTIONS_CONFIG = [
  EXPENSE_DETAILS_SECTION,
  EXPENSE_JUSTIFICATION_SECTION,
  COST_ALLOCATION_SECTION,
  ADDITIONAL_COMMENTS_SECTION
];
function sortFormSections(sections) {
  return [...sections].sort((a2, b) => a2.order - b.order);
}
const { forwardRef, useMemo: useMemo$2 } = await importShared("react");
const createExpenseForm = (config2) => {
  const FormComponent = forwardRef(
    (props, ref) => {
      var _a;
      const {
        onSubmit,
        onSaveDraft,
        onDraftSaved,
        initialData,
        draftId,
        isSubmitting = false,
        isDrafting = false,
        draftSaveError = false,
        onButtonStateChange,
        onSaveDraftForUpload
      } = props;
      const defaultValues = ((_a = config2.initialDataTransformer) == null ? void 0 : _a.call(config2, initialData)) ?? initialData;
      const validationConfig = {
        ...config2.validationStrategy,
        defaultValues
      };
      const form = useBaseExpenseForm(validationConfig, {
        onSubmit,
        onSaveDraft,
        onDraftSaved,
        isSubmitting,
        isDrafting,
        draftSaveError
      });
      const { control, setValue, getValues, formState, watch, trigger } = form.form;
      config2.customHook({ control, setValue, getValues, formState, watch, trigger });
      useAutoSave({
        draftId,
        isDrafting,
        onSaveDraft,
        getFormValues: () => form.getValues()
      });
      useFormButtonStateSync({
        form,
        formState,
        onButtonStateChange,
        isSubmitting,
        isDrafting
      });
      useFormImperativeHandle({
        ref,
        form
      });
      const formSections = useMemo$2(() => sortFormSections(config2.sections), []);
      const handlersMap = config2.handlersHook(setValue, getValues, { draftId, onSaveDraftForUpload });
      const leftColumn = useMemo$2(
        () => {
          var _a2;
          return (_a2 = config2.leftColumnRenderer) == null ? void 0 : _a2.call(config2, {
            control,
            setValue,
            getValues,
            isSubmitting,
            isDrafting,
            draftId,
            onSaveDraft,
            onSaveDraftForUpload
          });
        },
        [control, setValue, getValues, isSubmitting, isDrafting, draftId, onSaveDraft, onSaveDraftForUpload]
      );
      const errorDisplay = useMemo$2(
        () => {
          var _a2;
          return (_a2 = config2.errorDisplayRenderer) == null ? void 0 : _a2.call(config2, { errors: form.validationErrors });
        },
        [form.validationErrors]
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        BaseExpenseFormRenderer,
        {
          control,
          setValue,
          trigger: form.form.trigger,
          errors: formState.errors,
          disabled: isSubmitting,
          sections: formSections,
          handlersMap,
          layout: config2.layout,
          leftColumn,
          errorDisplay
        }
      );
    }
  );
  FormComponent.displayName = "ExpenseForm";
  return FormComponent;
};
const ExpenseForm = createExpenseForm({
  validationStrategy: fullExpenseValidationStrategy,
  sections: FULL_EXPENSE_SECTIONS_CONFIG,
  layout: "two-column",
  initialDataTransformer: mapFullExpenseToDefaultValues,
  leftColumnRenderer: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormLeftColumn, { ...params }),
  // A placeholder for error displaying in a form
  errorDisplayRenderer: ({ errors }) => {
    devLog("Form validation errors:", errors);
    return null;
  },
  customHook: useExpenseFormSync,
  handlersHook: useExpenseFormHandlers
});
ExpenseForm.displayName = "ExpenseForm";
const MILEAGE_TRIP_SECTIONS_CONFIG = [
  MILEAGE_DETAILS_SECTION,
  MILEAGE_JUSTIFICATION_SECTION,
  MILEAGE_COST_ALLOCATION_SECTION,
  MILEAGE_ADDITIONAL_COMMENTS_SECTION
];
const MileageTripForm = createExpenseForm({
  validationStrategy: mileageTripValidationStrategy,
  sections: MILEAGE_TRIP_SECTIONS_CONFIG,
  layout: "single-column",
  initialDataTransformer: mapMileageTripToDefaultValues,
  errorDisplayRenderer: ({ errors }) => {
    devLog(errors);
    return null;
  },
  customHook: useMileageFormSync,
  handlersHook: useMileageTripFormHandlers
});
MileageTripForm.displayName = "MileageTripForm";
const MILEAGE_PERIOD_DETAILS_SECTION = {
  id: "mileage-details",
  type: FormSectionType.MileageDetails,
  title: "MILEAGE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: mileageDetailsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "period" })
};
const MILEAGE_PERIOD_JUSTIFICATION_SECTION = {
  id: "mileage-justification",
  type: FormSectionType.MileageJustification,
  title: "MILEAGE JUSTIFICATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 3,
  schema: mileageJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props })
};
const MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover",
  defaultCurrencyCode: DEFAULT_CURRENCY_CODE
};
const MILEAGE_PERIOD_COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 4,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG }),
  headerActions: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG
    }
  ),
  isEnabled: (formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  },
  dependsOn: [
    MileagePeriodFormField.ReimbursableAmount,
    MileagePeriodFormField.CostAllocations,
    MileagePeriodFormField.IsEqualSplit,
    MileagePeriodFormField.DeferToApprover
  ]
};
const MILEAGE_PERIOD_SUPPORTING_FILES_SECTION = {
  id: "supporting-files",
  type: FormSectionType.SupportingFiles,
  title: "SUPPORTING FILES",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-neutral-30 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 2,
  hideHeader: true,
  schema: supportingFilesSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(SupportingFilesFormSection, { ...props })
};
const MILEAGE_PERIOD_ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 5,
  schema: additionalCommentsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props })
};
const MILEAGE_PERIOD_SECTIONS_CONFIG = [
  MILEAGE_PERIOD_DETAILS_SECTION,
  MILEAGE_PERIOD_SUPPORTING_FILES_SECTION,
  MILEAGE_PERIOD_JUSTIFICATION_SECTION,
  MILEAGE_PERIOD_COST_ALLOCATION_SECTION,
  MILEAGE_PERIOD_ADDITIONAL_COMMENTS_SECTION
];
object({
  formType: literal("period"),
  [MileagePeriodFormField.MileageType]: mileageTypeFieldOptional,
  [MileagePeriodFormField.ExpensePeriod]: expensePeriodFieldOptional,
  [MileagePeriodFormField.TotalDistance]: totalDistanceFieldOptional,
  [MileagePeriodFormField.RatePerUnit]: ratePerUnitFieldOptional,
  [MileagePeriodFormField.RateUnit]: rateUnitFieldOptional,
  [MileagePeriodFormField.ReimbursableAmount]: reimbursableAmountFieldOptional,
  [MileagePeriodFormField.BusinessPurpose]: businessPurposeFieldOptional,
  [MileagePeriodFormField.ExpenseDescription]: expenseDescriptionFieldOptional,
  [MileagePeriodFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })).optional(),
  [MileagePeriodFormField.IsEqualSplit]: boolean().optional(),
  [MileagePeriodFormField.DeferToApprover]: boolean().optional(),
  [MileagePeriodFormField.SupportingFiles]: supportingFilesField,
  [MileagePeriodFormField.AdditionalComments]: additionalCommentsFieldOptional
});
const draftSaveableFields = [
  MileagePeriodFormField.MileageType,
  MileagePeriodFormField.ExpensePeriod,
  MileagePeriodFormField.TotalDistance,
  MileagePeriodFormField.BusinessPurpose,
  MileagePeriodFormField.ExpenseDescription,
  MileagePeriodFormField.SupportingFiles,
  MileagePeriodFormField.AdditionalComments
];
const canSaveDraft = createDraftSaveChecker(draftSaveableFields);
const getFormValidationErrors = (data) => {
  const errors = [];
  const result = mileagePeriodFormSchema.safeParse(data);
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors.push(issue.message);
    });
  }
  return errors;
};
const mileagePeriodValidationStrategy = createValidationStrategy(mileagePeriodFormSchema, {
  canSaveDraft,
  getValidationErrors: getFormValidationErrors
});
const { useCallback: useCallback$2, useMemo: useMemo$1 } = await importShared("react");
const useMileagePeriodFormHandlers = (setValue, getValues, context) => {
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    MileagePeriodFormField.CostAllocations,
    MileagePeriodFormField.IsEqualSplit,
    MileagePeriodFormField.ReimbursableAmount
  );
  const handleSaveDraftForUpload = useCallback$2(async () => {
    if (!(context == null ? void 0 : context.onSaveDraftForUpload)) {
      throw new Error("onSaveDraftForUpload is not defined");
    }
    const formData = getValues();
    return context.onSaveDraftForUpload(formData);
  }, [getValues, context == null ? void 0 : context.onSaveDraftForUpload]);
  return useMemo$1(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers,
      [FormSectionType.SupportingFiles]: {
        expenseId: context == null ? void 0 : context.draftId,
        onSaveDraftForUpload: (context == null ? void 0 : context.onSaveDraftForUpload) ? handleSaveDraftForUpload : void 0
      }
    }),
    [costAllocationHandlers, context == null ? void 0 : context.draftId, context == null ? void 0 : context.onSaveDraftForUpload, handleSaveDraftForUpload]
  );
};
const { useCallback: useCallback$1, useMemo } = await importShared("react");
const ensureDate = (value) => {
  if (!value) return void 0;
  if (value instanceof Date) return value;
  if (typeof value === "string") return new Date(value);
  return void 0;
};
const parseExpensePeriod = (period) => {
  if (!period) return void 0;
  const from = ensureDate(period.from);
  const to = ensureDate(period.to);
  if (!from || !to) return void 0;
  return { from, to };
};
const mapMileagePeriodToDefaultValues = (data) => {
  return {
    formType: MileageFormType.Period,
    [MileagePeriodFormField.MileageType]: (data == null ? void 0 : data.mileageType) ?? "",
    [MileagePeriodFormField.ExpensePeriod]: parseExpensePeriod(data == null ? void 0 : data.expensePeriod),
    [MileagePeriodFormField.TotalDistance]: (data == null ? void 0 : data.totalDistance) ?? "",
    [MileagePeriodFormField.RatePerUnit]: (data == null ? void 0 : data.ratePerUnit) ?? "",
    [MileagePeriodFormField.RateUnit]: (data == null ? void 0 : data.rateUnit) ?? "",
    [MileagePeriodFormField.ReimbursableAmount]: (data == null ? void 0 : data.reimbursableAmount) ?? "",
    [MileagePeriodFormField.BusinessPurpose]: (data == null ? void 0 : data.businessPurpose) ?? "",
    [MileagePeriodFormField.ExpenseDescription]: (data == null ? void 0 : data.expenseDescription) ?? "",
    [MileagePeriodFormField.CostAllocations]: (data == null ? void 0 : data.costAllocations) ?? [],
    [MileagePeriodFormField.DeferToApprover]: (data == null ? void 0 : data.deferToApprover) ?? false,
    [MileagePeriodFormField.IsEqualSplit]: (data == null ? void 0 : data.isEqualSplit) ?? false,
    [MileagePeriodFormField.SupportingFiles]: (data == null ? void 0 : data.supportingFiles) ?? [],
    [MileagePeriodFormField.AdditionalComments]: (data == null ? void 0 : data.additionalComments) ?? ""
  };
};
const MileagePeriodForm = createExpenseForm({
  validationStrategy: mileagePeriodValidationStrategy,
  sections: MILEAGE_PERIOD_SECTIONS_CONFIG,
  layout: "single-column",
  initialDataTransformer: mapMileagePeriodToDefaultValues,
  errorDisplayRenderer: ({ errors }) => {
    devLog(errors);
    return null;
  },
  customHook: useMileageFormSync,
  handlersHook: useMileagePeriodFormHandlers
});
MileagePeriodForm.displayName = "MileagePeriodForm";
const { useCallback, useRef, useState } = await importShared("react");
function ExpenseFormDialog({
  trigger,
  title,
  description,
  formComponent: FormComponent,
  initialData,
  onSubmit,
  onSaveDraft,
  dialogClassName = "max-w-3xl max-h-[90vh] overflow-y-auto"
}) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDrafting, setIsDrafting] = useState(false);
  const [draftSaveError, setDraftSaveError] = useState(false);
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [draftButtonState, setDraftButtonState] = useState({ disabled: true });
  const formRef = useRef(null);
  const handleButtonStateChange = useCallback(
    (submitState, draftState) => {
      setSubmitButtonState((prev) => {
        if (prev.disabled !== submitState.disabled || prev.tooltip !== submitState.tooltip) {
          return submitState;
        }
        return prev;
      });
      setDraftButtonState((prev) => {
        if (prev.disabled !== draftState.disabled || prev.tooltip !== draftState.tooltip) {
          return draftState;
        }
        return prev;
      });
    },
    []
  );
  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    setDraftSaveError(false);
    try {
      await (onSubmit == null ? void 0 : onSubmit(data));
      setOpen(false);
    } catch (error) {
      devError("Submit failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleSaveDraft = async (data) => {
    setIsDrafting(true);
    setDraftSaveError(false);
    try {
      await (onSaveDraft == null ? void 0 : onSaveDraft(data));
    } catch (error) {
      devError("Save draft failed:", error);
      setDraftSaveError(true);
    } finally {
      setIsDrafting(false);
    }
  };
  const handleDraftSaved = () => {
  };
  const handleSubmitClick = () => {
    var _a;
    (_a = formRef.current) == null ? void 0 : _a.submitForm();
  };
  const handleDraftClick = () => {
    var _a;
    (_a = formRef.current) == null ? void 0 : _a.saveDraft();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(xs, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(vs, { asChild: true, children: trigger || /* @__PURE__ */ jsxRuntimeExports.jsx($e, { children: "New Expense" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(bs, { className: dialogClassName, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ws, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormComponent,
        {
          ref: formRef,
          initialData,
          onSubmit: handleSubmit,
          onSaveDraft: handleSaveDraft,
          onDraftSaved: handleDraftSaved,
          isSubmitting,
          isDrafting,
          draftSaveError,
          onButtonStateChange: handleButtonStateChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          $e,
          {
            type: "button",
            variant: "outline",
            onClick: () => setOpen(false),
            disabled: isSubmitting || isDrafting,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              type: "button",
              variant: "secondary",
              onClick: handleDraftClick,
              disabled: draftButtonState.disabled,
              children: isDrafting ? "Saving..." : "Save Draft"
            }
          ) }) }),
          draftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: draftButtonState.tooltip }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ar, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              type: "button",
              onClick: handleSubmitClick,
              disabled: submitButtonState.disabled,
              children: isSubmitting ? "Submitting..." : "Submit"
            }
          ) }) }),
          submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: submitButtonState.tooltip }) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ConfirmDialog as C,
  ExpenseForm as E,
  FormSectionType as F,
  MileageFormType as M,
  ReceiptSection as R,
  parseOptionalDecimal as a,
  isMileagePeriodData as b,
  useSubmitExpense as c,
  useDeleteExpenseDraft as d,
  usePendingUploadStore as e,
  MileageTripForm as f,
  MileagePeriodForm as g,
  minimalExpenseValidationStrategy as h,
  isMileageTripData as i,
  useBaseExpenseForm as j,
  useReceiptCheckboxEffects as k,
  useFormButtonStateSync as l,
  mapCostAllocation as m,
  useFormImperativeHandle as n,
  FormSectionProvider as o,
  parseOptionalInt as p,
  FormRenderer as q,
  resolveFileUrl as r,
  sortFormSections as s,
  toISODateString as t,
  useSaveExpenseDraft as u,
  ExpenseFormDialog as v,
  affidavitExpenseValidationStrategy as w
};

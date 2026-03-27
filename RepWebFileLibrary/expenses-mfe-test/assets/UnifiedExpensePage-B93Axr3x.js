import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as createLucideIcon, a as $a, B as Bs, V as Va, k as ka, J as Jn, G as Ga, T as Ta, u as us, W as Ws, e as qa, Y as Ya, f as Wa, E as En, K as Ka, M as Mn, P as Pn, $ as $e, d as Vn, Z as Za } from "./configuration-Bjg01YDW.js";
import { a as ExpenseStatusBadge, E as ExpensesList } from "./ExpensesList-B3CjQbtp.js";
import { a as apiClient } from "./axiosInstance-DRv32qzS.js";
import { m as useDefaultCompany, c as useExpenseTypes, F as FormTypeId, f as useQueryClient, a as useCompanyStore, h as useMutation, q as queryKeys, E as EXPENSE_ENDPOINTS, I as ItemCategory, d as useQuery, D as DEFAULT_CURRENCY_CODE, n as useCurrencies, o as useCountries, p as useTaxTypesDisplay, r as useDefaultCurrency, s as useFormTypeId, t as ExpenseFormType, e as isRegularExpense, j as isMileageExpense, i as isExpenseItemSubmitted, l as useExpenseItem, v as isExpenseItemDraft } from "./expense-api-DITThX08.js";
import { a as formatExpensePeriod, E as ExpenseFormHistoryLog } from "./ExpenseFormHistoryLog-6ou0e3RR.js";
import { f as isValidFileAttachment, h as ExpenseFormField, j as useFormFieldValues, k as useMileageRateSync, l as useReimbursableAmountSync, n as useAmountAllocationSync, o as mapFormDataToUpdateRequest, p as mapFormDataToCreateRequest, t as toISODateString, m as mapCostAllocation, q as parseOptionalInt, r as parseOptionalDecimal, s as getMileageTypesFromCache, i as isMileageTripData, w as affidavitSchema, x as basicDetailsSchema, y as createValidationStrategy, z as createDraftSaveChecker, A as useTaxFieldVisibility, B as isConvertedExpense, D as useSetDefaultCurrency, F as ExpenseTypeSelect, G as MileagePeriodFormField, S as SupportingFiles, H as MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD, I as FormSectionType, J as expenseDetailsSchema, K as expenseJustificationSchema, L as costAllocationSchema, N as additionalCommentsSchema, g as getExpenseBaseAmount, C as CostAllocationHeaderActions, a as CostAllocationSection, O as MileageTripFormField, P as mileageDetailsSchema, Q as mileageJustificationSchema, R as useBaseExpenseForm, T as useValidatePrefilledFields, U as useAutoSave, V as useFormButtonStateSync, W as useFormImperativeHandle, X as BaseExpenseFormRenderer, Y as useExpenseFormHandlers, Z as useExpenseFormSync, _ as fullExpenseValidationStrategy, $ as ExpenseFormLeftColumn, a0 as useMileageTripFormHandlers, a1 as mapMileageTripToDefaultValues, a2 as mileageTripValidationStrategy, a3 as supportingFilesSchema, a4 as useMileagePeriodFormHandlers, a5 as mapMileagePeriodToDefaultValues, a6 as mileagePeriodValidationStrategy, e as ConfirmDialog, b as isMileagePeriodData, a7 as MileageFormType, a8 as usePendingUploadStore, E as ExpensePreview, M as MileageTripPreview, d as MileagePeriodPreview } from "./CostAllocationSection-jX9YlcqQ.js";
import { d as devError, a as devLog } from "./index-B5ZEU9xK.js";
import { o as object, s as string, c as boolean, d as custom, C as Controller, e as createDecimalChangeHandler, f as useWatch } from "./schemas-CxGcuJwB.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { u as useBusinessPurposes } from "./business-purpose-api-Dt8AyT2H.js";
import { I as Icon } from "./Icon-vRMTtv5F.js";
import { c as formatRate, d as formatCurrency, b as formatDate } from "./formatters-CWwpm_gK.js";
import { u as useNavigate, o as useNavigateBack, n as generatePath, a as RoutePaths, g as useParams, k as useSearchParams } from "./use-scroll-into-view-ref-CchDyEdt.js";
import { T as Trash2, S as Send } from "./trash-2-H9ZIEcWJ.js";
const __iconNode$1 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$1);
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
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
const DEFAULT_PAYMENT_METHOD = { id: "1" };
const DEFAULT_MILEAGE_VENDOR = "N/A";
const isReceiptValidSimple = (data) => {
  if (data.isReceiptUnavailable) {
    return true;
  }
  if (!data.receiptAttachment) {
    return false;
  }
  return isValidFileAttachment(data.receiptAttachment);
};
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
    [ExpenseFormField.NetCurrency]: (initialData == null ? void 0 : initialData.netCurrency) ?? void 0,
    [ExpenseFormField.TotalCurrency]: (initialData == null ? void 0 : initialData.totalCurrency) ?? void 0,
    [ExpenseFormField.CostAllocations]: (initialData == null ? void 0 : initialData.costAllocations) ?? [],
    [ExpenseFormField.DeferToApprover]: (initialData == null ? void 0 : initialData.deferToApprover) ?? false,
    [ExpenseFormField.IsEqualSplit]: (initialData == null ? void 0 : initialData.isEqualSplit) ?? false
  };
};
function useMileageFormSync({
  control,
  setValue,
  getValues,
  trigger
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
    trigger,
    costAllocationsField: "costAllocations",
    isEqualSplitField: "isEqualSplit"
  });
}
const mapToPaymentMethod = (api) => ({
  id: String(api.id),
  name: api.name,
  currencyCode: api.currencyCode
});
function normalizeExpenseDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    vendor: response.vendor ?? "",
    expenseDate: response.date ?? "",
    totalAmount: Number(response.totalAmount ?? 0),
    totalCurrencyCode: response.totalCurrencyCode ?? "",
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
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ data, draftId, signal }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      const expenseTypes = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.list(company, false) }).flatMap(([, data2]) => data2 ?? []);
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
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      const expenseItem = buildExpenseItemForCache(response, formData);
      if (variables.draftId) {
        queryClient.setQueryData(
          queryKeys.expenseItem.detail(variables.draftId),
          expenseItem
        );
      } else {
        queryClient.setQueryData(queryKeys.expenseItem.detail(draft.id), expenseItem);
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
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient.removeQueries({
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
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ draftId }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      await apiClient.post(EXPENSE_ENDPOINTS.SUBMIT_DRAFT(company, draftId));
      return { draftId };
    },
    onSuccess: (_data, { draftId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
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
const usePaymentMethods = ({
  companyShortName,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName ? queryKeys.paymentMethods.list(companyShortName) : queryKeys.paymentMethods.all(),
    queryFn: async () => {
      if (!companyShortName) {
        throw new Error("Company short name is required");
      }
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_PAYMENT_METHODS(companyShortName)
      );
      return response.data.map(mapToPaymentMethod);
    },
    enabled: enabled && !!companyShortName,
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
};
function dateToISOString(date) {
  if (!date) return null;
  try {
    return date.toISOString();
  } catch {
    return null;
  }
}
function resolveMileageTypeFields(mileageType, expenseTypes) {
  var _a;
  const typeId = parseOptionalInt(mileageType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? FormTypeId.MILEAGE,
    effectiveMileageRateId: ((_a = selectedExpenseType == null ? void 0 : selectedExpenseType.mileageEffectiveRate) == null ? void 0 : _a.id) ?? null
  };
}
function mapCommonMileageFields(data, expenseTypes) {
  const { typeId, formTypeId, effectiveMileageRateId } = resolveMileageTypeFields(data.mileageType, expenseTypes);
  return {
    typeId,
    formTypeId,
    effectiveMileageRateId,
    vendor: DEFAULT_MILEAGE_VENDOR,
    paymentMethodId: parseInt(DEFAULT_PAYMENT_METHOD.id, 10),
    totalDistance: parseOptionalDecimal(data.totalDistance),
    totalAmount: parseOptionalDecimal(data.reimbursableAmount),
    totalCurrencyCode: DEFAULT_CURRENCY_CODE,
    businessPurposeId: parseOptionalInt(data.businessPurpose),
    description: data.expenseDescription || null,
    additionalComments: data.additionalComments || null,
    costAllocationDeferred: data.deferToApprover ?? null,
    costAllocations: data.costAllocations && data.costAllocations.length > 0 ? data.costAllocations.map(mapCostAllocation) : null
  };
}
function mapMileageTripToCreateRequest(data, expenseTypes) {
  return {
    ...mapCommonMileageFields(data, expenseTypes),
    date: toISODateString(data.expenseDate),
    fromLocation: data.fromLocation || null,
    toLocation: data.toLocation || null,
    roundTrip: data.isRoundTrip ?? null
  };
}
function mapMileagePeriodToCreateRequest(data, expenseTypes) {
  var _a, _b;
  return {
    ...mapCommonMileageFields(data, expenseTypes),
    periodStart: dateToISOString((_a = data.expensePeriod) == null ? void 0 : _a.from),
    periodEnd: dateToISOString((_b = data.expensePeriod) == null ? void 0 : _b.to)
  };
}
const mapMileageTripToUpdateRequest = mapMileageTripToCreateRequest;
const mapMileagePeriodToUpdateRequest = mapMileagePeriodToCreateRequest;
function normalizeMileageDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
function buildMileageItemForCache(response, formData) {
  return {
    id: String(response.id),
    itemType: ItemCategory.Mileage,
    status: "draft",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate ?? response.createdDate,
    userId: response.formOwner,
    data: formData
  };
}
const useSaveMileageDraft = () => {
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ data, draftId, signal }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      const expenseTypes = getMileageTypesFromCache(queryClient, company);
      if (draftId) {
        const payload = isMileageTripData(data) ? mapMileageTripToUpdateRequest(data, expenseTypes) : mapMileagePeriodToUpdateRequest(data, expenseTypes);
        devLog("📤 Update mileage draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT(company, draftId),
          payload,
          { signal }
        );
        devLog("📥 Update mileage draft response:", response.data);
        return {
          draft: normalizeMileageDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      } else {
        const payload = isMileageTripData(data) ? mapMileageTripToCreateRequest(data, expenseTypes) : mapMileagePeriodToCreateRequest(data, expenseTypes);
        devLog("📤 Create mileage draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT(company),
          payload,
          { signal }
        );
        devLog("📥 Create mileage draft response:", response.data);
        return {
          draft: normalizeMileageDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      }
    },
    onSuccess: ({ draft, response, formData }, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      const mileageItem = buildMileageItemForCache(response, formData);
      if (variables.draftId) {
        queryClient.setQueryData(
          queryKeys.expenseItem.detail(variables.draftId),
          mileageItem
        );
      } else {
        queryClient.setQueryData(queryKeys.expenseItem.detail(draft.id), mileageItem);
      }
      Bs.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      devError("Failed to save mileage draft:", error);
      Bs.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitMileage = () => {
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ draftId }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      await apiClient.post(EXPENSE_ENDPOINTS.SUBMIT_DRAFT(company, draftId));
      return { draftId };
    },
    onSuccess: (_data, { draftId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageTrips.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileagePeriods.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Bs.success("Mileage claim submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      devError("Failed to submit mileage:", error);
      Bs.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useDeleteMileageDraft = (options) => {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient.removeQueries({
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
createValidationStrategy(
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
createValidationStrategy(
  minimalExpenseSchema,
  {
    validateForDraft: (data) => minimalExpenseDraftSchema.safeParse(data),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseLocation"],
      (data) => !!data.receiptAttachment
    )
  }
);
const { useEffect: useEffect$3, useMemo: useMemo$3, useRef: useRef$4 } = await importShared("react");
const TAX_CURRENCY = "CAD";
const ExpenseDetailsSection = ({
  control,
  setValue,
  trigger,
  disabled = false
}) => {
  const { netCurrency, totalCurrency, expenseLocation, taxAmount } = useFormFieldValues(control, [
    "netCurrency",
    "totalCurrency",
    "expenseLocation",
    "taxAmount"
  ]);
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const { showTaxFields } = useTaxFieldVisibility(expenseLocation);
  const showConvertedTotal = isConvertedExpense(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code);
  const { data: currencies, isLoading: currenciesLoading } = useCurrencies();
  const { data: countries, isLoading: countriesLoading } = useCountries();
  const { data: paymentMethods, isLoading: paymentMethodsLoading } = usePaymentMethods({
    companyShortName: (selectedCompany == null ? void 0 : selectedCompany.shortName) ?? null
  });
  const { data: taxTypes, isLoading: taxTypesLoading } = useTaxTypesDisplay({
    companyShortName: (selectedCompany == null ? void 0 : selectedCompany.shortName) ?? null,
    enabled: showTaxFields
  });
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const canSetDefaultCurrency = !currenciesLoading && !countriesLoading && !(netCurrency == null ? void 0 : netCurrency.code) && !(totalCurrency == null ? void 0 : totalCurrency.code);
  useSetDefaultCurrency(setValue, defaultCurrencyCode, defaultCurrencySymbol, canSetDefaultCurrency);
  const codeToSymbolMap = useMemo$3(() => {
    return new Map(currencies == null ? void 0 : currencies.map((c) => [c.isoCode, c.symbol]));
  }, [currencies]);
  const prevShowTaxFields = useRef$4(showTaxFields);
  useEffect$3(() => {
    if (prevShowTaxFields.current && !showTaxFields) {
      setValue("taxType", "", { shouldValidate: true, shouldDirty: true });
      setValue("taxAmount", "", { shouldValidate: true, shouldDirty: true });
    }
    prevShowTaxFields.current = showTaxFields;
  }, [showTaxFields, setValue]);
  const prevShowConvertedTotal = useRef$4(showConvertedTotal);
  useEffect$3(() => {
    if (prevShowConvertedTotal.current === showConvertedTotal) return;
    if (prevShowConvertedTotal.current && !showConvertedTotal) {
      setValue("totalAmount", "", { shouldValidate: true, shouldDirty: true });
    }
    trigger("taxAmount");
    prevShowConvertedTotal.current = showConvertedTotal;
  }, [showConvertedTotal, setValue, trigger]);
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
              value: field.value ?? "",
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
              value: field.value ?? "",
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
              onChange: (date) => field.onChange(date ? date.toISOString() : ""),
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
          const selectedCountry = countries == null ? void 0 : countries.find((country) => country.id.toString() === field.value);
          const currencyIsoCode = (selectedCountry == null ? void 0 : selectedCountry.defaultCurrencyIso) ?? defaultCurrencyCode;
          const currencySymbol = codeToSymbolMap.get(currencyIsoCode) ?? defaultCurrencySymbol;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Jn,
            {
              label: "Expense location",
              placeholder: "Select country",
              value: field.value ? {
                value: field.value,
                label: (selectedCountry == null ? void 0 : selectedCountry.name) ?? "",
                data: {
                  code: currencyIsoCode,
                  symbol: currencySymbol
                }
              } : null,
              onValueChange: (item) => {
                var _a2, _b;
                field.onChange((item == null ? void 0 : item.value) ?? "");
                setValue("netCurrency", {
                  code: ((_a2 = item == null ? void 0 : item.data) == null ? void 0 : _a2.code) ?? defaultCurrencyCode,
                  symbol: ((_b = item == null ? void 0 : item.data) == null ? void 0 : _b.symbol) ?? defaultCurrencySymbol
                });
              },
              onSearch: async (query) => {
                return (countries ?? []).reduce((acc, option) => {
                  if (option.name.toLowerCase().includes(query.toLowerCase())) {
                    acc.push({
                      value: option.id.toString(),
                      label: option.name,
                      data: {
                        code: option.defaultCurrencyIso,
                        symbol: codeToSymbolMap.get(option.defaultCurrencyIso) ?? defaultCurrencySymbol
                      }
                    });
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
              value: field.value,
              onValueChange: (id) => {
                const selectedPaymentMethod = paymentMethods == null ? void 0 : paymentMethods.find((pm) => pm.id === id);
                const currencyIsoCode = (selectedPaymentMethod == null ? void 0 : selectedPaymentMethod.currencyCode) ?? defaultCurrencyCode;
                const currencySymbol = codeToSymbolMap.get(currencyIsoCode) ?? defaultCurrencySymbol;
                field.onChange(id);
                setValue("totalCurrency", {
                  code: currencyIsoCode,
                  symbol: currencySymbol
                });
              },
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled: disabled || paymentMethodsLoading
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-start-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: showConvertedTotal ? "grid grid-cols-2 gap-x-2" : void 0, children: [
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
                  value: field.value ?? "",
                  onChange: createDecimalChangeHandler((value) => {
                    field.onChange(value);
                    if (taxAmount) trigger("taxAmount");
                  }),
                  onBlur: field.onBlur,
                  suffix: {
                    type: "searchSelect",
                    value: {
                      value: (netCurrency == null ? void 0 : netCurrency.code) ?? defaultCurrencyCode,
                      label: (netCurrency == null ? void 0 : netCurrency.code) ?? defaultCurrencyCode,
                      data: (netCurrency == null ? void 0 : netCurrency.symbol) ?? defaultCurrencySymbol
                    },
                    onValueChange: (value) => {
                      setValue("netCurrency", { code: (value == null ? void 0 : value.value) ?? defaultCurrencyCode, symbol: (value == null ? void 0 : value.data) ?? defaultCurrencySymbol });
                    },
                    placeholder: "Search currency",
                    buttonLabel: (netCurrency == null ? void 0 : netCurrency.code) ?? defaultCurrencyCode,
                    onSearch: async (query) => {
                      return (currencies ?? []).reduce((acc, option) => {
                        if (option.isoCode.toLowerCase().includes(query.toLowerCase()) || option.name.toLowerCase().includes(query.toLowerCase())) {
                          acc.push({ value: option.isoCode, label: option.name, data: option.symbol });
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
        showConvertedTotal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "totalAmount",
            control,
            render: ({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ga,
                {
                  label: "Converted total",
                  placeholder: "0.00",
                  textAlign: "right",
                  suffix: (totalCurrency == null ? void 0 : totalCurrency.code) ?? defaultCurrencyCode,
                  value: field.value ?? "",
                  onChange: createDecimalChangeHandler((value) => {
                    field.onChange(value);
                    if (taxAmount) trigger("taxAmount");
                  }),
                  onBlur: field.onBlur,
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled
                }
              );
            }
          }
        )
      ] }),
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
                    field.onChange((item == null ? void 0 : item.value) ?? "");
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight((tt == null ? void 0 : tt.taxCode) ?? item.value) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(`${(tt == null ? void 0 : tt.taxRate) ?? ""}%`) })
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
                  value: field.value ?? "",
                  onBlur: field.onBlur,
                  onChange: createDecimalChangeHandler(field.onChange),
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled
                }
              );
            }
          }
        )
      ] })
    ] })
  ] });
};
const { useEffect: useEffect$2, useRef: useRef$3 } = await importShared("react");
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
  const prevShowPersonsEntertained = useRef$3(showPersonsEntertained);
  useEffect$2(() => {
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
const { useCallback: useCallback$4 } = await importShared("react");
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
  const handleFilesChange = useCallback$4(
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
    [
      "ratePerUnit",
      "rateUnit",
      "reimbursableAmount"
    ]
  );
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
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
                onChange: (date) => {
                  field.onChange(date ? date.toISOString() : "");
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
          value: ratePerUnit ? formatRate(ratePerUnit, rateUnit || "-", { currency }) : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Va,
        {
          label: "Reimbursable amount",
          value: formatCurrency(reimbursableAmount || "0", { currency }),
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
  netAmountField: "netAmount",
  totalAmountField: "totalAmount",
  netCurrencyField: "netCurrency",
  totalCurrencyField: "totalCurrency",
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
    var _a, _b;
    const amount = getExpenseBaseAmount((_a = formValues.netCurrency) == null ? void 0 : _a.code, (_b = formValues.totalCurrency) == null ? void 0 : _b.code, formValues.netAmount, formValues.totalAmount);
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || amount > 0;
  },
  dependsOn: [
    ExpenseFormField.NetAmount,
    ExpenseFormField.TotalAmount,
    ExpenseFormField.NetCurrency,
    ExpenseFormField.TotalCurrency,
    ExpenseFormField.CostAllocations,
    ExpenseFormField.IsEqualSplit,
    ExpenseFormField.DeferToApprover
  ]
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
  netAmountField: "reimbursableAmount",
  totalAmountField: "reimbursableAmount",
  netCurrencyField: "reimbursableAmount",
  totalCurrencyField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
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
  return [...sections].sort((a, b) => a.order - b.order);
}
const { forwardRef, useMemo: useMemo$2 } = await importShared("react");
const createExpenseForm = (config) => {
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
      const defaultValues = ((_a = config.initialDataTransformer) == null ? void 0 : _a.call(config, initialData)) ?? initialData;
      const validationConfig = {
        ...config.validationStrategy,
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
      useValidatePrefilledFields(form.form, initialData);
      config.customHook({ control, setValue, getValues, formState, watch, trigger });
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
      const formSections = useMemo$2(() => sortFormSections(config.sections), []);
      const handlersMap = config.handlersHook(setValue, getValues, { draftId, onSaveDraftForUpload });
      const leftColumn = useMemo$2(
        () => {
          var _a2;
          return (_a2 = config.leftColumnRenderer) == null ? void 0 : _a2.call(config, {
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
          return (_a2 = config.errorDisplayRenderer) == null ? void 0 : _a2.call(config, { errors: form.validationErrors });
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
          layout: config.layout,
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
  netAmountField: "reimbursableAmount",
  totalAmountField: "reimbursableAmount",
  netCurrencyField: "reimbursableAmount",
  totalCurrencyField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
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
const { useCallback: useCallback$3, useRef: useRef$2, useState: useState$2 } = await importShared("react");
function FormPageDialog({
  header,
  footer,
  deleteDialog,
  isLoading,
  onOpenChange,
  renderContent,
  backgroundContent
}) {
  const renderHeader = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Ya, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wa, { className: "text-exp-neutral-900 text-xl font-bold", children: header.title }),
      header.titleSuffix,
      header.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
        "$",
        header.amount
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", "data-testid": "expense-status-badge", children: header.statusBadge })
    ] }),
    header.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: header.subtitle }) })
  ] }) }) }) });
  const renderFooter = () => {
    if (!footer) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ka, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: footer.showDeleteButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          $e,
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { className: "text-sm", children: "Delete draft" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              type: "button",
              variant: "outlined",
              onClick: footer.onSaveDraftClick,
              disabled: footer.saveDraftButtonState.disabled,
              children: footer.isSavingDraft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-5" }),
                "Save Draft"
              ] }) : "Save Draft"
            }
          ) }) }),
          footer.saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: footer.saveDraftButtonState.tooltip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            $e,
            {
              type: "button",
              variant: "primary",
              onClick: footer.onSubmitClick,
              disabled: footer.submitButtonState.disabled,
              children: [
                footer.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                "Submit Expense"
              ]
            }
          ) }) }),
          footer.submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { className: "text-sm", children: footer.submitButtonState.tooltip })
        ] })
      ] })
    ] }) });
  };
  const renderLoadingOrContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-8 text-exp-primary-blue-600" }) });
    }
    return renderContent();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    backgroundContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ws, { open: true, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(qa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      renderHeader(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: renderLoadingOrContent() }),
        renderFooter()
      ] })
    ] }) }),
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
const { useCallback: useCallback$2, useEffect: useEffect$1, useRef: useRef$1, useState: useState$1 } = await importShared("react");
function useDeleteDialog(options = {}) {
  const { onDeleteSuccess } = options;
  const [isOpen, setIsOpen] = useState$1(false);
  const [isDeleteFlowActive, setIsDeleteFlowActive] = useState$1(false);
  const shouldNavigateRef = useRef$1(false);
  useEffect$1(() => {
    return () => {
      shouldNavigateRef.current = false;
    };
  }, []);
  const open = useCallback$2(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback$2(() => {
    setIsOpen(false);
  }, []);
  const handleOpenChange = useCallback$2((isOpen2) => {
    setIsOpen(isOpen2);
  }, []);
  const markForNavigation = useCallback$2(() => {
    shouldNavigateRef.current = true;
    setIsDeleteFlowActive(true);
    setIsOpen(false);
  }, []);
  const handleCloseComplete = useCallback$2(() => {
    if (shouldNavigateRef.current) {
      shouldNavigateRef.current = false;
      onDeleteSuccess == null ? void 0 : onDeleteSuccess();
    }
  }, [onDeleteSuccess]);
  return {
    isOpen,
    isDeleteFlowActive,
    open,
    close,
    handleOpenChange,
    handleCloseComplete,
    markForNavigation
  };
}
var ExpenseItemType = /* @__PURE__ */ ((ExpenseItemType2) => {
  ExpenseItemType2["Expense"] = "expense";
  ExpenseItemType2["MileageTrip"] = "mileage-trip";
  ExpenseItemType2["MileagePeriod"] = "mileage-period";
  return ExpenseItemType2;
})(ExpenseItemType || {});
const { useMemo: useMemo$1 } = await importShared("react");
function getItemTitle(item, mode, isNewItem, effectiveItemType) {
  if (!item) {
    if (isNewItem) {
      if (effectiveItemType === ExpenseItemType.MileageTrip || effectiveItemType === ExpenseItemType.MileagePeriod) {
        return "New Mileage Claim";
      }
      return "New Expense";
    }
    if (effectiveItemType === ExpenseItemType.MileageTrip || effectiveItemType === ExpenseItemType.MileagePeriod) {
      return "Mileage";
    }
    return "Expense";
  }
  if (isRegularExpense(item)) {
    if (mode === "preview") return item.data.vendor || "Expense";
    if (mode === "draft") return item.data.vendor || "Draft Expense";
    return "New Expense";
  }
  if (isMileageExpense(item)) {
    return mode === "preview" || mode === "draft" ? "Mileage" : "New Mileage Claim";
  }
  return effectiveItemType === ExpenseItemType.Expense ? "Expense" : "Mileage";
}
function getTitleSuffix(item) {
  if (!item || !isMileageExpense(item)) return null;
  if (isMileageTripData(item.data)) {
    return item.data.toLocation || null;
  }
  if (isMileagePeriodData(item.data) && item.data.expensePeriod) {
    return formatExpensePeriod(item.data.expensePeriod) || null;
  }
  return null;
}
function getItemAmount(item) {
  if (!item) return void 0;
  if (isRegularExpense(item)) return item.data.totalAmount;
  return void 0;
}
function getHeaderSubtitle(item, mode, itemId) {
  if (!item) return void 0;
  if (mode === "preview" && isExpenseItemSubmitted(item)) {
    return `${item.id} • Submitted on ${formatDate(item.submittedAt)}`;
  }
  if (mode === "draft") {
    return `${itemId} • Created on ${formatDate(item.createdAt)}`;
  }
  return void 0;
}
function useExpenseItemHeader(options) {
  const { expenseItem, mode, isNewItem, itemType, itemId } = options;
  const title = useMemo$1(
    () => getItemTitle(expenseItem, mode, isNewItem, itemType),
    [expenseItem, mode, isNewItem, itemType]
  );
  const titleSuffix = useMemo$1(
    () => getTitleSuffix(expenseItem),
    [expenseItem]
  );
  const amount = useMemo$1(
    () => getItemAmount(expenseItem),
    [expenseItem]
  );
  const subtitle = useMemo$1(
    () => getHeaderSubtitle(expenseItem, mode, itemId),
    [expenseItem, mode, itemId]
  );
  const status = expenseItem == null ? void 0 : expenseItem.status;
  return {
    title,
    titleSuffix,
    amount,
    status,
    subtitle
  };
}
const { useCallback: useCallback$1 } = await importShared("react");
function useExpenseItemMutations(options) {
  const { currentDraftId, itemType, onDeleteSuccess } = options;
  const navigate = useNavigate();
  const { navigateBack } = useNavigateBack();
  const saveExpenseDraftMutation = useSaveExpenseDraft();
  const submitExpenseMutation = useSubmitExpense();
  const deleteExpenseDraftMutation = useDeleteExpenseDraft({
    onSuccess: onDeleteSuccess
  });
  const saveMileageDraftMutation = useSaveMileageDraft();
  const submitMileageMutation = useSubmitMileage();
  const deleteMileageDraftMutation = useDeleteMileageDraft({
    onSuccess: onDeleteSuccess
  });
  const isSavingDraft = saveExpenseDraftMutation.isPending || saveMileageDraftMutation.isPending;
  const isSubmitting = submitExpenseMutation.isPending || submitMileageMutation.isPending;
  const isDeleting = deleteExpenseDraftMutation.isPending || deleteMileageDraftMutation.isPending;
  const draftSaveError = saveExpenseDraftMutation.isError || saveMileageDraftMutation.isError;
  const handleExpenseSubmit = useCallback$1(async (data, options2) => {
    var _a;
    try {
      let draftId = currentDraftId;
      if (!draftId) {
        const { draft } = await saveExpenseDraftMutation.mutateAsync({
          data,
          signal: options2 == null ? void 0 : options2.signal
        });
        draftId = draft.id;
      } else {
        await saveExpenseDraftMutation.mutateAsync({
          data,
          draftId,
          signal: options2 == null ? void 0 : options2.signal
        });
      }
      await submitExpenseMutation.mutateAsync({ draftId });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      navigateBack();
    } catch {
    }
  }, [submitExpenseMutation, saveExpenseDraftMutation, currentDraftId, navigateBack]);
  const handleExpenseSaveDraft = useCallback$1(async (data, options2) => {
    var _a;
    try {
      const { draft } = await saveExpenseDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId,
        signal: options2 == null ? void 0 : options2.signal
      });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      if (draft.id && !currentDraftId) {
        navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), { replace: true });
      }
    } catch {
    }
  }, [saveExpenseDraftMutation, currentDraftId, navigate]);
  const handleExpenseSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveExpenseDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), { replace: true });
    }
    return { draftId: draft.id };
  }, [saveExpenseDraftMutation, currentDraftId, navigate]);
  const handleMileageSubmit = useCallback$1(async (data, options2) => {
    var _a;
    try {
      let draftId = currentDraftId;
      if (!draftId) {
        const { draft } = await saveMileageDraftMutation.mutateAsync({
          data,
          signal: options2 == null ? void 0 : options2.signal
        });
        draftId = draft.id;
      } else {
        await saveMileageDraftMutation.mutateAsync({
          data,
          draftId,
          signal: options2 == null ? void 0 : options2.signal
        });
      }
      await submitMileageMutation.mutateAsync({ draftId });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      navigateBack();
    } catch {
    }
  }, [submitMileageMutation, saveMileageDraftMutation, currentDraftId, navigateBack]);
  const handleMileageSaveDraft = useCallback$1(async (data, options2) => {
    var _a;
    try {
      const { draft } = await saveMileageDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId,
        signal: options2 == null ? void 0 : options2.signal
      });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      if (draft.id && !currentDraftId) {
        const typeParam = data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
        const path = generatePath(RoutePaths.ExpensesId, { id: draft.id });
        navigate(`${path}?type=${typeParam}`, { replace: true });
      }
    } catch {
    }
  }, [saveMileageDraftMutation, currentDraftId, navigate]);
  const handleMileageSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveMileageDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      const typeParam = data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
      const path = generatePath(RoutePaths.ExpensesId, { id: draft.id });
      navigate(`${path}?type=${typeParam}`, { replace: true });
    }
    return { draftId: draft.id };
  }, [saveMileageDraftMutation, currentDraftId, navigate]);
  const handleDeleteConfirm = useCallback$1(() => {
    if (!currentDraftId || !itemType) return;
    if (itemType === ExpenseItemType.Expense) {
      deleteExpenseDraftMutation.mutate({ draftId: currentDraftId });
    } else if (itemType === ExpenseItemType.MileageTrip || itemType === ExpenseItemType.MileagePeriod) {
      deleteMileageDraftMutation.mutate({ draftId: currentDraftId });
    }
  }, [currentDraftId, itemType, deleteExpenseDraftMutation, deleteMileageDraftMutation]);
  return {
    isSavingDraft,
    isSubmitting,
    isDeleting,
    draftSaveError,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload,
    handleDeleteConfirm
  };
}
const { useCallback, useEffect, useMemo, useRef, useState } = await importShared("react");
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
function determineItemType(item) {
  if (!item) return null;
  if (isRegularExpense(item)) return ExpenseItemType.Expense;
  if (isMileageExpense(item)) {
    if (isMileageTripData(item.data)) return ExpenseItemType.MileageTrip;
    if (isMileagePeriodData(item.data)) return ExpenseItemType.MileagePeriod;
  }
  return null;
}
function useUnifiedExpensePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { navigateBack } = useNavigateBack();
  const typeQueryParam = searchParams.get("type");
  const defaultItemType = useMemo(
    () => parseExpenseTypeFromQuery(typeQueryParam),
    [typeQueryParam]
  );
  const formRef = useRef(null);
  const abortControllerRef = useRef(new AbortController());
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const isNewItem = !id || id === "new";
  const [formKey, setFormKey] = useState(() => isNewItem ? "new" : `loading-${id}`);
  const {
    isOpen: isDeleteDialogOpen,
    isDeleteFlowActive,
    open: openDeleteDialog,
    close: closeDeleteDialog,
    handleOpenChange: handleDeleteDialogOpenChangeBase,
    handleCloseComplete: handleDeleteDialogCloseComplete,
    markForNavigation
  } = useDeleteDialog({
    onDeleteSuccess: navigateBack
  });
  const {
    data: expenseItem,
    error: itemError,
    isLoading: isQueryLoading
  } = useExpenseItem(isNewItem ? null : id, { enabled: !isDeleteFlowActive });
  const isLoading = !isNewItem && (isQueryLoading || !expenseItem && !itemError);
  const dataItemType = useMemo(() => determineItemType(expenseItem), [expenseItem]);
  const itemType = isNewItem ? defaultItemType : dataItemType ?? defaultItemType;
  const mode = useMemo(() => {
    if (isNewItem) return "new";
    if (expenseItem && isExpenseItemDraft(expenseItem)) return "draft";
    if (expenseItem && isExpenseItemSubmitted(expenseItem)) return "preview";
    return "new";
  }, [isNewItem, expenseItem]);
  const currentDraftId = isNewItem ? void 0 : id;
  const header = useExpenseItemHeader({
    expenseItem,
    mode,
    isNewItem,
    itemType,
    itemId: id
  });
  const mutations = useExpenseItemMutations({
    currentDraftId,
    itemType,
    onDeleteSuccess: markForNavigation
  });
  const hasError = !isNewItem && !!itemError;
  const { reset: resetUploadStore, updateDraftId } = usePendingUploadStore();
  useEffect(() => {
    if (hasError && !isDeleteFlowActive) {
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [hasError, isDeleteFlowActive, navigate]);
  useEffect(() => {
    return () => {
      const { receipt, supportingFiles } = usePendingUploadStore.getState();
      const receiptBusy = receipt.status === "saving-draft" || receipt.status === "uploading";
      const supportingFilesBusy = supportingFiles.status === "saving-draft" || supportingFiles.status === "uploading";
      if (receiptBusy || supportingFilesBusy) {
        return;
      }
      resetUploadStore();
    };
  }, []);
  useEffect(() => {
    if (currentDraftId) {
      updateDraftId(currentDraftId);
    }
  }, [currentDraftId, updateDraftId]);
  useEffect(() => {
    const { receipt, supportingFiles } = usePendingUploadStore.getState();
    const isUploadBusy = receipt.status === "uploading" || receipt.status === "saving-draft" || supportingFiles.status === "uploading" || supportingFiles.status === "saving-draft";
    if (isUploadBusy) return;
    if (isNewItem) {
      setFormKey("new");
    } else if (expenseItem && isExpenseItemDraft(expenseItem)) {
      setFormKey(`loaded-${id}`);
    }
  }, [isNewItem, expenseItem, id]);
  const handleDeleteDraft = useCallback(() => {
    if (!currentDraftId) return;
    openDeleteDialog();
  }, [currentDraftId, openDeleteDialog]);
  const handleDeleteCancel = useCallback(() => {
    closeDeleteDialog();
  }, [closeDeleteDialog]);
  const handleDeleteDialogOpenChange = useCallback((open) => {
    if (!open && mutations.isDeleting) return;
    handleDeleteDialogOpenChangeBase(open);
  }, [mutations.isDeleting, handleDeleteDialogOpenChangeBase]);
  const queryClient = useQueryClient();
  const handleOpenChange = useCallback((open) => {
    if (!open) {
      abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      resetUploadStore();
      if (currentDraftId) {
        queryClient.removeQueries({ queryKey: queryKeys.expenseItem.detail(currentDraftId) });
      }
      navigateBack();
    }
  }, [navigateBack, resetUploadStore, currentDraftId, queryClient]);
  const handleSaveDraftClick = useCallback((e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.saveDraft();
  }, []);
  const handleSubmitClick = useCallback((e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.submitForm();
  }, []);
  const handleButtonStateChange = useCallback((submitState, draftState) => {
    setSubmitButtonState(submitState);
    setSaveDraftButtonState(draftState);
  }, []);
  const handleExpenseSubmit = useCallback(
    (data) => mutations.handleExpenseSubmit(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleExpenseSaveDraft = useCallback(
    (data) => mutations.handleExpenseSaveDraft(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleMileageSubmit = useCallback(
    (data) => mutations.handleMileageSubmit(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleMileageSaveDraft = useCallback(
    (data) => mutations.handleMileageSaveDraft(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  return {
    formRef,
    formKey,
    isDeleteDialogOpen,
    submitButtonState,
    saveDraftButtonState,
    mode,
    itemType,
    isLoading,
    isNewItem,
    currentDraftId,
    expenseItem,
    title: header.title,
    titleSuffix: header.titleSuffix,
    amount: header.amount,
    status: header.status,
    headerSubtitle: header.subtitle,
    isSavingDraft: mutations.isSavingDraft,
    isSubmitting: mutations.isSubmitting,
    isDeleting: mutations.isDeleting,
    draftSaveError: mutations.draftSaveError,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload: mutations.handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload: mutations.handleMileageSaveDraftForUpload,
    handleDeleteDraft,
    handleDeleteConfirm: mutations.handleDeleteConfirm,
    handleDeleteCancel,
    handleDeleteDialogOpenChange,
    handleDeleteDialogCloseComplete,
    handleOpenChange,
    handleSaveDraftClick,
    handleSubmitClick,
    handleButtonStateChange
  };
}
const UnifiedExpensePage = () => {
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
  const renderTitleSuffix = () => {
    if (!titleSuffix) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Za,
      {
        variant: "light",
        size: "sm",
        maxWidth: 320,
        className: "text-base font-medium text-exp-neutral-900",
        children: titleSuffix
      }
    );
  };
  const renderContent = () => {
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
  };
  const showFooter = mode !== "preview" && (isNewItem || !isLoading);
  const getDeleteDialogDescription = () => {
    if (itemType === "expense") {
      return "Are you sure you want to delete this expense draft? This action cannot be undone.";
    }
    return "Are you sure you want to delete this mileage draft? This action cannot be undone.";
  };
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
      backgroundContent: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {})
    }
  );
};
export {
  UnifiedExpensePage as default
};

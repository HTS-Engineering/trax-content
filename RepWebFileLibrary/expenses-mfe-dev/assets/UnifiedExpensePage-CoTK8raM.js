var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { O as createLucideIcon, T as Ta, a0 as devError, s as Us, a1 as devLog, x as apiClient, $ as $a, ay as za, ah as ln, K as Ka, A as Aa, aj as ms, k as Js, Z as Za, Q as Qa, a6 as es, al as ns, ab as jn, J as Ja, w as _t, i as Ft, U as Ue, f as Dt } from "./configuration-B4FJFUoo.js";
import { E as ExpenseStatusBadge, a as ExpensesList } from "./ExpensesList-B7Qgv1vV.js";
import { x as formatToISODate, ai as useQueryClient, a4 as useCompanyStore, aa as useMutation, Y as queryKeys, b as EXPENSE_ENDPOINTS, ah as useQuery, D as DEFAULT_CURRENCY_CODE, W as parseDateOnlyAsLocal, v as formatRate, o as formatCurrency, t as formatExpensePeriod, p as formatDate, ab as useNavigate, a9 as useLocation, ac as useNavigateBack, z as generatePath, g as RoutePaths, af as useParams, al as useSearchParams } from "./use-scroll-into-view-ref-Bh4xL90y.js";
import { $ as useDefaultCompany, D as isValidFileAttachment, E as ExpenseFormField, a3 as useFormFieldValues, a6 as useMileageRateSync, a9 as useReimbursableAmountSync, W as useAmountAllocationSync, I as mapFormDataToUpdateRequest, H as mapFormDataToCreateRequest, G as mapCostAllocation, T as parseOptionalInt, R as parseOptionalDecimal, w as getMileageTypesFromCache, z as isMileageTripData, t as findActiveSelectedMileageType, l as affidavitSchema, m as basicDetailsSchema, q as createValidationStrategy, p as createDraftSaveChecker, ab as useTaxFieldVisibility, x as isConvertedExpense, aa as useSetDefaultCurrency, e as ExpenseTypeSelect, g as MileagePeriodFormField, S as SupportingFiles, M as MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD, A as isSameCalendarMonth, N as NO_MILEAGE_RATE_FOR_DATE_MESSAGE, F as FormSectionType, r as expenseDetailsSchema, s as expenseJustificationSchema, o as costAllocationSchema, k as additionalCommentsSchema, v as getExpenseBaseAmount, C as CostAllocationHeaderActions, a as CostAllocationSection, i as MileageTripFormField, L as mileageDetailsSchema, O as mileageJustificationSchema, Y as useBaseExpenseForm, ac as useValidatePrefilledFields, X as useAutoSave, a2 as useFormButtonStateSync, a4 as useFormImperativeHandle, B as BaseExpenseFormRenderer, a0 as useExpenseFormHandlers, a1 as useExpenseFormSync, u as fullExpenseValidationStrategy, c as ExpenseFormLeftColumn, a7 as useMileageTripFormHandlers, K as mapMileageTripToDefaultValues, Q as mileageTripValidationStrategy, V as supportingFilesSchema, a5 as useMileagePeriodFormHandlers, J as mapMileagePeriodToDefaultValues, P as mileagePeriodValidationStrategy, y as isMileagePeriodData, f as MileageFormType, a8 as usePendingUploadStore, b as ExpenseFormHistoryLog, d as ExpensePreview, j as MileageTripPreview, h as MileagePeriodPreview } from "./CostAllocationSection-Bi-hCRq-.js";
import { p as useExpenseTypes, d as FormTypeId, I as ItemCategory, l as useCurrencies, u as useCountries, v as useTaxTypesDisplay, n as useDefaultCurrency, T as TaxTypeSearchSelect, q as useFormTypeId, a as ExpenseFormType, j as isRegularExpense, h as isMileageExpense, f as isExpenseItemSubmitted, o as useExpenseItem, i as isExpenseItemDraft } from "./TaxTypeSearchSelect-wtG2lHiK.js";
import { M as MILEAGE_RATES_STALE_TIME, g as fetchEffectiveMileageRate, o as object, s as string, c as boolean, e as custom, a as Controller, d as createDecimalChangeHandler, w as useWatch, v as useMileageRates, p as useEffectiveMileageRate, C as ConfirmDialog } from "./useMileageRates-B2TdNzkc.js";
import { importShared } from "./__federation_fn_import-CDCQK-Sj.js";
import { u as useBusinessPurposes } from "./business-purpose-api-CurjWsfM.js";
import { I as Icon } from "./Icon-qrAJyYZL.js";
import { T as Trash2, S as Send } from "./trash-2-DgvTUCCp.js";
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
const BusinessPurposeSelect = /* @__PURE__ */ __name(({
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
    Ta,
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
}, "BusinessPurposeSelect");
const MileageTypeSelect = /* @__PURE__ */ __name(({
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  placeholder = "Select type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingTypes } = useExpenseTypes(companyId, {
    formTypeIds: [FormTypeId.MILEAGE]
  });
  const activeTypes = (expenseTypes == null ? void 0 : expenseTypes.filter((et) => et.status === "active")) ?? [];
  const isSingleType = activeTypes.length === 1;
  const options = activeTypes.map((et) => ({
    value: et.id,
    label: et.name
  }));
  const isLoading = isLoadingCompany || isLoadingTypes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingTypes ? "Loading mileage types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ta,
    {
      label: "Mileage type",
      placeholder: displayPlaceholder,
      options,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled: disabled || isLoading || !companyId || isSingleType,
      error
    }
  );
}, "MileageTypeSelect");
const DEFAULT_PAYMENT_METHOD = { id: "1" };
const DEFAULT_MILEAGE_VENDOR = "N/A";
const isReceiptValidSimple = /* @__PURE__ */ __name((data) => {
  if (data.isReceiptUnavailable) {
    return true;
  }
  if (!data.receiptAttachment) {
    return false;
  }
  return isValidFileAttachment(data.receiptAttachment);
}, "isReceiptValidSimple");
const mapFullExpenseToDefaultValues = /* @__PURE__ */ __name((initialData) => {
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
}, "mapFullExpenseToDefaultValues");
function computeMileageEffectiveOn(expenseDate, periodFrom) {
  return expenseDate || formatToISODate(periodFrom) || "";
}
__name(computeMileageEffectiveOn, "computeMileageEffectiveOn");
function useMileageFormSync({
  control,
  setValue,
  getValues,
  trigger
}) {
  const { mileageType, expenseDate, expensePeriod, totalDistance, ratePerUnit, reimbursableAmount } = useFormFieldValues(
    control,
    [
      "mileageType",
      "expenseDate",
      "expensePeriod",
      "totalDistance",
      "ratePerUnit",
      "reimbursableAmount"
    ]
  );
  const effectiveOn = computeMileageEffectiveOn(
    expenseDate,
    expensePeriod == null ? void 0 : expensePeriod.from
  );
  useMileageRateSync({
    mileageType: mileageType || "",
    effectiveOn,
    setValue,
    getValues,
    trigger
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
__name(useMileageFormSync, "useMileageFormSync");
const mapToPaymentMethod = /* @__PURE__ */ __name((api) => ({
  id: String(api.id),
  name: api.name,
  currencyCode: api.currencyCode
}), "mapToPaymentMethod");
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
__name(normalizeExpenseDraftResponse, "normalizeExpenseDraftResponse");
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
__name(buildExpenseItemForCache, "buildExpenseItemForCache");
const useSaveExpenseDraft = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ data, draftId, signal }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      const expenseTypes = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.list(company, false) }).flatMap(([, data2]) => data2 ?? []);
      if (draftId) {
        const payload = mapFormDataToUpdateRequest(data, expenseTypes);
        devLog("📤 Update draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT.build({ tenant: company, id: draftId }),
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
          EXPENSE_ENDPOINTS.SAVE_DRAFT.build({ tenant: company }),
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
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(({ draft, response, formData }, variables) => {
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
      Us.success("All changes are saved", {
        duration: 3e3
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      devError("Failed to save expense draft:", error);
      Us.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useSaveExpenseDraft");
const useDeleteExpenseDraft = /* @__PURE__ */ __name((options) => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT.build({ tenant: company, id: draftId }));
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(async (_data, variables) => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      Us.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to delete draft:", error);
      Us.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useDeleteExpenseDraft");
const useSubmitExpense = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.post(EXPENSE_ENDPOINTS.SUBMIT_DRAFT.build({ tenant: company, id: draftId }));
      return { draftId };
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { draftId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Us.success("Expense submitted", {
        duration: 3e3
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to submit expense:", error);
      Us.error("Fail to submit", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useSubmitExpense");
const usePaymentMethods = /* @__PURE__ */ __name(({
  companyShortName,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName ? queryKeys.paymentMethods.list(companyShortName) : queryKeys.paymentMethods.all(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!companyShortName) {
        throw new Error("Company short name is required");
      }
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_PAYMENT_METHODS.build({ tenant: companyShortName })
      );
      return response.data.map(mapToPaymentMethod);
    }, "queryFn"),
    enabled: enabled && !!companyShortName,
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
}, "usePaymentMethods");
function resolveMileageTypeFields(mileageType, expenseTypes) {
  const typeId = parseOptionalInt(mileageType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? FormTypeId.MILEAGE
  };
}
__name(resolveMileageTypeFields, "resolveMileageTypeFields");
function mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId) {
  const { typeId, formTypeId } = resolveMileageTypeFields(data.mileageType, expenseTypes);
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
__name(mapCommonMileageFields, "mapCommonMileageFields");
function mapMileageTripToCreateRequest(data, expenseTypes, effectiveMileageRateId) {
  return {
    ...mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId),
    date: formatToISODate(data.expenseDate),
    fromLocation: data.fromLocation || null,
    toLocation: data.toLocation || null,
    roundTrip: data.isRoundTrip ?? null
  };
}
__name(mapMileageTripToCreateRequest, "mapMileageTripToCreateRequest");
function mapMileagePeriodToCreateRequest(data, expenseTypes, effectiveMileageRateId) {
  var _a, _b;
  return {
    ...mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId),
    periodStart: formatToISODate((_a = data.expensePeriod) == null ? void 0 : _a.from),
    periodEnd: formatToISODate((_b = data.expensePeriod) == null ? void 0 : _b.to)
  };
}
__name(mapMileagePeriodToCreateRequest, "mapMileagePeriodToCreateRequest");
const mapMileageTripToUpdateRequest = mapMileageTripToCreateRequest;
const mapMileagePeriodToUpdateRequest = mapMileagePeriodToCreateRequest;
async function resolveEffectiveMileageRateId(queryClient, companyShortName, expenseTypes, mileageTypeId, effectiveOn) {
  const selectedType = findActiveSelectedMileageType(expenseTypes, mileageTypeId);
  if (!(selectedType == null ? void 0 : selectedType.mileageRateId)) return null;
  if (!effectiveOn) return null;
  const rate = await queryClient.fetchQuery({
    queryKey: queryKeys.mileageRates.effectiveByIdOnDate(
      companyShortName,
      selectedType.mileageRateId,
      effectiveOn
    ),
    queryFn: /* @__PURE__ */ __name(() => fetchEffectiveMileageRate(companyShortName, selectedType.mileageRateId, effectiveOn), "queryFn"),
    staleTime: MILEAGE_RATES_STALE_TIME
  });
  return (rate == null ? void 0 : rate.id) ?? null;
}
__name(resolveEffectiveMileageRateId, "resolveEffectiveMileageRateId");
function resolveFormEffectiveDate(data) {
  var _a;
  const expenseDate = isMileageTripData(data) ? data.expenseDate : void 0;
  const periodFrom = isMileageTripData(data) ? void 0 : (_a = data.expensePeriod) == null ? void 0 : _a.from;
  return computeMileageEffectiveOn(expenseDate, periodFrom);
}
__name(resolveFormEffectiveDate, "resolveFormEffectiveDate");
function normalizeMileageDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
__name(normalizeMileageDraftResponse, "normalizeMileageDraftResponse");
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
__name(buildMileageItemForCache, "buildMileageItemForCache");
const useSaveMileageDraft = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ data, draftId, signal }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      const expenseTypes = getMileageTypesFromCache(queryClient, company);
      const effectiveOn = resolveFormEffectiveDate(data);
      const effectiveMileageRateId = await resolveEffectiveMileageRateId(
        queryClient,
        company,
        expenseTypes,
        data.mileageType,
        effectiveOn
      );
      if (draftId) {
        const payload = isMileageTripData(data) ? mapMileageTripToUpdateRequest(data, expenseTypes, effectiveMileageRateId) : mapMileagePeriodToUpdateRequest(data, expenseTypes, effectiveMileageRateId);
        devLog("📤 Update mileage draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT.build({ tenant: company, id: draftId }),
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
        const payload = isMileageTripData(data) ? mapMileageTripToCreateRequest(data, expenseTypes, effectiveMileageRateId) : mapMileagePeriodToCreateRequest(data, expenseTypes, effectiveMileageRateId);
        devLog("📤 Create mileage draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT.build({ tenant: company }),
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
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(({ draft, response, formData }, variables) => {
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
      Us.success("All changes are saved", {
        duration: 3e3
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      devError("Failed to save mileage draft:", error);
      Us.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useSaveMileageDraft");
const useSubmitMileage = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.post(EXPENSE_ENDPOINTS.SUBMIT_DRAFT.build({ tenant: company, id: draftId }));
      return { draftId };
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { draftId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageTrips.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileagePeriods.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Us.success("Mileage claim submitted", {
        duration: 3e3
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to submit mileage:", error);
      Us.error("Fail to submit", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useSubmitMileage");
const useDeleteMileageDraft = /* @__PURE__ */ __name((options) => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT.build({ tenant: company, id: draftId }));
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(async (_data, variables) => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      Us.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to delete draft:", error);
      Us.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useDeleteMileageDraft");
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
    validateForDraft: /* @__PURE__ */ __name((data) => affidavitExpenseDraftSchema.safeParse(data), "validateForDraft"),
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
    validateForDraft: /* @__PURE__ */ __name((data) => minimalExpenseDraftSchema.safeParse(data), "validateForDraft"),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseLocation"],
      (data) => !!data.receiptAttachment
    )
  }
);
const { useCallback: useCallback$6, useEffect: useEffect$4, useMemo: useMemo$5, useRef: useRef$4 } = await importShared("react");
const TAX_CURRENCY = "CAD";
const ExpenseDetailsSection = /* @__PURE__ */ __name(({
  control,
  setValue,
  trigger,
  disabled = false
}) => {
  const { netCurrency, totalCurrency, expenseLocation, taxAmount, paymentMethod } = useFormFieldValues(control, [
    "netCurrency",
    "totalCurrency",
    "expenseLocation",
    "taxAmount",
    "paymentMethod"
  ]);
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { showTaxFields } = useTaxFieldVisibility(expenseLocation);
  const showConvertedTotal = isConvertedExpense(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code);
  const { data: currencies, isLoading: currenciesLoading } = useCurrencies();
  const { data: countriesResponse, isLoading: countriesLoading } = useCountries();
  const countries = countriesResponse == null ? void 0 : countriesResponse.items;
  const { data: paymentMethods, isLoading: paymentMethodsLoading } = usePaymentMethods({
    companyShortName: (userDefaultCompany == null ? void 0 : userDefaultCompany.shortName) ?? null
  });
  const { data: taxTypes, isLoading: taxTypesLoading } = useTaxTypesDisplay({
    companyShortName: (userDefaultCompany == null ? void 0 : userDefaultCompany.shortName) ?? null,
    enabled: showTaxFields
  });
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const codeToSymbolMap = useMemo$5(() => {
    return new Map(currencies == null ? void 0 : currencies.map((c) => [c.isoCode, c.symbol]));
  }, [currencies]);
  const totalCurrencyDefault = useMemo$5(() => {
    const selectedPm = paymentMethods == null ? void 0 : paymentMethods.find((pm) => pm.id === paymentMethod);
    const code = (selectedPm == null ? void 0 : selectedPm.currencyCode) ?? defaultCurrencyCode;
    const symbol = codeToSymbolMap.get(code) ?? defaultCurrencySymbol;
    return { code, symbol };
  }, [paymentMethods, paymentMethod, codeToSymbolMap, defaultCurrencyCode, defaultCurrencySymbol]);
  const isReferenceDataReady = !currenciesLoading && !countriesLoading && !paymentMethodsLoading;
  const isFormEmpty = !(netCurrency == null ? void 0 : netCurrency.code) && !(totalCurrency == null ? void 0 : totalCurrency.code);
  useSetDefaultCurrency({
    setValue,
    netCurrency: { code: defaultCurrencyCode, symbol: defaultCurrencySymbol },
    totalCurrency: totalCurrencyDefault,
    canSeed: isReferenceDataReady && isFormEmpty
  });
  const prevShowTaxFields = useRef$4(showTaxFields);
  useEffect$4(() => {
    if (prevShowTaxFields.current && !showTaxFields) {
      setValue("taxType", "", { shouldValidate: true, shouldDirty: true });
      setValue("taxAmount", "", { shouldValidate: true, shouldDirty: true });
    }
    prevShowTaxFields.current = showTaxFields;
  }, [showTaxFields, setValue]);
  const searchCountries = useCallback$6(async (query) => {
    const q = query.toLowerCase();
    return (countries ?? []).reduce((acc, option) => {
      if (option.name.toLowerCase().includes(q)) {
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
  }, [countries, codeToSymbolMap, defaultCurrencySymbol]);
  const searchCurrencies = useCallback$6(async (query) => {
    const q = query.toLowerCase();
    return (currencies ?? []).reduce((acc, option) => {
      if (option.isoCode.toLowerCase().includes(q) || option.name.toLowerCase().includes(q)) {
        acc.push({ value: option.isoCode, label: option.name, data: option.symbol });
      }
      return acc;
    }, []);
  }, [currencies]);
  const prevShowConvertedTotal = useRef$4(showConvertedTotal);
  useEffect$4(() => {
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
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
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
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "vendor",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            $a,
            {
              label: "Vendor",
              placeholder: "Enter vendor name",
              ...field,
              value: field.value ?? "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDate",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            za,
            {
              label: "Expense date",
              placeholder: "Select date expense incurred",
              value: field.value ? parseDateOnlyAsLocal(field.value) : void 0,
              onChange: /* @__PURE__ */ __name((date) => field.onChange(date ? formatToISODate(date) : ""), "onChange"),
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              maxDate: /* @__PURE__ */ new Date()
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseLocation",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          const selectedCountry = countries == null ? void 0 : countries.find((country) => country.id.toString() === field.value);
          const currencyIsoCode = (selectedCountry == null ? void 0 : selectedCountry.defaultCurrencyIso) ?? defaultCurrencyCode;
          const currencySymbol = codeToSymbolMap.get(currencyIsoCode) ?? defaultCurrencySymbol;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ln,
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
              onValueChange: /* @__PURE__ */ __name((item) => {
                var _a2, _b;
                field.onChange((item == null ? void 0 : item.value) ?? "");
                setValue("netCurrency", {
                  code: ((_a2 = item == null ? void 0 : item.data) == null ? void 0 : _a2.code) ?? defaultCurrencyCode,
                  symbol: ((_b = item == null ? void 0 : item.data) == null ? void 0 : _b.symbol) ?? defaultCurrencySymbol
                });
              }, "onValueChange"),
              onSearch: searchCountries,
              searchOnFocus: true,
              searchDelay: 300,
              minSearchLength: 0,
              onBlur: field.onBlur,
              clearOnBlur: false,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled: disabled || countriesLoading
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "paymentMethod",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ta,
            {
              label: "Payment method",
              placeholder: "Select payment method",
              options: (paymentMethods == null ? void 0 : paymentMethods.map((pm) => ({
                value: pm.id,
                label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex w-full min-w-0 items-center gap-2", children: [
                  pm.id === DEFAULT_PAYMENT_METHOD.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 shrink-0 text-exp-yellow-y-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 shrink-0 text-trax-neutral-1000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: pm.name })
                ] })
              }))) || [],
              value: field.value,
              onValueChange: /* @__PURE__ */ __name((id) => {
                const selectedPaymentMethod = paymentMethods == null ? void 0 : paymentMethods.find((pm) => pm.id === id);
                const currencyIsoCode = (selectedPaymentMethod == null ? void 0 : selectedPaymentMethod.currencyCode) ?? defaultCurrencyCode;
                const currencySymbol = codeToSymbolMap.get(currencyIsoCode) ?? defaultCurrencySymbol;
                field.onChange(id);
                setValue("totalCurrency", {
                  code: currencyIsoCode,
                  symbol: currencySymbol
                });
              }, "onValueChange"),
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled: disabled || paymentMethodsLoading
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-start-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: showConvertedTotal ? "grid grid-cols-2 gap-x-2" : void 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "netAmount",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ka,
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
                    onValueChange: /* @__PURE__ */ __name((value) => {
                      setValue("netCurrency", { code: (value == null ? void 0 : value.value) ?? defaultCurrencyCode, symbol: (value == null ? void 0 : value.data) ?? defaultCurrencySymbol });
                    }, "onValueChange"),
                    placeholder: "Search currency",
                    buttonLabel: (netCurrency == null ? void 0 : netCurrency.code) ?? defaultCurrencyCode,
                    onSearch: searchCurrencies,
                    renderItem: /* @__PURE__ */ __name((item, highlight, isSelected) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight(item.value) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xxs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(item.label) })
                    ] }), "renderItem"),
                    searchOnFocus: true,
                    minSearchLength: 0,
                    searchDelay: 300,
                    dropdownClassName: "left-0 max-h-48 border-0 rounded-t-none",
                    popoverClassName: "w-[128px]",
                    disabled: disabled || currenciesLoading
                  },
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled: disabled || currenciesLoading
                }
              );
            }, "render")
          }
        ),
        showConvertedTotal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "totalAmount",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ka,
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
            }, "render")
          }
        )
      ] }),
      showTaxFields && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "taxType",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                TaxTypeSearchSelect,
                {
                  label: "Tax type",
                  placeholder: "Select type",
                  value: field.value ? parseInt(field.value, 10) : null,
                  onChange: /* @__PURE__ */ __name((id) => field.onChange(id != null ? id.toString() : ""), "onChange"),
                  onBlur: field.onBlur,
                  taxTypes,
                  renderItem: /* @__PURE__ */ __name((tt, highlight, isSelected) => {
                    const [, ratePart] = tt.displayText.split(" - ");
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight(tt.taxDescription ?? tt.taxCode) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(ratePart ?? "") })
                    ] });
                  }, "renderItem"),
                  searchDelay: 300,
                  tooltipProps: { delayDuration: 300 },
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled: disabled || taxTypesLoading
                }
              );
            }, "render")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "taxAmount",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ka,
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
            }, "render")
          }
        )
      ] })
    ] })
  ] });
}, "ExpenseDetailsSection");
const { useEffect: useEffect$3, useRef: useRef$3 } = await importShared("react");
const ExpenseJustificationSection = /* @__PURE__ */ __name(({
  control,
  setValue,
  disabled = false
}) => {
  const companyShortName = useCompanyStore((state) => {
    var _a;
    return ((_a = state.userDefaultCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const expenseTypeId = useFormFieldValues(control, ["expenseType"]).expenseType;
  const formType = useFormTypeId(expenseTypeId, companyShortName);
  const showPersonsEntertained = formType === ExpenseFormType.ENTERTAINMENT;
  const prevShowPersonsEntertained = useRef$3(showPersonsEntertained);
  useEffect$3(() => {
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
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
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
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDescription",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Aa,
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
        }, "render")
      }
    ),
    showPersonsEntertained && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "personsEntertained",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Aa,
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
        }, "render")
      }
    )
  ] });
}, "ExpenseJustificationSection");
const AdditionalCommentsSection = /* @__PURE__ */ __name(({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "additionalComments",
      control,
      render: /* @__PURE__ */ __name(({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Aa,
        {
          ...field,
          placeholder: "Add any additional comments...",
          rows: 1,
          value: field.value || "",
          disabled
        }
      ), "render")
    }
  ) });
}, "AdditionalCommentsSection");
const { useCallback: useCallback$5 } = await importShared("react");
const SupportingFilesFormSection = /* @__PURE__ */ __name(({
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
  const handleFilesChange = useCallback$5(
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
}, "SupportingFilesFormSection");
const { useMemo: useMemo$4 } = await importShared("react");
const useMileageEffectiveRange = /* @__PURE__ */ __name(({
  companyShortName,
  mileageRateId
}) => {
  const { data, isLoading } = useMileageRates({
    companyShortName,
    mileageRateId,
    enabled: !!companyShortName && !!mileageRateId
  });
  const minEffectiveDate = useMemo$4(() => {
    if (!(data == null ? void 0 : data.length)) return void 0;
    let earliest;
    for (const rate of data) {
      if (!rate.active) continue;
      const localEffectiveDate = parseDateOnlyAsLocal(rate.effectiveDate);
      if (isNaN(localEffectiveDate.getTime())) continue;
      if (!earliest || localEffectiveDate < earliest) earliest = localEffectiveDate;
    }
    return earliest;
  }, [data]);
  return { minEffectiveDate, isLoading };
}, "useMileageEffectiveRange");
const REASON_NOT_YET_ACTIVE = "Mileage type is not yet active at this time";
const REASON_NOT_SAME_MONTH = "Period must fall within one calendar month";
function resolveMileageDisabledReason({
  date,
  minEffectiveDate,
  periodAnchorForMonth
}) {
  if (minEffectiveDate && date < startOfDay(minEffectiveDate)) {
    return REASON_NOT_YET_ACTIVE;
  }
  if (periodAnchorForMonth && !isSameCalendarMonth(date, periodAnchorForMonth)) {
    return REASON_NOT_SAME_MONTH;
  }
  return void 0;
}
__name(resolveMileageDisabledReason, "resolveMileageDisabledReason");
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
__name(startOfDay, "startOfDay");
const { useCallback: useCallback$4, useEffect: useEffect$2, useMemo: useMemo$3 } = await importShared("react");
const MileageDetailsSection = /* @__PURE__ */ __name(({
  control,
  setValue,
  disabled = false,
  mode = "trip"
}) => {
  const isTripMode = mode === "trip";
  const { mileageType, expenseDate, expensePeriod, ratePerUnit, rateUnit, reimbursableAmount, totalCurrency } = useFormFieldValues(control, [
    "mileageType",
    "expenseDate",
    "expensePeriod",
    "ratePerUnit",
    "rateUnit",
    "reimbursableAmount",
    "totalCurrency"
  ]);
  const { isLoading: currenciesLoading } = useCurrencies();
  const { isLoading: countriesLoading } = useCountries();
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
  const setMileageValue = setValue;
  const { company } = useDefaultCompany();
  const companyShortName = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, {
    formTypeIds: [FormTypeId.MILEAGE]
  });
  const activeTypes = useMemo$3(
    () => (expenseTypes == null ? void 0 : expenseTypes.filter((et) => et.status === "active")) ?? [],
    [expenseTypes]
  );
  const selectedType = useMemo$3(
    () => activeTypes.find((et) => et.id === mileageType),
    [activeTypes, mileageType]
  );
  useEffect$2(() => {
    if (mileageType) return;
    if (activeTypes.length !== 1) return;
    setMileageValue("mileageType", activeTypes[0].id, {
      shouldValidate: false,
      shouldDirty: false
    });
  }, [activeTypes, mileageType, setMileageValue]);
  useEffect$2(() => {
    const canSetDefaultCurrency = !currenciesLoading && !countriesLoading && !(totalCurrency == null ? void 0 : totalCurrency.code) && !(totalCurrency == null ? void 0 : totalCurrency.symbol);
    if (!canSetDefaultCurrency) return;
    setMileageValue(
      "totalCurrency",
      { code: defaultCurrencyCode, symbol: defaultCurrencySymbol },
      { shouldValidate: false, shouldDirty: false }
    );
  }, [
    countriesLoading,
    currenciesLoading,
    defaultCurrencyCode,
    defaultCurrencySymbol,
    setMileageValue,
    totalCurrency == null ? void 0 : totalCurrency.code,
    totalCurrency == null ? void 0 : totalCurrency.symbol
  ]);
  const { minEffectiveDate } = useMileageEffectiveRange({
    companyShortName,
    mileageRateId: (selectedType == null ? void 0 : selectedType.mileageRateId) ?? null
  });
  const effectiveOnForDisplay = useMemo$3(
    () => computeMileageEffectiveOn(
      expenseDate,
      expensePeriod == null ? void 0 : expensePeriod.from
    ),
    [expenseDate, expensePeriod]
  );
  const rateQueryEnabled = !!(selectedType == null ? void 0 : selectedType.mileageRateId) && !!effectiveOnForDisplay;
  const { data: effectiveRateData } = useEffectiveMileageRate({
    companyShortName,
    mileageRateId: (selectedType == null ? void 0 : selectedType.mileageRateId) ?? null,
    date: effectiveOnForDisplay,
    enabled: rateQueryEnabled
  });
  const hasConfirmedNoRate = rateQueryEnabled ? effectiveRateData === null : !!effectiveOnForDisplay && !!mileageType;
  const filterTransientNoRateError = useCallback$4(
    (msg) => msg === NO_MILEAGE_RATE_FOR_DATE_MESSAGE && !hasConfirmedNoRate ? void 0 : msg,
    [hasConfirmedNoRate]
  );
  const today = useMemo$3(() => /* @__PURE__ */ new Date(), []);
  const periodFrom = expensePeriod == null ? void 0 : expensePeriod.from;
  const periodTo = expensePeriod == null ? void 0 : expensePeriod.to;
  const periodAnchorForMonth = periodFrom && !periodTo ? periodFrom : void 0;
  const getDisabledReason = useCallback$4(
    (date) => resolveMileageDisabledReason({ date, minEffectiveDate, periodAnchorForMonth }),
    [minEffectiveDate, periodAnchorForMonth]
  );
  const isDateDisabledMatcher = useCallback$4(
    (date) => getDisabledReason(date) !== void 0,
    [getDisabledReason]
  );
  const isDatePickerDisabled = disabled || !mileageType;
  const datePlaceholder = mileageType ? isTripMode ? "Select date mileage incurred" : "Select date range incurred" : "Select mileage type first";
  const clearDateField = useCallback$4(() => {
    if (isTripMode) {
      setMileageValue("expenseDate", "", { shouldValidate: false, shouldDirty: true });
      return;
    }
    setMileageValue(
      "expensePeriod",
      void 0,
      { shouldValidate: false, shouldDirty: true }
    );
  }, [isTripMode, setMileageValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "mileageType",
          control,
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              MileageTypeSelect,
              {
                value: field.value || "",
                onChange: /* @__PURE__ */ __name((next) => {
                  if (next !== field.value && field.value) {
                    clearDateField();
                  }
                  field.onChange(next);
                }, "onChange"),
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }, "render")
        }
      ),
      isTripMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expenseDate",
          control,
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              za,
              {
                mode: "single",
                label: "Expense date",
                placeholder: datePlaceholder,
                value: typeof field.value === "string" && field.value ? parseDateOnlyAsLocal(field.value) : void 0,
                onChange: /* @__PURE__ */ __name((date) => {
                  field.onChange(date ? formatToISODate(date) : "");
                }, "onChange"),
                onBlur: field.onBlur,
                error: filterTransientNoRateError((_a = fieldState.error) == null ? void 0 : _a.message),
                disabled: isDatePickerDisabled,
                numberOfMonths: 1,
                maxDate: today,
                disabledDates: isDateDisabledMatcher,
                getDisabledTooltip: getDisabledReason
              }
            );
          }, "render")
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expensePeriod",
          control,
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              za,
              {
                mode: "range",
                label: "Expense period",
                placeholder: datePlaceholder,
                value: field.value,
                onChange: /* @__PURE__ */ __name((range) => {
                  field.onChange(range);
                }, "onChange"),
                onBlur: field.onBlur,
                error: filterTransientNoRateError((_a = fieldState.error) == null ? void 0 : _a.message),
                disabled: isDatePickerDisabled,
                numberOfMonths: 2,
                maxDate: today,
                disabledDates: isDateDisabledMatcher,
                getDisabledTooltip: getDisabledReason
              }
            );
          }, "render")
        }
      ),
      isTripMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "fromLocation",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                $a,
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
            }, "render")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center absolute top-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "isRoundTrip",
              control,
              render: /* @__PURE__ */ __name(({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ms,
                {
                  label: "Round trip",
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  disabled
                }
              ), "render")
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "toLocation",
              control,
              render: /* @__PURE__ */ __name(({ field, fieldState }) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  $a,
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
              }, "render")
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
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              $a,
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
          }, "render")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $a,
        {
          label: "Rate",
          value: ratePerUnit ? formatRate(ratePerUnit, rateUnit || "-", { currency }) : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $a,
        {
          label: "Reimbursable amount",
          value: formatCurrency(reimbursableAmount || "0", { currency }),
          disabled: true,
          readOnly: true
        }
      )
    ] })
  ] });
}, "MileageDetailsSection");
const MileageJustificationSection = /* @__PURE__ */ __name(({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "businessPurpose",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
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
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDescription",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Aa,
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
        }, "render")
      }
    )
  ] });
}, "MileageJustificationSection");
const EXPENSE_DETAILS_SECTION = {
  id: "expense-details",
  type: FormSectionType.ExpenseDetails,
  title: "EXPENSE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: expenseDetailsSchema,
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseDetailsSection, { ...props }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseJustificationSection, { ...props }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG }), "render"),
  headerActions: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG
    }
  ), "headerActions"),
  isEnabled: /* @__PURE__ */ __name((formValues) => {
    var _a, _b;
    const amount = getExpenseBaseAmount((_a = formValues.netCurrency) == null ? void 0 : _a.code, (_b = formValues.totalCurrency) == null ? void 0 : _b.code, formValues.netAmount, formValues.totalAmount);
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || amount > 0;
  }, "isEnabled"),
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "trip" }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props }), "render")
};
const MILEAGE_COST_ALLOCATION_FIELD_CONFIG = {
  netAmountField: "reimbursableAmount",
  totalAmountField: "reimbursableAmount",
  netCurrencyField: "totalCurrency",
  totalCurrencyField: "totalCurrency",
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG }), "render"),
  headerActions: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG
    }
  ), "headerActions"),
  isEnabled: /* @__PURE__ */ __name((formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  }, "isEnabled"),
  dependsOn: [
    MileageTripFormField.ReimbursableAmount,
    MileageTripFormField.CostAllocations,
    MileageTripFormField.IsEqualSplit,
    MileageTripFormField.DeferToApprover,
    MileageTripFormField.TotalCurrency
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props }), "render")
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
__name(sortFormSections, "sortFormSections");
const { forwardRef, useMemo: useMemo$2 } = await importShared("react");
const createExpenseForm = /* @__PURE__ */ __name((config) => {
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
        getFormValues: /* @__PURE__ */ __name(() => form.getValues(), "getFormValues")
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
}, "createExpenseForm");
const ExpenseForm = createExpenseForm({
  validationStrategy: fullExpenseValidationStrategy,
  sections: FULL_EXPENSE_SECTIONS_CONFIG,
  layout: "two-column",
  initialDataTransformer: mapFullExpenseToDefaultValues,
  leftColumnRenderer: /* @__PURE__ */ __name((params) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormLeftColumn, { ...params }), "leftColumnRenderer"),
  // A placeholder for error displaying in a form
  errorDisplayRenderer: /* @__PURE__ */ __name(({ errors }) => {
    devLog("Form validation errors:", errors);
    return null;
  }, "errorDisplayRenderer"),
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
  errorDisplayRenderer: /* @__PURE__ */ __name(({ errors }) => {
    devLog(errors);
    return null;
  }, "errorDisplayRenderer"),
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "period" }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props }), "render")
};
const MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG = {
  netAmountField: "reimbursableAmount",
  totalAmountField: "reimbursableAmount",
  netCurrencyField: "totalCurrency",
  totalCurrencyField: "totalCurrency",
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG }), "render"),
  headerActions: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG
    }
  ), "headerActions"),
  isEnabled: /* @__PURE__ */ __name((formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  }, "isEnabled"),
  dependsOn: [
    MileagePeriodFormField.ReimbursableAmount,
    MileagePeriodFormField.CostAllocations,
    MileagePeriodFormField.IsEqualSplit,
    MileagePeriodFormField.DeferToApprover,
    MileagePeriodFormField.TotalCurrency
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(SupportingFilesFormSection, { ...props }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props }), "render")
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
  errorDisplayRenderer: /* @__PURE__ */ __name(({ errors }) => {
    devLog(errors);
    return null;
  }, "errorDisplayRenderer"),
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
  const renderHeader = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx(Qa, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(es, { className: "text-exp-neutral-900 text-xl font-bold flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ns, { variant: "light", size: "sm", maxWidth: 320, className: "text-exp-neutral-900 text-xl font-bold", children: header.title }) }),
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: footer.showDeleteButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(_t, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ft, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dt, { className: "text-sm", children: "Delete draft" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(_t, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ft, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              type: "button",
              variant: "outlined",
              onClick: footer.onSaveDraftClick,
              disabled: footer.saveDraftButtonState.disabled,
              children: footer.isSavingDraft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(jn, { className: "size-5" }),
                "Save Draft"
              ] }) : "Save Draft"
            }
          ) }) }),
          footer.saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Dt, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: footer.saveDraftButtonState.tooltip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(_t, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ft, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Ue,
            {
              type: "button",
              variant: "primary",
              onClick: footer.onSubmitClick,
              disabled: footer.submitButtonState.disabled,
              children: [
                footer.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(jn, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                "Submit Expense"
              ]
            }
          ) }) }),
          footer.submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Dt, { className: "text-sm", children: footer.submitButtonState.tooltip })
        ] })
      ] })
    ] }) });
  }, "renderFooter");
  const renderLoadingOrContent = /* @__PURE__ */ __name(() => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(jn, { className: "size-8 text-exp-primary-blue-600" }) });
    }
    return renderContent();
  }, "renderLoadingOrContent");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    backgroundContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Js, { open: true, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Za,
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
__name(useDeleteDialog, "useDeleteDialog");
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
__name(getItemTitle, "getItemTitle");
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
__name(getTitleSuffix, "getTitleSuffix");
function getItemAmount(item) {
  if (!item) return void 0;
  if (isRegularExpense(item)) return item.data.totalAmount;
  return void 0;
}
__name(getItemAmount, "getItemAmount");
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
__name(getHeaderSubtitle, "getHeaderSubtitle");
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
__name(useExpenseItemHeader, "useExpenseItemHeader");
const { useCallback: useCallback$1 } = await importShared("react");
function useExpenseItemMutations(options) {
  const { currentDraftId, itemType, onDeleteSuccess } = options;
  const navigate = useNavigate();
  const location = useLocation();
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
        navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), {
          replace: true,
          state: location.state
        });
      }
    } catch {
    }
  }, [saveExpenseDraftMutation, currentDraftId, navigate, location.state]);
  const handleExpenseSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveExpenseDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), {
        replace: true,
        state: location.state
      });
    }
    return { draftId: draft.id };
  }, [saveExpenseDraftMutation, currentDraftId, navigate, location.state]);
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
        navigate(`${path}?type=${typeParam}`, { replace: true, state: location.state });
      }
    } catch {
    }
  }, [saveMileageDraftMutation, currentDraftId, navigate, location.state]);
  const handleMileageSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveMileageDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      const typeParam = data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
      const path = generatePath(RoutePaths.ExpensesId, { id: draft.id });
      navigate(`${path}?type=${typeParam}`, { replace: true, state: location.state });
    }
    return { draftId: draft.id };
  }, [saveMileageDraftMutation, currentDraftId, navigate, location.state]);
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
__name(useExpenseItemMutations, "useExpenseItemMutations");
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
__name(parseExpenseTypeFromQuery, "parseExpenseTypeFromQuery");
function determineItemType(item) {
  if (!item) return null;
  if (isRegularExpense(item)) return ExpenseItemType.Expense;
  if (isMileageExpense(item)) {
    if (isMileageTripData(item.data)) return ExpenseItemType.MileageTrip;
    if (isMileagePeriodData(item.data)) return ExpenseItemType.MileagePeriod;
  }
  return null;
}
__name(determineItemType, "determineItemType");
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
      ns,
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
      backgroundContent: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {})
    }
  );
}, "UnifiedExpensePage");
export {
  UnifiedExpensePage as default
};

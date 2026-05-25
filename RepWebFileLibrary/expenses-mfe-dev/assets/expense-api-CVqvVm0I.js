var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-B1oJrOwd.js";
import { s as formatToISODate, t as parseDateOnlyAsLocal, F as FILE_ENDPOINTS, D as DEFAULT_CURRENCY_CODE, G as getCurrencySymbol, j as useQuery, m as useQueryClient, q as queryKeys, e as useCompanyStore, E as EXPENSE_ENDPOINTS, n as useMutation } from "./date-format-Dkqd_MkG.js";
import { C as create, D as devtools, ai as subscribeWithSelector, aj as immer, b as apiClient, a0 as CONFIGURATION_ENDPOINTS, F as devWarn } from "./configuration-D11IOZL_.js";
var ExpenseFormType = /* @__PURE__ */ ((ExpenseFormType2) => {
  ExpenseFormType2["STANDARD"] = "standard";
  ExpenseFormType2["ENTERTAINMENT"] = "entertainment";
  ExpenseFormType2["MILEAGE"] = "mileage";
  return ExpenseFormType2;
})(ExpenseFormType || {});
var FormTypeId = /* @__PURE__ */ ((FormTypeId2) => {
  FormTypeId2[FormTypeId2["STANDARD"] = 1] = "STANDARD";
  FormTypeId2[FormTypeId2["MILEAGE"] = 2] = "MILEAGE";
  FormTypeId2[FormTypeId2["ENTERTAINMENT"] = 3] = "ENTERTAINMENT";
  return FormTypeId2;
})(FormTypeId || {});
var MileageRateStatus = /* @__PURE__ */ ((MileageRateStatus2) => {
  MileageRateStatus2["FUTURE"] = "Future";
  MileageRateStatus2["CURRENT"] = "Current";
  MileageRateStatus2["PAST"] = "Past";
  MileageRateStatus2["INACTIVE"] = "Inactive";
  return MileageRateStatus2;
})(MileageRateStatus || {});
var ExpenseTypeScope = /* @__PURE__ */ ((ExpenseTypeScope2) => {
  ExpenseTypeScope2["USER"] = "user";
  ExpenseTypeScope2["COMPANY"] = "company";
  return ExpenseTypeScope2;
})(ExpenseTypeScope || {});
var ECostAllocation = /* @__PURE__ */ ((ECostAllocation2) => {
  ECostAllocation2["Project"] = "project";
  ECostAllocation2["Admin"] = "admin";
  ECostAllocation2["Team"] = "team";
  ECostAllocation2["Rep"] = "rep";
  return ECostAllocation2;
})(ECostAllocation || {});
var AllowedMimeType = /* @__PURE__ */ ((AllowedMimeType2) => {
  AllowedMimeType2["PNG"] = "image/png";
  AllowedMimeType2["JPEG"] = "image/jpeg";
  AllowedMimeType2["JPG"] = "image/jpg";
  AllowedMimeType2["WEBP"] = "image/webp";
  AllowedMimeType2["HEIC"] = "image/heic";
  AllowedMimeType2["HEIF"] = "image/heif";
  AllowedMimeType2["PDF"] = "application/pdf";
  return AllowedMimeType2;
})(AllowedMimeType || {});
var ItemCategory = /* @__PURE__ */ ((ItemCategory2) => {
  ItemCategory2["Expense"] = "expense";
  ItemCategory2["Mileage"] = "mileage";
  return ItemCategory2;
})(ItemCategory || {});
function isRegularExpense(item) {
  return item.itemType === "expense";
}
__name(isRegularExpense, "isRegularExpense");
function isMileageExpense(item) {
  return item.itemType === "mileage";
}
__name(isMileageExpense, "isMileageExpense");
function isExpenseItemDraft(item) {
  return item.status === "draft";
}
__name(isExpenseItemDraft, "isExpenseItemDraft");
function isExpenseItemSubmitted(item) {
  return item.status !== "draft";
}
__name(isExpenseItemSubmitted, "isExpenseItemSubmitted");
function getExpenseItemAmount(item) {
  if (isRegularExpense(item)) {
    return item.data.totalAmount;
  }
  return item.data.reimbursableAmount;
}
__name(getExpenseItemAmount, "getExpenseItemAmount");
var FilePreviewType = /* @__PURE__ */ ((FilePreviewType2) => {
  FilePreviewType2["IMAGE"] = "image";
  FilePreviewType2["PDF"] = "pdf";
  FilePreviewType2["UNKNOWN"] = "unknown";
  return FilePreviewType2;
})(FilePreviewType || {});
const FILE_SIZE_LIMITS = {
  IMAGE_MAX_SIZE_MB: 25,
  PDF_MAX_SIZE_MB: 50,
  IMAGE_MAX_SIZE_BYTES: 25 * 1024 * 1024,
  PDF_MAX_SIZE_BYTES: 50 * 1024 * 1024
};
const MIME_TYPE_CONFIG = /* @__PURE__ */ new Map([
  [AllowedMimeType.PNG, {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "PNG"
  }],
  [AllowedMimeType.JPEG, {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "JPEG"
  }],
  [AllowedMimeType.JPG, {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "JPG"
  }],
  [AllowedMimeType.WEBP, {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "WebP"
  }],
  [AllowedMimeType.HEIC, {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "HEIC"
  }],
  [AllowedMimeType.HEIF, {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "HEIF"
  }],
  [AllowedMimeType.PDF, {
    type: "pdf",
    maxSizeBytes: FILE_SIZE_LIMITS.PDF_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB,
    displayName: "PDF"
  }]
]);
function stringifyEntityId(id) {
  return id ? String(id) : "";
}
__name(stringifyEntityId, "stringifyEntityId");
function inferFormTypeId(expenseTypeId, expenseTypes) {
  var _a;
  if (expenseTypeId == null) return null;
  return ((_a = expenseTypes.find((et) => parseInt(et.id, 10) === expenseTypeId)) == null ? void 0 : _a.formTypeId) ?? null;
}
__name(inferFormTypeId, "inferFormTypeId");
function inferTotalCurrencyCode(response) {
  var _a, _b;
  return ((_a = response.paymentMethod) == null ? void 0 : _a.currencyCode) ?? ((_b = response.country) == null ? void 0 : _b.defaultCurrencyIso) ?? DEFAULT_CURRENCY_CODE;
}
__name(inferTotalCurrencyCode, "inferTotalCurrencyCode");
function resolveRateUnit(expenseTypeId, expenseTypes) {
  if (expenseTypeId == null) return "km";
  const found = expenseTypes.find(
    (et) => parseInt(et.id, 10) === expenseTypeId
  );
  return (found == null ? void 0 : found.unitOfMeasurement) === "mile" ? "mi" : "km";
}
__name(resolveRateUnit, "resolveRateUnit");
function mapFileMetadataToAttachment(file) {
  var _a;
  return {
    id: file.id,
    url: FILE_ENDPOINTS.DOWNLOAD.build({ fileId: file.id }),
    filename: file.name,
    originalName: file.name,
    size: file.size,
    type: ((_a = file.mimeType) == null ? void 0 : _a.split("/")[1]) || "unknown",
    mimeType: file.mimeType ?? "",
    uploadedAt: file.uploadedAt,
    status: "uploaded"
  };
}
__name(mapFileMetadataToAttachment, "mapFileMetadataToAttachment");
const BE_TYPE_TO_FE = {
  [
    "project"
    /* Project */
  ]: ECostAllocation.Project,
  [
    "admin"
    /* Admin */
  ]: ECostAllocation.Admin,
  [
    "ccb_team"
    /* CcbTeam */
  ]: ECostAllocation.Team,
  [
    "ccb_rep"
    /* CcbRep */
  ]: ECostAllocation.Rep
};
function mapPOToProjectEntity(po) {
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
__name(mapPOToProjectEntity, "mapPOToProjectEntity");
function mapPOToAdminEntity(po) {
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
__name(mapPOToAdminEntity, "mapPOToAdminEntity");
function mapCostAllocationDetail(detail) {
  const type = BE_TYPE_TO_FE[detail.type] ?? ECostAllocation.Project;
  switch (type) {
    case ECostAllocation.Project: {
      const entity = detail.project ? mapPOToProjectEntity(detail.project) : void 0;
      return {
        id: crypto.randomUUID(),
        type,
        amount: Number(detail.amount),
        percentage: Number(detail.percentage),
        name: entity ? `${entity.poNumber} ${entity.supplier}` : "",
        entityData: entity
      };
    }
    case ECostAllocation.Admin: {
      const entity = detail.admin ? mapPOToAdminEntity(detail.admin) : void 0;
      return {
        id: crypto.randomUUID(),
        type,
        amount: Number(detail.amount),
        percentage: Number(detail.percentage),
        name: entity ? `${entity.poNumber} ${entity.supplier}` : "",
        entityData: entity
      };
    }
    case ECostAllocation.Team: {
      const entity = detail.ccbTeam ? {
        id: String(detail.ccbTeam.id),
        number: detail.ccbTeam.baseId,
        description: detail.ccbTeam.description
      } : void 0;
      return {
        id: crypto.randomUUID(),
        type,
        amount: Number(detail.amount),
        percentage: Number(detail.percentage),
        name: entity ? `${entity.number} ${entity.description}` : "",
        entityData: entity
      };
    }
    case ECostAllocation.Rep: {
      const entity = detail.ccbRep ? { id: detail.ccbRep.userGuid, name: detail.ccbRep.fullName } : void 0;
      return {
        id: crypto.randomUUID(),
        type,
        amount: Number(detail.amount),
        percentage: Number(detail.percentage),
        name: (entity == null ? void 0 : entity.name) ?? "",
        entityData: entity
      };
    }
  }
}
__name(mapCostAllocationDetail, "mapCostAllocationDetail");
function resolveCurrencySymbol(code, currencies) {
  var _a;
  return ((_a = currencies.find((c) => c.isoCode === code)) == null ? void 0 : _a.symbol) ?? getCurrencySymbol(code);
}
__name(resolveCurrencySymbol, "resolveCurrencySymbol");
function buildCurrencyInfo(response, currencies) {
  const totalCode = response.totalCurrencyCode ?? inferTotalCurrencyCode(response);
  const totalCurrency = {
    code: totalCode,
    symbol: resolveCurrencySymbol(totalCode, currencies)
  };
  const foreignCode = response.foreignCurrencyCode;
  const isDifferentCurrency = !!foreignCode && foreignCode !== totalCode;
  const netCurrency = isDifferentCurrency ? { code: foreignCode, symbol: resolveCurrencySymbol(foreignCode, currencies) } : void 0;
  return { totalCurrency, netCurrency };
}
__name(buildCurrencyInfo, "buildCurrencyInfo");
function buildAffidavitInfo(response, receiptFile) {
  const hasAffidavit = !!(response.affidavitJustification || response.affidavitInitials);
  return {
    affidavit: hasAffidavit ? {
      justification: response.affidavitJustification ?? "",
      digitalSignature: response.affidavitInitials ?? ""
    } : null,
    isReceiptUnavailable: hasAffidavit && !receiptFile
  };
}
__name(buildAffidavitInfo, "buildAffidavitInfo");
function inferEqualSplit(allocations) {
  if (allocations.length <= 1) return true;
  const first = Number(allocations[0].percentage);
  return allocations.every((a) => Number(a.percentage) === first);
}
__name(inferEqualSplit, "inferEqualSplit");
function mapToExpenseFormData(response, isDraft, context) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const files = response.files ?? [];
  const receiptFile = files.find(
    (f) => f.documentType === "receipt"
  );
  const supportingFiles = files.filter(
    (f) => f.documentType === "supporting"
  );
  const { totalCurrency, netCurrency } = buildCurrencyInfo(response, context.currencies ?? []);
  const { affidavit, isReceiptUnavailable } = buildAffidavitInfo(
    response,
    receiptFile
  );
  return {
    // Dual mode: IDs for draft (form selects), display names for preview
    expenseType: isDraft ? stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    paymentMethod: isDraft ? stringifyEntityId((_a = response.paymentMethod) == null ? void 0 : _a.id) : ((_b = response.paymentMethod) == null ? void 0 : _b.name) ?? "",
    expenseLocation: isDraft ? stringifyEntityId((_c = response.country) == null ? void 0 : _c.id) : ((_d = response.country) == null ? void 0 : _d.name) ?? "",
    businessPurpose: isDraft ? stringifyEntityId(response.businessPurposeId) : response.businessPurpose ?? "",
    // Same for both modes
    vendor: response.vendor ?? "",
    expenseDate: formatToISODate(response.expenseDate) ?? "",
    // foreignAmount = receipt total in foreign currency; fallback to totalAmount for non-foreign expenses
    netAmount: ((_e = response.foreignAmount) == null ? void 0 : _e.toString()) ?? ((_f = response.totalAmount) == null ? void 0 : _f.toString()) ?? "",
    totalAmount: ((_g = response.totalAmount) == null ? void 0 : _g.toString()) ?? "",
    taxType: response.taxTypeId != null ? String(response.taxTypeId) : void 0,
    taxAmount: ((_h = response.taxAmount) == null ? void 0 : _h.toString()) ?? void 0,
    expenseDescription: response.description ?? "",
    personsEntertained: response.personsEntertained ?? void 0,
    additionalComments: response.additionalComments ?? void 0,
    receiptAttachment: receiptFile ? mapFileMetadataToAttachment(receiptFile) : null,
    supportingFiles: supportingFiles.map(mapFileMetadataToAttachment),
    isReceiptUnavailable,
    affidavit,
    netCurrency,
    totalCurrency,
    costAllocations: (response.costAllocations ?? []).map(mapCostAllocationDetail),
    isEqualSplit: inferEqualSplit(response.costAllocations ?? []),
    deferToApprover: response.costAllocationDeferral ?? false
  };
}
__name(mapToExpenseFormData, "mapToExpenseFormData");
function mapToMileageTripFormData(response, isDraft, context) {
  var _a, _b, _c;
  const { totalCurrency } = buildCurrencyInfo(response, context.currencies ?? []);
  return {
    formType: "trip",
    mileageType: isDraft ? stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    expenseDate: formatToISODate(response.expenseDate) ?? "",
    fromLocation: response.from ?? "",
    toLocation: response.to ?? "",
    isRoundTrip: response.roundTrip ?? false,
    totalDistance: ((_a = response.totalDistance) == null ? void 0 : _a.toString()) ?? "",
    ratePerUnit: ((_b = response.effectiveRate) == null ? void 0 : _b.toString()) ?? "",
    rateUnit: resolveRateUnit(response.expenseTypeId, context.expenseTypes),
    reimbursableAmount: ((_c = response.totalAmount) == null ? void 0 : _c.toString()) ?? "",
    businessPurpose: isDraft ? stringifyEntityId(response.businessPurposeId) : response.businessPurpose ?? "",
    expenseDescription: response.description ?? "",
    costAllocations: (response.costAllocations ?? []).map(mapCostAllocationDetail),
    isEqualSplit: inferEqualSplit(response.costAllocations ?? []),
    deferToApprover: response.costAllocationDeferral ?? false,
    additionalComments: response.additionalComments ?? void 0,
    totalCurrency
  };
}
__name(mapToMileageTripFormData, "mapToMileageTripFormData");
function mapToMileagePeriodFormData(response, isDraft, context) {
  var _a, _b, _c;
  const supportingFiles = (response.files ?? []).filter((f) => f.documentType === "supporting").map(mapFileMetadataToAttachment);
  const { totalCurrency } = buildCurrencyInfo(response, context.currencies ?? []);
  return {
    formType: "period",
    mileageType: isDraft ? stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    // Fallback to today for non-period expenses where these fields are null
    expensePeriod: {
      from: response.periodStart ? parseDateOnlyAsLocal(response.periodStart) : /* @__PURE__ */ new Date(),
      to: response.periodEnd ? parseDateOnlyAsLocal(response.periodEnd) : /* @__PURE__ */ new Date()
    },
    totalDistance: ((_a = response.totalDistance) == null ? void 0 : _a.toString()) ?? "",
    ratePerUnit: ((_b = response.effectiveRate) == null ? void 0 : _b.toString()) ?? "",
    rateUnit: resolveRateUnit(response.expenseTypeId, context.expenseTypes),
    reimbursableAmount: ((_c = response.totalAmount) == null ? void 0 : _c.toString()) ?? "",
    businessPurpose: isDraft ? stringifyEntityId(response.businessPurposeId) : response.businessPurpose ?? "",
    expenseDescription: response.description ?? "",
    supportingFiles,
    costAllocations: (response.costAllocations ?? []).map(mapCostAllocationDetail),
    isEqualSplit: inferEqualSplit(response.costAllocations ?? []),
    deferToApprover: response.costAllocationDeferral ?? false,
    additionalComments: response.additionalComments ?? void 0,
    totalCurrency
  };
}
__name(mapToMileagePeriodFormData, "mapToMileagePeriodFormData");
function buildBaseFields(response) {
  return {
    id: String(response.expenseId),
    createdAt: response.createdDate ?? "",
    updatedAt: response.updatedDate ?? response.createdDate ?? "",
    userId: response.createdBy ?? "",
    ...response.businessId && { businessId: response.businessId },
    ...response.employeeFullName && { employeeFullName: response.employeeFullName }
  };
}
__name(buildBaseFields, "buildBaseFields");
function mapSingleExpenseFormToExpenseItem(response, context) {
  var _a, _b;
  const isDraft = ((_a = response.status) == null ? void 0 : _a.toLowerCase()) === "draft";
  const submittedStatus = ((_b = response.status) == null ? void 0 : _b.toLowerCase()) ?? "submitted";
  const base = buildBaseFields(response);
  const formTypeId = response.formTypeId ?? inferFormTypeId(response.expenseTypeId, context.expenseTypes);
  const isMileage = formTypeId === FormTypeId.MILEAGE;
  if (isMileage) {
    const isPeriod = !!(response.periodStart || response.periodEnd);
    const isTrip = !isPeriod;
    if (isTrip) {
      const data3 = mapToMileageTripFormData(response, isDraft, context);
      if (isDraft) {
        return { ...base, itemType: ItemCategory.Mileage, status: "draft", data: data3 };
      }
      return {
        ...base,
        itemType: ItemCategory.Mileage,
        status: submittedStatus,
        data: data3,
        submittedAt: response.updatedDate ?? ""
      };
    }
    const data2 = mapToMileagePeriodFormData(response, isDraft, context);
    if (isDraft) {
      return { ...base, itemType: ItemCategory.Mileage, status: "draft", data: data2 };
    }
    return {
      ...base,
      itemType: ItemCategory.Mileage,
      status: submittedStatus,
      data: data2,
      submittedAt: response.updatedDate ?? ""
    };
  }
  const data = mapToExpenseFormData(response, isDraft, context);
  if (isDraft) {
    return { ...base, itemType: ItemCategory.Expense, status: "draft", data };
  }
  return {
    ...base,
    itemType: ItemCategory.Expense,
    status: submittedStatus,
    data,
    submittedAt: response.updatedDate ?? ""
  };
}
__name(mapSingleExpenseFormToExpenseItem, "mapSingleExpenseFormToExpenseItem");
const initialState = {
  userDefaultCountryIso: null
};
const useCountryStore = create()(
  devtools(
    subscribeWithSelector(
      immer((set) => ({
        ...initialState,
        setUserDefaultCountryIso: /* @__PURE__ */ __name((country) => set((state) => {
          state.userDefaultCountryIso = country;
        }), "setUserDefaultCountryIso"),
        reset: /* @__PURE__ */ __name(() => set(() => initialState), "reset")
      }))
    ),
    {
      name: "country-storage"
    }
  )
);
const { useEffect } = await importShared("react");
const mapBackendToFrontend = /* @__PURE__ */ __name((backend, queryClient) => {
  var _a;
  const mileageEffectiveRate = backend.mileageEffectiveRate ? {
    id: backend.mileageEffectiveRate.id,
    rate: backend.mileageEffectiveRate.rate,
    effectiveDate: backend.mileageEffectiveRate.effectiveDate,
    expiryDate: backend.mileageEffectiveRate.expiryDate
  } : void 0;
  return {
    id: backend.id.toString(),
    name: backend.expenseTypeName,
    description: backend.expenseTypeDescription || "",
    formType: getFormTypeEnum(backend.formTypeId, queryClient),
    formTypeId: backend.formTypeId,
    status: backend.isActive ? "active" : "inactive",
    mileage: ((_a = backend.mileageEffectiveRate) == null ? void 0 : _a.rate) ?? void 0,
    unitOfMeasurement: backend.unitOfMeasurement ?? void 0,
    taxTypeId: backend.taxTypeId,
    mileageRateId: backend.mileageRateId ?? void 0,
    mileageEffectiveRate,
    isDefault: backend.isDefault ?? void 0,
    assignedEmployeeCount: backend.assignedEmployeeCount ?? 0,
    created: new Date(backend.createdDate),
    modified: backend.updatedDate ? new Date(backend.updatedDate) : new Date(backend.createdDate),
    // Legacy fields for compatibility
    type: backend.expenseTypeName,
    updated: backend.updatedDate ? new Date(backend.updatedDate) : new Date(backend.createdDate)
  };
}, "mapBackendToFrontend");
const mapFrontendToBackendCreate = /* @__PURE__ */ __name((frontend, queryClient) => {
  const isMileage = frontend.formType === ExpenseFormType.MILEAGE;
  return {
    formTypeId: getFormTypeId(frontend.formType || "standard", queryClient),
    expenseTypeName: frontend.name || "",
    expenseTypeDescription: frontend.description || "",
    mileageRate: isMileage ? frontend.mileage ?? null : null,
    unitOfMeasurementId: isMileage ? frontend.unitOfMeasurementId ?? null : null,
    taxTypeId: isMileage ? frontend.taxTypeId ?? null : null,
    effectiveDate: isMileage && frontend.effectiveFrom ? `${frontend.effectiveFrom.getFullYear()}/${String(frontend.effectiveFrom.getMonth() + 1).padStart(2, "0")}` : null
  };
}, "mapFrontendToBackendCreate");
const mapFrontendToBackendUpdate = /* @__PURE__ */ __name((id, frontend) => {
  var _a;
  const update = {
    id: parseInt(id)
  };
  if ("name" in frontend) {
    update.expenseTypeName = frontend.name || null;
  }
  if ("description" in frontend) {
    update.expenseTypeDescription = ((_a = frontend.description) == null ? void 0 : _a.trim()) ?? " ";
  }
  if ("status" in frontend) {
    update.isActive = frontend.status === "active";
  }
  return update;
}, "mapFrontendToBackendUpdate");
const getFormTypeId = /* @__PURE__ */ __name((formType, queryClient) => {
  var _a;
  const formTypes = queryClient.getQueryData(queryKeys.formTypes.list());
  if (!formTypes || formTypes.length === 0) {
    devWarn("Form types not loaded, falling back to defaults");
    return 1;
  }
  const normalizedType = typeof formType === "string" ? formType.toLowerCase() : formType;
  const formTypeNameMap = {
    "standard": "Standard",
    "mileage": "Mileage",
    "entertainment": "Entertainment"
  };
  const targetName = formTypeNameMap[normalizedType];
  const foundFormType = formTypes.find((ft) => ft.formTypeName === targetName);
  if (!foundFormType) {
    devWarn(`Form type "${targetName}" not found in backend data`);
    return ((_a = formTypes[0]) == null ? void 0 : _a.id) || FormTypeId.STANDARD;
  }
  return foundFormType.id;
}, "getFormTypeId");
const getFormTypeEnum = /* @__PURE__ */ __name((formTypeId, queryClient) => {
  const formTypes = queryClient.getQueryData(queryKeys.formTypes.list());
  if (!formTypes || formTypes.length === 0) {
    devWarn("Form types not loaded, falling back to defaults");
    return ExpenseFormType.STANDARD;
  }
  const foundFormType = formTypes.find((ft) => ft.id === formTypeId);
  if (!foundFormType) {
    devWarn(`Form type ID ${formTypeId} not found in backend data`);
    return ExpenseFormType.STANDARD;
  }
  const nameToEnumMap = {
    "Standard": ExpenseFormType.STANDARD,
    "Mileage": ExpenseFormType.MILEAGE,
    "Entertainment": ExpenseFormType.ENTERTAINMENT
  };
  return nameToEnumMap[foundFormType.formTypeName] || ExpenseFormType.STANDARD;
}, "getFormTypeEnum");
const useExpenseTypes = /* @__PURE__ */ __name((companyShortName, optionsOrIncludeInactive = false) => {
  const queryClient = useQueryClient();
  const options = typeof optionsOrIncludeInactive === "boolean" ? { includeInactive: optionsOrIncludeInactive } : optionsOrIncludeInactive;
  const { includeInactive = false, formTypeIds, scope } = options;
  return useQuery({
    queryKey: companyShortName ? [...queryKeys.expenseTypes.list(companyShortName, includeInactive), { formTypeIds, scope }] : queryKeys.expenseTypes.lists(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!companyShortName) throw new Error("Company short name is required");
      const params = {
        show_inactive: includeInactive
      };
      if (formTypeIds && formTypeIds.length > 0) {
        params.form_type_ids = formTypeIds;
      }
      if (scope) {
        params.scope = scope;
      }
      const response = await apiClient.get(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPES.build({ tenant: companyShortName }),
        { params }
      );
      return response.data.map((item) => mapBackendToFrontend(item, queryClient));
    }, "queryFn"),
    enabled: !!companyShortName,
    staleTime: 2 * 60 * 1e3,
    gcTime: 5 * 60 * 1e3
  });
}, "useExpenseTypes");
const useCreateExpenseType = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ companyShortName, data }) => {
      const createData = mapFrontendToBackendCreate(data, queryClient);
      const response = await apiClient.post(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_CREATE.build({ tenant: companyShortName }),
        createData
      );
      return mapBackendToFrontend(response.data, queryClient);
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    }, "onSuccess")
  });
}, "useCreateExpenseType");
const useUpdateExpenseType = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({
      companyShortName,
      id,
      data
    }) => {
      const updateData = mapFrontendToBackendUpdate(id, data);
      const response = await apiClient.put(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_UPDATE.build({ tenant: companyShortName }),
        updateData
      );
      return mapBackendToFrontend(response.data, queryClient);
    }, "mutationFn"),
    onMutate: /* @__PURE__ */ __name(async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.expenseTypes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.expenseTypes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (et) => et.id === id ? { ...et, ...data, modified: /* @__PURE__ */ new Date() } : et
        );
      });
      return { previousData };
    }, "onMutate"),
    onError: /* @__PURE__ */ __name((_error, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    }, "onError"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    }, "onSuccess")
  });
}, "useUpdateExpenseType");
const useToggleExpenseTypeStatus = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({
      companyShortName,
      id,
      isActive
    }) => {
      const response = await apiClient.put(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_UPDATE.build({ tenant: companyShortName }),
        mapFrontendToBackendUpdate(id, { status: isActive ? "active" : "inactive" })
      );
      return mapBackendToFrontend(response.data, queryClient);
    }, "mutationFn"),
    onMutate: /* @__PURE__ */ __name(async ({ id, isActive }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.expenseTypes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.expenseTypes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (et) => et.id === id ? { ...et, status: isActive ? "active" : "inactive", modified: /* @__PURE__ */ new Date() } : et
        );
      });
      return { previousData };
    }, "onMutate"),
    onError: /* @__PURE__ */ __name((_error, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    }, "onError"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.mileageRates.all()
      });
    }, "onSuccess")
  });
}, "useToggleExpenseTypeStatus");
const useFormTypes = /* @__PURE__ */ __name(() => {
  return useQuery({
    queryKey: queryKeys.formTypes.list(),
    queryFn: /* @__PURE__ */ __name(async () => {
      const response = await apiClient.get(CONFIGURATION_ENDPOINTS.FORM_TYPES.build());
      return response.data;
    }, "queryFn"),
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
}, "useFormTypes");
const useFormTypeOptions = /* @__PURE__ */ __name(() => {
  const { data: formTypes, isLoading, error } = useFormTypes();
  const formTypeOptions = (formTypes == null ? void 0 : formTypes.map((formType) => {
    const normalizedName = formType.formTypeName.toLowerCase();
    return {
      id: formType.id.toString(),
      value: normalizedName,
      label: formType.formTypeName,
      description: formType.formTypeDescription,
      mileageRateRequired: formType.mileageRateRequired
    };
  })) || [];
  return {
    data: formTypeOptions,
    isLoading,
    error
  };
}, "useFormTypeOptions");
const useCurrencies = /* @__PURE__ */ __name(() => {
  return useQuery({
    queryKey: queryKeys.currencies.list(),
    queryFn: /* @__PURE__ */ __name(async () => {
      const response = await apiClient.get(CONFIGURATION_ENDPOINTS.CURRENCIES.build());
      return response.data;
    }, "queryFn"),
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
}, "useCurrencies");
const useDefaultCurrency = /* @__PURE__ */ __name(() => {
  var _a, _b;
  const { data: countries } = useCountries();
  const { userDefaultCountryIso } = useDefaultCountry();
  const { data: currencies } = useCurrencies();
  const defaultCurrencyCode = ((_a = countries == null ? void 0 : countries.items.find((c) => c.isoCode === userDefaultCountryIso)) == null ? void 0 : _a.defaultCurrencyIso) || DEFAULT_CURRENCY_CODE;
  const defaultCurrencySymbol = ((_b = currencies == null ? void 0 : currencies.find((c) => c.isoCode === defaultCurrencyCode)) == null ? void 0 : _b.symbol) || getCurrencySymbol(defaultCurrencyCode);
  return {
    defaultCurrencyCode,
    defaultCurrencySymbol
  };
}, "useDefaultCurrency");
const fetchCountries = /* @__PURE__ */ __name(async () => {
  const response = await apiClient.get(CONFIGURATION_ENDPOINTS.COUNTRIES.build());
  return response.data;
}, "fetchCountries");
const COUNTRIES_STALE_TIME = 10 * 60 * 1e3;
const COUNTRIES_GC_TIME = 30 * 60 * 1e3;
const useCountries = /* @__PURE__ */ __name(() => {
  return useQuery({
    queryKey: queryKeys.countries.list(),
    queryFn: fetchCountries,
    staleTime: COUNTRIES_STALE_TIME,
    gcTime: COUNTRIES_GC_TIME
  });
}, "useCountries");
const useDefaultCountry = /* @__PURE__ */ __name(() => {
  const { userDefaultCountryIso, setUserDefaultCountryIso } = useCountryStore();
  const { data, isLoading } = useCountries();
  useEffect(() => {
    if (data && data.userDefaultCountryIso && !isLoading) {
      if (!userDefaultCountryIso) {
        setUserDefaultCountryIso(data.userDefaultCountryIso);
      }
    }
  }, [userDefaultCountryIso, setUserDefaultCountryIso, data, isLoading]);
  return {
    // `||` so empty-string values fall through consistently with the write guard above.
    userDefaultCountryIso: userDefaultCountryIso || (data == null ? void 0 : data.userDefaultCountryIso) || null,
    isLoading
  };
}, "useDefaultCountry");
function useFormTypeId(expenseTypeId, companyShortName) {
  var _a;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, false);
  return (_a = expenseTypes == null ? void 0 : expenseTypes.find((et) => et.id === expenseTypeId)) == null ? void 0 : _a.formType;
}
__name(useFormTypeId, "useFormTypeId");
function useFormTypeName(expenseTypeName, companyShortName) {
  var _a;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, false);
  return (_a = expenseTypes == null ? void 0 : expenseTypes.find((et) => et.name === expenseTypeName)) == null ? void 0 : _a.formType;
}
__name(useFormTypeName, "useFormTypeName");
const useTaxTypesDisplay = /* @__PURE__ */ __name(({
  companyShortName,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName ? queryKeys.taxTypes.list(companyShortName) : queryKeys.taxTypes.all(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!companyShortName) {
        throw new Error("Company short name is required");
      }
      const url = CONFIGURATION_ENDPOINTS.TAX_TYPES_DISPLAY.build({ tenant: companyShortName });
      const response = await apiClient.get(url);
      return response.data;
    }, "queryFn"),
    enabled: enabled && !!companyShortName,
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  });
}, "useTaxTypesDisplay");
const findCachedExpenseTypes = /* @__PURE__ */ __name((queryClient) => {
  var _a;
  return ((_a = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() }).find(([, data]) => Array.isArray(data) && data.length > 0)) == null ? void 0 : _a[1]) ?? [];
}, "findCachedExpenseTypes");
const useExpenseItem = /* @__PURE__ */ __name((itemId, options = {}) => {
  const { enabled = true } = options;
  const company = useCompanyStore((s) => {
    var _a;
    return ((_a = s.userDefaultCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: itemId ? queryKeys.expenseItem.detail(itemId) : queryKeys.expenseItem.details(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!itemId || !company) throw new Error("Item ID and company are required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_EXPENSE_FORM.build({ tenant: company, id: itemId })
      );
      const expenseTypes = findCachedExpenseTypes(queryClient);
      const currencies = queryClient.getQueryData(queryKeys.currencies.list()) ?? [];
      return mapSingleExpenseFormToExpenseItem(response.data, { expenseTypes, currencies });
    }, "queryFn"),
    enabled: enabled && !!itemId && !!company,
    retry: false,
    staleTime: 30 * 1e3
  });
}, "useExpenseItem");
export {
  AllowedMimeType as A,
  ExpenseFormType as E,
  FormTypeId as F,
  ItemCategory as I,
  MIME_TYPE_CONFIG as M,
  useExpenseTypes as a,
  isRegularExpense as b,
  isMileageExpense as c,
  useExpenseItem as d,
  useCurrencies as e,
  useCountries as f,
  getExpenseItemAmount as g,
  useTaxTypesDisplay as h,
  isExpenseItemSubmitted as i,
  useDefaultCurrency as j,
  useFormTypeId as k,
  isExpenseItemDraft as l,
  useFormTypeName as m,
  ECostAllocation as n,
  FILE_SIZE_LIMITS as o,
  FilePreviewType as p,
  useDefaultCountry as q,
  ExpenseTypeScope as r,
  useCreateExpenseType as s,
  useUpdateExpenseType as t,
  useFormTypes as u,
  useToggleExpenseTypeStatus as v,
  useFormTypeOptions as w,
  MileageRateStatus as x
};

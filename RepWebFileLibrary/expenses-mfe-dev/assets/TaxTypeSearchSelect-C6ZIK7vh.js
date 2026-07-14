var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _result, _queries, _options, _observers, _combinedResult, _lastCombine, _lastResult, _lastQueryHashes, _observerMatches, __this_instances, trackResult_fn, combineResult_fn, shouldSkipCombine_fn, findMatchingObservers_fn, onUpdate_fn, notify_fn, _a;
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { V as Subscribable, X as notifyManager, ac as shallowEqualObjects, ad as replaceEqualDeep, a8 as QueryObserver, h as useQueryClient, ae as useIsRestoring, af as useQueryErrorResetBoundary, ag as ensureSuspenseTimers, ah as ensurePreventErrorBoundaryRetry, ai as useClearResetErrorBoundary, Z as noop, aj as shouldSuspend, ak as fetchOptimistic, al as getHasError, P as DEFAULT_CURRENCY_CODE, U as getCurrencySymbol, z as formatToISODate, B as parseDateOnlyAsLocal, K as FILE_ENDPOINTS, r as useQuery, q as queryKeys, E as EXPENSE_ENDPOINTS, i as useMutation } from "./use-scroll-into-view-ref-DGEXoh0D.js";
import { i as create, j as devtools, s as subscribeWithSelector, k as immer, b as apiClient, C as CONFIGURATION_ENDPOINTS, a5 as devWarn, d as devError, D as gn } from "./configuration-C1Nhb7Ag.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
function difference(array1, array2) {
  const excludeSet = new Set(array2);
  return array1.filter((x) => !excludeSet.has(x));
}
__name(difference, "difference");
function replaceAt(array, index, value) {
  const copy = array.slice(0);
  copy[index] = value;
  return copy;
}
__name(replaceAt, "replaceAt");
var QueriesObserver = (_a = class extends Subscribable {
  constructor(client, queries, options) {
    super();
    __privateAdd(this, __this_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _result);
    __privateAdd(this, _queries);
    __privateAdd(this, _options);
    __privateAdd(this, _observers);
    __privateAdd(this, _combinedResult);
    __privateAdd(this, _lastCombine);
    __privateAdd(this, _lastResult);
    __privateAdd(this, _lastQueryHashes);
    __privateAdd(this, _observerMatches, []);
    __privateSet(this, _client, client);
    __privateSet(this, _options, options);
    __privateSet(this, _queries, []);
    __privateSet(this, _observers, []);
    __privateSet(this, _result, []);
    this.setQueries(queries);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _observers).forEach((observer) => {
        observer.subscribe((result) => {
          __privateMethod(this, __this_instances, onUpdate_fn).call(this, observer, result);
        });
      });
    }
  }
  onUnsubscribe() {
    if (!this.listeners.size) {
      this.destroy();
    }
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateGet(this, _observers).forEach((observer) => {
      observer.destroy();
    });
  }
  setQueries(queries, options) {
    __privateSet(this, _queries, queries);
    __privateSet(this, _options, options);
    notifyManager.batch(() => {
      const prevObservers = __privateGet(this, _observers);
      const newObserverMatches = __privateMethod(this, __this_instances, findMatchingObservers_fn).call(this, __privateGet(this, _queries));
      newObserverMatches.forEach(
        (match) => match.observer.setOptions(match.defaultedQueryOptions)
      );
      const newObservers = newObserverMatches.map((match) => match.observer);
      const newResult = newObservers.map(
        (observer) => observer.getCurrentResult()
      );
      const hasLengthChange = prevObservers.length !== newObservers.length;
      const hasIndexChange = newObservers.some(
        (observer, index) => observer !== prevObservers[index]
      );
      const hasStructuralChange = hasLengthChange || hasIndexChange;
      const hasResultChange = hasStructuralChange ? true : newResult.some((result, index) => {
        const prev = __privateGet(this, _result)[index];
        return !prev || !shallowEqualObjects(result, prev);
      });
      if (!hasStructuralChange && !hasResultChange) return;
      if (hasStructuralChange) {
        __privateSet(this, _observerMatches, newObserverMatches);
        __privateSet(this, _observers, newObservers);
      }
      __privateSet(this, _result, newResult);
      if (!this.hasListeners()) return;
      if (hasStructuralChange) {
        difference(prevObservers, newObservers).forEach((observer) => {
          observer.destroy();
        });
        difference(newObservers, prevObservers).forEach((observer) => {
          observer.subscribe((result) => {
            __privateMethod(this, __this_instances, onUpdate_fn).call(this, observer, result);
          });
        });
      }
      __privateMethod(this, __this_instances, notify_fn).call(this);
    });
  }
  getCurrentResult() {
    return __privateGet(this, _result);
  }
  getQueries() {
    return __privateGet(this, _observers).map((observer) => observer.getCurrentQuery());
  }
  getObservers() {
    return __privateGet(this, _observers);
  }
  getOptimisticResult(queries, combine) {
    const matches = __privateMethod(this, __this_instances, findMatchingObservers_fn).call(this, queries);
    const result = matches.map(
      (match) => match.observer.getOptimisticResult(match.defaultedQueryOptions)
    );
    const queryHashes = matches.map(
      (match) => match.defaultedQueryOptions.queryHash
    );
    return [
      result,
      (r) => {
        return __privateMethod(this, __this_instances, combineResult_fn).call(this, r ?? result, combine, queryHashes);
      },
      () => {
        return __privateMethod(this, __this_instances, trackResult_fn).call(this, result, matches);
      }
    ];
  }
}, _client = new WeakMap(), _result = new WeakMap(), _queries = new WeakMap(), _options = new WeakMap(), _observers = new WeakMap(), _combinedResult = new WeakMap(), _lastCombine = new WeakMap(), _lastResult = new WeakMap(), _lastQueryHashes = new WeakMap(), _observerMatches = new WeakMap(), __this_instances = new WeakSet(), trackResult_fn = /* @__PURE__ */ __name(function(result, matches) {
  return matches.map((match, index) => {
    const observerResult = result[index];
    return !match.defaultedQueryOptions.notifyOnChangeProps ? match.observer.trackResult(observerResult, (accessedProp) => {
      matches.forEach((m) => {
        m.observer.trackProp(accessedProp);
      });
    }) : observerResult;
  });
}, "#trackResult"), combineResult_fn = /* @__PURE__ */ __name(function(input, combine, queryHashes) {
  if (combine) {
    const lastHashes = __privateGet(this, _lastQueryHashes);
    const queryHashesChanged = queryHashes !== void 0 && lastHashes !== void 0 && (lastHashes.length !== queryHashes.length || queryHashes.some((hash, i) => hash !== lastHashes[i]));
    if (!__privateGet(this, _combinedResult) || __privateGet(this, _result) !== __privateGet(this, _lastResult) || queryHashesChanged || combine !== __privateGet(this, _lastCombine)) {
      __privateSet(this, _lastCombine, combine);
      __privateSet(this, _lastResult, __privateGet(this, _result));
      if (queryHashes !== void 0) {
        __privateSet(this, _lastQueryHashes, queryHashes);
      }
      __privateSet(this, _combinedResult, replaceEqualDeep(
        __privateGet(this, _combinedResult),
        combine(input)
      ));
    }
    return __privateGet(this, _combinedResult);
  }
  return input;
}, "#combineResult"), shouldSkipCombine_fn = /* @__PURE__ */ __name(function() {
  var _a2;
  return ((_a2 = __privateGet(this, _options)) == null ? void 0 : _a2.combine) !== void 0 && __privateGet(this, _observers).some((observer, index) => {
    var _a3;
    return observer.options.suspense && ((_a3 = __privateGet(this, _result)[index]) == null ? void 0 : _a3.data) === void 0;
  });
}, "#shouldSkipCombine"), findMatchingObservers_fn = /* @__PURE__ */ __name(function(queries) {
  const prevObserversMap = /* @__PURE__ */ new Map();
  __privateGet(this, _observers).forEach((observer) => {
    const key = observer.options.queryHash;
    if (!key) return;
    const previousObservers = prevObserversMap.get(key);
    if (previousObservers) {
      previousObservers.push(observer);
    } else {
      prevObserversMap.set(key, [observer]);
    }
  });
  const observers = [];
  queries.forEach((options) => {
    var _a2;
    const defaultedOptions = __privateGet(this, _client).defaultQueryOptions(options);
    const match = (_a2 = prevObserversMap.get(defaultedOptions.queryHash)) == null ? void 0 : _a2.shift();
    const observer = match ?? new QueryObserver(__privateGet(this, _client), defaultedOptions);
    observers.push({
      defaultedQueryOptions: defaultedOptions,
      observer
    });
  });
  return observers;
}, "#findMatchingObservers"), onUpdate_fn = /* @__PURE__ */ __name(function(observer, result) {
  const index = __privateGet(this, _observers).indexOf(observer);
  if (index !== -1) {
    __privateSet(this, _result, replaceAt(__privateGet(this, _result), index, result));
    __privateMethod(this, __this_instances, notify_fn).call(this);
  }
}, "#onUpdate"), notify_fn = /* @__PURE__ */ __name(function() {
  var _a2;
  if (this.hasListeners()) {
    const newTracked = __privateMethod(this, __this_instances, trackResult_fn).call(this, __privateGet(this, _result), __privateGet(this, _observerMatches));
    const shouldSkipCombine = __privateMethod(this, __this_instances, shouldSkipCombine_fn).call(this);
    const previousResult = __privateGet(this, _combinedResult);
    const newResult = shouldSkipCombine ? previousResult : __privateMethod(this, __this_instances, combineResult_fn).call(this, newTracked, (_a2 = __privateGet(this, _options)) == null ? void 0 : _a2.combine);
    if (shouldSkipCombine || previousResult !== newResult) {
      notifyManager.batch(() => {
        this.listeners.forEach((listener) => {
          listener(__privateGet(this, _result));
        });
      });
    }
  }
}, "#notify"), __name(_a, "QueriesObserver"), _a);
const React$1 = await importShared("react");
function useQueries({
  queries,
  ...options
}, queryClient) {
  const client = useQueryClient();
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedQueries = React$1.useMemo(
    () => queries.map((opts) => {
      const defaultedOptions = client.defaultQueryOptions(
        opts
      );
      defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
      return defaultedOptions;
    }),
    [queries, client, isRestoring]
  );
  defaultedQueries.forEach((queryOptions) => {
    ensureSuspenseTimers(queryOptions);
    const query = client.getQueryCache().get(queryOptions.queryHash);
    ensurePreventErrorBoundaryRetry(queryOptions, errorResetBoundary, query);
  });
  useClearResetErrorBoundary(errorResetBoundary);
  const [observer] = React$1.useState(
    () => new QueriesObserver(
      client,
      defaultedQueries,
      options
    )
  );
  const [optimisticResult, getCombinedResult, trackResult] = observer.getOptimisticResult(
    defaultedQueries,
    options.combine
  );
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  React$1.useSyncExternalStore(
    React$1.useCallback(
      (onStoreChange) => shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop,
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React$1.useEffect(() => {
    observer.setQueries(
      defaultedQueries,
      options
    );
  }, [defaultedQueries, options, observer]);
  const shouldAtLeastOneSuspend = optimisticResult.some(
    (result, index) => shouldSuspend(defaultedQueries[index], result)
  );
  const suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap((result, index) => {
    const opts = defaultedQueries[index];
    if (opts && shouldSuspend(opts, result)) {
      const queryObserver = new QueryObserver(client, opts);
      return fetchOptimistic(opts, queryObserver, errorResetBoundary);
    }
    return [];
  }) : [];
  if (suspensePromises.length > 0) {
    throw Promise.all(suspensePromises);
  }
  const firstSingleResultWhichShouldThrow = optimisticResult.find(
    (result, index) => {
      const query = defaultedQueries[index];
      return query && getHasError({
        result,
        errorResetBoundary,
        throwOnError: query.throwOnError,
        query: client.getQueryCache().get(query.queryHash),
        suspense: query.suspense
      });
    }
  );
  if (firstSingleResultWhichShouldThrow == null ? void 0 : firstSingleResultWhichShouldThrow.error) {
    throw firstSingleResultWhichShouldThrow.error;
  }
  return getCombinedResult(trackResult());
}
__name(useQueries, "useQueries");
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
const FORM_TYPE_ID_TO_FORM_TYPE = {
  [
    1
    /* STANDARD */
  ]: "standard",
  [
    2
    /* MILEAGE */
  ]: "mileage",
  [
    3
    /* ENTERTAINMENT */
  ]: "entertainment"
  /* ENTERTAINMENT */
};
const formTypeIdToFormType = /* @__PURE__ */ __name((formTypeId) => formTypeId == null ? void 0 : FORM_TYPE_ID_TO_FORM_TYPE[formTypeId], "formTypeIdToFormType");
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
function isCacheDefinitiveMiss(id, activeList, isActive) {
  if (!activeList) return false;
  return !activeList.some((item) => parseInt(item.id, 10) === id && isActive(item));
}
__name(isCacheDefinitiveMiss, "isCacheDefinitiveMiss");
function needsExpenseTypeClear(expenseTypeId, activeExpenseTypes) {
  if (expenseTypeId == null) return true;
  return isCacheDefinitiveMiss(expenseTypeId, activeExpenseTypes, (et) => et.status === "active");
}
__name(needsExpenseTypeClear, "needsExpenseTypeClear");
function needsBusinessPurposeClear(businessPurposeId, activeBusinessPurposes) {
  if (businessPurposeId == null) return true;
  return isCacheDefinitiveMiss(businessPurposeId, activeBusinessPurposes, (bp) => bp.isActive);
}
__name(needsBusinessPurposeClear, "needsBusinessPurposeClear");
function needsPaymentMethodClear(paymentMethod, activePaymentMethods) {
  if (!paymentMethod) return true;
  if (paymentMethod.active === false) return true;
  if (!activePaymentMethods) return false;
  return !activePaymentMethods.some((pm) => parseInt(pm.id, 10) === paymentMethod.id);
}
__name(needsPaymentMethodClear, "needsPaymentMethodClear");
function buildCurrency(code) {
  return { code, symbol: getCurrencySymbol(code) };
}
__name(buildCurrency, "buildCurrency");
function applyPaymentMethodCascade(data, defaultCurrencyCode = DEFAULT_CURRENCY_CODE) {
  return {
    ...data,
    paymentMethod: "",
    totalAmount: "",
    taxAmount: void 0,
    totalCurrency: buildCurrency(defaultCurrencyCode)
  };
}
__name(applyPaymentMethodCascade, "applyPaymentMethodCascade");
function applyMileageTypeCascade(data) {
  return {
    ...data,
    mileageType: "",
    ratePerUnit: "",
    reimbursableAmount: ""
  };
}
__name(applyMileageTypeCascade, "applyMileageTypeCascade");
function stringifyEntityId(id) {
  return id ? String(id) : "";
}
__name(stringifyEntityId, "stringifyEntityId");
function inferFormTypeId(expenseTypeId, expenseTypes) {
  var _a2;
  if (expenseTypeId == null) return null;
  return ((_a2 = expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === expenseTypeId)) == null ? void 0 : _a2.formTypeId) ?? null;
}
__name(inferFormTypeId, "inferFormTypeId");
function inferTotalCurrencyCode(response) {
  var _a2, _b;
  return ((_a2 = response.paymentMethod) == null ? void 0 : _a2.currencyCode) ?? ((_b = response.country) == null ? void 0 : _b.defaultCurrencyIso) ?? DEFAULT_CURRENCY_CODE;
}
__name(inferTotalCurrencyCode, "inferTotalCurrencyCode");
function resolveRateUnit(expenseTypeId, expenseTypes) {
  if (expenseTypeId == null) return "km";
  const found = expenseTypes == null ? void 0 : expenseTypes.find(
    (et) => parseInt(et.id, 10) === expenseTypeId
  );
  return (found == null ? void 0 : found.unitOfMeasurement) === "mile" ? "mi" : "km";
}
__name(resolveRateUnit, "resolveRateUnit");
function mapFileMetadataToAttachment(file) {
  var _a2;
  return {
    id: file.id,
    url: FILE_ENDPOINTS.DOWNLOAD.build({ fileId: file.id }),
    filename: file.name,
    originalName: file.name,
    size: file.size,
    type: ((_a2 = file.mimeType) == null ? void 0 : _a2.split("/")[1]) || "unknown",
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
  var _a2;
  return ((_a2 = currencies.find((c) => c.isoCode === code)) == null ? void 0 : _a2.symbol) ?? getCurrencySymbol(code);
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
  const netCurrency = isDifferentCurrency ? { code: foreignCode, symbol: resolveCurrencySymbol(foreignCode, currencies) } : totalCurrency;
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
  if (allocations.length <= 1) return false;
  const first = Number(allocations[0].percentage);
  return allocations.every((a) => Number(a.percentage) === first);
}
__name(inferEqualSplit, "inferEqualSplit");
function mapToExpenseFormData(response, isDraft, context, formTypeId) {
  var _a2, _b, _c, _d, _e, _f, _g, _h;
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
  const shouldClearExpenseType = isDraft && needsExpenseTypeClear(response.expenseTypeId, context.expenseTypes);
  const shouldClearBusinessPurpose = isDraft && needsBusinessPurposeClear(response.businessPurposeId, context.businessPurposes);
  const shouldClearPaymentMethod = isDraft && needsPaymentMethodClear(response.paymentMethod, context.paymentMethods);
  const data = {
    // Dual mode: IDs for draft (form selects), display names for preview
    expenseType: isDraft ? shouldClearExpenseType ? "" : stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    // Tracks the shown expenseType: cleared together when a draft drops a deactivated type
    formType: shouldClearExpenseType ? void 0 : formTypeIdToFormType(formTypeId),
    paymentMethod: isDraft ? shouldClearPaymentMethod ? "" : stringifyEntityId((_a2 = response.paymentMethod) == null ? void 0 : _a2.id) : ((_b = response.paymentMethod) == null ? void 0 : _b.name) ?? "",
    expenseLocation: isDraft ? stringifyEntityId((_c = response.country) == null ? void 0 : _c.id) : ((_d = response.country) == null ? void 0 : _d.name) ?? "",
    businessPurpose: isDraft ? shouldClearBusinessPurpose ? "" : stringifyEntityId(response.businessPurposeId) : response.businessPurpose ?? "",
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
  if (shouldClearPaymentMethod) {
    return applyPaymentMethodCascade(data);
  }
  return data;
}
__name(mapToExpenseFormData, "mapToExpenseFormData");
function mapToMileageTripFormData(response, isDraft, context) {
  var _a2, _b, _c;
  const { totalCurrency } = buildCurrencyInfo(response, context.currencies ?? []);
  const shouldClearMileageType = isDraft && needsExpenseTypeClear(response.expenseTypeId, context.expenseTypes);
  const shouldClearBusinessPurpose = isDraft && needsBusinessPurposeClear(response.businessPurposeId, context.businessPurposes);
  const data = {
    formType: "trip",
    mileageType: isDraft ? shouldClearMileageType ? "" : stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    expenseDate: formatToISODate(response.expenseDate) ?? "",
    fromLocation: response.from ?? "",
    toLocation: response.to ?? "",
    isRoundTrip: response.roundTrip ?? false,
    totalDistance: ((_a2 = response.totalDistance) == null ? void 0 : _a2.toString()) ?? "",
    ratePerUnit: ((_b = response.effectiveRate) == null ? void 0 : _b.toString()) ?? "",
    rateUnit: resolveRateUnit(response.expenseTypeId, context.expenseTypes),
    reimbursableAmount: ((_c = response.totalAmount) == null ? void 0 : _c.toString()) ?? "",
    businessPurpose: isDraft ? shouldClearBusinessPurpose ? "" : stringifyEntityId(response.businessPurposeId) : response.businessPurpose ?? "",
    expenseDescription: response.description ?? "",
    costAllocations: (response.costAllocations ?? []).map(mapCostAllocationDetail),
    isEqualSplit: inferEqualSplit(response.costAllocations ?? []),
    deferToApprover: response.costAllocationDeferral ?? false,
    additionalComments: response.additionalComments ?? void 0,
    totalCurrency
  };
  if (shouldClearMileageType) {
    return applyMileageTypeCascade(data);
  }
  return data;
}
__name(mapToMileageTripFormData, "mapToMileageTripFormData");
function mapToMileagePeriodFormData(response, isDraft, context) {
  var _a2, _b, _c;
  const supportingFiles = (response.files ?? []).filter((f) => f.documentType === "supporting").map(mapFileMetadataToAttachment);
  const { totalCurrency } = buildCurrencyInfo(response, context.currencies ?? []);
  const shouldClearMileageType = isDraft && needsExpenseTypeClear(response.expenseTypeId, context.expenseTypes);
  const shouldClearBusinessPurpose = isDraft && needsBusinessPurposeClear(response.businessPurposeId, context.businessPurposes);
  const data = {
    formType: "period",
    mileageType: isDraft ? shouldClearMileageType ? "" : stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    // Fallback to today for non-period expenses where these fields are null
    expensePeriod: {
      from: response.periodStart ? parseDateOnlyAsLocal(response.periodStart) : /* @__PURE__ */ new Date(),
      to: response.periodEnd ? parseDateOnlyAsLocal(response.periodEnd) : /* @__PURE__ */ new Date()
    },
    totalDistance: ((_a2 = response.totalDistance) == null ? void 0 : _a2.toString()) ?? "",
    ratePerUnit: ((_b = response.effectiveRate) == null ? void 0 : _b.toString()) ?? "",
    rateUnit: resolveRateUnit(response.expenseTypeId, context.expenseTypes),
    reimbursableAmount: ((_c = response.totalAmount) == null ? void 0 : _c.toString()) ?? "",
    businessPurpose: isDraft ? shouldClearBusinessPurpose ? "" : stringifyEntityId(response.businessPurposeId) : response.businessPurpose ?? "",
    expenseDescription: response.description ?? "",
    supportingFiles,
    costAllocations: (response.costAllocations ?? []).map(mapCostAllocationDetail),
    isEqualSplit: inferEqualSplit(response.costAllocations ?? []),
    deferToApprover: response.costAllocationDeferral ?? false,
    additionalComments: response.additionalComments ?? void 0,
    totalCurrency
  };
  if (shouldClearMileageType) {
    return applyMileageTypeCascade(data);
  }
  return data;
}
__name(mapToMileagePeriodFormData, "mapToMileagePeriodFormData");
function buildBaseFields(response) {
  return {
    id: String(response.expenseId),
    createdAt: response.createdDate ?? "",
    updatedAt: response.updatedDate ?? response.createdDate ?? "",
    userId: response.createdBy ?? "",
    hasEtlError: response.hasEtlError ?? false,
    ...response.businessId && { businessId: response.businessId },
    ...response.employeeFullName && { employeeFullName: response.employeeFullName }
  };
}
__name(buildBaseFields, "buildBaseFields");
function mapSingleExpenseFormToExpenseItem(response, context) {
  var _a2, _b;
  const isDraft = ((_a2 = response.status) == null ? void 0 : _a2.toLowerCase()) === "draft";
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
  const data = mapToExpenseFormData(response, isDraft, context, formTypeId);
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
const mapBackendToFrontend = /* @__PURE__ */ __name((backend, queryClient) => ({
  id: backend.id.toString(),
  name: backend.expenseTypeName,
  description: backend.expenseTypeDescription || "",
  formType: getFormTypeEnum(backend.formTypeId, queryClient),
  formTypeId: backend.formTypeId,
  status: backend.isActive ? "active" : "inactive",
  unitOfMeasurement: backend.unitOfMeasurement ?? void 0,
  taxTypeId: backend.taxTypeId,
  mileageRateId: backend.mileageRateId ?? void 0,
  isDefault: backend.isDefault ?? void 0,
  assignedEmployeeCount: backend.assignedEmployeeCount ?? 0,
  created: new Date(backend.createdDate),
  updated: backend.updatedDate ? new Date(backend.updatedDate) : new Date(backend.createdDate)
}), "mapBackendToFrontend");
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
  var _a2;
  const update = {
    id: parseInt(id)
  };
  if ("name" in frontend) {
    update.expenseTypeName = frontend.name || null;
  }
  if ("description" in frontend) {
    update.expenseTypeDescription = ((_a2 = frontend.description) == null ? void 0 : _a2.trim()) ?? " ";
  }
  if ("status" in frontend) {
    update.isActive = frontend.status === "active";
  }
  return update;
}, "mapFrontendToBackendUpdate");
const getFormTypeId = /* @__PURE__ */ __name((formType, queryClient) => {
  var _a2;
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
    return ((_a2 = formTypes[0]) == null ? void 0 : _a2.id) || FormTypeId.STANDARD;
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
  var _a2, _b;
  const { data: countries } = useCountries();
  const { userDefaultCountryIso } = useDefaultCountry();
  const { data: currencies } = useCurrencies();
  const defaultCurrencyCode = ((_a2 = countries == null ? void 0 : countries.items.find((c) => c.isoCode === userDefaultCountryIso)) == null ? void 0 : _a2.defaultCurrencyIso) || DEFAULT_CURRENCY_CODE;
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
    // `||` (not `??`): empty string should also fall through, matching the write-guard above
    userDefaultCountryIso: userDefaultCountryIso || (data == null ? void 0 : data.userDefaultCountryIso) || null,
    isLoading
  };
}, "useDefaultCountry");
function useFormTypeId(expenseTypeId, companyShortName) {
  var _a2;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, false);
  return (_a2 = expenseTypes == null ? void 0 : expenseTypes.find((et) => et.id === expenseTypeId)) == null ? void 0 : _a2.formType;
}
__name(useFormTypeId, "useFormTypeId");
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
  var _a2;
  return (_a2 = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() }).find(([, data]) => Array.isArray(data) && data.length > 0)) == null ? void 0 : _a2[1];
}, "findCachedExpenseTypes");
const findCachedActiveBusinessPurposes = /* @__PURE__ */ __name((queryClient) => {
  var _a2;
  return (_a2 = queryClient.getQueriesData({ queryKey: queryKeys.businessPurposes.all() }).find(([, data]) => Array.isArray(data) && data.length > 0)) == null ? void 0 : _a2[1];
}, "findCachedActiveBusinessPurposes");
const findCachedActivePaymentMethods = /* @__PURE__ */ __name((queryClient, companyShortName) => queryClient.getQueryData(queryKeys.paymentMethods.list(companyShortName)), "findCachedActivePaymentMethods");
const useExpenseItem = /* @__PURE__ */ __name((itemId, options) => {
  const { enabled = true, companyShortName } = options;
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: itemId ? queryKeys.expenseItem.detail(itemId) : queryKeys.expenseItem.details(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!itemId || !companyShortName) throw new Error("Item ID and company are required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_EXPENSE_FORM.build({ tenant: companyShortName, id: itemId })
      );
      const expenseTypes = findCachedExpenseTypes(queryClient);
      const currencies = queryClient.getQueryData(queryKeys.currencies.list()) ?? [];
      const businessPurposes = findCachedActiveBusinessPurposes(queryClient);
      const paymentMethods = findCachedActivePaymentMethods(queryClient, companyShortName);
      return mapSingleExpenseFormToExpenseItem(response.data, {
        expenseTypes,
        currencies,
        businessPurposes,
        paymentMethods
      });
    }, "queryFn"),
    enabled: enabled && !!itemId && !!companyShortName,
    retry: false,
    staleTime: 30 * 1e3
  });
}, "useExpenseItem");
const { useRef } = await importShared("react");
const MILEAGE_RATES_STALE_TIME = 15 * 60 * 1e3;
const MILEAGE_RATES_GC_TIME = 30 * 60 * 1e3;
const useMileageRates = /* @__PURE__ */ __name(({
  companyShortName,
  mileageRateId,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName && mileageRateId ? queryKeys.mileageRates.byMileageRateId(companyShortName, mileageRateId) : queryKeys.mileageRates.all(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!companyShortName || !mileageRateId) {
        throw new Error("Company short name and mileage rate ID are required");
      }
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATES.build({ tenant: companyShortName });
      const response = await apiClient.get(url, {
        params: { mileage_rate_id: mileageRateId }
      });
      return response.data;
    }, "queryFn"),
    enabled: enabled && !!companyShortName && !!mileageRateId,
    staleTime: MILEAGE_RATES_STALE_TIME,
    gcTime: MILEAGE_RATES_GC_TIME
  });
}, "useMileageRates");
const fetchEffectiveMileageRate = /* @__PURE__ */ __name(async (companyShortName, mileageRateId, date) => {
  var _a2;
  try {
    const response = await apiClient.get(
      CONFIGURATION_ENDPOINTS.MILEAGE_EFFECTIVE_RATE.build({
        tenant: companyShortName,
        mileageRateId
      }),
      { params: { date } }
    );
    return response.data;
  } catch (err) {
    const status = (_a2 = err.response) == null ? void 0 : _a2.status;
    if (status === 404) return null;
    throw err;
  }
}, "fetchEffectiveMileageRate");
const useEffectiveMileageRate = /* @__PURE__ */ __name(({
  companyShortName,
  mileageRateId,
  date,
  enabled = true
}) => {
  const canRun = !!companyShortName && !!mileageRateId && !!date;
  return useQuery({
    // Distinct key even when disabled - keeps multiple disabled observers from colliding on a
    // shared fallback key (same discipline as useEffectiveMileageRatesByIds).
    queryKey: queryKeys.mileageRates.effectiveByIdOnDate(
      companyShortName ?? "",
      mileageRateId ?? 0,
      date
    ),
    queryFn: /* @__PURE__ */ __name(() => fetchEffectiveMileageRate(companyShortName, mileageRateId, date), "queryFn"),
    enabled: enabled && canRun,
    staleTime: MILEAGE_RATES_STALE_TIME,
    gcTime: MILEAGE_RATES_GC_TIME
  });
}, "useEffectiveMileageRate");
const useEffectiveMileageRatesByIds = /* @__PURE__ */ __name(({
  companyShortName,
  mileageRateIds,
  date,
  enabled = true
}) => {
  const queries = useQueries({
    queries: mileageRateIds.map((mileageRateId) => ({
      // Distinct key even when company is null, otherwise disabled queries collide on
      // `mileageRates.all()` and React Query logs "Duplicate Queries found".
      queryKey: queryKeys.mileageRates.effectiveByIdOnDate(
        companyShortName ?? "",
        mileageRateId,
        date
      ),
      queryFn: /* @__PURE__ */ __name(() => fetchEffectiveMileageRate(companyShortName, mileageRateId, date), "queryFn"),
      enabled: enabled && !!companyShortName && !!date && mileageRateId > 0,
      staleTime: MILEAGE_RATES_STALE_TIME,
      gcTime: MILEAGE_RATES_GC_TIME
    }))
  });
  const ratesByIdRef = useRef(/* @__PURE__ */ new Map());
  const fetchingByIdRef = useRef(/* @__PURE__ */ new Map());
  const nextRates = /* @__PURE__ */ new Map();
  const nextFetching = /* @__PURE__ */ new Map();
  mileageRateIds.forEach((id, index) => {
    var _a2, _b;
    nextRates.set(id, ((_a2 = queries[index]) == null ? void 0 : _a2.data) ?? null);
    nextFetching.set(id, ((_b = queries[index]) == null ? void 0 : _b.isFetching) ?? false);
  });
  ratesByIdRef.current = mapsAreEqual(ratesByIdRef.current, nextRates) ? ratesByIdRef.current : nextRates;
  fetchingByIdRef.current = mapsAreEqual(fetchingByIdRef.current, nextFetching) ? fetchingByIdRef.current : nextFetching;
  return {
    ratesById: ratesByIdRef.current,
    fetchingById: fetchingByIdRef.current,
    isLoading: queries.some((q) => q.isLoading),
    isFetching: queries.some((q) => q.isFetching)
  };
}, "useEffectiveMileageRatesByIds");
function mapsAreEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const [k, v] of b) {
    if (a.get(k) !== v) return false;
  }
  return true;
}
__name(mapsAreEqual, "mapsAreEqual");
const useCreateMileageRate = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ companyShortName, mileageRateId, data }) => {
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATE_CREATE.build({ tenant: companyShortName });
      const response = await apiClient.post(url, {
        mileageRateId,
        rate: data.rate,
        effectiveDate: data.effectiveDate
      });
      return response.data;
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageRates.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseTypes.all() });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to create mileage rate:", error);
    }, "onError")
  });
}, "useCreateMileageRate");
const useDeleteMileageRate = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ companyShortName, effectiveRateId }) => {
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATE_DELETE.build({
        tenant: companyShortName,
        effectiveRateId
      });
      const response = await apiClient.delete(url);
      return response.data;
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageRates.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseTypes.all() });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to delete mileage rate:", error);
    }, "onError")
  });
}, "useDeleteMileageRate");
const React = await importShared("react");
const { useCallback, useMemo, useState } = React;
const DEFAULT_MAX_DROPDOWN_RESULTS = 50;
const FOOTER_SENTINEL_VALUE = "__tax-type-search-footer__";
const toSearchItem = /* @__PURE__ */ __name((tt) => ({
  value: tt.id.toString(),
  label: tt.displayText
}), "toSearchItem");
const TaxTypeSearchSelect = /* @__PURE__ */ __name(({
  value,
  onChange,
  onBlur,
  taxTypes,
  placeholder,
  error,
  disabled,
  label,
  required,
  renderItem: customRenderItem,
  maxResults = DEFAULT_MAX_DROPDOWN_RESULTS,
  searchDelay = 150,
  dropdownClassName,
  portal = false,
  tooltipProps
}) => {
  const [remountKey, setRemountKey] = useState(0);
  const taxTypeById = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const tt of taxTypes ?? []) map.set(tt.id, tt);
    return map;
  }, [taxTypes]);
  const searchIndex = useMemo(
    () => (taxTypes ?? []).map((tt) => ({ tt, lower: tt.displayText.toLowerCase() })),
    [taxTypes]
  );
  const selectedItem = useMemo(() => {
    if (value == null) return null;
    const tt = taxTypeById.get(value);
    return tt ? toSearchItem(tt) : null;
  }, [value, taxTypeById]);
  const search = useCallback(async (query) => {
    const q = query.trim().toLowerCase();
    const matches = [];
    let totalMatches = 0;
    for (const entry of searchIndex) {
      if (!q || entry.lower.includes(q)) {
        totalMatches++;
        if (matches.length < maxResults) {
          matches.push(toSearchItem(entry.tt));
        }
      }
    }
    if (totalMatches > maxResults) {
      matches.push({
        value: FOOTER_SENTINEL_VALUE,
        label: `Showing ${maxResults} of ${totalMatches} matches. Refine search to narrow.`
      });
    }
    return matches;
  }, [searchIndex, maxResults]);
  const handleChange = useCallback((item) => {
    if ((item == null ? void 0 : item.value) === FOOTER_SENTINEL_VALUE) {
      setRemountKey((k) => k + 1);
      return;
    }
    onChange(item ? parseInt(item.value, 10) : null);
  }, [onChange]);
  const renderItem = useCallback(
    (item, highlight, isSelected) => {
      if (item.value === FOOTER_SENTINEL_VALUE) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            onClick: /* @__PURE__ */ __name((e) => e.stopPropagation(), "onClick"),
            className: "block -mx-3 -my-2 px-3 py-2 text-xs italic text-exp-grey-600 cursor-default",
            children: item.label
          }
        );
      }
      if (customRenderItem) {
        const tt = taxTypeById.get(parseInt(item.value, 10));
        if (!tt) return highlight(item.label);
        return customRenderItem(tt, highlight, isSelected);
      }
      return highlight(item.label);
    },
    [customRenderItem, taxTypeById]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    gn,
    {
      label,
      required,
      value: selectedItem,
      onValueChange: handleChange,
      onBlur,
      onSearch: search,
      renderItem,
      placeholder,
      searchOnFocus: true,
      minSearchLength: 0,
      searchDelay,
      clearOnBlur: false,
      portal,
      error,
      disabled,
      dropdownClassName,
      tooltipProps
    },
    remountKey
  );
}, "TaxTypeSearchSelect");
TaxTypeSearchSelect.displayName = "TaxTypeSearchSelect";
export {
  AllowedMimeType as A,
  FilePreviewType as B,
  useDefaultCountry as C,
  MILEAGE_RATES_STALE_TIME as D,
  ExpenseTypeScope as E,
  FormTypeId as F,
  fetchEffectiveMileageRate as G,
  ItemCategory as I,
  MileageRateStatus as M,
  TaxTypeSearchSelect as T,
  useExpenseTypes as a,
  isRegularExpense as b,
  isMileageExpense as c,
  useExpenseItem as d,
  isExpenseItemDraft as e,
  ExpenseFormType as f,
  useCreateExpenseType as g,
  useUpdateExpenseType as h,
  isExpenseItemSubmitted as i,
  useToggleExpenseTypeStatus as j,
  useFormTypeOptions as k,
  useCurrencies as l,
  useMileageRates as m,
  useCreateMileageRate as n,
  useDeleteMileageRate as o,
  useTaxTypesDisplay as p,
  useEffectiveMileageRatesByIds as q,
  getExpenseItemAmount as r,
  useCountries as s,
  useDefaultCurrency as t,
  useFormTypes as u,
  useFormTypeId as v,
  useEffectiveMileageRate as w,
  ECostAllocation as x,
  FILE_SIZE_LIMITS as y,
  MIME_TYPE_CONFIG as z
};

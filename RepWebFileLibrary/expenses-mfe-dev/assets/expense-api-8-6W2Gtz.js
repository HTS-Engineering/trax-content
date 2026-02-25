import { w as ensureQueryFn, x as addToStart, y as addToEnd, z as addConsumeAwareSignal, R as Removable, A as createRetryer, n as notifyManager, S as Subscribable, B as shallowEqualObjects, s as hashKey, b as useQueryClient, g as noop, C as shouldThrowError, c as useQuery, q as queryKeys, E as EXPENSE_ENDPOINTS } from "./company-api-DItIZs4s.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { a as apiClient } from "./axiosInstance-Dp1zAOAB.js";
import { C as CONFIGURATION_ENDPOINTS } from "./configuration-DCdBxpzA.js";
import { b as devWarn } from "./index-CE7gIUWB.js";
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      var _a, _b, _c, _d, _e;
      const options = context.options;
      const direction = (_c = (_b = (_a = context.fetchOptions) == null ? void 0 : _a.meta) == null ? void 0 : _b.fetchMore) == null ? void 0 : _c.direction;
      const oldPages = ((_d = context.state.data) == null ? void 0 : _d.pages) || [];
      const oldPageParams = ((_e = context.state.data) == null ? void 0 : _e.pageParams) || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          addConsumeAwareSignal(
            object,
            () => context.signal,
            () => cancelled = true
          );
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          var _a2, _b2;
          return (_b2 = (_a2 = context.options).persister) == null ? void 0 : _b2.call(
            _a2,
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  var _a;
  return pages.length > 0 ? (_a = options.getPreviousPageParam) == null ? void 0 : _a.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
  if (!data) return false;
  return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
  if (!data || !options.getPreviousPageParam) return false;
  return getPreviousPageParam(options, data) != null;
}
var Mutation = class extends Removable {
  #client;
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.#client = config.client;
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    var _a;
    return ((_a = this.#retryer) == null ? void 0 : _a.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    const mutationFnContext = {
      client: this.#client,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables, mutationFnContext);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !this.#retryer.canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        this.#dispatch({ type: "pending", variables, isPaused });
        if (this.#mutationCache.config.onMutate) {
          await this.#mutationCache.config.onMutate(
            variables,
            this,
            mutationFnContext
          );
        }
        const context = await ((_b = (_a = this.options).onMutate) == null ? void 0 : _b.call(
          _a,
          variables,
          mutationFnContext
        ));
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await this.#retryer.start();
      await ((_d = (_c = this.#mutationCache.config).onSuccess) == null ? void 0 : _d.call(
        _c,
        data,
        variables,
        this.state.context,
        this,
        mutationFnContext
      ));
      await ((_f = (_e = this.options).onSuccess) == null ? void 0 : _f.call(
        _e,
        data,
        variables,
        this.state.context,
        mutationFnContext
      ));
      await ((_h = (_g = this.#mutationCache.config).onSettled) == null ? void 0 : _h.call(
        _g,
        data,
        null,
        this.state.variables,
        this.state.context,
        this,
        mutationFnContext
      ));
      await ((_j = (_i = this.options).onSettled) == null ? void 0 : _j.call(
        _i,
        data,
        null,
        variables,
        this.state.context,
        mutationFnContext
      ));
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await ((_l = (_k = this.#mutationCache.config).onError) == null ? void 0 : _l.call(
          _k,
          error,
          variables,
          this.state.context,
          this,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await ((_n = (_m = this.options).onError) == null ? void 0 : _n.call(
          _m,
          error,
          variables,
          this.state.context,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await ((_p = (_o = this.#mutationCache.config).onSettled) == null ? void 0 : _p.call(
          _o,
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await ((_r = (_q = this.options).onSettled) == null ? void 0 : _r.call(
          _q,
          void 0,
          error,
          variables,
          this.state.context,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      this.#dispatch({ type: "error", error });
      throw error;
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a;
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a = this.#currentMutation) == null ? void 0 : _a.state.status) === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a;
    if (!this.hasListeners()) {
      (_a = this.#currentMutation) == null ? void 0 : _a.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    var _a;
    (_a = this.#currentMutation) == null ? void 0 : _a.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    var _a;
    this.#mutateOptions = options;
    (_a = this.#currentMutation) == null ? void 0 : _a.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    var _a;
    const state = ((_a = this.#currentMutation) == null ? void 0 : _a.state) ?? getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager.batch(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const onMutateResult = this.#currentResult.context;
        const context = {
          client: this.#client,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey
        };
        if ((action == null ? void 0 : action.type) === "success") {
          try {
            (_b = (_a = this.#mutateOptions).onSuccess) == null ? void 0 : _b.call(
              _a,
              action.data,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
          try {
            (_d = (_c = this.#mutateOptions).onSettled) == null ? void 0 : _d.call(
              _c,
              action.data,
              null,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
        } else if ((action == null ? void 0 : action.type) === "error") {
          try {
            (_f = (_e = this.#mutateOptions).onError) == null ? void 0 : _f.call(
              _e,
              action.error,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
          try {
            (_h = (_g = this.#mutateOptions).onSettled) == null ? void 0 : _h.call(
              _g,
              void 0,
              action.error,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};
const React = await importShared("react");
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = React.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  React.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = React.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function debounce(func, delay) {
  let timeoutId = null;
  return function debounced(...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
}
const { useCallback, useEffect, useRef } = await importShared("react");
function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef(callback);
  const debouncedRef = useRef(void 0);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const debouncedCallback = useCallback(
    (...args) => {
      if (!debouncedRef.current) {
        debouncedRef.current = debounce(
          (...debouncedArgs) => callbackRef.current(...debouncedArgs),
          delay
        );
      }
      debouncedRef.current(...args);
    },
    [delay]
  );
  useEffect(() => {
    return () => {
      debouncedRef.current = void 0;
    };
  }, []);
  return debouncedCallback;
}
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
const mapBackendToFrontend = (backend, queryClient) => {
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
};
const mapFrontendToBackendCreate = (frontend, queryClient) => {
  const isMileage = frontend.formType === ExpenseFormType.MILEAGE;
  return {
    formTypeId: getFormTypeId(frontend.formType || "standard", queryClient),
    expenseTypeName: frontend.name || "",
    expenseTypeDescription: frontend.description || "",
    mileageRate: isMileage ? frontend.mileage ?? null : null,
    unitOfMeasurementId: isMileage ? frontend.unitOfMeasurementId ?? null : null,
    taxTypeId: isMileage ? frontend.taxTypeId ?? null : null
  };
};
const mapFrontendToBackendUpdate = (id, frontend) => {
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
};
const getFormTypeId = (formType, queryClient) => {
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
};
const getFormTypeEnum = (formTypeId, queryClient) => {
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
};
const useExpenseTypes = (companyShortName, optionsOrIncludeInactive = false) => {
  const queryClient = useQueryClient();
  const options = typeof optionsOrIncludeInactive === "boolean" ? { includeInactive: optionsOrIncludeInactive } : optionsOrIncludeInactive;
  const { includeInactive = false, formTypeIds, scope } = options;
  return useQuery({
    queryKey: companyShortName ? [...queryKeys.expenseTypes.list(companyShortName, includeInactive), { formTypeIds, scope }] : queryKeys.expenseTypes.lists(),
    queryFn: async () => {
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
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPES(companyShortName),
        { params }
      );
      return response.data.map((item) => mapBackendToFrontend(item, queryClient));
    },
    enabled: !!companyShortName,
    staleTime: 2 * 60 * 1e3,
    gcTime: 5 * 60 * 1e3
  });
};
const useCreateExpenseType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, data }) => {
      const createData = mapFrontendToBackendCreate(data, queryClient);
      const response = await apiClient.post(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_CREATE(companyShortName),
        createData
      );
      return mapBackendToFrontend(response.data, queryClient);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    }
  });
};
const useUpdateExpenseType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      companyShortName,
      id,
      data
    }) => {
      const updateData = mapFrontendToBackendUpdate(id, data);
      const response = await apiClient.put(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_UPDATE(companyShortName),
        updateData
      );
      return mapBackendToFrontend(response.data, queryClient);
    },
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.expenseTypes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.expenseTypes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (et) => et.id === id ? { ...et, ...data, modified: /* @__PURE__ */ new Date() } : et
        );
      });
      return { previousData };
    },
    onError: (_error, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    }
  });
};
const useToggleExpenseTypeStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      companyShortName,
      id,
      isActive
    }) => {
      const response = await apiClient.put(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_UPDATE(companyShortName),
        mapFrontendToBackendUpdate(id, { status: isActive ? "active" : "inactive" })
      );
      return mapBackendToFrontend(response.data, queryClient);
    },
    onMutate: async ({ id, isActive }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.expenseTypes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.expenseTypes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (et) => et.id === id ? { ...et, status: isActive ? "active" : "inactive", modified: /* @__PURE__ */ new Date() } : et
        );
      });
      return { previousData };
    },
    onError: (_error, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.mileageRates.all()
      });
    }
  });
};
const useFormTypes = () => {
  return useQuery({
    queryKey: queryKeys.formTypes.list(),
    queryFn: async () => {
      const response = await apiClient.get(CONFIGURATION_ENDPOINTS.FORM_TYPES);
      return response.data;
    },
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
};
const useFormTypeOptions = () => {
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
};
const useCurrencies = () => {
  return useQuery({
    queryKey: queryKeys.currencies.list(),
    queryFn: async () => {
      const response = await apiClient.get(CONFIGURATION_ENDPOINTS.CURRENCIES);
      return response.data;
    },
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
};
const useCountries = () => {
  return useQuery({
    queryKey: queryKeys.countries.list(),
    queryFn: async () => {
      const response = await apiClient.get(CONFIGURATION_ENDPOINTS.COUNTRIES);
      return response.data;
    },
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
};
function useFormTypeId(expenseTypeId, companyShortName) {
  var _a;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, false);
  return (_a = expenseTypes == null ? void 0 : expenseTypes.find((et) => et.id === expenseTypeId)) == null ? void 0 : _a.formType;
}
function useFormTypeName(expenseTypeName, companyShortName) {
  var _a;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, false);
  return (_a = expenseTypes == null ? void 0 : expenseTypes.find((et) => et.name === expenseTypeName)) == null ? void 0 : _a.formType;
}
const useTaxTypesDisplay = ({
  companyShortName,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName ? queryKeys.taxTypes.list(companyShortName) : queryKeys.taxTypes.all(),
    queryFn: async () => {
      if (!companyShortName) {
        throw new Error("Company short name is required");
      }
      const url = CONFIGURATION_ENDPOINTS.TAX_TYPES_DISPLAY(companyShortName);
      const response = await apiClient.get(url);
      return response.data;
    },
    enabled: enabled && !!companyShortName,
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  });
};
const useExpenseItem = (itemId, options = {}) => {
  const { enabled = true } = options;
  return useQuery({
    queryKey: itemId ? queryKeys.expenseItem.detail(itemId) : queryKeys.expenseItem.details(),
    queryFn: async () => {
      if (!itemId) throw new Error("Item ID is required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_EXPENSE_ITEM(itemId)
      );
      return response.data;
    },
    enabled: enabled && !!itemId,
    retry: false,
    staleTime: 30 * 1e3
  });
};
export {
  AllowedMimeType as A,
  ExpenseFormType as E,
  FormTypeId as F,
  MileageRateStatus as M,
  useExpenseTypes as a,
  useMutation as b,
  useTaxTypesDisplay as c,
  useFormTypeName as d,
  useExpenseItem as e,
  hasNextPage as f,
  ExpenseTypeScope as g,
  hasPreviousPage as h,
  infiniteQueryBehavior as i,
  useCreateExpenseType as j,
  useUpdateExpenseType as k,
  useToggleExpenseTypeStatus as l,
  useFormTypeOptions as m,
  useCountries as n,
  FILE_SIZE_LIMITS as o,
  MIME_TYPE_CONFIG as p,
  useDebouncedCallback as q,
  useFormTypeId as r,
  FilePreviewType as s,
  useCurrencies as t,
  useFormTypes as u,
  Mutation as v
};

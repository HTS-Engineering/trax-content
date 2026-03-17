import { P as ensureQueryFn, T as addToStart, U as addToEnd, V as addConsumeAwareSignal, W as Removable, X as createRetryer, s as notifyManager, S as Subscribable, Y as shallowEqualObjects, F as hashKey, l as useQueryClient, v as noop, Z as shouldThrowError, a as RoutePaths, f as useNavigate, g as useLocation, D as DEFAULT_CURRENCY_CODE, J as getCurrencySymbol, m as useQuery, q as queryKeys, i as useCompanyStore, E as EXPENSE_ENDPOINTS } from "./currency-CKuPecCn.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { b as devWarn } from "./index-D4vrrc7u.js";
import { c as create, d as devtools, s as subscribeWithSelector, i as immer, a as apiClient } from "./axiosInstance-BP1HyBRf.js";
import { a1 as CONFIGURATION_ENDPOINTS } from "./configuration-BTcuf3wk.js";
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
const FILE_ENDPOINTS = {
  // Upload file (receipt or supporting) - requires company and expenseId
  UPLOAD: (company, expenseId) => `/api/v1.0/expense-forms/${company}/files/drafts/${expenseId}/files`,
  // Download/Delete file by ID
  DOWNLOAD: (fileId) => `/api/v1.0/files/${fileId}`,
  DELETE: (fileId) => `/api/v1.0/files/${fileId}`
};
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
const { useCallback: useCallback$1, useEffect: useEffect$3, useRef } = await importShared("react");
function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef(callback);
  const debouncedRef = useRef(void 0);
  useEffect$3(() => {
    callbackRef.current = callback;
  }, [callback]);
  const debouncedCallback = useCallback$1(
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
  useEffect$3(() => {
    return () => {
      debouncedRef.current = void 0;
    };
  }, []);
  return debouncedCallback;
}
const { useEffect: useEffect$2 } = await importShared("react");
const useEscapeHandler = (isActive, onEscape) => {
  useEffect$2(() => {
    if (!isActive) return;
    const handleKeyDown = (event) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onEscape]);
};
const { useCallback, useState } = await importShared("react");
const isNavigationState = (state) => {
  if (typeof state !== "object" || state === null) {
    return false;
  }
  if (!("returnUrl" in state)) {
    return false;
  }
  const { returnUrl } = state;
  return typeof returnUrl === "string" || returnUrl === void 0;
};
const isValidListUrl = (url, basePath) => {
  return url === basePath || url.startsWith(`${basePath}?`);
};
const getValidReturnUrl = (state, fallback, basePath) => {
  if (!isNavigationState(state) || !state.returnUrl) {
    return fallback;
  }
  return isValidListUrl(state.returnUrl, basePath) ? state.returnUrl : fallback;
};
const useNavigateBack = (options = {}) => {
  const {
    fallback = RoutePaths.ExpensesDefault,
    basePath = "/expenses"
  } = options;
  const navigate = useNavigate();
  const location = useLocation();
  const [returnUrl] = useState(
    () => getValidReturnUrl(location.state, fallback, basePath)
  );
  const navigateBack = useCallback(() => {
    navigate(returnUrl);
  }, [navigate, returnUrl]);
  return { navigateBack, returnUrl };
};
const { useEffect: useEffect$1 } = await importShared("react");
const usePreventPageReload = () => {
  useEffect$1(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      devWarn("Form submission prevented to avoid page reload");
    };
    const handleClick = (e) => {
      const target = e.target;
      if (target.tagName === "BUTTON" && target.type === "submit") {
        const form = target.closest("form");
        if (form) {
          e.preventDefault();
          devWarn("Form submit button click prevented to avoid page reload");
          return;
        }
      }
      if (target.tagName === "INPUT" && target.type === "submit") {
        e.preventDefault();
        devWarn("Input submit prevented to avoid page reload");
        return;
      }
    };
    document.addEventListener("submit", handleSubmit, { capture: true, passive: false });
    document.addEventListener("click", handleClick, { capture: true, passive: false });
    return () => {
      document.removeEventListener("submit", handleSubmit, { capture: true });
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);
};
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
function isMileageExpense(item) {
  return item.itemType === "mileage";
}
function isExpenseItemDraft(item) {
  return item.status === "draft";
}
function isExpenseItemSubmitted(item) {
  return item.status !== "draft";
}
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
function inferFormTypeId(expenseTypeId, expenseTypes) {
  var _a;
  if (expenseTypeId == null) return null;
  return ((_a = expenseTypes.find((et) => parseInt(et.id, 10) === expenseTypeId)) == null ? void 0 : _a.formTypeId) ?? null;
}
function inferTotalCurrencyCode(response) {
  var _a, _b;
  return ((_a = response.paymentMethod) == null ? void 0 : _a.currencyCode) ?? ((_b = response.country) == null ? void 0 : _b.defaultCurrencyIso) ?? DEFAULT_CURRENCY_CODE;
}
function resolveRateUnit(expenseTypeId, expenseTypes) {
  if (expenseTypeId == null) return "km";
  const found = expenseTypes.find(
    (et) => parseInt(et.id, 10) === expenseTypeId
  );
  return (found == null ? void 0 : found.unitOfMeasurement) === "mile" ? "mi" : "km";
}
function mapFileMetadataToAttachment(file) {
  var _a;
  return {
    id: file.id,
    url: FILE_ENDPOINTS.DOWNLOAD(file.id),
    filename: file.name,
    originalName: file.name,
    size: file.size,
    type: ((_a = file.mimeType) == null ? void 0 : _a.split("/")[1]) || "unknown",
    mimeType: file.mimeType ?? "",
    uploadedAt: file.uploadedAt,
    status: "uploaded"
  };
}
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
function resolveCurrencySymbol(code, currencies) {
  var _a;
  return ((_a = currencies.find((c) => c.isoCode === code)) == null ? void 0 : _a.symbol) ?? getCurrencySymbol(code);
}
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
function inferEqualSplit(allocations) {
  if (allocations.length <= 1) return true;
  const first = Number(allocations[0].percentage);
  return allocations.every((a) => Number(a.percentage) === first);
}
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
    expenseDate: response.expenseDate ?? "",
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
function mapToMileageTripFormData(response, isDraft, context) {
  var _a, _b, _c;
  const { totalCurrency } = buildCurrencyInfo(response, context.currencies ?? []);
  return {
    formType: "trip",
    mileageType: isDraft ? stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    expenseDate: response.expenseDate ?? "",
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
function mapToMileagePeriodFormData(response, isDraft, context) {
  var _a, _b, _c;
  const supportingFiles = (response.files ?? []).filter((f) => f.documentType === "supporting").map(mapFileMetadataToAttachment);
  const { totalCurrency } = buildCurrencyInfo(response, context.currencies ?? []);
  return {
    formType: "period",
    mileageType: isDraft ? stringifyEntityId(response.expenseTypeId) : response.expenseType ?? "",
    // Fallback to today for non-period expenses where these fields are null
    expensePeriod: {
      from: response.periodStart ? new Date(response.periodStart) : /* @__PURE__ */ new Date(),
      to: response.periodEnd ? new Date(response.periodEnd) : /* @__PURE__ */ new Date()
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
function buildBaseFields(response) {
  return {
    id: String(response.expenseId),
    createdAt: response.createdDate ?? "",
    updatedAt: response.updatedDate ?? response.createdDate ?? "",
    userId: response.createdBy ?? ""
  };
}
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
const initialState = {
  userDefaultCountryIso: null
};
const useCountryStore = create()(
  devtools(
    subscribeWithSelector(
      immer((set) => ({
        ...initialState,
        setUserDefaultCountryIso: (country) => set((state) => {
          state.userDefaultCountryIso = country;
        }),
        reset: () => set(() => initialState)
      }))
    ),
    {
      name: "country-storage"
    }
  )
);
const { useEffect } = await importShared("react");
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
    taxTypeId: isMileage ? frontend.taxTypeId ?? null : null,
    effectiveDate: isMileage && frontend.effectiveFrom ? `${frontend.effectiveFrom.getFullYear()}/${String(frontend.effectiveFrom.getMonth() + 1).padStart(2, "0")}` : null
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
const useDefaultCurrency = () => {
  var _a, _b;
  const { data: countries } = useCountries();
  const { userDefaultCountryIso } = useDefaultCountry();
  const { data: currencies } = useCurrencies();
  const defaultCurrencyCode = ((_a = countries == null ? void 0 : countries.find((c) => c.isoCode === userDefaultCountryIso)) == null ? void 0 : _a.defaultCurrencyIso) || DEFAULT_CURRENCY_CODE;
  const defaultCurrencySymbol = ((_b = currencies == null ? void 0 : currencies.find((c) => c.isoCode === defaultCurrencyCode)) == null ? void 0 : _b.symbol) || getCurrencySymbol(defaultCurrencyCode);
  return {
    defaultCurrencyCode,
    defaultCurrencySymbol
  };
};
const useCountries = () => {
  return useQuery({
    queryKey: queryKeys.countries.list(),
    queryFn: async () => {
      const response = await apiClient.get(CONFIGURATION_ENDPOINTS.COUNTRIES);
      return response.data;
    },
    select: (data) => data.items,
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
};
const useCountriesFull = () => {
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
const useDefaultCountry = () => {
  const { userDefaultCountryIso, setUserDefaultCountryIso } = useCountryStore();
  const { data, isLoading } = useCountriesFull();
  useEffect(() => {
    if (data && data.userDefaultCountryIso && !isLoading) {
      if (!userDefaultCountryIso) {
        setUserDefaultCountryIso(data.userDefaultCountryIso);
      }
    }
  }, [userDefaultCountryIso, setUserDefaultCountryIso, data, isLoading]);
  return {
    userDefaultCountryIso,
    isLoading
  };
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
const findCachedExpenseTypes = (queryClient) => {
  var _a;
  return ((_a = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() }).find(([, data]) => Array.isArray(data) && data.length > 0)) == null ? void 0 : _a[1]) ?? [];
};
const useExpenseItem = (itemId, options = {}) => {
  const { enabled = true } = options;
  const company = useCompanyStore((s) => {
    var _a;
    return ((_a = s.selectedCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: itemId ? queryKeys.expenseItem.detail(itemId) : queryKeys.expenseItem.details(),
    queryFn: async () => {
      if (!itemId || !company) throw new Error("Item ID and company are required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_EXPENSE_FORM(company, itemId)
      );
      const expenseTypes = findCachedExpenseTypes(queryClient);
      const currencies = queryClient.getQueryData(queryKeys.currencies.list()) ?? [];
      return mapSingleExpenseFormToExpenseItem(response.data, { expenseTypes, currencies });
    },
    enabled: enabled && !!itemId && !!company,
    retry: false,
    staleTime: 30 * 1e3
  });
};
export {
  AllowedMimeType as A,
  ExpenseTypeScope as B,
  useEscapeHandler as C,
  useCreateExpenseType as D,
  ECostAllocation as E,
  FormTypeId as F,
  useUpdateExpenseType as G,
  useToggleExpenseTypeStatus as H,
  ItemCategory as I,
  useFormTypeOptions as J,
  MileageRateStatus as K,
  MIME_TYPE_CONFIG as M,
  useFormTypes as a,
  useExpenseTypes as b,
  useMutation as c,
  useCountries as d,
  useDefaultCountry as e,
  ExpenseFormType as f,
  FILE_SIZE_LIMITS as g,
  useDebouncedCallback as h,
  useFormTypeId as i,
  FilePreviewType as j,
  FILE_ENDPOINTS as k,
  useCurrencies as l,
  useTaxTypesDisplay as m,
  useDefaultCurrency as n,
  useFormTypeName as o,
  isRegularExpense as p,
  isMileageExpense as q,
  isExpenseItemSubmitted as r,
  useNavigateBack as s,
  useExpenseItem as t,
  usePreventPageReload as u,
  isExpenseItemDraft as v,
  Mutation as w,
  infiniteQueryBehavior as x,
  hasPreviousPage as y,
  hasNextPage as z
};

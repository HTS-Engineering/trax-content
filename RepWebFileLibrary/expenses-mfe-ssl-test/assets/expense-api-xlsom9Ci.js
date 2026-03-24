import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as create, d as devtools, s as subscribeWithSelector, i as immer, a as apiClient } from "./axiosInstance-BTNM_CBw.js";
import { a0 as CONFIGURATION_ENDPOINTS } from "./configuration-DWZWsCI4.js";
import { b as devWarn } from "./index-D4vrrc7u.js";
const initialState$1 = {
  selectedCompany: null,
  userDefaultCompany: null
};
const useCompanyStore = create()(
  devtools(
    subscribeWithSelector(
      immer((set) => ({
        ...initialState$1,
        setSelectedCompany: (company) => set((state) => {
          state.selectedCompany = company;
        }),
        setUserDefaultCompany: (company) => set((state) => {
          state.userDefaultCompany = company;
        }),
        reset: () => set(() => initialState$1)
      }))
    ),
    {
      name: "company-storage"
    }
  )
);
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
var FocusManager = class extends Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    var _a;
    if (!this.hasListeners()) {
      (_a = this.#cleanup) == null ? void 0 : _a.call(this);
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _a;
    this.#setup = setup;
    (_a = this.#cleanup) == null ? void 0 : _a.call(this);
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    var _a;
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return ((_a = globalThis.document) == null ? void 0 : _a.visibilityState) !== "hidden";
  }
};
var focusManager = new FocusManager();
var defaultTimeoutProvider = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (callback, delay) => setTimeout(callback, delay),
  clearTimeout: (timeoutId) => clearTimeout(timeoutId),
  setInterval: (callback, delay) => setInterval(callback, delay),
  clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support ReturnType<typeof setTimeout>, which is infeasible.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #provider = defaultTimeoutProvider;
  #providerCalled = false;
  setTimeoutProvider(provider) {
    this.#provider = provider;
  }
  setTimeout(callback, delay) {
    return this.#provider.setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    this.#provider.clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    return this.#provider.setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    this.#provider.clearInterval(intervalId);
  }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
  if (a === b) {
    return a;
  }
  if (depth > 500) return b;
  const array = isPlainArray(a) && isPlainArray(b);
  if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
  const aItems = array ? a : Object.keys(a);
  const aSize = aItems.length;
  const bItems = array ? b : Object.keys(b);
  const bSize = bItems.length;
  const copy = array ? new Array(bSize) : {};
  let equalItems = 0;
  for (let i = 0; i < bSize; i++) {
    const key = array ? i : bItems[i];
    const aItem = a[key];
    const bItem = b[key];
    if (aItem === bItem) {
      copy[key] = aItem;
      if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
      continue;
    }
    if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
      copy[key] = bItem;
      continue;
    }
    const v = replaceEqualDeep(aItem, bItem, depth + 1);
    copy[key] = v;
    if (v === aItem) equalItems++;
  }
  return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
  if (!b || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    timeoutManager.setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function keepPreviousData(previousData) {
  return previousData;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (!options.queryFn && (fetchOptions == null ? void 0 : fetchOptions.initialPromise)) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
  if (typeof throwOnError === "function") {
    return throwOnError(...params);
  }
  return !!throwOnError;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
  let consumed = false;
  let signal;
  Object.defineProperty(object, "signal", {
    enumerable: true,
    get: () => {
      signal ??= getSignal();
      if (consumed) {
        return signal;
      }
      consumed = true;
      if (signal.aborted) {
        onCancelled();
      } else {
        signal.addEventListener("abort", onCancelled, { once: true });
      }
      return signal;
    }
  });
  return object;
}
var environmentManager = /* @__PURE__ */ (() => {
  let isServerFn = () => isServer;
  return {
    /**
     * Returns whether the current runtime should be treated as a server environment.
     */
    isServer() {
      return isServerFn();
    },
    /**
     * Overrides the server check globally.
     */
    setIsServer(isServerValue) {
      isServerFn = isServerValue;
    }
  };
})();
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();
var OnlineManager = class extends Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    var _a;
    if (!this.hasListeners()) {
      (_a = this.#cleanup) == null ? void 0 : _a.call(this);
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _a;
    this.#setup = setup;
    (_a = this.#cleanup) == null ? void 0 : _a.call(this);
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }
};
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    var _a;
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      (_a = config.onCancel) == null ? void 0 : _a.call(config, error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      var _a;
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      (_a = config.onPause) == null ? void 0 : _a.call(config);
    }).then(() => {
      var _a;
      continueFn = void 0;
      if (!isResolved()) {
        (_a = config.onContinue) == null ? void 0 : _a.call(config);
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      var _a;
      if (isResolved()) {
        return;
      }
      const retry = config.retry ?? (environmentManager.isServer() ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      (_a = config.onFail) == null ? void 0 : _a.call(config, failureCount, error);
      sleep(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn == null ? void 0 : continueFn();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }
  };
}
var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      this.#gcTimeout = timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (environmentManager.isServer() ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      timeoutManager.clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};
var Query = class extends Removable {
  #initialState;
  #revertState;
  #cache;
  #client;
  #retryer;
  #defaultOptions;
  #abortSignalConsumed;
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.#client = config.client;
    this.#cache = this.#client.getQueryCache();
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = getDefaultState$1(this.options);
    this.state = config.state ?? this.#initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var _a;
    return (_a = this.#retryer) == null ? void 0 : _a.promise;
  }
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState$1(this.options);
      if (defaultState.data !== void 0) {
        this.setState(
          successState(defaultState.data, defaultState.dataUpdatedAt)
        );
        this.#initialState = defaultState;
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    var _a, _b;
    const promise = (_a = this.#retryer) == null ? void 0 : _a.promise;
    (_b = this.#retryer) == null ? void 0 : _b.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => resolveStaleTime(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    var _a;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a = this.#retryer) == null ? void 0 : _a.continue();
  }
  onOnline() {
    var _a;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a = this.#retryer) == null ? void 0 : _a.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    ((_a = this.#retryer) == null ? void 0 : _a.status()) !== "rejected") {
      if (this.state.data !== void 0 && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({ silent: true });
      } else if (this.#retryer) {
        this.#retryer.continueRetry();
        return this.#retryer.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        }
      });
    };
    const fetchFn = () => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const createQueryFnContext = () => {
        const queryFnContext2 = {
          client: this.#client,
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      };
      const queryFnContext = createQueryFnContext();
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    };
    const createFetchContext = () => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#client,
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    };
    const context = createFetchContext();
    (_b = this.options.behavior) == null ? void 0 : _b.onFetch(context, this);
    this.#revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_c = context.fetchOptions) == null ? void 0 : _c.meta)) {
      this.#dispatch({ type: "fetch", meta: (_d = context.fetchOptions) == null ? void 0 : _d.meta });
    }
    this.#retryer = createRetryer({
      initialPromise: fetchOptions == null ? void 0 : fetchOptions.initialPromise,
      fn: context.fetchFn,
      onCancel: (error) => {
        if (error instanceof CancelledError && error.revert) {
          this.setState({
            ...this.#revertState,
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.#dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true
    });
    try {
      const data = await this.#retryer.start();
      if (data === void 0) {
        if (false) ;
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      (_f = (_e = this.#cache.config).onSuccess) == null ? void 0 : _f.call(_e, data, this);
      (_h = (_g = this.#cache.config).onSettled) == null ? void 0 : _h.call(
        _g,
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof CancelledError) {
        if (error.silent) {
          return this.#retryer.promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      this.#dispatch({
        type: "error",
        error
      });
      (_j = (_i = this.#cache.config).onError) == null ? void 0 : _j.call(
        _i,
        error,
        this
      );
      (_l = (_k = this.#cache.config).onSettled) == null ? void 0 : _l.call(
        _k,
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          const newState = {
            ...state,
            ...successState(action.data, action.dataUpdatedAt),
            dataUpdateCount: state.dataUpdateCount + 1,
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          this.#revertState = action.manual ? newState : void 0;
          return newState;
        case "error":
          const error = action.error;
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error",
            // flag existing data as invalidated if we get a background error
            // note that "no data" always means stale so we can set unconditionally here
            isInvalidated: true
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: "updated", action });
    });
  }
};
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function successState(data, dataUpdatedAt) {
  return {
    data,
    dataUpdatedAt: dataUpdatedAt ?? Date.now(),
    error: null,
    isInvalidated: false,
    status: "success"
  };
}
function getDefaultState$1(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var QueryObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.options = options;
    this.#client = client;
    this.#selectError = null;
    this.#currentThenable = pendingThenable();
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #currentThenable;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    this.#updateQuery();
    this.#currentQuery.setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked == null ? void 0 : onPropTracked(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
            this.#currentThenable.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    this.#trackedProps.add(key);
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    const staleTime = resolveStaleTime(
      this.options.staleTime,
      this.#currentQuery
    );
    if (environmentManager.isServer() || this.#currentResult.isStale || !isValidTimeout(staleTime)) {
      return;
    }
    const time = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime);
    const timeout = time + 1;
    this.#staleTimeoutId = timeoutManager.setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (environmentManager.isServer() || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = timeoutManager.setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      timeoutManager.clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      timeoutManager.clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    var _a;
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a = this.#lastQueryWithDefinedData) == null ? void 0 : _a.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: this.#currentThenable,
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = this.#currentThenable = nextResult.promise = pendingThenable();
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = this.#currentThenable;
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    this.#notify({ listeners: shouldNotifyListeners() });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
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
const React$5 = await importShared("react");
var QueryClientContext = React$5.createContext(
  void 0
);
var useQueryClient = (queryClient) => {
  const client = React$5.useContext(QueryClientContext);
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
};
var QueryClientProvider = ({
  client,
  children
}) => {
  React$5.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientContext.Provider, { value: client, children });
};
const React$4 = await importShared("react");
var IsRestoringContext = React$4.createContext(false);
var useIsRestoring = () => React$4.useContext(IsRestoringContext);
IsRestoringContext.Provider;
const React$3 = await importShared("react");
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = React$3.createContext(createValue());
var useQueryErrorResetBoundary = () => React$3.useContext(QueryErrorResetBoundaryContext);
const React$2 = await importShared("react");
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  React$2.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
const React$1 = await importShared("react");
function useBaseQuery(options, Observer, queryClient) {
  var _a, _b, _c, _d;
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = useQueryClient();
  const defaultedOptions = client.defaultQueryOptions(options);
  (_b = (_a = client.getDefaultOptions().queries) == null ? void 0 : _a._experimental_beforeQuery) == null ? void 0 : _b.call(
    _a,
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = React$1.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  React$1.useSyncExternalStore(
    React$1.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React$1.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  (_d = (_c = client.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null ? void 0 : _d.call(
    _c,
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query == null ? void 0 : query.promise
    );
    promise == null ? void 0 : promise.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
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
const EXPENSE_ENDPOINTS = {
  // Draft operations (require company)
  SAVE_DRAFT: (company) => `/api/v1.0/expense-forms/${company}/drafts`,
  GET_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}`,
  UPDATE_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}`,
  DELETE_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}`,
  SUBMIT_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}/submit`,
  // List operations
  GET_EXPENSES: (company) => `/api/v1.0/expense-forms/${company}`,
  GET_EXPENSES_LIST: "/api/v1.0/expenses-list",
  // Single expense form by ID (any status: draft, submitted, etc.)
  GET_EXPENSE_FORM: (company, id) => `/api/v1.0/expense-forms/${company}/${id}`,
  // Approval history
  GET_APPROVAL_HISTORY: (company, expenseFormId) => `/api/v1.0/approvals/${company}/${expenseFormId}/approval-history`,
  // Payment methods
  GET_PAYMENT_METHODS: (company) => `/api/v1.0/expense-forms/${company}/payment-methods`,
  // Approvals
  GET_APPROVALS: (company) => `/api/v1.0/approvals/${company}`,
  SAVE_COST_ALLOCATION: (expenseFormId) => `/api/v1.0/expense-forms/cost-allocation/${encodeURIComponent(expenseFormId)}`,
  // Cost allocation lookups
  COST_ALLOCATION_SALES_REP: "/api/v1.0/expense-forms/cost-allocation/sales-rep",
  COST_ALLOCATION_SALES_TEAMS: "/api/v1.0/expense-forms/cost-allocation/sales-teams",
  COST_ALLOCATION_PROJECT: (poId) => `/api/v1.0/expense-forms/cost-allocation/project/${encodeURIComponent(poId)}`,
  COST_ALLOCATION_ADMIN: (poId) => `/api/v1.0/expense-forms/cost-allocation/admin/${encodeURIComponent(poId)}`
};
var QueryKeyScope = /* @__PURE__ */ ((QueryKeyScope2) => {
  QueryKeyScope2["COMPANIES"] = "companies";
  QueryKeyScope2["BUSINESS_PURPOSES"] = "businessPurposes";
  QueryKeyScope2["EXPENSE_TYPES"] = "expenseTypes";
  QueryKeyScope2["FORM_TYPES"] = "formTypes";
  QueryKeyScope2["MILEAGE_RATES"] = "mileageRates";
  QueryKeyScope2["TAX_TYPES"] = "taxTypes";
  QueryKeyScope2["UNIT_OF_MEASUREMENTS"] = "unitOfMeasurements";
  QueryKeyScope2["EXPENSES"] = "expenses";
  QueryKeyScope2["EXPENSE_DRAFTS"] = "expenseDrafts";
  QueryKeyScope2["EXPENSE_ITEM"] = "expenseItem";
  QueryKeyScope2["EXPENSE_HISTORY"] = "expenseHistory";
  QueryKeyScope2["EXPENSES_LIST"] = "expensesList";
  QueryKeyScope2["MILEAGE_TRIPS"] = "mileageTrips";
  QueryKeyScope2["MILEAGE_PERIODS"] = "mileagePeriods";
  QueryKeyScope2["MILEAGE_DRAFTS"] = "mileageDrafts";
  QueryKeyScope2["EXPENSE_TYPE_USERS"] = "expenseTypeUsers";
  QueryKeyScope2["CURRENCIES"] = "currencies";
  QueryKeyScope2["COUNTRIES"] = "countries";
  QueryKeyScope2["PAYMENT_METHODS"] = "paymentMethods";
  QueryKeyScope2["APPROVALS_LIST"] = "approvalsList";
  return QueryKeyScope2;
})(QueryKeyScope || {});
var QueryKeyOperation = /* @__PURE__ */ ((QueryKeyOperation2) => {
  QueryKeyOperation2["LIST"] = "list";
  QueryKeyOperation2["DETAIL"] = "detail";
  return QueryKeyOperation2;
})(QueryKeyOperation || {});
const queryKeys = {
  companies: {
    all: () => [QueryKeyScope.COMPANIES],
    lists: () => [QueryKeyScope.COMPANIES, QueryKeyOperation.LIST],
    list: () => [...queryKeys.companies.lists()],
    details: () => [QueryKeyScope.COMPANIES, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.companies.details(), id]
  },
  businessPurposes: {
    all: () => [QueryKeyScope.BUSINESS_PURPOSES],
    lists: () => [QueryKeyScope.BUSINESS_PURPOSES, QueryKeyOperation.LIST],
    list: (companyShortName, includeInactive) => [...queryKeys.businessPurposes.lists(), { companyShortName, includeInactive }],
    details: () => [QueryKeyScope.BUSINESS_PURPOSES, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.businessPurposes.details(), id]
  },
  expenseTypes: {
    all: () => [QueryKeyScope.EXPENSE_TYPES],
    lists: () => [QueryKeyScope.EXPENSE_TYPES, QueryKeyOperation.LIST],
    list: (companyShortName, includeInactive) => [...queryKeys.expenseTypes.lists(), { companyShortName, includeInactive }],
    details: () => [QueryKeyScope.EXPENSE_TYPES, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.expenseTypes.details(), id]
  },
  formTypes: {
    all: () => [QueryKeyScope.FORM_TYPES],
    lists: () => [QueryKeyScope.FORM_TYPES, QueryKeyOperation.LIST],
    list: () => [...queryKeys.formTypes.lists()],
    details: () => [QueryKeyScope.FORM_TYPES, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.formTypes.details(), id]
  },
  mileageRates: {
    all: () => [QueryKeyScope.MILEAGE_RATES],
    lists: () => [QueryKeyScope.MILEAGE_RATES, QueryKeyOperation.LIST],
    list: () => [...queryKeys.mileageRates.lists()],
    byMileageRateId: (companyShortName, mileageRateId) => [...queryKeys.mileageRates.lists(), { companyShortName, mileageRateId }],
    details: () => [QueryKeyScope.MILEAGE_RATES, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.mileageRates.details(), id]
  },
  taxTypes: {
    all: () => [QueryKeyScope.TAX_TYPES],
    list: (companyShortName) => [QueryKeyScope.TAX_TYPES, QueryKeyOperation.LIST, { companyShortName }]
  },
  unitOfMeasurements: {
    all: () => [QueryKeyScope.UNIT_OF_MEASUREMENTS],
    lists: () => [QueryKeyScope.UNIT_OF_MEASUREMENTS, QueryKeyOperation.LIST],
    list: (showInactive) => [...queryKeys.unitOfMeasurements.lists(), { showInactive }]
  },
  expenses: {
    all: () => [QueryKeyScope.EXPENSES],
    lists: () => [QueryKeyScope.EXPENSES, QueryKeyOperation.LIST],
    list: () => [...queryKeys.expenses.lists()],
    details: () => [QueryKeyScope.EXPENSES, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.expenses.details(), id]
  },
  expenseDrafts: {
    all: () => [QueryKeyScope.EXPENSE_DRAFTS],
    lists: () => [QueryKeyScope.EXPENSE_DRAFTS, QueryKeyOperation.LIST],
    list: () => [...queryKeys.expenseDrafts.lists()],
    details: () => [QueryKeyScope.EXPENSE_DRAFTS, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.expenseDrafts.details(), id]
  },
  mileageTrips: {
    all: () => [QueryKeyScope.MILEAGE_TRIPS],
    lists: () => [QueryKeyScope.MILEAGE_TRIPS, QueryKeyOperation.LIST],
    list: () => [...queryKeys.mileageTrips.lists()],
    details: () => [QueryKeyScope.MILEAGE_TRIPS, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.mileageTrips.details(), id]
  },
  mileagePeriods: {
    all: () => [QueryKeyScope.MILEAGE_PERIODS],
    lists: () => [QueryKeyScope.MILEAGE_PERIODS, QueryKeyOperation.LIST],
    list: () => [...queryKeys.mileagePeriods.lists()],
    details: () => [QueryKeyScope.MILEAGE_PERIODS, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.mileagePeriods.details(), id]
  },
  mileageDrafts: {
    all: () => [QueryKeyScope.MILEAGE_DRAFTS],
    lists: () => [QueryKeyScope.MILEAGE_DRAFTS, QueryKeyOperation.LIST],
    list: () => [...queryKeys.mileageDrafts.lists()],
    details: () => [QueryKeyScope.MILEAGE_DRAFTS, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.mileageDrafts.details(), id]
  },
  expenseItem: {
    all: () => [QueryKeyScope.EXPENSE_ITEM],
    details: () => [QueryKeyScope.EXPENSE_ITEM, QueryKeyOperation.DETAIL],
    detail: (id) => [...queryKeys.expenseItem.details(), id]
  },
  expensesList: {
    all: () => [QueryKeyScope.EXPENSES_LIST],
    lists: () => [QueryKeyScope.EXPENSES_LIST, QueryKeyOperation.LIST],
    list: (params) => [...queryKeys.expensesList.lists(), params]
  },
  expenseTypeUsers: {
    all: () => [QueryKeyScope.EXPENSE_TYPE_USERS],
    lists: () => [QueryKeyScope.EXPENSE_TYPE_USERS, QueryKeyOperation.LIST],
    list: (companyShortName, expenseTypeId) => [...queryKeys.expenseTypeUsers.lists(), { companyShortName, expenseTypeId }]
  },
  currencies: {
    all: () => [QueryKeyScope.CURRENCIES],
    lists: () => [QueryKeyScope.CURRENCIES, QueryKeyOperation.LIST],
    list: () => [...queryKeys.currencies.lists()]
  },
  countries: {
    all: () => [QueryKeyScope.COUNTRIES],
    lists: () => [QueryKeyScope.COUNTRIES, QueryKeyOperation.LIST],
    list: () => [...queryKeys.countries.lists()]
  },
  paymentMethods: {
    all: () => [QueryKeyScope.PAYMENT_METHODS],
    lists: () => [QueryKeyScope.PAYMENT_METHODS, QueryKeyOperation.LIST],
    list: (companyShortName) => [...queryKeys.paymentMethods.lists(), { companyShortName }]
  },
  expenseHistory: {
    all: () => [QueryKeyScope.EXPENSE_HISTORY],
    details: () => [QueryKeyScope.EXPENSE_HISTORY, QueryKeyOperation.DETAIL],
    detail: (companyShortName, expenseFormId) => [...queryKeys.expenseHistory.details(), { companyShortName, expenseFormId }]
  },
  approvalsList: {
    all: () => [QueryKeyScope.APPROVALS_LIST],
    lists: () => [QueryKeyScope.APPROVALS_LIST, QueryKeyOperation.LIST],
    list: (params) => [...queryKeys.approvalsList.lists(), params]
  }
};
const { useEffect: useEffect$1 } = await importShared("react");
const mapToLogicalCompany = (apiCompany) => ({
  id: apiCompany.logicalCompanyShortName,
  name: apiCompany.logicalCompanyName,
  shortName: apiCompany.logicalCompanyShortName,
  isDefault: apiCompany.defaultLogicalCompany
});
const useCompanies = () => {
  return useQuery({
    queryKey: queryKeys.companies.list(),
    queryFn: async () => {
      const response = await apiClient.get(
        CONFIGURATION_ENDPOINTS.LOGICAL_COMPANIES
      );
      return response.data.items.map(mapToLogicalCompany);
    },
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  });
};
const useDefaultCompany = () => {
  const { selectedCompany, userDefaultCompany, setSelectedCompany, setUserDefaultCompany } = useCompanyStore();
  const { data: companiesData, isLoading } = useCompanies();
  useEffect$1(() => {
    if (companiesData && companiesData.length > 0 && !isLoading) {
      const defaultCompany = companiesData.find((c) => c.isDefault) || companiesData[0];
      if (!userDefaultCompany) {
        setUserDefaultCompany(defaultCompany);
      }
      if (!selectedCompany) {
        setSelectedCompany(defaultCompany);
      }
    }
  }, [selectedCompany, userDefaultCompany, companiesData, isLoading, setSelectedCompany, setUserDefaultCompany]);
  return {
    company: selectedCompany || (companiesData && companiesData.length > 0 ? companiesData[0] : null),
    userDefaultCompany,
    isLoading
  };
};
const EMPTY_CURRENCY_SYMBOL = "-";
const getCurrencySymbol = (code) => {
  var _a;
  if (!code) return EMPTY_CURRENCY_SYMBOL;
  try {
    return ((_a = new Intl.NumberFormat("en", {
      style: "currency",
      currency: code,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((part) => part.type === "currency")) == null ? void 0 : _a.value) ?? EMPTY_CURRENCY_SYMBOL;
  } catch {
    return EMPTY_CURRENCY_SYMBOL;
  }
};
const DEFAULT_CURRENCY = {
  code: "CAD",
  symbol: "$"
};
const DEFAULT_CURRENCY_CODE = DEFAULT_CURRENCY.code;
const DEFAULT_CURRENCY_SYMBOL = DEFAULT_CURRENCY.symbol;
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
function getExpenseItemAmount(item) {
  if (isRegularExpense(item)) {
    return item.data.totalAmount;
  }
  return item.data.reimbursableAmount;
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
  useBaseQuery as $,
  AllowedMimeType as A,
  FILE_SIZE_LIMITS as B,
  FilePreviewType as C,
  DEFAULT_CURRENCY_CODE as D,
  EXPENSE_ENDPOINTS as E,
  FormTypeId as F,
  useDefaultCountry as G,
  getCurrencySymbol as H,
  ItemCategory as I,
  Mutation as J,
  notifyManager as K,
  matchMutation as L,
  MIME_TYPE_CONFIG as M,
  noop as N,
  hashQueryKeyByOptions as O,
  Query as P,
  QueryClientProvider as Q,
  matchQuery as R,
  Subscribable as S,
  focusManager as T,
  onlineManager as U,
  resolveStaleTime as V,
  functionalUpdate as W,
  hashKey as X,
  partialMatchKey as Y,
  skipToken as Z,
  QueryObserver as _,
  useCompanyStore as a,
  ExpenseTypeScope as a0,
  useCreateExpenseType as a1,
  useUpdateExpenseType as a2,
  useToggleExpenseTypeStatus as a3,
  useFormTypeOptions as a4,
  MileageRateStatus as a5,
  DEFAULT_CURRENCY_SYMBOL as a6,
  ensureQueryFn as a7,
  addToStart as a8,
  addToEnd as a9,
  addConsumeAwareSignal as aa,
  DEFAULT_CURRENCY as ab,
  useFormTypes as b,
  useExpenseTypes as c,
  useQuery as d,
  isRegularExpense as e,
  useQueryClient as f,
  getExpenseItemAmount as g,
  useMutation as h,
  isExpenseItemSubmitted as i,
  isMileageExpense as j,
  keepPreviousData as k,
  useExpenseItem as l,
  useDefaultCompany as m,
  useCurrencies as n,
  useCountries as o,
  useTaxTypesDisplay as p,
  queryKeys as q,
  useDefaultCurrency as r,
  useFormTypeId as s,
  ExpenseFormType as t,
  useCompanies as u,
  isExpenseItemDraft as v,
  FILE_ENDPOINTS as w,
  useFormTypeName as x,
  EMPTY_CURRENCY_SYMBOL as y,
  ECostAllocation as z
};

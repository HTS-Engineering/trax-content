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
var _a, _focused, _cleanup, _setup, _b, _provider, _providerCalled, _c, _online, _cleanup2, _setup2, _d, _e, _gcTimeout, _f, _queryType, _initialState, _revertState, _cache, _client, _retryer, _defaultOptions, _abortSignalConsumed, __this_instances, isInitialPausedFetch_fn, dispatch_fn, _g, _client2, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, __this_instances2, executeFetch_fn, updateStaleTimeout_fn, computeRefetchInterval_fn, updateRefetchInterval_fn, updateTimers_fn, clearStaleTimeout_fn, clearRefetchInterval_fn, updateQuery_fn, notify_fn, _h;
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, ac as devDebug } from "./index-CFVMMdzN.js";
import { c as create, d as devtools } from "./middleware-BxIPYTl9.js";
var Subscribable = (_a = class {
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
}, __name(_a, "Subscribable"), _a);
var FocusManager = (_b = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _focused);
    __privateAdd(this, _cleanup);
    __privateAdd(this, _setup);
    __privateSet(this, _setup, (onFocus) => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const listener = /* @__PURE__ */ __name(() => onFocus(), "listener");
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup)) {
      this.setEventListener(__privateGet(this, _setup));
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _cleanup)) == null ? void 0 : _a2.call(this);
      __privateSet(this, _cleanup, void 0);
    }
  }
  setEventListener(setup) {
    var _a2;
    __privateSet(this, _setup, setup);
    (_a2 = __privateGet(this, _cleanup)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _cleanup, setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    }));
  }
  setFocused(focused) {
    const changed = __privateGet(this, _focused) !== focused;
    if (changed) {
      __privateSet(this, _focused, focused);
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
    var _a2;
    if (typeof __privateGet(this, _focused) === "boolean") {
      return __privateGet(this, _focused);
    }
    return ((_a2 = globalThis.document) == null ? void 0 : _a2.visibilityState) !== "hidden";
  }
}, _focused = new WeakMap(), _cleanup = new WeakMap(), _setup = new WeakMap(), __name(_b, "FocusManager"), _b);
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
  setTimeout: /* @__PURE__ */ __name((callback, delay) => setTimeout(callback, delay), "setTimeout"),
  clearTimeout: /* @__PURE__ */ __name((timeoutId) => clearTimeout(timeoutId), "clearTimeout"),
  setInterval: /* @__PURE__ */ __name((callback, delay) => setInterval(callback, delay), "setInterval"),
  clearInterval: /* @__PURE__ */ __name((intervalId) => clearInterval(intervalId), "clearInterval")
};
var TimeoutManager = (_c = class {
  constructor() {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support the default provider's concrete timer ID, which is
    // infeasible across environments.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    __privateAdd(this, _provider, defaultTimeoutProvider);
    __privateAdd(this, _providerCalled, false);
  }
  setTimeoutProvider(provider) {
    __privateSet(this, _provider, provider);
  }
  setTimeout(callback, delay) {
    return __privateGet(this, _provider).setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    __privateGet(this, _provider).clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    return __privateGet(this, _provider).setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    __privateGet(this, _provider).clearInterval(intervalId);
  }
}, _provider = new WeakMap(), _providerCalled = new WeakMap(), __name(_c, "TimeoutManager"), _c);
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}
__name(systemSetTimeoutZero, "systemSetTimeoutZero");
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {
}
__name(noop, "noop");
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
__name(functionalUpdate, "functionalUpdate");
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
__name(isValidTimeout, "isValidTimeout");
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
__name(timeUntilStale, "timeUntilStale");
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
__name(resolveStaleTime, "resolveStaleTime");
function resolveQueryBoolean(option, query) {
  return typeof option === "function" ? option(query) : option;
}
__name(resolveQueryBoolean, "resolveQueryBoolean");
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
__name(matchQuery, "matchQuery");
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
__name(matchMutation, "matchMutation");
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashKey;
  return hashFn(queryKey);
}
__name(hashQueryKeyByOptions, "hashQueryKeyByOptions");
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
__name(hashKey, "hashKey");
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (Array.isArray(a) && Array.isArray(b)) {
      for (let i = 0; i < b.length; i++) {
        if (!partialMatchKey(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    const bKeys = Object.keys(b);
    for (const key of bKeys) {
      if (!partialMatchKey(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
__name(partialMatchKey, "partialMatchKey");
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
__name(replaceEqualDeep, "replaceEqualDeep");
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
__name(shallowEqualObjects, "shallowEqualObjects");
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
__name(isPlainArray, "isPlainArray");
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
__name(isPlainObject, "isPlainObject");
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
__name(hasObjectPrototype, "hasObjectPrototype");
function sleep$1(timeout) {
  return new Promise((resolve) => {
    timeoutManager.setTimeout(resolve, timeout);
  });
}
__name(sleep$1, "sleep$1");
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
__name(replaceData, "replaceData");
function keepPreviousData(previousData) {
  return previousData;
}
__name(keepPreviousData, "keepPreviousData");
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
__name(addToEnd, "addToEnd");
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
__name(addToStart, "addToStart");
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
__name(ensureQueryFn, "ensureQueryFn");
function shouldThrowError(throwOnError, params) {
  if (typeof throwOnError === "function") {
    return throwOnError(...params);
  }
  return !!throwOnError;
}
__name(shouldThrowError, "shouldThrowError");
function addConsumeAwareSignal(object, getSignal, onCancelled) {
  let consumed = false;
  let signal;
  Object.defineProperty(object, "signal", {
    enumerable: true,
    get: /* @__PURE__ */ __name(() => {
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
    }, "get")
  });
  return object;
}
__name(addConsumeAwareSignal, "addConsumeAwareSignal");
var environmentManager = /* @__PURE__ */ (() => {
  let isServerFn = /* @__PURE__ */ __name(() => isServer, "isServerFn");
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
  __name(finalize, "finalize");
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
__name(pendingThenable, "pendingThenable");
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = /* @__PURE__ */ __name((callback) => {
    callback();
  }, "notifyFn");
  let batchNotifyFn = /* @__PURE__ */ __name((callback) => {
    callback();
  }, "batchNotifyFn");
  let scheduleFn = defaultScheduler;
  const schedule = /* @__PURE__ */ __name((callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  }, "schedule");
  const flush = /* @__PURE__ */ __name(() => {
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
  }, "flush");
  return {
    batch: /* @__PURE__ */ __name((callback) => {
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
    }, "batch"),
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: /* @__PURE__ */ __name((callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    }, "batchCalls"),
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: /* @__PURE__ */ __name((fn) => {
      notifyFn = fn;
    }, "setNotifyFunction"),
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: /* @__PURE__ */ __name((fn) => {
      batchNotifyFn = fn;
    }, "setBatchNotifyFunction"),
    setScheduler: /* @__PURE__ */ __name((fn) => {
      scheduleFn = fn;
    }, "setScheduler")
  };
}
__name(createNotifyManager, "createNotifyManager");
var notifyManager = createNotifyManager();
var OnlineManager = (_d = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _online, true);
    __privateAdd(this, _cleanup2);
    __privateAdd(this, _setup2);
    __privateSet(this, _setup2, (onOnline) => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const onlineListener = /* @__PURE__ */ __name(() => onOnline(true), "onlineListener");
        const offlineListener = /* @__PURE__ */ __name(() => onOnline(false), "offlineListener");
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup2)) {
      this.setEventListener(__privateGet(this, _setup2));
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _cleanup2)) == null ? void 0 : _a2.call(this);
      __privateSet(this, _cleanup2, void 0);
    }
  }
  setEventListener(setup) {
    var _a2;
    __privateSet(this, _setup2, setup);
    (_a2 = __privateGet(this, _cleanup2)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _cleanup2, setup(this.setOnline.bind(this)));
  }
  setOnline(online) {
    const changed = __privateGet(this, _online) !== online;
    if (changed) {
      __privateSet(this, _online, online);
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return __privateGet(this, _online);
  }
}, _online = new WeakMap(), _cleanup2 = new WeakMap(), _setup2 = new WeakMap(), __name(_d, "OnlineManager"), _d);
var onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
__name(defaultRetryDelay, "defaultRetryDelay");
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
__name(canFetch, "canFetch");
var CancelledError = (_e = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }
}, __name(_e, "CancelledError"), _e);
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = /* @__PURE__ */ __name(() => thenable.status !== "pending", "isResolved");
  const cancel = /* @__PURE__ */ __name((cancelOptions) => {
    var _a2;
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      (_a2 = config.onCancel) == null ? void 0 : _a2.call(config, error);
    }
  }, "cancel");
  const cancelRetry = /* @__PURE__ */ __name(() => {
    isRetryCancelled = true;
  }, "cancelRetry");
  const continueRetry = /* @__PURE__ */ __name(() => {
    isRetryCancelled = false;
  }, "continueRetry");
  const canContinue = /* @__PURE__ */ __name(() => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun(), "canContinue");
  const canStart = /* @__PURE__ */ __name(() => canFetch(config.networkMode) && config.canRun(), "canStart");
  const resolve = /* @__PURE__ */ __name((value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.resolve(value);
    }
  }, "resolve");
  const reject = /* @__PURE__ */ __name((value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.reject(value);
    }
  }, "reject");
  const pause = /* @__PURE__ */ __name(() => {
    return new Promise((continueResolve) => {
      var _a2;
      continueFn = /* @__PURE__ */ __name((value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      }, "continueFn");
      (_a2 = config.onPause) == null ? void 0 : _a2.call(config);
    }).then(() => {
      var _a2;
      continueFn = void 0;
      if (!isResolved()) {
        (_a2 = config.onContinue) == null ? void 0 : _a2.call(config);
      }
    });
  }, "pause");
  const run = /* @__PURE__ */ __name(() => {
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
      var _a2;
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
      (_a2 = config.onFail) == null ? void 0 : _a2.call(config, failureCount, error);
      sleep$1(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }, "run");
  return {
    promise: thenable,
    status: /* @__PURE__ */ __name(() => thenable.status, "status"),
    cancel,
    continue: /* @__PURE__ */ __name(() => {
      continueFn == null ? void 0 : continueFn();
      return thenable;
    }, "continue"),
    cancelRetry,
    continueRetry,
    canStart,
    start: /* @__PURE__ */ __name(() => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }, "start")
  };
}
__name(createRetryer, "createRetryer");
var Removable = (_f = class {
  constructor() {
    __privateAdd(this, _gcTimeout);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      __privateSet(this, _gcTimeout, timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (environmentManager.isServer() ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (__privateGet(this, _gcTimeout) !== void 0) {
      timeoutManager.clearTimeout(__privateGet(this, _gcTimeout));
      __privateSet(this, _gcTimeout, void 0);
    }
  }
}, _gcTimeout = new WeakMap(), __name(_f, "Removable"), _f);
function infiniteQueryBehavior(pages) {
  return {
    onFetch: /* @__PURE__ */ __name((context, query) => {
      var _a2, _b2, _c2, _d2, _e2;
      const options = context.options;
      const direction = (_c2 = (_b2 = (_a2 = context.fetchOptions) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c2.direction;
      const oldPages = ((_d2 = context.state.data) == null ? void 0 : _d2.pages) || [];
      const oldPageParams = ((_e2 = context.state.data) == null ? void 0 : _e2.pageParams) || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = /* @__PURE__ */ __name(async () => {
        let cancelled = false;
        const addSignalProperty = /* @__PURE__ */ __name((object) => {
          addConsumeAwareSignal(
            object,
            () => context.signal,
            () => cancelled = true
          );
        }, "addSignalProperty");
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = /* @__PURE__ */ __name(async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject(context.signal.reason);
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = /* @__PURE__ */ __name(() => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          }, "createQueryFnContext");
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        }, "fetchPage");
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
      }, "fetchFn");
      if (context.options.persister) {
        context.fetchFn = () => {
          var _a3, _b3;
          return (_b3 = (_a3 = context.options).persister) == null ? void 0 : _b3.call(
            _a3,
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
    }, "onFetch")
  };
}
__name(infiniteQueryBehavior, "infiniteQueryBehavior");
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
__name(getNextPageParam, "getNextPageParam");
function getPreviousPageParam(options, { pages, pageParams }) {
  var _a2;
  return pages.length > 0 ? (_a2 = options.getPreviousPageParam) == null ? void 0 : _a2.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
__name(getPreviousPageParam, "getPreviousPageParam");
var Query = (_g = class extends Removable {
  constructor(config) {
    super();
    __privateAdd(this, __this_instances);
    __privateAdd(this, _queryType);
    __privateAdd(this, _initialState);
    __privateAdd(this, _revertState);
    __privateAdd(this, _cache);
    __privateAdd(this, _client);
    __privateAdd(this, _retryer);
    __privateAdd(this, _defaultOptions);
    __privateAdd(this, _abortSignalConsumed);
    __privateSet(this, _abortSignalConsumed, false);
    __privateSet(this, _defaultOptions, config.defaultOptions);
    this.setOptions(config.options);
    this.observers = [];
    __privateSet(this, _client, config.client);
    __privateSet(this, _cache, __privateGet(this, _client).getQueryCache());
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    __privateSet(this, _initialState, getDefaultState(this.options));
    this.state = config.state ?? __privateGet(this, _initialState);
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return __privateGet(this, _queryType);
  }
  get promise() {
    var _a2;
    return (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.promise;
  }
  setOptions(options) {
    this.options = { ...__privateGet(this, _defaultOptions), ...options };
    if (options == null ? void 0 : options._type) {
      __privateSet(this, _queryType, options._type);
    }
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState(this.options);
      if (defaultState.data !== void 0) {
        this.setState(
          successState(defaultState.data, defaultState.dataUpdatedAt)
        );
        __privateSet(this, _initialState, defaultState);
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      __privateGet(this, _cache).remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    __privateMethod(this, __this_instances, dispatch_fn).call(this, {
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }
  setState(state) {
    __privateMethod(this, __this_instances, dispatch_fn).call(this, { type: "setState", state });
  }
  cancel(options) {
    var _a2, _b2;
    const promise = (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.promise;
    (_b2 = __privateGet(this, _retryer)) == null ? void 0 : _b2.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  get resetState() {
    return __privateGet(this, _initialState);
  }
  reset() {
    this.destroy();
    this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveQueryBoolean(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
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
    var _a2;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.continue();
  }
  onOnline() {
    var _a2;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      __privateGet(this, _cache).notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (__privateGet(this, _retryer)) {
          if (__privateGet(this, _abortSignalConsumed) || __privateMethod(this, __this_instances, isInitialPausedFetch_fn).call(this)) {
            __privateGet(this, _retryer).cancel({ revert: true });
          } else {
            __privateGet(this, _retryer).cancelRetry();
          }
        }
        this.scheduleGc();
      }
      __privateGet(this, _cache).notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      __privateMethod(this, __this_instances, dispatch_fn).call(this, { type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k;
    if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    ((_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.status()) !== "rejected") {
      if (this.state.data !== void 0 && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({ silent: true });
      } else if (__privateGet(this, _retryer)) {
        __privateGet(this, _retryer).continueRetry();
        return __privateGet(this, _retryer).promise;
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
    const addSignalProperty = /* @__PURE__ */ __name((object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: /* @__PURE__ */ __name(() => {
          __privateSet(this, _abortSignalConsumed, true);
          return abortController.signal;
        }, "get")
      });
    }, "addSignalProperty");
    const fetchFn = /* @__PURE__ */ __name(() => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const createQueryFnContext = /* @__PURE__ */ __name(() => {
        const queryFnContext2 = {
          client: __privateGet(this, _client),
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      }, "createQueryFnContext");
      const queryFnContext = createQueryFnContext();
      __privateSet(this, _abortSignalConsumed, false);
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    }, "fetchFn");
    const createFetchContext = /* @__PURE__ */ __name(() => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: __privateGet(this, _client),
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    }, "createFetchContext");
    const context = createFetchContext();
    const behavior = __privateGet(this, _queryType) === "infinite" ? infiniteQueryBehavior(
      this.options.pages
    ) : this.options.behavior;
    behavior == null ? void 0 : behavior.onFetch(context, this);
    __privateSet(this, _revertState, this.state);
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b2 = context.fetchOptions) == null ? void 0 : _b2.meta)) {
      __privateMethod(this, __this_instances, dispatch_fn).call(this, { type: "fetch", meta: (_c2 = context.fetchOptions) == null ? void 0 : _c2.meta });
    }
    __privateSet(this, _retryer, createRetryer({
      initialPromise: fetchOptions == null ? void 0 : fetchOptions.initialPromise,
      fn: context.fetchFn,
      onCancel: /* @__PURE__ */ __name((error) => {
        if (error instanceof CancelledError && error.revert) {
          this.setState({
            ...__privateGet(this, _revertState),
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      }, "onCancel"),
      onFail: /* @__PURE__ */ __name((failureCount, error) => {
        __privateMethod(this, __this_instances, dispatch_fn).call(this, { type: "failed", failureCount, error });
      }, "onFail"),
      onPause: /* @__PURE__ */ __name(() => {
        __privateMethod(this, __this_instances, dispatch_fn).call(this, { type: "pause" });
      }, "onPause"),
      onContinue: /* @__PURE__ */ __name(() => {
        __privateMethod(this, __this_instances, dispatch_fn).call(this, { type: "continue" });
      }, "onContinue"),
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: /* @__PURE__ */ __name(() => true, "canRun")
    }));
    try {
      const data = await __privateGet(this, _retryer).start();
      if (data === void 0) {
        if (false) ;
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      (_e2 = (_d2 = __privateGet(this, _cache).config).onSuccess) == null ? void 0 : _e2.call(_d2, data, this);
      (_g2 = (_f2 = __privateGet(this, _cache).config).onSettled) == null ? void 0 : _g2.call(
        _f2,
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof CancelledError) {
        if (error.silent) {
          return __privateGet(this, _retryer).promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      __privateMethod(this, __this_instances, dispatch_fn).call(this, {
        type: "error",
        error
      });
      (_i = (_h2 = __privateGet(this, _cache).config).onError) == null ? void 0 : _i.call(
        _h2,
        error,
        this
      );
      (_k = (_j = __privateGet(this, _cache).config).onSettled) == null ? void 0 : _k.call(
        _j,
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
}, _queryType = new WeakMap(), _initialState = new WeakMap(), _revertState = new WeakMap(), _cache = new WeakMap(), _client = new WeakMap(), _retryer = new WeakMap(), _defaultOptions = new WeakMap(), _abortSignalConsumed = new WeakMap(), __this_instances = new WeakSet(), isInitialPausedFetch_fn = /* @__PURE__ */ __name(function() {
  return this.state.fetchStatus === "paused" && this.state.status === "pending";
}, "#isInitialPausedFetch"), dispatch_fn = /* @__PURE__ */ __name(function(action) {
  const reducer = /* @__PURE__ */ __name((state) => {
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
        __privateSet(this, _revertState, action.manual ? newState : void 0);
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
  }, "reducer");
  this.state = reducer(this.state);
  notifyManager.batch(() => {
    this.observers.forEach((observer) => {
      observer.onQueryUpdate();
    });
    __privateGet(this, _cache).notify({ query: this, type: "updated", action });
  });
}, "#dispatch"), __name(_g, "Query"), _g);
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
__name(fetchState, "fetchState");
function successState(data, dataUpdatedAt) {
  return {
    data,
    dataUpdatedAt: dataUpdatedAt ?? Date.now(),
    error: null,
    isInvalidated: false,
    status: "success"
  };
}
__name(successState, "successState");
function getDefaultState(options) {
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
__name(getDefaultState, "getDefaultState");
var QueryObserver = (_h = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, __this_instances2);
    __privateAdd(this, _client2);
    __privateAdd(this, _currentQuery);
    __privateAdd(this, _currentQueryInitialState);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentResultState);
    __privateAdd(this, _currentResultOptions);
    __privateAdd(this, _currentThenable);
    __privateAdd(this, _selectError);
    __privateAdd(this, _selectFn);
    __privateAdd(this, _selectResult);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData);
    __privateAdd(this, _staleTimeoutId);
    __privateAdd(this, _refetchIntervalId);
    __privateAdd(this, _currentRefetchInterval);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client2, client);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, __this_instances2, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, __this_instances2, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, __this_instances2, clearStaleTimeout_fn).call(this);
    __privateMethod(this, __this_instances2, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client2).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveQueryBoolean(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, __this_instances2, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client2).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, __this_instances2, executeFetch_fn).call(this);
    }
    this.updateResult();
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveQueryBoolean(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveQueryBoolean(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, __this_instances2, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, __this_instances2, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveQueryBoolean(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveQueryBoolean(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, __this_instances2, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client2).getQueryCache().build(__privateGet(this, _client2), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: /* @__PURE__ */ __name((target, key) => {
        this.trackProp(key);
        onPropTracked == null ? void 0 : onPropTracked(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && __privateGet(this, _currentThenable).status === "pending") {
            __privateGet(this, _currentThenable).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }, "get")
    });
  }
  trackProp(key) {
    __privateGet(this, _trackedProps).add(key);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client2).defaultQueryOptions(options);
    const query = __privateGet(this, _client2).getQueryCache().build(__privateGet(this, _client2), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return __privateMethod(this, __this_instances2, executeFetch_fn).call(this, {
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a2;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
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
          (_a2 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a2.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
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
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
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
      isFetched: query.isFetched(),
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable),
      isEnabled: resolveQueryBoolean(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = /* @__PURE__ */ __name((thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      }, "finalizeThenableIfPossible");
      const recreateThenable = /* @__PURE__ */ __name(() => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      }, "recreateThenable");
      const prevThenable = __privateGet(this, _currentThenable);
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
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const shouldNotifyListeners = /* @__PURE__ */ __name(() => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key) => {
        const typedKey = key;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    }, "shouldNotifyListeners");
    __privateMethod(this, __this_instances2, notify_fn).call(this, { listeners: shouldNotifyListeners() });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, __this_instances2, updateTimers_fn).call(this);
    }
  }
}, _client2 = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), __this_instances2 = new WeakSet(), executeFetch_fn = /* @__PURE__ */ __name(function(fetchOptions) {
  __privateMethod(this, __this_instances2, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop);
  }
  return promise;
}, "#executeFetch"), updateStaleTimeout_fn = /* @__PURE__ */ __name(function() {
  __privateMethod(this, __this_instances2, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (environmentManager.isServer() || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout = time + 1;
  __privateSet(this, _staleTimeoutId, timeoutManager.setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout));
}, "#updateStaleTimeout"), computeRefetchInterval_fn = /* @__PURE__ */ __name(function() {
  return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) ?? false;
}, "#computeRefetchInterval"), updateRefetchInterval_fn = /* @__PURE__ */ __name(function(nextInterval) {
  __privateMethod(this, __this_instances2, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (environmentManager.isServer() || resolveQueryBoolean(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, timeoutManager.setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, __this_instances2, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, "#updateRefetchInterval"), updateTimers_fn = /* @__PURE__ */ __name(function() {
  __privateMethod(this, __this_instances2, updateStaleTimeout_fn).call(this);
  __privateMethod(this, __this_instances2, updateRefetchInterval_fn).call(this, __privateMethod(this, __this_instances2, computeRefetchInterval_fn).call(this));
}, "#updateTimers"), clearStaleTimeout_fn = /* @__PURE__ */ __name(function() {
  if (__privateGet(this, _staleTimeoutId) !== void 0) {
    timeoutManager.clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, "#clearStaleTimeout"), clearRefetchInterval_fn = /* @__PURE__ */ __name(function() {
  if (__privateGet(this, _refetchIntervalId) !== void 0) {
    timeoutManager.clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, "#clearRefetchInterval"), updateQuery_fn = /* @__PURE__ */ __name(function() {
  const query = __privateGet(this, _client2).getQueryCache().build(__privateGet(this, _client2), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, "#updateQuery"), notify_fn = /* @__PURE__ */ __name(function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client2).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, "#notify"), __name(_h, "QueryObserver"), _h);
function shouldLoadOnMount(query, options) {
  return resolveQueryBoolean(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && resolveQueryBoolean(options.retryOnMount, query) === false);
}
__name(shouldLoadOnMount, "shouldLoadOnMount");
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
__name(shouldFetchOnMount, "shouldFetchOnMount");
function shouldFetchOn(query, options, field) {
  if (resolveQueryBoolean(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
__name(shouldFetchOn, "shouldFetchOn");
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveQueryBoolean(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
__name(shouldFetchOptionally, "shouldFetchOptionally");
function isStale(query, options) {
  return resolveQueryBoolean(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
__name(isStale, "isStale");
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
__name(shouldAssignObserverCurrentProperties, "shouldAssignObserverCurrentProperties");
const React$4 = await importShared("react");
var QueryClientContext = React$4.createContext(
  void 0
);
var useQueryClient = /* @__PURE__ */ __name((queryClient) => {
  const client = React$4.useContext(QueryClientContext);
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
}, "useQueryClient");
var QueryClientProvider = /* @__PURE__ */ __name(({
  client,
  children
}) => {
  React$4.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientContext.Provider, { value: client, children });
}, "QueryClientProvider");
const React$3 = await importShared("react");
var IsRestoringContext = React$3.createContext(false);
var useIsRestoring = /* @__PURE__ */ __name(() => React$3.useContext(IsRestoringContext), "useIsRestoring");
IsRestoringContext.Provider;
const React$2 = await importShared("react");
function createValue() {
  let isReset = false;
  return {
    clearReset: /* @__PURE__ */ __name(() => {
      isReset = false;
    }, "clearReset"),
    reset: /* @__PURE__ */ __name(() => {
      isReset = true;
    }, "reset"),
    isReset: /* @__PURE__ */ __name(() => {
      return isReset;
    }, "isReset")
  };
}
__name(createValue, "createValue");
var QueryErrorResetBoundaryContext = React$2.createContext(createValue());
var useQueryErrorResetBoundary = /* @__PURE__ */ __name(() => React$2.useContext(QueryErrorResetBoundaryContext), "useQueryErrorResetBoundary");
const React$1 = await importShared("react");
var ensurePreventErrorBoundaryRetry = /* @__PURE__ */ __name((options, errorResetBoundary, query) => {
  const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
}, "ensurePreventErrorBoundaryRetry");
var useClearResetErrorBoundary = /* @__PURE__ */ __name((errorResetBoundary) => {
  React$1.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
}, "useClearResetErrorBoundary");
var getHasError = /* @__PURE__ */ __name(({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
}, "getHasError");
var ensureSuspenseTimers = /* @__PURE__ */ __name((defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = /* @__PURE__ */ __name((value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS), "clamp");
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
}, "ensureSuspenseTimers");
var willFetch = /* @__PURE__ */ __name((result, isRestoring) => result.isLoading && result.isFetching && !isRestoring, "willFetch");
var shouldSuspend = /* @__PURE__ */ __name((defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending, "shouldSuspend");
var fetchOptimistic = /* @__PURE__ */ __name((defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
}), "fetchOptimistic");
const React = await importShared("react");
function useBaseQuery(options, Observer, queryClient) {
  var _a2, _b2, _c2, _d2;
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = useQueryClient();
  const defaultedOptions = client.defaultQueryOptions(options);
  (_b2 = (_a2 = client.getDefaultOptions().queries) == null ? void 0 : _a2._experimental_beforeQuery) == null ? void 0 : _b2.call(
    _a2,
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  const subscribed = options.subscribed !== false;
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : subscribed ? "optimistic" : void 0;
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = React.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && subscribed;
  React.useSyncExternalStore(
    React.useCallback(
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
  React.useEffect(() => {
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
  (_d2 = (_c2 = client.getDefaultOptions().queries) == null ? void 0 : _c2._experimental_afterQuery) == null ? void 0 : _d2.call(
    _c2,
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
__name(useBaseQuery, "useBaseQuery");
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
__name(useQuery, "useQuery");
function useAppQuery(options) {
  const result = useQuery(options);
  return { ...result, queryHash: hashKey(options.queryKey), meta: options.meta };
}
__name(useAppQuery, "useAppQuery");
var SandboxFailure = /* @__PURE__ */ ((SandboxFailure2) => {
  SandboxFailure2["None"] = "none";
  SandboxFailure2["Offline"] = "offline";
  SandboxFailure2["Timeout"] = "timeout";
  SandboxFailure2["Unauthorized"] = "unauthorized";
  SandboxFailure2["Forbidden"] = "forbidden";
  SandboxFailure2["NotFound"] = "notFound";
  SandboxFailure2["Conflict"] = "conflict";
  SandboxFailure2["Validation"] = "validation";
  SandboxFailure2["ServerError"] = "server";
  return SandboxFailure2;
})(SandboxFailure || {});
var SandboxScope = /* @__PURE__ */ ((SandboxScope2) => {
  SandboxScope2["All"] = "all";
  SandboxScope2["Reads"] = "reads";
  SandboxScope2["Writes"] = "writes";
  return SandboxScope2;
})(SandboxScope || {});
var SandboxLatency = /* @__PURE__ */ ((SandboxLatency2) => {
  SandboxLatency2[SandboxLatency2["Instant"] = 0] = "Instant";
  SandboxLatency2[SandboxLatency2["Fast"] = 400] = "Fast";
  SandboxLatency2[SandboxLatency2["Slow"] = 2e3] = "Slow";
  return SandboxLatency2;
})(SandboxLatency || {});
const INITIAL = {
  latencyMs: 400,
  failure: "none",
  scope: "all"
  /* All */
};
const useSandboxStore = create()(
  devtools(
    (set) => ({
      ...INITIAL,
      setLatency: /* @__PURE__ */ __name((latencyMs) => set({ latencyMs }, false, "sandbox/setLatency"), "setLatency"),
      setFailure: /* @__PURE__ */ __name((failure) => set({ failure }, false, "sandbox/setFailure"), "setFailure"),
      setScope: /* @__PURE__ */ __name((scope) => set({ scope }, false, "sandbox/setScope"), "setScope"),
      reset: /* @__PURE__ */ __name(() => set(INITIAL, false, "sandbox/reset"), "reset")
    }),
    { name: "sandbox" }
  )
);
const isFailureActive = /* @__PURE__ */ __name((state, kind) => {
  if (state.failure === "none") return false;
  if (state.scope === "all") return true;
  return state.scope === "reads" ? kind === "read" : kind === "write";
}, "isFailureActive");
const SPECS = {
  [SandboxFailure.Offline]: { message: "Network Error", code: "ERR_NETWORK" },
  [SandboxFailure.Timeout]: { message: "timeout of 30000ms exceeded", code: "ECONNABORTED" },
  [SandboxFailure.Unauthorized]: {
    message: "Request failed with status code 401",
    code: "ERR_BAD_REQUEST",
    status: 401,
    data: { detail: "Not authenticated" }
  },
  // The body names a role identifier on purpose: it is what a real 403 carries,
  // and the copy catalog is meant to replace it rather than show it.
  [SandboxFailure.Forbidden]: {
    message: "Request failed with status code 403",
    code: "ERR_BAD_REQUEST",
    status: 403,
    data: { detail: "User is missing app role 'Product.Admin'" }
  },
  [SandboxFailure.NotFound]: {
    message: "Request failed with status code 404",
    code: "ERR_BAD_REQUEST",
    status: 404,
    data: { detail: "Invoice not found or no longer visible to you" }
  },
  [SandboxFailure.Conflict]: {
    message: "Request failed with status code 409",
    code: "ERR_BAD_REQUEST",
    status: 409,
    data: { detail: "This invoice was already approved by someone else" }
  },
  // The `{ field, message }` shape, which is the one written for the person
  // filling the form. FastAPI's own `{ loc, msg }` validator output is written
  // for whoever is calling the API and is deliberately withheld from the user.
  [SandboxFailure.Validation]: {
    message: "Request failed with status code 422",
    code: "ERR_BAD_REQUEST",
    status: 422,
    data: {
      detail: [
        { field: "amount", message: "Amount exceeds the approval limit for this vendor" },
        { field: "costCentre", message: "Cost centre is closed for the selected period" }
      ]
    }
  },
  // A 5xx body is `str(e)` from the proxy, so it can contain anything. This one
  // is here to be visibly NOT shown to the user.
  [SandboxFailure.ServerError]: {
    message: "Request failed with status code 500",
    code: "ERR_BAD_RESPONSE",
    status: 500,
    data: { detail: 'psycopg2.OperationalError: connection to server at "10.4.2.11" failed' }
  }
};
function createSandboxFailure(failure) {
  if (failure === SandboxFailure.None) return null;
  const spec = SPECS[failure];
  return Object.assign(new Error(spec.message), {
    code: spec.code,
    // Present even for offline and timeout: axios sets `response: undefined` on
    // those, and `isHttpApiError` tests for the key, not for a value.
    response: spec.status === void 0 ? void 0 : { status: spec.status, data: spec.data }
  });
}
__name(createSandboxFailure, "createSandboxFailure");
function createCancellation() {
  return Object.assign(new Error("canceled"), { code: "ERR_CANCELED", response: void 0 });
}
__name(createCancellation, "createCancellation");
function sandboxNotFound(detail) {
  return Object.assign(new Error("Request failed with status code 404"), {
    code: "ERR_BAD_REQUEST",
    response: { status: 404, data: { detail } }
  });
}
__name(sandboxNotFound, "sandboxNotFound");
function sandboxConflict(detail) {
  return Object.assign(new Error("Request failed with status code 409"), {
    code: "ERR_BAD_REQUEST",
    response: { status: 409, data: { detail } }
  });
}
__name(sandboxConflict, "sandboxConflict");
function createRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = state + 1831565813 >>> 0;
    let t = state;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
__name(createRandom, "createRandom");
const pick = /* @__PURE__ */ __name((random, values) => values[Math.floor(random() * values.length)], "pick");
const between = /* @__PURE__ */ __name((random, min, max) => min + Math.floor(random() * (max - min + 1)), "between");
const TODAY = (() => {
  const now = /* @__PURE__ */ new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
})();
const toDateOnly = /* @__PURE__ */ __name((date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`, "toDateOnly");
const shiftDays = /* @__PURE__ */ __name((days) => {
  const date = new Date(TODAY);
  date.setDate(date.getDate() + days);
  return date;
}, "shiftDays");
const VENDOR_SEED = [
  { id: "v-1001", name: "Northwind Logistics", code: "NWL", category: "Freight", status: "active", contactName: "Dana Whitfield", contactEmail: "dana.whitfield@northwind.example", paymentTermsDays: 30, country: "Canada" },
  { id: "v-1002", name: "Cascade Office Supply", code: "COS", category: "Office", status: "active", contactName: "Marcus Reed", contactEmail: "marcus.reed@cascade.example", paymentTermsDays: 45, country: "Canada" },
  { id: "v-1003", name: "Helios Facilities Group", code: "HFG", category: "Facilities", status: "active", contactName: "Priya Anand", contactEmail: "priya.anand@helios.example", paymentTermsDays: 30, country: "United States" },
  { id: "v-1004", name: "Vertex Software Licensing", code: "VSL", category: "Software", status: "active", contactName: "Tomas Bergqvist", contactEmail: "tomas.b@vertexlic.example", paymentTermsDays: 60, country: "Sweden" },
  { id: "v-1005", name: "Ironvale Fleet Services", code: "IFS", category: "Fleet", status: "active", contactName: "Alice Nakamura", contactEmail: "alice.n@ironvale.example", paymentTermsDays: 15, country: "Canada" },
  { id: "v-1006", name: "Brightline Marketing", code: "BLM", category: "Marketing", status: "onboarding", contactName: "Owen Castellano", contactEmail: "owen@brightline.example", paymentTermsDays: 30, country: "United States" },
  { id: "v-1007", name: "Pinehurst Catering", code: "PHC", category: "Catering", status: "active", contactName: "Renata Silva", contactEmail: "renata@pinehurst.example", paymentTermsDays: 14, country: "Canada" },
  { id: "v-1008", name: "Quarry Road Construction", code: "QRC", category: "Construction", status: "active", contactName: "Sam Okonkwo", contactEmail: "s.okonkwo@quarryroad.example", paymentTermsDays: 45, country: "Canada" },
  { id: "v-1009", name: "Lumen Utilities", code: "LUM", category: "Utilities", status: "active", contactName: "Hana Farouk", contactEmail: "hana.farouk@lumen.example", paymentTermsDays: 21, country: "Canada" },
  { id: "v-1010", name: "Atlas Talent Partners", code: "ATP", category: "Recruiting", status: "inactive", contactName: "Gregor Halton", contactEmail: "gregor@atlastalent.example", paymentTermsDays: 30, country: "United Kingdom" },
  { id: "v-1011", name: "Sable Security Systems", code: "SSS", category: "Security", status: "active", contactName: "Yuki Tanabe", contactEmail: "yuki.tanabe@sable.example", paymentTermsDays: 30, country: "Japan" },
  { id: "v-1012", name: "Riverbend Printing", code: "RBP", category: "Print", status: "onboarding", contactName: "Leah Kowalski", contactEmail: "leah@riverbendprint.example", paymentTermsDays: 30, country: "Poland" },
  { id: "v-1013", name: "Granite Peak Consulting", code: "GPC", category: "Consulting", status: "active", contactName: "Aisha Rahman", contactEmail: "aisha.rahman@granitepeak.example", paymentTermsDays: 60, country: "Canada" },
  { id: "v-1014", name: "Clearwater Waste Removal", code: "CWR", category: "Facilities", status: "active", contactName: "Bruno Esposito", contactEmail: "bruno@clearwaterwr.example", paymentTermsDays: 30, country: "Italy" }
];
const STATUS_WEIGHTS = [
  "pending_approval",
  "pending_approval",
  "pending_approval",
  "pending_approval",
  "approved",
  "approved",
  "approved",
  "paid",
  "paid",
  "on_hold",
  "rejected",
  "draft"
];
const COST_CENTRES = ["CC-1100 Operations", "CC-2200 Facilities", "CC-3100 Technology", "CC-4050 Marketing", "CC-5000 Fleet"];
const SUBMITTERS = ["Ellen Marsh", "Ravi Deshmukh", "Colette Baptiste", "Jonas Weiss", "Fatima Diallo", "Peter Lindgren"];
const APPROVERS = ["Nadia Sorenson", "Michael Achebe", "Sofia Marchetti"];
const LINE_DESCRIPTIONS = [
  ["Freight - LTL shipment", "Freight"],
  ["Fuel surcharge", "Freight"],
  ["Monthly cleaning contract", "Facilities"],
  ["Waste removal - 4 yd bin", "Facilities"],
  ["Annual licence renewal", "Software"],
  ["Additional seats (12)", "Software"],
  ["Printer paper - 40 cases", "Office"],
  ["Toner cartridges", "Office"],
  ["Fleet servicing - unit 214", "Fleet"],
  ["Tyre replacement", "Fleet"],
  ["Campaign design retainer", "Marketing"],
  ["Event catering - 60 guests", "Catering"],
  ["Site survey", "Construction"],
  ["Security monitoring - Q3", "Security"],
  ["Advisory hours", "Consulting"]
];
const TAX_CODES = ["HST-13", "GST-5", "ZERO", "EXEMPT"];
const NOTES = [
  "Vendor asked for confirmation before the end of the month.",
  "Second submission - the first was missing the purchase order.",
  "Amount differs from the quote by under one percent.",
  void 0,
  void 0
];
const INVOICE_COUNT = 46;
function buildInvoices() {
  const random = createRandom(20260729);
  return Array.from({ length: INVOICE_COUNT }, (_unused, index) => {
    const vendor = pick(random, VENDOR_SEED);
    const dueOffset = between(random, -40, 55);
    const issuedOffset = dueOffset - vendor.paymentTermsDays;
    return {
      id: `inv-${2001 + index}`,
      number: `INV-2026-${String(1e3 + index * 7).padStart(4, "0")}`,
      vendorId: vendor.id,
      status: pick(random, STATUS_WEIGHTS),
      amount: between(random, 180, 48e3) + between(random, 0, 99) / 100,
      issuedOn: toDateOnly(shiftDays(issuedOffset)),
      dueOn: toDateOnly(shiftDays(dueOffset)),
      costCentre: pick(random, COST_CENTRES),
      submittedBy: pick(random, SUBMITTERS),
      note: pick(random, NOTES)
    };
  });
}
__name(buildInvoices, "buildInvoices");
const INVOICE_SEED = buildInvoices();
const lineCache = /* @__PURE__ */ new Map();
const eventCache = /* @__PURE__ */ new Map();
const seedFromId = /* @__PURE__ */ __name((id) => {
  let hash = 2166136261;
  for (let i = 0; i < id.length; i++) {
    hash ^= id.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}, "seedFromId");
function getInvoiceLineSeed(invoiceId) {
  const cached = lineCache.get(invoiceId);
  if (cached) return cached;
  const random = createRandom(seedFromId(invoiceId));
  const lines = Array.from({ length: between(random, 2, 6) }, (_unused, index) => {
    const [description, category] = pick(random, LINE_DESCRIPTIONS);
    return {
      id: `${invoiceId}-l${index + 1}`,
      description,
      category,
      quantity: between(random, 1, 24),
      unitPrice: between(random, 12, 2400) + between(random, 0, 99) / 100,
      taxCode: pick(random, TAX_CODES)
    };
  });
  lineCache.set(invoiceId, lines);
  return lines;
}
__name(getInvoiceLineSeed, "getInvoiceLineSeed");
function getInvoiceEventSeed(invoiceId) {
  const cached = eventCache.get(invoiceId);
  if (cached) return cached;
  const invoice = INVOICE_SEED.find((candidate) => candidate.id === invoiceId);
  const random = createRandom(seedFromId(invoiceId) ^ 24415);
  const events = [];
  const at = /* @__PURE__ */ __name((dayOffset, hour) => {
    const date = shiftDays(dayOffset);
    date.setHours(hour, between(random, 0, 59), 0, 0);
    return date.toISOString();
  }, "at");
  const createdOffset = -between(random, 4, 90);
  events.push({
    id: `${invoiceId}-e1`,
    kind: "created",
    actor: (invoice == null ? void 0 : invoice.submittedBy) ?? "Unknown",
    at: at(createdOffset, 9),
    detail: "Captured from the vendor portal upload"
  });
  events.push({
    id: `${invoiceId}-e2`,
    kind: "submitted",
    actor: (invoice == null ? void 0 : invoice.submittedBy) ?? "Unknown",
    at: at(createdOffset + 1, 11)
  });
  const approver = pick(random, APPROVERS);
  if ((invoice == null ? void 0 : invoice.status) === "approved" || (invoice == null ? void 0 : invoice.status) === "paid") {
    events.push({
      id: `${invoiceId}-e3`,
      kind: "approved",
      actor: approver,
      at: at(createdOffset + 3, 14),
      detail: "Within the delegated limit for this cost centre"
    });
  }
  if ((invoice == null ? void 0 : invoice.status) === "paid") {
    events.push({
      id: `${invoiceId}-e4`,
      kind: "paid",
      actor: "Payment run",
      at: at(createdOffset + 9, 6),
      detail: "EFT batch 2026-0418"
    });
  }
  if ((invoice == null ? void 0 : invoice.status) === "rejected") {
    events.push({
      id: `${invoiceId}-e3`,
      kind: "rejected",
      actor: approver,
      at: at(createdOffset + 2, 16),
      detail: "Purchase order number does not match the receipt"
    });
  }
  if ((invoice == null ? void 0 : invoice.status) === "on_hold") {
    events.push({
      id: `${invoiceId}-e3`,
      kind: "held",
      actor: approver,
      at: at(createdOffset + 2, 10),
      detail: "Waiting on the delivery confirmation from the site"
    });
    events.push({
      id: `${invoiceId}-e4`,
      kind: "commented",
      actor: "Ellen Marsh",
      at: at(createdOffset + 4, 13),
      detail: "Site manager is back on Monday and will confirm then."
    });
  }
  const ordered = events.sort((a, b) => b.at.localeCompare(a.at));
  eventCache.set(invoiceId, ordered);
  return ordered;
}
__name(getInvoiceEventSeed, "getInvoiceEventSeed");
const statusOverrides = /* @__PURE__ */ new Map();
const createdInvoices = [];
function readInvoices() {
  return [...createdInvoices, ...INVOICE_SEED].map((invoice) => {
    const override = statusOverrides.get(invoice.id);
    return override ? { ...invoice, status: override } : invoice;
  });
}
__name(readInvoices, "readInvoices");
function readInvoice(invoiceId) {
  return readInvoices().find((invoice) => invoice.id === invoiceId);
}
__name(readInvoice, "readInvoice");
function writeInvoiceStatus(invoiceId, status) {
  statusOverrides.set(invoiceId, status);
}
__name(writeInvoiceStatus, "writeInvoiceStatus");
function appendInvoiceEvent(invoiceId, event) {
  const history = getInvoiceEventSeed(invoiceId);
  history.unshift({
    ...event,
    id: `${invoiceId}-e${history.length + 1}`,
    at: (/* @__PURE__ */ new Date()).toISOString()
  });
}
__name(appendInvoiceEvent, "appendInvoiceEvent");
function createInvoice(input) {
  const taken = readInvoices().some(
    (invoice2) => invoice2.number.toLowerCase() === input.number.trim().toLowerCase()
  );
  if (taken) return null;
  const id = `inv-9${String(createdInvoices.length + 1).padStart(3, "0")}`;
  const invoice = {
    ...input,
    id,
    number: input.number.trim(),
    status: "pending_approval"
  };
  createdInvoices.unshift(invoice);
  lineCache.set(id, [
    {
      id: `${id}-l1`,
      description: "As captured - no breakdown supplied",
      category: "Uncategorised",
      quantity: 1,
      unitPrice: input.amount,
      taxCode: "HST-13"
    }
  ]);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  eventCache.set(id, [
    {
      id: `${id}-e2`,
      kind: "submitted",
      actor: input.submittedBy,
      at: now,
      detail: "Routed to the cost centre owner for approval"
    },
    { id: `${id}-e1`, kind: "created", actor: input.submittedBy, at: now, detail: "Entered by hand" }
  ]);
  return invoice;
}
__name(createInvoice, "createInvoice");
function resetSandboxData() {
  statusOverrides.clear();
  createdInvoices.length = 0;
  lineCache.clear();
  eventCache.clear();
}
__name(resetSandboxData, "resetSandboxData");
function sleep(ms, signal) {
  return new Promise((resolveSleep, reject) => {
    if (signal == null ? void 0 : signal.aborted) {
      reject(createCancellation());
      return;
    }
    const onAbort = /* @__PURE__ */ __name(() => {
      clearTimeout(timer);
      reject(createCancellation());
    }, "onAbort");
    const timer = setTimeout(() => {
      signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
      resolveSleep();
    }, ms);
    signal == null ? void 0 : signal.addEventListener("abort", onAbort, { once: true });
  });
}
__name(sleep, "sleep");
async function demoRequest({
  path,
  kind = "read",
  signal,
  resolve
}) {
  const { latencyMs, failure, scope } = useSandboxStore.getState();
  await sleep(latencyMs, signal);
  if (isFailureActive({ failure, scope }, kind)) {
    const error = createSandboxFailure(failure);
    if (error) {
      devDebug(`[sandbox] ${kind} ${path} -> ${failure}`);
      throw error;
    }
  }
  devDebug(`[sandbox] ${kind} ${path} -> ok`);
  return resolve();
}
__name(demoRequest, "demoRequest");
var QueryKeyScope = /* @__PURE__ */ ((QueryKeyScope2) => {
  QueryKeyScope2["Items"] = "items";
  QueryKeyScope2["Invoices"] = "invoices";
  QueryKeyScope2["Vendors"] = "vendors";
  QueryKeyScope2["Approvals"] = "approvals";
  return QueryKeyScope2;
})(QueryKeyScope || {});
var QueryKeyOperation = /* @__PURE__ */ ((QueryKeyOperation2) => {
  QueryKeyOperation2["LIST"] = "list";
  QueryKeyOperation2["DETAIL"] = "detail";
  QueryKeyOperation2["METRICS"] = "metrics";
  return QueryKeyOperation2;
})(QueryKeyOperation || {});
var QueryKeyFacet = /* @__PURE__ */ ((QueryKeyFacet2) => {
  QueryKeyFacet2["Lines"] = "lines";
  QueryKeyFacet2["History"] = "history";
  return QueryKeyFacet2;
})(QueryKeyFacet || {});
const queryKeys = {
  items: {
    all: /* @__PURE__ */ __name(() => [QueryKeyScope.Items], "all"),
    lists: /* @__PURE__ */ __name(() => [QueryKeyScope.Items, QueryKeyOperation.LIST], "lists"),
    list: /* @__PURE__ */ __name((filters) => [...queryKeys.items.lists(), filters], "list"),
    details: /* @__PURE__ */ __name(() => [QueryKeyScope.Items, QueryKeyOperation.DETAIL], "details"),
    detail: /* @__PURE__ */ __name((id) => [...queryKeys.items.details(), id], "detail")
  },
  invoices: {
    all: /* @__PURE__ */ __name(() => [QueryKeyScope.Invoices], "all"),
    lists: /* @__PURE__ */ __name(() => [QueryKeyScope.Invoices, QueryKeyOperation.LIST], "lists"),
    list: /* @__PURE__ */ __name((filters) => [...queryKeys.invoices.lists(), filters], "list"),
    details: /* @__PURE__ */ __name(() => [QueryKeyScope.Invoices, QueryKeyOperation.DETAIL], "details"),
    detail: /* @__PURE__ */ __name((id) => [...queryKeys.invoices.details(), id], "detail"),
    // Nested under the detail key on purpose: approving an invoice changes the
    // record, its lines and its history, and one invalidation of `detail(id)`
    // reaches all three by prefix.
    lines: /* @__PURE__ */ __name((id) => [...queryKeys.invoices.detail(id), QueryKeyFacet.Lines], "lines"),
    history: /* @__PURE__ */ __name((id) => [...queryKeys.invoices.detail(id), QueryKeyFacet.History], "history"),
    metrics: /* @__PURE__ */ __name(() => [QueryKeyScope.Invoices, QueryKeyOperation.METRICS], "metrics")
  },
  vendors: {
    all: /* @__PURE__ */ __name(() => [QueryKeyScope.Vendors], "all"),
    lists: /* @__PURE__ */ __name(() => [QueryKeyScope.Vendors, QueryKeyOperation.LIST], "lists"),
    list: /* @__PURE__ */ __name((filters) => [...queryKeys.vendors.lists(), filters], "list"),
    details: /* @__PURE__ */ __name(() => [QueryKeyScope.Vendors, QueryKeyOperation.DETAIL], "details"),
    detail: /* @__PURE__ */ __name((id) => [...queryKeys.vendors.details(), id], "detail")
  },
  approvals: {
    all: /* @__PURE__ */ __name(() => [QueryKeyScope.Approvals], "all"),
    lists: /* @__PURE__ */ __name(() => [QueryKeyScope.Approvals, QueryKeyOperation.LIST], "lists"),
    list: /* @__PURE__ */ __name((filters) => [...queryKeys.approvals.lists(), filters], "list")
  }
};
export {
  sandboxNotFound as A,
  getInvoiceEventSeed as B,
  createInvoice as C,
  sandboxConflict as D,
  writeInvoiceStatus as E,
  appendInvoiceEvent as F,
  createRetryer as G,
  shallowEqualObjects as H,
  shouldThrowError as I,
  Query as Q,
  Removable as R,
  Subscribable as S,
  VENDOR_SEED as V,
  noop as a,
  matchQuery as b,
  functionalUpdate as c,
  hashKey as d,
  QueryClientProvider as e,
  focusManager as f,
  demoRequest as g,
  hashQueryKeyByOptions as h,
  useSandboxStore as i,
  SandboxFailure as j,
  SandboxLatency as k,
  SandboxScope as l,
  matchMutation as m,
  notifyManager as n,
  onlineManager as o,
  partialMatchKey as p,
  queryKeys as q,
  resolveStaleTime as r,
  skipToken as s,
  resetSandboxData as t,
  useQueryClient as u,
  useAppQuery as v,
  getInvoiceLineSeed as w,
  readInvoices as x,
  keepPreviousData as y,
  readInvoice as z
};

var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _mutations, _scopes, _mutationId, _a, _queries, _b, _queryCache, _mutationCache, _defaultOptions, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline, _c;
import { S as Subscribable, M as Mutation, H as notifyManager, I as matchMutation, J as noop, K as hashQueryKeyByOptions, L as Query, P as matchQuery, T as focusManager, U as onlineManager, V as resolveStaleTime, W as functionalUpdate, X as hashKey, Y as partialMatchKey, Z as skipToken, j as useQuery, q as queryKeys, e as useCompanyStore } from "./date-format-Dkqd_MkG.js";
import { b as apiClient, a0 as CONFIGURATION_ENDPOINTS, d as devError } from "./configuration-D11IOZL_.js";
var MutationCache = (_a = class extends Subscribable {
  constructor(config = {}) {
    super();
    __privateAdd(this, _mutations);
    __privateAdd(this, _scopes);
    __privateAdd(this, _mutationId);
    this.config = config;
    __privateSet(this, _mutations, /* @__PURE__ */ new Set());
    __privateSet(this, _scopes, /* @__PURE__ */ new Map());
    __privateSet(this, _mutationId, 0);
  }
  build(client, options, state) {
    const mutation = new Mutation({
      client,
      mutationCache: this,
      mutationId: ++__privateWrapper(this, _mutationId)._,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    __privateGet(this, _mutations).add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = __privateGet(this, _scopes).get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        __privateGet(this, _scopes).set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (__privateGet(this, _mutations).delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = __privateGet(this, _scopes).get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            __privateGet(this, _scopes).delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = __privateGet(this, _scopes).get(scope);
      const firstPendingMutation = mutationsWithSameScope == null ? void 0 : mutationsWithSameScope.find(
        (m) => m.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    var _a2;
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = (_a2 = __privateGet(this, _scopes).get(scope)) == null ? void 0 : _a2.find((m) => m !== mutation && m.state.isPaused);
      return (foundMutation == null ? void 0 : foundMutation.continue()) ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      __privateGet(this, _mutations).forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      __privateGet(this, _mutations).clear();
      __privateGet(this, _scopes).clear();
    });
  }
  getAll() {
    return Array.from(__privateGet(this, _mutations));
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop))
      )
    );
  }
}, _mutations = new WeakMap(), _scopes = new WeakMap(), _mutationId = new WeakMap(), __name(_a, "MutationCache"), _a);
function scopeFor(mutation) {
  var _a2;
  return (_a2 = mutation.options.scope) == null ? void 0 : _a2.id;
}
__name(scopeFor, "scopeFor");
var QueryCache = (_b = class extends Subscribable {
  constructor(config = {}) {
    super();
    __privateAdd(this, _queries);
    this.config = config;
    __privateSet(this, _queries, /* @__PURE__ */ new Map());
  }
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!__privateGet(this, _queries).has(query.queryHash)) {
      __privateGet(this, _queries).set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = __privateGet(this, _queries).get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        __privateGet(this, _queries).delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return __privateGet(this, _queries).get(queryHash);
  }
  getAll() {
    return [...__privateGet(this, _queries).values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
}, _queries = new WeakMap(), __name(_b, "QueryCache"), _b);
var QueryClient = (_c = class {
  constructor(config = {}) {
    __privateAdd(this, _queryCache);
    __privateAdd(this, _mutationCache);
    __privateAdd(this, _defaultOptions);
    __privateAdd(this, _queryDefaults);
    __privateAdd(this, _mutationDefaults);
    __privateAdd(this, _mountCount);
    __privateAdd(this, _unsubscribeFocus);
    __privateAdd(this, _unsubscribeOnline);
    __privateSet(this, _queryCache, config.queryCache || new QueryCache());
    __privateSet(this, _mutationCache, config.mutationCache || new MutationCache());
    __privateSet(this, _defaultOptions, config.defaultOptions || {});
    __privateSet(this, _queryDefaults, /* @__PURE__ */ new Map());
    __privateSet(this, _mutationDefaults, /* @__PURE__ */ new Map());
    __privateSet(this, _mountCount, 0);
  }
  mount() {
    __privateWrapper(this, _mountCount)._++;
    if (__privateGet(this, _mountCount) !== 1) return;
    __privateSet(this, _unsubscribeFocus, focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        __privateGet(this, _queryCache).onFocus();
      }
    }));
    __privateSet(this, _unsubscribeOnline, onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        __privateGet(this, _queryCache).onOnline();
      }
    }));
  }
  unmount() {
    var _a2, _b2;
    __privateWrapper(this, _mountCount)._--;
    if (__privateGet(this, _mountCount) !== 0) return;
    (_a2 = __privateGet(this, _unsubscribeFocus)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _unsubscribeFocus, void 0);
    (_b2 = __privateGet(this, _unsubscribeOnline)) == null ? void 0 : _b2.call(this);
    __privateSet(this, _unsubscribeOnline, void 0);
  }
  isFetching(filters) {
    return __privateGet(this, _queryCache).findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return __privateGet(this, _mutationCache).findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    var _a2;
    const options = this.defaultQueryOptions({ queryKey });
    return (_a2 = __privateGet(this, _queryCache).get(options.queryHash)) == null ? void 0 : _a2.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = __privateGet(this, _queryCache).build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return __privateGet(this, _queryCache).findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = __privateGet(this, _queryCache).get(
      defaultedOptions.queryHash
    );
    const prevData = query == null ? void 0 : query.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return __privateGet(this, _queryCache).build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    var _a2;
    const options = this.defaultQueryOptions({ queryKey });
    return (_a2 = __privateGet(this, _queryCache).get(
      options.queryHash
    )) == null ? void 0 : _a2.state;
  }
  removeQueries(filters) {
    const queryCache = __privateGet(this, _queryCache);
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = __privateGet(this, _queryCache);
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      __privateGet(this, _queryCache).findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if ((filters == null ? void 0 : filters.refetchType) === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: (filters == null ? void 0 : filters.refetchType) ?? (filters == null ? void 0 : filters.type) ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(noop);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(noop);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = __privateGet(this, _queryCache).build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop).catch(noop);
  }
  fetchInfiniteQuery(options) {
    options._type = "infinite";
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop).catch(noop);
  }
  ensureInfiniteQueryData(options) {
    options._type = "infinite";
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return __privateGet(this, _mutationCache).resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return __privateGet(this, _queryCache);
  }
  getMutationCache() {
    return __privateGet(this, _mutationCache);
  }
  getDefaultOptions() {
    return __privateGet(this, _defaultOptions);
  }
  setDefaultOptions(options) {
    __privateSet(this, _defaultOptions, options);
  }
  setQueryDefaults(queryKey, options) {
    __privateGet(this, _queryDefaults).set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...__privateGet(this, _queryDefaults).values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    __privateGet(this, _mutationDefaults).set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...__privateGet(this, _mutationDefaults).values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...__privateGet(this, _defaultOptions).queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    return {
      ...__privateGet(this, _defaultOptions).mutations,
      ...(options == null ? void 0 : options.mutationKey) && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    __privateGet(this, _queryCache).clear();
    __privateGet(this, _mutationCache).clear();
  }
}, _queryCache = new WeakMap(), _mutationCache = new WeakMap(), _defaultOptions = new WeakMap(), _queryDefaults = new WeakMap(), _mutationDefaults = new WeakMap(), _mountCount = new WeakMap(), _unsubscribeFocus = new WeakMap(), _unsubscribeOnline = new WeakMap(), __name(_c, "QueryClient"), _c);
const mapToLogicalCompany = /* @__PURE__ */ __name((apiCompany, userDefaultLogicalCompanyId) => ({
  id: apiCompany.logicalCompanyShortName,
  name: apiCompany.logicalCompanyName,
  shortName: apiCompany.logicalCompanyShortName,
  isDefault: apiCompany.id === userDefaultLogicalCompanyId
}), "mapToLogicalCompany");
const useCompanies = /* @__PURE__ */ __name(() => {
  return useQuery({
    queryKey: queryKeys.companies.list(),
    queryFn: /* @__PURE__ */ __name(async () => {
      const response = await apiClient.get(
        CONFIGURATION_ENDPOINTS.LOGICAL_COMPANIES.build()
      );
      const { items, userDefaultLogicalCompanyId } = response.data;
      return items.map((item) => mapToLogicalCompany(item, userDefaultLogicalCompanyId));
    }, "queryFn"),
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  });
}, "useCompanies");
const useDefaultCompany = /* @__PURE__ */ __name(() => {
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { data: companiesData, isLoading } = useCompanies();
  const fallback = companiesData && companiesData.length > 0 ? companiesData[0] : null;
  return {
    company: userDefaultCompany ?? fallback,
    userDefaultCompany,
    isLoading
  };
}, "useDefaultCompany");
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Stale time: 5 minutes (data is fresh for 5 minutes)
      staleTime: 5 * 60 * 1e3,
      // Cache time: 10 minutes (data stays in cache for 10 minutes after becoming inactive)
      gcTime: 10 * 60 * 1e3,
      // Retry failed requests 3 times with exponential backoff
      retry: /* @__PURE__ */ __name((failureCount, error) => {
        const apiError = error;
        if (apiError.code && typeof apiError.code === "string" && apiError.code.startsWith("4")) {
          return false;
        }
        return failureCount < 3;
      }, "retry"),
      retryDelay: /* @__PURE__ */ __name((attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 3e4), "retryDelay"),
      // Refetch on window focus for fresh data
      refetchOnWindowFocus: false,
      // Don't refetch on reconnect by default (can be overridden per query)
      refetchOnReconnect: "always"
    },
    mutations: {
      // Retry mutations once on failure
      retry: 1,
      retryDelay: 1e3
    }
  },
  queryCache: new QueryCache({
    onError: /* @__PURE__ */ __name((error, query) => {
      devError(`Query error for ${query.queryKey}:`, error);
    }, "onError")
  }),
  mutationCache: new MutationCache({
    onError: /* @__PURE__ */ __name((error, _variables, _context, mutation) => {
      devError(`Mutation error for ${mutation.options.mutationKey}:`, error);
    }, "onError")
  })
});
export {
  useDefaultCompany as a,
  queryClient as q,
  useCompanies as u
};

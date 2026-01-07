import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
import { R as Removable, t as createRetryer, n as notifyManager, S as Subscribable, v as shallowEqualObjects, i as hashKey, k as useQueryClient, c as noop, w as shouldThrowError } from "./query-keys-g3E7RVOI.js";
import { ap as create, aq as devtools, ar as subscribeWithSelector, as as immer } from "./axiosInstance-mviMuEwv.js";
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
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
        await ((_b = (_a = this.#mutationCache.config).onMutate) == null ? void 0 : _b.call(
          _a,
          variables,
          this,
          mutationFnContext
        ));
        const context = await ((_d = (_c = this.options).onMutate) == null ? void 0 : _d.call(
          _c,
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
      await ((_f = (_e = this.#mutationCache.config).onSuccess) == null ? void 0 : _f.call(
        _e,
        data,
        variables,
        this.state.context,
        this,
        mutationFnContext
      ));
      await ((_h = (_g = this.options).onSuccess) == null ? void 0 : _h.call(
        _g,
        data,
        variables,
        this.state.context,
        mutationFnContext
      ));
      await ((_j = (_i = this.#mutationCache.config).onSettled) == null ? void 0 : _j.call(
        _i,
        data,
        null,
        this.state.variables,
        this.state.context,
        this,
        mutationFnContext
      ));
      await ((_l = (_k = this.options).onSettled) == null ? void 0 : _l.call(
        _k,
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
        await ((_n = (_m = this.#mutationCache.config).onError) == null ? void 0 : _n.call(
          _m,
          error,
          variables,
          this.state.context,
          this,
          mutationFnContext
        ));
        await ((_p = (_o = this.options).onError) == null ? void 0 : _p.call(
          _o,
          error,
          variables,
          this.state.context,
          mutationFnContext
        ));
        await ((_r = (_q = this.#mutationCache.config).onSettled) == null ? void 0 : _r.call(
          _q,
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this,
          mutationFnContext
        ));
        await ((_t = (_s = this.options).onSettled) == null ? void 0 : _t.call(
          _s,
          void 0,
          error,
          variables,
          this.state.context,
          mutationFnContext
        ));
        throw error;
      } finally {
        this.#dispatch({ type: "error", error });
      }
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
          (_b = (_a = this.#mutateOptions).onSuccess) == null ? void 0 : _b.call(
            _a,
            action.data,
            variables,
            onMutateResult,
            context
          );
          (_d = (_c = this.#mutateOptions).onSettled) == null ? void 0 : _d.call(
            _c,
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } else if ((action == null ? void 0 : action.type) === "error") {
          (_f = (_e = this.#mutateOptions).onError) == null ? void 0 : _f.call(
            _e,
            action.error,
            variables,
            onMutateResult,
            context
          );
          (_h = (_g = this.#mutateOptions).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
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
const initialState$1 = () => ({
  selectedCompany: null,
  companies: [],
  isLoading: false,
  error: null
});
const useCompanyStore = create()(
  devtools(
    subscribeWithSelector(
      immer((set) => ({
        ...initialState$1(),
        setSelectedCompany: (company) => set((state) => {
          state.selectedCompany = company;
        }),
        setCompanies: (companies) => set((state) => {
          state.companies = companies;
        }),
        addCompany: (company) => set((state) => {
          state.companies.push(company);
        }),
        updateCompany: (id, updates) => set((state) => {
          var _a;
          const index = state.companies.findIndex((c) => c.id === id);
          if (index !== -1) {
            state.companies[index] = { ...state.companies[index], ...updates };
            if (((_a = state.selectedCompany) == null ? void 0 : _a.id) === id) {
              state.selectedCompany = { ...state.selectedCompany, ...updates };
            }
          }
        }),
        removeCompany: (id) => set((state) => {
          var _a;
          state.companies = state.companies.filter((c) => c.id !== id);
          if (((_a = state.selectedCompany) == null ? void 0 : _a.id) === id) {
            state.selectedCompany = null;
          }
        }),
        setLoading: (isLoading) => set((state) => {
          state.isLoading = isLoading;
        }),
        setError: (error) => set((state) => {
          state.error = error;
        }),
        reset: () => set(() => initialState$1())
      }))
    ),
    {
      name: "company-storage"
    }
  )
);
const toggleItemActive = (items, selectedItem, id, isActive) => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index].isActive = isActive;
    if ((selectedItem == null ? void 0 : selectedItem.id) === id) {
      selectedItem.isActive = isActive;
    }
  }
  return { items, selectedItem };
};
const initialState = () => ({
  expenseTypes: [],
  selectedExpenseType: null,
  businessPurposes: [],
  selectedBusinessPurpose: null,
  formSettings: [],
  selectedFormSetting: null,
  isLoadingExpenseTypes: false,
  isLoadingBusinessPurposes: false,
  isLoadingFormSettings: false,
  expenseTypesError: null,
  businessPurposesError: null,
  formSettingsError: null
});
const useExpenseStore = create()(
  devtools(
    subscribeWithSelector(
      immer((set) => ({
        ...initialState(),
        // Expense Types Actions
        setExpenseTypes: (types) => set((state) => {
          state.expenseTypes = types;
        }),
        setSelectedExpenseType: (type) => set((state) => {
          state.selectedExpenseType = type;
        }),
        addExpenseType: (type) => set((state) => {
          state.expenseTypes.push(type);
        }),
        updateExpenseType: (id, updates) => set((state) => {
          var _a;
          const index = state.expenseTypes.findIndex((t) => t.id === id);
          if (index !== -1) {
            state.expenseTypes[index] = { ...state.expenseTypes[index], ...updates };
            if (((_a = state.selectedExpenseType) == null ? void 0 : _a.id) === id) {
              state.selectedExpenseType = { ...state.selectedExpenseType, ...updates };
            }
          }
        }),
        removeExpenseType: (id) => set((state) => {
          var _a;
          state.expenseTypes = state.expenseTypes.filter((t) => t.id !== id);
          if (((_a = state.selectedExpenseType) == null ? void 0 : _a.id) === id) {
            state.selectedExpenseType = null;
          }
        }),
        //toggle active
        toggleExpenseTypeActive: (id, isActive) => set((state) => {
          const result = toggleItemActive(
            state.expenseTypes,
            state.selectedExpenseType,
            id,
            isActive
          );
          state.expenseTypes = result.items;
          state.selectedExpenseType = result.selectedItem;
        }),
        // Business Purposes Actions
        setBusinessPurposes: (purposes) => set((state) => {
          state.businessPurposes = purposes;
        }),
        setSelectedBusinessPurpose: (purpose) => set((state) => {
          state.selectedBusinessPurpose = purpose;
        }),
        addBusinessPurpose: (purpose) => set((state) => {
          state.businessPurposes.push(purpose);
        }),
        updateBusinessPurpose: (id, updates) => set((state) => {
          var _a;
          const index = state.businessPurposes.findIndex((p) => p.id === id);
          if (index !== -1) {
            state.businessPurposes[index] = { ...state.businessPurposes[index], ...updates };
            if (((_a = state.selectedBusinessPurpose) == null ? void 0 : _a.id) === id) {
              state.selectedBusinessPurpose = { ...state.selectedBusinessPurpose, ...updates };
            }
          }
        }),
        removeBusinessPurpose: (id) => set((state) => {
          var _a;
          state.businessPurposes = state.businessPurposes.filter((p) => p.id !== id);
          if (((_a = state.selectedBusinessPurpose) == null ? void 0 : _a.id) === id) {
            state.selectedBusinessPurpose = null;
          }
        }),
        toggleBusinessPurposeActive: (id, isActive) => set((state) => {
          const result = toggleItemActive(
            state.businessPurposes,
            state.selectedBusinessPurpose,
            id,
            isActive
          );
          state.businessPurposes = result.items;
          state.selectedBusinessPurpose = result.selectedItem;
        }),
        // Form Settings Actions
        setFormSettings: (settings) => set((state) => {
          state.formSettings = settings;
        }),
        setSelectedFormSetting: (setting) => set((state) => {
          state.selectedFormSetting = setting;
        }),
        addFormSetting: (setting) => set((state) => {
          state.formSettings.push(setting);
        }),
        updateFormSetting: (id, updates) => set((state) => {
          var _a;
          const index = state.formSettings.findIndex((s) => s.id === id);
          if (index !== -1) {
            state.formSettings[index] = { ...state.formSettings[index], ...updates };
            if (((_a = state.selectedFormSetting) == null ? void 0 : _a.id) === id) {
              state.selectedFormSetting = { ...state.selectedFormSetting, ...updates };
            }
          }
        }),
        removeFormSetting: (id) => set((state) => {
          var _a;
          state.formSettings = state.formSettings.filter((s) => s.id !== id);
          if (((_a = state.selectedFormSetting) == null ? void 0 : _a.id) === id) {
            state.selectedFormSetting = null;
          }
        }),
        // Loading Actions
        setLoadingExpenseTypes: (isLoading) => set((state) => {
          state.isLoadingExpenseTypes = isLoading;
        }),
        setLoadingBusinessPurposes: (isLoading) => set((state) => {
          state.isLoadingBusinessPurposes = isLoading;
        }),
        setLoadingFormSettings: (isLoading) => set((state) => {
          state.isLoadingFormSettings = isLoading;
        }),
        // Error Actions
        setExpenseTypesError: (error) => set((state) => {
          state.expenseTypesError = error;
        }),
        setBusinessPurposesError: (error) => set((state) => {
          state.businessPurposesError = error;
        }),
        setFormSettingsError: (error) => set((state) => {
          state.formSettingsError = error;
        }),
        reset: () => set(() => initialState())
      }))
    ),
    {
      name: "expense-storage"
    }
  )
);
export {
  Mutation as M,
  useMutation as a,
  useExpenseStore as b,
  useCompanyStore as u
};

import { c as createLucideIcon } from "./createLucideIcon-CkspSWIj.js";
import { importShared } from "./__federation_fn_import-CFnudcB9.js";
import { S as Subscribable, q as shallowEqualObjects, i as hashKey, t as getDefaultState, n as notifyManager, l as useQueryClient, c as noop, v as shouldThrowError } from "./LoadingSpinner-rYMdKE-7.js";
import { c as create, d as devtools, s as subscribeWithSelector, i as immer } from "./axiosInstance-CQunoiSB.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode);
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
  Pencil as P,
  useMutation as a,
  useExpenseStore as u
};

import { c as createLucideIcon, D as create, G as devtools, J as subscribeWithSelector, M as immer } from "./__federation_expose_Mount-YLVdYaz1.js";
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
  useExpenseStore as u
};

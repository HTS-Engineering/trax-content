import { c as createLucideIcon, y as create, z as devtools, D as subscribeWithSelector, G as immer } from "./__federation_expose_Mount-BYmudq81.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode$4);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode$3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$2);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$1);
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
  ArrowUp as A,
  CircleCheckBig as C,
  Pencil as P,
  ArrowDown as a,
  CircleX as b,
  useExpenseStore as u
};

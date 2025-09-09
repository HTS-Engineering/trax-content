import { y as create, z as devtools, D as subscribeWithSelector, G as immer } from "./__federation_expose_Mount-eg6rHv_b.js";
import { importShared } from "./__federation_fn_import-CFnudcB9.js";
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
const React$4 = await importShared("react");
function ArrowDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
  }));
}
const ForwardRef$4 = /* @__PURE__ */ React$4.forwardRef(ArrowDownIcon);
const React$3 = await importShared("react");
function ArrowUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
  }));
}
const ForwardRef$3 = /* @__PURE__ */ React$3.forwardRef(ArrowUpIcon);
const React$2 = await importShared("react");
function CheckCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ React$2.forwardRef(CheckCircleIcon);
const React$1 = await importShared("react");
function PencilIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$1.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ React$1.forwardRef(PencilIcon);
const React = await importShared("react");
function XCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /* @__PURE__ */ React.forwardRef(XCircleIcon);
export {
  ForwardRef$3 as F,
  ForwardRef$4 as a,
  ForwardRef$2 as b,
  ForwardRef as c,
  ForwardRef$1 as d,
  useExpenseStore as u
};

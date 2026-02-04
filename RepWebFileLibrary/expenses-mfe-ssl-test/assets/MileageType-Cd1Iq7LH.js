import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { l as useQuery, q as queryKeys$1, t as useQueryClient, u as useCompanyStore } from "./query-keys-BOqauSXC.js";
import { c as createLucideIcon, o as Aa, n as qs, r as pt, Z as Ze, s as ht, J as Je, Q as Qe, f as Pr, P as Pe, I as In, D as Dn, E as En, M as Mn, j as js, K as Ks, U as Ua, t as Xs, q as qa, b as Ka, l as Ma, B as Ba, a as Pa, p, A as As, S as Sr, C as Cr, R as Rr, N as Nr, w as Ds } from "./index.es-BBFLzT0B.js";
import { a as devLog, d as devError } from "./index-D4vrrc7u.js";
import { E as EmptyState } from "./EmptyState-D-Cgqm3F.js";
import { I as Icon } from "./Icon-iZGOgNHC.js";
import { M as MILEAGE_FORM_TYPE_ID, f as useMileageTypes, e as useExpenseTypeTableState } from "./useExpenseTypeTableState-BI5qfZt8.js";
import { a as apiClient } from "./axiosInstance-BKijOuwr.js";
import { C as CONFIGURATION_ENDPOINTS } from "./configuration-BG7IXp_J.js";
import { o as object, n as number, s as string, l as literal, e as date, c as useForm, d as a, C as Controller, f as useWatch } from "./zod-PpMdyx4R.js";
import { b as useCreateExpenseType, c as useUpdateExpenseType, d as useToggleExpenseTypeStatus, E as ExpenseFormType } from "./api-BHvKeTpl.js";
import { u as useMutation } from "./useMutation-cO0QT3tX.js";
import { M as MileageRateStatus } from "./api-BMImQo3R.js";
import { C as Check, X, u as useSubmitOnEnter, P as Pencil, E as EllipsisVertical, s as sortByCreatedDate } from "./date-sorting.utils-BYAoE8w2.js";
import { P as Plus } from "./plus-CVQM7FPD.js";
const __iconNode$3 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
];
const CircleOff = createLucideIcon("circle-off", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const API_BASE_PATH = "/api/v1.0/configuration";
const UOM_QUERY_KEY = ["unit-of-measurements", "list"];
const useUnitOfMeasurements = (showInactive = false) => {
  return useQuery({
    queryKey: UOM_QUERY_KEY,
    queryFn: async () => {
      const response = await apiClient.get(
        `${API_BASE_PATH}/unit-of-measurements`,
        { params: { show_inactive: showInactive } }
      );
      return response.data;
    },
    staleTime: 10 * 60 * 1e3,
    // 10 minutes - UOM rarely changes
    gcTime: 30 * 60 * 1e3
  });
};
var QueryKeyScope = /* @__PURE__ */ ((QueryKeyScope2) => {
  QueryKeyScope2["COMPANIES"] = "companies";
  QueryKeyScope2["BUSINESS_PURPOSES"] = "business-purposes";
  QueryKeyScope2["EXPENSE_TYPES"] = "expense-types";
  QueryKeyScope2["EXPENSES"] = "expenses";
  QueryKeyScope2["EXPENSE_DRAFTS"] = "expense-drafts";
  QueryKeyScope2["EXPENSE_ITEM"] = "expense-item";
  QueryKeyScope2["EXPENSES_LIST"] = "expenses-list";
  QueryKeyScope2["FORM_TYPES"] = "form-types";
  QueryKeyScope2["MILEAGE_RATES"] = "mileage-rates";
  QueryKeyScope2["TAX_TYPES"] = "tax-types";
  QueryKeyScope2["CONFIGURATION"] = "configuration";
  QueryKeyScope2["UNIT_OF_MEASUREMENTS"] = "unit-of-measurements";
  return QueryKeyScope2;
})(QueryKeyScope || {});
var QueryKeyOperation = /* @__PURE__ */ ((QueryKeyOperation2) => {
  QueryKeyOperation2["LIST"] = "list";
  QueryKeyOperation2["DETAIL"] = "detail";
  QueryKeyOperation2["CREATE"] = "create";
  QueryKeyOperation2["UPDATE"] = "update";
  QueryKeyOperation2["DELETE"] = "delete";
  return QueryKeyOperation2;
})(QueryKeyOperation || {});
const queryKeys = {
  /**
   * Tax Type-related query keys
   */
  taxTypes: {
    all: () => [QueryKeyScope.TAX_TYPES],
    list: (companyShortName) => [QueryKeyScope.TAX_TYPES, QueryKeyOperation.LIST, companyShortName]
  }
};
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
var MileageTypeStatus = /* @__PURE__ */ ((MileageTypeStatus2) => {
  MileageTypeStatus2["ACTIVE"] = "active";
  MileageTypeStatus2["INACTIVE"] = "inactive";
  return MileageTypeStatus2;
})(MileageTypeStatus || {});
const MILEAGE_TYPE_VALIDATION = {
  NAME_MAX_LENGTH: 45,
  DESCRIPTION_MAX_LENGTH: 400,
  MILEAGE_RATE_MIN: 0.01,
  MILEAGE_RATE_MAX: 10
};
const MILEAGE_TYPE_PLACEHOLDERS = {
  NAME: "Enter mileage type name",
  DESCRIPTION: "Add description for internal reference",
  CURRENT_RATE: "0.00",
  EFFECTIVE_FROM: "Select month",
  TAX_TYPE: "Select tax type"
};
const MILEAGE_TYPE_LABELS = {
  MILEAGE_TYPE: "Mileage type",
  DESCRIPTION: "Description (optional)",
  CURRENT_RATE: "Current rate",
  EFFECTIVE_FROM: "Effective from",
  TAX_TYPE: "Tax type (optional)",
  EMPLOYEES: "Employees",
  ACTIONS: "Actions",
  DEFAULT: "Default",
  ASSIGNED: "assigned"
};
const MILEAGE_TYPE_MESSAGES = {
  PAGE_TITLE: "Mileage Type",
  PAGE_DESCRIPTION: "Configure mileage types, set rates, and assign employees",
  NO_COMPANY_SELECTED: "Please select a company to view mileage types",
  LOADING_ERROR: "Failed to load mileage types. Please try again.",
  EMPTY_STATE_TITLE: "No mileage types added yet",
  EMPTY_STATE_DESCRIPTION: "Set up mileage types to define employee mileage reimbursement rates.",
  ADD_MILEAGE_TYPE: "Add Mileage Type",
  SAVE_CHANGES: "Save changes",
  CANCEL_CHANGES: "Cancel changes (Esc)",
  SAVING: "Saving...",
  VALIDATION_ERROR: "Please fix validation errors",
  // Context menu
  ASSIGN_EMPLOYEES: "Assign employees",
  MANAGE_RATES: "Manage rates",
  SET_AS_DEFAULT: "Set as default",
  MARK_INACTIVE: "Mark inactive",
  MARK_ACTIVE: "Mark active",
  // Tooltips
  EFFECTIVE_FROM_TOOLTIP: "Rates are applied based on the date the mileage was incurred",
  DEFAULT_TOOLTIP: "Default type for employees who don't have special mileage types assigned"
};
const NEW_ROW_ID = "new";
const checkNameUniqueness = (name, existingData, currentId) => {
  return !existingData.some(
    (item) => item.name.toLowerCase() === name.toLowerCase() && item.id !== currentId
  );
};
const mileageTypeSchema = object({
  name: string().min(1, "Mileage type name is required").max(MILEAGE_TYPE_VALIDATION.NAME_MAX_LENGTH, `Name must be ${MILEAGE_TYPE_VALIDATION.NAME_MAX_LENGTH} characters or less`).trim(),
  description: string().max(MILEAGE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH, `Description must be ${MILEAGE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH} characters or less`).optional().or(literal("")),
  currentRate: number().min(MILEAGE_TYPE_VALIDATION.MILEAGE_RATE_MIN, `Rate must be at least $${MILEAGE_TYPE_VALIDATION.MILEAGE_RATE_MIN}`).max(MILEAGE_TYPE_VALIDATION.MILEAGE_RATE_MAX, `Rate cannot exceed $${MILEAGE_TYPE_VALIDATION.MILEAGE_RATE_MAX}`),
  unitOfMeasurementId: number({ message: "Unit of measurement is required" }).min(1, "Unit of measurement is required"),
  // TODO: Backend defect - effectiveDate should be part of ExpenseTypeCreate
  // For now, we hardcode to current month on create
  effectiveFrom: date({ message: "Effective date is required" }),
  taxTypeId: number().nullable().optional()
});
const createMileageTypeSchema = (existingData, currentId) => {
  return mileageTypeSchema.refine(
    (data) => {
      return checkNameUniqueness(data.name, existingData, currentId);
    },
    {
      message: "This mileage type name already exists",
      path: ["name"]
    }
  );
};
const getDefaultMileageTypeValues = (initialData) => ({
  name: (initialData == null ? void 0 : initialData.name) ?? "",
  description: (initialData == null ? void 0 : initialData.description) ?? "",
  currentRate: (initialData == null ? void 0 : initialData.currentRate) ?? 0,
  unitOfMeasurementId: (initialData == null ? void 0 : initialData.unitOfMeasurementId) ?? 0,
  effectiveFrom: (initialData == null ? void 0 : initialData.effectiveFrom) ?? /* @__PURE__ */ new Date(),
  taxTypeId: (initialData == null ? void 0 : initialData.taxTypeId) ?? null
});
const getCurrentMonthStart = () => {
  const now = /* @__PURE__ */ new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};
const { useCallback: useCallback$6, useEffect: useEffect$1, useMemo: useMemo$4, useRef: useRef$2 } = await importShared("react");
const useMileageTypeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  companyId
} = {}) => {
  const renderCount = useRef$2(0);
  const prevExistingDataRef = useRef$2(existingData);
  const prevInitialDataIdRef = useRef$2(initialData == null ? void 0 : initialData.id);
  renderCount.current += 1;
  devLog(`[useMileageTypeForm] Render #${renderCount.current}`, {
    initialDataId: initialData == null ? void 0 : initialData.id,
    existingDataLength: existingData.length,
    existingDataRef: existingData === prevExistingDataRef.current ? "SAME" : "CHANGED",
    initialDataIdRef: (initialData == null ? void 0 : initialData.id) === prevInitialDataIdRef.current ? "SAME" : "CHANGED"
  });
  prevExistingDataRef.current = existingData;
  prevInitialDataIdRef.current = initialData == null ? void 0 : initialData.id;
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$4(() => {
    devLog("[useMileageTypeForm] Creating new schema", { existingDataLength: existingData.length, initialDataId });
    return createMileageTypeSchema(existingData, initialDataId);
  }, [existingData, initialDataId]);
  const defaultValues = useMemo$4(() => {
    if (initialData) {
      return getDefaultMileageTypeValues({
        name: initialData.name,
        description: initialData.description,
        currentRate: initialData.mileage,
        // unitOfMeasurementId is computed in MileageTypeTable from unit string
        unitOfMeasurementId: initialData.unitOfMeasurementId ?? 1,
        effectiveFrom: initialData.effectiveFrom || getCurrentMonthStart(),
        taxTypeId: initialData.taxTypeId
      });
    }
    return getDefaultMileageTypeValues({
      effectiveFrom: getCurrentMonthStart()
    });
  }, [initialData]);
  const form = useForm({
    resolver: a(schema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  useEffect$1(() => {
    if (initialData) {
      const newValues = getDefaultMileageTypeValues({
        name: initialData.name,
        description: initialData.description,
        currentRate: initialData.mileage,
        unitOfMeasurementId: initialData.unitOfMeasurementId ?? 1,
        effectiveFrom: initialData.effectiveFrom || getCurrentMonthStart(),
        taxTypeId: initialData.taxTypeId
      });
      form.reset(newValues);
    } else {
      form.reset(getDefaultMileageTypeValues({
        effectiveFrom: getCurrentMonthStart()
      }));
    }
  }, [initialData, form]);
  useEffect$1(() => {
    form.reset(getDefaultMileageTypeValues({
      effectiveFrom: getCurrentMonthStart()
    }));
  }, [companyId, form]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: {
      errors,
      isValid,
      isDirty,
      isSubmitting,
      touchedFields,
      dirtyFields
    }
  } = form;
  const handleFormSubmit = useCallback$6(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultMileageTypeValues({
          effectiveFrom: getCurrentMonthStart()
        }));
      } catch {
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$6(() => {
    reset();
    onCancel == null ? void 0 : onCancel();
  }, [reset, onCancel]);
  useEffect$1(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleCancel]);
  const getFieldError2 = useCallback$6(
    (fieldName) => {
      const fieldError = errors[fieldName];
      const isTouched = touchedFields[fieldName];
      return isTouched && fieldError ? fieldError.message : void 0;
    },
    [errors, touchedFields]
  );
  const hasFieldError = useCallback$6(
    (fieldName) => {
      const fieldError = errors[fieldName];
      const isTouched = touchedFields[fieldName];
      return Boolean(isTouched && fieldError);
    },
    [errors, touchedFields]
  );
  return {
    form,
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    setValue,
    control,
    watch,
    reset,
    errors,
    isValid,
    isDirty,
    isSubmitting,
    touchedFields,
    dirtyFields,
    getFieldError: getFieldError2,
    hasFieldError,
    handleCancel,
    canSubmit: useMemo$4(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$5 } = await importShared("react");
const useMileageTypeOperations = (companyId, onSuccess) => {
  var _a;
  const createExpenseTypeMutation = useCreateExpenseType();
  const updateExpenseTypeMutation = useUpdateExpenseType();
  const toggleExpenseTypeMutation = useToggleExpenseTypeStatus();
  const handleCreateMileageType = useCallback$5(async (data) => {
    if (!companyId) return;
    try {
      devLog("Creating mileage type:", data);
      const expenseTypeData = {
        name: data.name.trim(),
        description: data.description || void 0,
        formType: ExpenseFormType.MILEAGE,
        formTypeId: MILEAGE_FORM_TYPE_ID,
        mileage: data.currentRate,
        unitOfMeasurementId: data.unitOfMeasurementId,
        // TODO: Backend needs to add taxTypeId to ExpenseTypeCreate - see TRX-160 defect
        // taxTypeId: data.taxTypeId || null,
        status: "active"
      };
      await createExpenseTypeMutation.mutateAsync({
        companyShortName: companyId,
        data: expenseTypeData
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to create mileage type:", error);
      throw error;
    }
  }, [companyId, createExpenseTypeMutation, onSuccess]);
  const handleUpdateMileageType = useCallback$5(async (id, data, originalData) => {
    if (!companyId) return;
    try {
      devLog("Updating mileage type:", { id, data });
      const expenseTypeData = {};
      let hasChange = false;
      if (!originalData || data.name.trim() !== originalData.name) {
        expenseTypeData.name = data.name.trim();
        hasChange = true;
      }
      if (!originalData || (data.description || "") !== (originalData.description || "")) {
        expenseTypeData.description = data.description || void 0;
        hasChange = true;
      }
      if (hasChange) {
        expenseTypeData.updated = /* @__PURE__ */ new Date();
        await updateExpenseTypeMutation.mutateAsync({
          companyShortName: companyId,
          id,
          data: expenseTypeData
        });
        onSuccess == null ? void 0 : onSuccess();
      }
    } catch (error) {
      devError("Failed to update mileage type:", error);
      throw error;
    }
  }, [companyId, updateExpenseTypeMutation, onSuccess]);
  const toggleActiveMileageType = useCallback$5(async (id, currentStatus) => {
    if (!companyId || toggleExpenseTypeMutation.isPending) return;
    try {
      devLog("Toggling mileage type status:", { id, currentStatus });
      await toggleExpenseTypeMutation.mutateAsync({
        id,
        companyShortName: companyId,
        isActive: !currentStatus
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to toggle mileage type status:", error);
      throw error;
    }
  }, [companyId, toggleExpenseTypeMutation, onSuccess]);
  return {
    handleCreateMileageType,
    handleUpdateMileageType,
    toggleActiveMileageType,
    isCreating: createExpenseTypeMutation.isPending,
    isUpdating: updateExpenseTypeMutation.isPending,
    isOperating: createExpenseTypeMutation.isPending || updateExpenseTypeMutation.isPending || toggleExpenseTypeMutation.isPending,
    togglingRowId: toggleExpenseTypeMutation.isPending ? (_a = toggleExpenseTypeMutation.variables) == null ? void 0 : _a.id : void 0
  };
};
const useMileageRates = ({
  companyShortName,
  expenseTypeId,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName && expenseTypeId ? queryKeys$1.mileageRates.byExpenseType(companyShortName, expenseTypeId) : queryKeys$1.mileageRates.all(),
    queryFn: async () => {
      if (!companyShortName || !expenseTypeId) {
        throw new Error("Company short name and expense type ID are required");
      }
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATES(companyShortName, expenseTypeId);
      const response = await apiClient.get(url);
      return response.data;
    },
    enabled: enabled && !!companyShortName && !!expenseTypeId,
    staleTime: 2 * 60 * 1e3,
    gcTime: 5 * 60 * 1e3
  });
};
const useCreateMileageRate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, expenseTypeId, data }) => {
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATE_CREATE(companyShortName, expenseTypeId);
      const response = await apiClient.post(url, data);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys$1.mileageRates.byExpenseType(
          variables.companyShortName,
          variables.expenseTypeId
        )
      });
    },
    onError: (error) => {
      console.error("Failed to create mileage rate:", error);
    }
  });
};
const useDeleteMileageRate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, expenseTypeId, rateId }) => {
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATE_DELETE(companyShortName, expenseTypeId, rateId);
      const response = await apiClient.delete(url);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys$1.mileageRates.byExpenseType(
          variables.companyShortName,
          variables.expenseTypeId
        )
      });
    },
    onError: (error) => {
      console.error("Failed to delete mileage rate:", error);
    }
  });
};
const NEW_RATE_ROW_ID = "new";
const NEW_RATE_NUMERIC_ID = -1;
function getMileageRateRowId(id) {
  return id === NEW_RATE_NUMERIC_ID ? NEW_RATE_ROW_ID : String(id);
}
const MILEAGE_RATE_LABELS = {
  RATE: "Rate",
  EFFECTIVE_FROM: "Effective From",
  EFFECTIVE_TO: "Effective To",
  STATUS: "Status",
  ACTIONS: "Action"
};
const MILEAGE_RATE_MESSAGES = {
  EMPTY_STATE_TITLE: "No rates defined yet",
  ADD_NEW_RATE: "Add New Rate",
  LOADING_ERROR: "Failed to load mileage rates",
  CANNOT_ADD_INACTIVE: "Cannot add new rates to an inactive mileage type",
  CANNOT_DELETE_INACTIVE: "Cannot delete rates of an inactive mileage type",
  ONLY_FUTURE_DELETE: "Only future rates can be deleted",
  FILL_REQUIRED: "Fill in the required fields.",
  RATE_POSITIVE: "Rate must be a positive numeric value."
};
const MILEAGE_RATE_PLACEHOLDERS = {
  RATE: "0.00",
  SELECT_MONTH: "Select month"
};
const MILEAGE_RATE_VALIDATION = {
  RATE_MIN: 0.01
};
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function generateFutureMonthOptions() {
  const options = [];
  const now = /* @__PURE__ */ new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  for (let i = 1; i <= 12; i++) {
    const monthIndex = (currentMonth + i) % 12;
    const year = currentYear + Math.floor((currentMonth + i) / 12);
    const date2 = new Date(year, monthIndex, 1);
    options.push({
      value: date2.toISOString(),
      label: `${MONTHS[monthIndex]}, ${year}`
    });
  }
  return options;
}
function formatEffectiveDate$1(dateString) {
  const date2 = new Date(dateString);
  return `${MONTHS[date2.getMonth()]}, ${date2.getFullYear()}`;
}
function formatRate$1(rate, unit) {
  return `$ ${rate.toFixed(2)}/${unit}`;
}
function normalizeToYearMonth(dateString) {
  if (!dateString) return "";
  const date2 = new Date(dateString);
  if (isNaN(date2.getTime())) return "";
  const year = date2.getUTCFullYear();
  const month = String(date2.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}
function filterAvailableMonthOptions(options, existingDates) {
  const existingYearMonths = new Set(existingDates.map(normalizeToYearMonth));
  return options.filter((option) => !existingYearMonths.has(normalizeToYearMonth(option.value)));
}
const { useCallback: useCallback$4, useState: useState$1 } = await importShared("react");
const useMileageRateTableState = () => {
  const [state, setState] = useState$1({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  const handleStartAdd = useCallback$4(() => {
    setState((prev) => ({
      ...prev,
      isAddingNew: true,
      editingRowId: NEW_RATE_ROW_ID,
      editingData: void 0
    }));
  }, []);
  const handleFormCancel = useCallback$4(() => {
    setState({
      editingRowId: void 0,
      editingData: void 0,
      isAddingNew: false
    });
  }, []);
  const resetState = useCallback$4(() => {
    setState({
      editingRowId: void 0,
      editingData: void 0,
      isAddingNew: false
    });
  }, []);
  return {
    ...state,
    handleStartAdd,
    handleFormCancel,
    resetState
  };
};
const mileageRateSchema = object({
  rate: string().min(1, MILEAGE_RATE_MESSAGES.FILL_REQUIRED).refine((val) => {
    const num = parseFloat(val);
    return !isNaN(num) && num >= MILEAGE_RATE_VALIDATION.RATE_MIN;
  }, MILEAGE_RATE_MESSAGES.RATE_POSITIVE),
  effectiveMonth: string().min(1, MILEAGE_RATE_MESSAGES.FILL_REQUIRED)
});
const getDefaultValues = () => ({
  rate: "",
  effectiveMonth: ""
});
const { useCallback: useCallback$3, useEffect, useMemo: useMemo$3 } = await importShared("react");
const useMileageRateForm = ({
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
} = {}) => {
  const defaultValues = useMemo$3(() => getDefaultValues(), []);
  const form = useForm({
    resolver: a(mileageRateSchema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: {
      errors,
      isValid,
      isDirty,
      isSubmitting,
      touchedFields,
      dirtyFields
    }
  } = form;
  const handleFormSubmit = useCallback$3(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultValues());
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$3(() => {
    reset(getDefaultValues());
    onCancel == null ? void 0 : onCancel();
  }, [reset, onCancel]);
  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, handleCancel]);
  const getFieldError2 = useCallback$3(
    (fieldName) => {
      const fieldError = errors[fieldName];
      const isTouched = touchedFields[fieldName];
      return isTouched && fieldError ? fieldError.message : void 0;
    },
    [errors, touchedFields]
  );
  const hasFieldError = useCallback$3(
    (fieldName) => {
      const fieldError = errors[fieldName];
      const isTouched = touchedFields[fieldName];
      return Boolean(isTouched && fieldError);
    },
    [errors, touchedFields]
  );
  return {
    form,
    handleSubmit: handleSubmit(handleFormSubmit),
    setValue,
    control,
    reset,
    errors,
    isValid,
    isDirty,
    isSubmitting,
    touchedFields,
    dirtyFields,
    getFieldError: getFieldError2,
    hasFieldError,
    handleCancel,
    canSubmit: useMemo$3(() => {
      return isValid && !isSubmitting && !isLoading && isDirty;
    }, [isValid, isSubmitting, isLoading, isDirty]),
    isFormLoading: isLoading || isSubmitting
  };
};
const createRateColumn = ({
  editingRowId,
  formControl,
  unit = "mile"
}) => ({
  accessorKey: "rate",
  header: MILEAGE_RATE_LABELS.RATE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === getMileageRateRowId(rowData.id);
    if (isEditing && formControl) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "rate",
          control: formControl,
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Aa,
            {
              ...field,
              currencySymbol: "$",
              endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-exp-grey-900", children: [
                "per ",
                unit
              ] }),
              step: "0.01",
              min: "0.01",
              placeholder: MILEAGE_RATE_PLACEHOLDERS.RATE,
              className: "w-36 h-8 text-sm pr-16"
            }
          )
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-900", children: formatRate$1(rowData.rate, unit) }),
        editContent: null
      }
    );
  }
});
const createEffectiveFromColumn$1 = ({
  editingRowId,
  formControl,
  futureMonthOptions = []
}) => ({
  accessorKey: "effectiveDate",
  header: MILEAGE_RATE_LABELS.EFFECTIVE_FROM,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === getMileageRateRowId(rowData.id);
    if (isEditing && formControl) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "effectiveMonth",
          control: formControl,
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(pt, { value: field.value, onValueChange: field.onChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ze, { className: "w-44 h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ht, { placeholder: MILEAGE_RATE_PLACEHOLDERS.SELECT_MONTH }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Je,
              {
                className: "w-(--radix-select-trigger-width) [&>span:first-child]:hidden [&>span:last-child]:hidden",
                viewportClassName: "overflow-y-auto exp-custom-scrollbar",
                children: futureMonthOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Qe,
                  {
                    value: option.value,
                    showCheckIcon: false,
                    className: "px-4 exp-custom-scrollbar",
                    children: option.label
                  },
                  option.value
                ))
              }
            )
          ] })
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-900", children: formatEffectiveDate$1(rowData.effectiveDate) }),
        editContent: null
      }
    );
  }
});
const createEffectiveToColumn = ({
  editingRowId
}) => ({
  accessorKey: "expiryDate",
  header: MILEAGE_RATE_LABELS.EFFECTIVE_TO,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === getMileageRateRowId(rowData.id);
    if (isEditing) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-500", children: "-" });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-900", children: rowData.expiryDate ? formatEffectiveDate$1(rowData.expiryDate) : "-" }),
        editContent: null
      }
    );
  }
});
const STATUS_CONFIG = {
  [MileageRateStatus.FUTURE]: {
    bgColor: "bg-exp-primary-blue-100",
    textColor: "text-exp-primary-blue-600",
    label: "Future"
  },
  [MileageRateStatus.CURRENT]: {
    bgColor: "bg-exp-green-50",
    textColor: "text-exp-green-800",
    label: "Current"
  },
  [MileageRateStatus.PAST]: {
    bgColor: "bg-exp-neutral-20",
    textColor: "text-exp-grey-800",
    label: "Past"
  },
  [MileageRateStatus.INACTIVE]: {
    bgColor: "bg-exp-neutral-30",
    textColor: "text-exp-grey-800",
    label: "Inactive"
  }
};
const MileageRateStatusBadge = ({
  status,
  className = ""
}) => {
  const config = STATUS_CONFIG[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Pr,
    {
      variant: "outline",
      className: `rounded-8! border-0 ${config.bgColor} ${config.textColor} ${className}`,
      children: config.label
    }
  );
};
const createStatusColumn = ({
  editingRowId
}) => ({
  accessorKey: "status",
  header: MILEAGE_RATE_LABELS.STATUS,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === getMileageRateRowId(rowData.id);
    if (isEditing) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MileageRateStatusBadge, { status: MileageRateStatus.FUTURE });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(MileageRateStatusBadge, { status: rowData.status }),
        editContent: null
      }
    );
  }
});
const createActionsColumn = ({
  editingRowId,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onDelete,
  isExpenseTypeActive = true,
  isDeleting = false
}) => ({
  id: "actions",
  header: MILEAGE_RATE_LABELS.ACTIONS,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const rowId = getMileageRateRowId(rowData.id);
    const isEditing = editingRowId === rowId;
    if (isEditing && onSubmit && onCancel && canSubmit !== void 0 && isFormLoading !== void 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pe,
          {
            variant: "ghost",
            size: "sm",
            className: "p-1 text-exp-green-500 hover:text-exp-green-800",
            onClick: onSubmit,
            disabled: !canSubmit || isFormLoading,
            children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pe,
          {
            variant: "ghost",
            size: "sm",
            className: "p-1 text-exp-red-500 hover:text-exp-red-600",
            onClick: onCancel,
            disabled: isFormLoading,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
          }
        )
      ] });
    }
    const canDelete = isExpenseTypeActive && rowData.status === MileageRateStatus.FUTURE;
    const getDeleteTooltip = () => {
      if (!isExpenseTypeActive) {
        return MILEAGE_RATE_MESSAGES.CANNOT_DELETE_INACTIVE;
      }
      if (rowData.status !== MileageRateStatus.FUTURE) {
        return MILEAGE_RATE_MESSAGES.ONLY_FUTURE_DELETE;
      }
      return void 0;
    };
    const tooltip = getDeleteTooltip();
    const deleteButton = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        variant: "ghost",
        size: "sm",
        className: `p-1 ${canDelete ? "text-exp-red-500 hover:text-exp-red-600" : "text-exp-neutral-50 cursor-not-allowed"}`,
        onClick: () => canDelete && (onDelete == null ? void 0 : onDelete(rowData.id)),
        disabled: !canDelete || isDeleting,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-4" })
      }
    );
    if (tooltip) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(En, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex", children: deleteButton }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Mn,
          {
            variant: "light",
            size: "sm",
            avoidCollisions: false,
            side: "right",
            showArrow: false,
            className: "font-normal text-xs text-exp-grey-600",
            children: tooltip
          }
        )
      ] });
    }
    return deleteButton;
  }
});
const { useCallback: useCallback$2, useMemo: useMemo$2 } = await importShared("react");
const MileageRateTable = ({
  rates,
  unit,
  isExpenseTypeActive,
  futureMonthOptions,
  onCreateRate,
  onDeleteRate,
  isCreating,
  isDeleting
}) => {
  const {
    editingRowId,
    isAddingNew,
    handleStartAdd,
    handleFormCancel,
    resetState
  } = useMileageRateTableState();
  const canAddNewRate = isExpenseTypeActive;
  const availableMonthOptions = useMemo$2(() => {
    const existingDates = rates.map((rate) => rate.effectiveDate);
    return filterAvailableMonthOptions(futureMonthOptions, existingDates);
  }, [futureMonthOptions, rates]);
  const handleFormSubmit = useCallback$2(async (data) => {
    const rateValue = parseFloat(data.rate);
    const roundedRate = Math.round(rateValue * 100) / 100;
    await onCreateRate({
      rate: roundedRate,
      effectiveDate: data.effectiveMonth
    });
    resetState();
  }, [onCreateRate, resetState]);
  const formHook = useMileageRateForm({
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isCreating,
    isActive: isAddingNew
  });
  const handleDelete = useCallback$2(async (rateId) => {
    await onDeleteRate(rateId);
  }, [onDeleteRate]);
  const stableControl = useMemo$2(() => formHook.control, [formHook.control]);
  const baseColumns = useMemo$2(() => [
    createRateColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields,
      unit
    }),
    createEffectiveFromColumn$1({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields,
      futureMonthOptions: availableMonthOptions
    }),
    createEffectiveToColumn({ editingRowId }),
    createStatusColumn({ editingRowId })
  ], [
    editingRowId,
    stableControl,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields,
    unit,
    availableMonthOptions
  ]);
  const actionsColumn = useMemo$2(
    () => createActionsColumn({
      editingRowId,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onDelete: handleDelete,
      isExpenseTypeActive,
      isDeleting
    }),
    [editingRowId, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading, handleDelete, isExpenseTypeActive, isDeleting]
  );
  const columns = [...baseColumns, actionsColumn];
  const tableData = useMemo$2(() => {
    if (isAddingNew) {
      const newRow = {
        id: NEW_RATE_NUMERIC_ID,
        mileageRateId: NEW_RATE_NUMERIC_ID,
        rate: 0,
        effectiveDate: "",
        expiryDate: null,
        status: MileageRateStatus.FUTURE,
        createdBy: "",
        createdDate: "",
        updatedBy: null,
        updatedDate: null
      };
      return [...rates, newRow];
    }
    return rates;
  }, [rates, isAddingNew]);
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-sm text-exp-neutral-500", children: MILEAGE_RATE_MESSAGES.EMPTY_STATE_TITLE });
  const addNewRateButton = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Pe,
    {
      variant: "ghost",
      className: `text-exp-primary-blue-600 ${!canAddNewRate ? "opacity-50 cursor-not-allowed" : ""}`,
      onClick: handleStartAdd,
      disabled: !canAddNewRate || isAddingNew,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 mr-1" }),
        MILEAGE_RATE_MESSAGES.ADD_NEW_RATE
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      js,
      {
        columns,
        data: tableData,
        emptyState,
        className: "border-exp-neutral-30 !border-b-0 !rounded-b-none",
        editingRowId: editingRowId || (isAddingNew ? NEW_RATE_ROW_ID : void 0),
        onRowEdit: () => {
        },
        onRowSave: () => {
        },
        onRowCancel: handleFormCancel,
        getRowId: (row) => getMileageRateRowId(row.id),
        styles: {
          bodyCell: "content-start",
          bodyRow: "",
          headerCell: "text-exp-neutral-400"
        }
      }
    ),
    !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border !border-t-0.5 border-exp-neutral-30 rounded-b-lg", children: canAddNewRate ? addNewRateButton : /* @__PURE__ */ jsxRuntimeExports.jsxs(Dn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(En, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: addNewRateButton }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Mn,
        {
          variant: "light",
          size: "sm",
          side: "right",
          showArrow: false,
          className: "font-normal text-xs text-exp-grey-600",
          children: MILEAGE_RATE_MESSAGES.CANNOT_ADD_INACTIVE
        }
      )
    ] }) })
  ] });
};
const { useCallback: useCallback$1, useMemo: useMemo$1 } = await importShared("react");
const ManageMileageRatesDialog = ({
  open,
  onOpenChange,
  expenseTypeId,
  expenseTypeName
}) => {
  const { selectedCompany } = useCompanyStore();
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.id) || null;
  const { data, isFetching, error } = useMileageRates({
    companyShortName,
    expenseTypeId,
    enabled: open
  });
  const createMutation = useCreateMileageRate();
  const deleteMutation = useDeleteMileageRate();
  const futureMonthOptions = useMemo$1(() => generateFutureMonthOptions(), []);
  const isExpenseTypeActive = (data == null ? void 0 : data.isExpenseTypeActive) ?? true;
  const unit = (data == null ? void 0 : data.unit) || "mile";
  const rates = (data == null ? void 0 : data.rates) ?? [];
  const handleCreateRate = useCallback$1(async (rateData) => {
    if (!companyShortName) return;
    await createMutation.mutateAsync({
      companyShortName,
      expenseTypeId,
      data: rateData
    });
  }, [companyShortName, expenseTypeId, createMutation]);
  const handleDeleteRate = useCallback$1(async (rateId) => {
    if (!companyShortName) return;
    await deleteMutation.mutateAsync({
      companyShortName,
      expenseTypeId,
      rateId
    });
  }, [companyShortName, expenseTypeId, deleteMutation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ks, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ua, { className: "max-w-3xl p-6", showCloseButton: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Xs, { className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(qa, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ka, { className: "flex items-center gap-2 text-base font-semibold text-exp-primary-blue-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "calculate", className: "size-4 text-exp-primary-blue-800" }) }),
      expenseTypeName
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: isFetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-6" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-exp-red-500 py-4", children: MILEAGE_RATE_MESSAGES.LOADING_ERROR }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      MileageRateTable,
      {
        rates,
        unit,
        isExpenseTypeActive,
        futureMonthOptions,
        onCreateRate: handleCreateRate,
        onDeleteRate: handleDeleteRate,
        isCreating: createMutation.isPending,
        isDeleting: deleteMutation.isPending
      }
    ) })
  ] }) });
};
const React$1 = await importShared("react");
const { useRef: useRef$1 } = React$1;
const getFieldError = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const isRequiredField = fieldName === "name" || fieldName === "currentRate" || fieldName === "unitOfMeasurementId" || fieldName === "effectiveFrom";
  const shouldShowError = isTouched || isDirty || hasValue || isRequiredField && fieldError;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const NameField = ({ control, errors, touchedFields, dirtyFields }) => {
  const renderCount = useRef$1(0);
  renderCount.current += 1;
  devLog(`[NameField] Render #${renderCount.current}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "name",
      control,
      render: ({ field }) => {
        devLog(`[NameField] Controller render`, { value: field.value, name: field.name });
        const errorMessage = getFieldError(errors, touchedFields, dirtyFields, "name", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ma,
          {
            ...field,
            placeholder: MILEAGE_TYPE_PLACEHOLDERS.NAME,
            error: errorMessage,
            required: true,
            showCharacterCount: true,
            maxCharacters: MILEAGE_TYPE_VALIDATION.NAME_MAX_LENGTH,
            enforceMaxLength: false
          }
        );
      }
    }
  );
};
const DescriptionField = ({ control, errors, touchedFields, dirtyFields }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Controller,
  {
    name: "description",
    control,
    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ma,
      {
        ...field,
        placeholder: MILEAGE_TYPE_PLACEHOLDERS.DESCRIPTION,
        error: getFieldError(errors, touchedFields, dirtyFields, "description", field.value),
        maxCharacters: MILEAGE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH,
        enforceMaxLength: false
      }
    )
  }
);
const CurrentRateField = ({
  control,
  errors,
  touchedFields,
  dirtyFields,
  unitOfMeasurements
}) => {
  const unitOfMeasurementId = useWatch({
    control,
    name: "unitOfMeasurementId"
  });
  const rateError = errors == null ? void 0 : errors.currentRate;
  const uomError = errors == null ? void 0 : errors.unitOfMeasurementId;
  const rateTouched = touchedFields == null ? void 0 : touchedFields.currentRate;
  const uomTouched = touchedFields == null ? void 0 : touchedFields.unitOfMeasurementId;
  const rateDirty = dirtyFields == null ? void 0 : dirtyFields.currentRate;
  const uomDirty = dirtyFields == null ? void 0 : dirtyFields.unitOfMeasurementId;
  const showRateError = (rateTouched || rateDirty) && (rateError == null ? void 0 : rateError.message);
  const showUomError = (uomTouched || uomDirty) && (uomError == null ? void 0 : uomError.message);
  const errorMessage = showRateError ? rateError.message : showUomError ? uomError.message : void 0;
  const uomOptions = (unitOfMeasurements == null ? void 0 : unitOfMeasurements.filter((u) => u.active).map((u) => ({
    value: u.id.toString(),
    label: `per ${u.unit}`
  }))) || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "currentRate",
      control,
      render: ({ field: rateField }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "unitOfMeasurementId",
          control,
          render: ({ field: uomField }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                prefix: "$",
                suffix: {
                  type: "select",
                  value: (unitOfMeasurementId == null ? void 0 : unitOfMeasurementId.toString()) || "",
                  options: uomOptions,
                  onValueChange: (value) => uomField.onChange(parseInt(value, 10)),
                  placeholder: "per mile"
                },
                type: "number",
                step: "0.01",
                min: "0.01",
                placeholder: MILEAGE_TYPE_PLACEHOLDERS.CURRENT_RATE,
                textAlign: "right",
                value: ((_a = rateField.value) == null ? void 0 : _a.toString()) || "",
                onChange: (e) => {
                  const value = e.target.value;
                  rateField.onChange(value ? parseFloat(value) : 0);
                },
                onBlur: rateField.onBlur,
                error: errorMessage,
                className: "w-36"
              }
            );
          }
        }
      )
    }
  );
};
const generateMonthOptions = () => {
  const options = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = 0; i < 24; i++) {
    const date2 = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const value = date2.toISOString();
    const month = date2.toLocaleDateString("en-US", { month: "long" });
    const year = date2.getFullYear();
    options.push({ value, label: `${month}, ${year}` });
  }
  return options;
};
const EffectiveFromField = ({ control, errors, touchedFields, dirtyFields }) => {
  const monthOptions = generateMonthOptions();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "effectiveFrom",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError(errors, touchedFields, dirtyFields, "effectiveFrom", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pa,
          {
            value: field.value instanceof Date ? field.value.toISOString() : "",
            onValueChange: (value) => field.onChange(new Date(value)),
            options: monthOptions,
            placeholder: MILEAGE_TYPE_PLACEHOLDERS.EFFECTIVE_FROM,
            error: errorMessage,
            required: true
          }
        );
      }
    }
  );
};
const NONE_TAX_TYPE_VALUE = "__none__";
const TaxTypeField = ({ control, errors, touchedFields, dirtyFields, taxTypes }) => {
  const taxTypeOptions = [
    { value: NONE_TAX_TYPE_VALUE, label: "None" },
    ...(taxTypes == null ? void 0 : taxTypes.map((tt) => ({
      value: tt.id.toString(),
      label: tt.displayText
    }))) || []
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "taxTypeId",
      control,
      render: ({ field }) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pa,
          {
            value: ((_a = field.value) == null ? void 0 : _a.toString()) || NONE_TAX_TYPE_VALUE,
            onValueChange: (value) => field.onChange(value === NONE_TAX_TYPE_VALUE ? null : parseInt(value, 10)),
            options: taxTypeOptions,
            placeholder: MILEAGE_TYPE_PLACEHOLDERS.TAX_TYPE,
            error: getFieldError(errors, touchedFields, dirtyFields, "taxTypeId", field.value)
          }
        );
      }
    }
  );
};
const MileageTypeActionButtons = React$1.memo(({
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  isEditing
}) => {
  useSubmitOnEnter({ onSubmit, canSubmit, isFormLoading, isEditing });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        "data-testid": "save-mileage-type-button",
        onMouseDown: (e) => {
          e.preventDefault();
          onSubmit();
        },
        variant: "ghost",
        disabled: !canSubmit || isFormLoading,
        className: `${canSubmit && !isFormLoading ? "hover:bg-green-50" : "opacity-50 cursor-not-allowed"}`,
        title: isFormLoading ? MILEAGE_TYPE_MESSAGES.SAVING : canSubmit ? MILEAGE_TYPE_MESSAGES.SAVE_CHANGES : MILEAGE_TYPE_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `w-4 h-4 ${canSubmit ? "text-green-600" : "text-gray-400"}` })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        "data-testid": "cancel-mileage-type-button",
        onMouseDown: (e) => {
          e.preventDefault();
          onCancel();
        },
        variant: "ghost",
        disabled: isFormLoading,
        className: "hover:bg-exp-red-100",
        title: MILEAGE_TYPE_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-exp-red-500" })
      }
    )
  ] });
});
NameField.displayName = "NameField";
DescriptionField.displayName = "DescriptionField";
CurrentRateField.displayName = "CurrentRateField";
EffectiveFromField.displayName = "EffectiveFromField";
TaxTypeField.displayName = "TaxTypeField";
MileageTypeActionButtons.displayName = "MileageTypeActionButtons";
const getStatusColor = (status) => {
  return status === MileageTypeStatus.ACTIVE ? "bg-trax-green-600" : "bg-exp-neutral-70";
};
let columnCreateCount = 0;
const createMileageTypeNameColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => {
  columnCreateCount++;
  devLog(`[createMileageTypeNameColumn] Column created #${columnCreateCount}`, { editingRowId, hasFormControl: !!formControl });
  return {
    accessorKey: "name",
    header: MILEAGE_TYPE_LABELS.MILEAGE_TYPE,
    cell: (context) => {
      devLog("[MileageTypeNameColumn] cell render", { editingRowId });
      const cellContext = context;
      const rowData = cellContext.row.original;
      const isEditing = editingRowId === rowData.id;
      if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
        devLog("[MileageTypeNameColumn] Rendering NameField", { rowId: rowData.id, errorsKeys: Object.keys(formErrors) });
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          NameField,
          {
            control: formControl,
            errors: formErrors,
            touchedFields,
            dirtyFields
          }
        ) }) });
      }
      const status = rowData.status;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context: cellContext,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: p("size-2 rounded-full", getStatusColor(status)),
                "data-testid": `status-indicator-${rowData.id}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: cellContext.getValue() })
          ] }),
          editContent: null
        }
      );
    }
  };
};
const createMileageTypeDescriptionColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => ({
  accessorKey: "description",
  header: MILEAGE_TYPE_LABELS.DESCRIPTION,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        DescriptionField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      );
    }
    const description = cellContext.getValue();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-200", children: description || "-" }),
        editContent: null
      }
    );
  }
});
const formatRate = (rate, unit) => {
  if (rate === void 0 || rate === null) return "-";
  const formattedRate = rate.toFixed(2);
  const unitLabel = unit || "mile";
  return `$${formattedRate}/${unitLabel}`;
};
const createCurrentRateColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  unitOfMeasurements
}) => ({
  accessorKey: "currentRate",
  header: MILEAGE_TYPE_LABELS.CURRENT_RATE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        CurrentRateField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          unitOfMeasurements
        }
      );
    }
    const rate = rowData.mileage;
    const unit = rowData.unitOfMeasurement;
    const displayText = formatRate(rate, unit);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: rate ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: "outline", className: "font-mono text-xs", children: displayText }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-100", children: "-" }),
        editContent: null
      }
    );
  }
});
const formatEffectiveDate = (date2) => {
  if (!date2) return "-";
  const d = typeof date2 === "string" ? new Date(date2) : date2;
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const year = d.getFullYear();
  return `${month}, ${year}`;
};
const createEffectiveFromColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => ({
  accessorKey: "effectiveFrom",
  header: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: MILEAGE_TYPE_LABELS.EFFECTIVE_FROM }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(En, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5 text-exp-neutral-100 cursor-help" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mn, { side: "top", className: "max-w-xs", children: MILEAGE_TYPE_MESSAGES.EFFECTIVE_FROM_TOOLTIP })
    ] })
  ] }),
  cell: (context) => {
    var _a;
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        EffectiveFromField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      );
    }
    const effectiveDate = rowData.effectiveFrom || ((_a = rowData.mileageEffectiveRate) == null ? void 0 : _a.effectiveDate);
    const displayText = formatEffectiveDate(effectiveDate);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: displayText }),
        editContent: null
      }
    );
  }
});
const formatTaxType = (taxCode, taxRate) => {
  if (!taxCode) return "-";
  return taxRate ? `${taxCode} ${taxRate}%` : taxCode;
};
const createTaxTypeColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  taxTypes
}) => ({
  accessorKey: "taxTypeId",
  header: MILEAGE_TYPE_LABELS.TAX_TYPE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        TaxTypeField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          taxTypes
        }
      );
    }
    const taxTypeId = rowData.taxTypeId;
    const taxType = taxTypes == null ? void 0 : taxTypes.find((tt) => tt.id === taxTypeId);
    const displayText = taxType ? formatTaxType(taxType.taxCode, taxType.taxRate) : "-";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: displayText }),
        editContent: null
      }
    );
  }
});
const createEmployeesColumn = ({
  editingRowId
}) => ({
  id: "employees",
  header: MILEAGE_TYPE_LABELS.EMPLOYEES,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    const isDefault = rowData.isDefault;
    const employeeCount = rowData.employeeCount ?? 0;
    if (isEditing) {
      if (isDefault) {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: "secondary", className: "bg-exp-neutral-20 text-exp-primary-blue-800", children: MILEAGE_TYPE_LABELS.DEFAULT }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dn, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(En, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5 text-exp-neutral-100 cursor-help" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mn, { side: "top", className: "max-w-xs", children: MILEAGE_TYPE_MESSAGES.DEFAULT_TOOLTIP })
          ] })
        ] });
      }
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: isDefault ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: "secondary", className: "bg-exp-neutral-20 text-exp-primary-blue-800", children: MILEAGE_TYPE_LABELS.DEFAULT }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dn, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(En, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5 text-exp-neutral-100 cursor-help" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mn, { side: "top", className: "max-w-xs", children: MILEAGE_TYPE_MESSAGES.DEFAULT_TOOLTIP })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Pr, { variant: "outline", className: "text-exp-neutral-200", children: [
          employeeCount,
          " ",
          MILEAGE_TYPE_LABELS.ASSIGNED
        ] }),
        editContent: null
      }
    );
  }
});
const ActionsCell = ({
  row,
  isEditing,
  isToggling,
  isDefault,
  onEdit,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive,
  onManageRates,
  onAssignEmployees,
  onSetAsDefault
}) => {
  const rowId = row.id;
  const isActive = row.status === "active";
  const expenseTypeName = row.name;
  if (isEditing && onSubmit && onCancel && canSubmit !== void 0 && isFormLoading !== void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MileageTypeActionButtons,
      {
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        isEditing
      }
    );
  }
  const disableForDefault = isDefault;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        className: "w-fit flex items-center justify-start px-3 py-2 hover:bg-gray-100 transition-colors rounded-lg",
        variant: "ghost",
        onClick: onEdit || (() => onRowEdit == null ? void 0 : onRowEdit({ original: row })),
        "data-testid": `edit-button-${rowId}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Sr, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cr, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pe,
        {
          className: "cursor-pointer w-fit outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0",
          variant: "ghost",
          disabled: isToggling,
          onClick: (e) => e.stopPropagation(),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4", "data-testid": `ellipsis-button-${rowId}` })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Rr,
        {
          side: "right",
          align: "start",
          sideOffset: 2,
          "data-testid": `popover-${rowId}`,
          className: "w-[180px] bg-exp-neutral-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Nr,
              {
                onClick: () => onAssignEmployees == null ? void 0 : onAssignEmployees(rowId),
                disabled: disableForDefault,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4 text-exp-primary-blue-800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Nr,
              {
                onClick: () => onManageRates == null ? void 0 : onManageRates(rowId, expenseTypeName),
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "size-4 text-exp-primary-blue-800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: MILEAGE_TYPE_MESSAGES.MANAGE_RATES })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Nr,
              {
                onClick: () => onSetAsDefault == null ? void 0 : onSetAsDefault(rowId),
                disabled: disableForDefault,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-exp-primary-blue-800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ds, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Nr,
              {
                onClick: () => onToggleActive == null ? void 0 : onToggleActive(rowId, isActive),
                disabled: disableForDefault,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleOff, { className: `size-4 ${isActive ? "text-exp-neutral-70" : "text-trax-green-600"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: isActive ? MILEAGE_TYPE_MESSAGES.MARK_INACTIVE : MILEAGE_TYPE_MESSAGES.MARK_ACTIVE })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
};
const createMileageTypeActionsColumn = ({
  editingRowId,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive,
  onManageRates,
  togglingRowId
}) => ({
  id: "actions",
  header: MILEAGE_TYPE_LABELS.ACTIONS,
  cell: (context) => {
    const cellContext = context;
    const row = cellContext.row.original;
    const isEditing = editingRowId === row.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionsCell,
      {
        row,
        isEditing,
        isToggling: togglingRowId === row.id,
        isDefault: row.isDefault,
        onEdit: cellContext.onEdit,
        onRowEdit,
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        onToggleActive,
        onManageRates,
        onAssignEmployees: () => As.success("Coming soon: Employee assignment (TRX-296)"),
        onSetAsDefault: () => As.success("Coming soon: Set as default (TRX-315)")
      }
    );
  }
});
const React = await importShared("react");
const { useCallback, useMemo, useRef, useState } = React;
const MileageTypeTable = ({ className }) => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  devLog(`[MileageTypeTable] Render #${renderCount.current}`);
  const { selectedCompany } = useCompanyStore();
  const { data: mileageTypes, isLoading, error } = useMileageTypes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
  const { data: unitOfMeasurements } = useUnitOfMeasurements();
  const { data: taxTypes } = useTaxTypesDisplay({
    companyShortName: (selectedCompany == null ? void 0 : selectedCompany.shortName) || null
  });
  const [manageRatesDialog, setManageRatesDialog] = useState({
    isOpen: false,
    expenseTypeId: null,
    expenseTypeName: ""
  });
  const {
    editingRowId,
    isAddingNew,
    editingData,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  } = useExpenseTypeTableState(selectedCompany == null ? void 0 : selectedCompany.id);
  const {
    handleCreateMileageType,
    handleUpdateMileageType,
    toggleActiveMileageType,
    isOperating,
    togglingRowId
  } = useMileageTypeOperations(selectedCompany == null ? void 0 : selectedCompany.id, resetState);
  const handleManageRates = useCallback((expenseTypeId, expenseTypeName) => {
    setManageRatesDialog({
      isOpen: true,
      expenseTypeId: parseInt(expenseTypeId, 10),
      expenseTypeName
    });
  }, []);
  const handleCloseManageRatesDialog = useCallback((open) => {
    if (!open) {
      setManageRatesDialog({
        isOpen: false,
        expenseTypeId: null,
        expenseTypeName: ""
      });
    }
  }, []);
  const processedData = useMemo(() => {
    const dataArray = Array.isArray(mileageTypes) ? mileageTypes : [];
    const sorted = sortByCreatedDate(dataArray, "asc");
    return sorted.map((item, index) => {
      var _a, _b;
      const uomId = (_a = unitOfMeasurements == null ? void 0 : unitOfMeasurements.find((u) => u.unit === item.unitOfMeasurement)) == null ? void 0 : _a.id;
      return {
        ...item,
        isDefault: index === 0,
        employeeCount: 0,
        // TODO: Backend needs to provide this
        effectiveFrom: ((_b = item.mileageEffectiveRate) == null ? void 0 : _b.effectiveDate) ? new Date(item.mileageEffectiveRate.effectiveDate) : void 0,
        // Store unitOfMeasurementId for edit mode form
        unitOfMeasurementId: uomId ?? 1
        // Fallback to 1 (mile) if not found
      };
    });
  }, [mileageTypes, unitOfMeasurements]);
  const handleFormSubmit = useCallback(async (data) => {
    if (editingRowId === NEW_ROW_ID) {
      await handleCreateMileageType(data);
    } else if (editingRowId) {
      await handleUpdateMileageType(editingRowId, data, editingData);
    }
  }, [editingRowId, handleCreateMileageType, handleUpdateMileageType, editingData]);
  const prevProcessedDataRef = useRef(processedData);
  const prevEditingDataRef = useRef(editingData);
  const formHookOptions = useMemo(() => {
    devLog("[MileageTypeTable] formHookOptions useMemo recalculating", {
      editingDataId: editingData == null ? void 0 : editingData.id,
      processedDataLength: processedData.length,
      processedDataRef: processedData === prevProcessedDataRef.current ? "SAME" : "CHANGED",
      editingDataRef: editingData === prevEditingDataRef.current ? "SAME" : "CHANGED"
    });
    prevProcessedDataRef.current = processedData;
    prevEditingDataRef.current = editingData;
    return {
      initialData: editingData,
      existingData: processedData,
      onSubmit: handleFormSubmit,
      onCancel: handleFormCancel,
      isLoading: isOperating,
      companyId: selectedCompany == null ? void 0 : selectedCompany.id
    };
  }, [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, selectedCompany == null ? void 0 : selectedCompany.id]);
  const formHook = useMileageTypeForm(formHookOptions);
  devLog("[MileageTypeTable] formHook returned", {
    controlExists: !!formHook.control,
    errorsKeys: Object.keys(formHook.errors),
    isValid: formHook.form.formState.isValid
  });
  const stableControl = useMemo(() => formHook.control, [formHook.control]);
  const baseColumns = useMemo(() => {
    devLog("[MileageTypeTable] baseColumns useMemo recalculating", { editingRowId });
    return [
      createMileageTypeNameColumn({
        editingRowId,
        formControl: stableControl,
        formErrors: formHook.errors,
        touchedFields: formHook.touchedFields,
        dirtyFields: formHook.dirtyFields
      }),
      createMileageTypeDescriptionColumn({
        editingRowId,
        formControl: stableControl,
        formErrors: formHook.errors,
        touchedFields: formHook.touchedFields,
        dirtyFields: formHook.dirtyFields
      }),
      createCurrentRateColumn({
        editingRowId,
        formControl: stableControl,
        formErrors: formHook.errors,
        touchedFields: formHook.touchedFields,
        dirtyFields: formHook.dirtyFields,
        unitOfMeasurements
      }),
      createEffectiveFromColumn({
        editingRowId,
        formControl: stableControl,
        formErrors: formHook.errors,
        touchedFields: formHook.touchedFields,
        dirtyFields: formHook.dirtyFields
      }),
      createTaxTypeColumn({
        editingRowId,
        formControl: stableControl,
        formErrors: formHook.errors,
        touchedFields: formHook.touchedFields,
        dirtyFields: formHook.dirtyFields,
        taxTypes
      }),
      createEmployeesColumn({
        editingRowId
      })
    ];
  }, [
    editingRowId,
    stableControl,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields,
    unitOfMeasurements,
    taxTypes
  ]);
  const actionsColumn = useMemo(() => {
    devLog("[MileageTypeTable] actionsColumn useMemo recalculating", { editingRowId });
    return createMileageTypeActionsColumn({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onToggleActive: toggleActiveMileageType,
      onManageRates: handleManageRates,
      togglingRowId
    });
  }, [
    editingRowId,
    handleRowEdit,
    formHook.handleSubmit,
    formHook.handleCancel,
    formHook.canSubmit,
    formHook.isFormLoading,
    toggleActiveMileageType,
    handleManageRates,
    togglingRowId
  ]);
  const columns = [...baseColumns, actionsColumn];
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "featured-play-list", className: "size-9 text-exp-neutral-100" }),
      title: MILEAGE_TYPE_MESSAGES.EMPTY_STATE_TITLE,
      description: MILEAGE_TYPE_MESSAGES.EMPTY_STATE_DESCRIPTION,
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pe, { variant: "primary", onClick: handleStartAdd, "data-testid": "add-mileage-type-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
        MILEAGE_TYPE_MESSAGES.ADD_MILEAGE_TYPE
      ] })
    }
  );
  if (!selectedCompany) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500", children: MILEAGE_TYPE_MESSAGES.NO_COMPANY_SELECTED });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: MILEAGE_TYPE_MESSAGES.LOADING_ERROR });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, {}) });
  }
  const tableData = isAddingNew ? [...processedData, {
    id: NEW_ROW_ID,
    name: "",
    description: "",
    formType: "mileage",
    status: "active",
    isDefault: processedData.length === 0,
    // First row is default
    employeeCount: 0
  }] : processedData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      js,
      {
        columns,
        data: tableData,
        emptyState,
        className: "border-exp-neutral-30 !border-b-0 !rounded-b-none",
        editingRowId: editingRowId || (isAddingNew ? NEW_ROW_ID : void 0),
        onRowEdit: handleRowEdit,
        onRowSave: () => {
        },
        onRowCancel: handleFormCancel,
        getRowId: (row, index) => row.id || `row-${index}`,
        styles: { bodyCell: "content-start", bodyRow: "" }
      }
    ),
    (processedData.length > 0 || isAddingNew) && !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border !border-t-0.5 border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Pe,
      {
        className: "border-0",
        variant: "secondary",
        onClick: handleStartAdd,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
          MILEAGE_TYPE_MESSAGES.ADD_MILEAGE_TYPE
        ]
      }
    ) }),
    manageRatesDialog.expenseTypeId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ManageMileageRatesDialog,
      {
        open: manageRatesDialog.isOpen,
        onOpenChange: handleCloseManageRatesDialog,
        expenseTypeId: manageRatesDialog.expenseTypeId,
        expenseTypeName: manageRatesDialog.expenseTypeName
      }
    )
  ] });
};
const MileageType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "car", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: MILEAGE_TYPE_MESSAGES.PAGE_TITLE }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: MILEAGE_TYPE_MESSAGES.PAGE_DESCRIPTION })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MileageTypeTable, {}) })
  ] });
};
export {
  MileageType as default
};

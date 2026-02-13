import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as QueryObserver, l as useBaseQuery, g as useQuery, q as queryKeys, i as useQueryClient, u as useCompanyStore } from "./factory-BL5rFng1.js";
import { B as Ba, l as qs, a as Pa, e as Pr, P as Pe, I as In, D as Dn, E as En, M as Mn, j as js, K as Ks, U as Ua, n as Xs, q as qa, b as Ka, A as As, h as Kn, d as ds, p, k as Ma, C as Cr, S as Sr, R as Rr, N as Nr, o as Ds } from "./index.es-Diw2MuFT.js";
import { E as EmptyState } from "./EmptyState-BG8ydf6E.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import { f as useMileageTypes, e as useExpenseTypeTableState } from "./useExpenseTypeTableState-D7zuTHho.js";
import { a as apiClient } from "./axiosInstance-Ek46IKmV.js";
import { C as CONFIGURATION_ENDPOINTS } from "./configuration-BM7rAF-u.js";
import { o as object, n as number, s as string, l as literal, e as date, c as useForm, d as a, C as Controller, f as useWatch } from "./zod-PpMdyx4R.js";
import { u as useMutation } from "./use-debounced-callback-lUS9zbrn.js";
import { b as useEscapeHandler } from "./use-prevent-page-reload-CaDO_Sn7.js";
import { b as useCreateExpenseType, c as useUpdateExpenseType, d as useToggleExpenseTypeStatus, E as ExpenseFormType } from "./api-CAM2hhv_.js";
import { a as devLog, d as devError } from "./index-D4vrrc7u.js";
import { M as MileageRateStatus } from "./api-CLF4KpVH.js";
import { P as Plus } from "./plus-CiLynJ8e.js";
import { i as infiniteQueryBehavior, h as hasPreviousPage, a as hasNextPage } from "./infiniteQueryBehavior-DVl22OTE.js";
import { u as useSubmitOnEnter, s as sortByCreatedDate } from "./date-sorting.utils-C-8w7PK1.js";
import { c as createLucideIcon } from "./createLucideIcon-CWwrLivU.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode);
var InfiniteQueryObserver = class extends QueryObserver {
  constructor(client, options) {
    super(client, options);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(options) {
    super.setOptions({
      ...options,
      behavior: infiniteQueryBehavior()
    });
  }
  getOptimisticResult(options) {
    options.behavior = infiniteQueryBehavior();
    return super.getOptimisticResult(options);
  }
  fetchNextPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(query, options) {
    var _a, _b;
    const { state } = query;
    const parentResult = super.createResult(query, options);
    const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
    const fetchDirection = (_b = (_a = state.fetchMeta) == null ? void 0 : _a.fetchMore) == null ? void 0 : _b.direction;
    const isFetchNextPageError = isError && fetchDirection === "forward";
    const isFetchingNextPage = isFetching && fetchDirection === "forward";
    const isFetchPreviousPageError = isError && fetchDirection === "backward";
    const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
    const result = {
      ...parentResult,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: hasNextPage(options, state.data),
      hasPreviousPage: hasPreviousPage(options, state.data),
      isFetchNextPageError,
      isFetchingNextPage,
      isFetchPreviousPageError,
      isFetchingPreviousPage,
      isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
    return result;
  }
};
function useInfiniteQuery(options, queryClient) {
  return useBaseQuery(
    options,
    InfiniteQueryObserver
  );
}
const useUnitOfMeasurements = (showInactive = false) => {
  return useQuery({
    queryKey: queryKeys.unitOfMeasurements.list(showInactive),
    queryFn: async () => {
      const response = await apiClient.get(
        CONFIGURATION_ENDPOINTS.UNIT_OF_MEASUREMENTS,
        { params: { show_inactive: showInactive } }
      );
      return response.data;
    },
    staleTime: 10 * 60 * 1e3,
    // 10 minutes - UOM rarely changes
    gcTime: 30 * 60 * 1e3
  });
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
  DEFAULT_TOOLTIP: "Default type for employees who don't have special mileage types assigned",
  // Assign employees dialog
  ASSIGN_EMPLOYEES_SEARCH_PLACEHOLDER: "Search employee",
  ASSIGN_EMPLOYEES_ASSIGNED: "Assigned",
  ASSIGN_EMPLOYEES_UNASSIGNED: "Unassigned",
  ASSIGN_EMPLOYEES_NO_RESULTS: "No results found",
  ASSIGN_EMPLOYEES_SAVE: "Save Changes",
  ASSIGN_EMPLOYEES_CANCEL: "Cancel"
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
  // nullable() allows null as form input, refine() ensures it's selected before submit
  // Validation chain: z.number (invalid type) → min(1) (value 0) → refine (null)
  unitOfMeasurementId: number({ message: "Unit of measurement is required" }).min(1, "Unit of measurement is required").nullable().refine((val) => val !== null, {
    message: "Unit of measurement is required"
  }),
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
  unitOfMeasurementId: (initialData == null ? void 0 : initialData.unitOfMeasurementId) ?? null,
  effectiveFrom: (initialData == null ? void 0 : initialData.effectiveFrom) ?? getCurrentMonthStart(),
  taxTypeId: (initialData == null ? void 0 : initialData.taxTypeId) ?? null
});
const getCurrentMonthStart = () => {
  const now = /* @__PURE__ */ new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};
const { useCallback: useCallback$7, useEffect: useEffect$1, useMemo: useMemo$5, useRef: useRef$1 } = await importShared("react");
const useMileageTypeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
} = {}) => {
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$5(
    () => createMileageTypeSchema(existingData, initialDataId),
    [existingData, initialDataId]
  );
  const defaultValues = useMemo$5(() => {
    if (initialData) {
      return getDefaultMileageTypeValues({
        name: initialData.name,
        description: initialData.description,
        currentRate: initialData.mileage,
        unitOfMeasurementId: initialData.unitOfMeasurementId,
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
  const initialDataRef = useRef$1(initialData);
  initialDataRef.current = initialData;
  useEffect$1(() => {
    const data = initialDataRef.current;
    if (data) {
      const newValues = getDefaultMileageTypeValues({
        name: data.name,
        description: data.description,
        currentRate: data.mileage,
        unitOfMeasurementId: data.unitOfMeasurementId,
        effectiveFrom: data.effectiveFrom || getCurrentMonthStart(),
        taxTypeId: data.taxTypeId
      });
      form.reset(newValues);
    } else {
      form.reset(getDefaultMileageTypeValues({
        effectiveFrom: getCurrentMonthStart()
      }));
    }
  }, [initialDataId, form]);
  useEffect$1(() => {
    if ((initialData == null ? void 0 : initialData.unitOfMeasurementId) !== void 0) {
      form.setValue("unitOfMeasurementId", initialData.unitOfMeasurementId, {
        shouldDirty: false,
        shouldTouch: false
      });
    }
  }, [initialData == null ? void 0 : initialData.unitOfMeasurementId, form]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    trigger,
    formState: {
      errors,
      isValid,
      isDirty,
      isSubmitting,
      touchedFields,
      dirtyFields
    }
  } = form;
  const handleFormSubmit = useCallback$7(
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
  const handleCancel = useCallback$7(() => {
    reset();
    onCancel == null ? void 0 : onCancel();
  }, [reset, onCancel]);
  useEscapeHandler(isActive, handleCancel);
  return {
    form,
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    setValue,
    control,
    watch,
    reset,
    trigger,
    errors,
    isValid,
    isDirty,
    isSubmitting,
    touchedFields,
    dirtyFields,
    handleCancel,
    canSubmit: useMemo$5(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$6 } = await importShared("react");
const useMileageTypeOperations = (companyId, onSuccess) => {
  var _a;
  const createExpenseTypeMutation = useCreateExpenseType();
  const updateExpenseTypeMutation = useUpdateExpenseType();
  const toggleExpenseTypeMutation = useToggleExpenseTypeStatus();
  const handleCreateMileageType = useCallback$6(async (data) => {
    if (!companyId) return;
    try {
      devLog("Creating mileage type:", data);
      const expenseTypeData = {
        name: data.name.trim(),
        description: data.description || void 0,
        formType: ExpenseFormType.MILEAGE,
        mileage: data.currentRate,
        unitOfMeasurementId: data.unitOfMeasurementId,
        taxTypeId: data.taxTypeId || null,
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
  const handleUpdateMileageType = useCallback$6(async (id, data, originalData) => {
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
      }
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to update mileage type:", error);
      throw error;
    }
  }, [companyId, updateExpenseTypeMutation, onSuccess]);
  const toggleActiveMileageType = useCallback$6(async (id, currentStatus) => {
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
  mileageRateId,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName && mileageRateId ? queryKeys.mileageRates.byMileageRateId(companyShortName, mileageRateId) : queryKeys.mileageRates.all(),
    queryFn: async () => {
      if (!companyShortName || !mileageRateId) {
        throw new Error("Company short name and mileage rate ID are required");
      }
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATES(companyShortName);
      const response = await apiClient.get(url, {
        params: { mileage_rate_id: mileageRateId }
      });
      return response.data;
    },
    enabled: enabled && !!companyShortName && !!mileageRateId,
    staleTime: 2 * 60 * 1e3,
    gcTime: 5 * 60 * 1e3
  });
};
const useCreateMileageRate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, mileageRateId, data }) => {
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATE_CREATE(companyShortName);
      const response = await apiClient.post(url, {
        mileageRateId,
        rate: data.rate,
        effectiveDate: data.effectiveDate
      });
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mileageRates.byMileageRateId(
          variables.companyShortName,
          variables.mileageRateId
        )
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    },
    onError: (error) => {
      devError("Failed to create mileage rate:", error);
    }
  });
};
const useDeleteMileageRate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, effectiveRateId }) => {
      const url = CONFIGURATION_ENDPOINTS.MILEAGE_RATE_DELETE(companyShortName, effectiveRateId);
      const response = await apiClient.delete(url);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mileageRates.byMileageRateId(
          variables.companyShortName,
          variables.mileageRateId
        )
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    },
    onError: (error) => {
      devError("Failed to delete mileage rate:", error);
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
const MONTHS$1 = [
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
      label: `${MONTHS$1[monthIndex]}, ${year}`
    });
  }
  return options;
}
function formatEffectiveDate$1(dateString) {
  const date2 = new Date(dateString);
  return `${MONTHS$1[date2.getMonth()]}, ${date2.getFullYear()}`;
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
const { useCallback: useCallback$5, useState: useState$3 } = await importShared("react");
const useMileageRateTableState = () => {
  const [state, setState] = useState$3({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  const handleStartAdd = useCallback$5(() => {
    setState((prev) => ({
      ...prev,
      isAddingNew: true,
      editingRowId: NEW_RATE_ROW_ID,
      editingData: void 0
    }));
  }, []);
  const handleFormCancel = useCallback$5(() => {
    setState({
      editingRowId: void 0,
      editingData: void 0,
      isAddingNew: false
    });
  }, []);
  const resetState = useCallback$5(() => {
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
const { useCallback: useCallback$4, useMemo: useMemo$4 } = await importShared("react");
const useMileageRateForm = ({
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
} = {}) => {
  const defaultValues = useMemo$4(() => getDefaultValues(), []);
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
  const handleFormSubmit = useCallback$4(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultValues());
      } catch (error) {
        devError("Form submission error:", error);
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$4(() => {
    reset(getDefaultValues());
    onCancel == null ? void 0 : onCancel();
  }, [reset, onCancel]);
  useEscapeHandler(isActive, handleCancel);
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
    handleCancel,
    canSubmit: useMemo$4(() => {
      return isValid && !isSubmitting && !isLoading && isDirty;
    }, [isValid, isSubmitting, isLoading, isDirty]),
    isFormLoading: isLoading || isSubmitting
  };
};
const getFieldError$2 = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const shouldShowError = isTouched || isDirty || hasValue;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const createRateColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  unit = "-"
}) => ({
  accessorKey: "rate",
  header: MILEAGE_RATE_LABELS.RATE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === getMileageRateRowId(rowData.id);
    if (isEditing && formControl) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-40 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "rate",
          control: formControl,
          render: ({ field }) => {
            const errorMessage = getFieldError$2(formErrors, touchedFields, dirtyFields, "rate", field.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                prefix: "$",
                suffix: `per ${unit}`,
                type: "number",
                step: "0.01",
                min: "0.01",
                placeholder: MILEAGE_RATE_PLACEHOLDERS.RATE,
                textAlign: "right",
                value: field.value,
                onChange: (e) => field.onChange(e.target.value),
                onBlur: field.onBlur,
                error: errorMessage
              }
            );
          }
        }
      ) });
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
const getFieldError$1 = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const shouldShowError = isTouched || isDirty || hasValue;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const createEffectiveFromColumn$1 = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  futureMonthOptions = []
}) => ({
  accessorKey: "effectiveDate",
  header: MILEAGE_RATE_LABELS.EFFECTIVE_FROM,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === getMileageRateRowId(rowData.id);
    if (isEditing && formControl) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "effectiveMonth",
          control: formControl,
          render: ({ field }) => {
            const errorMessage = getFieldError$1(formErrors, touchedFields, dirtyFields, "effectiveMonth", field.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pa,
              {
                value: field.value,
                onValueChange: field.onChange,
                options: futureMonthOptions,
                placeholder: MILEAGE_RATE_PLACEHOLDERS.SELECT_MONTH,
                error: errorMessage
              }
            );
          }
        }
      ) });
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-exp-neutral-500", children: "-" });
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MileageRateStatusBadge, { status: MileageRateStatus.FUTURE }) });
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
  deletingRateIds = /* @__PURE__ */ new Set()
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
            children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
          }
        )
      ] });
    }
    const isThisRowDeleting = deletingRateIds.has(rowData.id);
    const canDelete = isExpenseTypeActive && rowData.status === MileageRateStatus.FUTURE;
    if (isThisRowDeleting) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-4" }) });
    }
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
        disabled: !canDelete,
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
const { useCallback: useCallback$3, useMemo: useMemo$3 } = await importShared("react");
const MileageRateTable = ({
  rates,
  unit,
  isExpenseTypeActive,
  futureMonthOptions,
  onCreateRate,
  onDeleteRate,
  isCreating,
  deletingRateIds
}) => {
  const {
    editingRowId,
    isAddingNew,
    handleStartAdd,
    handleFormCancel,
    resetState
  } = useMileageRateTableState();
  const canAddNewRate = isExpenseTypeActive;
  const availableMonthOptions = useMemo$3(() => {
    const existingDates = rates.map((rate) => rate.effectiveDate);
    return filterAvailableMonthOptions(futureMonthOptions, existingDates);
  }, [futureMonthOptions, rates]);
  const handleFormSubmit = useCallback$3(async (data) => {
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
  const handleDelete = useCallback$3(async (rateId) => {
    await onDeleteRate(rateId);
  }, [onDeleteRate]);
  const stableControl = useMemo$3(() => formHook.control, [formHook.control]);
  const baseColumns = useMemo$3(() => [
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
  const actionsColumn = useMemo$3(
    () => createActionsColumn({
      editingRowId,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onDelete: handleDelete,
      isExpenseTypeActive,
      deletingRateIds
    }),
    [editingRowId, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading, handleDelete, isExpenseTypeActive, deletingRateIds]
  );
  const columns = [...baseColumns, actionsColumn];
  const tableData = useMemo$3(() => {
    if (isAddingNew) {
      const newRow = {
        id: NEW_RATE_NUMERIC_ID,
        mileageRateId: NEW_RATE_NUMERIC_ID,
        rate: 0,
        effectiveDate: "",
        expiryDate: null,
        active: true,
        status: MileageRateStatus.FUTURE
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
        manualSorting: true,
        className: "border-exp-neutral-30 !border-b-0 !rounded-b-none",
        editingRowId: editingRowId || (isAddingNew ? NEW_RATE_ROW_ID : void 0),
        onRowEdit: () => {
        },
        onRowSave: () => {
        },
        onRowCancel: handleFormCancel,
        getRowId: (row) => getMileageRateRowId(row.id),
        styles: {
          // Vertically center content in all cells (flex + items-center on div wrapper)
          bodyCell: "[&>div]:flex [&>div]:items-center",
          // Reserve space for error when validation fails (has-[.text-trax-red-500] detects error message)
          bodyRow: "data-[editing=true]:!bg-exp-primary-blue-50 data-[editing=true]:!border-exp-neutral-30 data-[editing=true]:[&>td]:!py-1 data-[editing=true]:[&>td>div]:min-h-[32px] data-[editing=true]:has-[.text-trax-red-500]:[&>td>div]:min-h-[56px] data-[editing=true]:has-[.text-trax-red-500]:[&>td>div]:!items-start",
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
const { useCallback: useCallback$2, useMemo: useMemo$2, useState: useState$2 } = await importShared("react");
const ManageMileageRatesDialog = ({
  open,
  onOpenChange,
  mileageRateId,
  expenseTypeName,
  unit,
  isExpenseTypeActive
}) => {
  const { selectedCompany } = useCompanyStore();
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.id) || null;
  const { data: rates, isFetching, error } = useMileageRates({
    companyShortName,
    mileageRateId,
    enabled: open
  });
  const createMutation = useCreateMileageRate();
  const deleteMutation = useDeleteMileageRate();
  const [deletingRateIds, setDeletingRateIds] = useState$2(/* @__PURE__ */ new Set());
  const futureMonthOptions = useMemo$2(() => generateFutureMonthOptions(), []);
  const handleCreateRate = useCallback$2(async (rateData) => {
    if (!companyShortName) return;
    await createMutation.mutateAsync({
      companyShortName,
      mileageRateId,
      data: rateData
    });
  }, [companyShortName, mileageRateId, createMutation]);
  const handleDeleteRate = useCallback$2(async (effectiveRateId) => {
    if (!companyShortName) return;
    setDeletingRateIds((prev) => new Set(prev).add(effectiveRateId));
    try {
      await deleteMutation.mutateAsync({
        companyShortName,
        mileageRateId,
        effectiveRateId
      });
    } finally {
      setDeletingRateIds((prev) => {
        const next = new Set(prev);
        next.delete(effectiveRateId);
        return next;
      });
    }
  }, [companyShortName, mileageRateId, deleteMutation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ks, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Ua,
    {
      className: "max-w-3xl p-6",
      showCloseButton: false,
      onInteractOutside: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Xs, { className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(qa, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ka, { className: "flex items-center gap-2 text-base font-semibold text-exp-primary-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "calculate", className: "size-4 text-exp-primary-blue-800" }) }),
          expenseTypeName
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: isFetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-6" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-exp-red-500 py-4", children: MILEAGE_RATE_MESSAGES.LOADING_ERROR }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          MileageRateTable,
          {
            rates: rates ?? [],
            unit: unit || "-",
            isExpenseTypeActive,
            futureMonthOptions,
            onCreateRate: handleCreateRate,
            onDeleteRate: handleDeleteRate,
            isCreating: createMutation.isPending,
            deletingRateIds
          }
        ) })
      ]
    }
  ) });
};
const useExpenseTypeUsers = ({
  companyShortName,
  expenseTypeId,
  search = "",
  enabled = true
}) => {
  const trimmedSearch = search.trim();
  const searchParam = trimmedSearch.length >= 2 ? trimmedSearch : void 0;
  return useInfiniteQuery({
    queryKey: [
      ...queryKeys.expenseTypeUsers.list(companyShortName, expenseTypeId),
      { search: searchParam }
    ],
    queryFn: async ({ pageParam }) => {
      const params = {};
      if (pageParam.assignedCursor) {
        params.assignedCursor = pageParam.assignedCursor;
      }
      if (pageParam.unassignedCursor) {
        params.unassignedCursor = pageParam.unassignedCursor;
      }
      if (searchParam) {
        params.search = searchParam;
      }
      const response = await apiClient.get(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_USERS(companyShortName, expenseTypeId),
        { params }
      );
      return response.data;
    },
    initialPageParam: { assignedCursor: null, unassignedCursor: null },
    getNextPageParam: (lastPage) => {
      const hasMoreAssigned = lastPage.assigned.nextCursor !== null;
      const hasMoreUnassigned = lastPage.unassigned.nextCursor !== null;
      if (!hasMoreAssigned && !hasMoreUnassigned) return void 0;
      return {
        assignedCursor: lastPage.assigned.nextCursor,
        unassignedCursor: lastPage.unassigned.nextCursor
      };
    },
    enabled: enabled && !!companyShortName && expenseTypeId !== null,
    staleTime: 0,
    gcTime: 0
  });
};
const useAssignEmployees = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, expenseTypeId, assignedEmployees }) => {
      const updateData = {
        id: expenseTypeId,
        assignedEmployees
      };
      const response = await apiClient.put(
        CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_UPDATE(companyShortName),
        updateData
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseTypes.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseTypeUsers.all() });
    }
  });
};
const { useCallback: useCallback$1, useEffect, useMemo: useMemo$1, useRef, useState: useState$1 } = await importShared("react");
const AssignEmployeesDialog = ({
  open,
  onOpenChange,
  expenseTypeId,
  expenseTypeName
}) => {
  const { selectedCompany } = useCompanyStore();
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.id) || null;
  const [search, setSearch] = useState$1("");
  const [selectedGuids, setSelectedGuids] = useState$1(/* @__PURE__ */ new Set());
  const [initialGuids, setInitialGuids] = useState$1(/* @__PURE__ */ new Set());
  const [isInitialized, setIsInitialized] = useState$1(false);
  const knownAssignedRef = useRef(/* @__PURE__ */ new Set());
  const {
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage: hasNextPage2,
    fetchNextPage,
    error
  } = useExpenseTypeUsers({
    companyShortName,
    expenseTypeId,
    search,
    enabled: open
  });
  const assignMutation = useAssignEmployees();
  const { allAssigned, allUnassigned, serverAssignedGuids } = useMemo$1(() => {
    if (!(data == null ? void 0 : data.pages)) {
      return {
        allAssigned: [],
        allUnassigned: [],
        serverAssignedGuids: /* @__PURE__ */ new Set()
      };
    }
    const assignedMap = /* @__PURE__ */ new Map();
    const unassignedMap = /* @__PURE__ */ new Map();
    const assignedGuids = /* @__PURE__ */ new Set();
    for (const page of data.pages) {
      for (const user of page.assigned.results) {
        assignedMap.set(user.user_guid, user);
        assignedGuids.add(user.user_guid);
      }
      for (const user of page.unassigned.results) {
        unassignedMap.set(user.user_guid, user);
      }
    }
    return {
      allAssigned: Array.from(assignedMap.values()),
      allUnassigned: Array.from(unassignedMap.values()),
      serverAssignedGuids: assignedGuids
    };
  }, [data]);
  const hasMoreAssigned = useMemo$1(() => {
    var _a;
    if (!((_a = data == null ? void 0 : data.pages) == null ? void 0 : _a.length)) return false;
    return data.pages[data.pages.length - 1].assigned.nextCursor !== null;
  }, [data]);
  useEffect(() => {
    if (!open || !hasMoreAssigned || isFetchingNextPage || !hasNextPage2) return;
    fetchNextPage();
  }, [open, hasMoreAssigned, isFetchingNextPage, hasNextPage2, fetchNextPage]);
  useEffect(() => {
    var _a;
    if (!((_a = data == null ? void 0 : data.pages) == null ? void 0 : _a.length)) return;
    const newGuids = [];
    for (const guid of serverAssignedGuids) {
      if (!knownAssignedRef.current.has(guid)) {
        newGuids.push(guid);
        knownAssignedRef.current.add(guid);
      }
    }
    if (newGuids.length > 0) {
      setSelectedGuids((prev) => {
        const next = new Set(prev);
        for (const guid of newGuids) {
          next.add(guid);
        }
        return next;
      });
    }
    setInitialGuids((prev) => {
      const next = new Set(prev);
      for (const guid of serverAssignedGuids) {
        next.add(guid);
      }
      return next.size !== prev.size ? next : prev;
    });
    if (!isInitialized) setIsInitialized(true);
  }, [data, serverAssignedGuids, isInitialized]);
  useEffect(() => {
    if (!open) {
      setSearch("");
      setSelectedGuids(/* @__PURE__ */ new Set());
      setInitialGuids(/* @__PURE__ */ new Set());
      setIsInitialized(false);
      knownAssignedRef.current = /* @__PURE__ */ new Set();
    }
  }, [open]);
  const { displayAssigned, displayUnassigned } = useMemo$1(() => {
    const assigned = [];
    const unassigned = [];
    const seen = /* @__PURE__ */ new Set();
    const partition = (employees) => {
      for (const emp of employees) {
        if (seen.has(emp.user_guid)) continue;
        seen.add(emp.user_guid);
        (selectedGuids.has(emp.user_guid) ? assigned : unassigned).push(emp);
      }
    };
    partition(allAssigned);
    partition(allUnassigned);
    return { displayAssigned: assigned, displayUnassigned: unassigned };
  }, [allAssigned, allUnassigned, selectedGuids]);
  const handleToggle = useCallback$1((userGuid) => {
    setSelectedGuids((prev) => {
      const next = new Set(prev);
      if (next.has(userGuid)) {
        next.delete(userGuid);
      } else {
        next.add(userGuid);
      }
      return next;
    });
  }, []);
  const handleSearch = useCallback$1((value) => {
    setSearch(value);
  }, []);
  const hasChanges = useMemo$1(() => {
    if (selectedGuids.size !== initialGuids.size) return true;
    for (const guid of selectedGuids) {
      if (!initialGuids.has(guid)) return true;
    }
    return false;
  }, [selectedGuids, initialGuids]);
  const handleSave = useCallback$1(async () => {
    if (!companyShortName) return;
    try {
      await assignMutation.mutateAsync({
        companyShortName,
        expenseTypeId,
        assignedEmployees: Array.from(selectedGuids)
      });
      onOpenChange(false);
    } catch (error2) {
      devError("Failed to assign employees:", error2);
      As.error("Failed to save. Please try again", { duration: 3e3 });
    }
  }, [companyShortName, expenseTypeId, selectedGuids, assignMutation, onOpenChange]);
  const scrollContainerRef = useRef(null);
  const assignedSentinelRef = useRef(null);
  const sentinelRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && hasNextPage2 && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: scrollContainerRef.current, threshold: 0.1 }
    );
    if (assignedSentinelRef.current && scrollContainerRef.current) {
      const sentinelTop = assignedSentinelRef.current.getBoundingClientRect().top;
      const containerBottom = scrollContainerRef.current.getBoundingClientRect().bottom;
      if (sentinelTop > containerBottom) {
        observer.observe(assignedSentinelRef.current);
      }
    }
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [open, hasNextPage2, isFetchingNextPage, fetchNextPage, data]);
  const isLoading = isFetching && !isFetchingNextPage || hasMoreAssigned;
  const noResults = !isLoading && displayAssigned.length === 0 && displayUnassigned.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ks, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Ua,
    {
      className: "max-w-lg p-6",
      showCloseButton: false,
      onInteractOutside: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Xs, { className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(qa, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ka, { className: "flex items-center gap-2 text-base font-semibold text-exp-primary-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "person-add-alt", className: "size-4 text-exp-primary-blue-800" }) }),
          expenseTypeName
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollContainerRef, className: "mt-4 h-[400px] overflow-y-auto exp-custom-scrollbar border border-exp-neutral-30 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-exp-neutral-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Kn,
            {
              placeholder: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_SEARCH_PLACEHOLDER,
              onSearch: handleSearch,
              debounceTime: 300
            }
          ) }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-6" }) }) : noResults ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-start py-2.5 px-6 text-sm text-exp-neutral-300 italic", children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_NO_RESULTS }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            (displayAssigned.length > 0 || !search) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center gap-1 px-4 py-1.5 bg-exp-primary-blue-50 border-b border-exp-neutral-30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-exp-primary-blue-600", children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_ASSIGNED }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Pr,
                  {
                    variant: "secondary",
                    className: "px-1.5 py-0 rounded-20 text-xs font-semibold bg-exp-teal-200 text-exp-primary-blue-600 hover:bg-exp-teal-200 border border-exp-teal-300",
                    children: selectedGuids.size
                  }
                )
              ] }),
              displayAssigned.map((employee, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                EmployeeRow,
                {
                  employee,
                  checked: true,
                  search,
                  onToggle: handleToggle,
                  isLast: index === displayAssigned.length - 1
                },
                employee.user_guid
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: assignedSentinelRef, className: "h-px" })
            ] }),
            displayUnassigned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 flex items-center px-4 py-1.5 bg-exp-primary-blue-50 border-b border-exp-neutral-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-exp-primary-blue-600", children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_UNASSIGNED }) }),
              displayUnassigned.map((employee, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                EmployeeRow,
                {
                  employee,
                  checked: false,
                  search,
                  onToggle: handleToggle,
                  isLast: index === displayUnassigned.length - 1
                },
                employee.user_guid
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: sentinelRef, className: "h-px" }),
            isFetchingNextPage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-4" }) })
          ] })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-center text-sm text-exp-red-500", children: "Failed to load employees. Please try again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pe,
            {
              variant: "soft",
              onClick: () => onOpenChange(false),
              disabled: assignMutation.isPending,
              children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_CANCEL
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pe,
            {
              variant: "primary",
              onClick: handleSave,
              disabled: !hasChanges || assignMutation.isPending,
              children: assignMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-4" }),
                MILEAGE_TYPE_MESSAGES.SAVING
              ] }) : MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_SAVE
            }
          )
        ] })
      ]
    }
  ) });
};
const HighlightedName = ({ name, search }) => {
  const trimmed = search.trim();
  if (trimmed.length < 2) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: name });
  const lowerName = name.toLowerCase();
  const lowerSearch = trimmed.toLowerCase();
  if (!lowerName.startsWith(lowerSearch)) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: name });
  const matchEnd = trimmed.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: name.slice(0, matchEnd) }),
    name.slice(matchEnd)
  ] });
};
const EmployeeRow = ({ employee, checked, isLast, search, onToggle }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "label",
  {
    className: p("flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-exp-primary-blue-50 hover:font-medium transition-colors h-10", {
      "border-b border-exp-neutral-20": !isLast
    }),
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ds,
        {
          checked,
          onCheckedChange: () => onToggle(employee.user_guid)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-primary-blue-800 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedName, { name: employee.full_name, search }) })
    ]
  }
);
const React$1 = await importShared("react");
const getFieldError = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const isRequiredField = fieldName === "name" || fieldName === "currentRate" || fieldName === "unitOfMeasurementId" || fieldName === "effectiveFrom";
  const shouldShowError = isTouched || isDirty || hasValue || isRequiredField && fieldError;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const NameField = ({ control, errors, touchedFields, dirtyFields }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Controller,
  {
    name: "name",
    control,
    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ma,
      {
        ...field,
        placeholder: MILEAGE_TYPE_PLACEHOLDERS.NAME,
        error: getFieldError(errors, touchedFields, dirtyFields, "name", field.value),
        required: true,
        showCharacterCount: true,
        maxCharacters: MILEAGE_TYPE_VALIDATION.NAME_MAX_LENGTH,
        enforceMaxLength: false
      }
    )
  }
);
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
  unitOfMeasurements,
  trigger
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
  const fieldInteracted = rateTouched || rateDirty || uomTouched || uomDirty;
  const errorMessage = fieldInteracted ? (rateError == null ? void 0 : rateError.message) || (uomError == null ? void 0 : uomError.message) : void 0;
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
                onBlur: () => {
                  rateField.onBlur();
                  trigger == null ? void 0 : trigger(["currentRate", "unitOfMeasurementId"]);
                },
                error: errorMessage
              }
            );
          }
        }
      )
    }
  );
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
const generateMonthOptions = () => {
  const options = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = 0; i < 24; i++) {
    const date2 = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const value = date2.toISOString();
    const month = MONTHS[date2.getMonth()];
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
        size: "sm",
        className: "p-1 text-exp-green-500 hover:text-exp-green-800",
        disabled: !canSubmit || isFormLoading,
        title: isFormLoading ? MILEAGE_TYPE_MESSAGES.SAVING : canSubmit ? MILEAGE_TYPE_MESSAGES.SAVE_CHANGES : MILEAGE_TYPE_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
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
        size: "sm",
        className: "p-1 text-exp-red-500 hover:text-exp-red-600",
        disabled: isFormLoading,
        title: MILEAGE_TYPE_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
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
const createMileageTypeNameColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => ({
  accessorKey: "name",
  header: MILEAGE_TYPE_LABELS.MILEAGE_TYPE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
});
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DescriptionField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ) });
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
  const formattedRate = rate != null ? `$${rate.toFixed(2)}` : "-";
  const unitLabel = unit || "-";
  return `${formattedRate}/${unitLabel}`;
};
const createCurrentRateColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  formTrigger,
  unitOfMeasurements
}) => ({
  accessorKey: "currentRate",
  header: MILEAGE_TYPE_LABELS.CURRENT_RATE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    const isNewRow = rowData.id === NEW_ROW_ID;
    if (isEditing && isNewRow && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CurrentRateField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          unitOfMeasurements,
          trigger: formTrigger
        }
      ) });
    }
    const rate = rowData.mileage;
    const unit = rowData.unitOfMeasurement;
    const displayText = formatRate(rate, unit);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: rate ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pr,
          {
            variant: "secondary",
            className: "px-2.5 py-1 rounded-lg bg-exp-primary-blue-100 hover:bg-exp-primary-blue-100 active:bg-exp-primary-blue-100 text-exp-primary-blue-600 text-xs font-medium",
            children: displayText
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-100", children: "-" }),
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
    const isNewRow = rowData.id === NEW_ROW_ID;
    if (isEditing && isNewRow && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EffectiveFromField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ) });
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
    const isNewRow = rowData.id === NEW_ROW_ID;
    if (isEditing && isNewRow && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TaxTypeField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          taxTypes
        }
      ) });
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
const DefaultBadge = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Dn, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(En, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Pr,
    {
      variant: "secondary",
      className: "px-2.5 py-1 rounded-lg bg-exp-neutral-40 hover:bg-exp-neutral-40 active:bg-exp-neutral-40 text-exp-neutral-700 text-xs font-medium cursor-help gap-1.5",
      children: [
        MILEAGE_TYPE_LABELS.DEFAULT,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-4 text-exp-neutral-700" })
      ]
    }
  ) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Mn,
    {
      side: "bottom",
      className: "max-w-xs bg-exp-neutral-700 text-exp-neutral-0 text-xs font-medium",
      children: MILEAGE_TYPE_MESSAGES.DEFAULT_TOOLTIP
    }
  )
] });
const createEmployeesColumn = (_props) => ({
  id: "employees",
  header: MILEAGE_TYPE_LABELS.EMPLOYEES,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isDefault = rowData.isDefault;
    const employeeCount = rowData.employeeCount ?? 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: isDefault ? /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultBadge, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Pr,
          {
            variant: "secondary",
            className: "px-2.5 py-1 rounded-lg bg-exp-neutral-40 hover:bg-exp-neutral-40 active:bg-exp-neutral-40 text-exp-neutral-700 text-xs font-medium",
            children: [
              employeeCount,
              " ",
              MILEAGE_TYPE_LABELS.ASSIGNED
            ]
          }
        ),
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
  const mileageType = row.original;
  const rowId = mileageType.id;
  const isActive = mileageType.status === "active";
  const expenseTypeName = mileageType.name;
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
  const disableSetAsDefault = isDefault || !isActive;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        variant: "ghost",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4 svg-color-inherit" }),
        iconPosition: "center",
        className: "p-1!",
        onClick: onEdit || (() => onRowEdit == null ? void 0 : onRowEdit(row)),
        "data-testid": `edit-button-${rowId}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Cr, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pe,
        {
          variant: "ghost",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "ellipsis-vertical", className: "size-4 svg-color-inherit", "data-testid": `ellipsis-button-${rowId}` }),
          iconPosition: "center",
          className: "p-1!",
          disabled: isToggling,
          onClick: (e) => e.stopPropagation()
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
                onClick: () => onAssignEmployees == null ? void 0 : onAssignEmployees(rowId, expenseTypeName),
                disabled: disableForDefault,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "person-add-alt", className: "size-4 text-exp-primary-blue-800 svg-color-inherit" }),
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "calculate", className: "size-4 text-exp-primary-blue-800 svg-color-inherit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: MILEAGE_TYPE_MESSAGES.MANAGE_RATES })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Nr,
              {
                onClick: () => onSetAsDefault == null ? void 0 : onSetAsDefault(rowId),
                disabled: disableSetAsDefault,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "done-all", className: "size-4 text-exp-primary-blue-800 svg-color-inherit" }),
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: `size-4 svg-color-inherit ${isActive ? "text-exp-neutral-70" : "text-trax-green-600"}` }),
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
  onAssignEmployees,
  togglingRowId
}) => ({
  id: "actions",
  header: MILEAGE_TYPE_LABELS.ACTIONS,
  cell: (context) => {
    const cellContext = context;
    const { row } = cellContext;
    const mileageType = row.original;
    const isEditing = editingRowId === mileageType.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionsCell,
      {
        row,
        isEditing,
        isToggling: togglingRowId === mileageType.id,
        isDefault: mileageType.isDefault,
        onEdit: cellContext.onEdit,
        onRowEdit,
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        onToggleActive,
        onManageRates,
        onAssignEmployees,
        onSetAsDefault: () => devLog("Clicked: Set as default (TRX-315 - not implemented)")
      }
    );
  }
});
const React = await importShared("react");
const { useCallback, useMemo, useState } = React;
const MileageTypeTable = ({ className }) => {
  const { selectedCompany } = useCompanyStore();
  const { data: mileageTypes, isLoading, error } = useMileageTypes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
  const { data: unitOfMeasurements } = useUnitOfMeasurements();
  const { data: taxTypes } = useTaxTypesDisplay({
    companyShortName: (selectedCompany == null ? void 0 : selectedCompany.shortName) || null
  });
  const [manageRatesDialog, setManageRatesDialog] = useState({
    isOpen: false,
    mileageRateId: null,
    expenseTypeName: "",
    unit: "",
    isExpenseTypeActive: true
  });
  const [assignEmployeesDialog, setAssignEmployeesDialog] = useState({
    isOpen: false,
    expenseTypeId: null,
    expenseTypeName: ""
  });
  const {
    editingRowId,
    isAddingNew,
    // Not using editingData from hook - see derived editingData below
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
  const handleCloseManageRatesDialog = useCallback((open) => {
    if (!open) {
      setManageRatesDialog({
        isOpen: false,
        mileageRateId: null,
        expenseTypeName: "",
        unit: "",
        isExpenseTypeActive: true
      });
    }
  }, []);
  const processedData = useMemo(() => {
    const dataArray = Array.isArray(mileageTypes) ? mileageTypes : [];
    const sorted = sortByCreatedDate(dataArray, "asc");
    return sorted.map((item) => {
      var _a, _b;
      const uomId = (_a = unitOfMeasurements == null ? void 0 : unitOfMeasurements.find((u) => u.unit === item.unitOfMeasurement)) == null ? void 0 : _a.id;
      return {
        ...item,
        employeeCount: item.assignedEmployeeCount ?? 0,
        effectiveFrom: ((_b = item.mileageEffectiveRate) == null ? void 0 : _b.effectiveDate) ? new Date(item.mileageEffectiveRate.effectiveDate) : void 0,
        unitOfMeasurementId: uomId ?? 1
      };
    });
  }, [mileageTypes, unitOfMeasurements]);
  const handleManageRates = useCallback((expenseTypeId, expenseTypeName) => {
    const row = processedData.find((item) => item.id === expenseTypeId);
    if (!(row == null ? void 0 : row.mileageRateId)) return;
    setManageRatesDialog({
      isOpen: true,
      mileageRateId: row.mileageRateId,
      expenseTypeName,
      unit: row.unitOfMeasurement || "",
      isExpenseTypeActive: row.status === "active"
    });
  }, [processedData]);
  const handleAssignEmployees = useCallback((expenseTypeId, expenseTypeName) => {
    setAssignEmployeesDialog({
      isOpen: true,
      expenseTypeId: parseInt(expenseTypeId, 10),
      expenseTypeName
    });
  }, []);
  const handleCloseAssignEmployeesDialog = useCallback((open) => {
    if (!open) {
      setAssignEmployeesDialog({
        isOpen: false,
        expenseTypeId: null,
        expenseTypeName: ""
      });
    }
  }, []);
  const editingData = useMemo(() => {
    if (!editingRowId || editingRowId === NEW_ROW_ID) return void 0;
    return processedData.find((item) => item.id === editingRowId);
  }, [processedData, editingRowId]);
  const handleFormSubmit = useCallback(async (data) => {
    if (editingRowId === NEW_ROW_ID) {
      await handleCreateMileageType(data);
    } else if (editingRowId) {
      await handleUpdateMileageType(editingRowId, data, editingData);
    }
  }, [editingRowId, handleCreateMileageType, handleUpdateMileageType, editingData]);
  const formHookOptions = useMemo(() => ({
    initialData: editingData,
    existingData: processedData,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    isActive: editingRowId !== void 0
  }), [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, editingRowId]);
  const formHook = useMileageTypeForm(formHookOptions);
  const stableControl = useMemo(() => formHook.control, [formHook.control]);
  const baseColumns = useMemo(() => [
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
      formTrigger: formHook.trigger,
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
    createEmployeesColumn()
  ], [
    editingRowId,
    stableControl,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields,
    formHook.trigger,
    unitOfMeasurements,
    taxTypes
  ]);
  const actionsColumn = useMemo(() => createMileageTypeActionsColumn({
    editingRowId,
    onRowEdit: handleRowEdit,
    onSubmit: () => formHook.handleSubmit(),
    onCancel: () => formHook.handleCancel(),
    canSubmit: formHook.canSubmit,
    isFormLoading: formHook.isFormLoading,
    onToggleActive: toggleActiveMileageType,
    onManageRates: handleManageRates,
    onAssignEmployees: handleAssignEmployees,
    togglingRowId
  }), [
    editingRowId,
    handleRowEdit,
    formHook.handleSubmit,
    formHook.handleCancel,
    formHook.canSubmit,
    formHook.isFormLoading,
    toggleActiveMileageType,
    handleManageRates,
    handleAssignEmployees,
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
        manualSorting: true,
        className: "border-exp-neutral-30 !border-b-0 !rounded-b-none",
        editingRowId: editingRowId || (isAddingNew ? NEW_ROW_ID : void 0),
        onRowEdit: handleRowEdit,
        onRowSave: () => {
        },
        onRowCancel: handleFormCancel,
        getRowId: (row, index) => row.id || `row-${index}`,
        styles: {
          // Vertically center content in all cells (flex + items-center on div wrapper)
          bodyCell: "[&>div]:flex [&>div]:items-center",
          // Override DataTable's default blue editing styles to match Figma design
          // Reduce cell padding in edit mode to minimize row height jump (py-2 -> py-1)
          bodyRow: "data-[editing=true]:!bg-exp-primary-blue-50 data-[editing=true]:!border-exp-neutral-30 data-[editing=true]:[&>td]:!py-1 data-[editing=true]:[&>td>div]:min-h-[32px] data-[editing=true]:has-[.text-trax-red-500]:[&>td>div]:min-h-[56px] data-[editing=true]:has-[.text-trax-red-500]:[&>td>div]:!items-start"
        }
      }
    ),
    processedData.length > 0 && !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border !border-t-0.5 border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
    manageRatesDialog.mileageRateId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ManageMileageRatesDialog,
      {
        open: manageRatesDialog.isOpen,
        onOpenChange: handleCloseManageRatesDialog,
        mileageRateId: manageRatesDialog.mileageRateId,
        expenseTypeName: manageRatesDialog.expenseTypeName,
        unit: manageRatesDialog.unit,
        isExpenseTypeActive: manageRatesDialog.isExpenseTypeActive
      }
    ),
    assignEmployeesDialog.expenseTypeId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssignEmployeesDialog,
      {
        open: assignEmployeesDialog.isOpen,
        onOpenChange: handleCloseAssignEmployeesDialog,
        expenseTypeId: assignEmployeesDialog.expenseTypeId,
        expenseTypeName: assignEmployeesDialog.expenseTypeName
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

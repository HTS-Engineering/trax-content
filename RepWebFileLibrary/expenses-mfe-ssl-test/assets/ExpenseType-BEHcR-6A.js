import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
import { E as ExpenseFormType, a as useCreateExpenseType, b as useUpdateExpenseType, c as useToggleExpenseTypeStatus, d as useFormTypeOptions, e as useMileageRateOptions, f as useExpenseTypes } from "./api-CWVev5sS.js";
import { C as CONFIGURATION_ENDPOINTS, u as useCompanyStore } from "./store-s7r1_7bv.js";
import { P as Pe, H as Ha, n as Gs, o as Lt, q as ct, r as Ht, s as gt, t as ft, d as Er, _ as _n, N as Nn, F as Fn, I as In, A as As, U as Us, B as Ba, u as Ys, G as Ga, a as Ua, D as Da, E as Ea, p, w as wr, y as yr, C as Cr, S as Sr } from "./index.es-DjMdAnbR.js";
import { o as object, n as number, _ as _enum, s as string, l as literal, c as useForm, d as a, C as Controller } from "./zod-0mrSG730.js";
import { u as useQuery, q as queryKeys$1, l as useQueryClient } from "./query-keys-uZmLtGm2.js";
import { a as apiClient } from "./axiosInstance-C0Ko2HNs.js";
import { T as Table2, C as Check, X, u as useSubmitOnEnter, P as Pencil, E as EllipsisVertical, s as sortByCreatedDate } from "./date-sorting.utils-DM4qYOkl.js";
import { P as Plus } from "./plus-ZNfoAuFV.js";
import { I as Icon } from "./Icon-0rSrBywh.js";
import { u as useMutation } from "./useMutation-BMMwi5Pr.js";
import { M as MileageRateStatus } from "./api-BMImQo3R.js";
import { L as LayoutDashboard } from "./layout-dashboard-BT3kYAeA.js";
var ExpenseTypeStatus = /* @__PURE__ */ ((ExpenseTypeStatus2) => {
  ExpenseTypeStatus2["ACTIVE"] = "active";
  ExpenseTypeStatus2["INACTIVE"] = "inactive";
  return ExpenseTypeStatus2;
})(ExpenseTypeStatus || {});
const EXPENSE_TYPE_VALIDATION = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 45,
  DESCRIPTION_MAX_LENGTH: 400,
  MILEAGE_RATE_MIN: 0.01,
  MILEAGE_RATE_MAX: 10
};
const EXPENSE_TYPE_PLACEHOLDERS = {
  NAME: "Enter expense type name",
  DESCRIPTION: "Enter description (optional)",
  FORM_TYPE: "Select form type",
  MILEAGE_RATE: "Select mileage rate"
};
const EXPENSE_TYPE_LABELS = {
  EXPENSE_TYPE: "Expense type",
  DESCRIPTION: "Description (optional)",
  FORM_TYPE: "Form type",
  ACTIONS: "Actions",
  STANDARD: "Standard",
  ENTERTAINMENT: "Entertainment",
  MILEAGE: "Mileage",
  ACTIVE: "Active",
  INACTIVE: "Inactive"
};
const EXPENSE_TYPE_MESSAGES = {
  NO_COMPANY_SELECTED: "Please select a company to view expense types",
  LOADING_ERROR: "Failed to load expense types. Please try again.",
  EMPTY_STATE_TITLE: "No expense types setup yet",
  EMPTY_STATE_DESCRIPTION: "Create expense types to streamline reporting and ensure employees submit the right information for different costs.",
  ADD_EXPENSE_TYPE: "Add Expense Type",
  SAVE_CHANGES: "Save changes",
  CANCEL_CHANGES: "Cancel changes (Esc)",
  SAVING: "Saving...",
  VALIDATION_ERROR: "Please fix validation errors"
};
const NEW_ROW_ID = "new";
const checkNameUniqueness = (name, existingData, currentId) => {
  return !existingData.some(
    (item) => item.name.toLowerCase() === name.toLowerCase() && item.id !== currentId
  );
};
const expenseTypeSchema = object({
  name: string().min(1, "Expense type name is required").min(EXPENSE_TYPE_VALIDATION.NAME_MIN_LENGTH, `Expense type name must be at least ${EXPENSE_TYPE_VALIDATION.NAME_MIN_LENGTH} characters`).max(EXPENSE_TYPE_VALIDATION.NAME_MAX_LENGTH, `Expense type name must be ${EXPENSE_TYPE_VALIDATION.NAME_MAX_LENGTH} characters or less`).trim(),
  description: string().max(EXPENSE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH, `Description must be ${EXPENSE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH} characters or less`).optional().or(literal("")),
  formType: _enum([ExpenseFormType.STANDARD, ExpenseFormType.ENTERTAINMENT, ExpenseFormType.MILEAGE], {
    message: "Please select a valid form type"
  }),
  mileageRate: number().min(EXPENSE_TYPE_VALIDATION.MILEAGE_RATE_MIN, `Mileage rate must be greater than ${EXPENSE_TYPE_VALIDATION.MILEAGE_RATE_MIN - 0.01}`).max(EXPENSE_TYPE_VALIDATION.MILEAGE_RATE_MAX, `Mileage rate cannot exceed $${EXPENSE_TYPE_VALIDATION.MILEAGE_RATE_MAX}/mile`).optional()
}).refine((data) => {
  if (data.formType === ExpenseFormType.MILEAGE) {
    return data.mileageRate !== void 0 && data.mileageRate > 0;
  }
  return true;
}, {
  message: "Mileage rate is required for mileage form type",
  path: ["mileageRate"]
});
const createExpenseTypeSchema = (existingData, currentId) => {
  return expenseTypeSchema.refine(
    (data) => {
      return checkNameUniqueness(data.name, existingData, currentId);
    },
    {
      message: "This expense type name already exists",
      path: ["name"]
    }
  );
};
const getDefaultValues$1 = (initialData) => ({
  name: (initialData == null ? void 0 : initialData.name) ?? "",
  description: (initialData == null ? void 0 : initialData.description) ?? "",
  formType: initialData ? initialData.formType : "",
  mileageRate: initialData == null ? void 0 : initialData.mileage
});
const transformFormTypeOptions = (formTypes) => formTypes.map((option) => ({ value: option.value, label: option.label }));
const transformMileageRateOptions = (rates) => rates.map((rate) => ({ value: rate.value, label: rate.label }));
const { useCallback: useCallback$7, useEffect: useEffect$2, useMemo: useMemo$4 } = await importShared("react");
const useExpenseTypeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  companyId
} = {}) => {
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$4(
    () => createExpenseTypeSchema(existingData, initialDataId),
    [existingData, initialDataId]
  );
  const defaultValues = useMemo$4(
    () => getDefaultValues$1(initialData),
    [initialData]
  );
  const form = useForm({
    resolver: a(schema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  useEffect$2(() => {
    const newDefaultValues = getDefaultValues$1(initialData);
    form.reset(newDefaultValues);
  }, [initialData, form]);
  useEffect$2(() => {
    form.reset(getDefaultValues$1());
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
  const formType = watch("formType");
  const mileageRate = watch("mileageRate");
  useEffect$2(() => {
    if (formType !== ExpenseFormType.MILEAGE) {
      setValue("mileageRate", void 0);
    }
  }, [formType, setValue]);
  const handleFormSubmit = useCallback$7(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultValues$1());
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$7(() => {
    reset();
    onCancel == null ? void 0 : onCancel();
  }, [reset, onCancel]);
  useEffect$2(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleCancel]);
  const getFieldError2 = useCallback$7(
    (fieldName) => {
      const fieldError = errors[fieldName];
      const isTouched = touchedFields[fieldName];
      return isTouched && fieldError ? fieldError.message : void 0;
    },
    [errors, touchedFields]
  );
  const hasFieldError = useCallback$7(
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
    formType,
    mileageRate,
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
    }, [isValid, isSubmitting, isLoading, isDirty, initialData, handleSubmit]),
    showMileageRate: formType === ExpenseFormType.MILEAGE,
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$6, useEffect: useEffect$1, useState: useState$2 } = await importShared("react");
const useExpenseTypeTableState = (companyId) => {
  const [state, setState] = useState$2({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  useEffect$1(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, [companyId]);
  const handleStartAdd = useCallback$6(() => {
    setState((prev) => ({
      ...prev,
      isAddingNew: true,
      editingRowId: NEW_ROW_ID,
      editingData: void 0
    }));
  }, []);
  const handleRowEdit = useCallback$6((row) => {
    setState((prev) => ({
      ...prev,
      editingRowId: row.original.id,
      isAddingNew: false,
      editingData: row.original
    }));
  }, []);
  const handleFormCancel = useCallback$6(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, []);
  const resetState = useCallback$6(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, []);
  return {
    ...state,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  };
};
const { useCallback: useCallback$5 } = await importShared("react");
const useExpenseTypeOperations = (companyId, onSuccess) => {
  var _a;
  const createExpenseTypeMutation = useCreateExpenseType();
  const updateExpenseTypeMutation = useUpdateExpenseType();
  const toggleExpenseTypeMutation = useToggleExpenseTypeStatus();
  const handleCreateExpenseType = useCallback$5(async (data) => {
    if (!companyId) return;
    try {
      const expenseTypeData = {
        name: data.name.trim(),
        description: data.description || void 0,
        formType: data.formType,
        mileage: data.formType === "mileage" ? data.mileageRate : void 0,
        status: "active"
      };
      await createExpenseTypeMutation.mutateAsync({
        companyShortName: companyId,
        // companyId here is actually the short name
        data: expenseTypeData
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      console.error("Failed to create expense type:", error);
      throw error;
    }
  }, [companyId, createExpenseTypeMutation, onSuccess]);
  const handleUpdateExpenseType = useCallback$5(async (id, data, originalData) => {
    if (!companyId) return;
    try {
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
      console.error("Failed to update expense type:", error);
      throw error;
    }
  }, [companyId, updateExpenseTypeMutation, onSuccess]);
  const toggleActiveExpenseType = useCallback$5(async (id, currentStatus) => {
    if (!companyId || toggleExpenseTypeMutation.isPending) return;
    try {
      await toggleExpenseTypeMutation.mutateAsync({ id, companyShortName: companyId, isActive: !currentStatus });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      console.error("Failed to toggle expense type status:", error);
      throw error;
    }
  }, [companyId, toggleExpenseTypeMutation, onSuccess]);
  return {
    handleCreateExpenseType,
    handleUpdateExpenseType,
    toggleActiveExpenseType,
    isCreating: createExpenseTypeMutation.isPending,
    isUpdating: updateExpenseTypeMutation.isPending,
    isOperating: createExpenseTypeMutation.isPending || updateExpenseTypeMutation.isPending || toggleExpenseTypeMutation.isPending,
    togglingRowId: toggleExpenseTypeMutation.isPending ? (_a = toggleExpenseTypeMutation.variables) == null ? void 0 : _a.id : void 0
  };
};
var QueryKeyScope = /* @__PURE__ */ ((QueryKeyScope2) => {
  QueryKeyScope2["COMPANIES"] = "companies";
  QueryKeyScope2["BUSINESS_PURPOSES"] = "business-purposes";
  QueryKeyScope2["EXPENSE_TYPES"] = "expense-types";
  QueryKeyScope2["EXPENSES"] = "expenses";
  QueryKeyScope2["EXPENSE_DRAFTS"] = "expense-drafts";
  QueryKeyScope2["FORM_TYPES"] = "form-types";
  QueryKeyScope2["MILEAGE_RATES"] = "mileage-rates";
  QueryKeyScope2["TAX_TYPES"] = "tax-types";
  QueryKeyScope2["CONFIGURATION"] = "configuration";
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
await importShared("react");
const ExpenseTypeEmptyState = ({ onAddExpenseType }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 px-4", "data-testid": "expense-type-empty-state", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 mb-6 bg-exp-primary-blue-50 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table2, { className: "size-9 text-exp-neutral-100" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center flex flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-exp-neutral-500 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: EXPENSE_TYPE_MESSAGES.EMPTY_STATE_TITLE }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-exp-grey-600 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: EXPENSE_TYPE_MESSAGES.EMPTY_STATE_DESCRIPTION }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Pe,
      {
        className: "px-4 py-2",
        variant: "primary",
        onClick: onAddExpenseType,
        "data-testid": "add-expense-type-button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
          EXPENSE_TYPE_MESSAGES.ADD_EXPENSE_TYPE
        ]
      }
    )
  ] })
] });
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
    const date = new Date(year, monthIndex, 1);
    options.push({
      value: date.toISOString(),
      label: `${MONTHS[monthIndex]}, ${year}`
    });
  }
  return options;
}
function formatEffectiveDate(dateString) {
  const date = new Date(dateString);
  return `${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}
function formatRate(rate, unit) {
  return `$ ${rate.toFixed(2)}/${unit}`;
}
function normalizeToYearMonth(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
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
            Ha,
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
      Gs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-900", children: formatRate(rowData.rate, unit) }),
        editContent: null
      }
    );
  }
});
const createEffectiveFromColumn = ({
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
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Lt, { value: field.value, onValueChange: field.onChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ct, { className: "w-44 h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ht, { placeholder: MILEAGE_RATE_PLACEHOLDERS.SELECT_MONTH }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              gt,
              {
                className: "w-(--radix-select-trigger-width) [&>span:first-child]:hidden [&>span:last-child]:hidden",
                viewportClassName: "overflow-y-auto exp-custom-scrollbar",
                children: futureMonthOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ft,
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
      Gs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-900", children: formatEffectiveDate(rowData.effectiveDate) }),
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
      Gs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-900", children: rowData.expiryDate ? formatEffectiveDate(rowData.expiryDate) : "-" }),
        editContent: null
      }
    );
  }
});
const STATUS_CONFIG$1 = {
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
  const config = STATUS_CONFIG$1[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Er,
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
      Gs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(MileageRateStatusBadge, { status: rowData.status }),
        editContent: null
      }
    );
  }
});
const createActionsColumn$1 = ({
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
            children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(_n, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" })
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
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Fn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex", children: deleteButton }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          In,
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
    createEffectiveFromColumn({
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
    () => createActionsColumn$1({
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
      As,
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
    !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border !border-t-0.5 border-exp-neutral-30 rounded-b-lg", children: canAddNewRate ? addNewRateButton : /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Fn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: addNewRateButton }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        In,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Us, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ba, { className: "max-w-3xl p-6", showCloseButton: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ys, { className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ua, { className: "flex items-center gap-2 text-base font-semibold text-exp-primary-blue-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "calculate", className: "size-4 text-exp-primary-blue-800" }) }),
      expenseTypeName
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: isFetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(_n, { className: "size-6" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-exp-red-500 py-4", children: MILEAGE_RATE_MESSAGES.LOADING_ERROR }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
const React$2 = await importShared("react");
const getFieldError = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const isRequiredField = fieldName === "name" || fieldName === "formType" || fieldName === "mileageRate";
  const shouldShowError = isTouched || isDirty || hasValue || isRequiredField && fieldError;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const NameField = ({ control, errors, touchedFields, dirtyFields }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "name",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError(errors, touchedFields, dirtyFields, "name", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Da,
          {
            ...field,
            placeholder: EXPENSE_TYPE_PLACEHOLDERS.NAME,
            error: errorMessage,
            required: true,
            showCharacterCount: true,
            maxCharacters: EXPENSE_TYPE_VALIDATION.NAME_MAX_LENGTH,
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
      Da,
      {
        ...field,
        placeholder: EXPENSE_TYPE_PLACEHOLDERS.DESCRIPTION,
        error: getFieldError(errors, touchedFields, dirtyFields, "description", field.value),
        maxCharacters: EXPENSE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH,
        enforceMaxLength: false
      }
    )
  }
);
const FormTypeField = ({ control, errors, touchedFields, dirtyFields, isEditing }) => {
  const { data: formTypes, isLoading: isLoadingFormTypes } = useFormTypeOptions();
  const formTypeOptions = React$2.useMemo(() => {
    return formTypes ? transformFormTypeOptions(formTypes) : [];
  }, [formTypes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "formType",
      control,
      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ea,
        {
          value: field.value,
          onValueChange: field.onChange,
          options: formTypeOptions,
          placeholder: isLoadingFormTypes ? "Loading..." : EXPENSE_TYPE_PLACEHOLDERS.FORM_TYPE,
          error: getFieldError(errors, touchedFields, dirtyFields, "formType", field.value),
          required: true,
          disabled: isLoadingFormTypes || isEditing
        }
      )
    }
  );
};
const MileageRateField = ({ control, errors, touchedFields, dirtyFields, showMileageRate, isEditing }) => {
  const { data: mileageRateData, isLoading: isLoadingRates } = useMileageRateOptions();
  const mileageRateOptions = React$2.useMemo(() => {
    return (mileageRateData == null ? void 0 : mileageRateData.rates) ? transformMileageRateOptions(mileageRateData.rates) : [];
  }, [mileageRateData]);
  return showMileageRate ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "mileageRate",
      control,
      render: ({ field }) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ea,
          {
            value: ((_a = field.value) == null ? void 0 : _a.toString()) || "",
            onValueChange: (value) => field.onChange(parseFloat(value)),
            options: mileageRateOptions,
            placeholder: isLoadingRates ? "Loading rates..." : EXPENSE_TYPE_PLACEHOLDERS.MILEAGE_RATE,
            error: getFieldError(errors, touchedFields, dirtyFields, "mileageRate", field.value),
            required: true,
            disabled: isLoadingRates || isEditing
          }
        );
      }
    }
  ) : null;
};
NameField.displayName = "NameField";
DescriptionField.displayName = "DescriptionField";
FormTypeField.displayName = "FormTypeField";
MileageRateField.displayName = "MileageRateField";
const STATUS_CONFIG = {
  [ExpenseTypeStatus.ACTIVE]: {
    color: "bg-trax-green-600",
    label: EXPENSE_TYPE_LABELS.ACTIVE
  },
  [ExpenseTypeStatus.INACTIVE]: {
    color: "bg-gray-400",
    label: EXPENSE_TYPE_LABELS.INACTIVE
  }
};
const getStatusConfig = (status) => {
  return STATUS_CONFIG[status] || STATUS_CONFIG[ExpenseTypeStatus.INACTIVE];
};
const createNameColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => ({
  accessorKey: "name",
  header: EXPENSE_TYPE_LABELS.EXPENSE_TYPE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
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
    const statusConfig = getStatusConfig(rowData.status);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Gs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: p("size-2 rounded-full", statusConfig.color), "data-testid": `status-indicator-${rowData.id}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: cellContext.getValue() })
        ] }),
        editContent: null
      }
    );
  }
});
const createDescriptionColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => ({
  accessorKey: "description",
  header: EXPENSE_TYPE_LABELS.DESCRIPTION,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Gs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: cellContext.getValue() || "—" }),
        editContent: isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          DescriptionField,
          {
            control: formControl,
            errors: formErrors,
            touchedFields,
            dirtyFields
          }
        ) : null
      }
    );
  }
});
await importShared("react");
const getFormTypeBadge = ({ formType, mileage, taxDisplayText }) => {
  switch (formType) {
    case "standard":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Er, { variant: "outline", className: "text-trax-blue-600 bg-trax-primary-blue-50", children: EXPENSE_TYPE_LABELS.STANDARD });
    case "entertainment":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Er, { variant: "outline", className: "text-trax-green-800 bg-trax-green-100", children: EXPENSE_TYPE_LABELS.ENTERTAINMENT });
    case "mileage":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Er, { variant: "outline", className: "text-trax-yellow-800 bg-trax-yellow-100", children: EXPENSE_TYPE_LABELS.MILEAGE }),
        mileage && /* @__PURE__ */ jsxRuntimeExports.jsx(Er, { variant: "outline", className: "bg-trax-neutral-20 text-trax-grey-900", children: `$${mileage}/mile` }),
        taxDisplayText && /* @__PURE__ */ jsxRuntimeExports.jsx(Er, { variant: "outline", className: "bg-trax-neutral-20 text-trax-grey-900", children: taxDisplayText })
      ] });
    default:
      return null;
  }
};
const getTaxDisplayText = (taxTypeId, taxTypes) => {
  var _a;
  if (!taxTypeId || !taxTypes) return void 0;
  return (_a = taxTypes.find((t) => t.id === taxTypeId)) == null ? void 0 : _a.displayText;
};
const createFormTypeColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  showMileageRate,
  isEditingExisting,
  taxTypes
}) => ({
  accessorKey: "formType",
  header: EXPENSE_TYPE_LABELS.FORM_TYPE,
  cell: (context) => {
    const cellContext = context;
    const formType = cellContext.getValue();
    const rowData = cellContext.row.original;
    const mileage = rowData.mileage;
    const isEditing = editingRowId === rowData.id;
    const taxDisplayText = getTaxDisplayText(rowData.taxTypeId, taxTypes);
    const viewContent = getFormTypeBadge({ formType, mileage, taxDisplayText });
    const editContent = isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 flex flex-row flex-nowrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormTypeField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          isEditing: isEditingExisting
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MileageRateField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          showMileageRate: showMileageRate || false,
          isEditing: isEditingExisting
        }
      )
    ] }) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Gs,
      {
        context: cellContext,
        viewContent,
        editContent
      }
    );
  }
});
const React$1 = await importShared("react");
const ExpenseTypeActionButtons = React$1.memo(({
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
        onMouseDown: (e) => {
          e.preventDefault();
          onSubmit();
        },
        "data-testid": "save-expense-type-button",
        variant: "ghost",
        disabled: !canSubmit || isFormLoading,
        className: `${canSubmit && !isFormLoading ? "hover:bg-green-50" : "opacity-50 cursor-not-allowed"}`,
        title: isFormLoading ? EXPENSE_TYPE_MESSAGES.SAVING : canSubmit ? EXPENSE_TYPE_MESSAGES.SAVE_CHANGES : EXPENSE_TYPE_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `w-4 h-4 ${canSubmit ? "text-green-600" : "text-gray-400"}` })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        onMouseDown: (e) => {
          e.preventDefault();
          onCancel();
        },
        "data-testid": "cancel-expense-type-button",
        variant: "ghost",
        disabled: isFormLoading,
        className: "hover:bg-exp-red-100",
        title: EXPENSE_TYPE_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-exp-red-500" })
      }
    )
  ] });
});
ExpenseTypeActionButtons.displayName = "ExpenseTypeActionButtons";
const ActionsCell = ({
  expenseType,
  isEditing,
  isToggling,
  onEdit,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive,
  onManageRates
}) => {
  const rowId = expenseType.id;
  const isActive = expenseType.status === "active";
  const isMileageType = expenseType.formType === ExpenseFormType.MILEAGE;
  const expenseTypeName = expenseType.name;
  if (isEditing && onSubmit && onCancel && canSubmit !== void 0 && isFormLoading !== void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseTypeActionButtons,
      {
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        isEditing
      }
    );
  }
  const showMarkActiveFirst = isMileageType && !isActive;
  const toggleActiveItem = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Sr,
    {
      onClick: () => onToggleActive == null ? void 0 : onToggleActive(rowId, isActive),
      "data-testid": `action-button-${rowId}`,
      className: "flex items-center gap-2 cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: `size-4 svg-color-inherit ${isActive ? "text-exp-neutral-70" : "text-trax-green-600"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: isActive ? "Mark inactive" : "Mark active" })
      ]
    }
  );
  const manageRatesItem = isMileageType ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Sr,
    {
      onClick: () => onManageRates == null ? void 0 : onManageRates(rowId, expenseTypeName),
      "data-testid": `manage-rates-button-${rowId}`,
      className: "flex items-center gap-2 cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "calculate", className: "size-4 text-exp-primary-blue-800 svg-color-inherit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: "Manage rates" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        className: "w-fit flex items-center justify-start px-3 py-2 hover:bg-gray-100 transition-colors rounded-lg",
        variant: "ghost",
        onClick: onEdit || (() => onRowEdit == null ? void 0 : onRowEdit({ original: expenseType })),
        "data-testid": `edit-button-${rowId}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(wr, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(yr, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pe,
        {
          className: "cursor-pointer w-fit outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0",
          variant: "ghost",
          disabled: isToggling,
          onClick: (e) => e.stopPropagation(),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4", "data-testid": `ellipsis-button-${rowId}` })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Cr,
        {
          side: "right",
          align: "start",
          sideOffset: 2,
          "data-testid": `popover-${rowId}`,
          className: "w-[160px] bg-exp-neutral-0",
          children: showMarkActiveFirst ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            toggleActiveItem,
            manageRatesItem
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            manageRatesItem,
            toggleActiveItem
          ] })
        }
      )
    ] })
  ] });
};
const createActionsColumn = ({
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
  header: EXPENSE_TYPE_LABELS.ACTIONS,
  cell: (context) => {
    const cellContext = context;
    const expenseType = cellContext.row.original;
    const isEditing = editingRowId === expenseType.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionsCell,
      {
        expenseType,
        isEditing,
        isToggling: togglingRowId === expenseType.id,
        onEdit: cellContext.onEdit,
        onRowEdit,
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        onToggleActive,
        onManageRates
      }
    );
  }
});
const React = await importShared("react");
const { useCallback, useMemo, useState } = React;
const ExpenseTypeTable = ({ className }) => {
  const { selectedCompany } = useCompanyStore();
  const { data: expenseTypes, isLoading, error } = useExpenseTypes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
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
    handleCreateExpenseType,
    handleUpdateExpenseType,
    toggleActiveExpenseType,
    isOperating,
    togglingRowId
  } = useExpenseTypeOperations(selectedCompany == null ? void 0 : selectedCompany.id, resetState);
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
    const dataArray = Array.isArray(expenseTypes) ? expenseTypes : [];
    return sortByCreatedDate(dataArray, "asc");
  }, [expenseTypes]);
  const handleFormSubmit = useCallback(async (data) => {
    if (editingRowId === NEW_ROW_ID) {
      await handleCreateExpenseType(data);
    } else if (editingRowId) {
      await handleUpdateExpenseType(editingRowId, data, editingData);
    }
  }, [editingRowId, handleCreateExpenseType, handleUpdateExpenseType]);
  const formHookOptions = useMemo(() => ({
    initialData: editingData,
    existingData: processedData,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    companyId: selectedCompany == null ? void 0 : selectedCompany.id
  }), [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, selectedCompany == null ? void 0 : selectedCompany.id]);
  const formHook = useExpenseTypeForm(formHookOptions);
  const stableControl = useMemo(() => formHook.control, [formHook.control]);
  const stableShowMileageRate = formHook.showMileageRate;
  const isEditingExisting = useMemo(
    () => editingRowId !== void 0 && editingRowId !== NEW_ROW_ID,
    [editingRowId]
  );
  const baseColumns = useMemo(() => [
    createNameColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields
    }),
    createDescriptionColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields
    }),
    createFormTypeColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields,
      showMileageRate: stableShowMileageRate,
      isEditingExisting,
      taxTypes
    })
  ], [
    editingRowId,
    stableControl,
    stableShowMileageRate,
    isEditingExisting,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields,
    taxTypes
  ]);
  const actionsColumn = useMemo(
    () => createActionsColumn({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onToggleActive: toggleActiveExpenseType,
      onManageRates: handleManageRates,
      togglingRowId
    }),
    [editingRowId, handleRowEdit, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading, toggleActiveExpenseType, handleManageRates, togglingRowId]
  );
  const columns = [...baseColumns, actionsColumn];
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTypeEmptyState, { onAddExpenseType: handleStartAdd });
  if (!selectedCompany) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500", children: EXPENSE_TYPE_MESSAGES.NO_COMPANY_SELECTED });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: EXPENSE_TYPE_MESSAGES.LOADING_ERROR });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(_n, {}) });
  }
  const tableData = isAddingNew ? [...processedData, {
    id: NEW_ROW_ID,
    name: "",
    description: "",
    formType: "standard",
    status: "active"
  }] : processedData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      As,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
          EXPENSE_TYPE_MESSAGES.ADD_EXPENSE_TYPE
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
const ExpensesType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 p-3.5 fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "size-4.5 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Expense Types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Configure expense types and form requirements" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTypeTable, {}) })
  ] });
};
export {
  ExpensesType as default
};

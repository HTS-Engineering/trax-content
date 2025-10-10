import { j as jsxRuntimeExports } from "./jsx-runtime-DLKWXVrv.js";
import { importShared } from "./__federation_fn_import-DlFISMuz.js";
import { a as useQuery, P as Plus, u as useCompanyStore } from "./store-CtcpRdCV.js";
import { u as useQueryClient, L as LoadingSpinner } from "./LoadingSpinner-C-M1heDl.js";
import { u as useMutation, o as object, n as number, _ as _enum, s as string, l as literal, d as useForm, e as a, C as Controller } from "./schemas-BbJoaiI5.js";
import { a as apiClient } from "./axiosInstance-BPwdN1IK.js";
import { u as useExpenseStore, T as Table2, C as Check, X, P as Pencil, E as EllipsisVertical } from "./store-CKuDCJe0.js";
import { D as De, d as Oo, B as Bo, K as Ka, i as m, k as ar, l as Xa } from "./createLucideIcon-DIm8u9Oh.js";
import { L as LayoutDashboard } from "./layout-dashboard-B6fg-6E-.js";
var ExpenseFormType = /* @__PURE__ */ ((ExpenseFormType2) => {
  ExpenseFormType2["STANDARD"] = "standard";
  ExpenseFormType2["ENTERTAINMENT"] = "entertainment";
  ExpenseFormType2["MILEAGE"] = "mileage";
  return ExpenseFormType2;
})(ExpenseFormType || {});
const { useEffect: useEffect$2 } = await importShared("react");
const API_BASE_PATH = "/api/v1.0/configuration";
const mapBackendToFrontend = (backend) => {
  return {
    id: backend.Id.toString(),
    name: backend.ExpenseTypeName,
    description: backend.ExpenseTypeDescription || "",
    formType: getFormTypeEnum(backend.FormTypeId),
    status: backend.IsActive ? "active" : "inactive",
    mileage: backend.MileageRateId || void 0,
    created: new Date(backend.CreatedDate),
    modified: backend.UpdatedDate ? new Date(backend.UpdatedDate) : new Date(backend.CreatedDate),
    // Legacy fields for compatibility
    type: backend.ExpenseTypeName,
    updated: backend.UpdatedDate ? new Date(backend.UpdatedDate) : new Date(backend.CreatedDate)
  };
};
const mapFrontendToBackendCreate = (frontend) => {
  return {
    FormTypeId: getFormTypeId(frontend.formType || "standard"),
    ExpenseTypeName: frontend.name || "",
    ExpenseTypeDescription: frontend.description || "",
    MileageRate: frontend.formType === "mileage" ? frontend.mileage || null : null,
    CreatedBy: getCurrentUser()
  };
};
const mapFrontendToBackendUpdate = (id, frontend) => {
  const update = {
    Id: parseInt(id, 10),
    UpdatedBy: getCurrentUser()
  };
  if (frontend.name !== void 0) {
    update.ExpenseTypeName = frontend.name;
  }
  if (frontend.description !== void 0) {
    update.ExpenseTypeDescription = frontend.description;
  }
  if (frontend.status !== void 0) {
    update.IsActive = frontend.status === "active";
  }
  return update;
};
const getFormTypeId = (formType) => {
  const normalizedType = typeof formType === "string" ? formType.toLowerCase() : formType;
  const formTypeMap = {
    "standard": 1,
    "mileage": 2,
    "entertainment": 3
  };
  return formTypeMap[normalizedType] || 1;
};
const getFormTypeEnum = (formTypeId) => {
  const formTypeMap = {
    1: ExpenseFormType.STANDARD,
    2: ExpenseFormType.MILEAGE,
    3: ExpenseFormType.ENTERTAINMENT
  };
  return formTypeMap[formTypeId] || ExpenseFormType.STANDARD;
};
const getCurrentUser = () => {
  return "current-user";
};
const useExpenseTypes = (companyShortName, includeInactive = false) => {
  const { setExpenseTypes, setLoadingExpenseTypes, setExpenseTypesError } = useExpenseStore();
  const query = useQuery({
    queryKey: ["expense-types", companyShortName, includeInactive],
    queryFn: async () => {
      if (!companyShortName) throw new Error("Company short name is required");
      const params = {
        show_inactive: includeInactive
      };
      const response = await apiClient.get(
        `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-types`,
        { params }
      );
      return response.data.map(mapBackendToFrontend);
    },
    enabled: !!companyShortName,
    staleTime: 2 * 60 * 1e3,
    // 2 minutes
    gcTime: 5 * 60 * 1e3
    // 5 minutes
  });
  useEffect$2(() => {
    if (query.data) {
      setExpenseTypes(query.data);
      setLoadingExpenseTypes(false);
      setExpenseTypesError(null);
    }
  }, [query.data, setExpenseTypes, setLoadingExpenseTypes, setExpenseTypesError]);
  useEffect$2(() => {
    if (query.error) {
      setExpenseTypesError(query.error.message || "Failed to fetch expense types");
      setLoadingExpenseTypes(false);
    }
  }, [query.error, setExpenseTypesError, setLoadingExpenseTypes]);
  return query;
};
const useCreateExpenseType = () => {
  const queryClient = useQueryClient();
  const { addExpenseType } = useExpenseStore();
  return useMutation({
    mutationFn: async ({ companyShortName, data }) => {
      var _a, _b, _c, _d;
      const createData = mapFrontendToBackendCreate(data);
      console.log("Creating expense type:", {
        url: `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-type`,
        payload: createData,
        companyShortName
      });
      try {
        const response = await apiClient.post(
          `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-type`,
          createData
        );
        console.log("Create expense type response:", response.data);
        return mapBackendToFrontend(response.data);
      } catch (error) {
        console.error("Create expense type failed:", {
          status: (_a = error.response) == null ? void 0 : _a.status,
          statusText: (_b = error.response) == null ? void 0 : _b.statusText,
          data: (_c = error.response) == null ? void 0 : _c.data,
          headers: (_d = error.response) == null ? void 0 : _d.headers
        });
        throw error;
      }
    },
    onSuccess: (newExpenseType, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["expense-types", variables.companyShortName]
      });
      addExpenseType(newExpenseType);
    },
    onError: (error) => {
      console.error("Failed to create expense type:", error);
    }
  });
};
const useUpdateExpenseType = () => {
  const queryClient = useQueryClient();
  const { updateExpenseType } = useExpenseStore();
  return useMutation({
    mutationFn: async ({
      companyShortName,
      id,
      data
    }) => {
      const updateData = mapFrontendToBackendUpdate(id, data);
      const response = await apiClient.put(
        `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-type`,
        updateData
      );
      return mapBackendToFrontend(response.data);
    },
    onSuccess: (updatedExpenseType, variables) => {
      updateExpenseType(updatedExpenseType.id, updatedExpenseType);
      queryClient.invalidateQueries({
        queryKey: ["expense-types", variables.companyShortName]
      });
    },
    onError: (error) => {
      console.error("Failed to update expense type:", error);
    }
  });
};
const useFormTypeOptions = () => {
  return useQuery({
    queryKey: ["form-type-options"],
    queryFn: async () => {
      const formTypes = [
        {
          id: "1",
          value: "standard",
          label: "Standard",
          description: "Standard expense form",
          isActive: true,
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        },
        {
          id: "2",
          value: "mileage",
          label: "Mileage",
          description: "Mileage expense form",
          isActive: true,
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        },
        {
          id: "3",
          value: "entertainment",
          label: "Entertainment",
          description: "Entertainment expense form",
          isActive: true,
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        }
      ];
      return formTypes;
    },
    staleTime: 5 * 60 * 1e3
    // 5 minutes - these don't change often
  });
};
const useMileageRateOptions = () => {
  return useQuery({
    queryKey: ["mileage-rate-options"],
    queryFn: async () => {
      const mileageRates = [
        {
          id: "1",
          value: "0.67",
          label: "2024 Rate - $0.67/km",
          rate: 0.67,
          description: "Standard mileage rate for 2024",
          isActive: true,
          effectiveDate: /* @__PURE__ */ new Date("2024-01-01"),
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        },
        {
          id: "2",
          value: "0.65",
          label: "2023 Rate - $0.65/km",
          rate: 0.65,
          description: "Standard mileage rate for 2023",
          isActive: false,
          effectiveDate: /* @__PURE__ */ new Date("2023-01-01"),
          created: /* @__PURE__ */ new Date("2023-01-01"),
          modified: /* @__PURE__ */ new Date("2023-01-01")
        }
      ];
      return {
        rates: mileageRates,
        currentRate: mileageRates.find((rate) => rate.isActive)
      };
    },
    staleTime: 5 * 60 * 1e3
    // 5 minutes
  });
};
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
const getDefaultValues = (initialData) => ({
  name: (initialData == null ? void 0 : initialData.name) ?? "",
  description: (initialData == null ? void 0 : initialData.description) ?? "",
  formType: (initialData == null ? void 0 : initialData.formType) ?? ExpenseFormType.STANDARD,
  mileageRate: initialData == null ? void 0 : initialData.mileage
});
const transformFormTypeOptions = (formTypes) => formTypes.map((option) => ({ value: option.value, label: option.label }));
const transformMileageRateOptions = (rates) => rates.map((rate) => ({ value: rate.value, label: rate.label }));
const { useCallback: useCallback$3, useEffect: useEffect$1, useMemo: useMemo$1 } = await importShared("react");
const useExpenseTypeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  companyId
} = {}) => {
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$1(
    () => createExpenseTypeSchema(existingData, initialDataId),
    [existingData, initialDataId]
  );
  const defaultValues = useMemo$1(
    () => getDefaultValues(initialData),
    [initialData]
  );
  const form = useForm({
    resolver: a(schema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  useEffect$1(() => {
    const newDefaultValues = getDefaultValues(initialData);
    form.reset(newDefaultValues);
  }, [initialData, form]);
  useEffect$1(() => {
    form.reset(getDefaultValues());
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
  useEffect$1(() => {
    if (formType !== ExpenseFormType.MILEAGE) {
      setValue("mileageRate", void 0);
    }
  }, [formType, setValue]);
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
    canSubmit: useMemo$1(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData, handleSubmit]),
    showMileageRate: formType === ExpenseFormType.MILEAGE,
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$2, useEffect, useState } = await importShared("react");
const useExpenseTypeTableState = (companyId) => {
  const [state, setState] = useState({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  useEffect(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, [companyId]);
  const handleStartAdd = useCallback$2(() => {
    setState((prev) => ({
      ...prev,
      isAddingNew: true,
      editingRowId: NEW_ROW_ID,
      editingData: void 0
    }));
  }, []);
  const handleRowEdit = useCallback$2((row) => {
    setState((prev) => ({
      ...prev,
      editingRowId: row.original.id,
      isAddingNew: false,
      editingData: row.original
    }));
  }, []);
  const handleFormCancel = useCallback$2(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, []);
  const resetState = useCallback$2(() => {
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
const { useCallback: useCallback$1 } = await importShared("react");
const useExpenseTypeOperations = (companyId, onSuccess) => {
  const createExpenseTypeMutation = useCreateExpenseType();
  const updateExpenseTypeMutation = useUpdateExpenseType();
  const handleCreateExpenseType = useCallback$1(async (data) => {
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
  const handleUpdateExpenseType = useCallback$1(async (id, data) => {
    if (!companyId) return;
    try {
      const expenseTypeData = {
        name: data.name.trim(),
        description: data.description || void 0,
        formType: data.formType,
        mileage: data.formType === "mileage" ? data.mileageRate : void 0,
        updated: /* @__PURE__ */ new Date()
      };
      await updateExpenseTypeMutation.mutateAsync({
        companyShortName: companyId,
        // companyId here is actually the short name
        id,
        data: expenseTypeData
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      console.error("Failed to update expense type:", error);
      throw error;
    }
  }, [companyId, updateExpenseTypeMutation, onSuccess]);
  return {
    handleCreateExpenseType,
    handleUpdateExpenseType,
    isCreating: createExpenseTypeMutation.isPending,
    isUpdating: updateExpenseTypeMutation.isPending,
    isOperating: createExpenseTypeMutation.isPending || updateExpenseTypeMutation.isPending
  };
};
await importShared("react");
const ExpenseTypeEmptyState = ({ onAddExpenseType }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 px-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 mb-6 bg-exp-primary-blue-50 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table2, { className: "size-9 text-exp-neutral-100" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center flex flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-exp-neutral-500 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: EXPENSE_TYPE_MESSAGES.EMPTY_STATE_TITLE }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-exp-grey-600 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: EXPENSE_TYPE_MESSAGES.EMPTY_STATE_DESCRIPTION }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      De,
      {
        className: "px-4 py-2",
        variant: "primary",
        onClick: onAddExpenseType,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
          EXPENSE_TYPE_MESSAGES.ADD_EXPENSE_TYPE
        ]
      }
    )
  ] })
] });
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
          Oo,
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
      Oo,
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
const FormTypeField = ({ control, errors, touchedFields, dirtyFields }) => {
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
        Bo,
        {
          value: field.value,
          onValueChange: field.onChange,
          options: formTypeOptions,
          placeholder: isLoadingFormTypes ? "Loading..." : EXPENSE_TYPE_PLACEHOLDERS.FORM_TYPE,
          error: getFieldError(errors, touchedFields, dirtyFields, "formType", field.value),
          required: true,
          disabled: isLoadingFormTypes
        }
      )
    }
  );
};
const MileageRateField = ({ control, errors, touchedFields, dirtyFields, showMileageRate }) => {
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
          Bo,
          {
            value: ((_a = field.value) == null ? void 0 : _a.toString()) || "",
            onValueChange: (value) => field.onChange(parseFloat(value)),
            options: mileageRateOptions,
            placeholder: isLoadingRates ? "Loading rates..." : EXPENSE_TYPE_PLACEHOLDERS.MILEAGE_RATE,
            error: getFieldError(errors, touchedFields, dirtyFields, "mileageRate", field.value),
            required: true,
            disabled: isLoadingRates
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
      Ka,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: m("size-2 rounded-full", statusConfig.color) }),
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
      Ka,
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
const getFormTypeBadge = (formType, mileage) => {
  switch (formType) {
    case "standard":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ar, { variant: "outline", className: "text-trax-blue-600 bg-trax-primary-blue-50", children: EXPENSE_TYPE_LABELS.STANDARD });
    case "entertainment":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ar, { variant: "outline", className: "text-trax-green-800 bg-trax-green-100", children: EXPENSE_TYPE_LABELS.ENTERTAINMENT });
    case "mileage":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ar, { variant: "outline", className: "text-trax-yellow-800 bg-trax-yellow-100", children: EXPENSE_TYPE_LABELS.MILEAGE }),
        mileage && /* @__PURE__ */ jsxRuntimeExports.jsx(ar, { variant: "outline", className: "bg-trax-neutral-20 text-trax-grey-900", children: `$${mileage}/mile` })
      ] });
    default:
      return null;
  }
};
const createFormTypeColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  showMileageRate
}) => ({
  accessorKey: "formType",
  header: EXPENSE_TYPE_LABELS.FORM_TYPE,
  cell: (context) => {
    const cellContext = context;
    const formType = cellContext.getValue();
    const rowData = cellContext.row.original;
    const mileage = rowData.mileage;
    const isEditing = editingRowId === rowData.id;
    const viewContent = getFormTypeBadge(formType, mileage);
    const editContent = isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 flex flex-row flex-nowrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormTypeField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MileageRateField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          showMileageRate: showMileageRate || false
        }
      )
    ] }) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ka,
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
  isFormLoading
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    De,
    {
      onMouseDown: (e) => {
        e.preventDefault();
        onSubmit();
      },
      variant: "ghost",
      disabled: !canSubmit || isFormLoading,
      className: `${canSubmit && !isFormLoading ? "hover:bg-green-50" : "opacity-50 cursor-not-allowed"}`,
      title: isFormLoading ? EXPENSE_TYPE_MESSAGES.SAVING : canSubmit ? EXPENSE_TYPE_MESSAGES.SAVE_CHANGES : EXPENSE_TYPE_MESSAGES.VALIDATION_ERROR,
      children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `w-4 h-4 ${canSubmit ? "text-green-600" : "text-gray-400"}` })
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    De,
    {
      onMouseDown: (e) => {
        e.preventDefault();
        onCancel();
      },
      variant: "ghost",
      disabled: isFormLoading,
      className: "hover:bg-red-50",
      title: EXPENSE_TYPE_MESSAGES.CANCEL_CHANGES,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-red-600" })
    }
  )
] }));
ExpenseTypeActionButtons.displayName = "ExpenseTypeActionButtons";
const createActionsColumn = ({
  editingRowId,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading
}) => ({
  id: "actions",
  header: EXPENSE_TYPE_LABELS.ACTIONS,
  cell: (context) => {
    const cellContext = context;
    const rowId = cellContext.row.original.id;
    const isEditing = editingRowId === rowId;
    if (isEditing && onSubmit && onCancel && canSubmit !== void 0 && isFormLoading !== void 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExpenseTypeActionButtons,
        {
          onSubmit,
          onCancel,
          canSubmit,
          isFormLoading
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        De,
        {
          className: "w-fit flex items-center justify-start px-3 py-2 hover:bg-gray-100 transition-colors rounded-lg",
          variant: "ghost",
          onClick: cellContext.onEdit || (() => onRowEdit == null ? void 0 : onRowEdit(cellContext.row)),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        De,
        {
          className: "cursor-pointer w-fit",
          variant: "ghost",
          onClick: () => {
            console.log("More actions for:", cellContext.row.original.id);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4" })
        }
      )
    ] });
  }
});
const React = await importShared("react");
const { useCallback, useMemo } = React;
const ExpenseTypeTable = ({ className }) => {
  const { selectedCompany } = useCompanyStore();
  const { data: expenseTypes, isLoading, error } = useExpenseTypes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
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
    isOperating
  } = useExpenseTypeOperations(selectedCompany == null ? void 0 : selectedCompany.id, resetState);
  const processedData = useMemo(
    () => Array.isArray(expenseTypes) ? expenseTypes : [],
    [expenseTypes]
  );
  const handleFormSubmit = useCallback(async (data) => {
    if (editingRowId === NEW_ROW_ID) {
      await handleCreateExpenseType(data);
    } else if (editingRowId) {
      await handleUpdateExpenseType(editingRowId, data);
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
      showMileageRate: stableShowMileageRate
    })
  ], [
    editingRowId,
    stableControl,
    stableShowMileageRate,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields
  ]);
  const actionsColumn = useMemo(
    () => createActionsColumn({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading
    }),
    [editingRowId, handleRowEdit, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading]
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) });
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
      Xa,
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
      De,
      {
        className: "border-0",
        variant: "secondary",
        onClick: handleStartAdd,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
          EXPENSE_TYPE_MESSAGES.ADD_EXPENSE_TYPE
        ]
      }
    ) })
  ] });
};
const ExpensesType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 p-3.5 fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "size-4.5 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Expense Types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Configure expense types and form requirements" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTypeTable, {})
  ] });
};
export {
  ExpensesType as default
};

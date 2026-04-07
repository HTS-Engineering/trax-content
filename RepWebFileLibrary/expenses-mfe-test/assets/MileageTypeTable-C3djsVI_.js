import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { _ as QueryObserver, $ as useBaseQuery, f as useQueryClient, c as useExpenseTypes, a0 as ExpenseTypeScope, q as queryKeys, F as FormTypeId, t as ExpenseFormType, a1 as useCreateExpenseType, a2 as useUpdateExpenseType, a3 as useToggleExpenseTypeStatus, a4 as useFormTypeOptions, a as useCompanyStore, d as useQuery, h as useMutation, n as useCurrencies, a5 as DEFAULT_CURRENCY_SYMBOL, a6 as MileageRateStatus, p as useTaxTypesDisplay } from "./expense-api-DNh80WD1.js";
import { V as Va, $ as $a, U as Ue, A as An, W as Ws, v as p, a as $r, F as Fr, I as Ir, w as Dr, x as Er, g as Xs, y as Ha, q as qs, s as sn, N as Br, b as Gt, c as qt, d as Ut, r as rr, f as Qs, X as Xa, O as ei, Z as Za, J as Ja, Y as Ya, p as ps, P as es, R as Vs } from "./index.es-BcmpdPPF.js";
import { E as EmptyState } from "./EmptyState-C5BNOZD5.js";
import { I as Icon } from "./Icon-BRsOXDbZ.js";
import { o as object, _ as _enum, s as string, l as literal, u as useForm, a, e as Controller, C as ConfirmDialog, g as useWatch, n as number, h as date, f as createDecimalChangeHandler, k as filterDecimalInput } from "./schemas-BZkGzsPE.js";
import { d as devError, a as devLog } from "./index-B5ZEU9xK.js";
import { f as useEscapeHandler } from "./use-scroll-into-view-ref-CrT0clxE.js";
import { a as apiClient } from "./axiosInstance-CDmaETDQ.js";
import { C as CONFIGURATION_ENDPOINTS } from "./configuration-BQHaqkMo.js";
import { a as useCreateBusinessPurpose, b as useUpdateBusinessPurpose, c as useToggleBusinessPurposeStatus, u as useBusinessPurposes } from "./business-purpose-api-14WRpLAM.js";
import { g as formatRateCompact, P as Plus } from "./formatters-CJ8aOQI9.js";
import { i as infiniteQueryBehavior, h as hasPreviousPage, a as hasNextPage } from "./infiniteQueryBehavior-EsbiUS7Q.js";
import { I as Info } from "./info-VmUiqK8b.js";
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
const getFormTypeIdFromCache = (queryClient, formTypeName) => {
  const formTypes = queryClient.getQueryData(queryKeys.formTypes.list());
  if (formTypes && formTypes.length > 0) {
    const found = formTypes.find((ft) => ft.formTypeName === formTypeName);
    if (found) return found.id;
  }
  const fallbackMap = {
    Standard: FormTypeId.STANDARD,
    Mileage: FormTypeId.MILEAGE,
    Entertainment: FormTypeId.ENTERTAINMENT
  };
  return fallbackMap[formTypeName];
};
const useMileageTypes = (companyShortName, includeInactive = false) => {
  const queryClient = useQueryClient();
  const mileageFormTypeId = getFormTypeIdFromCache(queryClient, "Mileage");
  return useExpenseTypes(companyShortName, {
    includeInactive,
    formTypeIds: [mileageFormTypeId],
    scope: ExpenseTypeScope.COMPANY
  });
};
const useNonMileageTypes = (companyShortName, includeInactive = false) => {
  const queryClient = useQueryClient();
  const standardFormTypeId = getFormTypeIdFromCache(queryClient, "Standard");
  const entertainmentFormTypeId = getFormTypeIdFromCache(queryClient, "Entertainment");
  return useExpenseTypes(companyShortName, {
    includeInactive,
    formTypeIds: [standardFormTypeId, entertainmentFormTypeId],
    scope: ExpenseTypeScope.COMPANY
  });
};
const EXPENSE_TYPE_PLACEHOLDERS = {
  NAME: "Enter expense type name",
  DESCRIPTION: "Enter description (optional)",
  FORM_TYPE: "Select form type"
};
const EXPENSE_TYPE_LABELS = {
  EXPENSE_TYPE: "Expense type",
  DESCRIPTION: "Description (optional)",
  FORM_TYPE: "Form type",
  ACTIONS: "Actions",
  STANDARD: "Standard",
  ENTERTAINMENT: "Entertainment"
};
const EXPENSE_TYPE_MESSAGES = {
  PAGE_TITLE: "Expense Types",
  PAGE_DESCRIPTION: "Configure expense types and form requirements",
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
const EXPENSE_TYPE_VALIDATION = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 45,
  DESCRIPTION_MAX_LENGTH: 400
};
const NEW_ROW_ID$4 = "new";
const checkNameUniqueness$3 = (name, existingData, currentId) => {
  return !existingData.some(
    (item) => item.name.toLowerCase() === name.toLowerCase() && item.id !== currentId
  );
};
const expenseTypeSchema = object({
  name: string().min(1, "Expense type name is required").min(EXPENSE_TYPE_VALIDATION.NAME_MIN_LENGTH, `Expense type name must be at least ${EXPENSE_TYPE_VALIDATION.NAME_MIN_LENGTH} characters`).max(EXPENSE_TYPE_VALIDATION.NAME_MAX_LENGTH, `Expense type name must be ${EXPENSE_TYPE_VALIDATION.NAME_MAX_LENGTH} characters or less`).trim(),
  description: string().max(EXPENSE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH, `Description must be ${EXPENSE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH} characters or less`).optional().or(literal("")),
  formType: _enum([ExpenseFormType.STANDARD, ExpenseFormType.ENTERTAINMENT], {
    message: "Please select a valid form type"
  })
});
const createExpenseTypeSchema = (existingData, currentId) => {
  return expenseTypeSchema.refine(
    (data) => {
      return checkNameUniqueness$3(data.name, existingData, currentId);
    },
    {
      message: "This expense type name already exists",
      path: ["name"]
    }
  );
};
const getDefaultValues$4 = (initialData) => ({
  name: (initialData == null ? void 0 : initialData.name) ?? "",
  description: (initialData == null ? void 0 : initialData.description) ?? "",
  // Cast is safe because ExpenseTypeTable only shows STANDARD/ENTERTAINMENT types (not MILEAGE)
  formType: (initialData == null ? void 0 : initialData.formType) ?? ""
});
const transformFormTypeOptions = (formTypes) => formTypes.map((option) => ({ value: option.value, label: option.label })).filter((option) => option.value !== ExpenseFormType.MILEAGE);
const { useCallback: useCallback$o, useEffect: useEffect$9, useMemo: useMemo$e } = await importShared("react");
const useExpenseTypeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
} = {}) => {
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$e(
    () => createExpenseTypeSchema(existingData, initialDataId),
    [existingData, initialDataId]
  );
  const defaultValues = useMemo$e(
    () => getDefaultValues$4(initialData),
    [initialData]
  );
  const form = useForm({
    resolver: a(schema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  useEffect$9(() => {
    const newDefaultValues = getDefaultValues$4(initialData);
    form.reset(newDefaultValues);
  }, [initialData, form]);
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
  const handleFormSubmit = useCallback$o(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultValues$4());
      } catch (error) {
        devError("Form submission error:", error);
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$o(() => {
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
    formType,
    errors,
    isValid,
    isDirty,
    isSubmitting,
    touchedFields,
    dirtyFields,
    handleCancel,
    canSubmit: useMemo$e(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$n, useEffect: useEffect$8, useState: useState$a } = await importShared("react");
const useExpenseTypeTableState = (companyId) => {
  const [state, setState] = useState$a({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  useEffect$8(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, [companyId]);
  const handleStartAdd = useCallback$n(() => {
    setState((prev) => ({
      ...prev,
      editingRowId: NEW_ROW_ID$4,
      isAddingNew: true,
      editingData: void 0
    }));
  }, []);
  const handleRowEdit = useCallback$n((row) => {
    setState((prev) => ({
      ...prev,
      editingRowId: row.original.id,
      isAddingNew: false,
      editingData: row.original
    }));
  }, []);
  const handleFormCancel = useCallback$n(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, []);
  const resetState = handleFormCancel;
  return {
    ...state,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  };
};
const { useCallback: useCallback$m } = await importShared("react");
const useExpenseTypeOperations = (companyId, onSuccess) => {
  var _a;
  const createExpenseTypeMutation = useCreateExpenseType();
  const updateExpenseTypeMutation = useUpdateExpenseType();
  const toggleExpenseTypeMutation = useToggleExpenseTypeStatus();
  const handleCreateExpenseType = useCallback$m(async (data) => {
    if (!companyId) return;
    try {
      const expenseTypeData = {
        name: data.name.trim(),
        description: data.description || void 0,
        formType: data.formType,
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
  const handleUpdateExpenseType = useCallback$m(async (id, data, originalData) => {
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
  const toggleActiveExpenseType = useCallback$m(async (id, currentStatus) => {
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
const { useEffect: useEffect$7 } = await importShared("react");
function useSubmitOnEnter({
  onSubmit,
  canSubmit,
  isFormLoading,
  isEditing,
  enabled = true
}) {
  useEffect$7(() => {
    if (!enabled || !isEditing) return;
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && canSubmit && !isFormLoading) {
        const target = e.target;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
          e.preventDefault();
          onSubmit();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmit, canSubmit, isFormLoading, isEditing, enabled]);
}
const React$b = await importShared("react");
const getFieldError$6 = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const isRequiredField = fieldName === "name" || fieldName === "formType";
  const shouldShowError = isTouched || isDirty || hasValue || isRequiredField && fieldError;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const NameField$2 = ({ control, errors, touchedFields, dirtyFields }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "name",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError$6(errors, touchedFields, dirtyFields, "name", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Va,
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
const DescriptionField$2 = ({ control, errors, touchedFields, dirtyFields }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Controller,
  {
    name: "description",
    control,
    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Va,
      {
        ...field,
        placeholder: EXPENSE_TYPE_PLACEHOLDERS.DESCRIPTION,
        error: getFieldError$6(errors, touchedFields, dirtyFields, "description", field.value),
        maxCharacters: EXPENSE_TYPE_VALIDATION.DESCRIPTION_MAX_LENGTH,
        enforceMaxLength: false
      }
    )
  }
);
const FormTypeField = ({ control, errors, touchedFields, dirtyFields, isEditing }) => {
  const { data: formTypes, isLoading: isLoadingFormTypes } = useFormTypeOptions();
  const formTypeOptions = React$b.useMemo(() => {
    return formTypes ? transformFormTypeOptions(formTypes) : [];
  }, [formTypes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "formType",
      control,
      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        $a,
        {
          value: field.value,
          onValueChange: field.onChange,
          options: formTypeOptions,
          placeholder: isLoadingFormTypes ? "Loading..." : EXPENSE_TYPE_PLACEHOLDERS.FORM_TYPE,
          error: getFieldError$6(errors, touchedFields, dirtyFields, "formType", field.value),
          required: true,
          disabled: isLoadingFormTypes || isEditing
        }
      )
    }
  );
};
const ExpenseTypeActionButtons = React$b.memo(({
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  isEditing
}) => {
  useSubmitOnEnter({ onSubmit, canSubmit, isFormLoading, isEditing });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        onMouseDown: (e) => {
          e.preventDefault();
          onSubmit();
        },
        "data-testid": "save-expense-type-button",
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-green-500 hover:text-exp-green-800",
        disabled: !canSubmit || isFormLoading,
        title: isFormLoading ? EXPENSE_TYPE_MESSAGES.SAVING : canSubmit ? EXPENSE_TYPE_MESSAGES.SAVE_CHANGES : EXPENSE_TYPE_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        onMouseDown: (e) => {
          e.preventDefault();
          onCancel();
        },
        "data-testid": "cancel-expense-type-button",
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-red-500 hover:text-exp-red-600",
        disabled: isFormLoading,
        title: EXPENSE_TYPE_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
      }
    )
  ] });
});
NameField$2.displayName = "NameField";
DescriptionField$2.displayName = "DescriptionField";
FormTypeField.displayName = "FormTypeField";
ExpenseTypeActionButtons.displayName = "ExpenseTypeActionButtons";
var Status = /* @__PURE__ */ ((Status2) => {
  Status2["ACTIVE"] = "active";
  Status2["INACTIVE"] = "inactive";
  return Status2;
})(Status || {});
var StatusLabel = /* @__PURE__ */ ((StatusLabel2) => {
  StatusLabel2["ACTIVE"] = "Active";
  StatusLabel2["INACTIVE"] = "Inactive";
  return StatusLabel2;
})(StatusLabel || {});
const getStatusConfig = (status) => {
  const configs = {
    [Status.ACTIVE]: {
      color: "bg-trax-green-600",
      label: StatusLabel.ACTIVE
    },
    [Status.INACTIVE]: {
      color: "bg-exp-neutral-70",
      label: StatusLabel.INACTIVE
    }
  };
  return configs[status] || configs[Status.ACTIVE];
};
const createNameColumn$1 = ({
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        NameField$2,
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
      Ws,
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
const createDescriptionColumn$1 = ({
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
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: cellContext.getValue() || "—" }),
        editContent: isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DescriptionField$2,
          {
            control: formControl,
            errors: formErrors,
            touchedFields,
            dirtyFields
          }
        ) }) : null
      }
    );
  }
});
await importShared("react");
const getFormTypeBadge = (formType) => {
  switch (formType) {
    case "standard":
      return /* @__PURE__ */ jsxRuntimeExports.jsx($r, { variant: "outline", className: "text-trax-blue-600 bg-trax-primary-blue-50", children: EXPENSE_TYPE_LABELS.STANDARD });
    case "entertainment":
      return /* @__PURE__ */ jsxRuntimeExports.jsx($r, { variant: "outline", className: "text-trax-green-800 bg-trax-green-100", children: EXPENSE_TYPE_LABELS.ENTERTAINMENT });
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
  isEditingExisting
}) => ({
  accessorKey: "formType",
  header: EXPENSE_TYPE_LABELS.FORM_TYPE,
  cell: (context) => {
    const cellContext = context;
    const formType = cellContext.getValue();
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    const viewContent = getFormTypeBadge(formType);
    const isNewRow = !isEditingExisting;
    const editContent = isEditing && isNewRow && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormTypeField,
      {
        control: formControl,
        errors: formErrors,
        touchedFields,
        dirtyFields,
        isEditing: false
      }
    ) }) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent,
        editContent
      }
    );
  }
});
const ActionsCell$3 = ({
  row,
  isEditing,
  isToggling,
  onEdit,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive
}) => {
  const expenseType = row.original;
  const rowId = expenseType.id;
  const isActive = expenseType.status === "active";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "ghost",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4 svg-color-inherit" }),
        iconPosition: "center",
        className: "p-1!",
        onClick: onEdit || (() => onRowEdit == null ? void 0 : onRowEdit(row)),
        "data-testid": `edit-button-${rowId}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Fr, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ir, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "ghost",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "ellipsis-vertical", className: "size-4 svg-color-inherit" }),
          iconPosition: "center",
          className: "p-1!",
          disabled: isToggling,
          onClick: (e) => e.stopPropagation(),
          "data-testid": `ellipsis-button-${rowId}`
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Dr,
        {
          side: "right",
          align: "start",
          sideOffset: 2,
          "data-testid": `popover-${rowId}`,
          className: "w-[160px] bg-exp-neutral-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Er,
            {
              onClick: () => onToggleActive == null ? void 0 : onToggleActive(rowId, isActive),
              "data-testid": `action-button-${rowId}`,
              className: "flex items-center gap-2 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: `size-4 svg-color-inherit ${isActive ? "text-exp-neutral-70" : "text-trax-green-600"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: isActive ? "Mark inactive" : "Mark active" })
              ]
            }
          )
        }
      )
    ] })
  ] });
};
const createActionsColumn$3 = ({
  editingRowId,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive,
  togglingRowId
}) => ({
  id: "actions",
  header: EXPENSE_TYPE_LABELS.ACTIONS,
  cell: (context) => {
    const cellContext = context;
    const { row } = cellContext;
    const expenseType = row.original;
    const isEditing = editingRowId === expenseType.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionsCell$3,
      {
        row,
        isEditing,
        isToggling: togglingRowId === expenseType.id,
        onEdit: cellContext.onEdit,
        onRowEdit,
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        onToggleActive
      }
    );
  }
});
function parseDate(dateValue) {
  if (!dateValue) return null;
  if (dateValue instanceof Date) {
    return isNaN(dateValue.getTime()) ? null : dateValue;
  }
  try {
    const date2 = new Date(dateValue);
    return isNaN(date2.getTime()) ? null : date2;
  } catch {
    return null;
  }
}
function sortByCreatedDate(items, direction = "desc") {
  const itemsCopy = [...items];
  return itemsCopy.sort((a2, b) => {
    const dateA = parseDate(a2.created);
    const dateB = parseDate(b.created);
    if (dateA === null && dateB === null) return 0;
    if (dateA === null) return 1;
    if (dateB === null) return -1;
    const comparison = dateA.getTime() - dateB.getTime();
    return direction === "asc" ? comparison : -comparison;
  });
}
const React$a = await importShared("react");
const { useCallback: useCallback$l, useMemo: useMemo$d } = React$a;
const ExpenseTypeTable = ({ className }) => {
  const { selectedCompany } = useCompanyStore();
  const { data: expenseTypes, isLoading, error } = useNonMileageTypes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
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
  const processedData = useMemo$d(() => {
    const dataArray = Array.isArray(expenseTypes) ? expenseTypes : [];
    return sortByCreatedDate(dataArray, "asc");
  }, [expenseTypes]);
  const handleFormSubmit = useCallback$l(async (data) => {
    if (editingRowId === NEW_ROW_ID$4) {
      await handleCreateExpenseType(data);
    } else if (editingRowId) {
      await handleUpdateExpenseType(editingRowId, data, editingData);
    }
  }, [editingRowId, handleCreateExpenseType, handleUpdateExpenseType, editingData]);
  const formHookOptions = useMemo$d(() => ({
    initialData: editingData,
    existingData: processedData,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    isActive: editingRowId !== void 0
  }), [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, editingRowId]);
  const formHook = useExpenseTypeForm(formHookOptions);
  const stableControl = useMemo$d(() => formHook.control, [formHook.control]);
  const isEditingExisting = useMemo$d(
    () => editingRowId !== void 0 && editingRowId !== NEW_ROW_ID$4,
    [editingRowId]
  );
  const baseColumns = useMemo$d(() => [
    createNameColumn$1({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields
    }),
    createDescriptionColumn$1({
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
      isEditingExisting
    })
  ], [
    editingRowId,
    stableControl,
    isEditingExisting,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields
  ]);
  const actionsColumn = useMemo$d(
    () => createActionsColumn$3({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onToggleActive: toggleActiveExpenseType,
      togglingRowId
    }),
    [editingRowId, handleRowEdit, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading, toggleActiveExpenseType, togglingRowId]
  );
  const columns = [...baseColumns, actionsColumn];
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "layout-dashboard", className: "size-9 text-exp-neutral-100" }),
      title: EXPENSE_TYPE_MESSAGES.EMPTY_STATE_TITLE,
      description: EXPENSE_TYPE_MESSAGES.EMPTY_STATE_DESCRIPTION,
      "data-testid": "expense-type-empty-state",
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { className: "px-4", variant: "primary", onClick: handleStartAdd, "data-testid": "add-expense-type-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4" }),
        EXPENSE_TYPE_MESSAGES.ADD_EXPENSE_TYPE
      ] })
    }
  );
  if (!selectedCompany) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500", children: EXPENSE_TYPE_MESSAGES.NO_COMPANY_SELECTED });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: EXPENSE_TYPE_MESSAGES.LOADING_ERROR });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, {}) });
  }
  const tableData = isAddingNew ? [...processedData, {
    id: NEW_ROW_ID$4,
    name: "",
    description: "",
    formType: "standard",
    status: "active"
  }] : processedData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xs,
      {
        columns,
        data: tableData,
        emptyState,
        manualSorting: true,
        className: "border-exp-neutral-30 border-b-0! rounded-b-none!",
        editingRowId: editingRowId || (isAddingNew ? NEW_ROW_ID$4 : void 0),
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
    (processedData.length > 0 || isAddingNew) && !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border border-t-0.5! border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        className: "border-0",
        variant: "secondary",
        onClick: handleStartAdd,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
          EXPENSE_TYPE_MESSAGES.ADD_EXPENSE_TYPE
        ]
      }
    ) })
  ] });
};
const CORPORATE_CARDS_PLACEHOLDERS = {
  NAME: "Add master account description",
  CURRENCY: "Select",
  STATEMENT_END_DATE: "01",
  RECONCILIATION_DUE: "1"
};
const CORPORATE_CARDS_LABELS = {
  MASTER_ACCOUNT: "Master Account",
  CURRENCY: "Currency",
  STATEMENT_END_DATE: "Statement End Date",
  RECONCILIATION_DUE: "Reconciliation Due",
  CARDHOLDERS: "Cardholders",
  ACTIONS: "Actions"
};
const CORPORATE_CARDS_MESSAGES = {
  PAGE_TITLE: "Corporate Cards",
  PAGE_DESCRIPTION: "Manage corporate card accounts and cardholders",
  EMPTY_STATE_TITLE: "No master accounts added",
  EMPTY_STATE_DESCRIPTION: "Set up master accounts and add cardholders to enable corporate card expense submission and reconciliation.",
  ADD_MASTER_ACCOUNT: "Add Master Account",
  LOADING_ERROR: "Failed to load master accounts. Please try again.",
  SAVING: "Saving...",
  SAVE_CHANGES: "Save changes",
  CANCEL_CHANGES: "Cancel changes",
  VALIDATION_ERROR: "Please fix validation errors",
  SET_AS_INACTIVE_DIALOG_CANCEL: "Cancel",
  SET_AS_INACTIVE_DIALOG_CONFIRM: "Mark Inactive",
  SET_AS_INACTIVE_DIALOG_TITLE: "Mark master account as inactive"
};
const CORPORATE_CARDS_VALIDATION = {
  DESCRIPTION_MIN_LENGTH: 1,
  DESCRIPTION_MAX_LENGTH: 35
};
const NEW_ROW_ID$3 = "new";
const { useCallback: useCallback$k, useState: useState$9 } = await importShared("react");
const useMasterAccountTableState = () => {
  const [state, setState] = useState$9({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  const handleStartAdd = useCallback$k(() => {
    setState((prev) => ({
      ...prev,
      editingRowId: NEW_ROW_ID$3,
      isAddingNew: true,
      editingData: void 0
    }));
  }, []);
  const handleRowEdit = useCallback$k((row) => {
    setState((prev) => ({
      ...prev,
      editingRowId: row.original.id,
      isAddingNew: false,
      editingData: row.original
    }));
  }, []);
  const handleFormCancel = useCallback$k(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, []);
  const resetState = handleFormCancel;
  return {
    ...state,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  };
};
const mapBackendToFrontend = (backend) => {
  var _a;
  return {
    ...backend,
    id: backend.id.toString(),
    statementEndDate: backend.statementEndDate.toString(),
    reconciliationDueDate: backend.reconciliationDueDate.toString(),
    cardholders: ((_a = backend.cardholders) == null ? void 0 : _a.toString()) ?? "",
    created: new Date(backend.createdAt),
    updated: backend.updatedAt ? new Date(backend.updatedAt) : void 0
  };
};
const mapFrontendToBackendCreate = (frontend) => {
  return {
    ...frontend,
    statementEndDate: parseInt(frontend.statementEndDate),
    reconciliationDueDate: parseInt(frontend.reconciliationDueDate)
  };
};
const mapFrontendToBackendUpdate = (id, frontend) => {
  const { statementEndDate, reconciliationDueDate, ...rest } = frontend;
  return {
    ...rest,
    id: parseInt(id),
    ...statementEndDate !== void 0 && { statementEndDate: parseInt(statementEndDate) },
    ...reconciliationDueDate !== void 0 && { reconciliationDueDate: parseInt(reconciliationDueDate) }
  };
};
const useMasterAccounts = (companyShortName) => {
  return useQuery({
    queryKey: companyShortName ? [...queryKeys.masterAccounts.list(companyShortName)] : queryKeys.masterAccounts.lists(),
    queryFn: async () => {
      if (!companyShortName) throw new Error("Company short name is required");
      const response = await apiClient.get(
        CONFIGURATION_ENDPOINTS.MASTER_ACCOUNTS(companyShortName)
      );
      return response.data.map(mapBackendToFrontend);
    },
    enabled: !!companyShortName,
    staleTime: 2 * 60 * 1e3,
    gcTime: 5 * 60 * 1e3
  });
};
const useCreateMasterAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, data }) => {
      const createData = mapFrontendToBackendCreate(data);
      const response = await apiClient.post(
        CONFIGURATION_ENDPOINTS.MASTER_ACCOUNT_CREATE(companyShortName),
        createData
      );
      return mapBackendToFrontend(response.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.masterAccounts.all()
      });
    }
  });
};
const useUpdateMasterAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, id, data }) => {
      const updateData = mapFrontendToBackendUpdate(id, data);
      const response = await apiClient.put(
        CONFIGURATION_ENDPOINTS.MASTER_ACCOUNT_UPDATE(companyShortName),
        updateData
      );
      return mapBackendToFrontend(response.data);
    },
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.masterAccounts.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.masterAccounts.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.masterAccounts.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (at) => at.id === id ? { ...at, ...data, updatedAt: /* @__PURE__ */ new Date() } : at
        );
      });
      return { previousData };
    },
    onError: (_error, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.masterAccounts.all()
      });
    }
  });
};
const { useCallback: useCallback$j } = await importShared("react");
const useMasterAccountOperations = (companyShortName, onSuccess) => {
  var _a;
  const createMasterAccountMutation = useCreateMasterAccount();
  const updateMasterAccountMutation = useUpdateMasterAccount();
  const handleCreateMasterAccount = useCallback$j(async (data) => {
    if (!companyShortName) return;
    try {
      const masterAccountData = {
        name: data.name,
        currencyCode: data.currencyCode,
        statementEndDate: data.statementEndDate,
        reconciliationDueDate: data.reconciliationDueDate,
        active: true
      };
      await createMasterAccountMutation.mutateAsync({
        companyShortName,
        data: masterAccountData
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to create master account:", error);
      throw error;
    }
  }, [companyShortName, createMasterAccountMutation, onSuccess]);
  const handleUpdateMasterAccount = useCallback$j(async (id, data, originalData) => {
    if (!companyShortName) return;
    try {
      const masterAccountData = {};
      let hasChange = false;
      if (!originalData || data.name !== originalData.name) {
        masterAccountData.name = data.name;
        hasChange = true;
      }
      if (!originalData || data.statementEndDate !== originalData.statementEndDate) {
        masterAccountData.statementEndDate = data.statementEndDate;
        hasChange = true;
      }
      if (!originalData || data.reconciliationDueDate !== originalData.reconciliationDueDate) {
        masterAccountData.reconciliationDueDate = data.reconciliationDueDate;
        hasChange = true;
      }
      if (hasChange) {
        await updateMasterAccountMutation.mutateAsync({
          companyShortName,
          id,
          data: masterAccountData
        });
        onSuccess == null ? void 0 : onSuccess();
      }
    } catch (error) {
      devError("Failed to update master account:", error);
      throw error;
    }
  }, [companyShortName, updateMasterAccountMutation, onSuccess]);
  const toggleActiveMasterAccount = useCallback$j(async (id, active) => {
    if (!companyShortName || updateMasterAccountMutation.isPending) return;
    try {
      await updateMasterAccountMutation.mutateAsync({ companyShortName, id, data: { active: !active } });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to toggle master account status:", error);
      throw error;
    }
  }, [companyShortName, updateMasterAccountMutation, onSuccess]);
  return {
    handleCreateMasterAccount,
    handleUpdateMasterAccount,
    toggleActiveMasterAccount,
    isCreating: createMasterAccountMutation.isPending,
    isUpdating: updateMasterAccountMutation.isPending,
    isOperating: createMasterAccountMutation.isPending || updateMasterAccountMutation.isPending,
    togglingRowId: updateMasterAccountMutation.isPending ? (_a = updateMasterAccountMutation.variables) == null ? void 0 : _a.id : void 0
  };
};
const checkNameUniqueness$2 = (name, existingData, currentId) => {
  return !existingData.some(
    (item) => item.name.toLowerCase() === name.toLowerCase() && item.id !== currentId
  );
};
const masterAccountSchema = object({
  name: string().min(CORPORATE_CARDS_VALIDATION.DESCRIPTION_MIN_LENGTH, `Master account description must be at least ${CORPORATE_CARDS_VALIDATION.DESCRIPTION_MIN_LENGTH} characters`).max(CORPORATE_CARDS_VALIDATION.DESCRIPTION_MAX_LENGTH, `Master account description must be ${CORPORATE_CARDS_VALIDATION.DESCRIPTION_MAX_LENGTH} characters or less`).trim(),
  currencyCode: string().min(1, "Currency is required"),
  statementEndDate: string().min(1, "Statement end date is required"),
  reconciliationDueDate: string().min(1, "Reconciliation due date is required").regex(/^\d+$/, "Reconciliation due date must be a number")
});
const createMasterAccountSchema = (existingData, currentId) => {
  return masterAccountSchema.refine(
    (data) => {
      return checkNameUniqueness$2(data.name, existingData, currentId);
    },
    {
      message: "This master account description already exists",
      path: ["name"]
    }
  );
};
const getDefaultValues$3 = (initialData) => ({
  name: (initialData == null ? void 0 : initialData.name) ?? "",
  currencyCode: (initialData == null ? void 0 : initialData.currencyCode) ?? "",
  statementEndDate: (initialData == null ? void 0 : initialData.statementEndDate.toString().padStart(2, "0")) ?? "",
  reconciliationDueDate: (initialData == null ? void 0 : initialData.reconciliationDueDate.toString()) ?? ""
});
const { useCallback: useCallback$i, useEffect: useEffect$6, useMemo: useMemo$c } = await importShared("react");
const useMasterAccountForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
} = {}) => {
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$c(
    () => createMasterAccountSchema(existingData, initialDataId),
    [existingData, initialDataId]
  );
  const defaultValues = useMemo$c(
    () => getDefaultValues$3(initialData),
    [initialData]
  );
  const form = useForm({
    resolver: a(schema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  useEffect$6(() => {
    const newDefaultValues = getDefaultValues$3(initialData);
    form.reset(newDefaultValues);
  }, [initialData, form]);
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
  const handleFormSubmit = useCallback$i(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultValues$3());
      } catch (error) {
        devError("Form submission error:", error);
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$i(() => {
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
    errors,
    isValid,
    isDirty,
    isSubmitting,
    touchedFields,
    dirtyFields,
    handleCancel,
    canSubmit: useMemo$c(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const React$9 = await importShared("react");
const getFieldError$5 = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const shouldShowError = isTouched || isDirty || hasValue || fieldError;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const NameField$1 = ({ control, errors, touchedFields, dirtyFields }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "name",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError$5(errors, touchedFields, dirtyFields, "name", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Va,
          {
            ...field,
            placeholder: CORPORATE_CARDS_PLACEHOLDERS.NAME,
            error: errorMessage,
            required: true,
            showCharacterCount: true,
            maxCharacters: CORPORATE_CARDS_VALIDATION.DESCRIPTION_MAX_LENGTH,
            enforceMaxLength: false
          }
        );
      }
    }
  );
};
const CurrencyField = ({ control, errors, touchedFields, dirtyFields, disabled }) => {
  const { data: currencies, isLoading: currenciesLoading } = useCurrencies();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "currencyCode",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError$5(errors, touchedFields, dirtyFields, "currencyCode", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ha,
          {
            placeholder: CORPORATE_CARDS_PLACEHOLDERS.CURRENCY,
            value: field.value ? { value: field.value, label: field.value } : null,
            onValueChange: (item) => field.onChange((item == null ? void 0 : item.value) ?? ""),
            buttonLabel: field.value ?? "",
            onSearch: async (query) => {
              return (currencies ?? []).reduce((acc, option) => {
                if (option.isoCode.toLowerCase().includes(query.toLowerCase()) || option.name.toLowerCase().includes(query.toLowerCase())) {
                  acc.push({ value: option.isoCode, label: option.name, data: option.symbol });
                }
                return acc;
              }, []);
            },
            renderItem: (item, highlight, isSelected) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight(item.value) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xxs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(item.label) })
            ] }),
            searchOnFocus: true,
            minSearchLength: 0,
            searchDelay: 0,
            dropdownClassName: "left-0 max-h-48 border-0 rounded-t-none",
            popoverClassName: "w-[128px]",
            disabled: currenciesLoading || disabled,
            error: errorMessage
          }
        );
      }
    }
  );
};
const StatementEndDateField = ({ control, errors, touchedFields, dirtyFields }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "statementEndDate",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError$5(errors, touchedFields, dirtyFields, "statementEndDate", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          "Day",
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            $a,
            {
              ...field,
              placeholder: CORPORATE_CARDS_PLACEHOLDERS.STATEMENT_END_DATE,
              value: field.value ? String(field.value).padStart(2, "0") : "",
              onValueChange: field.onChange,
              error: errorMessage,
              required: true,
              options: Array.from({ length: 31 }, (_, i) => ({ value: String(i + 1).padStart(2, "0"), label: String(i + 1).padStart(2, "0") }))
            }
          ) }),
          "of each month"
        ] });
      }
    }
  );
};
const ReconciliationDueField = ({ control, errors, touchedFields, dirtyFields }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "reconciliationDueDate",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError$5(errors, touchedFields, dirtyFields, "reconciliationDueDate", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Va,
            {
              ...field,
              placeholder: CORPORATE_CARDS_PLACEHOLDERS.RECONCILIATION_DUE,
              error: errorMessage,
              required: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "day(s) after statement end" })
        ] });
      }
    }
  );
};
const MasterAccountActionButtons = React$9.memo(({
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  isEditing
}) => {
  useSubmitOnEnter({ onSubmit, canSubmit, isFormLoading, isEditing });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        onMouseDown: (e) => {
          e.preventDefault();
          onSubmit();
        },
        "data-testid": "save-master-account-button",
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-green-500 hover:text-exp-green-800",
        disabled: !canSubmit || isFormLoading,
        title: isFormLoading ? CORPORATE_CARDS_MESSAGES.SAVING : canSubmit ? CORPORATE_CARDS_MESSAGES.SAVE_CHANGES : CORPORATE_CARDS_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        onMouseDown: (e) => {
          e.preventDefault();
          onCancel();
        },
        "data-testid": "cancel-master-account-button",
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-red-500 hover:text-exp-red-600",
        disabled: isFormLoading,
        title: CORPORATE_CARDS_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
      }
    )
  ] });
});
NameField$1.displayName = "NameField";
CurrencyField.displayName = "CurrencyField";
StatementEndDateField.displayName = "StatementEndDateField";
ReconciliationDueField.displayName = "ReconciliationDueDateField";
MasterAccountActionButtons.displayName = "MasterAccountActionButtons";
function createColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === "function" ? {
        ...column,
        accessorFn: accessor
      } : {
        ...column,
        accessorKey: accessor
      };
    },
    display: (column) => column,
    group: (column) => column
  };
}
const columnHelper$5 = createColumnHelper();
const createNameColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => columnHelper$5.accessor("name", {
  header: CORPORATE_CARDS_LABELS.MASTER_ACCOUNT,
  cell: (info) => {
    const rowData = info.row.original;
    const isEditing = editingRowId === rowData.id;
    const editContent = isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      NameField$1,
      {
        control: formControl,
        errors: formErrors,
        touchedFields,
        dirtyFields
      }
    ) }) }) : null;
    const statusConfig = getStatusConfig(rowData.active ? Status.ACTIVE : Status.INACTIVE);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: info,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: p("size-2 rounded-full", statusConfig.color), "data-testid": `status-indicator-${rowData.id}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: info.getValue() })
        ] }),
        editContent
      }
    );
  }
});
const CARDHOLDER_VALIDATION = {
  CARD_DIGITS_LENGTH: 4
};
const CARDHOLDER_PLACEHOLDERS = {
  NAME: "Enter employee name",
  CARD_DIGITS: "Enter the last 4 digits"
};
const CARDHOLDER_LABELS = {
  CARDHOLDER_NAME: "Cardholder Name",
  CARD_ENDING_DIGITS: "Card Ending Digits",
  AUTHORIZED_USERS: "Authorized Users",
  ACTIONS: "Actions"
};
const CARDHOLDER_MESSAGES = {
  LOADING_ERROR: "Failed to load cardholders. Please try again.",
  CREATE_ERROR: "Failed to add cardholder. Please try again.",
  UPDATE_ERROR: "Failed to update cardholder. Please try again.",
  TOGGLE_ERROR: "Failed to update cardholder status. Please try again.",
  ADD_CARDHOLDER: "Add Cardholder",
  SAVE_CHANGES: "Save changes",
  CANCEL_CHANGES: "Cancel changes (Esc)",
  SAVING: "Saving...",
  VALIDATION_ERROR: "Please fix validation errors",
  EMPLOYEE_ALREADY_ADDED: "Employee already added",
  CARD_DIGITS_DUPLICATE: "Card ending digits already exist",
  NO_RESULTS: "No results found",
  NO_EMPLOYEES_FOUND: "No employees found",
  CANNOT_EDIT_INACTIVE: "Cannot edit an inactive cardholder",
  MARK_ACTIVE: "Mark active",
  MARK_INACTIVE: "Mark inactive",
  SEARCH_PLACEHOLDER: "Search cardholder...",
  EMPTY_STATE_TITLE: "No cardholders added",
  EMPTY_STATE_DESCRIPTION: "Add cardholders to manage corporate card assignments for this master account.",
  MANAGE_CARDHOLDERS: "Manage cardholders",
  ACTIVE_CARDHOLDERS: (count) => `${count} active cardholder${count === 1 ? "" : "s"}`
};
const NEW_ROW_ID$2 = "new";
const columnHelper$4 = createColumnHelper();
const ActionsCell$2 = ({
  row,
  isEditing,
  isToggling,
  onEdit,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive,
  onSetAsInactive,
  onManageCardholders
}) => {
  const masterAccount = row.original;
  const rowId = masterAccount.id;
  const isActive = masterAccount.active === true;
  const masterAccountName = masterAccount.name;
  if (isEditing && onSubmit && onCancel && canSubmit !== void 0 && isFormLoading !== void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MasterAccountActionButtons,
      {
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        isEditing
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "ghost",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4 svg-color-inherit" }),
        iconPosition: "center",
        className: "p-1!",
        onClick: onEdit || (() => onRowEdit == null ? void 0 : onRowEdit(row)),
        "data-testid": `edit-button-${rowId}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Fr, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ir, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "ghost",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "ellipsis-vertical", className: "size-4 svg-color-inherit" }),
          iconPosition: "center",
          className: "p-1!",
          disabled: isToggling,
          onClick: (e) => e.stopPropagation(),
          "data-testid": `ellipsis-button-${rowId}`
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Dr,
        {
          side: "right",
          align: "start",
          sideOffset: 2,
          "data-testid": `popover-${rowId}`,
          className: "bg-exp-neutral-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Er,
              {
                onClick: () => onManageCardholders == null ? void 0 : onManageCardholders(Number(rowId), masterAccountName, masterAccount.currencyCode),
                "data-testid": `manage-cardholders-button-${rowId}`,
                className: "flex items-center gap-2 cursor-pointer",
                disabled: !isActive,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "person-add-alt", className: "size-4 svg-color-inherit text-exp-primary-blue-800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none whitespace-nowrap font-sans text-sm text-exp-primary-blue-800", children: CARDHOLDER_MESSAGES.MANAGE_CARDHOLDERS })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Er,
              {
                onClick: () => isActive ? onSetAsInactive == null ? void 0 : onSetAsInactive(rowId, masterAccountName) : onToggleActive == null ? void 0 : onToggleActive(rowId, isActive),
                "data-testid": `toggle-status-button-${rowId}`,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: `size-4 svg-color-inherit ${isActive ? "text-exp-neutral-70" : "text-trax-green-600"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: isActive ? "Mark inactive" : "Mark active" })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
};
const createActionsColumn$2 = ({
  editingRowId,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive,
  onSetAsInactive,
  onManageCardholders,
  togglingRowId
}) => columnHelper$4.display({
  id: "actions",
  header: CORPORATE_CARDS_LABELS.ACTIONS,
  cell: (info) => {
    const { row } = info;
    const masterAccount = row.original;
    const isEditing = editingRowId === masterAccount.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionsCell$2,
      {
        row,
        isEditing,
        isToggling: togglingRowId === masterAccount.id,
        onRowEdit,
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        onToggleActive,
        onSetAsInactive,
        onManageCardholders
      }
    );
  }
});
const columnHelper$3 = createColumnHelper();
const createCurrencyColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  isEditingExisting
}) => columnHelper$3.accessor("currencyCode", {
  header: CORPORATE_CARDS_LABELS.CURRENCY,
  cell: (info) => {
    const rowData = info.row.original;
    const isEditing = editingRowId === rowData.id;
    const isNewRow = !isEditingExisting;
    const canEdit = isEditing && formControl && formErrors && touchedFields && dirtyFields;
    const editContent = canEdit && (isNewRow ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CurrencyField,
      {
        control: formControl,
        errors: formErrors,
        touchedFields,
        dirtyFields,
        isEditing: false
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CurrencyField,
      {
        control: formControl,
        errors: formErrors,
        touchedFields,
        dirtyFields,
        isEditing: false,
        disabled: true
      }
    ) }));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: info,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: info.getValue() || "—" }),
        editContent
      }
    );
  }
});
const columnHelper$2 = createColumnHelper();
const createReconciliationDueColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => columnHelper$2.accessor("reconciliationDueDate", {
  header: CORPORATE_CARDS_LABELS.RECONCILIATION_DUE,
  cell: (info) => {
    const rowData = info.row.original;
    const isEditing = editingRowId === rowData.id;
    const editContent = isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReconciliationDueField,
      {
        control: formControl,
        errors: formErrors,
        touchedFields,
        dirtyFields
      }
    ) }) }) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: info,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
          info.getValue(),
          " day",
          info.getValue() !== "1" ? "s " : " ",
          " after statement end"
        ] }) }),
        editContent
      }
    );
  }
});
function getOrdinalSuffix(n) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  switch (v % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
const columnHelper$1 = createColumnHelper();
const createStatementEndDateColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => columnHelper$1.accessor("statementEndDate", {
  header: CORPORATE_CARDS_LABELS.STATEMENT_END_DATE,
  cell: (info) => {
    const rowData = info.row.original;
    const isEditing = editingRowId === rowData.id;
    const dateSuffix = getOrdinalSuffix(parseInt(info.getValue()));
    const editContent = isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatementEndDateField,
      {
        control: formControl,
        errors: formErrors,
        touchedFields,
        dirtyFields
      }
    ) }) }) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: info,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: `Day ${info.getValue()}${dateSuffix} of each month` }) }),
        editContent
      }
    );
  }
});
const columnHelper = createColumnHelper();
const createCardholdersColumn = ({
  editingRowId
}) => columnHelper.display({
  id: "cardholders",
  header: CORPORATE_CARDS_LABELS.CARDHOLDERS,
  cell: (info) => {
    const rowData = info.row.original;
    const isEditing = editingRowId === rowData.id;
    const isNew = rowData.id === NEW_ROW_ID$3;
    const cardholdersCount = rowData.cardholders ?? 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClickCapture: isNew ? (e) => e.stopPropagation() : void 0, children: !isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: info,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
          $r,
          {
            variant: "secondary",
            className: "px-2.5 py-1 rounded-lg bg-exp-neutral-40 hover:bg-exp-neutral-40 active:bg-exp-neutral-40 text-exp-neutral-700 text-xs font-medium",
            children: `${cardholdersCount} active`
          }
        ),
        editContent: null
      }
    ) : null });
  }
});
await importShared("react");
const SetAsInactiveDialog = ({
  open,
  onOpenChange,
  masterAccountId,
  masterAccountName
}) => {
  const { selectedCompany } = useCompanyStore();
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.shortName) || null;
  const updateMasterAccountMutation = useUpdateMasterAccount();
  const handleConfirm = async () => {
    if (!companyShortName) return;
    try {
      await updateMasterAccountMutation.mutateAsync({
        companyShortName,
        id: masterAccountId.toString(),
        data: { active: false }
      });
      onOpenChange(false);
      qs.success(`Successfully marked "${masterAccountName}" as inactive`, { duration: 3e3 });
    } catch (error) {
      devError("Failed to mark as inactive:", error);
      qs.error(`Failed to mark "${masterAccountName}" as inactive. Please try again`, { duration: 3e3 });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConfirmDialog,
    {
      open,
      onOpenChange,
      title: CORPORATE_CARDS_MESSAGES.SET_AS_INACTIVE_DIALOG_TITLE,
      description: `This will remove "${masterAccountName}" from payment method for associated cardholders and authorized users. Make sure outstanding reconciliations are complete before proceeding.`,
      confirmLabel: CORPORATE_CARDS_MESSAGES.SET_AS_INACTIVE_DIALOG_CONFIRM,
      cancelLabel: CORPORATE_CARDS_MESSAGES.SET_AS_INACTIVE_DIALOG_CANCEL,
      onConfirm: handleConfirm,
      isLoading: updateMasterAccountMutation.isPending,
      variant: "error"
    }
  );
};
const useCardholders = ({
  companyShortName,
  masterAccountId,
  enabled = true
}) => {
  return useQuery({
    queryKey: queryKeys.cardholders.list(companyShortName, masterAccountId),
    queryFn: async () => {
      const url = CONFIGURATION_ENDPOINTS.CARDHOLDERS(companyShortName, masterAccountId);
      devLog("API:", url);
      const response = await apiClient.get(url);
      return response.data;
    },
    enabled: enabled && !!companyShortName && masterAccountId !== null,
    staleTime: 2 * 60 * 1e3,
    gcTime: 5 * 60 * 1e3
  });
};
const useCreateCardholder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      companyShortName,
      masterAccountId,
      data
    }) => {
      const url = CONFIGURATION_ENDPOINTS.CARDHOLDER_CREATE(companyShortName, masterAccountId);
      const response = await apiClient.post(url, data);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.cardholders.list(variables.companyShortName, variables.masterAccountId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.masterAccounts.all()
      });
    }
  });
};
const useUpdateCardholder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      companyShortName,
      masterAccountId,
      data
    }) => {
      const url = CONFIGURATION_ENDPOINTS.CARDHOLDER_UPDATE(companyShortName, masterAccountId);
      const response = await apiClient.put(url, data);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.cardholders.list(variables.companyShortName, variables.masterAccountId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.masterAccounts.all()
      });
    }
  });
};
const checkEmployeeUniqueness = (userId, existingCardholders, currentId) => {
  return !existingCardholders.some(
    (ch) => ch.userId === userId && String(ch.id) !== currentId
  );
};
const checkCardDigitsUniqueness = (digits, existingCardholders, currentId) => {
  return !existingCardholders.some(
    (ch) => ch.cardLastDigits === digits && String(ch.id) !== currentId
  );
};
const cardholderSchema = object({
  employeeName: string().min(1, "Cardholder name is required"),
  userId: string().min(1, "Cardholder name is required"),
  cardLastDigits: string().min(1, "Card ending digits are required").length(CARDHOLDER_VALIDATION.CARD_DIGITS_LENGTH, `Must be exactly ${CARDHOLDER_VALIDATION.CARD_DIGITS_LENGTH} digits`).regex(/^\d+$/, "Only numbers allowed")
});
const createCardholderSchema = (existingCardholders, currentId) => {
  return cardholderSchema.refine(
    (data) => checkEmployeeUniqueness(data.userId, existingCardholders, currentId),
    {
      message: CARDHOLDER_MESSAGES.EMPLOYEE_ALREADY_ADDED,
      path: ["employeeName"]
    }
  ).refine(
    (data) => checkCardDigitsUniqueness(data.cardLastDigits, existingCardholders, currentId),
    {
      message: CARDHOLDER_MESSAGES.CARD_DIGITS_DUPLICATE,
      path: ["cardLastDigits"]
    }
  );
};
const getDefaultValues$2 = (initialData) => ({
  employeeName: (initialData == null ? void 0 : initialData.userFullname) ?? "",
  userId: (initialData == null ? void 0 : initialData.userId) ?? "",
  cardLastDigits: (initialData == null ? void 0 : initialData.cardLastDigits) ?? ""
});
const { useCallback: useCallback$h, useEffect: useEffect$5, useMemo: useMemo$b } = await importShared("react");
const useCardholderForm = ({
  initialData,
  existingCardholders = [],
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
} = {}) => {
  const initialDataId = initialData ? String(initialData.id) : void 0;
  const schema = useMemo$b(
    () => createCardholderSchema(existingCardholders, initialDataId),
    [existingCardholders, initialDataId]
  );
  const defaultValues = useMemo$b(
    () => getDefaultValues$2(initialData),
    [initialData]
  );
  const form = useForm({
    resolver: a(schema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  useEffect$5(() => {
    const newDefaultValues = getDefaultValues$2(initialData);
    form.reset(newDefaultValues);
  }, [initialData, form]);
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: {
      errors,
      isValid,
      isDirty,
      isSubmitting,
      touchedFields,
      dirtyFields
    }
  } = form;
  const handleFormSubmit = useCallback$h(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultValues$2());
      } catch (error) {
        devError("Cardholder form submission error:", error);
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$h(() => {
    reset();
    onCancel == null ? void 0 : onCancel();
  }, [reset, onCancel]);
  useEscapeHandler(isActive, handleCancel);
  return {
    form,
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
    handleCancel,
    canSubmit: useMemo$b(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$g, useState: useState$8 } = await importShared("react");
const useCardholderTableState = () => {
  const [state, setState] = useState$8({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  const handleStartAdd = useCallback$g(() => {
    setState({
      editingRowId: NEW_ROW_ID$2,
      isAddingNew: true,
      editingData: void 0
    });
  }, []);
  const handleRowEdit = useCallback$g((row) => {
    setState({
      editingRowId: String(row.original.id),
      isAddingNew: false,
      editingData: row.original
    });
  }, []);
  const handleFormCancel = useCallback$g(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, []);
  const resetState = useCallback$g(() => {
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
const { useCallback: useCallback$f } = await importShared("react");
const useCardholderOperations = (companyShortName, masterAccountId, onSuccess) => {
  var _a;
  const createMutation = useCreateCardholder();
  const updateMutation = useUpdateCardholder();
  const handleCreateCardholder = useCallback$f(async (data) => {
    if (!companyShortName || masterAccountId === null) return;
    try {
      await createMutation.mutateAsync({
        companyShortName,
        masterAccountId,
        data: {
          name: data.employeeName.trim(),
          userId: data.userId,
          masterAccountId,
          cardLastDigits: data.cardLastDigits
        }
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to create cardholder:", error);
      qs.error(CARDHOLDER_MESSAGES.CREATE_ERROR, { duration: 3e3 });
      throw error;
    }
  }, [companyShortName, masterAccountId, createMutation, onSuccess]);
  const handleUpdateCardholder = useCallback$f(async (id, data, originalData) => {
    if (!companyShortName || masterAccountId === null) return;
    const hasDigitsChange = originalData && data.cardLastDigits !== originalData.cardLastDigits;
    if (!hasDigitsChange) {
      onSuccess == null ? void 0 : onSuccess();
      return;
    }
    try {
      await updateMutation.mutateAsync({
        companyShortName,
        masterAccountId,
        data: { id: Number(id), cardLastDigits: data.cardLastDigits }
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to update cardholder:", error);
      qs.error(CARDHOLDER_MESSAGES.UPDATE_ERROR, { duration: 3e3 });
      throw error;
    }
  }, [companyShortName, masterAccountId, updateMutation, onSuccess]);
  const toggleActiveCardholder = useCallback$f(async (id, currentStatus) => {
    if (!companyShortName || masterAccountId === null || updateMutation.isPending) return;
    try {
      await updateMutation.mutateAsync({
        companyShortName,
        masterAccountId,
        data: {
          id,
          active: !currentStatus
        }
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to toggle cardholder status:", error);
      qs.error(CARDHOLDER_MESSAGES.TOGGLE_ERROR, { duration: 3e3 });
      throw error;
    }
  }, [companyShortName, masterAccountId, updateMutation, onSuccess]);
  return {
    handleCreateCardholder,
    handleUpdateCardholder,
    toggleActiveCardholder,
    isOperating: createMutation.isPending || updateMutation.isPending,
    togglingRowId: updateMutation.isPending ? (_a = updateMutation.variables) == null ? void 0 : _a.data.id : void 0
  };
};
const searchCardholderEmployees = async ({
  companyShortName,
  masterAccountId,
  search
}) => {
  const response = await apiClient.get(
    CONFIGURATION_ENDPOINTS.CARDHOLDER_SEARCH(companyShortName, masterAccountId),
    { params: { search } }
  );
  return response.data;
};
const React$8 = await importShared("react");
const { useCallback: useCallback$e, useMemo: useMemo$a } = React$8;
const getFieldError$4 = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const shouldShowError = isTouched || isDirty || hasValue || fieldError;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const CardholderNameField = ({
  control,
  errors,
  touchedFields,
  dirtyFields,
  isEditing,
  masterAccountId,
  onEmployeeSelect
}) => {
  const { selectedCompany } = useCompanyStore();
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.id) || null;
  const userId = useWatch({ control, name: "userId" });
  const employeeName = useWatch({ control, name: "employeeName" });
  const handleSearch = useCallback$e(async (query) => {
    if (!companyShortName || masterAccountId === null || query.trim().length < 2) return [];
    try {
      const employees = await searchCardholderEmployees({
        companyShortName,
        masterAccountId,
        search: query.trim()
      });
      return employees.filter((e) => !e.accountExists).map((e) => ({
        value: e.userGuid,
        label: e.name,
        data: e
      }));
    } catch (error) {
      devError("Failed to search employees:", error);
      return [];
    }
  }, [companyShortName, masterAccountId]);
  const handleValueChange = useCallback$e((item) => {
    if (item == null ? void 0 : item.data) {
      onEmployeeSelect == null ? void 0 : onEmployeeSelect(item.data);
    } else {
      onEmployeeSelect == null ? void 0 : onEmployeeSelect({ name: "", email: "", accountExists: false, userGuid: "" });
    }
  }, [onEmployeeSelect]);
  const errorMessage = getFieldError$4(errors, touchedFields, dirtyFields, "employeeName", employeeName);
  const currentValue = useMemo$a(
    () => userId && employeeName ? { value: userId, label: employeeName } : null,
    [userId, employeeName]
  );
  if (isEditing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "employeeName",
        control,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Va,
          {
            ...field,
            disabled: true,
            className: "bg-exp-neutral-20 cursor-not-allowed",
            "data-testid": "cardholder-name-input-disabled"
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    sn,
    {
      placeholder: CARDHOLDER_PLACEHOLDERS.NAME,
      value: currentValue,
      onValueChange: handleValueChange,
      onSearch: handleSearch,
      searchDelay: 300,
      minSearchLength: 2,
      noResultsText: CARDHOLDER_MESSAGES.NO_EMPLOYEES_FOUND,
      error: errorMessage,
      clearOnBlur: false,
      portal: true,
      "data-testid": "cardholder-name-search",
      renderItem: (item) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-exp-primary-blue-800", children: item.label }),
          ((_a = item.data) == null ? void 0 : _a.email) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-neutral-70", children: item.data.email })
        ] });
      }
    }
  );
};
const CardEndingDigitsField = ({
  control,
  errors,
  touchedFields,
  dirtyFields
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "cardLastDigits",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError$4(errors, touchedFields, dirtyFields, "cardLastDigits", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Va,
          {
            ...field,
            placeholder: CARDHOLDER_PLACEHOLDERS.CARD_DIGITS,
            error: errorMessage,
            required: true,
            maxLength: 4,
            onChange: (e) => {
              const value = e.target.value.replace(/\D/g, "");
              field.onChange(value);
            },
            inputMode: "numeric",
            "data-testid": "cardholder-card-digits-input"
          }
        );
      }
    }
  );
};
CardholderNameField.displayName = "CardholderNameField";
CardEndingDigitsField.displayName = "CardEndingDigitsField";
const createCardholderNameColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields,
  isEditingExisting,
  masterAccountId,
  onEmployeeSelect
}) => ({
  accessorKey: "userFullname",
  header: CARDHOLDER_LABELS.CARDHOLDER_NAME,
  size: 200,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === String(rowData.id);
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardholderNameField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields,
          masterAccountId,
          isEditing: isEditingExisting,
          onEmployeeSelect
        }
      ) });
    }
    const isActive = rowData.active;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: p(
                "size-2 rounded-full shrink-0",
                isActive ? "bg-trax-green-600" : "bg-exp-neutral-70"
              ),
              role: "img",
              "aria-label": isActive ? "Active" : "Inactive",
              "data-testid": `status-indicator-${rowData.id}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm truncate", children: rowData.userFullname })
        ] }),
        editContent: null
      }
    );
  }
});
const createCardEndingDigitsColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => ({
  accessorKey: "cardLastDigits",
  header: CARDHOLDER_LABELS.CARD_ENDING_DIGITS,
  size: 160,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === String(rowData.id);
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardEndingDigitsField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: rowData.cardLastDigits }),
        editContent: null
      }
    );
  }
});
const createAuthorizedUsersColumn = ({
  editingRowId
}) => ({
  id: "authorizedUsers",
  header: CARDHOLDER_LABELS.AUTHORIZED_USERS,
  size: 280,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === String(rowData.id);
    if (isEditing) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-70", children: "—" });
    }
    const authorizedUsers = rowData.authorizedUsers || [];
    if (authorizedUsers.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context: cellContext,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-70", children: "—" }),
          editContent: null
        }
      );
    }
    const sortedNames = authorizedUsers.map((u) => u.fullName).sort((a2, b) => a2.localeCompare(b)).join(", ");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm truncate block", title: sortedNames, children: sortedNames }),
        editContent: null
      }
    );
  }
});
const React$7 = await importShared("react");
const CardholderActionButtons = React$7.memo(({
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  isEditing
}) => {
  useSubmitOnEnter({ onSubmit, canSubmit, isFormLoading, isEditing });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        onMouseDown: (e) => {
          e.preventDefault();
          onSubmit();
        },
        "data-testid": "save-cardholder-button",
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-green-500 hover:text-exp-green-800",
        disabled: !canSubmit || isFormLoading,
        title: isFormLoading ? CARDHOLDER_MESSAGES.SAVING : canSubmit ? CARDHOLDER_MESSAGES.SAVE_CHANGES : CARDHOLDER_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        onMouseDown: (e) => {
          e.preventDefault();
          onCancel();
        },
        "data-testid": "cancel-cardholder-button",
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-red-500 hover:text-exp-red-600",
        disabled: isFormLoading,
        title: CARDHOLDER_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
      }
    )
  ] });
});
CardholderActionButtons.displayName = "CardholderActionButtons";
const ActionsCell$1 = ({
  row,
  isEditing,
  isToggling,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive
}) => {
  const cardholder = row.original;
  const isActive = cardholder.active;
  if (isEditing && onSubmit && onCancel && canSubmit !== void 0 && isFormLoading !== void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardholderActionButtons,
      {
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        isEditing
      }
    );
  }
  if (!isActive) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Br, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Gt, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(qt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "ghost",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4 svg-color-inherit" }),
            iconPosition: "center",
            className: "p-1! text-exp-neutral-50",
            disabled: true,
            "data-testid": `edit-button-${cardholder.id}`
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ut, { side: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: CARDHOLDER_MESSAGES.CANNOT_EDIT_INACTIVE }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Fr, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ir, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "ghost",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "ellipsis-vertical", className: "size-4 svg-color-inherit" }),
            iconPosition: "center",
            className: "p-1!",
            disabled: isToggling,
            onClick: (e) => e.stopPropagation(),
            "data-testid": `ellipsis-button-${cardholder.id}`
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dr,
          {
            side: "right",
            align: "start",
            sideOffset: 2,
            className: "w-[160px] bg-exp-neutral-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Er,
              {
                onClick: () => onToggleActive == null ? void 0 : onToggleActive(cardholder.id, isActive),
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: "size-4 svg-color-inherit text-trax-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: CARDHOLDER_MESSAGES.MARK_ACTIVE })
                ]
              }
            )
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "ghost",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4 svg-color-inherit" }),
        iconPosition: "center",
        className: "p-1!",
        onClick: () => onRowEdit == null ? void 0 : onRowEdit(row),
        "data-testid": `edit-button-${cardholder.id}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Fr, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ir, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "ghost",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "ellipsis-vertical", className: "size-4 svg-color-inherit" }),
          iconPosition: "center",
          className: "p-1!",
          disabled: isToggling,
          onClick: (e) => e.stopPropagation(),
          "data-testid": `ellipsis-button-${cardholder.id}`
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Dr,
        {
          side: "right",
          align: "start",
          sideOffset: 2,
          className: "w-[160px] bg-exp-neutral-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Er,
            {
              onClick: () => onToggleActive == null ? void 0 : onToggleActive(cardholder.id, isActive),
              className: "flex items-center gap-2 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: "size-4 svg-color-inherit text-exp-neutral-70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: CARDHOLDER_MESSAGES.MARK_INACTIVE })
              ]
            }
          )
        }
      )
    ] })
  ] });
};
const createCardholderActionsColumn = ({
  editingRowId,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive,
  togglingRowId
}) => ({
  id: "actions",
  header: CARDHOLDER_LABELS.ACTIONS,
  size: 100,
  cell: (context) => {
    const cellContext = context;
    const { row } = cellContext;
    const cardholder = row.original;
    const isEditing = editingRowId === String(cardholder.id);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionsCell$1,
      {
        row,
        isEditing,
        isToggling: togglingRowId === cardholder.id,
        onRowEdit,
        onSubmit,
        onCancel,
        canSubmit,
        isFormLoading,
        onToggleActive
      }
    );
  }
});
const React$6 = await importShared("react");
const { useCallback: useCallback$d, useMemo: useMemo$9, useState: useState$7 } = React$6;
const CardholderTable = ({
  cardholders,
  companyShortName,
  masterAccountId
}) => {
  const [searchQuery, setSearchQuery] = useState$7("");
  const {
    editingRowId,
    isAddingNew,
    editingData,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  } = useCardholderTableState();
  const {
    handleCreateCardholder,
    handleUpdateCardholder,
    toggleActiveCardholder,
    isOperating,
    togglingRowId
  } = useCardholderOperations(companyShortName, masterAccountId, resetState);
  const processedData = useMemo$9(() => {
    const sorted = [...cardholders].sort(
      (a2, b) => a2.userFullname.localeCompare(b.userFullname)
    );
    if (!searchQuery.trim()) return sorted;
    const query = searchQuery.trim().toLowerCase();
    return sorted.filter(
      (ch) => ch.userFullname.toLowerCase().includes(query)
    );
  }, [cardholders, searchQuery]);
  const activeCount = useMemo$9(
    () => cardholders.filter((ch) => ch.active).length,
    [cardholders]
  );
  const handleFormSubmit = useCallback$d(async (data) => {
    if (editingRowId === NEW_ROW_ID$2) {
      await handleCreateCardholder(data);
    } else if (editingRowId) {
      await handleUpdateCardholder(editingRowId, data, editingData);
    }
  }, [editingRowId, handleCreateCardholder, handleUpdateCardholder, editingData]);
  const formHookOptions = useMemo$9(() => ({
    initialData: editingData,
    existingCardholders: cardholders,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    isActive: editingRowId !== void 0
  }), [editingData, cardholders, handleFormSubmit, handleFormCancel, isOperating, editingRowId]);
  const formHook = useCardholderForm(formHookOptions);
  const handleEmployeeSelect = useCallback$d((employee) => {
    formHook.setValue("userId", employee.userGuid, { shouldValidate: true });
    formHook.setValue("employeeName", employee.name, { shouldValidate: true, shouldDirty: true });
  }, [formHook.setValue]);
  const stableControl = useMemo$9(() => formHook.control, [formHook.control]);
  const isEditingExisting = useMemo$9(
    () => editingRowId !== void 0 && editingRowId !== NEW_ROW_ID$2,
    [editingRowId]
  );
  const baseColumns = useMemo$9(() => [
    createCardholderNameColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields,
      isEditingExisting,
      masterAccountId,
      onEmployeeSelect: handleEmployeeSelect
    }),
    createCardEndingDigitsColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields
    }),
    createAuthorizedUsersColumn({ editingRowId })
  ], [
    editingRowId,
    stableControl,
    isEditingExisting,
    masterAccountId,
    handleEmployeeSelect,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields
  ]);
  const actionsColumn = useMemo$9(
    () => createCardholderActionsColumn({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onToggleActive: toggleActiveCardholder,
      togglingRowId
    }),
    [editingRowId, handleRowEdit, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading, toggleActiveCardholder, togglingRowId]
  );
  const columns = [...baseColumns, actionsColumn];
  const tableData = useMemo$9(() => {
    if (!isAddingNew) return processedData;
    return [...processedData, {
      id: NEW_ROW_ID$2,
      masterAccountId,
      userId: "",
      userFullname: "",
      cardLastDigits: "",
      active: true,
      authorizedUsers: []
    }];
  }, [isAddingNew, processedData, masterAccountId]);
  const isSearchActive = searchQuery.trim().length > 0;
  const noResults = isSearchActive && processedData.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    cardholders.length > 0 && !editingRowId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      rr,
      {
        placeholder: CARDHOLDER_MESSAGES.SEARCH_PLACEHOLDER,
        onSearch: setSearchQuery,
        debounceTime: 300,
        "data-testid": "cardholder-search-input"
      }
    ) }),
    noResults ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-exp-neutral-70 py-8 text-sm", children: CARDHOLDER_MESSAGES.NO_RESULTS }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xs,
      {
        columns,
        data: tableData,
        emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "credit-card", className: "size-9 text-exp-neutral-100" }),
            title: CARDHOLDER_MESSAGES.EMPTY_STATE_TITLE,
            description: CARDHOLDER_MESSAGES.EMPTY_STATE_DESCRIPTION,
            "data-testid": "cardholder-empty-state"
          }
        ),
        manualSorting: true,
        className: `border-exp-neutral-30 ${isAddingNew ? "rounded-b-lg!" : "border-b-0! rounded-b-none!"}`,
        editingRowId: editingRowId || (isAddingNew ? NEW_ROW_ID$2 : void 0),
        onRowEdit: handleRowEdit,
        onRowSave: () => {
        },
        onRowCancel: handleFormCancel,
        getRowId: (row) => String(row.id),
        styles: {
          bodyCell: "[&>div]:flex [&>div]:items-center",
          bodyRow: "data-[editing=true]:!bg-exp-primary-blue-50 data-[editing=true]:!border-exp-neutral-30 data-[editing=true]:[&>td]:!py-1 data-[editing=true]:[&>td>div]:min-h-[32px] data-[editing=true]:has-[.text-trax-red-500]:[&>td>div]:min-h-[56px] data-[editing=true]:has-[.text-trax-red-500]:[&>td>div]:!items-start"
        }
      }
    ),
    !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-1.5 border border-t-0.5! border-exp-neutral-30 rounded-b-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ue,
        {
          className: "border-0",
          variant: "secondary",
          onClick: handleStartAdd,
          disabled: isSearchActive || editingRowId !== void 0,
          "data-testid": "add-cardholder-button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
            CARDHOLDER_MESSAGES.ADD_CARDHOLDER
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-70", children: CARDHOLDER_MESSAGES.ACTIVE_CARDHOLDERS(activeCount) })
    ] })
  ] });
};
const React$5 = await importShared("react");
const { useEffect: useEffect$4, useState: useState$6 } = React$5;
const ManageCardholdersDialog = ({
  open,
  onOpenChange,
  masterAccountId,
  masterAccountName,
  currencyCode
}) => {
  const { selectedCompany } = useCompanyStore();
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.id) || null;
  const { data: cardholders, isLoading, error } = useCardholders({
    companyShortName,
    masterAccountId,
    enabled: open
  });
  const [tableKey, setTableKey] = useState$6(0);
  useEffect$4(() => {
    if (open) setTableKey((k) => k + 1);
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Qs, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Xa,
    {
      className: "max-w-4xl p-6",
      showCloseButton: false,
      onInteractOutside: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 focus:outline-none disabled:text-exp-neutral-70",
            "data-testid": "close-cardholders-dialog",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Za, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ja, { className: "flex items-center gap-2 text-base font-semibold text-exp-primary-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "person-add-alt", className: "size-4 text-exp-primary-blue-800" }) }),
          masterAccountName,
          " (",
          currencyCode,
          ")"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-6" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-exp-red-500 py-4", children: CARDHOLDER_MESSAGES.LOADING_ERROR }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardholderTable,
          {
            cardholders: cardholders ?? [],
            companyShortName,
            masterAccountId
          },
          tableKey
        ) })
      ]
    }
  ) });
};
const React$4 = await importShared("react");
const { useCallback: useCallback$c, useMemo: useMemo$8, useState: useState$5 } = React$4;
const MasterAccountTable = ({ className }) => {
  const { selectedCompany } = useCompanyStore();
  const { data: masterAccounts, isLoading, isFetching, error } = useMasterAccounts((selectedCompany == null ? void 0 : selectedCompany.id) || null);
  const isDataReady = !!selectedCompany && !isLoading && !isFetching;
  const [setAsInactiveDialog, setSetAsInactiveDialog] = useState$5({
    isOpen: false,
    masterAccountId: null,
    masterAccountName: ""
  });
  const [cardholdersDialog, setCardholdersDialog] = useState$5({
    isOpen: false,
    masterAccountId: null,
    masterAccountName: "",
    currencyCode: ""
  });
  const {
    editingRowId,
    isAddingNew,
    editingData,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  } = useMasterAccountTableState();
  const {
    handleCreateMasterAccount,
    handleUpdateMasterAccount,
    toggleActiveMasterAccount,
    isOperating,
    togglingRowId
  } = useMasterAccountOperations(selectedCompany == null ? void 0 : selectedCompany.id, resetState);
  const processedData = useMemo$8(() => {
    const dataArray = Array.isArray(masterAccounts) ? masterAccounts : [];
    return sortByCreatedDate(dataArray, "asc");
  }, [masterAccounts]);
  const handleFormSubmit = useCallback$c(async (data) => {
    if (editingRowId === NEW_ROW_ID$3) {
      await handleCreateMasterAccount(data);
    } else if (editingRowId) {
      await handleUpdateMasterAccount(editingRowId, data, editingData);
    }
  }, [editingRowId, handleCreateMasterAccount, handleUpdateMasterAccount, editingData]);
  const handleSetAsInactive = useCallback$c((masterAccountId, masterAccountName) => {
    setSetAsInactiveDialog({
      isOpen: true,
      masterAccountId: parseInt(masterAccountId, 10),
      masterAccountName
    });
  }, []);
  const handleManageCardholders = useCallback$c((masterAccountId, masterAccountName, currencyCode) => {
    setCardholdersDialog({
      isOpen: true,
      masterAccountId,
      masterAccountName,
      currencyCode
    });
  }, []);
  const handleCloseCardholdersDialog = useCallback$c((open) => {
    if (!open) {
      setCardholdersDialog({
        isOpen: false,
        masterAccountId: null,
        masterAccountName: "",
        currencyCode: ""
      });
    }
  }, []);
  const handleCloseSetAsInactiveDialog = useCallback$c((open) => {
    if (!open) {
      setSetAsInactiveDialog({
        isOpen: false,
        masterAccountId: null,
        masterAccountName: ""
      });
    }
  }, []);
  const formHookOptions = useMemo$8(() => ({
    initialData: editingData,
    existingData: processedData,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    isActive: editingRowId !== void 0
  }), [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, editingRowId]);
  const formHook = useMasterAccountForm(formHookOptions);
  const stableControl = useMemo$8(() => formHook.control, [formHook.control]);
  const isEditingExisting = useMemo$8(
    () => editingRowId !== void 0 && editingRowId !== NEW_ROW_ID$3,
    [editingRowId]
  );
  const baseColumns = useMemo$8(() => [
    createNameColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields
    }),
    createCurrencyColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields,
      isEditingExisting
    }),
    createStatementEndDateColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields
    }),
    createReconciliationDueColumn({
      editingRowId,
      formControl: stableControl,
      formErrors: formHook.errors,
      touchedFields: formHook.touchedFields,
      dirtyFields: formHook.dirtyFields
    }),
    createCardholdersColumn({
      editingRowId
    })
  ], [
    editingRowId,
    stableControl,
    isEditingExisting,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields
  ]);
  const actionsColumn = useMemo$8(
    () => createActionsColumn$2({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onToggleActive: toggleActiveMasterAccount,
      onSetAsInactive: handleSetAsInactive,
      onManageCardholders: handleManageCardholders,
      togglingRowId
    }),
    [editingRowId, handleRowEdit, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading, toggleActiveMasterAccount, handleSetAsInactive, handleManageCardholders, togglingRowId]
  );
  const columns = [...baseColumns, actionsColumn];
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "credit-card", className: "size-9 text-exp-neutral-100" }),
      title: CORPORATE_CARDS_MESSAGES.EMPTY_STATE_TITLE,
      description: CORPORATE_CARDS_MESSAGES.EMPTY_STATE_DESCRIPTION,
      "data-testid": "corporate-card-empty-state",
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { className: "px-4", variant: "primary", onClick: handleStartAdd, "data-testid": "add-corporate-card-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4" }),
        CORPORATE_CARDS_MESSAGES.ADD_MASTER_ACCOUNT
      ] })
    }
  );
  const loadingState = useMemo$8(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-3 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-8 text-exp-primary-blue-600" }) }), []);
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: CORPORATE_CARDS_MESSAGES.LOADING_ERROR });
  }
  const tableData = isAddingNew ? [...processedData, {
    id: NEW_ROW_ID$3,
    name: "",
    currencyCode: "",
    statementEndDate: "",
    reconciliationDueDate: "",
    cardholders: "0",
    active: true,
    created: /* @__PURE__ */ new Date()
  }] : processedData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xs,
      {
        columns,
        data: tableData,
        emptyState,
        isLoading: !isDataReady,
        loadingState,
        manualSorting: true,
        className: "border-exp-neutral-30 border-b-0! rounded-b-none!",
        editingRowId: editingRowId || (isAddingNew ? NEW_ROW_ID$3 : void 0),
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
    (processedData.length > 0 || isAddingNew) && !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border border-t-0.5! border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        className: "border-0",
        variant: "secondary",
        onClick: handleStartAdd,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
          CORPORATE_CARDS_MESSAGES.ADD_MASTER_ACCOUNT
        ]
      }
    ) }),
    setAsInactiveDialog.masterAccountId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SetAsInactiveDialog,
      {
        open: setAsInactiveDialog.isOpen,
        onOpenChange: handleCloseSetAsInactiveDialog,
        masterAccountId: setAsInactiveDialog.masterAccountId,
        masterAccountName: setAsInactiveDialog.masterAccountName
      }
    ),
    cardholdersDialog.masterAccountId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ManageCardholdersDialog,
      {
        open: cardholdersDialog.isOpen,
        onOpenChange: handleCloseCardholdersDialog,
        masterAccountId: cardholdersDialog.masterAccountId,
        masterAccountName: cardholdersDialog.masterAccountName,
        currencyCode: cardholdersDialog.currencyCode
      }
    )
  ] });
};
const BUSINESS_PURPOSE_PLACEHOLDERS = {
  NAME: "Enter business purpose name",
  DESCRIPTION: "Add description for internal reference"
};
const BUSINESS_PURPOSE_LABELS = {
  BUSINESS_PURPOSE: "Business Purpose",
  DESCRIPTION: "Description (optional)",
  ACTIONS: "Actions"
};
const BUSINESS_PURPOSE_MESSAGES = {
  PAGE_TITLE: "Business Purpose",
  PAGE_DESCRIPTION: "Define dropdown list for business purpose selection",
  EMPTY_STATE_TITLE: "No business purpose list defined",
  EMPTY_STATE_DESCRIPTION: "Create dropdown options for business purposes that users can select when submitting",
  ADD_BUSINESS_PURPOSE: "Add New",
  NO_COMPANY_SELECTED: "Please select a company to view business purposes",
  LOADING_ERROR: "Failed to load business purposes. Please try again.",
  SAVING: "Saving...",
  SAVE_CHANGES: "Save changes",
  CANCEL_CHANGES: "Cancel changes",
  VALIDATION_ERROR: "Please fix validation errors"
};
const BUSINESS_PURPOSE_VALIDATION = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 45,
  DESCRIPTION_MAX_LENGTH: 400
};
const NEW_ROW_ID$1 = "new";
const checkNameUniqueness$1 = (name, existingData, currentId) => {
  return !existingData.some(
    (item) => item.businessPurpose.toLowerCase() === name.toLowerCase() && item.id !== currentId
  );
};
const businessPurposeSchema = object({
  businessPurpose: string().min(1, "Business purpose name is required").min(BUSINESS_PURPOSE_VALIDATION.NAME_MIN_LENGTH, `Business purpose name must be at least ${BUSINESS_PURPOSE_VALIDATION.NAME_MIN_LENGTH} characters`).max(BUSINESS_PURPOSE_VALIDATION.NAME_MAX_LENGTH, `Business purpose name must be ${BUSINESS_PURPOSE_VALIDATION.NAME_MAX_LENGTH} characters or less`).trim(),
  description: string().max(BUSINESS_PURPOSE_VALIDATION.DESCRIPTION_MAX_LENGTH, `Description must be ${BUSINESS_PURPOSE_VALIDATION.DESCRIPTION_MAX_LENGTH} characters or less`).optional().or(literal(""))
});
const createBusinessPurposeSchema = (existingData, currentId) => {
  return businessPurposeSchema.refine(
    (data) => {
      return checkNameUniqueness$1(data.businessPurpose, existingData, currentId);
    },
    {
      message: "This business purpose name already exists",
      path: ["businessPurpose"]
    }
  );
};
const getDefaultValues$1 = (initialData) => ({
  businessPurpose: (initialData == null ? void 0 : initialData.businessPurpose) ?? "",
  description: (initialData == null ? void 0 : initialData.description) ?? ""
});
const { useCallback: useCallback$b, useEffect: useEffect$3, useMemo: useMemo$7 } = await importShared("react");
const useBusinessPurposeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
} = {}) => {
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$7(
    () => createBusinessPurposeSchema(existingData, initialDataId),
    [existingData, initialDataId]
  );
  const defaultValues = useMemo$7(
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
  useEffect$3(() => {
    const newDefaultValues = getDefaultValues$1(initialData);
    form.reset(newDefaultValues);
  }, [initialData, form]);
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
  const handleFormSubmit = useCallback$b(
    async (data) => {
      try {
        await (onSubmit == null ? void 0 : onSubmit(data));
        reset(getDefaultValues$1());
      } catch (error) {
        devError("Form submission error:", error);
      }
    },
    [onSubmit, reset]
  );
  const handleCancel = useCallback$b(() => {
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
    errors,
    isValid,
    isDirty,
    isSubmitting,
    touchedFields,
    dirtyFields,
    handleCancel,
    canSubmit: useMemo$7(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$a, useEffect: useEffect$2, useState: useState$4 } = await importShared("react");
const useBusinessPurposeTableState = (companyId) => {
  const [state, setState] = useState$4({
    editingRowId: void 0,
    isAddingNew: false,
    editingData: void 0
  });
  useEffect$2(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, [companyId]);
  const handleStartAdd = useCallback$a(() => {
    setState((prev) => ({
      ...prev,
      isAddingNew: true,
      editingRowId: NEW_ROW_ID$1,
      editingData: void 0
    }));
  }, []);
  const handleRowEdit = useCallback$a((row) => {
    setState((prev) => ({
      ...prev,
      editingRowId: row.original.id,
      editingData: row.original,
      isAddingNew: false
    }));
  }, []);
  const handleFormCancel = useCallback$a(() => {
    setState({
      editingRowId: void 0,
      editingData: void 0,
      isAddingNew: false
    });
  }, []);
  const resetState = handleFormCancel;
  return {
    ...state,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  };
};
const { useCallback: useCallback$9 } = await importShared("react");
const useBusinessPurposeOperations = (companyShortName, onSuccess) => {
  const createMutation = useCreateBusinessPurpose();
  const updateMutation = useUpdateBusinessPurpose();
  const toggleMutation = useToggleBusinessPurposeStatus();
  const handleCreate = useCallback$9(async (data) => {
    if (!companyShortName) return;
    try {
      const newBP = {
        businessPurpose: data.businessPurpose.trim(),
        description: data.description || void 0,
        isActive: true,
        created: /* @__PURE__ */ new Date()
      };
      await createMutation.mutateAsync({ companyShortName, data: newBP });
      onSuccess == null ? void 0 : onSuccess();
    } catch (err) {
      console.error("Failed to create business purpose:", err);
      throw err;
    }
  }, [companyShortName, createMutation, onSuccess]);
  const handleUpdate = useCallback$9(async (id, data, originalData) => {
    if (!companyShortName) return;
    try {
      const updatedBP = {};
      let hasChange = false;
      if (!originalData || data.businessPurpose.trim() !== originalData.businessPurpose) {
        updatedBP.businessPurpose = data.businessPurpose.trim();
        hasChange = true;
      }
      if (!originalData || (data.description || "") !== (originalData.description || "")) {
        updatedBP.description = data.description || void 0;
        hasChange = true;
      }
      if (hasChange) {
        updatedBP.modified = /* @__PURE__ */ new Date();
        await updateMutation.mutateAsync({ id, companyShortName, data: updatedBP });
        onSuccess == null ? void 0 : onSuccess();
      }
    } catch (err) {
      console.error("Failed to update business purpose:", err);
      throw err;
    }
  }, [companyShortName, updateMutation, onSuccess]);
  const toggleActive = useCallback$9(async (id, currentStatus) => {
    if (!companyShortName || toggleMutation.isPending) return;
    try {
      await toggleMutation.mutateAsync({ id, companyShortName, isActive: !currentStatus });
      onSuccess == null ? void 0 : onSuccess();
    } catch (err) {
      console.error("Failed to toggle business purpose status:", err);
      throw err;
    }
  }, [companyShortName, toggleMutation, onSuccess]);
  return {
    handleCreate,
    handleUpdate,
    toggleActive,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isOperating: createMutation.isPending || updateMutation.isPending || toggleMutation.isPending
  };
};
const React$3 = await importShared("react");
const getFieldError$3 = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const isRequiredField = fieldName === "businessPurpose";
  const shouldShowError = isTouched || isDirty || hasValue || isRequiredField && fieldError;
  return shouldShowError && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
const BusinessPurposeField = ({ control, errors, touchedFields, dirtyFields }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "businessPurpose",
      control,
      render: ({ field }) => {
        const errorMessage = getFieldError$3(errors, touchedFields, dirtyFields, "businessPurpose", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Va,
          {
            ...field,
            placeholder: BUSINESS_PURPOSE_PLACEHOLDERS.NAME,
            error: errorMessage,
            required: true,
            showCharacterCount: true,
            maxCharacters: BUSINESS_PURPOSE_VALIDATION.NAME_MAX_LENGTH,
            enforceMaxLength: false
          }
        );
      }
    }
  );
};
const DescriptionField$1 = ({ control, errors, touchedFields, dirtyFields }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Controller,
  {
    name: "description",
    control,
    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Va,
      {
        ...field,
        placeholder: BUSINESS_PURPOSE_PLACEHOLDERS.DESCRIPTION,
        error: getFieldError$3(errors, touchedFields, dirtyFields, "description", field.value),
        maxCharacters: BUSINESS_PURPOSE_VALIDATION.DESCRIPTION_MAX_LENGTH,
        enforceMaxLength: false
      }
    )
  }
);
const BusinessPurposeActionButtons = React$3.memo(({
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  isEditing
}) => {
  useSubmitOnEnter({ onSubmit, canSubmit, isFormLoading, isEditing });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", "data-testid": "action-buttons", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        "data-testid": "save-business-purpose-button",
        onMouseDown: (e) => {
          e.preventDefault();
          onSubmit();
        },
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-green-500 hover:text-exp-green-800",
        disabled: !canSubmit || isFormLoading,
        title: isFormLoading ? BUSINESS_PURPOSE_MESSAGES.SAVING : canSubmit ? BUSINESS_PURPOSE_MESSAGES.SAVE_CHANGES : BUSINESS_PURPOSE_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        "data-testid": "cancel-business-purpose-button",
        onMouseDown: (e) => {
          e.preventDefault();
          onCancel();
        },
        variant: "ghost",
        size: "sm",
        className: "p-1 text-exp-red-500 hover:text-exp-red-600",
        disabled: isFormLoading,
        title: BUSINESS_PURPOSE_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
      }
    )
  ] });
});
BusinessPurposeActionButtons.displayName = "BusinessPurposeActionButtons";
BusinessPurposeField.displayName = "BusinessPurposeField";
DescriptionField$1.displayName = "DescriptionField";
const createBusinessPurposeColumn = ({
  editingRowId,
  formControl,
  formErrors,
  touchedFields,
  dirtyFields
}) => ({
  accessorKey: "businessPurpose",
  header: BUSINESS_PURPOSE_LABELS.BUSINESS_PURPOSE,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        BusinessPurposeField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ) }) });
    }
    const statusConfig = getStatusConfig(rowData.isActive ? Status.ACTIVE : Status.INACTIVE);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
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
  header: BUSINESS_PURPOSE_LABELS.DESCRIPTION,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DescriptionField$1,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ) }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: cellContext.getValue() || "—" }),
        editContent: null
      }
    );
  }
});
const createActionsColumn$1 = ({
  editingRowId,
  onRowEdit,
  onSubmit,
  onCancel,
  canSubmit,
  isFormLoading,
  onToggleActive
}) => ({
  id: "actions",
  header: BUSINESS_PURPOSE_LABELS.ACTIONS,
  cell: (context) => {
    const cellContext = context;
    const rowId = cellContext.row.original.id;
    const isEditing = editingRowId === rowId;
    const isActive = cellContext.row.original.isActive ?? false;
    if (isEditing && onSubmit && onCancel && canSubmit !== void 0 && isFormLoading !== void 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        BusinessPurposeActionButtons,
        {
          onSubmit,
          onCancel,
          canSubmit,
          isFormLoading,
          isEditing
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "ghost",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4 svg-color-inherit" }),
          iconPosition: "center",
          className: "p-1!",
          onClick: cellContext.onEdit || (() => onRowEdit == null ? void 0 : onRowEdit(cellContext.row)),
          "data-testid": `edit-button-${rowId}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Fr, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ir, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "ghost",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "ellipsis-vertical", className: "size-4 svg-color-inherit" }),
            iconPosition: "center",
            className: "p-1!",
            onClick: (e) => e.stopPropagation(),
            "data-testid": `ellipsis-button-${rowId}`
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dr,
          {
            side: "right",
            align: "start",
            sideOffset: 2,
            "data-testid": `popover-${rowId}`,
            className: "w-[160px] bg-exp-neutral-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Er,
              {
                onClick: () => onToggleActive == null ? void 0 : onToggleActive(rowId, isActive),
                "data-testid": `action-button-${rowId}`,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: `size-4 svg-color-inherit ${isActive ? "text-exp-neutral-70" : "text-trax-green-600"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: isActive ? "Mark inactive" : "Mark active" })
                ]
              }
            )
          }
        )
      ] })
    ] });
  }
});
const React$2 = await importShared("react");
const { useCallback: useCallback$8, useMemo: useMemo$6 } = React$2;
const BusinessPurposeTable = ({ className }) => {
  const { selectedCompany } = useCompanyStore();
  const { data: businessPurposes, isLoading, error } = useBusinessPurposes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
  const {
    editingRowId,
    isAddingNew,
    editingData,
    handleStartAdd,
    handleRowEdit,
    handleFormCancel,
    resetState
  } = useBusinessPurposeTableState(selectedCompany == null ? void 0 : selectedCompany.id);
  const {
    handleCreate,
    handleUpdate,
    toggleActive,
    isOperating
  } = useBusinessPurposeOperations(selectedCompany == null ? void 0 : selectedCompany.id, resetState);
  const processedData = useMemo$6(() => {
    const dataArray = Array.isArray(businessPurposes) ? businessPurposes : [];
    return sortByCreatedDate(dataArray, "asc");
  }, [businessPurposes]);
  const handleFormSubmit = useCallback$8(async (data) => {
    if (editingRowId === NEW_ROW_ID$1) {
      await handleCreate(data);
    } else if (editingRowId) {
      await handleUpdate(editingRowId, data, editingData);
    }
  }, [editingRowId, editingData, handleCreate, handleUpdate]);
  const formHookOptions = useMemo$6(() => ({
    initialData: editingData,
    existingData: processedData,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    isActive: editingRowId !== void 0
  }), [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, editingRowId]);
  const formHook = useBusinessPurposeForm(formHookOptions);
  const stableControl = useMemo$6(() => formHook.control, [formHook.control]);
  const baseColumns = useMemo$6(() => [
    createBusinessPurposeColumn({
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
    })
  ], [
    editingRowId,
    stableControl,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields
  ]);
  const actionsColumn = useMemo$6(
    () => createActionsColumn$1({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onToggleActive: toggleActive
    }),
    [editingRowId, handleRowEdit, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading, toggleActive]
  );
  const columns = [...baseColumns, actionsColumn];
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "briefcase", className: "size-9 text-exp-neutral-100" }),
      title: BUSINESS_PURPOSE_MESSAGES.EMPTY_STATE_TITLE,
      description: BUSINESS_PURPOSE_MESSAGES.EMPTY_STATE_DESCRIPTION,
      "data-testid": "business-purpose-empty-state",
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { className: "px-4", variant: "primary", onClick: handleStartAdd, "data-testid": "add-business-purpose-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4" }),
        BUSINESS_PURPOSE_MESSAGES.ADD_BUSINESS_PURPOSE
      ] })
    }
  );
  if (!selectedCompany) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500", children: BUSINESS_PURPOSE_MESSAGES.NO_COMPANY_SELECTED });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: BUSINESS_PURPOSE_MESSAGES.LOADING_ERROR });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, {}) });
  }
  const tableData = isAddingNew ? [...processedData, {
    id: NEW_ROW_ID$1,
    businessPurpose: "",
    description: "",
    isActive: true
  }] : processedData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xs,
      {
        columns,
        data: tableData,
        emptyState,
        manualSorting: true,
        className: p(tableData.length === 0 || isAddingNew ? "border-exp-neutral-30 border-b" : "border-b-0! rounded-b-none!"),
        editingRowId: editingRowId || (isAddingNew ? NEW_ROW_ID$1 : void 0),
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
    (processedData.length > 0 || isAddingNew) && !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border border-t-0.5! border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        className: "border-0",
        variant: "secondary",
        onClick: handleStartAdd,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
          BUSINESS_PURPOSE_MESSAGES.ADD_BUSINESS_PURPOSE
        ]
      }
    ) })
  ] });
};
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
  PAGE_TITLE: "Mileage Types",
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
  ASSIGN_EMPLOYEES_CANCEL: "Cancel",
  // Set as default dialog
  SET_AS_DEFAULT_TITLE: "Set default mileage type",
  SET_AS_DEFAULT_MESSAGE: "as the default for employees without special mileage types? This will apply to all future submissions.",
  SET_AS_DEFAULT_CONFIRM: "Confirm",
  SET_AS_DEFAULT_CANCEL: "Cancel",
  SET_AS_DEFAULT_SUCCESS: "Default mileage type has been updated",
  SET_AS_DEFAULT_FAILURE: "Failed to update default mileage type. Please try again."
};
const MILEAGE_TYPE_VALIDATION = {
  NAME_MAX_LENGTH: 45,
  DESCRIPTION_MAX_LENGTH: 400,
  MILEAGE_RATE_MIN: 0.01,
  MILEAGE_RATE_MAX: 10
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
        effectiveFrom: data.effectiveFrom,
        status: "active"
      };
      await createExpenseTypeMutation.mutateAsync({
        companyShortName: companyId,
        data: expenseTypeData
      });
      onSuccess == null ? void 0 : onSuccess();
    } catch (error) {
      devError("Failed to create mileage type:", error);
      qs.error("Failed to create mileage type. Please try again", { duration: 3e3 });
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
      qs.error("Failed to update mileage type. Please try again", { duration: 3e3 });
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
      qs.error("Failed to update status. Please try again", { duration: 3e3 });
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
const NEW_RATE_ROW_ID = "new";
const NEW_RATE_NUMERIC_ID = -1;
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
function getMileageRateRowId(id) {
  return id === NEW_RATE_NUMERIC_ID ? NEW_RATE_ROW_ID : String(id);
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
  const resetState = handleFormCancel;
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
              Ya,
              {
                prefix: DEFAULT_CURRENCY_SYMBOL,
                suffix: `per ${unit}`,
                placeholder: MILEAGE_RATE_PLACEHOLDERS.RATE,
                textAlign: "right",
                value: field.value,
                onChange: createDecimalChangeHandler(field.onChange),
                onBlur: field.onBlur,
                error: errorMessage
              }
            );
          }
        }
      ) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-900", children: formatRateCompact(rowData.rate, unit) }),
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
              $a,
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
      Ws,
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
      Ws,
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
    $r,
    {
      variant: "outline",
      className: `rounded-8! border-0 ${config.bgColor} ${config.textColor} ${className}`,
      children: config.label
    }
  );
};
const createStatusColumn = ({
  editingRowId,
  isExpenseTypeActive
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
    const displayStatus = isExpenseTypeActive === false ? MileageRateStatus.INACTIVE : rowData.status;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(MileageRateStatusBadge, { status: displayStatus }),
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
          Ue,
          {
            variant: "ghost",
            size: "sm",
            className: "p-1 text-exp-green-500 hover:text-exp-green-800",
            onClick: onSubmit,
            disabled: !canSubmit || isFormLoading,
            children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) });
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
      Ue,
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
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Gt, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(qt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex", children: deleteButton }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ut,
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
    createStatusColumn({ editingRowId, isExpenseTypeActive })
  ], [
    editingRowId,
    stableControl,
    formHook.errors,
    formHook.touchedFields,
    formHook.dirtyFields,
    unit,
    availableMonthOptions,
    isExpenseTypeActive
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
    Ue,
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
      Xs,
      {
        columns,
        data: tableData,
        emptyState,
        manualSorting: true,
        className: "border-exp-neutral-30 border-b-0! rounded-b-none!",
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
    !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border border-t-0.5! border-exp-neutral-30 rounded-b-lg", children: canAddNewRate ? addNewRateButton : /* @__PURE__ */ jsxRuntimeExports.jsxs(Gt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(qt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: addNewRateButton }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ut,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Qs, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Xa,
    {
      className: "max-w-3xl p-6",
      showCloseButton: false,
      onInteractOutside: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ei, { className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Za, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ja, { className: "flex items-center gap-2 text-base font-semibold text-exp-primary-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "calculate", className: "size-4 text-exp-primary-blue-800" }) }),
          expenseTypeName
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: isFetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-6" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-exp-red-500 py-4", children: MILEAGE_RATE_MESSAGES.LOADING_ERROR }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.shortName) || null;
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
      qs.error("Failed to save. Please try again", { duration: 3e3 });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Qs, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Xa,
    {
      className: "max-w-lg p-6",
      showCloseButton: false,
      onInteractOutside: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ei, { className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Za, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ja, { className: "flex items-center gap-2 text-base font-semibold text-exp-primary-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "person-add-alt", className: "size-4 text-exp-primary-blue-800" }) }),
          expenseTypeName
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollContainerRef, className: "mt-4 h-[400px] overflow-y-auto exp-custom-scrollbar border border-exp-neutral-30 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-exp-neutral-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            rr,
            {
              placeholder: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_SEARCH_PLACEHOLDER,
              onSearch: handleSearch,
              debounceTime: 300
            }
          ) }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-6" }) }) : noResults ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-start py-2.5 px-6 text-sm text-exp-neutral-300 italic", children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_NO_RESULTS }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            (displayAssigned.length > 0 || !search) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center gap-1 px-4 py-1.5 bg-exp-primary-blue-50 border-b border-exp-neutral-30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-exp-primary-blue-600", children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_ASSIGNED }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  $r,
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
            isFetchingNextPage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) })
          ] })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-center text-sm text-exp-red-500", children: "Failed to load employees. Please try again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "soft",
              onClick: () => onOpenChange(false),
              disabled: assignMutation.isPending,
              children: MILEAGE_TYPE_MESSAGES.ASSIGN_EMPLOYEES_CANCEL
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "primary",
              onClick: handleSave,
              disabled: !hasChanges || assignMutation.isPending,
              children: assignMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }),
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
        ps,
        {
          checked,
          onCheckedChange: () => onToggle(employee.user_guid)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-primary-blue-800 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedName, { name: employee.full_name, search }) })
    ]
  }
);
const useSetAsDefault = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyShortName, expenseTypeId }) => {
      const updateData = {
        id: expenseTypeId,
        isDefault: true
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
await importShared("react");
const SetAsDefaultDialog = ({
  open,
  onOpenChange,
  expenseTypeId,
  expenseTypeName
}) => {
  const { selectedCompany } = useCompanyStore();
  const companyShortName = (selectedCompany == null ? void 0 : selectedCompany.shortName) || null;
  const setDefaultMutation = useSetAsDefault();
  const handleConfirm = async () => {
    if (!companyShortName) return;
    try {
      await setDefaultMutation.mutateAsync({
        companyShortName,
        expenseTypeId
      });
      onOpenChange(false);
      qs.success(MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT_SUCCESS, { duration: 3e3 });
    } catch (error) {
      devError("Failed to set as default:", error);
      qs.error(MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT_FAILURE, { duration: 3e3 });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Qs, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Xa,
    {
      className: "flex flex-col max-w-lg p-6 gap-4",
      showCloseButton: false,
      onInteractOutside: (e) => e.preventDefault(),
      onOpenAutoFocus: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { className: "text-base font-semibold text-exp-neutral-900", children: MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT_TITLE }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(es, { className: "text-sm font-normal text-exp-grey-600", children: `Set "${expenseTypeName}" ${MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT_MESSAGE}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "soft",
              onClick: () => onOpenChange(false),
              disabled: setDefaultMutation.isPending,
              children: MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT_CANCEL
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "primary",
              onClick: handleConfirm,
              disabled: setDefaultMutation.isPending,
              children: setDefaultMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }),
                MILEAGE_TYPE_MESSAGES.SAVING
              ] }) : MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT_CONFIRM
            }
          )
        ] })
      ]
    }
  ) });
};
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
      Va,
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
      Va,
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
              Ya,
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
                  const filtered = filterDecimalInput(e.target.value);
                  if (filtered === null) return;
                  rateField.onChange(filtered ? parseFloat(filtered) : 0);
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
          $a,
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
          $a,
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
      Ue,
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
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
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
    const statusConfig = getStatusConfig(rowData.status);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: p("size-2 rounded-full", statusConfig.color),
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
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-200", children: description || "-" }),
        editContent: null
      }
    );
  }
});
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
    const displayText = formatRateCompact(rate, unit);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: rate ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          $r,
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Gt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(qt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5 text-exp-neutral-100 cursor-help" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ut, { side: "top", className: "max-w-xs", children: MILEAGE_TYPE_MESSAGES.EFFECTIVE_FROM_TOOLTIP })
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
      Ws,
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
      Ws,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: displayText }),
        editContent: null
      }
    );
  }
});
const DefaultBadge = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Gt, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(qt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    $r,
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
    Ut,
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
    const isNew = rowData.id === NEW_ROW_ID;
    const isDefault = rowData.isDefault;
    const employeeCount = rowData.employeeCount ?? 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClickCapture: isNew ? (e) => e.stopPropagation() : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context: cellContext,
        viewContent: isDefault ? /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultBadge, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          $r,
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
    ) });
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
      Ue,
      {
        variant: "ghost",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4 svg-color-inherit" }),
        iconPosition: "center",
        className: "p-1!",
        onClick: onEdit || (() => onRowEdit == null ? void 0 : onRowEdit(row)),
        "data-testid": `edit-button-${rowId}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Fr, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ir, { asChild: true, disabled: isToggling, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
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
        Dr,
        {
          side: "right",
          align: "start",
          sideOffset: 2,
          "data-testid": `popover-${rowId}`,
          className: "w-[180px] bg-exp-neutral-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Er,
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
              Er,
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
              Er,
              {
                onClick: () => onSetAsDefault == null ? void 0 : onSetAsDefault(rowId, expenseTypeName),
                disabled: disableSetAsDefault,
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "done-all", className: "size-4 text-exp-primary-blue-800 svg-color-inherit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none font-sans text-sm text-exp-primary-blue-800", children: MILEAGE_TYPE_MESSAGES.SET_AS_DEFAULT })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Er,
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
  onSetAsDefault,
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
        onSetAsDefault
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
  const [setAsDefaultDialog, setSetAsDefaultDialog] = useState({
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
  const handleSetAsDefault = useCallback((expenseTypeId, expenseTypeName) => {
    setSetAsDefaultDialog({
      isOpen: true,
      expenseTypeId: parseInt(expenseTypeId, 10),
      expenseTypeName
    });
  }, []);
  const handleCloseSetAsDefaultDialog = useCallback((open) => {
    if (!open) {
      setSetAsDefaultDialog({
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
    onSetAsDefault: handleSetAsDefault,
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
    handleSetAsDefault,
    togglingRowId
  ]);
  const columns = [...baseColumns, actionsColumn];
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "featured-play-list", className: "size-9 text-exp-neutral-100" }),
      title: MILEAGE_TYPE_MESSAGES.EMPTY_STATE_TITLE,
      description: MILEAGE_TYPE_MESSAGES.EMPTY_STATE_DESCRIPTION,
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { className: "px-4", variant: "primary", onClick: handleStartAdd, "data-testid": "add-mileage-type-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4" }),
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, {}) });
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
      Xs,
      {
        columns,
        data: tableData,
        emptyState,
        manualSorting: true,
        className: "border-exp-neutral-30 border-b-0! rounded-b-none!",
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
    processedData.length > 0 && !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border border-t-0.5! border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
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
    ),
    setAsDefaultDialog.expenseTypeId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SetAsDefaultDialog,
      {
        open: setAsDefaultDialog.isOpen,
        onOpenChange: handleCloseSetAsDefaultDialog,
        expenseTypeId: setAsDefaultDialog.expenseTypeId,
        expenseTypeName: setAsDefaultDialog.expenseTypeName
      }
    )
  ] });
};
export {
  BUSINESS_PURPOSE_MESSAGES as B,
  CORPORATE_CARDS_MESSAGES as C,
  EXPENSE_TYPE_MESSAGES as E,
  MILEAGE_TYPE_MESSAGES as M,
  ExpenseTypeTable as a,
  MileageTypeTable as b,
  BusinessPurposeTable as c,
  MasterAccountTable as d
};

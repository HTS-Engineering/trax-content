import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { u as useCompanyStore } from "./factory-BBIQIvZN.js";
import { k as Ma, a as Pa, l as qs, p, e as Pr, P as Pe, I as In, C as Cr, S as Sr, R as Rr, N as Nr, j as js } from "./index.es-Diw2MuFT.js";
import { E as EmptyState } from "./EmptyState-BG8ydf6E.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import { E as EXPENSE_TYPE_VALIDATION, a as EXPENSE_TYPE_PLACEHOLDERS, b as EXPENSE_TYPE_LABELS, c as ExpenseTypeStatus, d as EXPENSE_TYPE_MESSAGES, u as useNonMileageTypes, e as useExpenseTypeTableState, N as NEW_ROW_ID } from "./useExpenseTypeTableState-DOmCILCT.js";
import { o as object, _ as _enum, s as string, l as literal, c as useForm, d as a, C as Controller } from "./zod-PpMdyx4R.js";
import { d as devError } from "./index-CvL7PQqL.js";
import "./use-debounced-callback-PXxY8p58.js";
import { b as useEscapeHandler } from "./use-prevent-page-reload-B7rtDGfR.js";
import { E as ExpenseFormType, b as useCreateExpenseType, c as useUpdateExpenseType, d as useToggleExpenseTypeStatus, e as useFormTypeOptions } from "./api-UaCw6TRY.js";
import { u as useSubmitOnEnter, s as sortByCreatedDate } from "./date-sorting.utils-C-8w7PK1.js";
const checkNameUniqueness = (name, existingData, currentId) => {
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
  // Cast is safe because ExpenseTypeTable only shows STANDARD/ENTERTAINMENT types (not MILEAGE)
  formType: (initialData == null ? void 0 : initialData.formType) ?? ""
});
const transformFormTypeOptions = (formTypes) => formTypes.map((option) => ({ value: option.value, label: option.label }));
const { useCallback: useCallback$2, useEffect, useMemo: useMemo$1 } = await importShared("react");
const useExpenseTypeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  isActive = false
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
  useEffect(() => {
    const newDefaultValues = getDefaultValues(initialData);
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
  const handleFormSubmit = useCallback$2(
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
  const handleCancel = useCallback$2(() => {
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
    canSubmit: useMemo$1(() => {
      return isValid && !isSubmitting && !isLoading && (initialData ? isDirty : true);
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$1 } = await importShared("react");
const useExpenseTypeOperations = (companyId, onSuccess) => {
  var _a;
  const createExpenseTypeMutation = useCreateExpenseType();
  const updateExpenseTypeMutation = useUpdateExpenseType();
  const toggleExpenseTypeMutation = useToggleExpenseTypeStatus();
  const handleCreateExpenseType = useCallback$1(async (data) => {
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
  const handleUpdateExpenseType = useCallback$1(async (id, data, originalData) => {
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
  const toggleActiveExpenseType = useCallback$1(async (id, currentStatus) => {
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
const React$2 = await importShared("react");
const getFieldError = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
  const fieldError = errors == null ? void 0 : errors[fieldName];
  const isTouched = touchedFields == null ? void 0 : touchedFields[fieldName];
  const isDirty = dirtyFields == null ? void 0 : dirtyFields[fieldName];
  const hasValue = fieldValue !== void 0 && fieldValue !== "" && fieldValue !== null;
  const isRequiredField = fieldName === "name" || fieldName === "formType";
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
          Ma,
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
      Ma,
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
        Pa,
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
NameField.displayName = "NameField";
DescriptionField.displayName = "DescriptionField";
FormTypeField.displayName = "FormTypeField";
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
      qs,
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
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: cellContext.getValue() || "—" }),
        editContent: isEditing && formControl && formErrors && touchedFields && dirtyFields ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DescriptionField,
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: "outline", className: "text-trax-blue-600 bg-trax-primary-blue-50", children: EXPENSE_TYPE_LABELS.STANDARD });
    case "entertainment":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: "outline", className: "text-trax-green-800 bg-trax-green-100", children: EXPENSE_TYPE_LABELS.ENTERTAINMENT });
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
      qs,
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
        size: "sm",
        className: "p-1 text-exp-green-500 hover:text-exp-green-800",
        disabled: !canSubmit || isFormLoading,
        title: isFormLoading ? EXPENSE_TYPE_MESSAGES.SAVING : canSubmit ? EXPENSE_TYPE_MESSAGES.SAVE_CHANGES : EXPENSE_TYPE_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" })
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
        size: "sm",
        className: "p-1 text-exp-red-500 hover:text-exp-red-600",
        disabled: isFormLoading,
        title: EXPENSE_TYPE_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
      }
    )
  ] });
});
ExpenseTypeActionButtons.displayName = "ExpenseTypeActionButtons";
const ActionsCell = ({
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
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "ellipsis-vertical", className: "size-4 svg-color-inherit" }),
          iconPosition: "center",
          className: "p-1!",
          disabled: isToggling,
          onClick: (e) => e.stopPropagation(),
          "data-testid": `ellipsis-button-${rowId}`
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Rr,
        {
          side: "right",
          align: "start",
          sideOffset: 2,
          "data-testid": `popover-${rowId}`,
          className: "w-[160px] bg-exp-neutral-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Nr,
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
const createActionsColumn = ({
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
      ActionsCell,
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
const React = await importShared("react");
const { useCallback, useMemo } = React;
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
  }, [editingRowId, handleCreateExpenseType, handleUpdateExpenseType, editingData]);
  const formHookOptions = useMemo(() => ({
    initialData: editingData,
    existingData: processedData,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    isActive: editingRowId !== void 0
  }), [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, editingRowId]);
  const formHook = useExpenseTypeForm(formHookOptions);
  const stableControl = useMemo(() => formHook.control, [formHook.control]);
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
  const actionsColumn = useMemo(
    () => createActionsColumn({
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
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pe, { variant: "primary", onClick: handleStartAdd, "data-testid": "add-expense-type-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, {}) });
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
    (processedData.length > 0 || isAddingNew) && !isAddingNew && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border !border-t-0.5 border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Pe,
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
const ExpensesType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "layout-dashboard", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: EXPENSE_TYPE_MESSAGES.PAGE_TITLE }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: EXPENSE_TYPE_MESSAGES.PAGE_DESCRIPTION })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTypeTable, {}) })
  ] });
};
export {
  ExpensesType as default
};

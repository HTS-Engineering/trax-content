import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { u as useCreateBusinessPurpose, a as useUpdateBusinessPurpose, b as useToggleBusinessPurposeStatus, c as useBusinessPurposes } from "./api-CY3InQAE.js";
import { u as useCompanyStore } from "./query-keys-BOqauSXC.js";
import { l as Ma, P as Pe, n as qs, p, x as Ir, y as Dr, z as Er, I as In, j as js } from "./index.es-BBFLzT0B.js";
import { E as EmptyState } from "./EmptyState-D-Cgqm3F.js";
import { I as Icon } from "./Icon-iZGOgNHC.js";
import { o as object, s as string, l as literal, c as useForm, d as a, C as Controller } from "./zod-PpMdyx4R.js";
import { u as useSubmitOnEnter, C as Check, X, P as Pencil, E as EllipsisVertical, s as sortByCreatedDate } from "./date-sorting.utils-BYAoE8w2.js";
const NEW_ROW_ID = "new";
const BUSINESS_PURPOSE_LABELS = {
  BUSINESS_PURPOSE: "Business Purpose",
  DESCRIPTION: "Description (optional)",
  ACTIONS: "Actions"
};
const BUSINESS_PURPOSE_MESSAGES = {
  PAGE_TITLE: "Business Purposes",
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
const BUSINESS_PURPOSE_PLACEHOLDERS = {
  NAME: "Enter business purpose name",
  DESCRIPTION: "Add description for internal reference"
};
const BUSINESS_PURPOSE_VALIDATION = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 45,
  DESCRIPTION_MAX_LENGTH: 400
};
const checkNameUniqueness = (name, existingData, currentId) => {
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
      return checkNameUniqueness(data.businessPurpose, existingData, currentId);
    },
    {
      message: "This business purpose name already exists",
      path: ["businessPurpose"]
    }
  );
};
const getDefaultValues = (initialData) => ({
  businessPurpose: (initialData == null ? void 0 : initialData.businessPurpose) ?? "",
  description: (initialData == null ? void 0 : initialData.description) ?? ""
});
const { useCallback: useCallback$3, useEffect: useEffect$1, useMemo: useMemo$1 } = await importShared("react");
const useBusinessPurposeForm = ({
  initialData,
  existingData = [],
  onSubmit,
  onCancel,
  isLoading = false,
  companyId
} = {}) => {
  const initialDataId = initialData == null ? void 0 : initialData.id;
  const schema = useMemo$1(
    () => createBusinessPurposeSchema(existingData, initialDataId),
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
    }, [isValid, isSubmitting, isLoading, isDirty, initialData]),
    isFormLoading: isLoading || isSubmitting
  };
};
const { useCallback: useCallback$2, useEffect, useState } = await importShared("react");
const useBusinessPurposeTableState = (companyId) => {
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
      editingData: row.original,
      isAddingNew: false
    }));
  }, []);
  const handleFormCancel = useCallback$2(() => {
    setState({
      editingRowId: void 0,
      editingData: void 0,
      isAddingNew: false
    });
  }, []);
  const resetState = useCallback$2(() => {
    setState({
      editingRowId: void 0,
      editingData: void 0,
      isAddingNew: false
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
const useBusinessPurposeOperations = (companyShortName, onSuccess) => {
  const createMutation = useCreateBusinessPurpose();
  const updateMutation = useUpdateBusinessPurpose();
  const toggleMutation = useToggleBusinessPurposeStatus();
  const handleCreate = useCallback$1(async (data) => {
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
  const handleUpdate = useCallback$1(async (id, data, originalData) => {
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
  const toggleActive = useCallback$1(async (id, currentStatus) => {
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
const React$1 = await importShared("react");
const getFieldError = (errors, touchedFields, dirtyFields, fieldName, fieldValue) => {
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
        const errorMessage = getFieldError(errors, touchedFields, dirtyFields, "businessPurpose", field.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ma,
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
const DescriptionField = ({ control, errors, touchedFields, dirtyFields }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Controller,
  {
    name: "description",
    control,
    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ma,
      {
        ...field,
        placeholder: BUSINESS_PURPOSE_PLACEHOLDERS.DESCRIPTION,
        error: getFieldError(errors, touchedFields, dirtyFields, "description", field.value),
        maxCharacters: BUSINESS_PURPOSE_VALIDATION.DESCRIPTION_MAX_LENGTH,
        enforceMaxLength: false
      }
    )
  }
);
const BusinessPurposeActionButtons = React$1.memo(({
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
        "data-testid": "save-business-purpose-button",
        onMouseDown: (e) => {
          e.preventDefault();
          onSubmit();
        },
        variant: "ghost",
        disabled: !canSubmit || isFormLoading,
        className: `${canSubmit && !isFormLoading ? "hover:bg-green-50" : "opacity-50 cursor-not-allowed"}`,
        title: isFormLoading ? BUSINESS_PURPOSE_MESSAGES.SAVING : canSubmit ? BUSINESS_PURPOSE_MESSAGES.SAVE_CHANGES : BUSINESS_PURPOSE_MESSAGES.VALIDATION_ERROR,
        children: isFormLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `w-4 h-4 ${canSubmit ? "text-green-600" : "text-gray-400"}` })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe,
      {
        "data-testid": "cancel-business-purpose-button",
        onMouseDown: (e) => {
          e.preventDefault();
          onCancel();
        },
        variant: "ghost",
        disabled: isFormLoading,
        className: "hover:bg-exp-red-100",
        title: BUSINESS_PURPOSE_MESSAGES.CANCEL_CHANGES,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-exp-red-500" })
      }
    )
  ] });
});
BusinessPurposeActionButtons.displayName = "BusinessPurposeActionButtons";
BusinessPurposeField.displayName = "BusinessPurposeField";
DescriptionField.displayName = "DescriptionField";
const getStatusConfig = (status) => {
  const configs = {
    active: { color: "bg-trax-green-600", label: "Active" },
    inactive: { color: "bg-gray-400", label: "Inactive" }
  };
  return configs[status] || configs.active;
};
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        BusinessPurposeField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ) }) });
    }
    const statusConfig = getStatusConfig(rowData.isActive ? "active" : "inactive");
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
  header: BUSINESS_PURPOSE_LABELS.DESCRIPTION,
  cell: (context) => {
    const cellContext = context;
    const rowData = cellContext.row.original;
    const isEditing = editingRowId === rowData.id;
    if (isEditing && formControl && formErrors && touchedFields && dirtyFields) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DescriptionField,
        {
          control: formControl,
          errors: formErrors,
          touchedFields,
          dirtyFields
        }
      ) }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context: cellContext,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: cellContext.getValue() || "—" }),
        editContent: null
      }
    );
  }
});
const createActionsColumn = ({
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
        Pe,
        {
          className: "w-fit flex items-center justify-start px-3 py-2 hover:bg-gray-100 transition-colors rounded-lg",
          variant: "ghost",
          onClick: cellContext.onEdit || (() => onRowEdit == null ? void 0 : onRowEdit(cellContext.row)),
          "data-testid": `edit-button-${rowId}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Ir, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pe,
          {
            className: "cursor-pointer w-fit outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0",
            variant: "ghost",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4", "data-testid": `ellipsis-button-${rowId}` })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Er,
          {
            side: "right",
            align: "start",
            sideOffset: 2,
            className: "w-[148px] h-[48px] flex items-center gap-2 py-2 px-3 bg-exp-neutral-0 rounded-lg border shadow-lg",
            "data-testid": `popover-${rowId}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-1 py-1 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  onClick: () => onToggleActive == null ? void 0 : onToggleActive(rowId, isActive),
                  className: `inline-flex items-center justify-center cursor-pointer 
                  transition-transform duration-200 ease-in-out
                  ${isActive ? "text-exp-neutral-70 hover:scale-110 hover:opacity-80" : "text-[var(--color-trax-green-600)] hover:scale-110 hover:opacity-90"}
                  focus:outline-none`,
                  "data-testid": `action-button-${rowId}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "action", className: "size-5 -ml-[2px]" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2select-none font-sans text-sm text-[var(--color-exp-primary-blue-800)]", children: isActive ? "Mark inactive" : "Mark active" })
            ] })
          }
        )
      ] })
    ] });
  }
});
const React = await importShared("react");
const { useCallback, useMemo } = React;
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
  const processedData = useMemo(() => {
    const dataArray = Array.isArray(businessPurposes) ? businessPurposes : [];
    return sortByCreatedDate(dataArray, "asc");
  }, [businessPurposes]);
  const handleFormSubmit = useCallback(async (data) => {
    if (editingRowId === NEW_ROW_ID) {
      await handleCreate(data);
    } else if (editingRowId) {
      await handleUpdate(editingRowId, data, editingData);
    }
  }, [editingRowId, editingData, handleCreate, handleUpdate]);
  const formHookOptions = useMemo(() => ({
    initialData: editingData,
    existingData: processedData,
    onSubmit: handleFormSubmit,
    onCancel: handleFormCancel,
    isLoading: isOperating,
    companyId: selectedCompany == null ? void 0 : selectedCompany.id
  }), [editingData, processedData, handleFormSubmit, handleFormCancel, isOperating, selectedCompany == null ? void 0 : selectedCompany.id]);
  const formHook = useBusinessPurposeForm(formHookOptions);
  const stableControl = useMemo(() => formHook.control, [formHook.control]);
  const baseColumns = useMemo(() => [
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
  const actionsColumn = useMemo(
    () => createActionsColumn({
      editingRowId,
      onRowEdit: handleRowEdit,
      onSubmit: () => formHook.handleSubmit(),
      onCancel: () => formHook.handleCancel(),
      canSubmit: formHook.canSubmit,
      isFormLoading: formHook.isFormLoading,
      onToggleActive: toggleActive
    }),
    [editingRowId, handleRowEdit, formHook.handleSubmit, formHook.handleCancel, formHook.canSubmit, formHook.isFormLoading]
  );
  const columns = [...baseColumns, actionsColumn];
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "briefcase", className: "size-9 text-exp-neutral-100" }),
      title: BUSINESS_PURPOSE_MESSAGES.EMPTY_STATE_TITLE,
      description: BUSINESS_PURPOSE_MESSAGES.EMPTY_STATE_DESCRIPTION,
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pe, { variant: "primary", onClick: handleStartAdd, "data-testid": "add-business-purpose-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add", className: "size-4 mr-2" }),
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(In, {}) });
  }
  const tableData = isAddingNew ? [...processedData, {
    id: NEW_ROW_ID,
    businessPurpose: "",
    description: "",
    isActive: true
  }] : processedData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      js,
      {
        columns,
        data: tableData,
        emptyState,
        className: p(tableData.length === 0 || isAddingNew ? "border-exp-neutral-30 border-b" : "!border-b-0 !rounded-b-none"),
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
          BUSINESS_PURPOSE_MESSAGES.ADD_BUSINESS_PURPOSE
        ]
      }
    ) })
  ] });
};
const BusinessPurpose = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "briefcase", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: BUSINESS_PURPOSE_MESSAGES.PAGE_TITLE }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: BUSINESS_PURPOSE_MESSAGES.PAGE_DESCRIPTION })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessPurposeTable, {}) })
  ] });
};
export {
  BusinessPurpose as default
};

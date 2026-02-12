import { t as useQueryClient, q as queryKeys } from "./factory-CGKVLqg3.js";
import { a as useExpenseTypes, F as FormTypeId } from "./api-BJnc1Fn1.js";
import { E as ExpenseTypeScope } from "./api-CLF4KpVH.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
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
var ExpenseTypeStatus = /* @__PURE__ */ ((ExpenseTypeStatus2) => {
  ExpenseTypeStatus2["ACTIVE"] = "active";
  ExpenseTypeStatus2["INACTIVE"] = "inactive";
  return ExpenseTypeStatus2;
})(ExpenseTypeStatus || {});
const EXPENSE_TYPE_VALIDATION = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 45,
  DESCRIPTION_MAX_LENGTH: 400
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
  ENTERTAINMENT: "Entertainment",
  ACTIVE: "Active",
  INACTIVE: "Inactive"
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
const NEW_ROW_ID = "new";
const { useCallback, useEffect, useState } = await importShared("react");
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
  const handleStartAdd = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isAddingNew: true,
      editingRowId: NEW_ROW_ID,
      editingData: void 0
    }));
  }, []);
  const handleRowEdit = useCallback((row) => {
    setState((prev) => ({
      ...prev,
      editingRowId: row.original.id,
      editingData: row.original,
      isAddingNew: false
    }));
  }, []);
  const handleFormCancel = useCallback(() => {
    setState({
      editingRowId: void 0,
      isAddingNew: false,
      editingData: void 0
    });
  }, []);
  const resetState = useCallback(() => {
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
export {
  EXPENSE_TYPE_VALIDATION as E,
  NEW_ROW_ID as N,
  EXPENSE_TYPE_PLACEHOLDERS as a,
  EXPENSE_TYPE_LABELS as b,
  ExpenseTypeStatus as c,
  EXPENSE_TYPE_MESSAGES as d,
  useExpenseTypeTableState as e,
  useMileageTypes as f,
  useNonMileageTypes as u
};

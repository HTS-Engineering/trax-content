import { a as useExpenseTypes } from "./api-BwNn7YPa.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
const MILEAGE_FORM_TYPE_ID = 2;
const STANDARD_FORM_TYPE_ID = 1;
const ENTERTAINMENT_FORM_TYPE_ID = 3;
const NON_MILEAGE_FORM_TYPE_IDS = [STANDARD_FORM_TYPE_ID, ENTERTAINMENT_FORM_TYPE_ID];
const useMileageTypes = (companyShortName, includeInactive = false) => {
  return useExpenseTypes(companyShortName, {
    includeInactive,
    formTypeIds: [MILEAGE_FORM_TYPE_ID]
  });
};
const useNonMileageTypes = (companyShortName, includeInactive = false) => {
  return useExpenseTypes(companyShortName, {
    includeInactive,
    formTypeIds: NON_MILEAGE_FORM_TYPE_IDS
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
      isAddingNew: false,
      editingData: void 0
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
  MILEAGE_FORM_TYPE_ID as M,
  NEW_ROW_ID as N,
  EXPENSE_TYPE_PLACEHOLDERS as a,
  EXPENSE_TYPE_LABELS as b,
  ExpenseTypeStatus as c,
  EXPENSE_TYPE_MESSAGES as d,
  useExpenseTypeTableState as e,
  useMileageTypes as f,
  useNonMileageTypes as u
};

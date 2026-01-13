const EXPENSE_ENDPOINTS = {
  // Expense operations
  SUBMIT_EXPENSE: "/api/v1.0/expenses",
  SAVE_DRAFT: "/api/v1.0/expenses/drafts",
  GET_DRAFT: (id) => `/api/v1.0/expenses/drafts/${id}`,
  UPDATE_DRAFT: (id) => `/api/v1.0/expenses/drafts/${id}`,
  DELETE_DRAFT: (id) => `/api/v1.0/expenses/drafts/${id}`,
  GET_EXPENSES: "/api/v1.0/expenses",
  GET_EXPENSE: (id) => `/api/v1.0/expenses/${id}`,
  GET_EXPENSES_LIST: "/api/v1.0/expenses-list",
  // Global unified endpoint - returns any expense item (regular, mileage trip, mileage period)
  GET_EXPENSE_ITEM: (id) => `/api/v1.0/expense-item/${id}`
};
export {
  EXPENSE_ENDPOINTS as E
};

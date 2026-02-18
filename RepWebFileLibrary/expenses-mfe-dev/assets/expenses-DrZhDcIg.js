const EXPENSE_ENDPOINTS = {
  // Draft operations (require company)
  SAVE_DRAFT: (company) => `/api/v1.0/expense-forms/${company}/drafts`,
  GET_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}`,
  UPDATE_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}`,
  DELETE_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}`,
  SUBMIT_DRAFT: (company, id) => `/api/v1.0/expense-forms/${company}/drafts/${id}/submit`,
  // List operations
  GET_EXPENSES: (company) => `/api/v1.0/expense-forms/${company}`,
  GET_EXPENSES_LIST: "/api/v1.0/expenses-list",
  // Global unified endpoint - returns any expense item (regular, mileage trip, mileage period)
  GET_EXPENSE_ITEM: (id) => `/api/v1.0/expense-item/${id}`,
  // Payment methods
  GET_PAYMENT_METHODS: (company) => `/api/v1.0/expense-forms/${company}/payment-methods`
};
export {
  EXPENSE_ENDPOINTS as E
};

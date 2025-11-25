const FILE_ENDPOINTS = {
  // Receipt file operations
  RECEIPTS_UPLOAD: "/files/receipts",
  RECEIPTS_DELETE: (id) => `/files/receipts/${id}`,
  RECEIPTS_GET: (id) => `/files/receipts/${id}`,
  RECEIPTS_DOWNLOAD: (id) => `/files/receipts/${id}/download`,
  // Supporting file operations
  SUPPORTING_UPLOAD: "/files/supporting",
  SUPPORTING_DELETE: (id) => `/files/supporting/${id}`,
  SUPPORTING_GET: (id) => `/files/supporting/${id}`,
  // Cloud storage (mock)
  STORAGE_GET: (filename) => `https://storage.expensesapp.com/receipts/${filename}`
};
const CONFIGURATION_ENDPOINTS = {
  BASE: "/api/v1.0/configuration",
  // Logical Companies
  LOGICAL_COMPANIES: "/api/v1.0/configuration/logical-companies",
  LOGICAL_COMPANY_BY_NAME: (shortName) => `/api/v1.0/configuration/logical-companies/${encodeURIComponent(shortName)}`,
  // Expense Types
  EXPENSE_TYPES: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-types`,
  EXPENSE_TYPE_BY_ID: (companyShortName, id) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-types/${id}`,
  EXPENSE_TYPE_CREATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type`,
  EXPENSE_TYPE_UPDATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type`
};
const BUSINESS_PURPOSE_ENDPOINTS = {
  // Business Purposes
  BUSINESS_PURPOSES: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes`,
  BUSINESS_PURPOSE_BY_ID: (companyShortName, id) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes/${id}`,
  BUSINESS_PURPOSE_CREATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`,
  BUSINESS_PURPOSE_UPDATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`
};
const EXPENSE_ENDPOINTS = {
  // Expense operations
  SUBMIT_EXPENSE: "/api/v1.0/expenses",
  SAVE_DRAFT: "/api/v1.0/expenses/drafts",
  GET_DRAFT: (id) => `/api/v1.0/expenses/drafts/${id}`,
  UPDATE_DRAFT: (id) => `/api/v1.0/expenses/drafts/${id}`,
  DELETE_DRAFT: (id) => `/api/v1.0/expenses/drafts/${id}`,
  GET_EXPENSES: "/api/v1.0/expenses",
  GET_EXPENSE: (id) => `/api/v1.0/expenses/${id}`,
  GET_EXPENSES_LIST: "/api/v1.0/expenses-list"
};
const MILEAGE_ENDPOINTS = {
  // Mileage trip operations
  SUBMIT_MILEAGE: "/api/v1.0/mileage-trips",
  SAVE_DRAFT: "/api/v1.0/mileage-trips/drafts",
  GET_DRAFT: (id) => `/api/v1.0/mileage-trips/drafts/${id}`,
  UPDATE_DRAFT: (id) => `/api/v1.0/mileage-trips/drafts/${id}`,
  DELETE_DRAFT: (id) => `/api/v1.0/mileage-trips/drafts/${id}`,
  GET_MILEAGE_TRIPS: "/api/v1.0/mileage-trips",
  GET_MILEAGE_TRIP: (id) => `/api/v1.0/mileage-trips/${id}`
};
const ENDPOINT_PATTERNS = {
  // Files
  FILES_RECEIPTS_UPLOAD: "*/files/receipts",
  FILES_RECEIPTS_DELETE: "*/files/receipts/:fileId",
  FILES_RECEIPTS_GET: "*/files/receipts/:fileId",
  FILES_RECEIPTS_DOWNLOAD: "*/files/receipts/:fileId/download",
  FILES_SUPPORTING_UPLOAD: "*/files/supporting",
  FILES_SUPPORTING_DELETE: "*/files/supporting/:fileId",
  FILES_STORAGE: "https://storage.expensesapp.com/receipts/:filename",
  CONFIG_EXPENSE_TYPES: "*/api/v1.0/configuration/:company/expense-types",
  CONFIG_EXPENSE_TYPE_CRUD: "*/api/v1.0/configuration/:company/expense-type",
  // Expenses
  EXPENSES_SUBMIT: "*/api/v1.0/expenses",
  EXPENSES_DRAFTS: "*/api/v1.0/expenses/drafts",
  EXPENSES_DRAFT_BY_ID: "*/api/v1.0/expenses/drafts/:id",
  EXPENSES_LIST: "*/api/v1.0/expenses",
  EXPENSE_BY_ID: "*/api/v1.0/expenses/:id",
  EXPENSES_LIST_UNIFIED: "*/api/v1.0/expenses-list",
  // Mileage Trips
  MILEAGE_SUBMIT: "*/api/v1.0/mileage-trips",
  MILEAGE_DRAFTS: "*/api/v1.0/mileage-trips/drafts",
  MILEAGE_DRAFT_BY_ID: "*/api/v1.0/mileage-trips/drafts/:id",
  MILEAGE_LIST: "*/api/v1.0/mileage-trips",
  MILEAGE_BY_ID: "*/api/v1.0/mileage-trips/:id"
};
const ENDPOINT_REGEX = {
  FILES_RECEIPTS: /\/files\/receipts/,
  FILES_SUPPORTING: /\/files\/supporting/,
  FILES_STORAGE: /https:\/\/storage\.expensesapp\.com\/receipts/,
  EXPENSES: /\/api\/v1\.0\/expenses/,
  EXPENSE_DRAFTS: /\/api\/v1\.0\/expenses\/drafts/,
  EXPENSES_LIST_UNIFIED: /\/api\/v1\.0\/expenses-list/,
  MILEAGE_TRIPS: /\/api\/v1\.0\/mileage-trips/,
  MILEAGE_DRAFTS: /\/api\/v1\.0\/mileage-trips\/drafts/
};
export {
  BUSINESS_PURPOSE_ENDPOINTS as B,
  CONFIGURATION_ENDPOINTS as C,
  EXPENSE_ENDPOINTS as E,
  FILE_ENDPOINTS as F,
  MILEAGE_ENDPOINTS as M,
  ENDPOINT_REGEX as a,
  ENDPOINT_PATTERNS as b
};

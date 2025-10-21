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
  GET_EXPENSE: (id) => `/api/v1.0/expenses/${id}`
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
  // Expenses
  EXPENSES_SUBMIT: "*/api/v1.0/expenses",
  EXPENSES_DRAFTS: "*/api/v1.0/expenses/drafts",
  EXPENSES_DRAFT_BY_ID: "*/api/v1.0/expenses/drafts/:id",
  EXPENSES_LIST: "*/api/v1.0/expenses",
  EXPENSE_BY_ID: "*/api/v1.0/expenses/:id"
};
const ENDPOINT_REGEX = {
  FILES_RECEIPTS: /\/files\/receipts/,
  FILES_SUPPORTING: /\/files\/supporting/,
  FILES_STORAGE: /https:\/\/storage\.expensesapp\.com\/receipts/,
  EXPENSES: /\/api\/v1\.0\/expenses/,
  EXPENSE_DRAFTS: /\/api\/v1\.0\/expenses\/drafts/
};
const MOCKED_ENDPOINTS_CONFIG = [
  // File Endpoints
  {
    path: FILE_ENDPOINTS.RECEIPTS_UPLOAD,
    errorProbability: 15,
    description: "Receipt file upload"
  },
  {
    path: FILE_ENDPOINTS.SUPPORTING_UPLOAD,
    errorProbability: 15,
    description: "Supporting file upload"
  },
  {
    path: "https://storage.expensesapp.com/receipts",
    errorProbability: 5,
    description: "Cloud storage"
  },
  // Expense Endpoints - use regex for dynamic paths
  {
    path: ENDPOINT_REGEX.EXPENSE_DRAFTS,
    errorProbability: 25,
    description: "Save/update expense draft"
  },
  {
    path: ENDPOINT_REGEX.EXPENSES,
    errorProbability: 25,
    description: "Submit expense for approval"
  }
  // Configuration endpoints - REMOVED (using real backend)
  // {
  //   path: CONFIGURATION_ENDPOINTS.LOGICAL_COMPANIES,
  //   errorProbability: 0,
  //   description: '✓ Real backend',
  // },
];
const MOCKED_ENDPOINT_PATHS = MOCKED_ENDPOINTS_CONFIG.filter((config) => typeof config.path === "string").map((config) => config.path);
const MOCKED_ENDPOINT_PATTERNS = [
  ENDPOINT_REGEX.FILES_RECEIPTS,
  ENDPOINT_REGEX.FILES_SUPPORTING,
  ENDPOINT_REGEX.FILES_STORAGE,
  ENDPOINT_REGEX.EXPENSES,
  ENDPOINT_REGEX.EXPENSE_DRAFTS
];
const shouldMockEndpoint = (url) => {
  const urlString = typeof url === "string" ? url : url.toString();
  const hasExactMatch = MOCKED_ENDPOINT_PATHS.some((path) => urlString.includes(path));
  if (hasExactMatch) return true;
  return MOCKED_ENDPOINT_PATTERNS.some((pattern) => pattern.test(urlString));
};
const getEndpointErrorProbability = (endpoint) => {
  const config = MOCKED_ENDPOINTS_CONFIG.find((c) => {
    if (typeof c.path === "object" && c.path instanceof RegExp) {
      return c.path.test(endpoint);
    }
    return endpoint.includes(c.path);
  });
  return config == null ? void 0 : config.errorProbability;
};
export {
  BUSINESS_PURPOSE_ENDPOINTS as B,
  CONFIGURATION_ENDPOINTS as C,
  EXPENSE_ENDPOINTS as E,
  FILE_ENDPOINTS as F,
  ENDPOINT_PATTERNS as a,
  getEndpointErrorProbability as g,
  shouldMockEndpoint as s
};

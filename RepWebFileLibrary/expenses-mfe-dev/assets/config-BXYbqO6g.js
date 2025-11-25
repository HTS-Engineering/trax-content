import { F as FILE_ENDPOINTS, a as ENDPOINT_REGEX } from "./endpoints-BX9yOQ37.js";
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
    path: ENDPOINT_REGEX.EXPENSES_LIST_UNIFIED,
    errorProbability: 0,
    description: "Unified expenses list with filtering, sorting, and search"
  },
  {
    path: ENDPOINT_REGEX.EXPENSE_DRAFTS,
    errorProbability: 20,
    description: "Save/update expense draft"
  },
  {
    path: /\/api\/v1\.0\/expenses\/drafts\/[^/]+$/,
    errorProbability: 50,
    description: "Delete expense draft (50% error)"
  },
  {
    path: ENDPOINT_REGEX.EXPENSES,
    errorProbability: 50,
    description: "Submit expense for approval"
  },
  // Mileage Trip Endpoints
  {
    path: ENDPOINT_REGEX.MILEAGE_DRAFTS,
    errorProbability: 20,
    description: "Save/update mileage draft"
  },
  {
    path: /\/api\/v1\.0\/mileage-trips\/drafts\/[^/]+$/,
    errorProbability: 50,
    description: "Delete mileage draft (50% error)"
  },
  {
    path: ENDPOINT_REGEX.MILEAGE_TRIPS,
    errorProbability: 50,
    description: "Submit mileage trip for approval"
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
  ENDPOINT_REGEX.EXPENSES_LIST_UNIFIED,
  ENDPOINT_REGEX.EXPENSES,
  ENDPOINT_REGEX.EXPENSE_DRAFTS,
  /\/api\/v1\.0\/expenses\/drafts\/[^/]+$/,
  ENDPOINT_REGEX.MILEAGE_TRIPS,
  ENDPOINT_REGEX.MILEAGE_DRAFTS,
  /\/api\/v1\.0\/mileage-trips\/drafts\/[^/]+$/
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
  getEndpointErrorProbability as g,
  shouldMockEndpoint as s
};

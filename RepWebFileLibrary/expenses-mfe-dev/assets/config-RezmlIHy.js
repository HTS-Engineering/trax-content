import { F as FILE_ENDPOINTS, a as ENDPOINT_REGEX } from "./endpoints-DyuQahSx.js";
const MOCKED_ENDPOINT_PATHS = [
  // File upload endpoints - currently mocked (no backend implementation yet)
  FILE_ENDPOINTS.RECEIPTS_UPLOAD,
  FILE_ENDPOINTS.SUPPORTING_UPLOAD,
  // Storage endpoint - currently mocked
  "https://storage.expensesapp.com/receipts"
  // Configuration endpoints - REMOVED from mocks (using real backend)
  // CONFIGURATION_ENDPOINTS.LOGICAL_COMPANIES,  // ✓ Real backend
  // CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_CREATE('*'),  // ✓ Real backend
  // To add more mocks, import from endpoints.ts and add here
];
const MOCKED_ENDPOINT_PATTERNS = [
  ENDPOINT_REGEX.FILES_RECEIPTS,
  // Matches all /files/receipts/* paths
  ENDPOINT_REGEX.FILES_SUPPORTING,
  // Matches all /files/supporting/* paths
  ENDPOINT_REGEX.FILES_STORAGE
  // Matches storage URLs
  // Configuration endpoints - REMOVED (using real backend)
  // ENDPOINT_REGEX.CONFIG_EXPENSE_TYPES,  // ✓ Real backend
  // ENDPOINT_REGEX.CONFIG_LOGICAL_COMPANIES,  // ✓ Real backend
  // ENDPOINT_REGEX.CONFIG_BUSINESS_PURPOSES,  // ✓ Real backend
];
const shouldMockEndpoint = (url) => {
  const urlString = typeof url === "string" ? url : url.toString();
  const hasExactMatch = MOCKED_ENDPOINT_PATHS.some((path) => urlString.includes(path));
  if (hasExactMatch) {
    return true;
  }
  const hasPatternMatch = MOCKED_ENDPOINT_PATTERNS.some((pattern) => pattern.test(urlString));
  return hasPatternMatch;
};
export {
  shouldMockEndpoint as s
};

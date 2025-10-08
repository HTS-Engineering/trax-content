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
const BUSINESS_PURPOSE_ENDPOINTS = {
  // Get business purposes for a company
  GET_BY_COMPANY: (companyId) => `/companies/${companyId}/business-purposes`,
  // Create business purpose
  CREATE: (companyId) => `/companies/${companyId}/business-purposes`,
  // Update business purpose
  UPDATE: (id) => `/business-purposes/${id}`,
  // Delete business purpose
  DELETE: (id) => `/business-purposes/${id}`,
  // Toggle status (same as update, but semantic naming)
  TOGGLE_STATUS: (id) => `/business-purposes/${id}`
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
  // Business Purposes
  BUSINESS_PURPOSE_BY_COMPANY: "*/companies/:companyId/business-purposes",
  BUSINESS_PURPOSE_CRUD: "*/business-purposes/:id"
};
const ENDPOINT_REGEX = {
  FILES_RECEIPTS: /\/files\/receipts/,
  FILES_SUPPORTING: /\/files\/supporting/,
  FILES_STORAGE: /https:\/\/storage\.expensesapp\.com\/receipts/,
  BUSINESS_PURPOSES: /\/(companies\/.*\/business-purposes|business-purposes)/
};
export {
  BUSINESS_PURPOSE_ENDPOINTS as B,
  ENDPOINT_PATTERNS as E,
  FILE_ENDPOINTS as F,
  ENDPOINT_REGEX as a
};

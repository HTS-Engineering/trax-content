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
  // Business Purposes
  BUSINESS_PURPOSES: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes`,
  BUSINESS_PURPOSE_BY_ID: (companyShortName, id) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes/${id}`,
  BUSINESS_PURPOSE_CREATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`,
  BUSINESS_PURPOSE_UPDATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`
};
const ENDPOINT_PATTERNS = {
  // Files
  FILES_RECEIPTS_UPLOAD: "*/files/receipts",
  FILES_RECEIPTS_DELETE: "*/files/receipts/:fileId",
  FILES_RECEIPTS_GET: "*/files/receipts/:fileId",
  FILES_RECEIPTS_DOWNLOAD: "*/files/receipts/:fileId/download",
  FILES_SUPPORTING_UPLOAD: "*/files/supporting",
  FILES_SUPPORTING_DELETE: "*/files/supporting/:fileId",
  FILES_STORAGE: "https://storage.expensesapp.com/receipts/:filename"
};
const ENDPOINT_REGEX = {
  FILES_RECEIPTS: /\/files\/receipts/,
  FILES_SUPPORTING: /\/files\/supporting/,
  FILES_STORAGE: /https:\/\/storage\.expensesapp\.com\/receipts/
};
export {
  BUSINESS_PURPOSE_ENDPOINTS as B,
  ENDPOINT_PATTERNS as E,
  FILE_ENDPOINTS as F,
  ENDPOINT_REGEX as a
};

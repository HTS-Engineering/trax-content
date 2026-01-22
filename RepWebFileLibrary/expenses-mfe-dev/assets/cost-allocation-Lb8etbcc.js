const FILE_ENDPOINTS = {
  // Upload file (receipt or supporting) - requires company and expenseId
  UPLOAD: (company, expenseId) => `/api/v1.0/expense-forms/${company}/files/drafts/${expenseId}/files`,
  // Download/Delete file by ID
  DOWNLOAD: (fileId) => `/api/v1.0/files/${fileId}`,
  DELETE: (fileId) => `/api/v1.0/files/${fileId}`,
  // Legacy endpoints (for mocking compatibility during transition)
  RECEIPTS_UPLOAD: "/files/receipts",
  RECEIPTS_DELETE: (id) => `/files/receipts/${id}`,
  RECEIPTS_GET: (id) => `/files/receipts/${id}`,
  RECEIPTS_DOWNLOAD: (id) => `/files/receipts/${id}/download`,
  SUPPORTING_UPLOAD: "/files/supporting",
  SUPPORTING_DELETE: (id) => `/files/supporting/${id}`,
  SUPPORTING_GET: (id) => `/files/supporting/${id}`,
  STORAGE_GET: (filename) => `https://storage.expensesapp.com/receipts/${filename}`
};
var ECostAllocation = /* @__PURE__ */ ((ECostAllocation2) => {
  ECostAllocation2["Project"] = "project";
  ECostAllocation2["Admin"] = "admin";
  ECostAllocation2["Team"] = "team";
  ECostAllocation2["Rep"] = "rep";
  return ECostAllocation2;
})(ECostAllocation || {});
export {
  ECostAllocation as E,
  FILE_ENDPOINTS as F
};

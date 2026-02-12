const CONFIGURATION_ENDPOINTS = {
  BASE: "/api/v1.0/configuration",
  // Logical Companies
  LOGICAL_COMPANIES: "/api/v1.0/configuration/logical-companies",
  LOGICAL_COMPANY_BY_NAME: (shortName) => `/api/v1.0/configuration/logical-companies/${encodeURIComponent(shortName)}`,
  // Form Types
  FORM_TYPES: "/api/v1.0/configuration/form-types",
  // Expense Types
  EXPENSE_TYPES: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-types`,
  EXPENSE_TYPE_BY_ID: (companyShortName, id) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-types/${id}`,
  EXPENSE_TYPE_CREATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type`,
  EXPENSE_TYPE_UPDATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type`,
  // Mileage Rates
  MILEAGE_RATES: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/mileage-rates`,
  MILEAGE_RATE_CREATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/mileage-rates`,
  MILEAGE_RATE_DELETE: (companyShortName, effectiveRateId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/mileage-rates/${effectiveRateId}`,
  // Expense Type Users
  EXPENSE_TYPE_USERS: (companyShortName, expenseTypeId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type/${expenseTypeId}/users`,
  // Tax Types
  TAX_TYPES_DISPLAY: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/tax-types-display`,
  // Unit of Measurements
  UNIT_OF_MEASUREMENTS: "/api/v1.0/configuration/unit-of-measurements"
};
const BUSINESS_PURPOSE_ENDPOINTS = {
  // Business Purposes
  BUSINESS_PURPOSES: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes`,
  BUSINESS_PURPOSE_BY_ID: (companyShortName, id) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes/${id}`,
  BUSINESS_PURPOSE_CREATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`,
  BUSINESS_PURPOSE_UPDATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`
};
export {
  BUSINESS_PURPOSE_ENDPOINTS as B,
  CONFIGURATION_ENDPOINTS as C
};

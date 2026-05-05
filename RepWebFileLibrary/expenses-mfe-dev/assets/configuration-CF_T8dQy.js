var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const CONFIGURATION_ENDPOINTS = {
  BASE: "/api/v1.0/configuration",
  // Logical Companies
  LOGICAL_COMPANIES: "/api/v1.0/configuration/logical-companies",
  LOGICAL_COMPANY_BY_NAME: /* @__PURE__ */ __name((shortName) => `/api/v1.0/configuration/logical-companies/${encodeURIComponent(shortName)}`, "LOGICAL_COMPANY_BY_NAME"),
  // Form Types
  FORM_TYPES: "/api/v1.0/configuration/form-types",
  // Currencies
  CURRENCIES: "/api/v1.0/configuration/currencies",
  // Countries
  COUNTRIES: "/api/v1.0/configuration/countries",
  // Expense Types
  EXPENSE_TYPES: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-types`, "EXPENSE_TYPES"),
  EXPENSE_TYPE_BY_ID: /* @__PURE__ */ __name((companyShortName, id) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-types/${id}`, "EXPENSE_TYPE_BY_ID"),
  EXPENSE_TYPE_CREATE: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type`, "EXPENSE_TYPE_CREATE"),
  EXPENSE_TYPE_UPDATE: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type`, "EXPENSE_TYPE_UPDATE"),
  // Mileage Rates
  MILEAGE_RATES: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/mileage-rates`, "MILEAGE_RATES"),
  MILEAGE_RATE_CREATE: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/mileage-rates`, "MILEAGE_RATE_CREATE"),
  MILEAGE_RATE_DELETE: /* @__PURE__ */ __name((companyShortName, effectiveRateId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/mileage-rates/${effectiveRateId}`, "MILEAGE_RATE_DELETE"),
  // Expense Type Users
  EXPENSE_TYPE_USERS: /* @__PURE__ */ __name((companyShortName, expenseTypeId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/expense-type/${expenseTypeId}/users`, "EXPENSE_TYPE_USERS"),
  // Tax Types
  TAX_TYPES_DISPLAY: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/tax-types-display`, "TAX_TYPES_DISPLAY"),
  // Unit of Measurements
  UNIT_OF_MEASUREMENTS: "/api/v1.0/configuration/unit-of-measurements",
  // Master Accounts
  MASTER_ACCOUNTS: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-accounts`, "MASTER_ACCOUNTS"),
  MASTER_ACCOUNT_CREATE: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account`, "MASTER_ACCOUNT_CREATE"),
  MASTER_ACCOUNT_UPDATE: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account`, "MASTER_ACCOUNT_UPDATE"),
  // Cardholder Search
  CARDHOLDER_SEARCH: /* @__PURE__ */ __name((companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/cardholder-search`, "CARDHOLDER_SEARCH"),
  // Cardholders (Payment Accounts under a Master Account)
  CARDHOLDERS: /* @__PURE__ */ __name((companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/accounts`, "CARDHOLDERS"),
  CARDHOLDER_CREATE: /* @__PURE__ */ __name((companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/account`, "CARDHOLDER_CREATE"),
  CARDHOLDER_UPDATE: /* @__PURE__ */ __name((companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/account`, "CARDHOLDER_UPDATE")
};
const BUSINESS_PURPOSE_ENDPOINTS = {
  // Business Purposes
  BUSINESS_PURPOSES: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes`, "BUSINESS_PURPOSES"),
  BUSINESS_PURPOSE_BY_ID: /* @__PURE__ */ __name((companyShortName, id) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purposes/${id}`, "BUSINESS_PURPOSE_BY_ID"),
  BUSINESS_PURPOSE_CREATE: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`, "BUSINESS_PURPOSE_CREATE"),
  BUSINESS_PURPOSE_UPDATE: /* @__PURE__ */ __name((companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/business-purpose`, "BUSINESS_PURPOSE_UPDATE")
};
export {
  BUSINESS_PURPOSE_ENDPOINTS as B,
  CONFIGURATION_ENDPOINTS as C
};

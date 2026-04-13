import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const { forwardRef: forwardRef$1, createElement: createElement$1 } = await importShared("react");
const Icon = forwardRef$1(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement$1(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement$1(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const { forwardRef, createElement } = await importShared("react");
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const CONFIGURATION_ENDPOINTS = {
  BASE: "/api/v1.0/configuration",
  // Logical Companies
  LOGICAL_COMPANIES: "/api/v1.0/configuration/logical-companies",
  LOGICAL_COMPANY_BY_NAME: (shortName) => `/api/v1.0/configuration/logical-companies/${encodeURIComponent(shortName)}`,
  // Form Types
  FORM_TYPES: "/api/v1.0/configuration/form-types",
  // Currencies
  CURRENCIES: "/api/v1.0/configuration/currencies",
  // Countries
  COUNTRIES: "/api/v1.0/configuration/countries",
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
  UNIT_OF_MEASUREMENTS: "/api/v1.0/configuration/unit-of-measurements",
  // Master Accounts
  MASTER_ACCOUNTS: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-accounts`,
  MASTER_ACCOUNT_CREATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account`,
  MASTER_ACCOUNT_UPDATE: (companyShortName) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account`,
  // Cardholder Search
  CARDHOLDER_SEARCH: (companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/cardholder-search`,
  // Cardholders (Payment Accounts under a Master Account)
  CARDHOLDERS: (companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/accounts`,
  CARDHOLDER_CREATE: (companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/account`,
  CARDHOLDER_UPDATE: (companyShortName, masterAccountId) => `/api/v1.0/configuration/${encodeURIComponent(companyShortName)}/master-account/${masterAccountId}/account`
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
  CONFIGURATION_ENDPOINTS as C,
  createLucideIcon as c
};

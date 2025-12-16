const EXPENSE_LOCATION_OPTIONS = [
  { value: "ontario-canada", label: "Ontario, Canada" },
  { value: "british-columbia", label: "British Columbia, Canada" },
  { value: "alberta", label: "Alberta, Canada" },
  { value: "quebec", label: "Quebec, Canada" }
];
const PAYMENT_METHOD_DATA = [
  { value: "ca6252", label: "CA****6252", icon: "credit-card" },
  { value: "ca1234", label: "CA****1234", icon: "banknote" },
  { value: "cash", label: "Cash", icon: null },
  { value: "personal", label: "Personal Card", icon: null }
];
const CURRENCY_OPTIONS = [
  { code: "USD", locale: "en-US" },
  { code: "CAD", locale: "en-CA" },
  { code: "EUR", locale: "de-DE" }
];
const VENDOR_OPTIONS = [
  { value: "vendor-a", label: "Vendor A" },
  { value: "vendor-b", label: "Vendor B" },
  { value: "vendor-c", label: "Vendor C" },
  { value: "other", label: "Other" }
];
export {
  CURRENCY_OPTIONS as C,
  EXPENSE_LOCATION_OPTIONS as E,
  PAYMENT_METHOD_DATA as P,
  VENDOR_OPTIONS as V
};

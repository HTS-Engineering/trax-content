import { c as createLucideIcon } from "./configuration-DWZWsCI4.js";
import { y as EMPTY_CURRENCY_SYMBOL, H as getCurrencySymbol, ab as DEFAULT_CURRENCY } from "./expense-api-xlsom9Ci.js";
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode);
const ensureValidCurrency = (currency) => {
  if (!currency || !currency.code) return DEFAULT_CURRENCY;
  if (currency.symbol) return currency;
  return { code: currency.code, symbol: getCurrencySymbol(currency.code) };
};
function resolveSymbol(currency, spaceAfterSymbol) {
  return spaceAfterSymbol ? `${currency.symbol} ` : currency.symbol;
}
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};
const formatDateRange = (from, to) => {
  const fromDate = typeof from === "string" ? new Date(from) : from;
  const toDate = typeof to === "string" ? new Date(to) : to;
  const fromMonth = fromDate.toLocaleDateString("en-US", { month: "short" });
  const toMonth = toDate.toLocaleDateString("en-US", { month: "short" });
  const fromDay = fromDate.getDate();
  const toDay = toDate.getDate();
  const fromYear = fromDate.getFullYear();
  const toYear = toDate.getFullYear();
  if (fromYear !== toYear) {
    return `${fromMonth} ${fromDay}, ${fromYear} - ${toMonth} ${toDay}, ${toYear}`;
  }
  if (fromMonth === toMonth) {
    return `${fromMonth} ${fromDay} - ${toDay}, ${toYear}`;
  }
  return `${fromMonth} ${fromDay} - ${toMonth} ${toDay}, ${toYear}`;
};
const formatCurrency = (amount, { currency, spaceAfterSymbol = false, includeCurrencyCode = true } = {}) => {
  const validCurrency = ensureValidCurrency(currency);
  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericAmount)) return String(amount);
  const prefix = resolveSymbol(validCurrency, spaceAfterSymbol);
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericAmount);
  return includeCurrencyCode ? `${prefix}${formattedNumber} ${validCurrency.code}` : `${prefix}${formattedNumber}`;
};
const formatAmountWithCurrency = (amount, currencyCode) => {
  if (amount == null || amount === "") return EMPTY_CURRENCY_SYMBOL;
  if (!currencyCode) return EMPTY_CURRENCY_SYMBOL;
  return formatCurrency(amount, {
    currency: { code: currencyCode, symbol: getCurrencySymbol(currencyCode) },
    includeCurrencyCode: false
  });
};
const formatRate = (rate, unit, { currency, spaceAfterSymbol = false } = {}) => {
  const validCurrency = ensureValidCurrency(currency);
  const numericRate = typeof rate === "string" ? parseFloat(rate) : rate;
  if (isNaN(numericRate)) return `${rate} per ${unit}`;
  const prefix = resolveSymbol(validCurrency, spaceAfterSymbol);
  return `${prefix}${numericRate.toFixed(2)} per ${unit}`;
};
const formatRateCompact = (rate, unit, { currency, spaceAfterSymbol = false } = {}) => {
  if (rate == null) return "-";
  const validCurrency = ensureValidCurrency(currency);
  const prefix = resolveSymbol(validCurrency, spaceAfterSymbol);
  return `${prefix}${rate.toFixed(2)}/${unit || "-"}`;
};
const formatDistance = (distance, unit) => {
  if (!distance || !unit) return void 0;
  return `${distance} ${unit}`;
};
export {
  Plus as P,
  formatDateRange as a,
  formatRate as b,
  formatCurrency as c,
  formatDate as d,
  formatDistance as e,
  formatAmountWithCurrency as f,
  formatRateCompact as g
};

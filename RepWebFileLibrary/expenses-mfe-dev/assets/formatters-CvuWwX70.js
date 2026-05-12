var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { E as EMPTY_CURRENCY_SYMBOL, B as getCurrencySymbol, a1 as DEFAULT_CURRENCY, t as parseDateOnlyAsLocal } from "./date-format-DVvigOUX.js";
import "./index.es-e_EjaQiF.js";
const ensureValidCurrency = /* @__PURE__ */ __name((currency) => {
  if (!currency || !currency.code) return DEFAULT_CURRENCY;
  if (currency.symbol) return currency;
  return { code: currency.code, symbol: getCurrencySymbol(currency.code) };
}, "ensureValidCurrency");
function resolveSymbol(currency, spaceAfterSymbol) {
  return spaceAfterSymbol ? `${currency.symbol} ` : currency.symbol;
}
__name(resolveSymbol, "resolveSymbol");
const formatDate = /* @__PURE__ */ __name((dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}, "formatDate");
const formatDateRange = /* @__PURE__ */ __name((from, to) => {
  const fromDate = typeof from === "string" ? parseDateOnlyAsLocal(from) : from;
  const toDate = typeof to === "string" ? parseDateOnlyAsLocal(to) : to;
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
}, "formatDateRange");
const formatCurrency = /* @__PURE__ */ __name((amount, { currency, spaceAfterSymbol = false, includeCurrencyCode = true } = {}) => {
  const validCurrency = ensureValidCurrency(currency);
  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericAmount)) return String(amount);
  const prefix = resolveSymbol(validCurrency, spaceAfterSymbol);
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericAmount);
  return includeCurrencyCode ? `${prefix}${formattedNumber} ${validCurrency.code}` : `${prefix}${formattedNumber}`;
}, "formatCurrency");
const formatAmountWithCurrency = /* @__PURE__ */ __name((amount, currencyCode) => {
  if (amount == null || amount === "") return EMPTY_CURRENCY_SYMBOL;
  if (!currencyCode) return EMPTY_CURRENCY_SYMBOL;
  return formatCurrency(amount, {
    currency: { code: currencyCode, symbol: getCurrencySymbol(currencyCode) },
    includeCurrencyCode: false
  });
}, "formatAmountWithCurrency");
const formatRate = /* @__PURE__ */ __name((rate, unit, { currency, spaceAfterSymbol = false } = {}) => {
  const validCurrency = ensureValidCurrency(currency);
  const numericRate = typeof rate === "string" ? parseFloat(rate) : rate;
  if (isNaN(numericRate)) return `${rate} per ${unit}`;
  const prefix = resolveSymbol(validCurrency, spaceAfterSymbol);
  return `${prefix}${numericRate.toFixed(2)} per ${unit}`;
}, "formatRate");
const formatRateCompact = /* @__PURE__ */ __name((rate, unit, { currency, spaceAfterSymbol = false } = {}) => {
  if (rate == null) return "-";
  const validCurrency = ensureValidCurrency(currency);
  const prefix = resolveSymbol(validCurrency, spaceAfterSymbol);
  return `${prefix}${rate.toFixed(2)}/${unit || "-"}`;
}, "formatRateCompact");
const formatDistance = /* @__PURE__ */ __name((distance, unit) => {
  if (!distance || !unit) return void 0;
  return `${distance} ${unit}`;
}, "formatDistance");
export {
  formatDate as a,
  formatDateRange as b,
  formatRate as c,
  formatCurrency as d,
  formatDistance as e,
  formatAmountWithCurrency as f,
  formatRateCompact as g
};

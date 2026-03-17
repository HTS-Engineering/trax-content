import { c as createLucideIcon, F as p } from "./configuration-BTcuf3wk.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { I as Icon } from "./Icon-CWd-YT3m.js";
import { _ as DEFAULT_CURRENCY, J as getCurrencySymbol } from "./currency-DLlwBzTW.js";
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode);
const EmptyState = ({
  iconName = "receipt",
  iconComponent,
  iconClassName,
  iconWrapperClassName,
  title,
  description,
  titleClassName,
  descriptionClassName,
  containerClassName,
  action,
  "data-testid": testId
}) => {
  const renderIcon = () => {
    if (iconComponent) {
      return iconComponent;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        name: iconName,
        className: p("size-9 text-exp-neutral-100", iconClassName)
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: p(
        "flex flex-col items-center justify-center py-16 px-4 gap-4",
        containerClassName
      ),
      "data-testid": testId,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: p(
              "bg-exp-primary-blue-50 p-3.5 rounded-full",
              iconWrapperClassName
            ),
            children: renderIcon()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2.5 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: p(
                "text-base font-medium text-exp-neutral-500",
                titleClassName
              ),
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: p(
                "text-sm font-normal text-exp-grey-600 max-w-md text-center leading-[1.4]",
                descriptionClassName
              ),
              children: description
            }
          )
        ] }),
        action && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: action })
      ]
    }
  );
};
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
  EmptyState as E,
  Plus as P,
  formatCurrency as a,
  formatDate as b,
  formatDistance as c,
  formatRateCompact as d,
  formatRate as f
};

const DEFAULT_CURRENCY = {
  code: "CAD",
  locale: "en-CA"
};
const DEFAULT_CURRENCY_CODE = DEFAULT_CURRENCY.code;
const DEFAULT_CURRENCY_LOCALE = DEFAULT_CURRENCY.locale;
const CURRENCY_LOCALE_MAP = {
  CAD: "en-CA",
  USD: "en-US",
  EUR: "de-DE",
  GBP: "en-GB",
  JPY: "ja-JP",
  AUD: "en-AU",
  CHF: "de-CH",
  CNY: "zh-CN",
  MXN: "es-MX"
};
const getCurrencyLocale = (currencyCode) => CURRENCY_LOCALE_MAP[currencyCode] ?? DEFAULT_CURRENCY_LOCALE;
export {
  DEFAULT_CURRENCY as D,
  DEFAULT_CURRENCY_CODE as a,
  getCurrencyLocale as g
};

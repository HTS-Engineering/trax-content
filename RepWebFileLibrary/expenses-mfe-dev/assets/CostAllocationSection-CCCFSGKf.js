const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/core-B6fVcA1e.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/_commonjsHelpers-DRoQK5uS.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
import { E as ETL_ERROR_MESSAGE } from "./constants-D3EhCWcC.js";
import { c as createLucideIcon, l as devWarn, a as apiClient, d as devError, a4 as Ss, a5 as Cs, g as gr, a6 as _s, Y as Yn, U as Ue, R as RefreshCw, N as ys, j as jr, m as us, v as h, _ as wt, a0 as zt, a1 as yt, B as Ba, f as create, h as devtools, D as devLog, Q as Qs, a7 as Qt, F as gn, L as ts, M as Mt, b as Et, P as Pt, a8 as Ws, a9 as Ks, aa as Xs, a3 as Ga, O as Oa, ab as cr, ac as oi, ad as Ye, ae as qa } from "./configuration-BGy6T4Ra.js";
import { D as Decimal, p as useTaxTypesDisplay, f as ExpenseFormType, y as ECostAllocation, t as useDefaultCurrency, a as useExpenseTypes, F as FormTypeId, A as AllowedMimeType, z as FILE_SIZE_LIMITS, B as MIME_TYPE_CONFIG, C as FilePreviewType, s as useCountries, G as useDefaultCountry, w as useEffectiveMileageRate, v as useFormTypeId, b as isRegularExpense, c as isMileageExpense, i as isExpenseItemSubmitted, x as isExpenseItemDraft, I as ItemCategory, H as MILEAGE_RATES_STALE_TIME, J as fetchEffectiveMileageRate, d as useExpenseItem } from "./decimal-DtOUxi8k.js";
import { T as DEFAULT_CURRENCY_CODE, m as formatDate, U as FILE_ENDPOINTS, V as getErrorMessage, d as useCompanyStore, s as formatExpenseDate, S as formatCurrency, L as EMPTY_CURRENCY_SYMBOL, W as formatDistance, P as formatRate, M as formatExpensePeriod, o as ERROR_MESSAGES, t as useAppQuery, k as EXPENSE_ENDPOINTS, q as queryKeys, X as formatHistoryTimestamp, h as useErrorSurface, F as formatToISODate, G as parseDateOnlyAsLocal, Y as isHttpApiError, Z as AppError, _ as isNotFoundError, $ as extractError, a0 as useDebouncedCallback, i as useQueryClient, j as useMutation, C as useQuery, a1 as useNumericDisplay, a2 as getCurrencySymbol } from "./use-scroll-into-view-ref-B1iRwpLB.js";
import { S as SIGNED_DECIMAL_FORMAT_REGEX, m as TAX_RATE_FORMAT_REGEX, I as Info, s as string, o as object, d as custom, c as boolean, b as array, D as DECIMAL_FORMAT_REGEX, g as date, p as unknown, n as number, _ as _enum, C as ConfirmDialog, f as useWatch, u as useForm, a as u, l as literal, i as useFormState, q as TOOLTIP_DELAY_QUICK, e as Controller, h as createDecimalChangeHandler, T as TOOLTIP_DELAY_TRUNCATED_TEXT } from "./schemas-BGLcgluO.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { n as notifyMessage, a as notifyError } from "./notifier-BGsQc-Vx.js";
import { a as useDefaultCompany, q as queryClient } from "./queryClient-C1e0nhMw.js";
import { _ as __vitePreload } from "./preload-helper-Bsq79q8M.js";
import { P as Plus } from "./plus-DnO3-pVV.js";
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const splitFilename = /* @__PURE__ */ __name((filename) => {
  if (!filename) return { name: "", ext: "" };
  const lastDot = filename.lastIndexOf(".");
  if (lastDot <= 0) return { name: filename, ext: "" };
  return {
    name: filename.slice(0, lastDot),
    ext: filename.slice(lastDot)
  };
}, "splitFilename");
const renameConflictingFiles = /* @__PURE__ */ __name((newFiles, existingFilenames) => {
  const filesWithUniqueNames = newFiles.map((file) => {
    let finalName = file.name;
    if (existingFilenames.has(finalName)) {
      const { name, ext } = splitFilename(file.name);
      let counter = 1;
      do {
        finalName = `${name} (${counter})${ext}`;
        counter++;
      } while (existingFilenames.has(finalName));
    }
    existingFilenames.add(finalName);
    if (finalName !== file.name) {
      return new File([file], finalName, { type: file.type, lastModified: file.lastModified });
    }
    return file;
  });
  return filesWithUniqueNames;
}, "renameConflictingFiles");
function calculateExponentialBackoff(retryCount, baseDelay = 1e3, maxDelay = 5e3) {
  const exponentialDelay = baseDelay * Math.pow(2, retryCount);
  return Math.min(exponentialDelay, maxDelay);
}
__name(calculateExponentialBackoff, "calculateExponentialBackoff");
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
__name(sleep, "sleep");
function isConvertedExpense(netCurrencyCode, totalCurrencyCode) {
  return !!netCurrencyCode && !!totalCurrencyCode && netCurrencyCode !== totalCurrencyCode;
}
__name(isConvertedExpense, "isConvertedExpense");
function getExpenseBaseAmount(netCurrencyCode, totalCurrencyCode, netAmount, totalAmount) {
  const amount = isConvertedExpense(netCurrencyCode, totalCurrencyCode) ? totalAmount : netAmount;
  return parseFloat(amount || "0");
}
__name(getExpenseBaseAmount, "getExpenseBaseAmount");
function getCadTaxBaseAmount(netCurrencyCode, totalCurrencyCode, netAmount, totalAmount) {
  const isConverted = isConvertedExpense(netCurrencyCode, totalCurrencyCode);
  const useConvertedTotal = isConverted && totalCurrencyCode === DEFAULT_CURRENCY_CODE;
  const useReceiptTotal = !useConvertedTotal && netCurrencyCode === DEFAULT_CURRENCY_CODE;
  if (useConvertedTotal) return totalAmount || null;
  if (useReceiptTotal) return netAmount || null;
  return null;
}
__name(getCadTaxBaseAmount, "getCadTaxBaseAmount");
var ExpenseFormStatus = /* @__PURE__ */ ((ExpenseFormStatus2) => {
  ExpenseFormStatus2["Draft"] = "draft";
  ExpenseFormStatus2["Submitted"] = "submitted";
  ExpenseFormStatus2["Approved"] = "approved";
  ExpenseFormStatus2["Rejected"] = "rejected";
  ExpenseFormStatus2["Cancelled"] = "cancelled";
  return ExpenseFormStatus2;
})(ExpenseFormStatus || {});
var MileageFormType = /* @__PURE__ */ ((MileageFormType2) => {
  MileageFormType2["Trip"] = "trip";
  MileageFormType2["Period"] = "period";
  return MileageFormType2;
})(MileageFormType || {});
function isMileageTripData(data) {
  return data.formType === "trip";
}
__name(isMileageTripData, "isMileageTripData");
function isMileagePeriodData(data) {
  return data.formType === "period";
}
__name(isMileagePeriodData, "isMileagePeriodData");
var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Submitted"] = "submitted";
  ActionType2["Approved"] = "approved";
  ActionType2["Rejected"] = "rejected";
  ActionType2["Cancelled"] = "cancelled";
  ActionType2["Resubmitted"] = "resubmitted";
  ActionType2["Saved"] = "saved";
  return ActionType2;
})(ActionType || {});
const normalizeLower = /* @__PURE__ */ __name((value) => value == null ? void 0 : value.toLowerCase(), "normalizeLower");
function mapActionType(value) {
  const normalized = normalizeLower(value);
  if (Object.values(ActionType).includes(normalized)) {
    return normalized;
  }
  throw new Error(`Invalid ActionType: ${value}`);
}
__name(mapActionType, "mapActionType");
function mapFormStatus(value) {
  const normalized = normalizeLower(value);
  if (Object.values(ExpenseFormStatus).includes(normalized)) {
    return normalized;
  }
  throw new Error(`Invalid FormStatus: ${value}`);
}
__name(mapFormStatus, "mapFormStatus");
const ACTION_DATE_PREFIX = {
  submitted: "Submitted on",
  approved: "Approved on",
  rejected: "Rejected on",
  cancelled: "Cancelled on"
};
function getExpenseActionDate(item) {
  if (item.status === "approved" && item.approvedAt) return item.approvedAt;
  if (item.status === "rejected" && item.rejectedAt) return item.rejectedAt;
  if (item.status === "cancelled" && item.cancelledAt) return item.cancelledAt;
  return item.submittedAt;
}
__name(getExpenseActionDate, "getExpenseActionDate");
function getExpenseActionSubtitle(item) {
  const datePart = `${ACTION_DATE_PREFIX[item.status]} ${formatDate(getExpenseActionDate(item))}`;
  return [item.businessId, datePart].filter(Boolean).join(" • ");
}
__name(getExpenseActionSubtitle, "getExpenseActionSubtitle");
const TAX_AMOUNT_WARNING_MESSAGE = "Amount does not match tax type %";
const DECIMAL_PLACES$1 = 2;
function getTaxAmountWarning({
  taxAmount,
  taxType,
  taxTypes,
  netAmount,
  totalAmount,
  netCurrency,
  totalCurrency
}) {
  if (!taxAmount || !taxType) return null;
  if (!SIGNED_DECIMAL_FORMAT_REGEX.test(taxAmount)) return null;
  const selectedTaxType = taxTypes == null ? void 0 : taxTypes.find((tt) => tt.id.toString() === taxType);
  if (!selectedTaxType) return null;
  if (!TAX_RATE_FORMAT_REGEX.test(selectedTaxType.taxRate)) return null;
  const rateDecimal = new Decimal(selectedTaxType.taxRate);
  if (rateDecimal.lte(0)) return null;
  if (rateDecimal.gt(1)) {
    devWarn(`getTaxAmountWarning: taxRate ${selectedTaxType.taxRate} is > 1 — may be in percentage form instead of decimal. Warning suppressed.`);
    return null;
  }
  const baseStr = getCadTaxBaseAmount(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code, netAmount, totalAmount);
  if (!baseStr || !SIGNED_DECIMAL_FORMAT_REGEX.test(baseStr)) return null;
  const baseDecimal = new Decimal(baseStr).abs();
  if (baseDecimal.isZero()) return null;
  const expected = baseDecimal.times(rateDecimal).dividedBy(new Decimal(1).plus(rateDecimal)).toDecimalPlaces(DECIMAL_PLACES$1, Decimal.ROUND_HALF_UP);
  const entered = new Decimal(taxAmount).abs().toDecimalPlaces(DECIMAL_PLACES$1, Decimal.ROUND_HALF_UP);
  if (!entered.equals(expected)) return TAX_AMOUNT_WARNING_MESSAGE;
  return null;
}
__name(getTaxAmountWarning, "getTaxAmountWarning");
const EtlErrorBanner = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    role: "status",
    className: "flex min-h-11 w-full items-center gap-1 bg-exp-yellow-100 px-4 py-2 text-exp-yellow-800 mb-3",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sync-problem", className: "size-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium leading-[1.4]", children: ETL_ERROR_MESSAGE })
    ]
  }
), "EtlErrorBanner");
function isViteDevMode() {
  try {
    const url = new URL(import.meta.url);
    return url.pathname.includes("/src/") || url.pathname.includes("/@fs/");
  } catch {
    return false;
  }
}
__name(isViteDevMode, "isViteDevMode");
function getMfeBaseUrl() {
  if (isViteDevMode()) {
    return "";
  }
  try {
    const url = new URL(import.meta.url);
    const pathParts = url.pathname.split("/");
    const assetsIndex = pathParts.indexOf("assets");
    if (assetsIndex > 0) {
      const basePath2 = pathParts.slice(0, assetsIndex).join("/");
      return `${url.origin}${basePath2}`;
    }
    const basePath = pathParts.slice(0, -1).join("/");
    return `${url.origin}${basePath}`;
  } catch {
    return "";
  }
}
__name(getMfeBaseUrl, "getMfeBaseUrl");
function getMockAssetUrl(path) {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const baseUrl = getMfeBaseUrl();
  if (baseUrl) {
    return `${baseUrl}/${cleanPath}`;
  }
  return `/${cleanPath}`;
}
__name(getMockAssetUrl, "getMockAssetUrl");
function resolveFileUrl(blobUrl, url) {
  if (blobUrl) {
    return blobUrl;
  }
  if (!url) {
    return "";
  }
  if (url.startsWith("/mocks/")) {
    return getMockAssetUrl(url);
  }
  return url;
}
__name(resolveFileUrl, "resolveFileUrl");
async function downloadFileAsBlob(fileId, signal) {
  const response = await apiClient.get(FILE_ENDPOINTS.DOWNLOAD.build({ fileId }), {
    responseType: "blob",
    signal
  });
  return URL.createObjectURL(response.data);
}
__name(downloadFileAsBlob, "downloadFileAsBlob");
function isApiFileUrl(url) {
  return !!url && url.startsWith("/api/");
}
__name(isApiFileUrl, "isApiFileUrl");
const { useCallback: useCallback$p, useEffect: useEffect$l, useRef: useRef$i, useState: useState$a } = await importShared("react");
const PreviewReceiptSection = /* @__PURE__ */ __name(({ receipt, stretchToFill = false }) => {
  var _a;
  const [imageError, setImageError] = useState$a(false);
  const [loadedBlobUrl, setLoadedBlobUrl] = useState$a();
  const [isLoading, setIsLoading] = useState$a(false);
  const [loadError, setLoadError] = useState$a(null);
  const [retryCount, setRetryCount] = useState$a(0);
  const abortRef = useRef$i(null);
  const receiptId = receipt == null ? void 0 : receipt.id;
  const receiptBlobUrl = receipt == null ? void 0 : receipt.blobUrl;
  const receiptUrl = receipt == null ? void 0 : receipt.url;
  const isImage = (_a = receipt == null ? void 0 : receipt.mimeType) == null ? void 0 : _a.startsWith("image/");
  const isPdf = (receipt == null ? void 0 : receipt.mimeType) === "application/pdf";
  const needsDownload = !receiptBlobUrl && isApiFileUrl(receiptUrl);
  useEffect$l(() => {
    if (!receiptId || !needsDownload) return;
    if (!isImage && !isPdf) return;
    const controller = new AbortController();
    abortRef.current = controller;
    setIsLoading(true);
    downloadFileAsBlob(receiptId, controller.signal).then((blobUrl) => {
      if (!controller.signal.aborted) {
        setLoadedBlobUrl(blobUrl);
      }
    }).catch((error) => {
      if (controller.signal.aborted) return;
      devError("Receipt preview download failed:", error);
      setLoadError(error);
    }).finally(() => {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    });
    return () => {
      controller.abort();
    };
  }, [receiptId, needsDownload, isImage, isPdf, retryCount]);
  useEffect$l(() => {
    return () => {
      if (loadedBlobUrl) {
        URL.revokeObjectURL(loadedBlobUrl);
      }
    };
  }, [loadedBlobUrl]);
  useEffect$l(() => {
    setImageError(false);
    setLoadedBlobUrl(void 0);
    setLoadError(null);
  }, [receiptId]);
  const handleRetry = useCallback$p(() => {
    setLoadError(null);
    setImageError(false);
    setRetryCount((count) => count + 1);
  }, []);
  if (!receipt) {
    return null;
  }
  const resolvedUrl = resolveFileUrl(receipt.blobUrl, receipt.url);
  const displayUrl = loadedBlobUrl ?? (needsDownload ? void 0 : resolvedUrl);
  const handlePreviewClick = /* @__PURE__ */ __name(() => {
    if (!displayUrl) {
      notifyMessage("The receipt could not be loaded, so it cannot be opened.");
      return;
    }
    if (!window.open(displayUrl, "_blank", "noopener,noreferrer")) {
      notifyMessage("Your browser blocked the preview window. Allow pop-ups for this site and try again.");
    }
  }, "handlePreviewClick");
  const handleImageError = /* @__PURE__ */ __name(() => {
    setImageError(true);
  }, "handleImageError");
  const hasLoadError = loadError !== null;
  const showLoading = isLoading || needsDownload && !loadedBlobUrl && !imageError && !hasLoadError;
  const renderLoading = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center h-64 bg-exp-neutral-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-10" }) }), "renderLoading");
  const renderImagePlaceholder = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 bg-exp-neutral-30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-img", className: "size-16 text-exp-neutral-200 mb-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-neutral-500", children: receipt.filename }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-exp-neutral-300 mt-1", children: "Receipt image" })
  ] }), "renderImagePlaceholder");
  const renderLoadError = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 gap-2 bg-exp-neutral-30 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-10 text-exp-red-500" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-neutral-500 text-center", children: getErrorMessage(loadError, { context: "load", copy: { fallback: "Failed to load receipt." } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "outlined",
        size: "sm",
        onClick: handleRetry,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-4" }),
        children: "Retry"
      }
    )
  ] }), "renderLoadError");
  const renderPdfPreview = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center h-48 bg-exp-neutral-30 cursor-pointer",
      onClick: handlePreviewClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pdf-file-green-check", className: "size-12 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-grey-700 text-center px-2 max-w-full truncate", children: receipt.filename }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-exp-grey-600 mt-1", children: "PDF preview isn't available." })
      ]
    }
  ), "renderPdfPreview");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "RECEIPT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 justify-center items-center flex"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden bg-exp-neutral-30 border border-exp-primary-blue-100", children: [
      showLoading && renderLoading(),
      !showLoading && !hasLoadError && isImage && !imageError && displayUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: displayUrl,
          alt: "Receipt",
          loading: "lazy",
          className: `w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity ${stretchToFill ? "" : "max-h-80"}`,
          onError: handleImageError,
          onClick: handlePreviewClick
        }
      ),
      !showLoading && hasLoadError && renderLoadError(),
      !showLoading && !hasLoadError && isImage && (imageError || !displayUrl) && renderImagePlaceholder(),
      !showLoading && !hasLoadError && isPdf && renderPdfPreview(),
      !showLoading && displayUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handlePreviewClick,
          className: "absolute bottom-2 left-2 p-1.5 bg-white/70 backdrop-blur-sm hover:bg-white rounded-full shadow-sm transition-colors",
          title: "Preview file",
          "aria-label": "Preview file",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 text-exp-neutral-600" })
        }
      )
    ] }) })
  ] });
}, "PreviewReceiptSection");
const AFFIDAVIT_DECLARATION = "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable.";
const AFFIDAVIT_DISCLAIMER = "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action.";
const PreviewAffidavitSection = /* @__PURE__ */ __name(({ affidavit }) => {
  if (!affidavit) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "AFFIDAVIT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-exp-yellow-200 bg-exp-yellow-100 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-yellow-900 mb-4", children: AFFIDAVIT_DECLARATION }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2 py-0.5 bg-exp-yellow-200 text-exp-yellow-800 text-xs font-medium rounded mb-2", children: "Justification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-grey-900", children: affidavit.justification })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-yellow-900 mb-4", children: AFFIDAVIT_DISCLAIMER }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2 py-0.5 bg-exp-yellow-200 text-exp-yellow-800 text-xs font-medium rounded mb-2", children: "Digital signature" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-neutral-900", children: affidavit.digitalSignature })
      ] })
    ] }) })
  ] });
}, "PreviewAffidavitSection");
const PreviewField = /* @__PURE__ */ __name(({ label, value, className = "", icon }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-xs text-exp-neutral-300 mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-normal text-sm text-exp-grey-900 wrap-anywhere relative", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-6", children: icon }),
      value || "—"
    ] })
  ] });
}, "PreviewField");
const TAX_CURRENCY_CODE = "CAD";
const TAX_CURRENCY_SYMBOL = "$";
const PreviewExpenseDetailsSection = /* @__PURE__ */ __name(({ data, showTaxWarning }) => {
  var _a, _b;
  const isConvertedTotal = isConvertedExpense((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code);
  const hasTaxData = !!(data.taxType || data.taxAmount);
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { data: taxTypes } = useTaxTypesDisplay({
    companyShortName: (userDefaultCompany == null ? void 0 : userDefaultCompany.shortName) ?? null,
    enabled: !!data.taxType
  });
  const taxTypeDisplay = taxTypes == null ? void 0 : taxTypes.find((tt) => tt.id.toString() === data.taxType);
  const taxAmountWarning = showTaxWarning ? getTaxAmountWarning({
    taxAmount: data.taxAmount,
    taxType: data.taxType,
    taxTypes,
    netAmount: data.netAmount,
    totalAmount: data.totalAmount,
    netCurrency: data.netCurrency,
    totalCurrency: data.totalCurrency
  }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense type", value: data.expenseType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Vendor", value: data.vendor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense date",
          value: data.expenseDate ? formatExpenseDate(data.expenseDate) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense location", value: data.expenseLocation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Payment method",
          value: data.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex w-full min-w-0 items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "credit-card", className: "size-5 shrink-0 text-exp-neutral-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: data.paymentMethod })
          ] })
        }
      ),
      isConvertedTotal ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Receipt total",
            value: formatCurrency(data.netAmount, { currency: data.netCurrency })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Converted total",
            value: formatCurrency(data.totalAmount || "", { currency: data.totalCurrency })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Receipt total",
          value: formatCurrency(data.netAmount, { currency: data.netCurrency })
        }
      ),
      hasTaxData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-2 grid grid-cols-2 gap-x-4", children: [
        data.taxType && taxTypeDisplay && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Tax type",
            value: taxTypeDisplay.displayText
          }
        ),
        data.taxAmount && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PreviewField,
            {
              label: "Tax amount",
              value: formatCurrency(data.taxAmount, { currency: { code: TAX_CURRENCY_CODE, symbol: TAX_CURRENCY_SYMBOL } })
            }
          ),
          showTaxWarning && taxAmountWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-start items-center gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "text-trax-yellow-800 size-3.5", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-trax-yellow-800 font-normal", children: taxAmountWarning })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}, "PreviewExpenseDetailsSection");
const PreviewExpenseJustificationSection = /* @__PURE__ */ __name(({
  data
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "EXPENSE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: data.businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: data.expenseDescription }),
      data.formType === ExpenseFormType.ENTERTAINMENT && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Person entertained", value: data.personsEntertained })
    ] }) })
  ] });
}, "PreviewExpenseJustificationSection");
const formatAllocationAmount = /* @__PURE__ */ __name((amount, currency) => `${amount < 0 ? "-" : ""}${(currency == null ? void 0 : currency.symbol) || EMPTY_CURRENCY_SYMBOL}${Math.abs(amount).toFixed(2)}`, "formatAllocationAmount");
const ALLOCATION_TYPE_LABELS = {
  [ECostAllocation.Project]: "PROJECT",
  [ECostAllocation.Admin]: "ADMIN",
  [ECostAllocation.Rep]: "CCB REP",
  [ECostAllocation.Team]: "CCB TEAM"
};
const formatPercentage = /* @__PURE__ */ __name((value) => {
  if (Number.isInteger(value)) {
    return `${value}%`;
  }
  return `${value.toFixed(2).replace(/\.?0+$/, "")}%`;
}, "formatPercentage");
const getAllocationDisplay = /* @__PURE__ */ __name((allocation) => {
  const entityData = allocation.entityData;
  switch (allocation.type) {
    case ECostAllocation.Project: {
      const poNumber = (entityData == null ? void 0 : entityData.poNumber) || "";
      const supplier = (entityData == null ? void 0 : entityData.supplier) || "";
      const poDisplay = supplier ? `PO ${poNumber} ${supplier}` : poNumber ? `PO ${poNumber}` : allocation.name;
      return {
        primaryText: poDisplay,
        secondaryText: entityData == null ? void 0 : entityData.description,
        allocatedTo: (entityData == null ? void 0 : entityData.projectId) ? {
          code: entityData.projectId,
          description: entityData.projectDescription
        } : void 0
      };
    }
    case ECostAllocation.Admin: {
      const poNumber = (entityData == null ? void 0 : entityData.poNumber) || "";
      const supplier = (entityData == null ? void 0 : entityData.supplier) || "";
      const primaryText = poNumber ? supplier ? `${poNumber} ${supplier}` : poNumber : allocation.name;
      return {
        primaryText,
        secondaryText: entityData == null ? void 0 : entityData.description,
        allocatedTo: (entityData == null ? void 0 : entityData.projectId) ? {
          code: entityData.projectId,
          description: entityData.projectDescription
        } : void 0
      };
    }
    case ECostAllocation.Rep:
      return {
        primaryText: (entityData == null ? void 0 : entityData.name) || allocation.name
      };
    case ECostAllocation.Team: {
      const number2 = (entityData == null ? void 0 : entityData.number) || "";
      const description = (entityData == null ? void 0 : entityData.description) || "";
      return {
        primaryText: number2 && description ? `${number2} / ${description}` : allocation.name
      };
    }
    default:
      return { primaryText: allocation.name };
  }
}, "getAllocationDisplay");
const PreviewCostAllocationSection = /* @__PURE__ */ __name(({
  allocations,
  deferred,
  currency
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: deferred ? "shadow-none border-0 bg-transparent p-0 gap-0" : "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: deferred ? "p-0 gap-0" : "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr,
        {
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "bg-peachy-yellow flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ys,
        {
          id: "deferred-to-approver",
          label: "Deferred to approver",
          checked: true,
          disabled: true
        }
      )
    ] }) }),
    allocations && !deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: allocations.map((allocation, index) => {
      const { primaryText, secondaryText, allocatedTo } = getAllocationDisplay(allocation);
      const isLast = index === allocations.length - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex items-start gap-4 ${!isLast ? "pb-4 border-b border-exp-primary-blue-100" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 shrink-0 inline-flex mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-exp-neutral-300 uppercase tracking-wide whitespace-nowrap", children: ALLOCATION_TYPE_LABELS[allocation.type] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-900", children: primaryText }),
              secondaryText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600 wrap-break-word", children: secondaryText }),
              allocatedTo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-900", children: allocatedTo.code }),
                allocatedTo.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600 wrap-break-word", children: allocatedTo.description })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-right flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jr, { className: "rounded-lg bg-exp-primary-blue-50 text-exp-neutral-900 hover:bg-exp-primary-blue-50", children: [
              formatAllocationAmount(allocation.amount, currency),
              " (",
              formatPercentage(allocation.percentage),
              ")"
            ] }) })
          ]
        },
        allocation.id
      );
    }) }) })
  ] });
}, "PreviewCostAllocationSection");
const { useEffect: useEffect$k, useRef: useRef$h, useState: useState$9 } = await importShared("react");
const getFileIcon = /* @__PURE__ */ __name((mimeType) => {
  if (mimeType === "application/pdf") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-pdf", className: "size-5" });
  }
  if (mimeType.startsWith("image/")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-img", className: "size-5" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-5 text-exp-neutral-500" });
}, "getFileIcon");
const PreviewSupportingFilesSection = /* @__PURE__ */ __name(({
  files
}) => {
  const [loadingFileIds, setLoadingFileIds] = useState$9(/* @__PURE__ */ new Set());
  const [cachedBlobUrls, setCachedBlobUrls] = useState$9(/* @__PURE__ */ new Map());
  const controllersRef = useRef$h(/* @__PURE__ */ new Map());
  useEffect$k(() => {
    return () => {
      controllersRef.current.forEach((c) => c.abort());
      cachedBlobUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);
  const handleFileClick = /* @__PURE__ */ __name(async (file) => {
    const directUrl = resolveFileUrl(file.blobUrl, file.url);
    if (file.blobUrl || !isApiFileUrl(file.url)) {
      window.open(directUrl, "_blank", "noopener,noreferrer");
      return;
    }
    const cached = cachedBlobUrls.get(file.id);
    if (cached) {
      window.open(cached, "_blank", "noopener,noreferrer");
      return;
    }
    if (loadingFileIds.has(file.id)) return;
    const controller = new AbortController();
    controllersRef.current.set(file.id, controller);
    setLoadingFileIds((prev) => new Set(prev).add(file.id));
    try {
      const blobUrl = await downloadFileAsBlob(file.id, controller.signal);
      setCachedBlobUrls((prev) => new Map(prev).set(file.id, blobUrl));
      window.open(blobUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      if (controller.signal.aborted) return;
      devError("Supporting file download failed:", error);
      notifyError(error, { context: "action", copy: { fallback: "Failed to download file. Please try again." } });
    } finally {
      controllersRef.current.delete(file.id);
      setLoadingFileIds((prev) => {
        const next = new Set(prev);
        next.delete(file.id);
        return next;
      });
    }
  }, "handleFileClick");
  if (!files || files.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "SUPPORTING FILES",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-neutral-30 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((file) => {
      const isLoading = loadingFileIds.has(file.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: /* @__PURE__ */ __name(() => handleFileClick(file), "onClick"),
          disabled: isLoading,
          className: "flex items-center gap-2 px-2 py-1 bg-exp-primary-blue-50 rounded-lg w-fit group cursor-pointer disabled:cursor-wait",
          children: [
            isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4 shrink-0" }) : getFileIcon(file.mimeType),
            /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "text-xs font-medium text-exp-neutral-700 group-hover:underline", maxWidth: 200, children: file.filename })
          ]
        },
        file.id
      );
    }) }) })
  ] });
}, "PreviewSupportingFilesSection");
const PreviewAdditionalCommentsSection = /* @__PURE__ */ __name(({
  comments
}) => {
  if (!comments) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "ADDITIONAL COMMENTS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-900 wrap-break-word", children: comments }) })
  ] });
}, "PreviewAdditionalCommentsSection");
const PreviewMileageTripDetailsSection = /* @__PURE__ */ __name(({ data }) => {
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Cs, { className: "p-0 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr,
        {
          title: "MILEAGE DETAILS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      data.isRoundTrip && /* @__PURE__ */ jsxRuntimeExports.jsx(jr, { className: "bg-exp-neutral-30 text-exp-neutral-600 font-medium hover:bg-none! cursor-default", children: "Round trip" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Mileage type", value: data.mileageType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense date",
          value: data.expenseDate ? formatExpenseDate(data.expenseDate) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "From", value: data.fromLocation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "To",
          value: data.toLocation,
          icon: data.isRoundTrip ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sync-alt", className: "size-4 text-exp-neutral-500" }) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Total distance",
            value: formatDistance(data.totalDistance, data.rateUnit)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Rate",
            value: data.ratePerUnit && data.rateUnit ? formatRate(data.ratePerUnit, data.rateUnit, { currency }) : void 0
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Reimbursable amount",
          value: data.reimbursableAmount ? formatCurrency(data.reimbursableAmount, { currency }) : void 0
        }
      )
    ] }) })
  ] });
}, "PreviewMileageTripDetailsSection");
const PreviewMileagePeriodDetailsSection = /* @__PURE__ */ __name(({ data }) => {
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "MILEAGE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Mileage type", value: data.mileageType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense period",
          value: data.expensePeriod ? formatExpensePeriod(data.expensePeriod) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Total distance",
            value: formatDistance(data.totalDistance, data.rateUnit)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Rate",
            value: data.ratePerUnit && data.rateUnit ? formatRate(data.ratePerUnit, data.rateUnit, { currency }) : void 0
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Reimbursable amount",
          value: data.reimbursableAmount ? formatCurrency(data.reimbursableAmount, { currency }) : void 0
        }
      )
    ] }) })
  ] });
}, "PreviewMileagePeriodDetailsSection");
const PreviewMileageJustificationSection = /* @__PURE__ */ __name(({
  businessPurpose,
  expenseDescription
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "MILEAGE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: expenseDescription })
    ] }) })
  ] });
}, "PreviewMileageJustificationSection");
const ExpensePreview = /* @__PURE__ */ __name(({ expense, renderCostAllocation, showTaxWarning }) => {
  const { data } = expense;
  const hasReceipt = !!data.receiptAttachment;
  const hasAffidavit = data.isReceiptUnavailable && !!data.affidavit;
  const hasSupportingFiles = data.supportingFiles && data.supportingFiles.length > 0;
  const hasLeftColumn = hasReceipt || hasAffidavit || hasSupportingFiles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8", children: [
    hasLeftColumn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 shrink-0 space-y-6 self-start sticky top-0", children: [
      hasReceipt && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewReceiptSection, { receipt: data.receiptAttachment, stretchToFill: !hasSupportingFiles }),
      hasAffidavit && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAffidavitSection, { affidavit: data.affidavit }),
      hasSupportingFiles && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewSupportingFilesSection, { files: data.supportingFiles })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[600px] shrink-0 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewExpenseDetailsSection, { data, showTaxWarning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewExpenseJustificationSection, { data }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      renderCostAllocation ?? /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewCostAllocationSection,
        {
          allocations: data.costAllocations,
          deferred: data.deferToApprover,
          currency: data.totalCurrency
        }
      ),
      data.additionalComments && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAdditionalCommentsSection, { comments: data.additionalComments })
      ] })
    ] })
  ] });
}, "ExpensePreview");
const MileageTripPreview = /* @__PURE__ */ __name(({ mileage, renderCostAllocation }) => {
  const { data } = mileage;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[600px] shrink-0 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewMileageTripDetailsSection, { data }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewMileageJustificationSection,
      {
        businessPurpose: data.businessPurpose,
        expenseDescription: data.expenseDescription
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    renderCostAllocation ?? /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewCostAllocationSection,
      {
        allocations: data.costAllocations,
        deferred: data.deferToApprover,
        currency: data.totalCurrency
      }
    ),
    data.additionalComments && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAdditionalCommentsSection, { comments: data.additionalComments })
    ] })
  ] }) });
}, "MileageTripPreview");
const MileagePeriodPreview = /* @__PURE__ */ __name(({ mileage, renderCostAllocation }) => {
  const { data } = mileage;
  const hasSupportingFiles = data.supportingFiles && data.supportingFiles.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[600px] shrink-0 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewMileagePeriodDetailsSection, { data }),
    hasSupportingFiles && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewSupportingFilesSection, { files: data.supportingFiles })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewMileageJustificationSection,
      {
        businessPurpose: data.businessPurpose,
        expenseDescription: data.expenseDescription
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    renderCostAllocation ?? /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewCostAllocationSection,
      {
        allocations: data.costAllocations,
        deferred: data.deferToApprover,
        currency: data.totalCurrency
      }
    ),
    data.additionalComments && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAdditionalCommentsSection, { comments: data.additionalComments })
    ] })
  ] }) });
}, "MileagePeriodPreview");
const PreviewLoadError = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "alert", className: "flex h-64 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-700", children: ERROR_MESSAGES.PREVIEW_FAILED_TO_LOAD }) }), "PreviewLoadError");
const capitalize = /* @__PURE__ */ __name((value) => value.charAt(0).toUpperCase() + value.slice(1), "capitalize");
const useExpenseFormHistory = /* @__PURE__ */ __name(({
  expenseFormId,
  enabled = true
}) => {
  const logicalCompanyShortName = useCompanyStore(
    (state) => {
      var _a;
      return (_a = state.userDefaultCompany) == null ? void 0 : _a.shortName;
    }
  );
  return useAppQuery({
    queryKey: queryKeys.expenseHistory.detail(
      logicalCompanyShortName ?? "",
      expenseFormId.toString()
    ),
    queryFn: /* @__PURE__ */ __name(async () => {
      var _a;
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_APPROVAL_HISTORY.build({
          tenant: logicalCompanyShortName,
          expenseFormId: expenseFormId.toString()
        })
      );
      const history = ((_a = response.data.history) == null ? void 0 : _a.map((entry) => ({
        ...entry,
        actionType: mapActionType(entry.actionType),
        formStatus: mapFormStatus(entry.formStatus)
      }))) ?? [];
      return {
        ...response.data,
        history
      };
    }, "queryFn"),
    enabled: enabled && !!logicalCompanyShortName && !!expenseFormId,
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  });
}, "useExpenseFormHistory");
const ExpenseHistoryLogEntry = /* @__PURE__ */ __name(({ entry }) => {
  const formattedTimestamp = formatHistoryTimestamp(entry.actionTimestamp);
  const actionLabel = capitalize(entry.actionType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs w-auto font-semibold text-exp-neutral-600 whitespace-nowrap", children: [
      actionLabel,
      " by ",
      entry.actorFullName,
      " ",
      formattedTimestamp
    ] }),
    entry.comment && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: h("text-xs italic wrap-anywhere text-exp-neutral-600", {
          "text-exp-red-500": entry.actionType === ActionType.Rejected,
          "text-exp-grey-600": entry.actionType === ActionType.Cancelled
        }),
        children: [
          '"',
          entry.comment,
          '"'
        ]
      }
    )
  ] });
}, "ExpenseHistoryLogEntry");
const { useState: useState$8 } = await importShared("react");
const ExpenseFormHistoryLog = /* @__PURE__ */ __name(({
  expenseFormId,
  className = ""
}) => {
  var _a, _b;
  const [open, setOpen] = useState$8(false);
  const query = useExpenseFormHistory({ expenseFormId });
  const { data: historyData, isLoading, isError } = query;
  const failure = useErrorSurface(query, { fallback: "Failed to load history. Please try again." });
  const mostRecentStatus = ((_b = (_a = historyData == null ? void 0 : historyData.history) == null ? void 0 : _a[0]) == null ? void 0 : _b.formStatus) ?? null;
  const statusLabel = mostRecentStatus ? capitalize(mostRecentStatus) : null;
  const handleOpenChange = /* @__PURE__ */ __name((newOpen) => {
    setOpen(newOpen);
  }, "handleOpenChange");
  const renderContent = /* @__PURE__ */ __name(() => {
    var _a2;
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-6 text-exp-primary-blue-600" }) });
    }
    if (isError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 px-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-700 text-center mb-4", children: (_a2 = failure.presentation) == null ? void 0 : _a2.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            onClick: failure.retry,
            disabled: failure.isRetrying,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-4" }),
            children: failure.isRetrying ? "Retrying..." : "Retry"
          }
        )
      ] });
    }
    if (!(historyData == null ? void 0 : historyData.history) || historyData.history.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-500 text-center w-full text-nowrap", children: "No history available for this expense form." }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 py-3 px-4", children: historyData.history.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseHistoryLogEntry, { entry }, entry.id)) });
  }, "renderContent");
  const getStatusColor = /* @__PURE__ */ __name((status) => {
    if (!status || isLoading)
      return "bg-exp-grey-100 text-exp-primary-blue-800";
    switch (status) {
      case ExpenseFormStatus.Draft:
        return "bg-exp-neutral-100 text-exp-neutral-700";
      case ExpenseFormStatus.Submitted:
        return "bg-exp-primary-blue-100 text-exp-primary-blue-600";
      case ExpenseFormStatus.Approved:
        return "bg-exp-green-100 text-exp-green-800";
      case ExpenseFormStatus.Rejected:
        return "bg-exp-red-100 text-exp-red-600";
      case ExpenseFormStatus.Cancelled:
        return "bg-exp-grey-100 text-exp-primary-blue-800";
      default:
        return "bg-exp-grey-100 text-exp-primary-blue-800";
    }
  }, "getStatusColor");
  if (!isLoading && !isError && !mostRecentStatus) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(wt, { open, onOpenChange: handleOpenChange, modal: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(zt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "outlined",
        size: "sm",
        className: h(
          "text-sm rounded-full py-1 px-2 hover:cursor-pointer",
          getStatusColor(mostRecentStatus),
          className
        ),
        children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          statusLabel,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-4" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      yt,
      {
        side: "bottom",
        align: "start",
        className: "rounded-lg flex w-min bg-exp-neutral-0 p-0",
        children: renderContent()
      }
    )
  ] });
}, "ExpenseFormHistoryLog");
function parseOptionalInt(value) {
  if (!value || value.trim() === "") return null;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed) || parsed === 0) return null;
  return parsed;
}
__name(parseOptionalInt, "parseOptionalInt");
function parseOptionalDecimal(value) {
  if (!value || value.trim() === "") return null;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}
__name(parseOptionalDecimal, "parseOptionalDecimal");
function mapCostAllocation(allocation) {
  const entityData = allocation.entityData;
  const base = {
    amount: allocation.amount,
    percentage: allocation.percentage
  };
  switch (allocation.type) {
    case ECostAllocation.Rep:
      return {
        ...base,
        salesRepId: (entityData == null ? void 0 : entityData.id) ?? null
      };
    case ECostAllocation.Team:
      return {
        ...base,
        teamId: (entityData == null ? void 0 : entityData.id) ? parseInt(entityData.id, 10) : null
      };
    case ECostAllocation.Project:
      return {
        ...base,
        projectId: (entityData == null ? void 0 : entityData.projectDbId) ?? null,
        purchaseOrderId: (entityData == null ? void 0 : entityData.poDbId) ?? null,
        supplierId: (entityData == null ? void 0 : entityData.supplierId) ?? null
      };
    case ECostAllocation.Admin:
      return {
        ...base,
        projectId: (entityData == null ? void 0 : entityData.projectDbId) ?? null,
        purchaseOrderId: (entityData == null ? void 0 : entityData.poDbId) ?? null,
        supplierId: (entityData == null ? void 0 : entityData.supplierId) ?? null
      };
    default:
      return base;
  }
}
__name(mapCostAllocation, "mapCostAllocation");
function hasAllocationTarget(allocation) {
  return allocation.salesRepId != null || Number.isFinite(allocation.teamId) || Number.isFinite(allocation.projectId) && Number.isFinite(allocation.purchaseOrderId) && Number.isFinite(allocation.supplierId);
}
__name(hasAllocationTarget, "hasAllocationTarget");
function mapCostAllocations(allocations) {
  return (allocations ?? []).map(mapCostAllocation).filter(hasAllocationTarget);
}
__name(mapCostAllocations, "mapCostAllocations");
function mapFormDataToCreateRequest(data, expenseTypes) {
  var _a, _b, _c, _d, _e, _f, _g;
  const typeId = parseOptionalInt(data.expenseType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  const isConverted = isConvertedExpense((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code);
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? null,
    vendor: data.vendor || null,
    date: formatToISODate(data.expenseDate),
    locationId: parseOptionalInt(data.expenseLocation),
    paymentMethodId: parseOptionalInt(data.paymentMethod),
    foreignAmount: isConverted ? parseOptionalDecimal(data.netAmount) : null,
    totalAmount: isConverted ? parseOptionalDecimal(data.totalAmount) : parseOptionalDecimal(data.netAmount),
    taxTypeId: parseOptionalInt(data.taxType),
    tax: parseOptionalDecimal(data.taxAmount),
    businessPurposeId: parseOptionalInt(data.businessPurpose),
    description: data.expenseDescription || null,
    personsEntertained: data.personsEntertained || null,
    additionalComments: data.additionalComments || null,
    affidavitJustification: ((_c = data.affidavit) == null ? void 0 : _c.justification) || null,
    affidavitInitials: ((_d = data.affidavit) == null ? void 0 : _d.digitalSignature) || null,
    // Tax currency is always CAD per business rules (TRX-117)
    // Optimally returns CAD only when tax fields are showing, but difficult to check, so this is next best solution
    taxCurrencyCode: data.taxAmount ? DEFAULT_CURRENCY_CODE : null,
    foreignCurrencyCode: isConverted ? ((_e = data.netCurrency) == null ? void 0 : _e.code) || null : null,
    totalCurrencyCode: isConverted ? ((_f = data.totalCurrency) == null ? void 0 : _f.code) || null : ((_g = data.netCurrency) == null ? void 0 : _g.code) || null,
    costAllocationDeferred: data.deferToApprover ?? null,
    costAllocations: mapCostAllocations(data.costAllocations)
  };
}
__name(mapFormDataToCreateRequest, "mapFormDataToCreateRequest");
const mapFormDataToUpdateRequest = mapFormDataToCreateRequest;
const { useMemo: useMemo$k } = await importShared("react");
const ExpenseTypeSelect = /* @__PURE__ */ __name(({
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  placeholder = "Select expense type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingTypes } = useExpenseTypes(companyId, {
    formTypeIds: [FormTypeId.STANDARD, FormTypeId.ENTERTAINMENT]
  });
  const options = useMemo$k(() => {
    if (!expenseTypes) return [];
    return expenseTypes.map((et) => ({ value: et.id, label: et.name })).sort((a, b) => a.label.localeCompare(b.label));
  }, [expenseTypes]);
  const isLoading = isLoadingCompany || isLoadingTypes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingTypes ? "Loading expense types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ba,
    {
      label: "Expense type",
      placeholder: displayPlaceholder,
      options,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled: disabled || isLoading || !companyId,
      error
    }
  );
}, "ExpenseTypeSelect");
const receiptInitialState = {
  pendingFile: null,
  uploadedAttachment: null,
  status: "idle",
  errorMessage: null
};
const supportingFilesInitialState = {
  pendingFiles: [],
  uploadedFiles: [],
  status: "idle",
  errorMessage: null
};
const usePendingUploadStore = create()(
  devtools(
    (set, get) => ({
      targetDraftId: null,
      receipt: {
        ...receiptInitialState,
        setPendingFile: /* @__PURE__ */ __name((file) => set((state) => ({
          receipt: { ...state.receipt, pendingFile: file }
        })), "setPendingFile"),
        clearPendingFile: /* @__PURE__ */ __name(() => set((state) => ({
          receipt: { ...state.receipt, pendingFile: null }
        })), "clearPendingFile"),
        setUploadedAttachment: /* @__PURE__ */ __name((attachment) => set((state) => ({
          receipt: {
            ...state.receipt,
            uploadedAttachment: attachment,
            status: "complete"
          }
        })), "setUploadedAttachment"),
        clearUploadedAttachment: /* @__PURE__ */ __name(() => set((state) => ({
          receipt: {
            ...state.receipt,
            uploadedAttachment: null,
            status: "idle"
          }
        })), "clearUploadedAttachment"),
        setStatus: /* @__PURE__ */ __name((status, error) => set((state) => ({
          receipt: {
            ...state.receipt,
            status,
            errorMessage: error || null
          }
        })), "setStatus")
      },
      supportingFiles: {
        ...supportingFilesInitialState,
        setPendingFiles: /* @__PURE__ */ __name((files) => set((state) => ({
          supportingFiles: { ...state.supportingFiles, pendingFiles: files }
        })), "setPendingFiles"),
        clearPendingFiles: /* @__PURE__ */ __name(() => set((state) => ({
          supportingFiles: { ...state.supportingFiles, pendingFiles: [] }
        })), "clearPendingFiles"),
        setUploadedFiles: /* @__PURE__ */ __name((attachments) => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            uploadedFiles: attachments,
            status: "complete"
          }
        })), "setUploadedFiles"),
        addUploadedFiles: /* @__PURE__ */ __name((attachments) => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            uploadedFiles: [...state.supportingFiles.uploadedFiles, ...attachments],
            status: "complete"
          }
        })), "addUploadedFiles"),
        clearUploadedFiles: /* @__PURE__ */ __name(() => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            uploadedFiles: [],
            status: "idle"
          }
        })), "clearUploadedFiles"),
        setStatus: /* @__PURE__ */ __name((status, error) => set((state) => ({
          supportingFiles: {
            ...state.supportingFiles,
            status,
            errorMessage: error || null
          }
        })), "setStatus")
      },
      startUploadFlow: /* @__PURE__ */ __name((draftId) => set((state) => ({
        targetDraftId: draftId,
        receipt: {
          ...state.receipt,
          status: "idle",
          errorMessage: null
        },
        supportingFiles: {
          ...state.supportingFiles,
          status: "idle",
          errorMessage: null
        }
      })), "startUploadFlow"),
      updateDraftId: /* @__PURE__ */ __name((newDraftId) => set({ targetDraftId: newDraftId }), "updateDraftId"),
      reset: /* @__PURE__ */ __name(() => set({
        targetDraftId: null,
        receipt: { ...get().receipt, ...receiptInitialState },
        supportingFiles: { ...get().supportingFiles, ...supportingFilesInitialState }
      }), "reset"),
      isForDraft: /* @__PURE__ */ __name((draftId) => {
        const { targetDraftId } = get();
        if (!targetDraftId && !draftId) return true;
        return targetDraftId === draftId;
      }, "isForDraft")
    }),
    {
      name: "pending-upload-storage"
    }
  )
);
const { useCallback: useCallback$o, useEffect: useEffect$j, useMemo: useMemo$j, useRef: useRef$g } = await importShared("react");
function useBlobUrlManager(options = {}) {
  const { shouldKeepUrl } = options;
  const blobUrlsRef = useRef$g(/* @__PURE__ */ new Set());
  const abortControllerRef = useRef$g(null);
  const batchControllersRef = useRef$g(/* @__PURE__ */ new Set());
  const shouldKeepUrlRef = useRef$g(shouldKeepUrl);
  shouldKeepUrlRef.current = shouldKeepUrl;
  const trackUrl = useCallback$o((url) => {
    blobUrlsRef.current.add(url);
  }, []);
  const revokeUrl = useCallback$o((url) => {
    blobUrlsRef.current.delete(url);
    try {
      URL.revokeObjectURL(url);
    } catch {
    }
  }, []);
  const isOwned = useCallback$o((url) => {
    return blobUrlsRef.current.has(url);
  }, []);
  const getAbortSignal = useCallback$o(() => {
    var _a;
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
    abortControllerRef.current = new AbortController();
    return abortControllerRef.current.signal;
  }, []);
  const createBatchController = useCallback$o(() => {
    const controller = new AbortController();
    batchControllersRef.current.add(controller);
    controller.signal.addEventListener("abort", () => {
      batchControllersRef.current.delete(controller);
    });
    const release = /* @__PURE__ */ __name(() => {
      batchControllersRef.current.delete(controller);
    }, "release");
    return Object.assign(controller, { release });
  }, []);
  useEffect$j(() => {
    const urls = blobUrlsRef.current;
    const batchControllers = batchControllersRef.current;
    return () => {
      var _a;
      (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
      [...batchControllers].forEach((controller) => controller.abort());
      batchControllers.clear();
      urls.forEach((url) => {
        var _a2;
        if ((_a2 = shouldKeepUrlRef.current) == null ? void 0 : _a2.call(shouldKeepUrlRef, url)) {
          devWarn("[BlobUrlManager] cleanup: KEEPING url (parent needs it):", url.substring(0, 30));
          return;
        }
        devWarn("[BlobUrlManager] cleanup: REVOKING url:", url.substring(0, 30));
        try {
          URL.revokeObjectURL(url);
        } catch {
        }
      });
      urls.clear();
    };
  }, []);
  return useMemo$j(
    () => ({
      trackUrl,
      revokeUrl,
      isOwned,
      getAbortSignal,
      createBatchController
    }),
    [trackUrl, revokeUrl, isOwned, getAbortSignal, createBatchController]
  );
}
__name(useBlobUrlManager, "useBlobUrlManager");
var ExpenseFormField = /* @__PURE__ */ ((ExpenseFormField2) => {
  ExpenseFormField2["ExpenseType"] = "expenseType";
  ExpenseFormField2["Vendor"] = "vendor";
  ExpenseFormField2["ExpenseDate"] = "expenseDate";
  ExpenseFormField2["ExpenseLocation"] = "expenseLocation";
  ExpenseFormField2["PaymentMethod"] = "paymentMethod";
  ExpenseFormField2["NetAmount"] = "netAmount";
  ExpenseFormField2["TotalAmount"] = "totalAmount";
  ExpenseFormField2["TaxType"] = "taxType";
  ExpenseFormField2["TaxAmount"] = "taxAmount";
  ExpenseFormField2["BusinessPurpose"] = "businessPurpose";
  ExpenseFormField2["ExpenseDescription"] = "expenseDescription";
  ExpenseFormField2["PersonsEntertained"] = "personsEntertained";
  ExpenseFormField2["AdditionalComments"] = "additionalComments";
  ExpenseFormField2["ReceiptAttachment"] = "receiptAttachment";
  ExpenseFormField2["IsReceiptUnavailable"] = "isReceiptUnavailable";
  ExpenseFormField2["Affidavit"] = "affidavit";
  ExpenseFormField2["SupportingFiles"] = "supportingFiles";
  ExpenseFormField2["NetCurrency"] = "netCurrency";
  ExpenseFormField2["TotalCurrency"] = "totalCurrency";
  ExpenseFormField2["CostAllocations"] = "costAllocations";
  ExpenseFormField2["IsEqualSplit"] = "isEqualSplit";
  ExpenseFormField2["DeferToApprover"] = "deferToApprover";
  return ExpenseFormField2;
})(ExpenseFormField || {});
const getDraftSaveableFields = /* @__PURE__ */ __name(() => [
  ExpenseFormField.ExpenseType,
  ExpenseFormField.Vendor,
  ExpenseFormField.ExpenseDate,
  ExpenseFormField.ExpenseLocation,
  ExpenseFormField.PaymentMethod,
  ExpenseFormField.NetAmount,
  ExpenseFormField.TotalAmount,
  ExpenseFormField.TaxType,
  ExpenseFormField.TaxAmount,
  ExpenseFormField.BusinessPurpose,
  ExpenseFormField.ExpenseDescription,
  ExpenseFormField.PersonsEntertained,
  ExpenseFormField.AdditionalComments
], "getDraftSaveableFields");
const COST_ALLOCATION_CONSTANTS = {
  DECIMAL_PLACES: 2,
  MIN_SEARCH_LENGTH: 2,
  SEARCH_DELAY_MS: 300,
  LABELS: {
    PURCHASE_ORDER: "Purchase Order (PO)",
    EQUAL_SPLIT: "Equal Split",
    ADD_ALLOCATION: "Add Allocation"
  },
  TOLERANCE: {
    // Account for floating point error (found in cost allocation total percentage calculation in src\features\expense\form\lib\schemas\sections\cost-allocation.ts:38)
    FLOATING_POINT: 0.00999999999999
  }
};
const COST_ALLOCATION_LABELS = COST_ALLOCATION_CONSTANTS.LABELS;
const COST_ALLOCATION_TOLERANCE = COST_ALLOCATION_CONSTANTS.TOLERANCE.FLOATING_POINT;
const DECIMAL_PLACES = COST_ALLOCATION_CONSTANTS.DECIMAL_PLACES;
const MIN_SEARCH_LENGTH = COST_ALLOCATION_CONSTANTS.MIN_SEARCH_LENGTH;
const SEARCH_DELAY_MS = COST_ALLOCATION_CONSTANTS.SEARCH_DELAY_MS;
const FILE_UPLOAD_TIMEOUT = 12e4;
const FILE_UPLOAD_MAX_RETRIES = 2;
const DEFAULT_PAYMENT_METHOD = { id: "1" };
const allowsNegativeAmounts = /* @__PURE__ */ __name((paymentMethodId) => !!paymentMethodId && paymentMethodId !== DEFAULT_PAYMENT_METHOD.id, "allowsNegativeAmounts");
const DEFAULT_MILEAGE_VENDOR = "N/A";
const getFileExtension = /* @__PURE__ */ __name((filename) => {
  if (!filename) return "unknown";
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex <= 0) return "unknown";
  return filename.slice(lastDotIndex + 1).toLowerCase() || "unknown";
}, "getFileExtension");
const getSafeFileExtension = /* @__PURE__ */ __name((filename) => {
  return getFileExtension(filename).replace(/[^a-z0-9]/g, "") || "unknown";
}, "getSafeFileExtension");
const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /<iframe/gi,
  /<embed/gi,
  /<object/gi,
  /data:text\/html/gi
];
const MAX_FILENAME_LENGTH = 255;
const sanitizeFileName = /* @__PURE__ */ __name((fileName) => {
  if (!fileName || typeof fileName !== "string") {
    return "unnamed_file";
  }
  let sanitized = fileName.trim();
  sanitized = sanitized.replace(/\.\./g, "");
  sanitized = sanitized.replace(/[/\\]/g, "_");
  sanitized = sanitized.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
  sanitized = sanitized.replace(/[<>:"'|?*]/g, "_");
  if (sanitized.length > MAX_FILENAME_LENGTH) {
    const extension = sanitized.split(".").pop();
    const nameWithoutExt = sanitized.substring(0, sanitized.lastIndexOf("."));
    const maxNameLength = MAX_FILENAME_LENGTH - (extension ? extension.length + 1 : 0);
    sanitized = nameWithoutExt.substring(0, maxNameLength) + (extension ? `.${extension}` : "");
  }
  if (!sanitized || sanitized === "." || sanitized === "..") {
    sanitized = `file_${Date.now()}`;
  }
  return sanitized;
}, "sanitizeFileName");
const sanitizeUrl = /* @__PURE__ */ __name((url) => {
  if (!url || typeof url !== "string") {
    return null;
  }
  const trimmedUrl = url.trim();
  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(trimmedUrl)) {
      devWarn("Potentially dangerous URL detected:", trimmedUrl);
      return null;
    }
  }
  if (trimmedUrl.startsWith("/") && !trimmedUrl.startsWith("//")) {
    if (trimmedUrl.includes("..") || trimmedUrl.includes("\\")) {
      return null;
    }
    return trimmedUrl;
  }
  const allowedProtocols = ["http:", "https:", "blob:", "data:"];
  try {
    const urlObj = new URL(trimmedUrl);
    if (!allowedProtocols.includes(urlObj.protocol)) {
      return null;
    }
    if (urlObj.protocol === "data:") {
      const dataUrlPattern = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9+.-]+)(;base64)?,/;
      if (!dataUrlPattern.test(trimmedUrl)) {
        return null;
      }
      const safeMimeTypes = Object.values(AllowedMimeType);
      const mimeTypeMatch = trimmedUrl.match(/^data:([^;,]+)/);
      if (mimeTypeMatch && !safeMimeTypes.includes(mimeTypeMatch[1])) {
        return null;
      }
    }
    return trimmedUrl;
  } catch {
    return null;
  }
}, "sanitizeUrl");
const validateFileContent = /* @__PURE__ */ __name(async (file) => {
  var _a;
  const fileSignatures = [
    {
      mimeTypes: [AllowedMimeType.PNG],
      signatures: [new Uint8Array([137, 80, 78, 71])],
      description: "PNG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.JPEG, AllowedMimeType.JPG],
      signatures: [
        new Uint8Array([255, 216, 255])
      ],
      description: "JPEG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.PDF],
      signatures: [new Uint8Array([37, 80, 68, 70])],
      description: "PDF document signature"
    },
    {
      mimeTypes: [AllowedMimeType.WEBP],
      signatures: [
        new Uint8Array([82, 73, 70, 70])
      ],
      description: "WebP image signature (RIFF container)"
    }
  ];
  try {
    const headerSize = 512;
    const arrayBuffer = await file.slice(0, headerSize).arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let detectedType = null;
    for (const check of fileSignatures) {
      const matches = check.signatures.some((signature) => {
        if (bytes.length < signature.length) return false;
        return signature.every((byte, index) => bytes[index] === byte);
      });
      if (matches) {
        detectedType = check.mimeTypes[0];
        break;
      }
    }
    if (detectedType) {
      const maliciousSignatures = [
        [77, 90],
        // MZ (EXE/DLL)
        [127, 69, 76, 70],
        // ELF (Linux executable)
        [202, 254, 186, 190],
        // Mach-O (macOS executable)
        [35, 33],
        // #! (Shell script)
        [60, 63, 112, 104, 112]
      ];
      for (let i = 1; i < Math.min(bytes.length - 4, headerSize - 4); i++) {
        for (const malSig of maliciousSignatures) {
          if (malSig.every((byte, offset) => bytes[i + offset] === byte)) {
            return {
              isValid: false,
              message: "File contains suspicious executable patterns. Possible polyglot attack."
            };
          }
        }
      }
    }
    if (detectedType === AllowedMimeType.WEBP) {
      const webpCheck = new Uint8Array([87, 69, 66, 80]);
      const webpMatches = webpCheck.every((byte, index) => bytes[index + 8] === byte);
      if (!webpMatches) {
        detectedType = null;
      }
    }
    if (detectedType === AllowedMimeType.PDF) {
      const pdfText = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
      const dangerousPatterns = [
        "/JavaScript",
        "/JS",
        "/Launch",
        "/SubmitForm",
        "/ImportData"
      ];
      if (dangerousPatterns.some((pattern) => pdfText.includes(pattern))) {
        devWarn("PDF contains potentially dangerous features:", pdfText.substring(0, 200));
      }
    }
    if (!detectedType) {
      return {
        isValid: false,
        message: "Unable to verify file type. File content does not match any supported format."
      };
    }
    const expectedTypes = ((_a = fileSignatures.find(
      (s) => s.mimeTypes.includes(detectedType)
    )) == null ? void 0 : _a.mimeTypes) || [];
    if (expectedTypes.includes(file.type)) {
      return { isValid: true, actualMimeType: detectedType };
    }
    return {
      isValid: false,
      actualMimeType: detectedType,
      message: `File type mismatch. File appears to be ${detectedType} but was declared as ${file.type}`
    };
  } catch (error) {
    devError("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
}, "validateFileContent");
const createSafeFileMetadata = /* @__PURE__ */ __name((file, response) => {
  return {
    id: response.id || `receipt-${Date.now()}`,
    url: sanitizeUrl(response.url || "") || "",
    blobUrl: response.blobUrl,
    filename: sanitizeFileName(response.fileName || file.name),
    originalName: sanitizeFileName(file.name),
    size: Math.min(response.fileSize || file.size, Number.MAX_SAFE_INTEGER),
    type: getSafeFileExtension(file.name),
    mimeType: response.mimeType || file.type,
    uploadedAt: new Date(response.uploadedAt || Date.now()).toISOString(),
    status: "uploaded"
  };
}, "createSafeFileMetadata");
const rateLimitMap = /* @__PURE__ */ new Map();
const checkRateLimit = /* @__PURE__ */ __name((key, maxRequests = 5, windowMs = 6e4) => {
  const now = Date.now();
  for (const [k, e] of rateLimitMap.entries()) {
    if (now > e.resetTime) {
      rateLimitMap.delete(k);
    }
  }
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }
  if (entry.count >= maxRequests) {
    return false;
  }
  entry.count++;
  return true;
}, "checkRateLimit");
const validateCSPHeaders = /* @__PURE__ */ __name((headers) => {
  const csp = headers.get("Content-Security-Policy");
  if (!csp) return true;
  const unsafePatterns = [
    /unsafe-inline/i,
    /unsafe-eval/i,
    /\*/
  ];
  for (const pattern of unsafePatterns) {
    if (pattern.test(csp)) {
      devWarn("Potentially unsafe CSP directive detected");
      return false;
    }
  }
  return true;
}, "validateCSPHeaders");
const securityUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkRateLimit,
  createSafeFileMetadata,
  sanitizeFileName,
  sanitizeUrl,
  validateCSPHeaders,
  validateFileContent
}, Symbol.toStringTag, { value: "Module" }));
({
  allowedMimeTypes: Object.values(AllowedMimeType)
});
const MIME_TO_EXTENSION_MAP = {
  [AllowedMimeType.PNG]: [".png"],
  [AllowedMimeType.JPEG]: [".jpeg"],
  [AllowedMimeType.JPG]: [".jpg"],
  [AllowedMimeType.WEBP]: [".webp"],
  [AllowedMimeType.HEIC]: [".heic"],
  [AllowedMimeType.HEIF]: [".heif"],
  [AllowedMimeType.PDF]: [".pdf"]
};
const generateAcceptAttribute = /* @__PURE__ */ __name(() => {
  const mimeTypes = Object.values(AllowedMimeType);
  const extensions = mimeTypes.flatMap((mimeType) => MIME_TO_EXTENSION_MAP[mimeType]);
  return [...extensions, ...mimeTypes].join(",");
}, "generateAcceptAttribute");
const receiptUploadInstructions = /* @__PURE__ */ __name(() => `Upload an image (max. ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB) or a PDF (max. ${FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB}MB)`, "receiptUploadInstructions");
const getSupportedFormatsText = /* @__PURE__ */ __name(() => {
  const imageFormats = ["PNG", "JPG/JPEG", "HEIC/HEIF", "WebP"];
  const pdfFormat = "PDF";
  return `Upload ${imageFormats.join(", ")} (max. ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB) or ${pdfFormat} (max. ${FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB}MB)`;
}, "getSupportedFormatsText");
const canBrowserDisplayImage = /* @__PURE__ */ __name((mimeType) => {
  const browserSupportedImages = [
    AllowedMimeType.PNG,
    AllowedMimeType.JPEG,
    AllowedMimeType.JPG,
    AllowedMimeType.WEBP
  ];
  return browserSupportedImages.includes(mimeType);
}, "canBrowserDisplayImage");
const getFilePreviewType = /* @__PURE__ */ __name((mimeType) => {
  const config = MIME_TYPE_CONFIG.get(mimeType);
  if ((config == null ? void 0 : config.type) === FilePreviewType.IMAGE) {
    if (canBrowserDisplayImage(mimeType)) {
      return FilePreviewType.IMAGE;
    }
    return FilePreviewType.UNKNOWN;
  }
  if ((config == null ? void 0 : config.type) === FilePreviewType.PDF) {
    return FilePreviewType.PDF;
  }
  return FilePreviewType.UNKNOWN;
}, "getFilePreviewType");
const isValidMimeType = /* @__PURE__ */ __name((mimeType) => {
  return MIME_TYPE_CONFIG.has(mimeType);
}, "isValidMimeType");
const validateReceiptFile = /* @__PURE__ */ __name((file) => {
  const fileName = file.name.toLowerCase();
  const hasAllowedExtension = [".png", ".jpg", ".jpeg", ".heic", ".heif", ".webp", ".pdf"].some((ext) => fileName.endsWith(ext));
  if (file.type && !isValidMimeType(file.type)) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Received MIME type: ${file.type}`
    };
  }
  if (!file.type && !hasAllowedExtension) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Unknown file type with extension: ${getFileExtension(fileName)}`
    };
  }
  let mimeType = file.type;
  if (!file.type && hasAllowedExtension) {
    if (fileName.endsWith(".heic")) mimeType = AllowedMimeType.HEIC;
    else if (fileName.endsWith(".heif")) mimeType = AllowedMimeType.HEIF;
    else if (fileName.endsWith(".png")) mimeType = AllowedMimeType.PNG;
    else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) mimeType = AllowedMimeType.JPEG;
    else if (fileName.endsWith(".webp")) mimeType = AllowedMimeType.WEBP;
    else if (fileName.endsWith(".pdf")) mimeType = AllowedMimeType.PDF;
  }
  const config = MIME_TYPE_CONFIG.get(mimeType);
  if (!config) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Could not determine file configuration for: ${mimeType}`
    };
  }
  if (file.size > config.maxSizeBytes) {
    return {
      type: "size",
      message: `File size exceeds limit. Max size for ${config.displayName} is ${config.maxSizeMB}MB`,
      details: `File size: ${(file.size / 1024 / 1024).toFixed(1)}MB`
    };
  }
  return null;
}, "validateReceiptFile");
const createErrorAttachment = /* @__PURE__ */ __name((file, errorMessage, index, errorType = "validation") => {
  const idPrefix = errorType === "upload" ? "upload-error" : "error";
  return {
    id: `${idPrefix}-${Date.now()}-${index}`,
    url: "",
    blobUrl: void 0,
    filename: file.name,
    originalName: file.name,
    size: file.size,
    type: getFileExtension(file.name),
    mimeType: file.type,
    uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
    status: "error",
    errorMessage
  };
}, "createErrorAttachment");
const getPlaceholderByType = /* @__PURE__ */ __name((type) => {
  const placeholderMap = {
    [ECostAllocation.Project]: "Enter the complete PO number",
    [ECostAllocation.Admin]: "Enter the complete internal PO number",
    [ECostAllocation.Team]: "Enter sales team # (e.g., 01)",
    [ECostAllocation.Rep]: "Enter sales rep's name"
  };
  return placeholderMap[type];
}, "getPlaceholderByType");
const renderProjectItem = /* @__PURE__ */ __name((item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.data.poNumber }),
      " ",
      item.data.supplier
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
}, "renderProjectItem");
const renderAdminItem = /* @__PURE__ */ __name((item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.data.poNumber }),
      " ",
      item.data.supplier
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
}, "renderAdminItem");
const renderTeamItem = /* @__PURE__ */ __name((item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: item.data.number }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
}, "renderTeamItem");
const renderAllocationItem = /* @__PURE__ */ __name((type, item) => {
  switch (type) {
    case ECostAllocation.Project:
      return renderProjectItem(item);
    case ECostAllocation.Admin:
      return renderAdminItem(item);
    case ECostAllocation.Team:
      return renderTeamItem(item);
    case ECostAllocation.Rep:
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: item.label });
  }
}, "renderAllocationItem");
const getDisplayLabel = /* @__PURE__ */ __name((type, item) => {
  if (!item || !item.data) return void 0;
  const data = item.data;
  switch (type) {
    case ECostAllocation.Project: {
      const poNumber = data.poNumber || "";
      const supplier = data.supplier || "";
      const description = data.description || "";
      return supplier ? `${poNumber} ${supplier} / ${description}` : `${poNumber} / ${description}`;
    }
    case ECostAllocation.Admin: {
      const poNumber = data.poNumber || "";
      const supplier = data.supplier || "";
      const description = data.description || "";
      return supplier ? `${poNumber} ${supplier} / ${description}` : `${poNumber} / ${description}`;
    }
    case ECostAllocation.Team: {
      const number2 = data.number || "";
      const description = data.description || "";
      return `${number2} / ${description}`;
    }
    default:
      return void 0;
  }
}, "getDisplayLabel");
const getProjectDetails = /* @__PURE__ */ __name((item) => {
  if (!item || !item.data) return null;
  const data = item.data;
  const projectId = data.projectId || data.poNumber || "";
  const projectDescription = data.projectDescription || data.description || "";
  if (!projectId) return null;
  return {
    projectId,
    projectDescription
  };
}, "getProjectDetails");
Decimal.set({ precision: 20, rounding: Decimal.ROUND_HALF_UP });
const areAllocationsEqual = /* @__PURE__ */ __name((allocations, totalAmount) => {
  if (allocations.length <= 1) return false;
  const expectedPercentage = 100 / allocations.length;
  if (totalAmount === 0) {
    return allocations.every(
      (allocation) => Math.abs(allocation.percentage - expectedPercentage) < COST_ALLOCATION_TOLERANCE && allocation.amount === 0
    );
  }
  const expectedAmount = totalAmount / allocations.length;
  return allocations.every((allocation, index) => {
    const isLastItem = index === allocations.length - 1;
    if (isLastItem) {
      const sumOfOthers = allocations.slice(0, -1).reduce((sum, a) => sum + a.amount, 0);
      const expectedLastAmount = totalAmount - sumOfOthers;
      return Math.abs(allocation.amount - expectedLastAmount) < COST_ALLOCATION_TOLERANCE;
    }
    return Math.abs(allocation.amount - expectedAmount) < COST_ALLOCATION_TOLERANCE && Math.abs(allocation.percentage - expectedPercentage) < COST_ALLOCATION_TOLERANCE;
  });
}, "areAllocationsEqual");
const calculateEqualDistribution = /* @__PURE__ */ __name((allocations, totalAmount) => {
  if (allocations.length === 0) return allocations;
  if (totalAmount < 0) {
    return calculateEqualDistribution(allocations, -totalAmount).map((allocation) => ({
      ...allocation,
      amount: allocation.amount === 0 ? 0 : -allocation.amount
    }));
  }
  const count = allocations.length;
  if (!totalAmount) {
    const equalPercentageDecimal = new Decimal(100).dividedBy(count);
    const roundedEqualPercentage = parseFloat(
      equalPercentageDecimal.toDecimalPlaces(DECIMAL_PLACES).toString()
    );
    return allocations.map((allocation, index) => {
      const isLastItem = index === count - 1;
      if (isLastItem) {
        const sumOfOthersPercentage = new Decimal(roundedEqualPercentage).times(count - 1);
        const lastPercentage = new Decimal(100).minus(sumOfOthersPercentage);
        return {
          ...allocation,
          amount: 0,
          percentage: parseFloat(lastPercentage.toDecimalPlaces(DECIMAL_PLACES).toString())
        };
      }
      return {
        ...allocation,
        amount: 0,
        percentage: roundedEqualPercentage
      };
    });
  }
  const totalDecimal = new Decimal(totalAmount);
  const countDecimal = new Decimal(count);
  const equalAmountDecimal = totalDecimal.dividedBy(countDecimal);
  const baseAmount = parseFloat(
    equalAmountDecimal.toDecimalPlaces(DECIMAL_PLACES, Decimal.ROUND_DOWN).toString()
  );
  const totalBaseAmount = new Decimal(baseAmount).times(count);
  const remainder = totalDecimal.minus(totalBaseAmount);
  const extraCent = new Decimal(0.01);
  const itemsWithExtra = Math.floor(remainder.dividedBy(extraCent).toNumber());
  const amounts = allocations.map((_, index) => {
    const shouldGetExtra = index < itemsWithExtra;
    const amount = shouldGetExtra ? parseFloat(new Decimal(baseAmount).plus(extraCent).toDecimalPlaces(DECIMAL_PLACES).toString()) : baseAmount;
    return amount;
  });
  const percentages = amounts.map((amount, index) => {
    const isLastItem = index === count - 1;
    if (isLastItem) {
      const sumOfOthersPercentage = amounts.slice(0, -1).reduce((sum, amt) => {
        const pct = new Decimal(amt).dividedBy(totalDecimal).times(100);
        const roundedPct = parseFloat(pct.toDecimalPlaces(DECIMAL_PLACES).toString());
        return sum.plus(roundedPct);
      }, new Decimal(0));
      return parseFloat(
        new Decimal(100).minus(sumOfOthersPercentage).toDecimalPlaces(DECIMAL_PLACES).toString()
      );
    }
    return parseFloat(
      new Decimal(amount).dividedBy(totalDecimal).times(100).toDecimalPlaces(DECIMAL_PLACES).toString()
    );
  });
  return allocations.map((allocation, index) => ({
    ...allocation,
    amount: amounts[index],
    percentage: percentages[index]
  }));
}, "calculateEqualDistribution");
const recalculatePercentages = /* @__PURE__ */ __name((allocations, totalAmount) => {
  if (totalAmount === 0) return allocations;
  const totalDecimal = new Decimal(totalAmount);
  return allocations.map((allocation) => {
    const amountDecimal = new Decimal(allocation.amount);
    const newPercentage = amountDecimal.dividedBy(totalDecimal).times(100);
    return {
      ...allocation,
      percentage: parseFloat(newPercentage.toDecimalPlaces(DECIMAL_PLACES).toString())
    };
  });
}, "recalculatePercentages");
const recalculateAmounts = /* @__PURE__ */ __name((allocations, totalAmount) => {
  if (allocations.length === 0) return allocations;
  if (totalAmount === 0) {
    return allocations.map((allocation) => ({
      ...allocation,
      amount: 0
    }));
  }
  const totalDecimal = new Decimal(totalAmount);
  const totalPercentageDecimal = allocations.reduce(
    (sum, a) => sum.plus(a.percentage),
    new Decimal(0)
  );
  const totalPercentage = totalPercentageDecimal.toNumber();
  const isFullAllocation = Math.abs(100 - totalPercentage) < COST_ALLOCATION_TOLERANCE;
  if (isFullAllocation) {
    return allocations.map((allocation, index) => {
      const isLastItem = index === allocations.length - 1;
      if (isLastItem) {
        const sumOfOthersDecimal = allocations.slice(0, -1).reduce((sum, a) => {
          const percentDecimal2 = new Decimal(a.percentage);
          const amountDecimal = totalDecimal.times(percentDecimal2).dividedBy(100);
          return sum.plus(amountDecimal);
        }, new Decimal(0));
        const lastAmount = totalDecimal.minus(sumOfOthersDecimal.toDecimalPlaces(DECIMAL_PLACES));
        return {
          ...allocation,
          amount: parseFloat(lastAmount.toDecimalPlaces(DECIMAL_PLACES).toString())
        };
      }
      const percentDecimal = new Decimal(allocation.percentage);
      const newAmount = totalDecimal.times(percentDecimal).dividedBy(100);
      return {
        ...allocation,
        amount: parseFloat(newAmount.toDecimalPlaces(DECIMAL_PLACES).toString())
      };
    });
  }
  return allocations.map((allocation) => {
    const percentDecimal = new Decimal(allocation.percentage);
    const newAmount = totalDecimal.times(percentDecimal).dividedBy(100);
    return {
      ...allocation,
      amount: parseFloat(newAmount.toDecimalPlaces(DECIMAL_PLACES).toString())
    };
  });
}, "recalculateAmounts");
const isValidAllocation = /* @__PURE__ */ __name((allocation) => Boolean(allocation.name && allocation.name.trim() !== ""), "isValidAllocation");
const distributeEquallyAmongValid = /* @__PURE__ */ __name((allocations, totalAmount) => {
  const valid = allocations.filter(isValidAllocation);
  if (valid.length === 0) return allocations;
  const distributed = calculateEqualDistribution(valid, totalAmount);
  return allocations.map((a) => {
    const dist = distributed.find((d) => d.id === a.id);
    return dist ?? { ...a, amount: 0, percentage: 0 };
  });
}, "distributeEquallyAmongValid");
let fallbackCounter = 0;
const generateId = /* @__PURE__ */ __name(() => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  fallbackCounter += 1;
  return `id-${Date.now().toString(36)}-${fallbackCounter}`;
}, "generateId");
string().min(1, "Vendor is required");
const vendorFieldWithMax = string().min(1, "Vendor is required").max(100, "Vendor name is too long");
string().max(100).optional();
string().min(1, "Expense location is required");
const expenseLocationFieldWithMax = string().min(1, "Expense location is required").max(100, "Location is too long");
string().max(100).optional();
function isNotFutureDate(value) {
  const parsed = parseDateOnlyAsLocal(value);
  if (Number.isNaN(parsed.getTime())) return true;
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  return parsed.getTime() <= today.getTime();
}
__name(isNotFutureDate, "isNotFutureDate");
const expenseDateField = string().min(1, "Expense date is required").refine(isNotFutureDate, { message: "Date cannot be in the future" });
const expenseDateFieldOptional = string().optional();
const expenseTypeField = string().min(1, "Expense type is required");
string().optional();
const paymentMethodField = string().min(1, "Payment method is required");
string().optional();
const netAmountField = string().min(1, "Total amount cannot be zero").regex(SIGNED_DECIMAL_FORMAT_REGEX, "Invalid amount format");
string().min(1, "Converted total cannot be zero").regex(SIGNED_DECIMAL_FORMAT_REGEX, "Invalid amount format");
string().optional().refine(
  (val) => !val || SIGNED_DECIMAL_FORMAT_REGEX.test(val),
  "Invalid amount format"
);
const totalAmountFieldOptional = string().optional().refine(
  (val) => !val || SIGNED_DECIMAL_FORMAT_REGEX.test(val),
  "Invalid amount format"
);
const currencyObjectSchema = object({
  code: string(),
  symbol: string()
});
const netCurrencyField = currencyObjectSchema.optional();
const totalCurrencyField = currencyObjectSchema.optional();
const businessPurposeField = string().min(1, "Business purpose is required");
const businessPurposeFieldOptional = string().optional();
const expenseDescriptionField = string().min(1, "Expense description is required").max(500, "Description is too long");
const expenseDescriptionFieldOptional = string().max(500).optional();
const personsEntertainedField = string().max(500).optional();
const additionalCommentsField = string().max(500, "Comments are too long").optional();
const additionalCommentsFieldOptional = additionalCommentsField;
const receiptAttachmentField = custom().optional().nullable();
const isReceiptUnavailableField = boolean().optional();
const affidavitSchema = object({
  justification: string().min(1, "Justification is required").max(150, "Maximum 150 characters allowed"),
  digitalSignature: string().min(1, "Digital signature is required").max(3, "Maximum 3 initials allowed").regex(/^[A-Z]{1,3}$/, "Must be 1-3 uppercase letters").refine((val) => val.length >= 1 && val.length <= 3, {
    message: "Digital signature must be 1-3 initials"
  })
});
const affidavitField = affidavitSchema.optional().nullable();
const isValidFileAttachment = /* @__PURE__ */ __name((file) => {
  if (!file) return false;
  if (file.status === "error") return false;
  if (file.errorMessage) return false;
  return true;
}, "isValidFileAttachment");
const fileAttachmentSchema = custom((val) => {
  return isValidFileAttachment(val);
}, {
  message: "Invalid or corrupted file"
});
const MAX_SUPPORTING_FILES_FOR_STANDARD_EXPENSE = 3;
const MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD = 1;
const supportingFilesField = array(fileAttachmentSchema).max(3, "Maximum 3 supporting files allowed").optional();
const mileagePeriodSupportingFilesField = array(fileAttachmentSchema).max(MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD, "Only 1 supporting document is allowed per mileage period form").optional();
const mileageTypeField = string().min(1, "Mileage type is required");
const mileageTypeFieldOptional = string().optional();
const locationField = string().min(1, "Location is required").max(100, "Maximum 100 characters allowed");
const locationFieldOptional = string().max(100, "Maximum 100 characters allowed").optional();
const isRoundTripField = boolean().default(false);
const totalDistanceField = string().min(1, "Total distance is required").regex(DECIMAL_FORMAT_REGEX, "Invalid distance format").refine((val) => {
  const num = parseFloat(val);
  return !isNaN(num) && num > 0;
}, "Distance must be greater than zero");
const totalDistanceFieldOptional = string().optional().nullable().refine((val) => !val || DECIMAL_FORMAT_REGEX.test(val), "Invalid distance format");
const ratePerUnitField = string().min(1, "Rate is required").regex(DECIMAL_FORMAT_REGEX, "Invalid rate format");
const ratePerUnitFieldOptional = string().optional().refine((val) => !val || DECIMAL_FORMAT_REGEX.test(val), "Invalid rate format");
const rateUnitField = string().min(1, "Rate unit is required");
const rateUnitFieldOptional = string().optional();
const reimbursableAmountField = string().min(1, "Reimbursable amount is required").regex(DECIMAL_FORMAT_REGEX, "Invalid amount format");
const reimbursableAmountFieldOptional = string().optional().refine((val) => !val || DECIMAL_FORMAT_REGEX.test(val), "Invalid amount format");
const expensePeriodField = object({
  from: date(),
  to: date()
}, { error: "Expense period is required" });
const expensePeriodFieldOptional = object({
  from: date(),
  to: date()
}).optional();
string().min(1, "Tax type is required");
string().min(1, "Tax amount is required").regex(SIGNED_DECIMAL_FORMAT_REGEX, "Invalid amount format");
const taxTypeFieldOptional = string().optional();
const taxAmountFieldOptional = string().optional().refine(
  (val) => !val || SIGNED_DECIMAL_FORMAT_REGEX.test(val),
  "Invalid amount format"
);
const receiptSchema = object({
  receiptAttachment: receiptAttachmentField,
  isReceiptUnavailable: isReceiptUnavailableField,
  affidavit: affidavitField
}).refine(
  (data) => data.isReceiptUnavailable || data.receiptAttachment !== null && data.receiptAttachment !== void 0,
  {
    message: "Receipt is required unless marked as unavailable",
    path: ["receiptAttachment"]
  }
).refine(
  (data) => !data.isReceiptUnavailable || data.affidavit !== null && data.affidavit !== void 0,
  {
    message: "Affidavit is required when receipt is unavailable",
    path: ["affidavit"]
  }
).refine((data) => {
  if (data.receiptAttachment && !data.isReceiptUnavailable) {
    return isValidFileAttachment(data.receiptAttachment);
  }
  return true;
}, {
  message: "Receipt file is invalid or corrupted",
  path: ["receiptAttachment"]
});
const receiptWithSupportingFilesSchema = receiptSchema.safeExtend({
  supportingFiles: supportingFilesField
});
let fileTypeModule = null;
const loadFileTypeModule = /* @__PURE__ */ __name(async () => {
  if (!fileTypeModule) {
    fileTypeModule = await __vitePreload(() => import("./core-B6fVcA1e.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  }
  return fileTypeModule;
}, "loadFileTypeModule");
const validateFileContentEnhanced = /* @__PURE__ */ __name(async (file) => {
  try {
    const shouldUseFileType = file.type === "image/heic" || file.type === "image/heif" || !file.type || // Windows may not provide MIME type
    file.name.toLowerCase().endsWith(".heic") || file.name.toLowerCase().endsWith(".heif");
    if (shouldUseFileType) {
      try {
        const fileType = await loadFileTypeModule();
        const buffer = await file.slice(0, 4100).arrayBuffer();
        const result = await fileType.fileTypeFromBuffer(new Uint8Array(buffer));
        if (result) {
          const mimeMapping = {
            "image/heic": AllowedMimeType.HEIC,
            "image/heif": AllowedMimeType.HEIF,
            "image/jpeg": AllowedMimeType.JPEG,
            "image/png": AllowedMimeType.PNG,
            "image/webp": AllowedMimeType.WEBP,
            "application/pdf": AllowedMimeType.PDF
          };
          const mappedMime = mimeMapping[result.mime];
          if (mappedMime) {
            return {
              isValid: true,
              actualMimeType: mappedMime
            };
          } else {
            return {
              isValid: false,
              message: `Unsupported file type detected: ${result.mime}`
            };
          }
        } else {
          return {
            isValid: false,
            message: "Unable to verify file type. File may be corrupted or unsupported."
          };
        }
      } catch (error) {
        devError("file-type validation failed:", error);
        return {
          isValid: false,
          message: "File validation failed. Please try again with a valid file."
        };
      }
    }
    const { validateFileContent: validateFileContent2 } = await __vitePreload(async () => {
      const { validateFileContent: validateFileContent3 } = await Promise.resolve().then(() => securityUtils);
      return { validateFileContent: validateFileContent3 };
    }, true ? void 0 : void 0, import.meta.url);
    return validateFileContent2(file);
  } catch (error) {
    devError("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
}, "validateFileContentEnhanced");
const shouldUseEnhancedValidation = /* @__PURE__ */ __name((file) => {
  const fileName = file.name.toLowerCase();
  return !file.type || // No MIME type - need enhanced detection
  fileName.endsWith(".heic") || fileName.endsWith(".heif") || file.type === "image/heic" || file.type === "image/heif";
}, "shouldUseEnhancedValidation");
const expenseDetailsSchema = object({
  expenseType: expenseTypeField,
  vendor: vendorFieldWithMax,
  expenseDate: expenseDateField,
  expenseLocation: expenseLocationFieldWithMax,
  paymentMethod: paymentMethodField,
  netCurrency: netCurrencyField,
  totalCurrency: totalCurrencyField,
  netAmount: netAmountField,
  totalAmount: totalAmountFieldOptional,
  taxType: taxTypeFieldOptional,
  taxAmount: taxAmountFieldOptional
});
const expenseJustificationSchema = object({
  businessPurpose: businessPurposeField,
  expenseDescription: expenseDescriptionField,
  personsEntertained: personsEntertainedField
});
const CostAllocationValidationRules = {
  /**
   * Validates that the sum of all allocation amounts equals the total amount (within tolerance).
   */
  isSumValid(allocations, totalAmount) {
    if (!allocations || allocations.length === 0) {
      return true;
    }
    const allocationsSum = allocations.reduce((sum, allocation) => sum + allocation.amount, 0);
    return Math.abs(allocationsSum - totalAmount) < COST_ALLOCATION_TOLERANCE;
  },
  /**
   * Validates that the sum of all allocation percentages equals 100% (within tolerance).
   */
  isPercentageValid(allocations) {
    if (!allocations || allocations.length === 0) {
      return true;
    }
    const totalPercentage = allocations.reduce((sum, allocation) => sum + allocation.percentage, 0);
    return Math.abs(totalPercentage - 100) < COST_ALLOCATION_TOLERANCE;
  },
  /**
   * Gets error message for sum validation failure.
   */
  getSumErrorMessage(allocationsSum, totalAmount) {
    return `Total allocations (${allocationsSum.toFixed(2)}) must equal total amount (${totalAmount.toFixed(2)})`;
  },
  /**
   * Gets error message for percentage validation failure.
   */
  getPercentageErrorMessage() {
    return "Total allocation must equal 100%";
  },
  /**
   * Gets error message for amount exceeding limit.
   */
  getAmountExceedsErrorMessage(totalAmount) {
    return `Value cannot exceed expense total $${totalAmount.toFixed(2)}`;
  },
  /**
   * Gets error message for amount that is zero.
   */
  getAmountIsZeroMessage() {
    return "Allocation amount cannot be zero";
  },
  /**
   * Gets error message for invalid percentage range.
   */
  getPercentageRangeErrorMessage() {
    return "Percentage cannot exceed 100%";
  },
  /**
   * Gets error message for cost allocations required.
   */
  getCostAllocationsRequiredErrorMessage() {
    return "Cost allocations are required";
  },
  /**
   * Gets error message for PO supplier currency mismatch with expense currency.
   */
  getCurrencyMismatchErrorMessage() {
    return "PO supplier currency doesn't match expense currency";
  }
};
const costAllocationTypeSchema = custom(
  (val) => Object.values(ECostAllocation).includes(val),
  { message: "Invalid cost allocation type" }
);
const costAllocationItemSchema = object({
  id: string(),
  name: string().min(1, "Selection required"),
  percentage: number().min(0, "Min 0"),
  amount: number().min(0, "Amount must be at least 0"),
  type: costAllocationTypeSchema,
  entityData: unknown().optional()
});
const costAllocationItemSignedSchema = object({
  ...costAllocationItemSchema.shape,
  amount: number()
});
const costAllocationItemDraftSchema = object({
  id: string(),
  name: string(),
  percentage: number(),
  amount: number(),
  type: costAllocationTypeSchema,
  entityData: unknown().optional()
});
const costAllocationSchema = object({
  costAllocations: array(costAllocationItemSignedSchema).optional(),
  isEqualSplit: boolean().optional().default(false),
  deferToApprover: boolean().optional()
});
const validateCostAllocation = /* @__PURE__ */ __name((ctx, costAllocations, amount, defer, currencyCode) => {
  if (defer) {
    return;
  }
  if (!costAllocations || costAllocations.length === 0) {
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getCostAllocationsRequiredErrorMessage(),
      path: ["costAllocations"]
    });
    return;
  }
  const allocations = costAllocations;
  const amountValue = parseFloat(amount || "0");
  allocations.forEach((allocation, index) => {
    if (allocation.percentage > 100) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getPercentageRangeErrorMessage(),
        path: ["costAllocations", index, "percentage"]
      });
    }
    if (amountValue !== 0 && Math.abs(allocation.amount) > Math.abs(amountValue)) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getAmountExceedsErrorMessage(Math.abs(amountValue)),
        path: ["costAllocations", index, "amount"]
      });
    }
    if (allocation.amount === 0) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getAmountIsZeroMessage(),
        path: ["costAllocations", index, "amount"]
      });
    }
    if (currencyCode && allocation.entityData) {
      const { supplierCurrency } = allocation.entityData;
      if (supplierCurrency && supplierCurrency !== currencyCode && (allocation.type === ECostAllocation.Project || allocation.type === ECostAllocation.Admin)) {
        ctx.addIssue({
          code: "custom",
          message: CostAllocationValidationRules.getCurrencyMismatchErrorMessage(),
          path: ["costAllocations", index, "name"]
        });
      }
    }
  });
  if (!CostAllocationValidationRules.isPercentageValid(allocations)) {
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getPercentageErrorMessage(),
      path: ["costAllocations"]
    });
  }
  if (amountValue !== 0 && !CostAllocationValidationRules.isSumValid(allocations, amountValue)) {
    const allocationsSum = allocations.reduce((sum, a) => sum + a.amount, 0);
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getSumErrorMessage(allocationsSum, amountValue),
      path: ["costAllocations"]
    });
  }
}, "validateCostAllocation");
const additionalCommentsSchema = object({
  additionalComments: additionalCommentsField
});
const basicDetailsSchema = object({
  vendor: vendorFieldWithMax,
  expenseLocation: expenseLocationFieldWithMax
});
const supportingFilesSchema = object({
  supportingFiles: supportingFilesField
});
var MileageTripFormField = /* @__PURE__ */ ((MileageTripFormField2) => {
  MileageTripFormField2["MileageType"] = "mileageType";
  MileageTripFormField2["ExpenseDate"] = "expenseDate";
  MileageTripFormField2["FromLocation"] = "fromLocation";
  MileageTripFormField2["ToLocation"] = "toLocation";
  MileageTripFormField2["IsRoundTrip"] = "isRoundTrip";
  MileageTripFormField2["TotalDistance"] = "totalDistance";
  MileageTripFormField2["RatePerUnit"] = "ratePerUnit";
  MileageTripFormField2["RateUnit"] = "rateUnit";
  MileageTripFormField2["ReimbursableAmount"] = "reimbursableAmount";
  MileageTripFormField2["TotalCurrency"] = "totalCurrency";
  MileageTripFormField2["BusinessPurpose"] = "businessPurpose";
  MileageTripFormField2["ExpenseDescription"] = "expenseDescription";
  MileageTripFormField2["CostAllocations"] = "costAllocations";
  MileageTripFormField2["IsEqualSplit"] = "isEqualSplit";
  MileageTripFormField2["DeferToApprover"] = "deferToApprover";
  MileageTripFormField2["AdditionalComments"] = "additionalComments";
  return MileageTripFormField2;
})(MileageTripFormField || {});
const mileageDetailsSchema = object({
  [MileageTripFormField.MileageType]: mileageTypeField,
  [MileageTripFormField.ExpenseDate]: expenseDateField,
  [MileageTripFormField.FromLocation]: locationField,
  [MileageTripFormField.ToLocation]: locationField,
  [MileageTripFormField.IsRoundTrip]: isRoundTripField,
  [MileageTripFormField.TotalDistance]: totalDistanceField,
  [MileageTripFormField.RatePerUnit]: ratePerUnitField,
  [MileageTripFormField.RateUnit]: rateUnitField,
  [MileageTripFormField.ReimbursableAmount]: reimbursableAmountField
});
const mileageJustificationSchema = object({
  [MileageTripFormField.BusinessPurpose]: businessPurposeField,
  [MileageTripFormField.ExpenseDescription]: expenseDescriptionField
});
const { useMemo: useMemo$i } = await importShared("react");
const CANADA_ISO_CODE = "CAN";
function checkTaxFieldVisibility(countries, userDefaultCountryIso, expenseLocationId) {
  if (!countries || countries.length === 0) {
    return { showTaxFields: false, isEmployeeCanadian: false, isExpenseInCanada: false };
  }
  const isEmployeeCanadian = userDefaultCountryIso === CANADA_ISO_CODE;
  const isExpenseInCanada = expenseLocationId ? countries.some(
    (c) => c.id.toString() === expenseLocationId && c.isoCode === CANADA_ISO_CODE
  ) : false;
  return {
    showTaxFields: isEmployeeCanadian && isExpenseInCanada,
    isEmployeeCanadian,
    isExpenseInCanada
  };
}
__name(checkTaxFieldVisibility, "checkTaxFieldVisibility");
const useTaxFieldVisibility = /* @__PURE__ */ __name((expenseLocationId) => {
  const { data: countriesResponse } = useCountries();
  const countries = countriesResponse == null ? void 0 : countriesResponse.items;
  const { userDefaultCountryIso } = useDefaultCountry();
  return useMemo$i(() => {
    const result = checkTaxFieldVisibility(countries, userDefaultCountryIso ?? void 0, expenseLocationId);
    return result;
  }, [countries, userDefaultCountryIso, expenseLocationId]);
}, "useTaxFieldVisibility");
const MIXED_SIGN_MESSAGE = "Cannot mix positive and negative values";
const NEGATIVE_NOT_ALLOWED_MESSAGE = "Negative amounts are not allowed for this payment method";
const ZERO_RECEIPT_TOTAL_MESSAGE = "Total amount cannot be zero";
const ZERO_CONVERTED_TOTAL_MESSAGE = "Converted total cannot be zero";
const parseSigned = /* @__PURE__ */ __name((value) => {
  if (!value || !SIGNED_DECIMAL_FORMAT_REGEX.test(value)) return null;
  const parsed = parseFloat(value);
  return Number.isNaN(parsed) ? null : parsed;
}, "parseSigned");
const validateAmountSigns = /* @__PURE__ */ __name((data, ctx) => {
  var _a, _b;
  const isConverted = isConvertedExpense((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code);
  const receipt = parseSigned(data.netAmount);
  const converted = parseSigned(data.totalAmount);
  const tax = parseSigned(data.taxAmount);
  const allocations = data.costAllocations ?? [];
  if (!allowsNegativeAmounts(data.paymentMethod)) {
    const flagNegative = /* @__PURE__ */ __name((value, path) => {
      if (value != null && value < 0) {
        ctx.addIssue({ code: "custom", message: NEGATIVE_NOT_ALLOWED_MESSAGE, path });
      }
    }, "flagNegative");
    flagNegative(receipt, [ExpenseFormField.NetAmount]);
    if (isConverted) flagNegative(converted, [ExpenseFormField.TotalAmount]);
    flagNegative(tax, [ExpenseFormField.TaxAmount]);
    allocations.forEach(
      (a, i) => flagNegative(a.amount, [ExpenseFormField.CostAllocations, i, "amount"])
    );
    return;
  }
  const expectedSign = receipt == null ? 0 : Math.sign(receipt);
  if (expectedSign === 0) return;
  const flagMismatch = /* @__PURE__ */ __name((value, path) => {
    if (value != null && value !== 0 && Math.sign(value) !== expectedSign) {
      ctx.addIssue({ code: "custom", message: MIXED_SIGN_MESSAGE, path });
    }
  }, "flagMismatch");
  if (isConverted) flagMismatch(converted, [ExpenseFormField.TotalAmount]);
  flagMismatch(tax, [ExpenseFormField.TaxAmount]);
  allocations.forEach(
    (a, i) => flagMismatch(a.amount, [ExpenseFormField.CostAllocations, i, "amount"])
  );
}, "validateAmountSigns");
const validateNonZeroTotals = /* @__PURE__ */ __name((data, ctx) => {
  var _a, _b;
  if (parseSigned(data.netAmount) === 0) {
    ctx.addIssue({ code: "custom", message: ZERO_RECEIPT_TOTAL_MESSAGE, path: [ExpenseFormField.NetAmount] });
  }
  if (isConvertedExpense((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code) && parseSigned(data.totalAmount) === 0) {
    ctx.addIssue({ code: "custom", message: ZERO_CONVERTED_TOTAL_MESSAGE, path: [ExpenseFormField.TotalAmount] });
  }
}, "validateNonZeroTotals");
const fullExpenseFormSchema = receiptWithSupportingFilesSchema.safeExtend(expenseDetailsSchema.shape).safeExtend(expenseJustificationSchema.shape).safeExtend(costAllocationSchema.shape).safeExtend(additionalCommentsSchema.shape).safeExtend({
  formType: _enum(ExpenseFormType).optional()
}).refine((data) => {
  var _a, _b;
  if (isConvertedExpense((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code)) {
    return data.totalAmount && data.totalAmount.trim() !== "";
  }
  return true;
}, {
  message: "Converted total cannot be zero",
  path: [ExpenseFormField.TotalAmount]
}).refine((data) => {
  var _a, _b;
  if (!data.taxAmount) return true;
  if (!SIGNED_DECIMAL_FORMAT_REGEX.test(data.taxAmount)) return true;
  const taxAmt = parseFloat(data.taxAmount);
  const baseStr = getCadTaxBaseAmount((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code, data.netAmount, data.totalAmount);
  const taxBase = baseStr ? parseFloat(baseStr) : null;
  if (taxBase != null) return Math.abs(taxAmt) <= Math.abs(taxBase);
  return true;
}, {
  message: "Tax amount must not exceed total",
  path: [ExpenseFormField.TaxAmount]
}).refine((data) => {
  if (data.formType === ExpenseFormType.ENTERTAINMENT) {
    return data.personsEntertained && data.personsEntertained.trim() !== "";
  }
  return true;
}, {
  message: "Person entertained is required",
  path: [ExpenseFormField.PersonsEntertained]
}).superRefine((data, ctx) => {
  var _a, _b, _c, _d;
  const countriesData = queryClient.getQueryData(queryKeys.countries.list());
  const { showTaxFields } = checkTaxFieldVisibility(countriesData == null ? void 0 : countriesData.items, countriesData == null ? void 0 : countriesData.userDefaultCountryIso, data.expenseLocation);
  const isConverted = isConvertedExpense((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code);
  const amount = isConverted ? data.totalAmount : data.netAmount;
  const currencyCode = isConverted ? (_c = data.totalCurrency) == null ? void 0 : _c.code : (_d = data.netCurrency) == null ? void 0 : _d.code;
  if (showTaxFields) {
    if (!data.taxType || data.taxType.trim() === "") {
      ctx.addIssue({
        code: "custom",
        message: "Tax type is required",
        path: [ExpenseFormField.TaxType]
      });
    }
    if (!data.taxAmount || data.taxAmount.trim() === "") {
      ctx.addIssue({
        code: "custom",
        message: "Tax amount is required",
        path: [ExpenseFormField.TaxAmount]
      });
    }
  }
  validateCostAllocation(ctx, data.costAllocations, amount, data.deferToApprover, currencyCode);
  validateAmountSigns(data, ctx);
  validateNonZeroTotals(data, ctx);
});
function hasFieldValue(value) {
  if (value === null || value === void 0) {
    return false;
  }
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  if (typeof value === "number") {
    return !isNaN(value);
  }
  if (typeof value === "boolean") {
    return true;
  }
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length > 0;
  }
  return false;
}
__name(hasFieldValue, "hasFieldValue");
function hasAnyFieldValue(data, fields) {
  return fields.some((field) => {
    const value = data[field];
    return hasFieldValue(value);
  });
}
__name(hasAnyFieldValue, "hasAnyFieldValue");
function createDraftSaveChecker(draftFields, additionalCheck) {
  return (data) => {
    const hasTextFields = hasAnyFieldValue(data, [...draftFields]);
    if (hasTextFields) {
      return true;
    }
    if (additionalCheck) {
      return additionalCheck(data);
    }
    return false;
  };
}
__name(createDraftSaveChecker, "createDraftSaveChecker");
const defaultGetValidationErrors = /* @__PURE__ */ __name((schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    return result.error.issues.map((issue) => issue.message);
  }
  return [];
}, "defaultGetValidationErrors");
const defaultCanSaveDraft = /* @__PURE__ */ __name((data) => {
  return Object.values(data).some((value) => hasFieldValue(value));
}, "defaultCanSaveDraft");
const createValidationStrategy = /* @__PURE__ */ __name((schema, options) => {
  return {
    schema,
    validateForSubmission: /* @__PURE__ */ __name((data) => schema.safeParse(data), "validateForSubmission"),
    validateForDraft: options == null ? void 0 : options.validateForDraft,
    getValidationErrors: (options == null ? void 0 : options.getValidationErrors) || ((data) => defaultGetValidationErrors(schema, data)),
    canSaveDraft: (options == null ? void 0 : options.canSaveDraft) || ((data) => defaultCanSaveDraft(data)),
    fieldsForDraftCheck: options == null ? void 0 : options.fieldsForDraftCheck
  };
}, "createValidationStrategy");
const draftExpenseFormSchema = object({
  [ExpenseFormField.ReceiptAttachment]: custom().optional().nullable(),
  [ExpenseFormField.IsReceiptUnavailable]: boolean().default(false),
  [ExpenseFormField.Affidavit]: object({
    justification: string().max(150).optional(),
    digitalSignature: string().max(3).optional()
  }).optional().nullable(),
  [ExpenseFormField.SupportingFiles]: array(custom()).max(3, "Maximum 3 supporting files allowed").optional().default([]),
  [ExpenseFormField.ExpenseType]: string().optional(),
  [ExpenseFormField.Vendor]: string().max(100).optional(),
  [ExpenseFormField.ExpenseDate]: string().optional(),
  [ExpenseFormField.ExpenseLocation]: string().max(100).optional(),
  [ExpenseFormField.PaymentMethod]: string().optional(),
  [ExpenseFormField.NetCurrency]: object({
    code: string(),
    symbol: string()
  }).optional(),
  [ExpenseFormField.TotalCurrency]: object({
    code: string(),
    symbol: string()
  }).optional(),
  [ExpenseFormField.NetAmount]: string().optional(),
  [ExpenseFormField.TotalAmount]: string().optional(),
  [ExpenseFormField.TaxType]: string().optional(),
  [ExpenseFormField.TaxAmount]: string().optional(),
  [ExpenseFormField.BusinessPurpose]: string().optional(),
  [ExpenseFormField.ExpenseDescription]: string().max(500).optional(),
  [ExpenseFormField.PersonsEntertained]: string().optional(),
  [ExpenseFormField.AdditionalComments]: string().max(500).optional(),
  [ExpenseFormField.CostAllocations]: array(costAllocationItemDraftSchema).optional()
});
const validateExpenseForSubmission = /* @__PURE__ */ __name((data) => {
  return fullExpenseFormSchema.safeParse(data);
}, "validateExpenseForSubmission");
const validateExpenseForDraft = /* @__PURE__ */ __name((data) => {
  return draftExpenseFormSchema.safeParse(data);
}, "validateExpenseForDraft");
const getFormValidationErrors$2 = /* @__PURE__ */ __name((data) => {
  const result = validateExpenseForSubmission(data);
  if (!result.success) {
    return result.error.issues.map((issue) => issue.message);
  }
  return [];
}, "getFormValidationErrors$2");
const canSaveDraft$2 = createDraftSaveChecker(
  getDraftSaveableFields(),
  (data) => {
    var _a, _b, _c, _d;
    const hasAffidavitData = !!(((_b = (_a = data[ExpenseFormField.Affidavit]) == null ? void 0 : _a.justification) == null ? void 0 : _b.trim()) || ((_d = (_c = data[ExpenseFormField.Affidavit]) == null ? void 0 : _c.digitalSignature) == null ? void 0 : _d.trim()));
    return hasAffidavitData;
  }
);
const FIELDS_FOR_DRAFT_CHECK = [
  ...getDraftSaveableFields(),
  ExpenseFormField.ReceiptAttachment,
  ExpenseFormField.IsReceiptUnavailable,
  ExpenseFormField.Affidavit,
  ExpenseFormField.SupportingFiles
];
const fullExpenseValidationStrategy = createValidationStrategy(
  fullExpenseFormSchema,
  {
    validateForDraft: validateExpenseForDraft,
    getValidationErrors: getFormValidationErrors$2,
    canSaveDraft: canSaveDraft$2,
    fieldsForDraftCheck: FIELDS_FOR_DRAFT_CHECK
  }
);
({
  SUPPORTED_FORMATS: Object.values(AllowedMimeType),
  MAX_FILE_SIZE_PDF: MIME_TYPE_CONFIG.get(AllowedMimeType.PDF).maxSizeBytes,
  MAX_FILE_SIZE_IMAGE: MIME_TYPE_CONFIG.get(AllowedMimeType.PNG).maxSizeBytes
});
function mapBackendFileToResponse(backend, blobUrl) {
  return {
    id: backend.id,
    fileName: backend.name,
    fileSize: backend.size,
    mimeType: backend.mimeType,
    url: FILE_ENDPOINTS.DOWNLOAD.build({ fileId: backend.id }),
    uploadedAt: backend.uploadedAt,
    blobUrl,
    type: backend.mimeType.split("/")[1] || "unknown"
  };
}
__name(mapBackendFileToResponse, "mapBackendFileToResponse");
async function validateAndPrepareFile(file) {
  const validationResult = shouldUseEnhancedValidation(file) ? await validateFileContentEnhanced(file) : await validateFileContent(file);
  if (!validationResult.isValid) {
    throw new Error(validationResult.message || "File content does not match the declared type.");
  }
  if (validationResult.actualMimeType && validationResult.actualMimeType !== file.type) {
    return new File([file], file.name, {
      type: validationResult.actualMimeType,
      lastModified: file.lastModified
    });
  }
  return file;
}
__name(validateAndPrepareFile, "validateAndPrepareFile");
function handleUploadError(error) {
  var _a;
  if (error instanceof Error && (error.name === "CanceledError" || error.code === "ECONNABORTED")) {
    throw new Error("Upload timeout. Please check your connection and try again.");
  }
  const status = isHttpApiError(error) ? (_a = error.response) == null ? void 0 : _a.status : void 0;
  if (status === 401) {
    throw new Error("Your session has expired. Please log in again.");
  }
  if (status === 403) {
    throw new Error("You don't have permission to upload files to this expense.");
  }
  throw new AppError(getErrorMessage(error, { context: "action", copy: { fallback: uploadErrorFallback(status) } }));
}
__name(handleUploadError, "handleUploadError");
function uploadErrorFallback(status) {
  switch (status) {
    case 409:
      return "File limit exceeded. Maximum 1 receipt or 3 supporting documents per expense.";
    case 413:
      return "File is too large. Please choose a smaller file.";
    case 415:
      return "Unsupported file type. Please upload a PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF file.";
    case 422:
      return "File validation failed.";
    default:
      return "Upload failed. Please try again.";
  }
}
__name(uploadErrorFallback, "uploadErrorFallback");
const uploadFile = /* @__PURE__ */ __name(async (params, retryCount = 0) => {
  var _a;
  const { file, companyShortName, expenseId, documentType, onProgress, signal } = params;
  if (signal == null ? void 0 : signal.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }
  const userKey = `file_upload_${documentType}`;
  if (!checkRateLimit(userKey, 10, 6e4)) {
    throw new Error("Too many upload attempts. Please wait before trying again.");
  }
  const fileToUpload = await validateAndPrepareFile(file);
  const formData = new FormData();
  formData.append("file", fileToUpload);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FILE_UPLOAD_TIMEOUT);
  const abortHandler = /* @__PURE__ */ __name(() => controller.abort(), "abortHandler");
  signal == null ? void 0 : signal.addEventListener("abort", abortHandler);
  try {
    const url = `${FILE_ENDPOINTS.UPLOAD.build({ tenant: companyShortName, expenseId })}?document_type=${documentType}`;
    const response = await apiClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      timeout: FILE_UPLOAD_TIMEOUT,
      signal: controller.signal,
      onUploadProgress: /* @__PURE__ */ __name((progressEvent) => {
        devLog("Upload progress event:", { loaded: progressEvent.loaded, total: progressEvent.total });
        if (onProgress && progressEvent.total) {
          const percentage = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          onProgress({
            loaded: progressEvent.loaded,
            total: progressEvent.total,
            percentage
          });
        }
      }, "onUploadProgress")
    });
    const blobUrl = URL.createObjectURL(fileToUpload);
    return mapBackendFileToResponse(response.data, blobUrl);
  } catch (error) {
    if (error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError")) {
      throw error;
    }
    if (isHttpApiError(error) && !(signal == null ? void 0 : signal.aborted)) {
      const status = (_a = error.response) == null ? void 0 : _a.status;
      if (status && status >= 500 && status < 600 && retryCount < FILE_UPLOAD_MAX_RETRIES) {
        const delay = calculateExponentialBackoff(retryCount);
        await sleep(delay);
        return uploadFile(params, retryCount + 1);
      }
    }
    handleUploadError(error);
  } finally {
    clearTimeout(timeoutId);
    signal == null ? void 0 : signal.removeEventListener("abort", abortHandler);
  }
}, "uploadFile");
const deleteFile = /* @__PURE__ */ __name(async (fileId) => {
  try {
    await apiClient.delete(FILE_ENDPOINTS.DELETE.build({ fileId }));
  } catch (error) {
    throw new AppError(getErrorMessage(error, { context: "action", copy: { fallback: "Failed to delete file" } }));
  }
}, "deleteFile");
const downloadFile = /* @__PURE__ */ __name(async (fileId, signal, retryCount = 0) => {
  var _a;
  try {
    const response = await apiClient.get(FILE_ENDPOINTS.DOWNLOAD.build({ fileId }), {
      responseType: "blob",
      signal
    });
    return URL.createObjectURL(response.data);
  } catch (error) {
    if (error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError")) {
      throw error;
    }
    if (isHttpApiError(error)) {
      const status = (_a = error.response) == null ? void 0 : _a.status;
      if (status === 404) {
        throw new Error("File not found");
      }
      if (status && status >= 500 && status < 600 && retryCount < FILE_UPLOAD_MAX_RETRIES) {
        if (signal == null ? void 0 : signal.aborted) {
          throw new DOMException("Aborted", "AbortError");
        }
        const delay = calculateExponentialBackoff(retryCount);
        await sleep(delay);
        return downloadFile(fileId, signal, retryCount + 1);
      }
    }
    throw new AppError(getErrorMessage(error, { context: "load", copy: { fallback: "Failed to load file. Please try again." } }));
  }
}, "downloadFile");
const PREVIEWABLE_MIME_TYPES = /* @__PURE__ */ new Set([
  AllowedMimeType.PNG,
  AllowedMimeType.JPEG,
  AllowedMimeType.JPG,
  AllowedMimeType.PDF,
  AllowedMimeType.WEBP
]);
const canPreviewFile = /* @__PURE__ */ __name((attachment) => {
  return PREVIEWABLE_MIME_TYPES.has(attachment.mimeType);
}, "canPreviewFile");
const POPUP_BLOCKED_MESSAGE = "Your browser blocked the preview window. Allow pop-ups for this site and try again.";
const openInNewTab = /* @__PURE__ */ __name((url) => {
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) throw new AppError(POPUP_BLOCKED_MESSAGE);
  return opened;
}, "openInNewTab");
const BLOB_URL_CLEANUP_DELAY = 5e3;
const BLOB_URL_REGISTRY = /* @__PURE__ */ new WeakMap();
const registerBlobUrl = /* @__PURE__ */ __name((window2, url) => {
  var _a;
  if (!BLOB_URL_REGISTRY.has(window2)) {
    BLOB_URL_REGISTRY.set(window2, /* @__PURE__ */ new Set());
  }
  (_a = BLOB_URL_REGISTRY.get(window2)) == null ? void 0 : _a.add(url);
}, "registerBlobUrl");
const cleanupBlobUrl = /* @__PURE__ */ __name((url) => {
  try {
    URL.revokeObjectURL(url);
  } catch {
  }
}, "cleanupBlobUrl");
const openFilePreview = /* @__PURE__ */ __name(async (attachment) => {
  const rawUrl = resolveFileUrl(attachment.blobUrl, attachment.url);
  const previewUrl = sanitizeUrl(rawUrl);
  if (!previewUrl) {
    devError("Invalid or unsafe URL detected");
    throw new Error("Cannot open file: Invalid URL");
  }
  if (!canPreviewFile(attachment)) {
    const link = document.createElement("a");
    link.href = previewUrl;
    link.download = attachment.originalName;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  if (previewUrl.startsWith("blob:") || previewUrl.startsWith("data:")) {
    const newWindow = openInNewTab(previewUrl);
    if (previewUrl.startsWith("blob:")) {
      registerBlobUrl(newWindow, previewUrl);
    }
    return;
  }
  if (previewUrl.startsWith("https://storage.expensesapp.com/")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FILE_UPLOAD_TIMEOUT);
      const response = await fetch(previewUrl, {
        signal: controller.signal,
        mode: "cors",
        credentials: "omit"
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      try {
        const newWindow = openInNewTab(blobUrl);
        registerBlobUrl(newWindow, blobUrl);
        newWindow.addEventListener("beforeunload", () => cleanupBlobUrl(blobUrl), { once: true });
        setTimeout(() => cleanupBlobUrl(blobUrl), BLOB_URL_CLEANUP_DELAY);
      } catch (error) {
        cleanupBlobUrl(blobUrl);
        throw error;
      }
    } catch (error) {
      devError("Failed to open file preview:", error);
      openInNewTab(previewUrl);
    }
    return;
  }
  openInNewTab(previewUrl);
}, "openFilePreview");
const { useCallback: useCallback$n } = await importShared("react");
function useFileOperations(options) {
  const { documentType, expenseId, shouldKeepUrl } = options;
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { isForDraft } = usePendingUploadStore();
  const blobManager = useBlobUrlManager({ shouldKeepUrl });
  const isStoreDataRelevant = isForDraft(expenseId);
  const validateFile = useCallback$n(
    (file) => {
      return validateReceiptFile(file);
    },
    []
  );
  const createAttachmentFromResponse = useCallback$n(
    (file, response) => {
      const attachment = createSafeFileMetadata(file, response);
      if (response.blobUrl) {
        blobManager.trackUrl(response.blobUrl);
      }
      return attachment;
    },
    [blobManager]
  );
  const uploadSingleFile = useCallback$n(
    async (file, targetExpenseId, signal, onProgress) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const response = await uploadFile({
        file,
        companyShortName: userDefaultCompany.shortName,
        expenseId: targetExpenseId,
        documentType,
        signal,
        onProgress
      });
      return createAttachmentFromResponse(file, response);
    },
    [userDefaultCompany == null ? void 0 : userDefaultCompany.shortName, documentType, createAttachmentFromResponse]
  );
  const deleteFileById = useCallback$n(async (fileId) => {
    await deleteFile(fileId);
  }, []);
  const loadFileContent = useCallback$n(
    async (fileId, signal) => {
      const blobUrl = await downloadFile(fileId, signal);
      blobManager.trackUrl(blobUrl);
      return blobUrl;
    },
    [blobManager]
  );
  const openPreview = useCallback$n(
    async (attachment) => {
      try {
        await openFilePreview(attachment);
      } catch (error) {
        devError("Failed to open preview:", error);
        throw error;
      }
    },
    []
  );
  return {
    userDefaultCompany,
    blobManager,
    isStoreDataRelevant,
    validateFile,
    uploadSingleFile,
    deleteFileById,
    loadFileContent,
    openPreview,
    createAttachmentFromResponse
  };
}
__name(useFileOperations, "useFileOperations");
const React$2 = await importShared("react");
const { useCallback: useCallback$m, useEffect: useEffect$i, useRef: useRef$f, useState: useState$7 } = React$2;
const uploadFailureMessage = /* @__PURE__ */ __name((error) => getErrorMessage(error, {
  context: "action",
  copy: { fallback: "Upload failed. Please try again." }
}), "uploadFailureMessage");
const ReceiptUpload = /* @__PURE__ */ __name(({
  onReceiptChange,
  onUploadingChange,
  initialReceipt,
  disabled = false,
  className = "",
  expenseId,
  onSaveDraftForUpload
}) => {
  const fileInputRef = useRef$f(null);
  const initialReceiptRef = useRef$f(initialReceipt);
  const attachmentRef = useRef$f(void 0);
  const {
    userDefaultCompany,
    blobManager,
    isStoreDataRelevant,
    validateFile,
    uploadSingleFile,
    deleteFileById,
    loadFileContent,
    openPreview
  } = useFileOperations({
    documentType: "receipt",
    expenseId,
    shouldKeepUrl: /* @__PURE__ */ __name((url) => {
      var _a, _b;
      return ((_a = attachmentRef.current) == null ? void 0 : _a.blobUrl) === url || ((_b = initialReceiptRef.current) == null ? void 0 : _b.blobUrl) === url;
    }, "shouldKeepUrl")
  });
  const { receipt, startUploadFlow, updateDraftId } = usePendingUploadStore();
  const {
    pendingFile,
    uploadedAttachment,
    status: uploadStatus,
    setPendingFile,
    clearPendingFile,
    setUploadedAttachment,
    clearUploadedAttachment,
    setStatus: setUploadStatus
  } = receipt;
  const effectiveInitialReceipt = isStoreDataRelevant ? uploadedAttachment || initialReceipt : initialReceipt;
  const [attachment, setAttachment] = useState$7(effectiveInitialReceipt);
  const [localError, setLocalError] = useState$7();
  const [dragActive, setDragActive] = useState$7(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState$7(false);
  const [isDeleting, setIsDeleting] = useState$7(false);
  const [deleteError, setDeleteError] = useState$7(null);
  const [isLoadingFile, setIsLoadingFile] = useState$7(false);
  const [fileLoadError, setFileLoadError] = useState$7(null);
  const [loadedBlobUrl, setLoadedBlobUrl] = useState$7(null);
  const fileLoadAttemptedRef = useRef$f(/* @__PURE__ */ new Set());
  const handleFileUploadInternalRef = useRef$f(null);
  const isProcessing = uploadStatus === "saving-draft" || uploadStatus === "uploading";
  const isUploadDisabled = disabled;
  initialReceiptRef.current = initialReceipt;
  attachmentRef.current = attachment;
  if (effectiveInitialReceipt == null ? void 0 : effectiveInitialReceipt.blobUrl) {
    blobManager.trackUrl(effectiveInitialReceipt.blobUrl);
  }
  useEffect$i(() => {
    const newAttachment = isStoreDataRelevant ? uploadedAttachment || initialReceipt : initialReceipt;
    devLog("[ReceiptUpload] sync effect:", {
      isStoreDataRelevant,
      hasUploadedAttachment: !!uploadedAttachment,
      hasInitialReceipt: !!initialReceipt,
      initialReceiptMimeType: initialReceipt == null ? void 0 : initialReceipt.mimeType,
      initialReceiptBlobUrl: !!(initialReceipt == null ? void 0 : initialReceipt.blobUrl),
      newAttachmentMimeType: newAttachment == null ? void 0 : newAttachment.mimeType,
      willUpdate: newAttachment !== attachment
    });
    if (newAttachment == null ? void 0 : newAttachment.blobUrl) {
      blobManager.trackUrl(newAttachment.blobUrl);
    }
    if (isStoreDataRelevant && uploadedAttachment && !initialReceipt) {
      onReceiptChange == null ? void 0 : onReceiptChange(uploadedAttachment);
    }
    if (isStoreDataRelevant && uploadedAttachment && (initialReceipt == null ? void 0 : initialReceipt.id) === uploadedAttachment.id) {
      clearUploadedAttachment();
    }
    if (newAttachment !== attachment) {
      setAttachment(newAttachment);
    }
  }, [initialReceipt, uploadedAttachment, isStoreDataRelevant, attachment, clearUploadedAttachment, onReceiptChange, blobManager]);
  useEffect$i(() => {
    var _a;
    if (expenseId && pendingFile && isStoreDataRelevant && uploadStatus !== "uploading" && !attachment) {
      const fileToUpload = pendingFile;
      clearPendingFile();
      setUploadStatus("uploading");
      (_a = handleFileUploadInternalRef.current) == null ? void 0 : _a.call(handleFileUploadInternalRef, fileToUpload);
    }
  }, [expenseId, pendingFile, isStoreDataRelevant, uploadStatus, attachment, clearPendingFile, setUploadStatus]);
  const loadFile = useCallback$m(async (targetAttachment) => {
    const signal = blobManager.getAbortSignal();
    setIsLoadingFile(true);
    setFileLoadError(null);
    try {
      const blobUrl = await loadFileContent(targetAttachment.id, signal);
      if (!signal.aborted) {
        fileLoadAttemptedRef.current.add(targetAttachment.id);
        setLoadedBlobUrl(blobUrl);
        setIsLoadingFile(false);
      }
    } catch (error) {
      if (signal.aborted) return;
      const isCanceled = error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError");
      if (isCanceled) return;
      fileLoadAttemptedRef.current.add(targetAttachment.id);
      setFileLoadError(getErrorMessage(error, {
        context: "load",
        copy: { fallback: "Failed to load receipt." }
      }));
      setIsLoadingFile(false);
    }
  }, [blobManager, loadFileContent]);
  const prevAttachmentIdRef = useRef$f(void 0);
  useEffect$i(() => {
    const currentId = attachment == null ? void 0 : attachment.id;
    if (prevAttachmentIdRef.current !== currentId) {
      setLoadedBlobUrl(null);
      prevAttachmentIdRef.current = currentId;
    }
    const hasValidBlobUrl = (attachment == null ? void 0 : attachment.blobUrl) && blobManager.isOwned(attachment.blobUrl);
    const needsLazyLoad = attachment && attachment.url && !hasValidBlobUrl && attachment.url.startsWith("/api/") && !fileLoadAttemptedRef.current.has(attachment.id);
    if (needsLazyLoad) {
      loadFile(attachment);
    }
  }, [attachment, loadFile, blobManager]);
  const handleRetry = useCallback$m(() => {
    if (!attachment) return;
    fileLoadAttemptedRef.current.delete(attachment.id);
    loadFile(attachment);
  }, [attachment, loadFile]);
  const handleError = useCallback$m((error) => {
    setLocalError(error);
    setUploadStatus("error", error.message);
  }, [setUploadStatus]);
  const handleFileUploadInternal = useCallback$m(async (file, targetExpenseId) => {
    const effectiveExpenseId = targetExpenseId || expenseId;
    if (!effectiveExpenseId) return;
    const signal = blobManager.getAbortSignal();
    setLocalError(void 0);
    setAttachment(void 0);
    onUploadingChange == null ? void 0 : onUploadingChange(true);
    if (!effectiveExpenseId || !(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
      const errorMsg = !(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName) ? "Company not selected. Please select a company first." : "Cannot upload file without expense ID.";
      notifyMessage(errorMsg);
      onUploadingChange == null ? void 0 : onUploadingChange(false);
      return;
    }
    try {
      const newAttachment = await uploadSingleFile(
        file,
        effectiveExpenseId,
        signal,
        (progress) => {
          devLog(`Receipt upload: ${progress.percentage}% (${progress.loaded}/${progress.total} bytes)`);
        }
      );
      setUploadedAttachment(newAttachment);
      setAttachment(newAttachment);
      onUploadingChange == null ? void 0 : onUploadingChange(false);
      onReceiptChange == null ? void 0 : onReceiptChange(newAttachment);
    } catch (error) {
      const isCanceled = error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError");
      if (isCanceled) return;
      setUploadStatus("error", uploadFailureMessage(error));
      handleError({
        type: "network",
        message: uploadFailureMessage(error),
        details: error instanceof Error ? error.toString() : String(error)
      });
      onUploadingChange == null ? void 0 : onUploadingChange(false);
    }
  }, [handleError, onReceiptChange, onUploadingChange, expenseId, userDefaultCompany == null ? void 0 : userDefaultCompany.shortName, setUploadedAttachment, setUploadStatus, blobManager, uploadSingleFile]);
  handleFileUploadInternalRef.current = handleFileUploadInternal;
  const handleFileUpload = useCallback$m(async (file) => {
    const validationError = validateFile(file);
    if (validationError) {
      handleError(validationError);
      return;
    }
    if (expenseId) {
      setUploadStatus("uploading");
      await handleFileUploadInternal(file);
      return;
    }
    if (!onSaveDraftForUpload) {
      handleError({
        type: "server",
        message: "Cannot upload file: draft save not available"
      });
      return;
    }
    const signal = blobManager.getAbortSignal();
    startUploadFlow(null);
    setPendingFile(file);
    setUploadStatus("saving-draft");
    try {
      const { draftId } = await onSaveDraftForUpload();
      if (signal.aborted) {
        clearPendingFile();
        return;
      }
      updateDraftId(draftId);
    } catch (error) {
      if (signal.aborted) return;
      clearPendingFile();
      handleError({
        type: "network",
        message: uploadFailureMessage(error),
        details: error instanceof Error ? error.toString() : String(error)
      });
    }
  }, [expenseId, handleFileUploadInternal, handleError, onSaveDraftForUpload, startUploadFlow, updateDraftId, setPendingFile, clearPendingFile, setUploadStatus, blobManager, validateFile]);
  const handleFileSelect = useCallback$m((event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      handleFileUpload(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [handleFileUpload]);
  const handleChooseFileClick = useCallback$m(() => {
    var _a;
    if (isUploadDisabled || isProcessing) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [isUploadDisabled, isProcessing]);
  const handleDeleteClick = useCallback$m(() => {
    if (!attachment || disabled) return;
    setDeleteError(null);
    setIsDeleteDialogOpen(true);
  }, [attachment, disabled]);
  const handleDeleteConfirm = useCallback$m(async () => {
    if (!attachment || disabled) return;
    setIsDeleting(true);
    setDeleteError(null);
    try {
      await deleteFileById(attachment.id);
      const blobUrlToClean = loadedBlobUrl || attachment.blobUrl;
      if (blobUrlToClean) {
        blobManager.revokeUrl(blobUrlToClean);
      }
      setLoadedBlobUrl(null);
      fileLoadAttemptedRef.current.delete(attachment.id);
      setAttachment(void 0);
      clearUploadedAttachment();
      onReceiptChange == null ? void 0 : onReceiptChange(void 0);
      setIsDeleteDialogOpen(false);
    } catch (error) {
      const errorMessage = getErrorMessage(error, {
        context: "action",
        copy: { fallback: "Could not delete the receipt. Please try again." }
      });
      setDeleteError(errorMessage);
    } finally {
      setIsDeleting(false);
    }
  }, [attachment, disabled, onReceiptChange, clearUploadedAttachment, loadedBlobUrl, blobManager, deleteFileById]);
  const handleDeleteCancel = useCallback$m(() => {
    setIsDeleteDialogOpen(false);
    setDeleteError(null);
  }, []);
  const handlePreviewClick = useCallback$m(async () => {
    if (attachment) {
      const fileWithBlobUrl = loadedBlobUrl ? { ...attachment, blobUrl: loadedBlobUrl } : attachment;
      await openPreview(fileWithBlobUrl).catch((error) => {
        notifyError(error, { context: "action", copy: { fallback: "Failed to open file preview" } });
      });
    }
  }, [attachment, loadedBlobUrl, openPreview]);
  const handleDragOver = useCallback$m((e) => {
    e.preventDefault();
    if (!isUploadDisabled && !isProcessing) {
      setDragActive(true);
    }
  }, [isUploadDisabled, isProcessing]);
  const handleDragLeave = useCallback$m((e) => {
    e.preventDefault();
    setDragActive(false);
  }, []);
  const handleDrop = useCallback$m((e) => {
    e.preventDefault();
    setDragActive(false);
    if (isUploadDisabled || isProcessing) return;
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [isUploadDisabled, isProcessing, handleFileUpload]);
  const renderLoadingState = /* @__PURE__ */ __name((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-14" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600 font-normal", children: message })
  ] }), "renderLoadingState");
  const renderFileLoadErrorState = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: fileLoadError }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", size: "sm", onClick: handleRetry, children: "Retry" })
  ] }), "renderFileLoadErrorState");
  const renderErrorState = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: localError == null ? void 0 : localError.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", size: "sm", onClick: handleChooseFileClick, disabled: isUploadDisabled, children: "Choose file" })
  ] }), "renderErrorState");
  const renderUploadedState = /* @__PURE__ */ __name(() => {
    if (!attachment) return null;
    const previewType = getFilePreviewType(attachment.mimeType);
    const ownedBlobUrl = attachment.blobUrl && blobManager.isOwned(attachment.blobUrl) ? attachment.blobUrl : void 0;
    const fileUrl = resolveFileUrl(loadedBlobUrl || ownedBlobUrl, attachment.url);
    devLog("[ReceiptUpload] renderUploadedState:", {
      mimeType: attachment.mimeType,
      previewType,
      hasBlobUrl: !!attachment.blobUrl,
      isOwnedBlobUrl: !!ownedBlobUrl,
      hasLoadedBlobUrl: !!loadedBlobUrl,
      fileUrl: fileUrl == null ? void 0 : fileUrl.substring(0, 50),
      attachmentId: attachment.id
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 h-full", children: previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: fileUrl,
          alt: attachment.originalName,
          className: "w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity",
          onClick: handlePreviewClick,
          onError: /* @__PURE__ */ __name(() => {
            devWarn("[ReceiptUpload] Image FAILED to load:", {
              fileUrl: fileUrl == null ? void 0 : fileUrl.substring(0, 60),
              mimeType: attachment.mimeType,
              hasBlobUrl: !!attachment.blobUrl,
              isOwned: attachment.blobUrl ? blobManager.isOwned(attachment.blobUrl) : false
            });
          }, "onError")
        }
      ) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full scale-100 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors gap-1",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pdf-file-green-check", className: "size-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-grey-700 text-center overflow-hidden text-ellipsis px-2 max-w-full", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: "PDF preview isn't available." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full scale-100 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors gap-1",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text-line-unknown", className: "w-12 h-12 text-trax-neutral-400 mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-trax-neutral-700 text-center overflow-hidden text-ellipsis whitespace-nowrap px-2 max-w-full", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-trax-neutral-500", children: attachment.mimeType.includes("heif") || attachment.mimeType.includes("heic") ? "HEIF/HEIC preview not supported by browser" : "File preview isn't available." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full absolute bottom-0 left-0 right-0 pb-4 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "ghost",
            onClick: handlePreviewClick,
            className: "rounded-full !bg-white/70 !backdrop-blur-2xl",
            title: "Preview file",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 " })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "ghost-error",
            onClick: handleDeleteClick,
            className: "rounded-full !bg-white/70",
            title: "Delete receipt",
            "data-testid": "delete-receipt-button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-5 text-exp-red-500" })
          }
        )
      ] })
    ] });
  }, "renderUploadedState");
  const renderEmptyState = /* @__PURE__ */ __name(() => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `flex-1 h-full items-center justify-center p-8 text-center bg-white rounded-lg transition-colors ${dragActive ? "border-trax-blue-400 bg-trax-blue-50" : "border-trax-neutral-300 hover:border-trax-neutral-400"} ${isUploadDisabled ? "opacity-60" : ""}`,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "size-14 text-exp-teal-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: receiptUploadInstructions() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ue,
              {
                variant: "soft",
                size: "sm",
                onClick: handleChooseFileClick,
                disabled: isUploadDisabled,
                "data-testid": "receipt-upload-choose-file-button",
                children: "Choose file"
              }
            )
          ] })
        ] })
      }
    );
  }, "renderEmptyState");
  const renderContent = /* @__PURE__ */ __name(() => {
    if (uploadStatus === "saving-draft") return renderLoadingState("Saving expense...");
    if (uploadStatus === "uploading") return renderLoadingState("Uploading file...");
    if (localError) return renderErrorState();
    if (fileLoadError) return renderFileLoadErrorState();
    if (isLoadingFile) return renderLoadingState("Loading receipt...");
    if (attachment) return renderUploadedState();
    return renderEmptyState();
  }, "renderContent");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${className}`, children: [
    renderContent(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: generateAcceptAttribute(),
        onChange: handleFileSelect,
        className: "hidden",
        disabled: isUploadDisabled,
        "data-testid": "receipt-upload-input"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: /* @__PURE__ */ __name((open) => {
          if (!open && !isDeleting) {
            handleDeleteCancel();
          }
        }, "onOpenChange"),
        title: "Delete receipt",
        description: deleteError ? `Failed to delete: ${deleteError}` : "Are you sure you want to delete this receipt?",
        confirmLabel: deleteError ? "Retry" : "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: isDeleting
      }
    )
  ] });
}, "ReceiptUpload");
const { createContext, useContext: useContext$1 } = await importShared("react");
const FormSectionContext = createContext(null);
function FormSectionProvider({
  value,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionContext.Provider, { value, children });
}
__name(FormSectionProvider, "FormSectionProvider");
const { useEffect: useEffect$h, useRef: useRef$e } = await importShared("react");
function ConditionalSection({
  control,
  behavior,
  children,
  onDisabledChange
}) {
  const shouldWatch = behavior.isVisible || behavior.isEnabled;
  const hasDependencies = behavior.dependsOn && behavior.dependsOn.length > 0;
  const previousDisabledRef = useRef$e(void 0);
  const watchedFieldsArray = useWatch({
    control,
    name: behavior.dependsOn ?? [],
    disabled: !shouldWatch || !hasDependencies
  });
  const allFormValues = useWatch({
    control,
    disabled: shouldWatch && hasDependencies
  });
  const formValues = hasDependencies && shouldWatch ? behavior.dependsOn.reduce((acc, fieldName, index) => {
    acc[fieldName] = Array.isArray(watchedFieldsArray) ? watchedFieldsArray[index] : watchedFieldsArray;
    return acc;
  }, {}) : allFormValues;
  const isDisabled = behavior.isEnabled ? !behavior.isEnabled(formValues) : false;
  useEffect$h(() => {
    if (previousDisabledRef.current !== isDisabled) {
      previousDisabledRef.current = isDisabled;
      onDisabledChange == null ? void 0 : onDisabledChange(isDisabled);
    }
  }, [isDisabled, onDisabledChange]);
  if (behavior.isVisible && !behavior.isVisible(formValues)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
__name(ConditionalSection, "ConditionalSection");
const { Fragment, memo: memo$3, useCallback: useCallback$l, useContext, useMemo: useMemo$h, useState: useState$6 } = await importShared("react");
const FormSectionComponent = /* @__PURE__ */ __name(({
  section,
  handlersMap
}) => {
  const renderProps = useContext(FormSectionContext);
  const [conditionalDisabled, setConditionalDisabled] = useState$6(false);
  if (!renderProps) {
    throw new Error("FormSection must be used within FormSectionProvider");
  }
  const handleDisabledChange = useCallback$l((disabled) => {
    setConditionalDisabled((prev) => {
      if (prev !== disabled) {
        return disabled;
      }
      return prev;
    });
  }, []);
  const behavior = useMemo$h(
    () => ({
      isVisible: section.isVisible,
      isEnabled: section.isEnabled,
      dependsOn: section.dependsOn
    }),
    [section.isVisible, section.isEnabled, section.dependsOn]
  );
  const propsWithDisabled = useMemo$h(
    () => ({
      ...renderProps,
      disabled: conditionalDisabled || renderProps.disabled
    }),
    [renderProps, conditionalDisabled]
  );
  const finalProps = useMemo$h(() => {
    const sectionHandlers = handlersMap == null ? void 0 : handlersMap[section.type];
    return sectionHandlers ? { ...propsWithDisabled, ...sectionHandlers } : propsWithDisabled;
  }, [propsWithDisabled, handlersMap, section.type]);
  const headerActionsNode = section.headerActions ? section.headerActions(finalProps) : null;
  const isCostAllocationSection = section.id === "cost-allocation";
  const deferToApprover = useWatch({
    control: renderProps.control,
    name: ExpenseFormField.DeferToApprover,
    disabled: !isCostAllocationSection
  });
  const hideCardGap = isCostAllocationSection && deferToApprover ? "gap-0" : void 0;
  if (section.hideHeader) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConditionalSection,
      {
        control: renderProps.control,
        behavior,
        onDisabledChange: handleDisabledChange,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-section-id": section.id, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { children: section.render(finalProps) }) }) }, section.id)
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConditionalSection,
    {
      control: renderProps.control,
      behavior,
      onDisabledChange: handleDisabledChange,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-section-id": section.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: hideCardGap, children: [
        "    ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { className: hideCardGap, children: headerActionsNode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            gr,
            {
              title: section.title,
              icon: section.icon,
              iconClassName: section.iconClassName,
              required: section.required
            }
          ),
          headerActionsNode
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          gr,
          {
            title: section.title,
            icon: section.icon,
            iconClassName: section.iconClassName,
            required: section.required
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { children: section.render(finalProps) })
      ] }) }, section.id)
    }
  );
}, "FormSectionComponent");
const FormSection = memo$3(FormSectionComponent);
function FormRenderer({
  sections,
  handlersMap
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Fragment, { children: sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormSection,
    {
      section,
      handlersMap
    },
    section.id
  )) });
}
__name(FormRenderer, "FormRenderer");
const { useMemo: useMemo$g } = await importShared("react");
const BaseExpenseFormRenderer = /* @__PURE__ */ __name(({
  control,
  setValue,
  trigger,
  errors,
  disabled,
  sections,
  handlersMap,
  layout = "single-column",
  leftColumn,
  errorDisplay
}) => {
  const renderProps = useMemo$g(
    () => ({
      control,
      setValue,
      trigger,
      errors,
      disabled
    }),
    [control, setValue, trigger, errors, disabled]
  );
  const content = /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionProvider, { value: renderProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { sections, handlersMap }) });
  if (layout === "two-column") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 h-full overflow-y-auto", children: [
      leftColumn && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 flex-1 sticky top-0 bottom-0 h-full", children: leftColumn }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-2 flex-col gap-3 exp-custom-scrollbar", children: [
        errorDisplay,
        content
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    errorDisplay,
    content
  ] });
}, "BaseExpenseFormRenderer");
const costAllocationTypes = /* @__PURE__ */ __name(() => [
  {
    type: ECostAllocation.Project,
    label: "Project",
    tooltip: "Allocate expense to a sales, parts, or service project"
  },
  {
    type: ECostAllocation.Admin,
    label: "Admin",
    tooltip: "Allocate expense to an internal project for admin and operational costs"
  },
  {
    type: ECostAllocation.Team,
    label: "CCB Team",
    tooltip: "Allocate expense to a commission sales team"
  },
  {
    type: ECostAllocation.Rep,
    label: "CCB Rep",
    tooltip: "Allocate expense to a commission sales rep"
  }
], "costAllocationTypes");
function mapPurchaseOrderToProject(po) {
  return {
    id: String(po.poId),
    poNumber: po.poBaseId,
    supplier: po.supplierName,
    description: po.poDescription,
    projectId: po.projectBaseId,
    projectDescription: po.projectDescription,
    projectDbId: po.projectId,
    poDbId: po.poId,
    supplierId: po.supplierId,
    supplierCurrency: po.supplierCurrency
  };
}
__name(mapPurchaseOrderToProject, "mapPurchaseOrderToProject");
function mapPurchaseOrderToAdmin(po) {
  return {
    id: String(po.poId),
    poNumber: po.poBaseId,
    supplier: po.supplierName,
    description: po.poDescription,
    projectId: po.projectBaseId,
    projectDescription: po.projectDescription,
    projectDbId: po.projectId,
    poDbId: po.poId,
    supplierId: po.supplierId,
    supplierCurrency: po.supplierCurrency
  };
}
__name(mapPurchaseOrderToAdmin, "mapPurchaseOrderToAdmin");
function mapSalesTeam(team) {
  return {
    id: String(team.id),
    number: team.baseId,
    description: team.description
  };
}
__name(mapSalesTeam, "mapSalesTeam");
function mapUser(user) {
  return {
    id: user.userGuid,
    name: user.fullName
  };
}
__name(mapUser, "mapUser");
const reportSearchFailure = /* @__PURE__ */ __name((error, context, query) => {
  devError(`Cost allocation: ${context} failed for`, query);
  if (!isNotFoundError(error)) {
    notifyError(error, {
      context: "action",
      copy: { fallback: "Cost allocation search failed. Please try again." }
    });
  }
  return [];
}, "reportSearchFailure");
const searchProjects = /* @__PURE__ */ __name(async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_PROJECT.build({ poId: query })
    );
    const entity = mapPurchaseOrderToProject(response.data);
    return [{
      value: entity.id,
      label: entity.poNumber,
      data: entity
    }];
  } catch (error) {
    return reportSearchFailure(error, "project search", query);
  }
}, "searchProjects");
const searchAdmins = /* @__PURE__ */ __name(async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_ADMIN.build({ poId: query })
    );
    const entity = mapPurchaseOrderToAdmin(response.data);
    return [{
      value: entity.id,
      label: entity.poNumber,
      data: entity
    }];
  } catch (error) {
    return reportSearchFailure(error, "admin search", query);
  }
}, "searchAdmins");
const searchTeams = /* @__PURE__ */ __name(async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_SALES_TEAMS.build(),
      { params: { query } }
    );
    return response.data.map((team) => {
      const entity = mapSalesTeam(team);
      return {
        value: entity.id,
        label: entity.number,
        data: entity
      };
    });
  } catch (error) {
    return reportSearchFailure(error, "teams search", query);
  }
}, "searchTeams");
const searchReps = /* @__PURE__ */ __name(async (query) => {
  try {
    const response = await apiClient.get(
      EXPENSE_ENDPOINTS.COST_ALLOCATION_SALES_REP.build(),
      { params: { query } }
    );
    return response.data.map((user) => {
      const entity = mapUser(user);
      return {
        value: entity.id,
        label: entity.name,
        data: entity
      };
    });
  } catch (error) {
    return reportSearchFailure(error, "reps search", query);
  }
}, "searchReps");
const getSearchFunctionByType = /* @__PURE__ */ __name((type) => {
  const searchMap = {
    [ECostAllocation.Project]: searchProjects,
    [ECostAllocation.Admin]: searchAdmins,
    [ECostAllocation.Team]: searchTeams,
    [ECostAllocation.Rep]: searchReps
  };
  return searchMap[type];
}, "getSearchFunctionByType");
const { useEffect: useEffect$g, useRef: useRef$d } = await importShared("react");
const useSetDefaultCurrency = /* @__PURE__ */ __name(({
  setValue,
  netCurrency,
  totalCurrency,
  canSeed
}) => {
  const netCode = netCurrency.code;
  const netSymbol = netCurrency.symbol;
  const totalCode = totalCurrency.code;
  const totalSymbol = totalCurrency.symbol;
  const hasSeeded = useRef$d(false);
  useEffect$g(() => {
    if (hasSeeded.current || !canSeed) return;
    setValue(
      "netCurrency",
      { code: netCode, symbol: netSymbol },
      { shouldValidate: false, shouldDirty: false }
    );
    setValue(
      "totalCurrency",
      { code: totalCode, symbol: totalSymbol },
      { shouldValidate: false, shouldDirty: false }
    );
    hasSeeded.current = true;
  }, [setValue, netCode, netSymbol, totalCode, totalSymbol, canSeed]);
}, "useSetDefaultCurrency");
function applyBeFieldErrors(error, setError, fieldMap) {
  const { fieldErrors } = extractError(error);
  for (const { field, message, source } of fieldErrors) {
    if (source !== "business") continue;
    const formField = fieldMap[field];
    if (!formField) continue;
    setError(formField, { type: "server", message });
  }
}
__name(applyBeFieldErrors, "applyBeFieldErrors");
const { useCallback: useCallback$k, useEffect: useEffect$f, useMemo: useMemo$f, useRef: useRef$c } = await importShared("react");
const SUBMIT_BLOCKED_MESSAGE = "This expense cannot be submitted yet. Please review the highlighted fields.";
const DRAFT_BLOCKED_MESSAGE = "This expense cannot be saved yet. Please review the highlighted fields.";
function firstIssueMessage(error) {
  var _a;
  const issues = error == null ? void 0 : error.issues;
  const message = Array.isArray(issues) ? (_a = issues.find((issue) => typeof issue.message === "string")) == null ? void 0 : _a.message : void 0;
  return typeof message === "string" && message.trim() ? message : void 0;
}
__name(firstIssueMessage, "firstIssueMessage");
function useBaseExpenseForm(config, props) {
  const {
    onSubmit,
    onSaveDraft,
    onDraftSaved,
    isSubmitting = false,
    isDrafting = false,
    draftSaveError = false
  } = props;
  const FORM_VALIDATION_CONFIG = {
    validationTrigger: "all",
    revalidationTrigger: "onChange",
    errorDisplayMode: "all"
  };
  const form = useForm({
    resolver: u(config.schema),
    defaultValues: config.defaultValues,
    mode: FORM_VALIDATION_CONFIG.validationTrigger,
    reValidateMode: FORM_VALIDATION_CONFIG.revalidationTrigger,
    criteriaMode: FORM_VALIDATION_CONFIG.errorDisplayMode
  });
  const {
    handleSubmit: rhfHandleSubmit,
    control,
    getValues,
    formState: { isDirty, errors, isValid, defaultValues: rhfDefaultValues },
    trigger,
    reset
  } = form;
  const prevIsDraftingRef = useRef$c(isDrafting);
  useEffect$f(() => {
    if (prevIsDraftingRef.current === true && isDrafting === false && !draftSaveError) {
      const currentValues = getValues();
      const receipt = currentValues.receiptAttachment;
      if (receipt && typeof receipt === "object") {
        const r = receipt;
        devLog("[BaseExpenseForm] pre-reset receiptAttachment:", {
          mimeType: r.mimeType,
          hasBlobUrl: !!r.blobUrl,
          id: r.id
        });
      }
      reset(currentValues, { keepValues: true, keepDirty: false, keepErrors: true, keepIsValid: true });
      const afterValues = getValues();
      const afterReceipt = afterValues.receiptAttachment;
      if (afterReceipt && typeof afterReceipt === "object") {
        const r = afterReceipt;
        devLog("[BaseExpenseForm] post-reset receiptAttachment:", {
          mimeType: r.mimeType,
          hasBlobUrl: !!r.blobUrl,
          id: r.id,
          sameRef: receipt === afterReceipt
        });
      }
      onDraftSaved == null ? void 0 : onDraftSaved();
    }
    prevIsDraftingRef.current = isDrafting;
  }, [isDrafting, draftSaveError, getValues, reset, onDraftSaved]);
  const fieldsForValidation = useMemo$f(() => {
    const draftFields = config.fieldsForDraftCheck || [];
    return draftFields.length > 0 ? [...draftFields] : void 0;
  }, [config.fieldsForDraftCheck]);
  const watchedFieldValues = useWatch({
    control,
    name: fieldsForValidation ?? [],
    disabled: !fieldsForValidation
  });
  const allFormData = useWatch({ control, disabled: !!fieldsForValidation });
  const formDataForValidation = useMemo$f(() => {
    if (!fieldsForValidation) {
      return allFormData;
    }
    if (!Array.isArray(watchedFieldValues)) {
      return {};
    }
    return fieldsForValidation.reduce((acc, field, index) => {
      acc[field] = watchedFieldValues[index];
      return acc;
    }, {});
  }, [fieldsForValidation, watchedFieldValues, allFormData]);
  const validationErrors = useMemo$f(() => {
    const errorMessages = [];
    Object.entries(errors).forEach(([, error]) => {
      if (error == null ? void 0 : error.message) {
        errorMessages.push(error.message);
      }
      const rootError = error == null ? void 0 : error.root;
      if (rootError && typeof rootError === "object" && "message" in rootError) {
        errorMessages.push(rootError.message);
      }
    });
    return errorMessages;
  }, [errors, Object.keys(errors).length]);
  const hasErrors = validationErrors.length > 0;
  const canSave = useMemo$f(
    () => config.canSaveDraft(formDataForValidation),
    [formDataForValidation, config]
  );
  const canSubmit = isValid && !isSubmitting;
  const watchedCostAllocations = useWatch({ control, name: "costAllocations" });
  const costAllocationsDirty = useMemo$f(() => {
    const baseline = rhfDefaultValues == null ? void 0 : rhfDefaultValues.costAllocations;
    return JSON.stringify(watchedCostAllocations ?? []) !== JSON.stringify(baseline ?? []);
  }, [watchedCostAllocations, rhfDefaultValues]);
  const handleFormSubmit = useCallback$k(
    async (data) => {
      try {
        const result = config.validateForSubmission(data);
        if (!result.success) {
          devError("Validation failed:", result.error);
          notifyMessage(firstIssueMessage(result.error) ?? SUBMIT_BLOCKED_MESSAGE);
          return;
        }
        await (onSubmit == null ? void 0 : onSubmit(data));
      } catch (error) {
        devError("Form submission error:", error);
        applyBeFieldErrors(error, form.setError, config.beFieldMap ?? {});
      }
    },
    [config, onSubmit, form]
  );
  const handleDraftSave = useCallback$k(
    async () => {
      try {
        const data = getValues();
        if (!canSave) {
          return;
        }
        if (config.validateForDraft) {
          const result = config.validateForDraft(data);
          if (!result.success) {
            devError("Draft validation failed:", result.error);
            notifyMessage(firstIssueMessage(result.error) ?? DRAFT_BLOCKED_MESSAGE);
            return;
          }
        }
        await (onSaveDraft == null ? void 0 : onSaveDraft(data));
      } catch (error) {
        devError("Draft save error:", error);
        throw error;
      }
    },
    [getValues, canSave, config, onSaveDraft]
  );
  const validateForm = useCallback$k(async () => {
    const isFormValid = await trigger();
    return isFormValid && !isSubmitting;
  }, [trigger, isSubmitting]);
  const getSubmitButtonState = useCallback$k(() => {
    if (isSubmitting || isDrafting) {
      return { disabled: true, tooltip: "Submitting..." };
    }
    if (hasErrors) {
      return { disabled: true, tooltip: "Please fix validation errors" };
    }
    if (!isValid) {
      return { disabled: true, tooltip: "Please fill all required fields" };
    }
    return { disabled: false };
  }, [isSubmitting, isDrafting, hasErrors, isValid]);
  const getSaveDraftButtonState = useCallback$k(() => {
    if (isDrafting) {
      return { disabled: true, tooltip: "Saving draft..." };
    }
    if (!isDirty && !costAllocationsDirty) {
      return { disabled: true, tooltip: "No changes to save" };
    }
    if (!canSave) {
      return { disabled: true, tooltip: "At least one field must be filled" };
    }
    return { disabled: false };
  }, [isDrafting, isDirty, costAllocationsDirty, canSave]);
  return {
    form,
    validationErrors,
    hasErrors,
    canSave,
    canSubmit,
    costAllocationsDirty,
    handleSubmit: rhfHandleSubmit(handleFormSubmit),
    handleDraftSave,
    validateForm,
    getSubmitButtonState,
    getSaveDraftButtonState,
    getValues
  };
}
__name(useBaseExpenseForm, "useBaseExpenseForm");
const { useMemo: useMemo$e } = await importShared("react");
const useCostAllocation = /* @__PURE__ */ __name(({
  allocations,
  totalAmount
}) => {
  const isEnabled = useMemo$e(
    () => allocations.length > 0 || totalAmount > 0,
    [allocations.length, totalAmount]
  );
  const allocatedPercentage = useMemo$e(() => {
    const validAllocations = allocations.filter(isValidAllocation);
    const totalPercentageDecimal = validAllocations.reduce(
      (sum, validAllocation) => sum.plus(validAllocation.percentage ?? 0),
      new Decimal(0)
    );
    return totalPercentageDecimal.toNumber();
  }, [allocations]);
  const remainingPercentage = useMemo$e(() => {
    return Math.max(0, 100 - allocatedPercentage);
  }, [allocatedPercentage]);
  const progressValue = useMemo$e(() => {
    return parseFloat(allocatedPercentage.toFixed(2));
  }, [allocatedPercentage]);
  const progressError = useMemo$e(() => {
    const roundedPercentage = parseFloat(allocatedPercentage.toFixed(2));
    if (roundedPercentage > 100) {
      return "Total allocation cannot exceed 100%";
    }
    return void 0;
  }, [allocatedPercentage]);
  return {
    isEnabled,
    allocatedPercentage,
    remainingPercentage,
    progressValue,
    progressError
  };
}, "useCostAllocation");
const { useCallback: useCallback$j, useMemo: useMemo$d } = await importShared("react");
const useCostAllocationHandlers = /* @__PURE__ */ __name((setValue, getValues, trigger, costAllocationsField, isEqualSplitField, getBaseAmount) => {
  const commitAllocations = useCallback$j(
    (next) => {
      setValue(
        costAllocationsField,
        next,
        { shouldValidate: true, shouldDirty: true }
      );
      trigger(costAllocationsField);
    },
    [setValue, trigger, costAllocationsField]
  );
  const addAllocation = useCallback$j(
    (type) => {
      const currentAllocations = getValues(costAllocationsField) || [];
      const isFirstAllocation = currentAllocations.length === 0;
      let initialAmount = isFirstAllocation && getBaseAmount ? getBaseAmount() : 0;
      if (Number.isNaN(initialAmount)) initialAmount = 0;
      const initialPercentage = isFirstAllocation ? 100 : 0;
      const newAllocation = {
        id: generateId(),
        name: "",
        percentage: initialPercentage,
        amount: initialAmount,
        type
      };
      const updatedAllocations = [...currentAllocations, newAllocation];
      commitAllocations(updatedAllocations);
    },
    [getValues, commitAllocations, costAllocationsField, getBaseAmount]
  );
  const updateAllocationEntity = useCallback$j(
    (id, entity) => {
      const currentAllocations = getValues(costAllocationsField) || [];
      const isEqualSplit = isEqualSplitField ? getValues(isEqualSplitField) : false;
      const allocationsWithEntity = currentAllocations.map(
        (allocation) => allocation.id === id ? {
          ...allocation,
          name: (entity == null ? void 0 : entity.label) || "",
          entityData: (entity == null ? void 0 : entity.data) || void 0
        } : allocation
      );
      let baseAmount = getBaseAmount ? getBaseAmount() : 0;
      if (Number.isNaN(baseAmount)) baseAmount = 0;
      const updatedAllocations = isEqualSplit ? distributeEquallyAmongValid(allocationsWithEntity, baseAmount) : allocationsWithEntity;
      commitAllocations(updatedAllocations);
    },
    [getValues, commitAllocations, costAllocationsField, isEqualSplitField, getBaseAmount]
  );
  const removeAllocation = useCallback$j(
    (id) => {
      const currentAllocations = getValues(costAllocationsField) || [];
      const isEqualSplit = isEqualSplitField ? getValues(isEqualSplitField) : false;
      const filteredAllocations = currentAllocations.filter(
        (allocation) => allocation.id !== id
      );
      let finalAllocations = filteredAllocations;
      let baseAmount = getBaseAmount ? getBaseAmount() : 0;
      if (Number.isNaN(baseAmount)) baseAmount = 0;
      if (isEqualSplit && filteredAllocations.length >= 1) {
        finalAllocations = distributeEquallyAmongValid(filteredAllocations, baseAmount);
      }
      commitAllocations(finalAllocations);
    },
    [getValues, commitAllocations, costAllocationsField, isEqualSplitField, getBaseAmount]
  );
  const getSelectedValue = useCallback$j(
    (allocationId, allocations) => {
      const allocation = allocations.find((a) => a.id === allocationId);
      if (!allocation || !allocation.name) {
        return null;
      }
      return {
        value: allocationId,
        label: allocation.name,
        data: allocation.entityData
      };
    },
    []
  );
  return useMemo$d(() => ({
    actions: {
      addAllocation,
      updateAllocationEntity,
      removeAllocation
    },
    helpers: {
      getSelectedValue,
      getValues
    }
  }), [addAllocation, updateAllocationEntity, removeAllocation, getSelectedValue, getValues]);
}, "useCostAllocationHandlers");
const { useCallback: useCallback$i } = await importShared("react");
const useDisableEqualSplit = /* @__PURE__ */ __name((setValue, getValues, field) => {
  return useCallback$i(() => {
    if (!field) return;
    const current = getValues(field);
    if (current) {
      setValue(
        field,
        false,
        {
          shouldValidate: false,
          shouldDirty: true
        }
      );
    }
  }, [field, setValue, getValues]);
}, "useDisableEqualSplit");
const { useCallback: useCallback$h, useRef: useRef$b } = await importShared("react");
const useAllocationSync = /* @__PURE__ */ __name(({
  index,
  totalAmount,
  setValue,
  trigger,
  getValues,
  isEqualSplitField
}) => {
  const isEditingAmountRef = useRef$b(false);
  const isEditingPercentageRef = useRef$b(false);
  const disableEqualSplit = useDisableEqualSplit(setValue, getValues, isEqualSplitField);
  const setAmountEditing = useCallback$h((editing) => {
    isEditingAmountRef.current = editing;
  }, []);
  const setPercentageEditing = useCallback$h((editing) => {
    isEditingPercentageRef.current = editing;
  }, []);
  const amountPath = `costAllocations.${index}.amount`;
  const percentagePath = `costAllocations.${index}.percentage`;
  const allocationsPath = "costAllocations";
  const syncPercentageFromAmount = useCallback$h(
    (amount) => {
      if (isEditingPercentageRef.current) return;
      if (totalAmount === 0 || !isFinite(amount) || isNaN(amount)) return;
      disableEqualSplit();
      const amountDecimal = new Decimal(amount).abs();
      const totalDecimal = new Decimal(totalAmount).abs();
      const rawPercentage = amountDecimal.dividedBy(totalDecimal).times(100);
      const roundedPercentage = parseFloat(rawPercentage.toDecimalPlaces(DECIMAL_PLACES).toString());
      setValue(percentagePath, roundedPercentage, {
        shouldValidate: false,
        shouldDirty: true
      });
      trigger([percentagePath, amountPath, allocationsPath]);
    },
    [index, totalAmount, setValue, trigger, disableEqualSplit]
  );
  const syncAmountFromPercentage = useCallback$h(
    (percentage) => {
      if (isEditingAmountRef.current) return;
      if (!isFinite(percentage) || isNaN(percentage)) return;
      disableEqualSplit();
      if (!totalAmount) {
        setValue(amountPath, 0, {
          shouldValidate: false,
          shouldDirty: true
        });
      } else {
        const totalDecimal = new Decimal(totalAmount);
        const percentDecimal = new Decimal(percentage);
        const rawAmount = totalDecimal.times(percentDecimal).dividedBy(100);
        const roundedAmount = parseFloat(rawAmount.toDecimalPlaces(DECIMAL_PLACES).toString());
        setValue(amountPath, roundedAmount, {
          shouldValidate: false,
          shouldDirty: true
        });
      }
      trigger([amountPath, percentagePath, allocationsPath]);
    },
    [index, totalAmount, setValue, trigger, disableEqualSplit]
  );
  return {
    syncPercentageFromAmount,
    syncAmountFromPercentage,
    setAmountEditing,
    setPercentageEditing
  };
}, "useAllocationSync");
const { useCallback: useCallback$g, useEffect: useEffect$e, useMemo: useMemo$c } = await importShared("react");
const useEqualSplit = /* @__PURE__ */ __name(({
  allocations,
  isEqualSplit,
  setValue,
  getValues,
  trigger,
  totalAmount,
  totalAmountField,
  costAllocationsField,
  isEqualSplitField
}) => {
  const canEnableEqualSplit = useMemo$c(() => {
    const validAllocations = allocations.filter(isValidAllocation);
    return allocations.length > 1 && validAllocations.length > 0;
  }, [allocations]);
  const isCurrentlyEqual = useMemo$c(() => {
    return areAllocationsEqual(allocations, totalAmount);
  }, [allocations, totalAmount]);
  const distributeEqually = useCallback$g(() => {
    const currentAllocations = getValues(costAllocationsField) || [];
    const currentTotalAmountStr = getValues(totalAmountField);
    const currentTotalAmount = parseFloat(currentTotalAmountStr || "0");
    const mergedAllocations = distributeEquallyAmongValid(currentAllocations, currentTotalAmount);
    if (mergedAllocations === currentAllocations) return;
    setValue(
      costAllocationsField,
      mergedAllocations,
      {
        shouldValidate: true,
        shouldDirty: true
      }
    );
    trigger(costAllocationsField);
    setValue(
      isEqualSplitField,
      true,
      {
        shouldValidate: false,
        shouldDirty: true
      }
    );
  }, [getValues, setValue, costAllocationsField, totalAmountField, isEqualSplitField, trigger]);
  const toggleEqualSplit = useCallback$g(() => {
    if (!canEnableEqualSplit) return;
    if (isEqualSplit) {
      setValue(
        isEqualSplitField,
        false,
        {
          shouldValidate: false,
          shouldDirty: true
        }
      );
    } else {
      distributeEqually();
    }
  }, [isEqualSplit, canEnableEqualSplit, distributeEqually, setValue, isEqualSplitField]);
  const shouldDisableEqualSplit = isEqualSplit && !canEnableEqualSplit;
  useEffect$e(() => {
    if (shouldDisableEqualSplit) {
      const currentAllocations = getValues(costAllocationsField) || [];
      if (currentAllocations.length === 1) {
        const currentTotalAmountStr = getValues(totalAmountField);
        const currentTotalAmount = parseFloat(currentTotalAmountStr || "0");
        const [allocation] = currentAllocations;
        const updatedAllocation = {
          ...allocation,
          amount: currentTotalAmount,
          percentage: 100
        };
        setValue(
          costAllocationsField,
          [updatedAllocation],
          {
            shouldValidate: true,
            shouldDirty: true
          }
        );
        trigger(costAllocationsField);
      }
      setValue(
        isEqualSplitField,
        false,
        {
          shouldValidate: false,
          shouldDirty: false
        }
      );
    }
  }, [
    shouldDisableEqualSplit,
    getValues,
    costAllocationsField,
    totalAmountField,
    setValue,
    isEqualSplitField,
    trigger
  ]);
  return {
    canEnableEqualSplit,
    isCurrentlyEqual,
    toggleEqualSplit,
    distributeEqually
  };
}, "useEqualSplit");
const { useEffect: useEffect$d, useRef: useRef$a } = await importShared("react");
const useAmountAllocationSync = /* @__PURE__ */ __name(({
  amount,
  setValue,
  getValues,
  trigger,
  costAllocationsField,
  isEqualSplitField
}) => {
  const prevAmountRef = useRef$a(amount);
  const setValueRef = useRef$a(setValue);
  const getValuesRef = useRef$a(getValues);
  const triggerRef = useRef$a(trigger);
  useEffect$d(() => {
    setValueRef.current = setValue;
    getValuesRef.current = getValues;
    triggerRef.current = trigger;
  }, [setValue, getValues, trigger]);
  useEffect$d(() => {
    const amountChanged = prevAmountRef.current !== amount;
    prevAmountRef.current = amount;
    if (!amountChanged) {
      return;
    }
    const currentAllocations = getValuesRef.current(costAllocationsField) || [];
    if (currentAllocations.length === 0) {
      return;
    }
    const currentIsEqualSplit = getValuesRef.current(isEqualSplitField) ?? false;
    const recalculatedAllocations = currentIsEqualSplit ? calculateEqualDistribution(currentAllocations, amount) : recalculatePercentages(recalculateAmounts(currentAllocations, amount), amount);
    setValueRef.current(
      costAllocationsField,
      recalculatedAllocations,
      {
        shouldValidate: true,
        shouldDirty: true
      }
    );
    triggerRef.current(costAllocationsField);
  }, [amount, costAllocationsField, isEqualSplitField]);
}, "useAmountAllocationSync");
const { useEffect: useEffect$c } = await importShared("react");
const useValidatePrefilledFields = /* @__PURE__ */ __name((form, initialData) => {
  useEffect$c(() => {
    if (!initialData) return;
    const timeout = setTimeout(() => {
      const values = form.getValues();
      const filledFields = Object.keys(values).filter((key) => {
        const value = values[key];
        if (value == null) return false;
        if (typeof value === "string") return value.trim() !== "";
        if (typeof value === "boolean") return false;
        if (Array.isArray(value)) return value.length > 0;
        return true;
      });
      const expandedFields = [];
      for (const field of filledFields) {
        expandedFields.push(field);
        const value = values[field];
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (item != null && typeof item === "object") {
              for (const key of Object.keys(item)) {
                expandedFields.push(`${field}.${index}.${key}`);
              }
            }
          });
        }
      }
      if (expandedFields.length > 0) {
        form.trigger(expandedFields);
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, []);
}, "useValidatePrefilledFields");
const { useCallback: useCallback$f, useMemo: useMemo$b } = await importShared("react");
function useFormFieldValues(control, fields) {
  const values = useWatch({
    control,
    name: [...fields]
  });
  if (!Array.isArray(values)) {
    return {};
  }
  return fields.reduce((acc, field, index) => {
    acc[field] = values[index];
    return acc;
  }, {});
}
__name(useFormFieldValues, "useFormFieldValues");
const { useCallback: useCallback$e, useEffect: useEffect$b, useMemo: useMemo$a, useRef: useRef$9 } = await importShared("react");
const { useCallback: useCallback$d, useEffect: useEffect$a, useImperativeHandle, useRef: useRef$8 } = await importShared("react");
const useFormImperativeHandle = /* @__PURE__ */ __name(({
  ref,
  form,
  onFormErrors
}) => {
  const formRef = useRef$8(form);
  const onFormErrorsRef = useRef$8(onFormErrors);
  useEffect$a(() => {
    formRef.current = form;
    onFormErrorsRef.current = onFormErrors;
  });
  const handleFormSubmit = useCallback$d(async () => {
    var _a;
    const isValid = await formRef.current.validateForm();
    if (isValid) {
      await formRef.current.handleSubmit();
    } else {
      (_a = onFormErrorsRef.current) == null ? void 0 : _a.call(onFormErrorsRef, formRef.current.validationErrors);
    }
  }, []);
  const handleDraftSave = useCallback$d(async () => {
    await formRef.current.handleDraftSave();
  }, []);
  useImperativeHandle(
    ref,
    () => ({
      submitForm: handleFormSubmit,
      saveDraft: handleDraftSave,
      getFormData: /* @__PURE__ */ __name(() => formRef.current.getValues(), "getFormData"),
      validateForm: /* @__PURE__ */ __name(() => ({
        isValid: formRef.current.canSubmit,
        errors: formRef.current.validationErrors
      }), "validateForm"),
      get submitButtonState() {
        return formRef.current.getSubmitButtonState();
      },
      get saveDraftButtonState() {
        return formRef.current.getSaveDraftButtonState();
      }
    }),
    [handleFormSubmit, handleDraftSave]
  );
  return {
    handleFormSubmit,
    handleDraftSave
  };
}, "useFormImperativeHandle");
const { useEffect: useEffect$9, useRef: useRef$7 } = await importShared("react");
const useFormButtonStateSync = /* @__PURE__ */ __name(({
  form,
  formState,
  isSubmitting,
  isDrafting,
  onButtonStateChange
}) => {
  const formRef = useRef$7(form);
  const onButtonStateChangeRef = useRef$7(onButtonStateChange);
  useEffect$9(() => {
    formRef.current = form;
    onButtonStateChangeRef.current = onButtonStateChange;
  });
  useEffect$9(() => {
    if (!onButtonStateChangeRef.current) return;
    const submitState = formRef.current.getSubmitButtonState();
    const draftState = formRef.current.getSaveDraftButtonState();
    onButtonStateChangeRef.current(submitState, draftState);
  }, [
    formState.isDirty,
    formState.isValid,
    form.hasErrors,
    form.canSave,
    form.costAllocationsDirty,
    isSubmitting,
    isDrafting
  ]);
}, "useFormButtonStateSync");
const { useCallback: useCallback$c } = await importShared("react");
const useFileHandlers = /* @__PURE__ */ __name((options) => {
  const {
    setValue,
    receiptAttachmentField: receiptAttachmentField2,
    supportingFilesField: supportingFilesField2,
    onReceiptUploaded,
    onSupportingFilesChanged
  } = options;
  const handleReceiptChange = useCallback$c(
    (attachment) => {
      setValue(
        receiptAttachmentField2,
        attachment || null,
        { shouldValidate: true, shouldDirty: false }
      );
      if (attachment) {
        onReceiptUploaded == null ? void 0 : onReceiptUploaded(attachment);
      }
    },
    [setValue, receiptAttachmentField2, onReceiptUploaded]
  );
  const handleSupportingFilesChange = useCallback$c(
    (attachments) => {
      if (supportingFilesField2) {
        setValue(
          supportingFilesField2,
          attachments,
          { shouldValidate: true, shouldDirty: false }
        );
        onSupportingFilesChanged == null ? void 0 : onSupportingFilesChanged(attachments);
      }
    },
    [setValue, supportingFilesField2, onSupportingFilesChanged]
  );
  return {
    handleReceiptChange,
    handleSupportingFilesChange
  };
}, "useFileHandlers");
const { useCallback: useCallback$b, useRef: useRef$6 } = await importShared("react");
const DEFAULT_DEBOUNCE_MS = 500;
const useAutoSave = /* @__PURE__ */ __name((options) => {
  const { draftId, isDrafting, onSaveDraft, getFormValues, debounceMs = DEFAULT_DEBOUNCE_MS } = options;
  const onSaveDraftRef = useRef$6(onSaveDraft);
  onSaveDraftRef.current = onSaveDraft;
  const performAutoSave = useCallback$b(() => {
    if (!draftId && onSaveDraftRef.current && !isDrafting) {
      const currentData = getFormValues();
      onSaveDraftRef.current(currentData);
    }
  }, [draftId, isDrafting, getFormValues]);
  const triggerAutoSave = useDebouncedCallback(performAutoSave, debounceMs);
  return { triggerAutoSave };
}, "useAutoSave");
const { useEffect: useEffect$8 } = await importShared("react");
const useReceiptCheckboxEffects = /* @__PURE__ */ __name((options) => {
  const {
    watch,
    setValue,
    receiptAttachmentField: receiptAttachmentField2,
    isReceiptUnavailableField: isReceiptUnavailableField2,
    affidavitField: affidavitField2
  } = options;
  const isReceiptUnavailable = watch(isReceiptUnavailableField2);
  const receiptAttachment = watch(receiptAttachmentField2);
  useEffect$8(() => {
    if (isReceiptUnavailable) {
      setValue(
        receiptAttachmentField2,
        null,
        { shouldValidate: true, shouldDirty: false }
      );
      if (affidavitField2) {
        const current = watch(affidavitField2);
        if (!(current == null ? void 0 : current.justification) && !(current == null ? void 0 : current.digitalSignature)) {
          setValue(
            affidavitField2,
            { justification: "", digitalSignature: "" },
            { shouldValidate: false }
          );
        }
      }
    } else if (affidavitField2) {
      setValue(
        affidavitField2,
        null,
        { shouldValidate: true }
      );
    }
  }, [isReceiptUnavailable, setValue, receiptAttachmentField2, affidavitField2]);
  useEffect$8(() => {
    if (receiptAttachment && isReceiptUnavailable) {
      setValue(
        isReceiptUnavailableField2,
        false,
        { shouldValidate: false }
      );
      if (affidavitField2) {
        setValue(
          affidavitField2,
          null,
          { shouldValidate: true }
        );
      }
    }
  }, [receiptAttachment, isReceiptUnavailable, setValue, isReceiptUnavailableField2, affidavitField2]);
}, "useReceiptCheckboxEffects");
const { useEffect: useEffect$7, useMemo: useMemo$9 } = await importShared("react");
const useReimbursableAmountSync = /* @__PURE__ */ __name(({
  totalDistance,
  ratePerUnit,
  setValue,
  getValues,
  reimbursableAmountField: reimbursableAmountField2
}) => {
  const calculatedAmount = useMemo$9(() => {
    try {
      const distanceDecimal = new Decimal(totalDistance || 0);
      const rateDecimal = new Decimal(ratePerUnit || 0);
      if (distanceDecimal.gt(0) && rateDecimal.gt(0)) {
        return distanceDecimal.times(rateDecimal).toDecimalPlaces(DECIMAL_PLACES, Decimal.ROUND_HALF_UP).toString();
      }
      return "0.00";
    } catch (error) {
      devError("Error calculating reimbursable amount:", error);
      return "0.00";
    }
  }, [totalDistance, ratePerUnit]);
  useEffect$7(() => {
    const currentValue = getValues(reimbursableAmountField2);
    if (currentValue !== calculatedAmount) {
      setValue(
        reimbursableAmountField2,
        calculatedAmount,
        {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: false
        }
      );
    }
  }, [calculatedAmount, setValue, getValues, reimbursableAmountField2]);
}, "useReimbursableAmountSync");
const NO_MILEAGE_RATE_FOR_DATE_MESSAGE = "No mileage rate available for selected date";
const tripRatePerUnitField = string().refine((val) => !val || DECIMAL_FORMAT_REGEX.test(val), "Invalid rate format");
const tripRateUnitField = string();
const mileageTripFormSchema = object({
  formType: literal("trip"),
  [MileageTripFormField.MileageType]: mileageTypeField,
  [MileageTripFormField.ExpenseDate]: expenseDateField,
  [MileageTripFormField.FromLocation]: locationField,
  [MileageTripFormField.ToLocation]: locationField,
  [MileageTripFormField.IsRoundTrip]: isRoundTripField,
  [MileageTripFormField.TotalDistance]: totalDistanceField,
  [MileageTripFormField.RatePerUnit]: tripRatePerUnitField,
  [MileageTripFormField.RateUnit]: tripRateUnitField,
  [MileageTripFormField.ReimbursableAmount]: reimbursableAmountField,
  [MileageTripFormField.TotalCurrency]: totalCurrencyField,
  [MileageTripFormField.BusinessPurpose]: businessPurposeField,
  [MileageTripFormField.ExpenseDescription]: expenseDescriptionField,
  [MileageTripFormField.CostAllocations]: array(costAllocationItemSchema).optional(),
  [MileageTripFormField.IsEqualSplit]: boolean().optional(),
  [MileageTripFormField.DeferToApprover]: boolean().optional(),
  [MileageTripFormField.AdditionalComments]: additionalCommentsFieldOptional
}).superRefine((data, ctx) => {
  var _a;
  validateCostAllocation(
    ctx,
    data.costAllocations,
    data.reimbursableAmount,
    data.deferToApprover,
    (_a = data.totalCurrency) == null ? void 0 : _a.code
  );
  if (data.mileageType && data.expenseDate && !data.ratePerUnit) {
    ctx.addIssue({
      code: "custom",
      message: NO_MILEAGE_RATE_FOR_DATE_MESSAGE,
      path: [MileageTripFormField.ExpenseDate]
    });
  }
});
const mileageTripDraftSchema = object({
  formType: literal("trip"),
  [MileageTripFormField.MileageType]: mileageTypeFieldOptional,
  [MileageTripFormField.ExpenseDate]: expenseDateFieldOptional,
  [MileageTripFormField.FromLocation]: locationFieldOptional,
  [MileageTripFormField.ToLocation]: locationFieldOptional,
  [MileageTripFormField.IsRoundTrip]: isRoundTripField,
  [MileageTripFormField.TotalDistance]: totalDistanceFieldOptional,
  [MileageTripFormField.RatePerUnit]: ratePerUnitFieldOptional,
  [MileageTripFormField.RateUnit]: rateUnitFieldOptional,
  [MileageTripFormField.ReimbursableAmount]: reimbursableAmountFieldOptional,
  [MileageTripFormField.TotalCurrency]: totalCurrencyField,
  [MileageTripFormField.BusinessPurpose]: businessPurposeFieldOptional,
  [MileageTripFormField.ExpenseDescription]: expenseDescriptionFieldOptional,
  [MileageTripFormField.CostAllocations]: array(costAllocationItemDraftSchema).optional(),
  [MileageTripFormField.IsEqualSplit]: boolean().optional(),
  [MileageTripFormField.DeferToApprover]: boolean().optional(),
  [MileageTripFormField.AdditionalComments]: additionalCommentsFieldOptional
});
const validateMileageTripForDraft = /* @__PURE__ */ __name((data) => {
  return mileageTripDraftSchema.safeParse(data);
}, "validateMileageTripForDraft");
const draftSaveableFields$1 = [
  MileageTripFormField.MileageType,
  MileageTripFormField.ExpenseDate,
  MileageTripFormField.FromLocation,
  MileageTripFormField.ToLocation,
  MileageTripFormField.TotalDistance,
  MileageTripFormField.BusinessPurpose,
  MileageTripFormField.ExpenseDescription,
  MileageTripFormField.AdditionalComments
];
const canSaveDraft$1 = createDraftSaveChecker(draftSaveableFields$1);
const getFormValidationErrors$1 = /* @__PURE__ */ __name((data) => {
  const errors = [];
  const result = mileageTripFormSchema.safeParse(data);
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors.push(issue.message);
    });
  }
  return errors;
}, "getFormValidationErrors$1");
const mileageTripValidationStrategy = createValidationStrategy(mileageTripFormSchema, {
  validateForDraft: validateMileageTripForDraft,
  canSaveDraft: canSaveDraft$1,
  getValidationErrors: getFormValidationErrors$1
});
const { useCallback: useCallback$a, useMemo: useMemo$8 } = await importShared("react");
const mapMileageTripToDefaultValues = /* @__PURE__ */ __name((data) => {
  return {
    formType: MileageFormType.Trip,
    [MileageTripFormField.MileageType]: (data == null ? void 0 : data.mileageType) ?? "",
    [MileageTripFormField.ExpenseDate]: (data == null ? void 0 : data.expenseDate) ?? "",
    [MileageTripFormField.FromLocation]: (data == null ? void 0 : data.fromLocation) ?? "",
    [MileageTripFormField.ToLocation]: (data == null ? void 0 : data.toLocation) ?? "",
    [MileageTripFormField.IsRoundTrip]: (data == null ? void 0 : data.isRoundTrip) ?? false,
    [MileageTripFormField.TotalDistance]: (data == null ? void 0 : data.totalDistance) ?? "",
    [MileageTripFormField.RatePerUnit]: (data == null ? void 0 : data.ratePerUnit) ?? "",
    [MileageTripFormField.RateUnit]: (data == null ? void 0 : data.rateUnit) ?? "",
    [MileageTripFormField.ReimbursableAmount]: (data == null ? void 0 : data.reimbursableAmount) ?? "",
    [MileageTripFormField.TotalCurrency]: data == null ? void 0 : data.totalCurrency,
    [MileageTripFormField.BusinessPurpose]: (data == null ? void 0 : data.businessPurpose) ?? "",
    [MileageTripFormField.ExpenseDescription]: (data == null ? void 0 : data.expenseDescription) ?? "",
    [MileageTripFormField.CostAllocations]: (data == null ? void 0 : data.costAllocations) ?? [],
    [MileageTripFormField.DeferToApprover]: (data == null ? void 0 : data.deferToApprover) ?? false,
    [MileageTripFormField.IsEqualSplit]: (data == null ? void 0 : data.isEqualSplit) ?? false,
    [MileageTripFormField.AdditionalComments]: (data == null ? void 0 : data.additionalComments) ?? ""
  };
}, "mapMileageTripToDefaultValues");
var MileagePeriodFormField = /* @__PURE__ */ ((MileagePeriodFormField2) => {
  MileagePeriodFormField2["MileageType"] = "mileageType";
  MileagePeriodFormField2["ExpensePeriod"] = "expensePeriod";
  MileagePeriodFormField2["TotalDistance"] = "totalDistance";
  MileagePeriodFormField2["RatePerUnit"] = "ratePerUnit";
  MileagePeriodFormField2["RateUnit"] = "rateUnit";
  MileagePeriodFormField2["ReimbursableAmount"] = "reimbursableAmount";
  MileagePeriodFormField2["TotalCurrency"] = "totalCurrency";
  MileagePeriodFormField2["BusinessPurpose"] = "businessPurpose";
  MileagePeriodFormField2["ExpenseDescription"] = "expenseDescription";
  MileagePeriodFormField2["CostAllocations"] = "costAllocations";
  MileagePeriodFormField2["IsEqualSplit"] = "isEqualSplit";
  MileagePeriodFormField2["DeferToApprover"] = "deferToApprover";
  MileagePeriodFormField2["SupportingFiles"] = "supportingFiles";
  MileagePeriodFormField2["AdditionalComments"] = "additionalComments";
  return MileagePeriodFormField2;
})(MileagePeriodFormField || {});
const isSameCalendarMonth = /* @__PURE__ */ __name((a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth(), "isSameCalendarMonth");
const periodRatePerUnitField = string().refine((val) => !val || DECIMAL_FORMAT_REGEX.test(val), "Invalid rate format");
const periodRateUnitField = string();
const mileagePeriodFormSchema = object({
  formType: literal("period"),
  [MileagePeriodFormField.MileageType]: mileageTypeField,
  [MileagePeriodFormField.ExpensePeriod]: expensePeriodField,
  [MileagePeriodFormField.TotalDistance]: totalDistanceField,
  [MileagePeriodFormField.RatePerUnit]: periodRatePerUnitField,
  [MileagePeriodFormField.RateUnit]: periodRateUnitField,
  [MileagePeriodFormField.ReimbursableAmount]: reimbursableAmountField,
  [MileagePeriodFormField.TotalCurrency]: totalCurrencyField,
  [MileagePeriodFormField.BusinessPurpose]: businessPurposeField,
  [MileagePeriodFormField.ExpenseDescription]: expenseDescriptionField,
  [MileagePeriodFormField.CostAllocations]: array(costAllocationItemSchema).optional(),
  [MileagePeriodFormField.IsEqualSplit]: boolean().optional(),
  [MileagePeriodFormField.DeferToApprover]: boolean().optional(),
  [MileagePeriodFormField.SupportingFiles]: mileagePeriodSupportingFilesField,
  [MileagePeriodFormField.AdditionalComments]: additionalCommentsFieldOptional
}).superRefine((data, ctx) => {
  var _a;
  validateCostAllocation(
    ctx,
    data.costAllocations,
    data.reimbursableAmount,
    data.deferToApprover,
    (_a = data.totalCurrency) == null ? void 0 : _a.code
  );
  const { from, to } = data.expensePeriod ?? {};
  if (from && to && !isSameCalendarMonth(from, to)) {
    ctx.addIssue({
      code: "custom",
      message: "Mileage period must fall within one calendar month",
      path: [MileagePeriodFormField.ExpensePeriod]
    });
    return;
  }
  if (data.mileageType && from && !data.ratePerUnit) {
    ctx.addIssue({
      code: "custom",
      message: NO_MILEAGE_RATE_FOR_DATE_MESSAGE,
      path: [MileagePeriodFormField.ExpensePeriod]
    });
  }
});
const mileagePeriodDraftSchema = object({
  formType: literal("period"),
  [MileagePeriodFormField.MileageType]: mileageTypeFieldOptional,
  [MileagePeriodFormField.ExpensePeriod]: expensePeriodFieldOptional,
  [MileagePeriodFormField.TotalDistance]: totalDistanceFieldOptional,
  [MileagePeriodFormField.RatePerUnit]: ratePerUnitFieldOptional,
  [MileagePeriodFormField.RateUnit]: rateUnitFieldOptional,
  [MileagePeriodFormField.ReimbursableAmount]: reimbursableAmountFieldOptional,
  [MileagePeriodFormField.TotalCurrency]: totalCurrencyField,
  [MileagePeriodFormField.BusinessPurpose]: businessPurposeFieldOptional,
  [MileagePeriodFormField.ExpenseDescription]: expenseDescriptionFieldOptional,
  [MileagePeriodFormField.CostAllocations]: array(costAllocationItemDraftSchema).optional(),
  [MileagePeriodFormField.IsEqualSplit]: boolean().optional(),
  [MileagePeriodFormField.DeferToApprover]: boolean().optional(),
  [MileagePeriodFormField.SupportingFiles]: supportingFilesField,
  [MileagePeriodFormField.AdditionalComments]: additionalCommentsFieldOptional
});
const validateMileagePeriodForDraft = /* @__PURE__ */ __name((data) => {
  return mileagePeriodDraftSchema.safeParse(data);
}, "validateMileagePeriodForDraft");
const draftSaveableFields = [
  MileagePeriodFormField.MileageType,
  MileagePeriodFormField.ExpensePeriod,
  MileagePeriodFormField.TotalDistance,
  MileagePeriodFormField.BusinessPurpose,
  MileagePeriodFormField.ExpenseDescription,
  MileagePeriodFormField.SupportingFiles,
  MileagePeriodFormField.AdditionalComments
];
const canSaveDraft = createDraftSaveChecker(draftSaveableFields);
const getFormValidationErrors = /* @__PURE__ */ __name((data) => {
  const errors = [];
  const result = mileagePeriodFormSchema.safeParse(data);
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors.push(issue.message);
    });
  }
  return errors;
}, "getFormValidationErrors");
const mileagePeriodValidationStrategy = createValidationStrategy(mileagePeriodFormSchema, {
  validateForDraft: validateMileagePeriodForDraft,
  canSaveDraft,
  getValidationErrors: getFormValidationErrors
});
const { useCallback: useCallback$9, useMemo: useMemo$7 } = await importShared("react");
const ensureDate = /* @__PURE__ */ __name((value) => {
  if (!value) return void 0;
  if (value instanceof Date) return value;
  if (typeof value === "string") return new Date(value);
  return void 0;
}, "ensureDate");
const parseExpensePeriod = /* @__PURE__ */ __name((period) => {
  if (!period) return void 0;
  const from = ensureDate(period.from);
  const to = ensureDate(period.to);
  if (!from || !to) return void 0;
  return { from, to };
}, "parseExpensePeriod");
const mapMileagePeriodToDefaultValues = /* @__PURE__ */ __name((data) => {
  return {
    formType: MileageFormType.Period,
    [MileagePeriodFormField.MileageType]: (data == null ? void 0 : data.mileageType) ?? "",
    [MileagePeriodFormField.ExpensePeriod]: parseExpensePeriod(data == null ? void 0 : data.expensePeriod),
    [MileagePeriodFormField.TotalDistance]: (data == null ? void 0 : data.totalDistance) ?? "",
    [MileagePeriodFormField.RatePerUnit]: (data == null ? void 0 : data.ratePerUnit) ?? "",
    [MileagePeriodFormField.RateUnit]: (data == null ? void 0 : data.rateUnit) ?? "",
    [MileagePeriodFormField.ReimbursableAmount]: (data == null ? void 0 : data.reimbursableAmount) ?? "",
    [MileagePeriodFormField.TotalCurrency]: data == null ? void 0 : data.totalCurrency,
    [MileagePeriodFormField.BusinessPurpose]: (data == null ? void 0 : data.businessPurpose) ?? "",
    [MileagePeriodFormField.ExpenseDescription]: (data == null ? void 0 : data.expenseDescription) ?? "",
    [MileagePeriodFormField.CostAllocations]: (data == null ? void 0 : data.costAllocations) ?? [],
    [MileagePeriodFormField.DeferToApprover]: (data == null ? void 0 : data.deferToApprover) ?? false,
    [MileagePeriodFormField.IsEqualSplit]: (data == null ? void 0 : data.isEqualSplit) ?? false,
    [MileagePeriodFormField.SupportingFiles]: (data == null ? void 0 : data.supportingFiles) ?? [],
    [MileagePeriodFormField.AdditionalComments]: (data == null ? void 0 : data.additionalComments) ?? ""
  };
}, "mapMileagePeriodToDefaultValues");
var FormSectionType = /* @__PURE__ */ ((FormSectionType2) => {
  FormSectionType2["Receipt"] = "receipt";
  FormSectionType2["ExpenseDetails"] = "expense-details";
  FormSectionType2["ExpenseJustification"] = "expense-justification";
  FormSectionType2["CostAllocation"] = "cost-allocation";
  FormSectionType2["AdditionalComments"] = "additional-comments";
  FormSectionType2["SupportingFiles"] = "supporting-files";
  FormSectionType2["MileageDetails"] = "mileage-details";
  FormSectionType2["MileageJustification"] = "mileage-justification";
  return FormSectionType2;
})(FormSectionType || {});
const { useCallback: useCallback$8, useMemo: useMemo$6 } = await importShared("react");
const useMileagePeriodFormHandlers = /* @__PURE__ */ __name((setValue, getValues, trigger, context) => {
  const getBaseAmount = useCallback$8(
    () => parseFloat(getValues(MileagePeriodFormField.ReimbursableAmount) || "0"),
    [getValues]
  );
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    trigger,
    MileagePeriodFormField.CostAllocations,
    MileagePeriodFormField.IsEqualSplit,
    getBaseAmount
  );
  const handleSaveDraftForUpload = useCallback$8(async () => {
    if (!(context == null ? void 0 : context.onSaveDraftForUpload)) {
      throw new Error("onSaveDraftForUpload is not defined");
    }
    const formData = getValues();
    return context.onSaveDraftForUpload(formData);
  }, [getValues, context == null ? void 0 : context.onSaveDraftForUpload]);
  return useMemo$6(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers,
      [FormSectionType.SupportingFiles]: {
        expenseId: context == null ? void 0 : context.draftId,
        onSaveDraftForUpload: (context == null ? void 0 : context.onSaveDraftForUpload) ? handleSaveDraftForUpload : void 0
      }
    }),
    [costAllocationHandlers, context == null ? void 0 : context.draftId, context == null ? void 0 : context.onSaveDraftForUpload, handleSaveDraftForUpload]
  );
}, "useMileagePeriodFormHandlers");
const getMileageTypesFromCache = /* @__PURE__ */ __name((queryClient2, companyShortName) => {
  return queryClient2.getQueryData([
    ...queryKeys.expenseTypes.list(companyShortName, false),
    { formTypeIds: [FormTypeId.MILEAGE], scope: void 0 }
  ]);
}, "getMileageTypesFromCache");
const findActiveSelectedMileageType = /* @__PURE__ */ __name((types, mileageTypeId) => {
  if (!mileageTypeId) return void 0;
  const found = types == null ? void 0 : types.find((et) => et.id === mileageTypeId);
  return (found == null ? void 0 : found.status) === "active" ? found : void 0;
}, "findActiveSelectedMileageType");
const { useEffect: useEffect$6, useMemo: useMemo$5 } = await importShared("react");
const DATE_FIELDS_TO_REVALIDATE = [
  MileageTripFormField.ExpenseDate,
  MileagePeriodFormField.ExpensePeriod
];
const useMileageRateSync = /* @__PURE__ */ __name(({
  mileageType,
  effectiveOn,
  setValue,
  getValues,
  trigger
}) => {
  const { company } = useDefaultCompany();
  const companyShortName = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, {
    formTypeIds: [FormTypeId.MILEAGE]
  });
  const selectedType = useMemo$5(
    () => findActiveSelectedMileageType(expenseTypes, mileageType),
    [mileageType, expenseTypes]
  );
  const canResolve = !!(selectedType == null ? void 0 : selectedType.mileageRateId) && !!effectiveOn;
  const { data: effectiveRate, isFetching } = useEffectiveMileageRate({
    companyShortName,
    mileageRateId: (selectedType == null ? void 0 : selectedType.mileageRateId) ?? null,
    date: effectiveOn,
    enabled: canResolve
  });
  const hasNoRateForDate = canResolve && !isFetching && effectiveRate === null;
  useEffect$6(() => {
    if (!mileageType) return;
    if (!expenseTypes) return;
    const rateField = MileageTripFormField.RatePerUnit;
    const unitField = MileageTripFormField.RateUnit;
    if (!selectedType) {
      clearRateFields({ getValues, setValue, trigger, rateField, unitField });
      return;
    }
    if (!selectedType.mileageRateId) return;
    if (!effectiveOn) {
      clearRateFields({ getValues, setValue, trigger, rateField, unitField });
      return;
    }
    if (isFetching) return;
    if (effectiveRate === null) {
      clearRateFields({ getValues, setValue, trigger, rateField, unitField });
      return;
    }
    if (effectiveRate === void 0) return;
    const rate = String(effectiveRate.rate);
    const unit = selectedType.unitOfMeasurement || "km";
    let wrote = false;
    if (getValues(rateField) !== rate) {
      setValue(rateField, rate, { shouldDirty: true });
      wrote = true;
    }
    if (getValues(unitField) !== unit) {
      setValue(unitField, unit, { shouldDirty: true });
      wrote = true;
    }
    if (wrote) revalidateDateFields(trigger);
  }, [
    mileageType,
    expenseTypes,
    selectedType,
    effectiveOn,
    effectiveRate,
    isFetching,
    setValue,
    getValues,
    trigger
  ]);
  return { hasNoRateForDate, isResolving: isFetching };
}, "useMileageRateSync");
function revalidateDateFields(trigger) {
  void trigger(DATE_FIELDS_TO_REVALIDATE);
}
__name(revalidateDateFields, "revalidateDateFields");
function clearRateFields({
  getValues,
  setValue,
  trigger,
  rateField,
  unitField
}) {
  let cleared = false;
  if (getValues(rateField)) {
    setValue(rateField, "", { shouldDirty: true });
    cleared = true;
  }
  if (getValues(unitField)) {
    setValue(unitField, "", { shouldDirty: true });
    cleared = true;
  }
  if (cleared) revalidateDateFields(trigger);
}
__name(clearRateFields, "clearRateFields");
function computeMileageEffectiveOn(expenseDate, periodFrom) {
  return expenseDate || formatToISODate(periodFrom) || "";
}
__name(computeMileageEffectiveOn, "computeMileageEffectiveOn");
const { useEffect: useEffect$5, useRef: useRef$5 } = await importShared("react");
const useExpenseFormSync = /* @__PURE__ */ __name(({
  control,
  setValue,
  getValues,
  formState,
  watch,
  trigger
}) => {
  const companyShortName = useCompanyStore((state) => {
    var _a;
    return ((_a = state.userDefaultCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const {
    totalAmount,
    netAmount,
    expenseType,
    expenseLocation,
    netCurrency,
    totalCurrency,
    paymentMethod
  } = useFormFieldValues(control, [
    ExpenseFormField.TotalAmount,
    ExpenseFormField.NetAmount,
    ExpenseFormField.ExpenseType,
    ExpenseFormField.ExpenseLocation,
    ExpenseFormField.NetCurrency,
    ExpenseFormField.TotalCurrency,
    ExpenseFormField.PaymentMethod
  ]);
  const formType = useFormTypeId(expenseType, companyShortName);
  const prevNetAmountRef = useRef$5(netAmount);
  const prevExpenseLocationRef = useRef$5(expenseLocation);
  const prevPaymentMethodRef = useRef$5(paymentMethod);
  const shouldRevalidateField = /* @__PURE__ */ __name((field) => {
    if (formState.touchedFields[field]) return true;
    const value = getValues(field);
    return typeof value === "string" && value.trim() !== "";
  }, "shouldRevalidateField");
  const hasCostAllocations = /* @__PURE__ */ __name(() => {
    const allocations = getValues(ExpenseFormField.CostAllocations);
    return Array.isArray(allocations) && allocations.length > 0;
  }, "hasCostAllocations");
  useEffect$5(() => {
    if (formType) {
      setValue("formType", formType);
      if (formType !== ExpenseFormType.ENTERTAINMENT) {
        trigger(ExpenseFormField.PersonsEntertained);
      }
    }
  }, [formType, setValue, trigger]);
  useEffect$5(() => {
    if (prevNetAmountRef.current !== netAmount) {
      prevNetAmountRef.current = netAmount;
      const fields = [ExpenseFormField.TaxAmount, ExpenseFormField.TotalAmount].filter(shouldRevalidateField);
      if (fields.length > 0) trigger(fields);
      if (hasCostAllocations()) trigger(ExpenseFormField.CostAllocations);
    }
  }, [netAmount, trigger, formState.touchedFields]);
  useEffect$5(() => {
    if (prevPaymentMethodRef.current !== paymentMethod) {
      prevPaymentMethodRef.current = paymentMethod;
      const fields = [
        ExpenseFormField.NetAmount,
        ExpenseFormField.TotalAmount,
        ExpenseFormField.TaxAmount
      ].filter(shouldRevalidateField);
      if (fields.length > 0) trigger(fields);
      if (hasCostAllocations()) trigger(ExpenseFormField.CostAllocations);
    }
  }, [paymentMethod, trigger, formState.touchedFields]);
  useEffect$5(() => {
    if (prevExpenseLocationRef.current !== expenseLocation) {
      prevExpenseLocationRef.current = expenseLocation;
      const fields = [ExpenseFormField.TaxType, ExpenseFormField.TaxAmount].filter(shouldRevalidateField);
      if (fields.length > 0) trigger(fields);
    }
  }, [expenseLocation, trigger, formState.touchedFields]);
  const isConverted = isConvertedExpense(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code);
  const amount = isConverted ? totalAmount : netAmount;
  const parsedAmount = parseFloat(amount || "0");
  useAmountAllocationSync({
    amount: Number.isFinite(parsedAmount) ? parsedAmount : 0,
    setValue,
    getValues,
    trigger,
    costAllocationsField: ExpenseFormField.CostAllocations,
    isEqualSplitField: ExpenseFormField.IsEqualSplit
  });
  useReceiptCheckboxEffects({
    watch,
    setValue,
    receiptAttachmentField: ExpenseFormField.ReceiptAttachment,
    isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
    affidavitField: ExpenseFormField.Affidavit
  });
}, "useExpenseFormSync");
const { useCallback: useCallback$7, useMemo: useMemo$4 } = await importShared("react");
const useExpenseFormHandlers = /* @__PURE__ */ __name((setValue, getValues, trigger) => {
  const getBaseAmount = useCallback$7(() => {
    const netCurrency = getValues(ExpenseFormField.NetCurrency);
    const totalCurrency = getValues(ExpenseFormField.TotalCurrency);
    return getExpenseBaseAmount(
      netCurrency == null ? void 0 : netCurrency.code,
      totalCurrency == null ? void 0 : totalCurrency.code,
      getValues(ExpenseFormField.NetAmount),
      getValues(ExpenseFormField.TotalAmount)
    );
  }, [getValues]);
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    trigger,
    ExpenseFormField.CostAllocations,
    ExpenseFormField.IsEqualSplit,
    getBaseAmount
  );
  return useMemo$4(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers
    }),
    [costAllocationHandlers]
  );
}, "useExpenseFormHandlers");
const { useMemo: useMemo$3, useState: useState$5 } = await importShared("react");
const useExpenseFormLeftColumn = /* @__PURE__ */ __name(({
  control,
  setValue,
  getValues,
  isDrafting,
  draftId,
  onSaveDraft
}) => {
  const [isReceiptUploading, setIsReceiptUploading] = useState$5(false);
  const { receiptAttachment, supportingFiles } = useFormFieldValues(control, [
    ExpenseFormField.ReceiptAttachment,
    ExpenseFormField.SupportingFiles
  ]);
  const { triggerAutoSave } = useAutoSave({
    draftId,
    isDrafting,
    onSaveDraft,
    getFormValues: getValues
  });
  const { handleReceiptChange, handleSupportingFilesChange } = useFileHandlers({
    setValue,
    receiptAttachmentField: ExpenseFormField.ReceiptAttachment,
    supportingFilesField: ExpenseFormField.SupportingFiles,
    onReceiptUploaded: /* @__PURE__ */ __name(() => triggerAutoSave(), "onReceiptUploaded"),
    onSupportingFilesChanged: /* @__PURE__ */ __name((attachments) => {
      const hasValidAttachment = attachments.some((a) => a.status !== "error");
      if (hasValidAttachment) {
        triggerAutoSave();
      }
    }, "onSupportingFilesChanged")
  });
  const shouldShowReceiptCheckbox = useMemo$3(() => {
    return !receiptAttachment && !isReceiptUploading;
  }, [receiptAttachment, isReceiptUploading]);
  return {
    isReceiptUploading,
    setIsReceiptUploading,
    receiptAttachment,
    supportingFiles,
    handleReceiptChange,
    handleSupportingFilesChange,
    shouldShowReceiptCheckbox
  };
}, "useExpenseFormLeftColumn");
const { useCallback: useCallback$6, useMemo: useMemo$2 } = await importShared("react");
const useMileageTripFormHandlers = /* @__PURE__ */ __name((setValue, getValues, trigger) => {
  const getBaseAmount = useCallback$6(
    () => parseFloat(getValues(MileageTripFormField.ReimbursableAmount) || "0"),
    [getValues]
  );
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    trigger,
    MileageTripFormField.CostAllocations,
    MileageTripFormField.IsEqualSplit,
    getBaseAmount
  );
  return useMemo$2(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers
    }),
    [costAllocationHandlers]
  );
}, "useMileageTripFormHandlers");
const { useCallback: useCallback$5, useEffect: useEffect$4, useRef: useRef$4, useState: useState$4 } = await importShared("react");
function useDeleteDialog(options = {}) {
  const { onDeleteSuccess } = options;
  const [isOpen, setIsOpen] = useState$4(false);
  const [isDeleteFlowActive, setIsDeleteFlowActive] = useState$4(false);
  const shouldNavigateRef = useRef$4(false);
  useEffect$4(() => {
    return () => {
      shouldNavigateRef.current = false;
    };
  }, []);
  const open = useCallback$5(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback$5(() => {
    setIsOpen(false);
  }, []);
  const handleOpenChange = useCallback$5((isOpen2) => {
    setIsOpen(isOpen2);
  }, []);
  const markForNavigation = useCallback$5(() => {
    shouldNavigateRef.current = true;
    setIsDeleteFlowActive(true);
    setIsOpen(false);
  }, []);
  const handleCloseComplete = useCallback$5(() => {
    if (shouldNavigateRef.current) {
      shouldNavigateRef.current = false;
      onDeleteSuccess == null ? void 0 : onDeleteSuccess();
    }
  }, [onDeleteSuccess]);
  return {
    isOpen,
    isDeleteFlowActive,
    open,
    close,
    handleOpenChange,
    handleCloseComplete,
    markForNavigation
  };
}
__name(useDeleteDialog, "useDeleteDialog");
var ExpenseItemType = /* @__PURE__ */ ((ExpenseItemType2) => {
  ExpenseItemType2["Expense"] = "expense";
  ExpenseItemType2["MileageTrip"] = "mileage-trip";
  ExpenseItemType2["MileagePeriod"] = "mileage-period";
  return ExpenseItemType2;
})(ExpenseItemType || {});
const { useMemo: useMemo$1 } = await importShared("react");
function getItemTitle(item, mode, isNewItem, effectiveItemType) {
  if (!item) {
    if (isNewItem) {
      if (effectiveItemType === ExpenseItemType.MileageTrip || effectiveItemType === ExpenseItemType.MileagePeriod) {
        return "New Mileage Claim";
      }
      return "New Expense";
    }
    if (effectiveItemType === ExpenseItemType.MileageTrip || effectiveItemType === ExpenseItemType.MileagePeriod) {
      return "Mileage";
    }
    return "Expense";
  }
  if (isRegularExpense(item)) {
    if (mode === "preview") return item.data.vendor || "Expense";
    if (mode === "draft") return item.data.vendor || "Draft Expense";
    return "New Expense";
  }
  if (isMileageExpense(item)) {
    return mode === "preview" || mode === "draft" ? "Mileage" : "New Mileage Claim";
  }
  return effectiveItemType === ExpenseItemType.Expense ? "Expense" : "Mileage";
}
__name(getItemTitle, "getItemTitle");
function getTitleSuffix(item) {
  if (!item || !isMileageExpense(item)) return null;
  if (isMileageTripData(item.data)) {
    return item.data.toLocation || null;
  }
  if (isMileagePeriodData(item.data) && item.data.expensePeriod) {
    return formatExpensePeriod(item.data.expensePeriod) || null;
  }
  return null;
}
__name(getTitleSuffix, "getTitleSuffix");
function getItemAmount(item) {
  if (!item) return void 0;
  if (isRegularExpense(item)) return item.data.totalAmount;
  return void 0;
}
__name(getItemAmount, "getItemAmount");
function getHeaderSubtitle(item, mode) {
  if (!item) return void 0;
  if (mode === "preview" && isExpenseItemSubmitted(item)) {
    return getExpenseActionSubtitle(item);
  }
  if (mode === "draft" && isExpenseItemDraft(item)) {
    const parts = [item.businessId, `Created on ${formatDate(item.createdAt)}`].filter(Boolean);
    return parts.join(" • ");
  }
  return void 0;
}
__name(getHeaderSubtitle, "getHeaderSubtitle");
function useExpenseItemHeader(options) {
  const { expenseItem, mode, isNewItem, itemType } = options;
  const title = useMemo$1(
    () => getItemTitle(expenseItem, mode, isNewItem, itemType),
    [expenseItem, mode, isNewItem, itemType]
  );
  const titleSuffix = useMemo$1(
    () => getTitleSuffix(expenseItem),
    [expenseItem]
  );
  const amount = useMemo$1(
    () => getItemAmount(expenseItem),
    [expenseItem]
  );
  const subtitle = useMemo$1(
    () => getHeaderSubtitle(expenseItem, mode),
    [expenseItem, mode]
  );
  const status = expenseItem == null ? void 0 : expenseItem.status;
  return {
    title,
    titleSuffix,
    amount,
    status,
    subtitle
  };
}
__name(useExpenseItemHeader, "useExpenseItemHeader");
const mapToPaymentMethod = /* @__PURE__ */ __name((api) => ({
  id: String(api.id),
  name: api.name,
  currencyCode: api.currencyCode
}), "mapToPaymentMethod");
function normalizeExpenseDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    vendor: response.vendor ?? "",
    expenseDate: response.date ?? "",
    totalAmount: Number(response.totalAmount ?? 0),
    totalCurrencyCode: response.totalCurrencyCode ?? "",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
__name(normalizeExpenseDraftResponse, "normalizeExpenseDraftResponse");
function buildExpenseItemForCache(response, formData) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    itemType: ItemCategory.Expense,
    status: "draft",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate ?? response.createdDate,
    userId: response.formOwner,
    data: formData
  };
}
__name(buildExpenseItemForCache, "buildExpenseItemForCache");
const useSaveExpenseDraft = /* @__PURE__ */ __name(() => {
  const queryClient2 = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    meta: { errorCopy: { fallback: "Could not save your changes. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async ({ data, draftId, signal }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      const expenseTypes = queryClient2.getQueriesData({ queryKey: queryKeys.expenseTypes.list(company, false) }).flatMap(([, data2]) => data2 ?? []);
      if (draftId) {
        const payload = mapFormDataToUpdateRequest(data, expenseTypes);
        devLog("📤 Update draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT.build({ tenant: company, id: draftId }),
          payload,
          { signal }
        );
        devLog("📥 Update draft response:", response.data);
        return {
          draft: normalizeExpenseDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      } else {
        const payload = mapFormDataToCreateRequest(data, expenseTypes);
        devLog("📤 Create draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT.build({ tenant: company }),
          payload,
          { signal }
        );
        devLog("📥 Create draft response:", response.data);
        return {
          draft: normalizeExpenseDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      }
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(({ draft, response, formData }, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      const expenseItem = buildExpenseItemForCache(response, formData);
      if (variables.draftId) {
        queryClient2.setQueryData(
          queryKeys.expenseItem.detail(variables.draftId),
          expenseItem
        );
      } else {
        queryClient2.setQueryData(queryKeys.expenseItem.detail(draft.id), expenseItem);
      }
      Qs.success("All changes are saved", {
        duration: 3e3
      });
    }, "onSuccess")
  });
}, "useSaveExpenseDraft");
const useDeleteExpenseDraft = /* @__PURE__ */ __name((options) => {
  const queryClient2 = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    meta: { errorCopy: { fallback: "Could not delete the draft. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT.build({ tenant: company, id: draftId }));
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(async (_data, variables) => {
      var _a;
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient2.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient2.removeQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      Qs.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    }, "onSuccess")
  });
}, "useDeleteExpenseDraft");
const useSubmitExpense = /* @__PURE__ */ __name(() => {
  const queryClient2 = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    meta: { errorCopy: { fallback: "Could not submit this expense. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.post(EXPENSE_ENDPOINTS.SUBMIT_DRAFT.build({ tenant: company, id: draftId }));
      return { draftId };
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { draftId }) => {
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient2.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Qs.success("Expense submitted", {
        duration: 3e3
      });
    }, "onSuccess")
  });
}, "useSubmitExpense");
const usePaymentMethods = /* @__PURE__ */ __name(({
  companyShortName,
  enabled = true
}) => {
  return useQuery({
    queryKey: companyShortName ? queryKeys.paymentMethods.list(companyShortName) : queryKeys.paymentMethods.all(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!companyShortName) {
        throw new Error("Company short name is required");
      }
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_PAYMENT_METHODS.build({ tenant: companyShortName })
      );
      return response.data.map(mapToPaymentMethod);
    }, "queryFn"),
    enabled: enabled && !!companyShortName,
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
}, "usePaymentMethods");
function resolveMileageTypeFields(mileageType, expenseTypes) {
  const typeId = parseOptionalInt(mileageType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? FormTypeId.MILEAGE
  };
}
__name(resolveMileageTypeFields, "resolveMileageTypeFields");
function mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId) {
  const { typeId, formTypeId } = resolveMileageTypeFields(data.mileageType, expenseTypes);
  return {
    typeId,
    formTypeId,
    effectiveMileageRateId,
    vendor: DEFAULT_MILEAGE_VENDOR,
    paymentMethodId: parseInt(DEFAULT_PAYMENT_METHOD.id, 10),
    totalDistance: parseOptionalDecimal(data.totalDistance),
    totalAmount: parseOptionalDecimal(data.reimbursableAmount),
    totalCurrencyCode: DEFAULT_CURRENCY_CODE,
    businessPurposeId: parseOptionalInt(data.businessPurpose),
    description: data.expenseDescription || null,
    additionalComments: data.additionalComments || null,
    costAllocationDeferred: data.deferToApprover ?? null,
    costAllocations: mapCostAllocations(data.costAllocations)
  };
}
__name(mapCommonMileageFields, "mapCommonMileageFields");
function mapMileageTripToCreateRequest(data, expenseTypes, effectiveMileageRateId) {
  return {
    ...mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId),
    date: formatToISODate(data.expenseDate),
    fromLocation: data.fromLocation || null,
    toLocation: data.toLocation || null,
    roundTrip: data.isRoundTrip ?? null
  };
}
__name(mapMileageTripToCreateRequest, "mapMileageTripToCreateRequest");
function mapMileagePeriodToCreateRequest(data, expenseTypes, effectiveMileageRateId) {
  var _a, _b;
  return {
    ...mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId),
    periodStart: formatToISODate((_a = data.expensePeriod) == null ? void 0 : _a.from),
    periodEnd: formatToISODate((_b = data.expensePeriod) == null ? void 0 : _b.to)
  };
}
__name(mapMileagePeriodToCreateRequest, "mapMileagePeriodToCreateRequest");
const mapMileageTripToUpdateRequest = mapMileageTripToCreateRequest;
const mapMileagePeriodToUpdateRequest = mapMileagePeriodToCreateRequest;
async function resolveEffectiveMileageRateId(queryClient2, companyShortName, expenseTypes, mileageTypeId, effectiveOn) {
  const selectedType = findActiveSelectedMileageType(expenseTypes, mileageTypeId);
  if (!(selectedType == null ? void 0 : selectedType.mileageRateId)) return null;
  if (!effectiveOn) return null;
  const rate = await queryClient2.fetchQuery({
    queryKey: queryKeys.mileageRates.effectiveByIdOnDate(
      companyShortName,
      selectedType.mileageRateId,
      effectiveOn
    ),
    queryFn: /* @__PURE__ */ __name(() => fetchEffectiveMileageRate(companyShortName, selectedType.mileageRateId, effectiveOn), "queryFn"),
    staleTime: MILEAGE_RATES_STALE_TIME
  });
  return (rate == null ? void 0 : rate.id) ?? null;
}
__name(resolveEffectiveMileageRateId, "resolveEffectiveMileageRateId");
function resolveFormEffectiveDate(data) {
  var _a;
  const expenseDate = isMileageTripData(data) ? data.expenseDate : void 0;
  const periodFrom = isMileageTripData(data) ? void 0 : (_a = data.expensePeriod) == null ? void 0 : _a.from;
  return computeMileageEffectiveOn(expenseDate, periodFrom);
}
__name(resolveFormEffectiveDate, "resolveFormEffectiveDate");
function normalizeMileageDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
__name(normalizeMileageDraftResponse, "normalizeMileageDraftResponse");
function buildMileageItemForCache(response, formData) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    itemType: ItemCategory.Mileage,
    status: "draft",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate ?? response.createdDate,
    userId: response.formOwner,
    data: formData
  };
}
__name(buildMileageItemForCache, "buildMileageItemForCache");
const useSaveMileageDraft = /* @__PURE__ */ __name(() => {
  const queryClient2 = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    meta: { errorCopy: { fallback: "Could not save your changes. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async ({ data, draftId, signal }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      const expenseTypes = getMileageTypesFromCache(queryClient2, company);
      const effectiveOn = resolveFormEffectiveDate(data);
      const effectiveMileageRateId = await resolveEffectiveMileageRateId(
        queryClient2,
        company,
        expenseTypes,
        data.mileageType,
        effectiveOn
      );
      if (draftId) {
        const payload = isMileageTripData(data) ? mapMileageTripToUpdateRequest(data, expenseTypes, effectiveMileageRateId) : mapMileagePeriodToUpdateRequest(data, expenseTypes, effectiveMileageRateId);
        devLog("📤 Update mileage draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT.build({ tenant: company, id: draftId }),
          payload,
          { signal }
        );
        devLog("📥 Update mileage draft response:", response.data);
        return {
          draft: normalizeMileageDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      } else {
        const payload = isMileageTripData(data) ? mapMileageTripToCreateRequest(data, expenseTypes, effectiveMileageRateId) : mapMileagePeriodToCreateRequest(data, expenseTypes, effectiveMileageRateId);
        devLog("📤 Create mileage draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT.build({ tenant: company }),
          payload,
          { signal }
        );
        devLog("📥 Create mileage draft response:", response.data);
        return {
          draft: normalizeMileageDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      }
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(({ draft, response, formData }, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      queryClient2.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      const mileageItem = buildMileageItemForCache(response, formData);
      if (variables.draftId) {
        queryClient2.setQueryData(
          queryKeys.expenseItem.detail(variables.draftId),
          mileageItem
        );
      } else {
        queryClient2.setQueryData(queryKeys.expenseItem.detail(draft.id), mileageItem);
      }
      Qs.success("All changes are saved", {
        duration: 3e3
      });
    }, "onSuccess")
  });
}, "useSaveMileageDraft");
const useSubmitMileage = /* @__PURE__ */ __name(() => {
  const queryClient2 = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    meta: { errorCopy: { fallback: "Could not submit this mileage claim. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.post(EXPENSE_ENDPOINTS.SUBMIT_DRAFT.build({ tenant: company, id: draftId }));
      return { draftId };
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { draftId }) => {
      queryClient2.invalidateQueries({ queryKey: queryKeys.mileageTrips.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.mileagePeriods.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient2.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Qs.success("Mileage claim submitted", {
        duration: 3e3
      });
    }, "onSuccess")
  });
}, "useSubmitMileage");
const useDeleteMileageDraft = /* @__PURE__ */ __name((options) => {
  const queryClient2 = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    meta: { errorCopy: { fallback: "Could not delete the draft. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT.build({ tenant: company, id: draftId }));
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(async (_data, variables) => {
      var _a;
      queryClient2.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient2.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient2.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient2.removeQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      Qs.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    }, "onSuccess")
  });
}, "useDeleteMileageDraft");
const { useCallback: useCallback$4 } = await importShared("react");
function useExpenseItemMutations(options) {
  const { currentDraftId, itemType, onDeleteSuccess, onExit, onDraftCreated, onAfterMutation } = options;
  const handleDeleteSuccess = useCallback$4(() => {
    onAfterMutation == null ? void 0 : onAfterMutation("deleted");
    onDeleteSuccess();
  }, [onAfterMutation, onDeleteSuccess]);
  const saveExpenseDraftMutation = useSaveExpenseDraft();
  const submitExpenseMutation = useSubmitExpense();
  const deleteExpenseDraftMutation = useDeleteExpenseDraft({
    onSuccess: handleDeleteSuccess
  });
  const saveMileageDraftMutation = useSaveMileageDraft();
  const submitMileageMutation = useSubmitMileage();
  const deleteMileageDraftMutation = useDeleteMileageDraft({
    onSuccess: handleDeleteSuccess
  });
  const isSavingDraft = saveExpenseDraftMutation.isPending || saveMileageDraftMutation.isPending;
  const isSubmitting = submitExpenseMutation.isPending || submitMileageMutation.isPending;
  const isDeleting = deleteExpenseDraftMutation.isPending || deleteMileageDraftMutation.isPending;
  const draftSaveError = saveExpenseDraftMutation.isError || saveMileageDraftMutation.isError;
  const handleExpenseSubmit = useCallback$4(async (data, options2) => {
    var _a;
    let draftId = currentDraftId;
    try {
      if (!draftId) {
        const { draft } = await saveExpenseDraftMutation.mutateAsync({
          data,
          signal: options2 == null ? void 0 : options2.signal
        });
        draftId = draft.id;
      } else {
        await saveExpenseDraftMutation.mutateAsync({
          data,
          draftId,
          signal: options2 == null ? void 0 : options2.signal
        });
      }
    } catch {
      return;
    }
    await submitExpenseMutation.mutateAsync({ draftId });
    if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
    onAfterMutation == null ? void 0 : onAfterMutation("submitted");
    onExit();
  }, [submitExpenseMutation, saveExpenseDraftMutation, currentDraftId, onExit, onAfterMutation]);
  const handleExpenseSaveDraft = useCallback$4(async (data, options2) => {
    var _a;
    try {
      const { draft } = await saveExpenseDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId,
        signal: options2 == null ? void 0 : options2.signal
      });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      if (draft.id && !currentDraftId) {
        onDraftCreated == null ? void 0 : onDraftCreated(draft.id, ExpenseItemType.Expense);
      }
      onAfterMutation == null ? void 0 : onAfterMutation("saved");
    } catch {
    }
  }, [saveExpenseDraftMutation, currentDraftId, onDraftCreated, onAfterMutation]);
  const handleExpenseSaveDraftForUpload = useCallback$4(async (data) => {
    const { draft } = await saveExpenseDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      onDraftCreated == null ? void 0 : onDraftCreated(draft.id, ExpenseItemType.Expense);
    }
    return { draftId: draft.id };
  }, [saveExpenseDraftMutation, currentDraftId, onDraftCreated]);
  const handleMileageSubmit = useCallback$4(async (data, options2) => {
    var _a;
    let draftId = currentDraftId;
    try {
      if (!draftId) {
        const { draft } = await saveMileageDraftMutation.mutateAsync({
          data,
          signal: options2 == null ? void 0 : options2.signal
        });
        draftId = draft.id;
      } else {
        await saveMileageDraftMutation.mutateAsync({
          data,
          draftId,
          signal: options2 == null ? void 0 : options2.signal
        });
      }
    } catch {
      return;
    }
    await submitMileageMutation.mutateAsync({ draftId });
    if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
    onAfterMutation == null ? void 0 : onAfterMutation("submitted");
    onExit();
  }, [submitMileageMutation, saveMileageDraftMutation, currentDraftId, onExit, onAfterMutation]);
  const handleMileageSaveDraft = useCallback$4(async (data, options2) => {
    var _a;
    try {
      const { draft } = await saveMileageDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId,
        signal: options2 == null ? void 0 : options2.signal
      });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      if (draft.id && !currentDraftId) {
        onDraftCreated == null ? void 0 : onDraftCreated(draft.id, mileageItemType(data));
      }
      onAfterMutation == null ? void 0 : onAfterMutation("saved");
    } catch {
    }
  }, [saveMileageDraftMutation, currentDraftId, onDraftCreated, onAfterMutation]);
  const handleMileageSaveDraftForUpload = useCallback$4(async (data) => {
    const { draft } = await saveMileageDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      onDraftCreated == null ? void 0 : onDraftCreated(draft.id, mileageItemType(data));
    }
    return { draftId: draft.id };
  }, [saveMileageDraftMutation, currentDraftId, onDraftCreated]);
  const handleDeleteConfirm = useCallback$4(() => {
    if (!currentDraftId || !itemType) return;
    if (itemType === ExpenseItemType.Expense) {
      deleteExpenseDraftMutation.mutate({ draftId: currentDraftId });
    } else if (itemType === ExpenseItemType.MileageTrip || itemType === ExpenseItemType.MileagePeriod) {
      deleteMileageDraftMutation.mutate({ draftId: currentDraftId });
    }
  }, [currentDraftId, itemType, deleteExpenseDraftMutation, deleteMileageDraftMutation]);
  return {
    isSavingDraft,
    isSubmitting,
    isDeleting,
    draftSaveError,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload,
    handleDeleteConfirm
  };
}
__name(useExpenseItemMutations, "useExpenseItemMutations");
function mileageItemType(data) {
  return data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
}
__name(mileageItemType, "mileageItemType");
const { useCallback: useCallback$3, useEffect: useEffect$3, useMemo, useRef: useRef$3, useState: useState$3 } = await importShared("react");
function determineItemType(item) {
  if (!item) return null;
  if (isRegularExpense(item)) return ExpenseItemType.Expense;
  if (isMileageExpense(item)) {
    if (isMileageTripData(item.data)) return ExpenseItemType.MileageTrip;
    if (isMileagePeriodData(item.data)) return ExpenseItemType.MileagePeriod;
  }
  return null;
}
__name(determineItemType, "determineItemType");
function useExpenseItemForm(options) {
  const {
    itemId,
    defaultItemType = ExpenseItemType.Expense,
    onExit,
    onDraftCreated,
    onLoadError,
    onAfterMutation
  } = options;
  const isNewItem = itemId === null;
  const formRef = useRef$3(null);
  const abortControllerRef = useRef$3(new AbortController());
  const [submitButtonState, setSubmitButtonState] = useState$3({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState$3({ disabled: true });
  const [formKey, setFormKey] = useState$3(() => isNewItem ? "new" : `loading-${itemId}`);
  const {
    isOpen: isDeleteDialogOpen,
    isDeleteFlowActive,
    open: openDeleteDialog,
    close: closeDeleteDialog,
    handleOpenChange: handleDeleteDialogOpenChangeBase,
    handleCloseComplete: handleDeleteDialogCloseComplete,
    markForNavigation
  } = useDeleteDialog({
    onDeleteSuccess: onExit
  });
  const companyShortName = useCompanyStore((s) => {
    var _a;
    return ((_a = s.userDefaultCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const {
    data: expenseItem,
    error: itemError,
    isLoading: isQueryLoading
  } = useExpenseItem(itemId, { companyShortName, enabled: !isDeleteFlowActive });
  const isLoading = !isNewItem && (isQueryLoading || !expenseItem && !itemError);
  const dataItemType = useMemo(() => determineItemType(expenseItem), [expenseItem]);
  const itemType = isNewItem ? defaultItemType : dataItemType ?? defaultItemType;
  const mode = useMemo(() => {
    if (isNewItem) return "new";
    if (expenseItem && isExpenseItemDraft(expenseItem)) return "draft";
    if (expenseItem && isExpenseItemSubmitted(expenseItem)) return "preview";
    return "new";
  }, [isNewItem, expenseItem]);
  const currentDraftId = itemId ?? void 0;
  const header = useExpenseItemHeader({
    expenseItem,
    mode,
    isNewItem,
    itemType
  });
  const mutations = useExpenseItemMutations({
    currentDraftId,
    itemType,
    onDeleteSuccess: markForNavigation,
    onExit,
    onDraftCreated,
    onAfterMutation
  });
  const hasError = !isNewItem && !!itemError;
  const { reset: resetUploadStore, updateDraftId } = usePendingUploadStore();
  useEffect$3(() => {
    if (hasError && !isDeleteFlowActive) {
      onLoadError == null ? void 0 : onLoadError(itemError);
    }
  }, [hasError, isDeleteFlowActive, itemError, onLoadError]);
  useEffect$3(() => {
    return () => {
      const { receipt, supportingFiles } = usePendingUploadStore.getState();
      const receiptBusy = receipt.status === "saving-draft" || receipt.status === "uploading";
      const supportingFilesBusy = supportingFiles.status === "saving-draft" || supportingFiles.status === "uploading";
      if (receiptBusy || supportingFilesBusy) {
        return;
      }
      resetUploadStore();
    };
  }, []);
  useEffect$3(() => {
    if (currentDraftId) {
      updateDraftId(currentDraftId);
    }
  }, [currentDraftId, updateDraftId]);
  useEffect$3(() => {
    const { receipt, supportingFiles } = usePendingUploadStore.getState();
    const isUploadBusy = receipt.status === "uploading" || receipt.status === "saving-draft" || supportingFiles.status === "uploading" || supportingFiles.status === "saving-draft";
    if (isUploadBusy) return;
    if (isNewItem) {
      setFormKey("new");
    } else if (expenseItem && isExpenseItemDraft(expenseItem)) {
      setFormKey(`loaded-${itemId}`);
    }
  }, [isNewItem, expenseItem, itemId]);
  const handleDeleteDraft = useCallback$3(() => {
    if (!currentDraftId) return;
    openDeleteDialog();
  }, [currentDraftId, openDeleteDialog]);
  const handleDeleteCancel = useCallback$3(() => {
    closeDeleteDialog();
  }, [closeDeleteDialog]);
  const handleDeleteDialogOpenChange = useCallback$3((open) => {
    if (!open && mutations.isDeleting) return;
    handleDeleteDialogOpenChangeBase(open);
  }, [mutations.isDeleting, handleDeleteDialogOpenChangeBase]);
  const queryClient2 = useQueryClient();
  const handleOpenChange = useCallback$3((open) => {
    if (!open) {
      abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      resetUploadStore();
      if (currentDraftId) {
        const detailKey = queryKeys.expenseItem.detail(currentDraftId);
        setTimeout(() => queryClient2.removeQueries({ queryKey: detailKey }), 0);
      }
      onExit();
    }
  }, [onExit, resetUploadStore, currentDraftId, queryClient2]);
  const handleSaveDraftClick = useCallback$3((e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.saveDraft();
  }, []);
  const handleSubmitClick = useCallback$3((e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.submitForm();
  }, []);
  const handleButtonStateChange = useCallback$3((submitState, draftState) => {
    setSubmitButtonState(submitState);
    setSaveDraftButtonState(draftState);
  }, []);
  const handleExpenseSubmit = useCallback$3(
    (data) => mutations.handleExpenseSubmit(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleExpenseSaveDraft = useCallback$3(
    (data) => mutations.handleExpenseSaveDraft(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleMileageSubmit = useCallback$3(
    (data) => mutations.handleMileageSubmit(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleMileageSaveDraft = useCallback$3(
    (data) => mutations.handleMileageSaveDraft(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  return {
    formRef,
    formKey,
    isDeleteDialogOpen,
    submitButtonState,
    saveDraftButtonState,
    mode,
    itemType,
    isLoading,
    isNewItem,
    currentDraftId,
    expenseItem,
    title: header.title,
    titleSuffix: header.titleSuffix,
    amount: header.amount,
    status: header.status,
    headerSubtitle: header.subtitle,
    isSavingDraft: mutations.isSavingDraft,
    isSubmitting: mutations.isSubmitting,
    isDeleting: mutations.isDeleting,
    draftSaveError: mutations.draftSaveError,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload: mutations.handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload: mutations.handleMileageSaveDraftForUpload,
    handleDeleteDraft,
    handleDeleteConfirm: mutations.handleDeleteConfirm,
    handleDeleteCancel,
    handleDeleteDialogOpenChange,
    handleDeleteDialogCloseComplete,
    handleOpenChange,
    handleSaveDraftClick,
    handleSubmitClick,
    handleButtonStateChange
  };
}
__name(useExpenseItemForm, "useExpenseItemForm");
function CostAllocationField({
  control,
  setValue,
  trigger,
  getValues,
  index,
  type,
  value,
  onValueChange,
  totalAmount,
  currencyCode,
  currencySymbol,
  disabled = false,
  onRemove,
  isEqualSplitField
}) {
  var _a, _b, _c;
  const amountPath = `costAllocations.${index}.amount`;
  const percentagePath = `costAllocations.${index}.percentage`;
  const amountValue = useWatch({ control, name: amountPath });
  const percentageValue = useWatch({ control, name: percentagePath });
  const amountDisplay = useNumericDisplay(amountValue ?? 0);
  const percentageDisplay = useNumericDisplay(percentageValue ?? 0);
  const {
    syncPercentageFromAmount,
    setAmountEditing
  } = useAllocationSync({
    index,
    totalAmount,
    setValue,
    trigger,
    getValues,
    isEqualSplitField
  });
  const { errors } = useFormState({ control });
  const allocationConfig = costAllocationTypes().find((config) => config.type === type);
  const allocationErrors = errors.costAllocations;
  const currentAllocationErrors = allocationErrors == null ? void 0 : allocationErrors[index];
  const nameError = (_a = currentAllocationErrors == null ? void 0 : currentAllocationErrors.name) == null ? void 0 : _a.message;
  const amountError = (_b = currentAllocationErrors == null ? void 0 : currentAllocationErrors.amount) == null ? void 0 : _b.message;
  const percentageError = (_c = currentAllocationErrors == null ? void 0 : currentAllocationErrors.percentage) == null ? void 0 : _c.message;
  const searchFunction = getSearchFunctionByType(type);
  const placeholder = getPlaceholderByType(type);
  const displayLabel = getDisplayLabel(type, value);
  const projectDetails = type === ECostAllocation.Project || type === ECostAllocation.Admin ? getProjectDetails(value) : null;
  const inputLabel = projectDetails ? COST_ALLOCATION_LABELS.PURCHASE_ORDER : "";
  if (!allocationConfig) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 bg-exp-neutral-10 rounded-lg p-3 shadow-exp-menu", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qt,
        {
          pressed: true,
          disabled,
          children: allocationConfig.label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: onRemove,
          disabled,
          className: "text-exp-red-500 hover:text-exp-red-600 h-8 px-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gn,
        {
          placeholder,
          label: inputLabel,
          value,
          onValueChange,
          onSearch: searchFunction,
          searchDelay: SEARCH_DELAY_MS,
          minSearchLength: MIN_SEARCH_LENGTH,
          searchingText: "Searching...",
          noResultsText: "No results found",
          disabled,
          clearOnBlur: false,
          displayLabel,
          error: nameError,
          renderItem: /* @__PURE__ */ __name((item) => renderAllocationItem(type, item), "renderItem"),
          tooltipProps: {
            delayDuration: TOOLTIP_DELAY_QUICK,
            variant: "light",
            size: "sm",
            showArrow: false,
            renderContent: /* @__PURE__ */ __name((displayValue) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-full font-normal text-xs text-exp-grey-600", children: displayValue }), "renderContent")
          }
        }
      ),
      value && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-36 ${inputLabel ? "mt-5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: amountPath,
            control,
            render: /* @__PURE__ */ __name(({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ts,
              {
                ref: field.ref,
                name: field.name,
                prefix: currencySymbol ?? getCurrencySymbol(currencyCode),
                suffix: currencyCode,
                textAlign: "right",
                value: amountDisplay.displayValue,
                onFocus: /* @__PURE__ */ __name(() => {
                  amountDisplay.handleFocus();
                  setAmountEditing(true);
                }, "onFocus"),
                onChange: createDecimalChangeHandler((rawValue) => {
                  const newAmount = amountDisplay.handleChange(rawValue);
                  if (!isNaN(newAmount)) {
                    field.onChange(newAmount);
                    syncPercentageFromAmount(newAmount);
                  }
                }, totalAmount < 0),
                onBlur: /* @__PURE__ */ __name(() => {
                  amountDisplay.handleBlur();
                  setAmountEditing(false);
                  field.onBlur();
                }, "onBlur"),
                disabled,
                placeholder: "0.00",
                error: amountError || void 0
              }
            ), "render")
          },
          `${value.value}-amount-${index}`
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[100px] ${inputLabel ? "mt-5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: percentagePath,
            control,
            render: /* @__PURE__ */ __name(({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ts,
              {
                ref: field.ref,
                name: field.name,
                textAlign: "right",
                suffix: "%",
                value: percentageDisplay.displayValue,
                disabled: true,
                className: "w-full",
                placeholder: "0.00",
                error: percentageError || void 0
              }
            ), "render")
          },
          `${value.value}-percentage-${index}`
        ) })
      ] }) })
    ] }),
    projectDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-xs text-exp-grey-600 pl-1 mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-trax-grey-900 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-exp-grey-600", children: "Allocated to:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-trax-grey-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle-fill", className: "text-exp-green-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: projectDetails.projectId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: projectDetails.projectDescription })
        ] })
      ] })
    ] })
  ] });
}
__name(CostAllocationField, "CostAllocationField");
const { memo: memo$2 } = await importShared("react");
const AllocationTypeChips = memo$2(({
  onSelect,
  disabled = false
}) => {
  const allocationTypes = costAllocationTypes();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: allocationTypes.map((allocationType) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qt,
      {
        disabled,
        onPressedChange: /* @__PURE__ */ __name(() => onSelect(allocationType.type), "onPressedChange"),
        children: allocationType.label
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pt,
      {
        variant: "light",
        size: "sm",
        side: "bottom",
        showArrow: false,
        className: "max-w-full font-normal text-xs text-exp-grey-600",
        children: disabled ? "Enter an expense total first to add an allocation" : allocationType.tooltip
      }
    )
  ] }, allocationType.type)) });
});
AllocationTypeChips.displayName = "AllocationTypeChips";
const { memo: memo$1, useCallback: useCallback$2, useState: useState$2 } = await importShared("react");
const AddAllocationExpandable = memo$1(({
  onTypeSelect,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState$2(false);
  const handleTypeSelect = useCallback$2(
    (type) => {
      onTypeSelect(type);
      setIsOpen(false);
    },
    [onTypeSelect]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ws, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ks, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "outlined", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}), disabled, children: COST_ALLOCATION_LABELS.ADD_ALLOCATION }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Xs, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AllocationTypeChips, { onSelect: handleTypeSelect, disabled }) })
  ] });
});
AddAllocationExpandable.displayName = "AddAllocationExpandable";
function AffidavitContent({
  control,
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "w-full max-h-full bg-yellow-50 border border-yellow-200 p-3 flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600", children: "Please sign the affidavit:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.justification",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ga,
            {
              name: field.name,
              ref: field.ref,
              onBlur: field.onBlur,
              value: field.value || "",
              onChange: field.onChange,
              onInput: /* @__PURE__ */ __name((e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight + 5, 200)}px`;
              }, "onInput"),
              className: "w-full text-wrap bg-white border resize-none overflow-y-auto min-h-16 max-h-34 leading-4 placeholder:text-sm placeholder:font-normal placeholder:text-exp-grey-500",
              label: "Justification",
              placeholder: "State reason for missing receipt",
              maxCharacters: 150,
              showCharacterCount: true,
              enforceMaxLength: true,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              required: true
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.digitalSignature",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Oa,
            {
              name: field.name,
              ref: field.ref,
              onBlur: field.onBlur,
              value: field.value || "",
              onChange: /* @__PURE__ */ __name((e) => {
                const upperValue = e.target.value.toUpperCase();
                const filteredValue = upperValue.replace(/[^A-Z]/g, "").slice(0, 3);
                field.onChange(filteredValue);
              }, "onChange"),
              className: "w-full text-sm bg-white border h-6 resize-none placeholder:font-normal placeholder:text-exp-grey-500 px-2 py-4",
              label: "Digital Signature",
              placeholder: "Enter initials",
              maxLength: 3,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              required: true
            }
          );
        }, "render")
      }
    )
  ] }) }) });
}
__name(AffidavitContent, "AffidavitContent");
function ReceiptSection({
  control,
  isReceiptUnavailableField: isReceiptUnavailableField2,
  receiptAttachment,
  shouldShowCheckbox,
  onReceiptChange,
  onUploadingChange,
  disabled = false,
  hideUploadWhenUnavailable = false,
  expenseId,
  onSaveDraftForUpload
}) {
  const isReceiptUnavailable = useWatch({
    control,
    name: isReceiptUnavailableField2,
    defaultValue: false
  });
  const shouldHideUpload = hideUploadWhenUnavailable && isReceiptUnavailable;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cs, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr,
        {
          iconClassName: "bg-exp-yellow-001 justify-center items-center flex",
          title: "RECEIPT",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
          required: true,
          className: ""
        }
      ),
      shouldShowCheckbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: isReceiptUnavailableField2,
          control,
          render: /* @__PURE__ */ __name(({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ys,
            {
              label: "Unavailable",
              checked: field.value,
              onCheckedChange: /* @__PURE__ */ __name((checked) => field.onChange(checked), "onCheckedChange"),
              disabled
            }
          ), "render")
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_s, { className: "min-h-0 h-full", children: isReceiptUnavailable ? hideUploadWhenUnavailable ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(AffidavitContent, { control, disabled }) : !shouldHideUpload && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptUpload,
      {
        onReceiptChange,
        onUploadingChange,
        initialReceipt: receiptAttachment || void 0,
        disabled: disabled || isReceiptUnavailable,
        className: "h-full",
        expenseId: expenseId || void 0,
        onSaveDraftForUpload
      }
    ) })
  ] });
}
__name(ReceiptSection, "ReceiptSection");
const React$1 = await importShared("react");
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React$1.createContext && /* @__PURE__ */ React$1.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
__name(_objectWithoutProperties, "_objectWithoutProperties");
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
__name(_objectWithoutPropertiesLoose, "_objectWithoutPropertiesLoose");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
__name(_extends, "_extends");
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
__name(ownKeys, "ownKeys");
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
__name(_objectSpread, "_objectSpread");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
__name(_defineProperty, "_defineProperty");
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
__name(_toPropertyKey, "_toPropertyKey");
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive, "_toPrimitive");
const React = await importShared("react");
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
__name(Tree2Element, "Tree2Element");
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
__name(GenIcon, "GenIcon");
function IconBase(props) {
  var elem = /* @__PURE__ */ __name((conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  }, "elem");
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
__name(IconBase, "IconBase");
function GrCircleInformation(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeWidth": "2", "d": "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8" }, "child": [] }] })(props);
}
__name(GrCircleInformation, "GrCircleInformation");
function FaPlus(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }, "child": [] }] })(props);
}
__name(FaPlus, "FaPlus");
function MdError(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }, "child": [] }] })(props);
}
__name(MdError, "MdError");
function RxCross2(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "d": "M10.9688 3.21871C11.1933 2.99416 11.5567 2.99416 11.7813 3.21871C12.0056 3.44328 12.0057 3.80673 11.7813 4.03121L8.31251 7.49996L11.7813 10.9687L11.8555 11.0586C12.0026 11.2817 11.9777 11.5848 11.7813 11.7812C11.5849 11.9776 11.2818 12.0026 11.0586 11.8554L10.9688 11.7812L7.50001 8.31246L4.03126 11.7812C3.80677 12.0057 3.44332 12.0056 3.21876 11.7812C2.99421 11.5567 2.99421 11.1933 3.21876 10.9687L6.68751 7.49996L3.21876 4.03121L3.14454 3.94137C2.99723 3.71819 3.0223 3.41517 3.21876 3.21871C3.41522 3.02225 3.71823 2.99719 3.94141 3.14449L4.03126 3.21871L7.50001 6.68746L10.9688 3.21871Z", "fill": "currentColor" }, "child": [] }] })(props);
}
__name(RxCross2, "RxCross2");
const { useEffect: useEffect$2, useRef: useRef$2, useState: useState$1 } = await importShared("react");
function FileName({ name, showTooltip = true }) {
  const { ref, isTruncated } = cr({
    deps: [name]
  });
  const [isOpen, setIsOpen] = useState$1(false);
  const timeoutRef = useRef$2(null);
  const canShowTooltip = showTooltip && isTruncated;
  const handleMouseEnter = /* @__PURE__ */ __name(() => {
    if (!canShowTooltip) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, TOOLTIP_DELAY_TRUNCATED_TEXT);
  }, "handleMouseEnter");
  const handleMouseLeave = /* @__PURE__ */ __name(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(false);
  }, "handleMouseLeave");
  useEffect$2(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { open: canShowTooltip && isOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        ref,
        className: "block truncate text-sm text-trax-blue-600 hover:cursor-pointer min-w-0",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: name
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pt,
      {
        variant: "light",
        size: "sm",
        side: "bottom",
        showArrow: false,
        className: "max-w-full font-normal text-xs text-exp-grey-600",
        children: name
      }
    )
  ] });
}
__name(FileName, "FileName");
function SupportingFileCard({
  file,
  error,
  onRemove,
  onPreview,
  index,
  isUploading,
  isLoadingPreview,
  disabled
}) {
  var _a;
  const previewType = getFilePreviewType(file.mimeType);
  if (isUploading || isLoadingPreview) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileName, { name: file.originalName, showTooltip: false })
    ] }) });
  }
  const hasError = error || file.status === "error";
  const errorMessage = (error == null ? void 0 : error.message) || file.errorMessage || "Invalid file";
  if (hasError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "bg-exp-red-100 px-2 py-2 w-full flex justify-between flex-row items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1 min-w-0 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MdError, { className: "text-exp-red-600 scale-110 shrink-0", title: "File error icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileName, { name: file.originalName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 mr-2 text-sm h-full text-trax-red-600", children: errorMessage.includes("Unsupported file type") ? "Invalid format" : errorMessage.includes("exceeds limit") ? `>${((_a = errorMessage.match(/\d+MB/)) == null ? void 0 : _a[0]) || "Size limit"}` : errorMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "flex hover:cursor-pointer",
            onClick: /* @__PURE__ */ __name(() => onRemove(index), "onClick"),
            disabled,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-red-600", "data-testid": "delete-supporting-file-button" })
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "bg-white hover:bg-trax-neutral-20 px-2 py-2 w-full flex justify-between flex-row items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center flex-1 min-w-0 gap-2 hover:cursor-pointer hover:underline",
        onClick: /* @__PURE__ */ __name(() => onPreview(file), "onClick"),
        children: [
          previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-img", "data-testid": "icon-file-img" }) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-pdf", "data-testid": "icon-file-pdf" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "text-line-unknown", "data-testid": "icon-file-unknown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileName, { name: file.originalName })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "flex hover:cursor-pointer shrink-0 ml-2",
        onClick: /* @__PURE__ */ __name(() => onRemove(index), "onClick"),
        disabled,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-grey-200 hover:text-trax-neutral-900", "data-testid": "delete-supporting-file-button" })
      }
    )
  ] });
}
__name(SupportingFileCard, "SupportingFileCard");
const { useCallback: useCallback$1, useEffect: useEffect$1, useRef: useRef$1, useState } = await importShared("react");
function SupportingFiles({
  onFilesChange,
  initialFiles = [],
  disabled = false,
  className = "",
  maxFiles = MAX_SUPPORTING_FILES_FOR_STANDARD_EXPENSE,
  title,
  tooltipContent,
  hideAddButtonWhenFull = false,
  expenseId,
  onSaveDraftForUpload
}) {
  const fileInputRef = useRef$1(null);
  const attachmentsForCleanupRef = useRef$1([]);
  const {
    userDefaultCompany,
    blobManager,
    isStoreDataRelevant,
    validateFile,
    uploadSingleFile,
    deleteFileById,
    loadFileContent,
    openPreview
  } = useFileOperations({
    documentType: "supporting",
    expenseId: expenseId ?? void 0,
    shouldKeepUrl: /* @__PURE__ */ __name((url) => attachmentsForCleanupRef.current.some((a) => a.blobUrl === url) || initialFiles.some((a) => a.blobUrl === url), "shouldKeepUrl")
  });
  const { supportingFiles: sfStore, startUploadFlow, updateDraftId } = usePendingUploadStore();
  const {
    pendingFiles: pendingSupportingFiles,
    uploadedFiles: uploadedSupportingFiles,
    status: supportingFilesUploadStatus,
    setPendingFiles: setPendingSupportingFiles,
    clearPendingFiles: clearPendingSupportingFiles,
    addUploadedFiles: addUploadedSupportingFiles,
    clearUploadedFiles: clearUploadedSupportingFiles,
    setStatus: setSupportingFilesUploadStatus
  } = sfStore;
  const effectiveInitialFiles = isStoreDataRelevant && uploadedSupportingFiles.length > 0 ? [...initialFiles, ...uploadedSupportingFiles.filter(
    (sf) => !initialFiles.some((f) => f.id === sf.id)
  )] : initialFiles;
  const [state, setState] = useState({
    attachments: effectiveInitialFiles,
    isUploading: false,
    errors: /* @__PURE__ */ new Map()
  });
  const [deleteDialogState, setDeleteDialogState] = useState({
    isOpen: false,
    fileIndex: null,
    isDeleting: false
  });
  const previousAttachmentsRef = useRef$1(effectiveInitialFiles);
  const [loadedBlobUrls, setLoadedBlobUrls] = useState(/* @__PURE__ */ new Map());
  const [loadingPreviewFileIds, setLoadingPreviewFileIds] = useState(/* @__PURE__ */ new Set());
  const isSavingDraft = supportingFilesUploadStatus === "saving-draft";
  const isUploading = supportingFilesUploadStatus === "uploading";
  const attachmentsRef = useRef$1(effectiveInitialFiles);
  attachmentsRef.current = state.attachments;
  const handleFilesUploadRef = useRef$1(null);
  const previewAbortControllersRef = useRef$1(/* @__PURE__ */ new Map());
  const deletedFileIdsRef = useRef$1(/* @__PURE__ */ new Set());
  attachmentsForCleanupRef.current = state.attachments;
  useEffect$1(() => {
    uploadedSupportingFiles.forEach((file) => {
      if (file.blobUrl) {
        blobManager.trackUrl(file.blobUrl);
      }
    });
    if (isStoreDataRelevant && uploadedSupportingFiles.length > 0 && initialFiles.length === 0) {
      setState((prev) => {
        const newFiles = uploadedSupportingFiles.filter(
          (sf) => !prev.attachments.some((f) => f.id === sf.id)
        );
        if (newFiles.length === 0) return prev;
        return {
          ...prev,
          attachments: [...prev.attachments, ...newFiles]
        };
      });
      onFilesChange == null ? void 0 : onFilesChange(uploadedSupportingFiles);
    }
    if (isStoreDataRelevant && uploadedSupportingFiles.length > 0) {
      const allSynced = uploadedSupportingFiles.every(
        (sf) => initialFiles.some((f) => f.id === sf.id)
      );
      if (allSynced) {
        clearUploadedSupportingFiles();
      }
    }
  }, [isStoreDataRelevant, uploadedSupportingFiles, initialFiles, blobManager, onFilesChange, clearUploadedSupportingFiles]);
  useEffect$1(() => {
    if (previousAttachmentsRef.current !== state.attachments) {
      previousAttachmentsRef.current = state.attachments;
      onFilesChange == null ? void 0 : onFilesChange(state.attachments);
    }
  }, [state.attachments, onFilesChange]);
  useEffect$1(() => {
    initialFiles.forEach((file) => {
      if (file.blobUrl) {
        blobManager.trackUrl(file.blobUrl);
      }
    });
  }, [initialFiles, blobManager]);
  useEffect$1(() => {
    const controllers = previewAbortControllersRef.current;
    return () => {
      controllers.forEach((controller) => controller.abort());
      controllers.clear();
    };
  }, []);
  const handleAddSupportingDocumentClick = useCallback$1((e) => {
    var _a;
    e.preventDefault();
    if (disabled || state.isUploading || isSavingDraft) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [disabled, state.isUploading, isSavingDraft]);
  const handleFilesUpload = useCallback$1(async (filesToProcess, targetExpenseId) => {
    if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
      devError("[SF] No company selected for file upload");
      return;
    }
    setState((prev) => ({
      ...prev,
      isUploading: true,
      uploadingFileIndex: prev.attachments.length
    }));
    const processedFiles = [];
    const fileErrors = /* @__PURE__ */ new Map();
    const batchController = blobManager.createBatchController();
    const signal = batchController.signal;
    for (let i = 0; i < filesToProcess.length; i++) {
      const { file, error } = filesToProcess[i];
      const currentIndex = state.attachments.length + i;
      setState((prev) => ({
        ...prev,
        uploadingFileIndex: currentIndex
      }));
      if (error) {
        const errorAttachment = createErrorAttachment(file, error.message, i, "validation");
        processedFiles.push(errorAttachment);
        fileErrors.set(currentIndex, error);
      } else {
        try {
          const attachment = await uploadSingleFile(file, targetExpenseId, signal);
          processedFiles.push(attachment);
        } catch (error2) {
          const isCanceled = error2 instanceof Error && (error2.name === "AbortError" || error2.name === "CanceledError");
          if (isCanceled) {
            if (signal.aborted) {
              devWarn("[SF] Batch aborted, stopping upload");
              break;
            }
            devWarn(`[SF] File ${file.name} upload canceled (likely timeout)`);
            const cancelMessage = "Upload failed. Please try again.";
            const errorAttachment2 = createErrorAttachment(file, cancelMessage, i, "upload");
            processedFiles.push(errorAttachment2);
            fileErrors.set(currentIndex, {
              type: "network",
              message: cancelMessage,
              details: "Request canceled (timeout or connection issue)"
            });
            continue;
          }
          devError(`[SF] File ${file.name} upload failed:`, error2);
          const errorMessage = getErrorMessage(error2, {
            context: "action",
            copy: { fallback: "Upload failed. Please try again." }
          });
          const errorAttachment = createErrorAttachment(file, errorMessage, i, "upload");
          processedFiles.push(errorAttachment);
          fileErrors.set(currentIndex, {
            type: "network",
            message: errorMessage,
            details: error2 instanceof Error ? error2.toString() : String(error2)
          });
        }
      }
    }
    if (signal.aborted) {
      return;
    }
    const successfulUploads = processedFiles.filter((f) => f.status !== "error");
    if (successfulUploads.length > 0) {
      addUploadedSupportingFiles(successfulUploads);
    }
    setState((prev) => {
      const newAttachments = [...prev.attachments, ...processedFiles];
      const newErrors = new Map([...prev.errors, ...fileErrors]);
      return {
        ...prev,
        attachments: newAttachments,
        isUploading: false,
        uploadingFileIndex: void 0,
        errors: newErrors
      };
    });
    batchController.release();
    clearPendingSupportingFiles();
    setSupportingFilesUploadStatus("complete");
  }, [userDefaultCompany == null ? void 0 : userDefaultCompany.shortName, state.attachments.length, blobManager, uploadSingleFile, addUploadedSupportingFiles, clearPendingSupportingFiles, setSupportingFilesUploadStatus]);
  handleFilesUploadRef.current = handleFilesUpload;
  useEffect$1(() => {
    var _a;
    if (expenseId && pendingSupportingFiles.length > 0 && isStoreDataRelevant && !isUploading) {
      const filesToUpload = pendingSupportingFiles.map((file) => ({ file, error: null }));
      setSupportingFilesUploadStatus("uploading");
      (_a = handleFilesUploadRef.current) == null ? void 0 : _a.call(handleFilesUploadRef, filesToUpload, expenseId);
    }
  }, [expenseId, pendingSupportingFiles, isStoreDataRelevant, isUploading, setSupportingFilesUploadStatus]);
  const handleFileChange = useCallback$1(async (e) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    const totalFiles = state.attachments.length + newFiles.length;
    if (totalFiles > maxFiles) {
      const filesToAdd = maxFiles - state.attachments.length;
      if (filesToAdd <= 0) {
        notifyMessage(`Maximum ${maxFiles} supporting file${maxFiles > 1 ? "s" : ""} allowed`);
        return;
      }
      notifyMessage(`Only ${filesToAdd} more file(s) can be added`);
      newFiles.splice(filesToAdd);
    }
    const filesToProcess = [];
    const existingFilenames = new Set(state.attachments.map((a) => a.originalName));
    const filesWithUniqueNames = renameConflictingFiles(
      newFiles,
      existingFilenames
    );
    filesWithUniqueNames.forEach((file) => {
      const error = validateFile(file);
      filesToProcess.push({ file, error });
    });
    if (filesToProcess.length === 0) return;
    if (expenseId) {
      const validFiles2 = filesToProcess.filter((f) => !f.error).map((f) => f.file);
      if (validFiles2.length > 0) {
        setSupportingFilesUploadStatus("uploading");
        setPendingSupportingFiles(validFiles2);
      }
      await handleFilesUpload(filesToProcess, expenseId);
      return;
    }
    if (!onSaveDraftForUpload) {
      notifyMessage("Cannot upload files: please save the expense first");
      return;
    }
    const validFiles = filesToProcess.filter((f) => !f.error).map((f) => f.file);
    const errorFiles = filesToProcess.filter((f) => f.error);
    if (errorFiles.length > 0) {
      const errorAttachments = errorFiles.map(
        (f, i) => createErrorAttachment(f.file, f.error.message, i, "validation")
      );
      const errorMap = /* @__PURE__ */ new Map();
      errorFiles.forEach((f, i) => {
        errorMap.set(state.attachments.length + i, f.error);
      });
      setState((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...errorAttachments],
        errors: new Map([...prev.errors, ...errorMap])
      }));
    }
    if (validFiles.length === 0) return;
    const filesToStore = validFiles.map((f) => {
      const fileData = filesToProcess.find((fp) => fp.file === f);
      return (fileData == null ? void 0 : fileData.file) || f;
    });
    startUploadFlow(null);
    setPendingSupportingFiles(filesToStore);
    setSupportingFilesUploadStatus("saving-draft");
    try {
      const { draftId } = await onSaveDraftForUpload();
      updateDraftId(draftId);
    } catch (error) {
      clearPendingSupportingFiles();
      setSupportingFilesUploadStatus("idle");
      devError("Failed to save draft for file upload:", error);
    }
  }, [state.attachments, maxFiles, expenseId, onSaveDraftForUpload, handleFilesUpload, startUploadFlow, setPendingSupportingFiles, setSupportingFilesUploadStatus, updateDraftId, clearPendingSupportingFiles, validateFile]);
  const handleRemoveFile = useCallback$1((index) => {
    if (disabled || state.isUploading) return;
    setDeleteDialogState({
      isOpen: true,
      fileIndex: index,
      isDeleting: false
    });
  }, [disabled, state.isUploading]);
  const handleDeleteConfirm = useCallback$1(async () => {
    const fileIndex = deleteDialogState.fileIndex;
    if (fileIndex === null || disabled) return;
    setDeleteDialogState((prev) => ({ ...prev, isDeleting: true }));
    const file = state.attachments[fileIndex];
    if (file) {
      deletedFileIdsRef.current.add(file.id);
      const previewController = previewAbortControllersRef.current.get(file.id);
      if (previewController) {
        previewController.abort();
        previewAbortControllersRef.current.delete(file.id);
      }
      try {
        if (file.status !== "error" && !file.id.startsWith("error-") && !file.id.startsWith("upload-error-")) {
          await deleteFileById(file.id);
        }
        const blobUrlToClean = loadedBlobUrls.get(file.id) || file.blobUrl;
        if (blobUrlToClean) {
          blobManager.revokeUrl(blobUrlToClean);
        }
        setLoadedBlobUrls((prev) => {
          const newMap = new Map(prev);
          newMap.delete(file.id);
          return newMap;
        });
        setState((prev) => {
          const newAttachments = prev.attachments.filter((_, i) => i !== fileIndex);
          const newErrors = new Map(prev.errors);
          newErrors.delete(fileIndex);
          const reindexedErrors = /* @__PURE__ */ new Map();
          newErrors.forEach((error, oldIndex) => {
            if (oldIndex > fileIndex) {
              reindexedErrors.set(oldIndex - 1, error);
            } else if (oldIndex < fileIndex) {
              reindexedErrors.set(oldIndex, error);
            }
          });
          return {
            ...prev,
            attachments: newAttachments,
            errors: reindexedErrors
          };
        });
      } catch (error) {
        notifyError(error, { context: "action", copy: { fallback: "Failed to delete file" } });
      }
    }
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, [deleteDialogState.fileIndex, state.attachments, disabled, loadedBlobUrls, blobManager, deleteFileById]);
  const handleDeleteCancel = useCallback$1(() => {
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, []);
  const handlePreviewClick = useCallback$1(async (file) => {
    var _a;
    if (file.status === "error") {
      return;
    }
    if (loadingPreviewFileIds.has(file.id)) {
      return;
    }
    let blobUrl = loadedBlobUrls.get(file.id) || file.blobUrl;
    if (!blobUrl && ((_a = file.url) == null ? void 0 : _a.startsWith("/api/"))) {
      const controller = new AbortController();
      previewAbortControllersRef.current.set(file.id, controller);
      setLoadingPreviewFileIds((prev) => new Set(prev).add(file.id));
      try {
        blobUrl = await loadFileContent(file.id, controller.signal);
        if (deletedFileIdsRef.current.has(file.id)) {
          URL.revokeObjectURL(blobUrl);
          return;
        }
        setLoadedBlobUrls((prev) => new Map(prev).set(file.id, blobUrl));
      } catch (error) {
        const isCanceled = error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError");
        if (isCanceled) return;
        notifyError(error, {
          context: "action",
          copy: { fallback: "Failed to download file. Please try again." }
        });
        return;
      } finally {
        previewAbortControllersRef.current.delete(file.id);
        setLoadingPreviewFileIds((prev) => {
          const next = new Set(prev);
          next.delete(file.id);
          return next;
        });
      }
    }
    try {
      const fileWithBlobUrl = blobUrl ? { ...file, blobUrl } : file;
      await openPreview(fileWithBlobUrl);
    } catch (error) {
      notifyError(error, { context: "action", copy: { fallback: "Failed to open file preview" } });
    }
  }, [loadedBlobUrls, loadingPreviewFileIds, loadFileContent, openPreview]);
  const displayTitle = title ?? `SUPPORTING FILE${maxFiles > 1 ? "S" : ""} (MAX ${maxFiles})`;
  const displayTooltip = tooltipContent ?? `You can attach up to ${maxFiles} document${maxFiles > 1 ? "s" : ""}, such as pre-approvals, order confirmations, or bank statements to support this expense. ${getSupportedFormatsText()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Cs, { className: `flex items-center flex-col w-full h-fit overflow-clip ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row w-full items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr,
        {
          iconClassName: "bg-trax-neutral-30 flex justify-center items-center",
          title: displayTitle,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
          className: "text-nowrap w-auto"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center w-full ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { delayDuration: TOOLTIP_DELAY_QUICK, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GrCircleInformation, { className: "text-gray-500 hover:cursor-pointer select-none" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { variant: "default", side: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-trax-blue-700 text-white border-none text-sm p-2 w-64", children: displayTooltip }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center h-full", children: state.attachments.length < maxFiles ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleAddSupportingDocumentClick,
          disabled: disabled || state.isUploading,
          "aria-label": "Add supporting file",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FaPlus,
            {
              className: `${disabled || state.isUploading ? "opacity-20 hover:cursor-not-allowed" : "fill-trax-blue-600 hover:cursor-pointer"}`
            }
          )
        }
      ) : !hideAddButtonWhenFull ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { delayDuration: TOOLTIP_DELAY_QUICK, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddSupportingDocumentClick, disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPlus, { className: "opacity-20 hover:cursor-not-allowed" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pt,
          {
            variant: "light",
            size: "sm",
            className: "max-w-full",
            side: "bottom",
            align: "start",
            showArrow: false,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
              "Cannot add more than ",
              maxFiles,
              " file",
              maxFiles > 1 ? "s" : ""
            ] })
          }
        )
      ] }) : null }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "file",
          ref: fileInputRef,
          accept: generateAcceptAttribute(),
          multiple: true,
          onChange: handleFileChange,
          style: { display: "none" },
          disabled,
          "data-testid": "supporting-file-input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: `bg-white w-full p-0 ${state.attachments.length === 0 && !state.isUploading && pendingSupportingFiles.length === 0 ? "h-0" : "h-auto"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col my-1 mx-2 gap-1", children: [
      state.attachments.map((file, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SupportingFileCard,
        {
          file,
          error: state.errors.get(index),
          onRemove: handleRemoveFile,
          onPreview: handlePreviewClick,
          index,
          isUploading: state.isUploading && state.uploadingFileIndex === index,
          isLoadingPreview: loadingPreviewFileIds.has(file.id),
          disabled
        },
        file.id
      )),
      (isSavingDraft || isUploading) && pendingSupportingFiles.map((file, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-trax-neutral-600 flex flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-sm text-trax-blue-600 hover:cursor-pointer min-w-0 shrink", children: file.name }) })
      ] }) }, `pending-${index}`))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deleteDialogState.isOpen,
        onOpenChange: /* @__PURE__ */ __name((open) => {
          if (!open) handleDeleteCancel();
        }, "onOpenChange"),
        title: "Delete file",
        description: "Are you sure you want to delete this file?",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: deleteDialogState.isDeleting
      }
    )
  ] });
}
__name(SupportingFiles, "SupportingFiles");
const { useCallback } = await importShared("react");
const ExpenseFormLeftColumn = /* @__PURE__ */ __name(({
  control,
  setValue,
  getValues,
  isSubmitting,
  isDrafting,
  draftId,
  onSaveDraft,
  onSaveDraftForUpload
}) => {
  const {
    receiptAttachment,
    supportingFiles,
    shouldShowReceiptCheckbox,
    handleReceiptChange,
    handleSupportingFilesChange,
    setIsReceiptUploading
  } = useExpenseFormLeftColumn({
    control,
    setValue,
    getValues,
    isDrafting,
    draftId,
    onSaveDraft
  });
  const handleSaveDraftForUpload = useCallback(async () => {
    if (!onSaveDraftForUpload) {
      throw new Error("onSaveDraftForUpload is not defined");
    }
    const formData = getValues();
    return onSaveDraftForUpload(formData);
  }, [getValues, onSaveDraftForUpload]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "w-full h-full flex flex-col pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptSection,
      {
        control,
        isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
        receiptAttachment,
        shouldShowCheckbox: shouldShowReceiptCheckbox,
        onReceiptChange: handleReceiptChange,
        onUploadingChange: setIsReceiptUploading,
        disabled: isSubmitting,
        expenseId: draftId,
        onSaveDraftForUpload: onSaveDraftForUpload ? handleSaveDraftForUpload : void 0
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SupportingFiles,
      {
        onFilesChange: handleSupportingFilesChange,
        initialFiles: supportingFiles || [],
        disabled: isSubmitting,
        expenseId: draftId,
        onSaveDraftForUpload: onSaveDraftForUpload ? handleSaveDraftForUpload : void 0
      }
    ) })
  ] });
}, "ExpenseFormLeftColumn");
const { memo, useEffect, useRef } = await importShared("react");
function CostAllocationHeaderActions({
  control,
  setValue,
  trigger,
  disabled,
  helpers,
  fieldConfig,
  hideDeferToApprover
}) {
  const netAmount = useWatch({
    control,
    name: fieldConfig.netAmountField
  });
  const totalAmount = useWatch({
    control,
    name: fieldConfig.totalAmountField ?? fieldConfig.netAmountField,
    disabled: !fieldConfig.totalAmountField
  });
  const netCurrency = useWatch({
    control,
    name: fieldConfig.netCurrencyField
  });
  const totalCurrency = useWatch({
    control,
    name: fieldConfig.totalCurrencyField
  });
  const costAllocations = useWatch({
    control,
    name: fieldConfig.costAllocationsField
  });
  const isEqualSplit = useWatch({
    control,
    name: fieldConfig.isEqualSplitField
  });
  const deferToApprover = useWatch({
    control,
    name: fieldConfig.deferToApproverField
  });
  const allocations = costAllocations || [];
  const isConverted = isConvertedExpense(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code);
  const parsedAmount = getExpenseBaseAmount(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code, netAmount, totalAmount);
  const amountField = isConverted ? fieldConfig.totalAmountField : fieldConfig.netAmountField;
  const {
    canEnableEqualSplit,
    toggleEqualSplit
  } = useEqualSplit({
    allocations,
    isEqualSplit: isEqualSplit ?? false,
    setValue,
    getValues: helpers.getValues,
    trigger,
    totalAmount: parsedAmount,
    totalAmountField: amountField,
    costAllocationsField: fieldConfig.costAllocationsField,
    isEqualSplitField: fieldConfig.isEqualSplitField
  });
  const isEqualSplitDisabled = parsedAmount === 0;
  const hasNoAllocations = allocations.length === 0;
  const noAmountEntered = isConverted ? totalAmount === "0" || totalAmount === "" : netAmount === "0" || netAmount === "";
  if (hasNoAllocations) {
    if (hideDeferToApprover) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ys,
      {
        id: "defer-to-approver",
        label: "Defer to approver",
        checked: deferToApprover ?? false,
        onCheckedChange: /* @__PURE__ */ __name((checked) => {
          setValue(
            fieldConfig.deferToApproverField,
            checked,
            {
              shouldValidate: true,
              shouldDirty: true
            }
          );
          trigger(fieldConfig.costAllocationsField);
        }, "onCheckedChange"),
        disabled: noAmountEntered || disabled
      }
    ) });
  }
  if (!canEnableEqualSplit) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      oi,
      {
        id: "equal-split-toggle",
        checked: isEqualSplit ?? false,
        onCheckedChange: toggleEqualSplit,
        disabled: isEqualSplitDisabled || disabled
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ye,
      {
        htmlFor: "equal-split-toggle",
        className: "text-xs font-medium text-exp-neutral-700 cursor-pointer",
        children: COST_ALLOCATION_LABELS.EQUAL_SPLIT
      }
    )
  ] });
}
__name(CostAllocationHeaderActions, "CostAllocationHeaderActions");
function CostAllocationSectionComponent({
  control,
  setValue,
  trigger,
  disabled = false,
  actions,
  helpers,
  fieldConfig
}) {
  const netAmount = useWatch({
    control,
    name: fieldConfig.netAmountField
  });
  const totalAmount = useWatch({
    control,
    name: fieldConfig.totalAmountField
  });
  const netCurrency = useWatch({
    control,
    name: fieldConfig.netCurrencyField
  });
  const totalCurrency = useWatch({
    control,
    name: fieldConfig.totalCurrencyField
  });
  const costAllocations = useWatch({
    control,
    name: fieldConfig.costAllocationsField
  });
  const deferToApprover = useWatch({
    control,
    name: fieldConfig.deferToApproverField
  });
  const allocations = costAllocations || [];
  const isConverted = isConvertedExpense(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code);
  const parsedAmount = getExpenseBaseAmount(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code, netAmount, totalAmount);
  const { defaultCurrencyCode } = useDefaultCurrency();
  const currency = (totalCurrency == null ? void 0 : totalCurrency.code) ?? defaultCurrencyCode;
  const prevCurrencyCodeRef = useRef(currency);
  useEffect(() => {
    if (prevCurrencyCodeRef.current !== currency) {
      prevCurrencyCodeRef.current = currency;
      if (allocations.length > 0) {
        trigger(fieldConfig.costAllocationsField);
      }
    }
  }, [currency, allocations.length, trigger, fieldConfig.costAllocationsField]);
  const {
    progressValue,
    progressError
  } = useCostAllocation({
    allocations,
    totalAmount: parsedAmount
  });
  const hasAllocations = allocations.length > 0;
  const { addAllocation, updateAllocationEntity, removeAllocation } = actions;
  const { getSelectedValue } = helpers;
  const isProgressDisabled = !hasAllocations && parsedAmount === 0;
  const noAmountEntered = isConverted ? totalAmount === "0" || totalAmount === "" : netAmount === "0" || netAmount === "";
  if (deferToApprover) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(qa, { value: progressValue, disabled: isProgressDisabled, error: progressError }),
    !hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AllocationTypeChips,
      {
        onSelect: /* @__PURE__ */ __name((type) => addAllocation(type), "onSelect"),
        disabled: noAmountEntered || disabled
      }
    ) }),
    hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      allocations.map((allocation, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CostAllocationField,
        {
          control,
          setValue,
          trigger,
          getValues: helpers.getValues,
          index,
          type: allocation.type,
          value: getSelectedValue(allocation.id, allocations),
          onValueChange: /* @__PURE__ */ __name((item) => updateAllocationEntity(allocation.id, item), "onValueChange"),
          totalAmount: parsedAmount,
          currencyCode: currency,
          currencySymbol: totalCurrency == null ? void 0 : totalCurrency.symbol,
          disabled: noAmountEntered || disabled,
          onRemove: /* @__PURE__ */ __name(() => removeAllocation(allocation.id), "onRemove"),
          isEqualSplitField: fieldConfig.isEqualSplitField
        },
        allocation.id
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AddAllocationExpandable,
        {
          onTypeSelect: /* @__PURE__ */ __name((type) => addAllocation(type), "onTypeSelect"),
          disabled: noAmountEntered || disabled
        }
      )
    ] })
  ] });
}
__name(CostAllocationSectionComponent, "CostAllocationSectionComponent");
const MemoizedCostAllocationSection = memo(CostAllocationSectionComponent);
const CostAllocationSection = MemoizedCostAllocationSection;
MemoizedCostAllocationSection.displayName = "CostAllocationSection";
export {
  useFormButtonStateSync as $,
  isConvertedExpense as A,
  usePaymentMethods as B,
  CostAllocationHeaderActions as C,
  DEFAULT_PAYMENT_METHOD as D,
  ExpensePreview as E,
  useSetDefaultCurrency as F,
  ExpenseTypeSelect as G,
  allowsNegativeAmounts as H,
  getTaxAmountWarning as I,
  MileagePeriodFormField as J,
  MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD as K,
  isSameCalendarMonth as L,
  MileageTripPreview as M,
  NO_MILEAGE_RATE_FOR_DATE_MESSAGE as N,
  FormSectionType as O,
  PreviewLoadError as P,
  expenseDetailsSchema as Q,
  expenseJustificationSchema as R,
  SupportingFiles as S,
  costAllocationSchema as T,
  additionalCommentsSchema as U,
  MileageTripFormField as V,
  mileageDetailsSchema as W,
  mileageJustificationSchema as X,
  useBaseExpenseForm as Y,
  useValidatePrefilledFields as Z,
  useAutoSave as _,
  CostAllocationSection as a,
  useFormImperativeHandle as a0,
  BaseExpenseFormRenderer as a1,
  useExpenseFormHandlers as a2,
  useExpenseFormSync as a3,
  fullExpenseValidationStrategy as a4,
  ExpenseFormLeftColumn as a5,
  useMileageTripFormHandlers as a6,
  mapMileageTripToDefaultValues as a7,
  mileageTripValidationStrategy as a8,
  supportingFilesSchema as a9,
  useMileagePeriodFormHandlers as aa,
  mapMileagePeriodToDefaultValues as ab,
  mileagePeriodValidationStrategy as ac,
  isMileagePeriodData as b,
  costAllocationItemSchema as c,
  MileagePeriodPreview as d,
  ExpenseFormHistoryLog as e,
  EtlErrorBanner as f,
  getExpenseBaseAmount as g,
  ExpenseItemType as h,
  isMileageTripData as i,
  useExpenseItemForm as j,
  getExpenseActionSubtitle as k,
  isValidFileAttachment as l,
  mapCostAllocation as m,
  ExpenseFormField as n,
  useFormFieldValues as o,
  computeMileageEffectiveOn as p,
  useMileageRateSync as q,
  useReimbursableAmountSync as r,
  useAmountAllocationSync as s,
  affidavitSchema as t,
  useCostAllocationHandlers as u,
  validateCostAllocation as v,
  basicDetailsSchema as w,
  createValidationStrategy as x,
  createDraftSaveChecker as y,
  useTaxFieldVisibility as z
};

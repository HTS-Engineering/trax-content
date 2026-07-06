var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { k as formatDate, aj as FILE_ENDPOINTS, e as useCompanyStore, K as useTaxTypesDisplay, m as formatExpenseDate, V as formatCurrency, S as ExpenseFormType, ad as ECostAllocation, aI as EMPTY_CURRENCY_SYMBOL, L as useDefaultCurrency, aK as formatDistance, U as formatRate, W as formatExpensePeriod, n as useQuery, E as EXPENSE_ENDPOINTS, q as queryKeys, aL as formatHistoryTimestamp } from "./use-scroll-into-view-ref-CN40Qna5.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { b as apiClient, F as ys, G as Ss, k as gr, N as Ns, Y as Yn, x as ws, B as Br, n as ls, Z as Zs, a0 as h, ao as wt, ap as zt, U as Ue, aq as yt } from "./configuration-DiNez-jq.js";
import { I as Icon } from "./Icon-5RIpWGMw.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { I as Info } from "./tooltip-BpSncOAx.js";
import { R as RefreshCw } from "./refresh-cw-CSTLi9eL.js";
function isConvertedExpense(netCurrencyCode, totalCurrencyCode) {
  return !!netCurrencyCode && !!totalCurrencyCode && netCurrencyCode !== totalCurrencyCode;
}
__name(isConvertedExpense, "isConvertedExpense");
function getExpenseBaseAmount(netCurrencyCode, totalCurrencyCode, netAmount, totalAmount) {
  const amount = isConvertedExpense(netCurrencyCode, totalCurrencyCode) ? totalAmount : netAmount;
  return parseFloat(amount || "0");
}
__name(getExpenseBaseAmount, "getExpenseBaseAmount");
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
const { useEffect: useEffect$1, useRef: useRef$1, useState: useState$2 } = await importShared("react");
const PreviewReceiptSection = /* @__PURE__ */ __name(({ receipt, stretchToFill = false }) => {
  var _a;
  const [imageError, setImageError] = useState$2(false);
  const [loadedBlobUrl, setLoadedBlobUrl] = useState$2();
  const [isLoading, setIsLoading] = useState$2(false);
  const abortRef = useRef$1(null);
  const receiptId = receipt == null ? void 0 : receipt.id;
  const receiptBlobUrl = receipt == null ? void 0 : receipt.blobUrl;
  const receiptUrl = receipt == null ? void 0 : receipt.url;
  const isImage = (_a = receipt == null ? void 0 : receipt.mimeType) == null ? void 0 : _a.startsWith("image/");
  const isPdf = (receipt == null ? void 0 : receipt.mimeType) === "application/pdf";
  const needsDownload = !receiptBlobUrl && isApiFileUrl(receiptUrl);
  useEffect$1(() => {
    if (!receiptId || !needsDownload) return;
    if (!isImage && !isPdf) return;
    const controller = new AbortController();
    abortRef.current = controller;
    setIsLoading(true);
    downloadFileAsBlob(receiptId, controller.signal).then((blobUrl) => {
      if (!controller.signal.aborted) {
        setLoadedBlobUrl(blobUrl);
      }
    }).catch(() => {
      if (controller.signal.aborted) return;
      setImageError(true);
    }).finally(() => {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    });
    return () => {
      controller.abort();
    };
  }, [receiptId, needsDownload, isImage, isPdf]);
  useEffect$1(() => {
    return () => {
      if (loadedBlobUrl) {
        URL.revokeObjectURL(loadedBlobUrl);
      }
    };
  }, [loadedBlobUrl]);
  useEffect$1(() => {
    setImageError(false);
    setLoadedBlobUrl(void 0);
  }, [receiptId]);
  if (!receipt) {
    return null;
  }
  const resolvedUrl = resolveFileUrl(receipt.blobUrl, receipt.url);
  const displayUrl = loadedBlobUrl ?? (needsDownload ? void 0 : resolvedUrl);
  const handlePreviewClick = /* @__PURE__ */ __name(() => {
    if (displayUrl) {
      window.open(displayUrl, "_blank", "noopener,noreferrer");
    }
  }, "handlePreviewClick");
  const handleImageError = /* @__PURE__ */ __name(() => {
    setImageError(true);
  }, "handleImageError");
  const showLoading = isLoading || needsDownload && !loadedBlobUrl && !imageError;
  const renderLoading = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center h-64 bg-exp-neutral-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-10" }) }), "renderLoading");
  const renderImagePlaceholder = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 bg-exp-neutral-30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-img", className: "size-16 text-exp-neutral-200 mb-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-neutral-500", children: receipt.filename }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-exp-neutral-300 mt-1", children: "Receipt image" })
  ] }), "renderImagePlaceholder");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "RECEIPT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 justify-center items-center flex"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden bg-exp-neutral-30 border border-exp-primary-blue-100", children: [
      showLoading && renderLoading(),
      !showLoading && isImage && !imageError && displayUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      !showLoading && isImage && (imageError || !displayUrl) && renderImagePlaceholder(),
      !showLoading && isPdf && renderPdfPreview(),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "AFFIDAVIT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-exp-yellow-200 bg-exp-yellow-100 p-4", children: [
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
const PreviewExpenseDetailsSection = /* @__PURE__ */ __name(({ data }) => {
  var _a, _b;
  const isConvertedTotal = isConvertedExpense((_a = data.netCurrency) == null ? void 0 : _a.code, (_b = data.totalCurrency) == null ? void 0 : _b.code);
  const hasTaxData = !!(data.taxType || data.taxAmount);
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { data: taxTypes } = useTaxTypesDisplay({
    companyShortName: (userDefaultCompany == null ? void 0 : userDefaultCompany.shortName) ?? null,
    enabled: !!data.taxType
  });
  const taxTypeDisplay = taxTypes == null ? void 0 : taxTypes.find((tt) => tt.id.toString() === data.taxType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
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
        data.taxAmount && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Tax amount",
            value: formatCurrency(data.taxAmount, { currency: { code: TAX_CURRENCY_CODE, symbol: TAX_CURRENCY_SYMBOL } })
          }
        )
      ] })
    ] }) })
  ] });
}, "PreviewExpenseDetailsSection");
const PreviewExpenseJustificationSection = /* @__PURE__ */ __name(({
  data
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "EXPENSE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: data.businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: data.expenseDescription }),
      data.formType === ExpenseFormType.ENTERTAINMENT && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Person entertained", value: data.personsEntertained })
    ] }) })
  ] });
}, "PreviewExpenseJustificationSection");
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
      const number = (entityData == null ? void 0 : entityData.number) || "";
      const description = (entityData == null ? void 0 : entityData.description) || "";
      return {
        primaryText: number && description ? `${number} / ${description}` : allocation.name
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: deferred ? "shadow-none border-0 bg-transparent p-0 gap-0" : "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: deferred ? "p-0 gap-0" : "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr,
        {
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ws,
        {
          id: "deferred-to-approver",
          label: "Deferred to approver",
          checked: true,
          disabled: true
        }
      )
    ] }) }),
    allocations && !deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: allocations.map((allocation, index) => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-right flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Br, { className: "rounded-lg bg-exp-primary-blue-50 text-exp-neutral-900 hover:bg-exp-primary-blue-50", children: [
              (currency == null ? void 0 : currency.symbol) || EMPTY_CURRENCY_SYMBOL,
              allocation.amount.toFixed(2),
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
const { useEffect, useRef, useState: useState$1 } = await importShared("react");
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
  const [loadingFileIds, setLoadingFileIds] = useState$1(/* @__PURE__ */ new Set());
  const [cachedBlobUrls, setCachedBlobUrls] = useState$1(/* @__PURE__ */ new Map());
  const controllersRef = useRef(/* @__PURE__ */ new Map());
  useEffect(() => {
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
    } catch {
      if (controller.signal.aborted) return;
      Zs.error("Failed to download file. Please try again.");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "SUPPORTING FILES",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-neutral-30 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((file) => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "text-xs font-medium text-exp-neutral-700 group-hover:underline", maxWidth: 200, children: file.filename })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "ADDITIONAL COMMENTS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-900 wrap-break-word", children: comments }) })
  ] });
}, "PreviewAdditionalCommentsSection");
const PreviewMileageTripDetailsSection = /* @__PURE__ */ __name(({ data }) => {
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "p-0 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr,
        {
          title: "MILEAGE DETAILS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      data.isRoundTrip && /* @__PURE__ */ jsxRuntimeExports.jsx(Br, { className: "bg-exp-neutral-30 text-exp-neutral-600 font-medium hover:bg-none! cursor-default", children: "Round trip" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "MILEAGE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ys, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ss, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        title: "MILEAGE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ns, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: expenseDescription })
    ] }) })
  ] });
}, "PreviewMileageJustificationSection");
const ExpensePreview = /* @__PURE__ */ __name(({ expense, renderCostAllocation }) => {
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewExpenseDetailsSection, { data }),
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
function getExpenseErrorMessage(error) {
  const code = error == null ? void 0 : error.code;
  if (code === "404") {
    return "Expense form could not be found.";
  }
  if (code === "403") {
    return "You do not have permission to view this expense form.";
  }
  return "Failed to load expense form. Please check your connection and try again.";
}
__name(getExpenseErrorMessage, "getExpenseErrorMessage");
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
  return useQuery({
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
const { useState } = await importShared("react");
const ExpenseFormHistoryLog = /* @__PURE__ */ __name(({
  expenseFormId,
  className = ""
}) => {
  var _a, _b;
  const [open, setOpen] = useState(false);
  const {
    data: historyData,
    isLoading,
    isError,
    refetch
  } = useExpenseFormHistory({
    expenseFormId
  });
  const mostRecentStatus = ((_b = (_a = historyData == null ? void 0 : historyData.history) == null ? void 0 : _a[0]) == null ? void 0 : _b.formStatus) ?? null;
  const statusLabel = mostRecentStatus ? capitalize(mostRecentStatus) : null;
  const handleOpenChange = /* @__PURE__ */ __name((newOpen) => {
    setOpen(newOpen);
  }, "handleOpenChange");
  const renderContent = /* @__PURE__ */ __name(() => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-6 text-exp-primary-blue-600" }) });
    }
    if (isError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 px-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-700 text-center mb-4 text-nowrap", children: "Failed to load history. Please try again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            onClick: /* @__PURE__ */ __name(() => refetch(), "onClick"),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-4" }),
            children: "Retry"
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
  if (!isLoading && !mostRecentStatus) return null;
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
function isHttpApiError(error) {
  return error instanceof Error && "response" in error;
}
__name(isHttpApiError, "isHttpApiError");
function getHttpErrorMessage(error) {
  var _a;
  if (isHttpApiError(error)) {
    const data = (_a = error.response) == null ? void 0 : _a.data;
    const detail = typeof (data == null ? void 0 : data.detail) === "string" ? data.detail : void 0;
    return (data == null ? void 0 : data.message) || detail || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}
__name(getHttpErrorMessage, "getHttpErrorMessage");
export {
  ExpensePreview as E,
  MileageTripPreview as M,
  getExpenseErrorMessage as a,
  isMileagePeriodData as b,
  MileagePeriodPreview as c,
  ExpenseFormHistoryLog as d,
  isConvertedExpense as e,
  getExpenseActionSubtitle as f,
  getExpenseBaseAmount as g,
  MileageFormType as h,
  isMileageTripData as i,
  isHttpApiError as j,
  getHttpErrorMessage as k,
  resolveFileUrl as r
};

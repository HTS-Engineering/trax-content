import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { i as cs, j as gs, Q as Qn, p as ps, E as En, u as us, b as $r, B as Bs } from "./configuration-EGHx9r2n.js";
import { I as Icon } from "./Icon-vRMTtv5F.js";
import { V as FILE_ENDPOINTS, i as useCompanyStore, X as useTaxTypesDisplay, ae as useFormTypeName, J as ExpenseFormType, af as EMPTY_CURRENCY_SYMBOL, A as ECostAllocation, Y as useDefaultCurrency } from "./expense-api-D46rex6X.js";
import { d as formatDate, c as formatCurrency, e as formatDistance, b as formatRate } from "./formatters-ybmOirZV.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { a as apiClient } from "./axiosInstance-PRbHj7CX.js";
var MileageFormType = /* @__PURE__ */ ((MileageFormType2) => {
  MileageFormType2["Trip"] = "trip";
  MileageFormType2["Period"] = "period";
  return MileageFormType2;
})(MileageFormType || {});
function isMileageTripData(data) {
  return data.formType === "trip";
}
function isMileagePeriodData(data) {
  return data.formType === "period";
}
const isValidDate = (date) => !isNaN(date.getTime());
const parseISODateAsLocal = (dateString) => {
  const isoDateMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoDateMatch) {
    const [, year, month, day] = isoDateMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return new Date(dateString);
};
const normalizeDateRange = (range) => {
  if (!(range == null ? void 0 : range.from)) return void 0;
  try {
    const fromDate = typeof range.from === "string" ? parseISODateAsLocal(range.from) : range.from;
    if (!isValidDate(fromDate)) return void 0;
    const toDate = range.to ? typeof range.to === "string" ? parseISODateAsLocal(range.to) : range.to : void 0;
    if (toDate && !isValidDate(toDate)) return void 0;
    return { from: fromDate, to: toDate };
  } catch {
    return void 0;
  }
};
const formatExpenseDate = (date) => {
  if (!date) return "";
  try {
    const parsedDate = typeof date === "string" ? parseISODateAsLocal(date) : date;
    if (!isValidDate(parsedDate)) return "";
    const month = parsedDate.toLocaleDateString("en-US", { month: "short" });
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
    return `${month} ${day}, ${year}`;
  } catch {
    return "";
  }
};
const formatExpensePeriod = (range) => {
  const normalizedRange = normalizeDateRange(range);
  if (!(normalizedRange == null ? void 0 : normalizedRange.from)) return "";
  try {
    const fromDate = normalizedRange.from;
    const toDate = normalizedRange.to;
    const formatDate2 = (date, includeYear = false) => {
      const month = date.toLocaleDateString("en-US", { month: "short" });
      const day = date.getDate();
      const year = date.getFullYear();
      return includeYear ? `${month} ${day}, ${year}` : `${month} ${day}`;
    };
    if (toDate && fromDate.getTime() !== toDate.getTime()) {
      const isCrossYear = fromDate.getFullYear() !== toDate.getFullYear();
      if (isCrossYear) {
        return `${formatDate2(fromDate, true)} - ${formatDate2(toDate, true)}`;
      }
      return `${formatDate2(fromDate)} - ${formatDate2(toDate)}, ${fromDate.getFullYear()}`;
    }
    return `${formatDate2(fromDate)}, ${fromDate.getFullYear()}`;
  } catch {
    return "";
  }
};
function isViteDevMode() {
  try {
    const url = new URL(import.meta.url);
    return url.pathname.includes("/src/") || url.pathname.includes("/@fs/");
  } catch {
    return false;
  }
}
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
function getMockAssetUrl(path) {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const baseUrl = getMfeBaseUrl();
  if (baseUrl) {
    return `${baseUrl}/${cleanPath}`;
  }
  return `/${cleanPath}`;
}
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
async function downloadFileAsBlob(fileId, signal) {
  const response = await apiClient.get(FILE_ENDPOINTS.DOWNLOAD(fileId), {
    responseType: "blob",
    signal
  });
  return URL.createObjectURL(response.data);
}
function isApiFileUrl(url) {
  return !!url && url.startsWith("/api/");
}
const { useEffect: useEffect$1, useRef: useRef$1, useState: useState$1 } = await importShared("react");
const PreviewReceiptSection = ({ receipt, stretchToFill = false }) => {
  var _a;
  const [imageError, setImageError] = useState$1(false);
  const [loadedBlobUrl, setLoadedBlobUrl] = useState$1();
  const [isLoading, setIsLoading] = useState$1(false);
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
  const handlePreviewClick = () => {
    if (displayUrl) {
      window.open(displayUrl, "_blank", "noopener,noreferrer");
    }
  };
  const handleImageError = () => {
    setImageError(true);
  };
  const showLoading = isLoading || needsDownload && !loadedBlobUrl && !imageError;
  const renderLoading = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center h-64 bg-exp-neutral-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-10" }) });
  const renderImagePlaceholder = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 bg-exp-neutral-30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-img", className: "size-16 text-exp-neutral-200 mb-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-neutral-500", children: receipt.filename }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-exp-neutral-300 mt-1", children: "Receipt image" })
  ] });
  const renderPdfPreview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "RECEIPT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 justify-center items-center flex"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden bg-exp-neutral-30 border border-exp-primary-blue-100", children: [
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
};
const AFFIDAVIT_DECLARATION = "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable.";
const AFFIDAVIT_DISCLAIMER = "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action.";
const PreviewAffidavitSection = ({ affidavit }) => {
  if (!affidavit) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "AFFIDAVIT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-exp-yellow-200 bg-exp-yellow-100 p-4", children: [
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
};
const PreviewField = ({ label, value, className = "", icon }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-xs text-exp-neutral-300 mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-normal text-sm text-exp-grey-900 wrap-break-word relative", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-6", children: icon }),
      value || "—"
    ] })
  ] });
};
const TAX_CURRENCY_CODE = "CAD";
const TAX_CURRENCY_SYMBOL = "$";
const PreviewExpenseDetailsSection = ({ data }) => {
  var _a;
  const isConvertedTotal = !!data.netCurrency && data.netCurrency.code !== ((_a = data.totalCurrency) == null ? void 0 : _a.code);
  const hasTaxData = !!(data.taxType || data.taxAmount);
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const { data: taxTypes } = useTaxTypesDisplay({
    companyShortName: (selectedCompany == null ? void 0 : selectedCompany.shortName) ?? null,
    enabled: !!data.taxType
  });
  const taxTypeDisplay = taxTypes == null ? void 0 : taxTypes.find((tt) => tt.id.toString() === data.taxType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense type", value: data.expenseType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Vendor", value: data.vendor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense date",
          value: data.expenseDate ? formatDate(data.expenseDate) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense location", value: data.expenseLocation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Payment method",
          value: data.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "credit-card", className: "size-5 text-exp-neutral-700" }),
            data.paymentMethod
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
        data.taxType && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Tax type",
            value: taxTypeDisplay ? `${taxTypeDisplay.taxCode} ${taxTypeDisplay.taxRate}%` : data.taxType
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
};
const PreviewExpenseJustificationSection = ({
  data
}) => {
  const companyShortName = useCompanyStore((state) => {
    var _a;
    return ((_a = state.selectedCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const expenseTypeName = data.expenseType;
  const formType = useFormTypeName(expenseTypeName, companyShortName);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "EXPENSE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: data.businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: data.expenseDescription }),
      formType === ExpenseFormType.ENTERTAINMENT && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Persons entertained", value: data.personsEntertained })
    ] }) })
  ] });
};
const ALLOCATION_TYPE_LABELS = {
  [ECostAllocation.Project]: "PROJECT",
  [ECostAllocation.Admin]: "ADMIN",
  [ECostAllocation.Rep]: "CCB REP",
  [ECostAllocation.Team]: "CCB TEAM"
};
const formatPercentage = (value) => {
  if (Number.isInteger(value)) {
    return `${value}%`;
  }
  return `${value.toFixed(2).replace(/\.?0+$/, "")}%`;
};
const getAllocationDisplay = (allocation) => {
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
};
const PreviewCostAllocationSection = ({
  allocations,
  deferred,
  currency
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: deferred ? "shadow-none border-0 bg-transparent p-0 gap-0" : "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: deferred ? "p-0 gap-0" : "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qn,
        {
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(
        us,
        {
          id: "deferred-to-approver",
          label: "Deferred to approver",
          checked: true,
          disabled: true
        }
      )
    ] }) }),
    allocations && !deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: allocations.map((allocation, index) => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-right flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { className: "rounded-lg bg-exp-primary-blue-50 text-exp-neutral-900 hover:bg-exp-primary-blue-50", children: [
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
};
const { useEffect, useRef, useState } = await importShared("react");
const getFileIcon = (mimeType) => {
  if (mimeType === "application/pdf") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-pdf", className: "size-5" });
  }
  if (mimeType.startsWith("image/")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-img", className: "size-5" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-5 text-exp-neutral-500" });
};
const PreviewSupportingFilesSection = ({
  files
}) => {
  const [loadingFileIds, setLoadingFileIds] = useState(/* @__PURE__ */ new Set());
  const [cachedBlobUrls, setCachedBlobUrls] = useState(/* @__PURE__ */ new Map());
  const controllersRef = useRef(/* @__PURE__ */ new Map());
  useEffect(() => {
    return () => {
      controllersRef.current.forEach((c) => c.abort());
      cachedBlobUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);
  const handleFileClick = async (file) => {
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
      Bs.error("Failed to download file. Please try again.");
    } finally {
      controllersRef.current.delete(file.id);
      setLoadingFileIds((prev) => {
        const next = new Set(prev);
        next.delete(file.id);
        return next;
      });
    }
  };
  if (!files || files.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "SUPPORTING FILES",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-neutral-30 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((file) => {
      const isLoading = loadingFileIds.has(file.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleFileClick(file),
          disabled: isLoading,
          className: "flex items-center gap-2 px-2 py-1 bg-exp-primary-blue-50 rounded-lg w-fit group cursor-pointer disabled:cursor-wait",
          children: [
            isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-4 shrink-0" }) : getFileIcon(file.mimeType),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-exp-neutral-700 group-hover:underline truncate", children: file.filename })
          ]
        },
        file.id
      );
    }) }) })
  ] });
};
const PreviewAdditionalCommentsSection = ({
  comments
}) => {
  if (!comments) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "ADDITIONAL COMMENTS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-900 wrap-break-word", children: comments }) })
  ] });
};
const PreviewMileageTripDetailsSection = ({ data }) => {
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(gs, { className: "p-0 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qn,
        {
          title: "MILEAGE DETAILS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      data.isRoundTrip && /* @__PURE__ */ jsxRuntimeExports.jsx($r, { className: "bg-exp-neutral-30 text-exp-neutral-600 font-medium hover:bg-none! cursor-default", children: "Round trip" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Mileage type", value: data.mileageType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense date",
          value: data.expenseDate ? formatDate(data.expenseDate) : void 0
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
};
const PreviewMileagePeriodDetailsSection = ({ data }) => {
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "MILEAGE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
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
};
const PreviewMileageJustificationSection = ({
  businessPurpose,
  expenseDescription
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "MILEAGE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: expenseDescription })
    ] }) })
  ] });
};
const ExpensePreview = ({ expense }) => {
  const { data } = expense;
  const hasReceipt = !!data.receiptAttachment;
  const hasAffidavit = data.isReceiptUnavailable && !!data.affidavit;
  const hasSupportingFiles = data.supportingFiles && data.supportingFiles.length > 0;
  const hasLeftColumn = hasReceipt || hasAffidavit || hasSupportingFiles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 h-full", children: [
    hasLeftColumn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 shrink-0 space-y-6 self-start sticky top-0", children: [
      hasReceipt && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewReceiptSection, { receipt: data.receiptAttachment, stretchToFill: !hasSupportingFiles }),
      hasAffidavit && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAffidavitSection, { affidavit: data.affidavit }),
      hasSupportingFiles && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewSupportingFilesSection, { files: data.supportingFiles })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewExpenseDetailsSection, { data }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewExpenseJustificationSection, { data }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
};
const MileageTripPreview = ({ mileage }) => {
  const { data } = mileage;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 min-w-0", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
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
};
const MileagePeriodPreview = ({ mileage }) => {
  const { data } = mileage;
  const hasSupportingFiles = data.supportingFiles && data.supportingFiles.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 min-w-0", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
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
};
export {
  ExpensePreview as E,
  MileageTripPreview as M,
  isMileagePeriodData as a,
  MileagePeriodPreview as b,
  MileageFormType as c,
  formatExpensePeriod as d,
  formatExpenseDate as f,
  isMileageTripData as i,
  resolveFileUrl as r
};

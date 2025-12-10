import { importShared } from "./__federation_fn_import-Dfp15ceV.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { E as ExpensesList, s as statusBadgeConfig } from "./ExpensesList-CgcYDRC8.js";
import { o as os, b as as, A as An, l as ls, _ as _r, k as ks, d as apiClient, B as Bs, O as Oa, e as Aa, G as Ga, M as Me, f as Ba, $ as $r, g as Vr, z as zr, S as Sn } from "./axiosInstance-xjGYpGcd.js";
import { E as EXPENSE_DETAILS_SECTION, a as EXPENSE_JUSTIFICATION_SECTION, C as COST_ALLOCATION_SECTION, A as ADDITIONAL_COMMENTS_SECTION } from "./expense-form-sections-DNpn5Mf2.js";
import { E as ExpenseFormField, u as useFormFieldValues, a as useAmountAllocationSync, b as useReceiptCheckboxEffects, c as useExpenseFormLeftColumn, S as SupportingFiles, d as useExpenseFormHandlers, f as fullExpenseValidationStrategy, r as resolveFileUrl, C as ConfirmDialog } from "./SupportingFilesSection-D95rT2-k.js";
import { I as Icon } from "./Icon-Vfz6clKB.js";
import "./mileage-trip-sections-Y0_12Jm2.js";
import { c as createExpenseForm } from "./form-factory-B0yan-0u.js";
import { R as ReceiptSection } from "./ReceiptSection-DYO5a12j.js";
import { E as ECostAllocation } from "./cost-allocation-DRGo4_AN.js";
import { u as useNavigate, f as useParams, a as RoutePaths } from "./routes-KF3uw3NQ.js";
import { u as useQueryClient, k as useQuery, q as queryKeys } from "./query-keys-Be1EPRXW.js";
import { a as useMutation } from "./store-plLmYRCU.js";
import { E as EXPENSE_ENDPOINTS } from "./endpoints-B5IysDN2.js";
import { C as ChevronLeft } from "./chevron-left-Cu7uy4VX.js";
import { C as ChevronRight } from "./chevron-right-Bo9nemuH.js";
import { T as Trash2, S as Send } from "./trash-2-Bv8HVLZF.js";
const mapFullExpenseToDefaultValues = (initialData) => {
  return {
    [ExpenseFormField.ExpenseType]: (initialData == null ? void 0 : initialData.expenseType) ?? "",
    [ExpenseFormField.Vendor]: (initialData == null ? void 0 : initialData.vendor) ?? "",
    [ExpenseFormField.ExpenseDate]: (initialData == null ? void 0 : initialData.expenseDate) ?? "",
    [ExpenseFormField.ExpenseLocation]: (initialData == null ? void 0 : initialData.expenseLocation) ?? "",
    [ExpenseFormField.PaymentMethod]: (initialData == null ? void 0 : initialData.paymentMethod) ?? "",
    [ExpenseFormField.NetAmount]: (initialData == null ? void 0 : initialData.netAmount) ?? "",
    [ExpenseFormField.TotalAmount]: (initialData == null ? void 0 : initialData.totalAmount) ?? "",
    [ExpenseFormField.BusinessPurpose]: (initialData == null ? void 0 : initialData.businessPurpose) ?? "",
    [ExpenseFormField.ExpenseDescription]: (initialData == null ? void 0 : initialData.expenseDescription) ?? "",
    [ExpenseFormField.PersonsEntertained]: (initialData == null ? void 0 : initialData.personsEntertained) ?? "",
    [ExpenseFormField.AdditionalComments]: (initialData == null ? void 0 : initialData.additionalComments) ?? "",
    [ExpenseFormField.ReceiptAttachment]: (initialData == null ? void 0 : initialData.receiptAttachment) ?? null,
    [ExpenseFormField.IsReceiptUnavailable]: (initialData == null ? void 0 : initialData.isReceiptUnavailable) ?? false,
    [ExpenseFormField.Affidavit]: (initialData == null ? void 0 : initialData.affidavit) ?? null,
    [ExpenseFormField.SupportingFiles]: (initialData == null ? void 0 : initialData.supportingFiles) ?? [],
    [ExpenseFormField.IsDifferentCurrency]: (initialData == null ? void 0 : initialData.isDifferentCurrency) ?? false,
    [ExpenseFormField.NetCurrency]: (initialData == null ? void 0 : initialData.netCurrency) ?? { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.TotalCurrency]: (initialData == null ? void 0 : initialData.totalCurrency) ?? { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.CostAllocations]: (initialData == null ? void 0 : initialData.costAllocations) ?? [],
    [ExpenseFormField.IsEqualSplit]: (initialData == null ? void 0 : initialData.isEqualSplit) ?? false
  };
};
const useExpenseFormSync = ({
  control,
  setValue,
  getValues,
  watch
}) => {
  const { totalAmount } = useFormFieldValues(control, [
    ExpenseFormField.TotalAmount
  ]);
  useAmountAllocationSync({
    amount: parseFloat(totalAmount || "0"),
    setValue,
    getValues,
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
};
const ExpenseFormLeftColumn = ({
  control,
  setValue,
  getValues,
  isSubmitting,
  isDrafting,
  draftId,
  onSaveDraft
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "w-full h-full flex flex-col pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptSection,
      {
        control,
        isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
        receiptAttachment,
        shouldShowCheckbox: shouldShowReceiptCheckbox,
        onReceiptChange: handleReceiptChange,
        onUploadingChange: setIsReceiptUploading,
        disabled: isSubmitting
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SupportingFiles,
      {
        onFilesChange: handleSupportingFilesChange,
        initialFiles: supportingFiles || [],
        disabled: isSubmitting
      }
    ) })
  ] });
};
const FULL_EXPENSE_SECTIONS_CONFIG = [
  EXPENSE_DETAILS_SECTION,
  EXPENSE_JUSTIFICATION_SECTION,
  COST_ALLOCATION_SECTION,
  ADDITIONAL_COMMENTS_SECTION
];
const ExpenseForm = createExpenseForm({
  validationStrategy: fullExpenseValidationStrategy,
  sections: FULL_EXPENSE_SECTIONS_CONFIG,
  layout: "two-column",
  initialDataTransformer: mapFullExpenseToDefaultValues,
  leftColumnRenderer: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormLeftColumn, { ...params }),
  // A placeholder for error displaing in a form
  errorDisplayRenderer: ({ errors }) => {
    console.log(errors);
    return null;
  },
  customHook: useExpenseFormSync,
  handlersHook: useExpenseFormHandlers
});
ExpenseForm.displayName = "ExpenseForm";
const { useEffect: useEffect$1, useState: useState$1 } = await importShared("react");
const PreviewReceiptSection = ({ receipt, stretchToFill = false }) => {
  var _a;
  const [imageError, setImageError] = useState$1(false);
  useEffect$1(() => {
    setImageError(false);
  }, [receipt == null ? void 0 : receipt.id, receipt == null ? void 0 : receipt.blobUrl, receipt == null ? void 0 : receipt.url]);
  if (!receipt) {
    return null;
  }
  const isImage = (_a = receipt.mimeType) == null ? void 0 : _a.startsWith("image/");
  const isPdf = receipt.mimeType === "application/pdf";
  const fileUrl = resolveFileUrl(receipt.blobUrl, receipt.url);
  const handlePreviewClick = () => {
    if (fileUrl) {
      window.open(fileUrl, "_blank", "noopener,noreferrer");
    }
  };
  const handleImageError = () => {
    setImageError(true);
  };
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      An,
      {
        title: "RECEIPT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 justify-center items-center flex"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden bg-exp-neutral-30 border border-exp-primary-blue-100", children: [
      isImage && !imageError && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: fileUrl,
          alt: "Receipt",
          loading: "lazy",
          className: `w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity ${stretchToFill ? "" : "max-h-80"}`,
          onError: handleImageError,
          onClick: handlePreviewClick
        }
      ),
      isImage && imageError && renderImagePlaceholder(),
      isPdf && renderPdfPreview(),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      An,
      {
        title: "AFFIDAVIT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-exp-yellow-200 bg-exp-yellow-100 p-4", children: [
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
const PreviewField = ({ label, value, className = "" }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-xs text-exp-neutral-300 mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-normal text-sm text-exp-grey-900 wrap-break-word", children: value || "—" })
  ] });
};
const formatCurrency = (amount, currency) => {
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount)) return amount;
  const code = (currency == null ? void 0 : currency.code) ?? "CAD";
  return `$ ${numAmount.toFixed(2)} ${code}`;
};
const calculateTaxAmount = (netAmount, totalAmount) => {
  if (!netAmount || !totalAmount) return null;
  const net = parseFloat(netAmount);
  const total = parseFloat(totalAmount);
  if (isNaN(net) || isNaN(total)) return null;
  return total - net;
};
const PreviewExpenseDetailsSection = ({ data }) => {
  var _a, _b;
  const isForeignCurrency = data.isDifferentCurrency && ((_a = data.netCurrency) == null ? void 0 : _a.code) !== ((_b = data.totalCurrency) == null ? void 0 : _b.code);
  const taxAmount = calculateTaxAmount(data.netAmount, data.totalAmount);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      An,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense type", value: data.expenseType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Vendor", value: data.vendor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense date",
          value: data.expenseDate ? new Date(data.expenseDate).toLocaleDateString("en-CA") : void 0
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
      isForeignCurrency ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Receipt total",
            value: formatCurrency(data.netAmount, data.netCurrency)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Converted total",
            value: formatCurrency(data.totalAmount, data.totalCurrency)
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Receipt total",
          value: formatCurrency(data.totalAmount, data.totalCurrency)
        }
      ),
      taxAmount !== null && taxAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Tax amount",
          value: formatCurrency(taxAmount.toFixed(2), data.totalCurrency)
        }
      )
    ] }) })
  ] });
};
const PreviewExpenseJustificationSection = ({
  data
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      An,
      {
        title: "EXPENSE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: data.businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: data.expenseDescription })
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
      const code = (entityData == null ? void 0 : entityData.code) || "";
      const primaryText = poNumber ? supplier ? `${poNumber} ${supplier}` : poNumber : code || allocation.name;
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
      const number = (entityData == null ? void 0 : entityData.number) || (entityData == null ? void 0 : entityData.teamNumber) || "";
      const description = (entityData == null ? void 0 : entityData.description) || (entityData == null ? void 0 : entityData.teamName) || "";
      return {
        primaryText: number && description ? `${number} / ${description}` : allocation.name
      };
    }
    default:
      return { primaryText: allocation.name };
  }
};
const PreviewCostAllocationSection = ({
  allocations
}) => {
  if (!allocations || allocations.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      An,
      {
        title: "COST ALLOCATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: allocations.map((allocation, index) => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-right flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(_r, { className: "rounded-lg bg-exp-primary-blue-50 text-exp-neutral-900 hover:bg-exp-primary-blue-50", children: [
              "$ ",
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
  if (!files || files.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      An,
      {
        title: "SUPPORTING FILES",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-neutral-30 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: resolveFileUrl(file.blobUrl, file.url),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-2 px-2 py-1 bg-exp-primary-blue-50 rounded-lg w-fit group",
        children: [
          getFileIcon(file.mimeType),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-exp-neutral-700  group-hover:underline truncate", children: file.filename })
        ]
      },
      file.id
    )) }) })
  ] });
};
const PreviewAdditionalCommentsSection = ({
  comments
}) => {
  if (!comments) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      An,
      {
        title: "ADDITIONAL COMMENTS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-900 wrap-break-word", children: comments }) })
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
function isExpenseDraft(expense) {
  return expense.status === "draft";
}
function isSubmittedExpense(expense) {
  return expense.status !== "draft";
}
const useSaveExpenseDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, draftId }) => {
      const endpoint = draftId ? EXPENSE_ENDPOINTS.UPDATE_DRAFT(draftId) : EXPENSE_ENDPOINTS.SAVE_DRAFT;
      const method = draftId ? "put" : "post";
      const response = await apiClient[method](endpoint, { data });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save expense draft:", error);
      ks.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data }) => {
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.SUBMIT_EXPENSE,
        { data }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit expense:", error);
      ks.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useExpenseById = (expenseId) => {
  return useQuery({
    queryKey: expenseId ? queryKeys.expenses.detail(expenseId) : queryKeys.expenses.details(),
    queryFn: async () => {
      if (!expenseId) throw new Error("Expense ID is required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_EXPENSE_BY_ID(expenseId)
      );
      return response.data;
    },
    enabled: !!expenseId,
    staleTime: 60 * 1e3
  });
};
const useDeleteExpenseDraft = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (draftId) => {
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT(draftId));
    },
    onSuccess: () => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      ks.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      console.error("Failed to delete draft:", error);
      ks.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
const { useCallback, useEffect, useMemo, useRef, useState } = await importShared("react");
const ExpensePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const expenseFormRef = useRef(null);
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const isNewExpenseCheck = !id || id === "new";
  const [formKey, setFormKey] = useState(() => isNewExpenseCheck ? "new" : `loading-${id}`);
  const saveDraftMutation = useSaveExpenseDraft();
  const submitExpenseMutation = useSubmitExpense();
  const deleteDraftMutation = useDeleteExpenseDraft({
    onSuccess: () => {
      setIsDeleteDialogOpen(false);
      setTimeout(() => {
        navigate(RoutePaths.Expenses);
      }, 100);
    }
  });
  const isNewExpense = !id || id === "new";
  const {
    data: expenseData,
    error: expenseError,
    isLoading
  } = useExpenseById(isNewExpense ? null : id);
  const mode = useMemo(() => {
    if (isNewExpense) return "new";
    if (expenseData && isExpenseDraft(expenseData)) return "draft";
    if (expenseData && isSubmittedExpense(expenseData)) return "preview";
    return "new";
  }, [isNewExpense, expenseData]);
  const hasError = !isNewExpense && !!expenseError;
  useEffect(() => {
    if (hasError) {
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [hasError, navigate]);
  useEffect(() => {
    if (!isNewExpense && expenseData && isExpenseDraft(expenseData)) {
      setFormKey(`loaded-${id}`);
    }
  }, [isNewExpense, expenseData, id]);
  const expenseTitle = useMemo(() => {
    if (!expenseData) return "New Expense";
    if (mode === "preview") {
      return expenseData.data.vendor || "Expense";
    }
    if (mode === "draft") {
      return expenseData.data.vendor || "Draft Expense";
    }
    return "New Expense";
  }, [mode, expenseData]);
  const expenseAmount = useMemo(() => {
    if (!expenseData) return void 0;
    return expenseData.data.totalAmount;
  }, [expenseData]);
  const status = useMemo(() => {
    if (!expenseData) return void 0;
    return expenseData.status;
  }, [expenseData]);
  const statusBadge = status ? statusBadgeConfig[status] : void 0;
  const headerSubtitle = useMemo(() => {
    if (!expenseData) return void 0;
    if (mode === "preview" && isSubmittedExpense(expenseData)) {
      return `${expenseData.id} • Submitted on ${new Date(expenseData.submittedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })}`;
    }
    if (mode === "draft") {
      return `${id} • Created on ${new Date(expenseData.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })}`;
    }
    return void 0;
  }, [mode, expenseData, id]);
  const currentDraftId = mode === "draft" ? id : null;
  const handleSubmit = async (data) => {
    try {
      await submitExpenseMutation.mutateAsync({ data });
      navigate(RoutePaths.Expenses);
    } catch (error) {
      console.error("Failed to submit expense:", error);
    }
  };
  const handleSaveDraft = async (data) => {
    try {
      const result = await saveDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId || void 0
      });
      if (result.id && !currentDraftId) {
        navigate(`/expenses/${result.id}`, { replace: true });
      }
    } catch (error) {
      console.error("Failed to save draft:", error);
    }
  };
  const handleDeleteDraft = () => {
    if (!currentDraftId) return;
    setIsDeleteDialogOpen(true);
  };
  const handleDeleteConfirm = () => {
    if (!currentDraftId) return;
    deleteDraftMutation.mutate(currentDraftId);
  };
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
  };
  const handleDeleteDialogOpenChange = (open) => {
    if (!open && deleteDraftMutation.isPending) {
      return;
    }
    setIsDeleteDialogOpen(open);
  };
  const handleOpenChange = (open) => {
    if (!open) {
      navigate(RoutePaths.Expenses);
    }
  };
  const handleSaveDraftClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = expenseFormRef.current) == null ? void 0 : _a.saveDraft();
  };
  const handleSubmitClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = expenseFormRef.current) == null ? void 0 : _a.submitForm();
  };
  const handleButtonStateChange = useCallback((submitState, draftState) => {
    setSubmitButtonState(submitState);
    setSaveDraftButtonState(draftState);
  }, []);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-8 text-exp-primary-blue-600" }) });
    }
    if (mode === "preview" && expenseData && isSubmittedExpense(expenseData)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensePreview, { expense: expenseData });
    }
    const initialData = expenseData && isExpenseDraft(expenseData) ? expenseData.data : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseForm,
      {
        ref: expenseFormRef,
        onSubmit: handleSubmit,
        onSaveDraft: handleSaveDraft,
        onDraftSaved: () => {
        },
        initialData,
        draftId: currentDraftId,
        isSubmitting: submitExpenseMutation.isPending,
        isDrafting: saveDraftMutation.isPending,
        draftSaveError: saveDraftMutation.isError,
        onButtonStateChange: handleButtonStateChange
      },
      formKey
    );
  };
  const renderFooter = () => {
    if (mode === "preview") {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: currentDraftId && /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Me,
          {
            type: "button",
            variant: "ghost",
            onClick: handleDeleteDraft,
            className: "text-red-600 hover:text-red-700",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }),
              "Delete"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { className: "text-sm", children: "Delete draft" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Me,
            {
              type: "button",
              variant: "outlined",
              onClick: handleSaveDraftClick,
              disabled: saveDraftButtonState.disabled,
              children: saveDraftMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-5" }),
                "Save Draft"
              ] }) : "Save Draft"
            }
          ) }) }),
          saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: saveDraftButtonState.tooltip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Vr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Me,
            {
              type: "button",
              variant: "primary",
              onClick: handleSubmitClick,
              disabled: submitButtonState.disabled,
              children: [
                submitExpenseMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                "Submit Expense"
              ]
            }
          ) }) }),
          submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { className: "text-sm", children: submitButtonState.tooltip })
        ] })
      ] })
    ] }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bs, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Aa, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { className: "text-exp-neutral-900 text-xl font-bold", children: expenseTitle }),
            expenseAmount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
              "$",
              expenseAmount
            ] }),
            statusBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(_r, { variant: "outline", className: `rounded-20! ${statusBadge.bgColor} ${statusBadge.textColor}`, children: statusBadge.label })
          ] }),
          headerSubtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: headerSubtitle }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-38px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Me, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Me, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: renderContent() }),
        renderFooter()
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: handleDeleteDialogOpenChange,
        title: "Delete draft",
        description: "Are you sure you want to delete this expense draft? This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: deleteDraftMutation.isPending
      }
    )
  ] });
};
export {
  ExpensePage as default
};

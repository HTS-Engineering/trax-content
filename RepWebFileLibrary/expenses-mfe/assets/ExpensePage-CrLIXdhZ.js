import { importShared } from "./__federation_fn_import-CFnudcB9.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-DLKWXVrv.js";
import { E as ExpensesList } from "./ExpensesList-t4Kt9t33.js";
import { c as createLucideIcon, U, J as Jn, t as tr, Q as Qn, a as tt, Y as Yn, F as Fn, N as Nn, $ as $n, D as Dn, P as Pn, V as Vn, b as Pr, L as Ln, H as Hn, k as kn, A as An } from "./createLucideIcon-CfH1iyFR.js";
import { I as Icon } from "./Icon-CPUYJCTZ.js";
import { L as LoadingSpinner, u as useQueryClient } from "./LoadingSpinner-CJp2omDf.js";
import { A as AllowedMimeType, v as validateReceiptFile, g as generateAcceptAttribute, a as getFilePreviewType, F as FilePreviewType, b as getSupportedFormatsText } from "./receipt-DG4zSVnR.js";
import { d as apiClient, R as RoutePaths } from "./axiosInstance-BiB8Ce56.js";
import { u as useMutation } from "./useMutation-eZm-mCcH.js";
import { F as FileText, C as ChartColumn, a as CreditCard, u as useNavigate, b as ChevronRight } from "./file-text-azDgsO3u.js";
import { S as Send } from "./send-Dqyf82OZ.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$2);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
];
const FileSpreadsheet = createLucideIcon("file-spreadsheet", __iconNode$1);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }]
];
const MessageSquareMore = createLucideIcon("message-square-more", __iconNode);
const UPLOAD_TIMEOUT = 12e4;
const MAX_RETRIES = 2;
const uploadReceiptFile = async (file, onProgress, retryCount = 0) => {
  var _a, _b, _c;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", "receipt");
  formData.append("originalName", file.name);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT);
  try {
    const response = await apiClient.post(
      "/files/receipts",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        signal: controller.signal,
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) {
            const percentage = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            onProgress({
              loaded: progressEvent.loaded,
              total: progressEvent.total,
              percentage
            });
          }
        }
      }
    );
    clearTimeout(timeoutId);
    return response.data.data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "CanceledError" || error.code === "ECONNABORTED") {
      throw new Error("Upload timeout. Please check your connection and try again.");
    }
    const status = (_a = error.response) == null ? void 0 : _a.status;
    const message = (_c = (_b = error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message;
    switch (status) {
      case 413:
        throw new Error("File size too large. Please choose a smaller file.");
      case 415:
        throw new Error("Unsupported file type. Please upload a PNG, JPG, or PDF file.");
      case 422:
        throw new Error(message || "File validation failed.");
      case 500:
      case 502:
      case 503:
      case 504:
        if (retryCount < MAX_RETRIES) {
          const delay = Math.min(1e3 * Math.pow(2, retryCount), 5e3);
          await new Promise((resolve) => setTimeout(resolve, delay));
          return uploadReceiptFile(file, onProgress, retryCount + 1);
        }
        throw new Error("Server error. Please try again later.");
      case 401:
      case 403:
        throw new Error("Authentication failed. Please log in again.");
      default:
        throw new Error(message || "Upload failed. Please try again.");
    }
  }
};
const deleteReceiptFile = async (receiptId) => {
  var _a, _b;
  try {
    await apiClient.delete(`/files/receipts/${receiptId}`);
  } catch (error) {
    console.error("Failed to delete receipt:", error);
    throw new Error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to delete receipt");
  }
};
const PREVIEWABLE_MIME_TYPES = /* @__PURE__ */ new Set([
  AllowedMimeType.PNG,
  AllowedMimeType.JPEG,
  AllowedMimeType.JPG,
  AllowedMimeType.PDF
]);
const canPreviewFile = (attachment) => {
  return PREVIEWABLE_MIME_TYPES.has(attachment.mimeType);
};
const BLOB_URL_CLEANUP_DELAY = 5e3;
const BLOB_URL_REGISTRY = /* @__PURE__ */ new WeakMap();
const registerBlobUrl = (window2, url) => {
  var _a;
  if (!BLOB_URL_REGISTRY.has(window2)) {
    BLOB_URL_REGISTRY.set(window2, /* @__PURE__ */ new Set());
  }
  (_a = BLOB_URL_REGISTRY.get(window2)) == null ? void 0 : _a.add(url);
};
const cleanupBlobUrl = (url) => {
  try {
    URL.revokeObjectURL(url);
  } catch (error) {
    console.warn("Failed to revoke blob URL:", error);
  }
};
const openFilePreview = async (attachment) => {
  const previewUrl = attachment.blobUrl || attachment.url;
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
    const newWindow = window.open(previewUrl, "_blank", "noopener,noreferrer");
    if (newWindow && previewUrl.startsWith("blob:")) {
      registerBlobUrl(newWindow, previewUrl);
    }
    return;
  }
  if (previewUrl.startsWith("https://storage.yourapp.com/")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3e4);
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
      const newWindow = window.open(blobUrl, "_blank", "noopener,noreferrer");
      if (newWindow) {
        registerBlobUrl(newWindow, blobUrl);
        newWindow.addEventListener("beforeunload", () => cleanupBlobUrl(blobUrl), { once: true });
        setTimeout(() => cleanupBlobUrl(blobUrl), BLOB_URL_CLEANUP_DELAY);
      } else {
        cleanupBlobUrl(blobUrl);
      }
    } catch (error) {
      console.error("Failed to open file preview:", error);
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    }
    return;
  }
  window.open(previewUrl, "_blank", "noopener,noreferrer");
};
const React = await importShared("react");
const { useCallback, useEffect, useRef: useRef$1, useState: useState$1 } = React;
const ReceiptUpload = ({
  onReceiptChange,
  initialReceipt,
  disabled = false,
  className = ""
}) => {
  const fileInputRef = useRef$1(null);
  const [uploadState, setUploadState] = useState$1({
    attachment: initialReceipt,
    isUploading: false,
    error: void 0,
    dragActive: false
  });
  const [_uploadProgress, setUploadProgress] = useState$1(0);
  const blobUrlsRef = useRef$1(/* @__PURE__ */ new Set());
  useEffect(() => {
    return () => {
      blobUrlsRef.current.forEach((url) => {
        try {
          URL.revokeObjectURL(url);
        } catch (error) {
          console.warn("Failed to revoke blob URL on cleanup:", error);
        }
      });
      blobUrlsRef.current.clear();
    };
  }, []);
  const handleError = useCallback((error) => {
    setUploadState((prev) => ({
      ...prev,
      error,
      isUploading: false
    }));
  }, []);
  const handleFileUpload = useCallback(async (file) => {
    const validationError = validateReceiptFile(file);
    if (validationError) {
      handleError(validationError);
      return;
    }
    setUploadState((prev) => ({
      ...prev,
      error: void 0,
      isUploading: true,
      attachment: void 0
    }));
    setUploadProgress(0);
    try {
      const uploadResponse = await uploadReceiptFile(file, (progress) => {
        setUploadProgress(progress.percentage);
      });
      const newAttachment = {
        id: uploadResponse.id,
        url: uploadResponse.url,
        blobUrl: uploadResponse.blobUrl,
        filename: uploadResponse.filename,
        originalName: file.name,
        size: file.size,
        type: uploadResponse.type,
        mimeType: uploadResponse.mimeType,
        uploadedAt: uploadResponse.uploadedAt,
        status: "uploaded"
      };
      if (uploadResponse.blobUrl) {
        blobUrlsRef.current.add(uploadResponse.blobUrl);
      }
      setUploadState((prev) => ({
        ...prev,
        attachment: newAttachment,
        isUploading: false,
        error: void 0
      }));
      onReceiptChange == null ? void 0 : onReceiptChange(newAttachment);
    } catch (error) {
      handleError({
        type: "network",
        message: error.message || "Upload failed",
        details: error.toString()
      });
    }
  }, [handleError, onReceiptChange]);
  const handleFileSelect = useCallback((event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      handleFileUpload(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [handleFileUpload]);
  const handleChooseFileClick = useCallback(() => {
    var _a;
    if (disabled || uploadState.isUploading) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [disabled, uploadState.isUploading]);
  const handleDeleteReceipt = useCallback(async () => {
    if (!uploadState.attachment || disabled) return;
    try {
      await deleteReceiptFile(uploadState.attachment.id);
      if (uploadState.attachment.blobUrl) {
        blobUrlsRef.current.delete(uploadState.attachment.blobUrl);
        try {
          URL.revokeObjectURL(uploadState.attachment.blobUrl);
        } catch (error) {
          console.warn("Failed to revoke blob URL:", error);
        }
      }
      setUploadState((prev) => ({
        ...prev,
        attachment: void 0,
        error: void 0
      }));
      onReceiptChange == null ? void 0 : onReceiptChange(void 0);
    } catch (error) {
      handleError({
        type: "network",
        message: "Failed to delete receipt",
        details: error.message
      });
    }
  }, [uploadState.attachment, disabled, handleError, onReceiptChange]);
  const handlePreviewClick = useCallback(async () => {
    if (uploadState.attachment) {
      try {
        await openFilePreview(uploadState.attachment);
      } catch (error) {
        console.error("Failed to open preview:", error);
      }
    }
  }, [uploadState.attachment]);
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    if (!disabled && !uploadState.isUploading) {
      setUploadState((prev) => ({ ...prev, dragActive: true }));
    }
  }, [disabled, uploadState.isUploading]);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setUploadState((prev) => ({ ...prev, dragActive: false }));
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setUploadState((prev) => ({ ...prev, dragActive: false }));
    if (disabled || uploadState.isUploading) return;
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [disabled, uploadState.isUploading, handleFileUpload]);
  const renderUploadingState = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-8 text-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-14" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600 font-normal", children: "Uploading file..." })
  ] });
  const renderErrorState = () => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: (_a = uploadState.error) == null ? void 0 : _a.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(U, { variant: "soft", size: "sm", onClick: handleChooseFileClick, children: "Choose file" })
    ] });
  };
  const renderUploadedState = () => {
    const { attachment } = uploadState;
    if (!attachment) return null;
    const previewType = getFilePreviewType(attachment.mimeType);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: attachment.blobUrl || attachment.url,
          alt: attachment.originalName,
          className: "w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity",
          onClick: handlePreviewClick,
          onError: (_e) => {
            console.warn("Image failed to load:", attachment.blobUrl || attachment.url);
          }
        }
      ) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-48 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors gap-1",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pdf-file-green-check", className: "size-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-grey-700 text-center", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: "PDF preview isn't available." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-48 flex flex-col items-center justify-center bg-trax-neutral-50 border-2 border-trax-neutral-100 rounded-lg cursor-pointer hover:bg-trax-neutral-100 transition-colors",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text-line-unknown", className: "w-12 h-12 text-trax-neutral-400 mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-trax-neutral-700", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-trax-neutral-500", children: "File preview isn't available." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full absolute bottom-0 left-0 right-0 pb-4 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          U,
          {
            variant: "ghost",
            onClick: handlePreviewClick,
            className: "rounded-full !bg-white/70 !backdrop-blur-2xl",
            title: "Preview file",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 " })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          U,
          {
            variant: "error-ghost",
            onClick: handleDeleteReceipt,
            className: "rounded-full !bg-white/70",
            title: "Delete receipt",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-5 text-exp-red-500" })
          }
        )
      ] })
    ] });
  };
  const renderEmptyState = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg transition-colors ${uploadState.dragActive ? "border-trax-blue-400 bg-trax-blue-50" : "border-trax-neutral-300 hover:border-trax-neutral-400"}`,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "size-14 text-exp-teal-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: getSupportedFormatsText() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            U,
            {
              variant: "soft",
              size: "sm",
              onClick: handleChooseFileClick,
              disabled,
              children: "Choose file"
            }
          )
        ] })
      ] })
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${className}`, children: [
    uploadState.isUploading && renderUploadingState(),
    uploadState.error && renderErrorState(),
    uploadState.attachment && !uploadState.isUploading && !uploadState.error && renderUploadedState(),
    !uploadState.attachment && !uploadState.isUploading && !uploadState.error && renderEmptyState(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: generateAcceptAttribute(),
        onChange: handleFileSelect,
        className: "hidden",
        disabled
      }
    )
  ] });
};
const createEmptyExpenseFormData = () => ({
  expenseType: "",
  vendor: "",
  expenseDate: "",
  expenseLocation: "",
  paymentMethod: "",
  netAmount: "",
  totalAmount: "",
  businessPurpose: "",
  expenseDescription: "",
  personsEntertained: "",
  additionalComments: "",
  receiptAttachment: void 0,
  isReceiptUnavailable: false,
  isDifferentCurrency: false,
  netCurrency: { code: "USD", locale: "en-US" },
  totalCurrency: { code: "CAD", locale: "en-CA" },
  costAllocations: [
    {
      id: "1",
      name: "Project",
      percentage: 0,
      amount: 0,
      type: "project"
    },
    {
      id: "2",
      name: "Admin",
      percentage: 0,
      amount: 0,
      type: "admin"
    },
    {
      id: "3",
      name: "CCB Team",
      percentage: 0,
      amount: 0,
      type: "team"
    },
    {
      id: "4",
      name: "CCB Rep",
      percentage: 0,
      amount: 0,
      type: "team"
    }
  ]
});
const validateExpenseForm = (data) => {
  const errors = [];
  if (!data.expenseType) errors.push("Expense type is required");
  if (!data.vendor) errors.push("Vendor is required");
  if (!data.expenseDate) errors.push("Expense date is required");
  if (!data.paymentMethod) errors.push("Payment method is required");
  if (!data.businessPurpose) errors.push("Business purpose is required");
  const netAmount = parseFloat(data.netAmount);
  const totalAmount = parseFloat(data.totalAmount);
  if (isNaN(netAmount) || netAmount <= 0) {
    errors.push("Valid net amount is required");
  }
  if (isNaN(totalAmount) || totalAmount <= 0) {
    errors.push("Valid total amount is required");
  }
  if (!data.isReceiptUnavailable && !data.receiptAttachment) {
    errors.push("Receipt is required or mark as unavailable");
  }
  const totalPercentage = data.costAllocations.reduce((sum, allocation) => sum + allocation.percentage, 0);
  if (Math.abs(totalPercentage - 100) > 0.01) {
    errors.push("Cost allocation must total 100%");
  }
  return {
    isValid: errors.length === 0,
    errors
  };
};
const simulateApiDelay = (ms = 1e3) => {
  {
    return Promise.resolve();
  }
};
const useSaveReceiptDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ companyId, data }) => {
      await simulateApiDelay(800);
      try {
        const response = await apiClient.post(
          companyId ? `/companies/${companyId}/receipt-drafts` : "/receipt-drafts",
          data
        );
        return response.data.data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (savedDraft) => {
      queryClient.invalidateQueries({ queryKey: ["receipt-drafts"] });
      console.log("Receipt draft saved successfully:", savedDraft);
    },
    onError: (error) => {
      console.error("Failed to save receipt draft:", error);
    }
  });
};
const { forwardRef, useImperativeHandle, useState } = await importShared("react");
const ExpenseForm = forwardRef(({
  onSubmit,
  onSaveDraft,
  // onCancel,
  initialData
  // isSubmitting = false,
  // isDrafting = false,
}, ref) => {
  const [formData, setFormData] = useState(() => ({
    ...createEmptyExpenseFormData(),
    ...initialData
  }));
  const [formErrors, setFormErrors] = useState([]);
  const saveReceiptDraftMutation = useSaveReceiptDraft();
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors.length > 0) {
      setFormErrors([]);
    }
  };
  const handleReceiptChange = (attachment) => {
    setFormData((prev) => ({ ...prev, receiptAttachment: attachment }));
    if (formErrors.length > 0) {
      setFormErrors([]);
    }
  };
  const handleReceiptUnavailableChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      isReceiptUnavailable: checked,
      receiptAttachment: checked ? void 0 : prev.receiptAttachment
    }));
    if (formErrors.length > 0) {
      setFormErrors([]);
    }
  };
  const handleFormSubmit = () => {
    const validation = validateExpenseForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }
    onSubmit == null ? void 0 : onSubmit(formData);
  };
  const handleSaveDraft = async () => {
    const receiptData = {
      receiptAttachment: formData.receiptAttachment || null,
      isReceiptUnavailable: formData.isReceiptUnavailable
    };
    try {
      await saveReceiptDraftMutation.mutateAsync({
        data: receiptData
      });
      onSaveDraft == null ? void 0 : onSaveDraft(formData);
    } catch (error) {
      console.error("Failed to save receipt draft:", error);
      onSaveDraft == null ? void 0 : onSaveDraft(formData);
    }
  };
  const expenseTypeOptions = [
    { value: "travel", label: "Travel" },
    { value: "meals", label: "Meals & Entertainment" },
    { value: "supplies", label: "Office Supplies" },
    { value: "software", label: "Software & Subscriptions" },
    { value: "other", label: "Other" }
  ];
  const paymentMethodOptions = [
    { value: "ca6252", label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 text-trax-neutral-1000" }),
      "CA****6252"
    ] }) },
    { value: "ca1234", label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 text-exp-yellow-y-700" }),
      "CA****1234"
    ] }) },
    { value: "cash", label: "Cash" },
    { value: "personal", label: "Personal Card" }
  ];
  const expenseLocationOptions = [
    { value: "ontario-canada", label: "Ontario, Canada" },
    { value: "british-columbia", label: "British Columbia, Canada" },
    { value: "alberta", label: "Alberta, Canada" },
    { value: "quebec", label: "Quebec, Canada" }
  ];
  const currencyOptions = [
    { code: "USD", locale: "en-US" },
    { code: "CAD", locale: "en-CA" },
    { code: "EUR", locale: "de-DE" }
  ];
  const handleCurrencyInputChange = (field, value) => {
    handleInputChange(field, value);
  };
  const handleCurrencyChange = (field, currency) => {
    handleInputChange(field, currency);
  };
  const handleDifferentCurrencyChange = (checked) => {
    handleInputChange("isDifferentCurrency", checked);
  };
  useImperativeHandle(ref, () => ({
    submitForm: handleFormSubmit,
    saveDraft: handleSaveDraft,
    getFormData: () => formData,
    validateForm: () => validateExpenseForm(formData)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    formErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Jn, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(tr, { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Please correct the following errors:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1", children: formErrors.map((error, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm", children: error }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Jn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Qn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            tt,
            {
              iconClassName: "bg-exp-yellow-001",
              title: "RECEIPT",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-neutral-950" }),
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Yn,
            {
              label: "Unavailable",
              checked: formData.isReceiptUnavailable,
              onCheckedChange: handleReceiptUnavailableChange
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(tr, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReceiptUpload,
          {
            onReceiptChange: handleReceiptChange,
            initialReceipt: formData.receiptAttachment,
            disabled: formData.isReceiptUnavailable
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Jn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Qn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          tt,
          {
            title: "EXPENSE DETAILS",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-trax-neutral-950" }),
            required: true
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(tr, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Fn,
            {
              label: "Expense type",
              placeholder: "Select expense type",
              options: expenseTypeOptions,
              value: formData.expenseType,
              onValueChange: (id) => handleInputChange("expenseType", id)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Nn,
            {
              label: "Vendor",
              placeholder: "Enter vendor name",
              value: formData.vendor,
              onChange: (e) => handleInputChange("vendor", e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            $n,
            {
              label: "Expense date",
              placeholder: "Select date expense incurred",
              value: formData.expenseDate || void 0,
              onChange: (date) => handleInputChange("expenseDate", date || "")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Fn,
            {
              label: "Expense location",
              placeholder: "Select location",
              options: expenseLocationOptions,
              value: formData.expenseLocation,
              onValueChange: (value) => handleInputChange("expenseLocation", value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Fn,
            {
              label: "Payment method",
              placeholder: "Select payment method",
              options: paymentMethodOptions,
              value: formData.paymentMethod,
              onValueChange: (value) => handleInputChange("paymentMethod", value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Dn,
              {
                label: formData.isDifferentCurrency ? "Total (foreign)" : "NET/HST Amount",
                placeholder: "0.00",
                currencyCode: formData.netCurrency.code,
                locale: formData.netCurrency.locale,
                symbolStyle: "narrow",
                value: formData.netAmount,
                onChange: (e) => handleCurrencyInputChange("netAmount", e.target.value),
                enableCurrencySelector: formData.isDifferentCurrency,
                currencyOptions,
                onCurrencyChange: (currency) => handleCurrencyChange("netCurrency", currency)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Dn,
              {
                label: formData.isDifferentCurrency ? "Total (converted)" : "Total (including taxes)",
                placeholder: "0.00",
                currencyCode: formData.totalCurrency.code,
                locale: formData.totalCurrency.locale,
                symbolStyle: "narrow",
                value: formData.totalAmount,
                onChange: (e) => handleCurrencyInputChange("totalAmount", e.target.value),
                enableCurrencySelector: formData.isDifferentCurrency,
                currencyOptions,
                onCurrencyChange: (currency) => handleCurrencyChange("totalCurrency", currency)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { label: "Expense made in a different currency", checked: formData.isDifferentCurrency, onCheckedChange: handleDifferentCurrencyChange })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Jn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Qn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        tt,
        {
          iconClassName: "bg-trax-blue-100",
          title: "EXPENSE JUSTIFICATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(tr, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Fn,
          {
            label: "Business purpose",
            placeholder: "Specify what this expense was for",
            options: expenseTypeOptions,
            value: formData.businessPurpose,
            onValueChange: (value) => handleInputChange("businessPurpose", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pn,
          {
            label: "Expense description",
            placeholder: "Describe what was purchased",
            rows: 1,
            value: formData.expenseDescription,
            onChange: (e) => handleInputChange("expenseDescription", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pn,
          {
            label: "Persons entertained",
            placeholder: "Enter the full names of clients/guests entertained",
            rows: 1,
            value: formData.personsEntertained,
            onChange: (e) => handleInputChange("personsEntertained", e.target.value)
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Jn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Qn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        tt,
        {
          iconClassName: "bg-trax-yellow-600",
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(tr, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Vn,
        {
          allocations: formData.costAllocations,
          totalAmount: parseFloat(formData.totalAmount) || 0,
          currency: formData.totalCurrency.code,
          showAddButton: false,
          onAddAllocation: () => {
            console.log("Add allocation clicked");
          },
          onRemoveAllocation: (id) => {
            const updatedAllocations = formData.costAllocations.filter((a) => a.id !== id);
            handleInputChange("costAllocations", updatedAllocations);
          }
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Jn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Qn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        tt,
        {
          iconClassName: "bg-trax-violet-100",
          title: "ADDITIONAL COMMENTS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareMore, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(tr, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pn,
        {
          placeholder: "Add any additional comments...",
          rows: 1,
          value: formData.additionalComments,
          onChange: (e) => handleInputChange("additionalComments", e.target.value)
        }
      ) }) })
    ] })
  ] });
});
const { useRef } = await importShared("react");
const NewExpensePage = () => {
  const navigate = useNavigate();
  const expenseFormRef = useRef(null);
  const handleSubmit = (data) => {
    console.log("Expense submitted:", data);
    navigate(RoutePaths.Expenses);
  };
  const handleSaveDraft = (data) => {
    console.log("Full expense draft saved:", data);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ln, { className: "max-w-4xl max-h-[90vh] overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hn, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(kn, { className: "text-exp-neutral-950", children: "New Expense" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-24px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(U, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(U, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExpenseForm,
          {
            ref: expenseFormRef,
            onSubmit: handleSubmit,
            onSaveDraft: handleSaveDraft
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(An, { className: "pt-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(U, { type: "button", variant: "outlined", onClick: handleSaveDraftClick, children: "Save Draft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(U, { type: "button", variant: "primary", disabled: true, className: "opacity-50 cursor-not-allowed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
            "Submit Expense (Coming Soon)"
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  NewExpensePage as default
};

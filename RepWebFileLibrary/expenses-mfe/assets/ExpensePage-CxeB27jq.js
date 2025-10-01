import { importShared } from "./__federation_fn_import-CFnudcB9.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-DLKWXVrv.js";
import { E as ExpensesList } from "./ExpensesList-Cz8AoCuh.js";
import { c as createLucideIcon, y as ya, C as Ca, R as Ra, N as Na, F as Fa, _ as _a, D as De, m as ma, w as wa, h as ha, x as xn, p as pa, B as Bo, O as Oo, G as Go, X as Xo, j as jo, Y as Yo, J as Ja, Z as Zo, a as Jo, e as ea, Q as Qo } from "./createLucideIcon-Cx5kkPig.js";
import { I as Icon } from "./Icon-CPUYJCTZ.js";
import { L as LoadingSpinner, u as useQueryClient } from "./LoadingSpinner-CJp2omDf.js";
import { A as AllowedMimeType, v as validateReceiptFile, g as generateAcceptAttribute, a as getFilePreviewType, F as FilePreviewType, b as getSupportedFormatsText } from "./receipt-DLrGlexy.js";
import { d as apiClient, R as RoutePaths } from "./axiosInstance-BiB8Ce56.js";
import { u as useMutation } from "./useMutation-eZm-mCcH.js";
import { F as FileText, C as ChartColumn, a as CreditCard, u as useNavigate, b as ChevronRight } from "./file-text-D-1Vmcw6.js";
import { S as Send } from "./send-D8pJQYWU.js";
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
await importShared("react");
const ConfirmDialog = ({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false,
  variant = "error",
  confirmButtonClassName = "",
  cancelButtonClassName = ""
}) => {
  const handleConfirm = async () => {
    await onConfirm();
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onOpenChange(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ya, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ca, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Ra, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Na, { className: "text-base font-semibold text-exp-neutral-600", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Fa, { className: "text-sm font-normal text-exp-grey-600", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(_a, { className: "gap-3 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        De,
        {
          variant: "soft",
          onClick: handleCancel,
          disabled: isLoading,
          className: `min-w-20 ${cancelButtonClassName}`,
          children: cancelLabel
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        De,
        {
          variant,
          onClick: handleConfirm,
          disabled: isLoading,
          className: `min-w-20 ${confirmButtonClassName}`,
          children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }) : confirmLabel
        }
      )
    ] })
  ] }) });
};
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
const sanitizeFileName = (fileName) => {
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
};
const sanitizeUrl = (url) => {
  if (!url || typeof url !== "string") {
    return null;
  }
  const trimmedUrl = url.trim();
  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(trimmedUrl)) {
      console.warn("Potentially dangerous URL detected:", trimmedUrl);
      return null;
    }
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
};
const validateFileContent = async (file) => {
  var _a2;
  const fileSignatures = [
    {
      mimeTypes: [AllowedMimeType.PNG],
      signatures: [new Uint8Array([137, 80, 78, 71])],
      // .PNG
      description: "PNG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.JPEG, AllowedMimeType.JPG],
      signatures: [
        new Uint8Array([255, 216, 255, 224]),
        // JPEG/JFIF
        new Uint8Array([255, 216, 255, 225]),
        // JPEG/Exif
        new Uint8Array([255, 216, 255, 226]),
        // JPEG/Canon
        new Uint8Array([255, 216, 255, 232]),
        // JPEG/SPIFF
        new Uint8Array([255, 216, 255, 219])
        // JPEG/Quantization
      ],
      description: "JPEG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.PDF],
      signatures: [new Uint8Array([37, 80, 68, 70])],
      // %PDF
      description: "PDF document signature"
    },
    {
      mimeTypes: [AllowedMimeType.WEBP],
      signatures: [
        new Uint8Array([82, 73, 70, 70])
        // RIFF
      ],
      description: "WebP image signature (RIFF container)"
    },
    {
      mimeTypes: [AllowedMimeType.HEIF, AllowedMimeType.HEIC],
      signatures: [
        new Uint8Array([0, 0, 0, 24, 102, 116, 121, 112]),
        // ftyp box
        new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112])
        // ftyp box variant
      ],
      description: "HEIF/HEIC image signature"
    }
  ];
  try {
    const arrayBuffer = await file.slice(0, 12).arrayBuffer();
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
    if (detectedType === AllowedMimeType.WEBP) {
      const webpCheck = new Uint8Array([87, 69, 66, 80]);
      const webpMatches = webpCheck.every((byte, index) => bytes[index + 8] === byte);
      if (!webpMatches) {
        detectedType = null;
      }
    }
    if (!detectedType) {
      const allowedUnverifiableTypes = [
        AllowedMimeType.HEIF,
        AllowedMimeType.HEIC,
        AllowedMimeType.WEBP
      ];
      if (allowedUnverifiableTypes.includes(file.type)) {
        console.warn("Cannot verify file signature for:", file.type, "Allowing based on extension.");
        return { isValid: true, actualMimeType: file.type };
      }
      return {
        isValid: false,
        message: "Unknown file format. File content does not match any supported format."
      };
    }
    const expectedTypes = ((_a2 = fileSignatures.find(
      (s) => s.mimeTypes.includes(detectedType)
    )) == null ? void 0 : _a2.mimeTypes) || [];
    if (expectedTypes.includes(file.type)) {
      return { isValid: true, actualMimeType: detectedType };
    }
    return {
      isValid: false,
      actualMimeType: detectedType,
      message: `File type mismatch. File appears to be ${detectedType} but was declared as ${file.type}`
    };
  } catch (error) {
    console.error("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
};
const createSafeFileMetadata = (file, response) => {
  var _a2;
  return {
    id: response.id || `receipt-${Date.now()}`,
    url: sanitizeUrl(response.url) || "",
    blobUrl: response.blobUrl ? sanitizeUrl(response.blobUrl) : void 0,
    filename: sanitizeFileName(response.filename || file.name),
    originalName: sanitizeFileName(file.name),
    size: Math.min(file.size, Number.MAX_SAFE_INTEGER),
    type: ((_a2 = response.type) == null ? void 0 : _a2.replace(/[^a-zA-Z0-9]/g, "")) || "unknown",
    mimeType: file.type,
    uploadedAt: new Date(response.uploadedAt || Date.now()).toISOString(),
    status: "uploaded"
  };
};
const rateLimitMap = /* @__PURE__ */ new Map();
const checkRateLimit = (key, maxRequests = 5, windowMs = 6e4) => {
  const now = Date.now();
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
};
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 6e4);
const UPLOAD_TIMEOUT = 12e4;
const MAX_RETRIES = 2;
const uploadReceiptFile = async (file, onProgress, retryCount = 0) => {
  var _a2, _b, _c;
  const userKey = "global_upload";
  if (!checkRateLimit(userKey, 10, 6e4)) {
    throw new Error("Too many upload attempts. Please wait before trying again.");
  }
  const validationResult = await validateFileContent(file);
  if (!validationResult.isValid) {
    throw new Error(validationResult.message || "File content does not match the declared type.");
  }
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
    const status = (_a2 = error.response) == null ? void 0 : _a2.status;
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
  var _a2, _b;
  try {
    await apiClient.delete(`/files/receipts/${receiptId}`);
  } catch (error) {
    console.error("Failed to delete receipt:", error);
    throw new Error(((_b = (_a2 = error.response) == null ? void 0 : _a2.data) == null ? void 0 : _b.message) || "Failed to delete receipt");
  }
};
const PREVIEWABLE_MIME_TYPES = /* @__PURE__ */ new Set([
  AllowedMimeType.PNG,
  AllowedMimeType.JPEG,
  AllowedMimeType.JPG,
  AllowedMimeType.PDF,
  AllowedMimeType.WEBP
]);
const canPreviewFile = (attachment) => {
  return PREVIEWABLE_MIME_TYPES.has(attachment.mimeType);
};
const BLOB_URL_CLEANUP_DELAY = 5e3;
const BLOB_URL_REGISTRY = /* @__PURE__ */ new WeakMap();
const registerBlobUrl = (window2, url) => {
  var _a2;
  if (!BLOB_URL_REGISTRY.has(window2)) {
    BLOB_URL_REGISTRY.set(window2, /* @__PURE__ */ new Set());
  }
  (_a2 = BLOB_URL_REGISTRY.get(window2)) == null ? void 0 : _a2.add(url);
};
const cleanupBlobUrl = (url) => {
  try {
    URL.revokeObjectURL(url);
  } catch (error) {
    console.warn("Failed to revoke blob URL:", error);
  }
};
const openFilePreview = async (attachment) => {
  const rawUrl = attachment.blobUrl || attachment.url;
  const previewUrl = sanitizeUrl(rawUrl);
  if (!previewUrl) {
    console.error("Invalid or unsafe URL detected");
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
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState$1(false);
  const [isDeleting, setIsDeleting] = useState$1(false);
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
      const newAttachment = createSafeFileMetadata(file, uploadResponse);
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
    var _a2;
    const file = (_a2 = event.target.files) == null ? void 0 : _a2[0];
    if (file) {
      handleFileUpload(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [handleFileUpload]);
  const handleChooseFileClick = useCallback(() => {
    var _a2;
    if (disabled || uploadState.isUploading) return;
    (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
  }, [disabled, uploadState.isUploading]);
  const handleDeleteClick = useCallback(() => {
    if (!uploadState.attachment || disabled) return;
    setIsDeleteDialogOpen(true);
  }, [uploadState.attachment, disabled]);
  const handleDeleteConfirm = useCallback(async () => {
    if (!uploadState.attachment || disabled) return;
    setIsDeleting(true);
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
      setIsDeleteDialogOpen(false);
    } catch (error) {
      handleError({
        type: "network",
        message: "Failed to delete receipt",
        details: error.message
      });
    } finally {
      setIsDeleting(false);
    }
  }, [uploadState.attachment, disabled, handleError, onReceiptChange]);
  const handleDeleteCancel = useCallback(() => {
    setIsDeleteDialogOpen(false);
  }, []);
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
    var _a2;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: (_a2 = uploadState.error) == null ? void 0 : _a2.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(De, { variant: "soft", size: "sm", onClick: handleChooseFileClick, children: "Choose file" })
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
          className: "w-full h-48 object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity",
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-grey-700 text-center overflow-hidden text-ellipsis whitespace-nowrap px-2 max-w-full", children: attachment.originalName }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-trax-neutral-700 text-center overflow-hidden text-ellipsis whitespace-nowrap px-2 max-w-full", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-trax-neutral-500", children: attachment.mimeType.includes("heif") || attachment.mimeType.includes("heic") ? "HEIF/HEIC preview not supported by browser" : "File preview isn't available." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full absolute bottom-0 left-0 right-0 pb-4 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          De,
          {
            variant: "ghost",
            onClick: handlePreviewClick,
            className: "rounded-full !bg-white/70 !backdrop-blur-2xl",
            title: "Preview file",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 " })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          De,
          {
            variant: "error-ghost",
            onClick: handleDeleteClick,
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
            De,
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
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: setIsDeleteDialogOpen,
        title: "Delete receipt",
        description: "Are you sure you want to delete this receipt?",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: isDeleting
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
    formErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Please correct the following errors:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1", children: formErrors.map((error, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm", children: error }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            xn,
            {
              iconClassName: "bg-exp-yellow-001",
              title: "RECEIPT",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-neutral-950" }),
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            pa,
            {
              label: "Unavailable",
              checked: formData.isReceiptUnavailable,
              onCheckedChange: handleReceiptUnavailableChange
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReceiptUpload,
          {
            onReceiptChange: handleReceiptChange,
            initialReceipt: formData.receiptAttachment,
            disabled: formData.isReceiptUnavailable
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          xn,
          {
            title: "EXPENSE DETAILS",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-trax-neutral-950" }),
            required: true
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bo,
            {
              label: "Expense type",
              placeholder: "Select expense type",
              options: expenseTypeOptions,
              value: formData.expenseType,
              onValueChange: (id) => handleInputChange("expenseType", id)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Oo,
            {
              label: "Vendor",
              placeholder: "Enter vendor name",
              value: formData.vendor,
              onChange: (e) => handleInputChange("vendor", e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Go,
            {
              label: "Expense date",
              placeholder: "Select date expense incurred",
              value: formData.expenseDate || void 0,
              onChange: (date) => handleInputChange("expenseDate", date || "")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bo,
            {
              label: "Expense location",
              placeholder: "Select location",
              options: expenseLocationOptions,
              value: formData.expenseLocation,
              onValueChange: (value) => handleInputChange("expenseLocation", value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bo,
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
              Xo,
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
              Xo,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(pa, { label: "Expense made in a different currency", checked: formData.isDifferentCurrency, onCheckedChange: handleDifferentCurrencyChange })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        xn,
        {
          iconClassName: "bg-trax-blue-100",
          title: "EXPENSE JUSTIFICATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Bo,
          {
            label: "Business purpose",
            placeholder: "Specify what this expense was for",
            options: expenseTypeOptions,
            value: formData.businessPurpose,
            onValueChange: (value) => handleInputChange("businessPurpose", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          jo,
          {
            label: "Expense description",
            placeholder: "Describe what was purchased",
            rows: 1,
            value: formData.expenseDescription,
            onChange: (e) => handleInputChange("expenseDescription", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          jo,
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        xn,
        {
          iconClassName: "bg-trax-yellow-600",
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Yo,
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        xn,
        {
          iconClassName: "bg-trax-violet-100",
          title: "ADDITIONAL COMMENTS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareMore, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        jo,
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
    var _a2;
    e.preventDefault();
    e.stopPropagation();
    (_a2 = expenseFormRef.current) == null ? void 0 : _a2.saveDraft();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Zo, { className: "max-w-4xl max-h-[90vh] overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Jo, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ea, { className: "text-exp-neutral-950", children: "New Expense" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-24px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(De, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(De, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Qo, { className: "pt-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(De, { type: "button", variant: "outlined", onClick: handleSaveDraftClick, children: "Save Draft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(De, { type: "button", variant: "primary", disabled: true, className: "opacity-50 cursor-not-allowed", children: [
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

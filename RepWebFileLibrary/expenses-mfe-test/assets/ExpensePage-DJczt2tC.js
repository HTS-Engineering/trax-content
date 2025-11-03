const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/core-Dbi-QRzc.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/_commonjsHelpers-CUmg6egw.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { importShared } from "./__federation_fn_import-DlFISMuz.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-DLKWXVrv.js";
import { E as ExpensesList } from "./ExpensesList-pc4VtIdV.js";
import { c as createLucideIcon, T as Ta, b as La, O as Oa, B as Ba, G as Ga, A as Aa, L as Le, l as ls, D as Da, E as En, v as vr, w as wr, S as Sr, P as Pa, n as na, Q as Qo, d as Ea, k as ka, e as ea, t as ta, u as ua, f as da, m as ms, g as fa, p as pa, h as ha, j as ma } from "./createLucideIcon-CFplAfs0.js";
import { C as Controller, o as object, s as string, c as custom, b as boolean, a as array, _ as _enum, n as number, u as useForm, d as a, e as useMutation } from "./schemas-B2eyv9Yr.js";
import { I as Icon } from "./Icon-CjRhcZDz.js";
import { L as LoadingSpinner, k as useQueryClient, l as useQuery, q as queryKeys } from "./LoadingSpinner-YBiNXiZh.js";
import { A as AllowedMimeType, v as validateReceiptFile, g as getSupportedFormatsText, a as generateAcceptAttribute, b as getFilePreviewType, F as FilePreviewType, r as receiptUploadInstructions, M as MIME_TYPE_CONFIG } from "./receipt-CrrQbCLn.js";
import { a as apiClient } from "./axiosInstance-tQ-7ZwTm.js";
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { F as FILE_ENDPOINTS, E as EXPENSE_ENDPOINTS } from "./config-CcAFLaBz.js";
import { u as useBusinessPurposes } from "./api-D4IcewCT.js";
import { l as useDefaultCompany, F as FileText, C as ChartColumn, c as CreditCard, u as useNavigate, i as useParams, a as RoutePaths, g as ChevronRight } from "./api-BbXtkPiW.js";
import { u as useExpenseTypes } from "./api-DERUsUe7.js";
import { T as Trash2, S as Send } from "./trash-2-CzzRl7P1.js";
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
const React$3 = await importShared("react");
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React$3.createContext && /* @__PURE__ */ React$3.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
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
const React$2 = await importShared("react");
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React$2.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React$2.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React$2.createElement("svg", _extends({
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
    }), title && /* @__PURE__ */ React$2.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React$2.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function BsPaperclip(props) {
  return GenIcon({ "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" }, "child": [] }] })(props);
}
function GrCircleInformation(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeWidth": "2", "d": "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8" }, "child": [] }] })(props);
}
function FaPlus(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }, "child": [] }] })(props);
}
function MdError(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }, "child": [] }] })(props);
}
function RxCross2(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", "fill": "currentColor" }, "child": [] }] })(props);
}
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ta, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(La, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { className: "text-base font-semibold text-exp-neutral-600", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { className: "text-sm font-normal text-exp-grey-600", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Aa, { className: "gap-3 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Le,
        {
          variant: "soft",
          onClick: handleCancel,
          disabled: isLoading,
          className: `min-w-20 ${cancelButtonClassName}`,
          children: cancelLabel
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Le,
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
const MAX_SUPPORTING_FILES = 3;
const createSupportingFileAttachment = (file, uploadResponse) => {
  var _a;
  return {
    id: uploadResponse.id || `supporting-${Date.now()}`,
    url: uploadResponse.url,
    blobUrl: uploadResponse.blobUrl,
    filename: uploadResponse.filename || file.name,
    originalName: file.name,
    size: file.size,
    type: ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "unknown",
    mimeType: file.type,
    uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
    status: "uploaded"
  };
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
const sanitizeFileName = (fileName2) => {
  if (!fileName2 || typeof fileName2 !== "string") {
    return "unnamed_file";
  }
  let sanitized = fileName2.trim();
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
  var _a;
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
        new Uint8Array([255, 216, 255])
        // JPEG (check first 3 bytes only)
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
    }
    // NOTE: HEIC/HEIF validation is handled by file-type package in validateFileContentEnhanced
    // This custom validation only handles files with valid MIME types (PNG, JPEG, PDF, WebP)
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
        // <?php
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
        console.warn("PDF contains potentially dangerous features:", pdfText.substring(0, 200));
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
    console.error("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
};
const createSafeFileMetadata = (file, response) => {
  var _a;
  return {
    id: response.id || `receipt-${Date.now()}`,
    url: sanitizeUrl(response.url) || "",
    blobUrl: response.blobUrl ? sanitizeUrl(response.blobUrl) : void 0,
    filename: sanitizeFileName(response.filename || file.name),
    originalName: sanitizeFileName(file.name),
    size: Math.min(file.size, Number.MAX_SAFE_INTEGER),
    type: ((_a = response.type) == null ? void 0 : _a.replace(/[^a-zA-Z0-9]/g, "")) || "unknown",
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
const securityUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkRateLimit,
  createSafeFileMetadata,
  sanitizeFileName,
  sanitizeUrl,
  validateFileContent
}, Symbol.toStringTag, { value: "Module" }));
let fileTypeModule = null;
const loadFileTypeModule = async () => {
  if (!fileTypeModule) {
    fileTypeModule = await __vitePreload(() => import("./core-Dbi-QRzc.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  }
  return fileTypeModule;
};
const validateFileContentEnhanced = async (file) => {
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
        console.error("file-type validation failed:", error);
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
    console.error("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
};
const shouldUseEnhancedValidation = (file) => {
  const fileName2 = file.name.toLowerCase();
  return !file.type || // No MIME type - need enhanced detection
  fileName2.endsWith(".heic") || fileName2.endsWith(".heif") || file.type === "image/heic" || file.type === "image/heif";
};
const UPLOAD_TIMEOUT$1 = 12e4;
const MAX_RETRIES$1 = 2;
const uploadSupportingFile = async (file, onProgress, retryCount = 0) => {
  var _a, _b, _c;
  const userKey = "supporting_file_upload";
  if (!checkRateLimit(userKey, 10, 6e4)) {
    throw new Error("Too many upload attempts. Please wait before trying again.");
  }
  const validationResult = shouldUseEnhancedValidation(file) ? await validateFileContentEnhanced(file) : await validateFileContent(file);
  if (!validationResult.isValid) {
    throw new Error(validationResult.message || "File content does not match the declared type.");
  }
  let fileToUpload = file;
  if (validationResult.actualMimeType && validationResult.actualMimeType !== file.type) {
    fileToUpload = new File([file], file.name, {
      type: validationResult.actualMimeType,
      lastModified: file.lastModified
    });
  }
  const formData = new FormData();
  formData.append("file", fileToUpload);
  formData.append("type", "supporting");
  formData.append("originalName", file.name);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT$1);
  try {
    const response = await apiClient.post(
      FILE_ENDPOINTS.SUPPORTING_UPLOAD,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        signal: controller.signal,
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) ;
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
        throw new Error("Unsupported file type. Please upload an image or PDF file.");
      case 422:
        throw new Error(message || "File validation failed.");
      case 500:
      case 502:
      case 503:
      case 504:
        if (retryCount < MAX_RETRIES$1) {
          const delay = Math.min(1e3 * Math.pow(2, retryCount), 5e3);
          await new Promise((resolve) => setTimeout(resolve, delay));
          return uploadSupportingFile(file, onProgress, retryCount + 1);
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
const deleteSupportingFile = async (fileId) => {
  var _a, _b;
  try {
    await apiClient.delete(FILE_ENDPOINTS.SUPPORTING_DELETE(fileId));
  } catch (error) {
    console.error("Failed to delete supporting file:", error);
    throw new Error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to delete file");
  }
};
const UPLOAD_TIMEOUT = 12e4;
const MAX_RETRIES = 2;
const uploadReceiptFile = async (file, onProgress, retryCount = 0) => {
  var _a, _b, _c;
  const userKey = "global_upload";
  if (!checkRateLimit(userKey, 10, 6e4)) {
    throw new Error("Too many upload attempts. Please wait before trying again.");
  }
  const validationResult = shouldUseEnhancedValidation(file) ? await validateFileContentEnhanced(file) : await validateFileContent(file);
  if (!validationResult.isValid) {
    throw new Error(validationResult.message || "File content does not match the declared type.");
  }
  let fileToUpload = file;
  if (validationResult.actualMimeType && validationResult.actualMimeType !== file.type) {
    fileToUpload = new File([file], file.name, {
      type: validationResult.actualMimeType,
      lastModified: file.lastModified
    });
  }
  const formData = new FormData();
  formData.append("file", fileToUpload);
  formData.append("type", "receipt");
  formData.append("originalName", file.name);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT);
  try {
    const response = await apiClient.post(
      FILE_ENDPOINTS.RECEIPTS_UPLOAD,
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
    await apiClient.delete(FILE_ENDPOINTS.RECEIPTS_DELETE(receiptId));
  } catch (error) {
    console.error("Failed to delete receipt:", error);
    throw new Error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to delete receipt");
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
  if (previewUrl.startsWith("https://storage.expensesapp.com/")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT);
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
const splitFilename = (filename) => {
  if (!filename) return { name: "", ext: "" };
  const lastDot = filename.lastIndexOf(".");
  if (lastDot <= 0) return { name: filename, ext: "" };
  return {
    name: filename.slice(0, lastDot),
    ext: filename.slice(lastDot)
  };
};
const React$1 = await importShared("react");
const { useCallback: useCallback$4, useEffect: useEffect$4, useRef: useRef$3, useState: useState$3 } = React$1;
function fileName(fileName2) {
  const { name, ext } = splitFilename(fileName2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-sm text-trax-blue-600 hover:cursor-pointer min-w-0 shrink", children: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm text-trax-blue-600 hover:cursor-pointer shrink-0", children: ext })
  ] });
}
function FileCard({
  file,
  error,
  onRemove,
  onPreview,
  index,
  isUploading,
  disabled
}) {
  var _a;
  const FILE_NAME_POPOVER_DELAY = 600;
  const previewType = getFilePreviewType(file.mimeType);
  if (isUploading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-trax-neutral-600 flex flex-1 min-w-0", children: fileName(file.originalName) })
    ] }) });
  }
  const hasError = error || file.status === "error";
  const errorMessage = (error == null ? void 0 : error.message) || file.errorMessage || "Invalid file";
  if (hasError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { className: "bg-red-50 px-2 py-2 w-full flex justify-between flex-row items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1 min-w-0 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MdError, { className: "text-red-700 scale-110 shrink-0", title: "File error icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { delayDuration: FILE_NAME_POPOVER_DELAY, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { className: "min-w-0 flex-1 text-left flex flex-nowrap items-center", children: fileName(file.originalName) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { variant: "light", size: "sm", className: "max-w-full", side: "bottom", showArrow: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-black", children: file.originalName }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 mr-2 text-sm h-full text-trax-red-600", children: errorMessage.includes("Unsupported file type") ? "Invalid format" : errorMessage.includes("exceeds limit") ? `>${((_a = errorMessage.match(/\d+MB/)) == null ? void 0 : _a[0]) || "Size limit"}` : errorMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "flex hover:cursor-pointer",
            onClick: () => onRemove(index),
            disabled,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-red-600", "data-testid": "delete-supporting-file-button" })
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { className: "bg-white hover:bg-trax-neutral-20 px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center flex-1 min-w-0 gap-2 hover:cursor-pointer hover:underline",
      onClick: () => onPreview(file),
      children: [
        previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-img", "data-testid": "icon-file-img" }) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-pdf", "data-testid": "icon-file-pdf" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "text-line-unknown", "data-testid": "icon-file-unknown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { delayDuration: FILE_NAME_POPOVER_DELAY, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { className: "min-w-0 flex-1 text-left flex flex-nowrap items-center", children: fileName(file.originalName) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { variant: "light", size: "sm", className: "max-w-full", side: "bottom", showArrow: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: file.originalName }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "flex hover:cursor-pointer shrink-0",
            onClick: (e) => {
              e.stopPropagation();
              onRemove(index);
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-grey-200 hover:text-trax-neutral-900", "data-testid": "delete-supporting-file-button" })
          }
        )
      ]
    }
  ) });
}
function SupportingFiles({
  onFilesChange,
  initialFiles = [],
  disabled = false,
  className = ""
}) {
  const fileInputRef = useRef$3(null);
  const [state, setState] = useState$3({
    attachments: initialFiles,
    isUploading: false,
    errors: /* @__PURE__ */ new Map()
  });
  const [deleteDialogState, setDeleteDialogState] = useState$3({
    isOpen: false,
    fileIndex: null,
    isDeleting: false
  });
  const blobUrlsRef = useRef$3(/* @__PURE__ */ new Set());
  useEffect$4(() => {
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
  const handleAddSupportingDocumentClick = useCallback$4((e) => {
    var _a;
    e.preventDefault();
    if (disabled || state.isUploading) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [disabled, state.isUploading]);
  const handleFileChange = useCallback$4(async (e) => {
    var _a, _b;
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;
    const totalFiles = state.attachments.length + newFiles.length;
    if (totalFiles > MAX_SUPPORTING_FILES) {
      const filesToAdd = MAX_SUPPORTING_FILES - state.attachments.length;
      if (filesToAdd <= 0) {
        ls.error("Maximum 3 supporting files allowed", {
          duration: 3e3
        });
        return;
      }
      ls.error(`Only ${filesToAdd} more file(s) can be added`, {
        duration: 3e3
      });
      newFiles.splice(filesToAdd);
    }
    const filesToProcess = [];
    newFiles.forEach((file) => {
      const error = validateReceiptFile(file);
      filesToProcess.push({ file, error });
    });
    if (filesToProcess.length > 0) {
      setState((prev) => ({
        ...prev,
        isUploading: true,
        uploadingFileIndex: prev.attachments.length
      }));
      const processedFiles = [];
      const fileErrors = /* @__PURE__ */ new Map();
      for (let i = 0; i < filesToProcess.length; i++) {
        const { file, error } = filesToProcess[i];
        const currentIndex = state.attachments.length + i;
        setState((prev) => ({
          ...prev,
          uploadingFileIndex: currentIndex
        }));
        if (error) {
          const errorAttachment = {
            id: `error-${Date.now()}-${i}`,
            url: "",
            blobUrl: void 0,
            filename: file.name,
            originalName: file.name,
            size: file.size,
            type: ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "unknown",
            mimeType: file.type,
            uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
            status: "error",
            errorMessage: error.message
          };
          processedFiles.push(errorAttachment);
          fileErrors.set(currentIndex, error);
        } else {
          try {
            const uploadResponse = await uploadSupportingFile(file);
            const attachment = createSupportingFileAttachment(file, uploadResponse);
            if (uploadResponse.blobUrl) {
              blobUrlsRef.current.add(uploadResponse.blobUrl);
            }
            processedFiles.push(attachment);
          } catch (error2) {
            const errorAttachment = {
              id: `upload-error-${Date.now()}-${i}`,
              url: "",
              blobUrl: void 0,
              filename: file.name,
              originalName: file.name,
              size: file.size,
              type: ((_b = file.name.split(".").pop()) == null ? void 0 : _b.toLowerCase()) || "unknown",
              mimeType: file.type,
              uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
              status: "error",
              errorMessage: error2.message || "Upload failed"
            };
            processedFiles.push(errorAttachment);
            fileErrors.set(currentIndex, {
              type: "network",
              message: error2.message || "Upload failed",
              details: error2.toString()
            });
          }
        }
      }
      setState((prev) => {
        const newAttachments = [...prev.attachments, ...processedFiles];
        const newErrors = new Map([...prev.errors, ...fileErrors]);
        onFilesChange == null ? void 0 : onFilesChange(newAttachments);
        return {
          ...prev,
          attachments: newAttachments,
          isUploading: false,
          uploadingFileIndex: void 0,
          errors: newErrors
        };
      });
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [state.attachments, onFilesChange]);
  const handleRemoveFile = useCallback$4((index) => {
    if (disabled || state.isUploading) return;
    setDeleteDialogState({
      isOpen: true,
      fileIndex: index,
      isDeleting: false
    });
  }, [disabled, state.isUploading]);
  const handleDeleteConfirm = useCallback$4(async () => {
    const fileIndex = deleteDialogState.fileIndex;
    if (fileIndex === null || disabled) return;
    setDeleteDialogState((prev) => ({ ...prev, isDeleting: true }));
    const file = state.attachments[fileIndex];
    if (file) {
      try {
        if (file.status !== "error" && !file.id.startsWith("error-") && !file.id.startsWith("upload-error-")) {
          await deleteSupportingFile(file.id);
        }
        if (file.blobUrl) {
          blobUrlsRef.current.delete(file.blobUrl);
          try {
            URL.revokeObjectURL(file.blobUrl);
          } catch (error) {
            console.warn("Failed to revoke blob URL:", error);
          }
        }
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
          onFilesChange == null ? void 0 : onFilesChange(newAttachments);
          return {
            ...prev,
            attachments: newAttachments,
            errors: reindexedErrors
          };
        });
      } catch {
        ls.error("Failed to delete file", {
          duration: 3e3
        });
      }
    }
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, [deleteDialogState.fileIndex, state.attachments, disabled, onFilesChange]);
  const handleDeleteCancel = useCallback$4(() => {
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, []);
  const handlePreviewClick = useCallback$4(async (file) => {
    if (file.status === "error") {
      return;
    }
    try {
      await openFilePreview(file);
    } catch (error) {
      console.error("Failed to open preview:", error);
      ls.error("Failed to open file preview", {
        duration: 3e3
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { className: `flex items-center flex-col w-full h-fit overflow-clip ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row w-full items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        En,
        {
          iconClassName: "bg-trax-neutral-30",
          title: "SUPPORTING FILES (MAX 3)",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BsPaperclip, { className: "w-4 h-4 text-trax-neutral-950" }),
          className: "text-nowrap w-auto"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center w-full ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { delayDuration: 120, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GrCircleInformation, { className: "text-gray-500 hover:cursor-pointer select-none" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { variant: "default", side: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-trax-blue-700 text-white border-none text-sm p-2 w-64", children: [
          "You can attach up to 3 documents, such as pre-approvals, order confirmations, or bank statements to support this expense. ",
          getSupportedFormatsText()
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center h-full", children: state.attachments.length < MAX_SUPPORTING_FILES ? /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { delayDuration: 120, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddSupportingDocumentClick, disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPlus, { className: "opacity-20 hover:cursor-not-allowed" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Sr,
          {
            variant: "light",
            size: "sm",
            className: "max-w-full",
            side: "bottom",
            align: "start",
            showArrow: false,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: "Cannot add more than 3 files" })
          }
        )
      ] }) }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { className: `bg-white w-full p-0 ${state.attachments.length === 0 && !state.isUploading ? "h-0" : "h-auto"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col my-1 mx-2 gap-1", children: [
      state.attachments.map((file, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FileCard,
        {
          file,
          error: state.errors.get(index),
          onRemove: handleRemoveFile,
          onPreview: handlePreviewClick,
          index,
          isUploading: state.isUploading && state.uploadingFileIndex === index,
          disabled
        },
        file.id
      )),
      state.isUploading && state.uploadingFileIndex !== void 0 && state.uploadingFileIndex >= state.attachments.length && /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-trax-neutral-600 text-nowrap", children: "Uploading file..." })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deleteDialogState.isOpen,
        onOpenChange: (open) => {
          if (!open) handleDeleteCancel();
        },
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
const React = await importShared("react");
const { useCallback: useCallback$3, useEffect: useEffect$3, useRef: useRef$2, useState: useState$2 } = React;
const ReceiptUpload = ({
  onReceiptChange,
  onUploadingChange,
  initialReceipt,
  disabled = false,
  className = ""
}) => {
  const fileInputRef = useRef$2(null);
  const [uploadState, setUploadState] = useState$2({
    attachment: initialReceipt,
    isUploading: false,
    error: void 0,
    dragActive: false
  });
  const [_uploadProgress, setUploadProgress] = useState$2(0);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState$2(false);
  const [isDeleting, setIsDeleting] = useState$2(false);
  const blobUrlsRef = useRef$2(/* @__PURE__ */ new Set());
  useEffect$3(() => {
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
  const handleError = useCallback$3((error) => {
    setUploadState((prev) => ({
      ...prev,
      error,
      isUploading: false
    }));
  }, []);
  const handleFileUpload = useCallback$3(async (file) => {
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
    onUploadingChange == null ? void 0 : onUploadingChange(true);
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
      onUploadingChange == null ? void 0 : onUploadingChange(false);
      onReceiptChange == null ? void 0 : onReceiptChange(newAttachment);
    } catch (error) {
      handleError({
        type: "network",
        message: error.message || "Upload failed",
        details: error.toString()
      });
      onUploadingChange == null ? void 0 : onUploadingChange(false);
    }
  }, [handleError, onReceiptChange, onUploadingChange]);
  const handleFileSelect = useCallback$3((event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      handleFileUpload(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [handleFileUpload]);
  const handleChooseFileClick = useCallback$3(() => {
    var _a;
    if (disabled || uploadState.isUploading) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [disabled, uploadState.isUploading]);
  const handleDeleteClick = useCallback$3(() => {
    if (!uploadState.attachment || disabled) return;
    setIsDeleteDialogOpen(true);
  }, [uploadState.attachment, disabled]);
  const handleDeleteConfirm = useCallback$3(async () => {
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
  const handleDeleteCancel = useCallback$3(() => {
    setIsDeleteDialogOpen(false);
  }, []);
  const handlePreviewClick = useCallback$3(async () => {
    if (uploadState.attachment) {
      try {
        await openFilePreview(uploadState.attachment);
      } catch (error) {
        console.error("Failed to open preview:", error);
      }
    }
  }, [uploadState.attachment]);
  const handleDragOver = useCallback$3((e) => {
    e.preventDefault();
    if (!disabled && !uploadState.isUploading) {
      setUploadState((prev) => ({ ...prev, dragActive: true }));
    }
  }, [disabled, uploadState.isUploading]);
  const handleDragLeave = useCallback$3((e) => {
    e.preventDefault();
    setUploadState((prev) => ({ ...prev, dragActive: false }));
  }, []);
  const handleDrop = useCallback$3((e) => {
    e.preventDefault();
    setUploadState((prev) => ({ ...prev, dragActive: false }));
    if (disabled || uploadState.isUploading) return;
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [disabled, uploadState.isUploading, handleFileUpload]);
  const renderUploadingState = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-14" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600 font-normal", children: "Uploading file..." })
  ] });
  const renderErrorState = () => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: (_a = uploadState.error) == null ? void 0 : _a.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { variant: "soft", size: "sm", onClick: handleChooseFileClick, children: "Choose file" })
    ] });
  };
  const renderUploadedState = () => {
    const { attachment } = uploadState;
    if (!attachment) return null;
    const previewType = getFilePreviewType(attachment.mimeType);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 h-full", children: previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: attachment.blobUrl || attachment.url,
          alt: attachment.originalName,
          className: "w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity",
          onClick: handlePreviewClick,
          onError: (_e) => {
            console.warn("Image failed to load:", attachment.blobUrl || attachment.url);
          }
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
          Le,
          {
            variant: "ghost",
            onClick: handlePreviewClick,
            className: "rounded-full !bg-white/70 !backdrop-blur-2xl",
            title: "Preview file",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 " })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Le,
          {
            variant: "error-ghost",
            onClick: handleDeleteClick,
            className: "rounded-full !bg-white/70",
            title: "Delete receipt",
            "data-testid": "delete-receipt-button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-5 text-exp-red-500" })
          }
        )
      ] })
    ] });
  };
  const renderEmptyState = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `flex-1 h-full items-center justify-center p-8 text-center bg-white rounded-lg transition-colors ${uploadState.dragActive ? "border-trax-blue-400 bg-trax-blue-50" : "border-trax-neutral-300 hover:border-trax-neutral-400"}`,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "size-14 text-exp-teal-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: receiptUploadInstructions() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Le,
            {
              variant: "soft",
              size: "sm",
              onClick: handleChooseFileClick,
              disabled,
              "data-testid": "receipt-upload-choose-file-button",
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
        disabled,
        "data-testid": "receipt-upload-input"
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
function AffidavitSection({
  control
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { className: "w-full max-h-full bg-yellow-50 border-1 border-yellow-200 p-3 flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600", children: "Please sign the affidavit:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.justification",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            na,
            {
              name: field.name,
              ref: field.ref,
              onBlur: field.onBlur,
              value: field.value || "",
              onChange: field.onChange,
              onInput: (e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = Math.min(el.scrollHeight + 5, 200) + "px";
              },
              className: "w-full text-wrap bg-white border resize-none overflow-y-auto min-h-16 max-h-34 leading-4 placeholder:text-sm placeholder:font-normal placeholder:text-exp-grey-500",
              label: "Justification",
              placeholder: "State reason for missing receipt",
              maxCharacters: 150,
              showCharacterCount: true,
              enforceMaxLength: true,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.digitalSignature",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Qo,
            {
              name: field.name,
              ref: field.ref,
              onBlur: field.onBlur,
              value: field.value || "",
              onChange: (e) => {
                const upperValue = e.target.value.toUpperCase();
                const filteredValue = upperValue.replace(/[^A-Z]/g, "").slice(0, 3);
                field.onChange(filteredValue);
              },
              className: "w-full !text-sm bg-white border h-6 resize-none placeholder:font-normal placeholder:text-exp-grey-500 text-md px-2 py-4",
              label: "Digital Signature",
              placeholder: "Enter initials",
              maxLength: 3,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true
            }
          );
        }
      }
    )
  ] }) }) });
}
function ReceiptSection({
  control,
  receiptAttachment,
  isReceiptUnavailable,
  shouldShowCheckbox,
  onReceiptChange,
  onReceiptUnavailableChange,
  onUploadingChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { className: "h-full p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        En,
        {
          iconClassName: "bg-exp-yellow-001 justify-center items-center flex",
          title: "RECEIPT",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-neutral-950" }),
          required: true,
          className: ""
        }
      ),
      shouldShowCheckbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ea,
        {
          label: "Unavailable",
          checked: isReceiptUnavailable,
          onCheckedChange: onReceiptUnavailableChange
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ka, { className: "min-h-0 h-full", children: isReceiptUnavailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      AffidavitSection,
      {
        control
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptUpload,
      {
        onReceiptChange,
        onUploadingChange,
        initialReceipt: receiptAttachment || void 0,
        disabled: isReceiptUnavailable,
        className: "h-full"
      }
    ) })
  ] });
}
const BusinessPurposeSelect = ({
  value,
  onChange,
  onBlur,
  required = true,
  disabled = false,
  placeholder = "Select business purpose",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: businessPurposes, isLoading: isLoadingPurposes } = useBusinessPurposes(companyId, false);
  const options = (businessPurposes == null ? void 0 : businessPurposes.map((bp) => ({
    value: bp.id,
    label: bp.businessPurpose
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingPurposes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingPurposes ? "Loading business purposes..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ea,
    {
      label: "Business purpose",
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
};
const ExpenseTypeSelect = ({
  value,
  onChange,
  onBlur,
  required = true,
  disabled = false,
  placeholder = "Select expense type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingExpenses } = useExpenseTypes(companyId, false);
  const options = (expenseTypes == null ? void 0 : expenseTypes.map((et) => ({
    value: et.id,
    label: et.name
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingExpenses;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingExpenses ? "Loading expense types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ea,
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
};
const affidavitSchema = object({
  justification: string().min(1, "Justification is required").max(150, "Maximum 150 characters allowed"),
  digitalSignature: string().min(1, "Digital signature is required").max(3, "Maximum 3 initials allowed").regex(/^[A-Z]{1,3}$/, "Must be 1-3 uppercase letters").refine((val) => val.length >= 1 && val.length <= 3, {
    message: "Digital signature must be 1-3 initials"
  })
});
const isValidFileAttachment = (file) => {
  if (!file) return false;
  if (file.status === "error") return false;
  if (file.errorMessage) return false;
  return true;
};
const fileAttachmentSchema = custom((val) => {
  return isValidFileAttachment(val);
}, {
  message: "Invalid or corrupted file"
});
({
  SUPPORTED_FORMATS: Object.values(AllowedMimeType),
  MAX_FILE_SIZE_PDF: MIME_TYPE_CONFIG.get(AllowedMimeType.PDF).maxSizeBytes,
  MAX_FILE_SIZE_IMAGE: MIME_TYPE_CONFIG.get(AllowedMimeType.PNG).maxSizeBytes
});
const receiptWithAffidavitSchema = object({
  receiptAttachment: custom().optional().nullable(),
  isReceiptUnavailable: boolean().optional(),
  affidavit: affidavitSchema.optional().nullable()
}).refine((data) => {
  if (data.isReceiptUnavailable) {
    return data.affidavit !== null && data.affidavit !== void 0 && data.affidavit.justification.length > 0 && data.affidavit.digitalSignature.length > 0;
  }
  if (!data.isReceiptUnavailable) {
    return data.receiptAttachment !== null && data.receiptAttachment !== void 0;
  }
  return true;
}, {
  message: ((data) => (data == null ? void 0 : data.isReceiptUnavailable) ? "Affidavit is required when receipt is unavailable" : "Receipt is required unless marked as unavailable")(),
  path: ["receiptAttachment"]
}).refine((data) => {
  if (data.receiptAttachment && !data.isReceiptUnavailable) {
    return isValidFileAttachment(data.receiptAttachment);
  }
  return true;
}, {
  message: "Receipt file is invalid or corrupted",
  path: ["receiptAttachment"]
});
const supportingFilesSchema = object({
  supportingFiles: array(fileAttachmentSchema).max(3, "Maximum 3 supporting files allowed").optional()
});
const expenseDetailsSchema = object({
  expenseType: string().min(1, "Expense type is required"),
  vendor: string().min(1, "Vendor is required").max(100, "Vendor name is too long"),
  expenseDate: string().min(1, "Expense date is required"),
  // Will be validated as date string
  expenseLocation: string().min(1, "Expense location is required").max(100, "Location is too long"),
  paymentMethod: string().min(1, "Payment method is required"),
  // Currency fields - optional (defaults provided in form)
  isDifferentCurrency: boolean().optional(),
  netCurrency: object({
    code: string(),
    locale: string()
  }).optional(),
  totalCurrency: object({
    code: string(),
    locale: string()
  }).optional(),
  // Amount fields with HST/GST validation
  netAmount: string().min(1, "HST/GST amount is required").regex(/^\d+(\.\d{1,2})?$/, "Invalid amount format"),
  totalAmount: string().min(1, "Total amount is required").regex(/^\d+(\.\d{1,2})?$/, "Invalid amount format"),
  businessPurpose: string().min(1, "Business purpose is required"),
  expenseDescription: string().min(1, "Expense description is required").max(500, "Description is too long"),
  // Optional fields
  personsEntertained: string().optional(),
  additionalComments: string().max(500, "Comments are too long").optional(),
  // Cost allocations - optional for now
  costAllocations: array(object({
    id: string(),
    name: string(),
    percentage: number().min(0).max(100),
    amount: number(),
    type: _enum(["project", "admin", "team"])
  })).optional()
});
const fullExpenseFormSchema = receiptWithAffidavitSchema.merge(supportingFilesSchema).merge(expenseDetailsSchema).refine((data) => {
  const net = parseFloat(data.netAmount || "0");
  const total = parseFloat(data.totalAmount || "0");
  return total >= net;
}, {
  message: "Total amount must be greater than or equal to HST/GST amount",
  path: ["totalAmount"]
});
const expenseDraftSchema = object({
  receiptAttachment: custom().optional().nullable(),
  isReceiptUnavailable: boolean().default(false),
  affidavit: object({
    justification: string().max(150).optional(),
    digitalSignature: string().max(3).optional()
  }).optional().nullable(),
  supportingFiles: array(custom()).max(3, "Maximum 3 supporting files allowed").optional().default([]),
  expenseType: string().optional(),
  vendor: string().max(100).optional(),
  expenseDate: string().optional(),
  expenseLocation: string().max(100).optional(),
  paymentMethod: string().optional(),
  isDifferentCurrency: boolean().optional(),
  netCurrency: object({
    code: string(),
    locale: string()
  }).optional(),
  totalCurrency: object({
    code: string(),
    locale: string()
  }).optional(),
  netAmount: string().optional(),
  totalAmount: string().optional(),
  businessPurpose: string().optional(),
  expenseDescription: string().max(500).optional(),
  personsEntertained: string().optional(),
  additionalComments: string().max(500).optional(),
  costAllocations: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: _enum(["project", "admin", "team"])
  })).optional()
});
const validateExpenseForSubmission = (data) => {
  return fullExpenseFormSchema.safeParse(data);
};
const validateExpenseForDraft = (data) => {
  return expenseDraftSchema.safeParse(data);
};
const areRequiredFieldsFilled = (data) => {
  var _a, _b, _c, _d;
  const requiredFields = [
    "expenseType",
    "vendor",
    "expenseDate",
    "expenseLocation",
    "paymentMethod",
    "netAmount",
    "totalAmount",
    "businessPurpose",
    "expenseDescription"
  ];
  const basicFieldsFilled = requiredFields.every(
    (field) => data[field] && String(data[field]).trim().length > 0
  );
  if (!basicFieldsFilled) return false;
  if (data.isReceiptUnavailable) {
    return !!(((_b = (_a = data.affidavit) == null ? void 0 : _a.justification) == null ? void 0 : _b.trim()) && ((_d = (_c = data.affidavit) == null ? void 0 : _c.digitalSignature) == null ? void 0 : _d.trim()));
  }
  if (!data.receiptAttachment) return false;
  if (!isValidFileAttachment(data.receiptAttachment)) {
    return false;
  }
  if (data.supportingFiles && data.supportingFiles.length > 0) {
    const hasInvalidSupportingFile = data.supportingFiles.some(
      (file) => !isValidFileAttachment(file)
    );
    if (hasInvalidSupportingFile) return false;
  }
  return true;
};
const getFormValidationErrors = (data) => {
  const result = validateExpenseForSubmission(data);
  if (!result.success) {
    return result.error.issues.map((issue) => issue.message);
  }
  return [];
};
const canSaveDraft = (data) => {
  var _a, _b, _c, _d;
  const fields = [
    "expenseType",
    "vendor",
    "expenseDate",
    "expenseLocation",
    "paymentMethod",
    "netAmount",
    "totalAmount",
    "businessPurpose",
    "expenseDescription",
    "personsEntertained",
    "additionalComments"
  ];
  const hasFieldValue = fields.some(
    (field) => data[field] && String(data[field]).trim().length > 0
  );
  const hasAffidavitData = !!(((_b = (_a = data.affidavit) == null ? void 0 : _a.justification) == null ? void 0 : _b.trim()) || ((_d = (_c = data.affidavit) == null ? void 0 : _c.digitalSignature) == null ? void 0 : _d.trim()));
  const hasFiles = !!(data.receiptAttachment || data.supportingFiles && data.supportingFiles.length > 0);
  return hasFieldValue || hasFiles || hasAffidavitData;
};
const { useCallback: useCallback$2, useMemo: useMemo$1, useEffect: useEffect$2, useRef: useRef$1 } = await importShared("react");
const useFullExpenseForm = ({
  initialData,
  onSubmit,
  onSaveDraft,
  onDraftSaved,
  isSubmitting = false,
  isDrafting = false,
  draftSaveError = false
}) => {
  const defaultValues = {
    expenseType: (initialData == null ? void 0 : initialData.expenseType) || "",
    vendor: (initialData == null ? void 0 : initialData.vendor) || "",
    expenseDate: typeof (initialData == null ? void 0 : initialData.expenseDate) === "string" ? initialData.expenseDate : (initialData == null ? void 0 : initialData.expenseDate) instanceof Date ? initialData.expenseDate.toISOString() : "",
    expenseLocation: (initialData == null ? void 0 : initialData.expenseLocation) || "",
    paymentMethod: (initialData == null ? void 0 : initialData.paymentMethod) || "",
    netAmount: (initialData == null ? void 0 : initialData.netAmount) || "",
    totalAmount: (initialData == null ? void 0 : initialData.totalAmount) || "",
    businessPurpose: (initialData == null ? void 0 : initialData.businessPurpose) || "",
    expenseDescription: (initialData == null ? void 0 : initialData.expenseDescription) || "",
    personsEntertained: (initialData == null ? void 0 : initialData.personsEntertained) || "",
    additionalComments: (initialData == null ? void 0 : initialData.additionalComments) || "",
    receiptAttachment: (initialData == null ? void 0 : initialData.receiptAttachment) || null,
    isReceiptUnavailable: (initialData == null ? void 0 : initialData.isReceiptUnavailable) || false,
    affidavit: (initialData == null ? void 0 : initialData.affidavit) || null,
    supportingFiles: (initialData == null ? void 0 : initialData.supportingFiles) || [],
    isDifferentCurrency: (initialData == null ? void 0 : initialData.isDifferentCurrency) || false,
    netCurrency: (initialData == null ? void 0 : initialData.netCurrency) || { code: "CAD", locale: "en-CA" },
    totalCurrency: (initialData == null ? void 0 : initialData.totalCurrency) || { code: "CAD", locale: "en-CA" },
    costAllocations: (initialData == null ? void 0 : initialData.costAllocations) || []
  };
  const form = useForm({
    resolver: a(fullExpenseFormSchema),
    defaultValues,
    mode: "onTouched",
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  const {
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isValid, isDirty },
    trigger,
    reset,
    clearErrors,
    setError
  } = form;
  const formData = watch();
  const prevIsDraftingRef = useRef$1(isDrafting);
  useEffect$2(() => {
    if (prevIsDraftingRef.current === true && isDrafting === false && !draftSaveError) {
      const currentValues = getValues();
      reset(currentValues, { keepValues: true, keepDirty: false });
      onDraftSaved == null ? void 0 : onDraftSaved();
    }
    prevIsDraftingRef.current = isDrafting;
  }, [isDrafting, draftSaveError, getValues, reset, onDraftSaved]);
  const requiredFieldsFilled = useMemo$1(
    () => areRequiredFieldsFilled(formData),
    [formData]
  );
  const validationErrors = useMemo$1(
    () => getFormValidationErrors(formData),
    [formData]
  );
  const hasErrors = validationErrors.length > 0;
  const canSave = useMemo$1(
    () => canSaveDraft(formData),
    [formData]
  );
  const canSubmit = requiredFieldsFilled && !hasErrors && !isSubmitting;
  const handleFormSubmit = useCallback$2(
    async (data) => {
      try {
        const result = validateExpenseForSubmission(data);
        if (!result.success) {
          console.error("Validation failed:", result.error.issues);
          return;
        }
        const expenseData = {
          ...data,
          expenseDate: data.expenseDate || (/* @__PURE__ */ new Date()).toISOString(),
          personsEntertained: data.personsEntertained || "",
          additionalComments: data.additionalComments || "",
          receiptAttachment: data.receiptAttachment || void 0,
          affidavit: data.affidavit || void 0,
          isReceiptUnavailable: data.isReceiptUnavailable ?? false,
          isDifferentCurrency: data.isDifferentCurrency ?? false,
          netCurrency: data.netCurrency || { code: "CAD", locale: "en-CA" },
          totalCurrency: data.totalCurrency || { code: "CAD", locale: "en-CA" },
          supportingFiles: data.supportingFiles || [],
          costAllocations: data.costAllocations || []
        };
        await (onSubmit == null ? void 0 : onSubmit(expenseData));
      } catch (error) {
        console.error("Form submission error:", error);
        throw error;
      }
    },
    [onSubmit]
  );
  const handleDraftSave = useCallback$2(
    async () => {
      try {
        const data = getValues();
        const result = validateExpenseForDraft(data);
        if (!result.success) {
          console.error("Draft validation failed:", result.error.issues);
          return;
        }
        const expenseData = {
          ...data,
          expenseDate: data.expenseDate || (/* @__PURE__ */ new Date()).toISOString(),
          expenseType: data.expenseType || "",
          vendor: data.vendor || "",
          expenseLocation: data.expenseLocation || "",
          paymentMethod: data.paymentMethod || "",
          netAmount: data.netAmount || "",
          totalAmount: data.totalAmount || "",
          businessPurpose: data.businessPurpose || "",
          expenseDescription: data.expenseDescription || "",
          personsEntertained: data.personsEntertained || "",
          additionalComments: data.additionalComments || "",
          isDifferentCurrency: data.isDifferentCurrency ?? false,
          netCurrency: data.netCurrency || { code: "CAD", locale: "en-CA" },
          totalCurrency: data.totalCurrency || { code: "CAD", locale: "en-CA" },
          costAllocations: data.costAllocations || [],
          receiptAttachment: data.receiptAttachment || void 0,
          affidavit: data.affidavit || void 0,
          isReceiptUnavailable: data.isReceiptUnavailable ?? false,
          supportingFiles: data.supportingFiles || []
        };
        await (onSaveDraft == null ? void 0 : onSaveDraft(expenseData));
      } catch (error) {
        console.error("Draft save error:", error);
        throw error;
      }
    },
    [getValues, onSaveDraft]
  );
  const validateField = useCallback$2(
    async (fieldName) => {
      await trigger(fieldName);
    },
    [trigger]
  );
  const validateForm = useCallback$2(
    async () => {
      const result = await trigger();
      return result;
    },
    [trigger]
  );
  const getSubmitButtonState = useCallback$2(() => {
    if (!requiredFieldsFilled) {
      return {
        disabled: true,
        tooltip: "Complete all required fields to submit"
      };
    }
    if (hasErrors) {
      return {
        disabled: true,
        tooltip: "Fix form error(s) to submit"
      };
    }
    if (isSubmitting) {
      return {
        disabled: true
      };
    }
    return {
      disabled: false
    };
  }, [requiredFieldsFilled, hasErrors, isSubmitting]);
  const getSaveDraftButtonState = useCallback$2(() => {
    if (isDrafting) {
      return { disabled: true };
    }
    if (!canSave) {
      return {
        disabled: true,
        tooltip: "Cannot save empty draft"
      };
    }
    if (!isDirty) {
      return {
        disabled: true,
        tooltip: "All changes are saved"
      };
    }
    return { disabled: false };
  }, [isDrafting, canSave, isDirty]);
  const resetForm = useCallback$2(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);
  return {
    form,
    handleSubmit: () => handleSubmit(handleFormSubmit)(),
    handleDraftSave,
    setValue,
    getValues,
    validateField,
    validateForm,
    resetForm,
    clearErrors,
    setError,
    formData,
    errors,
    isValid,
    isDirty,
    requiredFieldsFilled,
    validationErrors,
    hasErrors,
    canSave,
    canSubmit,
    isSubmitting,
    isDrafting,
    getSubmitButtonState,
    getSaveDraftButtonState
  };
};
const { forwardRef, useCallback: useCallback$1, useEffect: useEffect$1, useImperativeHandle, useMemo, useState: useState$1 } = await importShared("react");
const ExpenseForm = forwardRef(({
  onSubmit,
  onSaveDraft,
  onDraftSaved,
  initialData,
  draftId,
  isSubmitting = false,
  isDrafting = false,
  draftSaveError = false,
  onButtonStateChange
}, ref) => {
  var _a;
  const fullForm = useFullExpenseForm({
    initialData,
    onSubmit,
    onSaveDraft,
    onDraftSaved,
    isSubmitting,
    isDrafting,
    draftSaveError
  });
  const { control, watch, setValue, formState } = fullForm.form;
  const [formErrors, setFormErrors] = useState$1([]);
  const [isReceiptUploading, setIsReceiptUploading] = useState$1(false);
  const formValues = watch();
  const isReceiptUnavailable = watch("isReceiptUnavailable");
  const isDifferentCurrency = watch("isDifferentCurrency");
  useEffect$1(() => {
    if (onButtonStateChange) {
      const submitState = fullForm.getSubmitButtonState();
      const draftState = fullForm.getSaveDraftButtonState();
      onButtonStateChange(submitState, draftState);
    }
  }, [onButtonStateChange, formState.isDirty, formState.isValid, fullForm.requiredFieldsFilled, fullForm.hasErrors, fullForm.canSave, isSubmitting, isDrafting]);
  const handleReceiptChange = useCallback$1((attachment) => {
    setValue("receiptAttachment", attachment || null, { shouldValidate: true, shouldDirty: false });
    if (attachment) {
      setValue("isReceiptUnavailable", false, { shouldValidate: false });
      setValue("affidavit", null, { shouldValidate: false });
      if (!draftId && onSaveDraft && !isDrafting) {
        const currentData = fullForm.getValues();
        onSaveDraft(currentData);
      }
    }
  }, [setValue, draftId, onSaveDraft, isDrafting, fullForm]);
  const handleReceiptUnavailableChange = useCallback$1((checked) => {
    setValue("isReceiptUnavailable", checked, { shouldValidate: true, shouldDirty: true });
    if (checked) {
      setValue("receiptAttachment", null, { shouldValidate: false, shouldDirty: false });
      setValue("affidavit", { justification: "", digitalSignature: "" }, { shouldValidate: false });
    } else {
      setValue("affidavit", null, { shouldValidate: false });
    }
  }, [setValue]);
  const handleSupportingFilesChange = useCallback$1((attachments) => {
    setValue("supportingFiles", attachments, { shouldValidate: true, shouldDirty: false });
    if (!draftId && attachments.length > 0 && onSaveDraft && !isDrafting) {
      const currentData = fullForm.getValues();
      onSaveDraft(currentData);
    }
  }, [setValue, draftId, onSaveDraft, isDrafting, fullForm]);
  const shouldShowReceiptCheckbox = useMemo(() => {
    return !formValues.receiptAttachment && !isReceiptUploading;
  }, [formValues.receiptAttachment, isReceiptUploading]);
  const handleFormSubmit = useCallback$1(async () => {
    const isValid = await fullForm.validateForm();
    if (isValid) {
      await fullForm.handleSubmit();
    } else {
      setFormErrors(fullForm.validationErrors);
    }
  }, [fullForm]);
  const handleDraftSave = useCallback$1(async () => {
    await fullForm.handleDraftSave();
  }, [fullForm]);
  useImperativeHandle(ref, () => ({
    submitForm: handleFormSubmit,
    saveDraft: handleDraftSave,
    getFormData: () => fullForm.getValues(),
    validateForm: () => ({
      isValid: fullForm.canSubmit,
      errors: fullForm.validationErrors
    }),
    submitButtonState: fullForm.getSubmitButtonState(),
    saveDraftButtonState: fullForm.getSaveDraftButtonState()
  }), [handleFormSubmit, handleDraftSave, fullForm, formValues]);
  const paymentMethodOptions = [
    {
      value: "ca6252",
      label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 text-trax-neutral-1000" }),
        "CA****6252"
      ] })
    },
    {
      value: "ca1234",
      label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 text-exp-yellow-y-700" }),
        "CA****1234"
      ] })
    },
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 flex-1 sticky top-0 bottom-0 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { className: "w-full h-full flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReceiptSection,
        {
          control,
          receiptAttachment: formValues.receiptAttachment,
          isReceiptUnavailable: isReceiptUnavailable ?? false,
          shouldShowCheckbox: shouldShowReceiptCheckbox,
          onReceiptChange: handleReceiptChange,
          onReceiptUnavailableChange: handleReceiptUnavailableChange,
          onUploadingChange: setIsReceiptUploading
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SupportingFiles,
        {
          onFilesChange: handleSupportingFilesChange,
          initialFiles: formValues.supportingFiles || [],
          disabled: isSubmitting
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-2 flex-col gap-3", children: [
      formErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ka, { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Please correct the following errors:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1", children: formErrors.map((error, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm", children: error }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          En,
          {
            title: "EXPENSE DETAILS",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-trax-neutral-950" }),
            required: true
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ka, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "expenseType",
              control,
              render: ({ field, fieldState }) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ExpenseTypeSelect,
                  {
                    value: field.value || "",
                    onChange: field.onChange,
                    onBlur: field.onBlur,
                    error: (_a2 = fieldState.error) == null ? void 0 : _a2.message,
                    required: true
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "vendor",
              control,
              render: ({ field, fieldState }) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Qo,
                  {
                    label: "Vendor",
                    placeholder: "Enter vendor name",
                    ...field,
                    value: field.value || "",
                    error: (_a2 = fieldState.error) == null ? void 0 : _a2.message,
                    required: true
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "expenseDate",
              control,
              render: ({ field, fieldState }) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ta,
                  {
                    label: "Expense date",
                    placeholder: "Select date expense incurred",
                    value: field.value ? new Date(field.value) : void 0,
                    onChange: (date) => field.onChange(date ? date.toISOString() : ""),
                    onBlur: field.onBlur,
                    error: (_a2 = fieldState.error) == null ? void 0 : _a2.message,
                    required: true
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "expenseLocation",
              control,
              render: ({ field, fieldState }) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ea,
                  {
                    label: "Expense location",
                    placeholder: "Select location",
                    options: expenseLocationOptions,
                    value: field.value || "",
                    onValueChange: field.onChange,
                    onBlur: field.onBlur,
                    error: (_a2 = fieldState.error) == null ? void 0 : _a2.message,
                    required: true
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "paymentMethod",
              control,
              render: ({ field, fieldState }) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ea,
                  {
                    label: "Payment method",
                    placeholder: "Select payment method",
                    options: paymentMethodOptions,
                    value: field.value || "",
                    onValueChange: field.onChange,
                    onBlur: field.onBlur,
                    error: (_a2 = fieldState.error) == null ? void 0 : _a2.message,
                    required: true
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: "netAmount",
                control,
                render: ({ field, fieldState }) => {
                  var _a2, _b, _c;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ua,
                    {
                      label: isDifferentCurrency ? "Total (foreign)" : "HST/GST Amount",
                      placeholder: "0.00",
                      currencyCode: ((_a2 = formValues.netCurrency) == null ? void 0 : _a2.code) || "CAD",
                      locale: ((_b = formValues.netCurrency) == null ? void 0 : _b.locale) || "en-CA",
                      symbolStyle: "narrow",
                      ...field,
                      value: field.value || "",
                      enableCurrencySelector: isDifferentCurrency,
                      currencyOptions,
                      onCurrencyChange: (currency) => setValue("netCurrency", { code: currency.code, locale: currency.locale || "en-US" }),
                      required: true,
                      error: (_c = fieldState.error) == null ? void 0 : _c.message
                    }
                  );
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: "totalAmount",
                control,
                render: ({ field, fieldState }) => {
                  var _a2, _b, _c;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ua,
                    {
                      label: isDifferentCurrency ? "Total (converted)" : "Total (including taxes)",
                      placeholder: "0.00",
                      currencyCode: ((_a2 = formValues.totalCurrency) == null ? void 0 : _a2.code) || "CAD",
                      locale: ((_b = formValues.totalCurrency) == null ? void 0 : _b.locale) || "en-CA",
                      symbolStyle: "narrow",
                      ...field,
                      value: field.value || "",
                      enableCurrencySelector: isDifferentCurrency,
                      currencyOptions,
                      onCurrencyChange: (currency) => setValue("totalCurrency", { code: currency.code, locale: currency.locale || "en-US" }),
                      required: true,
                      error: (_c = fieldState.error) == null ? void 0 : _c.message
                    }
                  );
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ea,
            {
              label: "Expense made in a different currency",
              checked: isDifferentCurrency,
              onCheckedChange: (checked) => setValue("isDifferentCurrency", checked === true)
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          En,
          {
            iconClassName: "bg-trax-blue-100",
            title: "EXPENSE JUSTIFICATION",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4 text-trax-neutral-950" }),
            required: true
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ka, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "businessPurpose",
              control,
              render: ({ field, fieldState }) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  BusinessPurposeSelect,
                  {
                    value: field.value || "",
                    onChange: field.onChange,
                    onBlur: field.onBlur,
                    required: true,
                    error: (_a2 = fieldState.error) == null ? void 0 : _a2.message
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "expenseDescription",
              control,
              render: ({ field, fieldState }) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  na,
                  {
                    ...field,
                    label: "Expense description",
                    placeholder: "Describe what was purchased",
                    rows: 1,
                    value: field.value || "",
                    error: (_a2 = fieldState.error) == null ? void 0 : _a2.message,
                    required: true
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "personsEntertained",
              control,
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                na,
                {
                  ...field,
                  label: "Persons entertained",
                  placeholder: "Enter the full names of clients/guests entertained",
                  rows: 1,
                  value: field.value || ""
                }
              )
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          En,
          {
            iconClassName: "bg-trax-yellow-600",
            title: "COST ALLOCATION",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-trax-neutral-950" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ka, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          da,
          {
            allocations: formValues.costAllocations || [],
            totalAmount: parseFloat(formValues.totalAmount || "0"),
            currency: ((_a = formValues.totalCurrency) == null ? void 0 : _a.code) || "CAD",
            showAddButton: false,
            onAddAllocation: () => console.log("Add allocation clicked"),
            onRemoveAllocation: (id) => {
              const updated = (formValues.costAllocations || []).filter((a2) => a2.id !== id);
              setValue("costAllocations", updated);
            }
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          En,
          {
            iconClassName: "bg-trax-violet-100",
            title: "ADDITIONAL COMMENTS",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareMore, { className: "w-4 h-4 text-trax-neutral-950" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ka, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "additionalComments",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              na,
              {
                ...field,
                placeholder: "Add any additional comments...",
                rows: 1,
                value: field.value || ""
              }
            )
          }
        ) }) })
      ] })
    ] })
  ] });
});
const simulateApiDelay = (ms2 = 800) => new Promise((resolve) => setTimeout(resolve, ms2));
const useSaveExpenseDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, draftId }) => {
      await simulateApiDelay(600);
      const endpoint = draftId ? EXPENSE_ENDPOINTS.UPDATE_DRAFT(draftId) : EXPENSE_ENDPOINTS.SAVE_DRAFT;
      const method = draftId ? "put" : "post";
      const response = await apiClient[method](endpoint, { data });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      ls.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save expense draft:", error);
      ls.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data }) => {
      await simulateApiDelay(1e3);
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.SUBMIT_EXPENSE,
        { data }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      ls.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit expense:", error);
      ls.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useExpenseDraft = (draftId) => {
  return useQuery({
    queryKey: draftId ? queryKeys.expenseDrafts.detail(draftId) : queryKeys.expenseDrafts.details(),
    queryFn: async () => {
      if (!draftId) throw new Error("Draft ID is required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_DRAFT(draftId)
      );
      return response.data;
    },
    enabled: !!draftId,
    retry: false,
    staleTime: 0
    // Always fetch when ID changes
  });
};
const useDeleteExpenseDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (draftId) => {
      await simulateApiDelay(500);
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT(draftId));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      ls.success("Draft deleted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to delete draft:", error);
      ls.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
const { useCallback, useEffect, useRef, useState } = await importShared("react");
const NewExpensePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const expenseFormRef = useRef(null);
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const saveDraftMutation = useSaveExpenseDraft();
  const submitExpenseMutation = useSubmitExpense();
  const deleteDraftMutation = useDeleteExpenseDraft();
  const shouldFetchDraft = id && id !== "new";
  const { data: existingDraft, error: draftError, isLoading: isDraftLoading } = useExpenseDraft(shouldFetchDraft ? id : null);
  const draftData = draftError || !existingDraft ? null : existingDraft;
  const expenseTitle = (draftData == null ? void 0 : draftData.data.vendor) || "New Expense";
  const isDraft = !!draftData;
  const currentDraftId = shouldFetchDraft && !draftError && (draftData || isDraftLoading) ? id : null;
  useEffect(() => {
    if (draftError && shouldFetchDraft) {
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [draftError, shouldFetchDraft, navigate]);
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
  const handleDeleteConfirm = async () => {
    if (!currentDraftId) return;
    try {
      await deleteDraftMutation.mutateAsync(currentDraftId);
      setIsDeleteDialogOpen(false);
      navigate(RoutePaths.Expenses);
    } catch (error) {
      console.error("Failed to delete draft:", error);
    }
  };
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ms, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(fa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(pa, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { className: "text-exp-neutral-900 text-xl font-bold", children: expenseTitle }),
            (draftData == null ? void 0 : draftData.data.totalAmount) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
              "$",
              draftData.data.totalAmount
            ] }),
            isDraft && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 bg-exp-yellow-200 text-exp-yellow-900 text-sm font-medium rounded-20", children: "DRAFT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: currentDraftId && draftData && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-exp-neutral-300", children: [
            currentDraftId,
            " • Created on ",
            new Date(draftData.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-38px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExpenseForm,
          {
            ref: expenseFormRef,
            onSubmit: handleSubmit,
            onSaveDraft: handleSaveDraft,
            onDraftSaved: () => {
            },
            initialData: draftData == null ? void 0 : draftData.data,
            draftId: currentDraftId,
            isSubmitting: submitExpenseMutation.isPending,
            isDrafting: saveDraftMutation.isPending,
            draftSaveError: saveDraftMutation.isError,
            onButtonStateChange: handleButtonStateChange
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: currentDraftId && /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Le,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { className: "text-sm", children: "Delete draft" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Le,
                {
                  type: "button",
                  variant: "outlined",
                  onClick: handleSaveDraftClick,
                  disabled: saveDraftButtonState.disabled,
                  children: saveDraftMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }),
                    "Save Draft"
                  ] }) : "Save Draft"
                }
              ) }) }),
              saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: saveDraftButtonState.tooltip })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Le,
                {
                  type: "button",
                  variant: "primary",
                  onClick: handleSubmitClick,
                  disabled: submitButtonState.disabled,
                  children: [
                    submitExpenseMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                    "Submit Expense"
                  ]
                }
              ) }) }),
              submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { className: "text-sm", children: submitButtonState.tooltip })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: setIsDeleteDialogOpen,
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
  NewExpensePage as default
};

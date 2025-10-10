const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/core-Dbi-QRzc.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/_commonjsHelpers-CUmg6egw.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { importShared } from "./__federation_fn_import-DlFISMuz.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-DLKWXVrv.js";
import { E as ExpensesList } from "./ExpensesList-Xh6VcRDy.js";
import { c as createLucideIcon, y as ya, C as Ca, R as Ra, N as Na, F as Fa, _ as _a, D as De, q as qa, h as ha, x as xn, O as Oa, a as Ba, G as Ga, m as ma, b as jo, d as Oo, p as pa, w as wa, B as Bo, e as Go, X as Xo, Y as Yo, J as Ja, Z as Zo, f as Jo, g as ea, Q as Qo } from "./createLucideIcon-DIm8u9Oh.js";
import { I as Icon } from "./Icon-CLuFtx_9.js";
import { L as LoadingSpinner, u as useQueryClient } from "./LoadingSpinner-C-M1heDl.js";
import { A as AllowedMimeType, v as validateReceiptFile, g as getSupportedFormatsText, a as generateAcceptAttribute, b as getFilePreviewType, F as FilePreviewType, M as MIME_TYPE_CONFIG } from "./receipt-BjxWsBul.js";
import { a as apiClient } from "./axiosInstance-BPwdN1IK.js";
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { F as FILE_ENDPOINTS } from "./endpoints-DyuQahSx.js";
import { C as Controller, o as object, s as string, b as boolean, c as custom, a as array, u as useMutation, d as useForm, e as a } from "./schemas-BbJoaiI5.js";
import { F as FileText, C as ChartColumn, c as CreditCard, u as useNavigate, f as ChevronRight, a as RoutePaths } from "./routes-D_bdpp_f.js";
import { S as Send } from "./send-BFf406_z.js";
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
const MAX_SUPPORTING_FILES = 3;
const createSupportingFileAttachment = (file, uploadResponse) => {
  var _a2;
  return {
    id: uploadResponse.id || `supporting-${Date.now()}`,
    url: uploadResponse.url,
    blobUrl: uploadResponse.blobUrl,
    filename: uploadResponse.filename || file.name,
    originalName: file.name,
    size: file.size,
    type: ((_a2 = file.name.split(".").pop()) == null ? void 0 : _a2.toLowerCase()) || "unknown",
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
  var _a2, _b, _c;
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
    const status = (_a2 = error.response) == null ? void 0 : _a2.status;
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
  var _a2, _b;
  try {
    await apiClient.delete(FILE_ENDPOINTS.SUPPORTING_DELETE(fileId));
  } catch (error) {
    console.error("Failed to delete supporting file:", error);
    throw new Error(((_b = (_a2 = error.response) == null ? void 0 : _a2.data) == null ? void 0 : _b.message) || "Failed to delete file");
  }
};
const UPLOAD_TIMEOUT = 12e4;
const MAX_RETRIES = 2;
const uploadReceiptFile = async (file, onProgress, retryCount = 0) => {
  var _a2, _b, _c;
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
    await apiClient.delete(FILE_ENDPOINTS.RECEIPTS_DELETE(receiptId));
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
const { useCallback: useCallback$2, useEffect: useEffect$3, useRef: useRef$3, useState: useState$3 } = React$1;
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
  var _a2;
  const FILE_NAME_POPOVER_DELAY = 600;
  const previewType = getFilePreviewType(file.mimeType);
  if (isUploading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-trax-neutral-600 flex flex-1 min-w-0", children: fileName(file.originalName) })
    ] }) });
  }
  const hasError = error || file.status === "error";
  const errorMessage = (error == null ? void 0 : error.message) || file.errorMessage || "Invalid file";
  if (hasError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { className: "bg-red-50 px-2 py-2 w-full flex justify-between flex-row items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1 min-w-0 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MdError, { className: "text-red-700 scale-110 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { delayDuration: FILE_NAME_POPOVER_DELAY, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { className: "min-w-0 flex-1 text-left flex flex-nowrap items-center", children: fileName(file.originalName) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { variant: "light", size: "sm", className: "max-w-full", side: "bottom", showArrow: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-black", children: file.originalName }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 mr-2 text-sm h-full text-trax-red-600", children: errorMessage.includes("Unsupported file type") ? "Invalid format" : errorMessage.includes("exceeds limit") ? `>${((_a2 = errorMessage.match(/\d+MB/)) == null ? void 0 : _a2[0]) || "Size limit"}` : errorMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "flex hover:cursor-pointer",
            onClick: () => onRemove(index),
            disabled,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-red-600" })
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "bg-white hover:bg-trax-neutral-20 px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center flex-1 min-w-0 gap-2 hover:cursor-pointer hover:underline",
      onClick: () => onPreview(file),
      children: [
        previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-img" }) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-pdf" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "text-line-unknown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { delayDuration: FILE_NAME_POPOVER_DELAY, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { className: "min-w-0 flex-1 text-left flex flex-nowrap items-center", children: fileName(file.originalName) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { variant: "light", size: "sm", className: "max-w-full", side: "bottom", showArrow: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: file.originalName }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "flex hover:cursor-pointer shrink-0",
            onClick: (e) => {
              e.stopPropagation();
              onRemove(index);
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RxCross2, { className: "text-trax-grey-200 hover:text-trax-neutral-900" })
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
  const handleAddSupportingDocumentClick = useCallback$2((e) => {
    var _a2;
    e.preventDefault();
    if (disabled || state.isUploading) return;
    (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
  }, [disabled, state.isUploading]);
  const handleFileChange = useCallback$2(async (e) => {
    var _a2, _b;
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;
    const totalFiles = state.attachments.length + newFiles.length;
    if (totalFiles > MAX_SUPPORTING_FILES) {
      const filesToAdd = MAX_SUPPORTING_FILES - state.attachments.length;
      if (filesToAdd <= 0) {
        qa.error("Maximum 3 supporting files allowed", {
          duration: 3e3
        });
        return;
      }
      qa.error(`Only ${filesToAdd} more file(s) can be added`, {
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
            type: ((_a2 = file.name.split(".").pop()) == null ? void 0 : _a2.toLowerCase()) || "unknown",
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
        const successfulAttachments = newAttachments.filter((a2) => a2.status !== "error");
        onFilesChange == null ? void 0 : onFilesChange(successfulAttachments);
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
  const handleRemoveFile = useCallback$2((index) => {
    if (disabled || state.isUploading) return;
    setDeleteDialogState({
      isOpen: true,
      fileIndex: index,
      isDeleting: false
    });
  }, [disabled, state.isUploading]);
  const handleDeleteConfirm = useCallback$2(async () => {
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
          const successfulAttachments = newAttachments.filter((a2) => a2.status !== "error");
          onFilesChange == null ? void 0 : onFilesChange(successfulAttachments);
          return {
            ...prev,
            attachments: newAttachments,
            errors: reindexedErrors
          };
        });
      } catch {
        qa.error("Failed to delete file", {
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
  const handleDeleteCancel = useCallback$2(() => {
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, []);
  const handlePreviewClick = useCallback$2(async (file) => {
    if (file.status === "error") {
      return;
    }
    try {
      await openFilePreview(file);
    } catch (error) {
      console.error("Failed to open preview:", error);
      qa.error("Failed to open file preview", {
        duration: 3e3
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ha, { className: `flex items-center flex-col w-full h-fit overflow-clip ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row w-full items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        xn,
        {
          iconClassName: "bg-trax-neutral-30",
          title: "SUPPORTING FILES (MAX 3)",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BsPaperclip, { className: "w-4 h-4 text-trax-neutral-950" }),
          className: "text-nowrap w-auto"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center w-full ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { delayDuration: 120, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GrCircleInformation, { className: "text-gray-500 hover:cursor-pointer select-none" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { variant: "default", side: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-trax-blue-700 text-white border-none text-sm p-2 w-64", children: [
          "You can attach up to 3 documents, such as pre-approvals, order confirmations, or bank statements to support this expense. ",
          getSupportedFormatsText()
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center h-full", children: state.attachments.length < MAX_SUPPORTING_FILES ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleAddSupportingDocumentClick,
          disabled: disabled || state.isUploading,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FaPlus,
            {
              className: `${disabled || state.isUploading ? "opacity-20 hover:cursor-not-allowed" : "fill-trax-blue-600 hover:cursor-pointer"}`
            }
          )
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { delayDuration: 120, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddSupportingDocumentClick, disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPlus, { className: "opacity-20 hover:cursor-not-allowed" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ga,
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
          disabled
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: `bg-white w-full p-0 ${state.attachments.length === 0 && !state.isUploading ? "h-0" : "h-auto"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col my-1 mx-2 gap-1", children: [
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
      state.isUploading && state.uploadingFileIndex !== void 0 && state.uploadingFileIndex >= state.attachments.length && /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
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
const { useCallback: useCallback$1, useEffect: useEffect$2, useRef: useRef$2, useState: useState$2 } = React;
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
  useEffect$2(() => {
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
  const handleError = useCallback$1((error) => {
    setUploadState((prev) => ({
      ...prev,
      error,
      isUploading: false
    }));
  }, []);
  const handleFileUpload = useCallback$1(async (file) => {
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
  const handleFileSelect = useCallback$1((event) => {
    var _a2;
    const file = (_a2 = event.target.files) == null ? void 0 : _a2[0];
    if (file) {
      handleFileUpload(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [handleFileUpload]);
  const handleChooseFileClick = useCallback$1(() => {
    var _a2;
    if (disabled || uploadState.isUploading) return;
    (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
  }, [disabled, uploadState.isUploading]);
  const handleDeleteClick = useCallback$1(() => {
    if (!uploadState.attachment || disabled) return;
    setIsDeleteDialogOpen(true);
  }, [uploadState.attachment, disabled]);
  const handleDeleteConfirm = useCallback$1(async () => {
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
  const handleDeleteCancel = useCallback$1(() => {
    setIsDeleteDialogOpen(false);
  }, []);
  const handlePreviewClick = useCallback$1(async () => {
    if (uploadState.attachment) {
      try {
        await openFilePreview(uploadState.attachment);
      } catch (error) {
        console.error("Failed to open preview:", error);
      }
    }
  }, [uploadState.attachment]);
  const handleDragOver = useCallback$1((e) => {
    e.preventDefault();
    if (!disabled && !uploadState.isUploading) {
      setUploadState((prev) => ({ ...prev, dragActive: true }));
    }
  }, [disabled, uploadState.isUploading]);
  const handleDragLeave = useCallback$1((e) => {
    e.preventDefault();
    setUploadState((prev) => ({ ...prev, dragActive: false }));
  }, []);
  const handleDrop = useCallback$1((e) => {
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
    var _a2;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: (_a2 = uploadState.error) == null ? void 0 : _a2.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(De, { variant: "soft", size: "sm", onClick: handleChooseFileClick, children: "Choose file" })
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
      className: `flex-1 h-full items-center justify-center p-8 text-center bg-white rounded-lg transition-colors ${uploadState.dragActive ? "border-trax-blue-400 bg-trax-blue-50" : "border-trax-neutral-300 hover:border-trax-neutral-400"}`,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 h-full", children: [
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
const getFieldError = (errors, touchedFields, dirtyFields, fieldPath) => {
  var _a2, _b;
  const [parent, child] = fieldPath.split(".");
  const parentError = errors[parent];
  if (!parentError || typeof parentError === "string") {
    return void 0;
  }
  const fieldError = parentError[child];
  const isTouched = (_a2 = touchedFields[parent]) == null ? void 0 : _a2[child];
  const isDirty = (_b = dirtyFields[parent]) == null ? void 0 : _b[child];
  return (isTouched || isDirty) && (fieldError == null ? void 0 : fieldError.message) ? fieldError.message : void 0;
};
function AffidavitSection({
  control,
  errors,
  touchedFields,
  dirtyFields
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "w-full max-h-full bg-yellow-50 border-1 border-yellow-200 p-3 flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600", children: "Please sign the affidavit:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.justification",
        control,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          jo,
          {
            ...field,
            value: field.value || "",
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
            error: getFieldError(errors, touchedFields, dirtyFields, "affidavit.justification"),
            required: true
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "affidavit.digitalSignature",
        control,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Oo,
          {
            ...field,
            value: field.value || "",
            onChange: (e) => {
              const upperValue = e.target.value.toUpperCase();
              const filteredValue = upperValue.replace(/[^A-Z]/g, "").slice(0, 3);
              field.onChange(filteredValue);
            },
            className: "w-full bg-white border h-6 resize-none placeholder:font-normal placeholder:text-exp-grey-500 text-md px-2 py-4",
            label: "Digital Signature",
            placeholder: "Enter initials",
            maxLength: 3,
            error: getFieldError(errors, touchedFields, dirtyFields, "affidavit.digitalSignature"),
            required: true
          }
        )
      }
    )
  ] }) }) });
}
function ReceiptSection({
  control,
  errors,
  touchedFields,
  dirtyFields,
  receiptAttachment,
  isReceiptUnavailable,
  shouldShowCheckbox,
  onReceiptChange,
  onReceiptUnavailableChange,
  onUploadingChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { className: "h-full p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        xn,
        {
          iconClassName: "bg-exp-yellow-001 justify-center items-center flex",
          title: "RECEIPT",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-neutral-950" }),
          required: true,
          className: ""
        }
      ),
      shouldShowCheckbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        pa,
        {
          label: "Unavailable",
          checked: isReceiptUnavailable,
          onCheckedChange: onReceiptUnavailableChange
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { className: "min-h-0 h-full", children: isReceiptUnavailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      AffidavitSection,
      {
        control,
        errors,
        touchedFields,
        dirtyFields
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
const affidavitSchema = object({
  justification: string().min(1, "Justification is required").max(150, "Maximum 150 characters allowed"),
  digitalSignature: string().min(1, "Digital signature is required").max(3, "Maximum 3 initials allowed").regex(/^[A-Z]{1,3}$/, "Must be 1-3 uppercase letters").refine((val) => val.length >= 1 && val.length <= 3, {
    message: "Digital signature must be 1-3 initials"
  })
});
({
  SUPPORTED_FORMATS: Object.values(AllowedMimeType),
  MAX_FILE_SIZE_PDF: MIME_TYPE_CONFIG.get(AllowedMimeType.PDF).maxSizeBytes,
  MAX_FILE_SIZE_IMAGE: MIME_TYPE_CONFIG.get(AllowedMimeType.PNG).maxSizeBytes
});
const receiptWithAffidavitSchema = object({
  receiptAttachment: custom().optional().nullable(),
  isReceiptUnavailable: boolean().default(false),
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
});
const supportingFilesSchema = object({
  supportingFiles: array(custom()).optional().default([])
});
const expenseFormSchema = receiptWithAffidavitSchema.merge(supportingFilesSchema);
const getDefaultExpenseFormValues = (initialData) => ({
  receiptAttachment: (initialData == null ? void 0 : initialData.receiptAttachment) ?? null,
  isReceiptUnavailable: (initialData == null ? void 0 : initialData.isReceiptUnavailable) ?? false,
  affidavit: (initialData == null ? void 0 : initialData.affidavit) ?? null,
  supportingFiles: (initialData == null ? void 0 : initialData.supportingFiles) ?? []
});
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
const { useCallback, useEffect: useEffect$1, useMemo, useRef: useRef$1, useState: useState$1 } = await importShared("react");
const useExpenseForm = ({
  initialData,
  onSaveDraft,
  onCancel,
  isLoading = false,
  companyId
} = {}) => {
  const saveReceiptDraftMutation = useSaveReceiptDraft();
  const abortControllerRef = useRef$1(null);
  const [isReceiptUploading, setIsReceiptUploading] = useState$1(false);
  const defaultValues = useMemo(
    () => getDefaultExpenseFormValues(initialData),
    []
    // Only calculate once on mount
  );
  const form = useForm({
    resolver: a(expenseFormSchema),
    defaultValues,
    mode: "onTouched",
    // Validate on blur
    reValidateMode: "onChange",
    criteriaMode: "all"
  });
  useEffect$1(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: {
      errors,
      isValid,
      isDirty,
      isSubmitting,
      touchedFields,
      dirtyFields
    }
  } = form;
  const receiptAttachment = watch("receiptAttachment");
  const isReceiptUnavailable = watch("isReceiptUnavailable");
  const affidavit = watch("affidavit");
  const supportingFiles = watch("supportingFiles");
  const handleReceiptChange = useCallback((attachment) => {
    setValue("receiptAttachment", attachment || null, {
      shouldDirty: true,
      shouldValidate: true
    });
    if (attachment) {
      setValue("isReceiptUnavailable", false, {
        shouldDirty: true,
        shouldValidate: false
      });
      setValue("affidavit", null, {
        shouldDirty: true,
        shouldValidate: false
      });
    }
  }, [setValue]);
  const handleReceiptUnavailableChange = useCallback((checked) => {
    setValue("isReceiptUnavailable", checked, {
      shouldDirty: true,
      shouldValidate: true
    });
    if (checked) {
      setValue("receiptAttachment", null, {
        shouldDirty: true,
        shouldValidate: false
      });
      setValue("affidavit", {
        justification: "",
        digitalSignature: ""
      }, {
        shouldDirty: true,
        shouldValidate: false
        // Don't validate immediately on checkbox check
      });
    } else {
      setValue("affidavit", null, {
        shouldDirty: true,
        shouldValidate: false
      });
    }
  }, [setValue]);
  const handleSupportingFilesChange = useCallback((attachments) => {
    setValue("supportingFiles", attachments, {
      shouldDirty: true,
      shouldValidate: true
    });
  }, [setValue]);
  const handleSaveDraft = useCallback(
    async (data) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();
      try {
        await saveReceiptDraftMutation.mutateAsync({
          companyId,
          data: {
            receiptAttachment: data.receiptAttachment,
            isReceiptUnavailable: data.isReceiptUnavailable
          }
        });
        await (onSaveDraft == null ? void 0 : onSaveDraft(data));
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        console.error("Save draft error:", error);
        throw error;
      } finally {
        abortControllerRef.current = null;
      }
    },
    [onSaveDraft, saveReceiptDraftMutation, companyId]
  );
  const handleCancel = useCallback(() => {
    reset();
    onCancel == null ? void 0 : onCancel();
  }, [reset, onCancel]);
  const getFieldError2 = useCallback(
    (fieldName) => {
      const parts = fieldName.split(".");
      let error = errors;
      let touched = touchedFields;
      for (const part of parts) {
        error = error == null ? void 0 : error[part];
        touched = touched == null ? void 0 : touched[part];
      }
      return touched && (error == null ? void 0 : error.message) ? error.message : void 0;
    },
    [errors, touchedFields]
  );
  const hasFieldError = useCallback(
    (fieldName) => {
      return Boolean(getFieldError2(fieldName));
    },
    [getFieldError2]
  );
  const shouldShowReceiptCheckbox = useMemo(() => {
    return !receiptAttachment && !isReceiptUploading;
  }, [receiptAttachment, isReceiptUploading]);
  return {
    form,
    handleSubmit: handleSubmit(handleSaveDraft),
    setValue,
    control,
    watch,
    reset,
    receiptAttachment,
    isReceiptUnavailable,
    affidavit,
    supportingFiles,
    handleReceiptChange,
    handleReceiptUnavailableChange,
    handleSupportingFilesChange,
    setIsReceiptUploading,
    shouldShowReceiptCheckbox,
    errors,
    isValid,
    isDirty,
    isSubmitting,
    touchedFields,
    dirtyFields,
    getFieldError: getFieldError2,
    hasFieldError,
    handleCancel,
    canSaveDraft: useMemo(() => {
      return !isSubmitting && !isLoading && !saveReceiptDraftMutation.isPending;
    }, [isSubmitting, isLoading, saveReceiptDraftMutation.isPending]),
    isFormLoading: isLoading || isSubmitting || saveReceiptDraftMutation.isPending,
    isSavingDraft: saveReceiptDraftMutation.isPending,
    saveDraftError: saveReceiptDraftMutation.error
  };
};
const defaultCostAllocations = [
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
];
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
  affidavit: void 0,
  isDifferentCurrency: false,
  netCurrency: { code: "USD", locale: "en-US" },
  totalCurrency: { code: "CAD", locale: "en-CA" },
  costAllocations: [...defaultCostAllocations]
});
const { forwardRef, useImperativeHandle, useState } = await importShared("react");
const ExpenseForm = forwardRef(({
  onSubmit,
  onSaveDraft,
  // onCancel,
  initialData,
  isSubmitting = false
  // isDrafting = false,
}, ref) => {
  const receiptForm = useExpenseForm({
    initialData: {
      receiptAttachment: (initialData == null ? void 0 : initialData.receiptAttachment) ?? null,
      isReceiptUnavailable: (initialData == null ? void 0 : initialData.isReceiptUnavailable) ?? false,
      affidavit: (initialData == null ? void 0 : initialData.affidavit) ?? null,
      supportingFiles: (initialData == null ? void 0 : initialData.supportingFiles) ?? []
    },
    isLoading: isSubmitting
  });
  const [formData, setFormData] = useState(() => ({
    ...createEmptyExpenseFormData(),
    ...initialData
  }));
  const [formErrors, setFormErrors] = useState([]);
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors.length > 0) {
      setFormErrors([]);
    }
  };
  const handleFormSubmit = () => {
    const completeFormData = {
      ...formData,
      receiptAttachment: receiptForm.receiptAttachment || void 0,
      isReceiptUnavailable: receiptForm.isReceiptUnavailable,
      affidavit: receiptForm.affidavit || void 0,
      supportingFiles: receiptForm.supportingFiles || []
    };
    onSubmit == null ? void 0 : onSubmit(completeFormData);
  };
  const handleSaveDraft = async () => {
    await receiptForm.handleSubmit();
    const completeFormData = {
      ...formData,
      receiptAttachment: receiptForm.receiptAttachment || void 0,
      isReceiptUnavailable: receiptForm.isReceiptUnavailable,
      affidavit: receiptForm.affidavit || void 0,
      supportingFiles: receiptForm.supportingFiles || []
    };
    onSaveDraft == null ? void 0 : onSaveDraft(completeFormData);
  };
  const expenseTypeOptions = [
    { value: "travel", label: "Travel" },
    { value: "meals", label: "Meals & Entertainment" },
    { value: "supplies", label: "Office Supplies" },
    { value: "software", label: "Software & Subscriptions" },
    { value: "other", label: "Other" }
  ];
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
    getFormData: () => ({
      ...formData,
      receiptAttachment: receiptForm.receiptAttachment || void 0,
      isReceiptUnavailable: receiptForm.isReceiptUnavailable,
      affidavit: receiptForm.affidavit || void 0,
      supportingFiles: receiptForm.supportingFiles || []
    }),
    validateForm: () => ({ isValid: receiptForm.isValid, errors: [] })
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 flex-1 sticky top-0 bottom-0 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { className: "w-full h-full flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReceiptSection,
        {
          control: receiptForm.control,
          errors: receiptForm.errors,
          touchedFields: receiptForm.touchedFields,
          dirtyFields: receiptForm.dirtyFields,
          receiptAttachment: receiptForm.receiptAttachment,
          isReceiptUnavailable: receiptForm.isReceiptUnavailable,
          shouldShowCheckbox: receiptForm.shouldShowReceiptCheckbox,
          onReceiptChange: receiptForm.handleReceiptChange,
          onReceiptUnavailableChange: receiptForm.handleReceiptUnavailableChange,
          onUploadingChange: receiptForm.setIsReceiptUploading
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SupportingFiles,
        {
          onFilesChange: receiptForm.handleSupportingFilesChange,
          initialFiles: receiptForm.supportingFiles,
          disabled: isSubmitting
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-2 flex-col gap-3", children: [
      formErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(wa, { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Please correct the following errors:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1", children: formErrors.map((error, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm", children: error }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ma, { children: [
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
                label: formData.isDifferentCurrency ? "Total (foreign)" : "Tax Amount",
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
              const updatedAllocations = formData.costAllocations.filter((a2) => a2.id !== id);
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
    ] })
  ] });
});
const { useEffect, useRef } = await importShared("react");
const NewExpensePage = () => {
  const navigate = useNavigate();
  const toasterClicked = useRef(false);
  const timeoutRef = useRef(null);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const expenseFormRef = useRef(null);
  const handleSubmit = (data) => {
    console.log("Expense submitted:", data);
    navigate(RoutePaths.Expenses);
  };
  const handleSaveDraft = (data) => {
    console.log("Full expense draft saved:", data);
  };
  const handleOverlayClick = (event) => {
    if (!event) return;
    const target = event.target;
    if (!target.classList.contains("trax-ui-component")) {
      toasterClicked.current = true;
      timeoutRef.current = setTimeout(() => {
        toasterClicked.current = false;
      }, 100);
    }
  };
  const handleOpenChange = (open) => {
    if (!open && !toasterClicked.current) {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Zo, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", onPointerDownOutside: (e) => handleOverlayClick(e), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Jo, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ea, { className: "text-exp-neutral-950", children: "New Expense" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-24px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(De, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(De, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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

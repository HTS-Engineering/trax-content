import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { D as Da, P as Pa, b as Dn, I as ms, J as He, z as za, K as ra, l as ls, v as vr, w as wr, S as Sr } from "./createLucideIcon-moxpJjMi.js";
import "./api-BFdkxOZU.js";
import { L as LoadingSpinner } from "./LoadingSpinner-RVX0UBjq.js";
import "./api-1J9CdvDF.js";
import "./api-7KW5-cIh.js";
import { q as useCostAllocation, r as useEqualSplit, s as COST_ALLOCATION_LABELS, t as AllocationTypeChips, v as CostAllocationField, D as DEFAULT_CURRENCY_CODE, w as AddAllocationExpandable, x as checkRateLimit, y as shouldUseEnhancedValidation, z as validateFileContentEnhanced, B as validateFileContent, G as isApiError, H as sleep, I as getErrorMessage, J as calculateExponentialBackoff, K as validateReceiptFile, L as openFilePreview, N as getSupportedFormatsText, O as generateAcceptAttribute, C as ConfirmDialog, P as getFilePreviewType, Q as FilePreviewType } from "./AddAllocationExpandable-D2rGlruZ.js";
import { c as useWatch } from "./store-CHGJZQrO.js";
import { C as ChartColumn } from "./routes-DAJgTe7V.js";
import { I as Icon } from "./Icon-Bji1Sbhm.js";
import { a as apiClient } from "./axiosInstance-S46OOVwd.js";
import { F as FILE_ENDPOINTS } from "./config-CcAFLaBz.js";
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
const createSupportingFileAttachment = (file, uploadResponse) => {
  var _a;
  return {
    id: uploadResponse.id || `supporting-${Date.now()}`,
    url: uploadResponse.url || "",
    blobUrl: uploadResponse.thumbnailUrl,
    filename: uploadResponse.fileName || file.name,
    originalName: file.name,
    size: uploadResponse.fileSize || file.size,
    type: ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "unknown",
    mimeType: uploadResponse.mimeType || file.type,
    uploadedAt: uploadResponse.uploadedAt || (/* @__PURE__ */ new Date()).toISOString(),
    status: "uploaded"
  };
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
const renameConflictingFiles = (newFiles, existingFilenames) => {
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
};
const { memo } = await importShared("react");
const CostAllocationSection = memo(
  ({
    control,
    setValue,
    trigger,
    disabled = false,
    actions,
    helpers
  }) => {
    const { totalAmount, totalCurrency, costAllocations, isEqualSplit } = useFormFieldValues(control, [
      "totalAmount",
      "totalCurrency",
      "costAllocations",
      "isEqualSplit"
    ]);
    const allocations = costAllocations || [];
    const parsedTotalAmount = parseFloat(totalAmount || "0");
    const {
      isEnabled,
      progressValue,
      progressError
    } = useCostAllocation({
      allocations,
      totalAmount: parsedTotalAmount
    });
    const {
      canEnableEqualSplit,
      toggleEqualSplit
    } = useEqualSplit({
      allocations,
      isEqualSplit: isEqualSplit ?? false,
      setValue,
      getValues: helpers.getValues,
      totalAmount: parsedTotalAmount
    });
    const hasAllocations = allocations.length > 0;
    const { addAllocation, updateAllocationEntity, removeAllocation } = actions;
    const { getSelectedValue } = helpers;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dn,
          {
            iconClassName: "bg-trax-yellow-600",
            title: COST_ALLOCATION_LABELS.SECTION_TITLE,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-trax-neutral-950" })
          }
        ),
        canEnableEqualSplit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ms,
            {
              id: "equal-split-toggle",
              checked: isEqualSplit ?? false,
              onCheckedChange: toggleEqualSplit,
              disabled: !isEnabled || disabled
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            He,
            {
              htmlFor: "equal-split-toggle",
              className: "text-xs font-medium text-exp-neutral-700 cursor-pointer",
              children: COST_ALLOCATION_LABELS.EQUAL_SPLIT
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(za, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ra, { value: progressValue, disabled: !isEnabled, error: progressError }),
        !hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AllocationTypeChips,
          {
            onSelect: (type) => addAllocation(type),
            disabled: !isEnabled || disabled
          }
        ) }),
        hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          allocations.map((allocation, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CostAllocationField,
            {
              control,
              setValue,
              trigger,
              index,
              type: allocation.type,
              value: getSelectedValue(allocation.id, allocations),
              onValueChange: (item) => updateAllocationEntity(allocation.id, item),
              totalAmount: parsedTotalAmount,
              currencyCode: (totalCurrency == null ? void 0 : totalCurrency.code) || DEFAULT_CURRENCY_CODE,
              disabled: !isEnabled || disabled,
              onRemove: () => removeAllocation(allocation.id)
            },
            allocation.id
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AddAllocationExpandable,
            {
              onTypeSelect: (type) => addAllocation(type),
              disabled: !isEnabled || disabled
            }
          )
        ] })
      ] }) })
    ] });
  }
);
CostAllocationSection.displayName = "CostAllocationSection";
const React$2 = await importShared("react");
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React$2.createContext && /* @__PURE__ */ React$2.createContext(DefaultContext);
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
const React$1 = await importShared("react");
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React$1.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React$1.createElement(IconBase, _extends({
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
    return /* @__PURE__ */ React$1.createElement("svg", _extends({
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
    }), title && /* @__PURE__ */ React$1.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React$1.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
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
const UPLOAD_TIMEOUT = 12e4;
const MAX_RETRIES = 2;
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
  const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT);
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
    if (error instanceof Error && (error.name === "CanceledError" || error.code === "ECONNABORTED")) {
      throw new Error("Upload timeout. Please check your connection and try again.");
    }
    if (isApiError(error)) {
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
          if (retryCount < MAX_RETRIES) {
            const delay = calculateExponentialBackoff(retryCount);
            await sleep(delay);
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
    throw new Error(getErrorMessage(error));
  }
};
const deleteSupportingFile = async (fileId) => {
  var _a, _b;
  try {
    await apiClient.delete(FILE_ENDPOINTS.SUPPORTING_DELETE(fileId));
  } catch (error) {
    console.error("Failed to delete supporting file:", error);
    const message = isApiError(error) ? ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to delete file" : getErrorMessage(error);
    throw new Error(message);
  }
};
const MAX_SUPPORTING_FILES = 3;
const React = await importShared("react");
const { useCallback, useEffect, useRef, useState } = React;
function fileName(fileName2) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-sm text-trax-blue-600 hover:cursor-pointer min-w-0 shrink", children: fileName2 });
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-trax-neutral-600 flex flex-1 min-w-0", children: fileName(file.originalName) })
    ] }) });
  }
  const hasError = error || file.status === "error";
  const errorMessage = (error == null ? void 0 : error.message) || file.errorMessage || "Invalid file";
  if (hasError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { className: "bg-red-50 px-2 py-2 w-full flex justify-between flex-row items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1 min-w-0 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MdError, { className: "text-red-700 scale-110 shrink-0", title: "File error icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { delayDuration: FILE_NAME_POPOVER_DELAY, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { className: "min-w-0 text-left flex flex-nowrap items-center", children: fileName(file.originalName) }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { className: "bg-white hover:bg-trax-neutral-20 px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center flex-1 min-w-0 gap-2 hover:cursor-pointer hover:underline",
      onClick: () => onPreview(file),
      children: [
        previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-img", "data-testid": "icon-file-img" }) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "icon-file-pdf", "data-testid": "icon-file-pdf" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "shrink-0", name: "text-line-unknown", "data-testid": "icon-file-unknown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { delayDuration: FILE_NAME_POPOVER_DELAY, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { className: "min-w-0 text-left flex flex-nowrap items-center", children: fileName(file.originalName) }),
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
  const fileInputRef = useRef(null);
  const [state, setState] = useState({
    attachments: initialFiles,
    isUploading: false,
    errors: /* @__PURE__ */ new Map()
  });
  const [deleteDialogState, setDeleteDialogState] = useState({
    isOpen: false,
    fileIndex: null,
    isDeleting: false
  });
  const blobUrlsRef = useRef(/* @__PURE__ */ new Set());
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
  const handleAddSupportingDocumentClick = useCallback((e) => {
    var _a;
    e.preventDefault();
    if (disabled || state.isUploading) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [disabled, state.isUploading]);
  const handleFileChange = useCallback(async (e) => {
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
    const existingFilenames = new Set(state.attachments.map((a) => a.originalName));
    const filesWithUniqueNames = renameConflictingFiles(
      newFiles,
      existingFilenames
    );
    filesWithUniqueNames.forEach((file) => {
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
            const errorMessage = getErrorMessage(error2);
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
              errorMessage
            };
            processedFiles.push(errorAttachment);
            fileErrors.set(currentIndex, {
              type: "network",
              message: errorMessage,
              details: error2 instanceof Error ? error2.toString() : String(error2)
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
  const handleRemoveFile = useCallback((index) => {
    if (disabled || state.isUploading) return;
    setDeleteDialogState({
      isOpen: true,
      fileIndex: index,
      isDeleting: false
    });
  }, [disabled, state.isUploading]);
  const handleDeleteConfirm = useCallback(async () => {
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
  const handleDeleteCancel = useCallback(() => {
    setDeleteDialogState({
      isOpen: false,
      fileIndex: null,
      isDeleting: false
    });
  }, []);
  const handlePreviewClick = useCallback(async (file) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Pa, { className: `flex items-center flex-col w-full h-fit overflow-clip ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row w-full items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Dn,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { className: `bg-white w-full p-0 ${state.attachments.length === 0 && !state.isUploading ? "h-0" : "h-auto"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col my-1 mx-2 gap-1", children: [
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
      state.isUploading && state.uploadingFileIndex !== void 0 && state.uploadingFileIndex >= state.attachments.length && /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { className: "bg-white px-2 py-2 w-full flex justify-between flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
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
export {
  CostAllocationSection as C,
  SupportingFiles as S,
  useFormFieldValues as u
};

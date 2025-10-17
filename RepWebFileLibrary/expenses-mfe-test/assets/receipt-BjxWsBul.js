var AllowedMimeType = /* @__PURE__ */ ((AllowedMimeType2) => {
  AllowedMimeType2["PNG"] = "image/png";
  AllowedMimeType2["JPEG"] = "image/jpeg";
  AllowedMimeType2["JPG"] = "image/jpg";
  AllowedMimeType2["WEBP"] = "image/webp";
  AllowedMimeType2["HEIC"] = "image/heic";
  AllowedMimeType2["HEIF"] = "image/heif";
  AllowedMimeType2["PDF"] = "application/pdf";
  return AllowedMimeType2;
})(AllowedMimeType || {});
var FilePreviewType = /* @__PURE__ */ ((FilePreviewType2) => {
  FilePreviewType2["IMAGE"] = "image";
  FilePreviewType2["PDF"] = "pdf";
  FilePreviewType2["UNKNOWN"] = "unknown";
  return FilePreviewType2;
})(FilePreviewType || {});
const FILE_SIZE_LIMITS = {
  IMAGE_MAX_SIZE_MB: 25,
  PDF_MAX_SIZE_MB: 50,
  IMAGE_MAX_SIZE_BYTES: 25 * 1024 * 1024,
  PDF_MAX_SIZE_BYTES: 50 * 1024 * 1024
};
const MIME_TYPE_CONFIG = /* @__PURE__ */ new Map([
  ["image/png", {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "PNG"
  }],
  ["image/jpeg", {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "JPEG"
  }],
  ["image/jpg", {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "JPG"
  }],
  ["image/webp", {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "WebP"
  }],
  ["image/heic", {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "HEIC"
  }],
  ["image/heif", {
    type: "image",
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "HEIF"
  }],
  ["application/pdf", {
    type: "pdf",
    maxSizeBytes: FILE_SIZE_LIMITS.PDF_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB,
    displayName: "PDF"
  }]
]);
({
  allowedMimeTypes: Object.values(AllowedMimeType)
});
const canBrowserDisplayImage = (mimeType) => {
  const browserSupportedImages = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
    /* WEBP */
  ];
  return browserSupportedImages.includes(mimeType);
};
const getFilePreviewType = (mimeType) => {
  const config = MIME_TYPE_CONFIG.get(mimeType);
  if ((config == null ? void 0 : config.type) === "image") {
    if (canBrowserDisplayImage(mimeType)) {
      return "image";
    }
    return "unknown";
  }
  if ((config == null ? void 0 : config.type) === "pdf") {
    return "pdf";
  }
  return "unknown";
};
const isValidMimeType = (mimeType) => {
  return MIME_TYPE_CONFIG.has(mimeType);
};
const MIME_TO_EXTENSION_MAP = {
  [
    "image/png"
    /* PNG */
  ]: [".png"],
  [
    "image/jpeg"
    /* JPEG */
  ]: [".jpeg"],
  [
    "image/jpg"
    /* JPG */
  ]: [".jpg"],
  [
    "image/webp"
    /* WEBP */
  ]: [".webp"],
  [
    "image/heic"
    /* HEIC */
  ]: [".heic"],
  [
    "image/heif"
    /* HEIF */
  ]: [".heif"],
  [
    "application/pdf"
    /* PDF */
  ]: [".pdf"]
};
const generateAcceptAttribute = () => {
  const mimeTypes = Object.values(AllowedMimeType);
  const extensions = mimeTypes.flatMap((mimeType) => MIME_TO_EXTENSION_MAP[mimeType]);
  return [...extensions, ...mimeTypes].join(",");
};
const getSupportedFormatsText = () => {
  const imageFormats = ["PNG", "JPG/JPEG", "HEIC/HEIF", "WebP"];
  const pdfFormat = "PDF";
  return `Upload ${imageFormats.join(", ")} (max. ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB) or ${pdfFormat} (max. ${FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB}MB)`;
};
const validateReceiptFile = (file) => {
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
      details: `Unknown file type with extension: ${fileName.split(".").pop()}`
    };
  }
  let mimeType = file.type;
  if (!file.type && hasAllowedExtension) {
    if (fileName.endsWith(".heic")) mimeType = "image/heic";
    else if (fileName.endsWith(".heif")) mimeType = "image/heif";
    else if (fileName.endsWith(".png")) mimeType = "image/png";
    else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) mimeType = "image/jpeg";
    else if (fileName.endsWith(".webp")) mimeType = "image/webp";
    else if (fileName.endsWith(".pdf")) mimeType = "application/pdf";
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
};
export {
  AllowedMimeType as A,
  FilePreviewType as F,
  MIME_TYPE_CONFIG as M,
  generateAcceptAttribute as a,
  getFilePreviewType as b,
  getSupportedFormatsText as g,
  validateReceiptFile as v
};

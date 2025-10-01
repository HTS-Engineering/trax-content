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
const MIME_TYPE_CONFIG = /* @__PURE__ */ new Map([
  ["image/png", {
    type: "image",
    maxSizeBytes: 25 * 1024 * 1024,
    maxSizeMB: 25,
    displayName: "PNG"
  }],
  ["image/jpeg", {
    type: "image",
    maxSizeBytes: 25 * 1024 * 1024,
    maxSizeMB: 25,
    displayName: "JPEG"
  }],
  ["image/jpg", {
    type: "image",
    maxSizeBytes: 25 * 1024 * 1024,
    maxSizeMB: 25,
    displayName: "JPG"
  }],
  ["image/webp", {
    type: "image",
    maxSizeBytes: 25 * 1024 * 1024,
    maxSizeMB: 25,
    displayName: "WebP"
  }],
  ["image/heic", {
    type: "image",
    maxSizeBytes: 25 * 1024 * 1024,
    maxSizeMB: 25,
    displayName: "HEIC"
  }],
  ["image/heif", {
    type: "image",
    maxSizeBytes: 25 * 1024 * 1024,
    maxSizeMB: 25,
    displayName: "HEIF"
  }],
  ["application/pdf", {
    type: "pdf",
    maxSizeBytes: 50 * 1024 * 1024,
    maxSizeMB: 50,
    displayName: "PDF"
  }]
]);
const getFilePreviewType = (mimeType) => {
  const config = MIME_TYPE_CONFIG.get(mimeType);
  return (config == null ? void 0 : config.type) || "unknown";
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
  const imageSizeLimit = "25MB";
  const pdfSizeLimit = "50MB";
  return `Upload ${imageFormats.join(", ")} (max. ${imageSizeLimit}) or ${pdfFormat} (max. ${pdfSizeLimit})`;
};
const validateReceiptFile = (file) => {
  if (!isValidMimeType(file.type)) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Received MIME type: ${file.type}`
    };
  }
  const config = MIME_TYPE_CONFIG.get(file.type);
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
  getFilePreviewType as a,
  getSupportedFormatsText as b,
  generateAcceptAttribute as g,
  validateReceiptFile as v
};

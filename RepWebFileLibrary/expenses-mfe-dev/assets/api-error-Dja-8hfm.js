var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
const OPAQUE_KINDS = /* @__PURE__ */ new Set([
  "offline",
  "timeout",
  "server",
  "unknown"
]);
const TIMEOUT_CODES = /* @__PURE__ */ new Set(["ECONNABORTED", "ETIMEDOUT"]);
function getResponseStatus(error) {
  var _a;
  if (isHttpApiError(error)) {
    const status = (_a = error.response) == null ? void 0 : _a.status;
    return typeof status === "number" ? status : void 0;
  }
  return void 0;
}
__name(getResponseStatus, "getResponseStatus");
function getAxiosCode(error) {
  const code = error == null ? void 0 : error.code;
  return typeof code === "string" ? code : void 0;
}
__name(getAxiosCode, "getAxiosCode");
function statusToKind(status) {
  if (status >= 500) return "server";
  switch (status) {
    case 401:
      return "unauthorized";
    case 403:
      return "forbidden";
    case 404:
      return "notFound";
    case 409:
      return "conflict";
    case 422:
      return "validation";
    default:
      return status >= 400 ? "badRequest" : "unknown";
  }
}
__name(statusToKind, "statusToKind");
function classifyApiError(error) {
  const status = getResponseStatus(error);
  if (status !== void 0) {
    return { kind: statusToKind(status), status };
  }
  const code = getAxiosCode(error);
  if (code && TIMEOUT_CODES.has(code)) return { kind: "timeout" };
  if (code === "ERR_NETWORK") return { kind: "offline" };
  if (error instanceof Error) return { kind: "offline" };
  return { kind: "unknown" };
}
__name(classifyApiError, "classifyApiError");
function isRetryableApiError(error) {
  const { kind } = classifyApiError(error);
  return kind === "offline" || kind === "timeout" || kind === "server";
}
__name(isRetryableApiError, "isRetryableApiError");
function getResponseBody(error) {
  var _a;
  if (!isHttpApiError(error)) return void 0;
  const data = (_a = error.response) == null ? void 0 : _a.data;
  return data && typeof data === "object" ? data : void 0;
}
__name(getResponseBody, "getResponseBody");
function locToField(loc) {
  if (!Array.isArray(loc)) return void 0;
  for (let i = loc.length - 1; i >= 0; i--) {
    const segment = loc[i];
    if (typeof segment === "string" && segment !== "body" && segment !== "query") {
      return segment;
    }
  }
  return void 0;
}
__name(locToField, "locToField");
function extractApiFieldErrors(error) {
  var _a;
  const detail = (_a = getResponseBody(error)) == null ? void 0 : _a.detail;
  if (!Array.isArray(detail)) return [];
  const result = [];
  for (const item of detail) {
    if (!item || typeof item !== "object") continue;
    const record = item;
    if (typeof record.field === "string" && typeof record.message === "string") {
      result.push({ field: record.field, message: record.message });
      continue;
    }
    if (typeof record.msg === "string") {
      result.push({ field: locToField(record.loc) ?? "", message: record.msg });
    }
  }
  return result;
}
__name(extractApiFieldErrors, "extractApiFieldErrors");
function extractApiMessages(error) {
  const body = getResponseBody(error);
  if (!body) return [];
  const { detail } = body;
  if (typeof detail === "string" && detail.trim()) return [detail];
  if (Array.isArray(detail)) {
    const messages = extractApiFieldErrors(error).map((e) => e.message).filter(Boolean);
    if (messages.length) return messages;
  }
  if (typeof body.message === "string" && body.message.trim()) return [body.message];
  return [];
}
__name(extractApiMessages, "extractApiMessages");
const DEFAULT_FALLBACK = "Something went wrong. Please try again.";
function getApiErrorMessage(error, options = {}) {
  const fallback = options.fallback ?? DEFAULT_FALLBACK;
  const { kind } = classifyApiError(error);
  if (OPAQUE_KINDS.has(kind)) return fallback;
  const messages = extractApiMessages(error);
  return messages.length ? messages.join("\n") : fallback;
}
__name(getApiErrorMessage, "getApiErrorMessage");
export {
  getHttpErrorMessage as a,
  isRetryableApiError as b,
  extractApiFieldErrors as e,
  getApiErrorMessage as g,
  isHttpApiError as i
};

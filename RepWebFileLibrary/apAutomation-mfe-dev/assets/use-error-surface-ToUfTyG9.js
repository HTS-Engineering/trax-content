var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
const ERROR_MESSAGES = {
  /** Landing toast when a user is denied a subpage (client role gate or a backend 403). */
  NO_PAGE_ACCESS: "You don't have access to the requested page",
  /** A backend 403 on something the user tried to do, rather than a page they tried to open. */
  NO_ACTION_PERMISSION: "You don't have permission to do this.",
  /** Generic data-load failure (network / backend endpoint / integration sync). */
  LOAD_ALL_DATA_FAILED: "Unable to load all data. Try again or contact support if the issue persists.",
  /** Generic failure of something the user asked for (save, submit, approve, upload). */
  ACTION_FAILED: "That did not go through. Try again or contact support if the issue persists.",
  /** No response reached the browser at all: network down, VPN off, DNS, CORS, client timeout. */
  CONNECTION_FAILED: "Cannot reach the server. Check your connection and try again.",
  /** A 401 while the user is working: the session is gone and nothing will load until re-auth. */
  SESSION_EXPIRED: "Your session has expired. Please refresh the page to sign in again.",
  /** No token was ever handed over, so the user is not signed in rather than under-privileged. */
  NOT_SIGNED_IN: "You are not signed in. Please refresh the page to sign in."
};
const _AppError = class _AppError extends Error {
  constructor(message) {
    super(message);
    this.name = "AppError";
  }
};
__name(_AppError, "AppError");
let AppError = _AppError;
function isAppError(error) {
  return error instanceof AppError;
}
__name(isAppError, "isAppError");
function isHttpApiError(error) {
  return error instanceof Error && "response" in error;
}
__name(isHttpApiError, "isHttpApiError");
const TIMEOUT_CODES = /* @__PURE__ */ new Set(["ECONNABORTED", "ETIMEDOUT"]);
const RETRYABLE_KINDS = /* @__PURE__ */ new Set(["offline", "timeout", "server"]);
function getResponseStatus$1(error) {
  var _a;
  if (!isHttpApiError(error)) return void 0;
  const status = (_a = error.response) == null ? void 0 : _a.status;
  return typeof status === "number" ? status : void 0;
}
__name(getResponseStatus$1, "getResponseStatus$1");
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
function classifyError(error) {
  const status = getResponseStatus$1(error);
  if (status !== void 0) return { kind: statusToKind(status), status };
  const code = getAxiosCode(error);
  if (code === "ERR_CANCELED") return { kind: "canceled" };
  if (code && TIMEOUT_CODES.has(code)) return { kind: "timeout" };
  if (code) return { kind: "offline" };
  if (error instanceof Error) return { kind: "client" };
  return { kind: "unknown" };
}
__name(classifyError, "classifyError");
function isRetryableError(error) {
  return RETRYABLE_KINDS.has(classifyError(error).kind);
}
__name(isRetryableError, "isRetryableError");
function isNotFoundError(error) {
  return getResponseStatus$1(error) === 404;
}
__name(isNotFoundError, "isNotFoundError");
const EMPTY = { messages: [], fieldErrors: [], source: null };
function getResponseBody(error) {
  var _a;
  if (!isHttpApiError(error)) return void 0;
  const data = (_a = error.response) == null ? void 0 : _a.data;
  return data && typeof data === "object" ? data : void 0;
}
__name(getResponseBody, "getResponseBody");
function getResponseStatus(error) {
  var _a;
  if (!isHttpApiError(error)) return void 0;
  const status = (_a = error.response) == null ? void 0 : _a.status;
  return typeof status === "number" ? status : void 0;
}
__name(getResponseStatus, "getResponseStatus");
const REASON_PHRASES = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  409: "Conflict",
  410: "Gone",
  413: "Request Entity Too Large",
  415: "Unsupported Media Type",
  422: "Unprocessable Entity",
  429: "Too Many Requests",
  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout"
};
function isFrameworkDefault(message, status) {
  return status !== void 0 && REASON_PHRASES[status] === message;
}
__name(isFrameworkDefault, "isFrameworkDefault");
function locToField(loc) {
  if (!Array.isArray(loc)) return void 0;
  for (let i = loc.length - 1; i >= 0; i--) {
    const segment = loc[i];
    if (typeof segment === "string" && segment !== "body" && segment !== "query") return segment;
  }
  return void 0;
}
__name(locToField, "locToField");
function extractFromArray(detail) {
  const fieldErrors = [];
  for (const item of detail) {
    if (!item || typeof item !== "object") continue;
    const record = item;
    if (typeof record.field === "string" && typeof record.message === "string") {
      fieldErrors.push({ field: record.field, message: record.message, source: "business" });
      continue;
    }
    if (typeof record.msg === "string") {
      fieldErrors.push({
        field: locToField(record.loc) ?? "",
        message: record.msg,
        source: "schema"
      });
    }
  }
  if (!fieldErrors.length) return EMPTY;
  const source = fieldErrors.every((e) => e.source === "business") ? "business" : "schema";
  return {
    messages: fieldErrors.map((e) => e.message).filter(Boolean),
    fieldErrors,
    source
  };
}
__name(extractFromArray, "extractFromArray");
function extractError(error) {
  const body = getResponseBody(error);
  if (!body) return EMPTY;
  const status = getResponseStatus(error);
  const { detail } = body;
  if (typeof detail === "string" && detail.trim()) {
    const message = detail.trim();
    return isFrameworkDefault(message, status) ? EMPTY : { messages: [message], fieldErrors: [], source: "business" };
  }
  if (Array.isArray(detail)) return extractFromArray(detail);
  if (typeof body.message === "string" && body.message.trim()) {
    const message = body.message.trim();
    return isFrameworkDefault(message, status) ? EMPTY : { messages: [message], fieldErrors: [], source: "business" };
  }
  return EMPTY;
}
__name(extractError, "extractError");
const RULES = {
  // Nothing came back, so the endpoint is irrelevant - the connection is the whole story.
  offline: {
    showBackendMessage: false,
    override: {
      load: ERROR_MESSAGES.CONNECTION_FAILED,
      action: ERROR_MESSAGES.CONNECTION_FAILED
    }
  },
  timeout: {
    showBackendMessage: false,
    override: {
      load: ERROR_MESSAGES.CONNECTION_FAILED,
      action: ERROR_MESSAGES.CONNECTION_FAILED
    }
  },
  canceled: { showBackendMessage: false },
  // Our own bug. There is nothing the user can act on and no backend text to quote.
  client: { showBackendMessage: false },
  // The session, not the endpoint, is what failed; every screen is affected the same way.
  unauthorized: {
    showBackendMessage: false,
    override: {
      load: ERROR_MESSAGES.SESSION_EXPIRED,
      action: ERROR_MESSAGES.SESSION_EXPIRED
    }
  },
  // The backend's 403 body names required role identifiers, which is diagnostics, not product copy.
  forbidden: {
    showBackendMessage: false,
    override: {
      load: ERROR_MESSAGES.NO_PAGE_ACCESS,
      action: ERROR_MESSAGES.NO_ACTION_PERMISSION
    }
  },
  // Backend messages like "Record not found" are written for the user and say more than we could.
  notFound: { showBackendMessage: true },
  conflict: { showBackendMessage: true },
  validation: { showBackendMessage: true },
  badRequest: { showBackendMessage: true },
  // 5xx bodies are `str(e)` from the proxy: stack text, driver errors, connection strings.
  server: { showBackendMessage: false },
  unknown: { showBackendMessage: false }
};
const CONTEXT_FALLBACK = {
  load: ERROR_MESSAGES.LOAD_ALL_DATA_FAILED,
  action: ERROR_MESSAGES.ACTION_FAILED
};
function mayShowBackendMessage(kind) {
  return RULES[kind].showBackendMessage;
}
__name(mayShowBackendMessage, "mayShowBackendMessage");
function getCopyOverride(kind, context) {
  var _a;
  return (_a = RULES[kind].override) == null ? void 0 : _a[context];
}
__name(getCopyOverride, "getCopyOverride");
function getContextFallback(context) {
  return CONTEXT_FALLBACK[context];
}
__name(getContextFallback, "getContextFallback");
function buildDedupeKey(kind, message, isSessionEvent, isConnectivity) {
  if (isSessionEvent) return "session";
  if (isConnectivity) return "connectivity";
  return `${kind}:${message}`;
}
__name(buildDedupeKey, "buildDedupeKey");
function interpretError(error, options = {}) {
  var _a, _b, _c;
  const context = options.context ?? "load";
  const { kind, status } = classifyError(error);
  const extracted = extractError(error);
  if (isAppError(error)) {
    const message2 = ((_a = options.copy) == null ? void 0 : _a.override) ?? error.message;
    return {
      kind,
      status,
      message: message2,
      details: [],
      fieldErrors: [],
      isSessionEvent: false,
      isConnectivity: false,
      isSilent: false,
      retryable: false,
      dedupeKey: `app:${message2}`
    };
  }
  const isSessionEvent = kind === "unauthorized";
  const isConnectivity = kind === "offline" || kind === "timeout";
  const backendMessages = mayShowBackendMessage(kind) && extracted.source === "business" ? extracted.messages : [];
  const override = ((_b = options.copy) == null ? void 0 : _b.override) ?? getCopyOverride(kind, context);
  let message;
  let details;
  if (override) {
    message = override;
    details = [];
  } else if (backendMessages.length) {
    [message, ...details] = backendMessages;
  } else {
    message = ((_c = options.copy) == null ? void 0 : _c.fallback) ?? getContextFallback(context);
    details = [];
  }
  return {
    kind,
    status,
    message,
    details,
    fieldErrors: extracted.fieldErrors,
    isSessionEvent,
    isConnectivity,
    isSilent: kind === "canceled",
    retryable: isRetryableError(error),
    dedupeKey: buildDedupeKey(kind, message, isSessionEvent, isConnectivity)
  };
}
__name(interpretError, "interpretError");
function toErrorText(presentation) {
  return [presentation.message, ...presentation.details].join("\n");
}
__name(toErrorText, "toErrorText");
function getErrorMessage(error, options = {}) {
  return toErrorText(interpretError(error, options));
}
__name(getErrorMessage, "getErrorMessage");
const claims = /* @__PURE__ */ new Map();
function claimQueryErrors(queryHash, claim = {}) {
  const entry = claims.get(queryHash) ?? { live: [] };
  entry.live.push(claim);
  claims.set(queryHash, entry);
  let released = false;
  return () => {
    if (released) return;
    released = true;
    const current = claims.get(queryHash);
    if (!current) return;
    const at = current.live.indexOf(claim);
    if (at !== -1) {
      if (claim.fallback) current.lastFallback = claim.fallback;
      current.live.splice(at, 1);
    }
  };
}
__name(claimQueryErrors, "claimQueryErrors");
function getQueryClaimState(queryHash) {
  const entry = claims.get(queryHash);
  if (!entry) return "none";
  if (entry.live.length === 0) return "abandoned";
  return entry.live.some((c) => c.canRenderInPlace !== false) ? "claimed" : "displaced";
}
__name(getQueryClaimState, "getQueryClaimState");
function getDisplacedClaimFallback(queryHash) {
  var _a;
  const entry = claims.get(queryHash);
  if (!entry) return void 0;
  return ((_a = entry.live.find((c) => c.fallback)) == null ? void 0 : _a.fallback) ?? entry.lastFallback;
}
__name(getDisplacedClaimFallback, "getDisplacedClaimFallback");
function forgetQueryClaims(queryHash) {
  const entry = claims.get(queryHash);
  if (!entry || entry.live.length === 0) claims.delete(queryHash);
}
__name(forgetQueryClaims, "forgetQueryClaims");
const { useEffect, useMemo } = await importShared("react");
function useErrorSurface(query, options = {}) {
  const { canRenderInPlace = true } = options;
  const { queryHash, isError, error, isFetching, refetch, meta } = query;
  const declared = meta == null ? void 0 : meta.errorCopy;
  const override = declared == null ? void 0 : declared.override;
  const fallback = (declared == null ? void 0 : declared.fallback) ?? options.fallback;
  useEffect(
    () => claimQueryErrors(queryHash, { canRenderInPlace, fallback }),
    [queryHash, canRenderInPlace, fallback]
  );
  const presentation = useMemo(
    () => isError ? interpretError(error, { context: "load", copy: { override, fallback } }) : null,
    [isError, error, override, fallback]
  );
  const retry = useMemo(() => () => void refetch(), [refetch]);
  const hasFailed = isError && !isFetching;
  return {
    hasFailed,
    shouldRenderInPlace: hasFailed && canRenderInPlace,
    presentation,
    retry,
    isRetrying: isFetching
  };
}
__name(useErrorSurface, "useErrorSurface");
export {
  ERROR_MESSAGES as E,
  getDisplacedClaimFallback as a,
  isNotFoundError as b,
  classifyError as c,
  getErrorMessage as d,
  forgetQueryClaims as f,
  getQueryClaimState as g,
  interpretError as i,
  toErrorText as t,
  useErrorSurface as u
};

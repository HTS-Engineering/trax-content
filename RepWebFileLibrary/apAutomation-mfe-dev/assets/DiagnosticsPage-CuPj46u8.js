var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { a6 as useJWTStore, a7 as jwtSelectors, a3 as ensureJWTInitialized, j as jsxRuntimeExports, a1 as CONTAINER_ID, a0 as SCOPE_CLASS, a8 as JWT_STORAGE_KEY, G as Ge, a9 as API_BASE_URL, N as useApEvents, P as useErrorSurface, Z as Zn, T as DataLoadError } from "./DataLoadError-Cn6DbZKI.js";
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
const { useEffect } = await importShared("react");
const useAuth = /* @__PURE__ */ __name(() => {
  const hasToken = useJWTStore(jwtSelectors.hasToken);
  const isLoading = useJWTStore(jwtSelectors.isLoading);
  const error = useJWTStore(jwtSelectors.error);
  const token = useJWTStore(jwtSelectors.realToken);
  const isInitialized = useJWTStore((state) => state.isInitialized);
  useEffect(() => {
    if (!isInitialized) {
      ensureJWTInitialized();
    }
  }, [isInitialized]);
  return {
    hasToken,
    isLoading,
    error,
    token,
    isInitialized
  };
}, "useAuth");
function decodeJwtPayload(token) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}
__name(decodeJwtPayload, "decodeJwtPayload");
var define_MFE_BUILD_default = { version: "0.1.0-dev.7", commit: "b6338d4", branch: "dev", timestamp: "2026-08-26T16:47:28.524Z", environment: "apAutomation-mfe-dev" };
function DiagnosticsPage() {
  const { hasToken, isInitialized, token } = useAuth();
  const identity = [
    ["Container ID", CONTAINER_ID],
    ["Scope class", SCOPE_CLASS],
    ["Token key", JWT_STORAGE_KEY]
  ];
  const build = [
    ["Version", define_MFE_BUILD_default.version],
    ["Commit", define_MFE_BUILD_default.commit],
    ["Branch", define_MFE_BUILD_default.branch],
    ["Environment", define_MFE_BUILD_default.environment],
    ["Built at", define_MFE_BUILD_default.timestamp]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-trax-grey-900", children: "Diagnostics" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-trax-grey-600", children: "What this MFE was handed by the host, and what it can reach." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Identity", rows: identity }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Build", rows: build }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Backend", rows: backendRows(), tone: isBackendReachable() ? "normal" : "warning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Base System token",
        rows: tokenRows({ isInitialized, hasToken, token }),
        tone: isInitialized && !hasToken ? "warning" : "normal"
      }
    ),
    token ? /* @__PURE__ */ jsxRuntimeExports.jsx(TokenClaims, { token }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApEventsProbe, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ge, { className: "mt-8", onClick: /* @__PURE__ */ __name(() => window.location.reload(), "onClick"), children: "Reload" })
  ] });
}
__name(DiagnosticsPage, "DiagnosticsPage");
function isBackendReachable() {
  return Boolean(API_BASE_URL) || Boolean("");
}
__name(isBackendReachable, "isBackendReachable");
function backendRows() {
  return [["API base URL", API_BASE_URL || "NOT SET - every request would go to the host origin"]];
}
__name(backendRows, "backendRows");
function ApEventsProbe() {
  var _a, _b;
  const query = useApEvents();
  const surface = useErrorSurface(query, {
    canRenderInPlace: (((_a = query.data) == null ? void 0 : _a.length) ?? 0) === 0
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-grey-900", children: "AP documents endpoint" }),
    query.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center gap-2 text-sm text-trax-grey-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zn, {}) }) : surface.shouldRenderInPlace ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-2 grid max-w-2xl grid-cols-[10rem_1fr] gap-x-4 gap-y-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-trax-grey-600", children: "Documents returned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-mono text-trax-grey-900", children: ((_b = query.data) == null ? void 0 : _b.length) ?? 0 })
    ] })
  ] });
}
__name(ApEventsProbe, "ApEventsProbe");
function tokenRows({ isInitialized, hasToken, token }) {
  if (!isInitialized) return [["Status", "reading the token store..."]];
  if (!hasToken || !token) {
    return [
      ["Status", `no token under "${JWT_STORAGE_KEY}"`],
      ["Expected", "the host writes the token before loading this bundle, and fires trax-jwt-token-updated on refresh"]
    ];
  }
  return [
    ["Status", "token received"],
    ["Length", `${token.length} characters`]
  ];
}
__name(tokenRows, "tokenRows");
function TokenClaims({ token }) {
  const payload = decodeJwtPayload(token);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-grey-900", children: "Token claims" }),
    payload ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "pre",
      {
        className: "mt-2 max-w-2xl overflow-x-auto rounded border border-trax-grey-200 bg-trax-grey-100 p-3 text-xs text-trax-grey-900",
        "data-testid": "token-claims",
        children: JSON.stringify(payload, null, 2)
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-trax-yellow-800", "data-testid": "token-claims-undecodable", children: "Present but not a readable JWT payload. The host may be storing something else under this key." })
  ] });
}
__name(TokenClaims, "TokenClaims");
function Section({ title, rows, tone = "normal" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-grey-900", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-2 grid max-w-2xl grid-cols-[10rem_1fr] gap-x-4 gap-y-2 text-sm", children: rows.map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-trax-grey-600", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: `font-mono break-all ${tone === "warning" ? "text-trax-yellow-800" : "text-trax-grey-900"}`, children: value })
    ] }, label)) })
  ] });
}
__name(Section, "Section");
export {
  DiagnosticsPage as default
};

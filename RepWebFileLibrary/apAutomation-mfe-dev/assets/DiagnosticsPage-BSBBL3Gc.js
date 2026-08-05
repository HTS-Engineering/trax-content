var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { K as useJWTStore, L as jwtSelectors, H as ensureJWTInitialized, j as jsxRuntimeExports, F as CONTAINER_ID, C as SCOPE_CLASS, M as JWT_STORAGE_KEY, U as Ue, N as API_BASE_URL, y as useApEvents, z as useErrorSurface, Y as Yn, D as DataLoadError } from "./DataLoadError-BB3sapOm.js";
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
const { useEffect, useMemo } = await importShared("react");
const useAuth = /* @__PURE__ */ __name(() => {
  const isAuthenticated = useJWTStore(jwtSelectors.isAuthenticated);
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
    isAuthenticated,
    isLoading,
    error,
    token,
    isInitialized
  };
}, "useAuth");
const useUser = /* @__PURE__ */ __name(() => {
  return useJWTStore(jwtSelectors.user);
}, "useUser");
var define_MFE_BUILD_default = { version: "0.1.0-dev.local-1785908570849", commit: "a1fd73d", branch: "feat/AI-282-connect-backend-and-scaffold-screen", timestamp: "2026-08-05T05:42:50.873Z", environment: "apAutomation-mfe-dev" };
function DiagnosticsPage() {
  const { isAuthenticated, isInitialized } = useAuth();
  const user = useUser();
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
        rows: tokenRows({ isInitialized, isAuthenticated, user }),
        tone: isInitialized && !isAuthenticated ? "warning" : "normal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApEventsProbe, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "mt-8", onClick: /* @__PURE__ */ __name(() => window.location.reload(), "onClick"), children: "Reload" })
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
    query.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center gap-2 text-sm text-trax-grey-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : surface.shouldRenderInPlace ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-2 grid max-w-2xl grid-cols-[10rem_1fr] gap-x-4 gap-y-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-trax-grey-600", children: "Documents returned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-mono text-trax-grey-900", children: ((_b = query.data) == null ? void 0 : _b.length) ?? 0 })
    ] })
  ] });
}
__name(ApEventsProbe, "ApEventsProbe");
function tokenRows({ isInitialized, isAuthenticated, user }) {
  if (!isInitialized) return [["Status", "reading the token store..."]];
  if (!isAuthenticated) {
    return [
      ["Status", `no valid token under "${JWT_STORAGE_KEY}"`],
      ["Expected", "the host writes the token before loading this bundle, and fires trax-jwt-token-updated on refresh"]
    ];
  }
  return [
    ["Status", "token received and valid"],
    ["User", (user == null ? void 0 : user.name) ?? (user == null ? void 0 : user.email) ?? (user == null ? void 0 : user.id) ?? "no name claim in token"],
    ["Roles", (user == null ? void 0 : user.roles.length) ? user.roles.join(", ") : "none in token"]
  ];
}
__name(tokenRows, "tokenRows");
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

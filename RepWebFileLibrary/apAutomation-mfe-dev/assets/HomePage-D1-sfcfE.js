var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { u as useJWTStore, h as jwtSelectors, e as ensureJWTInitialized, j as jsxRuntimeExports, C as CONTAINER_ID, a as SCOPE_CLASS, J as JWT_STORAGE_KEY, A as API_BASE_URL, U as Ue } from "./axiosInstance-__qKT0Ru.js";
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
var define_MFE_BUILD_default = { version: "0.1.0-dev.local-1785353216470", commit: "d324a4e", branch: "fix/review-followups", timestamp: "2026-07-29T19:26:56.517Z", environment: "apAutomation-mfe-dev" };
function HomePage() {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-trax-grey-900", children: "Trax MFE skeleton" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-trax-grey-600", children: "Mounted successfully. Replace this page with the product." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Identity", rows: identity }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Build", rows: build }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Backend",
        rows: [["API base URL", API_BASE_URL || "NOT SET - every request would go to the host origin"]],
        tone: API_BASE_URL ? "normal" : "warning"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        title: "Base System token",
        rows: tokenRows({ isInitialized, isAuthenticated, user }),
        tone: isInitialized && !isAuthenticated ? "warning" : "normal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "mt-8", onClick: /* @__PURE__ */ __name(() => window.location.reload(), "onClick"), children: "Reload" })
  ] });
}
__name(HomePage, "HomePage");
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
  HomePage as default
};

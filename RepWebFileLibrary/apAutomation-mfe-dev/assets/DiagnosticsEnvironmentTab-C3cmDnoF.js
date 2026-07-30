var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, h, E as Er, U as Ue, Q as Qs } from "./index-CFVMMdzN.js";
import { J as JWT_STORAGE_KEY, C as CONTAINER_ID, a as SCOPE_CLASS, c as SCOPE_PREFIX, S as STORAGE_PREFIX, b as SERVICE_NAME } from "./mfe.config-tfp2F-Dw.js";
import { E as EnvConfig } from "./feature-flags-Cz1N62Y6.js";
import { A as API_BASE_URL } from "./axiosInstance-BR3EX-a4.js";
import "./store-Bn-YuemF.js";
import { u as useAuth, a as useUser } from "./hooks-CLpaRaPs.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { K as KeyValueList } from "./KeyValueList-hl8rrFPd.js";
var define_MFE_BUILD_default = { version: "0.1.0-dev.local-1785381498031", commit: "567fef4", branch: "fix/review-followups", timestamp: "2026-07-30T03:18:18.054Z", environment: "apAutomation-mfe-dev" };
const EnvironmentReport = /* @__PURE__ */ __name(() => {
  const { isAuthenticated, isInitialized, token } = useAuth();
  const user = useUser();
  const identity = [
    { label: "Container id", value: `#${CONTAINER_ID}`, mono: true },
    { label: "Scope class", value: `.${SCOPE_CLASS}`, mono: true },
    { label: "Keyframe prefix", value: `${SCOPE_PREFIX}-`, mono: true },
    { label: "UI library class", value: `.${Er}`, mono: true },
    { label: "Storage prefix", value: STORAGE_PREFIX, mono: true },
    { label: "Service name", value: SERVICE_NAME, mono: true }
  ];
  const build = [
    { label: "Version", value: define_MFE_BUILD_default.version, mono: true },
    { label: "Commit", value: define_MFE_BUILD_default.commit, mono: true },
    { label: "Branch", value: define_MFE_BUILD_default.branch, mono: true },
    { label: "Bundle directory", value: define_MFE_BUILD_default.environment, mono: true },
    { label: "Built at", value: define_MFE_BUILD_default.timestamp, mono: true },
    { label: "Vite mode", value: EnvConfig.getMode(), mono: true }
  ];
  const flags = [
    { label: "Dev logging", value: "on" },
    { label: "Dev features", value: "shown" },
    { label: "Environment badge", value: "hidden" }
  ];
  const tokenRows = !isInitialized ? [{ label: "Status", value: "reading the token store..." }] : token === null ? [
    { label: "Status", value: `nothing under "${JWT_STORAGE_KEY}"`, tone: "warning" },
    {
      label: "Expected",
      value: "the host writes the token to session storage before loading this bundle, and fires trax-jwt-token-updated on refresh"
    }
  ] : !isAuthenticated ? [
    { label: "Status", value: "a token is present but not valid - most likely expired", tone: "warning" },
    { label: "User", value: (user == null ? void 0 : user.name) ?? (user == null ? void 0 : user.email) ?? (user == null ? void 0 : user.id) ?? "no name claim" }
  ] : [
    { label: "Status", value: "token received and valid" },
    { label: "User", value: (user == null ? void 0 : user.name) ?? (user == null ? void 0 : user.email) ?? (user == null ? void 0 : user.id) ?? "no name claim" },
    { label: "Email", value: (user == null ? void 0 : user.email) ?? "no email claim" },
    {
      label: "Roles",
      value: (user == null ? void 0 : user.roles.length) ? user.roles.join(", ") : "none in the token",
      tone: (user == null ? void 0 : user.roles.length) ? "normal" : "warning"
    }
  ];
  const isTokenHealthy = isInitialized && isAuthenticated;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: h(
          "flex items-start gap-2.5 rounded-lg border px-3.5 py-3",
          API_BASE_URL ? "border-trax-neutral-30 bg-trax-neutral-10" : "border-trax-yellow-200 bg-trax-yellow-100"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              name: API_BASE_URL ? "server" : "alert-triangle",
              className: h("mt-0.5 size-4 shrink-0", API_BASE_URL ? "text-trax-neutral-400" : "text-trax-yellow-800")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-trax-neutral-900", children: "Backend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: h("font-mono text-sm break-all", API_BASE_URL ? "text-trax-grey-600" : "text-trax-yellow-800"), children: API_BASE_URL || "VITE_API_URL is not set - every request would resolve against the host page origin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-trax-grey-600", children: "Nothing on the other pages calls it. This build answers its own requests, so the URL is reported rather than exercised." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Base System token" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: h(
            "rounded-lg border px-3.5 py-3",
            isTokenHealthy ? "border-trax-green-100 bg-trax-green-50" : "border-trax-yellow-200 bg-trax-yellow-100"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyValueList, { items: tokenRows })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Identity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-trax-grey-600", children: [
        "Every value below comes from one file, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs", children: "config/mfe.config.js" }),
        ". The container id and the loader file name are owned by the Base System team - getting either wrong is silent, and the bundle simply never mounts."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KeyValueList, { columns: 2, items: identity })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Build" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KeyValueList, { columns: 2, items: build })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Compile-time flags" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KeyValueList, { columns: 2, items: flags })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "outlined",
          size: "sm",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "copy", className: "size-4" }),
          onClick: /* @__PURE__ */ __name(() => {
            const report = [...identity, ...build, ...flags].map((row) => `${row.label}: ${String(row.value)}`).join("\n");
            navigator.clipboard.writeText(report).then(
              () => Qs.success("Report copied"),
              () => Qs.success("Could not reach the clipboard")
            );
          }, "onClick"),
          children: "Copy this report"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "ghost-neutral",
          size: "sm",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: "size-4" }),
          onClick: /* @__PURE__ */ __name(() => window.location.reload(), "onClick"),
          children: "Reload"
        }
      )
    ] })
  ] });
}, "EnvironmentReport");
function DiagnosticsEnvironmentTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EnvironmentReport, {});
}
__name(DiagnosticsEnvironmentTab, "DiagnosticsEnvironmentTab");
export {
  DiagnosticsEnvironmentTab as default
};

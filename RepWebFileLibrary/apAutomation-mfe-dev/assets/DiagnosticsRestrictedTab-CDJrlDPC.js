var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./index-CFVMMdzN.js";
import { u as useRoles, R as Role } from "./ProtectedRoute-CWE8uAnr.js";
import { K as KeyValueList } from "./KeyValueList-hl8rrFPd.js";
function DiagnosticsRestrictedTab() {
  const { roles } = useRoles();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-trax-green-100 bg-trax-green-50 px-3.5 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-trax-green-800", children: "You are through the gate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: [
        "The route required ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs", children: Role.Admin }),
        " and the token carries it."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      KeyValueList,
      {
        items: [
          { label: "Required role", value: Role.Admin, mono: true },
          {
            label: "Roles in the token",
            value: roles.length > 0 ? roles.join(", ") : "none",
            mono: true
          }
        ]
      }
    )
  ] });
}
__name(DiagnosticsRestrictedTab, "DiagnosticsRestrictedTab");
export {
  DiagnosticsRestrictedTab as default
};

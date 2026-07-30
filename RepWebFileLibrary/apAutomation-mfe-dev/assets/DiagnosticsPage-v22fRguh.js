var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./index-CFVMMdzN.js";
import { R as RouteNames } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { P as PageHeader } from "./PageHeader-CR5C8Orw.js";
import { N as NavTabs, D as DIAGNOSTICS_NAV } from "./AppShell-DabpUIQ7.js";
import { O as Outlet } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
function DiagnosticsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: RouteNames.Diagnostics,
        description: "Whether the microfrontend's isolation holds where it is actually running. None of this is product surface."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 rounded-lg border border-trax-primary-blue-100 bg-trax-primary-blue-50 px-3.5 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "info", className: "mt-0.5 size-4 shrink-0 text-trax-primary-blue-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-trax-grey-600", children: "These pages read the live DOM and the computed styles of the page they are on, so what they report inside the Trax Base System is not what they report on a dev server. Run them in the environment you are asking about." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavTabs, { variant: "underline", "aria-label": "Diagnostics sections", items: DIAGNOSTICS_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
__name(DiagnosticsPage, "DiagnosticsPage");
export {
  DiagnosticsPage as default
};

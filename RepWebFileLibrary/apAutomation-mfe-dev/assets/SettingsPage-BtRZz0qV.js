var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./index-CFVMMdzN.js";
import { R as RouteNames } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { P as PageHeader } from "./PageHeader-CR5C8Orw.js";
import { N as NavTabs, S as SETTINGS_NAV } from "./AppShell-DabpUIQ7.js";
import { O as Outlet } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
function SettingsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: RouteNames.Settings,
        description: "How invoices are matched, who hears about them, and what this module is connected to."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavTabs, { variant: "underline", "aria-label": "Settings sections", items: SETTINGS_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
__name(SettingsPage, "SettingsPage");
export {
  SettingsPage as default
};

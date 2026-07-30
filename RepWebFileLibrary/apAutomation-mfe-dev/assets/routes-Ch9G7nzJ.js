var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var RoutePaths = /* @__PURE__ */ ((RoutePaths2) => {
  RoutePaths2["Root"] = "/";
  RoutePaths2["Overview"] = "/overview";
  RoutePaths2["Invoices"] = "/invoices";
  RoutePaths2["Invoice"] = "/invoices/:invoiceId";
  RoutePaths2["InvoiceSummary"] = "/invoices/:invoiceId/summary";
  RoutePaths2["InvoiceLines"] = "/invoices/:invoiceId/lines";
  RoutePaths2["InvoiceHistory"] = "/invoices/:invoiceId/history";
  RoutePaths2["Vendors"] = "/vendors";
  RoutePaths2["Approvals"] = "/approvals";
  RoutePaths2["Settings"] = "/settings";
  RoutePaths2["SettingsGeneral"] = "/settings/general";
  RoutePaths2["SettingsNotifications"] = "/settings/notifications";
  RoutePaths2["SettingsIntegrations"] = "/settings/integrations";
  RoutePaths2["Diagnostics"] = "/diagnostics";
  RoutePaths2["DiagnosticsPortals"] = "/diagnostics/portals";
  RoutePaths2["DiagnosticsStyles"] = "/diagnostics/styles";
  RoutePaths2["DiagnosticsErrors"] = "/diagnostics/errors";
  RoutePaths2["DiagnosticsEnvironment"] = "/diagnostics/environment";
  RoutePaths2["DiagnosticsRestricted"] = "/diagnostics/restricted";
  return RoutePaths2;
})(RoutePaths || {});
var RouteNames = /* @__PURE__ */ ((RouteNames2) => {
  RouteNames2["Overview"] = "Overview";
  RouteNames2["Invoices"] = "Invoices";
  RouteNames2["Vendors"] = "Vendors";
  RouteNames2["Approvals"] = "Approvals";
  RouteNames2["Settings"] = "Settings";
  RouteNames2["Diagnostics"] = "Diagnostics";
  RouteNames2["InvoiceSummary"] = "Summary";
  RouteNames2["InvoiceLines"] = "Line items";
  RouteNames2["InvoiceHistory"] = "History";
  RouteNames2["SettingsGeneral"] = "General";
  RouteNames2["SettingsNotifications"] = "Notifications";
  RouteNames2["SettingsIntegrations"] = "Integrations";
  RouteNames2["DiagnosticsPortals"] = "Portals";
  RouteNames2["DiagnosticsStyles"] = "Style isolation";
  RouteNames2["DiagnosticsErrors"] = "Error surfaces";
  RouteNames2["DiagnosticsEnvironment"] = "Environment";
  RouteNames2["DiagnosticsRestricted"] = "Restricted area";
  return RouteNames2;
})(RouteNames || {});
const INVOICE_ID_PARAM = "invoiceId";
const invoicePath = /* @__PURE__ */ __name((route, invoiceId) => route.replace(`:${INVOICE_ID_PARAM}`, encodeURIComponent(invoiceId)), "invoicePath");
export {
  INVOICE_ID_PARAM as I,
  RouteNames as R,
  RoutePaths as a,
  invoicePath as i
};

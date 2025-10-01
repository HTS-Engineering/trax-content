var RoutePathConfigChunks = /* @__PURE__ */ ((RoutePathConfigChunks2) => {
  RoutePathConfigChunks2["ExpensesType"] = "expenses-type";
  RoutePathConfigChunks2["BusinessPurpose"] = "business-purpose";
  return RoutePathConfigChunks2;
})(RoutePathConfigChunks || {});
var RoutePaths = /* @__PURE__ */ ((RoutePaths2) => {
  RoutePaths2["Root"] = "/";
  RoutePaths2["Expenses"] = "/expenses";
  RoutePaths2["ExpensesNew"] = "/expenses/new";
  RoutePaths2["TestingAuthentication"] = "/testing/authentication";
  RoutePaths2["TestingIcons"] = "/testing/icons";
  RoutePaths2["Configurations"] = "/configurations";
  RoutePaths2["CorporateCards"] = "/configurations/corporate-cards";
  RoutePaths2["Payroll"] = "/configurations/payroll";
  RoutePaths2["Allocations"] = "/configurations/allocations";
  RoutePaths2["ExpensesType"] = `/configurations/expenses-type`;
  RoutePaths2["BusinessPurpose"] = `/configurations/business-purpose`;
  RoutePaths2["ExpensesTypeId"] = `/configurations/expenses-type/:companyId`;
  RoutePaths2["BusinessPurposeId"] = `/configurations/business-purpose/:companyId`;
  RoutePaths2["ExpensesTypeWithCompany"] = `/configurations/expenses-type/:companyId`;
  RoutePaths2["BusinessPurposeWithCompany"] = `/configurations/business-purpose/:companyId`;
  return RoutePaths2;
})(RoutePaths || {});
var RouteNames = /* @__PURE__ */ ((RouteNames2) => {
  RouteNames2["Expenses"] = "Expenses";
  RouteNames2["ExpensesNew"] = "New Expense";
  RouteNames2["TestingAuthentication"] = "Authentication";
  RouteNames2["TestingIcons"] = "Icons";
  RouteNames2["Configurations"] = "Configurations";
  RouteNames2["CorporateCards"] = "Corporate Cards";
  RouteNames2["Payroll"] = "Payroll";
  RouteNames2["Allocations"] = "Allocations";
  RouteNames2["ExpensesType"] = "Expenses Type";
  RouteNames2["BusinessPurpose"] = "Business Purpose";
  return RouteNames2;
})(RouteNames || {});
var RouteCompanyIds = /* @__PURE__ */ ((RouteCompanyIds2) => {
  RouteCompanyIds2["DirectExpansion"] = "direct-expansion";
  RouteCompanyIds2["HeatTransfer"] = "heat-transfer";
  RouteCompanyIds2["OslinNation"] = "oslin-nation";
  RouteCompanyIds2["TritonThermal"] = "triton-thermal";
  RouteCompanyIds2["VrfServices"] = "vrf-services";
  return RouteCompanyIds2;
})(RouteCompanyIds || {});
var RouteCompanyLabels = /* @__PURE__ */ ((RouteCompanyLabels2) => {
  RouteCompanyLabels2["DirectExpansion"] = "Direct Expansion Solutions Inc";
  RouteCompanyLabels2["HeatTransfer"] = "Heat Transfer Solutions, Inc";
  RouteCompanyLabels2["OslinNation"] = "Oslin Nation";
  RouteCompanyLabels2["TritonThermal"] = "Triton Thermal";
  RouteCompanyLabels2["VrfServices"] = "VRF Services of Texas";
  return RouteCompanyLabels2;
})(RouteCompanyLabels || {});
export {
  RoutePaths as R,
  RouteNames as a,
  RouteCompanyLabels as b,
  RouteCompanyIds as c,
  RoutePathConfigChunks as d
};

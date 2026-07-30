var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { g as demoRequest, V as VENDOR_SEED, v as useAppQuery, q as queryKeys } from "./factory-BAIl8rNu.js";
import "./index-CFVMMdzN.js";
import "./use-error-surface-ToUfTyG9.js";
var VendorStatus = /* @__PURE__ */ ((VendorStatus2) => {
  VendorStatus2["Active"] = "active";
  VendorStatus2["Onboarding"] = "onboarding";
  VendorStatus2["Inactive"] = "inactive";
  return VendorStatus2;
})(VendorStatus || {});
const DEFAULT_VENDOR_FILTERS = {
  search: "",
  statuses: [],
  category: ""
};
const VENDOR_STATUS_META = {
  [
    "active"
    /* Active */
  ]: {
    label: "Active",
    className: "bg-trax-green-100 text-trax-green-800 border-trax-green-100"
  },
  [
    "onboarding"
    /* Onboarding */
  ]: {
    label: "Onboarding",
    className: "bg-trax-yellow-100 text-trax-yellow-800 border-trax-yellow-200"
  },
  [
    "inactive"
    /* Inactive */
  ]: {
    label: "Inactive",
    className: "bg-trax-neutral-20 text-trax-neutral-500 border-trax-neutral-40"
  }
};
const { useCallback } = await importShared("react");
const STATUS = {
  active: VendorStatus.Active,
  onboarding: VendorStatus.Onboarding,
  inactive: VendorStatus.Inactive
};
const toVendor = /* @__PURE__ */ __name((seed) => ({ ...seed, status: STATUS[seed.status] }), "toVendor");
const allVendors = /* @__PURE__ */ __name(() => VENDOR_SEED.map(toVendor), "allVendors");
const VENDOR_CATEGORIES = Array.from(
  new Set(VENDOR_SEED.map((vendor) => vendor.category))
).sort();
function selectVendors(filters) {
  const needle = filters.search.trim().toLowerCase();
  return allVendors().filter((vendor) => {
    if (filters.statuses.length && !filters.statuses.includes(vendor.status)) return false;
    if (filters.category && vendor.category !== filters.category) return false;
    if (!needle) return true;
    return vendor.name.toLowerCase().includes(needle) || vendor.code.toLowerCase().includes(needle) || vendor.contactName.toLowerCase().includes(needle);
  }).sort((a, b) => a.name.localeCompare(b.name));
}
__name(selectVendors, "selectVendors");
function useVendorList(filters) {
  return useAppQuery({
    queryKey: queryKeys.vendors.list(filters),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({ path: "/v1/vendors", signal, resolve: /* @__PURE__ */ __name(() => selectVendors(filters), "resolve") }), "queryFn"),
    meta: { errorCopy: { fallback: "Unable to load vendors." } }
  });
}
__name(useVendorList, "useVendorList");
function useVendorSearch() {
  return useCallback(
    (query) => demoRequest({
      path: "/v1/vendors/search",
      resolve: /* @__PURE__ */ __name(() => selectVendors({ search: query, statuses: [], category: "" }).map((vendor) => ({
        value: vendor.id,
        label: vendor.name,
        data: vendor
      })), "resolve")
    }),
    []
  );
}
__name(useVendorSearch, "useVendorSearch");
export {
  DEFAULT_VENDOR_FILTERS as D,
  VENDOR_STATUS_META as V,
  VendorStatus as a,
  useVendorSearch as b,
  VENDOR_CATEGORIES as c,
  useVendorList as u
};

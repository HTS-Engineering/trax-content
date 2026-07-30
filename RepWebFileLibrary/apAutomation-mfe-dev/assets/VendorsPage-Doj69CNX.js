var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, S as Ss, C as Cs, r as Rs, u as us, n as jr, h, _ as _s, F as Fs, D as Ds, M as Ms, k as Es, l as ks, V as Vs, m as Oa, B as Ba, t as ts, v as gn, w as oi, y as ys, x as Za, Q as Qs, P as Ps, U as Ue, c as dr, G as Qt, Y as Yn } from "./index-CFVMMdzN.js";
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { V as VENDOR_STATUS_META, a as VendorStatus, b as useVendorSearch, c as VENDOR_CATEGORIES, D as DEFAULT_VENDOR_FILTERS, u as useVendorList } from "./queries-BomZp9Zq.js";
import { u as useErrorSurface } from "./use-error-surface-ToUfTyG9.js";
import { D as DataLoadError } from "./DataLoadError-D0pN46nh.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { C as ConfirmDialog } from "./ConfirmDialog-BPwbNvaf.js";
import { R as RouteNames } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { P as PageHeader } from "./PageHeader-CR5C8Orw.js";
const VendorCard = /* @__PURE__ */ __name(({ vendor, onEdit }) => {
  const status = VENDOR_STATUS_META[vendor.status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "flex flex-col justify-between border-trax-neutral-30 shadow-none transition-shadow hover:shadow-trax-menu", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Cs, { className: "gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Rs, { className: "min-w-0 text-sm font-semibold text-trax-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "block", children: vendor.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          jr,
          {
            variant: "outline",
            className: h("shrink-0 rounded-full px-2 py-0.5 text-xs font-medium", status.className),
            children: status.label
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-trax-neutral-100", children: vendor.code })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(_s, { className: "space-y-1.5 text-sm text-trax-grey-600", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "briefcase", className: "size-4 shrink-0 text-trax-neutral-100" }),
        vendor.category
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "user", className: "size-4 shrink-0 text-trax-neutral-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "block min-w-0", children: vendor.contactName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "clock", className: "size-4 shrink-0 text-trax-neutral-100" }),
        "Net ",
        vendor.paymentTermsDays,
        " days"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Fs, { className: "justify-between border-t border-trax-neutral-30 pt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-trax-neutral-100", children: vendor.country }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: /* @__PURE__ */ __name(() => onEdit(vendor), "onClick"),
          className: "flex items-center gap-1.5 text-sm font-medium text-trax-primary-blue-600 hover:underline",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-3.5" }),
            "Edit"
          ]
        }
      )
    ] })
  ] });
}, "VendorCard");
const { useEffect: useEffect$1, useState: useState$1 } = await importShared("react");
const EMPTY_DRAFT = {
  name: "",
  code: "",
  category: "",
  status: VendorStatus.Onboarding,
  contactName: "",
  contactEmail: "",
  paymentTermsDays: "30",
  requiresPurchaseOrder: true,
  isTaxExempt: false
};
const STATUS_OPTIONS = [
  { value: VendorStatus.Active, label: "Active" },
  { value: VendorStatus.Onboarding, label: "Onboarding" },
  { value: VendorStatus.Inactive, label: "Inactive" }
];
const CATEGORY_OPTIONS = VENDOR_CATEGORIES.map(
  (category) => ({ value: category, label: category })
);
const toDraft = /* @__PURE__ */ __name((vendor) => ({
  name: vendor.name,
  code: vendor.code,
  category: vendor.category,
  status: vendor.status,
  contactName: vendor.contactName,
  contactEmail: vendor.contactEmail,
  paymentTermsDays: String(vendor.paymentTermsDays),
  requiresPurchaseOrder: true,
  isTaxExempt: false
}), "toDraft");
const VendorFormDialog = /* @__PURE__ */ __name(({ vendor, open, onClose }) => {
  const [draft, setDraft] = useState$1(EMPTY_DRAFT);
  const [parent, setParent] = useState$1(null);
  const [isDiscardOpen, setDiscardOpen] = useState$1(false);
  const [errors, setErrors] = useState$1({});
  const searchVendors = useVendorSearch();
  useEffect$1(() => {
    if (!open) return;
    setDraft(vendor ? toDraft(vendor) : EMPTY_DRAFT);
    setParent(null);
    setErrors({});
  }, [open, vendor]);
  const baseline = vendor ? toDraft(vendor) : EMPTY_DRAFT;
  const isDirty = JSON.stringify(draft) !== JSON.stringify(baseline) || parent !== null;
  const update = /* @__PURE__ */ __name((patch) => setDraft((current) => ({ ...current, ...patch })), "update");
  const requestClose = /* @__PURE__ */ __name(() => {
    if (isDirty) {
      setDiscardOpen(true);
      return;
    }
    onClose();
  }, "requestClose");
  const save = /* @__PURE__ */ __name(() => {
    const next = {};
    if (draft.name.trim().length < 2) next.name = "Give the vendor a name.";
    if (!/^[A-Z]{2,5}$/.test(draft.code.trim())) next.code = "Two to five capital letters.";
    if (!draft.category) next.category = "Pick a category.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(draft.contactEmail.trim())) {
      next.contactEmail = "That does not look like an email address.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    Qs.success(
      vendor ? `${draft.name} updated` : `${draft.name} added - onboarding starts now`
    );
    onClose();
  }, "save");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ds,
      {
        open,
        onOpenChange: /* @__PURE__ */ __name((next) => {
          if (!next) requestClose();
        }, "onOpenChange"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Ms,
          {
            className: "max-h-[88vh] max-w-2xl",
            onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Es, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ks, { className: "text-base font-semibold text-trax-neutral-600", children: vendor ? `Edit ${vendor.name}` : "Add a vendor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm text-trax-grey-600", children: "Nothing here is saved anywhere - this build has no backend. The form is real, the save is not." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "trax-custom-scrollbar -mx-1 max-h-[58vh] space-y-4 px-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Oa,
                    {
                      label: "Vendor name",
                      required: true,
                      value: draft.name,
                      error: errors.name,
                      onChange: /* @__PURE__ */ __name((event) => update({ name: event.target.value }), "onChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Oa,
                    {
                      label: "Short code",
                      required: true,
                      placeholder: "NWL",
                      value: draft.code,
                      error: errors.code,
                      helperText: "Two to five capital letters",
                      onChange: /* @__PURE__ */ __name((event) => update({ code: event.target.value.toUpperCase() }), "onChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Ba,
                    {
                      label: "Category",
                      required: true,
                      placeholder: "Pick one",
                      options: CATEGORY_OPTIONS,
                      value: draft.category,
                      error: errors.category,
                      onValueChange: /* @__PURE__ */ __name((value) => update({ category: value }), "onValueChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Ba,
                    {
                      label: "Status",
                      options: STATUS_OPTIONS,
                      value: draft.status,
                      onValueChange: /* @__PURE__ */ __name((value) => update({ status: value }), "onValueChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Oa,
                    {
                      label: "Contact name",
                      value: draft.contactName,
                      onChange: /* @__PURE__ */ __name((event) => update({ contactName: event.target.value }), "onChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Oa,
                    {
                      label: "Contact email",
                      required: true,
                      type: "email",
                      value: draft.contactEmail,
                      error: errors.contactEmail,
                      onChange: /* @__PURE__ */ __name((event) => update({ contactEmail: event.target.value }), "onChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ts,
                    {
                      label: "Payment terms",
                      suffix: "days",
                      type: "number",
                      min: 0,
                      textAlign: "right",
                      value: draft.paymentTermsDays,
                      onChange: /* @__PURE__ */ __name((event) => update({ paymentTermsDays: event.target.value }), "onChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    gn,
                    {
                      label: "Parent company",
                      placeholder: "Search the directory",
                      value: parent,
                      onValueChange: setParent,
                      onSearch: searchVendors,
                      searchOnFocus: true,
                      portal: true,
                      helperText: "Optional. Async search through the sandbox."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 p-3.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-trax-neutral-900", children: "Require a purchase order" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "Invoices without a matching PO are held instead of routed." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      oi,
                      {
                        checked: draft.requiresPurchaseOrder,
                        onCheckedChange: /* @__PURE__ */ __name((checked) => update({ requiresPurchaseOrder: checked }), "onCheckedChange"),
                        "aria-label": "Require a purchase order"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ys,
                    {
                      checked: draft.isTaxExempt,
                      onCheckedChange: /* @__PURE__ */ __name((checked) => update({ isTaxExempt: checked === true }), "onCheckedChange"),
                      label: "Tax exempt in this jurisdiction"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Za,
                  {
                    heading: "Vendor agreement",
                    subheading: "PDF up to 10 MB. Nothing is uploaded in this build.",
                    accept: "application/pdf",
                    onFileSelect: /* @__PURE__ */ __name((files) => {
                      var _a;
                      const name = (_a = files == null ? void 0 : files[0]) == null ? void 0 : _a.name;
                      if (name) Qs.success(`${name} selected`);
                    }, "onFileSelect")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Ps, { className: "gap-3 sm:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: requestClose, className: "min-w-20", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "primary", onClick: save, className: "min-w-20", children: vendor ? "Save" : "Add vendor" })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDiscardOpen,
        onOpenChange: setDiscardOpen,
        title: "Discard this vendor?",
        description: "What you have typed is not saved anywhere yet.",
        confirmLabel: "Discard",
        cancelLabel: "Keep editing",
        onConfirm: /* @__PURE__ */ __name(() => {
          setDiscardOpen(false);
          onClose();
        }, "onConfirm")
      }
    )
  ] });
}, "VendorFormDialog");
const { useEffect, useMemo, useState } = await importShared("react");
const STATUSES = [VendorStatus.Active, VendorStatus.Onboarding, VendorStatus.Inactive];
const VendorDirectory = /* @__PURE__ */ __name(() => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [category, setCategory] = useState("");
  const [editing, setEditing] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);
  useEffect(() => {
    setSearchText(search);
  }, [search]);
  const filters = useMemo(
    () => ({ ...DEFAULT_VENDOR_FILTERS, search, statuses, category }),
    [search, statuses, category]
  );
  const vendors = useVendorList(filters);
  const surface = useErrorSurface(vendors, { fallback: "Unable to load vendors." });
  const toggleStatus = /* @__PURE__ */ __name((status) => setStatuses(
    (current) => current.includes(status) ? current.filter((value) => value !== status) : [...current, status]
  ), "toggleStatus");
  const openCreate = /* @__PURE__ */ __name(() => {
    setEditing(null);
    setFormOpen(true);
  }, "openCreate");
  const openEdit = /* @__PURE__ */ __name((vendor) => {
    setEditing(vendor);
    setFormOpen(true);
  }, "openEdit");
  const rows = vendors.data ?? [];
  const isFiltered = search !== "" || statuses.length > 0 || category !== "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        dr,
        {
          value: searchText,
          onChange: /* @__PURE__ */ __name((event) => setSearchText(event.target.value), "onChange"),
          onSearch: setSearch,
          debounceTime: 300,
          placeholder: "Name, code or contact",
          leftIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "search", className: "size-4" }),
          "aria-label": "Search vendors"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qt,
        {
          variant: "filter",
          pressed: statuses.includes(status),
          onPressedChange: /* @__PURE__ */ __name(() => toggleStatus(status), "onPressedChange"),
          children: VENDOR_STATUS_META[status].label
        },
        status
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: VENDOR_CATEGORIES.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qt,
        {
          variant: "filter",
          pressed: category === value,
          onPressedChange: /* @__PURE__ */ __name((pressed) => setCategory(pressed ? value : ""), "onPressedChange"),
          children: value
        },
        value
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "primary",
          size: "sm",
          className: "ml-auto",
          onClick: openCreate,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "plus", className: "size-4" }),
          children: "Add vendor"
        }
      )
    ] }),
    surface.shouldRenderInPlace ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface }) : vendors.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-48 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        iconName: "briefcase",
        title: "No vendors match",
        description: isFiltered ? "Nothing in the directory matches the filters you have set." : "The directory is empty. Add the first vendor to get started.",
        action: isFiltered ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            onClick: /* @__PURE__ */ __name(() => {
              setSearch("");
              setStatuses([]);
              setCategory("");
            }, "onClick"),
            children: "Clear filters"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "primary", size: "sm", onClick: openCreate, children: "Add vendor" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3", children: rows.map((vendor) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(VendorCard, { vendor, onEdit: openEdit }) }, vendor.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VendorFormDialog, { vendor: editing, open: isFormOpen, onClose: /* @__PURE__ */ __name(() => setFormOpen(false), "onClose") })
  ] });
}, "VendorDirectory");
function VendorsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: RouteNames.Vendors,
        description: "Who can be paid, on what terms, and who to ask when an invoice does not add up."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VendorDirectory, {})
  ] });
}
__name(VendorsPage, "VendorsPage");
export {
  VendorsPage as default
};

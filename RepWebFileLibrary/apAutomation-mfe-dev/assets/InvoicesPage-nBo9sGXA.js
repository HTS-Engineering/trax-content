var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, c as dr, X as Xa, U as Ue, B as Ba, R as Rn, $ as $o, H as Ht, z as zo, h, T as To, N as Nn, u as us, e as $r, f as Tr, g as zr, i as Hs, O as Os, A as Ar, Y as Yn } from "./index-CFVMMdzN.js";
import { D as DEFAULT_INVOICE_FILTERS, S as SortDirection, I as InvoiceStatus, e as InvoiceSortField, i as isInvoiceStatus, g as INVOICE_STATUS_ORDER, h as INVOICE_STATUS_META, b as formatMoney, j as InvoiceDecision, d as daysUntilDate, c as formatDisplayDate, k as useInvoiceList } from "./money-WJ2bAmbD.js";
import { I as InvoiceQuickLookSheet, a as InvoiceDecisionDialog } from "./InvoiceQuickLookSheet-Bus8CdOx.js";
import "./factory-BAIl8rNu.js";
import { a as useSearchParams, L as Link } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
import { u as useVendorList, D as DEFAULT_VENDOR_FILTERS } from "./queries-BomZp9Zq.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { I as InvoiceStatusBadge } from "./InvoiceStatusBadge-DfyA3uCY.js";
import { i as invoicePath, a as RoutePaths, R as RouteNames } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { u as useReturnUrl } from "./use-scroll-into-view-ref-D02hTq9p.js";
import { u as useErrorSurface } from "./use-error-surface-ToUfTyG9.js";
import { D as DataLoadError } from "./DataLoadError-D0pN46nh.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { P as PageHeader } from "./PageHeader-CR5C8Orw.js";
const { useCallback, useMemo: useMemo$1 } = await importShared("react");
const PARAM = {
  search: "q",
  status: "status",
  vendor: "vendor",
  sortBy: "sort",
  direction: "dir",
  page: "page",
  pageSize: "size"
};
const PAGE_SIZES = [10, 25, 50];
const STATUS_VALUES = new Set(Object.values(InvoiceStatus));
const SORT_VALUES = new Set(Object.values(InvoiceSortField));
function readInt(raw, fallback, allowed) {
  const parsed = Number.parseInt(raw ?? "", 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return allowed && !allowed.includes(parsed) ? fallback : parsed;
}
__name(readInt, "readInt");
function useInvoiceFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo$1(() => {
    const statuses = searchParams.getAll(PARAM.status).filter((value) => STATUS_VALUES.has(value));
    const sortRaw = searchParams.get(PARAM.sortBy);
    const sortBy = sortRaw && SORT_VALUES.has(sortRaw) ? sortRaw : DEFAULT_INVOICE_FILTERS.sortBy;
    return {
      search: searchParams.get(PARAM.search) ?? "",
      statuses,
      vendorIds: searchParams.getAll(PARAM.vendor),
      sortBy,
      direction: searchParams.get(PARAM.direction) === SortDirection.Descending ? SortDirection.Descending : SortDirection.Ascending,
      page: readInt(searchParams.get(PARAM.page), 1),
      pageSize: readInt(searchParams.get(PARAM.pageSize), DEFAULT_INVOICE_FILTERS.pageSize, PAGE_SIZES)
    };
  }, [searchParams]);
  const write = useCallback(
    (mutate) => {
      setSearchParams(
        (current) => {
          const next = new URLSearchParams(current);
          mutate(next);
          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );
  const setSingle = useCallback(
    (key, value, isDefault) => write((params) => {
      if (isDefault) params.delete(key);
      else params.set(key, value);
      if (key !== PARAM.page) params.delete(PARAM.page);
    }),
    [write]
  );
  const setMulti = useCallback(
    (key, values) => write((params) => {
      params.delete(key);
      values.forEach((value) => params.append(key, value));
      params.delete(PARAM.page);
    }),
    [write]
  );
  return useMemo$1(
    () => ({
      filters,
      pageSizes: PAGE_SIZES,
      isFiltered: filters.search !== "" || filters.statuses.length > 0 || filters.vendorIds.length > 0,
      setSearch: /* @__PURE__ */ __name((value) => setSingle(PARAM.search, value, value.trim() === ""), "setSearch"),
      setStatuses: /* @__PURE__ */ __name((values) => setMulti(PARAM.status, values), "setStatuses"),
      setVendorIds: /* @__PURE__ */ __name((values) => setMulti(PARAM.vendor, values), "setVendorIds"),
      setPage: /* @__PURE__ */ __name((page) => setSingle(PARAM.page, String(page), page === 1), "setPage"),
      setPageSize: /* @__PURE__ */ __name((size) => setSingle(PARAM.pageSize, String(size), size === DEFAULT_INVOICE_FILTERS.pageSize), "setPageSize"),
      /** Clicking the sorted column again reverses it, which is what a user expects. */
      toggleSort: /* @__PURE__ */ __name((field) => write((params) => {
        const isSame = field === filters.sortBy;
        const nextDirection = isSame && filters.direction === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending;
        if (field === DEFAULT_INVOICE_FILTERS.sortBy) params.delete(PARAM.sortBy);
        else params.set(PARAM.sortBy, field);
        if (nextDirection === SortDirection.Ascending) params.delete(PARAM.direction);
        else params.set(PARAM.direction, nextDirection);
        params.delete(PARAM.page);
      }), "toggleSort"),
      clear: /* @__PURE__ */ __name(() => write((params) => {
        Object.values(PARAM).forEach((key) => params.delete(key));
      }), "clear")
    }),
    [filters, setSingle, setMulti, write]
  );
}
__name(useInvoiceFilters, "useInvoiceFilters");
const { useEffect, useMemo, useState: useState$1 } = await importShared("react");
const STATUS_ITEMS = INVOICE_STATUS_ORDER.map((status) => ({
  value: status,
  label: INVOICE_STATUS_META[status].label
}));
const summarise = /* @__PURE__ */ __name((items, empty, plural) => {
  if (items.length === 0) return empty;
  return items.length === 1 ? items[0].label : `${items.length} ${plural}`;
}, "summarise");
const InvoiceFilterBar = /* @__PURE__ */ __name(({ controls, total }) => {
  const { filters, isFiltered, setSearch, setStatuses, setVendorIds, clear } = controls;
  const vendors = useVendorList(DEFAULT_VENDOR_FILTERS);
  const vendorItems = useMemo(
    () => (vendors.data ?? []).map((vendor) => ({ value: vendor.id, label: vendor.name })),
    [vendors.data]
  );
  const [searchText, setSearchText] = useState$1(filters.search);
  useEffect(() => {
    setSearchText(filters.search);
  }, [filters.search]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        dr,
        {
          value: searchText,
          onChange: /* @__PURE__ */ __name((event) => setSearchText(event.target.value), "onChange"),
          onSearch: setSearch,
          debounceTime: 300,
          placeholder: "Invoice number, vendor or cost centre",
          leftIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "search", className: "size-4" }),
          "aria-label": "Search invoices"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Xa,
        {
          items: STATUS_ITEMS,
          value: filters.statuses,
          onValueChange: /* @__PURE__ */ __name((values) => setStatuses(values.filter(isInvoiceStatus)), "onValueChange"),
          placeholder: "Any status",
          searchPlaceholder: "Filter statuses",
          triggerClassName: "w-52",
          renderValue: /* @__PURE__ */ __name((items) => summarise(items, "Any status", "statuses"), "renderValue")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Xa,
        {
          items: vendorItems,
          value: filters.vendorIds,
          onValueChange: setVendorIds,
          placeholder: vendors.isPending ? "Loading vendors..." : "Any vendor",
          searchPlaceholder: "Find a vendor",
          disabled: vendors.isPending || vendorItems.length === 0,
          triggerClassName: "w-56",
          renderValue: /* @__PURE__ */ __name((items) => summarise(items, "Any vendor", "vendors"), "renderValue")
        }
      ),
      isFiltered && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "ghost-neutral",
          size: "sm",
          onClick: clear,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" }),
          children: "Clear filters"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-neutral-100", "aria-live": "polite", children: total === void 0 ? "Counting..." : `${total} invoice${total === 1 ? "" : "s"}${isFiltered ? " match these filters" : ""}` })
  ] });
}, "InvoiceFilterBar");
const InvoicePager = /* @__PURE__ */ __name(({
  page,
  pageSize,
  total,
  pageSizes,
  onPageChange,
  onPageSizeChange
}) => {
  const lastPage = Math.max(1, Math.ceil(total / pageSize));
  const first = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const last = Math.min(page * pageSize, total);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-trax-grey-600", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rows per page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ba,
        {
          options: pageSizes.map((size) => ({ value: String(size), label: String(size) })),
          value: String(pageSize),
          onValueChange: /* @__PURE__ */ __name((value) => onPageSizeChange(Number(value)), "onValueChange"),
          className: "w-20"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-trax-grey-600", "aria-live": "polite", children: [
        first,
        "-",
        last,
        " of ",
        total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            onClick: /* @__PURE__ */ __name(() => onPageChange(page - 1), "onClick"),
            disabled: page <= 1,
            "aria-label": "Previous page",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "arrow-left", className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            onClick: /* @__PURE__ */ __name(() => onPageChange(page + 1), "onClick"),
            disabled: page >= lastPage,
            "aria-label": "Next page",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "chevron-right", className: "size-4" })
          }
        )
      ] })
    ] })
  ] });
}, "InvoicePager");
const COLUMNS = [
  { id: "number", label: "Invoice", sortBy: InvoiceSortField.Number },
  { id: "vendor", label: "Vendor", sortBy: InvoiceSortField.Vendor },
  { id: "costCentre", label: "Cost centre", className: "hidden lg:table-cell" },
  { id: "dueOn", label: "Due", sortBy: InvoiceSortField.DueOn },
  { id: "amount", label: "Amount", sortBy: InvoiceSortField.Amount, align: "right" },
  { id: "status", label: "Status" },
  { id: "actions", label: "Actions" }
];
const ARIA_SORT = {
  [SortDirection.Ascending]: "ascending",
  [SortDirection.Descending]: "descending"
};
function DueCell({ dueOn }) {
  const days = daysUntilDate(dueOn);
  const isOverdue = days < 0;
  const isDueSoon = days >= 0 && days <= 5;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: h("text-sm", isOverdue && "font-semibold text-trax-red-600"), children: formatDisplayDate(dueOn) }),
    (isOverdue || isDueSoon) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: h("text-xs", isOverdue ? "text-trax-red-600" : "text-trax-yellow-800"), children: isOverdue ? `${Math.abs(days)} days overdue` : days === 0 ? "due today" : `in ${days} days` })
  ] });
}
__name(DueCell, "DueCell");
const InvoiceTable = /* @__PURE__ */ __name(({
  invoices,
  sortBy,
  direction,
  onToggleSort,
  onQuickLook,
  onDecide,
  isRefreshing
}) => {
  const returnUrl = useReturnUrl();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trax-custom-scrollbar overflow-x-auto rounded-lg border border-trax-neutral-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Rn, { className: h("min-w-3xl transition-opacity", isRefreshing && "opacity-60"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx($o, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ht, { className: "bg-trax-neutral-10", children: COLUMNS.map((column) => {
      const isSorted = column.sortBy === sortBy;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        zo,
        {
          "aria-sort": isSorted ? ARIA_SORT[direction] : void 0,
          className: h(
            "px-4 py-2.5 text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase",
            column.align === "right" && "text-right",
            column.id === "actions" && "text-right",
            column.className
          ),
          children: column.sortBy ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: /* @__PURE__ */ __name(() => onToggleSort(column.sortBy), "onClick"),
              className: h(
                "inline-flex items-center gap-1 uppercase hover:text-trax-primary-blue-600",
                isSorted && "text-trax-primary-blue-600",
                column.align === "right" && "flex-row-reverse"
              ),
              children: [
                column.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    name: "chevron-down",
                    className: h(
                      "size-3.5 transition-transform",
                      !isSorted && "opacity-30",
                      isSorted && direction === SortDirection.Ascending && "rotate-180"
                    )
                  }
                )
              ]
            }
          ) : column.id === "actions" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: column.label }) : column.label
        },
        column.id
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(To, { children: invoices.map((invoice) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Ht, { className: "border-t border-trax-neutral-30 hover:bg-trax-neutral-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { className: "px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: invoicePath(RoutePaths.InvoiceSummary, invoice.id),
            state: { returnUrl },
            className: "font-medium text-trax-primary-blue-600 hover:underline",
            children: invoice.number
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-trax-neutral-100", children: [
          invoice.lineCount,
          " ",
          invoice.lineCount === 1 ? "line" : "lines",
          invoice.attachmentCount > 0 && ` - ${invoice.attachmentCount} ${invoice.attachmentCount === 1 ? "attachment" : "attachments"}`
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "max-w-56 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "block text-sm text-trax-neutral-700", children: invoice.vendorName }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "hidden px-4 py-3 text-sm text-trax-grey-600 lg:table-cell", children: invoice.costCentre }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DueCell, { dueOn: invoice.dueOn }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-right text-sm font-semibold tabular-nums", children: formatMoney(invoice.amount) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStatusBadge, { status: invoice.status }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": `Actions for ${invoice.number}`,
            className: "rounded-md p-1.5 text-trax-neutral-400 hover:bg-trax-neutral-20 hover:text-trax-neutral-700",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "more-vertical", className: "size-4" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(zr, { align: "end", className: "w-52", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hs, { className: "text-xs", children: invoice.number }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Os, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Ar, { onSelect: /* @__PURE__ */ __name(() => onQuickLook(invoice), "onSelect"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "panel-right", className: "size-4" }),
            "Quick look"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Os, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Ar,
            {
              disabled: !INVOICE_STATUS_META[invoice.status].actionable,
              onSelect: /* @__PURE__ */ __name(() => onDecide(invoice, InvoiceDecision.Approve), "onSelect"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", className: "size-4" }),
                "Approve"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Ar,
            {
              disabled: !INVOICE_STATUS_META[invoice.status].actionable,
              onSelect: /* @__PURE__ */ __name(() => onDecide(invoice, InvoiceDecision.Hold), "onSelect"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "clock", className: "size-4" }),
                "Put on hold"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Ar,
            {
              variant: "destructive",
              disabled: !INVOICE_STATUS_META[invoice.status].actionable,
              onSelect: /* @__PURE__ */ __name(() => onDecide(invoice, InvoiceDecision.Reject), "onSelect"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "x-circle", className: "size-4" }),
                "Reject"
              ]
            }
          )
        ] })
      ] }) })
    ] }, invoice.id)) })
  ] }) });
}, "InvoiceTable");
const { useState } = await importShared("react");
function InvoicesPage() {
  const controls = useInvoiceFilters();
  const [quickLook, setQuickLook] = useState(null);
  const [target, setTarget] = useState(null);
  const invoices = useInvoiceList(controls.filters);
  const surface = useErrorSurface(invoices, {
    fallback: "Unable to load invoices.",
    canRenderInPlace: invoices.data === void 0
  });
  const page = invoices.data;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: RouteNames.Invoices,
        description: "Everything captured, whatever stage it has reached. Filters are held in the URL, so this view can be shared and returned to."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceFilterBar, { controls, total: page == null ? void 0 : page.total }),
    surface.shouldRenderInPlace ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface }) : page === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-64 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : page.items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        iconName: "file-text",
        title: "No invoices match",
        description: controls.isFiltered ? "Nothing matches the filters you have set. Clearing them brings everything back." : "Nothing has been captured yet."
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InvoiceTable,
        {
          invoices: page.items,
          sortBy: controls.filters.sortBy,
          direction: controls.filters.direction,
          onToggleSort: controls.toggleSort,
          onQuickLook: setQuickLook,
          onDecide: /* @__PURE__ */ __name((invoice, decision) => setTarget({ invoice, decision }), "onDecide"),
          isRefreshing: invoices.isFetching
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InvoicePager,
        {
          page: page.page,
          pageSize: page.pageSize,
          total: page.total,
          pageSizes: controls.pageSizes,
          onPageChange: controls.setPage,
          onPageSizeChange: controls.setPageSize
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceQuickLookSheet, { invoice: quickLook, onClose: /* @__PURE__ */ __name(() => setQuickLook(null), "onClose") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      InvoiceDecisionDialog,
      {
        invoice: (target == null ? void 0 : target.invoice) ?? null,
        decision: (target == null ? void 0 : target.decision) ?? null,
        onClose: /* @__PURE__ */ __name(() => setTarget(null), "onClose")
      }
    )
  ] });
}
__name(InvoicesPage, "InvoicesPage");
export {
  InvoicesPage as default
};

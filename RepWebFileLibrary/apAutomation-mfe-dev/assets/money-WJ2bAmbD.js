var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { w as getInvoiceLineSeed, v as useAppQuery, q as queryKeys, V as VENDOR_SEED, g as demoRequest, x as readInvoices, y as keepPreviousData, z as readInvoice, A as sandboxNotFound, B as getInvoiceEventSeed, u as useQueryClient, C as createInvoice, D as sandboxConflict, E as writeInvoiceStatus, F as appendInvoiceEvent } from "./factory-BAIl8rNu.js";
import "./index-CFVMMdzN.js";
import "./use-error-surface-ToUfTyG9.js";
import { u as useMutation } from "./useMutation-BgIqTrew.js";
var InvoiceStatus = /* @__PURE__ */ ((InvoiceStatus2) => {
  InvoiceStatus2["Draft"] = "draft";
  InvoiceStatus2["PendingApproval"] = "pending_approval";
  InvoiceStatus2["Approved"] = "approved";
  InvoiceStatus2["Rejected"] = "rejected";
  InvoiceStatus2["OnHold"] = "on_hold";
  InvoiceStatus2["Paid"] = "paid";
  return InvoiceStatus2;
})(InvoiceStatus || {});
var InvoiceEventKind = /* @__PURE__ */ ((InvoiceEventKind2) => {
  InvoiceEventKind2["Created"] = "created";
  InvoiceEventKind2["Submitted"] = "submitted";
  InvoiceEventKind2["Approved"] = "approved";
  InvoiceEventKind2["Rejected"] = "rejected";
  InvoiceEventKind2["Held"] = "held";
  InvoiceEventKind2["Commented"] = "commented";
  InvoiceEventKind2["Paid"] = "paid";
  return InvoiceEventKind2;
})(InvoiceEventKind || {});
var InvoiceSortField = /* @__PURE__ */ ((InvoiceSortField2) => {
  InvoiceSortField2["Number"] = "number";
  InvoiceSortField2["Vendor"] = "vendorName";
  InvoiceSortField2["Amount"] = "amount";
  InvoiceSortField2["DueOn"] = "dueOn";
  return InvoiceSortField2;
})(InvoiceSortField || {});
var SortDirection = /* @__PURE__ */ ((SortDirection2) => {
  SortDirection2["Ascending"] = "asc";
  SortDirection2["Descending"] = "desc";
  return SortDirection2;
})(SortDirection || {});
const DEFAULT_INVOICE_FILTERS = {
  sortBy: "dueOn",
  pageSize: 10
};
const INVOICE_STATUS_META = {
  [
    "draft"
    /* Draft */
  ]: {
    label: "Draft",
    className: "bg-trax-neutral-20 text-trax-neutral-500 border-trax-neutral-40",
    actionable: false
  },
  [
    "pending_approval"
    /* PendingApproval */
  ]: {
    label: "Pending approval",
    className: "bg-trax-yellow-100 text-trax-yellow-800 border-trax-yellow-200",
    actionable: true
  },
  [
    "approved"
    /* Approved */
  ]: {
    label: "Approved",
    className: "bg-trax-green-100 text-trax-green-800 border-trax-green-100",
    actionable: false
  },
  [
    "rejected"
    /* Rejected */
  ]: {
    label: "Rejected",
    className: "bg-trax-red-100 text-trax-red-600 border-trax-red-100",
    actionable: false
  },
  [
    "on_hold"
    /* OnHold */
  ]: {
    label: "On hold",
    className: "bg-trax-teal-100 text-trax-neutral-600 border-trax-teal-300",
    actionable: true
  },
  [
    "paid"
    /* Paid */
  ]: {
    label: "Paid",
    className: "bg-trax-primary-blue-50 text-trax-primary-blue-700 border-trax-primary-blue-100",
    actionable: false
  }
};
const INVOICE_STATUS_ORDER = [
  "pending_approval",
  "on_hold",
  "approved",
  "paid",
  "rejected",
  "draft"
  /* Draft */
];
const lineTotal = /* @__PURE__ */ __name((line) => line.quantity * line.unitPrice, "lineTotal");
const STATUS_VALUES = new Set(Object.values(InvoiceStatus));
const isInvoiceStatus = /* @__PURE__ */ __name((value) => STATUS_VALUES.has(value), "isInvoiceStatus");
const isValidDate = /* @__PURE__ */ __name((date) => !isNaN(date.getTime()), "isValidDate");
const parseDateOnlyAsLocal = /* @__PURE__ */ __name((dateString) => {
  const isoDateMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!isoDateMatch) return new Date(Number.NaN);
  const [, year, month, day] = isoDateMatch;
  return new Date(Number(year), Number(month) - 1, Number(day));
}, "parseDateOnlyAsLocal");
const formatToISODate = /* @__PURE__ */ __name((date) => {
  if (!date) return null;
  const d = typeof date === "string" ? parseDateOnlyAsLocal(date) : date;
  if (isNaN(d.getTime())) return null;
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}, "formatToISODate");
const formatDisplayDate = /* @__PURE__ */ __name((date) => {
  if (!date) return "";
  try {
    const parsedDate = typeof date === "string" ? parseDateOnlyAsLocal(date) : date;
    if (!isValidDate(parsedDate)) return "";
    const month = parsedDate.toLocaleDateString("en-US", { month: "short" });
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
    return `${month} ${day}, ${year}`;
  } catch {
    return "";
  }
}, "formatDisplayDate");
const daysUntilDate = /* @__PURE__ */ __name((dateOnly) => {
  const target = parseDateOnlyAsLocal(dateOnly);
  if (!isValidDate(target)) return Number.NaN;
  const now = /* @__PURE__ */ new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target.getTime() - today.getTime()) / 864e5);
}, "daysUntilDate");
const formatHistoryTimestamp = /* @__PURE__ */ __name((timestamp) => {
  if (!timestamp) return "";
  try {
    const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
    if (!isValidDate(date)) return "";
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, "0");
    return `${month} ${day}, ${year} at ${displayHours}:${displayMinutes} ${ampm}`;
  } catch {
    return "";
  }
}, "formatHistoryTimestamp");
const STATUS = {
  draft: InvoiceStatus.Draft,
  pending_approval: InvoiceStatus.PendingApproval,
  approved: InvoiceStatus.Approved,
  rejected: InvoiceStatus.Rejected,
  on_hold: InvoiceStatus.OnHold,
  paid: InvoiceStatus.Paid
};
const WIRE_STATUS = {
  [InvoiceStatus.Draft]: "draft",
  [InvoiceStatus.PendingApproval]: "pending_approval",
  [InvoiceStatus.Approved]: "approved",
  [InvoiceStatus.Rejected]: "rejected",
  [InvoiceStatus.OnHold]: "on_hold",
  [InvoiceStatus.Paid]: "paid"
};
const toSeedStatus = /* @__PURE__ */ __name((status) => WIRE_STATUS[status], "toSeedStatus");
const EVENT_KIND$1 = {
  created: InvoiceEventKind.Created,
  submitted: InvoiceEventKind.Submitted,
  approved: InvoiceEventKind.Approved,
  rejected: InvoiceEventKind.Rejected,
  held: InvoiceEventKind.Held,
  commented: InvoiceEventKind.Commented,
  paid: InvoiceEventKind.Paid
};
function toInvoice(seed, vendorName2) {
  return {
    id: seed.id,
    number: seed.number,
    vendorId: seed.vendorId,
    vendorName: vendorName2,
    status: STATUS[seed.status],
    amount: seed.amount,
    issuedOn: seed.issuedOn,
    dueOn: seed.dueOn,
    costCentre: seed.costCentre,
    submittedBy: seed.submittedBy,
    lineCount: getInvoiceLineSeed(seed.id).length,
    // Derived from the id so it is stable, and varies enough to show a row with
    // no attachment next to one with several.
    attachmentCount: seed.id.charCodeAt(seed.id.length - 1) % 4,
    note: seed.note
  };
}
__name(toInvoice, "toInvoice");
function toInvoiceLine(seed) {
  return {
    id: seed.id,
    description: seed.description,
    category: seed.category,
    quantity: seed.quantity,
    unitPrice: seed.unitPrice,
    taxCode: seed.taxCode
  };
}
__name(toInvoiceLine, "toInvoiceLine");
function toInvoiceEvent(seed) {
  return {
    id: seed.id,
    kind: EVENT_KIND$1[seed.kind],
    actor: seed.actor,
    at: seed.at,
    detail: seed.detail
  };
}
__name(toInvoiceEvent, "toInvoiceEvent");
const VENDOR_NAMES = new Map(VENDOR_SEED.map((vendor) => [vendor.id, vendor.name]));
const vendorName = /* @__PURE__ */ __name((vendorId) => VENDOR_NAMES.get(vendorId) ?? "Unknown vendor", "vendorName");
const allInvoices = /* @__PURE__ */ __name(() => readInvoices().map((seed) => toInvoice(seed, vendorName(seed.vendorId))), "allInvoices");
const COMPARATORS = {
  [InvoiceSortField.Number]: (a, b) => a.number.localeCompare(b.number),
  [InvoiceSortField.Vendor]: (a, b) => a.vendorName.localeCompare(b.vendorName),
  [InvoiceSortField.Amount]: (a, b) => a.amount - b.amount,
  [InvoiceSortField.DueOn]: (a, b) => a.dueOn.localeCompare(b.dueOn)
};
function selectPage(filters) {
  const needle = filters.search.trim().toLowerCase();
  const matched = allInvoices().filter((invoice) => {
    if (filters.statuses.length && !filters.statuses.includes(invoice.status)) return false;
    if (filters.vendorIds.length && !filters.vendorIds.includes(invoice.vendorId)) return false;
    if (!needle) return true;
    return invoice.number.toLowerCase().includes(needle) || invoice.vendorName.toLowerCase().includes(needle) || invoice.costCentre.toLowerCase().includes(needle);
  });
  const sorted = matched.sort(COMPARATORS[filters.sortBy]);
  if (filters.direction === SortDirection.Descending) sorted.reverse();
  const start = (filters.page - 1) * filters.pageSize;
  return {
    items: sorted.slice(start, start + filters.pageSize),
    total: sorted.length,
    page: filters.page,
    pageSize: filters.pageSize
  };
}
__name(selectPage, "selectPage");
function useInvoiceList(filters) {
  return useAppQuery({
    queryKey: queryKeys.invoices.list(filters),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({ path: "/v1/invoices", signal, resolve: /* @__PURE__ */ __name(() => selectPage(filters), "resolve") }), "queryFn"),
    placeholderData: keepPreviousData,
    meta: { errorCopy: { fallback: "Unable to load invoices." } }
  });
}
__name(useInvoiceList, "useInvoiceList");
function useInvoice(invoiceId) {
  return useAppQuery({
    // Computed even while disabled, so it must be safe for an absent id rather
    // than asserted with `!`. The empty string never reaches the resolver.
    queryKey: queryKeys.invoices.detail(invoiceId ?? ""),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({
      path: `/v1/invoices/${invoiceId}`,
      signal,
      resolve: /* @__PURE__ */ __name(() => {
        const seed = invoiceId ? readInvoice(invoiceId) : void 0;
        if (!seed) throw sandboxNotFound("That invoice no longer exists, or was never visible to you.");
        return toInvoice(seed, vendorName(seed.vendorId));
      }, "resolve")
    }), "queryFn"),
    enabled: Boolean(invoiceId),
    meta: { errorCopy: { fallback: "Unable to load this invoice." } }
  });
}
__name(useInvoice, "useInvoice");
function useInvoiceLines(invoiceId) {
  return useAppQuery({
    queryKey: queryKeys.invoices.lines(invoiceId ?? ""),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({
      path: `/v1/invoices/${invoiceId}/lines`,
      signal,
      resolve: /* @__PURE__ */ __name(() => invoiceId ? getInvoiceLineSeed(invoiceId).map(toInvoiceLine) : [], "resolve")
    }), "queryFn"),
    enabled: Boolean(invoiceId),
    meta: { errorCopy: { fallback: "Unable to load the line items." } }
  });
}
__name(useInvoiceLines, "useInvoiceLines");
function useInvoiceHistory(invoiceId) {
  return useAppQuery({
    queryKey: queryKeys.invoices.history(invoiceId ?? ""),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({
      path: `/v1/invoices/${invoiceId}/history`,
      signal,
      resolve: /* @__PURE__ */ __name(() => invoiceId ? getInvoiceEventSeed(invoiceId).map(toInvoiceEvent) : [], "resolve")
    }), "queryFn"),
    enabled: Boolean(invoiceId),
    meta: { errorCopy: { fallback: "Unable to load the history." } }
  });
}
__name(useInvoiceHistory, "useInvoiceHistory");
function computeMetrics() {
  const invoices = allInvoices();
  const pending = invoices.filter((invoice) => invoice.status === InvoiceStatus.PendingApproval);
  return {
    pendingCount: pending.length,
    pendingAmount: pending.reduce((sum, invoice) => sum + invoice.amount, 0),
    approvedThisMonth: invoices.filter(
      (invoice) => invoice.status === InvoiceStatus.Approved || invoice.status === InvoiceStatus.Paid
    ).length,
    overdueCount: pending.filter((invoice) => daysUntilDate(invoice.dueOn) < 0).length,
    averageApprovalDays: 3.4
  };
}
__name(computeMetrics, "computeMetrics");
function useInvoiceMetrics() {
  return useAppQuery({
    queryKey: queryKeys.invoices.metrics(),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({ path: "/v1/invoices/metrics", signal, resolve: computeMetrics }), "queryFn"),
    meta: { errorCopy: { fallback: "Unable to load the summary figures." } }
  });
}
__name(useInvoiceMetrics, "useInvoiceMetrics");
function useApprovalQueue() {
  return useAppQuery({
    queryKey: queryKeys.approvals.list({ status: InvoiceStatus.PendingApproval }),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({
      path: "/v1/approvals",
      signal,
      resolve: /* @__PURE__ */ __name(() => allInvoices().filter((invoice) => invoice.status === InvoiceStatus.PendingApproval).sort((a, b) => a.dueOn.localeCompare(b.dueOn)), "resolve")
    }), "queryFn"),
    meta: { errorCopy: { fallback: "Unable to load the approval queue." } }
  });
}
__name(useApprovalQueue, "useApprovalQueue");
var InvoiceDecision = /* @__PURE__ */ ((InvoiceDecision2) => {
  InvoiceDecision2["Approve"] = "approve";
  InvoiceDecision2["Reject"] = "reject";
  InvoiceDecision2["Hold"] = "hold";
  return InvoiceDecision2;
})(InvoiceDecision || {});
const RESULTING_STATUS = {
  [
    "approve"
    /* Approve */
  ]: InvoiceStatus.Approved,
  [
    "reject"
    /* Reject */
  ]: InvoiceStatus.Rejected,
  [
    "hold"
    /* Hold */
  ]: InvoiceStatus.OnHold
};
const EVENT_KIND = {
  [
    "approve"
    /* Approve */
  ]: "approved",
  [
    "reject"
    /* Reject */
  ]: "rejected",
  [
    "hold"
    /* Hold */
  ]: "held"
};
function useInvoiceDecision({ errorSurface } = {}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["invoices", "decision"],
    meta: errorSurface ? { errorSurface } : void 0,
    mutationFn: /* @__PURE__ */ __name(({ invoiceId, decision, comment }) => demoRequest({
      path: `/v1/invoices/${invoiceId}/${decision}`,
      kind: "write",
      resolve: /* @__PURE__ */ __name(() => {
        const invoice = readInvoice(invoiceId);
        if (!invoice) throw sandboxNotFound("That invoice no longer exists.");
        writeInvoiceStatus(invoiceId, toSeedStatus(RESULTING_STATUS[decision]));
        appendInvoiceEvent(invoiceId, {
          kind: EVENT_KIND[decision],
          actor: "You",
          detail: comment
        });
        return { invoiceId, status: RESULTING_STATUS[decision] };
      }, "resolve")
    }), "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.invoices.all() });
      void queryClient.invalidateQueries({ queryKey: queryKeys.approvals.all() });
    }, "onSuccess")
  });
}
__name(useInvoiceDecision, "useInvoiceDecision");
function useCreateInvoice({ errorSurface } = {}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["invoices", "create"],
    meta: errorSurface ? { errorSurface } : void 0,
    mutationFn: /* @__PURE__ */ __name((input) => demoRequest({
      path: "/v1/invoices",
      kind: "write",
      resolve: /* @__PURE__ */ __name(() => {
        const created = createInvoice({ ...input, submittedBy: "You" });
        if (!created) {
          throw sandboxConflict(`Invoice ${input.number} already exists for this vendor.`);
        }
        return { invoiceId: created.id, number: created.number };
      }, "resolve")
    }), "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.invoices.all() });
      void queryClient.invalidateQueries({ queryKey: queryKeys.approvals.all() });
    }, "onSuccess")
  });
}
__name(useCreateInvoice, "useCreateInvoice");
const DECIMALS = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const WHOLE = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const formatMoney = /* @__PURE__ */ __name((amount, symbol = "$") => {
  const sign = amount < 0 ? "-" : "";
  return `${sign}${symbol}${DECIMALS.format(Math.abs(amount))}`;
}, "formatMoney");
const formatMoneyRounded = /* @__PURE__ */ __name((amount, symbol = "$") => {
  const sign = amount < 0 ? "-" : "";
  return `${sign}${symbol}${WHOLE.format(Math.abs(amount))}`;
}, "formatMoneyRounded");
export {
  DEFAULT_INVOICE_FILTERS as D,
  InvoiceStatus as I,
  SortDirection as S,
  useApprovalQueue as a,
  formatMoney as b,
  formatDisplayDate as c,
  daysUntilDate as d,
  InvoiceSortField as e,
  formatMoneyRounded as f,
  INVOICE_STATUS_ORDER as g,
  INVOICE_STATUS_META as h,
  isInvoiceStatus as i,
  InvoiceDecision as j,
  useInvoiceList as k,
  useInvoice as l,
  useInvoiceLines as m,
  lineTotal as n,
  useInvoiceHistory as o,
  formatHistoryTimestamp as p,
  InvoiceEventKind as q,
  useInvoiceDecision as r,
  formatToISODate as s,
  useCreateInvoice as t,
  useInvoiceMetrics as u,
  parseDateOnlyAsLocal as v
};

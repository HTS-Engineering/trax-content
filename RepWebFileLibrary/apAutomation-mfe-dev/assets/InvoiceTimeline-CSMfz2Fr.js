var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, D as Ds, M as Ms, k as Es, l as ks, V as Vs, m as Oa, t as ts, B as Ba, P as Ps, U as Ue, Y as Yn, Q as Qs, R as Rn, $ as $o, H as Ht, z as zo, T as To, N as Nn, n as jr, J as Js, s as sn, o as gr, p as Qa, W as Ws, K as Ks, q as Xs } from "./index-CFVMMdzN.js";
import { m as useInvoiceLines, n as lineTotal, b as formatMoney, d as daysUntilDate, c as formatDisplayDate, h as INVOICE_STATUS_META, I as InvoiceStatus, o as useInvoiceHistory, p as formatHistoryTimestamp, q as InvoiceEventKind } from "./money-WJ2bAmbD.js";
import { d as getErrorMessage, u as useErrorSurface } from "./use-error-surface-ToUfTyG9.js";
import { D as DataLoadError } from "./DataLoadError-D0pN46nh.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { C as ConfirmDialog } from "./ConfirmDialog-BPwbNvaf.js";
import { u as useQueryClient, q as queryKeys, g as demoRequest } from "./factory-BAIl8rNu.js";
import { u as useMutation } from "./useMutation-BgIqTrew.js";
import { K as KeyValueList } from "./KeyValueList-hl8rrFPd.js";
function useUpdateInvoiceLine() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["invoices", "line", "update"],
    meta: { errorSurface: "local" },
    mutationFn: /* @__PURE__ */ __name(({ invoiceId, line }) => demoRequest({
      path: `/v1/invoices/${invoiceId}/lines/${line.id}`,
      kind: "write",
      resolve: /* @__PURE__ */ __name(() => line, "resolve")
    }), "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_line, { invoiceId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.invoices.lines(invoiceId) });
    }, "onSuccess")
  });
}
__name(useUpdateInvoiceLine, "useUpdateInvoiceLine");
const { useEffect, useState: useState$1 } = await importShared("react");
const TAX_CODES = [
  { value: "HST-13", label: "HST 13%" },
  { value: "GST-5", label: "GST 5%" },
  { value: "ZERO", label: "Zero rated" },
  { value: "EXEMPT", label: "Exempt" }
];
const toDraft = /* @__PURE__ */ __name((line) => ({
  description: line.description,
  quantity: String(line.quantity),
  unitPrice: line.unitPrice.toFixed(2),
  taxCode: line.taxCode
}), "toDraft");
const EditLineDialog = /* @__PURE__ */ __name(({ invoiceId, line, onClose }) => {
  const [draft, setDraft] = useState$1(null);
  const [isDiscardOpen, setDiscardOpen] = useState$1(false);
  const mutation = useUpdateInvoiceLine();
  useEffect(() => {
    setDraft(line ? toDraft(line) : null);
    mutation.reset();
  }, [line]);
  const isDirty = Boolean(line && draft) && JSON.stringify(draft) !== JSON.stringify(line ? toDraft(line) : null);
  const requestClose = /* @__PURE__ */ __name(() => {
    if (mutation.isPending) return;
    if (isDirty) {
      setDiscardOpen(true);
      return;
    }
    onClose();
  }, "requestClose");
  const save = /* @__PURE__ */ __name(() => {
    if (!line || !draft) return;
    const quantity = Number(draft.quantity);
    const unitPrice = Number(draft.unitPrice);
    mutation.mutate(
      {
        invoiceId,
        line: {
          ...line,
          description: draft.description.trim(),
          quantity: Number.isFinite(quantity) ? quantity : line.quantity,
          unitPrice: Number.isFinite(unitPrice) ? unitPrice : line.unitPrice,
          taxCode: draft.taxCode
        }
      },
      {
        onSuccess: /* @__PURE__ */ __name(() => {
          Qs.success("Line saved");
          onClose();
        }, "onSuccess")
      }
    );
  }, "save");
  const update = /* @__PURE__ */ __name((patch) => setDraft((current) => current ? { ...current, ...patch } : current), "update");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ds,
      {
        open: Boolean(line),
        onOpenChange: /* @__PURE__ */ __name((next) => {
          if (!next) requestClose();
        }, "onOpenChange"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ms, { className: "max-w-lg", onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Es, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ks, { className: "text-base font-semibold text-trax-neutral-600", children: "Edit line item" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm text-trax-grey-600", children: "Changes are saved against the invoice, not the vendor's copy." })
          ] }),
          draft && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Oa,
              {
                label: "Description",
                value: draft.description,
                onChange: /* @__PURE__ */ __name((event) => update({ description: event.target.value }), "onChange"),
                required: true,
                maxCharacters: 120,
                showCharacterCount: true,
                enforceMaxLength: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Oa,
                {
                  label: "Quantity",
                  type: "number",
                  min: 1,
                  value: draft.quantity,
                  onChange: /* @__PURE__ */ __name((event) => update({ quantity: event.target.value }), "onChange")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ts,
                {
                  label: "Unit price",
                  prefix: "$",
                  type: "number",
                  step: "0.01",
                  textAlign: "right",
                  value: draft.unitPrice,
                  onChange: /* @__PURE__ */ __name((event) => update({ unitPrice: event.target.value }), "onChange")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                label: "Tax code",
                options: TAX_CODES,
                value: draft.taxCode,
                onValueChange: /* @__PURE__ */ __name((value) => update({ taxCode: value }), "onValueChange")
              }
            ),
            mutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "rounded-lg bg-trax-red-100 px-3 py-2 text-sm text-trax-red-600", children: getErrorMessage(mutation.error, { context: "action" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Ps, { className: "gap-3 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: requestClose, disabled: mutation.isPending, className: "min-w-20", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ue,
              {
                variant: "primary",
                onClick: save,
                disabled: mutation.isPending || !isDirty,
                className: "min-w-20",
                children: mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }) : "Save"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDiscardOpen,
        onOpenChange: setDiscardOpen,
        title: "Discard your changes?",
        description: "This line has edits that have not been saved.",
        confirmLabel: "Discard",
        cancelLabel: "Keep editing",
        onConfirm: /* @__PURE__ */ __name(() => {
          setDiscardOpen(false);
          onClose();
        }, "onConfirm")
      }
    )
  ] });
}, "EditLineDialog");
const { useState } = await importShared("react");
const InvoiceLineTable = /* @__PURE__ */ __name(({ invoiceId }) => {
  const [editing, setEditing] = useState(null);
  const lines = useInvoiceLines(invoiceId);
  const surface = useErrorSurface(lines, { fallback: "Unable to load the line items." });
  if (surface.shouldRenderInPlace) return /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface });
  if (lines.isPending) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) });
  }
  const rows = lines.data ?? [];
  if (rows.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        iconName: "file-text",
        title: "No line items",
        description: "This invoice was captured as a single total, with no breakdown."
      }
    );
  }
  const total = rows.reduce((sum, line) => sum + lineTotal(line), 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trax-custom-scrollbar overflow-x-auto rounded-lg border border-trax-neutral-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Rn, { className: "min-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx($o, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ht, { className: "bg-trax-neutral-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(zo, { className: "px-4 py-2.5 text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zo, { className: "px-4 py-2.5 text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zo, { className: "px-4 py-2.5 text-right text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zo, { className: "px-4 py-2.5 text-right text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "Unit price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zo, { className: "px-4 py-2.5 text-right text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zo, { className: "px-4 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Edit" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(To, { children: rows.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Ht, { className: "border-t border-trax-neutral-30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-sm text-trax-neutral-700", children: line.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(jr, { variant: "outline", className: "text-xs", children: line.category }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-right text-sm tabular-nums", children: line.quantity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-right text-sm tabular-nums", children: formatMoney(line.unitPrice) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-right text-sm font-semibold tabular-nums", children: formatMoney(lineTotal(line)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "ghost-neutral",
            size: "sm",
            onClick: /* @__PURE__ */ __name(() => setEditing(line), "onClick"),
            "aria-label": `Edit ${line.description}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4" })
          }
        ) })
      ] }, line.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Js, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ht, { className: "border-t-2 border-trax-neutral-40 bg-trax-neutral-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { colSpan: 4, className: "px-4 py-3 text-sm font-semibold", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3 text-right text-sm font-semibold tabular-nums", children: formatMoney(total) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "px-4 py-3" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditLineDialog, { invoiceId, line: editing, onClose: /* @__PURE__ */ __name(() => setEditing(null), "onClose") })
  ] });
}, "InvoiceLineTable");
const PROGRESS = {
  [InvoiceStatus.Draft]: 10,
  [InvoiceStatus.PendingApproval]: 40,
  [InvoiceStatus.OnHold]: 40,
  [InvoiceStatus.Rejected]: 100,
  [InvoiceStatus.Approved]: 75,
  [InvoiceStatus.Paid]: 100
};
const InvoiceSummaryPanel = /* @__PURE__ */ __name(({ invoice }) => {
  const days = daysUntilDate(invoice.dueOn);
  const isOverdue = days < 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-wide text-trax-neutral-100 uppercase", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-2xl font-semibold tabular-nums text-trax-neutral-900", children: formatMoney(invoice.amount) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-wide text-trax-neutral-100 uppercase", children: "Due" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-trax-neutral-900", children: formatDisplayDate(invoice.dueOn) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs ${isOverdue ? "text-trax-red-600" : "text-trax-grey-600"}`, children: isOverdue ? `${Math.abs(days)} days overdue` : `in ${days} days` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-wide text-trax-neutral-100 uppercase", children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-trax-neutral-900", children: INVOICE_STATUS_META[invoice.status].label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          sn,
          {
            value: PROGRESS[invoice.status],
            className: "mt-2 h-1.5",
            "aria-label": "Progress from intake to payment"
          }
        )
      ] })
    ] }),
    invoice.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 rounded-lg border border-trax-yellow-200 bg-trax-yellow-100 px-3.5 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "info", className: "mt-0.5 size-4 shrink-0 text-trax-yellow-800" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-trax-yellow-800", children: invoice.note })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(gr, { title: "Invoice details", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "file-text", className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KeyValueList,
        {
          columns: 2,
          items: [
            { label: "Invoice number", value: invoice.number, mono: true },
            { label: "Vendor", value: invoice.vendorName },
            { label: "Issued", value: formatDisplayDate(invoice.issuedOn) },
            { label: "Cost centre", value: invoice.costCentre },
            { label: "Submitted by", value: invoice.submittedBy },
            { label: "Attachments", value: invoice.attachmentCount || "none" }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Qa, { title: "Matching and tolerances", defaultCollapsed: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      KeyValueList,
      {
        items: [
          { label: "Purchase order", value: "PO-2026-4471", mono: true },
          { label: "Receipt", value: "Matched on quantity and price" },
          { label: "Price tolerance", value: "Within 1% of the agreed rate" },
          { label: "Duplicate check", value: "No other invoice with this number" }
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Ws, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ks, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "flex items-center gap-1.5 text-sm font-medium text-trax-primary-blue-600",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "chevron-down", className: "size-4" }),
            "Show the record as the API returned it"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Xs, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "trax-custom-scrollbar mt-2 max-h-64 overflow-auto rounded-lg bg-trax-neutral-900 p-3 text-xs text-trax-neutral-20", children: JSON.stringify(invoice, null, 2) }) })
    ] })
  ] });
}, "InvoiceSummaryPanel");
const EVENT_STYLE = {
  [InvoiceEventKind.Created]: {
    icon: "plus",
    label: "Captured",
    className: "bg-trax-neutral-20 text-trax-neutral-500"
  },
  [InvoiceEventKind.Submitted]: {
    icon: "inbox",
    label: "Submitted for approval",
    className: "bg-trax-primary-blue-50 text-trax-primary-blue-600"
  },
  [InvoiceEventKind.Approved]: {
    icon: "check-circle",
    label: "Approved",
    className: "bg-trax-green-100 text-trax-green-800"
  },
  [InvoiceEventKind.Rejected]: {
    icon: "x-circle",
    label: "Rejected",
    className: "bg-trax-red-100 text-trax-red-600"
  },
  [InvoiceEventKind.Held]: {
    icon: "clock",
    label: "Put on hold",
    className: "bg-trax-teal-100 text-trax-neutral-600"
  },
  [InvoiceEventKind.Commented]: {
    icon: "info",
    label: "Comment",
    className: "bg-trax-neutral-20 text-trax-neutral-500"
  },
  [InvoiceEventKind.Paid]: {
    icon: "dollar-sign",
    label: "Paid",
    className: "bg-trax-primary-blue-50 text-trax-primary-blue-700"
  }
};
function TimelineRow({ event, isLast }) {
  const style = EVENT_STYLE[event.kind];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative flex gap-3.5 pb-5 last:pb-0", children: [
    !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "absolute top-8 bottom-0 left-4 w-px bg-trax-neutral-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-hidden": "true",
        className: `flex size-8 shrink-0 items-center justify-center rounded-full ${style.className}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: style.icon, className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-trax-neutral-900", children: [
        style.label,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-trax-grey-600", children: [
          " by ",
          event.actor
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-neutral-100", children: formatHistoryTimestamp(event.at) }),
      event.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-trax-grey-600", children: event.detail })
    ] })
  ] });
}
__name(TimelineRow, "TimelineRow");
const InvoiceTimeline = /* @__PURE__ */ __name(({ invoiceId }) => {
  const history = useInvoiceHistory(invoiceId);
  const surface = useErrorSurface(history, { fallback: "Unable to load the history." });
  if (surface.shouldRenderInPlace) return /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface });
  if (history.isPending) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) });
  }
  const events = history.data ?? [];
  if (events.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        iconName: "clock",
        title: "Nothing has happened yet",
        description: "Actions on this invoice appear here as they are taken."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "max-w-2xl", children: events.map((event, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineRow, { event, isLast: index === events.length - 1 }, event.id)) });
}, "InvoiceTimeline");
export {
  InvoiceSummaryPanel as I,
  InvoiceLineTable as a,
  InvoiceTimeline as b
};

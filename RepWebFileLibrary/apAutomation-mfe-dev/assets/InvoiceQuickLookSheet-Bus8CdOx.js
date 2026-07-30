var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, D as Ds, M as Ms, k as Es, l as ks, V as Vs, B as Ba, v as gn, I as Mt, L as Et, a0 as Pt, X as Xa, a1 as Ga, y as ys, P as Ps, U as Ue, Y as Yn, Q as Qs } from "./index-CFVMMdzN.js";
import { r as useInvoiceDecision, j as InvoiceDecision, b as formatMoney, m as useInvoiceLines, c as formatDisplayDate, n as lineTotal } from "./money-WJ2bAmbD.js";
import { I as InvoiceStatusBadge } from "./InvoiceStatusBadge-DfyA3uCY.js";
import { T as TOOLTIP_DELAY_QUICK } from "./use-scroll-into-view-ref-D02hTq9p.js";
import "./mfe.config-tfp2F-Dw.js";
import { d as getErrorMessage, u as useErrorSurface } from "./use-error-surface-ToUfTyG9.js";
import { C as ConfirmDialog } from "./ConfirmDialog-BPwbNvaf.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { K as KeyValueList } from "./KeyValueList-hl8rrFPd.js";
import { g as demoRequest } from "./factory-BAIl8rNu.js";
import { i as invoicePath, a as RoutePaths } from "./routes-Ch9G7nzJ.js";
import { D as DataLoadError } from "./DataLoadError-D0pN46nh.js";
import { L as LinkButton } from "./LinkButton-Cv9CNvcl.js";
import { S as Sheet } from "./Sheet-C_e0O9pS.js";
const APPROVERS = [
  { id: "u-01", name: "Nadia Sorenson", role: "Controller" },
  { id: "u-02", name: "Michael Achebe", role: "AP manager" },
  { id: "u-03", name: "Sofia Marchetti", role: "Finance director" },
  { id: "u-04", name: "Devon Pryce", role: "Cost centre owner" },
  { id: "u-05", name: "Ingrid Halvorsen", role: "Procurement lead" },
  { id: "u-06", name: "Tobias Klein", role: "AP clerk" }
];
const searchApprovers = /* @__PURE__ */ __name((query) => demoRequest({
  path: "/v1/users/approvers",
  resolve: /* @__PURE__ */ __name(() => {
    const needle = query.trim().toLowerCase();
    return APPROVERS.filter(
      (approver) => !needle || approver.name.toLowerCase().includes(needle) || approver.role.toLowerCase().includes(needle)
    ).map((approver) => ({
      value: approver.id,
      label: approver.name,
      data: { ...approver }
    }));
  }, "resolve")
}), "searchApprovers");
const { useEffect, useState: useState$1 } = await importShared("react");
const COPY = {
  [InvoiceDecision.Approve]: { title: "Approve invoice", verb: "Approve", variant: "primary" },
  [InvoiceDecision.Reject]: { title: "Reject invoice", verb: "Reject", variant: "error" },
  [InvoiceDecision.Hold]: { title: "Put invoice on hold", verb: "Put on hold", variant: "soft" }
};
const REASONS = [
  { value: "matches-po", label: "Matches the purchase order" },
  { value: "goods-received", label: "Goods received and checked" },
  { value: "duplicate", label: "Looks like a duplicate" },
  { value: "wrong-amount", label: "Amount does not match the quote" },
  { value: "missing-docs", label: "Supporting documents missing" }
];
const NOTIFY_ITEMS = [
  { value: "vendor", label: "Vendor contact" },
  { value: "submitter", label: "Person who submitted it" },
  { value: "cost-centre", label: "Cost centre owner" },
  { value: "finance", label: "Finance mailbox" }
];
const DELEGATION_LIMIT = 25e3;
const InvoiceDecisionDialog = /* @__PURE__ */ __name(({ invoice, decision, onClose }) => {
  const [reason, setReason] = useState$1("");
  const [comment, setComment] = useState$1("");
  const [notify, setNotify] = useState$1(["submitter"]);
  const [delegate, setDelegate] = useState$1(null);
  const [alsoFlagVendor, setAlsoFlagVendor] = useState$1(false);
  const [isConfirmOpen, setConfirmOpen] = useState$1(false);
  const [commentError, setCommentError] = useState$1("");
  useEffect(() => {
    if (!invoice) return;
    setReason("");
    setComment("");
    setNotify(["submitter"]);
    setDelegate(null);
    setAlsoFlagVendor(false);
    setCommentError("");
  }, [invoice, decision]);
  const mutation = useInvoiceDecision({ errorSurface: "local" });
  const isOpen = Boolean(invoice && decision);
  const copy = decision ? COPY[decision] : COPY[InvoiceDecision.Approve];
  const needsConfirmation = decision === InvoiceDecision.Reject || (invoice ? invoice.amount > DELEGATION_LIMIT : false);
  const submit = /* @__PURE__ */ __name(() => {
    if (!invoice || !decision) return;
    if (decision === InvoiceDecision.Reject && comment.trim().length < 10) {
      setCommentError("Say why in at least a few words - the vendor sees this.");
      return;
    }
    setCommentError("");
    if (needsConfirmation && !isConfirmOpen) {
      setConfirmOpen(true);
      return;
    }
    mutation.mutate(
      { invoiceId: invoice.id, decision, comment: comment.trim() || void 0 },
      {
        onSuccess: /* @__PURE__ */ __name(() => {
          setConfirmOpen(false);
          Qs.success(`${invoice.number} - ${copy.verb.toLowerCase()}d`);
          onClose();
        }, "onSuccess"),
        onError: /* @__PURE__ */ __name(() => setConfirmOpen(false), "onError")
      }
    );
  }, "submit");
  const handleOpenChange = /* @__PURE__ */ __name((next) => {
    if (!next && !mutation.isPending) onClose();
  }, "handleOpenChange");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ds, { open: isOpen, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ms,
      {
        className: "max-h-[85vh] max-w-xl",
        onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Es, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ks, { className: "flex items-center gap-2 text-base font-semibold text-trax-neutral-600", children: [
              copy.title,
              invoice && /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStatusBadge, { status: invoice.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm text-trax-grey-600", children: invoice ? `${invoice.number} from ${invoice.vendorName}` : "" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "trax-custom-scrollbar -mx-1 max-h-[55vh] space-y-4 px-1", children: [
            invoice && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              KeyValueList,
              {
                columns: 2,
                items: [
                  { label: "Amount", value: formatMoney(invoice.amount) },
                  { label: "Cost centre", value: invoice.costCentre },
                  { label: "Submitted by", value: invoice.submittedBy },
                  { label: "Line items", value: invoice.lineCount }
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                label: "Reason",
                placeholder: "Pick the reason on record",
                options: REASONS,
                value: reason,
                onValueChange: setReason,
                helperText: "A Radix Select, portalled to the body from inside this dialog."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              gn,
              {
                label: "Delegate the decision to",
                placeholder: "Search people",
                value: delegate,
                onValueChange: setDelegate,
                onSearch: searchApprovers,
                searchOnFocus: true,
                portal: true,
                renderItem: /* @__PURE__ */ __name((item, highlight, isSelected) => {
                  var _a;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isSelected ? "font-semibold" : void 0, children: highlight(item.label) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-trax-neutral-100", children: (_a = item.data) == null ? void 0 : _a.role })
                  ] });
                }, "renderItem"),
                helperText: "Async search, so the sandbox latency applies here too."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-trax-neutral-700", children: "Notify" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { delayDuration: TOOLTIP_DELAY_QUICK, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Why these options", className: "text-trax-neutral-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "info", className: "size-4" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { variant: "dark", size: "sm", className: "max-w-64", children: "A tooltip portal, opened from inside a dialog - one more layer that has to land above the dialog rather than behind it." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Xa,
                {
                  items: NOTIFY_ITEMS,
                  value: notify,
                  onValueChange: setNotify,
                  placeholder: "Nobody",
                  searchPlaceholder: "Filter recipients",
                  modal: true,
                  triggerClassName: "w-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ga,
              {
                label: "Comment",
                placeholder: decision === InvoiceDecision.Reject ? "The vendor sees this. Say what needs to change." : "Optional note for the audit trail",
                value: comment,
                onChange: /* @__PURE__ */ __name((event) => setComment(event.target.value), "onChange"),
                required: decision === InvoiceDecision.Reject,
                error: commentError,
                showCharacterCount: true,
                maxCharacters: 280,
                enforceMaxLength: true,
                rows: 3
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ys,
              {
                checked: alsoFlagVendor,
                onCheckedChange: /* @__PURE__ */ __name((checked) => setAlsoFlagVendor(checked === true), "onCheckedChange"),
                label: "Flag the vendor for review as well"
              }
            ),
            mutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "rounded-lg bg-trax-red-100 px-3 py-2 text-sm text-trax-red-600", children: getErrorMessage(mutation.error, { context: "action" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Ps, { className: "gap-3 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: onClose, disabled: mutation.isPending, className: "min-w-20", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ue,
              {
                variant: copy.variant,
                onClick: submit,
                disabled: mutation.isPending,
                className: "min-w-28",
                children: mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }) : copy.verb
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isConfirmOpen,
        onOpenChange: setConfirmOpen,
        title: decision === InvoiceDecision.Reject ? "Reject and notify the vendor?" : "Above your delegated limit",
        description: decision === InvoiceDecision.Reject ? "The vendor is told the invoice was rejected, along with your comment. This cannot be taken back from here." : `${invoice ? formatMoney(invoice.amount) : ""} is over ${formatMoney(DELEGATION_LIMIT)}, so this is recorded as an exception and reviewed by Finance.`,
        confirmLabel: copy.verb,
        variant: copy.variant,
        isLoading: mutation.isPending,
        onConfirm: submit
      }
    )
  ] });
}, "InvoiceDecisionDialog");
const { useState } = await importShared("react");
const CURRENCY_VIEWS = [
  { value: "document", label: "Document currency" },
  { value: "company", label: "Company currency" }
];
const InvoiceQuickLookSheet = /* @__PURE__ */ __name(({ invoice, onClose }) => {
  const [currencyView, setCurrencyView] = useState("document");
  const [isRemindOpen, setRemindOpen] = useState(false);
  const lines = useInvoiceLines(invoice == null ? void 0 : invoice.id);
  const surface = useErrorSurface(lines, { fallback: "Unable to load the line items." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sheet,
      {
        open: Boolean(invoice),
        onOpenChange: /* @__PURE__ */ __name((next) => {
          if (!next) onClose();
        }, "onOpenChange"),
        title: invoice ? invoice.number : "Invoice",
        description: invoice == null ? void 0 : invoice.vendorName,
        dismissOnOverlayClick: true,
        footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: /* @__PURE__ */ __name(() => setRemindOpen(true), "onClick"), children: "Send a reminder" }),
          invoice && /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { to: invoicePath(RoutePaths.InvoiceSummary, invoice.id), variant: "primary", children: "Open full invoice" })
        ] }),
        children: invoice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStatusBadge, { status: invoice.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold tabular-nums", children: formatMoney(invoice.amount) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            KeyValueList,
            {
              columns: 2,
              items: [
                { label: "Issued", value: formatDisplayDate(invoice.issuedOn) },
                { label: "Due", value: formatDisplayDate(invoice.dueOn) },
                { label: "Cost centre", value: invoice.costCentre },
                { label: "Submitted by", value: invoice.submittedBy }
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ba,
            {
              label: "Amounts shown in",
              options: CURRENCY_VIEWS,
              value: currencyView,
              onValueChange: setCurrencyView,
              helperText: "A dropdown portal opened from inside a portal this MFE owns."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-trax-neutral-900", children: "Line items" }),
            surface.shouldRenderInPlace ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface }) : lines.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-24 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-trax-neutral-30 rounded-lg border border-trax-neutral-30", children: (lines.data ?? []).map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start justify-between gap-3 px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm text-trax-neutral-700", children: line.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-trax-neutral-100", children: [
                  line.quantity,
                  " x ",
                  formatMoney(line.unitPrice),
                  " - ",
                  line.taxCode
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-sm font-medium tabular-nums", children: formatMoney(lineTotal(line)) })
            ] }, line.id)) })
          ] }),
          invoice.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-lg bg-trax-yellow-100 px-3 py-2 text-sm text-trax-yellow-800", children: invoice.note })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isRemindOpen,
        onOpenChange: setRemindOpen,
        title: "Send a payment reminder?",
        description: "A Radix dialog opened from inside the panel above. It has to sit over the panel, take the Escape key, and hand focus back when it closes.",
        confirmLabel: "Send",
        variant: "primary",
        onConfirm: /* @__PURE__ */ __name(() => {
          setRemindOpen(false);
          Qs.success("Reminder queued - and this toast has to clear both layers");
        }, "onConfirm")
      }
    )
  ] });
}, "InvoiceQuickLookSheet");
export {
  InvoiceQuickLookSheet as I,
  InvoiceDecisionDialog as a
};

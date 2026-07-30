var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, Y as Yn, y as ys, U as Ue, h, Q as Qs } from "./index-CFVMMdzN.js";
import { a as useApprovalQueue, r as useInvoiceDecision, d as daysUntilDate, b as formatMoney, c as formatDisplayDate, j as InvoiceDecision } from "./money-WJ2bAmbD.js";
import { I as InvoiceStatusBadge } from "./InvoiceStatusBadge-DfyA3uCY.js";
import { i as invoicePath, a as RoutePaths, R as RouteNames } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { u as useErrorSurface } from "./use-error-surface-ToUfTyG9.js";
import { u as useReturnUrl } from "./use-scroll-into-view-ref-D02hTq9p.js";
import { C as ConfirmDialog } from "./ConfirmDialog-BPwbNvaf.js";
import { D as DataLoadError } from "./DataLoadError-D0pN46nh.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { L as Link } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
import { a as InvoiceDecisionDialog } from "./InvoiceQuickLookSheet-Bus8CdOx.js";
import "./factory-BAIl8rNu.js";
import { P as PageHeader } from "./PageHeader-CR5C8Orw.js";
const { useMemo, useState: useState$1 } = await importShared("react");
const ApprovalQueue = /* @__PURE__ */ __name(({ onDecide }) => {
  const [selected, setSelected] = useState$1(/* @__PURE__ */ new Set());
  const [isBulkOpen, setBulkOpen] = useState$1(false);
  const queue = useApprovalQueue();
  const surface = useErrorSurface(queue, { fallback: "Unable to load the approval queue." });
  const decision = useInvoiceDecision();
  const rows = useMemo(() => queue.data ?? [], [queue.data]);
  const selectedRows = useMemo(() => rows.filter((row) => selected.has(row.id)), [rows, selected]);
  const returnUrl = useReturnUrl();
  const toggle = /* @__PURE__ */ __name((id) => setSelected((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  }), "toggle");
  const toggleAll = /* @__PURE__ */ __name(() => setSelected((current) => current.size === rows.length ? /* @__PURE__ */ new Set() : new Set(rows.map((row) => row.id))), "toggleAll");
  const approveSelected = /* @__PURE__ */ __name(async () => {
    let approved = 0;
    for (const invoice of selectedRows) {
      try {
        await decision.mutateAsync({ invoiceId: invoice.id, decision: InvoiceDecision.Approve });
        approved += 1;
      } catch {
        break;
      }
    }
    setBulkOpen(false);
    setSelected(/* @__PURE__ */ new Set());
    if (approved > 0) {
      Qs.success(`${approved} invoice${approved === 1 ? "" : "s"} approved`);
    }
  }, "approveSelected");
  if (surface.shouldRenderInPlace) return /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface });
  if (queue.isPending) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-48 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) });
  }
  if (rows.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        iconName: "check-circle",
        iconClassName: "text-trax-green-500",
        iconWrapperClassName: "bg-trax-green-100",
        title: "Nothing waiting on you",
        description: "Every invoice routed to you has been dealt with. New ones appear here as they arrive."
      }
    );
  }
  const allSelected = selected.size === rows.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 px-3.5 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ys,
        {
          checked: allSelected,
          onCheckedChange: toggleAll,
          label: selected.size === 0 ? `Select all ${rows.length}` : `${selected.size} of ${rows.length} selected`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "primary",
          size: "sm",
          disabled: selected.size === 0 || decision.isPending,
          onClick: /* @__PURE__ */ __name(() => setBulkOpen(true), "onClick"),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" }),
          children: "Approve selected"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: rows.map((invoice) => {
      const days = daysUntilDate(invoice.dueOn);
      const isOverdue = days < 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: h(
            "flex flex-wrap items-center gap-3 rounded-lg border px-3.5 py-3 transition-colors",
            selected.has(invoice.id) ? "border-trax-primary-blue-300 bg-trax-primary-blue-50" : "border-trax-neutral-30 bg-trax-neutral-0"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ys,
              {
                checked: selected.has(invoice.id),
                onCheckedChange: /* @__PURE__ */ __name(() => toggle(invoice.id), "onCheckedChange"),
                "aria-label": `Select ${invoice.number}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: invoicePath(RoutePaths.InvoiceSummary, invoice.id),
                  state: { returnUrl },
                  className: "text-sm font-medium text-trax-primary-blue-600 hover:underline",
                  children: invoice.number
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm text-trax-grey-600", children: invoice.vendorName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tabular-nums", children: formatMoney(invoice.amount) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: h("text-xs", isOverdue ? "text-trax-red-600" : "text-trax-neutral-100"), children: isOverdue ? `${Math.abs(days)} days overdue` : `due ${formatDisplayDate(invoice.dueOn)}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStatusBadge, { status: invoice.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ue,
                {
                  variant: "outlined",
                  size: "sm",
                  onClick: /* @__PURE__ */ __name(() => onDecide(invoice, InvoiceDecision.Reject), "onClick"),
                  children: "Reject"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ue,
                {
                  variant: "primary",
                  size: "sm",
                  onClick: /* @__PURE__ */ __name(() => onDecide(invoice, InvoiceDecision.Approve), "onClick"),
                  children: "Review"
                }
              )
            ] })
          ]
        },
        invoice.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isBulkOpen,
        onOpenChange: setBulkOpen,
        title: `Approve ${selectedRows.length} invoice${selectedRows.length === 1 ? "" : "s"}?`,
        description: `${formatMoney(
          selectedRows.reduce((sum, invoice) => sum + invoice.amount, 0)
        )} in total. Each one is approved in your name and the vendors are notified.`,
        confirmLabel: "Approve all",
        variant: "primary",
        isLoading: decision.isPending,
        onConfirm: approveSelected
      }
    )
  ] });
}, "ApprovalQueue");
const { useState } = await importShared("react");
function ApprovalsPage() {
  const [target, setTarget] = useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: RouteNames.Approvals,
        description: "Invoices routed to you, oldest due date first. Approving one here removes it from this queue and from every count on the overview."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApprovalQueue, { onDecide: /* @__PURE__ */ __name((invoice, decision) => setTarget({ invoice, decision }), "onDecide") }),
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
__name(ApprovalsPage, "ApprovalsPage");
export {
  ApprovalsPage as default
};

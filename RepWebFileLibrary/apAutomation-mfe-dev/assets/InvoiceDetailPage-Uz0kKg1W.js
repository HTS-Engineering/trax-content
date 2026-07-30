var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, U as Ue, Y as Yn } from "./index-CFVMMdzN.js";
import { l as useInvoice, h as INVOICE_STATUS_META, j as InvoiceDecision, b as formatMoney } from "./money-WJ2bAmbD.js";
import { I as InvoiceStatusBadge } from "./InvoiceStatusBadge-DfyA3uCY.js";
import { a as InvoiceDecisionDialog } from "./InvoiceQuickLookSheet-Bus8CdOx.js";
import "./factory-BAIl8rNu.js";
import { I as INVOICE_ID_PARAM, a as RoutePaths, R as RouteNames, i as invoicePath } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { u as useErrorSurface, b as isNotFoundError } from "./use-error-surface-ToUfTyG9.js";
import { a as useNavigateBack } from "./use-scroll-into-view-ref-D02hTq9p.js";
import { B as BlockingError } from "./BlockingError-Cuos4zFs.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { P as PageHeader } from "./PageHeader-CR5C8Orw.js";
import { N as NavTabs } from "./AppShell-DabpUIQ7.js";
import { b as useParams, O as Outlet } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
const { useState } = await importShared("react");
const TAB_ITEMS = [
  { id: "summary", label: RouteNames.InvoiceSummary, route: RoutePaths.InvoiceSummary, icon: "file-text" },
  { id: "lines", label: RouteNames.InvoiceLines, route: RoutePaths.InvoiceLines, icon: "layers" },
  { id: "history", label: RouteNames.InvoiceHistory, route: RoutePaths.InvoiceHistory, icon: "clock" }
];
function InvoiceDetailPage() {
  var _a;
  const params = useParams();
  const invoiceId = params[INVOICE_ID_PARAM];
  const [target, setTarget] = useState(null);
  const invoice = useInvoice(invoiceId);
  const surface = useErrorSurface(invoice, { fallback: "Unable to load this invoice." });
  const { navigateBack } = useNavigateBack({
    fallback: RoutePaths.Invoices,
    basePath: RoutePaths.Invoices
  });
  const backButton = /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ue,
    {
      variant: "ghost-neutral",
      size: "sm",
      onClick: navigateBack,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "arrow-left", className: "size-4" }),
      className: "-ml-2 w-fit",
      children: "Back to invoices"
    }
  );
  if (invoice.isError && isNotFoundError(invoice.error)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      backButton,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyState,
        {
          iconName: "file-text",
          title: "That invoice is not here",
          description: ((_a = surface.presentation) == null ? void 0 : _a.message) ?? "It may have been removed, or it was never visible to you.",
          role: "alert",
          action: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "outlined", size: "sm", onClick: navigateBack, children: "Back to invoices" })
        }
      )
    ] });
  }
  if (surface.shouldRenderInPlace) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      backButton,
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlockingError, { surface, title: "Could not load this invoice" })
    ] });
  }
  if (invoice.isPending || !invoice.data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-64 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) });
  }
  const record = invoice.data;
  const isActionable = INVOICE_STATUS_META[record.status].actionable;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        above: backButton,
        title: record.number,
        description: `${record.vendorName} - ${formatMoney(record.amount)}`,
        badge: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStatusBadge, { status: record.status }),
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "outlined",
              size: "sm",
              disabled: !isActionable,
              onClick: /* @__PURE__ */ __name(() => setTarget({ invoice: record, decision: InvoiceDecision.Reject }), "onClick"),
              children: "Reject"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "soft",
              size: "sm",
              disabled: !isActionable,
              onClick: /* @__PURE__ */ __name(() => setTarget({ invoice: record, decision: InvoiceDecision.Hold }), "onClick"),
              children: "Hold"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "primary",
              size: "sm",
              disabled: !isActionable,
              onClick: /* @__PURE__ */ __name(() => setTarget({ invoice: record, decision: InvoiceDecision.Approve }), "onClick"),
              children: "Approve"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NavTabs,
      {
        variant: "underline",
        "aria-label": "Invoice sections",
        items: TAB_ITEMS.map((tab) => ({
          id: tab.id,
          label: tab.label,
          // The tab paths carry `:invoiceId`, so each link is built for this record
          // rather than declared statically.
          path: invoicePath(tab.route, record.id),
          icon: tab.icon
        }))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
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
__name(InvoiceDetailPage, "InvoiceDetailPage");
export {
  InvoiceDetailPage as default
};

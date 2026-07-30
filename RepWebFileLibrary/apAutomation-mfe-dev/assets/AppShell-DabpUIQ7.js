var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, D as Ds, M as Ms, k as Es, l as ks, V as Vs, x as Za, Y as Yn, v as gn, m as Oa, t as ts, a2 as ja, B as Ba, a1 as Ga, P as Ps, U as Ue, Q as Qs, d as devError, h, a3 as wt, a4 as zt, a5 as yt, G as Qt, e as $r, f as Tr, g as zr, i as Hs, O as Os, A as Ar, a6 as js, a7 as Gs, a8 as qs, a9 as As, aa as Ls, I as Mt, L as Et, a0 as Pt, ab as ns } from "./index-CFVMMdzN.js";
import { s as formatToISODate, t as useCreateInvoice, b as formatMoney, v as parseDateOnlyAsLocal } from "./money-WJ2bAmbD.js";
import { b as useVendorSearch } from "./queries-BomZp9Zq.js";
import { i as invoicePath, a as RoutePaths, R as RouteNames } from "./routes-Ch9G7nzJ.js";
import { C as CONTAINER_ID, a as SCOPE_CLASS, J as JWT_STORAGE_KEY } from "./mfe.config-tfp2F-Dw.js";
import { d as getErrorMessage } from "./use-error-surface-ToUfTyG9.js";
import { C as ConfirmDialog } from "./ConfirmDialog-BPwbNvaf.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { u as useMutation } from "./useMutation-BgIqTrew.js";
import { g as demoRequest, u as useQueryClient, i as useSandboxStore, j as SandboxFailure, k as SandboxLatency, l as SandboxScope, t as resetSandboxData } from "./factory-BAIl8rNu.js";
import { d as useNavigate, L as Link, e as NavLink, O as Outlet } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
import { b as usePreventPageReload, T as TOOLTIP_DELAY_QUICK } from "./use-scroll-into-view-ref-D02hTq9p.js";
import { E as EnvConfig } from "./feature-flags-Cz1N62Y6.js";
import "./store-Bn-YuemF.js";
import { u as useAuth, a as useUser } from "./hooks-CLpaRaPs.js";
var NewInvoiceSource = /* @__PURE__ */ ((NewInvoiceSource2) => {
  NewInvoiceSource2["Blank"] = "blank";
  NewInvoiceSource2["Upload"] = "upload";
  return NewInvoiceSource2;
})(NewInvoiceSource || {});
const DOCUMENTS = [
  { vendorName: "Cascade Office Supply", number: "COS-88214", amount: 4218.6, costCentre: "CC-2200 Facilities", termsDays: 45, confidence: 0.96 },
  { vendorName: "Ironvale Fleet Services", number: "IFS-2026-0071", amount: 18740.15, costCentre: "CC-5000 Fleet", termsDays: 15, confidence: 0.88 },
  { vendorName: "Granite Peak Consulting", number: "GPC-4417", amount: 32500, costCentre: "CC-3100 Technology", termsDays: 60, confidence: 0.72 }
];
function useExtractInvoice() {
  return useMutation({
    mutationKey: ["invoices", "extract"],
    // The form shows the failure next to the upload control, so the cache-level
    // handler must not also toast it.
    meta: { errorSurface: "local" },
    mutationFn: /* @__PURE__ */ __name((fileName) => demoRequest({
      path: "/v1/invoices/capture",
      kind: "write",
      resolve: /* @__PURE__ */ __name(() => {
        const document = DOCUMENTS[fileName.length % DOCUMENTS.length];
        const issued = /* @__PURE__ */ new Date();
        issued.setDate(issued.getDate() - 3);
        const due = new Date(issued);
        due.setDate(due.getDate() + document.termsDays);
        return {
          vendorName: document.vendorName,
          number: document.number,
          amount: document.amount,
          issuedOn: formatToISODate(issued) ?? "",
          dueOn: formatToISODate(due) ?? "",
          costCentre: document.costCentre,
          confidence: document.confidence
        };
      }, "resolve")
    }), "mutationFn")
  });
}
__name(useExtractInvoice, "useExtractInvoice");
const { useEffect, useMemo, useState: useState$2 } = await importShared("react");
const COST_CENTRES = [
  { value: "CC-1100 Operations", label: "CC-1100 Operations" },
  { value: "CC-2200 Facilities", label: "CC-2200 Facilities" },
  { value: "CC-3100 Technology", label: "CC-3100 Technology" },
  { value: "CC-4050 Marketing", label: "CC-4050 Marketing" },
  { value: "CC-5000 Fleet", label: "CC-5000 Fleet" }
];
const EMPTY_DRAFT = {
  vendor: null,
  number: "",
  amount: "",
  issuedOn: void 0,
  dueOn: void 0,
  costCentre: "",
  note: ""
};
function validate(draft) {
  const errors = {};
  const amount = Number(draft.amount);
  if (!draft.vendor) errors.vendor = "Pick the vendor this invoice is from.";
  if (draft.number.trim().length < 3) errors.number = "Enter the number printed on the invoice.";
  if (!Number.isFinite(amount) || amount <= 0) errors.amount = "Enter an amount greater than zero.";
  if (!draft.issuedOn) errors.issuedOn = "When was it issued?";
  if (!draft.dueOn) errors.dueOn = "When is it due?";
  if (draft.issuedOn && draft.dueOn && draft.dueOn < draft.issuedOn) {
    errors.dueOn = "The due date cannot be before the issue date.";
  }
  if (!draft.costCentre) errors.costCentre = "Pick a cost centre.";
  return errors;
}
__name(validate, "validate");
const NewInvoiceDialog = /* @__PURE__ */ __name(({ source, onClose }) => {
  var _a, _b, _c;
  const navigate = useNavigate();
  const searchVendors = useVendorSearch();
  const create = useCreateInvoice({ errorSurface: "local" });
  const extract = useExtractInvoice();
  const [draft, setDraft] = useState$2(EMPTY_DRAFT);
  const [errors, setErrors] = useState$2({});
  const [readVendorName, setReadVendorName] = useState$2(null);
  const [isDiscardOpen, setDiscardOpen] = useState$2(false);
  const isOpen = source !== null;
  useEffect(() => {
    if (!isOpen) return;
    setDraft(EMPTY_DRAFT);
    setErrors({});
    setReadVendorName(null);
    create.reset();
    extract.reset();
  }, [isOpen, source]);
  const isDirty = useMemo(
    () => JSON.stringify(draft) !== JSON.stringify(EMPTY_DRAFT),
    [draft]
  );
  const isBusy = create.isPending || extract.isPending;
  const update = /* @__PURE__ */ __name((patch) => setDraft((current) => ({ ...current, ...patch })), "update");
  const requestClose = /* @__PURE__ */ __name(() => {
    if (isBusy) return;
    if (isDirty) {
      setDiscardOpen(true);
      return;
    }
    onClose();
  }, "requestClose");
  const handleFile = /* @__PURE__ */ __name((files) => {
    const file = files == null ? void 0 : files[0];
    if (!file) return;
    extract.mutate(file.name, {
      onSuccess: /* @__PURE__ */ __name((read) => {
        setReadVendorName(read.vendorName);
        update({
          number: read.number,
          amount: read.amount.toFixed(2),
          issuedOn: parseDateOnlyAsLocal(read.issuedOn),
          dueOn: parseDateOnlyAsLocal(read.dueOn),
          costCentre: read.costCentre
        });
      }, "onSuccess")
    });
  }, "handleFile");
  const save = /* @__PURE__ */ __name(() => {
    const next = validate(draft);
    setErrors(next);
    if (Object.keys(next).length > 0 || !draft.vendor) return;
    const issuedOn = formatToISODate(draft.issuedOn);
    const dueOn = formatToISODate(draft.dueOn);
    if (!issuedOn || !dueOn) return;
    create.mutate(
      {
        number: draft.number.trim(),
        vendorId: draft.vendor.value,
        amount: Number(draft.amount),
        issuedOn,
        dueOn,
        costCentre: draft.costCentre,
        note: draft.note.trim() || void 0
      },
      {
        onSuccess: /* @__PURE__ */ __name(({ invoiceId, number }) => {
          onClose();
          Qs.success(`${number} recorded and routed for approval`);
          navigate(invoicePath(RoutePaths.InvoiceSummary, invoiceId));
        }, "onSuccess")
      }
    );
  }, "save");
  const amountPreview = Number(draft.amount);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ds,
      {
        open: isOpen,
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(ks, { className: "text-base font-semibold text-trax-neutral-600", children: "New invoice" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm text-trax-grey-600", children: source === NewInvoiceSource.Upload ? "Drop the supplier PDF in and the fields below are filled from it. Check them before saving - the vendor is never guessed." : "Enter what is printed on the invoice. It is routed to the cost centre owner as soon as you save." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "trax-custom-scrollbar -mx-1 max-h-[58vh] space-y-4 px-1", children: [
                source === NewInvoiceSource.Upload && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Za,
                    {
                      heading: "Supplier invoice",
                      subheading: "PDF up to 10 MB. Nothing leaves the browser in this build.",
                      accept: "application/pdf",
                      disabled: isBusy,
                      onFileSelect: handleFile
                    }
                  ),
                  extract.isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm text-trax-grey-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }),
                    "Reading the document..."
                  ] }),
                  extract.isError && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { role: "alert", className: "rounded-lg bg-trax-red-100 px-3 py-2 text-sm text-trax-red-600", children: [
                    getErrorMessage(extract.error, { context: "action" }),
                    " You can still fill the fields in by hand."
                  ] }),
                  extract.isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2 rounded-lg bg-trax-green-50 px-3 py-2 text-sm text-trax-green-800", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", className: "mt-0.5 size-4 shrink-0" }),
                    "Read with ",
                    Math.round((((_a = extract.data) == null ? void 0 : _a.confidence) ?? 0) * 100),
                    "% confidence. Check the amount and the dates."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    gn,
                    {
                      label: "Vendor",
                      required: true,
                      placeholder: "Search the directory",
                      value: draft.vendor,
                      onValueChange: /* @__PURE__ */ __name((vendor) => update({ vendor }), "onValueChange"),
                      onSearch: searchVendors,
                      searchOnFocus: true,
                      portal: true,
                      error: errors.vendor,
                      helperText: readVendorName && !draft.vendor ? `The document says "${readVendorName}". Pick the matching vendor.` : void 0,
                      renderItem: /* @__PURE__ */ __name((item, highlight, isSelected) => {
                        var _a2, _b2;
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isSelected ? "font-semibold" : void 0, children: highlight(item.label) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-trax-neutral-100", children: [
                            (_a2 = item.data) == null ? void 0 : _a2.code,
                            " - net ",
                            (_b2 = item.data) == null ? void 0 : _b2.paymentTermsDays,
                            " days"
                          ] })
                        ] });
                      }, "renderItem")
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Oa,
                    {
                      label: "Invoice number",
                      required: true,
                      placeholder: "As printed on the invoice",
                      value: draft.number,
                      error: errors.number,
                      onChange: /* @__PURE__ */ __name((event) => update({ number: event.target.value }), "onChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ts,
                    {
                      label: "Total",
                      required: true,
                      prefix: "$",
                      type: "number",
                      step: "0.01",
                      min: 0,
                      textAlign: "right",
                      value: draft.amount,
                      error: errors.amount,
                      helperText: Number.isFinite(amountPreview) && amountPreview > 0 ? `${formatMoney(amountPreview)} including tax` : void 0,
                      onChange: /* @__PURE__ */ __name((event) => update({ amount: event.target.value }), "onChange")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ja,
                    {
                      label: "Issued on",
                      required: true,
                      value: draft.issuedOn,
                      onChange: /* @__PURE__ */ __name((issuedOn) => update({ issuedOn }), "onChange"),
                      error: errors.issuedOn,
                      maxDate: /* @__PURE__ */ new Date(),
                      placeholder: "Pick a date"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ja,
                    {
                      label: "Due on",
                      required: true,
                      value: draft.dueOn,
                      onChange: /* @__PURE__ */ __name((dueOn) => update({ dueOn }), "onChange"),
                      error: errors.dueOn,
                      minDate: draft.issuedOn,
                      placeholder: "Pick a date",
                      helperText: draft.vendor ? `${(_b = draft.vendor.data) == null ? void 0 : _b.name} is on net ${(_c = draft.vendor.data) == null ? void 0 : _c.paymentTermsDays} days` : void 0
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Ba,
                    {
                      label: "Cost centre",
                      required: true,
                      placeholder: "Who is being charged",
                      options: COST_CENTRES,
                      value: draft.costCentre,
                      onValueChange: /* @__PURE__ */ __name((costCentre) => update({ costCentre }), "onValueChange"),
                      error: errors.costCentre
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Ga,
                  {
                    label: "Note for the approver",
                    placeholder: "Optional. Anything the approver should know before deciding.",
                    value: draft.note,
                    onChange: /* @__PURE__ */ __name((event) => update({ note: event.target.value }), "onChange"),
                    showCharacterCount: true,
                    maxCharacters: 280,
                    enforceMaxLength: true,
                    rows: 2
                  }
                ),
                create.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "rounded-lg bg-trax-red-100 px-3 py-2 text-sm text-trax-red-600", children: getErrorMessage(create.error, { context: "action" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Ps, { className: "gap-3 sm:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: requestClose, disabled: isBusy, className: "min-w-20", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "primary", onClick: save, disabled: isBusy, className: "min-w-36", children: create.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }) : "Save and route" })
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
        title: "Discard this invoice?",
        description: "Nothing has been recorded yet. What you have entered will be lost.",
        confirmLabel: "Discard",
        cancelLabel: "Keep editing",
        onConfirm: /* @__PURE__ */ __name(() => {
          setDiscardOpen(false);
          onClose();
        }, "onConfirm")
      }
    )
  ] });
}, "NewInvoiceDialog");
const PRIMARY_NAV = [
  { id: "overview", label: RouteNames.Overview, path: RoutePaths.Overview, icon: "layout-dashboard" },
  { id: "invoices", label: RouteNames.Invoices, path: RoutePaths.Invoices, icon: "file-text" },
  { id: "approvals", label: RouteNames.Approvals, path: RoutePaths.Approvals, icon: "inbox" },
  { id: "vendors", label: RouteNames.Vendors, path: RoutePaths.Vendors, icon: "briefcase" },
  { id: "settings", label: RouteNames.Settings, path: RoutePaths.Settings, icon: "settings-2" },
  { id: "diagnostics", label: RouteNames.Diagnostics, path: RoutePaths.Diagnostics, icon: "activity" }
];
const SETTINGS_NAV = [
  { id: "settings-general", label: RouteNames.SettingsGeneral, path: RoutePaths.SettingsGeneral, icon: "settings-2" },
  { id: "settings-notifications", label: RouteNames.SettingsNotifications, path: RoutePaths.SettingsNotifications, icon: "bell" },
  { id: "settings-integrations", label: RouteNames.SettingsIntegrations, path: RoutePaths.SettingsIntegrations, icon: "link" }
];
const DIAGNOSTICS_NAV = [
  { id: "diag-portals", label: RouteNames.DiagnosticsPortals, path: RoutePaths.DiagnosticsPortals, icon: "layers" },
  { id: "diag-styles", label: RouteNames.DiagnosticsStyles, path: RoutePaths.DiagnosticsStyles, icon: "type" },
  { id: "diag-errors", label: RouteNames.DiagnosticsErrors, path: RoutePaths.DiagnosticsErrors, icon: "zap" },
  { id: "diag-environment", label: RouteNames.DiagnosticsEnvironment, path: RoutePaths.DiagnosticsEnvironment, icon: "server" },
  { id: "diag-restricted", label: RouteNames.DiagnosticsRestricted, path: RoutePaths.DiagnosticsRestricted, icon: "user" }
];
var define_MFE_BUILD_default = { version: "0.1.0-dev.local-1785381498031", commit: "567fef4", branch: "fix/review-followups", timestamp: "2026-07-30T03:18:18.054Z", environment: "apAutomation-mfe-dev" };
const BUILD_SUMMARY = [
  `version ${define_MFE_BUILD_default.version}`,
  define_MFE_BUILD_default.commit,
  define_MFE_BUILD_default.environment
].join(" - ");
const BuildFooter = /* @__PURE__ */ __name(() => {
  const copyBuildInfo = /* @__PURE__ */ __name(() => {
    const report = [
      `container: #${CONTAINER_ID}`,
      `scope class: .${SCOPE_CLASS}`,
      `version: ${define_MFE_BUILD_default.version}`,
      `commit: ${define_MFE_BUILD_default.commit}`,
      `branch: ${define_MFE_BUILD_default.branch}`,
      `built: ${define_MFE_BUILD_default.timestamp}`,
      `environment: ${define_MFE_BUILD_default.environment}`,
      `url: ${window.location.href}`
    ].join("\n");
    navigator.clipboard.writeText(report).then(
      () => Qs.success("Build details copied"),
      (error) => {
        devError("Clipboard write failed", error);
        Qs.success("Could not reach the clipboard - the details are in the console");
      }
    );
  }, "copyBuildInfo");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-trax-neutral-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      BUILD_SUMMARY,
      " - ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: RoutePaths.DiagnosticsEnvironment,
          className: "text-trax-primary-blue-600 underline underline-offset-2",
          children: "environment details"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "ghost-neutral",
        size: "sm",
        onClick: copyBuildInfo,
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "copy", className: "size-3.5" }),
        children: "Copy build details"
      }
    )
  ] });
}, "BuildFooter");
const PILL = {
  base: "rounded-lg px-3 py-2",
  active: "bg-trax-primary-blue-50 text-trax-primary-blue-600 font-semibold",
  idle: "text-trax-neutral-500 hover:bg-trax-neutral-20"
};
const UNDERLINE = {
  base: "-mb-px border-b-2 px-1 py-2.5",
  active: "border-trax-primary-blue-600 text-trax-primary-blue-600 font-semibold",
  idle: "border-transparent text-trax-neutral-500 hover:border-trax-neutral-40 hover:text-trax-neutral-700"
};
const NavTabs = /* @__PURE__ */ __name(({
  items,
  variant = "pills",
  "aria-label": ariaLabel,
  className
}) => {
  const style = variant === "pills" ? PILL : UNDERLINE;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": ariaLabel, className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      className: h(
        "flex flex-wrap items-center gap-1",
        variant === "underline" && "gap-6 border-b border-trax-neutral-30"
      ),
      children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        NavLink,
        {
          to: item.path,
          end: item.exact,
          className: /* @__PURE__ */ __name(({ isActive }) => h(
            "flex items-center gap-2 text-sm transition-colors",
            style.base,
            isActive ? style.active : style.idle
          ), "className"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: item.icon, className: "size-4 shrink-0" }),
            item.label
          ]
        }
      ) }, item.id))
    }
  ) });
}, "NavTabs");
const FAILURE_OPTIONS = [
  { value: SandboxFailure.None, label: "No failure" },
  { value: SandboxFailure.Offline, label: "Offline - no response reached the browser" },
  { value: SandboxFailure.Timeout, label: "Timeout - the client gave up" },
  { value: SandboxFailure.Unauthorized, label: "401 - session expired" },
  { value: SandboxFailure.Forbidden, label: "403 - not permitted" },
  { value: SandboxFailure.NotFound, label: "404 - not found" },
  { value: SandboxFailure.Conflict, label: "409 - already decided" },
  { value: SandboxFailure.Validation, label: "422 - field errors" },
  { value: SandboxFailure.ServerError, label: "500 - server fault" }
];
const LATENCY_OPTIONS = [
  { value: SandboxLatency.Instant, label: "Instant" },
  { value: SandboxLatency.Fast, label: "400ms" },
  { value: SandboxLatency.Slow, label: "2s" }
];
const SCOPE_OPTIONS = [
  { value: SandboxScope.All, label: "Everything" },
  { value: SandboxScope.Reads, label: "Reads only" },
  { value: SandboxScope.Writes, label: "Writes only" }
];
const SHORT_FAILURE_LABEL = {
  [SandboxFailure.None]: "live",
  [SandboxFailure.Offline]: "offline",
  [SandboxFailure.Timeout]: "timeout",
  [SandboxFailure.Unauthorized]: "401",
  [SandboxFailure.Forbidden]: "403",
  [SandboxFailure.NotFound]: "404",
  [SandboxFailure.Conflict]: "409",
  [SandboxFailure.Validation]: "422",
  [SandboxFailure.ServerError]: "500"
};
const SandboxControls = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const latencyMs = useSandboxStore((state) => state.latencyMs);
  const failure = useSandboxStore((state) => state.failure);
  const scope = useSandboxStore((state) => state.scope);
  const setLatency = useSandboxStore((state) => state.setLatency);
  const setFailure = useSandboxStore((state) => state.setFailure);
  const setScope = useSandboxStore((state) => state.setScope);
  const reset = useSandboxStore((state) => state.reset);
  const isArmed = failure !== SandboxFailure.None;
  const handleResetData = /* @__PURE__ */ __name(() => {
    resetSandboxData();
    reset();
    queryClient.removeQueries();
    Qs.success("Sandbox data and controls reset");
  }, "handleResetData");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(wt, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(zt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        variant: "outlined",
        size: "sm",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "activity", className: "size-4" }),
        className: h(
          "gap-2",
          isArmed && "border-trax-red-500 text-trax-red-600"
        ),
        children: [
          "Sandbox: ",
          SHORT_FAILURE_LABEL[failure]
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(yt, { align: "end", className: "w-80 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-trax-neutral-900", children: "Sandbox" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-trax-grey-600", children: "There is no backend in this build. Every read and write is answered here, so these settings decide what the UI has to cope with." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-wide text-trax-neutral-100 uppercase", children: "Latency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: LATENCY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Qt,
          {
            variant: "filter",
            pressed: latencyMs === option.value,
            onPressedChange: /* @__PURE__ */ __name(() => setLatency(option.value), "onPressedChange"),
            children: option.label
          },
          option.value
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ba,
        {
          label: "Force a failure",
          options: FAILURE_OPTIONS,
          value: failure,
          onValueChange: /* @__PURE__ */ __name((value) => setFailure(value), "onValueChange")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ba,
        {
          label: "Applies to",
          options: SCOPE_OPTIONS,
          value: scope,
          onValueChange: /* @__PURE__ */ __name((value) => setScope(value), "onValueChange"),
          disabled: !isArmed,
          helperText: isArmed ? void 0 : "Pick a failure first."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "soft",
          size: "sm",
          className: "w-full",
          onClick: handleResetData,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: "size-4" }),
          children: "Reset data and controls"
        }
      )
    ] })
  ] });
}, "SandboxControls");
const { useState: useState$1 } = await importShared("react");
const DENSITY_OPTIONS = [
  { value: "comfortable", label: "Comfortable" },
  { value: "compact", label: "Compact" }
];
const initials = /* @__PURE__ */ __name((name) => name.split(/\s+/).slice(0, 2).map((part) => part.charAt(0).toUpperCase()).join("") || "?", "initials");
const UserMenu = /* @__PURE__ */ __name(() => {
  const { isAuthenticated } = useAuth();
  const user = useUser();
  const [density, setDensity] = useState$1("comfortable");
  const [isSignOutOpen, setSignOutOpen] = useState$1(false);
  const displayName = (user == null ? void 0 : user.name) ?? (user == null ? void 0 : user.email) ?? "Not signed in";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ue,
        {
          variant: "ghost-neutral",
          className: "gap-2 pl-1.5",
          "aria-label": `Account menu for ${displayName}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "aria-hidden": "true",
                className: "flex size-7 items-center justify-center rounded-full bg-trax-primary-blue-600 text-xs font-semibold text-trax-neutral-0",
                children: initials(displayName)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden max-w-40 truncate text-sm sm:inline", children: displayName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "chevron-down", className: "size-4 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(zr, { align: "end", className: "w-64", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Hs, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-semibold text-trax-neutral-900", children: displayName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-xs font-normal text-trax-grey-600", children: isAuthenticated ? (user == null ? void 0 : user.roles.length) ? user.roles.join(", ") : "no roles in the token" : `no valid token under ${JWT_STORAGE_KEY}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Os, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Ar, { onSelect: /* @__PURE__ */ __name(() => Qs.success("Nothing to show yet - this is a shell"), "onSelect"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "user", className: "size-4" }),
          "Profile"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(js, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Gs, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "settings-2", className: "size-4" }),
            "Table density"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(qs, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(As, { value: density, onValueChange: setDensity, children: DENSITY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ls, { value: option.value, children: option.label }, option.value)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Os, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Ar, { variant: "destructive", onSelect: /* @__PURE__ */ __name(() => setSignOutOpen(true), "onSelect"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "x-circle", className: "size-4" }),
          "Sign out"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isSignOutOpen,
        onOpenChange: setSignOutOpen,
        title: "Sign out of AP Automation?",
        description: "The Trax Base System owns the session, so signing out has to happen there. This dialog is here to show a menu item opening one.",
        confirmLabel: "Understood",
        cancelLabel: "Back",
        variant: "primary",
        onConfirm: /* @__PURE__ */ __name(() => setSignOutOpen(false), "onConfirm")
      }
    )
  ] });
}, "UserMenu");
const { Suspense, useState } = await importShared("react");
const AppShell = /* @__PURE__ */ __name(() => {
  const environmentLabel = EnvConfig.getLabel();
  const [newInvoiceSource, setNewInvoiceSource] = useState(null);
  usePreventPageReload();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 bg-trax-neutral-20 p-4.5 text-trax-neutral-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "rounded-xl border border-trax-neutral-30 bg-trax-neutral-0 shadow-trax-menu", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 pt-3.5 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "flex size-9 items-center justify-center rounded-lg bg-trax-primary-blue-600 text-sm font-bold text-trax-neutral-0",
              children: "AP"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-trax-neutral-900", children: "AP Automation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "Invoice intake and approval" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { delayDuration: TOOLTIP_DELAY_QUICK, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-trax-teal-300 bg-trax-teal-100 px-2 py-0.5 text-xxs font-semibold tracking-wide text-trax-neutral-600 uppercase", children: environmentLabel }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { variant: "dark", size: "sm", children: "Build environment, from the Vite mode this bundle was built with" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SandboxControls, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ns,
            {
              variant: "primary",
              size: "sm",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "plus", className: "size-4" }),
              onClick: /* @__PURE__ */ __name(() => setNewInvoiceSource(NewInvoiceSource.Blank), "onClick"),
              dropdownItems: [
                {
                  label: "Upload a PDF",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "download", className: "size-4" }),
                  onClick: /* @__PURE__ */ __name(() => setNewInvoiceSource(NewInvoiceSource.Upload), "onClick")
                },
                {
                  label: "Enter manually",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pencil", className: "size-4" }),
                  onClick: /* @__PURE__ */ __name(() => setNewInvoiceSource(NewInvoiceSource.Blank), "onClick")
                }
              ],
              children: "New invoice"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserMenu, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavTabs, { items: PRIMARY_NAV, "aria-label": "Primary" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "rounded-xl border border-trax-neutral-30 bg-trax-neutral-0 p-5 shadow-trax-menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Suspense,
      {
        fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-40 w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BuildFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewInvoiceDialog, { source: newInvoiceSource, onClose: /* @__PURE__ */ __name(() => setNewInvoiceSource(null), "onClose") })
  ] });
}, "AppShell");
export {
  AppShell as A,
  DIAGNOSTICS_NAV as D,
  NavTabs as N,
  SETTINGS_NAV as S
};

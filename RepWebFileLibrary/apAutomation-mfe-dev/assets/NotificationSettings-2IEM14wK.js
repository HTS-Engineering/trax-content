var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, o as gr, m as Oa, B as Ba, t as ts, a2 as ja, w as oi, U as Ue, Q as Qs, S as Ss, C as Cs, r as Rs, n as jr, h, _ as _s, D as Ds, M as Ms, k as Es, l as ks, V as Vs, P as Ps, X as Xa, p as Qa, y as ys } from "./index-CFVMMdzN.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { A as API_BASE_URL } from "./axiosInstance-BR3EX-a4.js";
import { C as ConfirmDialog } from "./ConfirmDialog-BPwbNvaf.js";
import { K as KeyValueList } from "./KeyValueList-hl8rrFPd.js";
const { useState: useState$2 } = await importShared("react");
const CURRENCIES = [
  { value: "CAD", label: "Canadian dollar (CAD)" },
  { value: "USD", label: "US dollar (USD)" },
  { value: "EUR", label: "Euro (EUR)" }
];
const ROUNDING = [
  { value: "nearest-cent", label: "Nearest cent" },
  { value: "nearest-dollar", label: "Nearest dollar" },
  { value: "banker", label: "Banker's rounding" }
];
const GeneralSettings = /* @__PURE__ */ __name(() => {
  const [entityName, setEntityName] = useState$2("Kore Solutions Canada");
  const [currency, setCurrency] = useState$2("CAD");
  const [rounding, setRounding] = useState$2("nearest-cent");
  const [tolerance, setTolerance] = useState$2("1.5");
  const [periodEnd, setPeriodEnd] = useState$2(void 0);
  const [autoRoute, setAutoRoute] = useState$2(true);
  const [holdWithoutPo, setHoldWithoutPo] = useState$2(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr,
        {
          title: "Legal entity",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "briefcase", className: "size-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Oa,
        {
          label: "Entity name",
          value: entityName,
          onChange: /* @__PURE__ */ __name((event) => setEntityName(event.target.value), "onChange"),
          helperText: "Appears on remittance advice sent to vendors."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ba,
          {
            label: "Reporting currency",
            options: CURRENCIES,
            value: currency,
            onValueChange: setCurrency
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ba,
          {
            label: "Rounding",
            options: ROUNDING,
            value: rounding,
            onValueChange: setRounding
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(gr, { title: "Matching", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ts,
          {
            label: "Price tolerance",
            suffix: "%",
            type: "number",
            step: "0.1",
            min: 0,
            textAlign: "right",
            value: tolerance,
            onChange: /* @__PURE__ */ __name((event) => setTolerance(event.target.value), "onChange"),
            helperText: "Invoices inside this band clear without a review."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ja,
          {
            label: "Current period ends",
            value: periodEnd,
            onChange: setPeriodEnd,
            placeholder: "Pick a date",
            helperText: "Nothing posts to a closed period."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(gr, { title: "Routing", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "inbox", className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-trax-neutral-30 rounded-lg border border-trax-neutral-30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 px-3.5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-trax-neutral-900", children: "Route automatically" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "Send each invoice to the cost centre owner as soon as it is captured." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            oi,
            {
              checked: autoRoute,
              onCheckedChange: setAutoRoute,
              "aria-label": "Route automatically"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 px-3.5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-trax-neutral-900", children: "Hold invoices with no purchase order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "They wait for a match instead of going to an approver." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            oi,
            {
              checked: holdWithoutPo,
              onCheckedChange: setHoldWithoutPo,
              "aria-label": "Hold invoices with no purchase order"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "primary", onClick: /* @__PURE__ */ __name(() => Qs.success("Settings saved"), "onClick"), children: "Save changes" }) })
  ] });
}, "GeneralSettings");
var define_MFE_BUILD_default = { environment: "apAutomation-mfe-dev" };
const { useState: useState$1 } = await importShared("react");
const INTEGRATIONS = [
  {
    id: "gl",
    name: "General ledger",
    description: "Posts approved invoices to the ledger nightly.",
    state: "connected",
    detail: "Last run completed with 0 rejections"
  },
  {
    id: "ocr",
    name: "Invoice capture",
    description: "Reads PDFs and pre-fills the header and lines.",
    state: "connected",
    detail: "94% of fields accepted without a correction"
  },
  {
    id: "bank",
    name: "Payment file export",
    description: "Builds the EFT batch for the bank.",
    state: "error",
    detail: "The certificate expired 3 days ago"
  },
  {
    id: "procurement",
    name: "Purchase orders",
    description: "Matches invoices against open purchase orders.",
    state: "available",
    detail: "Not connected"
  }
];
const STATE_STYLE = {
  connected: {
    label: "Connected",
    className: "bg-trax-green-100 text-trax-green-800 border-trax-green-100"
  },
  available: {
    label: "Available",
    className: "bg-trax-neutral-20 text-trax-neutral-500 border-trax-neutral-40"
  },
  error: {
    label: "Needs attention",
    className: "bg-trax-red-100 text-trax-red-600 border-trax-red-100"
  }
};
const IntegrationSettings = /* @__PURE__ */ __name(() => {
  const [connecting, setConnecting] = useState$1(null);
  const [disconnecting, setDisconnecting] = useState$1(null);
  const [endpoint, setEndpoint] = useState$1("");
  const [sendTestOnSave, setSendTestOnSave] = useState$1(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 p-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      KeyValueList,
      {
        columns: 2,
        items: [
          {
            label: "API base URL",
            value: API_BASE_URL || "not set - every request would go to the host origin",
            tone: API_BASE_URL ? "normal" : "warning",
            mono: true
          },
          { label: "Bundle", value: define_MFE_BUILD_default.environment, mono: true }
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 lg:grid-cols-2", children: INTEGRATIONS.map((integration) => {
      const style = STATE_STYLE[integration.state];
      const isConnected = integration.state !== "available";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ss, { className: "h-full border-trax-neutral-30 shadow-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Cs, { className: "gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rs, { className: "text-sm font-semibold text-trax-neutral-900", children: integration.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              jr,
              {
                variant: "outline",
                className: h("shrink-0 rounded-full px-2 py-0.5 text-xs", style.className),
                children: style.label
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-trax-grey-600", children: integration.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(_s, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: h(
                "flex items-center gap-1.5 text-xs",
                integration.state === "error" ? "text-trax-red-600" : "text-trax-neutral-100"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    name: integration.state === "error" ? "alert-triangle" : "info",
                    className: "size-3.5 shrink-0"
                  }
                ),
                integration.detail
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            isConnected ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ue,
              {
                variant: "outlined-error",
                size: "sm",
                onClick: /* @__PURE__ */ __name(() => setDisconnecting(integration), "onClick"),
                children: "Disconnect"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ue,
              {
                variant: "primary",
                size: "sm",
                onClick: /* @__PURE__ */ __name(() => {
                  setEndpoint("");
                  setConnecting(integration);
                }, "onClick"),
                children: "Connect"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ue,
              {
                variant: "ghost-neutral",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "external-link", className: "size-3.5" }),
                onClick: /* @__PURE__ */ __name(() => Qs.success("Documentation lives outside this shell"), "onClick"),
                children: "Docs"
              }
            )
          ] })
        ] })
      ] }) }, integration.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ds,
      {
        open: Boolean(connecting),
        onOpenChange: /* @__PURE__ */ __name((next) => {
          if (!next) setConnecting(null);
        }, "onOpenChange"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ms, { className: "max-w-md", onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Es, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ks, { className: "text-base font-semibold text-trax-neutral-600", children: [
              "Connect ",
              connecting == null ? void 0 : connecting.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm text-trax-grey-600", children: "The endpoint is stored against this legal entity, not against your account." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Oa,
              {
                label: "Endpoint",
                placeholder: "https://procurement.example/api",
                value: endpoint,
                onChange: /* @__PURE__ */ __name((event) => setEndpoint(event.target.value), "onChange"),
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-trax-neutral-700", children: "Send a test request when saving" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                oi,
                {
                  checked: sendTestOnSave,
                  onCheckedChange: setSendTestOnSave,
                  "aria-label": "Send a test request when saving"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Ps, { className: "gap-3 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: /* @__PURE__ */ __name(() => setConnecting(null), "onClick"), className: "min-w-20", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ue,
              {
                variant: "primary",
                className: "min-w-20",
                disabled: endpoint.trim() === "",
                onClick: /* @__PURE__ */ __name(() => {
                  Qs.success(`${connecting == null ? void 0 : connecting.name} connected`);
                  setConnecting(null);
                }, "onClick"),
                children: "Connect"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: Boolean(disconnecting),
        onOpenChange: /* @__PURE__ */ __name((next) => {
          if (!next) setDisconnecting(null);
        }, "onOpenChange"),
        title: `Disconnect ${(disconnecting == null ? void 0 : disconnecting.name) ?? ""}?`,
        description: "Invoices already posted stay where they are. Nothing new is sent until it is connected again.",
        confirmLabel: "Disconnect",
        onConfirm: /* @__PURE__ */ __name(() => {
          Qs.success(`${disconnecting == null ? void 0 : disconnecting.name} disconnected`);
          setDisconnecting(null);
        }, "onConfirm")
      }
    )
  ] });
}, "IntegrationSettings");
const { useState } = await importShared("react");
const DIGEST_OPTIONS = [
  { value: "off", label: "Do not send a digest" },
  { value: "daily", label: "Once a day" },
  { value: "weekly", label: "Once a week" }
];
const CHANNEL_ITEMS = [
  { value: "email", label: "Email" },
  { value: "base-system", label: "Trax Base System inbox" },
  { value: "teams", label: "Microsoft Teams" },
  { value: "sms", label: "SMS", description: "Only for invoices past due" }
];
const EVENTS = [
  { id: "assigned", label: "An invoice is routed to me" },
  { id: "overdue", label: "An invoice I own goes past due" },
  { id: "rejected", label: "Something I submitted is rejected" },
  { id: "vendor-added", label: "A vendor finishes onboarding" }
];
const NotificationSettings = /* @__PURE__ */ __name(() => {
  const [enabled, setEnabled] = useState(true);
  const [digest, setDigest] = useState("daily");
  const [channels, setChannels] = useState(["email", "base-system"]);
  const [events, setEvents] = useState(["assigned", "overdue"]);
  const toggleEvent = /* @__PURE__ */ __name((id) => setEvents(
    (current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
  ), "toggleEvent");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 px-3.5 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-trax-neutral-900", children: "Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "Turning this off silences everything below, including the digest." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { checked: enabled, onCheckedChange: setEnabled, "aria-label": "Notifications" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { disabled: !enabled, className: "space-y-5 disabled:opacity-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Xa,
          {
            label: "Channels",
            items: CHANNEL_ITEMS,
            value: channels,
            onValueChange: setChannels,
            placeholder: "Pick at least one",
            searchPlaceholder: "Filter channels",
            disabled: !enabled,
            triggerClassName: "w-full",
            helperText: "Each event goes to every channel selected here."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ba,
          {
            label: "Digest",
            options: DIGEST_OPTIONS,
            value: digest,
            onValueChange: setDigest,
            disabled: !enabled
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Qa, { title: "Which events", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: EVENTS.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ys,
        {
          checked: events.includes(event.id),
          onCheckedChange: /* @__PURE__ */ __name(() => toggleEvent(event.id), "onCheckedChange"),
          disabled: !enabled,
          label: event.label
        },
        event.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "primary",
        onClick: /* @__PURE__ */ __name(() => Qs.success("Notification preferences saved"), "onClick"),
        children: "Save changes"
      }
    ) })
  ] });
}, "NotificationSettings");
export {
  GeneralSettings as G,
  IntegrationSettings as I,
  NotificationSettings as N
};

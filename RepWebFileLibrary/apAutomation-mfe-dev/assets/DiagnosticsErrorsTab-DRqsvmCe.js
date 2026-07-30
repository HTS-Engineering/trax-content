var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, B as Ba, U as Ue, Y as Yn, h } from "./index-CFVMMdzN.js";
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { u as useMutation } from "./useMutation-BgIqTrew.js";
import { i as useSandboxStore, v as useAppQuery, g as demoRequest, q as queryKeys, j as SandboxFailure, l as SandboxScope } from "./factory-BAIl8rNu.js";
import { u as useErrorSurface, d as getErrorMessage } from "./use-error-surface-ToUfTyG9.js";
import { B as BlockingError } from "./BlockingError-Cuos4zFs.js";
import { D as DataLoadError } from "./DataLoadError-D0pN46nh.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
const { useState } = await importShared("react");
const FAILURE_OPTIONS = [
  { value: SandboxFailure.None, label: "No failure - everything loads" },
  { value: SandboxFailure.Offline, label: "Offline - nothing reached the browser" },
  { value: SandboxFailure.ServerError, label: "500 - the body is never shown" },
  { value: SandboxFailure.Forbidden, label: "403 - the body names a role, so it is replaced" },
  { value: SandboxFailure.NotFound, label: "404 - the body IS shown" },
  { value: SandboxFailure.Validation, label: "422 - field errors" },
  { value: SandboxFailure.Unauthorized, label: "401 - outranks every local surface" }
];
function useProbeQuery(id, fallback) {
  return useAppQuery({
    queryKey: queryKeys.items.detail(id),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({ path: `/v1/diagnostics/${id}`, signal, resolve: /* @__PURE__ */ __name(() => ({ id, ok: true }), "resolve") }), "queryFn"),
    meta: { errorCopy: { fallback } },
    retry: false,
    staleTime: 0
  });
}
__name(useProbeQuery, "useProbeQuery");
function Panel({ title, note, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 rounded-lg border border-trax-neutral-30 p-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-trax-neutral-900", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: note })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-24 rounded-lg bg-trax-neutral-10 p-2", children })
  ] });
}
__name(Panel, "Panel");
function Loaded({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 px-2 py-6 text-sm text-trax-green-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", className: "size-4" }),
    label
  ] });
}
__name(Loaded, "Loaded");
function Exploder() {
  throw new Error("Deliberate render error from the diagnostics page");
}
__name(Exploder, "Exploder");
const ErrorSurfaceLab = /* @__PURE__ */ __name(() => {
  const failure = useSandboxStore((state) => state.failure);
  const setFailure = useSandboxStore((state) => state.setFailure);
  const setScope = useSandboxStore((state) => state.setScope);
  const [hasExploded, setExploded] = useState(false);
  const claimed = useProbeQuery("claimed", "Unable to load the claimed panel.");
  const displaced = useProbeQuery("displaced", "Unable to refresh the list behind this panel.");
  const blocking = useProbeQuery("blocking", "Unable to load the configuration this screen needs.");
  const claimedSurface = useErrorSurface(claimed);
  const displacedSurface = useErrorSurface(displaced, { canRenderInPlace: false });
  const blockingSurface = useErrorSurface(blocking);
  const silent = useAppQuery({
    queryKey: queryKeys.items.detail("silent"),
    queryFn: /* @__PURE__ */ __name(({ signal }) => demoRequest({ path: "/v1/diagnostics/silent", signal, resolve: /* @__PURE__ */ __name(() => ({ ok: true }), "resolve") }), "queryFn"),
    // A background signal nobody asked for. Failure is genuinely not worth a word.
    meta: { errorSurface: "silent" },
    retry: false,
    staleTime: 0
  });
  const action = useMutation({
    mutationKey: ["diagnostics", "action"],
    mutationFn: /* @__PURE__ */ __name(() => demoRequest({ path: "/v1/diagnostics/action", kind: "write", resolve: /* @__PURE__ */ __name(() => ({ ok: true }), "resolve") }), "mutationFn")
  });
  const localAction = useMutation({
    mutationKey: ["diagnostics", "local-action"],
    meta: { errorSurface: "local" },
    mutationFn: /* @__PURE__ */ __name(() => demoRequest({ path: "/v1/diagnostics/local", kind: "write", resolve: /* @__PURE__ */ __name(() => ({ ok: true }), "resolve") }), "mutationFn")
  });
  const refetchAll = /* @__PURE__ */ __name(() => {
    void claimed.refetch();
    void displaced.refetch();
    void blocking.refetch();
    void silent.refetch();
  }, "refetchAll");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-lg border border-trax-primary-blue-100 bg-trax-primary-blue-50 p-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ba,
          {
            label: "Failure to force",
            options: FAILURE_OPTIONS,
            value: failure,
            onValueChange: /* @__PURE__ */ __name((value) => {
              setScope(SandboxScope.All);
              setFailure(value);
            }, "onValueChange"),
            className: "w-full sm:w-96"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "primary",
            size: "sm",
            onClick: refetchAll,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: "size-4" }),
            children: "Reload the four probes"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "Pick a failure, then reload. The four panels differ only in what they told the error system about where their failure may be shown." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel,
        {
          title: "Claimed - shown in place",
          note: "The panel is the whole region, so replacing it with the failure loses nothing. No toast.",
          children: claimedSurface.shouldRenderInPlace ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface: claimedSurface }) : claimed.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-24 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Loaded, { label: "Loaded" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel,
        {
          title: "Displaced - handed back to the toast",
          note: "Declares canRenderInPlace: false. It still knows it failed, but the content stays and the toast speaks instead.",
          children: displaced.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-24 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 px-2 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Loaded, { label: "The content this panel would have replaced" }),
            displacedSurface.hasFailed && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-xs text-trax-yellow-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "info", className: "size-3.5" }),
              "It knows the refresh failed - see the toast, not this panel."
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel,
        {
          title: "Blocking - fills the region",
          note: "For a screen that cannot function without the data. It stays until the data arrives or the user leaves.",
          children: blockingSurface.shouldRenderInPlace ? /* @__PURE__ */ jsxRuntimeExports.jsx(BlockingError, { surface: blockingSurface, title: "This screen needs its configuration" }) : blocking.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-24 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Loaded, { label: "Configuration loaded" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel,
        {
          title: "Silent - nothing at all",
          note: "meta.errorSurface: 'silent'. A background signal nobody is waiting for. Check the console; there is no toast and no panel.",
          children: silent.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-24 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) }) : silent.isError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 px-2 py-6 text-sm text-trax-neutral-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "info", className: "size-4" }),
            "Failed, and deliberately said nothing."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Loaded, { label: "Loaded" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Failed actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-lg border border-trax-neutral-30 p-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            disabled: action.isPending,
            onClick: /* @__PURE__ */ __name(() => action.mutate(), "onClick"),
            children: action.isPending ? "Working..." : "Action reported by the toast"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            disabled: localAction.isPending,
            onClick: /* @__PURE__ */ __name(() => localAction.mutate(), "onClick"),
            children: localAction.isPending ? "Working..." : "Action reported inline"
          }
        ),
        localAction.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "text-sm text-trax-red-600", children: getErrorMessage(localAction.error, { context: "action" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "An action gets a fresh answer for every click, unlike a load - the notifier only collapses repeats when the cause is the connection or the session." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "A render error" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: h(
            "flex flex-wrap items-center gap-3 rounded-lg border p-3.5",
            "border-trax-red-100 bg-trax-red-100/40"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "outlined-error", size: "sm", onClick: /* @__PURE__ */ __name(() => setExploded(true), "onClick"), children: "Throw during render" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "Caught by the router's own error boundary, so the header and navigation stay and only this region is replaced. Navigating to another page clears it - no reload needed." }),
            hasExploded && /* @__PURE__ */ jsxRuntimeExports.jsx(Exploder, {})
          ]
        }
      )
    ] })
  ] });
}, "ErrorSurfaceLab");
function DiagnosticsErrorsTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorSurfaceLab, {});
}
__name(DiagnosticsErrorsTab, "DiagnosticsErrorsTab");
export {
  DiagnosticsErrorsTab as default
};

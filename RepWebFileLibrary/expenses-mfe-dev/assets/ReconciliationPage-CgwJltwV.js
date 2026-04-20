import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { u as useNavigate, f as useLocation, a as RoutePaths } from "./routes-fB3vvj9G.js";
import { U as Ue } from "./index.es-DEbn8lJC.js";
import { I as Icon } from "./Icon-DZapo79l.js";
import { a as devLog } from "./index-DGIiGjWN.js";
const { useEffect } = await importShared("react");
const ReconciliationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    devLog("[ReconciliationPage] MOUNT", {
      href: window.location.href,
      hash: window.location.hash,
      pathname: location.pathname,
      search: location.search,
      locationKey: location.key,
      locationState: location.state,
      historyState: window.history.state
    });
    return () => {
      devLog("[ReconciliationPage] UNMOUNT", {
        href: window.location.href,
        hash: window.location.hash
      });
    };
  }, []);
  const handleOpenDetail = () => {
    const returnUrl = `${location.pathname}${location.search}`;
    devLog("[ReconciliationPage] handleOpenDetail — navigating to detail", {
      target: `${RoutePaths.Reconciliation}/test-123`,
      state: { returnUrl },
      currentHref: window.location.href
    });
    navigate(`${RoutePaths.Reconciliation}/test-123`, { state: { returnUrl } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-list", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Reconciliations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Manage bank statement uploads and monitor corporate card reconciliations" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { onClick: handleOpenDetail, className: "m-auto", children: "Open test reconciliation detail" }) })
  ] });
};
export {
  ReconciliationPage as default
};

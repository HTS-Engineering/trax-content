import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { k as useParams, h as useLocation, l as useNavigateBack, a as RoutePaths } from "./use-scroll-into-view-ref-CvLmKtPQ.js";
import { U as Ue } from "./index.es-DEbn8lJC.js";
import { I as Icon } from "./Icon-DZapo79l.js";
import { a as devLog } from "./index-DGIiGjWN.js";
const { useEffect } = await importShared("react");
const ReconciliationDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { navigateBack } = useNavigateBack({
    fallback: RoutePaths.Reconciliation,
    basePath: RoutePaths.Reconciliation
  });
  useEffect(() => {
    devLog("[ReconciliationDetailPage] MOUNT", {
      id,
      href: window.location.href,
      hash: window.location.hash,
      pathname: location.pathname,
      locationKey: location.key,
      locationState: location.state,
      historyState: window.history.state
    });
    return () => {
      devLog("[ReconciliationDetailPage] UNMOUNT", {
        href: window.location.href,
        hash: window.location.hash
      });
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        variant: "outlined",
        onClick: navigateBack,
        className: "flex items-center gap-1 text-exp-neutral-600 hover:text-exp-primary-blue-600 px-0!",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back", className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "Reconciliations" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center justify-center text-exp-neutral-400 text-lg", children: [
      "Reconciliation Detail — ",
      id
    ] })
  ] });
};
export {
  ReconciliationDetailPage as default
};

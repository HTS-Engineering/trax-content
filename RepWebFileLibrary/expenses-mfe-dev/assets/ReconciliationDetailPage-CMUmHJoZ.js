import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as useNavigateBack } from "./use-scroll-into-view-ref-B6vjhvKX.js";
import { h as useParams, a as RoutePaths } from "./routes-fB3vvj9G.js";
import { U as Ue } from "./index.es-DEbn8lJC.js";
import { I as Icon } from "./Icon-DZapo79l.js";
const ReconciliationDetailPage = () => {
  const { id } = useParams();
  const { navigateBack } = useNavigateBack({
    fallback: RoutePaths.Reconciliation,
    basePath: RoutePaths.Reconciliation
  });
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

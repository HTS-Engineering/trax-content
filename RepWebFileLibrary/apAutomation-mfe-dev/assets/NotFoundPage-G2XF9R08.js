var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./index-CFVMMdzN.js";
import { a as RoutePaths } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { L as LinkButton } from "./LinkButton-Cv9CNvcl.js";
import { f as useLocation } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
function NotFoundPage() {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconName: "search",
      title: "No such page in this module",
      description: `Nothing is routed to "${location.pathname}". It may have been renamed, or the link may be from an older version.`,
      role: "alert",
      action: /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { to: RoutePaths.Overview, variant: "primary", size: "sm", children: "Go to the overview" })
    }
  );
}
__name(NotFoundPage, "NotFoundPage");
export {
  NotFoundPage as default
};

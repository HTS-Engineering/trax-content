var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./index-CFVMMdzN.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { R as RetryButton } from "./DataLoadError-D0pN46nh.js";
const BlockingError = /* @__PURE__ */ __name(({
  surface,
  title
}) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[24rem] w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconName: "error-outline",
      iconClassName: "text-trax-red-500",
      iconWrapperClassName: "bg-trax-red-100",
      title,
      description: ((_a = surface.presentation) == null ? void 0 : _a.message) ?? "",
      "data-testid": "blocking-error",
      role: "alert",
      action: /* @__PURE__ */ jsxRuntimeExports.jsx(RetryButton, { onRetry: surface.retry, isRetrying: surface.isRetrying, label: "Try again" })
    }
  ) });
}, "BlockingError");
export {
  BlockingError as B
};

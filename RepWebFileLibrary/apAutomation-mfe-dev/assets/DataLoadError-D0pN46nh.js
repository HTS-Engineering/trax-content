var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, U as Ue } from "./index-CFVMMdzN.js";
import { E as EmptyState } from "./EmptyState-BO0ULo-o.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
const RetryButton = /* @__PURE__ */ __name(({
  onRetry,
  isRetrying,
  label = "Retry",
  retryingLabel = "Retrying..."
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Ue,
  {
    variant: "outlined",
    size: "sm",
    onClick: /* @__PURE__ */ __name(() => {
      if (!isRetrying) onRetry();
    }, "onClick"),
    "aria-disabled": isRetrying,
    "aria-live": "polite",
    className: isRetrying ? "opacity-60" : void 0,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: `size-4 ${isRetrying ? "animate-spin" : ""}` }),
    children: isRetrying ? retryingLabel : label
  }
), "RetryButton");
const DataLoadError = /* @__PURE__ */ __name(({
  surface
}) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconName: "error-outline",
      iconClassName: "text-trax-red-500",
      iconWrapperClassName: "bg-trax-red-100",
      title: "Couldn't load data",
      description: ((_a = surface.presentation) == null ? void 0 : _a.message) ?? "",
      "data-testid": "data-load-error",
      role: "alert",
      action: /* @__PURE__ */ jsxRuntimeExports.jsx(RetryButton, { onRetry: surface.retry, isRetrying: surface.isRetrying })
    }
  );
}, "DataLoadError");
export {
  DataLoadError as D,
  RetryButton as R
};

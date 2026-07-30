var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, h } from "./index-CFVMMdzN.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
const EmptyState = /* @__PURE__ */ __name(({
  iconName,
  iconComponent,
  iconClassName,
  iconWrapperClassName,
  title,
  description,
  titleClassName,
  descriptionClassName,
  containerClassName,
  action,
  role,
  "data-testid": testId
}) => {
  const icon = iconComponent ?? (iconName ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: iconName, className: h("size-9 text-trax-neutral-100", iconClassName) }) : null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: h(
        "flex flex-col items-center justify-center py-16 px-4 gap-4",
        containerClassName
      ),
      "data-testid": testId,
      role,
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: h("bg-trax-primary-blue-50 p-3.5 rounded-full", iconWrapperClassName), children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2.5 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: h(
                "text-base font-medium text-trax-neutral-500",
                titleClassName
              ),
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: h(
                "text-sm font-normal text-trax-grey-600 max-w-md text-center leading-[1.4]",
                descriptionClassName
              ),
              children: description
            }
          )
        ] }),
        action && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: action })
      ]
    }
  );
}, "EmptyState");
export {
  EmptyState as E
};

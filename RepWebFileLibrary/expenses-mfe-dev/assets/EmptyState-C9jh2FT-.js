var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
import { a0 as h } from "./configuration-VilRQx4O.js";
const EmptyState = /* @__PURE__ */ __name(({
  iconName = "receipt",
  iconComponent,
  iconClassName,
  iconWrapperClassName,
  title,
  description,
  titleClassName,
  descriptionClassName,
  containerClassName,
  action,
  "data-testid": testId
}) => {
  const renderIcon = /* @__PURE__ */ __name(() => {
    if (iconComponent) {
      return iconComponent;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        name: iconName,
        className: h("size-9 text-exp-neutral-100", iconClassName)
      }
    );
  }, "renderIcon");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: h(
        "flex flex-col items-center justify-center py-16 px-4 gap-4",
        containerClassName
      ),
      "data-testid": testId,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: h(
              "bg-exp-primary-blue-50 p-3.5 rounded-full",
              iconWrapperClassName
            ),
            children: renderIcon()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2.5 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: h(
                "text-base font-medium text-exp-neutral-500",
                titleClassName
              ),
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: h(
                "text-sm font-normal text-exp-grey-600 max-w-md text-center leading-[1.4]",
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

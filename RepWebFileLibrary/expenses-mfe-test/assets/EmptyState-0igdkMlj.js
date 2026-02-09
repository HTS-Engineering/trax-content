import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import { p } from "./index.es-fHErn31W.js";
const EmptyState = ({
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
  const renderIcon = () => {
    if (iconComponent) {
      return iconComponent;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        name: iconName,
        className: p("size-9 text-exp-neutral-100", iconClassName)
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: p(
        "flex flex-col items-center justify-center py-16 px-4 gap-4",
        containerClassName
      ),
      "data-testid": testId,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: p(
              "bg-exp-primary-blue-50 p-4.5 rounded-full",
              iconWrapperClassName
            ),
            children: renderIcon()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2.5 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: p(
                "text-base font-medium text-exp-neutral-500",
                titleClassName
              ),
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: p(
                "text-sm font-normal text-exp-grey-600 max-w-96 text-center leading-[1.4]",
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
};
export {
  EmptyState as E
};

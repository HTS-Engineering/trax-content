var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, h, af as Zt } from "./index-CFVMMdzN.js";
import { L as Link } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
const LinkButton = /* @__PURE__ */ __name(({
  variant,
  size,
  icon,
  className,
  children,
  ...linkProps
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { ...linkProps, className: h(Zt({ variant, size }), className), children: [
  icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center [&>svg]:size-4", children: icon }),
  children
] }), "LinkButton");
export {
  LinkButton as L
};

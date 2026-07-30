var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, n as jr, h } from "./index-CFVMMdzN.js";
import { h as INVOICE_STATUS_META } from "./money-WJ2bAmbD.js";
const InvoiceStatusBadge = /* @__PURE__ */ __name(({ status, className }) => {
  const meta = INVOICE_STATUS_META[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    jr,
    {
      variant: "outline",
      className: h("rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap", meta.className, className),
      children: meta.label
    }
  );
}, "InvoiceStatusBadge");
export {
  InvoiceStatusBadge as I
};

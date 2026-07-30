var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./index-CFVMMdzN.js";
import { b as InvoiceTimeline } from "./InvoiceTimeline-CSMfz2Fr.js";
import { I as INVOICE_ID_PARAM } from "./routes-Ch9G7nzJ.js";
import "./mfe.config-tfp2F-Dw.js";
import { b as useParams } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
function InvoiceHistoryTab() {
  const invoiceId = useParams()[INVOICE_ID_PARAM];
  if (!invoiceId) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceTimeline, { invoiceId });
}
__name(InvoiceHistoryTab, "InvoiceHistoryTab");
export {
  InvoiceHistoryTab as default
};

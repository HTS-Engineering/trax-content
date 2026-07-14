var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { m as useParams, u as useLocation, w as useNavigateBack, a as RoutePaths } from "./use-scroll-into-view-ref-DGEXoh0D.js";
import "./CardholderReconciliationList-DOMlqJjA.js";
import "./configuration-C1Nhb7Ag.js";
import { a as CardholderTransactionsView } from "./TransactionsList-ppQ48_Sf.js";
const CardholderReconciliationDetailPage = /* @__PURE__ */ __name(() => {
  const { id } = useParams();
  const { state } = useLocation();
  const { navigateBack } = useNavigateBack({
    fallback: RoutePaths.CardholderReconciliation,
    basePath: RoutePaths.CardholderReconciliation
  });
  const snapshot = state == null ? void 0 : state.item;
  const header = snapshot ? {
    masterAccountName: snapshot.name,
    currencyCode: snapshot.currencyCode,
    statementPeriod: snapshot.statementPeriod,
    reconciliationDueDate: snapshot.reconciliationDueDate
  } : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardholderTransactionsView, { statementId: id, header, onBack: navigateBack });
}, "CardholderReconciliationDetailPage");
export {
  CardholderReconciliationDetailPage as default
};

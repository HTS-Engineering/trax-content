var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { C as useParams, d as useLocation, Y as useNavigateBack, a as RoutePaths } from "./use-scroll-into-view-ref-5KW7vbjG.js";
import { b as CardholderTransactionsView } from "./CardholderTransactionsView-DVAVCSzA.js";
import "./configuration-D10EiL3X.js";
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

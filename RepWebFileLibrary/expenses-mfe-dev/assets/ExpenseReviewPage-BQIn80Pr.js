var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { w as useParams, y as useNavigate, z as useExpenseSwapStore, A as RoutePaths, v as jsxRuntimeExports, ak as Navigate } from "./__federation_expose_Mount-C9z_Zlnl.js";
import { A as ApproverExpenseDetail } from "./ApproverExpenseDetail-DkMtGaPp.js";
const { useCallback } = await importShared("react");
const ExpenseReviewPage = /* @__PURE__ */ __name(() => {
  const { id: expenseId } = useParams();
  const navigate = useNavigate();
  const clearUnpostedReviewExpenseId = useExpenseSwapStore(
    (state) => state.clearUnpostedReviewExpenseId
  );
  const handleClose = useCallback(() => {
    clearUnpostedReviewExpenseId();
    navigate(RoutePaths.ExpensesDefault, { replace: true });
  }, [clearUnpostedReviewExpenseId, navigate]);
  if (!expenseId) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: RoutePaths.ExpensesDefault, replace: true });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ApproverExpenseDetail, { expenseId, onClose: handleClose });
}, "ExpenseReviewPage");
export {
  ExpenseReviewPage as default
};

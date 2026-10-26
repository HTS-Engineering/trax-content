var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { w as useParams, y as useNavigate, z as useExpenseSwapStore, A as RoutePaths, v as jsxRuntimeExports, am as RedirectWithSpinner } from "./__federation_expose_Mount-DFVe_XhY.js";
import { A as ApproverExpenseDetail } from "./ApproverExpenseDetail-vHSw2rv1.js";
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
  if (!expenseId) return /* @__PURE__ */ jsxRuntimeExports.jsx(RedirectWithSpinner, { to: RoutePaths.ExpensesDefault });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ApproverExpenseDetail, { expenseId, onClose: handleClose });
}, "ExpenseReviewPage");
export {
  ExpenseReviewPage as default
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { ae as useParams, C as useNavigate, a as RoutePaths, j as jsxRuntimeExports, N as Navigate } from "./queryClient-1dC5FT_E.js";
import { A as ApproverExpenseDetail } from "./ApproverExpenseDetail-CNTqKgK2.js";
import { v as useExpenseSwapStore } from "./__federation_expose_Mount-DyMtowAm.js";
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

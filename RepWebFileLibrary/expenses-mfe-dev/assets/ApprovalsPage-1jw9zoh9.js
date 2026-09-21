var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { w as useParams, x as useLocation, y as useNavigate, z as useExpenseSwapStore, A as RoutePaths, v as jsxRuntimeExports, B as ApprovalsList } from "./__federation_expose_Mount-BD7p8edG.js";
import { A as ApproverExpenseDetail } from "./ApproverExpenseDetail-DbUPsmGd.js";
const { useCallback } = await importShared("react");
const ApprovalsPage = /* @__PURE__ */ __name(() => {
  const { id: selectedExpenseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state;
  const clearUnpostedReviewExpenseId = useExpenseSwapStore(
    (state) => state.clearUnpostedReviewExpenseId
  );
  const handleDetailClose = useCallback(() => {
    clearUnpostedReviewExpenseId();
    navigate(RoutePaths.Approvals + location.search, { replace: true });
  }, [clearUnpostedReviewExpenseId, navigate, location.search]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApprovalsList, {}),
    selectedExpenseId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApproverExpenseDetail,
      {
        expenseId: selectedExpenseId,
        item: locationState == null ? void 0 : locationState.item,
        onClose: handleDetailClose
      }
    )
  ] });
}, "ApprovalsPage");
export {
  ApprovalsPage as default
};

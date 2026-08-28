var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { ae as useParams, x as useLocation, C as useNavigate, a as RoutePaths, j as jsxRuntimeExports } from "./queryClient-DTIev6b5.js";
import { v as useExpenseSwapStore, A as ApprovalsList } from "./__federation_expose_Mount-8MKNSeMn.js";
import { A as ApproverExpenseDetail } from "./ApproverExpenseDetail-BBAI1YQ-.js";
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

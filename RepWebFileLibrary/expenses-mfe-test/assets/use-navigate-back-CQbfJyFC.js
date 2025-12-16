import { c as createLucideIcon } from "./axiosInstance-DJ0IFTL8.js";
import { importShared } from "./__federation_fn_import-DCl-vMH-.js";
import { a as RoutePaths, u as useNavigate, e as useLocation } from "./routes-fA2LM82H.js";
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
const { useCallback, useState } = await importShared("react");
const isNavigationState = (state) => {
  if (typeof state !== "object" || state === null) {
    return false;
  }
  if (!("returnUrl" in state)) {
    return false;
  }
  const { returnUrl } = state;
  return typeof returnUrl === "string" || returnUrl === void 0;
};
const isValidListUrl = (url, basePath) => {
  return url === basePath || url.startsWith(`${basePath}?`);
};
const getValidReturnUrl = (state, fallback, basePath) => {
  if (!isNavigationState(state) || !state.returnUrl) {
    return fallback;
  }
  return isValidListUrl(state.returnUrl, basePath) ? state.returnUrl : fallback;
};
const useNavigateBack = (options = {}) => {
  const {
    fallback = RoutePaths.Expenses,
    basePath = "/expenses"
  } = options;
  const navigate = useNavigate();
  const location = useLocation();
  const [returnUrl] = useState(
    () => getValidReturnUrl(location.state, fallback, basePath)
  );
  const navigateBack = useCallback(() => {
    navigate(returnUrl);
  }, [navigate, returnUrl]);
  return { navigateBack, returnUrl };
};
export {
  ChevronLeft as C,
  useNavigateBack as u
};

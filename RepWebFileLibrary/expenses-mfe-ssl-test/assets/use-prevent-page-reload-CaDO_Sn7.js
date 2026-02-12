import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { a as RoutePaths, u as useNavigate, e as useLocation } from "./routes-C5J7GVU-.js";
import { b as devWarn } from "./index-D4vrrc7u.js";
const { useEffect: useEffect$1 } = await importShared("react");
const useEscapeHandler = (isActive, onEscape) => {
  useEffect$1(() => {
    if (!isActive) return;
    const handleKeyDown = (event) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onEscape]);
};
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
    fallback = RoutePaths.ExpensesDefault,
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
const { useEffect } = await importShared("react");
const usePreventPageReload = () => {
  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      devWarn("Form submission prevented to avoid page reload");
    };
    const handleClick = (e) => {
      const target = e.target;
      if (target.tagName === "BUTTON" && target.type === "submit") {
        const form = target.closest("form");
        if (form) {
          e.preventDefault();
          devWarn("Form submit button click prevented to avoid page reload");
          return;
        }
      }
      if (target.tagName === "INPUT" && target.type === "submit") {
        e.preventDefault();
        devWarn("Input submit prevented to avoid page reload");
        return;
      }
    };
    document.addEventListener("submit", handleSubmit, { capture: true, passive: false });
    document.addEventListener("click", handleClick, { capture: true, passive: false });
    return () => {
      document.removeEventListener("submit", handleSubmit, { capture: true });
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);
};
export {
  useNavigateBack as a,
  useEscapeHandler as b,
  usePreventPageReload as u
};

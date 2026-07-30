var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { d as useNavigate, f as useLocation } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
import { a as devWarn } from "./index-CFVMMdzN.js";
const TOOLTIP_DELAY_QUICK = 120;
const { useCallback: useCallback$4, useEffect: useEffect$3, useRef: useRef$2 } = await importShared("react");
const { useEffect: useEffect$2 } = await importShared("react");
const useEscapeHandler = /* @__PURE__ */ __name((isActive, onEscape) => {
  useEffect$2(() => {
    if (!isActive) return;
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape();
      }
    }, "handleKeyDown");
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onEscape]);
}, "useEscapeHandler");
const { useCallback: useCallback$3, useState: useState$1 } = await importShared("react");
const isNavigationState = /* @__PURE__ */ __name((state) => {
  if (typeof state !== "object" || state === null) {
    return false;
  }
  if (!("returnUrl" in state)) {
    return false;
  }
  const { returnUrl } = state;
  return typeof returnUrl === "string" || returnUrl === void 0;
}, "isNavigationState");
const isValidListUrl = /* @__PURE__ */ __name((url, basePath) => {
  return url === basePath || url.startsWith(`${basePath}?`);
}, "isValidListUrl");
const getValidReturnUrl = /* @__PURE__ */ __name((state, fallback, basePath) => {
  if (!isNavigationState(state) || !state.returnUrl) {
    return fallback;
  }
  return isValidListUrl(state.returnUrl, basePath) ? state.returnUrl : fallback;
}, "getValidReturnUrl");
const useNavigateBack = /* @__PURE__ */ __name(({
  fallback,
  basePath
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [returnUrl] = useState$1(
    () => getValidReturnUrl(location.state, fallback, basePath)
  );
  const navigateBack = useCallback$3(() => {
    navigate(returnUrl, { replace: true });
  }, [navigate, returnUrl]);
  return { navigateBack, returnUrl };
}, "useNavigateBack");
const { useCallback: useCallback$2 } = await importShared("react");
const useReturnUrl = /* @__PURE__ */ __name(() => {
  const location = useLocation();
  return `${location.pathname}${location.search}`;
}, "useReturnUrl");
const { useCallback: useCallback$1, useEffect: useEffect$1, useRef: useRef$1, useState } = await importShared("react");
const { useEffect } = await importShared("react");
const usePreventPageReload = /* @__PURE__ */ __name(() => {
  useEffect(() => {
    const handleSubmit = /* @__PURE__ */ __name((e) => {
      e.preventDefault();
      devWarn("Form submission prevented to avoid page reload");
    }, "handleSubmit");
    const handleClick = /* @__PURE__ */ __name((e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const button = target.closest('button, input[type="submit"], input[type="image"]');
      if (!button) return;
      if (button instanceof HTMLButtonElement && button.type === "submit") {
        if (button.closest("form")) {
          e.preventDefault();
          devWarn("Form submit button click prevented to avoid page reload");
        }
        return;
      }
      if (button instanceof HTMLInputElement && button.type === "submit") {
        e.preventDefault();
        devWarn("Input submit prevented to avoid page reload");
      }
    }, "handleClick");
    document.addEventListener("submit", handleSubmit, { capture: true, passive: false });
    document.addEventListener("click", handleClick, { capture: true, passive: false });
    return () => {
      document.removeEventListener("submit", handleSubmit, { capture: true });
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);
}, "usePreventPageReload");
const { useCallback, useRef } = await importShared("react");
export {
  TOOLTIP_DELAY_QUICK as T,
  useNavigateBack as a,
  usePreventPageReload as b,
  useEscapeHandler as c,
  useReturnUrl as u
};

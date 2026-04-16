import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { q as qs } from "./index.es-BcmpdPPF.js";
import { a as RoutePaths, u as useNavigate, f as useLocation } from "./routes-g7dRUzcQ.js";
import { b as devWarn } from "./index-BZGB3DCm.js";
function debounce(func, delay) {
  let timeoutId = null;
  return function debounced(...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
}
const { useCallback: useCallback$3, useEffect: useEffect$4, useRef: useRef$2 } = await importShared("react");
function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef$2(callback);
  const debouncedRef = useRef$2(void 0);
  useEffect$4(() => {
    callbackRef.current = callback;
  }, [callback]);
  const debouncedCallback = useCallback$3(
    (...args) => {
      if (!debouncedRef.current) {
        debouncedRef.current = debounce(
          (...debouncedArgs) => callbackRef.current(...debouncedArgs),
          delay
        );
      }
      debouncedRef.current(...args);
    },
    [delay]
  );
  useEffect$4(() => {
    return () => {
      debouncedRef.current = void 0;
    };
  }, []);
  return debouncedCallback;
}
const { useEffect: useEffect$3, useRef: useRef$1 } = await importShared("react");
const useErrorToast = (isError, message, duration = 3e3) => {
  const shownRef = useRef$1(false);
  useEffect$3(() => {
    if (isError && !shownRef.current) {
      shownRef.current = true;
      qs.error(message, { duration });
    }
    if (!isError) {
      shownRef.current = false;
    }
  }, [isError, message, duration]);
};
const { useEffect: useEffect$2 } = await importShared("react");
const useEscapeHandler = (isActive, onEscape) => {
  useEffect$2(() => {
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
const { useCallback: useCallback$2, useState: useState$1 } = await importShared("react");
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
  const [returnUrl] = useState$1(
    () => getValidReturnUrl(location.state, fallback, basePath)
  );
  const navigateBack = useCallback$2(() => {
    navigate(returnUrl);
  }, [navigate, returnUrl]);
  return { navigateBack, returnUrl };
};
const { useCallback: useCallback$1, useEffect: useEffect$1, useRef, useState } = await importShared("react");
const useNumericDisplay = (formValue, options = {}) => {
  const { showPlaceholderForZero = true } = options;
  const [display, setDisplay] = useState(
    () => formValue === 0 && showPlaceholderForZero ? "" : String(formValue)
  );
  const isEditingRef = useRef(false);
  const isInitialRef = useRef(true);
  const formValueRef = useRef(formValue);
  formValueRef.current = formValue;
  useEffect$1(() => {
    if (isInitialRef.current) {
      isInitialRef.current = false;
      return;
    }
    if (!isEditingRef.current) {
      setDisplay(formValue === 0 ? "0" : String(formValue));
    }
  }, [formValue]);
  const handleChange = useCallback$1((rawValue) => {
    setDisplay(rawValue);
    return rawValue === "" ? 0 : parseFloat(rawValue);
  }, []);
  const handleFocus = useCallback$1(() => {
    isEditingRef.current = true;
  }, []);
  const handleBlur = useCallback$1(() => {
    isEditingRef.current = false;
    setDisplay((prev) => {
      const expected = formValueRef.current === 0 ? "0" : String(formValueRef.current);
      return prev === expected ? prev : expected;
    });
  }, []);
  return { displayValue: display, handleChange, handleFocus, handleBlur };
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
const { useCallback } = await importShared("react");
function useScrollIntoViewRef(options) {
  return useCallback((el) => {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth", block: "start", ...options });
  }, []);
}
export {
  useScrollIntoViewRef as a,
  useErrorToast as b,
  useNavigateBack as c,
  useDebouncedCallback as d,
  useNumericDisplay as e,
  useEscapeHandler as f,
  usePreventPageReload as u
};

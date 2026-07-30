var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { u as useJWTStore, j as jwtSelectors, e as ensureJWTInitialized } from "./store-Bn-YuemF.js";
const { useEffect, useMemo } = await importShared("react");
const useAuth = /* @__PURE__ */ __name(() => {
  const isAuthenticated = useJWTStore(jwtSelectors.isAuthenticated);
  const isLoading = useJWTStore(jwtSelectors.isLoading);
  const error = useJWTStore(jwtSelectors.error);
  const token = useJWTStore(jwtSelectors.realToken);
  const isInitialized = useJWTStore((state) => state.isInitialized);
  useEffect(() => {
    if (!isInitialized) {
      ensureJWTInitialized();
    }
  }, [isInitialized]);
  return {
    isAuthenticated,
    isLoading,
    error,
    token,
    isInitialized
  };
}, "useAuth");
const useUser = /* @__PURE__ */ __name(() => {
  return useJWTStore(jwtSelectors.user);
}, "useUser");
export {
  useUser as a,
  useAuth as u
};

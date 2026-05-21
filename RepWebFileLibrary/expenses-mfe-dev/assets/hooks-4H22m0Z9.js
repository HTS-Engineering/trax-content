var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-B1oJrOwd.js";
import { u as useJWTStore, au as jwtSelectors, av as ensureJWTInitialized } from "./axiosInstance-VUb0TNQ5.js";
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
const useJWT = /* @__PURE__ */ __name(() => {
  const state = useJWTStore();
  const actions = useMemo(
    () => ({
      setToken: state.setToken,
      clearToken: state.clearToken,
      validateToken: state.validateToken,
      decodeToken: state.decodeToken,
      initialize: state.initialize,
      reset: state.reset
    }),
    [
      state.setToken,
      state.clearToken,
      state.validateToken,
      state.decodeToken,
      state.initialize,
      state.reset
    ]
  );
  return {
    // State
    token: jwtSelectors.realToken(state),
    // null if placeholder
    isValid: state.isValid,
    isLoading: state.isLoading,
    isInitialized: state.isInitialized,
    error: state.error,
    lastUpdated: state.lastUpdated,
    payload: state.payload,
    isAuthenticated: state.isAuthenticated,
    isExpired: state.isExpired,
    // Actions
    ...actions
  };
}, "useJWT");
const useJWTPayload = /* @__PURE__ */ __name(() => {
  return useJWTStore((state) => state.payload);
}, "useJWTPayload");
const useUser = /* @__PURE__ */ __name(() => {
  return useJWTStore(jwtSelectors.user);
}, "useUser");
const usePermissions = /* @__PURE__ */ __name(() => {
  const user = useJWTStore((state) => state.user);
  const permissions = (user == null ? void 0 : user.permissions) || [];
  const roles = (user == null ? void 0 : user.roles) || [];
  const hasPermission = /* @__PURE__ */ __name((permission) => {
    return permissions.includes(permission);
  }, "hasPermission");
  const hasRole = /* @__PURE__ */ __name((role) => {
    return roles.includes(role);
  }, "hasRole");
  const hasAnyPermission = /* @__PURE__ */ __name((requiredPermissions) => {
    return requiredPermissions.some((permission) => permissions.includes(permission));
  }, "hasAnyPermission");
  const hasAllPermissions = /* @__PURE__ */ __name((requiredPermissions) => {
    return requiredPermissions.every((permission) => permissions.includes(permission));
  }, "hasAllPermissions");
  const hasAnyRole = /* @__PURE__ */ __name((requiredRoles) => {
    return requiredRoles.some((role) => roles.includes(role));
  }, "hasAnyRole");
  const hasAllRoles = /* @__PURE__ */ __name((requiredRoles) => {
    return requiredRoles.every((role) => roles.includes(role));
  }, "hasAllRoles");
  return {
    permissions,
    roles,
    hasPermission,
    hasRole,
    hasAnyPermission,
    hasAllPermissions,
    hasAnyRole,
    hasAllRoles
  };
}, "usePermissions");
const useTokenExpiration = /* @__PURE__ */ __name(() => {
  const expiresAt = useJWTStore((state) => state.expiresAt);
  const isExpired = useJWTStore((state) => state.isExpired);
  return useMemo(() => ({
    expiresAt,
    isExpired
  }), [expiresAt, isExpired]);
}, "useTokenExpiration");
const useJWTStatus = /* @__PURE__ */ __name(() => {
  const isInitialized = useJWTStore((state) => state.isInitialized);
  const isLoading = useJWTStore((state) => state.isLoading);
  const error = useJWTStore((state) => state.error);
  const lastUpdated = useJWTStore((state) => state.lastUpdated);
  const isAuthenticated = useJWTStore((state) => state.isAuthenticated);
  const isExpired = useJWTStore((state) => state.isExpired);
  const isValid = useJWTStore((state) => state.isValid);
  const status = useMemo(() => {
    if (isAuthenticated) return "authenticated";
    if (isLoading) return "loading";
    if (error) return "error";
    return "unauthenticated";
  }, [isAuthenticated, isLoading, error]);
  return {
    isInitialized,
    isLoading,
    error,
    lastUpdated,
    isAuthenticated,
    isExpired,
    isValid,
    status
  };
}, "useJWTStatus");
export {
  useJWT as a,
  useUser as b,
  usePermissions as c,
  useTokenExpiration as d,
  useJWTStatus as e,
  useJWTPayload as f,
  useAuth as u
};

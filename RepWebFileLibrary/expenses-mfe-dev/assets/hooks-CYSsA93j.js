import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { u as useJWTStore, j as jwtSelectors, e as ensureJWTInitialized } from "./axiosInstance-DN-x08fa.js";
const { useEffect, useMemo } = await importShared("react");
const useAuth = () => {
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
};
const useJWT = () => {
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
};
const useJWTPayload = () => {
  return useJWTStore((state) => state.payload);
};
const useUser = () => {
  return useJWTStore(jwtSelectors.user);
};
const usePermissions = () => {
  const user = useJWTStore((state) => state.user);
  const permissions = (user == null ? void 0 : user.permissions) || [];
  const roles = (user == null ? void 0 : user.roles) || [];
  const hasPermission = (permission) => {
    return permissions.includes(permission);
  };
  const hasRole = (role) => {
    return roles.includes(role);
  };
  const hasAnyPermission = (requiredPermissions) => {
    return requiredPermissions.some((permission) => permissions.includes(permission));
  };
  const hasAllPermissions = (requiredPermissions) => {
    return requiredPermissions.every((permission) => permissions.includes(permission));
  };
  const hasAnyRole = (requiredRoles) => {
    return requiredRoles.some((role) => roles.includes(role));
  };
  const hasAllRoles = (requiredRoles) => {
    return requiredRoles.every((role) => roles.includes(role));
  };
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
};
const useTokenExpiration = () => {
  const expiresAt = useJWTStore((state) => state.expiresAt);
  const isExpired = useJWTStore((state) => state.isExpired);
  return useMemo(() => ({
    expiresAt,
    isExpired
  }), [expiresAt, isExpired]);
};
const useJWTStatus = () => {
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
};
export {
  useJWT as a,
  useUser as b,
  usePermissions as c,
  useTokenExpiration as d,
  useJWTStatus as e,
  useJWTPayload as f,
  useAuth as u
};

import { c as createLucideIcon } from "./createLucideIcon-CWwrLivU.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { u as useJWTStore, j as jwtSelectors, e as ensureJWTInitialized } from "./axiosInstance-Cvzcyh16.js";
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
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
  const timeUntilExpiration = useJWTStore((state) => state.timeUntilExpiration);
  const isExpired = useJWTStore((state) => state.isExpired);
  return useMemo(() => ({
    expiresAt,
    timeUntilExpiration,
    isExpired,
    isExpiringSoon: timeUntilExpiration ? timeUntilExpiration <= 5 * 60 * 1e3 : false
  }), [expiresAt, timeUntilExpiration, isExpired]);
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
  Shield as S,
  useJWT as a,
  useUser as b,
  usePermissions as c,
  useTokenExpiration as d,
  useJWTStatus as e,
  useJWTPayload as f,
  useAuth as u
};

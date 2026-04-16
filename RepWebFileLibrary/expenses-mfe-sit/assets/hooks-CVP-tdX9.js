import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { u as useJWTStore, j as jwtSelectors, e as ensureJWTInitialized } from "./axiosInstance-BZOkNtMm.js";
var Role = /* @__PURE__ */ ((Role2) => {
  Role2["Employee"] = "Expense.Employee";
  Role2["Manager"] = "Expense.Manager";
  Role2["Admin"] = "Expense.Admin";
  Role2["AP"] = "Expense.AP";
  Role2["CardHolder"] = "Expense.CardHolder";
  return Role2;
})(Role || {});
const { useCallback, useMemo: useMemo$1 } = await importShared("react");
const EMPTY_ROLES = [];
const useRoles = () => {
  const roles = useJWTStore((state) => {
    var _a;
    return ((_a = state.user) == null ? void 0 : _a.roles) ?? EMPTY_ROLES;
  });
  const hasRole = useCallback(
    (role) => roles.includes(role),
    [roles]
  );
  const hasAnyRole = useCallback(
    (requiredRoles) => requiredRoles.some((role) => roles.includes(role)),
    [roles]
  );
  const hasAllRoles = useCallback(
    (requiredRoles) => requiredRoles.every((role) => roles.includes(role)),
    [roles]
  );
  return useMemo$1(() => ({
    roles,
    hasRole,
    hasAnyRole,
    hasAllRoles,
    isEmployee: roles.includes(Role.Employee),
    isManager: roles.includes(Role.Manager),
    isAdmin: roles.includes(Role.Admin),
    isAP: roles.includes(Role.AP),
    isCardHolder: roles.includes(Role.CardHolder)
  }), [roles, hasRole, hasAnyRole, hasAllRoles]);
};
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
export {
  Role as R,
  useRoles as a,
  useAuth as u
};

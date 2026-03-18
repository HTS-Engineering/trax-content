import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { u as useJWTStore } from "./axiosInstance-CHke4UEB.js";
var Role = /* @__PURE__ */ ((Role2) => {
  Role2["Employee"] = "Expense.Employee";
  Role2["Manager"] = "Expense.Manager";
  Role2["Admin"] = "Expense.Admin";
  Role2["AP"] = "Expense.AP";
  Role2["CardHolder"] = "Expense.CardHolder";
  return Role2;
})(Role || {});
const { useCallback, useMemo } = await importShared("react");
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
  return useMemo(() => ({
    roles,
    hasRole,
    hasAnyRole,
    isEmployee: roles.includes(Role.Employee),
    isManager: roles.includes(Role.Manager),
    isAdmin: roles.includes(Role.Admin),
    isAP: roles.includes(Role.AP),
    isCardHolder: roles.includes(Role.CardHolder)
  }), [roles, hasRole, hasAnyRole]);
};
export {
  Role as R,
  useRoles as u
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { Q as Qs, j as jsxRuntimeExports, Y as Yn } from "./index-CFVMMdzN.js";
import { u as useAuth } from "./hooks-CLpaRaPs.js";
import { t as toErrorText, E as ERROR_MESSAGES } from "./use-error-surface-ToUfTyG9.js";
import { u as useJWTStore } from "./store-Bn-YuemF.js";
import { N as Navigate } from "./chunk-62JRHF6Z-CLb1z6Nz.js";
var Role = /* @__PURE__ */ ((Role2) => {
  Role2["User"] = "Product.User";
  Role2["Admin"] = "Product.Admin";
  return Role2;
})(Role || {});
const { useCallback, useMemo } = await importShared("react");
const EMPTY_ROLES = [];
const useRoles = /* @__PURE__ */ __name(() => {
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
  return useMemo(() => ({
    roles,
    hasRole,
    hasAnyRole,
    hasAllRoles
  }), [roles, hasRole, hasAnyRole, hasAllRoles]);
}, "useRoles");
const TOAST_DURATION_MS = 5e3;
const DEDUPE_WINDOW_MS = 6e3;
const TOAST_CLASS_NAME = "max-w-md whitespace-pre-line";
const BURST_WINDOW_MS = 500;
const lastShownAt = /* @__PURE__ */ new Map();
function claimSlot(key, windowMs) {
  const now = Date.now();
  const previous = lastShownAt.get(key);
  if (previous !== void 0 && now - previous < windowMs) return false;
  for (const [seen, at] of lastShownAt) {
    if (now - at >= DEDUPE_WINDOW_MS) lastShownAt.delete(seen);
  }
  lastShownAt.set(key, now);
  return true;
}
__name(claimSlot, "claimSlot");
function show(text) {
  Qs.error(text, { duration: TOAST_DURATION_MS, className: TOAST_CLASS_NAME });
}
__name(show, "show");
function notifyPresentation(presentation, dedupe = true, windowMs = DEDUPE_WINDOW_MS) {
  if (presentation.isSilent) return null;
  if (dedupe && !claimSlot(presentation.dedupeKey, windowMs)) return null;
  show(toErrorText(presentation));
  return presentation;
}
__name(notifyPresentation, "notifyPresentation");
function notifyMessage(message) {
  show(message);
}
__name(notifyMessage, "notifyMessage");
const { useEffect } = await importShared("react");
const ProtectedRoute = /* @__PURE__ */ __name(({
  requiredRoles,
  children,
  redirectTo
}) => {
  const { isInitialized, token } = useAuth();
  const { hasAnyRole } = useRoles();
  const isSignedOut = isInitialized && token === null;
  const isDenied = isInitialized && token !== null && !hasAnyRole(requiredRoles);
  useEffect(() => {
    if (isSignedOut) notifyMessage(ERROR_MESSAGES.NOT_SIGNED_IN);
    else if (isDenied) notifyMessage(ERROR_MESSAGES.NO_PAGE_ACCESS);
  }, [isSignedOut, isDenied]);
  if (!isInitialized) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, {}) });
  }
  if (isSignedOut || isDenied) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: redirectTo, replace: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}, "ProtectedRoute");
export {
  BURST_WINDOW_MS as B,
  ProtectedRoute as P,
  Role as R,
  notifyPresentation as n,
  useRoles as u
};

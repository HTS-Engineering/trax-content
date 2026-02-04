import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { u as useJWTStore, j as jwtSelectors, e as ensureJWTInitialized, D as DOMEventNames, S as SessionStorageKeys, T as TokenPlaceholders, a as apiClient, b as axios } from "./axiosInstance-DZkaM2jN.js";
import { C as CONFIGURATION_ENDPOINTS } from "./configuration-BG7IXp_J.js";
import { c as createLucideIcon, u as us, f as Pr, H as Xe, P as Pe, L as At, T as Rn } from "./index.es-BBFLzT0B.js";
import { S as Shield } from "./shield-ESaJq8cK.js";
import { C as Clock } from "./clock-B8TfIrvV.js";
import { T as Trash2, S as Send } from "./trash-2-BJqTQAgj.js";
const __iconNode$6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$5);
const __iconNode$4 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
];
const Key = createLucideIcon("key", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
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
const jwtUtils = {
  /**
   * Emit JWT update event for Base System integration
   */
  emitJWTUpdateEvent: (eventName) => {
    const customEvent = new CustomEvent(eventName || DOMEventNames.JWT_TOKEN_UPDATED, {
      bubbles: true,
      cancelable: true
    });
    window.dispatchEvent(customEvent);
  },
  /**
   * Decode JWT payload without validation
   */
  decodeJWT: (token) => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) return null;
      const payload = parts[1];
      const decodedPayload = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
      return JSON.parse(decodedPayload);
    } catch {
      return null;
    }
  },
  /**
   * Check if JWT is expired
   */
  isJWTExpired: (token) => {
    const payload = jwtUtils.decodeJWT(token);
    if (!payload || !payload.exp) return true;
    return payload.exp < Math.floor(Date.now() / 1e3);
  }
};
const React = await importShared("react");
const { useState } = React;
const JWTDemo = () => {
  var _a;
  const [testToken, setTestToken] = useState("");
  const [showTokens, setShowTokens] = useState(false);
  const [storageValue, setStorageValue] = useState(
    () => sessionStorage.getItem(SessionStorageKeys.JWT_TOKEN) || "null"
  );
  const [apiResponse, setApiResponse] = useState({ status: null, data: null, error: null, loading: false });
  const { isAuthenticated, isLoading, token } = useAuth();
  const { setToken, clearToken } = useJWT();
  const user = useUser();
  const { permissions, roles } = usePermissions();
  const tokenExpiration = useTokenExpiration();
  const jwtStatus = useJWTStatus();
  const payload = useJWTPayload();
  const createDemoToken = () => {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload2 = btoa(JSON.stringify({
      sub: "demo-user-123",
      name: "Demo User",
      email: "demo@trax.com",
      roles: ["user", "manager"],
      permissions: ["read:expenses", "write:expenses", "admin:config"],
      iat: Math.floor(Date.now() / 1e3),
      exp: Math.floor(Date.now() / 1e3) + 3600
      // 1 hour
    }));
    const signature = "demo-signature";
    return `${header}.${payload2}.${signature}`;
  };
  const handleSetDemoToken = () => {
    const demoToken = createDemoToken();
    setToken(demoToken);
    setTestToken(demoToken);
    setStorageValue(demoToken);
  };
  const handleSetCustomToken = () => {
    if (testToken.trim()) {
      sessionStorage.setItem(SessionStorageKeys.JWT_TOKEN, testToken.trim());
      setStorageValue(testToken.trim());
    }
  };
  const handleClearToken = () => {
    clearToken();
    setTestToken("");
    setStorageValue("null");
  };
  const handleEmitEvent = () => {
    jwtUtils.emitJWTUpdateEvent();
    setStorageValue(sessionStorage.getItem(SessionStorageKeys.JWT_TOKEN) || "null");
  };
  const handleTestAPI = async () => {
    var _a2, _b, _c;
    setApiResponse({ status: null, data: null, error: null, loading: true });
    try {
      const response = await apiClient.get(CONFIGURATION_ENDPOINTS.LOGICAL_COMPANIES);
      setApiResponse({
        status: response.status,
        data: response.data,
        error: null,
        loading: false
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setApiResponse({
          status: ((_a2 = error.response) == null ? void 0 : _a2.status) || null,
          data: ((_b = error.response) == null ? void 0 : _b.data) ?? {
            message: error.message,
            code: error.code,
            url: (_c = error.config) == null ? void 0 : _c.url
          },
          error: error.message,
          loading: false
        });
      } else {
        const errorData = error instanceof Error ? { name: error.name, message: error.message, stack: error.stack } : error;
        setApiResponse({
          status: null,
          data: errorData,
          error: error instanceof Error ? error.message : "Unknown error",
          loading: false
        });
      }
    }
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const getStatusBadgeProps = () => {
    if (isLoading) return { variant: "secondary", children: "Loading" };
    if (isAuthenticated) return { variant: "success", children: "Authenticated" };
    return { variant: "outline", children: "Not Authenticated" };
  };
  const formatToken = (token2) => {
    if (!token2 || token2 === TokenPlaceholders.NO_TOKEN_AVAILABLE) {
      return TokenPlaceholders.NO_TOKEN_AVAILABLE;
    }
    if (showTokens) {
      return token2;
    }
    return `${token2.substring(0, 20)}...${token2.substring(token2.length - 10)}`;
  };
  const getTimeProgress = () => {
    if (!tokenExpiration.timeUntilExpiration || !tokenExpiration.expiresAt) {
      return 0;
    }
    const totalTime = 3600 * 1e3;
    const remainingTime = tokenExpiration.timeUntilExpiration;
    return Math.max(0, remainingTime / totalTime * 100);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto p-6 space-y-6 max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8 text-trax-blue-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "JWT Authentication Testing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Test and monitor JWT authentication system functionality" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-trax-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { ...getStatusBadgeProps() })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-orange-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Expiration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: tokenExpiration.expiresAt ? `${Math.floor((tokenExpiration.timeUntilExpiration || 0) / 1e3 / 60)}m` : "N/A" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5 text-green-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-600", children: "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: (user == null ? void 0 : user.name) || "Not Available" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(us, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-5 w-5 text-purple-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Permissions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: permissions.length })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(us, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-5 w-5" }),
          "Token Information"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: showTokens,
              onChange: (e) => setShowTokens(e.target.checked),
              className: "rounded border-gray-300 text-trax-blue-600 focus:ring-trax-blue-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700", children: "Show tokens" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Current Token" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Xe,
              {
                value: formatToken(token),
                readOnly: true,
                className: "font-mono text-xs"
              }
            ),
            token && token !== TokenPlaceholders.NO_TOKEN_AVAILABLE && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pe,
              {
                variant: "outline",
                size: "sm",
                onClick: () => copyToClipboard(token),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        tokenExpiration.expiresAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Time Until Expiration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(At, { value: getTimeProgress(), className: "h-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
              "Expires: ",
              tokenExpiration.expiresAt.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            jwtStatus.isValid ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "Valid: ",
              jwtStatus.isValid ? "Yes" : "No"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            jwtStatus.isExpired ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "Expired: ",
              jwtStatus.isExpired ? "Yes" : "No"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            jwtStatus.isInitialized ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-yellow-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "Initialized: ",
              jwtStatus.isInitialized ? "Yes" : "No"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            jwtStatus.lastUpdated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-blue-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-gray-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "Updated: ",
              ((_a = jwtStatus.lastUpdated) == null ? void 0 : _a.toLocaleTimeString()) || "Never"
            ] })
          ] })
        ] })
      ] })
    ] }),
    user && /* @__PURE__ */ jsxRuntimeExports.jsxs(us, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }),
        "User Information"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "User ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Xe, { value: user.id || "N/A", readOnly: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Xe, { value: user.name || "N/A", readOnly: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Xe, { value: user.email || "N/A", readOnly: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium text-gray-700", children: [
              "Roles (",
              roles.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1", children: roles.length > 0 ? roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: "project", className: "font-mono text-xs", children: role }, role)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500", children: "No roles assigned" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium text-gray-700", children: [
              "Permissions (",
              permissions.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1", children: permissions.length > 0 ? permissions.map((permission) => /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: "team", className: "font-mono text-xs", children: permission }, permission)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500", children: "No permissions granted" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Decoded Payload (JSON)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Rn,
          {
            value: payload ? JSON.stringify(payload, null, 2) : "No payload",
            readOnly: true,
            className: "font-mono text-xs mt-1",
            rows: 12
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(us, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-5 w-5" }),
        "Token Management"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Pe, { onClick: handleSetDemoToken, className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-4 w-4" }),
            "Set Demo Token"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Pe, { variant: "destructive", onClick: handleClearToken, className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
            "Clear Token"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Pe,
            {
              variant: "outline",
              onClick: handleTestAPI,
              disabled: apiResponse.loading,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                apiResponse.loading ? "Loading..." : "Test API Request"
              ]
            }
          )
        ] }),
        (apiResponse.status || apiResponse.error) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "API Response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pr, { variant: apiResponse.error ? "destructive" : "success", children: apiResponse.status || "Error" })
          ] }),
          apiResponse.error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm", children: apiResponse.error }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Error Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Rn,
                {
                  value: JSON.stringify(apiResponse.data, null, 2),
                  readOnly: true,
                  className: "font-mono text-xs mt-1",
                  rows: 8
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Rn,
            {
              value: JSON.stringify(apiResponse.data, null, 2),
              readOnly: true,
              className: "font-mono text-xs",
              rows: 10
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Custom JWT Token" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Rn,
            {
              value: testToken,
              onChange: (e) => setTestToken(e.target.value),
              placeholder: "Paste your JWT token here...",
              className: "font-mono text-sm",
              rows: 3
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pe,
              {
                onClick: () => handleSetCustomToken(),
                disabled: !testToken.trim(),
                className: "w-full",
                children: "Set Custom Token"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This will Save token to Session Storage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'For triggering state with new token from Session Storage click "Emit JWT Update Event"' })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(us, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
        "DOM Event Testing"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Base System Integration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-1", children: [
              "Test integration with Base System through DOM events. The system listens for",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "mx-1 px-1 bg-blue-200 rounded", children: "trax-jwt-token-updated" }),
              " events."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700 mb-2 block", children: "Event Structure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 p-3 rounded-lg border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs text-gray-700", children: JSON.stringify({
              type: "trax-jwt-token-updated",
              bubbles: true,
              cancelable: true
            }, null, 2) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pe, { onClick: handleEmitEvent, className: "w-full", children: "Emit JWT Update Event" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This event triggers the system to read JWT from Session Storage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• The event itself doesn't contain token data" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "• Event name: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-gray-200 px-1 rounded", children: "trax-jwt-token-updated" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(us, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5" }),
        "Session Storage"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Storage Key" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Xe,
            {
              value: SessionStorageKeys.JWT_TOKEN,
              readOnly: true,
              className: "font-mono text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Current Value" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Rn,
            {
              value: storageValue,
              readOnly: true,
              className: "font-mono text-xs",
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Development Mode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Open browser console to see JWT operation logs and API request headers. JWT headers are automatically added to all API requests." })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  JWTDemo,
  JWTDemo as default
};

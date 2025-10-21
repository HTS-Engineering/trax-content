import { g as getEndpointErrorProbability } from "./config-BPfAis3L.js";
const DEFAULT_CONFIG = {
  enabled: true,
  globalProbability: 20,
  endpointOverrides: {}
};
const getErrorConfig = () => {
  if (typeof window !== "undefined" && window.__MOCK_ERROR_CONFIG__) {
    return window.__MOCK_ERROR_CONFIG__;
  }
  return DEFAULT_CONFIG;
};
const ERROR_SCENARIOS = {
  INTERNAL_SERVER_ERROR: {
    status: 500,
    statusText: "Internal Server Error",
    message: "An unexpected error occurred on the server. Please try again.",
    code: "INTERNAL_SERVER_ERROR"
  },
  SERVICE_UNAVAILABLE: {
    status: 503,
    statusText: "Service Unavailable",
    message: "The service is temporarily unavailable. Please try again later.",
    code: "SERVICE_UNAVAILABLE"
  },
  BAD_REQUEST: {
    status: 400,
    statusText: "Bad Request",
    message: "The request was invalid. Please check your data and try again.",
    code: "BAD_REQUEST"
  },
  VALIDATION_ERROR: {
    status: 422,
    statusText: "Unprocessable Entity",
    message: "Validation failed. Please check your input.",
    code: "VALIDATION_ERROR"
  },
  NETWORK_ERROR: {
    status: 0,
    statusText: "Network Error",
    message: "Network connection failed. Please check your internet connection.",
    code: "NETWORK_ERROR"
  }
};
const ERROR_WEIGHTS = [
  { scenario: ERROR_SCENARIOS.INTERNAL_SERVER_ERROR, weight: 40 },
  { scenario: ERROR_SCENARIOS.SERVICE_UNAVAILABLE, weight: 30 },
  { scenario: ERROR_SCENARIOS.BAD_REQUEST, weight: 15 },
  { scenario: ERROR_SCENARIOS.VALIDATION_ERROR, weight: 10 },
  { scenario: ERROR_SCENARIOS.NETWORK_ERROR, weight: 5 }
];
const selectRandomError = () => {
  const totalWeight = ERROR_WEIGHTS.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  for (const item of ERROR_WEIGHTS) {
    random -= item.weight;
    if (random <= 0) {
      return item.scenario;
    }
  }
  return ERROR_SCENARIOS.INTERNAL_SERVER_ERROR;
};
const shouldSimulateError = (endpoint) => {
  var _a;
  const config = getErrorConfig();
  if (!config.enabled) {
    console.log("🔵 Error simulation disabled");
    return false;
  }
  const isForced = config.globalProbability === 100 && !Object.keys(config.endpointOverrides || {}).length;
  const probability = isForced ? 100 : ((_a = config.endpointOverrides) == null ? void 0 : _a[endpoint]) ?? getEndpointErrorProbability(endpoint) ?? config.globalProbability;
  const random = Math.random() * 100;
  const shouldError = random < probability;
  return shouldError;
};
const generateMockError = (endpoint) => {
  const scenario = selectRandomError();
  return {
    ...scenario,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
};
const createAxiosError = (endpoint) => {
  const mockError = generateMockError();
  return {
    response: {
      data: {
        error: mockError.message,
        code: mockError.code,
        timestamp: mockError.timestamp
      },
      status: mockError.status,
      statusText: mockError.statusText,
      headers: {}
    },
    message: mockError.message,
    isAxiosError: true
  };
};
export {
  createAxiosError as c,
  generateMockError as g,
  shouldSimulateError as s
};

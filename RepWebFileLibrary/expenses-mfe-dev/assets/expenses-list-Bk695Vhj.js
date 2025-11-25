import { g as getEndpointErrorProbability } from "./config-BXYbqO6g.js";
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
const errorDecisionCache = /* @__PURE__ */ new Map();
const CACHE_DURATION = 5e3;
const shouldSimulateError = (endpoint) => {
  var _a;
  const config = getErrorConfig();
  if (!config.enabled) {
    console.log("🔵 Error simulation disabled");
    return false;
  }
  const cached = errorDecisionCache.get(endpoint);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.shouldError;
  }
  const isForced = config.globalProbability === 100 && !Object.keys(config.endpointOverrides || {}).length;
  const probability = isForced ? 100 : ((_a = config.endpointOverrides) == null ? void 0 : _a[endpoint]) ?? getEndpointErrorProbability(endpoint) ?? config.globalProbability;
  const random = Math.random() * 100;
  const shouldError = random < probability;
  errorDecisionCache.set(endpoint, { shouldError, timestamp: Date.now() });
  return shouldError;
};
const generateMockError = (endpoint) => {
  const scenario = selectRandomError();
  return {
    ...scenario,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
};
const createAxiosError = (endpoint, config) => {
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
      headers: {},
      config: config || {}
    },
    config: config || {},
    message: mockError.message,
    code: mockError.code,
    isAxiosError: true,
    name: "AxiosError",
    toJSON: () => ({})
  };
};
const mockExpenseDrafts = [
  {
    id: "10150",
    status: "draft",
    data: {
      expenseDate: "2025-11-15T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Best Buy",
      businessPurpose: "Computer accessories",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "145.83",
      totalAmount: "175.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-11-15T10:00:00Z",
    updatedAt: "2025-11-15T10:00:00Z",
    userId: "user-001"
  },
  {
    id: "10148",
    status: "draft",
    data: {
      expenseDate: "2025-11-14T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Moxies",
      businessPurpose: "Client lunch",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "83.33",
      totalAmount: "100.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    createdAt: "2025-11-14T14:30:00Z",
    updatedAt: "2025-11-14T14:30:00Z",
    userId: "user-001"
  },
  {
    id: "10145",
    status: "draft",
    data: {
      expenseDate: "2025-11-12T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Starbucks",
      businessPurpose: "Team meeting",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "41.67",
      totalAmount: "50.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-11-12T09:15:00Z",
    updatedAt: "2025-11-12T09:15:00Z",
    userId: "user-001"
  },
  {
    id: "10142",
    status: "draft",
    data: {
      expenseDate: "2025-11-10T00:00:00Z",
      expenseType: "Parking",
      vendor: "Imperial Parking",
      businessPurpose: "Office parking",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "29.17",
      totalAmount: "35.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    createdAt: "2025-11-10T18:00:00Z",
    updatedAt: "2025-11-10T18:00:00Z",
    userId: "user-001"
  },
  {
    id: "10140",
    status: "draft",
    data: {
      expenseDate: "2025-11-08T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Rogers",
      businessPurpose: "Business phone",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "54.17",
      totalAmount: "65.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-11-08T11:20:00Z",
    updatedAt: "2025-11-08T11:20:00Z",
    userId: "user-001"
  },
  {
    id: "10138",
    status: "draft",
    data: {
      expenseDate: "2025-11-06T00:00:00Z",
      expenseType: "Materials",
      vendor: "Canadian Tire",
      businessPurpose: "Workshop supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "208.33",
      totalAmount: "250.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-11-06T16:45:00Z",
    updatedAt: "2025-11-06T16:45:00Z",
    userId: "user-001"
  },
  {
    id: "10130",
    status: "draft",
    data: {
      expenseDate: "2025-10-30T00:00:00Z",
      expenseType: "Materials",
      vendor: "Home Depot",
      businessPurpose: "Office supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "62.17",
      totalAmount: "74.60",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-30T14:30:00Z",
    updatedAt: "2025-10-30T14:30:00Z",
    userId: "user-001"
  },
  {
    id: "10121",
    status: "draft",
    data: {
      expenseDate: "2025-10-28T00:00:00Z",
      expenseType: "Materials",
      vendor: "Amazon",
      businessPurpose: "Project materials",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "1028.80",
      totalAmount: "1234.56",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-28T09:15:00Z",
    updatedAt: "2025-10-28T09:15:00Z",
    userId: "user-001"
  },
  {
    id: "10118",
    status: "draft",
    data: {
      expenseDate: "2025-10-27T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Cineplex",
      businessPurpose: "Team building event",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "166.67",
      totalAmount: "200.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-27T20:00:00Z",
    updatedAt: "2025-10-27T20:00:00Z",
    userId: "user-001"
  },
  {
    id: "10098",
    status: "draft",
    data: {
      expenseDate: "2025-10-26T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Tim Hortons",
      businessPurpose: "Client meeting",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "15.92",
      totalAmount: "19.10",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    createdAt: "2025-10-26T12:45:00Z",
    updatedAt: "2025-10-26T12:45:00Z",
    userId: "user-001"
  },
  {
    id: "10095",
    status: "draft",
    data: {
      expenseDate: "2025-10-25T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Office Depot",
      businessPurpose: "Printer paper and toner",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "87.50",
      totalAmount: "105.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-25T13:30:00Z",
    updatedAt: "2025-10-25T13:30:00Z",
    userId: "user-001"
  },
  {
    id: "10092",
    status: "draft",
    data: {
      expenseDate: "2025-10-24T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Bell",
      businessPurpose: "Monthly phone bill",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "37.67",
      totalAmount: "45.20",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-24T16:20:00Z",
    updatedAt: "2025-10-24T16:20:00Z",
    userId: "user-001"
  },
  {
    id: "10090",
    status: "draft",
    data: {
      expenseDate: "2025-10-20T00:00:00Z",
      expenseType: "Parking",
      vendor: "GreenP",
      businessPurpose: "Client visit",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "20.83",
      totalAmount: "25.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-20T11:00:00Z",
    updatedAt: "2025-10-20T11:00:00Z",
    userId: "user-001"
  },
  {
    id: "10088",
    status: "draft",
    data: {
      expenseDate: "2025-10-19T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Subway",
      businessPurpose: "Working lunch",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "12.50",
      totalAmount: "15.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    createdAt: "2025-10-19T13:15:00Z",
    updatedAt: "2025-10-19T13:15:00Z",
    userId: "user-001"
  },
  {
    id: "10085",
    status: "draft",
    data: {
      expenseDate: "2025-10-18T00:00:00Z",
      expenseType: "Marketing",
      vendor: "Google Ads",
      businessPurpose: "Online advertising",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "416.67",
      totalAmount: "500.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-18T15:00:00Z",
    updatedAt: "2025-10-18T15:00:00Z",
    userId: "user-001"
  },
  {
    id: "10082",
    status: "draft",
    data: {
      expenseDate: "2025-10-18T00:00:00Z",
      expenseType: "Parking",
      vendor: "GreenP",
      businessPurpose: "Downtown meeting",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "20.83",
      totalAmount: "25.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-18T10:30:00Z",
    updatedAt: "2025-10-18T10:30:00Z",
    userId: "user-001"
  },
  {
    id: "10080",
    status: "draft",
    data: {
      expenseDate: "2025-10-17T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Grand & Toy",
      businessPurpose: "Desk organizers",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "62.50",
      totalAmount: "75.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    createdAt: "2025-10-17T14:00:00Z",
    updatedAt: "2025-10-17T14:00:00Z",
    userId: "user-001"
  },
  {
    id: "10078",
    status: "draft",
    data: {
      expenseDate: "2025-10-16T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Telus",
      businessPurpose: "Mobile data plan",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "45.83",
      totalAmount: "55.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    createdAt: "2025-10-16T11:30:00Z",
    updatedAt: "2025-10-16T11:30:00Z",
    userId: "user-001"
  }
];
const mockSubmittedExpenses = [
  {
    id: "10146",
    status: "submitted",
    data: {
      expenseDate: "2025-11-13T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Boston Pizza",
      businessPurpose: "Team lunch",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "125.00",
      totalAmount: "150.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-11-14T09:00:00Z",
    createdAt: "2025-11-13T14:00:00Z",
    updatedAt: "2025-11-14T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "10143",
    status: "approved",
    data: {
      expenseDate: "2025-11-11T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Costco",
      businessPurpose: "Office snacks and supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "158.33",
      totalAmount: "190.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-11-12T08:00:00Z",
    createdAt: "2025-11-11T17:30:00Z",
    updatedAt: "2025-11-13T10:15:00Z",
    approvedAt: "2025-11-13T10:15:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10141",
    status: "submitted",
    data: {
      expenseDate: "2025-11-09T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Second City",
      businessPurpose: "Client entertainment",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "291.67",
      totalAmount: "350.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    submittedAt: "2025-11-10T09:30:00Z",
    createdAt: "2025-11-09T22:00:00Z",
    updatedAt: "2025-11-10T09:30:00Z",
    userId: "user-001"
  },
  {
    id: "10139",
    status: "approved",
    data: {
      expenseDate: "2025-11-07T00:00:00Z",
      expenseType: "Marketing",
      vendor: "Facebook Ads",
      businessPurpose: "Social media campaign",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "333.33",
      totalAmount: "400.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-11-08T10:00:00Z",
    createdAt: "2025-11-07T16:00:00Z",
    updatedAt: "2025-11-09T14:20:00Z",
    approvedAt: "2025-11-09T14:20:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10135",
    status: "approved",
    data: {
      expenseDate: "2025-11-04T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "The Keg",
      businessPurpose: "Business dinner",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "187.50",
      totalAmount: "225.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-11-05T09:00:00Z",
    createdAt: "2025-11-04T21:00:00Z",
    updatedAt: "2025-11-06T11:00:00Z",
    approvedAt: "2025-11-06T11:00:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10132",
    status: "rejected",
    data: {
      expenseDate: "2025-11-02T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Steam Games",
      businessPurpose: "Team bonding",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "83.33",
      totalAmount: "100.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    submittedAt: "2025-11-03T10:00:00Z",
    createdAt: "2025-11-02T15:30:00Z",
    updatedAt: "2025-11-04T09:15:00Z",
    rejectedAt: "2025-11-04T09:15:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10125",
    status: "approved",
    data: {
      expenseDate: "2025-10-29T00:00:00Z",
      expenseType: "Parking",
      vendor: "Toronto Parking Authority",
      businessPurpose: "All-day parking",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "41.67",
      totalAmount: "50.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    submittedAt: "2025-10-30T08:30:00Z",
    createdAt: "2025-10-29T18:00:00Z",
    updatedAt: "2025-10-31T10:00:00Z",
    approvedAt: "2025-10-31T10:00:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10120",
    status: "submitted",
    data: {
      expenseDate: "2025-10-27T00:00:00Z",
      expenseType: "Materials",
      vendor: "Walmart",
      businessPurpose: "Event supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "104.17",
      totalAmount: "125.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-28T09:15:00Z",
    createdAt: "2025-10-27T15:00:00Z",
    updatedAt: "2025-10-28T09:15:00Z",
    userId: "user-001"
  },
  {
    id: "10115",
    status: "approved",
    data: {
      expenseDate: "2025-10-25T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Fido",
      businessPurpose: "Business phone plan",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "70.83",
      totalAmount: "85.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-26T08:00:00Z",
    createdAt: "2025-10-25T16:30:00Z",
    updatedAt: "2025-10-27T11:20:00Z",
    approvedAt: "2025-10-27T11:20:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10110",
    status: "cancelled",
    data: {
      expenseDate: "2025-10-22T00:00:00Z",
      expenseType: "Materials",
      vendor: "Shoppers Drug Mart",
      businessPurpose: "Personal items",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "20.83",
      totalAmount: "25.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket"
    },
    submittedAt: "2025-10-23T10:00:00Z",
    createdAt: "2025-10-22T12:30:00Z",
    updatedAt: "2025-10-24T14:00:00Z",
    cancelledAt: "2025-10-24T14:00:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10105",
    status: "approved",
    data: {
      expenseDate: "2025-10-20T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Ikea",
      businessPurpose: "Desk accessories",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "129.17",
      totalAmount: "155.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-21T09:00:00Z",
    createdAt: "2025-10-20T17:00:00Z",
    updatedAt: "2025-10-22T10:30:00Z",
    approvedAt: "2025-10-22T10:30:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10100",
    status: "submitted",
    data: {
      expenseDate: "2025-10-18T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Blue Jays",
      businessPurpose: "Client event tickets",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "375.00",
      totalAmount: "450.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-19T09:00:00Z",
    createdAt: "2025-10-18T20:30:00Z",
    updatedAt: "2025-10-19T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "10076",
    status: "submitted",
    data: {
      expenseDate: "2025-10-16T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "JOEY",
      businessPurpose: "Team dinner",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "206.00",
      totalAmount: "247.20",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-17T09:00:00Z",
    createdAt: "2025-10-16T19:30:00Z",
    updatedAt: "2025-10-17T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "10074",
    status: "submitted",
    data: {
      expenseDate: "2025-10-15T00:00:00Z",
      expenseType: "Offices & General",
      vendor: "FedEx",
      businessPurpose: "Document shipping",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "125.63",
      totalAmount: "150.75",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-16T10:15:00Z",
    createdAt: "2025-10-15T14:45:00Z",
    updatedAt: "2025-10-16T10:15:00Z",
    userId: "user-001"
  },
  {
    id: "10072",
    status: "approved",
    data: {
      expenseDate: "2025-10-12T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Staples",
      businessPurpose: "Office materials",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "100.00",
      totalAmount: "120.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-13T08:30:00Z",
    createdAt: "2025-10-12T16:00:00Z",
    updatedAt: "2025-10-14T11:20:00Z",
    approvedAt: "2025-10-14T11:20:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10063",
    status: "approved",
    data: {
      expenseDate: "2025-10-10T00:00:00Z",
      expenseType: "Marketing",
      vendor: "LinkedIn",
      businessPurpose: "Advertisement campaign",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "200.00",
      totalAmount: "240.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-11T09:00:00Z",
    createdAt: "2025-10-10T17:30:00Z",
    updatedAt: "2025-10-13T14:15:00Z",
    approvedAt: "2025-10-13T14:15:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10054",
    status: "rejected",
    data: {
      expenseDate: "2025-10-09T00:00:00Z",
      expenseType: "Marketing",
      vendor: "LinkedIn",
      businessPurpose: "Personal advertisement",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "200.00",
      totalAmount: "240.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-10T08:00:00Z",
    createdAt: "2025-10-09T15:00:00Z",
    updatedAt: "2025-10-11T10:30:00Z",
    rejectedAt: "2025-10-11T10:30:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10031",
    status: "cancelled",
    data: {
      expenseDate: "2025-10-04T00:00:00Z",
      expenseType: "Parking",
      vendor: "GreenP",
      businessPurpose: "Downtown parking",
      expenseLocation: "Calgary, AB",
      expenseDescription: "",
      netAmount: "8.33",
      totalAmount: "10.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corp Card - CAD"
    },
    submittedAt: "2025-10-05T09:00:00Z",
    createdAt: "2025-10-04T12:00:00Z",
    updatedAt: "2025-10-06T15:20:00Z",
    cancelledAt: "2025-10-06T15:20:00Z",
    userId: "user-001",
    approver: "manager-001"
  }
];
const mockMileageDrafts = [
  {
    id: "20135",
    status: "draft",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-11-01T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-11-15T00:00:00Z")
      },
      totalDistance: "100",
      ratePerUnit: "0.525",
      rateUnit: "km",
      reimbursableAmount: "52.50",
      businessPurpose: "Multiple client meetings",
      expenseDescription: "",
      costAllocations: []
    },
    createdAt: "2025-11-01T08:00:00Z",
    updatedAt: "2025-11-15T18:00:00Z",
    userId: "user-001"
  },
  {
    id: "10097",
    status: "draft",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-10-25T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-10-27T00:00:00Z")
      },
      totalDistance: "100",
      ratePerUnit: "0.525",
      rateUnit: "km",
      reimbursableAmount: "28.75",
      businessPurpose: "Supplier visits",
      expenseDescription: "",
      costAllocations: []
    },
    createdAt: "2025-10-25T09:00:00Z",
    updatedAt: "2025-10-27T17:00:00Z",
    userId: "user-001"
  },
  {
    id: "10087",
    status: "draft",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-10-20T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-10-31T00:00:00Z")
      },
      totalDistance: "100",
      ratePerUnit: "0.525",
      rateUnit: "km",
      reimbursableAmount: "36.00",
      businessPurpose: "Client visits",
      expenseDescription: "",
      costAllocations: []
    },
    createdAt: "2025-10-20T08:00:00Z",
    updatedAt: "2025-10-20T08:00:00Z",
    userId: "user-001"
  }
];
const mockSubmittedMileage = [];
export {
  mockExpenseDrafts as a,
  mockSubmittedMileage as b,
  mockMileageDrafts as c,
  createAxiosError as d,
  generateMockError as g,
  mockSubmittedExpenses as m,
  shouldSimulateError as s
};

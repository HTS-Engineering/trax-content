import { F as FILE_ENDPOINTS, a as ENDPOINT_REGEX } from "./endpoints-B6EuaDvp.js";
import { e as RouteCompanyIds } from "./routes-BvbgC800.js";
const MOCKED_ENDPOINT_PATHS = [
  // File upload endpoints - currently mocked (no backend implementation yet)
  FILE_ENDPOINTS.RECEIPTS_UPLOAD,
  FILE_ENDPOINTS.SUPPORTING_UPLOAD,
  // Storage endpoint - currently mocked
  "https://storage.expensesapp.com/receipts"
  // Configuration endpoints - REMOVED from mocks (using real backend)
  // CONFIGURATION_ENDPOINTS.LOGICAL_COMPANIES,  // ✓ Real backend
  // CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_CREATE('*'),  // ✓ Real backend
  // To add more mocks, import from endpoints.ts and add here
];
const MOCKED_ENDPOINT_PATTERNS = [
  ENDPOINT_REGEX.FILES_RECEIPTS,
  // Matches all /files/receipts/* paths
  ENDPOINT_REGEX.FILES_SUPPORTING,
  // Matches all /files/supporting/* paths
  ENDPOINT_REGEX.FILES_STORAGE,
  // Matches storage URLs
  // Business Purpose endpoints - MOCKED (no backend implementation yet)
  ENDPOINT_REGEX.BUSINESS_PURPOSES
  // Matches /companies/*/business-purposes and /business-purposes/*
  // Configuration endpoints - REMOVED (using real backend)
  // ENDPOINT_REGEX.CONFIG_EXPENSE_TYPES,  // ✓ Real backend
  // ENDPOINT_REGEX.CONFIG_LOGICAL_COMPANIES,  // ✓ Real backend
];
const shouldMockEndpoint = (url) => {
  const urlString = typeof url === "string" ? url : url.toString();
  const hasExactMatch = MOCKED_ENDPOINT_PATHS.some((path) => urlString.includes(path));
  if (hasExactMatch) {
    return true;
  }
  const hasPatternMatch = MOCKED_ENDPOINT_PATTERNS.some((pattern) => pattern.test(urlString));
  return hasPatternMatch;
};
const mockBusinessPurposes = {
  // Real backend company IDs (from logical-companies API)
  "htson": [
    {
      id: "bp-htson-1",
      isActive: true,
      businessPurpose: "Heat Transfer Sales Meeting",
      description: "Customer acquisition and sales activities",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-htson-2",
      isActive: true,
      businessPurpose: "Technical Consultation",
      description: "Client technical consultation and support",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-htson-3",
      isActive: true,
      businessPurpose: "Equipment Installation",
      description: "On-site equipment installation and setup",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-htson-4",
      isActive: true,
      businessPurpose: "Training Session",
      description: "Client and employee training programs",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-htson-5",
      isActive: false,
      businessPurpose: "Trade Show",
      description: "Industry trade show attendance (inactive)",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    }
  ],
  "kore": [
    {
      id: "bp-kore-1",
      isActive: true,
      businessPurpose: "Client Meeting",
      description: "General client meetings and consultations",
      created: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
    },
    {
      id: "bp-kore-2",
      isActive: true,
      businessPurpose: "Site Inspection",
      description: "On-site facility and equipment inspection",
      created: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
    },
    {
      id: "bp-kore-3",
      isActive: true,
      businessPurpose: "Project Planning",
      description: "Project planning and coordination meetings",
      created: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
    }
  ],
  // Legacy RouteCompanyIds (for backwards compatibility)
  [RouteCompanyIds.DirectExpansion]: [
    {
      id: "bp-001-1",
      isActive: true,
      businessPurpose: "Sales Meeting",
      description: "Customer acquisition and sales activities",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-001-2",
      isActive: true,
      businessPurpose: "Product Development",
      description: "Product research and development",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-001-3",
      isActive: true,
      businessPurpose: "Internal Training",
      description: "Employee training and development",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-001-4",
      isActive: true,
      businessPurpose: "Conference Attendance",
      description: "Industry conferences and events",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "bp-001-5",
      isActive: true,
      businessPurpose: "Client Support",
      description: "Customer support and service delivery",
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    }
  ],
  [RouteCompanyIds.HeatTransfer]: [
    //test empty business purpose
    // {
    //   id: 'bp-002-1',
    //   isActive: true,
    //   businessPurpose: 'Sprint Planning',
    //   description: 'Agile sprint planning and retrospectives',
    //   created: new Date('2024-01-15T00:00:00Z'),
    //   modified: new Date('2024-01-15T00:00:00Z'),
    // },
    // {
    //   id: 'bp-002-2',
    //   isActive: true,
    //   businessPurpose: 'User Research',
    //   description: 'User experience research and testing',
    //   created: new Date('2024-01-15T00:00:00Z'),
    //   modified: new Date('2024-01-15T00:00:00Z'),
    // },
    // {
    //   id: 'bp-002-3',
    //   isActive: true,
    //   businessPurpose: 'Hackathon',
    //   description: 'Innovation events and hackathons',
    //   created: new Date('2024-01-15T00:00:00Z'),
    //   modified: new Date('2024-01-15T00:00:00Z'),
    // },
    // {
    //   id: 'bp-002-4',
    //   isActive: true,
    //   businessPurpose: 'Partnership Meeting',
    //   description: 'Strategic partnership discussions',
    //   created: new Date('2024-01-15T00:00:00Z'),
    //   modified: new Date('2024-01-15T00:00:00Z'),
    // },
  ],
  [RouteCompanyIds.OslinNation]: [
    {
      id: "bp-003-1",
      isActive: true,
      businessPurpose: "Client Workshop",
      description: "Client strategy and planning workshops",
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "bp-003-2",
      isActive: true,
      businessPurpose: "Project Kickoff",
      description: "New project initiation meetings",
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "bp-003-3",
      isActive: true,
      businessPurpose: "Audit Review",
      description: "Financial and compliance audits",
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "bp-003-4",
      isActive: true,
      businessPurpose: "Market Research",
      description: "Market analysis and competitive research",
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "bp-003-5",
      isActive: true,
      businessPurpose: "Executive Briefing",
      description: "C-level executive meetings",
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "bp-003-6",
      isActive: false,
      businessPurpose: "Team Offsite",
      description: "Team building and strategy offsites",
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    }
  ],
  [RouteCompanyIds.TritonThermal]: [
    {
      id: "bp-004-1",
      isActive: true,
      businessPurpose: "Thermal Analysis",
      description: "Thermal system analysis and optimization",
      created: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z")
    },
    {
      id: "bp-004-2",
      isActive: true,
      businessPurpose: "Client Consulting",
      description: "Thermal management consulting services",
      created: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z")
    },
    {
      id: "bp-004-3",
      isActive: true,
      businessPurpose: "R&D Testing",
      description: "Research and development thermal testing",
      created: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z")
    }
  ],
  [RouteCompanyIds.VrfServices]: [
    {
      id: "bp-005-1",
      isActive: true,
      businessPurpose: "VRF Installation",
      description: "Variable refrigerant flow system installation",
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    },
    {
      id: "bp-005-2",
      isActive: true,
      businessPurpose: "Maintenance Service",
      description: "Preventive and corrective maintenance",
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    },
    {
      id: "bp-005-3",
      isActive: true,
      businessPurpose: "System Commissioning",
      description: "VRF system commissioning and startup",
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    },
    {
      id: "bp-005-4",
      isActive: true,
      businessPurpose: "Training & Support",
      description: "Client training and technical support",
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    }
  ]
};
export {
  mockBusinessPurposes as m,
  shouldMockEndpoint as s
};

import { R as RouteCompanyIds } from "./__federation_expose_Mount-oOxUeS7O.js";
var ExpenseFormType = /* @__PURE__ */ ((ExpenseFormType2) => {
  ExpenseFormType2["STANDARD"] = "standard";
  ExpenseFormType2["ENTERTAINMENT"] = "entertainment";
  ExpenseFormType2["MILEAGE"] = "mileage";
  return ExpenseFormType2;
})(ExpenseFormType || {});
const mockCompanies = [
  {
    id: RouteCompanyIds.DirectExpansion,
    name: "Direct Expansion Solutions Inc",
    code: "DES",
    description: "HVAC direct expansion systems and solutions",
    isActive: true,
    settings: {
      currency: "CAD",
      timezone: "Canada/Eastern",
      fiscalYearStart: "January",
      defaultExpenseCategories: ["Travel", "Equipment", "Client", "Mileage"]
    },
    createdAt: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
  },
  {
    id: RouteCompanyIds.HeatTransfer,
    name: "Heat Transfer Solutions, Inc",
    code: "HTS",
    description: "Industrial heat transfer equipment and services",
    isActive: true,
    settings: {
      currency: "CAD",
      timezone: "Canada/Toronto",
      fiscalYearStart: "January",
      defaultExpenseCategories: ["Manufacturing", "Installation", "Maintenance"]
    },
    createdAt: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
  },
  {
    id: RouteCompanyIds.OslinNation,
    name: "Oslin Nation",
    code: "ON",
    description: "HVAC system integration and automation",
    isActive: true,
    settings: {
      currency: "CAD",
      timezone: "Canada/Eastern",
      fiscalYearStart: "July",
      defaultExpenseCategories: ["Integration", "Software", "Training", "Mileage"]
    },
    createdAt: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
    updatedAt: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
  },
  {
    id: RouteCompanyIds.TritonThermal,
    name: "Triton Thermal",
    code: "TT",
    description: "Thermal management solutions and consulting",
    isActive: true,
    settings: {
      currency: "CAD",
      timezone: "Canada/Vancouver",
      fiscalYearStart: "January",
      defaultExpenseCategories: ["Consulting", "Research", "Testing", "Mileage"]
    },
    createdAt: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
    updatedAt: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z")
  },
  {
    id: RouteCompanyIds.VrfServices,
    name: "VRF Services of Texas",
    code: "VRF",
    description: "Variable refrigerant flow systems installation and service",
    isActive: true,
    settings: {
      currency: "CAD",
      timezone: "Canada/Eastern",
      fiscalYearStart: "January",
      defaultExpenseCategories: ["Service", "Installation", "Parts", "Mileage"]
    },
    createdAt: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
    updatedAt: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
  }
];
const mockExpenseTypes = {
  [RouteCompanyIds.DirectExpansion]: [
    {
      id: "exp-001-1",
      name: "Airfare",
      status: "active",
      description: "Airfare",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Airfare",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-2",
      name: "Business Meal (attendees) - During Travel",
      status: "inactive",
      description: "Business Meal (attendees) - During Travel",
      formType: ExpenseFormType.ENTERTAINMENT,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Business Meal (attendees) - During Travel",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-3",
      name: "Business Meal (attendees) - Non-Travel",
      status: "inactive",
      description: "Business Meal (attendees) - Non-Travel",
      formType: ExpenseFormType.ENTERTAINMENT,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Business Meal (attendees) - Non-Travel",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-4",
      name: "Car Rental",
      status: "inactive",
      description: "Car Rental",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Car Rental",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-5",
      name: "Cellular Phone",
      status: "active",
      description: "Cellular Phone",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Cellular Phone",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-6",
      name: "Dues",
      status: "active",
      description: "Dues",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Dues",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-7",
      name: "Entertainment - Other",
      status: "active",
      description: "Entertainment - Other",
      formType: ExpenseFormType.ENTERTAINMENT,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Entertainment - Other",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-8",
      name: "Gasoline",
      status: "active",
      description: "Gasoline",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Gasoline",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-9",
      name: "Materials",
      status: "active",
      description: "Materials",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Materials",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-10",
      name: "Meals (Breakfast/Lunch/Dinner) - Non-Travel",
      status: "active",
      description: "Meals (Breakfast/Lunch/Dinner) - Non-Travel",
      formType: ExpenseFormType.ENTERTAINMENT,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Meals (Breakfast/Lunch/Dinner) - Non-Travel",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-11",
      name: "Mileage w/out Allowance",
      status: "active",
      description: "Mileage w/out Allowance",
      formType: ExpenseFormType.MILEAGE,
      mileage: 0.67,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Mileage w/out Allowance",
      mileageRate: 0.67,
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-12",
      name: "Mileage with Allowance",
      status: "active",
      description: "Mileage with Allowance",
      formType: ExpenseFormType.MILEAGE,
      mileage: 0.67,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Mileage with Allowance",
      mileageRate: 0.67,
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-13",
      name: "Misc. Promotional Expense",
      status: "active",
      description: "Misc. Promotional Expense",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Misc. Promotional Expense",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-14",
      name: "Office and General",
      status: "active",
      description: "Office and General",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Office and General",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    },
    {
      id: "exp-001-15",
      name: "Miscellaneous",
      status: "active",
      description: "Miscellaneous",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z"),
      // Legacy compatibility
      type: "Miscellaneous",
      modified: /* @__PURE__ */ new Date("2024-01-01T00:00:00Z")
    }
  ],
  [RouteCompanyIds.HeatTransfer]: [
    // Empty state for testing empty table design
  ],
  [RouteCompanyIds.OslinNation]: [
    {
      id: "exp-003-1",
      name: "Consulting Travel",
      status: "active",
      description: "Client site visits and travel",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      type: "Consulting Travel",
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "exp-003-2",
      name: "Research Materials",
      status: "active",
      description: "Books, journals, and research materials",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      type: "Research Materials",
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "exp-003-3",
      name: "Client Hospitality",
      status: "active",
      description: "Client dinners and hospitality",
      formType: ExpenseFormType.ENTERTAINMENT,
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      type: "Client Hospitality",
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    },
    {
      id: "exp-003-4",
      name: "Project Mileage",
      status: "active",
      description: "Mileage for project-related travel",
      formType: ExpenseFormType.MILEAGE,
      mileage: 0.655,
      created: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z"),
      type: "Project Mileage",
      mileageRate: 0.655,
      modified: /* @__PURE__ */ new Date("2024-02-01T00:00:00Z")
    }
  ],
  [RouteCompanyIds.TritonThermal]: [
    {
      id: "exp-004-1",
      name: "Thermal Testing",
      status: "active",
      description: "Thermal analysis and testing services",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      type: "Thermal Testing",
      modified: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z")
    },
    {
      id: "exp-004-2",
      name: "Consulting Services",
      status: "active",
      description: "Thermal management consulting",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      type: "Consulting Services",
      modified: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z")
    },
    {
      id: "exp-004-3",
      name: "Project Mileage",
      status: "active",
      description: "Client site visits and project travel",
      formType: ExpenseFormType.MILEAGE,
      mileage: 0.655,
      created: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z"),
      type: "Project Mileage",
      mileageRate: 0.655,
      modified: /* @__PURE__ */ new Date("2024-03-01T00:00:00Z")
    }
  ],
  [RouteCompanyIds.VrfServices]: [
    {
      id: "exp-005-1",
      name: "VRF Installation",
      status: "active",
      description: "VRF system installation expenses",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      type: "VRF Installation",
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    },
    {
      id: "exp-005-2",
      name: "Service Calls",
      status: "active",
      description: "VRF system maintenance and service",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      type: "Service Calls",
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    },
    {
      id: "exp-005-3",
      name: "Parts & Materials",
      status: "active",
      description: "VRF system parts and materials",
      formType: ExpenseFormType.STANDARD,
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      type: "Parts & Materials",
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    },
    {
      id: "exp-005-4",
      name: "Service Mileage",
      status: "active",
      description: "Mileage for service calls",
      formType: ExpenseFormType.MILEAGE,
      mileage: 0.655,
      created: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      updated: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z"),
      type: "Service Mileage",
      mileageRate: 0.655,
      modified: /* @__PURE__ */ new Date("2024-04-01T00:00:00Z")
    }
  ]
};
const mockBusinessPurposes = {
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
    {
      id: "bp-002-1",
      isActive: true,
      businessPurpose: "Sprint Planning",
      description: "Agile sprint planning and retrospectives",
      created: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
    },
    {
      id: "bp-002-2",
      isActive: true,
      businessPurpose: "User Research",
      description: "User experience research and testing",
      created: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
    },
    {
      id: "bp-002-3",
      isActive: true,
      businessPurpose: "Hackathon",
      description: "Innovation events and hackathons",
      created: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
    },
    {
      id: "bp-002-4",
      isActive: true,
      businessPurpose: "Partnership Meeting",
      description: "Strategic partnership discussions",
      created: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z"),
      modified: /* @__PURE__ */ new Date("2024-01-15T00:00:00Z")
    }
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
  mockExpenseTypes as a,
  mockBusinessPurposes as b,
  mockCompanies as m
};

import { E as ECostAllocation, I as ItemCategory } from "./expense-item-oPdxtthH.js";
import { M as MileageRateStatus, A as AllowedMimeType, p as MIME_TYPE_CONFIG, F as FormTypeId } from "./expense-api-CuecLciD.js";
import "./axiosInstance-BP1HyBRf.js";
import "./index-D4vrrc7u.js";
import { c as RouteCompanyIds } from "./routes-D4lYvRIf.js";
const ENDPOINT_PATTERNS = {
  // Files - Real backend endpoints
  FILES_UPLOAD: "*/api/v1.0/expense-forms/:company/files/drafts/:expenseId/files",
  FILES_DOWNLOAD: "*/api/v1.0/files/:fileId",
  FILES_DELETE: "*/api/v1.0/files/:fileId",
  // Configuration
  CONFIG_LOGICAL_COMPANIES: "*/api/v1.0/configuration/logical-companies",
  CONFIG_FORM_TYPES: "*/api/v1.0/configuration/form-types",
  CONFIG_EXPENSE_TYPES: "*/api/v1.0/configuration/:company/expense-types",
  CONFIG_EXPENSE_TYPE_CRUD: "*/api/v1.0/configuration/:company/expense-type",
  // Mileage Rates
  CONFIG_MILEAGE_RATES: "*/api/v1.0/configuration/:company/mileage-rates",
  CONFIG_MILEAGE_RATE_DELETE: "*/api/v1.0/configuration/:company/mileage-rates/:rateId",
  EXPENSES_LIST_UNIFIED: "*/api/v1.0/expenses-list",
  // Global unified endpoint - searches all expense types (regular, mileage trip, mileage period)
  EXPENSE_ITEM_BY_ID: "*/api/v1.0/expense-item/:id",
  // Expense Forms (new endpoints with company)
  EXPENSE_FORMS_LIST: "*/api/v1.0/expense-forms/:company",
  EXPENSE_FORMS_DRAFTS: "*/api/v1.0/expense-forms/:company/drafts",
  EXPENSE_FORMS_DRAFT_BY_ID: "*/api/v1.0/expense-forms/:company/drafts/:id",
  EXPENSE_FORMS_SUBMIT: "*/api/v1.0/expense-forms/:company/drafts/:id/submit"
};
const ENDPOINT_REGEX = {
  // Files - Real backend endpoints
  FILES_UPLOAD: /\/api\/v1\.0\/expense-forms\/[^/]+\/files\/drafts\/[^/]+\/files/,
  FILES_BY_ID: /\/api\/v1\.0\/files\/[^/]+$/
};
var ExpenseFormStatus = /* @__PURE__ */ ((ExpenseFormStatus2) => {
  ExpenseFormStatus2["Draft"] = "draft";
  ExpenseFormStatus2["Submitted"] = "submitted";
  ExpenseFormStatus2["Approved"] = "approved";
  ExpenseFormStatus2["Rejected"] = "rejected";
  ExpenseFormStatus2["Cancelled"] = "cancelled";
  return ExpenseFormStatus2;
})(ExpenseFormStatus || {});
const mockExpenseDrafts = [
  {
    id: "10150",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-11-15T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Best Buy",
      businessPurpose: "Computer accessories",
      expenseLocation: "Calgary, AB",
      expenseDescription: "USB-C hub and wireless mouse for laptop workstation setup",
      netAmount: "145.83",
      totalAmount: "175.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-draft-001",
        url: "/mocks/mock-receipt.jpeg",
        filename: "bestbuy-receipt.jpeg",
        originalName: "bestbuy-receipt.jpeg",
        size: 125e4,
        type: "jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-11-15T10:05:00Z",
        status: "uploaded"
      },
      supportingFiles: [
        {
          id: "support-draft-001",
          url: "/mocks/mock-pdf.pdf",
          filename: "bestbuy-invoice.pdf",
          originalName: "bestbuy-invoice.pdf",
          size: 185e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-11-15T10:06:00Z",
          status: "uploaded"
        }
      ],
      costAllocations: [
        {
          id: "draft-alloc-001",
          name: "245678 EXPENSES",
          percentage: 100,
          amount: 175,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-001",
            poNumber: "245678",
            supplier: "EXPENSES",
            description: "IT Equipment Refresh Q4 2025",
            projectId: "22201500-IT-EQUIP",
            projectDescription: "Corporate IT Equipment Program",
            projectDbId: 1,
            poDbId: 1,
            supplierId: 1,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-11-15T10:00:00Z",
    updatedAt: "2025-11-15T10:00:00Z",
    userId: "user-001"
  },
  {
    id: "10148",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-11-14T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Moxies",
      businessPurpose: "Client lunch",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Lunch meeting with Acme Corp representatives to discuss Q1 contract renewal",
      personsEntertained: "John Smith (Acme Corp), Jane Doe (Acme Corp)",
      netAmount: "83.33",
      totalAmount: "100.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      receiptAttachment: {
        id: "receipt-draft-002",
        url: "/mocks/mock-receipt.jpeg",
        filename: "moxies-receipt.jpeg",
        originalName: "moxies-receipt.jpeg",
        size: 98e4,
        type: "jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-11-14T14:35:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "draft-alloc-002",
          name: "742200 EXPENSES",
          percentage: 100,
          amount: 100,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-001",
            poNumber: "742200",
            supplier: "EXPENSES",
            description: "Sales & Business Development",
            projectId: "22505200-SALES-1",
            projectDescription: "Sales & Business Development 2025",
            projectDbId: 2,
            poDbId: 2,
            supplierId: 2,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-11-14T14:30:00Z",
    updatedAt: "2025-11-14T14:30:00Z",
    userId: "user-001"
  },
  {
    id: "10145",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-11-12T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Starbucks",
      businessPurpose: "Team meeting",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Coffee and snacks for weekly team sync meeting",
      netAmount: "41.67",
      totalAmount: "50.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      supportingFiles: [
        {
          id: "support-draft-002",
          url: "/mocks/mock-file.jpg",
          filename: "meeting-agenda.jpg",
          originalName: "meeting-agenda.jpg",
          size: 52e4,
          type: "jpg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-11-12T09:20:00Z",
          status: "uploaded"
        },
        {
          id: "support-draft-003",
          url: "/mocks/mock-pdf.pdf",
          filename: "attendees-list.pdf",
          originalName: "attendees-list.pdf",
          size: 125e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-11-12T09:21:00Z",
          status: "uploaded"
        }
      ],
      costAllocations: [
        {
          id: "draft-alloc-003",
          name: "15",
          percentage: 100,
          amount: 50,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-015",
            number: "15",
            description: "Calgary Operations"
          }
        }
      ]
    },
    createdAt: "2025-11-12T09:15:00Z",
    updatedAt: "2025-11-12T09:15:00Z",
    userId: "user-001"
  },
  {
    id: "10142",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-11-10T00:00:00Z",
      expenseType: "Parking",
      vendor: "Imperial Parking",
      businessPurpose: "Office parking",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Monthly parking pass for downtown office building",
      netAmount: "29.17",
      totalAmount: "35.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      costAllocations: [
        {
          id: "draft-alloc-004",
          name: "742100 EXPENSES",
          percentage: 100,
          amount: 35,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-002",
            poNumber: "742100",
            supplier: "EXPENSES",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 3,
            poDbId: 3,
            supplierId: 3,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-11-10T18:00:00Z",
    updatedAt: "2025-11-10T18:00:00Z",
    userId: "user-001"
  },
  {
    id: "10140",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-11-08T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Rogers",
      businessPurpose: "Business phone",
      expenseLocation: "Calgary, AB",
      expenseDescription: "November monthly plan for business mobile phone",
      netAmount: "54.17",
      totalAmount: "65.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-005",
          name: "Michael Chen",
          percentage: 100,
          amount: 65,
          type: ECostAllocation.Rep,
          entityData: {
            id: "rep-001",
            name: "Michael Chen"
          }
        }
      ]
    },
    createdAt: "2025-11-08T11:20:00Z",
    updatedAt: "2025-11-08T11:20:00Z",
    userId: "user-001"
  },
  {
    id: "10138",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-11-06T00:00:00Z",
      expenseType: "Materials",
      vendor: "Canadian Tire",
      businessPurpose: "Workshop supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Hand tools and safety equipment for warehouse maintenance",
      netAmount: "208.33",
      totalAmount: "250.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-006",
          name: "PO 234567 MAINT",
          percentage: 50,
          amount: 125,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 234567 MAINT",
            description: "Facility Maintenance Q4 2025"
          }
        },
        {
          id: "draft-alloc-007",
          name: "22505300-OPS-1",
          percentage: 50,
          amount: 125,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-104",
            poNumber: "743300",
            supplier: "EXPENSES",
            description: "Operations",
            projectId: "22505300-OPS-1",
            projectDescription: "Operations Budget 2025",
            projectDbId: 10,
            poDbId: 10,
            supplierId: 10,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-11-06T16:45:00Z",
    updatedAt: "2025-11-06T16:45:00Z",
    userId: "user-001"
  },
  {
    id: "10130",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-30T00:00:00Z",
      expenseType: "Materials",
      vendor: "Home Depot",
      businessPurpose: "Office supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Storage bins and shelving units for document organization",
      netAmount: "62.17",
      totalAmount: "74.60",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-008",
          name: "22505100-ADMIN-1",
          percentage: 100,
          amount: 74.6,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-100",
            poNumber: "742100",
            supplier: "EXPENSES",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 11,
            poDbId: 11,
            supplierId: 11,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-10-30T14:30:00Z",
    updatedAt: "2025-10-30T14:30:00Z",
    userId: "user-001"
  },
  {
    id: "10121",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-28T00:00:00Z",
      expenseType: "Materials",
      vendor: "Amazon",
      businessPurpose: "Project materials",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Networking equipment and cables for server room upgrade project",
      netAmount: "1028.80",
      totalAmount: "1234.56",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-009",
          name: "PO 256789 IT-INFRA",
          percentage: 75,
          amount: 925.92,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 256789 IT-INFRA",
            description: "Server Room Infrastructure Upgrade"
          }
        },
        {
          id: "draft-alloc-010",
          name: "08 / IT Support Team",
          percentage: 25,
          amount: 308.64,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-008",
            number: "08",
            description: "IT Support Team"
          }
        }
      ]
    },
    createdAt: "2025-10-28T09:15:00Z",
    updatedAt: "2025-10-28T09:15:00Z",
    userId: "user-001"
  },
  {
    id: "10118",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-27T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Cineplex",
      businessPurpose: "Team building event",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Movie night for team building - 8 tickets plus popcorn and drinks",
      personsEntertained: "Engineering Team (8 people)",
      netAmount: "166.67",
      totalAmount: "200.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-011",
          name: "12 / Engineering Team",
          percentage: 100,
          amount: 200,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-012",
            number: "12",
            description: "Engineering Team"
          }
        }
      ]
    },
    createdAt: "2025-10-27T20:00:00Z",
    updatedAt: "2025-10-27T20:00:00Z",
    userId: "user-001"
  },
  {
    id: "10098",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-26T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Tim Hortons",
      businessPurpose: "Client meeting",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Coffee meeting with potential vendor to discuss partnership opportunities",
      netAmount: "15.92",
      totalAmount: "19.10",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      costAllocations: [
        {
          id: "draft-alloc-012",
          name: "22505200-SALES-1",
          percentage: 100,
          amount: 19.1,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-101",
            poNumber: "742200",
            supplier: "EXPENSES",
            description: "Sales & Business Development",
            projectId: "22505200-SALES-1",
            projectDescription: "Sales & Business Development 2025",
            projectDbId: 12,
            poDbId: 12,
            supplierId: 12,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-10-26T12:45:00Z",
    updatedAt: "2025-10-26T12:45:00Z",
    userId: "user-001"
  },
  {
    id: "10095",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-25T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Office Depot",
      businessPurpose: "Printer paper and toner",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Bulk order of A4 paper (10 reams) and HP toner cartridges (2 units)",
      netAmount: "87.50",
      totalAmount: "105.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-013",
          name: "22505100-ADMIN-1",
          percentage: 100,
          amount: 105,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-100",
            poNumber: "742100",
            supplier: "EXPENSES",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 11,
            poDbId: 11,
            supplierId: 11,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-10-25T13:30:00Z",
    updatedAt: "2025-10-25T13:30:00Z",
    userId: "user-001"
  },
  {
    id: "10092",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-24T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Bell",
      businessPurpose: "Monthly phone bill",
      expenseLocation: "Calgary, AB",
      expenseDescription: "October billing cycle for corporate mobile phone plan",
      netAmount: "37.67",
      totalAmount: "45.20",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-014",
          name: "Sarah Johnson",
          percentage: 100,
          amount: 45.2,
          type: ECostAllocation.Rep,
          entityData: {
            name: "Sarah Johnson"
          }
        }
      ]
    },
    createdAt: "2025-10-24T16:20:00Z",
    updatedAt: "2025-10-24T16:20:00Z",
    userId: "user-001"
  },
  {
    id: "10090",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-20T00:00:00Z",
      expenseType: "Parking",
      vendor: "GreenP",
      businessPurpose: "Client visit",
      expenseLocation: "Toronto, ON",
      expenseDescription: "Parking for client site visit at Toronto headquarters",
      netAmount: "20.83",
      totalAmount: "25.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-015",
          name: "PO 223456 CLIENT-A",
          percentage: 100,
          amount: 25,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 223456 CLIENT-A",
            description: "Client A Implementation Project"
          }
        }
      ]
    },
    createdAt: "2025-10-20T11:00:00Z",
    updatedAt: "2025-10-20T11:00:00Z",
    userId: "user-001"
  },
  {
    id: "10088",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-19T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Subway",
      businessPurpose: "Working lunch",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Lunch during extended work session for project deadline",
      netAmount: "12.50",
      totalAmount: "15.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      costAllocations: [
        {
          id: "draft-alloc-016",
          name: "PO 234890 DEV-Q4",
          percentage: 100,
          amount: 15,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 234890 DEV-Q4",
            description: "Q4 Development Sprint"
          }
        }
      ]
    },
    createdAt: "2025-10-19T13:15:00Z",
    updatedAt: "2025-10-19T13:15:00Z",
    userId: "user-001"
  },
  {
    id: "10085",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-18T00:00:00Z",
      expenseType: "Marketing",
      vendor: "Google Ads",
      businessPurpose: "Online advertising",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Google Ads campaign for product launch - October budget allocation",
      netAmount: "416.67",
      totalAmount: "500.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-017",
          name: "22505400-MKTG-1",
          percentage: 100,
          amount: 500,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-103",
            poNumber: "744400",
            supplier: "EXPENSES",
            description: "Marketing",
            projectId: "22505400-MKTG-1",
            projectDescription: "Marketing Budget 2025",
            projectDbId: 13,
            poDbId: 13,
            supplierId: 13,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-10-18T15:00:00Z",
    updatedAt: "2025-10-18T15:00:00Z",
    userId: "user-001"
  },
  {
    id: "10082",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-18T00:00:00Z",
      expenseType: "Parking",
      vendor: "GreenP",
      businessPurpose: "Downtown meeting",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Parking for downtown business district meeting with legal team",
      netAmount: "20.83",
      totalAmount: "25.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-018",
          name: "22505500-LEGAL-1",
          percentage: 100,
          amount: 25,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-105",
            poNumber: "745500",
            supplier: "EXPENSES",
            description: "Legal & Compliance",
            projectId: "22505500-LEGAL-1",
            projectDescription: "Legal & Compliance 2025",
            projectDbId: 14,
            poDbId: 14,
            supplierId: 14,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-10-18T10:30:00Z",
    updatedAt: "2025-10-18T10:30:00Z",
    userId: "user-001"
  },
  {
    id: "10080",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-17T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Grand & Toy",
      businessPurpose: "Desk organizers",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Desktop organizers and filing trays for new employee workstations",
      netAmount: "62.50",
      totalAmount: "75.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      costAllocations: [
        {
          id: "draft-alloc-019",
          name: "22505600-HR-1",
          percentage: 100,
          amount: 75,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-102",
            poNumber: "746600",
            supplier: "EXPENSES",
            description: "Human Resources",
            projectId: "22505600-HR-1",
            projectDescription: "Human Resources 2025",
            projectDbId: 15,
            poDbId: 15,
            supplierId: 15,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    createdAt: "2025-10-17T14:00:00Z",
    updatedAt: "2025-10-17T14:00:00Z",
    userId: "user-001"
  },
  {
    id: "10078",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-16T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Telus",
      businessPurpose: "Mobile data plan",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Additional data package for field work requiring mobile connectivity",
      netAmount: "45.83",
      totalAmount: "55.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      costAllocations: [
        {
          id: "draft-alloc-020",
          name: "David Park",
          percentage: 100,
          amount: 55,
          type: ECostAllocation.Rep,
          entityData: {
            name: "David Park"
          }
        }
      ],
      deferToApprover: false
    },
    createdAt: "2025-10-16T11:30:00Z",
    updatedAt: "2025-10-16T11:30:00Z",
    userId: "user-001"
  },
  {
    id: "10091",
    itemType: ItemCategory.Expense,
    status: "draft",
    data: {
      expenseDate: "2025-10-16T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Telus",
      businessPurpose: "Mobile data plan",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Additional data package for field work requiring mobile connectivity",
      netAmount: "45.83",
      totalAmount: "67.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      costAllocations: [],
      deferToApprover: true
    },
    createdAt: "2025-10-16T11:30:00Z",
    updatedAt: "2025-10-16T11:30:00Z",
    userId: "user-001"
  }
];
const mockSubmittedExpenses = [
  {
    id: "100001",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-04T00:00:00Z",
      expenseType: "Materials",
      vendor: "Home Depot",
      businessPurpose: "Service repairs",
      expenseLocation: "Ontario, Canada",
      expenseDescription: "Special materials needed for the job",
      netAmount: "62.30",
      totalAmount: "71.60",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-001",
        url: "/mocks/mock-receipt.jpeg",
        filename: "home-depot-receipt.jpg",
        originalName: "receipt.jpg",
        size: 1024e3,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-04T10:00:00Z",
        status: "uploaded"
      },
      supportingFiles: [
        {
          id: "support-001",
          url: "/mocks/mock-pdf.pdf",
          filename: "hotel-bill_Mariott.pdf",
          originalName: "hotel-bill_Mariott.pdf",
          size: 512e3,
          type: "application/pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-10-04T10:05:00Z",
          status: "uploaded"
        },
        {
          id: "support-002",
          url: "/mocks/mock-file.jpg",
          filename: "data-c.png",
          originalName: "data-c.png",
          size: 256e3,
          type: "image/jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-10-04T10:06:00Z",
          status: "uploaded"
        }
      ],
      costAllocations: [
        {
          id: "alloc-001",
          name: "232226 EXP-VISA",
          percentage: 25,
          amount: 17.9,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-sub-001",
            poNumber: "232226",
            supplier: "EXP-VISA",
            description: "Birdville ISD Walker Creek Emergency Geo System Repairs",
            projectId: "22505153-SESA-1",
            projectDescription: "Harbour 60 Toronto - Service 2025/2026",
            projectDbId: 4,
            poDbId: 4,
            supplierId: 4,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "alloc-002",
          name: "742153 EXPENSES",
          percentage: 75,
          amount: 53.7,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-sub-001",
            poNumber: "742153",
            supplier: "EXPENSES",
            description: "Service Administration",
            projectId: "22505153-SESA-1",
            projectDescription: "Harbour 60 Toronto - Service 2025/2026",
            projectDbId: 5,
            poDbId: 5,
            supplierId: 5,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    submittedAt: "2025-10-18T09:00:00Z",
    createdAt: "2025-10-04T10:00:00Z",
    updatedAt: "2025-10-18T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "100002",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-10T00:00:00Z",
      expenseType: "Materials",
      vendor: "Home Depot",
      businessPurpose: "Service repairs",
      expenseLocation: "Ontario, Canada",
      expenseDescription: "Special materials needed for the job",
      netAmount: "62.30",
      totalAmount: "71.60",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      isReceiptUnavailable: true,
      affidavit: {
        justification: "Lost Home Depot receipt for materials. Expense verified and matches credit card statement, confirming purchase details for reimbursement.",
        digitalSignature: "JD"
      },
      supportingFiles: [
        {
          id: "support-003",
          url: "/mocks/mock-pdf.pdf",
          filename: "hotel-bill_Mariott.pdf",
          originalName: "hotel-bill_Mariott.pdf",
          size: 512e3,
          type: "application/pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-10-10T10:05:00Z",
          status: "uploaded"
        },
        {
          id: "support-004",
          url: "/mocks/mock-file.jpg",
          filename: "data-c.png",
          originalName: "data-c.png",
          size: 256e3,
          type: "image/jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-10-10T10:06:00Z",
          status: "uploaded"
        },
        {
          id: "support-005",
          url: "/mocks/mock-file.jpg",
          filename: "data-c (1).png",
          originalName: "data-c (1).png",
          size: 256e3,
          type: "image/jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-10-10T10:07:00Z",
          status: "uploaded"
        }
      ],
      costAllocations: [
        {
          id: "alloc-003",
          name: "232226 EXP-VISA",
          percentage: 25,
          amount: 17.9,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-sub-002",
            poNumber: "232226",
            supplier: "EXP-VISA",
            description: "Birdville ISD Walker Creek Emergency Geo System Repairs",
            projectId: "22505153-SESA-1",
            projectDescription: "Harbour 60 Toronto - Service 2025/2026",
            projectDbId: 6,
            poDbId: 6,
            supplierId: 6,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "alloc-004",
          name: "742153 EXPENSES",
          percentage: 75,
          amount: 53.7,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-sub-002",
            poNumber: "742153",
            supplier: "EXPENSES",
            description: "Service Administration",
            projectId: "22505153-SESA-1",
            projectDescription: "Harbour 60 Toronto - Service 2025/2026",
            projectDbId: 7,
            poDbId: 7,
            supplierId: 7,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    submittedAt: "2025-10-18T09:00:00Z",
    createdAt: "2025-10-10T10:00:00Z",
    updatedAt: "2025-10-18T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "100003",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-04T00:00:00Z",
      expenseType: "Materials",
      vendor: "Home Depot",
      businessPurpose: "Service repairs",
      expenseLocation: "Texas, USA",
      expenseDescription: "Special materials needed for the job",
      netAmount: "53.70",
      totalAmount: "71.60",
      isDifferentCurrency: true,
      netCurrency: { code: "USD", locale: "en-US" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-003",
        url: "/mocks/mock-receipt.jpeg",
        filename: "home-depot-receipt.jpg",
        originalName: "receipt.jpg",
        size: 1024e3,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-04T10:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "alloc-005",
          name: "232226 EXP-VISA",
          percentage: 25,
          amount: 17.9,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-sub-003",
            poNumber: "232226",
            supplier: "EXP-VISA",
            description: "Birdville ISD Walker Creek Emergency Geo System Repairs",
            projectId: "22505153-SESA-1",
            projectDescription: "Harbour 60 Toronto - Service 2025/2026",
            projectDbId: 8,
            poDbId: 8,
            supplierId: 8,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "alloc-006",
          name: "742153 EXPENSES",
          percentage: 25,
          amount: 17.9,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-sub-003",
            poNumber: "742153",
            supplier: "EXPENSES",
            description: "Service Administration",
            projectId: "22505153-SESA-1",
            projectDescription: "Harbour 60 Toronto - Service 2025/2026",
            projectDbId: 9,
            poDbId: 9,
            supplierId: 9,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "alloc-007",
          name: "Alex Varga",
          percentage: 25,
          amount: 17.9,
          type: ECostAllocation.Rep,
          entityData: {
            id: "rep-sub-001",
            name: "Alex Varga"
          }
        },
        {
          id: "alloc-008",
          name: "23",
          percentage: 25,
          amount: 17.9,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-023",
            number: "23",
            description: "ON HTS Parts"
          }
        }
      ],
      additionalComments: "Split the allocation according to agreement"
    },
    submittedAt: "2025-10-18T09:00:00Z",
    createdAt: "2025-10-04T10:00:00Z",
    updatedAt: "2025-10-18T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "10146",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-11-13T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "Boston Pizza",
      businessPurpose: "Team lunch",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Monthly team lunch with Calgary operations team to discuss Q4 priorities",
      netAmount: "125.00",
      totalAmount: "150.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-146",
        url: "/mocks/mock-pdf.pdf",
        filename: "boston-pizza-receipt.pdf",
        originalName: "receipt.pdf",
        size: 856e3,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-11-13T15:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-146",
          name: "15 / Calgary Operations",
          percentage: 100,
          amount: 150,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-015",
            number: "15",
            description: "Calgary Operations"
          }
        }
      ]
    },
    submittedAt: "2025-11-14T09:00:00Z",
    createdAt: "2025-11-13T14:00:00Z",
    updatedAt: "2025-11-14T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "10143",
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-11-11T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Costco",
      businessPurpose: "Office snacks and supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Bulk purchase of coffee, tea, and snacks for break room restocking",
      netAmount: "158.33",
      totalAmount: "190.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-143",
        url: "/mocks/mock-receipt.jpeg",
        filename: "costco-receipt.jpg",
        originalName: "receipt.jpg",
        size: 125e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-11-11T18:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-143",
          name: "22505100-ADMIN-1",
          percentage: 100,
          amount: 190,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-100",
            poNumber: "742100",
            supplier: "EXPENSES",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 11,
            poDbId: 11,
            supplierId: 11,
            supplierCurrency: "CAD"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-11-09T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Second City",
      businessPurpose: "Client entertainment",
      expenseLocation: "Toronto, ON",
      expenseDescription: "Comedy show tickets for client appreciation event with GlobalTech representatives",
      personsEntertained: "Tom Wilson (GlobalTech), Lisa Chen (GlobalTech), Mark Taylor (HTS)",
      netAmount: "291.67",
      totalAmount: "350.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      isReceiptUnavailable: true,
      affidavit: {
        justification: "Digital tickets were scanned at entry and no printed receipt was provided. Credit card statement confirms purchase amount and date.",
        digitalSignature: "MC"
      },
      costAllocations: [
        {
          id: "sub-alloc-141",
          name: "PO 267890 GLOBALTECH",
          percentage: 100,
          amount: 350,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 267890 GLOBALTECH",
            description: "GlobalTech Partnership Development"
          }
        }
      ]
    },
    submittedAt: "2025-11-10T09:30:00Z",
    createdAt: "2025-11-09T22:00:00Z",
    updatedAt: "2025-11-10T09:30:00Z",
    userId: "user-001"
  },
  {
    id: "10139",
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-11-07T00:00:00Z",
      expenseType: "Marketing",
      vendor: "Facebook Ads",
      businessPurpose: "Social media campaign",
      expenseLocation: "Calgary, AB",
      expenseDescription: "November Facebook advertising campaign for product launch promotion",
      netAmount: "333.33",
      totalAmount: "400.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-139",
        url: "/mocks/mock-pdf.pdf",
        filename: "facebook-ads-invoice.pdf",
        originalName: "invoice.pdf",
        size: 256e3,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-11-07T17:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-139",
          name: "22505400-MKTG-1",
          percentage: 100,
          amount: 400,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-103",
            poNumber: "744400",
            supplier: "EXPENSES",
            description: "Marketing",
            projectId: "22505400-MKTG-1",
            projectDescription: "Marketing Budget 2025",
            projectDbId: 13,
            poDbId: 13,
            supplierId: 13,
            supplierCurrency: "CAD"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-11-04T00:00:00Z",
      expenseType: "Meals - Non Travel",
      vendor: "The Keg",
      businessPurpose: "Business dinner",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Dinner meeting with potential investor to discuss Series B funding",
      personsEntertained: "Robert Hughes (Venture Capital Partners)",
      netAmount: "187.50",
      totalAmount: "225.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-135",
        url: "/mocks/mock-receipt.jpeg",
        filename: "the-keg-receipt.jpg",
        originalName: "receipt.jpg",
        size: 92e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-11-04T22:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-135",
          name: "22505700-EXEC-1",
          percentage: 100,
          amount: 225,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-106",
            poNumber: "747700",
            supplier: "EXPENSES",
            description: "Executive Operations",
            projectId: "22505700-EXEC-1",
            projectDescription: "Executive Operations 2025",
            projectDbId: 16,
            poDbId: 16,
            supplierId: 16,
            supplierCurrency: "CAD"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "rejected",
    data: {
      expenseDate: "2025-11-02T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Steam Games",
      businessPurpose: "Team bonding",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Online game purchase for virtual team bonding activity",
      netAmount: "83.33",
      totalAmount: "100.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      receiptAttachment: {
        id: "receipt-132",
        url: "/mocks/mock-file.jpg",
        filename: "steam-receipt.png",
        originalName: "receipt.png",
        size: 45e4,
        type: "image/png",
        mimeType: "image/png",
        uploadedAt: "2025-11-02T16:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-132",
          name: "12 / Engineering Team",
          percentage: 100,
          amount: 100,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-012",
            number: "12",
            description: "Engineering Team"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-10-29T00:00:00Z",
      expenseType: "Parking",
      vendor: "Toronto Parking Authority",
      businessPurpose: "All-day parking",
      expenseLocation: "Toronto, ON",
      expenseDescription: "All-day parking at downtown Toronto lot for client meeting",
      netAmount: "41.67",
      totalAmount: "50.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      receiptAttachment: {
        id: "receipt-125",
        url: "/mocks/mock-receipt.jpeg",
        filename: "parking-receipt.jpg",
        originalName: "receipt.jpg",
        size: 38e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-29T18:30:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-125",
          name: "PO 223456 CLIENT-A",
          percentage: 100,
          amount: 50,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 223456 CLIENT-A",
            description: "Client A Implementation Project"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-27T00:00:00Z",
      expenseType: "Materials",
      vendor: "Walmart",
      businessPurpose: "Event supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Decorations and supplies for company anniversary celebration event",
      netAmount: "104.17",
      totalAmount: "125.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-120",
        url: "/mocks/mock-receipt.jpeg",
        filename: "walmart-receipt.jpg",
        originalName: "receipt.jpg",
        size: 11e5,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-27T16:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-120",
          name: "22505600-HR-1",
          percentage: 100,
          amount: 125,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-102",
            poNumber: "746600",
            supplier: "EXPENSES",
            description: "Human Resources",
            projectId: "22505600-HR-1",
            projectDescription: "Human Resources 2025",
            projectDbId: 15,
            poDbId: 15,
            supplierId: 15,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    submittedAt: "2025-10-28T09:15:00Z",
    createdAt: "2025-10-27T15:00:00Z",
    updatedAt: "2025-10-28T09:15:00Z",
    userId: "user-001"
  },
  {
    id: "10115",
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-10-25T00:00:00Z",
      expenseType: "Cellular Phone",
      vendor: "Fido",
      businessPurpose: "Business phone plan",
      expenseLocation: "Calgary, AB",
      expenseDescription: "October monthly plan for business mobile phone with data add-on",
      netAmount: "70.83",
      totalAmount: "85.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-115",
        url: "/mocks/mock-pdf.pdf",
        filename: "fido-invoice.pdf",
        originalName: "invoice.pdf",
        size: 18e4,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-10-25T17:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-115",
          name: "Emily Roberts",
          percentage: 100,
          amount: 85,
          type: ECostAllocation.Rep,
          entityData: {
            name: "Emily Roberts"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "cancelled",
    data: {
      expenseDate: "2025-10-22T00:00:00Z",
      expenseType: "Materials",
      vendor: "Shoppers Drug Mart",
      businessPurpose: "First aid supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "First aid kit restocking for office emergency supplies",
      netAmount: "20.83",
      totalAmount: "25.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      receiptAttachment: {
        id: "receipt-110",
        url: "/mocks/mock-receipt.jpeg",
        filename: "shoppers-receipt.jpg",
        originalName: "receipt.jpg",
        size: 52e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-22T13:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-110",
          name: "22505100-ADMIN-1",
          percentage: 100,
          amount: 25,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-100",
            poNumber: "742100",
            supplier: "EXPENSES",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 11,
            poDbId: 11,
            supplierId: 11,
            supplierCurrency: "CAD"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-10-20T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Ikea",
      businessPurpose: "Desk accessories",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Monitor stands and cable management systems for new workstations",
      netAmount: "129.17",
      totalAmount: "155.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-105",
        url: "/mocks/mock-receipt.jpeg",
        filename: "ikea-receipt.jpg",
        originalName: "receipt.jpg",
        size: 135e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-20T18:00:00Z",
        status: "uploaded"
      },
      supportingFiles: [
        {
          id: "support-105-1",
          url: "/mocks/mock-pdf.pdf",
          filename: "ikea-product-list.pdf",
          originalName: "product-list.pdf",
          size: 95e3,
          type: "application/pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-10-20T18:05:00Z",
          status: "uploaded"
        }
      ],
      costAllocations: [
        {
          id: "sub-alloc-105",
          name: "22505600-HR-1",
          percentage: 100,
          amount: 155,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-102",
            poNumber: "746600",
            supplier: "EXPENSES",
            description: "Human Resources",
            projectId: "22505600-HR-1",
            projectDescription: "Human Resources 2025",
            projectDbId: 15,
            poDbId: 15,
            supplierId: 15,
            supplierCurrency: "CAD"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-18T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Blue Jays",
      businessPurpose: "Client event tickets",
      expenseLocation: "Toronto, ON",
      expenseDescription: "Blue Jays game tickets for client appreciation event with TechCorp team",
      personsEntertained: "James Miller (TechCorp), Susan Wong (TechCorp), Team members (3)",
      netAmount: "375.00",
      totalAmount: "450.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-100",
        url: "/mocks/mock-pdf.pdf",
        filename: "bluejays-tickets.pdf",
        originalName: "tickets.pdf",
        size: 42e4,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-10-18T21:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-100-1",
          name: "PO 278901 TECHCORP",
          percentage: 60,
          amount: 270,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 278901 TECHCORP",
            description: "TechCorp Partnership Project"
          }
        },
        {
          id: "sub-alloc-100-2",
          name: "22505200-SALES-1",
          percentage: 40,
          amount: 180,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-101",
            poNumber: "742200",
            supplier: "EXPENSES",
            description: "Sales & Business Development",
            projectId: "22505200-SALES-1",
            projectDescription: "Sales & Business Development 2025",
            projectDbId: 12,
            poDbId: 12,
            supplierId: 12,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    submittedAt: "2025-10-19T09:00:00Z",
    createdAt: "2025-10-18T20:30:00Z",
    updatedAt: "2025-10-19T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "10076",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-16T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "JOEY",
      businessPurpose: "Team dinner",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Quarterly team dinner celebration for successful project completion",
      personsEntertained: "Development Team (6 people)",
      netAmount: "206.00",
      totalAmount: "247.20",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-076",
        url: "/mocks/mock-receipt.jpeg",
        filename: "joey-receipt.jpg",
        originalName: "receipt.jpg",
        size: 89e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-16T20:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-076",
          name: "12 / Engineering Team",
          percentage: 100,
          amount: 247.2,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-012",
            number: "12",
            description: "Engineering Team"
          }
        }
      ]
    },
    submittedAt: "2025-10-17T09:00:00Z",
    createdAt: "2025-10-16T19:30:00Z",
    updatedAt: "2025-10-17T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "10074",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-15T00:00:00Z",
      expenseType: "Offices & General",
      vendor: "FedEx",
      businessPurpose: "Document shipping",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Express overnight shipping of signed contract documents to client",
      netAmount: "125.63",
      totalAmount: "150.75",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-074",
        url: "/mocks/mock-pdf.pdf",
        filename: "fedex-receipt.pdf",
        originalName: "receipt.pdf",
        size: 145e3,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-10-15T15:00:00Z",
        status: "uploaded"
      },
      supportingFiles: [
        {
          id: "support-074-1",
          url: "/mocks/mock-file.jpg",
          filename: "fedex-tracking.png",
          originalName: "tracking.png",
          size: 85e3,
          type: "image/png",
          mimeType: "image/png",
          uploadedAt: "2025-10-15T15:05:00Z",
          status: "uploaded"
        }
      ],
      costAllocations: [
        {
          id: "sub-alloc-074",
          name: "PO 223456 CLIENT-A",
          percentage: 100,
          amount: 150.75,
          type: ECostAllocation.Project,
          entityData: {
            poNumber: "PO 223456 CLIENT-A",
            description: "Client A Implementation Project"
          }
        }
      ]
    },
    submittedAt: "2025-10-16T10:15:00Z",
    createdAt: "2025-10-15T14:45:00Z",
    updatedAt: "2025-10-16T10:15:00Z",
    userId: "user-001"
  },
  {
    id: "10072",
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-10-12T00:00:00Z",
      expenseType: "Office Supplies",
      vendor: "Staples",
      businessPurpose: "Office materials",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Notebooks, pens, and presentation folders for quarterly planning session",
      netAmount: "100.00",
      totalAmount: "120.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-072",
        url: "/mocks/mock-receipt.jpeg",
        filename: "staples-receipt.jpg",
        originalName: "receipt.jpg",
        size: 76e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-12T17:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-072",
          name: "22505100-ADMIN-1",
          percentage: 100,
          amount: 120,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-100",
            poNumber: "742100",
            supplier: "EXPENSES",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 11,
            poDbId: 11,
            supplierId: 11,
            supplierCurrency: "CAD"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "approved",
    data: {
      expenseDate: "2025-10-10T00:00:00Z",
      expenseType: "Marketing",
      vendor: "LinkedIn",
      businessPurpose: "Advertisement campaign",
      expenseLocation: "Calgary, AB",
      expenseDescription: "LinkedIn recruitment ads for senior developer positions",
      netAmount: "200.00",
      totalAmount: "240.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-063",
        url: "/mocks/mock-pdf.pdf",
        filename: "linkedin-invoice.pdf",
        originalName: "invoice.pdf",
        size: 195e3,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-10-10T18:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-063",
          name: "22505600-HR-1",
          percentage: 100,
          amount: 240,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-102",
            poNumber: "746600",
            supplier: "EXPENSES",
            description: "Human Resources",
            projectId: "22505600-HR-1",
            projectDescription: "Human Resources 2025",
            projectDbId: 15,
            poDbId: 15,
            supplierId: 15,
            supplierCurrency: "CAD"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "rejected",
    data: {
      expenseDate: "2025-10-09T00:00:00Z",
      expenseType: "Marketing",
      vendor: "LinkedIn",
      businessPurpose: "Personal branding",
      expenseLocation: "Calgary, AB",
      expenseDescription: "LinkedIn Premium subscription for personal professional development",
      netAmount: "200.00",
      totalAmount: "240.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-054",
        url: "/mocks/mock-pdf.pdf",
        filename: "linkedin-premium.pdf",
        originalName: "invoice.pdf",
        size: 165e3,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-10-09T16:00:00Z",
        status: "uploaded"
      },
      costAllocations: [
        {
          id: "sub-alloc-054",
          name: "Michael Chen",
          percentage: 100,
          amount: 240,
          type: ECostAllocation.Rep,
          entityData: {
            name: "Michael Chen"
          }
        }
      ]
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
    itemType: ItemCategory.Expense,
    status: "cancelled",
    data: {
      expenseDate: "2025-10-04T00:00:00Z",
      expenseType: "Parking",
      vendor: "GreenP",
      businessPurpose: "Downtown parking",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Parking for morning meeting that was cancelled last minute",
      netAmount: "8.33",
      totalAmount: "10.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      isReceiptUnavailable: true,
      affidavit: {
        justification: "Parking meter receipt faded and became illegible. Payment confirmed via mobile app transaction history.",
        digitalSignature: "MC"
      },
      costAllocations: [
        {
          id: "sub-alloc-031",
          name: "22505100-ADMIN-1",
          percentage: 100,
          amount: 10,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-100",
            poNumber: "742100",
            supplier: "EXPENSES",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 11,
            poDbId: 11,
            supplierId: 11,
            supplierCurrency: "CAD"
          }
        }
      ]
    },
    submittedAt: "2025-10-05T09:00:00Z",
    createdAt: "2025-10-04T12:00:00Z",
    updatedAt: "2025-10-06T15:20:00Z",
    cancelledAt: "2025-10-06T15:20:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "10101",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-18T00:00:00Z",
      expenseType: "Entertainment - other",
      vendor: "Canucks",
      businessPurpose: "Client event tickets",
      expenseLocation: "Toronto, ON",
      expenseDescription: "Canucks game tickets for client appreciation event with TechCorp team",
      personsEntertained: "James Miller (TechCorp), City Boy (TechCorp), Team members (3)",
      netAmount: "670.00",
      totalAmount: "890.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Corporate Card - CAD",
      receiptAttachment: {
        id: "receipt-100",
        url: "/mocks/mock-pdf.pdf",
        filename: "canucks-tickets.pdf",
        originalName: "tickets.pdf",
        size: 41e4,
        type: "application/pdf",
        mimeType: "application/pdf",
        uploadedAt: "2025-10-18T21:00:00Z",
        status: "uploaded"
      },
      costAllocations: [],
      deferToApprover: true
    },
    submittedAt: "2025-10-19T09:00:00Z",
    createdAt: "2025-10-18T20:30:00Z",
    updatedAt: "2025-10-19T09:00:00Z",
    userId: "user-001"
  },
  // BUG DEMO: Empty allocations without deferToApprover shows empty section
  {
    id: "100004",
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: {
      expenseDate: "2025-10-20T00:00:00Z",
      expenseType: "Materials",
      vendor: "Staples",
      businessPurpose: "Office supplies",
      expenseLocation: "Calgary, AB",
      expenseDescription: "Printer paper and toner cartridges for office",
      netAmount: "85.00",
      totalAmount: "95.00",
      netCurrency: { code: "CAD", locale: "en-CA" },
      totalCurrency: { code: "CAD", locale: "en-CA" },
      paymentMethod: "Out of Pocket",
      receiptAttachment: {
        id: "receipt-bug-demo",
        url: "/mocks/mock-receipt.jpeg",
        filename: "staples-receipt.jpg",
        originalName: "receipt.jpg",
        size: 89e4,
        type: "image/jpeg",
        mimeType: "image/jpeg",
        uploadedAt: "2025-10-20T14:00:00Z",
        status: "uploaded"
      },
      costAllocations: [],
      // No deferToApprover - this triggers the bug (empty section rendered)
      additionalComments: "Urgent purchase needed for quarterly report printing deadline."
    },
    submittedAt: "2025-10-20T15:00:00Z",
    createdAt: "2025-10-20T14:00:00Z",
    updatedAt: "2025-10-20T15:00:00Z",
    userId: "user-001"
  }
];
const mockMileageDrafts = [
  {
    id: "20135",
    itemType: ItemCategory.Mileage,
    status: "draft",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-11-01T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-11-15T00:00:00Z")
      },
      totalDistance: "245",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "171.50",
      businessPurpose: "Client site visits",
      expenseDescription: "Regular mileage for visiting multiple client locations in the Greater Toronto Area during the first half of November",
      costAllocations: [
        {
          id: "mileage-alloc-001",
          name: "742300 EXPENSES",
          percentage: 60,
          amount: 102.9,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-mileage-001",
            poNumber: "742300",
            supplier: "EXPENSES",
            description: "Travel & Mileage Reimbursement",
            projectId: "22505300-TRAVEL-1",
            projectDescription: "Corporate Travel Budget 2025",
            projectDbId: 10,
            poDbId: 10,
            supplierId: 10,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "mileage-alloc-002",
          name: "232500 CLIENT-VISITS",
          percentage: 40,
          amount: 68.6,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-mileage-001",
            poNumber: "232500",
            supplier: "CLIENT-VISITS",
            description: "Q4 Client Engagement Initiative",
            projectId: "22507300-CLIENT-1",
            projectDescription: "Enterprise Client Services Program",
            projectDbId: 11,
            poDbId: 11,
            supplierId: 11,
            supplierCurrency: "CAD"
          }
        }
      ],
      isEqualSplit: false,
      supportingFiles: [
        {
          id: "mileage-support-001",
          url: "/mocks/mock-pdf.pdf",
          filename: "mileage-log-november.pdf",
          originalName: "mileage-log-november.pdf",
          size: 245e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-11-15T17:30:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Mileage tracked using company GPS app. Log exported and attached."
    },
    createdAt: "2025-11-01T08:00:00Z",
    updatedAt: "2025-11-15T18:00:00Z",
    userId: "user-001"
  },
  {
    id: "10097",
    itemType: ItemCategory.Mileage,
    status: "draft",
    data: {
      formType: "trip",
      mileageType: "Trip",
      expenseDate: "2025-10-25T00:00:00Z",
      fromLocation: "123 Main Street, Toronto, ON M5V 1A1",
      toLocation: "456 Industrial Parkway, Mississauga, ON L5T 2R3",
      isRoundTrip: true,
      totalDistance: "68",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "47.60",
      businessPurpose: "Supplier meeting",
      expenseDescription: "Round trip to Mississauga distribution center for quarterly supplier review meeting with logistics team",
      costAllocations: [
        {
          id: "mileage-trip-alloc-001",
          name: "232800 LOGISTICS",
          percentage: 100,
          amount: 47.6,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-trip-001",
            poNumber: "232800",
            supplier: "LOGISTICS",
            description: "Supply Chain Optimization Project",
            projectId: "22507500-SCM-1",
            projectDescription: "Logistics & Distribution Center Support",
            projectDbId: 12,
            poDbId: 12,
            supplierId: 12,
            supplierCurrency: "CAD"
          }
        }
      ],
      isEqualSplit: false,
      additionalComments: "Met with warehouse manager to discuss Q1 delivery schedules"
    },
    createdAt: "2025-10-25T09:00:00Z",
    updatedAt: "2025-10-25T17:00:00Z",
    userId: "user-001"
  },
  {
    id: "10087",
    itemType: ItemCategory.Mileage,
    status: "draft",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-10-20T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-10-31T00:00:00Z")
      },
      totalDistance: "312",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "218.40",
      businessPurpose: "Field service calls",
      expenseDescription: "Mileage for emergency service calls and scheduled maintenance visits across the Calgary region",
      costAllocations: [
        {
          id: "mileage-period-alloc-001",
          name: "18",
          percentage: 75,
          amount: 163.8,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-018",
            number: "18",
            description: "Calgary Field Service Team"
          }
        },
        {
          id: "mileage-period-alloc-002",
          name: "David Park",
          percentage: 25,
          amount: 54.6,
          type: ECostAllocation.Rep,
          entityData: {
            id: "rep-002",
            name: "David Park"
          }
        }
      ],
      isEqualSplit: false,
      supportingFiles: [
        {
          id: "mileage-support-002",
          url: "/mocks/mock-receipt.jpeg",
          filename: "vehicle-odometer-oct31.jpeg",
          originalName: "vehicle-odometer-oct31.jpeg",
          size: 185e4,
          type: "jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-10-31T18:45:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Odometer photo attached as verification. All service calls logged in CRM system."
    },
    createdAt: "2025-10-20T08:00:00Z",
    updatedAt: "2025-10-31T19:00:00Z",
    userId: "user-001"
  },
  {
    id: "20224",
    itemType: ItemCategory.Mileage,
    status: "draft",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-12-01T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-12-15T00:00:00Z")
      },
      totalDistance: "255",
      ratePerUnit: "0.90",
      rateUnit: "km",
      reimbursableAmount: "199.50",
      businessPurpose: "Client site visits",
      expenseDescription: "Regular mileage for visiting multiple client locations in the Greater Toronto Area during the first half of November",
      costAllocations: [],
      deferToApprover: true,
      isEqualSplit: false,
      supportingFiles: [
        {
          id: "mileage-support-001",
          url: "/mocks/mock-pdf.pdf",
          filename: "mileage-log-november.pdf",
          originalName: "mileage-log-november.pdf",
          size: 245e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-11-15T17:30:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Mileage tracked using company GPS app. Log exported and attached."
    },
    createdAt: "2025-12-01T08:00:00Z",
    updatedAt: "2025-12-15T18:00:00Z",
    userId: "user-001"
  },
  {
    id: "11067",
    itemType: ItemCategory.Mileage,
    status: "draft",
    data: {
      formType: "trip",
      mileageType: "Trip",
      expenseDate: "2025-04-25T00:00:00Z",
      fromLocation: "123 Main Street, Toronto, ON M5V 1A1",
      toLocation: "456 Industrial Parkway, Mississauga, ON L5T 2R3",
      isRoundTrip: true,
      totalDistance: "67",
      ratePerUnit: "0.67",
      rateUnit: "km",
      reimbursableAmount: "49.60",
      businessPurpose: "Supplier meeting",
      expenseDescription: "Round trip to Mississauga distribution center for quarterly supplier review meeting with logistics team",
      deferToApprover: true,
      additionalComments: "Met with warehouse manager to discuss Q1 delivery schedules"
    },
    createdAt: "2025-10-25T09:00:00Z",
    updatedAt: "2025-10-25T17:00:00Z",
    userId: "user-001"
  }
];
const mockSubmittedMileage = [
  // Mileage trips — all statuses
  {
    id: "30001",
    itemType: ItemCategory.Mileage,
    status: "submitted",
    data: {
      formType: "trip",
      mileageType: "Trip",
      expenseDate: "2025-11-18T00:00:00Z",
      fromLocation: "100 Queen Street West, Toronto, ON M5H 2N2",
      toLocation: "2800 Skymark Avenue, Mississauga, ON L4W 5A6",
      isRoundTrip: true,
      totalDistance: "56",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "39.20",
      businessPurpose: "Client presentation",
      expenseDescription: "Round trip to Mississauga corporate office for quarterly business review presentation with TechGlobal Inc.",
      costAllocations: [
        {
          id: "sub-mileage-trip-001",
          name: "232900 TECHGLOBAL",
          percentage: 100,
          amount: 39.2,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-techglobal-001",
            poNumber: "232900",
            supplier: "TECHGLOBAL",
            description: "TechGlobal Inc. Q4 Engagement",
            projectId: "22508100-TG-1",
            projectDescription: "TechGlobal Partnership Program 2025",
            projectDbId: 13,
            poDbId: 13,
            supplierId: 13,
            supplierCurrency: "CAD"
          }
        }
      ],
      isEqualSplit: false,
      additionalComments: "Meeting with VP of Operations to discuss 2026 contract renewal"
    },
    submittedAt: "2025-11-19T09:15:00Z",
    createdAt: "2025-11-18T17:30:00Z",
    updatedAt: "2025-11-19T09:15:00Z",
    userId: "user-001"
  },
  {
    id: "30002",
    itemType: ItemCategory.Mileage,
    status: "approved",
    data: {
      formType: "trip",
      mileageType: "Trip",
      expenseDate: "2025-11-10T00:00:00Z",
      fromLocation: "200 Bay Street, Toronto, ON M5J 2J5",
      toLocation: "5500 North Service Road, Burlington, ON L7L 6W6",
      isRoundTrip: true,
      totalDistance: "94",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "65.80",
      businessPurpose: "Warehouse inspection",
      expenseDescription: "Round trip to Burlington distribution center for annual safety inspection and inventory audit",
      costAllocations: [
        {
          id: "sub-mileage-trip-002",
          name: "742400 OPERATIONS",
          percentage: 70,
          amount: 46.06,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-ops-001",
            poNumber: "742400",
            supplier: "OPERATIONS",
            description: "Operations & Logistics",
            projectId: "22505400-OPS-1",
            projectDescription: "Operations Budget 2025",
            projectDbId: 14,
            poDbId: 14,
            supplierId: 14,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "sub-mileage-trip-003",
          name: "22",
          percentage: 30,
          amount: 19.74,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-022",
            number: "22",
            description: "Burlington Warehouse Team"
          }
        }
      ],
      isEqualSplit: false,
      additionalComments: "All safety protocols verified. Minor recommendations documented separately."
    },
    submittedAt: "2025-11-11T08:30:00Z",
    createdAt: "2025-11-10T16:00:00Z",
    updatedAt: "2025-11-12T14:20:00Z",
    approvedAt: "2025-11-12T14:20:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "30003",
    itemType: ItemCategory.Mileage,
    status: "rejected",
    data: {
      formType: "trip",
      mileageType: "Trip",
      expenseDate: "2025-11-05T00:00:00Z",
      fromLocation: "333 Bay Street, Toronto, ON M5H 2R2",
      toLocation: "1 Blue Jays Way, Toronto, ON M5V 1J1",
      isRoundTrip: false,
      totalDistance: "3",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "2.10",
      businessPurpose: "Team event",
      expenseDescription: "One-way trip from office to Rogers Centre for company team building event",
      costAllocations: [
        {
          id: "sub-mileage-trip-004",
          name: "12",
          percentage: 100,
          amount: 2.1,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-012",
            number: "12",
            description: "Engineering Team"
          }
        }
      ],
      isEqualSplit: false,
      additionalComments: "Drove due to equipment transport requirements"
    },
    submittedAt: "2025-11-06T09:00:00Z",
    createdAt: "2025-11-05T18:30:00Z",
    updatedAt: "2025-11-07T11:15:00Z",
    rejectedAt: "2025-11-07T11:15:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "30004",
    itemType: ItemCategory.Mileage,
    status: "cancelled",
    data: {
      formType: "trip",
      mileageType: "Trip",
      expenseDate: "2025-10-28T00:00:00Z",
      fromLocation: "77 King Street West, Toronto, ON M5K 1H1",
      toLocation: "4700 Keele Street, Toronto, ON M3J 1P3",
      isRoundTrip: true,
      totalDistance: "42",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "29.40",
      businessPurpose: "University recruitment",
      expenseDescription: "Round trip to York University campus for fall recruitment fair and career presentations",
      costAllocations: [
        {
          id: "sub-mileage-trip-005",
          name: "742500 HR-RECRUIT",
          percentage: 100,
          amount: 29.4,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-hr-001",
            poNumber: "742500",
            supplier: "HR-RECRUIT",
            description: "HR Recruitment Budget",
            projectId: "22505600-HR-REC",
            projectDescription: "Talent Acquisition 2025",
            projectDbId: 15,
            poDbId: 15,
            supplierId: 15,
            supplierCurrency: "CAD"
          }
        }
      ],
      isEqualSplit: false,
      additionalComments: "Participated in engineering career fair booth setup and student interviews"
    },
    submittedAt: "2025-10-29T08:45:00Z",
    createdAt: "2025-10-28T16:30:00Z",
    updatedAt: "2025-10-30T10:00:00Z",
    cancelledAt: "2025-10-30T10:00:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "30010",
    itemType: ItemCategory.Mileage,
    status: "rejected",
    data: {
      formType: "trip",
      mileageType: "Trip",
      expenseDate: "2025-10-31T00:00:00Z",
      fromLocation: "76 King Street West, Toronto, ON M5K 1H1",
      toLocation: "4767 Keele Street, Toronto, ON M3J 1P3",
      isRoundTrip: false,
      totalDistance: "42",
      ratePerUnit: "0.77",
      rateUnit: "km",
      reimbursableAmount: "39.40",
      businessPurpose: "University recruitment",
      expenseDescription: "Round trip to York University campus for fall recruitment fair and career presentations",
      costAllocations: [],
      deferToApprover: true,
      isEqualSplit: false,
      additionalComments: "Participated in engineering career fair booth setup and student interviews"
    },
    submittedAt: "2025-10-31T08:45:00Z",
    createdAt: "2025-10-28T16:30:00Z",
    updatedAt: "2025-10-30T10:00:00Z",
    rejectedAt: "2025-11-01T10:00:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  // Mileage periods — all statuses
  {
    id: "30005",
    itemType: ItemCategory.Mileage,
    status: "submitted",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-11-16T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-11-22T00:00:00Z")
      },
      totalDistance: "178",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "124.60",
      businessPurpose: "Client site visits",
      expenseDescription: "Weekly mileage for client site visits across the Greater Toronto Area including Markham, Richmond Hill, and North York locations",
      costAllocations: [
        {
          id: "sub-mileage-period-001",
          name: "233100 CLIENT-SVC",
          percentage: 80,
          amount: 99.68,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-client-svc-001",
            poNumber: "233100",
            supplier: "CLIENT-SVC",
            description: "Client Services Q4 2025",
            projectId: "22508200-CS-1",
            projectDescription: "Enterprise Client Services",
            projectDbId: 16,
            poDbId: 16,
            supplierId: 16,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "sub-mileage-period-002",
          name: "Sarah Johnson",
          percentage: 20,
          amount: 24.92,
          type: ECostAllocation.Rep,
          entityData: {
            id: "rep-003",
            name: "Sarah Johnson"
          }
        }
      ],
      isEqualSplit: false,
      supportingFiles: [
        {
          id: "mileage-period-file-001",
          url: "/mocks/mock-pdf.pdf",
          filename: "mileage-log-week47.pdf",
          originalName: "mileage-log-week47.pdf",
          size: 287e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-11-22T18:00:00Z",
          status: "uploaded"
        },
        {
          id: "mileage-period-file-002",
          url: "/mocks/mock-receipt.jpeg",
          filename: "odometer-nov22.jpeg",
          originalName: "odometer-nov22.jpeg",
          size: 165e4,
          type: "jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-11-22T18:05:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Weekly mileage summary with GPS tracking data exported from company fleet app"
    },
    submittedAt: "2025-11-23T09:00:00Z",
    createdAt: "2025-11-16T08:00:00Z",
    updatedAt: "2025-11-23T09:00:00Z",
    userId: "user-001"
  },
  {
    id: "30006",
    itemType: ItemCategory.Mileage,
    status: "approved",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-11-01T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-11-08T00:00:00Z")
      },
      totalDistance: "267",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "186.90",
      businessPurpose: "Field service calls",
      expenseDescription: "First week of November field service calls covering Scarborough, Pickering, and Ajax service areas for scheduled maintenance and emergency repairs",
      costAllocations: [
        {
          id: "sub-mileage-period-003",
          name: "19",
          percentage: 60,
          amount: 112.14,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-019",
            number: "19",
            description: "East GTA Service Team"
          }
        },
        {
          id: "sub-mileage-period-004",
          name: "742600 SERVICE",
          percentage: 40,
          amount: 74.76,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-svc-001",
            poNumber: "742600",
            supplier: "SERVICE",
            description: "Field Service Operations",
            projectId: "22505700-SVC-1",
            projectDescription: "Service Operations Budget 2025",
            projectDbId: 17,
            poDbId: 17,
            supplierId: 17,
            supplierCurrency: "CAD"
          }
        }
      ],
      isEqualSplit: false,
      supportingFiles: [
        {
          id: "mileage-period-file-003",
          url: "/mocks/mock-pdf.pdf",
          filename: "service-calls-report-nov-w1.pdf",
          originalName: "service-calls-report-nov-w1.pdf",
          size: 412e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-11-08T17:30:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Completed 14 service calls. All work orders documented in attached report."
    },
    submittedAt: "2025-11-09T08:00:00Z",
    createdAt: "2025-11-01T07:30:00Z",
    updatedAt: "2025-11-11T10:45:00Z",
    approvedAt: "2025-11-11T10:45:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "30007",
    itemType: ItemCategory.Mileage,
    status: "rejected",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-10-14T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-10-18T00:00:00Z")
      },
      totalDistance: "425",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "297.50",
      businessPurpose: "Personal vehicle for commute",
      expenseDescription: "Weekly commute mileage from home in Oakville to downtown Toronto office during public transit strike",
      costAllocations: [
        {
          id: "sub-mileage-period-005",
          name: "742100 GENERAL",
          percentage: 100,
          amount: 297.5,
          type: ECostAllocation.Admin,
          entityData: {
            id: "admin-gen-001",
            poNumber: "742100",
            supplier: "GENERAL",
            description: "General Administration",
            projectId: "22505100-ADMIN-1",
            projectDescription: "General Administration 2025",
            projectDbId: 18,
            poDbId: 18,
            supplierId: 18,
            supplierCurrency: "CAD"
          }
        }
      ],
      isEqualSplit: false,
      supportingFiles: [
        {
          id: "mileage-period-file-004",
          url: "/mocks/mock-receipt.jpeg",
          filename: "odometer-oct18.jpeg",
          originalName: "odometer-oct18.jpeg",
          size: 142e4,
          type: "jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-10-18T18:00:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Transit strike forced use of personal vehicle for daily commute. Requesting exception for reimbursement."
    },
    submittedAt: "2025-10-19T09:30:00Z",
    createdAt: "2025-10-14T07:00:00Z",
    updatedAt: "2025-10-21T14:00:00Z",
    rejectedAt: "2025-10-21T14:00:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "30008",
    itemType: ItemCategory.Mileage,
    status: "cancelled",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2025-10-07T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2025-10-11T00:00:00Z")
      },
      totalDistance: "156",
      ratePerUnit: "0.70",
      rateUnit: "km",
      reimbursableAmount: "109.20",
      businessPurpose: "Training site visits",
      expenseDescription: "Mileage for training sessions at various client locations in Brampton and Vaughan for new software rollout",
      costAllocations: [
        {
          id: "sub-mileage-period-006",
          name: "233200 TRAINING",
          percentage: 50,
          amount: 54.6,
          type: ECostAllocation.Project,
          entityData: {
            id: "proj-training-001",
            poNumber: "233200",
            supplier: "TRAINING",
            description: "Client Training Program Q4",
            projectId: "22508300-TR-1",
            projectDescription: "Software Training Rollout 2025",
            projectDbId: 19,
            poDbId: 19,
            supplierId: 19,
            supplierCurrency: "CAD"
          }
        },
        {
          id: "sub-mileage-period-007",
          name: "15",
          percentage: 50,
          amount: 54.6,
          type: ECostAllocation.Team,
          entityData: {
            id: "team-015",
            number: "15",
            description: "Training & Development Team"
          }
        }
      ],
      isEqualSplit: true,
      supportingFiles: [
        {
          id: "mileage-period-file-005",
          url: "/mocks/mock-pdf.pdf",
          filename: "training-schedule-oct.pdf",
          originalName: "training-schedule-oct.pdf",
          size: 198e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2025-10-11T16:00:00Z",
          status: "uploaded"
        },
        {
          id: "mileage-period-file-006",
          url: "/mocks/mock-receipt.jpeg",
          filename: "odometer-oct11.jpeg",
          originalName: "odometer-oct11.jpeg",
          size: 158e4,
          type: "jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2025-10-11T16:05:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Training sessions completed at 4 client sites. Feedback forms collected and submitted separately."
    },
    submittedAt: "2025-10-12T08:15:00Z",
    createdAt: "2025-10-07T07:45:00Z",
    updatedAt: "2025-10-14T09:30:00Z",
    cancelledAt: "2025-10-14T09:30:00Z",
    userId: "user-001",
    approver: "manager-001"
  },
  {
    id: "30009",
    itemType: ItemCategory.Mileage,
    status: "approved",
    data: {
      formType: "period",
      mileageType: "Period",
      expensePeriod: {
        from: /* @__PURE__ */ new Date("2024-10-07T00:00:00Z"),
        to: /* @__PURE__ */ new Date("2024-10-11T00:00:00Z")
      },
      totalDistance: "126",
      ratePerUnit: "0.67",
      rateUnit: "km",
      reimbursableAmount: "119.20",
      businessPurpose: "Training site visits",
      expenseDescription: "Mileage for training sessions at various client locations in Brampton and Vaughan for new software rollout",
      deferToApprover: true,
      supportingFiles: [
        {
          id: "mileage-period-file-005",
          url: "/mocks/mock-pdf.pdf",
          filename: "training-schedule-oct.pdf",
          originalName: "training-schedule-oct.pdf",
          size: 198e3,
          type: "pdf",
          mimeType: "application/pdf",
          uploadedAt: "2024-10-11T16:00:00Z",
          status: "uploaded"
        },
        {
          id: "mileage-period-file-006",
          url: "/mocks/mock-receipt.jpeg",
          filename: "odometer-oct11.jpeg",
          originalName: "odometer-oct11.jpeg",
          size: 158e4,
          type: "jpeg",
          mimeType: "image/jpeg",
          uploadedAt: "2024-10-11T16:05:00Z",
          status: "uploaded"
        }
      ],
      additionalComments: "Training sessions completed at 4 client sites. Feedback forms collected and submitted separately."
    },
    submittedAt: "2024-10-12T08:15:00Z",
    createdAt: "2024-10-07T07:45:00Z",
    updatedAt: "2024-10-14T09:30:00Z",
    approvedAt: "2024-10-14T09:30:00Z",
    userId: "user-001",
    approver: "manager-001"
  }
];
const store = {
  expenseDrafts: new Map(mockExpenseDrafts.map((d) => [d.id, d])),
  expenseSubmitted: new Map(mockSubmittedExpenses.map((s) => [s.id, s])),
  mileageDrafts: new Map(mockMileageDrafts.map((d) => [d.id, d])),
  mileageSubmitted: new Map(mockSubmittedMileage.map((s) => [s.id, s])),
  rawRequests: /* @__PURE__ */ new Map()
};
function getExpenseDrafts() {
  return store.expenseDrafts;
}
function getExpenseSubmitted() {
  return store.expenseSubmitted;
}
function getMileageDrafts() {
  return store.mileageDrafts;
}
function getMileageSubmitted() {
  return store.mileageSubmitted;
}
function findItemById(id) {
  const expenseDraft = store.expenseDrafts.get(id);
  if (expenseDraft) {
    return { item: expenseDraft, itemType: "expense" };
  }
  const expenseSubmitted = store.expenseSubmitted.get(id);
  if (expenseSubmitted) {
    return { item: expenseSubmitted, itemType: "expense" };
  }
  const mileageDraft = store.mileageDrafts.get(id);
  if (mileageDraft) {
    return { item: mileageDraft, itemType: "mileage" };
  }
  const mileageSubmitted = store.mileageSubmitted.get(id);
  if (mileageSubmitted) {
    return { item: mileageSubmitted, itemType: "mileage" };
  }
  return { item: null, itemType: null };
}
function addExpenseDraft(draft) {
  store.expenseDrafts.set(draft.id, draft);
}
function updateExpenseDraft(id, draft) {
  store.expenseDrafts.set(id, draft);
}
function addExpenseSubmitted(item) {
  store.expenseSubmitted.set(item.id, item);
}
function addMileageDraft(draft) {
  store.mileageDrafts.set(draft.id, draft);
}
function updateMileageDraft(id, draft) {
  store.mileageDrafts.set(id, draft);
}
function addMileageSubmitted(item) {
  store.mileageSubmitted.set(item.id, item);
}
function setRawRequest(id, data) {
  store.rawRequests.set(id, data);
}
function getRawRequest(id) {
  return store.rawRequests.get(id);
}
function findDraftById(id) {
  const expenseDraft = store.expenseDrafts.get(id);
  if (expenseDraft) return { draft: expenseDraft, category: "expense" };
  const mileageDraft = store.mileageDrafts.get(id);
  if (mileageDraft) return { draft: mileageDraft, category: "mileage" };
  return { draft: null, category: null };
}
function deleteDraftById(id) {
  if (store.expenseDrafts.has(id)) {
    store.rawRequests.delete(id);
    return store.expenseDrafts.delete(id);
  }
  if (store.mileageDrafts.has(id)) {
    store.rawRequests.delete(id);
    return store.mileageDrafts.delete(id);
  }
  return false;
}
const uploadedFiles = /* @__PURE__ */ new Map();
function getUploadedFile(id) {
  return uploadedFiles.get(id);
}
function addUploadedFile(file) {
  uploadedFiles.set(file.id, file);
}
function deleteUploadedFile(id) {
  return uploadedFiles.delete(id);
}
function hasUploadedFile(id) {
  return uploadedFiles.has(id);
}
const mockBusinessPurposes = {
  // Real backend company IDs (from logical-companies API)
  "HTSON": [
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
  "KORE": [
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
const mockLogicalCompanies = [
  {
    id: 1,
    physicalCompanyId: 1,
    logicalCompanyName: "HTS Ontario",
    logicalCompanyShortName: "HTSON",
    defaultLogicalCompany: true
  },
  {
    id: 2,
    physicalCompanyId: 1,
    logicalCompanyName: "Kore",
    logicalCompanyShortName: "KORE",
    defaultLogicalCompany: false
  }
];
const mockFormTypes = [
  {
    id: 1,
    physicalCompanyId: 1,
    logicalCompanyId: 1,
    formTypeName: "Standard",
    formTypeDescription: "Standard expense form for general business expenses",
    mileageRateRequired: false
  },
  {
    id: 2,
    physicalCompanyId: 1,
    logicalCompanyId: 1,
    formTypeName: "Mileage",
    formTypeDescription: "Mileage expense form for vehicle-related business travel with rate tracking",
    mileageRateRequired: true
  },
  {
    id: 3,
    physicalCompanyId: 1,
    logicalCompanyId: 1,
    formTypeName: "Entertainment",
    formTypeDescription: "Entertainment expense form for business entertainment",
    mileageRateRequired: false
  }
];
const mockExpenseTypes = {
  "HTSON": [
    {
      id: 1,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: 1,
      expenseTypeName: "General Expense",
      expenseTypeDescription: "Standard business expenses",
      isActive: true,
      isDefault: true,
      assignedEmployeeCount: 0,
      mileageRateId: null,
      mileageEffectiveRate: null,
      unitOfMeasurement: null,
      taxTypeId: null,
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-01-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 2,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: 1,
      expenseTypeName: "Travel Expense",
      expenseTypeDescription: "Business travel related expenses",
      isActive: true,
      isDefault: true,
      assignedEmployeeCount: 0,
      mileageRateId: null,
      mileageEffectiveRate: null,
      unitOfMeasurement: null,
      taxTypeId: null,
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-01-02T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 3,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: 1,
      expenseTypeName: "Office Supplies",
      expenseTypeDescription: "Office supplies and equipment",
      isActive: false,
      isDefault: true,
      assignedEmployeeCount: 0,
      mileageRateId: null,
      mileageEffectiveRate: null,
      unitOfMeasurement: null,
      taxTypeId: null,
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-01-03T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 4,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: 2,
      expenseTypeName: "Mileage with Allowance",
      expenseTypeDescription: "Mileage reimbursement with daily allowance",
      isActive: true,
      isDefault: true,
      assignedEmployeeCount: 0,
      mileageRateId: 4,
      mileageEffectiveRate: {
        id: 1,
        mileageRateId: 4,
        rate: 0.7,
        effectiveDate: "2025-01-01T00:00:00Z",
        expiryDate: null,
        active: true,
        createdBy: "00000000-0000-0000-0000-000000000000",
        createdDate: "2024-12-01T00:00:00Z",
        updatedBy: null,
        updatedDate: null
      },
      unitOfMeasurement: "mile",
      taxTypeId: 1,
      // HST - 13.000%
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-01-04T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 5,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: 2,
      expenseTypeName: "Mileage Personal Vehicle",
      expenseTypeDescription: "Personal vehicle mileage reimbursement",
      isActive: true,
      isDefault: false,
      assignedEmployeeCount: 0,
      mileageRateId: 5,
      mileageEffectiveRate: {
        id: 3,
        mileageRateId: 5,
        rate: 0.72,
        effectiveDate: "2025-01-01T00:00:00Z",
        expiryDate: null,
        active: true,
        createdBy: "00000000-0000-0000-0000-000000000000",
        createdDate: "2024-12-01T00:00:00Z",
        updatedBy: null,
        updatedDate: null
      },
      unitOfMeasurement: "km",
      taxTypeId: 2,
      // GST - 5.000%
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-01-05T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 6,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: 2,
      expenseTypeName: "Mileage w/out Allowance",
      expenseTypeDescription: "Mileage tracking without allowance (inactive)",
      isActive: false,
      isDefault: false,
      assignedEmployeeCount: 0,
      mileageRateId: 6,
      mileageEffectiveRate: {
        id: 4,
        mileageRateId: 6,
        rate: 0.65,
        effectiveDate: "2025-01-01T00:00:00Z",
        expiryDate: null,
        active: true,
        createdBy: "00000000-0000-0000-0000-000000000000",
        createdDate: "2024-12-01T00:00:00Z",
        updatedBy: null,
        updatedDate: null
      },
      unitOfMeasurement: "mile",
      taxTypeId: 1,
      // HST - 13.000%
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-01-06T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 7,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: 3,
      expenseTypeName: "Entertainment - other",
      expenseTypeDescription: "Entertainment expense for HTSON",
      isActive: true,
      isDefault: true,
      assignedEmployeeCount: 0,
      mileageRateId: null,
      mileageEffectiveRate: null,
      unitOfMeasurement: null,
      taxTypeId: null,
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-02-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    }
  ],
  "KORE": [
    {
      id: 7,
      physicalCompanyId: 1,
      logicalCompanyId: 2,
      formTypeId: 1,
      expenseTypeName: "Standard Expense",
      expenseTypeDescription: "General business expenses for Kore",
      isActive: true,
      isDefault: true,
      assignedEmployeeCount: 0,
      mileageRateId: null,
      mileageEffectiveRate: null,
      unitOfMeasurement: null,
      taxTypeId: null,
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-02-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 8,
      physicalCompanyId: 1,
      logicalCompanyId: 2,
      formTypeId: 2,
      expenseTypeName: "Mileage Client Visit",
      expenseTypeDescription: "Client visit mileage reimbursement",
      isActive: true,
      isDefault: true,
      assignedEmployeeCount: 0,
      mileageRateId: 8,
      mileageEffectiveRate: {
        id: 5,
        mileageRateId: 8,
        rate: 0.67,
        effectiveDate: "2025-01-01T00:00:00Z",
        expiryDate: null,
        active: true,
        createdBy: "00000000-0000-0000-0000-000000000000",
        createdDate: "2024-12-15T00:00:00Z",
        updatedBy: null,
        updatedDate: null
      },
      unitOfMeasurement: "mile",
      taxTypeId: 1,
      // HST - 13.000%
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: "2024-02-02T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    }
  ]
};
const mockMileageRates = {
  "HTSON-4": [
    {
      id: 1,
      mileageRateId: 4,
      rate: 0.585,
      effectiveDate: "2022-01-01T00:00:00Z",
      expiryDate: "2023-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2021-12-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 2,
      mileageRateId: 4,
      rate: 0.655,
      effectiveDate: "2024-01-01T00:00:00Z",
      expiryDate: "2024-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2023-12-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 3,
      mileageRateId: 4,
      rate: 0.7,
      effectiveDate: "2025-01-01T00:00:00Z",
      expiryDate: "2025-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.CURRENT,
      createdBy: "system",
      createdDate: "2024-12-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 4,
      mileageRateId: 4,
      rate: 0.72,
      effectiveDate: "2026-01-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.FUTURE,
      createdBy: "system",
      createdDate: "2025-01-05T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    }
  ],
  "HTSON-5": [
    {
      id: 10,
      mileageRateId: 5,
      rate: 0.56,
      effectiveDate: "2023-01-01T00:00:00Z",
      expiryDate: "2023-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2022-12-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 11,
      mileageRateId: 5,
      rate: 0.68,
      effectiveDate: "2024-01-01T00:00:00Z",
      expiryDate: "2024-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2023-12-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 12,
      mileageRateId: 5,
      rate: 0.72,
      effectiveDate: "2025-01-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.CURRENT,
      createdBy: "system",
      createdDate: "2024-12-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 13,
      mileageRateId: 5,
      rate: 0.75,
      effectiveDate: "2026-03-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.FUTURE,
      createdBy: "admin",
      createdDate: "2025-01-08T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    }
  ],
  "HTSON-6": [
    {
      id: 20,
      mileageRateId: 6,
      rate: 0.58,
      effectiveDate: "2023-06-01T00:00:00Z",
      expiryDate: "2024-05-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2023-05-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 21,
      mileageRateId: 6,
      rate: 0.62,
      effectiveDate: "2024-06-01T00:00:00Z",
      expiryDate: "2024-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2024-05-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 22,
      mileageRateId: 6,
      rate: 0.65,
      effectiveDate: "2025-01-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.CURRENT,
      createdBy: "system",
      createdDate: "2024-12-01T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 23,
      mileageRateId: 6,
      rate: 0.68,
      effectiveDate: "2026-06-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.FUTURE,
      createdBy: "admin",
      createdDate: "2025-01-07T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    }
  ],
  "KORE-8": [
    {
      id: 30,
      mileageRateId: 8,
      rate: 0.55,
      effectiveDate: "2023-01-01T00:00:00Z",
      expiryDate: "2023-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2022-12-15T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 31,
      mileageRateId: 8,
      rate: 0.6,
      effectiveDate: "2024-01-01T00:00:00Z",
      expiryDate: "2024-12-31T00:00:00Z",
      active: true,
      status: MileageRateStatus.PAST,
      createdBy: "system",
      createdDate: "2023-12-15T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 32,
      mileageRateId: 8,
      rate: 0.67,
      effectiveDate: "2025-01-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.CURRENT,
      createdBy: "system",
      createdDate: "2024-12-15T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 33,
      mileageRateId: 8,
      rate: 0.7,
      effectiveDate: "2026-01-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.FUTURE,
      createdBy: "admin",
      createdDate: "2025-01-06T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    },
    {
      id: 34,
      mileageRateId: 8,
      rate: 0.73,
      effectiveDate: "2026-07-01T00:00:00Z",
      expiryDate: null,
      active: true,
      status: MileageRateStatus.FUTURE,
      createdBy: "admin",
      createdDate: "2025-01-08T00:00:00Z",
      updatedBy: null,
      updatedDate: null
    }
  ]
};
const businessPurposeStore = /* @__PURE__ */ new Map();
Object.entries(mockBusinessPurposes).forEach(([companyId, purposes]) => {
  businessPurposeStore.set(companyId, new Map(purposes.map((bp) => [bp.id, bp])));
});
function getBusinessPurposes(companyId) {
  const companyPurposes = businessPurposeStore.get(companyId);
  return companyPurposes ? Array.from(companyPurposes.values()) : [];
}
function addBusinessPurpose(companyId, purpose) {
  let companyPurposes = businessPurposeStore.get(companyId);
  if (!companyPurposes) {
    companyPurposes = /* @__PURE__ */ new Map();
    businessPurposeStore.set(companyId, companyPurposes);
  }
  companyPurposes.set(purpose.id, purpose);
}
function updateBusinessPurpose(companyId, purposeId, updates) {
  const companyPurposes = businessPurposeStore.get(companyId);
  const existing = companyPurposes == null ? void 0 : companyPurposes.get(purposeId);
  if (!existing) return null;
  const updated = { ...existing, ...updates, id: existing.id, created: existing.created };
  companyPurposes == null ? void 0 : companyPurposes.set(purposeId, updated);
  return updated;
}
function deleteBusinessPurpose(companyId, purposeId) {
  const companyPurposes = businessPurposeStore.get(companyId);
  const bp = companyPurposes == null ? void 0 : companyPurposes.get(purposeId);
  if (!bp) return false;
  bp.isActive = false;
  bp.modified = /* @__PURE__ */ new Date();
  return true;
}
const expenseTypeStore = /* @__PURE__ */ new Map();
Object.entries(mockExpenseTypes).forEach(([companyId, types]) => {
  expenseTypeStore.set(companyId, [...types]);
});
let nextExpenseTypeId = 100;
function getNextExpenseTypeId() {
  return nextExpenseTypeId++;
}
function getExpenseTypes(companyShortName) {
  return expenseTypeStore.get(companyShortName) || [];
}
function getExpenseType(companyShortName, id) {
  const types = expenseTypeStore.get(companyShortName) || [];
  return types.find((t) => t.id === id);
}
function addExpenseType(companyShortName, expenseType) {
  let types = expenseTypeStore.get(companyShortName);
  if (!types) {
    types = [];
    expenseTypeStore.set(companyShortName, types);
  }
  types.push(expenseType);
}
function updateExpenseType(companyShortName, id, updates) {
  const types = expenseTypeStore.get(companyShortName) || [];
  const index = types.findIndex((t) => t.id === id);
  if (index === -1) return null;
  const existing = types[index];
  const filteredUpdates = Object.fromEntries(
    Object.entries(updates).filter(([, v]) => v !== void 0)
  );
  const updated = { ...existing, ...filteredUpdates, id: existing.id };
  types[index] = updated;
  return updated;
}
const mileageRatesStore = /* @__PURE__ */ new Map();
Object.entries(mockMileageRates).forEach(([key, rates]) => {
  mileageRatesStore.set(key, [...rates]);
});
let nextMileageRateId = 100;
function getNextMileageRateId() {
  return nextMileageRateId++;
}
function getMileageRatesKey(companyShortName, expenseTypeId) {
  return `${companyShortName}-${expenseTypeId}`;
}
function getMileageRates(companyShortName, expenseTypeId) {
  const key = getMileageRatesKey(companyShortName, expenseTypeId);
  return mileageRatesStore.get(key) || [];
}
function setMileageRates(companyShortName, expenseTypeId, rates) {
  const key = getMileageRatesKey(companyShortName, expenseTypeId);
  mileageRatesStore.set(key, rates);
}
function generateDefaultMileageRates(expenseTypeId) {
  const now = /* @__PURE__ */ new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const pastRate = {
    id: getNextMileageRateId(),
    mileageRateId: expenseTypeId,
    rate: 0.585,
    effectiveDate: new Date(currentYear - 2, 0, 1).toISOString(),
    expiryDate: new Date(currentYear - 1, 11, 31).toISOString(),
    active: true,
    status: MileageRateStatus.PAST,
    createdBy: "system",
    createdDate: new Date(currentYear - 2, 0, 1).toISOString(),
    updatedBy: null,
    updatedDate: null
  };
  const currentRate = {
    id: getNextMileageRateId(),
    mileageRateId: expenseTypeId,
    rate: 0.67,
    effectiveDate: new Date(currentYear, 0, 1).toISOString(),
    expiryDate: null,
    active: true,
    status: MileageRateStatus.CURRENT,
    createdBy: "system",
    createdDate: new Date(currentYear - 1, 11, 1).toISOString(),
    updatedBy: null,
    updatedDate: null
  };
  const futureMonth = (currentMonth + 3) % 12;
  const futureYear = currentYear + Math.floor((currentMonth + 3) / 12);
  const futureRate = {
    id: getNextMileageRateId(),
    mileageRateId: expenseTypeId,
    rate: 0.7,
    effectiveDate: new Date(futureYear, futureMonth, 1).toISOString(),
    expiryDate: null,
    active: true,
    status: MileageRateStatus.FUTURE,
    createdBy: "system",
    createdDate: (/* @__PURE__ */ new Date()).toISOString(),
    updatedBy: null,
    updatedDate: null
  };
  return [pastRate, currentRate, futureRate];
}
function validateFile(file) {
  const allowedTypes = Object.values(AllowedMimeType);
  if (!file.type) {
    return {
      isValid: false,
      error: "File type is required. Please ensure file has valid MIME type."
    };
  }
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: "Unsupported file type. Only PNG, JPEG, HEIF, HEIC, WebP and PDF files are allowed."
    };
  }
  const mimeTypeConfig = MIME_TYPE_CONFIG.get(file.type);
  if (!mimeTypeConfig) {
    return {
      isValid: false,
      error: "Unsupported file type."
    };
  }
  if (file.size > mimeTypeConfig.maxSizeBytes) {
    return {
      isValid: false,
      error: `File size exceeds ${mimeTypeConfig.maxSizeMB}MB limit for ${mimeTypeConfig.displayName} files.`
    };
  }
  return { isValid: true };
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
function base64ToBuffer(base64DataUrl) {
  const base64Data = base64DataUrl.split(",")[1];
  return Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
}
function generateFileId() {
  return `file_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
const MOCKED_ENDPOINTS_CONFIG = [
  // FILE ENDPOINTS
  // {
  //   path: ENDPOINT_REGEX.FILES_UPLOAD,
  //   description: 'File upload (receipt/supporting)',
  // },
  // {
  //   path: ENDPOINT_REGEX.FILES_BY_ID,
  //   description: 'File download/delete by ID',
  // },
  // EXPENSE FORM ENDPOINTS (unified — expense, mileage trip, mileage period)
  // {
  //   path: ENDPOINT_REGEX.EXPENSE_FORMS_DRAFTS,
  //   errorProbability: 0,
  //   description: 'Expense form drafts CRUD (create/update/delete)',
  // },
  // {
  //   path: ENDPOINT_REGEX.EXPENSE_FORMS_LIST,
  //   errorProbability: 0,
  //   description: 'Expense forms list (with company path parameter)',
  // },
  // {
  //   path: ENDPOINT_REGEX.EXPENSE_ITEM_BY_ID,
  //   description: 'Get expense item by ID (unified)',
  // },
  // {
  //   path: ENDPOINT_REGEX.EXPENSES_LIST_UNIFIED,
  //   description: 'Unified expenses list with filtering/sorting',
  // },
  // CONFIGURATION ENDPOINTS
  // {
  //   path: ENDPOINT_REGEX.CONFIG_LOGICAL_COMPANIES,
  //   description: 'Logical companies list',
  // },
  // {
  //   path: ENDPOINT_REGEX.CONFIG_FORM_TYPES,
  //   description: 'Form types configuration',
  // },
  // {
  //   path: ENDPOINT_REGEX.CONFIG_EXPENSE_TYPES,
  //   description: 'Expense types configuration',
  // },
  // {
  //   path: ENDPOINT_REGEX.CONFIG_BUSINESS_PURPOSES,
  //   description: 'Business purposes CRUD',
  // },
  // {
  //   path: ENDPOINT_REGEX.CONFIG_CURRENCIES,
  //   description: 'Currencies configuration',
  // },
  // {
  //   path: ENDPOINT_REGEX.CONFIG_COUNTRIES,
  //   description: 'Countries configuration',
  // },
  // {
  //   path: ENDPOINT_REGEX.CONFIG_MILEAGE_RATES,
  //   description: 'Mileage rates configuration',
  // },
  // {
  //   path: ENDPOINT_REGEX.CONFIG_TAX_TYPES_DISPLAY,
  //   description: 'Tax types display configuration',
  // },
];
const MOCKED_ENDPOINT_PATHS = MOCKED_ENDPOINTS_CONFIG.filter(
  (config) => typeof config.path === "string"
).map((config) => config.path);
const MOCKED_ENDPOINT_PATTERNS = MOCKED_ENDPOINTS_CONFIG.filter(
  (config) => config.path instanceof RegExp
).map((config) => config.path);
const shouldMockEndpoint = (url) => {
  const urlString = typeof url === "string" ? url : url.toString();
  const hasExactMatch = MOCKED_ENDPOINT_PATHS.some((path) => urlString.includes(path));
  if (hasExactMatch) return true;
  return MOCKED_ENDPOINT_PATTERNS.some((pattern) => pattern.test(urlString));
};
const getEndpointErrorProbability = (endpoint) => {
  const config = MOCKED_ENDPOINTS_CONFIG.find((c) => {
    if (c.path instanceof RegExp) {
      return c.path.test(endpoint);
    }
    return endpoint.includes(c.path);
  });
  return config == null ? void 0 : config.errorProbability;
};
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
const generateMockError = (_endpoint) => {
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
let businessIdCounter = 1e5;
function generateBusinessId() {
  businessIdCounter += 1;
  return String(businessIdCounter);
}
function createExpenseDraftResponse(id, businessId, data, isNew, existingCreatedDate) {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  return {
    id,
    businessId,
    typeId: data.typeId ?? 0,
    vendor: data.vendor ?? "",
    date: data.date ?? now,
    periodStart: data.periodStart ?? now,
    periodEnd: data.periodEnd ?? now,
    countryId: data.locationId ?? 0,
    paymentMethodId: data.paymentMethodId ?? 0,
    effectiveMileageRateId: data.effectiveMileageRateId ?? 0,
    taxTypeId: data.taxTypeId ?? 0,
    tax: data.tax ?? 0,
    foreignAmount: data.foreignAmount ?? 0,
    totalAmount: data.totalAmount ?? 0,
    businessPurposeId: data.businessPurposeId ?? 0,
    description: data.description ?? "",
    personsEntertained: data.personsEntertained ?? "",
    additionalComments: data.additionalComments ?? "",
    affidavitJustification: data.affidavitJustification ?? "",
    affidavitInitials: data.affidavitInitials ?? "",
    taxCurrencyCode: data.taxCurrencyCode ?? "",
    foreignCurrencyCode: data.foreignCurrencyCode ?? "",
    totalCurrencyCode: data.totalCurrencyCode ?? "",
    physicalCompanyId: 1,
    logicalCompanyId: 1,
    status: ExpenseFormStatus.Draft,
    formOwner: "00000000-0000-0000-0000-000000000000",
    costAllocations: (data.costAllocations ?? []).map((ca) => ({
      ...ca,
      createdDate: now,
      updatedDate: null
    })),
    costAllocationDeferred: data.costAllocationDeferred ?? false,
    fromLocation: data.fromLocation ?? "",
    toLocation: data.toLocation ?? "",
    totalDistance: data.totalDistance ?? 0,
    roundTrip: data.roundTrip ?? false,
    createdBy: "00000000-0000-0000-0000-000000000000",
    createdDate: isNew ? now : existingCreatedDate ?? now,
    updatedBy: isNew ? null : "00000000-0000-0000-0000-000000000000",
    updatedDate: isNew ? null : now
  };
}
function reverseMapToMileageFormData(data) {
  const isTrip = data.fromLocation != null || data.toLocation != null || data.roundTrip != null;
  const common = {
    mileageType: String(data.typeId ?? ""),
    totalDistance: String(data.totalDistance ?? ""),
    ratePerUnit: "",
    rateUnit: "",
    reimbursableAmount: String(data.totalAmount ?? ""),
    businessPurpose: String(data.businessPurposeId ?? ""),
    expenseDescription: data.description ?? "",
    additionalComments: data.additionalComments ?? void 0,
    deferToApprover: data.costAllocationDeferred ?? void 0
  };
  if (isTrip) {
    return {
      ...common,
      formType: "trip",
      expenseDate: data.date ?? "",
      fromLocation: data.fromLocation ?? "",
      toLocation: data.toLocation ?? "",
      isRoundTrip: data.roundTrip ?? false
    };
  }
  return {
    ...common,
    formType: "period",
    expensePeriod: {
      from: data.periodStart ? new Date(data.periodStart) : /* @__PURE__ */ new Date(),
      to: data.periodEnd ? new Date(data.periodEnd) : /* @__PURE__ */ new Date()
    }
  };
}
function reverseMapToExpenseFormData(data) {
  return {
    expenseType: String(data.typeId ?? ""),
    vendor: data.vendor ?? "",
    expenseDate: data.date ?? (/* @__PURE__ */ new Date()).toISOString(),
    expenseLocation: String(data.locationId ?? ""),
    paymentMethod: String(data.paymentMethodId ?? ""),
    netAmount: String(data.foreignAmount ?? ""),
    totalAmount: String(data.totalAmount ?? ""),
    businessPurpose: String(data.businessPurposeId ?? ""),
    expenseDescription: data.description ?? "",
    personsEntertained: data.personsEntertained ?? void 0,
    additionalComments: data.additionalComments ?? void 0
  };
}
function isMileageRequest(data) {
  return data.formTypeId === FormTypeId.MILEAGE;
}
function buildMileageDraftMock(draftId, data, createdDate) {
  return {
    id: draftId,
    itemType: ItemCategory.Mileage,
    status: "draft",
    data: reverseMapToMileageFormData(data),
    createdAt: createdDate,
    updatedAt: createdDate,
    userId: "current-user"
  };
}
function buildExpenseDraftMock(draftId, data, createdDate) {
  return {
    id: draftId,
    itemType: ItemCategory.Expense,
    status: "draft",
    data: reverseMapToExpenseFormData(data),
    createdAt: createdDate,
    updatedAt: createdDate,
    userId: "current-user"
  };
}
function buildSubmittedMileageMock(draft) {
  return {
    id: draft.id,
    itemType: ItemCategory.Mileage,
    status: "submitted",
    data: draft.data,
    submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
    createdAt: draft.createdAt,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    userId: draft.userId
  };
}
function buildSubmittedExpenseMock(draft) {
  return {
    id: draft.id,
    itemType: ItemCategory.Expense,
    status: "submitted",
    data: draft.data,
    submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
    createdAt: draft.createdAt,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    userId: draft.userId
  };
}
function calculateRateStatus(effectiveDate, expiryDate, isExpenseTypeActive) {
  if (!isExpenseTypeActive) {
    return MileageRateStatus.INACTIVE;
  }
  const now = /* @__PURE__ */ new Date();
  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const effectiveMonth = new Date(effectiveDate);
  effectiveMonth.setDate(1);
  if (expiryDate) {
    const expiryMonth = new Date(expiryDate);
    expiryMonth.setDate(1);
    if (expiryMonth < currentMonth) {
      return MileageRateStatus.PAST;
    }
  }
  if (effectiveMonth > currentMonth) {
    return MileageRateStatus.FUTURE;
  }
  if (!expiryDate || new Date(expiryDate) >= currentMonth) {
    return MileageRateStatus.CURRENT;
  }
  return MileageRateStatus.PAST;
}
function recalculateAllRateStatuses(rates, isExpenseTypeActive) {
  return rates.map((rate) => ({
    ...rate,
    status: calculateRateStatus(rate.effectiveDate, rate.expiryDate, isExpenseTypeActive)
  }));
}
function sortRatesByStatus(rates) {
  const statusOrder = {
    [MileageRateStatus.FUTURE]: 0,
    [MileageRateStatus.CURRENT]: 1,
    [MileageRateStatus.PAST]: 2,
    [MileageRateStatus.INACTIVE]: 3
  };
  return [...rates].sort((a, b) => {
    const statusDiff = statusOrder[a.status] - statusOrder[b.status];
    if (statusDiff !== 0) return statusDiff;
    return new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime();
  });
}
const mapMockToExpenseFormResponse = (item, index) => {
  var _a;
  const numericId = parseInt(item.id.replace(/\D/g, ""), 10) || index + 1;
  const businessId = item.id.length >= 6 ? item.id.slice(0, 6) : String(100001 + index);
  const normalizedStatus = item.status.charAt(0).toUpperCase() + item.status.slice(1);
  return {
    id: numericId,
    businessId,
    expenseDate: item.data.expenseDate,
    expenseType: item.data.expenseType ?? "Expense",
    vendor: item.data.vendor ?? "",
    totalAmount: item.data.totalAmount ?? "0",
    totalAmountCurrencyCode: ((_a = item.data.totalCurrency) == null ? void 0 : _a.code) ?? "USD",
    paymentMethod: item.data.paymentMethod ?? "Out of Pocket",
    status: normalizedStatus,
    createdDate: item.createdAt
  };
};
export {
  getBusinessPurposes as $,
  buildSubmittedMileageMock as A,
  addExpenseSubmitted as B,
  buildSubmittedExpenseMock as C,
  shouldSimulateError as D,
  ENDPOINT_PATTERNS as E,
  generateMockError as F,
  ExpenseFormStatus as G,
  mockLogicalCompanies as H,
  mockFormTypes as I,
  getExpenseTypes as J,
  getNextExpenseTypeId as K,
  addExpenseType as L,
  updateExpenseType as M,
  getExpenseType as N,
  getMileageRates as O,
  recalculateAllRateStatuses as P,
  sortRatesByStatus as Q,
  getNextMileageRateId as R,
  setMileageRates as S,
  calculateRateStatus as T,
  getExpenseSubmitted as U,
  mapMockToExpenseFormResponse as V,
  getMileageSubmitted as W,
  findItemById as X,
  shouldMockEndpoint as Y,
  createAxiosError as Z,
  ENDPOINT_REGEX as _,
  addUploadedFile as a,
  addBusinessPurpose as a0,
  updateBusinessPurpose as a1,
  deleteBusinessPurpose as a2,
  generateDefaultMileageRates as a3,
  getUploadedFile as b,
  base64ToBuffer as c,
  deleteUploadedFile as d,
  generateBusinessId as e,
  fileToBase64 as f,
  generateFileId as g,
  hasUploadedFile as h,
  isMileageRequest as i,
  createExpenseDraftResponse as j,
  addMileageDraft as k,
  buildMileageDraftMock as l,
  addExpenseDraft as m,
  buildExpenseDraftMock as n,
  findDraftById as o,
  reverseMapToExpenseFormData as p,
  updateExpenseDraft as q,
  reverseMapToMileageFormData as r,
  setRawRequest as s,
  getRawRequest as t,
  updateMileageDraft as u,
  validateFile as v,
  getExpenseDrafts as w,
  getMileageDrafts as x,
  deleteDraftById as y,
  addMileageSubmitted as z
};

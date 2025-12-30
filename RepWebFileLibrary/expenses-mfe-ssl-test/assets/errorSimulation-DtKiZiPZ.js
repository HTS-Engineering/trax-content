import { E as ECostAllocation } from "./cost-allocation-DRGo4_AN.js";
import { g as getEndpointErrorProbability } from "./config-Ccvmi0cL.js";
const mockExpenseDrafts = [
  {
    id: "10150",
    itemType: "expense",
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
            projectDescription: "Corporate IT Equipment Program"
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
    itemType: "expense",
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
            projectDescription: "Sales & Business Development 2025"
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
    itemType: "expense",
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
    itemType: "expense",
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
            projectDescription: "General Administration 2025"
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
    itemType: "expense",
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
    itemType: "expense",
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
            code: "22505300-OPS-1",
            description: "Operations Budget 2025"
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
    itemType: "expense",
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
            code: "22505100-ADMIN-1",
            description: "General Administration 2025"
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
    itemType: "expense",
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
            teamNumber: "08",
            teamName: "IT Support Team"
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
    itemType: "expense",
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
            teamNumber: "12",
            teamName: "Engineering Team"
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
    itemType: "expense",
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
            code: "22505200-SALES-1",
            description: "Sales & Business Development 2025"
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
    itemType: "expense",
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
            code: "22505100-ADMIN-1",
            description: "General Administration 2025"
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
    itemType: "expense",
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
    itemType: "expense",
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
    itemType: "expense",
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
    itemType: "expense",
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
            code: "22505400-MKTG-1",
            description: "Marketing Budget 2025"
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
    itemType: "expense",
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
            code: "22505500-LEGAL-1",
            description: "Legal & Compliance 2025"
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
    itemType: "expense",
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
            code: "22505600-HR-1",
            description: "Human Resources 2025"
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
    itemType: "expense",
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
      ]
    },
    createdAt: "2025-10-16T11:30:00Z",
    updatedAt: "2025-10-16T11:30:00Z",
    userId: "user-001"
  }
];
const mockSubmittedExpenses = [
  {
    id: "100001",
    itemType: "expense",
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
            projectDescription: "Harbour 60 Toronto - Service 2025/2026"
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
            projectDescription: "Harbour 60 Toronto - Service 2025/2026"
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
    itemType: "expense",
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
            projectDescription: "Harbour 60 Toronto - Service 2025/2026"
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
            projectDescription: "Harbour 60 Toronto - Service 2025/2026"
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
    itemType: "expense",
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
            projectDescription: "Harbour 60 Toronto - Service 2025/2026"
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
            projectDescription: "Harbour 60 Toronto - Service 2025/2026"
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
    itemType: "expense",
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
            teamNumber: "15",
            teamName: "Calgary Operations"
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
    itemType: "expense",
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
            code: "22505100-ADMIN-1",
            description: "General Administration 2025"
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
    itemType: "expense",
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
    itemType: "expense",
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
            code: "22505400-MKTG-1",
            description: "Marketing Budget 2025"
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
    itemType: "expense",
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
            code: "22505700-EXEC-1",
            description: "Executive Operations 2025"
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
    itemType: "expense",
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
            teamNumber: "12",
            teamName: "Engineering Team"
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
    itemType: "expense",
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
    itemType: "expense",
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
            code: "22505600-HR-1",
            description: "Human Resources 2025"
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
    itemType: "expense",
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
    itemType: "expense",
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
            code: "22505100-ADMIN-1",
            description: "General Administration 2025"
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
    itemType: "expense",
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
            code: "22505600-HR-1",
            description: "Human Resources 2025"
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
    itemType: "expense",
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
            code: "22505200-SALES-1",
            description: "Sales & Business Development 2025"
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
    itemType: "expense",
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
            teamNumber: "12",
            teamName: "Engineering Team"
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
    itemType: "expense",
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
    itemType: "expense",
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
            code: "22505100-ADMIN-1",
            description: "General Administration 2025"
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
    itemType: "expense",
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
            code: "22505600-HR-1",
            description: "Human Resources 2025"
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
    itemType: "expense",
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
    itemType: "expense",
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
            code: "22505100-ADMIN-1",
            description: "General Administration 2025"
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
  }
];
const mockMileageDrafts = [
  {
    id: "20135",
    itemType: "mileage",
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
            projectDescription: "Corporate Travel Budget 2025"
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
            projectDescription: "Enterprise Client Services Program"
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
    itemType: "mileage",
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
            projectDescription: "Logistics & Distribution Center Support"
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
    itemType: "mileage",
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
  }
];
const mockSubmittedMileage = [
  // ============================================
  // MILEAGE TRIP - All Statuses
  // ============================================
  {
    id: "30001",
    itemType: "mileage",
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
            projectDescription: "TechGlobal Partnership Program 2025"
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
    itemType: "mileage",
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
            projectDescription: "Operations Budget 2025"
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
    itemType: "mileage",
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
    itemType: "mileage",
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
            projectDescription: "Talent Acquisition 2025"
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
  // ============================================
  // MILEAGE PERIOD - All Statuses
  // ============================================
  {
    id: "30005",
    itemType: "mileage",
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
            projectDescription: "Enterprise Client Services"
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
    itemType: "mileage",
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
            projectDescription: "Service Operations Budget 2025"
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
    itemType: "mileage",
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
            projectDescription: "General Administration 2025"
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
    itemType: "mileage",
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
            projectDescription: "Software Training Rollout 2025"
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
  }
];
const store = {
  expenseDrafts: new Map(mockExpenseDrafts.map((d) => [d.id, d])),
  expenseSubmitted: new Map(mockSubmittedExpenses.map((s) => [s.id, s])),
  mileageDrafts: new Map(mockMileageDrafts.map((d) => [d.id, d])),
  mileageSubmitted: new Map(mockSubmittedMileage.map((s) => [s.id, s]))
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
function deleteExpenseDraft(id) {
  return store.expenseDrafts.delete(id);
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
function deleteMileageDraft(id) {
  return store.mileageDrafts.delete(id);
}
function addMileageSubmitted(item) {
  store.mileageSubmitted.set(item.id, item);
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
function findUploadedFileByFilename(filename) {
  return Array.from(uploadedFiles.values()).find((f) => f.filename === filename);
}
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
export {
  addUploadedFile as a,
  generateMockError as b,
  getExpenseSubmitted as c,
  deleteUploadedFile as d,
  getExpenseDrafts as e,
  findUploadedFileByFilename as f,
  getUploadedFile as g,
  hasUploadedFile as h,
  getMileageSubmitted as i,
  getMileageDrafts as j,
  findItemById as k,
  createAxiosError as l,
  addExpenseDraft as m,
  deleteExpenseDraft as n,
  addExpenseSubmitted as o,
  addMileageDraft as p,
  updateMileageDraft as q,
  deleteMileageDraft as r,
  shouldSimulateError as s,
  addMileageSubmitted as t,
  updateExpenseDraft as u
};

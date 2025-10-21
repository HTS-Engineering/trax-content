import { a as apiClient } from "./axiosInstance-D83Ho1lg.js";
import { s as shouldMockEndpoint, F as FILE_ENDPOINTS, E as EXPENSE_ENDPOINTS } from "./config-BPfAis3L.js";
import { e as RouteCompanyIds } from "./api-DD7FZVDb.js";
import { s as shouldSimulateError, c as createAxiosError } from "./errorSimulation-OB8hixeM.js";
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
const uploadedFiles = /* @__PURE__ */ new Map();
const businessPurposeStore = /* @__PURE__ */ new Map();
const expenseDrafts = /* @__PURE__ */ new Map();
const submittedExpenses = /* @__PURE__ */ new Map();
Object.entries(mockBusinessPurposes).forEach(([companyId, purposes]) => {
  businessPurposeStore.set(companyId, new Map(purposes.map((bp) => [bp.id, bp])));
});
class AxiosStrategy {
  active = false;
  interceptorId = null;
  async initialize() {
    if (this.active) {
      console.warn("Axios interceptor is already active");
      return;
    }
    this.interceptorId = apiClient.getInstance().interceptors.request.use(
      async (config) => {
        const url = config.url || "";
        const fullUrl = config.baseURL ? `${config.baseURL}${url}` : url;
        if (!shouldMockEndpoint(fullUrl)) {
          return config;
        }
        console.log("🔄 Axios Interceptor: Mocking request:", fullUrl);
        if (fullUrl.includes(FILE_ENDPOINTS.RECEIPTS_UPLOAD) && config.method === "post") {
          return this.handleFileUploadMock(config);
        }
        if (fullUrl.includes(FILE_ENDPOINTS.SUPPORTING_UPLOAD) && config.method === "post") {
          return this.handleFileUploadMock(config);
        }
        if (fullUrl.match(/\/files\/(receipts|supporting)\/[^/]+$/) && config.method === "delete") {
          return this.handleFileDeleteMock(config);
        }
        if (fullUrl.match(/\/companies\/[^/]+\/business-purposes$/) && config.method === "get") {
          return this.handleBusinessPurposeGetMock(config, fullUrl);
        }
        if (fullUrl.match(/\/companies\/[^/]+\/business-purposes$/) && config.method === "post") {
          return this.handleBusinessPurposeCreateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/business-purposes\/[^/]+$/) && config.method === "patch") {
          return this.handleBusinessPurposeUpdateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/business-purposes\/[^/]+$/) && config.method === "delete") {
          return this.handleBusinessPurposeDeleteMock(config, fullUrl);
        }
        if (fullUrl.includes(EXPENSE_ENDPOINTS.SAVE_DRAFT) && config.method === "post") {
          return this.handleExpenseDraftCreateMock(config);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expenses\/drafts\/[^/]+$/) && config.method === "put") {
          return this.handleExpenseDraftUpdateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expenses\/drafts\/[^/]+$/) && config.method === "get") {
          return this.handleExpenseDraftGetMock(config, fullUrl);
        }
        if (fullUrl.includes(EXPENSE_ENDPOINTS.SAVE_DRAFT) && config.method === "get") {
          return this.handleExpenseDraftsListMock(config);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expenses\/drafts\/[^/]+$/) && config.method === "delete") {
          return this.handleExpenseDraftDeleteMock(config, fullUrl);
        }
        if (fullUrl.includes(EXPENSE_ENDPOINTS.SUBMIT_EXPENSE) && config.method === "post") {
          return this.handleExpenseSubmitMock(config);
        }
        if (fullUrl.includes(EXPENSE_ENDPOINTS.GET_EXPENSES) && config.method === "get") {
          return this.handleExpensesListMock(config);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expenses\/[^/]+$/) && config.method === "get") {
          return this.handleExpenseGetMock(config, fullUrl);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.active = true;
  }
  /**
   * Handle file upload mock (receipts and supporting files)
   */
  async handleFileUploadMock(config) {
    var _a;
    await this.delay(1500);
    const formData = config.data;
    const file = formData.get("file");
    if (!file) {
      throw new Error("No file provided");
    }
    const url = config.url || "";
    const fullUrl = config.baseURL ? `${config.baseURL}${url}` : url;
    const isSupporting = fullUrl.includes("/files/supporting");
    const fileTypePrefix = isSupporting ? "supporting" : "receipt";
    const storagePath = isSupporting ? "supporting" : "receipts";
    const fileId = `${fileTypePrefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const fileExtension = ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "unknown";
    const filename = `${fileId}.${fileExtension}`;
    const cloudStorageUrl = `https://storage.expensesapp.com/${storagePath}/${filename}`;
    const blobUrl = URL.createObjectURL(file);
    const base64Data = await this.fileToBase64(file);
    const uploadedFile = {
      id: fileId,
      url: cloudStorageUrl,
      filename,
      originalName: file.name,
      size: file.size,
      type: fileExtension,
      mimeType: file.type,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
      data: base64Data
    };
    uploadedFiles.set(fileId, uploadedFile);
    const response = {
      id: fileId,
      url: cloudStorageUrl,
      blobUrl,
      // Real blob URL for immediate preview
      filename,
      size: file.size,
      type: fileExtension,
      mimeType: file.type,
      uploadedAt: uploadedFile.uploadedAt
    };
    console.log(`✅ Axios Interceptor: ${isSupporting ? "Supporting file" : "Receipt"} uploaded successfully`, { id: fileId, filename, blobUrl });
    const mockResponse = {
      data: { data: response },
      status: 201,
      statusText: "Created",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle file delete mock
   */
  async handleFileDeleteMock(config) {
    var _a;
    await this.delay(500);
    const fileId = (_a = config.url) == null ? void 0 : _a.split("/").pop();
    if (!fileId || !uploadedFiles.has(fileId)) {
      const mockResponse2 = {
        data: { error: "File not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    uploadedFiles.delete(fileId);
    console.log("✅ Axios Interceptor: File deleted successfully", { fileId });
    const mockResponse = {
      data: { message: "File deleted successfully" },
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Convert file to base64
   */
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  /**
   * Simulate network delay
   */
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  /**
   * Handle Business Purpose GET mock
   */
  async handleBusinessPurposeGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/companies\/([^/]+)\/business-purposes/);
    const companyId = match ? match[1] : null;
    if (!companyId) {
      const mockResponse2 = {
        data: { error: "Invalid company ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const companyPurposes = businessPurposeStore.get(companyId);
    const purposes = companyPurposes ? Array.from(companyPurposes.values()) : [];
    console.log("✅ Axios Interceptor: Business purposes fetched", { companyId, count: purposes.length });
    const response = { data: purposes, status: 200, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
    const mockResponse = {
      data: response,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Business Purpose CREATE mock
   */
  async handleBusinessPurposeCreateMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/companies\/([^/]+)\/business-purposes/);
    const companyId = match ? match[1] : null;
    if (!companyId) {
      const mockResponse2 = {
        data: { error: "Invalid company ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const data = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const newBP = {
      id: `bp-${Date.now()}`,
      businessPurpose: data.businessPurpose || "",
      description: data.description || "",
      isActive: data.isActive !== void 0 ? data.isActive : true,
      created: /* @__PURE__ */ new Date(),
      modified: /* @__PURE__ */ new Date()
    };
    let companyPurposes = businessPurposeStore.get(companyId);
    if (!companyPurposes) {
      companyPurposes = /* @__PURE__ */ new Map();
      businessPurposeStore.set(companyId, companyPurposes);
    }
    companyPurposes.set(newBP.id, newBP);
    console.log("✅ Axios Interceptor: Business purpose created", newBP);
    const response = { data: newBP, status: 201, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
    const mockResponse = {
      data: response,
      status: 201,
      statusText: "Created",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Business Purpose UPDATE mock
   */
  async handleBusinessPurposeUpdateMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/business-purposes\/([^/]+)/);
    const id = match ? match[1] : null;
    if (!id) {
      const mockResponse2 = {
        data: { error: "Invalid ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    let foundBP;
    for (const purposes of businessPurposeStore.values()) {
      foundBP = purposes.get(id);
      if (foundBP) break;
    }
    if (!foundBP) {
      const mockResponse2 = {
        data: { error: "Not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const data = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const updatedBP = {
      ...foundBP,
      ...data,
      id: foundBP.id,
      created: foundBP.created,
      modified: /* @__PURE__ */ new Date()
    };
    for (const purposes of businessPurposeStore.values()) {
      if (purposes.has(id)) {
        purposes.set(id, updatedBP);
        break;
      }
    }
    console.log("✅ Axios Interceptor: Business purpose updated", updatedBP);
    const response = { data: updatedBP, status: 200, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
    const mockResponse = {
      data: response,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Business Purpose DELETE mock
   */
  async handleBusinessPurposeDeleteMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/business-purposes\/([^/]+)/);
    const id = match ? match[1] : null;
    if (!id) {
      const mockResponse2 = {
        data: { error: "Invalid ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    let found = false;
    for (const purposes of businessPurposeStore.values()) {
      const bp = purposes.get(id);
      if (bp) {
        bp.isActive = false;
        bp.modified = /* @__PURE__ */ new Date();
        found = true;
        break;
      }
    }
    if (!found) {
      const mockResponse2 = {
        data: { error: "Not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    console.log("✅ Axios Interceptor: Business purpose deleted", { id });
    const mockResponse = {
      data: { message: "Deleted successfully" },
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Draft CREATE mock
   */
  async handleExpenseDraftCreateMock(config) {
    await this.delay(600);
    if (shouldSimulateError(EXPENSE_ENDPOINTS.SAVE_DRAFT)) {
      const error = createAxiosError();
      console.log("❌ Axios Interceptor: Simulating error for Save Draft", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const body = config.data;
    const draftId = `draft-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const draft = {
      id: draftId,
      status: "draft",
      data: body.data,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userId: "current-user"
    };
    expenseDrafts.set(draftId, draft);
    console.log("✅ Axios Interceptor: Expense draft created", { id: draftId });
    const mockResponse = {
      data: draft,
      status: 201,
      statusText: "Created",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Draft UPDATE mock
   */
  async handleExpenseDraftUpdateMock(config, fullUrl) {
    await this.delay(600);
    const match = fullUrl.match(/\/drafts\/([^/]+)$/);
    const draftId = match ? match[1] : null;
    if (!draftId) {
      const mockResponse2 = {
        data: { error: "Invalid draft ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    if (shouldSimulateError(`${EXPENSE_ENDPOINTS.SAVE_DRAFT}/${draftId}`)) {
      const error = createAxiosError();
      console.log("❌ Axios Interceptor: Simulating error for Update Draft", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const existingDraft = expenseDrafts.get(draftId);
    if (!existingDraft) {
      const mockResponse2 = {
        data: { error: "Draft not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const body = config.data;
    const updatedDraft = {
      ...existingDraft,
      data: body.data,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    expenseDrafts.set(draftId, updatedDraft);
    console.log("✅ Axios Interceptor: Expense draft updated", { id: draftId });
    const mockResponse = {
      data: updatedDraft,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Draft GET mock
   */
  async handleExpenseDraftGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/drafts\/([^/]+)$/);
    const draftId = match ? match[1] : null;
    if (!draftId) {
      const mockResponse2 = {
        data: { error: "Invalid draft ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const draft = expenseDrafts.get(draftId);
    if (!draft) {
      const mockResponse2 = {
        data: { error: "Draft not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const mockResponse = {
      data: draft,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Drafts LIST mock
   */
  async handleExpenseDraftsListMock(config) {
    await this.delay(300);
    const drafts = Array.from(expenseDrafts.values()).sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    const mockResponse = {
      data: drafts,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Draft DELETE mock
   */
  async handleExpenseDraftDeleteMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/drafts\/([^/]+)$/);
    const draftId = match ? match[1] : null;
    if (!draftId) {
      const mockResponse2 = {
        data: { error: "Invalid draft ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    if (!expenseDrafts.has(draftId)) {
      const mockResponse2 = {
        data: { error: "Draft not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    expenseDrafts.delete(draftId);
    console.log("✅ Axios Interceptor: Expense draft deleted", { id: draftId });
    const mockResponse = {
      data: { message: "Draft deleted successfully" },
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense SUBMIT mock
   */
  async handleExpenseSubmitMock(config) {
    await this.delay(1e3);
    if (shouldSimulateError(EXPENSE_ENDPOINTS.SUBMIT_EXPENSE)) {
      const error = createAxiosError();
      console.log("❌ Axios Interceptor: Simulating error for Submit Expense", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const body = config.data;
    const expenseId = `expense-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const expense = {
      id: expenseId,
      status: "submitted",
      data: body.data,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userId: "current-user"
    };
    submittedExpenses.set(expenseId, expense);
    console.log("✅ Axios Interceptor: Expense submitted", { id: expenseId });
    const mockResponse = {
      data: expense,
      status: 201,
      statusText: "Created",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expenses LIST mock
   */
  async handleExpensesListMock(config) {
    await this.delay(300);
    const expenses = Array.from(submittedExpenses.values()).sort(
      (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
    const mockResponse = {
      data: expenses,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense GET mock
   */
  async handleExpenseGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/expenses\/([^/]+)$/);
    const expenseId = match ? match[1] : null;
    if (!expenseId || expenseId === "drafts") {
      const mockResponse2 = {
        data: { error: "Invalid expense ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const expense = submittedExpenses.get(expenseId);
    if (!expense) {
      const mockResponse2 = {
        data: { error: "Expense not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const mockResponse = {
      data: expense,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  async stop() {
    if (!this.active) return;
    if (this.interceptorId !== null) {
      apiClient.getInstance().interceptors.request.eject(this.interceptorId);
      this.interceptorId = null;
    }
    this.active = false;
  }
  isActive() {
    return this.active;
  }
}
export {
  AxiosStrategy
};

import { z as shouldMockEndpoint, a as addUploadedFile, h as hasUploadedFile, d as deleteUploadedFile, A as getBusinessPurposes, B as addBusinessPurpose, C as updateBusinessPurpose, D as deleteBusinessPurpose, s as shouldSimulateError, F as createAxiosError, G as addExpenseDraft, e as getExpenseDrafts, H as updateExpenseDraft, I as deleteExpenseDraft, J as addExpenseSubmitted, c as getExpenseSubmitted, y as findItemById, K as addMileageDraft, j as getMileageDrafts, L as updateMileageDraft, M as deleteMileageDraft, N as addMileageSubmitted, i as getMileageSubmitted, m as mockLogicalCompanies, k as mockFormTypes, l as getExpenseTypes, o as addExpenseType, n as getNextExpenseTypeId, v as getNextMileageRateId, u as updateExpenseType, p as getExpenseType, q as getMileageRates, O as generateDefaultMileageRates, w as setMileageRates, r as recalculateAllRateStatuses, t as sortRatesByStatus, x as calculateRateStatus } from "./mileage-rate-utils-DrfPdQq-.js";
import { F as FILE_ENDPOINTS } from "./cost-allocation-EVQYlSMW.js";
import { E as EXPENSE_ENDPOINTS } from "./expenses-BH0R_jxm.js";
import { M as MILEAGE_ENDPOINTS } from "./mileage-BTs75OAc.js";
import { I as ItemCategory } from "./expense-item-C9lElBqU.js";
import { M as MileageRateStatus } from "./api-BMImQo3R.js";
class AxiosStrategy {
  active = false;
  interceptorId = null;
  axiosInstance;
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }
  /**
   * Initialize mocking interceptor. Synchronous operation wrapped in Promise
   * for interface compatibility. Safe to call without await.
   */
  async initialize() {
    if (this.active) {
      console.warn("Axios interceptor is already active");
      return;
    }
    this.interceptorId = this.axiosInstance.interceptors.request.use(
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
        if (fullUrl.match(/\/configuration\/[^/]+\/business-purposes$/) && config.method === "get") {
          return this.handleBusinessPurposeGetMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/business-purpose$/) && config.method === "post") {
          return this.handleBusinessPurposeCreateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/business-purpose$/) && config.method === "put") {
          return this.handleBusinessPurposeUpdateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/business-purposes\/\d+$/) && config.method === "delete") {
          return this.handleBusinessPurposeDeleteMock(config, fullUrl);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expense-item\/[^/]+$/) && config.method === "get") {
          return this.handleExpenseItemByIdMock(config, fullUrl);
        }
        if (fullUrl.includes(EXPENSE_ENDPOINTS.GET_EXPENSES_LIST) && config.method === "get") {
          return this.handleExpensesListUnifiedMock(config, fullUrl);
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
        if (fullUrl.includes(MILEAGE_ENDPOINTS.SAVE_DRAFT) && config.method === "post") {
          return this.handleMileageDraftCreateMock(config);
        }
        if (fullUrl.match(/\/api\/v1\.0\/mileage-trips\/drafts\/[^/]+$/) && config.method === "put") {
          return this.handleMileageDraftUpdateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/api\/v1\.0\/mileage-trips\/drafts\/[^/]+$/) && config.method === "get") {
          return this.handleMileageDraftGetMock(config, fullUrl);
        }
        if (fullUrl.includes(MILEAGE_ENDPOINTS.SAVE_DRAFT) && config.method === "get") {
          return this.handleMileageDraftsListMock(config);
        }
        if (fullUrl.match(/\/api\/v1\.0\/mileage-trips\/drafts\/[^/]+$/) && config.method === "delete") {
          return this.handleMileageDraftDeleteMock(config, fullUrl);
        }
        if (fullUrl.includes(MILEAGE_ENDPOINTS.SUBMIT_MILEAGE) && config.method === "post") {
          return this.handleMileageSubmitMock(config);
        }
        if (fullUrl.includes(MILEAGE_ENDPOINTS.GET_MILEAGE_TRIPS) && config.method === "get") {
          return this.handleMileageTripsListMock(config);
        }
        if (fullUrl.match(/\/api\/v1\.0\/mileage-trips\/[^/]+$/) && config.method === "get") {
          return this.handleMileageTripGetMock(config, fullUrl);
        }
        if (fullUrl.includes("/configuration/logical-companies") && config.method === "get") {
          return this.handleLogicalCompaniesGetMock(config);
        }
        if (fullUrl.includes("/configuration/form-types") && config.method === "get") {
          return this.handleFormTypesGetMock(config);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/expense-types$/) && config.method === "get") {
          return this.handleExpenseTypesGetMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/expense-type$/) && config.method === "post") {
          return this.handleExpenseTypeCreateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/expense-type$/) && config.method === "put") {
          return this.handleExpenseTypeUpdateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/expense-types\/\d+\/mileage-rates$/) && config.method === "get") {
          return this.handleMileageRatesGetMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/expense-types\/\d+\/mileage-rate$/) && config.method === "post") {
          return this.handleMileageRateCreateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/expense-types\/\d+\/mileage-rates\/\d+$/) && config.method === "delete") {
          return this.handleMileageRateDeleteMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/tax-types-display/) && config.method === "get") {
          return this.handleTaxTypesDisplayGetMock(config, fullUrl);
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
    addUploadedFile(uploadedFile);
    const response = {
      id: fileId,
      url: cloudStorageUrl,
      blobUrl,
      // Real blob URL for immediate preview
      fileName: filename,
      fileSize: file.size,
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
    if (!fileId || !hasUploadedFile(fileId)) {
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
    deleteUploadedFile(fileId);
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
    const match = fullUrl.match(/\/configuration\/([^/]+)\/business-purposes/);
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
    const purposes = getBusinessPurposes(companyId);
    const apiFormatPurposes = purposes.map((bp, index) => ({
      id: parseInt(bp.id.replace(/\D/g, "")) || index + 1,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      businessPurposeName: bp.businessPurpose,
      businessPurposeDescription: bp.description || "",
      isActive: bp.isActive,
      createdBy: "system",
      createdDate: bp.created.toISOString(),
      updatedBy: null,
      updatedDate: bp.modified.toISOString()
    }));
    console.log("✅ Axios Interceptor: Business purposes fetched", { companyId, count: apiFormatPurposes.length });
    const mockResponse = {
      data: apiFormatPurposes,
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
    const match = fullUrl.match(/\/configuration\/([^/]+)\/business-purpose/);
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
    const newId = Date.now();
    const newBP = {
      id: `bp-${newId}`,
      businessPurpose: data.businessPurposeName || "",
      description: data.businessPurposeDescription || "",
      isActive: true,
      created: /* @__PURE__ */ new Date(),
      modified: /* @__PURE__ */ new Date()
    };
    addBusinessPurpose(companyId, newBP);
    const apiResponse = {
      id: newId,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      businessPurposeName: newBP.businessPurpose,
      businessPurposeDescription: newBP.description || "",
      isActive: newBP.isActive,
      createdBy: data.createdBy || "system",
      createdDate: newBP.created.toISOString(),
      updatedBy: null,
      updatedDate: null
    };
    console.log("✅ Axios Interceptor: Business purpose created", apiResponse);
    const mockResponse = {
      data: apiResponse,
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
   * URL: PUT /configuration/{company}/business-purpose
   * ID is in request body
   */
  async handleBusinessPurposeUpdateMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/business-purpose/);
    const companyId = match ? match[1] : null;
    if (!companyId) {
      const mockResponse2 = {
        data: { error: "Invalid company" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const data = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const numericId = data.id;
    if (!numericId) {
      const mockResponse2 = {
        data: { error: "Invalid ID in request body" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const purposes = getBusinessPurposes(companyId);
    const existingBP = purposes.find((bp) => {
      const bpNumericId = parseInt(bp.id.replace(/\D/g, "")) || 0;
      return bpNumericId === numericId || bp.id === String(numericId) || bp.id === `bp-${numericId}`;
    });
    if (!existingBP) {
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
    const internalUpdates = {
      modified: /* @__PURE__ */ new Date()
    };
    if (data.businessPurposeName !== void 0) {
      internalUpdates.businessPurpose = data.businessPurposeName;
    }
    if (data.businessPurposeDescription !== void 0) {
      internalUpdates.description = data.businessPurposeDescription;
    }
    if (data.isActive !== void 0) {
      internalUpdates.isActive = data.isActive;
    }
    const updatedBP = updateBusinessPurpose(companyId, existingBP.id, internalUpdates);
    if (!updatedBP) {
      const mockResponse2 = {
        data: { error: "Update failed" },
        status: 500,
        statusText: "Internal Server Error",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const apiResponse = {
      id: numericId,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      businessPurposeName: updatedBP.businessPurpose,
      businessPurposeDescription: updatedBP.description || "",
      isActive: updatedBP.isActive,
      createdBy: "system",
      createdDate: updatedBP.created.toISOString(),
      updatedBy: data.updatedBy || "system",
      updatedDate: updatedBP.modified.toISOString()
    };
    console.log("✅ Axios Interceptor: Business purpose updated", apiResponse);
    const mockResponse = {
      data: apiResponse,
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
   * URL: DELETE /configuration/{company}/business-purposes/{id}
   */
  async handleBusinessPurposeDeleteMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/business-purposes\/(\d+)/);
    const companyId = match ? match[1] : null;
    const id = match ? match[2] : null;
    if (!companyId || !id) {
      const mockResponse2 = {
        data: { error: "Invalid company or ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const deleted = deleteBusinessPurpose(companyId, id);
    if (!deleted) {
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
    console.log("✅ Axios Interceptor: Business purpose deleted", { companyId, id });
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
      const error = createAxiosError(EXPENSE_ENDPOINTS.SAVE_DRAFT, config);
      console.log("❌ Axios Interceptor: Simulating error for Save Draft", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const body = config.data;
    const draftId = `draft-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const draft = {
      id: draftId,
      itemType: ItemCategory.Expense,
      status: "draft",
      data: body.data,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userId: "current-user"
    };
    addExpenseDraft(draft);
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
      const error = createAxiosError(`${EXPENSE_ENDPOINTS.SAVE_DRAFT}/${draftId}`, config);
      console.log("❌ Axios Interceptor: Simulating error for Update Draft", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const existingDraft = getExpenseDrafts().get(draftId);
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
    updateExpenseDraft(draftId, updatedDraft);
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
    const draft = getExpenseDrafts().get(draftId);
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
    const drafts = Array.from(getExpenseDrafts().values()).sort(
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
    if (!getExpenseDrafts().has(draftId)) {
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
    deleteExpenseDraft(draftId);
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
      const error = createAxiosError(EXPENSE_ENDPOINTS.SUBMIT_EXPENSE, config);
      console.log("❌ Axios Interceptor: Simulating error for Submit Expense", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const body = config.data;
    const expenseId = `expense-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const expense = {
      id: expenseId,
      itemType: ItemCategory.Expense,
      status: "submitted",
      data: body.data,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userId: "current-user"
    };
    addExpenseSubmitted(expense);
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
    const expenses = Array.from(getExpenseSubmitted().values()).sort(
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
   * Handle Expense GET mock (submitted only - legacy endpoint)
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
    const expense = getExpenseSubmitted().get(expenseId);
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
  /**
   * Handle unified expense item GET mock (searches all types: expense, mileage trip, mileage period)
   * Endpoint: /api/v1.0/expense-item/:id
   */
  async handleExpenseItemByIdMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/expense-item\/([^/]+)$/);
    const itemId = match ? match[1] : null;
    if (!itemId) {
      const mockResponse2 = {
        data: { error: "Invalid expense item ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const { item } = findItemById(itemId);
    if (item) {
      console.log("✅ Axios Interceptor: Expense item found", { id: itemId, status: item.status });
      const mockResponse2 = {
        data: item,
        status: 200,
        statusText: "OK",
        headers: {},
        config
      };
      config.adapter = () => Promise.resolve(mockResponse2);
      return config;
    }
    console.log("❌ Axios Interceptor: Expense item not found", { id: itemId });
    const mockResponse = {
      data: { error: "Expense item not found", code: "404" },
      status: 404,
      statusText: "Not Found",
      headers: {},
      config
    };
    config.adapter = () => Promise.reject({ response: mockResponse });
    return config;
  }
  /**
   * Handle Mileage Draft CREATE mock
   */
  async handleMileageDraftCreateMock(config) {
    await this.delay(600);
    if (shouldSimulateError(MILEAGE_ENDPOINTS.SAVE_DRAFT)) {
      const error = createAxiosError(MILEAGE_ENDPOINTS.SAVE_DRAFT, config);
      console.log("❌ Axios Interceptor: Simulating error for Save Mileage Draft", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const body = config.data;
    const draftId = `mileage-draft-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const draft = {
      id: draftId,
      itemType: ItemCategory.Mileage,
      status: "draft",
      data: body.data,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userId: "current-user"
    };
    addMileageDraft(draft);
    console.log("✅ Axios Interceptor: Mileage draft created", { id: draftId });
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
   * Handle Mileage Draft UPDATE mock
   */
  async handleMileageDraftUpdateMock(config, fullUrl) {
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
    if (shouldSimulateError(`${MILEAGE_ENDPOINTS.SAVE_DRAFT}/${draftId}`)) {
      const error = createAxiosError(`${MILEAGE_ENDPOINTS.SAVE_DRAFT}/${draftId}`, config);
      console.log("❌ Axios Interceptor: Simulating error for Update Mileage Draft", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const existingDraft = getMileageDrafts().get(draftId);
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
    updateMileageDraft(draftId, updatedDraft);
    console.log("✅ Axios Interceptor: Mileage draft updated", { id: draftId });
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
   * Handle Mileage Draft GET mock
   */
  async handleMileageDraftGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/drafts\/([^/]+)$/);
    const draftId = match ? match[1] : null;
    console.log("🔍 Axios Interceptor: Getting mileage draft", {
      draftId,
      availableIds: Array.from(getMileageDrafts().keys())
    });
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
    const draft = getMileageDrafts().get(draftId);
    if (!draft) {
      console.log("❌ Axios Interceptor: Mileage draft not found", { draftId });
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
    console.log("✅ Axios Interceptor: Mileage draft found", { id: draft.id, formType: draft.data.formType });
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
   * Handle Mileage Drafts LIST mock
   */
  async handleMileageDraftsListMock(config) {
    await this.delay(300);
    const drafts = Array.from(getMileageDrafts().values()).sort(
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
   * Handle Mileage Draft DELETE mock
   */
  async handleMileageDraftDeleteMock(config, fullUrl) {
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
    if (!getMileageDrafts().has(draftId)) {
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
    deleteMileageDraft(draftId);
    console.log("✅ Axios Interceptor: Mileage draft deleted", { id: draftId });
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
   * Handle Mileage SUBMIT mock
   */
  async handleMileageSubmitMock(config) {
    await this.delay(1e3);
    if (shouldSimulateError(MILEAGE_ENDPOINTS.SUBMIT_MILEAGE)) {
      const error = createAxiosError(MILEAGE_ENDPOINTS.SUBMIT_MILEAGE, config);
      console.log("❌ Axios Interceptor: Simulating error for Submit Mileage", error.response);
      config.adapter = () => Promise.reject(error);
      return config;
    }
    const body = config.data;
    const mileageId = `mileage-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const mileageTrip = {
      id: mileageId,
      itemType: ItemCategory.Mileage,
      status: "submitted",
      data: body.data,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userId: "current-user"
    };
    addMileageSubmitted(mileageTrip);
    console.log("✅ Axios Interceptor: Mileage trip submitted", { id: mileageId });
    const mockResponse = {
      data: mileageTrip,
      status: 201,
      statusText: "Created",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Mileage Trips LIST mock
   */
  async handleMileageTripsListMock(config) {
    await this.delay(300);
    const trips = Array.from(getMileageSubmitted().values()).sort(
      (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
    const mockResponse = {
      data: trips,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Mileage Trip GET mock
   */
  async handleMileageTripGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/mileage-trips\/([^/]+)$/);
    const mileageId = match ? match[1] : null;
    if (!mileageId || mileageId === "drafts") {
      const mockResponse2 = {
        data: { error: "Invalid mileage ID" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const trip = getMileageSubmitted().get(mileageId);
    if (!trip) {
      const mockResponse2 = {
        data: { error: "Mileage trip not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const mockResponse = {
      data: trip,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle unified expenses list GET mock with filtering, sorting, and search
   */
  async handleExpensesListUnifiedMock(config, fullUrl) {
    var _a;
    await this.delay(300);
    const url = new URL(fullUrl, "http://localhost");
    const queryParams = {
      status: url.searchParams.get("status") || "all",
      search: url.searchParams.get("search") || void 0,
      sortBy: url.searchParams.get("sortBy") || "updatedAt",
      sortOrder: url.searchParams.get("sortOrder") || "desc"
    };
    const expenseItems = [
      ...Array.from(getExpenseDrafts().values()).map((item) => ({ ...item, itemType: "expense" })),
      ...Array.from(getExpenseSubmitted().values()).map((item) => ({ ...item, itemType: "expense" }))
    ];
    const mileageItems = [
      ...Array.from(getMileageDrafts().values()).map((item) => ({ ...item, itemType: "mileage" })),
      ...Array.from(getMileageSubmitted().values()).map((item) => ({ ...item, itemType: "mileage" }))
    ];
    let items = [...expenseItems, ...mileageItems];
    if (queryParams.status !== "all") {
      items = items.filter((item) => item.status === queryParams.status);
    }
    if ((_a = queryParams.search) == null ? void 0 : _a.trim()) {
      items = items.filter((item) => {
        var _a2;
        return item.id === ((_a2 = queryParams.search) == null ? void 0 : _a2.trim());
      });
    }
    const order = queryParams.sortOrder === "asc" ? 1 : -1;
    items.sort((a, b) => {
      const getExpenseDateTimestamp = (item) => {
        const { data } = item;
        if ("formType" in data && data.formType === "period") {
          const period = "expensePeriod" in data ? data.expensePeriod : void 0;
          return period ? new Date(period.from).getTime() : new Date(item.updatedAt).getTime();
        }
        if ("expenseDate" in data) {
          return new Date(data.expenseDate).getTime();
        }
        return new Date(item.updatedAt).getTime();
      };
      const getStatusDateTimestamp = (item, field) => {
        if (field in item) {
          const value = item[field];
          if (typeof value === "string") {
            return new Date(value).getTime();
          }
        }
        return new Date(item.createdAt).getTime();
      };
      const getTimestamp = (item, field) => {
        if (field === "expenseDate") {
          return getExpenseDateTimestamp(item);
        }
        if (field === "submittedAt" || field === "approvedAt" || field === "rejectedAt" || field === "cancelledAt") {
          return getStatusDateTimestamp(item, field);
        }
        const dateField = field === "createdAt" ? item.createdAt : item.updatedAt;
        return new Date(dateField).getTime();
      };
      const valueA = getTimestamp(a, queryParams.sortBy);
      const valueB = getTimestamp(b, queryParams.sortBy);
      if (valueA === valueB) {
        return parseInt(b.id, 10) - parseInt(a.id, 10);
      }
      return (valueA - valueB) * order;
    });
    const response = {
      items,
      total: items.length,
      params: queryParams
    };
    console.log(`✅ Axios Interceptor: Expenses list retrieved (${items.length} items)`, queryParams);
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
   * Handle Logical Companies GET mock
   * Returns LogicalCompanyResponse format: { userDefaultLogicalCompanyId, items }
   */
  async handleLogicalCompaniesGetMock(config) {
    var _a;
    await this.delay(300);
    const defaultCompany = mockLogicalCompanies.find((c) => c.defaultLogicalCompany);
    const response = {
      userDefaultLogicalCompanyId: (defaultCompany == null ? void 0 : defaultCompany.id) ?? ((_a = mockLogicalCompanies[0]) == null ? void 0 : _a.id) ?? 0,
      items: mockLogicalCompanies
    };
    console.log("✅ Axios Interceptor: Logical companies fetched", { count: mockLogicalCompanies.length });
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
   * Handle Form Types GET mock
   */
  async handleFormTypesGetMock(config) {
    await this.delay(300);
    console.log("✅ Axios Interceptor: Form types fetched", { count: mockFormTypes.length });
    const mockResponse = {
      data: mockFormTypes,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Types GET mock
   */
  async handleExpenseTypesGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/expense-types/);
    const companyShortNameRaw = match ? match[1] : null;
    if (!companyShortNameRaw) {
      const mockResponse2 = {
        data: { error: "Invalid company" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const companyShortName = companyShortNameRaw;
    const expenseTypes = getExpenseTypes(companyShortName);
    console.log("✅ Axios Interceptor: Expense types fetched", { company: companyShortName, count: expenseTypes.length });
    const mockResponse = {
      data: expenseTypes,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Type CREATE mock
   */
  async handleExpenseTypeCreateMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/expense-type/);
    const companyShortNameRaw = match ? match[1] : null;
    if (!companyShortNameRaw) {
      const mockResponse2 = {
        data: { error: "Invalid company" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const companyShortName = companyShortNameRaw;
    const body = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const isMileageType = body.formTypeId === 2 || body.mileageRate != null;
    const expenseTypeId = getNextExpenseTypeId();
    const newExpenseType = {
      id: expenseTypeId,
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      formTypeId: body.formTypeId,
      expenseTypeName: body.expenseTypeName,
      expenseTypeDescription: body.expenseTypeDescription || "",
      isActive: true,
      mileageRateId: body.mileageRate ? expenseTypeId : null,
      mileageEffectiveRate: body.mileageRate ? {
        id: getNextMileageRateId(),
        mileageRateId: expenseTypeId,
        rate: body.mileageRate,
        effectiveDate: (/* @__PURE__ */ new Date()).toISOString(),
        expiryDate: null,
        createdBy: "00000000-0000-0000-0000-000000000000",
        createdDate: (/* @__PURE__ */ new Date()).toISOString(),
        updatedBy: null,
        updatedDate: null
      } : null,
      unitOfMeasurement: isMileageType ? "mile" : null,
      taxTypeId: body.taxTypeId ?? null,
      createdBy: body.createdBy || "00000000-0000-0000-0000-000000000000",
      createdDate: (/* @__PURE__ */ new Date()).toISOString(),
      updatedBy: null,
      updatedDate: null
    };
    addExpenseType(companyShortName, newExpenseType);
    console.log("✅ Axios Interceptor: Expense type created", newExpenseType);
    const mockResponse = {
      data: newExpenseType,
      status: 201,
      statusText: "Created",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Type UPDATE mock
   */
  async handleExpenseTypeUpdateMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/expense-type/);
    const companyShortNameRaw = match ? match[1] : null;
    if (!companyShortNameRaw) {
      const mockResponse2 = {
        data: { error: "Invalid company" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const companyShortName = companyShortNameRaw;
    const body = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const updated = updateExpenseType(companyShortName, body.id, {
      expenseTypeName: body.expenseTypeName,
      expenseTypeDescription: body.expenseTypeDescription,
      isActive: body.isActive,
      updatedBy: body.updatedBy || "current-user",
      updatedDate: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (!updated) {
      const mockResponse2 = {
        data: { error: "Expense type not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    console.log("✅ Axios Interceptor: Expense type updated", { companyShortName, id: body.id, isActive: updated.isActive });
    const mockResponse = {
      data: updated,
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Mileage Rates GET mock
   * Works independently of expenseTypeStore to support real BE expense types
   */
  async handleMileageRatesGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/expense-types\/(\d+)\/mileage-rates/);
    const companyShortNameRaw = match ? match[1] : null;
    const expenseTypeId = match ? parseInt(match[2], 10) : null;
    if (!companyShortNameRaw || !expenseTypeId) {
      const mockResponse2 = {
        data: { error: "Invalid parameters" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const companyShortName = companyShortNameRaw;
    const expenseType = getExpenseType(companyShortName, expenseTypeId);
    const isExpenseTypeActive = (expenseType == null ? void 0 : expenseType.isActive) ?? true;
    const expenseTypeName = (expenseType == null ? void 0 : expenseType.expenseTypeName) ?? `Mileage Type ${expenseTypeId}`;
    const unitOfMeasurement = (expenseType == null ? void 0 : expenseType.unitOfMeasurement) ?? "mile";
    let rates = getMileageRates(companyShortName, expenseTypeId);
    if (rates.length === 0) {
      rates = generateDefaultMileageRates(expenseTypeId);
      setMileageRates(companyShortName, expenseTypeId, rates);
      console.log("📝 Axios Interceptor: Generated default mileage rates for", `${companyShortName}-${expenseTypeId}`);
    }
    rates = recalculateAllRateStatuses(rates, isExpenseTypeActive);
    rates = sortRatesByStatus(rates);
    const response = {
      expenseTypeId,
      expenseTypeName,
      unit: unitOfMeasurement,
      isExpenseTypeActive,
      rates
    };
    console.log("✅ Axios Interceptor: Mileage rates fetched", { company: companyShortName, expenseTypeId, count: rates.length });
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
   * Handle Mileage Rate CREATE mock
   * Works independently of expenseTypeStore to support real BE expense types
   */
  async handleMileageRateCreateMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/expense-types\/(\d+)\/mileage-rate/);
    const companyShortNameRaw = match ? match[1] : null;
    const expenseTypeId = match ? parseInt(match[2], 10) : null;
    if (!companyShortNameRaw || !expenseTypeId) {
      const mockResponse2 = {
        data: { error: "Invalid parameters" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const companyShortName = companyShortNameRaw;
    const expenseType = getExpenseType(companyShortName, expenseTypeId);
    const isExpenseTypeActive = (expenseType == null ? void 0 : expenseType.isActive) ?? true;
    const expenseTypeName = (expenseType == null ? void 0 : expenseType.expenseTypeName) ?? `Mileage Type ${expenseTypeId}`;
    const unitOfMeasurement = (expenseType == null ? void 0 : expenseType.unitOfMeasurement) ?? "mile";
    const body = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    let rates = getMileageRates(companyShortName, expenseTypeId);
    const newEffectiveDate = new Date(body.effectiveDate);
    const previousMonthEnd = new Date(newEffectiveDate.getFullYear(), newEffectiveDate.getMonth(), 0);
    rates = rates.map((rate) => {
      const rateEffective = new Date(rate.effectiveDate);
      if (!rate.expiryDate && rateEffective < newEffectiveDate) {
        return { ...rate, expiryDate: previousMonthEnd.toISOString() };
      }
      return rate;
    });
    const newRate = {
      id: getNextMileageRateId(),
      mileageRateId: expenseTypeId,
      rate: body.rate,
      effectiveDate: body.effectiveDate,
      expiryDate: null,
      status: MileageRateStatus.FUTURE,
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: (/* @__PURE__ */ new Date()).toISOString(),
      updatedBy: null,
      updatedDate: null
    };
    rates.push(newRate);
    rates = recalculateAllRateStatuses(rates, isExpenseTypeActive);
    rates = sortRatesByStatus(rates);
    setMileageRates(companyShortName, expenseTypeId, rates);
    const response = {
      expenseTypeId,
      expenseTypeName,
      unit: unitOfMeasurement,
      isExpenseTypeActive,
      rates
    };
    console.log("✅ Axios Interceptor: Mileage rate created", newRate);
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
   * Handle Mileage Rate DELETE mock
   * Works independently of expenseTypeStore to support real BE expense types
   */
  async handleMileageRateDeleteMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/expense-types\/(\d+)\/mileage-rates\/(\d+)/);
    const companyShortNameRaw = match ? match[1] : null;
    const expenseTypeId = match ? parseInt(match[2], 10) : null;
    const rateId = match ? parseInt(match[3], 10) : null;
    if (!companyShortNameRaw || !expenseTypeId || !rateId) {
      const mockResponse2 = {
        data: { error: "Invalid parameters" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const companyShortName = companyShortNameRaw;
    const expenseType = getExpenseType(companyShortName, expenseTypeId);
    const isExpenseTypeActive = (expenseType == null ? void 0 : expenseType.isActive) ?? true;
    const expenseTypeName = (expenseType == null ? void 0 : expenseType.expenseTypeName) ?? `Mileage Type ${expenseTypeId}`;
    const unitOfMeasurement = (expenseType == null ? void 0 : expenseType.unitOfMeasurement) ?? "mile";
    let rates = getMileageRates(companyShortName, expenseTypeId);
    const rateToDelete = rates.find((r) => r.id === rateId);
    if (!rateToDelete) {
      const mockResponse2 = {
        data: { error: "Rate not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const currentStatus = calculateRateStatus(rateToDelete.effectiveDate, rateToDelete.expiryDate, isExpenseTypeActive);
    if (currentStatus !== MileageRateStatus.FUTURE) {
      const mockResponse2 = {
        data: { error: "Only future rates can be deleted" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    rates = rates.filter((r) => r.id !== rateId);
    rates = recalculateAllRateStatuses(rates, isExpenseTypeActive);
    rates = sortRatesByStatus(rates);
    setMileageRates(companyShortName, expenseTypeId, rates);
    const response = {
      expenseTypeId,
      expenseTypeName,
      unit: unitOfMeasurement,
      isExpenseTypeActive,
      rates
    };
    console.log("✅ Axios Interceptor: Mileage rate deleted", { rateId });
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
   * Handle Tax Types Display GET mock
   * Returns tax types for dropdown display
   */
  async handleTaxTypesDisplayGetMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/tax-types-display/);
    const companyShortName = match ? match[1] : null;
    if (!companyShortName) {
      const mockResponse2 = {
        data: { error: "Invalid company" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const taxTypes = [
      {
        id: 1,
        displayText: "HST - 13.000%",
        taxCode: "HST",
        taxRate: "13.000",
        taxDescription: "Harmonized Sales Tax",
        referenceNumber: null
      },
      {
        id: 2,
        displayText: "GST - 5.000%",
        taxCode: "GST",
        taxRate: "5.000",
        taxDescription: "Goods and Services Tax",
        referenceNumber: null
      }
    ];
    console.log("✅ Axios Interceptor: Tax types fetched", { company: companyShortName, count: taxTypes.length });
    const mockResponse = {
      data: taxTypes,
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
      this.axiosInstance.interceptors.request.eject(this.interceptorId);
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

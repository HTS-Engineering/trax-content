import { z as shouldMockEndpoint, A as ENDPOINT_REGEX, a as addUploadedFile, h as hasUploadedFile, d as deleteUploadedFile, B as getBusinessPurposes, C as addBusinessPurpose, D as updateBusinessPurpose, F as deleteBusinessPurpose, G as addExpenseDraft, e as getExpenseDrafts, H as updateExpenseDraft, I as deleteExpenseDraft, J as addExpenseSubmitted, c as getExpenseSubmitted, x as mapMockToExpenseFormResponse, y as findItemById, s as shouldSimulateError, K as createAxiosError, L as addMileageDraft, i as getMileageDrafts, M as updateMileageDraft, N as deleteMileageDraft, O as addMileageSubmitted, f as getMileageSubmitted, m as mockLogicalCompanies, j as mockFormTypes, k as getExpenseTypes, n as addExpenseType, u as updateExpenseType, o as getExpenseType, p as getMileageRates, P as generateDefaultMileageRates, v as setMileageRates, r as recalculateAllRateStatuses, q as sortRatesByStatus, w as calculateRateStatus, l as getNextExpenseTypeId, t as getNextMileageRateId } from "./expense-response-mappers-K4osEiqC.js";
import { I as ItemCategory } from "./expense-item-C9lElBqU.js";
import { E as EXPENSE_ENDPOINTS } from "./expenses-BLPZFCX-.js";
import { M as MILEAGE_ENDPOINTS } from "./mileage-BTs75OAc.js";
import { M as MileageRateStatus } from "./api-BMImQo3R.js";
import { b as devWarn, a as devLog } from "./use-debounced-callback-B5VkIVS7.js";
var ExpenseFormStatus = /* @__PURE__ */ ((ExpenseFormStatus2) => {
  ExpenseFormStatus2["Draft"] = "draft";
  ExpenseFormStatus2["Submitted"] = "submitted";
  ExpenseFormStatus2["Approved"] = "approved";
  ExpenseFormStatus2["Rejected"] = "rejected";
  ExpenseFormStatus2["Cancelled"] = "cancelled";
  return ExpenseFormStatus2;
})(ExpenseFormStatus || {});
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
      devWarn("Axios interceptor is already active");
      return;
    }
    this.interceptorId = this.axiosInstance.interceptors.request.use(
      async (config) => {
        const url = config.url || "";
        const fullUrl = config.baseURL ? `${config.baseURL}${url}` : url;
        if (!shouldMockEndpoint(fullUrl)) {
          return config;
        }
        devLog("🔄 Axios Interceptor: Mocking request:", fullUrl);
        if (ENDPOINT_REGEX.FILES_UPLOAD.test(fullUrl) && config.method === "post") {
          return this.handleBackendFileUploadMock(config, fullUrl);
        }
        if (ENDPOINT_REGEX.FILES_BY_ID.test(fullUrl)) {
          if (config.method === "get") {
            return this.handleBackendFileDownloadMock(config, fullUrl);
          }
          if (config.method === "delete") {
            return this.handleBackendFileDeleteMock(config, fullUrl);
          }
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
        if (fullUrl.match(/\/api\/v1\.0\/expense-forms\/[^/]+\/drafts$/) && config.method === "post") {
          return this.handleExpenseFormDraftCreateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expense-forms\/[^/]+\/drafts\/[^/]+$/) && config.method === "put") {
          return this.handleExpenseFormDraftUpdateMock(config, fullUrl);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expense-forms\/[^/]+\/drafts\/[^/]+$/) && config.method === "delete") {
          return this.handleExpenseFormDraftDeleteMock(config, fullUrl);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expense-forms\/[^/]+\/drafts\/[^/]+\/submit$/) && config.method === "post") {
          return this.handleExpenseFormSubmitMock(config, fullUrl);
        }
        if (fullUrl.match(/\/api\/v1\.0\/expense-forms\/[^/]+$/) && config.method === "get") {
          return this.handleExpenseFormsListMock(config, fullUrl);
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
   * Handle real backend file upload mock.
   * Returns BackendFileMetadata format.
   */
  async handleBackendFileUploadMock(config, fullUrl) {
    await this.delay(1500);
    const formData = config.data;
    const file = formData.get("file");
    if (!file) {
      throw new Error("No file provided");
    }
    const urlObj = new URL(fullUrl, "http://localhost");
    const documentType = urlObj.searchParams.get("document_type") || "receipt";
    const match = fullUrl.match(/\/files\/drafts\/([^/]+)\/files/);
    const expenseId = match ? parseInt(match[1], 10) : 0;
    const fileId = `file_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const base64Data = await this.fileToBase64(file);
    const uploadedFile = {
      id: fileId,
      url: `https://storage.expensesapp.com/files/${fileId}`,
      filename: file.name,
      originalName: file.name,
      size: file.size,
      type: file.type.split("/")[1] || "unknown",
      mimeType: file.type,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
      data: base64Data
    };
    addUploadedFile(uploadedFile);
    const response = {
      id: fileId,
      name: file.name,
      size: file.size,
      mimeType: file.type,
      documentType,
      expenseId,
      uploadedAt: uploadedFile.uploadedAt
    };
    devLog("✅ Axios Interceptor: Backend file uploaded", { fileId, documentType, expenseId });
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
   * Handle real backend file download mock.
   */
  async handleBackendFileDownloadMock(config, fullUrl) {
    await this.delay(300);
    const fileId = fullUrl.split("/").pop();
    if (!fileId || !hasUploadedFile(fileId)) {
      const mockResponse2 = {
        data: { detail: "File not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    devLog("✅ Axios Interceptor: Backend file download requested", { fileId });
    const mockResponse = {
      data: new Blob(["mock file content"]),
      status: 200,
      statusText: "OK",
      headers: {
        "content-type": "application/octet-stream",
        "content-disposition": `attachment; filename="${fileId}"`
      },
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle real backend file delete mock.
   * Returns BackendFileMetadata of deleted file.
   */
  async handleBackendFileDeleteMock(config, fullUrl) {
    await this.delay(500);
    const fileId = fullUrl.split("/").pop();
    if (!fileId || !hasUploadedFile(fileId)) {
      const mockResponse2 = {
        data: { detail: "File not found" },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    deleteUploadedFile(fileId);
    const response = {
      id: fileId,
      name: "deleted-file",
      size: 0,
      mimeType: "application/octet-stream",
      documentType: "receipt",
      expenseId: 0,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    devLog("✅ Axios Interceptor: Backend file deleted", { fileId });
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
    devLog("✅ Axios Interceptor: Business purposes fetched", { companyId, count: apiFormatPurposes.length });
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
    devLog("✅ Axios Interceptor: Business purpose created", apiResponse);
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
    devLog("✅ Axios Interceptor: Business purpose updated", apiResponse);
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
    devLog("✅ Axios Interceptor: Business purpose deleted", { companyId, id });
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
  // Counter for generating sequential business IDs (100001, 100002, ...)
  static businessIdCounter = 1e5;
  /**
   * Generate next business ID in format 100001, 100002, etc.
   */
  generateBusinessId() {
    AxiosStrategy.businessIdCounter += 1;
    return String(AxiosStrategy.businessIdCounter);
  }
  /**
   * Create ExpenseDraftResponse from request data
   */
  createExpenseDraftResponse(id, businessId, data, isNew) {
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
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: isNew ? now : now,
      updatedBy: isNew ? null : "00000000-0000-0000-0000-000000000000",
      updatedDate: isNew ? null : now
    };
  }
  /**
   * Handle Expense Form Draft CREATE mock (new endpoint with company)
   * POST /api/v1.0/expense-forms/{company}/drafts
   */
  async handleExpenseFormDraftCreateMock(config, fullUrl) {
    await this.delay(600);
    const match = fullUrl.match(/\/expense-forms\/([^/]+)\/drafts$/);
    const company = match ? match[1] : null;
    if (!company) {
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
    const draftId = Date.now();
    const businessId = this.generateBusinessId();
    const response = this.createExpenseDraftResponse(draftId, businessId, data, true);
    const legacyDraft = {
      id: String(draftId),
      itemType: ItemCategory.Expense,
      status: "draft",
      data: {
        expenseType: String(data.typeId),
        vendor: data.vendor ?? "",
        expenseDate: data.date ?? (/* @__PURE__ */ new Date()).toISOString(),
        expenseLocation: String(data.locationId ?? ""),
        paymentMethod: String(data.paymentMethodId ?? ""),
        netAmount: String(data.foreignAmount ?? ""),
        totalAmount: String(data.totalAmount ?? ""),
        businessPurpose: String(data.businessPurposeId ?? ""),
        expenseDescription: data.description ?? "",
        personsEntertained: data.personsEntertained,
        additionalComments: data.additionalComments
      },
      createdAt: response.createdDate,
      updatedAt: response.createdDate,
      userId: "current-user"
    };
    addExpenseDraft(legacyDraft);
    devLog("✅ Axios Interceptor: Expense form draft created", { id: draftId, businessId, company });
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
   * Handle Expense Form Draft UPDATE mock (new endpoint with company)
   * PUT /api/v1.0/expense-forms/{company}/drafts/{id}
   */
  async handleExpenseFormDraftUpdateMock(config, fullUrl) {
    await this.delay(600);
    const match = fullUrl.match(/\/expense-forms\/([^/]+)\/drafts\/([^/]+)$/);
    const company = match ? match[1] : null;
    const draftId = match ? match[2] : null;
    if (!company || !draftId) {
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
    const data = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const response = this.createExpenseDraftResponse(
      parseInt(draftId, 10),
      existingDraft.id.replace(/^draft-/, "").slice(0, 6) || this.generateBusinessId(),
      data,
      false
    );
    const updatedLegacy = {
      ...existingDraft,
      data: {
        ...existingDraft.data,
        expenseType: String(data.typeId),
        vendor: data.vendor ?? existingDraft.data.vendor,
        expenseDate: data.date ?? existingDraft.data.expenseDate,
        expenseLocation: String(data.locationId ?? existingDraft.data.expenseLocation),
        paymentMethod: String(data.paymentMethodId ?? existingDraft.data.paymentMethod),
        netAmount: String(data.foreignAmount ?? existingDraft.data.netAmount),
        totalAmount: String(data.totalAmount ?? existingDraft.data.totalAmount),
        businessPurpose: String(data.businessPurposeId ?? existingDraft.data.businessPurpose),
        expenseDescription: data.description ?? existingDraft.data.expenseDescription,
        personsEntertained: data.personsEntertained ?? existingDraft.data.personsEntertained,
        additionalComments: data.additionalComments ?? existingDraft.data.additionalComments
      },
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    updateExpenseDraft(draftId, updatedLegacy);
    devLog("✅ Axios Interceptor: Expense form draft updated", { id: draftId, company });
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
   * Handle Expense Form Draft DELETE mock (new endpoint with company)
   * DELETE /api/v1.0/expense-forms/{company}/drafts/{id}
   */
  async handleExpenseFormDraftDeleteMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/expense-forms\/([^/]+)\/drafts\/([^/]+)$/);
    const company = match ? match[1] : null;
    const draftId = match ? match[2] : null;
    if (!company || !draftId) {
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
    devLog("✅ Axios Interceptor: Expense form draft deleted", { id: draftId, company });
    const mockResponse = {
      data: "Draft deleted successfully",
      status: 200,
      statusText: "OK",
      headers: {},
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle Expense Form SUBMIT mock (new endpoint with company)
   * POST /api/v1.0/expense-forms/{company}/drafts/{id}/submit
   */
  async handleExpenseFormSubmitMock(config, fullUrl) {
    var _a, _b, _c, _d;
    await this.delay(1e3);
    const match = fullUrl.match(/\/expense-forms\/([^/]+)\/drafts\/([^/]+)\/submit$/);
    const company = match ? match[1] : null;
    const draftId = match ? match[2] : null;
    if (!company || !draftId) {
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
    const submittedExpense = {
      id: draftId,
      itemType: ItemCategory.Expense,
      status: "submitted",
      data: draft.data,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      createdAt: draft.createdAt,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userId: draft.userId
    };
    addExpenseSubmitted(submittedExpense);
    deleteExpenseDraft(draftId);
    const response = {
      id: parseInt(draftId, 10) || Date.now(),
      businessId: draftId.replace(/^draft-/, "").slice(0, 6) || this.generateBusinessId(),
      typeId: parseInt(draft.data.expenseType, 10) || 0,
      vendor: draft.data.vendor,
      date: draft.data.expenseDate,
      periodStart: draft.data.expenseDate,
      periodEnd: draft.data.expenseDate,
      countryId: parseInt(draft.data.expenseLocation, 10) || 0,
      paymentMethodId: parseInt(draft.data.paymentMethod, 10) || 0,
      effectiveMileageRateId: 0,
      taxTypeId: 0,
      tax: 0,
      foreignAmount: parseFloat(draft.data.netAmount) || 0,
      totalAmount: parseFloat(draft.data.totalAmount) || 0,
      businessPurposeId: parseInt(draft.data.businessPurpose, 10) || 0,
      description: draft.data.expenseDescription,
      personsEntertained: draft.data.personsEntertained ?? "",
      additionalComments: draft.data.additionalComments ?? "",
      affidavitJustification: ((_a = draft.data.affidavit) == null ? void 0 : _a.justification) ?? "",
      affidavitInitials: ((_b = draft.data.affidavit) == null ? void 0 : _b.digitalSignature) ?? "",
      taxCurrencyCode: "",
      foreignCurrencyCode: ((_c = draft.data.netCurrency) == null ? void 0 : _c.code) ?? "",
      totalCurrencyCode: ((_d = draft.data.totalCurrency) == null ? void 0 : _d.code) ?? "",
      physicalCompanyId: 1,
      logicalCompanyId: 1,
      status: ExpenseFormStatus.Submitted,
      formOwner: "00000000-0000-0000-0000-000000000000",
      costAllocations: [],
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: draft.createdAt,
      updatedBy: "00000000-0000-0000-0000-000000000000",
      updatedDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    devLog("✅ Axios Interceptor: Expense form submitted", { id: draftId, company });
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
   * Handle Expense Forms LIST mock (new endpoint with company)
   * GET /api/v1.0/expense-forms/{company}
   */
  async handleExpenseFormsListMock(config, fullUrl) {
    await this.delay(300);
    const match = fullUrl.match(/\/expense-forms\/([^/]+)$/);
    const company = match ? match[1] : null;
    if (!company) {
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
    const drafts = Array.from(getExpenseDrafts().values());
    const submitted = Array.from(getExpenseSubmitted().values());
    const all = [...drafts, ...submitted].sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    const response = {
      results: all.map(mapMockToExpenseFormResponse),
      pageSize: 20,
      pageNumber: 1,
      totalPages: 1,
      totalObjects: all.length
    };
    devLog("Axios Interceptor: Expense forms list fetched", { company, count: all.length });
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
      devLog("✅ Axios Interceptor: Expense item found", { id: itemId, status: item.status });
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
    devLog("❌ Axios Interceptor: Expense item not found", { id: itemId });
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
      devLog("❌ Axios Interceptor: Simulating error for Save Mileage Draft", error.response);
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
    devLog("✅ Axios Interceptor: Mileage draft created", { id: draftId });
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
      devLog("❌ Axios Interceptor: Simulating error for Update Mileage Draft", error.response);
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
    devLog("✅ Axios Interceptor: Mileage draft updated", { id: draftId });
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
    devLog("🔍 Axios Interceptor: Getting mileage draft", {
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
      devLog("❌ Axios Interceptor: Mileage draft not found", { draftId });
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
    devLog("✅ Axios Interceptor: Mileage draft found", { id: draft.id, formType: draft.data.formType });
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
    devLog("✅ Axios Interceptor: Mileage draft deleted", { id: draftId });
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
      devLog("❌ Axios Interceptor: Simulating error for Submit Mileage", error.response);
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
    devLog("✅ Axios Interceptor: Mileage trip submitted", { id: mileageId });
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
    if (queryParams.status && queryParams.status !== "all") {
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
      const valueA = getTimestamp(a, queryParams.sortBy || "updatedAt");
      const valueB = getTimestamp(b, queryParams.sortBy || "updatedAt");
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
    devLog(`✅ Axios Interceptor: Expenses list retrieved (${items.length} items)`, queryParams);
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
    devLog("✅ Axios Interceptor: Logical companies fetched", { count: mockLogicalCompanies.length });
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
    devLog("✅ Axios Interceptor: Form types fetched", { count: mockFormTypes.length });
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
    devLog("✅ Axios Interceptor: Expense types fetched", { company: companyShortName, count: expenseTypes.length });
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
    devLog("✅ Axios Interceptor: Expense type created", newExpenseType);
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
    devLog("✅ Axios Interceptor: Expense type updated", { companyShortName, id: body.id, isActive: updated.isActive });
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
      devLog("📝 Axios Interceptor: Generated default mileage rates for", `${companyShortName}-${expenseTypeId}`);
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
    devLog("✅ Axios Interceptor: Mileage rates fetched", { company: companyShortName, expenseTypeId, count: rates.length });
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
    devLog("✅ Axios Interceptor: Mileage rate created", newRate);
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
    devLog("✅ Axios Interceptor: Mileage rate deleted", { rateId });
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
    devLog("✅ Axios Interceptor: Tax types fetched", { company: companyShortName, count: taxTypes.length });
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

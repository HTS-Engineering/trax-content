import { Y as shouldMockEndpoint, D as shouldSimulateError, Z as createAxiosError, _ as ENDPOINT_REGEX, v as validateFile, g as generateFileId, f as fileToBase64, a as addUploadedFile, h as hasUploadedFile, b as getUploadedFile, c as base64ToBuffer, d as deleteUploadedFile, $ as getBusinessPurposes, a0 as addBusinessPurpose, a1 as updateBusinessPurpose, a2 as deleteBusinessPurpose, i as isMileageRequest, j as createExpenseDraftResponse, s as setRawRequest, k as addMileageDraft, l as buildMileageDraftMock, m as addExpenseDraft, n as buildExpenseDraftMock, o as findDraftById, e as generateBusinessId, r as reverseMapToMileageFormData, u as updateMileageDraft, p as reverseMapToExpenseFormData, q as updateExpenseDraft, y as deleteDraftById, z as addMileageSubmitted, A as buildSubmittedMileageMock, B as addExpenseSubmitted, C as buildSubmittedExpenseMock, t as getRawRequest, G as ExpenseFormStatus, w as getExpenseDrafts, U as getExpenseSubmitted, V as mapMockToExpenseFormResponse, X as findItemById, x as getMileageDrafts, W as getMileageSubmitted, H as mockLogicalCompanies, I as mockFormTypes, J as getExpenseTypes, L as addExpenseType, M as updateExpenseType, N as getExpenseType, O as getMileageRates, a3 as generateDefaultMileageRates, S as setMileageRates, P as recalculateAllRateStatuses, Q as sortRatesByStatus, T as calculateRateStatus, K as getNextExpenseTypeId, R as getNextMileageRateId } from "./expense-response-mappers-CL8oAjhk.js";
import { M as MileageRateStatus } from "./expense-api-8-6W2Gtz.js";
import "./axiosInstance-Dp1zAOAB.js";
import { E as EXPENSE_ENDPOINTS } from "./company-api-DItIZs4s.js";
import { b as devWarn, a as devLog } from "./index-CE7gIUWB.js";
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
        if (shouldSimulateError(fullUrl)) {
          const axiosError = createAxiosError(fullUrl, config);
          config.adapter = () => Promise.reject(axiosError);
          return config;
        }
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
        if (fullUrl.match(/\/configuration\/[^/]+\/mileage-rates\/\d+$/) && config.method === "delete") {
          return this.handleMileageRateDeleteMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/mileage-rates$/) && config.method === "get") {
          return this.handleMileageRatesGetMock(config, fullUrl);
        }
        if (fullUrl.match(/\/configuration\/[^/]+\/mileage-rates$/) && config.method === "post") {
          return this.handleMileageRateCreateMock(config, fullUrl);
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
   * Validates file and stores with same metadata format as MSW handler.
   */
  async handleBackendFileUploadMock(config, fullUrl) {
    var _a;
    await this.delay(1500);
    const formData = config.data;
    const file = formData.get("file");
    if (!file) {
      const mockResponse2 = {
        data: { error: "No file provided", message: "File is required for upload" },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const validation = validateFile(file);
    if (!validation.isValid) {
      const mockResponse2 = {
        data: { error: "Validation failed", message: validation.error },
        status: 422,
        statusText: "Unprocessable Entity",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    const urlObj = new URL(fullUrl, "http://localhost");
    const documentType = urlObj.searchParams.get("document_type") || "receipt";
    const match = fullUrl.match(/\/files\/drafts\/([^/]+)\/files/);
    const expenseId = match ? parseInt(match[1], 10) : 0;
    const fileId = generateFileId();
    const fileExtension = ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "unknown";
    const base64Data = await fileToBase64(file);
    const uploadedFile = {
      id: fileId,
      url: `/api/v1.0/files/${fileId}`,
      filename: `${fileId}.${fileExtension}`,
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
   * Returns actual file content from store (same as MSW handler).
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
    const file = getUploadedFile(fileId);
    if (!file || !file.data) {
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
    const buffer = base64ToBuffer(file.data);
    const blob = new Blob([buffer], { type: file.mimeType });
    devLog("✅ Axios Interceptor: Backend file download requested", { fileId });
    const mockResponse = {
      data: blob,
      status: 200,
      statusText: "OK",
      headers: {
        "content-type": file.mimeType,
        "content-disposition": `inline; filename="${file.originalName}"`
      },
      config
    };
    config.adapter = () => Promise.resolve(mockResponse);
    return config;
  }
  /**
   * Handle real backend file delete mock.
   * Response format matches MSW handler.
   */
  async handleBackendFileDeleteMock(config, fullUrl) {
    await this.delay(500);
    const fileId = fullUrl.split("/").pop();
    if (!fileId || !hasUploadedFile(fileId)) {
      const mockResponse2 = {
        data: { error: "File not found", message: `File with ID ${fileId} does not exist` },
        status: 404,
        statusText: "Not Found",
        headers: {},
        config
      };
      config.adapter = () => Promise.reject({ response: mockResponse2 });
      return config;
    }
    deleteUploadedFile(fileId);
    devLog("✅ Axios Interceptor: Backend file deleted", { fileId });
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
    const businessId = generateBusinessId();
    const isMileage = isMileageRequest(data);
    const response = createExpenseDraftResponse(draftId, businessId, data, true);
    setRawRequest(String(draftId), data);
    if (isMileage) {
      addMileageDraft(buildMileageDraftMock(String(draftId), data, response.createdDate));
    } else {
      addExpenseDraft(buildExpenseDraftMock(String(draftId), data, response.createdDate));
    }
    devLog("✅ Axios Interceptor: Draft created", { id: draftId, businessId, company, isMileage });
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
    const { draft: existingDraft, category } = findDraftById(draftId);
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
    const response = createExpenseDraftResponse(
      parseInt(draftId, 10),
      existingDraft.id.replace(/^draft-/, "").slice(0, 6) || generateBusinessId(),
      data,
      false,
      existingDraft.createdAt
    );
    setRawRequest(draftId, data);
    if (category === "mileage") {
      const updatedMileage = {
        ...existingDraft,
        data: reverseMapToMileageFormData(data),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      updateMileageDraft(draftId, updatedMileage);
    } else {
      const updatedExpense = {
        ...existingDraft,
        data: {
          ...existingDraft.data,
          ...reverseMapToExpenseFormData(data)
        },
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      updateExpenseDraft(draftId, updatedExpense);
    }
    devLog("✅ Axios Interceptor: Draft updated", { id: draftId, company, category });
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
    const { draft } = findDraftById(draftId);
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
    deleteDraftById(draftId);
    devLog("✅ Axios Interceptor: Draft deleted", { id: draftId, company });
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
    const { draft, category } = findDraftById(draftId);
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
    if (category === "mileage") {
      addMileageSubmitted(buildSubmittedMileageMock(draft));
    } else {
      addExpenseSubmitted(buildSubmittedExpenseMock(draft));
    }
    const rawRequest = getRawRequest(draftId);
    const response = rawRequest ? createExpenseDraftResponse(
      parseInt(draftId, 10) || Date.now(),
      generateBusinessId(),
      rawRequest,
      false,
      draft.createdAt
    ) : createExpenseDraftResponse(
      parseInt(draftId, 10) || Date.now(),
      generateBusinessId(),
      {},
      false,
      draft.createdAt
    );
    response.status = ExpenseFormStatus.Submitted;
    deleteDraftById(draftId);
    devLog("✅ Axios Interceptor: Draft submitted", { id: draftId, company, category });
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
      isDefault: false,
      assignedEmployeeCount: 0,
      mileageRateId: body.mileageRate ? expenseTypeId : null,
      mileageEffectiveRate: body.mileageRate ? {
        id: getNextMileageRateId(),
        mileageRateId: expenseTypeId,
        rate: body.mileageRate,
        effectiveDate: (/* @__PURE__ */ new Date()).toISOString(),
        expiryDate: null,
        active: true,
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
   * URL: GET /{company}/mileage-rates?mileage_rate_id=X
   */
  async handleMileageRatesGetMock(config, fullUrl) {
    var _a;
    await this.delay(300);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/mileage-rates/);
    const companyShortName = match ? match[1] : null;
    const mileageRateId = ((_a = config.params) == null ? void 0 : _a.mileage_rate_id) ? parseInt(String(config.params.mileage_rate_id), 10) : null;
    if (!companyShortName || !mileageRateId) {
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
    const expenseType = getExpenseType(companyShortName, mileageRateId);
    const isExpenseTypeActive = (expenseType == null ? void 0 : expenseType.isActive) ?? true;
    let rates = getMileageRates(companyShortName, mileageRateId);
    if (rates.length === 0) {
      rates = generateDefaultMileageRates(mileageRateId);
      setMileageRates(companyShortName, mileageRateId, rates);
      devLog("📝 Axios Interceptor: Generated default mileage rates for", `${companyShortName}-${mileageRateId}`);
    }
    rates = recalculateAllRateStatuses(rates, isExpenseTypeActive);
    rates = sortRatesByStatus(rates);
    devLog("✅ Axios Interceptor: Mileage rates fetched", { company: companyShortName, mileageRateId, count: rates.length });
    const mockResponse = {
      data: rates,
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
   * URL: POST /{company}/mileage-rates  body: { mileageRateId, rate, effectiveDate }
   */
  async handleMileageRateCreateMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/mileage-rates/);
    const companyShortName = match ? match[1] : null;
    const body = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const mileageRateId = body.mileageRateId ? parseInt(String(body.mileageRateId), 10) : null;
    if (!companyShortName || !mileageRateId) {
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
    const expenseType = getExpenseType(companyShortName, mileageRateId);
    const isExpenseTypeActive = (expenseType == null ? void 0 : expenseType.isActive) ?? true;
    let rates = getMileageRates(companyShortName, mileageRateId);
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
      mileageRateId,
      rate: body.rate,
      effectiveDate: body.effectiveDate,
      expiryDate: null,
      active: true,
      status: MileageRateStatus.FUTURE,
      createdBy: "00000000-0000-0000-0000-000000000000",
      createdDate: (/* @__PURE__ */ new Date()).toISOString(),
      updatedBy: null,
      updatedDate: null
    };
    rates.push(newRate);
    rates = recalculateAllRateStatuses(rates, isExpenseTypeActive);
    rates = sortRatesByStatus(rates);
    setMileageRates(companyShortName, mileageRateId, rates);
    devLog("✅ Axios Interceptor: Mileage rate created", newRate);
    const mockResponse = {
      data: String(newRate.id),
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
   * URL: DELETE /{company}/mileage-rates/{effectiveRateId}
   */
  async handleMileageRateDeleteMock(config, fullUrl) {
    await this.delay(500);
    const match = fullUrl.match(/\/configuration\/([^/]+)\/mileage-rates\/(\d+)/);
    const companyShortName = match ? match[1] : null;
    const rateId = match ? parseInt(match[2], 10) : null;
    if (!companyShortName || !rateId) {
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
    let mileageRateId = null;
    let rateToDelete;
    const expenseTypes = getExpenseTypes(companyShortName);
    for (const et of expenseTypes) {
      if (!et.mileageRateId) continue;
      const rates2 = getMileageRates(companyShortName, et.mileageRateId);
      const found = rates2.find((r) => r.id === rateId);
      if (found) {
        mileageRateId = et.mileageRateId;
        rateToDelete = found;
        break;
      }
    }
    if (!mileageRateId || !rateToDelete) {
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
    const expenseType = getExpenseType(companyShortName, mileageRateId);
    const isExpenseTypeActive = (expenseType == null ? void 0 : expenseType.isActive) ?? true;
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
    let rates = getMileageRates(companyShortName, mileageRateId);
    rates = rates.filter((r) => r.id !== rateId);
    rates = recalculateAllRateStatuses(rates, isExpenseTypeActive);
    rates = sortRatesByStatus(rates);
    setMileageRates(companyShortName, mileageRateId, rates);
    devLog("✅ Axios Interceptor: Mileage rate deleted", { rateId });
    const mockResponse = {
      data: { message: "Mileage Effective Rate successfully deleted" },
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

import { a as apiClient } from "./axiosInstance-BPwdN1IK.js";
import { s as shouldMockEndpoint, m as mockBusinessPurposes } from "./index-DtsOMDP2.js";
import { F as FILE_ENDPOINTS } from "./endpoints-B6EuaDvp.js";
const uploadedFiles = /* @__PURE__ */ new Map();
const businessPurposeStore = /* @__PURE__ */ new Map();
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

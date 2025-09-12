import { m as mockCompanies } from "./index-Dh4SQwW5.js";
class HTTPInterceptor {
  originalFetch;
  originalXHR;
  isActive = false;
  constructor() {
    this.originalFetch = window.fetch.bind(window);
    this.originalXHR = window.XMLHttpRequest;
  }
  start() {
    if (this.isActive) {
      console.warn("HTTP Interceptor is already active");
      return;
    }
    window.fetch = this.interceptedFetch.bind(this);
    window.XMLHttpRequest = this.createInterceptedXHR();
    this.isActive = true;
    console.log("✅ MSW: HTTP Interceptor started (Service Worker fallback)");
  }
  stop() {
    if (!this.isActive) return;
    window.fetch = this.originalFetch;
    window.XMLHttpRequest = this.originalXHR;
    this.isActive = false;
    console.log("MSW: HTTP Interceptor stopped");
  }
  createInterceptedXHR() {
    const originalXHR = this.originalXHR;
    const interceptor = this;
    return class extends originalXHR {
      _url = "";
      _method = "GET";
      open(method, url, async, user, password) {
        this._method = method.toUpperCase();
        this._url = typeof url === "string" ? url : url.toString();
        console.log(`🌐 MSW: XHR.open called - ${this._method} ${this._url}`);
        const shouldMock = this._url.includes("/api/") || this._url.includes("localhost:3001");
        super.open(method, url, async ?? true, user, password);
        if (shouldMock) {
          console.log(`🔄 MSW: Intercepting XHR ${this._method} ${this._url}`);
          const mockResponse = interceptor.getMockResponse(this._method, new URL(this._url).pathname, this._url);
          if (mockResponse) {
            console.log(`✅ MSW: Mocked XHR response for ${this._method} ${this._url}`);
            this.send = (body) => {
              console.log(`📦 MSW: send() called for ${this._method} ${this._url}`, body);
              console.log(`📦 MSW: Sending mock data for ${this._method} ${this._url}:`, mockResponse.data);
              setTimeout(() => {
                Object.defineProperty(this, "status", { value: mockResponse.status, configurable: true });
                Object.defineProperty(this, "statusText", { value: "OK", configurable: true });
                Object.defineProperty(this, "response", { value: JSON.stringify(mockResponse.data), configurable: true });
                Object.defineProperty(this, "responseText", { value: JSON.stringify(mockResponse.data), configurable: true });
                Object.defineProperty(this, "responseType", { value: "", configurable: true });
                this.getResponseHeader = (name) => {
                  if (name.toLowerCase() === "content-type") {
                    return "application/json";
                  }
                  return null;
                };
                this.getAllResponseHeaders = () => {
                  return "content-type: application/json\r\n";
                };
                console.log(`📡 MSW: Mock XHR properties set - status: ${this.status}`);
                console.log(`📄 MSW: Response data:`, this.responseText);
                this._readyState = 2;
                if (this.onreadystatechange) {
                  this.onreadystatechange(new Event("readystatechange"));
                }
                this._readyState = 3;
                if (this.onreadystatechange) {
                  this.onreadystatechange(new Event("readystatechange"));
                }
                this._readyState = 4;
                Object.defineProperty(this, "readyState", { value: 4, configurable: true });
                if (this.onreadystatechange) {
                  console.log(`🔄 MSW: Triggering final onreadystatechange for ${this._url}`);
                  this.onreadystatechange(new Event("readystatechange"));
                }
                if (this.onload) {
                  console.log(`✅ MSW: Triggering onload for ${this._url}`);
                  this.onload(new ProgressEvent("load", { lengthComputable: true, loaded: this.responseText.length, total: this.responseText.length }));
                }
              }, 10);
            };
            return;
          }
        }
      }
    };
  }
  async interceptedFetch(input, init) {
    const request = new Request(input, init);
    const url = new URL(request.url);
    const isApiCall = url.pathname.startsWith("/api/") || url.href.includes("/api/") || url.hostname === "localhost" && url.port === "3001";
    if (!isApiCall) {
      return this.originalFetch(input, init);
    }
    console.log(`🔄 MSW: Intercepting ${request.method} ${request.url}`);
    const mockResponse = this.getMockResponse(request.method, url.pathname, request.url);
    if (mockResponse) {
      console.log(`✅ MSW: Mocked response for ${request.method} ${request.url}`);
      return new Response(JSON.stringify(mockResponse.data), {
        status: mockResponse.status,
        statusText: "OK",
        headers: {
          "Content-Type": "application/json",
          ...mockResponse.headers
        }
      });
    }
    console.log(`⚠️ MSW: No mock found for ${request.method} ${request.url}, using real request`);
    return this.originalFetch(input, init);
  }
  getMockResponse(method, pathname, fullUrl) {
    if (method === "GET" && (pathname === "/api/companies" || fullUrl.includes("/api/companies"))) {
      return {
        status: 200,
        data: mockCompanies
      };
    }
    if (method === "GET" && (pathname.startsWith("/api/expenses") || fullUrl.includes("/api/expenses"))) {
      return {
        status: 200,
        data: {
          expenses: [],
          total: 0,
          page: 1,
          limit: 10
        }
      };
    }
    if (method === "GET" && (pathname.includes("/form-settings") || fullUrl.includes("/form-settings"))) {
      return {
        status: 200,
        data: {
          sections: [
            {
              id: "basic",
              title: "Basic Information",
              fields: ["date", "amount", "description"]
            },
            {
              id: "details",
              title: "Details",
              fields: ["category", "vendor", "receipt"]
            }
          ]
        }
      };
    }
    return null;
  }
}
const httpInterceptor = new HTTPInterceptor();
export {
  httpInterceptor
};

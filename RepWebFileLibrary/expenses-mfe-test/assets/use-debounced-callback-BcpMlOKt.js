import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
import { l as useQuery, u as useCompanyStore, q as queryKeys } from "./query-keys-DPtTh-IB.js";
import { a as apiClient } from "./axiosInstance-C1LM7jUN.js";
import { C as CONFIGURATION_ENDPOINTS, B as BUSINESS_PURPOSE_ENDPOINTS } from "./configuration-BG7IXp_J.js";
const PREFIX = `[${"test".toUpperCase()}]`;
const devLog = (...args) => console.log(PREFIX, ...args);
const devWarn = (...args) => console.warn(PREFIX, "⚠️", ...args);
const devError = (...args) => console.error(PREFIX, "❌", ...args);
console.groupEnd.bind(console);
class ConfigurationApiService {
  async getLogicalCompanies() {
    const response = await apiClient.get(
      CONFIGURATION_ENDPOINTS.LOGICAL_COMPANIES
    );
    return response.data;
  }
  async getLogicalCompanyByShortName(shortName) {
    const response = await apiClient.get(
      CONFIGURATION_ENDPOINTS.LOGICAL_COMPANY_BY_NAME(shortName)
    );
    return response.data;
  }
  async getExpenseTypes(logicalCompanyShortName, params) {
    const url = CONFIGURATION_ENDPOINTS.EXPENSE_TYPES(logicalCompanyShortName);
    const response = await apiClient.get(url, { params });
    devLog("API:", url);
    return response.data;
  }
  async getExpenseTypeById(logicalCompanyShortName, expenseTypeId) {
    const response = await apiClient.get(
      CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_BY_ID(logicalCompanyShortName, expenseTypeId)
    );
    return response.data;
  }
  async createExpenseType(logicalCompanyShortName, data) {
    const response = await apiClient.post(
      CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_CREATE(logicalCompanyShortName),
      data
    );
    return response.data;
  }
  async updateExpenseType(logicalCompanyShortName, data) {
    const response = await apiClient.put(
      CONFIGURATION_ENDPOINTS.EXPENSE_TYPE_UPDATE(logicalCompanyShortName),
      data
    );
    return response.data;
  }
  async deleteExpenseType(logicalCompanyShortName, expenseTypeId) {
    await this.updateExpenseType(logicalCompanyShortName, {
      id: expenseTypeId,
      isActive: false,
      updatedBy: this.getCurrentUser()
    });
  }
  async activateExpenseType(logicalCompanyShortName, expenseTypeId) {
    return this.updateExpenseType(logicalCompanyShortName, {
      id: expenseTypeId,
      isActive: true,
      updatedBy: this.getCurrentUser()
    });
  }
  async deactivateExpenseType(logicalCompanyShortName, expenseTypeId) {
    return this.updateExpenseType(logicalCompanyShortName, {
      id: expenseTypeId,
      isActive: false,
      updatedBy: this.getCurrentUser()
    });
  }
  getCurrentUser() {
    return "current-user";
  }
  validateExpenseTypeCreate(data) {
    const errors = [];
    if (!data.expenseTypeName || data.expenseTypeName.length < 1) {
      errors.push("Expense type name is required");
    }
    if (data.expenseTypeName && data.expenseTypeName.length > 100) {
      errors.push("Expense type name must not exceed 100 characters");
    }
    if (data.expenseTypeDescription && data.expenseTypeDescription.length > 500) {
      errors.push("Description must not exceed 500 characters");
    }
    if (!data.formTypeId || data.formTypeId < 1) {
      errors.push("Form type is required");
    }
    return errors;
  }
  validateExpenseTypeUpdate(data) {
    const errors = [];
    if (!data.id || data.id < 0) {
      errors.push("Valid expense type ID is required");
    }
    if (data.expenseTypeName !== null && data.expenseTypeName !== void 0) {
      if (data.expenseTypeName.length < 1) {
        errors.push("Expense type name cannot be empty");
      }
      if (data.expenseTypeName.length > 100) {
        errors.push("Expense type name must not exceed 100 characters");
      }
    }
    if (data.expenseTypeDescription !== null && data.expenseTypeDescription !== void 0) {
      if (data.expenseTypeDescription.length > 500) {
        errors.push("Description must not exceed 500 characters");
      }
    }
    return errors;
  }
  async getBusinessPurposes(logicalCompanyShortName, params) {
    const url = BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSES(logicalCompanyShortName);
    const response = await apiClient.get(url, { params });
    devLog("API:", url);
    return response.data;
  }
  async getBusinessPurposeById(logicalCompanyShortName, businessPurposeId) {
    const response = await apiClient.get(
      BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_BY_ID(logicalCompanyShortName, businessPurposeId)
    );
    return response.data;
  }
  async createBusinessPurpose(logicalCompanyShortName, data) {
    const response = await apiClient.post(
      BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_CREATE(logicalCompanyShortName),
      data
    );
    return response.data;
  }
  async updateBusinessPurpose(logicalCompanyShortName, data) {
    const response = await apiClient.put(
      BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_UPDATE(logicalCompanyShortName),
      data
    );
    return response.data;
  }
  async deleteBusinessPurpose(logicalCompanyShortName, businessPurposeId) {
    await this.updateBusinessPurpose(logicalCompanyShortName, {
      id: businessPurposeId,
      isActive: false,
      updatedBy: this.getCurrentUser()
    });
  }
  async activateBusinessPurpose(logicalCompanyShortName, businessPurposeId) {
    return this.updateBusinessPurpose(logicalCompanyShortName, {
      id: businessPurposeId,
      isActive: true,
      updatedBy: this.getCurrentUser()
    });
  }
  async deactivateBusinessPurpose(logicalCompanyShortName, businessPurposeId) {
    return this.updateBusinessPurpose(logicalCompanyShortName, {
      id: businessPurposeId,
      isActive: false,
      updatedBy: this.getCurrentUser()
    });
  }
  validateBusinessPurposeCreate(data) {
    const errors = [];
    if (!data.businessPurposeName || data.businessPurposeName.length < 1) {
      errors.push("Business purpose name is required");
    }
    if (data.businessPurposeName && data.businessPurposeName.length > 100) {
      errors.push("Business purpose name must not exceed 100 characters");
    }
    if (data.businessPurposeDescription && data.businessPurposeDescription.length > 500) {
      errors.push("Description must not exceed 500 characters");
    }
    return errors;
  }
  validateBusinessPurposeUpdate(data) {
    const errors = [];
    if (!data.id || data.id < 0) {
      errors.push("Valid business purpose ID is required");
    }
    if (data.businessPurposeName !== null && data.businessPurposeName !== void 0) {
      if (data.businessPurposeName.length < 1) {
        errors.push("Business purpose name cannot be empty");
      }
      if (data.businessPurposeName.length > 100) {
        errors.push("Business purpose name must not exceed 100 characters");
      }
    }
    if (data.businessPurposeDescription !== null && data.businessPurposeDescription !== void 0) {
      if (data.businessPurposeDescription.length > 500) {
        errors.push("Description must not exceed 500 characters");
      }
    }
    return errors;
  }
}
const configurationApi = new ConfigurationApiService();
const { useEffect: useEffect$1 } = await importShared("react");
const mapToLogicalCompany = (apiCompany) => ({
  id: apiCompany.logicalCompanyShortName,
  name: apiCompany.logicalCompanyName,
  shortName: apiCompany.logicalCompanyShortName,
  isDefault: apiCompany.defaultLogicalCompany
});
const useCompanies = () => {
  return useQuery({
    queryKey: queryKeys.companies.list(),
    queryFn: async () => {
      const data = await configurationApi.getLogicalCompanies();
      return data.items.map(mapToLogicalCompany);
    },
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  });
};
const useDefaultCompany = () => {
  const { selectedCompany, userDefaultCompany, setSelectedCompany, setUserDefaultCompany } = useCompanyStore();
  const { data: companiesData, isLoading } = useCompanies();
  useEffect$1(() => {
    if (companiesData && companiesData.length > 0 && !isLoading) {
      const defaultCompany = companiesData.find((c) => c.isDefault) || companiesData[0];
      if (!userDefaultCompany) {
        setUserDefaultCompany(defaultCompany);
      }
      if (!selectedCompany) {
        setSelectedCompany(defaultCompany);
      }
    }
  }, [selectedCompany, userDefaultCompany, companiesData, isLoading, setSelectedCompany, setUserDefaultCompany]);
  return {
    company: selectedCompany || (companiesData && companiesData.length > 0 ? companiesData[0] : null),
    userDefaultCompany,
    isLoading
  };
};
function debounce(func, delay) {
  let timeoutId = null;
  return function debounced(...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
}
const { useCallback, useEffect, useRef } = await importShared("react");
function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef(callback);
  const debouncedRef = useRef(void 0);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const debouncedCallback = useCallback(
    (...args) => {
      if (!debouncedRef.current) {
        debouncedRef.current = debounce(
          (...debouncedArgs) => callbackRef.current(...debouncedArgs),
          delay
        );
      }
      debouncedRef.current(...args);
    },
    [delay]
  );
  useEffect(() => {
    return () => {
      debouncedRef.current = void 0;
    };
  }, []);
  return debouncedCallback;
}
export {
  devLog as a,
  devWarn as b,
  useDebouncedCallback as c,
  devError as d,
  useDefaultCompany as e,
  useCompanies as u
};

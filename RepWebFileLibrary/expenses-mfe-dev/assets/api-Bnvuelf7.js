import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { l as useQuery, k as useQueryClient, q as queryKeys } from "./LoadingSpinner-CWj5JVUu.js";
import { h as useExpenseStore, u as useMutation } from "./store-C9UItKRl.js";
import { a as apiClient } from "./axiosInstance-Df66sy1J.js";
var ExpenseFormType = /* @__PURE__ */ ((ExpenseFormType2) => {
  ExpenseFormType2["STANDARD"] = "standard";
  ExpenseFormType2["ENTERTAINMENT"] = "entertainment";
  ExpenseFormType2["MILEAGE"] = "mileage";
  return ExpenseFormType2;
})(ExpenseFormType || {});
const { useEffect } = await importShared("react");
const API_BASE_PATH = "/api/v1.0/configuration";
const mapBackendToFrontend = (backend) => {
  return {
    id: backend.id.toString(),
    name: backend.expenseTypeName,
    description: backend.expenseTypeDescription || "",
    formType: getFormTypeEnum(backend.formTypeId),
    status: backend.isActive ? "active" : "inactive",
    mileage: backend.mileageRateId || void 0,
    created: new Date(backend.createdDate),
    modified: backend.updatedDate ? new Date(backend.updatedDate) : new Date(backend.createdDate),
    // Legacy fields for compatibility
    type: backend.expenseTypeName,
    updated: backend.updatedDate ? new Date(backend.updatedDate) : new Date(backend.createdDate)
  };
};
const mapFrontendToBackendCreate = (frontend) => {
  return {
    formTypeId: getFormTypeId(frontend.formType || "standard"),
    expenseTypeName: frontend.name || "",
    expenseTypeDescription: frontend.description || "",
    mileageRate: frontend.formType === "mileage" ? frontend.mileage || null : null,
    createdBy: getCurrentUser()
  };
};
const mapFrontendToBackendUpdate = (id, frontend) => {
  var _a;
  const update = {
    id: parseInt(id),
    updatedBy: getCurrentUser()
  };
  if ("name" in frontend) {
    update.expenseTypeName = frontend.name || null;
  }
  if ("description" in frontend) {
    update.expenseTypeDescription = ((_a = frontend.description) == null ? void 0 : _a.trim()) ?? " ";
  }
  if ("status" in frontend) {
    update.isActive = frontend.status === "active";
  }
  return update;
};
const getFormTypeId = (formType) => {
  const normalizedType = typeof formType === "string" ? formType.toLowerCase() : formType;
  const formTypeMap = {
    "standard": 1,
    "mileage": 2,
    "entertainment": 3
  };
  return formTypeMap[normalizedType] || 1;
};
const getFormTypeEnum = (formTypeId) => {
  const formTypeMap = {
    1: ExpenseFormType.STANDARD,
    2: ExpenseFormType.MILEAGE,
    3: ExpenseFormType.ENTERTAINMENT
  };
  return formTypeMap[formTypeId] || ExpenseFormType.STANDARD;
};
const getCurrentUser = () => {
  return "current-user";
};
const useExpenseTypes = (companyShortName, includeInactive = false) => {
  const { setExpenseTypes, setLoadingExpenseTypes, setExpenseTypesError } = useExpenseStore();
  const query = useQuery({
    queryKey: companyShortName ? queryKeys.expenseTypes.list(companyShortName, includeInactive) : queryKeys.expenseTypes.lists(),
    queryFn: async () => {
      if (!companyShortName) throw new Error("Company short name is required");
      const params = {
        show_inactive: includeInactive
      };
      const response = await apiClient.get(
        `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-types`,
        { params }
      );
      return response.data.map(mapBackendToFrontend);
    },
    enabled: !!companyShortName,
    staleTime: 2 * 60 * 1e3,
    // 2 minutes
    gcTime: 5 * 60 * 1e3
    // 5 minutes
  });
  useEffect(() => {
    if (query.data) {
      setExpenseTypes(query.data);
      setLoadingExpenseTypes(false);
      setExpenseTypesError(null);
    }
  }, [query.data, setExpenseTypes, setLoadingExpenseTypes, setExpenseTypesError]);
  useEffect(() => {
    if (query.error) {
      setExpenseTypesError(query.error.message || "Failed to fetch expense types");
      setLoadingExpenseTypes(false);
    }
  }, [query.error, setExpenseTypesError, setLoadingExpenseTypes]);
  return query;
};
const useCreateExpenseType = () => {
  const queryClient = useQueryClient();
  const { addExpenseType } = useExpenseStore();
  return useMutation({
    mutationFn: async ({ companyShortName, data }) => {
      var _a, _b, _c, _d;
      const createData = mapFrontendToBackendCreate(data);
      console.log("Creating expense type:", {
        url: `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-type`,
        payload: createData,
        companyShortName
      });
      try {
        const response = await apiClient.post(
          `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-type`,
          createData
        );
        console.log("Create expense type response:", response.data);
        return mapBackendToFrontend(response.data);
      } catch (error) {
        console.error("Create expense type failed:", {
          status: (_a = error.response) == null ? void 0 : _a.status,
          statusText: (_b = error.response) == null ? void 0 : _b.statusText,
          data: (_c = error.response) == null ? void 0 : _c.data,
          headers: (_d = error.response) == null ? void 0 : _d.headers
        });
        throw error;
      }
    },
    onSuccess: (newExpenseType) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
      addExpenseType(newExpenseType);
    },
    onError: (error) => {
      console.error("Failed to create expense type:", error);
    }
  });
};
const useUpdateExpenseType = () => {
  const queryClient = useQueryClient();
  const { updateExpenseType } = useExpenseStore();
  return useMutation({
    mutationFn: async ({
      companyShortName,
      id,
      data
    }) => {
      const updateData = mapFrontendToBackendUpdate(id, data);
      const response = await apiClient.put(
        `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-type`,
        updateData
      );
      return mapBackendToFrontend(response.data);
    },
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.expenseTypes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.expenseTypes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (et) => et.id === id ? { ...et, ...data, modified: /* @__PURE__ */ new Date() } : et
        );
      });
      return { previousData };
    },
    onError: (error, _variables, context) => {
      console.error("Failed to update expense type:", error);
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSuccess: (updatedExpenseType) => {
      updateExpenseType(updatedExpenseType.id, updatedExpenseType);
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    }
  });
};
const useToggleExpenseTypeStatus = () => {
  const queryClient = useQueryClient();
  const { updateExpenseType } = useExpenseStore();
  return useMutation({
    mutationFn: async ({
      companyShortName,
      id,
      isActive
    }) => {
      const response = await apiClient.put(
        `${API_BASE_PATH}/${encodeURIComponent(companyShortName)}/expense-type`,
        mapFrontendToBackendUpdate(id, { status: isActive ? "active" : "inactive" })
      );
      return mapBackendToFrontend(response.data);
    },
    onMutate: async ({ id, isActive }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.expenseTypes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.expenseTypes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.expenseTypes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (et) => et.id === id ? { ...et, status: isActive ? "active" : "inactive", modified: /* @__PURE__ */ new Date() } : et
        );
      });
      return { previousData };
    },
    onError: (error, _variables, context) => {
      console.error("Failed to toggle expense type status:", error);
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSuccess: (updatedExpenseType) => {
      updateExpenseType(updatedExpenseType.id, updatedExpenseType);
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseTypes.all()
      });
    }
  });
};
const useFormTypeOptions = () => {
  return useQuery({
    queryKey: queryKeys.formTypes.list(),
    queryFn: async () => {
      const formTypes = [
        {
          id: "1",
          value: "standard",
          label: "Standard",
          description: "Standard expense form",
          isActive: true,
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        },
        {
          id: "2",
          value: "mileage",
          label: "Mileage",
          description: "Mileage expense form",
          isActive: true,
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        },
        {
          id: "3",
          value: "entertainment",
          label: "Entertainment",
          description: "Entertainment expense form",
          isActive: true,
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        }
      ];
      return formTypes;
    },
    staleTime: 5 * 60 * 1e3
    // 5 minutes - these don't change often
  });
};
const useMileageRateOptions = () => {
  return useQuery({
    queryKey: queryKeys.mileageRates.list(),
    queryFn: async () => {
      const mileageRates = [
        {
          id: "1",
          value: "0.67",
          label: "2024 Rate - $0.67/km",
          rate: 0.67,
          description: "Standard mileage rate for 2024",
          isActive: true,
          effectiveDate: /* @__PURE__ */ new Date("2024-01-01"),
          created: /* @__PURE__ */ new Date("2024-01-01"),
          modified: /* @__PURE__ */ new Date("2024-01-01")
        },
        {
          id: "2",
          value: "0.65",
          label: "2023 Rate - $0.65/km",
          rate: 0.65,
          description: "Standard mileage rate for 2023",
          isActive: false,
          effectiveDate: /* @__PURE__ */ new Date("2023-01-01"),
          created: /* @__PURE__ */ new Date("2023-01-01"),
          modified: /* @__PURE__ */ new Date("2023-01-01")
        }
      ];
      return {
        rates: mileageRates,
        currentRate: mileageRates.find((rate) => rate.isActive)
      };
    },
    staleTime: 5 * 60 * 1e3
    // 5 minutes
  });
};
export {
  ExpenseFormType as E,
  useCreateExpenseType as a,
  useUpdateExpenseType as b,
  useToggleExpenseTypeStatus as c,
  useFormTypeOptions as d,
  useMileageRateOptions as e,
  useExpenseTypes as u
};

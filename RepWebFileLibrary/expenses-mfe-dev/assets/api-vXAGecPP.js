import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { l as useQuery, q as queryKeys, k as useQueryClient } from "./LoadingSpinner-CWj5JVUu.js";
import { h as useExpenseStore, u as useMutation } from "./store-C9UItKRl.js";
import { a as apiClient } from "./axiosInstance-Df66sy1J.js";
import { B as BUSINESS_PURPOSE_ENDPOINTS } from "./config-CcAFLaBz.js";
const { useEffect } = await importShared("react");
const mapToBusinessPurpose = (apiData) => {
  return {
    id: String(apiData.id),
    companyId: String(apiData.logicalCompanyId),
    businessPurpose: apiData.businessPurposeName,
    description: apiData.businessPurposeDescription,
    isActive: apiData.isActive,
    created: new Date(apiData.createdDate),
    modified: apiData.updatedDate ? new Date(apiData.updatedDate) : new Date(apiData.createdDate)
  };
};
const useBusinessPurposes = (companyShortName, includeInactive = false) => {
  const { setBusinessPurposes, setLoadingBusinessPurposes, setBusinessPurposesError } = useExpenseStore();
  const query = useQuery({
    queryKey: companyShortName ? queryKeys.businessPurposes.list(companyShortName, includeInactive) : queryKeys.businessPurposes.lists(),
    queryFn: async () => {
      if (!companyShortName) throw new Error("Company short name is required");
      const params = includeInactive ? { show_inactive: true } : {};
      const response = await apiClient.get(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSES(companyShortName),
        { params }
      );
      return response.data.map(mapToBusinessPurpose);
    },
    enabled: !!companyShortName,
    staleTime: 3 * 60 * 1e3
  });
  useEffect(() => {
    if (query.data) {
      setBusinessPurposes(query.data);
      setLoadingBusinessPurposes(false);
      setBusinessPurposesError(null);
    }
  }, [query.data, setBusinessPurposes, setLoadingBusinessPurposes, setBusinessPurposesError]);
  useEffect(() => {
    if (query.error) {
      setBusinessPurposesError(query.error.message || "Failed to fetch business purposes");
      setLoadingBusinessPurposes(false);
    }
  }, [query.error, setBusinessPurposesError, setLoadingBusinessPurposes]);
  return query;
};
const getCurrentUser = () => {
  return "current-user";
};
const useCreateBusinessPurpose = () => {
  const queryClient = useQueryClient();
  const { addBusinessPurpose } = useExpenseStore();
  return useMutation({
    mutationFn: async ({ companyShortName, data }) => {
      const apiData = {
        businessPurposeName: data.businessPurpose || "",
        businessPurposeDescription: data.description || "",
        createdBy: getCurrentUser()
      };
      const response = await apiClient.post(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_CREATE(companyShortName),
        apiData
      );
      return mapToBusinessPurpose(response.data);
    },
    onSuccess: (newBusinessPurpose) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.businessPurposes.all() });
      addBusinessPurpose(newBusinessPurpose);
    }
  });
};
const useUpdateBusinessPurpose = () => {
  const queryClient = useQueryClient();
  const { updateBusinessPurpose } = useExpenseStore();
  return useMutation({
    mutationFn: async ({ id, companyShortName, data }) => {
      var _a;
      const apiData = {
        id: parseInt(id),
        updatedBy: getCurrentUser()
      };
      if ("businessPurpose" in data) {
        apiData.businessPurposeName = data.businessPurpose || null;
      }
      if ("description" in data) {
        apiData.businessPurposeDescription = ((_a = data.description) == null ? void 0 : _a.trim()) ?? " ";
      }
      if ("isActive" in data) {
        apiData.isActive = data.isActive;
      }
      console.log("UPDATE Business Purpose payload:", apiData);
      const response = await apiClient.put(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_UPDATE(companyShortName),
        apiData
      );
      return mapToBusinessPurpose(response.data);
    },
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.businessPurposes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.businessPurposes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.businessPurposes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (bp) => bp.id === id ? { ...bp, ...data, modified: /* @__PURE__ */ new Date() } : bp
        );
      });
      return { previousData };
    },
    onError: (_err, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSuccess: (updatedBusinessPurpose) => {
      updateBusinessPurpose(updatedBusinessPurpose.id, updatedBusinessPurpose);
      queryClient.invalidateQueries({
        queryKey: queryKeys.businessPurposes.all()
      });
    }
  });
};
const useToggleBusinessPurposeStatus = () => {
  const queryClient = useQueryClient();
  const { updateBusinessPurpose } = useExpenseStore();
  return useMutation({
    mutationFn: async ({ id, companyShortName, isActive }) => {
      const apiData = {
        id: parseInt(id),
        isActive,
        updatedBy: getCurrentUser()
      };
      const response = await apiClient.put(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_UPDATE(companyShortName),
        apiData
      );
      return mapToBusinessPurpose(response.data);
    },
    onMutate: async ({ id, isActive }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.businessPurposes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.businessPurposes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.businessPurposes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (bp) => bp.id === id ? { ...bp, isActive, modified: /* @__PURE__ */ new Date() } : bp
        );
      });
      return { previousData };
    },
    onError: (_err, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSuccess: (updatedBusinessPurpose) => {
      updateBusinessPurpose(updatedBusinessPurpose.id, updatedBusinessPurpose);
      queryClient.invalidateQueries({
        queryKey: queryKeys.businessPurposes.all()
      });
    }
  });
};
export {
  useCreateBusinessPurpose as a,
  useUpdateBusinessPurpose as b,
  useToggleBusinessPurposeStatus as c,
  useBusinessPurposes as u
};

import { l as useQuery, q as queryKeys, t as useQueryClient } from "./query-keys-DRM49VrI.js";
import { u as useMutation } from "./useMutation-BzVZP7Bb.js";
import { a as apiClient } from "./axiosInstance-B8TAe6oh.js";
import { B as BUSINESS_PURPOSE_ENDPOINTS } from "./configuration-BG7IXp_J.js";
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
  return useQuery({
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
};
const getCurrentUser = () => {
  return "current-user";
};
const useCreateBusinessPurpose = () => {
  const queryClient = useQueryClient();
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.businessPurposes.all() });
    }
  });
};
const useUpdateBusinessPurpose = () => {
  const queryClient = useQueryClient();
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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.businessPurposes.all()
      });
    }
  });
};
const useToggleBusinessPurposeStatus = () => {
  const queryClient = useQueryClient();
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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.businessPurposes.all()
      });
    }
  });
};
export {
  useUpdateBusinessPurpose as a,
  useToggleBusinessPurposeStatus as b,
  useBusinessPurposes as c,
  useCreateBusinessPurpose as u
};

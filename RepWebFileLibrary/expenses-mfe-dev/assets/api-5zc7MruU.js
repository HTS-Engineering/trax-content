import { importShared } from "./__federation_fn_import-DlFISMuz.js";
import { l as useQuery, q as queryKeys, k as useQueryClient } from "./LoadingSpinner-DqE6Gge9.js";
import { f as useExpenseStore, e as useMutation } from "./schemas-DZYP4uWY.js";
import { a as apiClient } from "./axiosInstance-D83Ho1lg.js";
import { B as BUSINESS_PURPOSE_ENDPOINTS } from "./config-BPfAis3L.js";
const { useEffect } = await importShared("react");
const mapToBusinessPurpose = (apiData) => {
  return {
    id: String(apiData.Id),
    companyId: String(apiData.LogicalCompanyId),
    businessPurpose: apiData.BusinessPurposeName,
    description: apiData.BusinessPurposeDescription,
    isActive: apiData.IsActive,
    created: new Date(apiData.CreatedDate),
    modified: apiData.UpdatedDate ? new Date(apiData.UpdatedDate) : new Date(apiData.CreatedDate)
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
        BusinessPurposeName: data.businessPurpose || "",
        BusinessPurposeDescription: data.description || "",
        CreatedBy: getCurrentUser()
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
        Id: parseInt(id),
        UpdatedBy: getCurrentUser()
      };
      if ("businessPurpose" in data) {
        apiData.BusinessPurposeName = data.businessPurpose || null;
      }
      if ("description" in data) {
        apiData.BusinessPurposeDescription = ((_a = data.description) == null ? void 0 : _a.trim()) ?? " ";
      }
      if ("isActive" in data) {
        apiData.IsActive = data.isActive;
      }
      console.log("UPDATE Business Purpose payload:", apiData);
      const response = await apiClient.put(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_UPDATE(companyShortName),
        apiData
      );
      return mapToBusinessPurpose(response.data);
    },
    onMutate: async ({ id, companyShortName, data }) => {
      const queryKey = queryKeys.businessPurposes.list(companyShortName);
      await queryClient.cancelQueries({ queryKey });
      const previousData = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (old) => {
        if (!old) return old;
        return old.map(
          (bp) => bp.id === id ? { ...bp, ...data, modified: /* @__PURE__ */ new Date() } : bp
        );
      });
      return { previousData, companyShortName };
    },
    onError: (_err, _variables, context) => {
      if ((context == null ? void 0 : context.previousData) && (context == null ? void 0 : context.companyShortName)) {
        queryClient.setQueryData(
          queryKeys.businessPurposes.list(context.companyShortName),
          context.previousData
        );
      }
    },
    onSuccess: (updatedBusinessPurpose, variables) => {
      updateBusinessPurpose(updatedBusinessPurpose.id, updatedBusinessPurpose);
      queryClient.invalidateQueries({
        queryKey: queryKeys.businessPurposes.list(variables.companyShortName)
      });
    }
  });
};
export {
  useCreateBusinessPurpose as a,
  useUpdateBusinessPurpose as b,
  useBusinessPurposes as u
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ah as useQuery, Y as queryKeys, ai as useQueryClient, aa as useMutation } from "./use-scroll-into-view-ref-B9ZfFHUy.js";
import { x as apiClient, B as BUSINESS_PURPOSE_ENDPOINTS } from "./configuration-B4FJFUoo.js";
const mapToBusinessPurpose = /* @__PURE__ */ __name((apiData) => {
  return {
    id: String(apiData.id),
    companyId: String(apiData.logicalCompanyId),
    businessPurpose: apiData.businessPurposeName,
    description: apiData.businessPurposeDescription,
    isActive: apiData.isActive,
    created: new Date(apiData.createdDate),
    modified: apiData.updatedDate ? new Date(apiData.updatedDate) : new Date(apiData.createdDate)
  };
}, "mapToBusinessPurpose");
const useBusinessPurposes = /* @__PURE__ */ __name((companyShortName, includeInactive = false) => {
  return useQuery({
    queryKey: companyShortName ? queryKeys.businessPurposes.list(companyShortName, includeInactive) : queryKeys.businessPurposes.lists(),
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!companyShortName) throw new Error("Company short name is required");
      const params = includeInactive ? { show_inactive: true } : {};
      const response = await apiClient.get(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSES.build({ tenant: companyShortName }),
        { params }
      );
      return response.data.map(mapToBusinessPurpose);
    }, "queryFn"),
    enabled: !!companyShortName,
    staleTime: 3 * 60 * 1e3
  });
}, "useBusinessPurposes");
const useCreateBusinessPurpose = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ companyShortName, data }) => {
      const apiData = {
        businessPurposeName: data.businessPurpose || "",
        businessPurposeDescription: data.description || ""
      };
      const response = await apiClient.post(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_CREATE.build({ tenant: companyShortName }),
        apiData
      );
      return mapToBusinessPurpose(response.data);
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({ queryKey: queryKeys.businessPurposes.all() });
    }, "onSuccess")
  });
}, "useCreateBusinessPurpose");
const useUpdateBusinessPurpose = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ id, companyShortName, data }) => {
      var _a;
      const apiData = {
        id: parseInt(id)
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
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_UPDATE.build({ tenant: companyShortName }),
        apiData
      );
      return mapToBusinessPurpose(response.data);
    }, "mutationFn"),
    onMutate: /* @__PURE__ */ __name(async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.businessPurposes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.businessPurposes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.businessPurposes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (bp) => bp.id === id ? { ...bp, ...data, modified: /* @__PURE__ */ new Date() } : bp
        );
      });
      return { previousData };
    }, "onMutate"),
    onError: /* @__PURE__ */ __name((_err, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    }, "onError"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.businessPurposes.all()
      });
    }, "onSuccess")
  });
}, "useUpdateBusinessPurpose");
const useToggleBusinessPurposeStatus = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ id, companyShortName, isActive }) => {
      const apiData = {
        id: parseInt(id),
        isActive
      };
      const response = await apiClient.put(
        BUSINESS_PURPOSE_ENDPOINTS.BUSINESS_PURPOSE_UPDATE.build({ tenant: companyShortName }),
        apiData
      );
      return mapToBusinessPurpose(response.data);
    }, "mutationFn"),
    onMutate: /* @__PURE__ */ __name(async ({ id, isActive }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.businessPurposes.all() });
      const previousData = queryClient.getQueriesData({ queryKey: queryKeys.businessPurposes.all() });
      queryClient.setQueriesData({ queryKey: queryKeys.businessPurposes.all() }, (old) => {
        if (!Array.isArray(old)) return old;
        return old.map(
          (bp) => bp.id === id ? { ...bp, isActive, modified: /* @__PURE__ */ new Date() } : bp
        );
      });
      return { previousData };
    }, "onMutate"),
    onError: /* @__PURE__ */ __name((_err, _variables, context) => {
      if (context == null ? void 0 : context.previousData) {
        context.previousData.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    }, "onError"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.businessPurposes.all()
      });
    }, "onSuccess")
  });
}, "useToggleBusinessPurposeStatus");
export {
  useCreateBusinessPurpose as a,
  useToggleBusinessPurposeStatus as b,
  useUpdateBusinessPurpose as c,
  useBusinessPurposes as u
};

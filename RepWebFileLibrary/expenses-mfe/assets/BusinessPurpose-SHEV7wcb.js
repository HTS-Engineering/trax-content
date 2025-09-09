import { S as Subscribable, p as shallowEqualObjects, q as hashKey, r as getDefaultState, t as notifyManager, v as useQueryClient, w as noop, x as shouldThrowError, i as useQuery, k as apiClient, l as useCompanyStore, j as jsxRuntimeExports, s as st, a as ct, m as LoadingSpinner } from "./__federation_expose_Mount-lVT4YM6Q.js";
import { importShared } from "./__federation_fn_import-CFnudcB9.js";
import { u as useExpenseStore, F as ForwardRef$1, a as ForwardRef$2, b as ForwardRef$3, c as ForwardRef$4, d as ForwardRef$5 } from "./XCircleIcon-DXgUexzJ.js";
var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a;
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a = this.#currentMutation) == null ? void 0 : _a.state.status) === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a;
    if (!this.hasListeners()) {
      (_a = this.#currentMutation) == null ? void 0 : _a.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    var _a;
    (_a = this.#currentMutation) == null ? void 0 : _a.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    var _a;
    this.#mutateOptions = options;
    (_a = this.#currentMutation) == null ? void 0 : _a.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    var _a;
    const state = ((_a = this.#currentMutation) == null ? void 0 : _a.state) ?? getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager.batch(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const context = this.#currentResult.context;
        if ((action == null ? void 0 : action.type) === "success") {
          (_b = (_a = this.#mutateOptions).onSuccess) == null ? void 0 : _b.call(_a, action.data, variables, context);
          (_d = (_c = this.#mutateOptions).onSettled) == null ? void 0 : _d.call(_c, action.data, null, variables, context);
        } else if ((action == null ? void 0 : action.type) === "error") {
          (_f = (_e = this.#mutateOptions).onError) == null ? void 0 : _f.call(_e, action.error, variables, context);
          (_h = (_g = this.#mutateOptions).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};
const React$2 = await importShared("react");
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = React$2.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  React$2.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = React$2.useSyncExternalStore(
    React$2.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = React$2.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
const React$1 = await importShared("react");
function TrashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$1.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const ForwardRef = /* @__PURE__ */ React$1.forwardRef(TrashIcon);
const { useEffect } = await importShared("react");
const useBusinessPurposes = (companyId, includeInactive = false) => {
  const { setBusinessPurposes, setLoadingBusinessPurposes, setBusinessPurposesError } = useExpenseStore();
  const query = useQuery({
    queryKey: ["business-purposes", companyId, includeInactive],
    queryFn: async () => {
      if (!companyId) throw new Error("Company ID is required");
      const params = includeInactive ? { includeInactive: "true" } : {};
      const response = await apiClient.get(
        `/companies/${companyId}/business-purposes`,
        { params }
      );
      return response.data.data;
    },
    enabled: !!companyId,
    staleTime: 3 * 60 * 1e3
    // 3 minutes
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
const useToggleBusinessPurposeStatus = () => {
  const queryClient = useQueryClient();
  const { updateBusinessPurpose } = useExpenseStore();
  return useMutation({
    mutationFn: async ({ id, isActive }) => {
      const response = await apiClient.put(
        `/business-purposes/${id}`,
        { isActive }
      );
      return response.data.data;
    },
    onMutate: async ({ id, isActive }) => {
      await queryClient.cancelQueries({ queryKey: ["business-purposes"] });
      queryClient.setQueriesData(
        { queryKey: ["business-purposes"] },
        (old) => {
          if (!old) return old;
          return old.map(
            (bp) => bp.id === id ? { ...bp, isActive, modified: /* @__PURE__ */ new Date() } : bp
          );
        }
      );
    },
    onSuccess: (updatedBusinessPurpose) => {
      updateBusinessPurpose(updatedBusinessPurpose.id, updatedBusinessPurpose);
      queryClient.invalidateQueries({ queryKey: ["business-purposes"] });
    }
  });
};
const React = await importShared("react");
const { useMemo, useState } = React;
const BusinessPurposeTable = () => {
  const { selectedCompany } = useCompanyStore();
  const { data: businessPurposes, isLoading, error } = useBusinessPurposes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
  const toggleStatusMutation = useToggleBusinessPurposeStatus();
  const [sortField, setSortField] = useState("businessPurpose");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const processedData = useMemo(() => {
    if (!businessPurposes) return [];
    let filtered = [...Array.isArray(businessPurposes) ? businessPurposes : []];
    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      if (aValue === null || aValue === void 0) return 1;
      if (bValue === null || bValue === void 0) return -1;
      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return filtered;
  }, [businessPurposes, sortField, sortOrder]);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return processedData.slice(startIndex, endIndex);
  }, [processedData, currentPage, pageSize]);
  const totalPages = Math.ceil(processedData.length / pageSize);
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };
  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await toggleStatusMutation.mutateAsync({ id, isActive: !currentStatus });
    } catch (error2) {
      console.error("Failed to toggle status:", error2);
    }
  };
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  if (!selectedCompany) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500", children: "Please select a company to view business purposes" });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: "Failed to load business purposes. Please try again." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(st, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ct, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Business Purposes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { style: { listStyleType: "none" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Company name:" }),
          " ",
          selectedCompany == null ? void 0 : selectedCompany.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Company id:" }),
          " ",
          selectedCompany == null ? void 0 : selectedCompany.id
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleSort("businessPurpose"),
              className: "flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700",
              children: [
                "Purpose",
                sortField === "businessPurpose" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "w-4 h-4" }))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleSort("isActive"),
              className: "flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700",
              children: [
                "Active",
                sortField === "isActive" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "w-4 h-4" }))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleSort("created"),
              className: "flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700",
              children: [
                "Created",
                sortField === "created" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "w-4 h-4" }))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleSort("modified"),
              className: "flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700",
              children: [
                "Modified",
                sortField === "modified" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "w-4 h-4" }))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-6 py-4 text-center text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center gap-2 pos", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) }) }) }) : paginatedData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-6 py-4 text-center text-gray-500", children: "No business purposes found" }) }) : paginatedData.map((purpose) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: purpose.businessPurpose }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xs truncate", title: purpose.description, children: purpose.description || "-" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleToggleStatus(purpose.id, purpose.isActive),
              className: "group flex items-center gap-1 cursor-pointer",
              disabled: toggleStatusMutation.isPending,
              children: purpose.isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$3, { className: "w-5 h-5 text-green-600 group-hover:text-green-700" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-600 group-hover:text-green-700", children: "Active" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$4, { className: "w-5 h-5 text-gray-400 group-hover:text-gray-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400 group-hover:text-gray-500", children: "Inactive" })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: formatDate(purpose.created) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: formatDate(purpose.modified) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$5, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "w-5 h-5" })
              }
            )
          ] }) })
        ] }, purpose.id)) })
      ] }) }),
      totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white px-4 py-3 border-t border-gray-200 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-700", children: [
            "Showing ",
            (currentPage - 1) * pageSize + 1,
            " to ",
            Math.min(currentPage * pageSize, processedData.length),
            " of ",
            processedData.length,
            " results"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: pageSize,
              onChange: (e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              },
              className: "px-2 py-1 border border-gray-300 rounded text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 15, children: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 30, children: "30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 50, children: "50" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrentPage((prev) => Math.max(1, prev - 1)),
              disabled: currentPage === 1,
              className: "px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
              children: "Previous"
            }
          ),
          Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum = i + 1;
            if (totalPages > 5) {
              if (currentPage > 3) {
                pageNum = currentPage - 2 + i;
              }
              if (currentPage > totalPages - 3) {
                pageNum = totalPages - 4 + i;
              }
            }
            if (pageNum < 1 || pageNum > totalPages) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setCurrentPage(pageNum),
                className: `px-3 py-1 text-sm border rounded ${currentPage === pageNum ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 hover:bg-gray-50"}`,
                children: pageNum
              },
              pageNum
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrentPage((prev) => Math.min(totalPages, prev + 1)),
              disabled: currentPage === totalPages,
              className: "px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
              children: "Next"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
const BusinessPurpose = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessPurposeTable, {}) });
};
export {
  BusinessPurpose as default
};

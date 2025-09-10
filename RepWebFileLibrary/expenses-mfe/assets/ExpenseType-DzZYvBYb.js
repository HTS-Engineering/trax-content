import { c as createLucideIcon, i as useQuery, k as apiClient, l as useCompanyStore, j as jsxRuntimeExports, s as st, a as ct, m as LoadingSpinner, I } from "./__federation_expose_Mount-BYmudq81.js";
import { importShared } from "./__federation_fn_import-CFnudcB9.js";
import { u as useExpenseStore, A as ArrowUp, a as ArrowDown, C as CircleCheckBig, b as CircleX, P as Pencil } from "./store-CWhTJceI.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
const EllipsisVertical = createLucideIcon("ellipsis-vertical", __iconNode);
const { useEffect } = await importShared("react");
const useExpenseTypes = (companyId, includeInactive = false) => {
  const { setExpenseTypes, setLoadingExpenseTypes, setExpenseTypesError } = useExpenseStore();
  const query = useQuery({
    queryKey: ["expense-types", companyId, includeInactive],
    queryFn: async () => {
      if (!companyId) throw new Error("Company ID is required");
      const params = includeInactive ? { includeInactive: "true" } : {};
      const response = await apiClient.get(
        `/companies/${companyId}/expense-types`,
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
const React = await importShared("react");
const { useMemo, useState } = React;
const ExpenseTypeTable = () => {
  const { selectedCompany } = useCompanyStore();
  const { data: expenseTypes, isLoading, error } = useExpenseTypes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
  const [sortField, setSortField] = useState("type");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const processedData = useMemo(() => {
    if (!expenseTypes) return [];
    const filtered = [...Array.isArray(expenseTypes) ? expenseTypes : []];
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
  }, [expenseTypes, sortField, sortOrder]);
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
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  const getFormTypeBadge = (formType) => {
    const styles = {
      STANDARD: "bg-exp-primary-blue-50 text-exp-primary-blue-600",
      ENTERTAINMENT: "bg-exp-green-100 text-exp-green-800",
      MILEAGE: "bg-exp-yellow-100 text-exp-yellow-800"
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-1 text-xs font-medium rounded-sm ${styles[formType]}`, children: formType });
  };
  if (!selectedCompany) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500", children: "Please select a company to view expense types" });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: "Failed to load expense types. Please try again." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(st, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ct, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Expense Types" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-gray-200 overflow-hidden w-full flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto w-full shrink min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleSort("type"),
              className: "flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700",
              children: [
                "Type",
                sortField === "type" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4" }))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleSort("formType"),
              className: "flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700",
              children: [
                "Form Type",
                sortField === "formType" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4" }))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleSort("isActive"),
              className: "flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700",
              children: [
                "Status",
                sortField === "isActive" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4" }))
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
                sortField === "modified" && (sortOrder === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4" }))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-6 py-4 text-center text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) }) }) : paginatedData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-6 py-4 text-center text-gray-500", children: "No expense types found" }) }) : paginatedData.map((expenseType) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: expenseType.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: expenseType.description || "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: getFormTypeBadge(expenseType.formType) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: expenseType.mileageRate ? `$${expenseType.mileageRate}/mile` : "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: expenseType.isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-green-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Active" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Inactive" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: formatDate(expenseType.modified) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              I,
              {
                variant: "ghost",
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              I,
              {
                variant: "ghost",
                title: "Actions",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-5 h-5" })
              }
            )
          ] }) })
        ] }, expenseType.id)) })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 10, children: "10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 25, children: "25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 50, children: "50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 100, children: "100" })
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
            const pageNum = i + 1;
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
const ExpensesType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTypeTable, {}) });
};
export {
  ExpensesType as default
};

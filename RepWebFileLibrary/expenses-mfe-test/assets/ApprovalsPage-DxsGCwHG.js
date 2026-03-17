import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { q as qs, I as Ia, b as $r, D as Da, c as Ea, E as En, U as Us } from "./configuration-DhK3YPGc.js";
import { i as useCompanyStore, o as useQuery, q as queryKeys, p as keepPreviousData, E as EXPENSE_ENDPOINTS, r as useSearchParams, g as useLocation, a as RoutePaths, f as useNavigate, s as useErrorToast, t as generatePath } from "./expense-api-BVWxyshH.js";
import { a as apiClient } from "./axiosInstance-Cvzcyh16.js";
import { f as formatAmountWithCurrency, a as formatDateRange } from "./formatters-CEEg1yl_.js";
import { f as formatExpenseDate } from "./date-format-D9m87-p-.js";
import { g as getExpenseTypeBadgeConfig } from "./expense-type-badge-CmIFG5WW.js";
import { I as Icon } from "./Icon-CWd-YT3m.js";
var ApprovalTab = /* @__PURE__ */ ((ApprovalTab2) => {
  ApprovalTab2["Submitted"] = "submitted";
  ApprovalTab2["Approved"] = "approved";
  ApprovalTab2["Rejected"] = "rejected";
  ApprovalTab2["Cancelled"] = "cancelled";
  return ApprovalTab2;
})(ApprovalTab || {});
var ApprovalSortableColumn = /* @__PURE__ */ ((ApprovalSortableColumn2) => {
  ApprovalSortableColumn2["ActionDate"] = "actionDate";
  ApprovalSortableColumn2["ExpenseDate"] = "expenseDate";
  ApprovalSortableColumn2["EmployeeFullName"] = "employeeFullName";
  return ApprovalSortableColumn2;
})(ApprovalSortableColumn || {});
var ApprovalApiSortField = /* @__PURE__ */ ((ApprovalApiSortField2) => {
  ApprovalApiSortField2["ActionDate"] = "actionDate";
  ApprovalApiSortField2["EmployeeName"] = "employeeName";
  ApprovalApiSortField2["ExpenseDate"] = "expenseDate";
  return ApprovalApiSortField2;
})(ApprovalApiSortField || {});
const EMPTY_VALUE = "-";
const buildExpenseDateDisplay = (item) => {
  if (item.periodStart && item.periodEnd) {
    return formatDateRange(item.periodStart, item.periodEnd);
  }
  return formatExpenseDate(item.date ?? void 0) || EMPTY_VALUE;
};
const normalizeStatus = (status) => {
  const normalized = status.toLowerCase();
  if (Object.values(ApprovalTab).includes(normalized)) {
    return normalized;
  }
  return ApprovalTab.Submitted;
};
const mapApprovalApiResponse = (item) => {
  var _a, _b, _c;
  return {
    id: item.id,
    businessId: item.businessId,
    employeeFullName: item.employeeFullName,
    expenseDate: buildExpenseDateDisplay(item),
    expenseType: item.expenseType,
    vendor: item.vendor || EMPTY_VALUE,
    totalAmount: formatAmountWithCurrency(item.totalAmount, (_a = item.totalAmountCurrency) == null ? void 0 : _a.isoCode),
    totalAmountCurrency: ((_b = item.totalAmountCurrency) == null ? void 0 : _b.isoCode) ?? EMPTY_VALUE,
    paymentMethod: ((_c = item.paymentMethod) == null ? void 0 : _c.name) ?? EMPTY_VALUE,
    status: normalizeStatus(item.status),
    actionDate: formatExpenseDate(item.actionDate) || EMPTY_VALUE
  };
};
const useApprovalsList = (queryParams, options = {}) => {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.approvalsList.list({ ...queryParams, company: selectedCompany == null ? void 0 : selectedCompany.shortName }),
    enabled: enabled && !!(selectedCompany == null ? void 0 : selectedCompany.shortName),
    placeholderData: keepPreviousData,
    queryFn: async () => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const params = new URLSearchParams();
      params.append("status", queryParams.status);
      if (queryParams.sortBy) {
        params.append("sortBy", queryParams.sortBy);
      }
      if (queryParams.sortOrder) {
        params.append("sortOrder", queryParams.sortOrder);
      }
      if (queryParams.pageNumber !== void 0) {
        params.append("pageNumber", String(queryParams.pageNumber));
      }
      if (queryParams.pageSize !== void 0) {
        params.append("pageSize", String(queryParams.pageSize));
      }
      const baseUrl = EXPENSE_ENDPOINTS.GET_APPROVALS(selectedCompany.shortName);
      const url = `${baseUrl}?${params.toString()}`;
      const response = await apiClient.get(url);
      return {
        items: response.data.results.map(mapApprovalApiResponse),
        totalPages: response.data.totalPages,
        totalObjects: response.data.totalObjects
      };
    },
    staleTime: 60 * 1e3
  });
};
const APPROVAL_TABS = [
  { value: ApprovalTab.Submitted, label: "Pending" },
  { value: ApprovalTab.Approved, label: "Approved" },
  { value: ApprovalTab.Rejected, label: "Rejected" },
  { value: ApprovalTab.Cancelled, label: "Cancelled" }
];
const DEFAULT_PAGE_SIZE = 20;
const getActionDateColumnHeader = (tab) => {
  switch (tab) {
    case ApprovalTab.Submitted:
      return "Submitted on";
    case ApprovalTab.Approved:
      return "Approved on";
    case ApprovalTab.Rejected:
      return "Rejected on";
    case ApprovalTab.Cancelled:
      return "Cancelled on";
  }
};
const { useMemo: useMemo$2 } = await importShared("react");
const TextCell = ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: value });
const useApprovalsColumns = ({
  currentTab
}) => {
  const staticColumns = useMemo$2(() => [
    {
      id: "businessId",
      accessorKey: "businessId",
      enableSorting: false,
      size: 80,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "ID" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-600", children: context.getValue() })
        }
      )
    },
    {
      id: "employeeFullName",
      accessorKey: "employeeFullName",
      enableSorting: false,
      minSize: 120,
      maxSize: 200,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Employee" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-exp-grey-700 truncate", title: context.getValue(), children: context.getValue() })
        }
      )
    },
    {
      id: "expenseDate",
      accessorKey: "expenseDate",
      enableSorting: false,
      size: 160,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Expense Date" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      )
    },
    {
      id: "vendor",
      accessorKey: "vendor",
      enableSorting: false,
      minSize: 100,
      maxSize: 200,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Vendor" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-exp-grey-700 truncate", title: context.getValue(), children: context.getValue() })
        }
      )
    },
    {
      id: "expenseType",
      accessorKey: "expenseType",
      enableSorting: false,
      minSize: 120,
      maxSize: 250,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Expense Type" }),
      cell: (context) => {
        const expenseType = context.getValue();
        if (!expenseType) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            qs,
            {
              context,
              viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: "-" })
            }
          );
        }
        const badgeConfig = getExpenseTypeBadgeConfig(expenseType);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          qs,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx($r, { variant: "outline", className: `${badgeConfig.bgColor} ${badgeConfig.textColor}`, children: badgeConfig.label }) })
          }
        );
      }
    },
    {
      id: "totalAmount",
      accessorKey: "totalAmount",
      enableSorting: false,
      size: 140,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Total Amount" }) }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: context.getValue() }) })
        }
      )
    },
    {
      id: "paymentMethod",
      accessorKey: "paymentMethod",
      enableSorting: false,
      size: 160,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Payment Method" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      )
    }
  ], []);
  const statusColumn = useMemo$2(() => ({
    accessorKey: "status",
    enableSorting: false,
    filterFn: "equals",
    size: 0,
    header: () => null,
    cell: () => null
  }), []);
  const actionDateColumn = useMemo$2(() => ({
    id: ApprovalSortableColumn.ActionDate,
    accessorKey: "actionDate",
    enableSorting: true,
    size: 150,
    header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: getActionDateColumnHeader(currentTab) }),
    cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
      {
        context,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
      }
    )
  }), [currentTab]);
  const columns = useMemo$2(
    () => [...staticColumns, statusColumn, actionDateColumn],
    [staticColumns, statusColumn, actionDateColumn]
  );
  return { columns };
};
const mapApprovalSortFieldToApi = (sortField) => {
  switch (sortField) {
    case ApprovalSortableColumn.ExpenseDate:
      return ApprovalApiSortField.ExpenseDate;
    case ApprovalSortableColumn.EmployeeFullName:
      return ApprovalApiSortField.EmployeeName;
    case ApprovalSortableColumn.ActionDate:
    default:
      return ApprovalApiSortField.ActionDate;
  }
};
const URL_PARAM_STATUS = "status";
const URL_PARAM_SORT_BY = "sortBy";
const URL_PARAM_SORT_ORDER = "sortOrder";
const URL_PARAM_PAGE = "page";
const DEFAULT_PAGE_INDEX = 0;
const MIN_PAGE_NUMBER = 1;
const DEFAULT_TAB = ApprovalTab.Submitted;
const isValidTab = (value) => value !== null && Object.values(ApprovalTab).includes(value);
const isValidSortField = (value) => value !== null && Object.values(ApprovalSortableColumn).includes(value);
const isValidSortOrder = (value) => value === "asc" || value === "desc";
const parsePageNumber = (value) => {
  if (value === null) return DEFAULT_PAGE_INDEX;
  const parsed = parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < MIN_PAGE_NUMBER) return DEFAULT_PAGE_INDEX;
  return parsed - 1;
};
const formatPageForUrl = (pageIndex) => {
  if (pageIndex === DEFAULT_PAGE_INDEX) return null;
  return String(pageIndex + 1);
};
const getDefaultSortOrder = (tab) => tab === ApprovalTab.Submitted ? "asc" : "desc";
const getDefaultSortField = () => ApprovalSortableColumn.ActionDate;
const createDefaultFilterState = () => ({
  tab: DEFAULT_TAB,
  sorting: [{ id: ApprovalSortableColumn.ActionDate, desc: false }],
  pageIndex: DEFAULT_PAGE_INDEX
});
const parseReturnUrl = (returnUrl) => {
  if (!returnUrl) return null;
  try {
    const url = new URL(returnUrl, window.location.origin);
    const params = url.searchParams;
    const status = params.get(URL_PARAM_STATUS);
    const sortBy = params.get(URL_PARAM_SORT_BY);
    const sortOrder = params.get(URL_PARAM_SORT_ORDER);
    const page = params.get(URL_PARAM_PAGE);
    const tab = isValidTab(status) ? status : DEFAULT_TAB;
    const validSortBy = isValidSortField(sortBy) ? sortBy : getDefaultSortField();
    const validSortOrder = isValidSortOrder(sortOrder) ? sortOrder : getDefaultSortOrder(tab);
    const pageIndex = parsePageNumber(page);
    return {
      tab,
      sorting: [{ id: validSortBy, desc: validSortOrder === "desc" }],
      pageIndex
    };
  } catch {
    return null;
  }
};
const { useCallback: useCallback$1, useEffect, useMemo: useMemo$1, useRef } = await importShared("react");
const useApprovalsUrlFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isInitializedRef = useRef(false);
  const isPaginationInitializedRef = useRef(false);
  const isOnListPage = location.pathname === RoutePaths.Approvals;
  const locationState = location.state;
  const urlStatus = searchParams.get(URL_PARAM_STATUS);
  const urlSortBy = searchParams.get(URL_PARAM_SORT_BY);
  const urlSortOrder = searchParams.get(URL_PARAM_SORT_ORDER);
  const urlPage = searchParams.get(URL_PARAM_PAGE);
  const restoredState = useMemo$1(
    () => parseReturnUrl(locationState == null ? void 0 : locationState.returnUrl),
    [locationState == null ? void 0 : locationState.returnUrl]
  );
  const preservedStateRef = useRef(restoredState ?? createDefaultFilterState());
  const currentTab = useMemo$1(() => {
    if (!isOnListPage) return preservedStateRef.current.tab;
    const tab = isValidTab(urlStatus) ? urlStatus : DEFAULT_TAB;
    preservedStateRef.current.tab = tab;
    return tab;
  }, [urlStatus, isOnListPage]);
  useEffect(() => {
    if (!isOnListPage) return;
    const needsSortBy = !urlSortBy || !isValidSortField(urlSortBy);
    const needsSortOrder = !urlSortOrder || !isValidSortOrder(urlSortOrder);
    if (needsSortBy || needsSortOrder) {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set(URL_PARAM_SORT_BY, getDefaultSortField());
        next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder(currentTab));
        return next;
      }, { replace: true });
    }
  }, [isOnListPage, urlSortBy, urlSortOrder, currentTab, setSearchParams]);
  const sorting = useMemo$1(() => {
    if (!isOnListPage) return preservedStateRef.current.sorting;
    const sortBy = isValidSortField(urlSortBy) ? urlSortBy : getDefaultSortField();
    const sortOrder = isValidSortOrder(urlSortOrder) ? urlSortOrder : getDefaultSortOrder(currentTab);
    const result = [{ id: sortBy, desc: sortOrder === "desc" }];
    preservedStateRef.current.sorting = result;
    return result;
  }, [urlSortBy, urlSortOrder, currentTab, isOnListPage]);
  const columnFilters = useMemo$1(() => {
    return [{ id: "status", value: currentTab }];
  }, [currentTab]);
  const pagination = useMemo$1(() => {
    if (!isOnListPage) {
      return {
        pageIndex: preservedStateRef.current.pageIndex,
        pageSize: DEFAULT_PAGE_SIZE
      };
    }
    const pageIndex = parsePageNumber(urlPage);
    preservedStateRef.current.pageIndex = pageIndex;
    return { pageIndex, pageSize: DEFAULT_PAGE_SIZE };
  }, [urlPage, isOnListPage]);
  const prevTabRef = useRef(currentTab);
  useEffect(() => {
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      prevTabRef.current = currentTab;
      return;
    }
    const prevTab = prevTabRef.current;
    prevTabRef.current = currentTab;
    if (prevTab === currentTab) return;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete(URL_PARAM_PAGE);
      next.set(URL_PARAM_SORT_BY, getDefaultSortField());
      next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder(currentTab));
      return next;
    }, { replace: true });
  }, [currentTab, setSearchParams]);
  const handleColumnFiltersChange = useCallback$1(
    (updater) => {
      const newFilters = typeof updater === "function" ? updater(columnFilters) : updater;
      const statusFilter = newFilters.find((f) => f.id === "status");
      const newTab = (statusFilter == null ? void 0 : statusFilter.value) ?? DEFAULT_TAB;
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (newTab === DEFAULT_TAB) {
          next.delete(URL_PARAM_STATUS);
        } else {
          next.set(URL_PARAM_STATUS, newTab);
        }
        next.delete(URL_PARAM_PAGE);
        next.set(URL_PARAM_SORT_BY, getDefaultSortField());
        next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder(newTab));
        return next;
      }, { replace: true });
    },
    [columnFilters, setSearchParams]
  );
  const handleSortingChange = useCallback$1((updater) => {
    const newSorting = typeof updater === "function" ? updater(sorting) : updater;
    const sortConfig = newSorting[0];
    const sortBy = (sortConfig == null ? void 0 : sortConfig.id) ?? getDefaultSortField();
    const sortOrder = (sortConfig == null ? void 0 : sortConfig.desc) ? "desc" : "asc";
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(URL_PARAM_SORT_BY, sortBy);
      next.set(URL_PARAM_SORT_ORDER, sortOrder);
      next.delete(URL_PARAM_PAGE);
      return next;
    }, { replace: true });
  }, [sorting, setSearchParams]);
  const handlePaginationChange = useCallback$1((updater) => {
    const newPagination = typeof updater === "function" ? updater(pagination) : updater;
    if (!isPaginationInitializedRef.current) {
      isPaginationInitializedRef.current = true;
      if (newPagination.pageIndex !== pagination.pageIndex) return;
    }
    if (newPagination.pageIndex === pagination.pageIndex) return;
    const pageForUrl = formatPageForUrl(newPagination.pageIndex);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (pageForUrl === null) {
        next.delete(URL_PARAM_PAGE);
      } else {
        next.set(URL_PARAM_PAGE, pageForUrl);
      }
      return next;
    }, { replace: true });
  }, [pagination, setSearchParams]);
  return {
    currentTab,
    columnFilters,
    sorting,
    pagination,
    isOnListPage,
    handleColumnFiltersChange,
    handleSortingChange,
    handlePaginationChange
  };
};
const { useCallback, useMemo } = await importShared("react");
const ApprovalsList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    currentTab,
    columnFilters,
    sorting,
    pagination,
    isOnListPage,
    handleColumnFiltersChange,
    handleSortingChange,
    handlePaginationChange
  } = useApprovalsUrlFilters();
  const queryParams = useMemo(() => {
    var _a, _b;
    return {
      status: currentTab,
      sortBy: mapApprovalSortFieldToApi(((_a = sorting[0]) == null ? void 0 : _a.id) ?? ApprovalSortableColumn.ActionDate),
      sortOrder: ((_b = sorting[0]) == null ? void 0 : _b.desc) ? "desc" : "asc",
      pageNumber: pagination.pageIndex + 1,
      pageSize: DEFAULT_PAGE_SIZE
    };
  }, [currentTab, sorting, pagination.pageIndex]);
  const { data, isFetching, isPending, isError } = useApprovalsList(queryParams, { enabled: isOnListPage });
  const approvals = (data == null ? void 0 : data.items) ?? [];
  const pageCount = (data == null ? void 0 : data.totalPages) ?? 0;
  const totalItems = (data == null ? void 0 : data.totalObjects) ?? 0;
  const isLoading = isPending || isFetching;
  useErrorToast(isError, "Failed to load approvals. Please try again later.");
  const { columns } = useApprovalsColumns({ currentTab });
  const handleRowClick = useCallback((row) => {
    const { id } = row.original;
    const returnUrl = location.pathname + location.search;
    navigate(generatePath(RoutePaths.ExpensesId, { id: String(id) }), { state: { returnUrl } });
  }, [navigate, location.pathname, location.search]);
  const renderToolbar = useCallback((table) => /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { table, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ea,
    {
      className: "gap-2",
      column: "status",
      showAllOption: false,
      options: APPROVAL_TABS.map((tab) => ({
        label: tab.label,
        value: tab.value
      }))
    }
  ) }), []);
  const customLoadingState = useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-8 text-exp-primary-blue-600" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading" })
  ] }), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-6 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 rounded-lg flex items-center justify-center size-11.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "clipboard-warning", className: "size-6 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Approvals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Review and approve employee expenses" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Us,
      {
        columns,
        data: approvals,
        getRowId: (row) => `approval-${row.status}-${row.id}`,
        enablePagination: true,
        enableSorting: true,
        enableFiltering: true,
        manualPagination: true,
        manualSorting: true,
        pageCount,
        rowCount: totalItems,
        pagination,
        onPaginationChange: handlePaginationChange,
        sorting,
        onSortingChange: handleSortingChange,
        columnFilters,
        onColumnFiltersChange: handleColumnFiltersChange,
        isLoading,
        loadingState: customLoadingState,
        onRowClick: handleRowClick,
        styles: {
          pagination: {
            selectContentWidthMode: "trigger"
          }
        },
        toolbar: renderToolbar,
        emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full justify-center items-center flex p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm italic text-exp-grey-600", children: "No results to display" }) })
      }
    ) })
  ] });
};
const ApprovalsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ApprovalsList, {});
};
export {
  ApprovalsPage as default
};

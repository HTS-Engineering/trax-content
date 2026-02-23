import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { e as $r, f as qs, I as Ia, X as Xn, j as ja, U as Us, D as Da, h as Ea, E as En } from "./configuration-DCdBxpzA.js";
import { a as useCompanyStore, c as useQuery, q as queryKeys, k as keepPreviousData, E as EXPENSE_ENDPOINTS } from "./company-api-B4mQ8Kzo.js";
import { a as apiClient } from "./axiosInstance-BP1HyBRf.js";
import { E as EmptyState } from "./EmptyState-BU_M59ai.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import "./currency-BubACaL0.js";
import { k as useSearchParams, e as useLocation, u as useNavigate, j as generatePath, a as RoutePaths } from "./routes-C5J7GVU-.js";
import { P as Plus } from "./plus-CpghNPeZ.js";
const normalizeStatus = (status) => {
  return status.toLowerCase();
};
const mapApiResponseToListItem = (item) => ({
  id: item.id,
  businessId: item.businessId,
  expenseDate: item.expenseDate ?? "",
  expenseType: item.expenseType,
  vendor: item.vendor ?? "",
  totalAmount: item.totalAmount ?? "",
  totalAmountCurrencyCode: item.totalAmountCurrencyCode ?? "",
  paymentMethod: item.paymentMethod,
  status: normalizeStatus(item.status),
  createdDate: item.createdDate
});
const useExpensesList = (queryParams, options = {}) => {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.expensesList.list({ ...queryParams, company: selectedCompany == null ? void 0 : selectedCompany.shortName }),
    enabled: enabled && !!(selectedCompany == null ? void 0 : selectedCompany.shortName),
    placeholderData: keepPreviousData,
    queryFn: async () => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const params = new URLSearchParams();
      if ((queryParams == null ? void 0 : queryParams.status) && queryParams.status !== "all") {
        params.append("status", queryParams.status);
      }
      if (queryParams == null ? void 0 : queryParams.search) {
        params.append("search", queryParams.search);
      }
      if (queryParams == null ? void 0 : queryParams.sortBy) {
        params.append("sortBy", queryParams.sortBy);
      }
      if (queryParams == null ? void 0 : queryParams.sortOrder) {
        params.append("sortOrder", queryParams.sortOrder);
      }
      if ((queryParams == null ? void 0 : queryParams.pageNumber) !== void 0) {
        params.append("pageNumber", String(queryParams.pageNumber));
      }
      if ((queryParams == null ? void 0 : queryParams.pageSize) !== void 0) {
        params.append("pageSize", String(queryParams.pageSize));
      }
      const baseUrl = EXPENSE_ENDPOINTS.GET_EXPENSES(selectedCompany.shortName);
      const url = `${baseUrl}${params.toString() ? `?${params.toString()}` : ""}`;
      const response = await apiClient.get(url);
      return {
        items: response.data.results.map(mapApiResponseToListItem),
        totalPages: response.data.totalPages,
        totalObjects: response.data.totalObjects
      };
    },
    staleTime: 60 * 1e3
  });
};
const EXPENSE_STATUS_CONFIG = [
  {
    value: "all",
    label: "All",
    emptyState: {
      title: "No expenses yet",
      description: "You haven't added any expenses. Click 'New Expense' above to get started."
    }
  },
  {
    value: "draft",
    label: "Draft",
    emptyState: {
      showCheckBadge: true,
      title: "You're all caught up",
      description: "No expense draft pending submission"
    }
  },
  {
    value: "submitted",
    label: "Submitted",
    emptyState: {
      showCheckBadge: true,
      title: "You're all cleared",
      description: "No expenses awaiting approval"
    }
  },
  {
    value: "approved",
    label: "Approved",
    emptyState: {
      title: "No approved expenses",
      description: "Approved expenses will appear here"
    }
  },
  {
    value: "rejected",
    label: "Rejected",
    emptyState: {
      title: "No rejected expenses",
      description: "Any rejected expenses will appear here"
    }
  },
  {
    value: "cancelled",
    label: "Cancelled",
    emptyState: {
      title: "No cancelled expenses",
      description: "Any expenses cancelled by AP during posting will appear here"
    }
  }
];
const getStatusColumnHeader = (statusFilter) => {
  switch (statusFilter) {
    case "draft":
      return "Created on";
    case "submitted":
      return "Submitted on";
    case "approved":
      return "Approved on";
    case "rejected":
      return "Rejected on";
    case "cancelled":
      return "Cancelled on";
    default:
      return "Status";
  }
};
const getEmptyStateForStatus = (status) => {
  const config = EXPENSE_STATUS_CONFIG.find((c) => c.value === status);
  return (config == null ? void 0 : config.emptyState) ?? EXPENSE_STATUS_CONFIG[0].emptyState;
};
const mapSortFieldToApi = (sortField, _statusFilter) => {
  if (sortField === "expenseDate") {
    return "expenseDate";
  }
  return "createdDate";
};
const URL_PARAM_STATUS = "status";
const URL_PARAM_SEARCH = "search";
const URL_PARAM_SORT_BY = "sortBy";
const URL_PARAM_SORT_ORDER = "sortOrder";
const URL_PARAM_PAGE = "page";
const DEFAULT_PAGE_INDEX = 0;
const MIN_PAGE_NUMBER = 1;
const VALID_STATUSES = ["all", "draft", "submitted", "approved", "rejected", "cancelled"];
const ALWAYS_AVAILABLE_SORT_FIELDS = ["expenseDate", "createdAt", "updatedAt"];
const STATUS_SPECIFIC_SORT_FIELDS = ["statusDate"];
const DEFAULT_SORT_FIELD_ALL = "expenseDate";
const DEFAULT_SORT_ORDER = "desc";
const isValidStatus = (value) => value !== null && VALID_STATUSES.some((status) => status === value);
const isAlwaysAvailableSortField = (value) => ALWAYS_AVAILABLE_SORT_FIELDS.some((field) => field === value);
const isStatusSpecificSortField = (value) => STATUS_SPECIFIC_SORT_FIELDS.some((field) => field === value);
const isValidSortField = (value) => value !== null && (isAlwaysAvailableSortField(value) || isStatusSpecificSortField(value));
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
const getDefaultSortField = (status) => status === "all" ? DEFAULT_SORT_FIELD_ALL : "statusDate";
const getDefaultSortOrder = () => DEFAULT_SORT_ORDER;
const hasStatusSpecificSortOnAll = (sortBy, status) => sortBy != null && isStatusSpecificSortField(sortBy) && status === "all";
const createDefaultFilterState = () => ({
  status: "all",
  search: "",
  sorting: [{ id: DEFAULT_SORT_FIELD_ALL, desc: true }],
  pageIndex: DEFAULT_PAGE_INDEX
});
const parseReturnUrl = (returnUrl) => {
  if (!returnUrl) return null;
  try {
    const url = new URL(returnUrl, window.location.origin);
    const params = url.searchParams;
    const status = params.get(URL_PARAM_STATUS);
    const search = params.get(URL_PARAM_SEARCH) ?? "";
    const sortBy = params.get(URL_PARAM_SORT_BY);
    const sortOrder = params.get(URL_PARAM_SORT_ORDER);
    const page = params.get(URL_PARAM_PAGE);
    const validStatus = isValidStatus(status) ? status : "all";
    const validSortBy = isValidSortField(sortBy) ? sortBy : getDefaultSortField(validStatus);
    const validSortOrder = isValidSortOrder(sortOrder) ? sortOrder : DEFAULT_SORT_ORDER;
    const pageIndex = parsePageNumber(page);
    return {
      status: validStatus,
      search,
      sorting: [{ id: validSortBy, desc: validSortOrder === "desc" }],
      pageIndex
    };
  } catch {
    return null;
  }
};
const STATUS_BADGE_CONFIG = {
  draft: {
    bgColor: "bg-exp-yellow-200",
    textColor: "text-exp-yellow-800",
    label: "Draft"
  },
  submitted: {
    bgColor: "bg-exp-primary-blue-100",
    textColor: "text-exp-primary-blue-600",
    label: "Submitted"
  },
  approved: {
    bgColor: "bg-exp-green-100",
    textColor: "text-exp-green-800",
    label: "Approved"
  },
  rejected: {
    bgColor: "bg-exp-red-100",
    textColor: "text-exp-red-600",
    label: "Rejected"
  },
  cancelled: {
    bgColor: "bg-exp-grey-100",
    textColor: "text-exp-grey-600",
    label: "Cancelled"
  }
};
const ExpenseStatusBadge = ({ status, className = "" }) => {
  const config = STATUS_BADGE_CONFIG[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $r,
    {
      variant: "outline",
      className: `rounded-20! ${config.bgColor} ${config.textColor} ${className}`,
      children: config.label
    }
  );
};
const getExpenseTypeBadgeColor = (expenseType) => {
  const normalizedType = expenseType.toLowerCase();
  if (normalizedType.includes("mileage")) {
    return {
      bgColor: "bg-exp-yellow-100",
      textColor: "text-exp-yellow-800"
    };
  }
  if (normalizedType.includes("entertainment")) {
    return {
      bgColor: "bg-exp-green-100",
      textColor: "text-exp-green-800"
    };
  }
  return {
    bgColor: "bg-exp-primary-blue-50",
    textColor: "text-exp-primary-blue-600"
  };
};
const getExpenseTypeBadgeConfig = (expenseType) => {
  return {
    ...getExpenseTypeBadgeColor(expenseType),
    label: expenseType
  };
};
const DEFAULT_PAGE_SIZE = 20;
const STATUS_DATE_COLUMN_ID = "statusDate";
const { useMemo: useMemo$2 } = await importShared("react");
const STATUS_DATE_COLUMN_SIZE = 140;
const STATUS_COLUMN_SIZE = 100;
const StatusDateCell = ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: value });
const formatTotalAmount = (item) => {
  if (!item.totalAmount) return "";
  return `${item.totalAmountCurrencyCode} ${item.totalAmount}`.trim();
};
const useExpensesColumns = ({
  currentStatusFilter
}) => {
  const staticColumns = useMemo$2(() => [
    {
      id: "businessId",
      accessorKey: "businessId",
      enableSorting: false,
      filterFn: "equals",
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
      id: "expenseDate",
      accessorKey: "expenseDate",
      enableSorting: true,
      size: 150,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Expense Date" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: context.getValue() })
        }
      )
    },
    {
      id: "vendor",
      accessorKey: "vendor",
      enableSorting: false,
      minSize: 100,
      maxSize: 250,
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
      maxSize: 300,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Expense Type" }),
      cell: (context) => {
        const expenseType = context.getValue();
        if (!expenseType) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            qs,
            {
              context,
              viewContent: ""
            }
          );
        }
        const badgeConfig = getExpenseTypeBadgeConfig(expenseType);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          qs,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx($r, { variant: "outline", className: `${badgeConfig.bgColor} ${badgeConfig.textColor}`, children: badgeConfig.label })
          }
        );
      }
    },
    {
      id: "totalAmount",
      accessorFn: formatTotalAmount,
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
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: context.getValue() })
        }
      )
    }
  ], []);
  const statusColumn = useMemo$2(() => ({
    accessorKey: "status",
    enableSorting: false,
    filterFn: "equals",
    size: currentStatusFilter === "all" ? STATUS_COLUMN_SIZE : 0,
    header: ({ column }) => {
      if (currentStatusFilter !== "all") return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: "Status" });
    },
    cell: (context) => {
      if (currentStatusFilter !== "all") return null;
      const status = context.getValue();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status })
        }
      );
    }
  }), [currentStatusFilter]);
  const statusDateColumn = useMemo$2(() => {
    if (currentStatusFilter === "all") return null;
    return {
      id: STATUS_DATE_COLUMN_ID,
      accessorKey: "createdDate",
      enableSorting: true,
      size: STATUS_DATE_COLUMN_SIZE,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: getStatusColumnHeader(currentStatusFilter) }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusDateCell, { value: context.getValue() })
        }
      )
    };
  }, [currentStatusFilter]);
  const columns = useMemo$2(() => {
    const [idColumn, ...restColumns] = staticColumns;
    const baseColumns = [idColumn, statusColumn, ...restColumns];
    if (statusDateColumn) {
      return [...baseColumns, statusDateColumn];
    }
    return baseColumns;
  }, [staticColumns, statusColumn, statusDateColumn]);
  return { columns };
};
const { useCallback: useCallback$2, useEffect, useMemo: useMemo$1, useRef, useState } = await importShared("react");
const EXPENSES_LIST_PATH = "/expenses";
const useExpensesUrlFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchResetKey, setSearchResetKey] = useState(0);
  const searchTriggeredNavigationRef = useRef(false);
  const isInitializedRef = useRef(false);
  const isPaginationInitializedRef = useRef(false);
  const isOnListPage = location.pathname === EXPENSES_LIST_PATH;
  const locationState = location.state;
  const urlStatus = searchParams.get(URL_PARAM_STATUS);
  const urlSearch = searchParams.get(URL_PARAM_SEARCH) ?? "";
  const urlSortBy = searchParams.get(URL_PARAM_SORT_BY);
  const urlSortOrder = searchParams.get(URL_PARAM_SORT_ORDER);
  const urlPage = searchParams.get(URL_PARAM_PAGE);
  const restoredState = useMemo$1(
    () => parseReturnUrl(locationState == null ? void 0 : locationState.returnUrl),
    [locationState == null ? void 0 : locationState.returnUrl]
  );
  const preservedStateRef = useRef(restoredState ?? createDefaultFilterState());
  const currentStatusFilter = useMemo$1(() => {
    if (!isOnListPage) {
      return preservedStateRef.current.status;
    }
    const status = isValidStatus(urlStatus) ? urlStatus : "all";
    preservedStateRef.current.status = status;
    return status;
  }, [urlStatus, isOnListPage]);
  useEffect(() => {
    if (!isOnListPage) return;
    const needsSortBy = !urlSortBy || !isValidSortField(urlSortBy);
    const needsSortOrder = !urlSortOrder || !isValidSortOrder(urlSortOrder);
    const hasStatusSpecificOnAll = hasStatusSpecificSortOnAll(urlSortBy, currentStatusFilter);
    if (needsSortBy || needsSortOrder || hasStatusSpecificOnAll) {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set(URL_PARAM_SORT_BY, getDefaultSortField(currentStatusFilter));
        next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder());
        return next;
      }, { replace: true });
    }
  }, [isOnListPage, urlSortBy, urlSortOrder, currentStatusFilter, setSearchParams]);
  const sorting = useMemo$1(() => {
    if (!isOnListPage) {
      return preservedStateRef.current.sorting;
    }
    const defaultField = getDefaultSortField(currentStatusFilter);
    const sortBy = isValidSortField(urlSortBy) ? urlSortBy : defaultField;
    const sortOrder = isValidSortOrder(urlSortOrder) ? urlSortOrder : getDefaultSortOrder();
    if (hasStatusSpecificSortOnAll(sortBy, currentStatusFilter)) {
      const result2 = [{ id: getDefaultSortField("all"), desc: getDefaultSortOrder() === "desc" }];
      preservedStateRef.current.sorting = result2;
      return result2;
    }
    const result = [{ id: sortBy, desc: sortOrder === "desc" }];
    preservedStateRef.current.sorting = result;
    return result;
  }, [urlSortBy, urlSortOrder, currentStatusFilter, isOnListPage]);
  const columnFilters = useMemo$1(() => {
    return currentStatusFilter === "all" ? [] : [{ id: "status", value: currentStatusFilter }];
  }, [currentStatusFilter]);
  const searchValue = useMemo$1(() => {
    if (!isOnListPage) {
      return preservedStateRef.current.search;
    }
    preservedStateRef.current.search = urlSearch;
    return urlSearch;
  }, [urlSearch, isOnListPage]);
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
  const prevStatusRef = useRef(currentStatusFilter);
  useEffect(() => {
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      prevStatusRef.current = currentStatusFilter;
      return;
    }
    const prevStatus = prevStatusRef.current;
    prevStatusRef.current = currentStatusFilter;
    if (prevStatus === currentStatusFilter) return;
    if (searchTriggeredNavigationRef.current && currentStatusFilter === "all") {
      searchTriggeredNavigationRef.current = false;
      return;
    }
    searchTriggeredNavigationRef.current = false;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete(URL_PARAM_SEARCH);
      next.delete(URL_PARAM_PAGE);
      const currentSortBy = next.get(URL_PARAM_SORT_BY);
      if (hasStatusSpecificSortOnAll(currentSortBy, currentStatusFilter)) {
        next.set(URL_PARAM_SORT_BY, getDefaultSortField("all"));
        next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder());
      }
      return next;
    }, { replace: true });
    setSearchResetKey((k) => k + 1);
  }, [currentStatusFilter, setSearchParams]);
  const handleSortingChange = useCallback$2((updater) => {
    const newSorting = typeof updater === "function" ? updater(sorting) : updater;
    const sortConfig = newSorting[0];
    const sortBy = (sortConfig == null ? void 0 : sortConfig.id) ?? getDefaultSortField("all");
    const sortOrder = (sortConfig == null ? void 0 : sortConfig.desc) ? "desc" : "asc";
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(URL_PARAM_SORT_BY, sortBy);
      next.set(URL_PARAM_SORT_ORDER, sortOrder);
      next.delete(URL_PARAM_PAGE);
      return next;
    }, { replace: true });
  }, [sorting, setSearchParams]);
  const handleColumnFiltersChange = useCallback$2(
    (updater) => {
      var _a;
      const newFilters = typeof updater === "function" ? updater(columnFilters) : updater;
      const newStatusFilter = newFilters.find((f) => f.id === "status");
      const newStatus = (newStatusFilter == null ? void 0 : newStatusFilter.value) ?? "all";
      const isNavigatingToAll = currentStatusFilter !== "all" && newStatus === "all";
      const isNavigatingToStatus = currentStatusFilter === "all" && newStatus !== "all";
      const currentSortBy = (_a = sorting[0]) == null ? void 0 : _a.id;
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (newStatus === "all") {
          next.delete(URL_PARAM_STATUS);
        } else {
          next.set(URL_PARAM_STATUS, newStatus);
        }
        if (isNavigatingToStatus) {
          next.set(URL_PARAM_SORT_BY, STATUS_DATE_COLUMN_ID);
          next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder());
        }
        if (isNavigatingToAll && hasStatusSpecificSortOnAll(currentSortBy, newStatus)) {
          next.set(URL_PARAM_SORT_BY, getDefaultSortField("all"));
          next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder());
        }
        next.delete(URL_PARAM_PAGE);
        return next;
      }, { replace: true });
    },
    [columnFilters, currentStatusFilter, sorting, setSearchParams]
  );
  const handleSearchChange = useCallback$2((value) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value && currentStatusFilter !== "all") {
        searchTriggeredNavigationRef.current = true;
        next.delete(URL_PARAM_STATUS);
      }
      if (value) {
        next.set(URL_PARAM_SEARCH, value);
      } else {
        next.delete(URL_PARAM_SEARCH);
      }
      next.delete(URL_PARAM_PAGE);
      return next;
    }, { replace: true });
  }, [currentStatusFilter, setSearchParams]);
  const handleSearch = useCallback$2((searchId) => {
    const trimmedId = searchId.trim();
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (trimmedId && currentStatusFilter !== "all") {
        searchTriggeredNavigationRef.current = true;
        next.delete(URL_PARAM_STATUS);
      }
      if (trimmedId) {
        next.set(URL_PARAM_SEARCH, trimmedId);
      } else {
        next.delete(URL_PARAM_SEARCH);
      }
      next.delete(URL_PARAM_PAGE);
      return next;
    }, { replace: true });
  }, [currentStatusFilter, setSearchParams]);
  const handlePaginationChange = useCallback$2((updater) => {
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
    columnFilters,
    searchValue,
    searchResetKey,
    currentStatusFilter,
    sorting,
    pagination,
    isOnListPage,
    handleSortingChange,
    handleColumnFiltersChange,
    handlePaginationChange,
    handleSearchChange,
    handleSearch
  };
};
const ReceiptWithCheckBadge = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "size-9 text-exp-neutral-100" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Icon,
    {
      name: "check-circle-fill",
      className: "absolute -bottom-2 -right-3 size-3 text-exp-green-500"
    }
  )
] });
const ExpenseEmptyState = ({ statusFilter }) => {
  const { showCheckBadge, title, description } = getEmptyStateForStatus(statusFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconComponent: showCheckBadge ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptWithCheckBadge, {}) : void 0,
      title,
      description
    }
  );
};
const { useCallback: useCallback$1 } = await importShared("react");
const ExpenseSearch = ({
  value,
  onSearch,
  onChange,
  placeholder = "Search expense by ID..."
}) => {
  const handleChange = useCallback$1((e) => {
    onChange(e.target.value);
  }, [onChange]);
  const handleKeyDown = useCallback$1((e) => {
    if (e.key === "Enter") {
      onSearch(e.currentTarget.value);
    }
  }, [onSearch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Xn,
    {
      value,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      placeholder,
      debounceTime: 300,
      className: "w-64"
    }
  );
};
const { useCallback, useMemo } = await importShared("react");
const ExpensesList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    columnFilters,
    searchValue,
    searchResetKey,
    currentStatusFilter,
    sorting,
    pagination,
    isOnListPage,
    handleSortingChange,
    handleColumnFiltersChange,
    handlePaginationChange,
    handleSearchChange,
    handleSearch
  } = useExpensesUrlFilters();
  const queryParams = useMemo(() => {
    var _a, _b;
    return {
      status: currentStatusFilter,
      search: searchValue || void 0,
      sortBy: mapSortFieldToApi(((_a = sorting[0]) == null ? void 0 : _a.id) ?? "expenseDate"),
      sortOrder: ((_b = sorting[0]) == null ? void 0 : _b.desc) ? "desc" : "asc",
      pageNumber: pagination.pageIndex + 1,
      // API uses 1-based, TanStack uses 0-based
      pageSize: DEFAULT_PAGE_SIZE
    };
  }, [currentStatusFilter, searchValue, sorting, pagination.pageIndex]);
  const { data, isFetching, isPending } = useExpensesList(queryParams, { enabled: isOnListPage });
  const expenses = (data == null ? void 0 : data.items) ?? [];
  const pageCount = (data == null ? void 0 : data.totalPages) ?? 0;
  const totalItems = (data == null ? void 0 : data.totalObjects) ?? 0;
  const isLoading = isPending || isFetching;
  const { columns } = useExpensesColumns({ currentStatusFilter });
  const handleRowClick = useCallback((row) => {
    const { id } = row.original;
    const returnUrl = location.pathname + location.search;
    navigate(generatePath(RoutePaths.ExpensesId, { id: String(id) }), { state: { returnUrl } });
  }, [navigate, location.pathname, location.search]);
  const handleNewExpense = useCallback((e) => {
    e == null ? void 0 : e.preventDefault();
    navigate(RoutePaths.ExpensesNew);
  }, [navigate]);
  const handleNewMileageTrip = useCallback(() => {
    const params = new URLSearchParams({ type: "mileage-trip" });
    navigate(`${RoutePaths.ExpensesNew}?${params}`);
  }, [navigate]);
  const handleNewMileagePeriod = useCallback(() => {
    const params = new URLSearchParams({ type: "mileage-period" });
    navigate(`${RoutePaths.ExpensesNew}?${params}`);
  }, [navigate]);
  if (!isOnListPage && expenses.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-exp-primary-blue-25" });
  }
  const renderToolbar = (table) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { table, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ea,
      {
        className: "gap-2",
        column: "status",
        options: EXPENSE_STATUS_CONFIG.filter((c) => c.value !== "all").map((config) => ({
          label: config.label,
          value: config.value
        }))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseSearch,
      {
        value: searchValue,
        onChange: handleSearchChange,
        onSearch: handleSearch,
        placeholder: "Search expense by ID..."
      },
      searchResetKey
    ) })
  ] });
  const customLoadingState = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-8 text-exp-primary-blue-600" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50  rounded-lg flex items-center justify-center size-11.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "size-4.5 text-exp-primary-blue-800" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "My Expenses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Submit and track my business expenses" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ja,
        {
          variant: "primary",
          size: "sm",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}),
          onClick: handleNewExpense,
          dropdownItems: [
            {
              label: "Mileage (trip)",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "route" }),
              onClick: handleNewMileageTrip
            },
            {
              label: "Mileage (period)",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "directions-car" }),
              onClick: handleNewMileagePeriod
            }
          ],
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-full h-full px-4 py-2 text-sm", children: "New Expense" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Us,
      {
        columns,
        data: expenses,
        getRowId: (row) => `expense-${row.status}-${row.id}`,
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
        emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseEmptyState, { statusFilter: currentStatusFilter })
      }
    ) })
  ] });
};
export {
  ExpensesList as E,
  ExpenseStatusBadge as a
};

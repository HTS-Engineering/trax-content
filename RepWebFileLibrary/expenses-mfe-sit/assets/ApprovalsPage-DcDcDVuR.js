import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-CJZmLbkm.js";
import { W as Ws, E as Ea, a as Tr, b as Us, J as Ja, $ as $a, U as Ue, B as Bn, d as qt, e as Ut, Y as Yt, i as ir, f as Js, Z as Za, Q as Qa, g as es, M as Ma, P as Pa, h as Zs } from "./index.es-CApEQq_T.js";
import { h as formatExpenseDate, d as useCompanyStore, i as useQuery, q as queryKeys, k as keepPreviousData, j as useSearchParams, l as useLocation, a as RoutePaths, m as useQueryClient, n as useMutation, o as useScrollIntoViewRef, p as useErrorToast, u as useNavigate, r as useParams, g as generatePath } from "./date-format-Dh5rGvDF.js";
import { a as apiClient } from "./axiosInstance-D1uLEIcR.js";
import { E as EXPENSE_ENDPOINTS, i as isExpenseItemSubmitted, b as isRegularExpense, g as getExpenseItemAmount, c as isMileageExpense, d as useExpenseItem } from "./expense-api-CkfEvbcZ.js";
import { f as formatAmountWithCurrency, a as formatDate, b as formatDateRange } from "./formatters-CW5N4Qkc.js";
import { g as getExpenseTypeBadgeConfig } from "./expense-type-badge-CmIFG5WW.js";
import { I as Icon } from "./Icon-08JP3B1K.js";
import { m as mapCostAllocation, g as getExpenseBaseAmount, u as useCostAllocationHandlers, C as CostAllocationHeaderActions, a as CostAllocationSection, v as validateCostAllocation, c as costAllocationItemSchema, E as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, b as isMileagePeriodData, d as MileagePeriodPreview, e as ExpenseFormHistoryLog } from "./CostAllocationSection-DsTA6Z13.js";
import { d as devError } from "./index-BZGB3DCm.js";
import { u as useRoles, R as Role } from "./hooks-DtuFUrbS.js";
import "./hooks-BQM8cBjx.js";
import { u as useForm, a, o as object, b as array, s as string, c as boolean, d as custom, C as ConfirmDialog } from "./schemas-Cabw2nNb.js";
const MISSING_VALUE_INDICATOR = "-";
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
const buildExpenseDateDisplay = (item) => {
  if (item.periodStart && item.periodEnd) {
    return formatDateRange(item.periodStart, item.periodEnd);
  }
  return formatExpenseDate(item.date ?? void 0) || MISSING_VALUE_INDICATOR;
};
const buildActionDateDisplay = (actionDate) => {
  const formattedDate = formatDate(actionDate);
  return formattedDate === "Invalid Date" ? MISSING_VALUE_INDICATOR : formattedDate;
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
    vendor: item.vendor || MISSING_VALUE_INDICATOR,
    totalAmount: formatAmountWithCurrency(item.totalAmount, (_a = item.totalAmountCurrency) == null ? void 0 : _a.isoCode),
    totalAmountCurrency: ((_b = item.totalAmountCurrency) == null ? void 0 : _b.isoCode) ?? MISSING_VALUE_INDICATOR,
    paymentMethod: ((_c = item.paymentMethod) == null ? void 0 : _c.name) ?? MISSING_VALUE_INDICATOR,
    status: normalizeStatus(item.status),
    actionDate: buildActionDateDisplay(item.actionDate)
  };
};
const useApprovalsList = (queryParams, options = {}) => {
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.approvalsList.list({ ...queryParams, company: userDefaultCompany == null ? void 0 : userDefaultCompany.shortName }),
    enabled: enabled && !!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName),
    placeholderData: keepPreviousData,
    queryFn: async () => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
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
      const baseUrl = EXPENSE_ENDPOINTS.GET_APPROVALS(userDefaultCompany.shortName);
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
const { useMemo: useMemo$4 } = await importShared("react");
const TextCell = ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: value });
const useApprovalsColumns = ({
  currentTab
}) => {
  const staticColumns = useMemo$4(() => [
    {
      id: "businessId",
      accessorKey: "businessId",
      enableSorting: false,
      size: 80,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "ID" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
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
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Employee" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
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
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Expense Date" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
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
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Vendor" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
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
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Expense Type" }),
      cell: (context) => {
        const expenseType = context.getValue();
        if (!expenseType) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ws,
            {
              context,
              viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: "-" })
            }
          );
        }
        const badgeConfig = getExpenseTypeBadgeConfig(expenseType);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ws,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tr, { variant: "outline", className: `${badgeConfig.bgColor} ${badgeConfig.textColor}`, children: badgeConfig.label }) })
          }
        );
      }
    },
    {
      id: "totalAmount",
      accessorKey: "totalAmount",
      enableSorting: false,
      size: 140,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Total Amount" }) }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
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
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Payment Method" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      )
    }
  ], []);
  const statusColumn = useMemo$4(() => ({
    accessorKey: "status",
    enableSorting: false,
    filterFn: "equals",
    size: 0,
    header: () => null,
    cell: () => null
  }), []);
  const actionDateColumn = useMemo$4(() => ({
    id: ApprovalSortableColumn.ActionDate,
    accessorKey: "actionDate",
    enableSorting: true,
    size: 150,
    header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: getActionDateColumnHeader(currentTab) }),
    cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ws,
      {
        context,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
      }
    )
  }), [currentTab]);
  const columns = useMemo$4(
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
const { useCallback: useCallback$3, useEffect: useEffect$2, useMemo: useMemo$3, useRef: useRef$2 } = await importShared("react");
const useApprovalsUrlFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isInitializedRef = useRef$2(false);
  const isOnListPage = location.pathname.startsWith(RoutePaths.Approvals);
  const locationState = location.state;
  const urlStatus = searchParams.get(URL_PARAM_STATUS);
  const urlSortBy = searchParams.get(URL_PARAM_SORT_BY);
  const urlSortOrder = searchParams.get(URL_PARAM_SORT_ORDER);
  const urlPage = searchParams.get(URL_PARAM_PAGE);
  const restoredState = useMemo$3(
    () => parseReturnUrl(locationState == null ? void 0 : locationState.returnUrl),
    [locationState == null ? void 0 : locationState.returnUrl]
  );
  const preservedStateRef = useRef$2(restoredState ?? createDefaultFilterState());
  const currentTab = useMemo$3(() => {
    if (!isOnListPage) return preservedStateRef.current.tab;
    const tab = isValidTab(urlStatus) ? urlStatus : DEFAULT_TAB;
    preservedStateRef.current.tab = tab;
    return tab;
  }, [urlStatus, isOnListPage]);
  useEffect$2(() => {
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
  const sorting = useMemo$3(() => {
    if (!isOnListPage) return preservedStateRef.current.sorting;
    const sortBy = isValidSortField(urlSortBy) ? urlSortBy : getDefaultSortField();
    const sortOrder = isValidSortOrder(urlSortOrder) ? urlSortOrder : getDefaultSortOrder(currentTab);
    const result = [{ id: sortBy, desc: sortOrder === "desc" }];
    preservedStateRef.current.sorting = result;
    return result;
  }, [urlSortBy, urlSortOrder, currentTab, isOnListPage]);
  const columnFilters = useMemo$3(() => {
    return [{ id: "status", value: currentTab }];
  }, [currentTab]);
  const pagination = useMemo$3(() => {
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
  const prevTabRef = useRef$2(currentTab);
  useEffect$2(() => {
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
  const handleColumnFiltersChange = useCallback$3(
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
  const handleSortingChange = useCallback$3((updater) => {
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
  const handlePaginationChange = useCallback$3((updater) => {
    const newPagination = typeof updater === "function" ? updater(pagination) : updater;
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
function getExpenseErrorMessage(error) {
  const code = error == null ? void 0 : error.code;
  if (code === "404") {
    return "Expense form could not be found.";
  }
  if (code === "403") {
    return "You do not have permission to view this expense form.";
  }
  return "Failed to load expense form. Please check your connection and try again.";
}
var SaveButtonDisabledReason = /* @__PURE__ */ ((SaveButtonDisabledReason2) => {
  SaveButtonDisabledReason2["NoChanges"] = "No changes to save";
  SaveButtonDisabledReason2["NotFullyAllocated"] = "Expense must be fully allocated";
  SaveButtonDisabledReason2["Saving"] = "Saving...";
  return SaveButtonDisabledReason2;
})(SaveButtonDisabledReason || {});
const ACTION_DATE_PREFIX = {
  [ApprovalTab.Submitted]: "Submitted on",
  [ApprovalTab.Approved]: "Approved on",
  [ApprovalTab.Rejected]: "Rejected on",
  [ApprovalTab.Cancelled]: "Cancelled on"
};
function buildHeaderConfig(item) {
  const datePrefix = ACTION_DATE_PREFIX[item.status];
  return {
    title: item.employeeFullName,
    titleSuffix: item.vendor !== MISSING_VALUE_INDICATOR ? item.vendor : "",
    amount: item.totalAmount,
    status: item.status,
    subtitle: `${item.businessId} • ${datePrefix} ${item.actionDate}`
  };
}
function buildHeaderFromExpenseItem(expenseItem) {
  var _a;
  const status = expenseItem.status;
  const datePrefix = ACTION_DATE_PREFIX[status] ?? "Submitted on";
  let actionDate = "";
  if (isExpenseItemSubmitted(expenseItem)) {
    if (status === ApprovalTab.Approved && expenseItem.approvedAt) actionDate = expenseItem.approvedAt;
    else if (status === ApprovalTab.Rejected && expenseItem.rejectedAt) actionDate = expenseItem.rejectedAt;
    else if (status === ApprovalTab.Cancelled && expenseItem.cancelledAt) actionDate = expenseItem.cancelledAt;
    else actionDate = expenseItem.submittedAt;
  }
  const vendor = isRegularExpense(expenseItem) ? expenseItem.data.vendor : "";
  const rawAmount = getExpenseItemAmount(expenseItem);
  const currencyCode = (_a = expenseItem.data.totalCurrency) == null ? void 0 : _a.code;
  const amount = formatAmountWithCurrency(rawAmount, currencyCode);
  const title = expenseItem.employeeFullName || "Expense Details";
  const subtitleParts = [
    expenseItem.businessId,
    `${datePrefix} ${actionDate}`
  ].filter(Boolean);
  return {
    title,
    titleSuffix: vendor !== MISSING_VALUE_INDICATOR ? vendor : "",
    amount,
    status,
    subtitle: subtitleParts.join(" • ")
  };
}
function isAllocationDeferredAndEmpty(expenseItem) {
  if (!isExpenseItemSubmitted(expenseItem)) return false;
  const { data } = expenseItem;
  return !!data.deferToApprover && (!data.costAllocations || data.costAllocations.length === 0);
}
const useApproveExpense = () => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: async ({ expenseFormId, comment = "" }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const payload = {
        action: "approved",
        comment
      };
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.MANAGER_DECISION(userDefaultCompany.shortName, expenseFormId),
        payload
      );
      return response.data;
    },
    onSuccess: (_data, { expenseFormId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(expenseFormId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.approvalsList.all()
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseHistory.all()
      });
      Us.success("Expense approved successfully");
    },
    onError: (error) => {
      devError("Failed to approve expense:", error);
      Us.error("Failed to approve. Please try again.");
    }
  });
};
const useManagerDecision = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ logicalCompanyShortName, expenseFormId, action, comment }) => {
      await apiClient.post(
        EXPENSE_ENDPOINTS.MANAGER_DECISION(logicalCompanyShortName, expenseFormId),
        { action, comment }
      );
    },
    onSuccess: (_data, { expenseFormId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(expenseFormId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseHistory.all()
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.approvalsList.all()
      });
    },
    onError: (error, { action }) => {
      devError("Failed to save manager decision:", error);
      Us.error(
        action === "rejected" ? "Failed to reject. Please try again." : "Failed to save manager decision. Please try again."
      );
    }
  });
};
const useSaveCostAllocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ expenseFormId, costAllocations }) => {
      const payload = costAllocations.map(mapCostAllocation);
      const response = await apiClient.put(
        EXPENSE_ENDPOINTS.SAVE_COST_ALLOCATION(expenseFormId),
        payload
      );
      return response.data;
    },
    onSuccess: (_data, { expenseFormId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(expenseFormId)
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.approvalsList.all()
      });
      Us.success("Cost allocation saved successfully");
    },
    onError: (error) => {
      devError("Failed to save cost allocation:", error);
      Us.error("Failed to save cost allocation. Please try again.");
    }
  });
};
const REJECTION_COMMENT_LIMIT = 1e3;
const ApproverFooter = ({
  isAllocationRequired,
  isApproving = false,
  onApprove,
  onReject,
  onEditAllocation,
  isRejecting = false,
  rejectionComment = "",
  rejectionCommentLimit = REJECTION_COMMENT_LIMIT,
  isSubmittingDecision = false,
  onRejectionCommentChange,
  onRejectCancel,
  onRejectSave
}) => {
  const isRejectSaveDisabled = !rejectionComment.trim() || isSubmittingDecision;
  const isApproveDisabled = isAllocationRequired || isApproving;
  if (isRejecting) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { className: "pt-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $a,
        {
          "aria-label": "Rejection Comment",
          value: rejectionComment,
          onChange: (e) => onRejectionCommentChange == null ? void 0 : onRejectionCommentChange(e.target.value),
          placeholder: "Add rejection note...",
          showCharacterCount: true,
          maxCharacters: rejectionCommentLimit,
          enforceMaxLength: true,
          required: true,
          disabled: isSubmittingDecision
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Ue,
          {
            type: "button",
            variant: "error",
            className: "h-9 px-4 py-2",
            onClick: onRejectSave,
            disabled: isRejectSaveDisabled,
            children: [
              isSubmittingDecision && /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-4" }),
              "Reject"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            type: "button",
            variant: "secondary",
            className: "h-9 px-4 py-2",
            onClick: onRejectCancel,
            disabled: isSubmittingDecision,
            children: "Cancel"
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { className: "pt-4 gap-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end w-full gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        type: "button",
        variant: "secondary-error",
        onClick: onReject,
        disabled: isApproving,
        children: "Reject"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        type: "button",
        variant: "secondary",
        onClick: onEditAllocation,
        disabled: isApproving,
        children: "Edit Allocation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(qt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ut, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ue,
        {
          type: "button",
          variant: "primary",
          onClick: onApprove,
          disabled: isApproveDisabled,
          children: [
            isApproving ? /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" }),
            "Approve"
          ]
        }
      ) }) }),
      isAllocationRequired && !isApproving && /* @__PURE__ */ jsxRuntimeExports.jsx(Yt, { className: "text-sm", children: "Cost allocation must be added before approval" })
    ] })
  ] }) });
};
const { useCallback: useCallback$2, useEffect: useEffect$1, useImperativeHandle, useMemo: useMemo$2, useRef: useRef$1 } = await importShared("react");
const currencySchema = custom(
  (val) => typeof val === "object" && val !== null && typeof val.code === "string" && val.code.length > 0
);
const approverAllocationSchema = object({
  costAllocations: array(costAllocationItemSchema).min(1, "At least one allocation is required"),
  isEqualSplit: boolean(),
  deferToApprover: boolean(),
  netAmount: string(),
  totalAmount: string(),
  netCurrency: currencySchema,
  totalCurrency: currencySchema
}).superRefine((data, ctx) => {
  var _a, _b;
  const amount = data.totalAmount || data.netAmount || "0";
  const currencyCode = ((_a = data.totalCurrency) == null ? void 0 : _a.code) ?? ((_b = data.netCurrency) == null ? void 0 : _b.code);
  validateCostAllocation(ctx, data.costAllocations, amount, false, currencyCode);
});
const FIELD_CONFIG = {
  netAmountField: "netAmount",
  totalAmountField: "totalAmount",
  netCurrencyField: "netCurrency",
  totalCurrencyField: "totalCurrency",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
};
const ApproverAllocationForm = ({ ref, expense, onSave, isSaving, onStateChange }) => {
  const defaultValues = useMemo$2(() => {
    if (isRegularExpense(expense)) {
      const expData = expense.data;
      const netCurrency = expData.netCurrency ?? expData.totalCurrency ?? { code: "", symbol: "" };
      const totalCurrency2 = expData.totalCurrency ?? { code: "", symbol: "" };
      return {
        costAllocations: expData.costAllocations ?? [],
        isEqualSplit: false,
        deferToApprover: false,
        netAmount: expData.netAmount ?? "0",
        totalAmount: expData.totalAmount ?? "0",
        netCurrency,
        totalCurrency: totalCurrency2
      };
    }
    const milData = expense.data;
    const totalCurrency = milData.totalCurrency ?? { code: "", symbol: "" };
    return {
      costAllocations: milData.costAllocations ?? [],
      isEqualSplit: false,
      deferToApprover: false,
      netAmount: milData.reimbursableAmount ?? "0",
      totalAmount: milData.reimbursableAmount ?? "0",
      netCurrency: totalCurrency,
      totalCurrency
    };
  }, [expense]);
  const {
    control,
    setValue,
    trigger,
    getValues,
    handleSubmit,
    formState: { isDirty, errors }
  } = useForm({
    defaultValues,
    resolver: a(approverAllocationSchema),
    mode: "onChange"
  });
  const getBaseAmount = useCallback$2(() => {
    var _a, _b;
    if (isMileageExpense(expense)) {
      return parseFloat(expense.data.reimbursableAmount || "0");
    }
    return getExpenseBaseAmount(
      (_a = expense.data.netCurrency) == null ? void 0 : _a.code,
      (_b = expense.data.totalCurrency) == null ? void 0 : _b.code,
      expense.data.netAmount,
      expense.data.totalAmount
    );
  }, [expense]);
  const { actions: rawActions, helpers } = useCostAllocationHandlers(
    setValue,
    getValues,
    FIELD_CONFIG.costAllocationsField,
    FIELD_CONFIG.isEqualSplitField,
    getBaseAmount
  );
  const actions = useMemo$2(() => ({
    addAllocation: (...args) => {
      rawActions.addAllocation(...args);
      trigger();
    },
    updateAllocationEntity: (...args) => {
      rawActions.updateAllocationEntity(...args);
      trigger();
    },
    removeAllocation: (...args) => {
      rawActions.removeAllocation(...args);
      trigger();
    }
  }), [rawActions, trigger]);
  const submitForm = useMemo$2(
    () => handleSubmit((formData) => {
      onSave(formData.costAllocations);
    }),
    [handleSubmit, onSave]
  );
  const hasErrors = !!errors.costAllocations;
  const onStateChangeRef = useRef$1(onStateChange);
  onStateChangeRef.current = onStateChange;
  useEffect$1(() => {
    var _a;
    (_a = onStateChangeRef.current) == null ? void 0 : _a.call(onStateChangeRef);
  }, [isDirty, hasErrors]);
  useImperativeHandle(ref, () => ({
    submit: submitForm,
    getSaveButtonState: () => {
      if (isSaving) {
        return { disabled: true, tooltip: SaveButtonDisabledReason.Saving };
      }
      if (!isDirty) {
        return { disabled: true, tooltip: SaveButtonDisabledReason.NoChanges };
      }
      if (errors.costAllocations) {
        return { disabled: true, tooltip: SaveButtonDisabledReason.NotFullyAllocated };
      }
      return { disabled: false, tooltip: null };
    },
    getIsDirty: () => isDirty
  }), [submitForm, isSaving, isDirty, errors.costAllocations]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col gap-4",
      ref: useScrollIntoViewRef(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ir,
            {
              title: "COST ALLOCATION",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
              iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CostAllocationHeaderActions,
            {
              control,
              setValue,
              trigger,
              helpers,
              fieldConfig: FIELD_CONFIG,
              hideDeferToApprover: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CostAllocationSection,
          {
            control,
            setValue,
            trigger,
            actions,
            helpers,
            fieldConfig: FIELD_CONFIG,
            hideDeferToApprover: true
          }
        )
      ]
    }
  );
};
const ApproverEditFooter = ({
  saveButtonState,
  isSaving,
  onSave,
  onCancel
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { className: "pt-4 gap-4 w-full max-w-[600px] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end w-full gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        type: "button",
        variant: "soft",
        onClick: onCancel,
        disabled: isSaving,
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(qt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ut, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          type: "button",
          variant: "primary",
          onClick: onSave,
          disabled: saveButtonState.disabled,
          children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-4" }) : "Save Changes"
        }
      ) }) }),
      saveButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Yt, { className: "text-sm", children: saveButtonState.tooltip })
    ] })
  ] }) });
};
const { useCallback: useCallback$1, useEffect, useMemo: useMemo$1, useRef, useState } = await importShared("react");
const ApproverExpenseDetail = ({ expenseId, item, onClose }) => {
  var _a;
  const { hasAnyRole, isEmployee } = useRoles();
  const canTakeApprovalAction = hasAnyRole([Role.Manager, Role.Admin]);
  const logicalCompanyShortName = useCompanyStore((state) => {
    var _a2;
    return ((_a2 = state.userDefaultCompany) == null ? void 0 : _a2.shortName) ?? null;
  });
  const [isEditingAllocation, setIsEditingAllocation] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [rejectionComment, setRejectionComment] = useState("");
  const [statusOverride, setStatusOverride] = useState(null);
  const [actionDateOverride, setActionDateOverride] = useState(null);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const pendingActionRef = useRef(null);
  const allocationFormRef = useRef(null);
  const [, setFooterTick] = useState(0);
  const handleFormStateChange = useCallback$1(() => {
    setFooterTick((t) => t + 1);
  }, []);
  const hasUnsavedRejectionComment = isRejecting && rejectionComment.trim().length > 0;
  const beforeUnloadHandler = useCallback$1((event) => {
    var _a2;
    if (isEditingAllocation && ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty())) {
      event.preventDefault();
      event.returnValue = "";
      return;
    }
    if (hasUnsavedRejectionComment) {
      event.preventDefault();
      event.returnValue = "";
    }
  }, [isEditingAllocation, hasUnsavedRejectionComment]);
  useEffect(() => {
    if (isEditingAllocation || hasUnsavedRejectionComment) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
      return () => {
        window.removeEventListener("beforeunload", beforeUnloadHandler);
      };
    }
  }, [isEditingAllocation, hasUnsavedRejectionComment, beforeUnloadHandler]);
  useEffect(() => {
    if (!isEmployee) {
      devError("ApproverExpenseDetail: user lacks Expense.Employee role, expense detail endpoint will return 403");
      Us.error("Insufficient permissions to view expense details.", { duration: 5e3 });
      onClose();
    }
  }, [isEmployee, onClose]);
  const { data: expenseItem, isPending, isError, error: fetchError } = useExpenseItem(expenseId, { enabled: isEmployee });
  const errorMessage = useMemo$1(
    () => isError ? getExpenseErrorMessage(fetchError) : "",
    [isError, fetchError]
  );
  useErrorToast(isError, errorMessage, 5e3);
  useEffect(() => {
    if (isError) onClose();
  }, [isError, onClose]);
  useEffect(() => {
    if (expenseItem && expenseItem.status === "draft") {
      Us.error("Expense form is still in draft and cannot be viewed in the approval flow.", { duration: 5e3 });
      onClose();
    }
  }, [expenseItem, onClose]);
  const getActionDateForStatus = useCallback$1((status, submittedExpense) => {
    if (!status || !submittedExpense || !isExpenseItemSubmitted(submittedExpense)) return void 0;
    const rawDate = (() => {
      if (status === ApprovalTab.Approved) return submittedExpense.approvedAt;
      if (status === ApprovalTab.Rejected) return submittedExpense.rejectedAt;
      if (status === ApprovalTab.Cancelled) return submittedExpense.cancelledAt;
      return submittedExpense.submittedAt;
    })();
    return rawDate ? formatDate(rawDate) : void 0;
  }, []);
  const header = useMemo$1(() => {
    const derivedStatus = statusOverride ?? (expenseItem == null ? void 0 : expenseItem.status) ?? (item == null ? void 0 : item.status);
    const derivedActionDate = actionDateOverride ?? getActionDateForStatus(derivedStatus, expenseItem) ?? (item == null ? void 0 : item.actionDate);
    if (item && derivedStatus && derivedActionDate) {
      return buildHeaderConfig({
        ...item,
        status: derivedStatus,
        actionDate: derivedActionDate
      });
    }
    if (expenseItem) {
      const baseHeader = buildHeaderFromExpenseItem(expenseItem);
      if (!derivedStatus || !actionDateOverride && derivedStatus === baseHeader.status) return baseHeader;
      return {
        ...baseHeader,
        status: derivedStatus,
        subtitle: `${ACTION_DATE_PREFIX[derivedStatus] ?? "Submitted on"} ${derivedActionDate ?? ""}`.trim()
      };
    }
    return null;
  }, [item, expenseItem, statusOverride, actionDateOverride, getActionDateForStatus]);
  const effectiveStatus = statusOverride ?? (expenseItem == null ? void 0 : expenseItem.status) ?? (item == null ? void 0 : item.status);
  const isAllocationRequired = useMemo$1(
    () => expenseItem ? isAllocationDeferredAndEmpty(expenseItem) : false,
    [expenseItem]
  );
  const saveCostAllocation = useSaveCostAllocation();
  const approveExpense = useApproveExpense();
  const managerDecision = useManagerDecision();
  const handleApprove = useCallback$1(() => {
    if (approveExpense.isPending) return;
    approveExpense.mutate(
      { expenseFormId: expenseId },
      { onSuccess: () => onClose() }
    );
  }, [approveExpense, expenseId, onClose]);
  const handleEditAllocation = useCallback$1(() => {
    setIsRejecting(false);
    setRejectionComment("");
    setIsEditingAllocation(true);
  }, []);
  const handleReject = useCallback$1(() => {
    setIsEditingAllocation(false);
    setIsRejecting(true);
  }, []);
  const handleRejectCommentChange = useCallback$1((comment) => {
    setRejectionComment(comment);
  }, []);
  const handleRejectCancel = useCallback$1(() => {
    setIsRejecting(false);
    setRejectionComment("");
  }, []);
  const handleCancelEdit = useCallback$1(() => {
    var _a2;
    const isDirty = ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty()) ?? false;
    if (isDirty) {
      pendingActionRef.current = "edit-cancel";
      setShowUnsavedDialog(true);
      return;
    }
    setIsEditingAllocation(false);
  }, []);
  const handleSaveAllocation = useCallback$1((allocations) => {
    saveCostAllocation.mutate(
      { expenseFormId: expenseId, costAllocations: allocations },
      {
        onSuccess: () => {
          setIsEditingAllocation(false);
        }
      }
    );
  }, [saveCostAllocation, expenseId]);
  const handleFormSubmit = useCallback$1(() => {
    var _a2;
    (_a2 = allocationFormRef.current) == null ? void 0 : _a2.submit();
  }, []);
  const handleRejectSave = useCallback$1(() => {
    if (managerDecision.isPending) return;
    const comment = rejectionComment.trim();
    if (!logicalCompanyShortName || !comment) {
      return;
    }
    managerDecision.mutate(
      {
        logicalCompanyShortName,
        expenseFormId: expenseId,
        action: "rejected",
        comment
      },
      {
        onSuccess: () => {
          setStatusOverride(ApprovalTab.Rejected);
          setActionDateOverride(formatDate((/* @__PURE__ */ new Date()).toISOString()));
          setIsRejecting(false);
          setRejectionComment("");
          Us.success("Expense rejected");
        },
        onError: () => {
        }
      }
    );
  }, [managerDecision, logicalCompanyShortName, expenseId, rejectionComment]);
  const handleDialogOpenChange = useCallback$1((open) => {
    var _a2;
    if (!open && (approveExpense.isPending || managerDecision.isPending)) return;
    if (!open && isEditingAllocation) {
      const isDirty = ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty()) ?? false;
      if (isDirty) {
        pendingActionRef.current = "dialog-close";
        setShowUnsavedDialog(true);
        return;
      }
    }
    if (!open && hasUnsavedRejectionComment) {
      pendingActionRef.current = "dialog-close";
      setShowUnsavedDialog(true);
      return;
    }
    if (!open) {
      setIsEditingAllocation(false);
      setIsRejecting(false);
      setRejectionComment("");
      onClose();
    }
  }, [approveExpense.isPending, managerDecision.isPending, isEditingAllocation, hasUnsavedRejectionComment, onClose]);
  const handleDiscardAndClose = useCallback$1(() => {
    const pendingAction = pendingActionRef.current;
    setShowUnsavedDialog(false);
    setIsEditingAllocation(false);
    setIsRejecting(false);
    setRejectionComment("");
    if (pendingAction === "dialog-close") {
      pendingActionRef.current = null;
      onClose();
      return;
    }
    pendingActionRef.current = null;
  }, [onClose]);
  const handleKeepEditing = useCallback$1(() => {
    pendingActionRef.current = null;
    setShowUnsavedDialog(false);
  }, []);
  const renderContent = useCallback$1((expenseItemData) => {
    if (!isExpenseItemSubmitted(expenseItemData)) return null;
    const allocationSlot = isEditingAllocation ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApproverAllocationForm,
      {
        ref: allocationFormRef,
        expense: expenseItemData,
        onSave: handleSaveAllocation,
        isSaving: saveCostAllocation.isPending,
        onStateChange: handleFormStateChange
      }
    ) : void 0;
    if (isRegularExpense(expenseItemData)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensePreview, { expense: expenseItemData, renderCostAllocation: allocationSlot });
    }
    if (isMileageExpense(expenseItemData)) {
      if (isMileageTripData(expenseItemData.data)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MileageTripPreview, { mileage: { ...expenseItemData, data: expenseItemData.data }, renderCostAllocation: allocationSlot });
      }
      if (isMileagePeriodData(expenseItemData.data)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MileagePeriodPreview, { mileage: { ...expenseItemData, data: expenseItemData.data }, renderCostAllocation: allocationSlot });
      }
    }
    return null;
  }, [isEditingAllocation, handleSaveAllocation, saveCostAllocation.isPending, handleFormStateChange]);
  const isSubmitted = effectiveStatus === ApprovalTab.Submitted;
  const saveButtonState = ((_a = allocationFormRef.current) == null ? void 0 : _a.getSaveButtonState()) ?? { disabled: true, tooltip: SaveButtonDisabledReason.NoChanges };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Js, { open: true, onOpenChange: handleDialogOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Za,
      {
        className: "w-auto max-w-none max-h-[90vh] h-full overflow-hidden flex flex-col",
        onInteractOutside: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Qa, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: header ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(es, { className: "text-exp-neutral-900 text-xl font-bold", children: header.title }),
              header.titleSuffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-exp-neutral-900", children: header.titleSuffix }),
              header.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
                "(",
                header.amount,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormHistoryLog, { expenseFormId: (expenseItem == null ? void 0 : expenseItem.id) ? Number(expenseItem.id) : 0, className: "ml-2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: header.subtitle })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 h-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-5 text-exp-primary-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading expense details..." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden flex flex-col min-w-[600px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-8 text-exp-primary-blue-600" }) }) : expenseItem && renderContent(expenseItem) }),
            canTakeApprovalAction && !isPending && expenseItem && isSubmitted && !isEditingAllocation && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ApproverFooter,
              {
                isAllocationRequired,
                isApproving: approveExpense.isPending,
                rejectionComment,
                rejectionCommentLimit: REJECTION_COMMENT_LIMIT,
                isRejecting,
                isSubmittingDecision: managerDecision.isPending,
                onApprove: handleApprove,
                onReject: handleReject,
                onEditAllocation: handleEditAllocation,
                onRejectCancel: handleRejectCancel,
                onRejectionCommentChange: handleRejectCommentChange,
                onRejectSave: handleRejectSave
              }
            ),
            canTakeApprovalAction && isEditingAllocation && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ApproverEditFooter,
              {
                saveButtonState,
                isSaving: saveCostAllocation.isPending,
                onSave: handleFormSubmit,
                onCancel: handleCancelEdit
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: showUnsavedDialog,
        onOpenChange: (open) => {
          if (!open) handleKeepEditing();
        },
        title: "Unsaved changes",
        description: "If you leave now, your progress will be lost.",
        confirmLabel: "Discard Changes",
        cancelLabel: "Keep Editing",
        onConfirm: handleDiscardAndClose,
        onCancel: handleKeepEditing,
        variant: "error"
      }
    )
  ] });
};
const { useCallback, useMemo } = await importShared("react");
const ApprovalsList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: selectedExpenseId } = useParams();
  const locationState = location.state;
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
    navigate(
      generatePath(RoutePaths.ApprovalsId, { id: String(id) }) + location.search,
      { state: { item: row.original } }
    );
  }, [navigate, location.search]);
  const handleDetailClose = useCallback(() => {
    navigate(RoutePaths.Approvals + location.search, { replace: true });
  }, [navigate, location.search]);
  const renderToolbar = useCallback((table) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ma, { table, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Pa,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-8 text-exp-primary-blue-600" }),
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
      Zs,
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
    ) }),
    selectedExpenseId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApproverExpenseDetail,
      {
        expenseId: selectedExpenseId,
        item: locationState == null ? void 0 : locationState.item,
        onClose: handleDetailClose
      }
    )
  ] });
};
const ApprovalsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ApprovalsList, {});
};
export {
  ApprovalsPage as default
};

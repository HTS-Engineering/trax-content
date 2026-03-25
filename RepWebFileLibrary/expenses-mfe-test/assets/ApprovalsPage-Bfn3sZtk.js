import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { q as qs, I as Ia, b as $r, B as Bs, K as Ka, $ as $e, M as Mn, P as Pn, E as En, V as Vn, Q as Qn, W as Ws, d as qa, Y as Ya, e as Wa, D as Da, f as Ea, U as Us } from "./configuration-DWZWsCI4.js";
import { a as useCompanyStore, d as useQuery, q as queryKeys, k as keepPreviousData, E as EXPENSE_ENDPOINTS, i as isExpenseItemSubmitted, e as isRegularExpense, g as getExpenseItemAmount, f as useQueryClient, h as useMutation, j as isMileageExpense, l as useExpenseItem } from "./expense-api-Myxsx9MI.js";
import { a as apiClient } from "./axiosInstance-CHke4UEB.js";
import { f as formatAmountWithCurrency, a as formatDateRange } from "./formatters-TKFDn-S3.js";
import { f as formatExpenseDate, E as ExpenseFormHistoryLog } from "./ExpenseFormHistoryLog-BLAVKzhv.js";
import { g as getExpenseTypeBadgeConfig } from "./expense-type-badge-CmIFG5WW.js";
import { k as useSearchParams, f as useLocation, a as RoutePaths, l as useScrollIntoViewRef, m as useErrorToast, u as useNavigate, g as useParams, n as generatePath } from "./use-scroll-into-view-ref-AH7C42Ic.js";
import { I as Icon } from "./Icon-vRMTtv5F.js";
import { m as mapCostAllocation, g as getExpenseBaseAmount, u as useCostAllocationHandlers, C as CostAllocationHeaderActions, a as CostAllocationSection, v as validateCostAllocation, c as costAllocationItemSchema, E as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, b as isMileagePeriodData, d as MileagePeriodPreview, e as ConfirmDialog } from "./CostAllocationSection-BHT_W-sn.js";
import { d as devError } from "./index-CvL7PQqL.js";
import { u as useRoles } from "./hooks-CJQ6zESb.js";
import "./hooks-CqV92DI1.js";
import { u as useForm, a, o as object, b as array, s as string, c as boolean, d as custom } from "./schemas-CxGcuJwB.js";
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
    actionDate: formatExpenseDate(item.actionDate) || MISSING_VALUE_INDICATOR
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
    header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ia, { column, title: getActionDateColumnHeader(currentTab) }),
    cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      qs,
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
  const isPaginationInitializedRef = useRef$2(false);
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
  return {
    title: "Expense Details",
    titleSuffix: vendor !== MISSING_VALUE_INDICATOR ? vendor : "",
    amount,
    status,
    subtitle: `${datePrefix} ${actionDate}`
  };
}
function isAllocationDeferredAndEmpty(expenseItem) {
  if (!isExpenseItemSubmitted(expenseItem)) return false;
  const { data } = expenseItem;
  return !!data.deferToApprover && (!data.costAllocations || data.costAllocations.length === 0);
}
const useApproveExpense = () => {
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ expenseFormId, comment = "" }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const payload = {
        action: "approved",
        comment
      };
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.MANAGER_DECISION(selectedCompany.shortName, expenseFormId),
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
      Bs.success("Expense approved successfully");
    },
    onError: (error) => {
      devError("Failed to approve expense:", error);
      Bs.error("Failed to approve. Please try again.");
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
      Bs.success("Cost allocation saved successfully");
    },
    onError: (error) => {
      devError("Failed to save cost allocation:", error);
      Bs.error("Failed to save cost allocation. Please try again.");
    }
  });
};
const ApproverFooter = ({
  isAllocationRequired,
  isApproving = false,
  onApprove,
  onReject,
  onEditAllocation
}) => {
  const isApproveDisabled = isAllocationRequired || isApproving;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ka, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end w-full gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
      {
        type: "button",
        variant: "secondary-error",
        onClick: onReject,
        disabled: isApproving,
        children: "Reject"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
      {
        type: "button",
        variant: "secondary",
        onClick: onEditAllocation,
        disabled: isApproving,
        children: "Edit Allocation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        $e,
        {
          type: "button",
          variant: "primary",
          onClick: onApprove,
          disabled: isApproveDisabled,
          children: [
            isApproving ? /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check", className: "size-4" }),
            isApproving ? "Approving..." : "Approve"
          ]
        }
      ) }) }),
      isAllocationRequired && !isApproving && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { className: "text-sm", children: "Cost allocation must be added before approval" })
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
            Qn,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ka, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end w-full gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
      {
        type: "button",
        variant: "soft",
        onClick: onCancel,
        disabled: isSaving,
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          type: "button",
          variant: "primary",
          onClick: onSave,
          disabled: saveButtonState.disabled,
          children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-4" }) : "Save Changes"
        }
      ) }) }),
      saveButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { className: "text-sm", children: saveButtonState.tooltip })
    ] })
  ] }) });
};
const { useCallback: useCallback$1, useEffect, useMemo: useMemo$1, useRef, useState } = await importShared("react");
const ApproverExpenseDetail = ({ expenseId, item, onClose }) => {
  var _a;
  const { isEmployee } = useRoles();
  const [isEditingAllocation, setIsEditingAllocation] = useState(false);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const pendingCloseRef = useRef(false);
  const allocationFormRef = useRef(null);
  const [, setFooterTick] = useState(0);
  const handleFormStateChange = useCallback$1(() => {
    setFooterTick((t) => t + 1);
  }, []);
  useEffect(() => {
    if (!isEditingAllocation) return;
    const handleBeforeUnload = (e) => {
      var _a2;
      const isDirty = ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty()) ?? false;
      if (isDirty) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isEditingAllocation]);
  useEffect(() => {
    if (!isEmployee) {
      devError("ApproverExpenseDetail: user lacks Expense.Employee role, expense detail endpoint will return 403");
      Bs.error("Insufficient permissions to view expense details.");
      onClose();
    }
  }, [isEmployee, onClose]);
  const { data: expenseItem, isPending, isError } = useExpenseItem(expenseId, { enabled: isEmployee });
  useErrorToast(isError, "Failed to load expense details. Please try again later.");
  useEffect(() => {
    if (isError) onClose();
  }, [isError, onClose]);
  useEffect(() => {
    if (expenseItem && expenseItem.status === "draft") {
      Bs.error("This expense is not available in the approval flow.");
      onClose();
    }
  }, [expenseItem, onClose]);
  const header = useMemo$1(() => {
    if (item) return buildHeaderConfig(item);
    if (expenseItem) return buildHeaderFromExpenseItem(expenseItem);
    return null;
  }, [item, expenseItem]);
  const effectiveStatus = (item == null ? void 0 : item.status) ?? (expenseItem == null ? void 0 : expenseItem.status);
  const isAllocationRequired = useMemo$1(
    () => expenseItem ? isAllocationDeferredAndEmpty(expenseItem) : false,
    [expenseItem]
  );
  const saveCostAllocation = useSaveCostAllocation();
  const approveExpense = useApproveExpense();
  const handleApprove = useCallback$1(() => {
    approveExpense.mutate(
      { expenseFormId: expenseId },
      { onSuccess: () => onClose() }
    );
  }, [approveExpense, expenseId, onClose]);
  const handleEditAllocation = useCallback$1(() => {
    setIsEditingAllocation(true);
  }, []);
  const handleCancelEdit = useCallback$1(() => {
    var _a2;
    const isDirty = ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty()) ?? false;
    if (isDirty) {
      pendingCloseRef.current = false;
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
  const handleDialogOpenChange = useCallback$1((open) => {
    var _a2;
    if (!open && approveExpense.isPending) return;
    if (!open && isEditingAllocation) {
      const isDirty = ((_a2 = allocationFormRef.current) == null ? void 0 : _a2.getIsDirty()) ?? false;
      if (isDirty) {
        pendingCloseRef.current = true;
        setShowUnsavedDialog(true);
        return;
      }
    }
    if (!open) {
      setIsEditingAllocation(false);
      onClose();
    }
  }, [approveExpense.isPending, isEditingAllocation, onClose]);
  const handleDiscardAndClose = useCallback$1(() => {
    setShowUnsavedDialog(false);
    setIsEditingAllocation(false);
    if (pendingCloseRef.current) {
      pendingCloseRef.current = false;
      onClose();
    }
  }, [onClose]);
  const handleKeepEditing = useCallback$1(() => {
    pendingCloseRef.current = false;
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ws, { open: true, onOpenChange: handleDialogOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      qa,
      {
        className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col",
        onInteractOutside: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ya, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: header ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wa, { className: "text-exp-neutral-900 text-xl font-bold", children: header.title }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-5 text-exp-primary-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading expense details..." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-8 text-exp-primary-blue-600" }) }) : expenseItem && renderContent(expenseItem) }),
            !isPending && expenseItem && isSubmitted && !isEditingAllocation && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ApproverFooter,
              {
                isAllocationRequired,
                isApproving: approveExpense.isPending,
                onApprove: handleApprove,
                onEditAllocation: handleEditAllocation
              }
            ),
            isEditingAllocation && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    navigate(RoutePaths.Approvals + location.search);
  }, [navigate, location.search]);
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

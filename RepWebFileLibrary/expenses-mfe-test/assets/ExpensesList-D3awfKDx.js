import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { a as apiClient, p, H as Hs, C as Ca, _ as _r, e as On, L as La, f as Ls, g as Sa, R as Ra, S as Sn } from "./axiosInstance-DP9FWpUw.js";
import { k as useQuery, q as queryKeys } from "./query-keys-DpYAYDxu.js";
import { E as EXPENSE_ENDPOINTS } from "./endpoints-BX9yOQ37.js";
import { I as Icon } from "./Icon-DYEjfqv0.js";
import { C as Clock } from "./clock-D_qw84cN.js";
import { u as useNavigate, a as RoutePaths } from "./routes-nW3dHYkG.js";
import { P as Plus } from "./plus-B11KhOqH.js";
const mapExpenseDraftToListItem = (draft) => ({
  id: draft.id,
  status: "draft",
  expenseType: "expense",
  data: draft.data,
  createdAt: draft.createdAt,
  updatedAt: draft.updatedAt,
  userId: draft.userId
});
const mapSubmittedExpenseToListItem = (expense) => ({
  id: expense.id,
  status: expense.status,
  expenseType: "expense",
  data: expense.data,
  createdAt: expense.createdAt,
  updatedAt: expense.updatedAt,
  submittedAt: expense.submittedAt,
  approvedAt: expense.approvedAt,
  rejectedAt: expense.rejectedAt,
  cancelledAt: expense.cancelledAt,
  userId: expense.userId,
  approver: expense.approver
});
const mapMileageDraftToListItem = (draft) => ({
  id: draft.id,
  status: "draft",
  expenseType: "mileage",
  data: draft.data,
  createdAt: draft.createdAt,
  updatedAt: draft.updatedAt,
  userId: draft.userId
});
const mapSubmittedMileageToListItem = (mileage) => ({
  id: mileage.id,
  status: mileage.status,
  expenseType: "mileage",
  data: mileage.data,
  createdAt: mileage.createdAt,
  updatedAt: mileage.updatedAt,
  submittedAt: mileage.submittedAt,
  approvedAt: mileage.approvedAt,
  rejectedAt: mileage.rejectedAt,
  cancelledAt: mileage.cancelledAt,
  userId: mileage.userId,
  approver: mileage.approver
});
const mapResponseItemToListItem = (item) => {
  if (item.itemType === "expense") {
    return item.status === "draft" ? mapExpenseDraftToListItem(item) : mapSubmittedExpenseToListItem(item);
  }
  return item.status === "draft" ? mapMileageDraftToListItem(item) : mapSubmittedMileageToListItem(item);
};
const useExpensesList = (queryParams) => {
  return useQuery({
    queryKey: queryKeys.expensesList.list(queryParams),
    queryFn: async () => {
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
      const url = `${EXPENSE_ENDPOINTS.GET_EXPENSES_LIST}${params.toString() ? `?${params.toString()}` : ""}`;
      const response = await apiClient.get(url);
      const allItems = response.data.items.map(mapResponseItemToListItem);
      return allItems;
    },
    staleTime: 60 * 1e3
  });
};
const EmptyState = ({
  iconName = "receipt",
  iconComponent,
  iconClassName,
  iconWrapperClassName,
  title,
  description,
  titleClassName,
  descriptionClassName,
  containerClassName,
  action
}) => {
  const renderIcon = () => {
    if (iconComponent) {
      return iconComponent;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        name: iconName,
        className: p("size-9 text-exp-neutral-100", iconClassName)
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: p(
        "flex flex-col items-center justify-center py-16 px-4 gap-4",
        containerClassName
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: p(
              "bg-exp-primary-blue-50 p-4.5 rounded-full",
              iconWrapperClassName
            ),
            children: renderIcon()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2.5 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: p(
                "text-base font-medium text-exp-neutral-500",
                titleClassName
              ),
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: p(
                "text-sm font-normal text-exp-grey-600 max-w-96 text-center leading-[1.4]",
                descriptionClassName
              ),
              children: description
            }
          )
        ] }),
        action && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: action })
      ]
    }
  );
};
const EXPENSE_STATUS_CONFIG = [
  {
    value: "all",
    label: "All",
    emptyState: {
      iconName: "receipt",
      title: "No expenses yet",
      description: "You haven't added any expenses. Click 'New Expense' above to get started."
    }
  },
  {
    value: "draft",
    label: "Draft",
    emptyState: {
      iconName: "sticky_note_2",
      title: "You're all caught up",
      description: "No expense draft pending submission"
    }
  },
  {
    value: "submitted",
    label: "Submitted",
    emptyState: {
      useCustomIcon: true,
      title: "You're all cleared",
      description: "No expenses awaiting approval"
    }
  },
  {
    value: "approved",
    label: "Approved",
    emptyState: {
      iconName: "check-circle-fill",
      title: "No approved expenses",
      description: "Approved expenses will appear here"
    }
  },
  {
    value: "rejected",
    label: "Rejected",
    emptyState: {
      iconName: "error-outline",
      title: "No rejected expenses",
      description: "Any rejected expenses will appear here"
    }
  },
  {
    value: "cancelled",
    label: "Cancelled",
    emptyState: {
      iconName: "delete",
      title: "No cancelled expenses",
      description: "Any expenses cancelled by AP during posting will appear here"
    }
  }
];
const getEmptyStateForStatus = (status) => {
  const config = EXPENSE_STATUS_CONFIG.find((c) => c.value === status);
  return (config == null ? void 0 : config.emptyState) ?? EXPENSE_STATUS_CONFIG[0].emptyState;
};
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};
const formatDateRange = (from, to) => {
  const fromDate = typeof from === "string" ? new Date(from) : from;
  const toDate = typeof to === "string" ? new Date(to) : to;
  const fromMonth = fromDate.toLocaleDateString("en-US", { month: "short" });
  const toMonth = toDate.toLocaleDateString("en-US", { month: "short" });
  const fromDay = fromDate.getDate();
  const toDay = toDate.getDate();
  const year = toDate.getFullYear();
  if (fromMonth === toMonth) {
    return `${fromMonth} ${fromDay} - ${toDay}, ${year}`;
  }
  return `${fromMonth} ${fromDay} - ${toMonth} ${toDay}, ${year}`;
};
const formatCurrency = (amount, currencyCode = "USD") => {
  const numericAmount = parseFloat(amount);
  if (isNaN(numericAmount)) return amount;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode
  }).format(numericAmount);
};
const isMileageTripData = (data) => {
  return data.formType === "trip";
};
const isMileagePeriodData = (data) => {
  return data.formType === "period";
};
const isMileageListItem = (item) => {
  return item.expenseType === "mileage";
};
const isExpenseListItem = (item) => {
  return item.expenseType === "expense";
};
const getExpenseDate = (item) => {
  if (isMileageListItem(item)) {
    if (isMileagePeriodData(item.data) && item.data.expensePeriod) {
      return formatDateRange(item.data.expensePeriod.from, item.data.expensePeriod.to);
    }
    if (isMileageTripData(item.data)) {
      return formatDate(item.data.expenseDate);
    }
    return "—";
  }
  if (isExpenseListItem(item)) {
    return formatDate(item.data.expenseDate);
  }
  return "—";
};
const getExpenseTypeDisplay = (item) => {
  if (isMileageListItem(item)) {
    return "Mileage";
  }
  if (isExpenseListItem(item)) {
    return item.data.expenseType || "—";
  }
  return "—";
};
const getVendor = (item) => {
  if (isMileageListItem(item)) {
    return "N/A";
  }
  if (isExpenseListItem(item)) {
    return item.data.vendor || "—";
  }
  return "—";
};
const getTotalAmount = (item) => {
  var _a;
  if (isMileageListItem(item)) {
    return formatCurrency(item.data.reimbursableAmount);
  }
  if (isExpenseListItem(item)) {
    const currencyCode = ((_a = item.data.totalCurrency) == null ? void 0 : _a.code) || "USD";
    return formatCurrency(item.data.totalAmount, currencyCode);
  }
  return "—";
};
const getPaymentMethod = (item) => {
  if (isMileageListItem(item)) {
    return "Out of Pocket";
  }
  if (isExpenseListItem(item)) {
    return item.data.paymentMethod || "—";
  }
  return "—";
};
const getStatusDate = (item, statusFilter) => {
  switch (statusFilter) {
    case "draft":
      return formatDate(item.createdAt);
    case "submitted":
      return item.submittedAt ? formatDate(item.submittedAt) : formatDate(item.updatedAt);
    case "approved":
      return item.approvedAt ? formatDate(item.approvedAt) : "—";
    case "rejected":
      return item.rejectedAt ? formatDate(item.rejectedAt) : "—";
    case "cancelled":
      return item.cancelledAt ? formatDate(item.cancelledAt) : "—";
    default:
      return formatDate(item.updatedAt);
  }
};
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
const statusBadgeConfig = {
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
const { useCallback: useCallback$2, useMemo: useMemo$1 } = await importShared("react");
const STATUS_DATE_COLUMN_SIZE = 140;
const STATUS_COLUMN_SIZE = 100;
const STATUS_DATE_COLUMN_ID = "statusDate";
const StatusDateCell = ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: value });
const useExpensesColumns = ({
  currentStatusFilter
}) => {
  const staticColumns = useMemo$1(() => [
    {
      accessorKey: "id",
      enableSorting: false,
      filterFn: "equals",
      size: 80,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: "ID" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-600", children: context.getValue() })
        }
      )
    },
    {
      id: "expenseDate",
      accessorFn: (row) => getExpenseDate(row),
      enableSorting: true,
      size: 150,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: "Expense Date" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: context.getValue() })
        }
      )
    },
    {
      id: "vendor",
      accessorFn: (row) => getVendor(row),
      enableSorting: false,
      minSize: 100,
      maxSize: 250,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: "Vendor" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-exp-grey-700 truncate", title: context.getValue(), children: context.getValue() })
        }
      )
    },
    {
      id: "expenseTypeDisplay",
      accessorFn: (row) => getExpenseTypeDisplay(row),
      enableSorting: false,
      minSize: 120,
      maxSize: 300,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: "Expense Type" }),
      cell: (context) => {
        const expenseType = context.getValue();
        const badgeConfig = getExpenseTypeBadgeConfig(expenseType);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Hs,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(_r, { variant: "outline", className: `${badgeConfig.bgColor} ${badgeConfig.textColor}`, children: badgeConfig.label })
          }
        );
      }
    },
    {
      id: "totalAmount",
      accessorFn: (row) => getTotalAmount(row),
      enableSorting: false,
      size: 140,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: "Total Amount" }) }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: context.getValue() }) })
        }
      )
    },
    {
      id: "paymentMethod",
      accessorFn: (row) => getPaymentMethod(row),
      enableSorting: false,
      size: 160,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: "Payment Method" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800 truncate", children: context.getValue() })
        }
      )
    }
  ], []);
  const statusColumn = useMemo$1(() => ({
    accessorKey: "status",
    enableSorting: false,
    filterFn: "equals",
    size: currentStatusFilter === "all" ? STATUS_COLUMN_SIZE : 0,
    header: ({ column }) => {
      if (currentStatusFilter !== "all") return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: "Status" });
    },
    cell: (context) => {
      if (currentStatusFilter !== "all") return null;
      const status = context.getValue();
      const config = statusBadgeConfig[status];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hs,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(_r, { variant: "outline", className: `rounded-20! ${config.bgColor} ${config.textColor}`, children: config.label })
        }
      );
    }
  }), [currentStatusFilter]);
  const createStatusDateColumn = useCallback$2((statusFilter) => ({
    id: STATUS_DATE_COLUMN_ID,
    accessorFn: (row) => getStatusDate(row, statusFilter),
    enableSorting: true,
    size: STATUS_DATE_COLUMN_SIZE,
    header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ca, { column, title: getStatusColumnHeader(statusFilter) }),
    cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Hs,
      {
        context,
        viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusDateCell, { value: context.getValue() })
      }
    )
  }), []);
  const columns = useMemo$1(() => {
    const [idColumn, ...restColumns] = staticColumns;
    const baseColumns = [idColumn, statusColumn, ...restColumns];
    if (currentStatusFilter === "all") {
      return baseColumns;
    }
    return [...baseColumns, createStatusDateColumn(currentStatusFilter)];
  }, [staticColumns, statusColumn, createStatusDateColumn, currentStatusFilter]);
  return { columns };
};
const ExpenseEmptyState = ({ statusFilter }) => {
  const config = getEmptyStateForStatus(statusFilter);
  const { iconName, useCustomIcon, title, description } = config;
  const customIconComponent = useCustomIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-9 text-exp-neutral-100" }) : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      iconName,
      iconComponent: customIconComponent,
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
  const handleSearch = useCallback$1(
    (searchValue) => {
      onSearch(searchValue);
    },
    [onSearch]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    On,
    {
      value,
      onChange: handleChange,
      onSearch: handleSearch,
      placeholder,
      debounceTime: 300,
      className: "w-64"
    }
  );
};
const { useCallback, useMemo, useRef, useState } = await importShared("react");
const DEFAULT_SORTING = [{ id: "expenseDate", desc: true }];
const ExpensesList = () => {
  const navigate = useNavigate();
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState(DEFAULT_SORTING);
  const [searchValue, setSearchValue] = useState("");
  const skipSearchResetRef = useRef(false);
  const currentStatusFilter = useMemo(() => {
    const statusFilter = columnFilters.find((filter) => filter.id === "status");
    return (statusFilter == null ? void 0 : statusFilter.value) ?? "all";
  }, [columnFilters]);
  const queryParams = useMemo(() => {
    var _a, _b;
    return {
      status: currentStatusFilter,
      search: searchValue || void 0,
      sortBy: ((_a = sorting[0]) == null ? void 0 : _a.id) || "updatedAt",
      sortOrder: ((_b = sorting[0]) == null ? void 0 : _b.desc) ? "desc" : "asc"
    };
  }, [currentStatusFilter, searchValue, sorting]);
  const { data: expenses = [], isFetching } = useExpensesList(queryParams);
  const { columns } = useExpensesColumns({ currentStatusFilter });
  const handleColumnFiltersChange = useCallback(
    (updater) => {
      setColumnFilters((prev) => {
        var _a, _b;
        const newFilters = typeof updater === "function" ? updater(prev) : updater;
        const prevStatus = (_a = prev.find((f) => f.id === "status")) == null ? void 0 : _a.value;
        const newStatus = (_b = newFilters.find((f) => f.id === "status")) == null ? void 0 : _b.value;
        const statusChanged = prevStatus !== newStatus;
        if (statusChanged && !skipSearchResetRef.current) {
          setSearchValue("");
        }
        skipSearchResetRef.current = false;
        const isNavigatingToAll = prevStatus !== void 0 && newStatus === void 0;
        if (isNavigatingToAll) {
          setSorting(
            (currentSorting) => {
              var _a2;
              return ((_a2 = currentSorting[0]) == null ? void 0 : _a2.id) === STATUS_DATE_COLUMN_ID ? DEFAULT_SORTING : currentSorting;
            }
          );
        }
        return newFilters;
      });
    },
    []
  );
  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
  }, []);
  const handleSearch = useCallback((searchId) => {
    const trimmedId = searchId.trim();
    if (trimmedId && currentStatusFilter !== "all") {
      skipSearchResetRef.current = true;
      setColumnFilters((prev) => prev.filter((filter) => filter.id !== "status"));
    }
    setSearchValue(trimmedId);
  }, [currentStatusFilter]);
  const handleRowClick = useCallback((row) => {
    console.log("Row clicked:", row.original.id);
  }, []);
  const handleNewExpense = useCallback((e) => {
    e == null ? void 0 : e.preventDefault();
    navigate(RoutePaths.ExpensesNew);
  }, [navigate]);
  const handleNewMileageTrip = useCallback(() => {
    navigate(RoutePaths.ExpensesNewMileageTrip);
  }, [navigate]);
  const handleNewMileagePeriod = useCallback(() => {
    navigate(RoutePaths.ExpensesNewMileagePeriod);
  }, [navigate]);
  const renderToolbar = (table) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Sa, { table, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ra,
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
      }
    ) })
  ] });
  const customLoadingState = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sn, { className: "size-8 text-exp-primary-blue-600" }),
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
        La,
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
      Ls,
      {
        columns,
        data: expenses,
        getRowId: (row) => `${row.expenseType}-${row.status}-${row.id}`,
        enablePagination: true,
        enableSorting: true,
        enableFiltering: true,
        pageSize: 25,
        sorting,
        onSortingChange: setSorting,
        columnFilters,
        onColumnFiltersChange: handleColumnFiltersChange,
        isLoading: isFetching,
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
  ExpensesList as E
};

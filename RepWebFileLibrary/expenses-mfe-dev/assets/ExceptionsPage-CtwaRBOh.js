var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { aB as isRecord, aJ as isWholeNumber, aK as unexpected, aL as isId, aM as isOptionalString, aN as queryOptions, a6 as keepPreviousData, G as queryKeys, H as apiClient, aO as EXCEPTION_ENDPOINTS, aP as readOrReport, C as useQueryClient, a5 as useAppQuery, ah as useErrorSurface, aQ as exceptionsCountQueryOptions, aG as formatDate, v as jsxRuntimeExports, au as je, ae as Icon, aR as isExpenseStatus, a4 as Ts, aS as TOOLTIP_DELAY_TRUNCATED_TEXT, aT as m, a8 as ts, af as Cr, an as ir, aU as useQuery, aV as to, av as Tt, aW as TOOLTIP_DELAY_QUICK, aX as no, aw as zt, ax as Lt, aY as ro, aZ as BASE_SYSTEM_FOOTER_COLLISION_PADDING, a_ as ci, a$ as fi, ak as DataLoadError, aj as Mi, al as ns } from "./__federation_expose_Mount-D9OFjWT1.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-B8P9v0YU.js";
function toEmployee(value) {
  if (!isRecord(value)) return null;
  const { id, name, email } = value;
  if (typeof id !== "string" || typeof name !== "string" || !isOptionalString(email)) return null;
  return { id, name, email: email ?? null };
}
__name(toEmployee, "toEmployee");
function toRow(value) {
  if (!isRecord(value)) return null;
  const employee = toEmployee(value.employee);
  const { id, businessId, logicalCompanyId, logicalCompanyName, physicalCompanyId, physicalCompanyName } = value;
  const { detectedOn, description, status, formType } = value;
  if (!employee || !isId(id) || typeof businessId !== "string" || !isId(logicalCompanyId) || typeof logicalCompanyName !== "string" || !isId(physicalCompanyId) || typeof physicalCompanyName !== "string" || !isOptionalString(detectedOn) || !isOptionalString(description) || typeof status !== "string" || !isOptionalString(formType)) {
    return null;
  }
  return {
    id,
    businessId,
    logicalCompanyId,
    logicalCompanyName,
    physicalCompanyId,
    physicalCompanyName,
    employee,
    detectedOn: detectedOn ?? null,
    description: description ?? null,
    status,
    formType: formType ?? null
  };
}
__name(toRow, "toRow");
function toCompanyOption(value) {
  if (!isRecord(value)) return null;
  const { logicalCompanyId, logicalCompanyName, physicalCompanyName, count } = value;
  if (!isId(logicalCompanyId) || typeof logicalCompanyName !== "string" || typeof physicalCompanyName !== "string" || !isWholeNumber(count, 1)) {
    return null;
  }
  return { logicalCompanyId, logicalCompanyName, physicalCompanyName, count };
}
__name(toCompanyOption, "toCompanyOption");
function toEvery(items, toItem, answer) {
  return items.map((item) => {
    const read = toItem(item);
    if (read === null) throw unexpected(answer);
    return read;
  });
}
__name(toEvery, "toEvery");
function toExceptionsPage(data) {
  if (!isRecord(data) || !Array.isArray(data.results) || !isWholeNumber(data.totalObjects, 0) || !isWholeNumber(data.pageNumber, 1) || !isWholeNumber(data.pageSize, 1) || !isWholeNumber(data.totalPages, 0)) {
    throw unexpected("exceptions list");
  }
  return {
    results: toEvery(data.results, toRow, "exceptions list"),
    totalObjects: data.totalObjects,
    pageNumber: data.pageNumber,
    pageSize: data.pageSize,
    totalPages: data.totalPages
  };
}
__name(toExceptionsPage, "toExceptionsPage");
function toExceptionCompanyOptions(data) {
  if (!Array.isArray(data)) throw unexpected("exceptions filter options");
  return toEvery(data, toCompanyOption, "exceptions filter options");
}
__name(toExceptionCompanyOptions, "toExceptionCompanyOptions");
async function fetchExceptions({
  pageNumber,
  pageSize,
  sortBy,
  sortOrder,
  logicalCompanyId,
  search
}) {
  const params = { pageNumber, pageSize, sortBy, sortOrder, logicalCompanyId, search };
  const { data } = await apiClient.get(EXCEPTION_ENDPOINTS.GET_EXCEPTIONS.build(), { params });
  return readOrReport(toExceptionsPage, data);
}
__name(fetchExceptions, "fetchExceptions");
async function fetchExceptionCompanyOptions() {
  const { data } = await apiClient.get(EXCEPTION_ENDPOINTS.GET_FILTER_OPTIONS.build());
  return readOrReport(toExceptionCompanyOptions, data);
}
__name(fetchExceptionCompanyOptions, "fetchExceptionCompanyOptions");
const exceptionsListQueryOptions = /* @__PURE__ */ __name((params) => queryOptions({
  queryKey: queryKeys.exceptions.list(params),
  queryFn: /* @__PURE__ */ __name(() => fetchExceptions(params), "queryFn"),
  placeholderData: keepPreviousData,
  // My Expenses and Approvals keep their pages fresh for a minute too
  staleTime: 60 * 1e3
}), "exceptionsListQueryOptions");
const exceptionCompanyOptionsQueryOptions = /* @__PURE__ */ __name(() => queryOptions({
  queryKey: queryKeys.exceptions.filterOptions(),
  queryFn: fetchExceptionCompanyOptions,
  // Failures surface as a toast, and the shared "Unable to load all data" would not say what failed
  meta: { errorCopy: { fallback: "Failed to load logical companies. Please try again later." } }
}), "exceptionCompanyOptionsQueryOptions");
var ExceptionsSortField = /* @__PURE__ */ ((ExceptionsSortField2) => {
  ExceptionsSortField2["DetectedOn"] = "detectedOn";
  return ExceptionsSortField2;
})(ExceptionsSortField || {});
const EXCEPTIONS_LIST_COPY = {
  allCompanies: "All logical companies",
  companyFilterName: "Logical company filter",
  filterDisabledDuringSearch: "Logical company filter is disabled during search",
  searchName: "Search by Expense ID",
  searchPlaceholder: "Search expense by ID...",
  // No exceptions, or none left for the picked company
  noRows: "No results to display",
  // An Expense ID that matches nothing
  noSearchMatch: "No results found",
  loading: "Loading",
  searching: "Searching",
  loadError: "Failed to load exceptions. Please try again later.",
  tryAgain: "Try Again",
  moveToDraft: "Move to Draft"
};
const DEFAULT_PAGE_SIZE = 20;
const COMPANY_FILTER_VISIBLE_ROWS = 6;
const DETECTED_ON_COLUMN_ID = "detectedOn";
const MISSING_VALUE_INDICATOR = "-";
const INITIAL_EXCEPTIONS_LIST_STATE = {
  sortOrder: "desc",
  pageIndex: 0,
  company: null,
  search: ""
};
function exceptionsListReducer(state, action) {
  var _a, _b;
  switch (action.type) {
    case "sortOrderChanged":
      return action.sortOrder === state.sortOrder ? state : { ...state, sortOrder: action.sortOrder, pageIndex: 0 };
    case "pageChanged":
      return action.pageIndex === state.pageIndex ? state : { ...state, pageIndex: action.pageIndex };
    case "companyChanged":
      return ((_a = action.company) == null ? void 0 : _a.logicalCompanyId) === ((_b = state.company) == null ? void 0 : _b.logicalCompanyId) ? state : { ...state, company: action.company, pageIndex: 0 };
    case "searchChanged": {
      const search = action.search.trim();
      return search === state.search ? state : { ...state, search, pageIndex: 0 };
    }
  }
}
__name(exceptionsListReducer, "exceptionsListReducer");
function toListParams({ sortOrder, pageIndex, company, search }) {
  const params = {
    pageNumber: pageIndex + 1,
    pageSize: DEFAULT_PAGE_SIZE,
    sortBy: ExceptionsSortField.DetectedOn,
    sortOrder
  };
  if (search) return { ...params, search };
  if (company) return { ...params, logicalCompanyId: company.logicalCompanyId };
  return params;
}
__name(toListParams, "toListParams");
function servedPageIndex({ pageNumber, totalPages }) {
  return Math.min(pageNumber, Math.max(totalPages, 1)) - 1;
}
__name(servedPageIndex, "servedPageIndex");
const { useCallback: useCallback$2, useEffect, useMemo, useReducer } = await importShared("react");
const EMPTY_ROWS = [];
function useExceptionsList() {
  const queryClient = useQueryClient();
  const [state, dispatch] = useReducer(exceptionsListReducer, INITIAL_EXCEPTIONS_LIST_STATE);
  const params = useMemo(() => toListParams(state), [state]);
  const query = useAppQuery(exceptionsListQueryOptions(params));
  const { data, isPending, isPlaceholderData } = query;
  const response = isPlaceholderData ? void 0 : data;
  const rows = (response == null ? void 0 : response.results) ?? EMPTY_ROWS;
  const failure = useErrorSurface(query, {
    fallback: EXCEPTIONS_LIST_COPY.loadError,
    canRenderInPlace: rows.length === 0
  });
  const isSearching = state.search !== "";
  const isUnfiltered = !isSearching && state.company === null;
  if (response) {
    const pageIndex = servedPageIndex(response);
    if (pageIndex !== state.pageIndex) dispatch({ type: "pageChanged", pageIndex });
  }
  const unfilteredTotal = isUnfiltered ? response == null ? void 0 : response.totalObjects : void 0;
  useEffect(() => {
    if (unfilteredTotal === void 0) return;
    const { queryKey } = exceptionsCountQueryOptions;
    if (queryClient.getQueryData(queryKey) === unfilteredTotal) return;
    void queryClient.invalidateQueries({ queryKey, exact: true }, { cancelRefetch: false });
  }, [queryClient, unfilteredTotal]);
  const sorting = useMemo(
    () => [{ id: DETECTED_ON_COLUMN_ID, desc: state.sortOrder === "desc" }],
    [state.sortOrder]
  );
  const pagination = useMemo(
    () => ({ pageIndex: state.pageIndex, pageSize: DEFAULT_PAGE_SIZE }),
    [state.pageIndex]
  );
  const onSortingChange = useCallback$2((updater) => {
    var _a;
    const next = typeof updater === "function" ? updater(sorting) : updater;
    dispatch({ type: "sortOrderChanged", sortOrder: ((_a = next[0]) == null ? void 0 : _a.desc) ? "desc" : "asc" });
  }, [sorting]);
  const onPaginationChange = useCallback$2((updater) => {
    const next = typeof updater === "function" ? updater(pagination) : updater;
    dispatch({ type: "pageChanged", pageIndex: next.pageIndex });
  }, [pagination]);
  const onCompanyChange = useCallback$2((company) => {
    dispatch({ type: "companyChanged", company });
  }, []);
  const onSearch = useCallback$2((search) => {
    dispatch({ type: "searchChanged", search });
  }, []);
  return {
    state,
    rows,
    totalObjects: (data == null ? void 0 : data.totalObjects) ?? 0,
    totalPages: (data == null ? void 0 : data.totalPages) ?? 0,
    hasData: data !== void 0,
    isLoading: isPending || isPlaceholderData,
    isSearching,
    hasNoExceptions: isUnfiltered && (response == null ? void 0 : response.totalObjects) === 0,
    failure,
    sorting,
    pagination,
    onSortingChange,
    onPaginationChange,
    onCompanyChange,
    onSearch
  };
}
__name(useExceptionsList, "useExceptionsList");
function formatCompanyLabel({ logicalCompanyName, physicalCompanyName }) {
  return [logicalCompanyName, physicalCompanyName].map((name) => name.trim()).filter(Boolean).join(" - ") || MISSING_VALUE_INDICATOR;
}
__name(formatCompanyLabel, "formatCompanyLabel");
function formatDetectedOn(detectedOn) {
  return detectedOn && formatDate(detectedOn) || MISSING_VALUE_INDICATOR;
}
__name(formatDetectedOn, "formatDetectedOn");
function displayText(value) {
  return (value == null ? void 0 : value.trim()) || MISSING_VALUE_INDICATOR;
}
__name(displayText, "displayText");
const ExceptionActionsCell = /* @__PURE__ */ __name(({ businessId }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    je,
    {
      type: "button",
      variant: "ghost",
      iconPosition: "center",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: "size-4 svg-color-inherit" }),
      className: "p-1!",
      "aria-label": `${EXCEPTIONS_LIST_COPY.tryAgain} for expense ${businessId}`,
      "data-testid": `exceptions-try-again-button-${businessId}`
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    je,
    {
      type: "button",
      variant: "secondary",
      size: "sm",
      "aria-label": `${EXCEPTIONS_LIST_COPY.moveToDraft} for expense ${businessId}`,
      "data-testid": `exceptions-move-to-draft-button-${businessId}`,
      children: EXCEPTIONS_LIST_COPY.moveToDraft
    }
  )
] }), "ExceptionActionsCell");
const StatusCell = /* @__PURE__ */ __name(({ status }) => {
  const normalized = status.trim().toLowerCase();
  if (isExpenseStatus(normalized)) return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status: normalized });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800", children: status.trim() || MISSING_VALUE_INDICATOR });
}, "StatusCell");
const TruncatedCell = /* @__PURE__ */ __name(({ text, widthClassName }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Ts,
  {
    className: m("block text-sm font-normal text-exp-grey-800", widthClassName),
    variant: "light",
    size: "sm",
    tooltipSide: "bottom",
    tooltipAlign: "start",
    showArrow: false,
    delayDuration: TOOLTIP_DELAY_TRUNCATED_TEXT,
    children: text
  }
), "TruncatedCell");
const EXCEPTIONS_COLUMNS = [
  {
    id: "businessId",
    enableSorting: false,
    header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ts, { column, title: "Expense ID" }), "header"),
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-600", children: row.original.businessId }), "cell")
  },
  {
    id: "logicalCompany",
    enableSorting: false,
    header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ts, { column, title: "Logical Company" }), "header"),
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(TruncatedCell, { text: formatCompanyLabel(row.original), widthClassName: "max-w-60" }), "cell")
  },
  {
    id: "employee",
    enableSorting: false,
    header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ts, { column, title: "Employee" }), "header"),
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-exp-grey-700", children: displayText(row.original.employee.name) }), "cell")
  },
  {
    id: DETECTED_ON_COLUMN_ID,
    // Sorting happens on the server, but the table offers it only on a column with an accessor
    accessorKey: "detectedOn",
    enableSorting: true,
    header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ts, { column, title: "Detected On" }), "header"),
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-exp-grey-800", children: formatDetectedOn(row.original.detectedOn) }), "cell")
  },
  {
    id: "description",
    enableSorting: false,
    header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ts, { column, title: "Description" }), "header"),
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(TruncatedCell, { text: displayText(row.original.description), widthClassName: "max-w-80" }), "cell")
  },
  {
    id: "status",
    enableSorting: false,
    header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ts, { column, title: "Status" }), "header"),
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCell, { status: row.original.status }), "cell")
  },
  {
    id: "actions",
    enableSorting: false,
    header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ts, { column, title: "Actions" }), "header"),
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExceptionActionsCell, { businessId: row.original.businessId }), "cell")
  }
];
const { useCallback: useCallback$1, useState: useState$1 } = await importShared("react");
const SEARCH_DELAY_MS = 300;
const ExceptionsSearch = /* @__PURE__ */ __name(({ onSearch }) => {
  const [text, setText] = useState$1("");
  const handleChange = useCallback$1((event) => setText(event.target.value), []);
  const handleKeyDown = useCallback$1((event) => {
    if (event.key !== "Enter" || event.nativeEvent.isComposing || !(event.target instanceof HTMLInputElement)) return;
    event.preventDefault();
    onSearch(text);
  }, [onSearch, text]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onKeyDown: handleKeyDown, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cr,
    {
      value: text,
      onChange: handleChange,
      onSearch,
      debounceTime: SEARCH_DELAY_MS,
      placeholder: EXCEPTIONS_LIST_COPY.searchPlaceholder,
      "aria-label": EXCEPTIONS_LIST_COPY.searchName,
      className: "w-64",
      "data-testid": "exceptions-search-input"
    }
  ) });
}, "ExceptionsSearch");
const LoadingStatus = /* @__PURE__ */ __name(({ label, className, spinnerClassName }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: m("flex items-center text-sm text-exp-neutral-600", className), children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(ir, { "aria-label": label, className: m("text-exp-primary-blue-600", spinnerClassName) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: label })
] }), "LoadingStatus");
const { useCallback, useRef, useState } = await importShared("react");
const ALL_COMPANIES = "all";
const TRIGGER_CLASS = [
  "h-8 w-80 justify-between gap-2 rounded-md px-2 py-1.5 text-sm font-normal text-exp-grey-800",
  "aria-disabled:cursor-not-allowed aria-disabled:border-exp-neutral-40 aria-disabled:bg-exp-neutral-10",
  "aria-disabled:opacity-50 aria-disabled:hover:border-exp-neutral-40"
].join(" ");
const OPTION_CLASS = "h-8 data-[state=checked]:bg-exp-primary-blue-50";
const MENU_STYLE = {
  width: "var(--radix-dropdown-menu-trigger-width)",
  maxHeight: `min(calc(${COMPANY_FILTER_VISIBLE_ROWS} * 2rem + 0.5rem + 2px), var(--radix-dropdown-menu-content-available-height))`
};
const ignorePress = /* @__PURE__ */ __name((event) => event.preventDefault(), "ignorePress");
const toSelectedCompany = /* @__PURE__ */ __name((option) => ({
  logicalCompanyId: option.logicalCompanyId,
  label: formatCompanyLabel(option)
}), "toSelectedCompany");
const CompanyOption = /* @__PURE__ */ __name(({ option }) => {
  const label = formatCompanyLabel(option);
  const exceptions = option.count === 1 ? "exception" : "exceptions";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    fi,
    {
      value: String(option.logicalCompanyId),
      textValue: label,
      "aria-label": `${label}, ${option.count} ${exceptions}`,
      className: OPTION_CLASS,
      "data-testid": `exceptions-company-filter-option-${option.logicalCompanyId}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ts,
          {
            className: "block min-w-0 flex-1",
            variant: "light",
            size: "sm",
            tooltipSide: "top",
            tooltipAlign: "start",
            showArrow: false,
            delayDuration: TOOLTIP_DELAY_TRUNCATED_TEXT,
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 tabular-nums text-exp-grey-600", children: option.count })
      ]
    }
  );
}, "CompanyOption");
const LogicalCompanyFilter = /* @__PURE__ */ __name(({ value, onChange, disabled = false, disabledReason }) => {
  const triggerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isReasonOpen, setIsReasonOpen] = useState(false);
  const { data: options, isPending, refetch } = useQuery({ ...exceptionCompanyOptionsQueryOptions(), enabled: false });
  const explainsDisabled = disabled && Boolean(disabledReason);
  const [hadReason, setHadReason] = useState(explainsDisabled);
  if (hadReason !== explainsDisabled) {
    setHadReason(explainsDisabled);
    setIsReasonOpen(false);
  }
  if (disabled && isOpen) setIsOpen(false);
  const handleOpenChange = useCallback((open) => {
    if (open && disabled) return;
    setIsOpen(open);
    if (open) void refetch({ cancelRefetch: false });
  }, [disabled, refetch]);
  const handleValueChange = useCallback((next) => {
    if (next === ALL_COMPANIES) {
      onChange(null);
      return;
    }
    const option = options == null ? void 0 : options.find(({ logicalCompanyId }) => String(logicalCompanyId) === next);
    if (option) onChange(toSelectedCompany(option));
  }, [onChange, options]);
  const handlePress = explainsDisabled ? ignorePress : void 0;
  const handleReasonPointerDownOutside = useCallback((event) => {
    var _a;
    if (event.target instanceof Node && ((_a = triggerRef.current) == null ? void 0 : _a.contains(event.target))) event.preventDefault();
  }, []);
  const label = (value == null ? void 0 : value.label) ?? EXCEPTIONS_LIST_COPY.allCompanies;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(to, { open: isOpen, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Tt,
      {
        open: explainsDisabled && isReasonOpen,
        onOpenChange: setIsReasonOpen,
        delayDuration: TOOLTIP_DELAY_QUICK,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(no, { asChild: true, disabled: disabled && !explainsDisabled, children: /* @__PURE__ */ jsxRuntimeExports.jsx(zt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            je,
            {
              ref: triggerRef,
              type: "button",
              variant: "field",
              className: TRIGGER_CLASS,
              "aria-disabled": explainsDisabled || void 0,
              "aria-label": `${EXCEPTIONS_LIST_COPY.companyFilterName}: ${label}`,
              onPointerDown: handlePress,
              onClick: handlePress,
              "data-testid": "exceptions-company-filter",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Ts,
                  {
                    className: "block min-w-0 flex-1 text-left",
                    variant: "light",
                    size: "sm",
                    tooltipSide: "top",
                    tooltipAlign: "start",
                    showArrow: false,
                    delayDuration: TOOLTIP_DELAY_TRUNCATED_TEXT,
                    tooltipDisabled: explainsDisabled,
                    children: label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "flex shrink-0 text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "chevron-down", className: "size-4" }) })
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Lt,
            {
              variant: "light",
              size: "sm",
              side: "bottom",
              align: "start",
              showArrow: false,
              onPointerDownOutside: handleReasonPointerDownOutside,
              children: disabledReason
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ro,
      {
        align: "start",
        collisionPadding: BASE_SYSTEM_FOOTER_COLLISION_PADDING,
        style: MENU_STYLE,
        "data-testid": "exceptions-company-filter-menu",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ci,
            {
              value: value ? String(value.logicalCompanyId) : ALL_COMPANIES,
              onValueChange: handleValueChange,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  fi,
                  {
                    value: ALL_COMPANIES,
                    className: OPTION_CLASS,
                    "data-testid": "exceptions-company-filter-option-all",
                    children: EXCEPTIONS_LIST_COPY.allCompanies
                  }
                ),
                options == null ? void 0 : options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyOption, { option }, option.logicalCompanyId))
              ]
            }
          ),
          isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingStatus, { label: EXCEPTIONS_LIST_COPY.loading, className: "h-8 gap-2 px-2", spinnerClassName: "size-4" })
        ]
      }
    )
  ] });
}, "LogicalCompanyFilter");
const getRowId = /* @__PURE__ */ __name((row) => String(row.id), "getRowId");
const TABLE_STYLES = {
  // DataTable gives N-10 only to clickable rows, and these open nothing
  bodyRow: "hover:bg-exp-neutral-10",
  pagination: { selectContentWidthMode: "trigger" }
};
const ExceptionsList = /* @__PURE__ */ __name(() => {
  const {
    state,
    rows,
    totalObjects,
    totalPages,
    hasData,
    isLoading,
    isSearching,
    hasNoExceptions,
    failure,
    sorting,
    pagination,
    onSortingChange,
    onPaginationChange,
    onCompanyChange,
    onSearch
  } = useExceptionsList();
  const renderToolbar = /* @__PURE__ */ __name((table) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ns, { table, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LogicalCompanyFilter,
      {
        value: state.company,
        onChange: onCompanyChange,
        disabled: isSearching || hasNoExceptions,
        disabledReason: isSearching ? EXCEPTIONS_LIST_COPY.filterDisabledDuringSearch : void 0
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExceptionsSearch, { onSearch }) })
  ] }), "renderToolbar");
  const loadingState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    LoadingStatus,
    {
      label: isSearching ? EXCEPTIONS_LIST_COPY.searching : EXCEPTIONS_LIST_COPY.loading,
      className: "justify-center gap-3",
      spinnerClassName: "size-8"
    }
  );
  const emptyState = failure.hasFailed ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataLoadError, { surface: failure }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full justify-center items-center flex p-4", "data-testid": "exceptions-empty-state", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm italic text-exp-grey-600", children: isSearching ? EXCEPTIONS_LIST_COPY.noSearchMatch : EXCEPTIONS_LIST_COPY.noRows }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", "data-testid": "exceptions-table", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Mi,
    {
      columns: EXCEPTIONS_COLUMNS,
      data: rows,
      getRowId,
      enablePagination: hasData,
      enableSorting: true,
      manualPagination: true,
      manualSorting: true,
      pageCount: totalPages,
      rowCount: totalObjects,
      pagination,
      onPaginationChange,
      sorting,
      onSortingChange,
      isLoading,
      loadingState,
      styles: TABLE_STYLES,
      toolbar: renderToolbar,
      emptyState
    }
  ) });
}, "ExceptionsList");
const ExceptionsPage = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sync-problem", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Exceptions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Monitor and resolve expense sync issues" })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ExceptionsList, {})
] }), "ExceptionsPage");
export {
  ExceptionsPage as default
};

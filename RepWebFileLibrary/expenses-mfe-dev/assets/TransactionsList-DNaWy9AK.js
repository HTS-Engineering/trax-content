var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { c as createLucideIcon, q as h, b as apiClient, d as devError, Z as Zs, f as Mt, E as Et, P as Pt, Q as wt, R as zt, U as Ue, _ as yt, Y as Yn, h as ei, $ as $a, V as Vr, v as $r, w as Tr, x as zr, B as Br, n as ni, o as oi, r as rs, l as ls, A as Kr, T as Ta, z as za } from "./configuration-CaBH14y1.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
import { t as useSearchParams, d as useLocation, q as queryKeys, s as keepPreviousData, F as RECONCILIATION_ENDPOINTS, p as formatExpenseDate, i as useQueryClient, j as useMutation, n as formatAmountWithCurrency, G as EMPTY_CURRENCY_SYMBOL, r as useQuery, f as useCompanyStore, u as useErrorToast } from "./formatters-Dvm414Po.js";
import { b as getExpenseErrorMessage, f as ExpenseFormHistoryLog, h as EtlErrorBanner, E as ExpensePreview, i as isMileageTripData, M as MileageTripPreview, d as isMileagePeriodData, e as MileagePeriodPreview, k as useExpenseItemForm } from "./CostAllocationSection-C8xQU--T.js";
import { d as useExpenseItem, i as isExpenseItemSubmitted, e as isSubmittedPreviewRenderable, b as isRegularExpense, c as isMileageExpense } from "./TaxTypeSearchSelect-BWWNgvpC.js";
import { b as buildHeaderFromExpenseItem, E as ExpenseDialogHeader, P as PreviewLoadError } from "./ExpenseDialogHeader-Wn8ByKmN.js";
import { u as useInfiniteQuery } from "./useInfiniteQuery-BZ_hXYbH.js";
import { t as toastApiError, T as TOOLTIP_DELAY_TRUNCATED_TEXT } from "./schemas-D_ZTVCQ9.js";
import { a as ExpenseForm, M as MileageTripForm, c as MileagePeriodForm, b as buildExpenseItemFormDialogProps, F as FormPageDialog, E as ExpenseItemFormBody } from "./FormPageDialog-D3oCcHvk.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-CGQZd07D.js";
import { C as CircleAlert } from "./circle-alert-D6hMjTs2.js";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
const EllipsisVertical = createLucideIcon("ellipsis-vertical", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
];
const Link2Off = createLucideIcon("link-2-off", __iconNode$1);
const __iconNode = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
];
const Link2 = createLucideIcon("link-2", __iconNode);
var CardholderTransactionTab = /* @__PURE__ */ ((CardholderTransactionTab2) => {
  CardholderTransactionTab2["Unmatched"] = "unmatched";
  CardholderTransactionTab2["Matched"] = "matched";
  CardholderTransactionTab2["Flagged"] = "flagged";
  return CardholderTransactionTab2;
})(CardholderTransactionTab || {});
const ALL_COMPANIES_SELECTION = { type: "all" };
var TransactionStatus = /* @__PURE__ */ ((TransactionStatus2) => {
  TransactionStatus2["Matched"] = "matched";
  TransactionStatus2["Unmatched"] = "unmatched";
  TransactionStatus2["Reconciled"] = "reconciled";
  TransactionStatus2["Flagged"] = "flagged";
  return TransactionStatus2;
})(TransactionStatus || {});
const TRANSACTION_STATUSES = new Set(Object.values(TransactionStatus));
const parseTransactionStatus = /* @__PURE__ */ __name((value) => value && TRANSACTION_STATUSES.has(value) ? value : null, "parseTransactionStatus");
var TransactionStatusTab = /* @__PURE__ */ ((TransactionStatusTab2) => {
  TransactionStatusTab2["All"] = "all";
  TransactionStatusTab2["Unmatched"] = "unmatched";
  TransactionStatusTab2["Matched"] = "matched";
  TransactionStatusTab2["Reconciled"] = "reconciled";
  return TransactionStatusTab2;
})(TransactionStatusTab || {});
const { useMemo: useMemo$a } = await importShared("react");
const TAB_ORDER = [
  { tab: CardholderTransactionTab.Unmatched, label: "Unmatched" },
  { tab: CardholderTransactionTab.Matched, label: "Matched" },
  { tab: CardholderTransactionTab.Flagged, label: "Flagged" }
];
const countFor = /* @__PURE__ */ __name((tab, summary) => {
  if (!summary) return 0;
  const counts = {
    [CardholderTransactionTab.Unmatched]: summary.unmatched,
    [CardholderTransactionTab.Matched]: summary.matched,
    [CardholderTransactionTab.Flagged]: summary.flagged
  };
  return counts[tab];
}, "countFor");
const CardholderTransactionTabs = /* @__PURE__ */ __name(({
  currentTab,
  summary,
  onChange
}) => {
  const tabs = useMemo$a(
    () => TAB_ORDER.map(({ tab, label }) => ({ tab, label, count: countFor(tab, summary) })),
    [summary]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "group", "aria-label": "Transaction status filter", className: "flex items-center gap-2", children: tabs.map(({ tab, label, count }) => {
    const isActive = tab === currentTab;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "aria-pressed": isActive,
        onClick: /* @__PURE__ */ __name(() => onChange(tab), "onClick"),
        className: h(
          "rounded-full px-3 py-1 text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300",
          isActive ? "bg-exp-primary-blue-600 text-white" : "border border-exp-neutral-30 bg-exp-neutral-10 text-exp-neutral-600 hover:bg-exp-primary-blue-50"
        ),
        children: [
          label,
          " (",
          count,
          ")"
        ]
      },
      tab
    );
  }) });
}, "CardholderTransactionTabs");
const { useCallback: useCallback$7, useEffect: useEffect$5, useLayoutEffect: useLayoutEffect$2, useRef: useRef$6, useState: useState$2 } = await importShared("react");
const useInfiniteScroll = /* @__PURE__ */ __name(({
  hasNextPage,
  isLoading,
  onLoadMore,
  rootRef,
  rootMargin = "0px"
}) => {
  const [sentinel, setSentinel] = useState$2(null);
  const sentinelRef = useCallback$7((node) => setSentinel(node), []);
  const onLoadMoreRef = useRef$6(onLoadMore);
  useLayoutEffect$2(() => {
    onLoadMoreRef.current = onLoadMore;
  });
  useEffect$5(() => {
    if (!sentinel || !hasNextPage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !isLoading) {
          onLoadMoreRef.current();
        }
      },
      // Read the root at effect time: the ref is populated after the first paint.
      { root: (rootRef == null ? void 0 : rootRef.current) ?? null, rootMargin, threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sentinel, hasNextPage, isLoading, rootRef, rootMargin]);
  return sentinelRef;
}, "useInfiniteScroll");
const { useCallback: useCallback$6, useMemo: useMemo$9 } = await importShared("react");
const URL_PARAM_TAB$1 = "tab";
const URL_PARAM_SORT$1 = "sort";
const SORT_COLUMN_ID$1 = "transactionDate";
const DEFAULT_TAB$1 = CardholderTransactionTab.Unmatched;
const DEFAULT_SORT_ORDER$1 = "desc";
const VALID_TABS$1 = new Set(Object.values(CardholderTransactionTab));
const isValidTab$1 = /* @__PURE__ */ __name((value) => value !== null && VALID_TABS$1.has(value), "isValidTab$1");
const useCardholderTransactionsUrlFilters = /* @__PURE__ */ __name(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const preservedState = location.state;
  const urlTab = searchParams.get(URL_PARAM_TAB$1);
  const urlSort = searchParams.get(URL_PARAM_SORT$1);
  const currentTab = useMemo$9(
    () => isValidTab$1(urlTab) ? urlTab : DEFAULT_TAB$1,
    [urlTab]
  );
  const sortOrder = urlSort === "asc" ? "asc" : DEFAULT_SORT_ORDER$1;
  const sorting = useMemo$9(
    () => [{ id: SORT_COLUMN_ID$1, desc: sortOrder === "desc" }],
    [sortOrder]
  );
  const setTab = useCallback$6(
    (tab) => {
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (tab === DEFAULT_TAB$1) {
            params.delete(URL_PARAM_TAB$1);
          } else {
            params.set(URL_PARAM_TAB$1, tab);
          }
          return params;
        },
        { replace: true, state: preservedState }
      );
    },
    [setSearchParams, preservedState]
  );
  const handleSortingChange = useCallback$6(
    (updater) => {
      var _a;
      const next = typeof updater === "function" ? updater(sorting) : updater;
      const nextOrder = ((_a = next[0]) == null ? void 0 : _a.desc) ? "desc" : "asc";
      if (nextOrder === sortOrder) return;
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (nextOrder === DEFAULT_SORT_ORDER$1) {
            params.delete(URL_PARAM_SORT$1);
          } else {
            params.set(URL_PARAM_SORT$1, nextOrder);
          }
          return params;
        },
        { replace: true, state: preservedState }
      );
    },
    [sorting, sortOrder, setSearchParams, preservedState]
  );
  return { currentTab, sortOrder, sorting, setTab, handleSortingChange };
}, "useCardholderTransactionsUrlFilters");
const BANNER_TEXT = "The following transaction(s) cannot be reconciled. Resubmit the expense and update the match to resolve.";
const VALID_EXPENSE_STATUSES = /* @__PURE__ */ new Set([
  "draft",
  "submitted",
  "approved",
  "rejected",
  "cancelled"
]);
const EMPTY_PLACEHOLDER$1 = "-";
const CARDHOLDER_TRANSACTIONS_PAGE_SIZE = 20;
const parseAmount$2 = /* @__PURE__ */ __name((value, ctx) => {
  if (value == null) return null;
  const parsed = parseFloat(value);
  if (Number.isFinite(parsed)) return parsed;
  devError("Invalid cardholder transaction amount from BE", { id: ctx.id, raw: value });
  return null;
}, "parseAmount$2");
const mapCardholderTransactionItem = /* @__PURE__ */ __name((api) => {
  var _a;
  return {
    transactionId: api.transactionId,
    vendor: api.vendor,
    // BE date is Optional[datetime]; take the date portion so the calendar date
    // renders as a local date with no UTC day-shift. null/invalid -> '' -> "-".
    transactionDate: formatExpenseDate(api.date ? api.date.slice(0, 10) : void 0),
    amount: parseAmount$2(api.amount, { id: api.transactionId }),
    matchedExpenseBusinessId: api.matchedExpenseBusinessId,
    matchedExpenseFormId: ((_a = api.matchedExpenseFormId) == null ? void 0 : _a.toString()) ?? null,
    expenseStatus: api.expenseStatus
  };
}, "mapCardholderTransactionItem");
const mapCardholderTransactionsPage = /* @__PURE__ */ __name((api) => {
  var _a, _b, _c, _d;
  return {
    statusSummary: {
      unmatched: api.statusSummary.unmatched,
      matched: api.statusSummary.matched,
      flagged: api.statusSummary.flagged
    },
    totalObjects: api.totalObjects,
    pageNumber: api.pageNumber,
    pageSize: api.pageSize,
    totalPages: api.totalPages,
    results: api.results.map(mapCardholderTransactionItem),
    hasMatchableExpenses: api.hasMatchableExpenses,
    masterAccountName: (_a = api.statementInfo) == null ? void 0 : _a.masterAccountName,
    currencyCode: (_b = api.statementInfo) == null ? void 0 : _b.currencyCode,
    statementPeriod: api.statementInfo ? `${api.statementInfo.startPeriod} - ${api.statementInfo.endPeriod}` : void 0,
    reconciliationDueDate: (_c = api.statementInfo) == null ? void 0 : _c.reconciliationDueDate,
    masterAccountId: (_d = api.statementInfo) == null ? void 0 : _d.masterAccountId
  };
}, "mapCardholderTransactionsPage");
const useCardholderTransactions = /* @__PURE__ */ __name(({
  tab,
  sortOrder = "desc",
  statementId
}) => useInfiniteQuery({
  queryKey: queryKeys.cardholderTransactions.list({ tab, sortOrder, statementId }),
  initialPageParam: 1,
  queryFn: /* @__PURE__ */ __name(async ({ pageParam }) => {
    const url = RECONCILIATION_ENDPOINTS.GET_CARDHOLDER_TRANSACTIONS.build();
    const response = await apiClient.get(url, {
      // statementId scopes the list + statusSummary to one statement once the BE
      // filter lands; sent only when present (current BE ignores an unknown param).
      params: {
        tab,
        pageNumber: pageParam,
        pageSize: CARDHOLDER_TRANSACTIONS_PAGE_SIZE,
        sortOrder,
        ...statementId ? { statementId } : {}
      }
    });
    return mapCardholderTransactionsPage(response.data);
  }, "queryFn"),
  getNextPageParam: /* @__PURE__ */ __name((lastPage) => lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : void 0, "getNextPageParam"),
  staleTime: 60 * 1e3,
  // Keep the previous tab's rows + counts on screen while the next tab loads
  // (matches the AP sibling); avoids flashing (0) counts and an empty table.
  placeholderData: keepPreviousData
}), "useCardholderTransactions");
const MATCHABLE_EXPENSES_PAGE_SIZE = 20;
const parseAmount$1 = /* @__PURE__ */ __name((value, ctx) => {
  if (value == null) return null;
  if (typeof value === "number") return value;
  const parsed = parseFloat(String(value));
  if (Number.isFinite(parsed)) return parsed;
  devError("Invalid matchable expense amount from BE", {
    formId: ctx.formId,
    raw: value
  });
  return null;
}, "parseAmount$1");
const mapMatchableExpense = /* @__PURE__ */ __name((api) => ({
  id: api.formId.toString(),
  businessId: api.businessId,
  amount: parseAmount$1(api.amount, { formId: api.formId }),
  date: api.date,
  vendor: api.vendor,
  creatorName: api.creatorName,
  status: api.status,
  isMatchable: api.isMatchable,
  isExactMatch: api.isExactMatch,
  isSameAmount: api.isSameAmount
}), "mapMatchableExpense");
const mapMatchableExpensesPage = /* @__PURE__ */ __name((api) => ({
  results: api.results.map(mapMatchableExpense),
  totalObjects: api.totalObjects,
  pageNumber: api.pageNumber,
  pageSize: api.pageSize,
  totalPages: api.totalPages
}), "mapMatchableExpensesPage");
const useMatchableExpenses = /* @__PURE__ */ __name((transactionId, options) => useInfiniteQuery({
  queryKey: queryKeys.cardholderTransactions.matchableExpenses(transactionId),
  initialPageParam: 1,
  queryFn: /* @__PURE__ */ __name(async ({ pageParam }) => {
    const url = RECONCILIATION_ENDPOINTS.GET_MATCHABLE_EXPENSES.build({
      transactionId: String(transactionId)
    });
    const response = await apiClient.get(url, {
      params: {
        pageNumber: pageParam,
        pageSize: MATCHABLE_EXPENSES_PAGE_SIZE
      }
    });
    return mapMatchableExpensesPage(response.data);
  }, "queryFn"),
  getNextPageParam: /* @__PURE__ */ __name((lastPage) => lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : void 0, "getNextPageParam"),
  enabled: !!transactionId && ((options == null ? void 0 : options.enabled) ?? true),
  // staleTime is the reopen-reuse window, not a correctness lever: every real change
  // (match/unmatch/submit/delete/save-draft + the submitted-elsewhere bounce) invalidates
  // and refetches regardless, so reopening within the window reuses cache - no reload flash,
  // scroll + loaded pages kept. refetchOnReconnect off so a transient popover isn't churned
  // (and its scroll yanked) by a network blip while open.
  staleTime: 5 * 6e4,
  refetchOnReconnect: false
}), "useMatchableExpenses");
const useMatchTransaction = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({
      transactionId,
      expenseFormId
    }) => {
      const url = RECONCILIATION_ENDPOINTS.MATCH_TRANSACTION.build({
        transactionId: String(transactionId)
      });
      await apiClient.post(url, { form_id: Number(expenseFormId) });
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      Zs.success("Transaction matched", { duration: 3e3 });
      queryClient.invalidateQueries({
        queryKey: queryKeys.cardholderTransactions.all()
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      toastApiError(error, { fallback: "Failed to match. Please try again." });
    }, "onError")
  });
}, "useMatchTransaction");
const useUnmatchTransaction = /* @__PURE__ */ __name((options = {}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async (transactionId) => {
      const url = RECONCILIATION_ENDPOINTS.UNMATCH_TRANSACTION.build({ transactionId });
      await apiClient.delete(url);
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      var _a;
      Zs.success("Transaction unmatched", { duration: 3e3 });
      queryClient.invalidateQueries({ queryKey: queryKeys.cardholderTransactions.all() });
      (_a = options.onSuccess) == null ? void 0 : _a.call(options);
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      var _a;
      toastApiError(error, { fallback: "Failed to unmatch. Please try again." });
      (_a = options.onError) == null ? void 0 : _a.call(options, error);
    }, "onError")
  });
}, "useUnmatchTransaction");
const placeholder = /* @__PURE__ */ __name(() => ({
  text: EMPTY_CURRENCY_SYMBOL,
  isPlaceholder: true
}), "placeholder");
const real = /* @__PURE__ */ __name((text) => ({
  text,
  isPlaceholder: false
}), "real");
const partialNoCurrency = /* @__PURE__ */ __name((amount) => ({
  text: `- ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`,
  isPlaceholder: true
}), "partialNoCurrency");
const formatSummaryAmount = /* @__PURE__ */ __name((amount, currencyCode) => {
  if (amount == null || !Number.isFinite(amount) || amount === 0) {
    return placeholder();
  }
  if (!currencyCode) {
    return partialNoCurrency(amount);
  }
  const text = formatAmountWithCurrency(amount, currencyCode);
  return text === EMPTY_CURRENCY_SYMBOL ? placeholder() : real(text);
}, "formatSummaryAmount");
const formatTotalAmount = /* @__PURE__ */ __name((amount, currencyCode) => {
  if (amount == null || !Number.isFinite(amount)) return placeholder();
  if (!currencyCode) {
    return partialNoCurrency(amount);
  }
  const text = formatAmountWithCurrency(amount, currencyCode);
  return text === EMPTY_CURRENCY_SYMBOL ? placeholder() : real(text);
}, "formatTotalAmount");
const parseAmount = /* @__PURE__ */ __name((value, ctx) => {
  if (value == null) return 0;
  const parsed = parseFloat(value);
  if (Number.isFinite(parsed)) return parsed;
  devError("Invalid amount from BE", { id: ctx.id, raw: value });
  return 0;
}, "parseAmount");
const emptyToNull = /* @__PURE__ */ __name((value) => {
  if (value == null) return null;
  if (value === "") return null;
  return value;
}, "emptyToNull");
const mapTransactionListItem = /* @__PURE__ */ __name((api) => ({
  id: api.id,
  cardholder: api.cardholder,
  logicalCompanyName: api.logical_company_name,
  logicalCompanyId: api.logical_company_id,
  // BE sends a DateOnly string; formatExpenseDate parses it as a local date (no
  // UTC shift) and renders the design format. Invalid input -> '' -> cell shows "-".
  transactionDate: formatExpenseDate(api.date),
  vendor: api.vendor,
  amount: parseAmount(api.amount, { id: api.id }),
  matchedExpenseBusinessId: emptyToNull(api.businessId),
  matchedExpenseFormId: api.formId != null ? String(api.formId) : null,
  status: parseTransactionStatus(api.status)
}), "mapTransactionListItem");
const mapTransactionsPage = /* @__PURE__ */ __name((api) => ({
  totalObjects: api.totalObjects,
  pageNumber: api.pageNumber,
  pageSize: api.pageSize,
  totalPages: api.totalPages,
  results: api.results.map(mapTransactionListItem),
  statusSummary: {
    all: api.statusSummary.all,
    matched: api.statusSummary.matched,
    unmatched: api.statusSummary.unmatched,
    reconciled: api.statusSummary.reconciled
  }
}), "mapTransactionsPage");
const useTransactionsList = /* @__PURE__ */ __name((params, { enabled = true } = {}) => {
  const { statementId, logicalCompanyShortName, status, pageNumber, pageSize, sortOrder } = params;
  return useQuery({
    queryKey: queryKeys.transactions.list({
      statementId,
      logicalCompanyShortName,
      status,
      pageNumber,
      pageSize,
      sortOrder
    }),
    enabled: enabled && !!statementId,
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!statementId) {
        throw new Error("statementId is required");
      }
      const url = RECONCILIATION_ENDPOINTS.GET_TRANSACTIONS.build({ statementId });
      const queryParams = { pageNumber };
      if (pageSize != null) queryParams.pageSize = pageSize;
      if (sortOrder) queryParams.sortOrder = sortOrder;
      if (status) queryParams.status = status;
      if (logicalCompanyShortName) queryParams.logical_company_short_name = logicalCompanyShortName;
      const response = await apiClient.get(url, {
        params: queryParams
      });
      return mapTransactionsPage(response.data);
    }, "queryFn"),
    staleTime: 60 * 1e3,
    placeholderData: keepPreviousData
  });
}, "useTransactionsList");
const { useCallback: useCallback$5, useEffect: useEffect$4, useMemo: useMemo$8, useRef: useRef$5 } = await importShared("react");
const formatSecondLine = /* @__PURE__ */ __name((expense) => {
  var _a;
  const dateStr = formatExpenseDate(expense.date ? expense.date.slice(0, 10) : void 0);
  const creator = (_a = expense.creatorName) == null ? void 0 : _a.trim();
  return [dateStr, creator, expense.status].filter(Boolean).join(" • ");
}, "formatSecondLine");
const MatchableExpenseDropdown = /* @__PURE__ */ __name(({
  transactionId,
  currencyCode,
  disabled,
  open,
  onOpenChange,
  onView
}) => {
  const scrollRef = useRef$5(null);
  const scrollTopRef = useRef$5(0);
  const attachScroll = useCallback$5((node) => {
    scrollRef.current = node;
    if (node) node.scrollTop = scrollTopRef.current;
  }, []);
  const focusOnReopenIdRef = useRef$5(null);
  const matchTransaction = useMatchTransaction();
  const { data, isLoading, isError, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useMatchableExpenses(transactionId, { enabled: open });
  const matchableExpenses = useMemo$8(
    () => (data == null ? void 0 : data.pages.flatMap((page) => page.results)) ?? [],
    [data]
  );
  const candidateOrder = useMemo$8(
    () => matchableExpenses.map((e) => e.id).join(","),
    [matchableExpenses]
  );
  const isReorderingRefetch = isFetching && !isFetchingNextPage && !isLoading;
  const wasRefetchingRef = useRef$5(false);
  const orderBeforeRefetchRef = useRef$5(null);
  useEffect$4(() => {
    if (isReorderingRefetch) {
      if (!wasRefetchingRef.current) {
        wasRefetchingRef.current = true;
        orderBeforeRefetchRef.current = candidateOrder;
      }
    } else if (wasRefetchingRef.current) {
      wasRefetchingRef.current = false;
      if (orderBeforeRefetchRef.current !== candidateOrder) {
        scrollTopRef.current = 0;
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      }
      orderBeforeRefetchRef.current = null;
    }
  }, [isReorderingRefetch, candidateOrder]);
  const handleExpenseSelect = /* @__PURE__ */ __name((expenseId) => {
    matchTransaction.mutate(
      { transactionId, expenseFormId: expenseId },
      { onSuccess: /* @__PURE__ */ __name(() => onOpenChange(false), "onSuccess") }
    );
  }, "handleExpenseSelect");
  const handleView = /* @__PURE__ */ __name((expense) => {
    focusOnReopenIdRef.current = expense.id;
    onView == null ? void 0 : onView(expense.id, expense.status, expense.creatorName ?? null);
  }, "handleView");
  const sentinelRef = useInfiniteScroll({
    hasNextPage: !!hasNextPage,
    isLoading: isFetchingNextPage,
    onLoadMore: fetchNextPage,
    rootRef: scrollRef,
    rootMargin: "0px"
  });
  if (disabled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "aria-disabled": "true",
          tabIndex: 0,
          "aria-label": "No expenses available to match",
          className: "inline-flex cursor-not-allowed rounded text-exp-neutral-70 focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300 focus-visible:outline-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-4" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { side: "top", children: "No expenses available to match" })
    ] }) });
  }
  const rowInfo = /* @__PURE__ */ __name((expense, muted) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex w-full flex-col gap-1 p-1 text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `truncate text-sm font-bold ${muted ? "text-exp-neutral-70" : ""}`, children: expense.vendor || EMPTY_PLACEHOLDER$1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 text-sm font-bold ${muted ? "text-exp-neutral-70" : ""}`, children: formatAmountWithCurrency(expense.amount, currencyCode) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `truncate pr-12 text-xs ${muted ? "text-exp-neutral-70" : "text-exp-neutral-600"}`, children: formatSecondLine(expense) })
  ] }), "rowInfo");
  const renderRow = /* @__PURE__ */ __name((expense) => {
    const isMatchable = expense.isMatchable;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative px-2 py-1", children: [
      isMatchable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-testid": "match-action",
          onClick: /* @__PURE__ */ __name(() => handleExpenseSelect(expense.id), "onClick"),
          className: "flex w-full rounded hover:bg-exp-neutral-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300",
          children: rowInfo(expense, false)
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: rowInfo(expense, true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          type: "button",
          variant: "soft",
          size: "sm",
          "data-focus-id": expense.id,
          className: "absolute bottom-2 right-3 h-4.5 text-[10px] font-bold",
          onClick: /* @__PURE__ */ __name(() => handleView(expense), "onClick"),
          children: "View"
        }
      )
    ] }, expense.id);
  }, "renderRow");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(wt, { open, onOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(zt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        type: "button",
        variant: "outlined",
        "aria-label": "Match transaction",
        className: "px-0! py-0! cursor-pointer text-exp-primary-blue-600 hover:text-exp-primary-blue-800 focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-4" })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      yt,
      {
        align: "end",
        className: "w-96 p-0",
        onOpenAutoFocus: /* @__PURE__ */ __name((event) => {
          var _a;
          const id = focusOnReopenIdRef.current;
          focusOnReopenIdRef.current = null;
          if (id == null) return;
          const target = (_a = scrollRef.current) == null ? void 0 : _a.querySelector(`[data-focus-id="${id}"]`);
          if (!target) return;
          event.preventDefault();
          target.focus({ preventScroll: true });
        }, "onOpenAutoFocus"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: attachScroll,
            onScroll: /* @__PURE__ */ __name((e) => {
              scrollTopRef.current = e.currentTarget.scrollTop;
            }, "onScroll"),
            "data-testid": "matchable-candidates-scroll",
            className: "max-h-96 overflow-y-auto py-1 exp-custom-scrollbar",
            children: isLoading && matchableExpenses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-6 text-exp-primary-blue-600" }) }) : isError && matchableExpenses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 text-sm text-exp-red-600", children: "Couldn't load expenses. Please try again." }) : matchableExpenses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 text-sm text-exp-neutral-600", children: "No expenses available to match" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              matchableExpenses.map(renderRow),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: sentinelRef, className: "h-px", "aria-hidden": "true" }),
              isFetchingNextPage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4 text-exp-primary-blue-600" }) })
            ] })
          }
        )
      }
    )
  ] }) });
}, "MatchableExpenseDropdown");
const { createContext, useContext } = await importShared("react");
const MatchPopoverContext = createContext(null);
const MatchPopoverProvider = MatchPopoverContext.Provider;
const useMatchPopover = /* @__PURE__ */ __name(() => {
  const ctx = useContext(MatchPopoverContext);
  if (!ctx) {
    throw new Error("useMatchPopover must be used within a MatchPopoverProvider");
  }
  return ctx;
}, "useMatchPopover");
const { useLayoutEffect: useLayoutEffect$1, useMemo: useMemo$7, useRef: useRef$4 } = await importShared("react");
const BannerCell = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invisible h-9", "aria-hidden": true }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "status",
      className: "absolute inset-0 z-10 flex items-center gap-2 bg-exp-red-100 px-4 text-exp-red-600",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-4 shrink-0", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: BANNER_TEXT })
      ]
    }
  )
] }), "BannerCell");
const isBannerRow = /* @__PURE__ */ __name((row) => row.original.transactionId === BANNER_SENTINEL_ID, "isBannerRow");
const TruncCell$1 = /* @__PURE__ */ __name(({ value }) => {
  const isEmpty = !value;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-sm font-normal", title: isEmpty ? void 0 : value, children: isEmpty ? EMPTY_PLACEHOLDER$1 : value });
}, "TruncCell$1");
const TextCell = /* @__PURE__ */ __name(({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: value || EMPTY_PLACEHOLDER$1 }), "TextCell");
const AmountCell$1 = /* @__PURE__ */ __name(({
  value,
  currencyCode
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: formatAmountWithCurrency(value, currencyCode) }) }), "AmountCell$1");
const StatusCell$1 = /* @__PURE__ */ __name(({ value }) => {
  if (!value || !VALID_EXPENSE_STATUSES.has(value)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: EMPTY_PLACEHOLDER$1 });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status: value });
}, "StatusCell$1");
const MatchedExpenseCell$1 = /* @__PURE__ */ __name(({
  value,
  onClick
}) => {
  if (value == null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: EMPTY_PLACEHOLDER$1 });
  }
  if (!onClick) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ue,
    {
      variant: "outlined",
      type: "button",
      "data-testid": "matched-expense-link",
      onClick,
      className: "px-0! py-0! font-normal cursor-pointer text-exp-primary-blue-600 focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300",
      children: value
    }
  );
}, "MatchedExpenseCell$1");
const MatchActionCell = /* @__PURE__ */ __name(({
  disabled,
  transactionId,
  currencyCode,
  onView
}) => {
  const { openTxnId, setOpenTxnId } = useMatchPopover();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MatchableExpenseDropdown,
    {
      transactionId,
      currencyCode,
      disabled,
      open: openTxnId === transactionId,
      onOpenChange: /* @__PURE__ */ __name((next) => setOpenTxnId(next ? transactionId : null), "onOpenChange"),
      onView
    }
  ) });
}, "MatchActionCell");
const ActionMenuCell = /* @__PURE__ */ __name(({ onUnmatch, disabled = false }) => {
  if (disabled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-disabled": "true",
          "aria-label": "Unmatch unavailable: can't unmatch a reconciled transaction",
          className: "inline-flex items-center justify-center p-1 rounded text-exp-neutral-400 cursor-not-allowed focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300 focus-visible:outline-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "size-4" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { side: "top", children: "Can't unmatch a reconciled transaction" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Vr, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx($r, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "inline-flex items-center justify-center p-1 rounded hover:bg-exp-neutral-10 text-exp-neutral-600 hover:text-exp-neutral-900 transition-colors",
        "aria-label": "More options",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "size-4" })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tr, { align: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(zr, { onClick: onUnmatch, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link2Off, { className: "size-4 mr-2" }),
      "Unmatch expense"
    ] }) })
  ] }) });
}, "ActionMenuCell");
const useCardholderTransactionsColumns = /* @__PURE__ */ __name(({
  currencyCode,
  currentTab,
  matchingDisabled = false,
  onViewMatchedExpense,
  onViewMatchableExpense,
  onUnmatch
}) => {
  const onViewMatchedExpenseRef = useRef$4(onViewMatchedExpense);
  useLayoutEffect$1(() => {
    onViewMatchedExpenseRef.current = onViewMatchedExpense;
  });
  const onViewMatchableExpenseRef = useRef$4(onViewMatchableExpense);
  useLayoutEffect$1(() => {
    onViewMatchableExpenseRef.current = onViewMatchableExpense;
  });
  const onUnmatchRef = useRef$4(onUnmatch);
  useLayoutEffect$1(() => {
    onUnmatchRef.current = onUnmatch;
  });
  const hasViewMatchedExpenseHandler = Boolean(onViewMatchedExpense);
  const columns = useMemo$7(() => {
    const baseColumns = [
      {
        id: "vendor",
        accessorKey: "vendor",
        enableSorting: false,
        minSize: 200,
        maxSize: 320,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Transaction" }), "header"),
        cell: /* @__PURE__ */ __name((context) => {
          if (isBannerRow(context.row)) return /* @__PURE__ */ jsxRuntimeExports.jsx(BannerCell, {});
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ei,
            {
              context,
              viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TruncCell$1, { value: context.getValue() })
            }
          );
        }, "cell")
      },
      {
        id: SORT_COLUMN_ID$1,
        accessorKey: "transactionDate",
        enableSorting: true,
        size: 180,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Date" }), "header"),
        cell: /* @__PURE__ */ __name((context) => {
          if (isBannerRow(context.row)) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ei,
            {
              context,
              viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
            }
          );
        }, "cell")
      },
      {
        id: "amount",
        accessorKey: "amount",
        enableSorting: false,
        size: 160,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Amount" }) }), "header"),
        cell: /* @__PURE__ */ __name((context) => {
          if (isBannerRow(context.row)) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ei,
            {
              context,
              viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(AmountCell$1, { value: context.getValue(), currencyCode })
            }
          );
        }, "cell")
      }
    ];
    const actionColumn = {
      id: "action",
      enableSorting: false,
      size: 100,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Action" }) }), "header"),
      cell: /* @__PURE__ */ __name((context) => {
        if (isBannerRow(context.row)) return null;
        const isMatchedTab = currentTab === CardholderTransactionTab.Matched;
        const isApproved = context.row.original.expenseStatus === "approved";
        const unmatchDisabled = isMatchedTab && isApproved;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: currentTab === CardholderTransactionTab.Unmatched ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              MatchActionCell,
              {
                disabled: matchingDisabled,
                transactionId: context.row.original.transactionId,
                currencyCode,
                onView: /* @__PURE__ */ __name((formId, status, creatorName) => {
                  var _a;
                  return (_a = onViewMatchableExpenseRef.current) == null ? void 0 : _a.call(onViewMatchableExpenseRef, formId, status, creatorName, context.row.original.transactionId);
                }, "onView")
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              ActionMenuCell,
              {
                onUnmatch: /* @__PURE__ */ __name(() => {
                  var _a;
                  return (_a = onUnmatchRef.current) == null ? void 0 : _a.call(onUnmatchRef, context.row.original);
                }, "onUnmatch"),
                disabled: unmatchDisabled
              }
            )
          }
        );
      }, "cell")
    };
    const showMatchedExpenseColumn = currentTab !== CardholderTransactionTab.Unmatched;
    const matchedExpenseColumn = {
      id: "matchedExpenseBusinessId",
      accessorKey: "matchedExpenseBusinessId",
      enableSorting: false,
      size: 180,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Matched Expense" }), "header"),
      cell: /* @__PURE__ */ __name((context) => {
        if (isBannerRow(context.row)) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
              MatchedExpenseCell$1,
              {
                value: context.getValue(),
                onClick: hasViewMatchedExpenseHandler && context.row.original.matchedExpenseFormId != null ? (event) => {
                  var _a;
                  event.stopPropagation();
                  (_a = onViewMatchedExpenseRef.current) == null ? void 0 : _a.call(onViewMatchedExpenseRef, context.row.original);
                } : void 0
              }
            )
          }
        );
      }, "cell")
    };
    const statusColumn = {
      id: "expenseStatus",
      accessorKey: "expenseStatus",
      enableSorting: false,
      size: 140,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Status" }), "header"),
      cell: /* @__PURE__ */ __name((context) => {
        if (isBannerRow(context.row)) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCell$1, { value: context.getValue() })
          }
        );
      }, "cell")
    };
    return showMatchedExpenseColumn ? [...baseColumns, matchedExpenseColumn, statusColumn, actionColumn] : [...baseColumns, actionColumn];
  }, [currencyCode, currentTab, matchingDisabled, hasViewMatchedExpenseHandler]);
  return { columns };
}, "useCardholderTransactionsColumns");
const { useLayoutEffect, useMemo: useMemo$6, useRef: useRef$3 } = await importShared("react");
const EMPTY_PLACEHOLDER = "-";
const STATUS_COLUMN_SIZE = 140;
const TruncCell = /* @__PURE__ */ __name(({ value }) => {
  const isEmpty = !value;
  const display = isEmpty ? EMPTY_PLACEHOLDER : value;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-sm font-normal", title: isEmpty ? void 0 : value, children: display });
}, "TruncCell");
const PlainTextCell = /* @__PURE__ */ __name(({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: value || EMPTY_PLACEHOLDER }), "PlainTextCell");
const AmountCell = /* @__PURE__ */ __name(({
  value,
  currencyCode
}) => {
  const formatted = formatTotalAmount(value, currencyCode);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: h(
        "text-sm font-medium",
        formatted.isPlaceholder && "text-exp-neutral-300"
      ),
      children: formatted.text
    }
  ) });
}, "AmountCell");
const MatchedExpenseCell = /* @__PURE__ */ __name(({
  value,
  onClick
}) => {
  if (value == null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlainTextCell, { value: EMPTY_PLACEHOLDER });
  }
  if (!onClick) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlainTextCell, { value });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ue,
    {
      variant: "outlined",
      type: "button",
      "data-testid": "matched-expense-link",
      onClick,
      className: "px-0! py-0! font-normal cursor-pointer text-exp-primary-blue-600  focus-visible:ring-2 focus-visible:ring-exp-primary-blue-300",
      children: value
    }
  );
}, "MatchedExpenseCell");
const STATUS_BADGE_CONFIG = {
  [TransactionStatus.Reconciled]: {
    bgColor: "bg-exp-green-100",
    textColor: "text-exp-green-800",
    label: "Reconciled"
  },
  [TransactionStatus.Matched]: {
    bgColor: "bg-exp-primary-blue-100",
    textColor: "text-exp-primary-blue-600",
    label: "Matched"
  },
  [TransactionStatus.Unmatched]: {
    bgColor: "bg-exp-yellow-100",
    textColor: "text-exp-yellow-800",
    label: "Unmatched"
  },
  [TransactionStatus.Flagged]: {
    bgColor: "bg-exp-red-100",
    textColor: "text-exp-red-600",
    label: "Flagged"
  }
};
const StatusCell = /* @__PURE__ */ __name(({ value }) => {
  const config = value ? STATUS_BADGE_CONFIG[value] : void 0;
  if (!config) return /* @__PURE__ */ jsxRuntimeExports.jsx(PlainTextCell, { value: EMPTY_PLACEHOLDER });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Br, { variant: "outline", className: `${config.bgColor} ${config.textColor} rounded-[20px]`, children: config.label });
}, "StatusCell");
const useTransactionsColumns = /* @__PURE__ */ __name(({
  currentTab,
  currencyCode,
  onMatchedExpenseClick
}) => {
  const onMatchedExpenseClickRef = useRef$3(onMatchedExpenseClick);
  useLayoutEffect(() => {
    onMatchedExpenseClickRef.current = onMatchedExpenseClick;
  });
  const hasMatchedExpenseHandler = !!onMatchedExpenseClick;
  const isAllTab = currentTab === TransactionStatusTab.All;
  const columns = useMemo$6(() => {
    return [
      {
        id: "cardholder",
        accessorKey: "cardholder",
        enableSorting: false,
        minSize: 140,
        maxSize: 200,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Cardholder" }), "header"),
        cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TruncCell, { value: context.getValue() })
          }
        ), "cell")
      },
      {
        id: "logicalCompanyName",
        accessorKey: "logicalCompanyName",
        enableSorting: false,
        minSize: 160,
        maxSize: 220,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Logical Company" }), "header"),
        cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TruncCell, { value: context.getValue() })
          }
        ), "cell")
      },
      {
        id: "transactionDate",
        accessorKey: "transactionDate",
        enableSorting: true,
        size: 140,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Transaction Date" }), "header"),
        cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(PlainTextCell, { value: context.getValue() })
          }
        ), "cell")
      },
      {
        id: "vendor",
        accessorKey: "vendor",
        enableSorting: false,
        minSize: 160,
        maxSize: 240,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Transaction" }), "header"),
        cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TruncCell, { value: context.getValue() })
          }
        ), "cell")
      },
      {
        id: "amount",
        accessorKey: "amount",
        enableSorting: false,
        size: 140,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Amount" }) }), "header"),
        cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(AmountCell, { value: context.getValue(), currencyCode })
          }
        ), "cell")
      },
      {
        id: "matchedExpenseBusinessId",
        accessorKey: "matchedExpenseBusinessId",
        enableSorting: false,
        size: 160,
        header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Matched Expense" }), "header"),
        cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ei,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
              MatchedExpenseCell,
              {
                value: context.getValue(),
                onClick: hasMatchedExpenseHandler ? (event) => {
                  var _a;
                  event.stopPropagation();
                  (_a = onMatchedExpenseClickRef.current) == null ? void 0 : _a.call(onMatchedExpenseClickRef, context.row.original);
                } : void 0
              }
            )
          }
        ), "cell")
      },
      // Always present so `DataTableCategoryFilter` can target it via TanStack's
      // column-filter API; visible only on the All tab and collapsed to size 0
      // (header/cell return null) on the filtered tabs.
      {
        id: "status",
        accessorKey: "status",
        enableSorting: false,
        filterFn: "equals",
        size: isAllTab ? STATUS_COLUMN_SIZE : 0,
        header: /* @__PURE__ */ __name(({ column }) => {
          if (!isAllTab) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Status" });
        }, "header"),
        cell: /* @__PURE__ */ __name((context) => {
          if (!isAllTab) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ei,
            {
              context,
              viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCell, { value: context.getValue() })
            }
          );
        }, "cell")
      }
    ];
  }, [isAllTab, currencyCode, hasMatchedExpenseHandler]);
  return { columns };
}, "useTransactionsColumns");
const { useCallback: useCallback$4, useEffect: useEffect$3, useMemo: useMemo$5, useRef: useRef$2 } = await importShared("react");
const URL_PARAM_TAB = "tab";
const URL_PARAM_PAGE = "page";
const URL_PARAM_SORT = "sort";
const DEFAULT_PAGE_SIZE = 20;
const DEFAULT_TAB = TransactionStatusTab.All;
const STATUS_COLUMN_ID = "status";
const SORT_COLUMN_ID = "transactionDate";
const DEFAULT_SORT_ORDER = "desc";
const VALID_TABS = new Set(Object.values(TransactionStatusTab));
const isValidTab = /* @__PURE__ */ __name((value) => value !== null && VALID_TABS.has(value), "isValidTab");
const parsePageIndex = /* @__PURE__ */ __name((raw) => {
  if (raw == null) return 0;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 0;
  return parsed - 1;
}, "parsePageIndex");
const formatPageForUrl = /* @__PURE__ */ __name((pageIndex) => {
  if (!Number.isFinite(pageIndex) || pageIndex <= 0) return null;
  return String(Math.floor(pageIndex) + 1);
}, "formatPageForUrl");
const useTransactionsUrlFilters = /* @__PURE__ */ __name((activeLogicalCompanyShortName) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const preservedState = location.state;
  const urlTab = searchParams.get(URL_PARAM_TAB);
  const urlPage = searchParams.get(URL_PARAM_PAGE);
  const urlSort = searchParams.get(URL_PARAM_SORT);
  const currentTab = useMemo$5(
    () => isValidTab(urlTab) ? urlTab : DEFAULT_TAB,
    [urlTab]
  );
  const sortOrder = urlSort === "asc" ? "asc" : DEFAULT_SORT_ORDER;
  const sorting = useMemo$5(
    () => [{ id: SORT_COLUMN_ID, desc: sortOrder === "desc" }],
    [sortOrder]
  );
  const columnFilters = useMemo$5(
    () => currentTab === DEFAULT_TAB ? [] : [{ id: STATUS_COLUMN_ID, value: currentTab }],
    [currentTab]
  );
  const pagination = useMemo$5(
    () => ({
      pageIndex: parsePageIndex(urlPage),
      pageSize: DEFAULT_PAGE_SIZE
    }),
    [urlPage]
  );
  const prevCompanyRef = useRef$2(activeLogicalCompanyShortName);
  useEffect$3(() => {
    if (prevCompanyRef.current === activeLogicalCompanyShortName) return;
    prevCompanyRef.current = activeLogicalCompanyShortName;
    setSearchParams(
      (prev) => {
        const params = new URLSearchParams(prev);
        params.delete(URL_PARAM_PAGE);
        return params;
      },
      { replace: true, state: preservedState }
    );
  }, [activeLogicalCompanyShortName, setSearchParams, preservedState]);
  const handleColumnFiltersChange = useCallback$4(
    (updater) => {
      const next = typeof updater === "function" ? updater(columnFilters) : updater;
      const statusFilter = next.find((f) => f.id === STATUS_COLUMN_ID);
      const newTab = isValidTab(statusFilter == null ? void 0 : statusFilter.value) ? statusFilter == null ? void 0 : statusFilter.value : DEFAULT_TAB;
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (newTab === DEFAULT_TAB) {
            params.delete(URL_PARAM_TAB);
          } else {
            params.set(URL_PARAM_TAB, newTab);
          }
          params.delete(URL_PARAM_PAGE);
          return params;
        },
        { replace: true, state: preservedState }
      );
    },
    [columnFilters, setSearchParams, preservedState]
  );
  const handlePaginationChange = useCallback$4(
    (updater) => {
      const next = typeof updater === "function" ? updater(pagination) : updater;
      if (next.pageIndex === pagination.pageIndex) return;
      const pageForUrl = formatPageForUrl(next.pageIndex);
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (pageForUrl === null) {
            params.delete(URL_PARAM_PAGE);
          } else {
            params.set(URL_PARAM_PAGE, pageForUrl);
          }
          return params;
        },
        { replace: true, state: preservedState }
      );
    },
    [pagination, setSearchParams, preservedState]
  );
  const handleSortingChange = useCallback$4(
    (updater) => {
      var _a;
      const next = typeof updater === "function" ? updater(sorting) : updater;
      const nextOrder = ((_a = next[0]) == null ? void 0 : _a.desc) ? "desc" : "asc";
      if (nextOrder === sortOrder) return;
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (nextOrder === DEFAULT_SORT_ORDER) {
            params.delete(URL_PARAM_SORT);
          } else {
            params.set(URL_PARAM_SORT, nextOrder);
          }
          params.delete(URL_PARAM_PAGE);
          return params;
        },
        { replace: true, state: preservedState }
      );
    },
    [sorting, sortOrder, setSearchParams, preservedState]
  );
  return {
    currentTab,
    columnFilters,
    pagination,
    sorting,
    sortOrder,
    handleColumnFiltersChange,
    handlePaginationChange,
    handleSortingChange
  };
}, "useTransactionsUrlFilters");
const { useMemo: useMemo$4, useRef: useRef$1 } = await importShared("react");
const EMPTY_STATE_MESSAGE = "No results to display";
const BANNER_SENTINEL_ID = -1;
const BANNER_SENTINEL = {
  transactionId: BANNER_SENTINEL_ID,
  vendor: "",
  transactionDate: "",
  amount: null,
  matchedExpenseBusinessId: null,
  matchedExpenseFormId: null,
  expenseStatus: null
};
const CardholderTransactionsTable = /* @__PURE__ */ __name(({
  columns,
  data,
  sorting,
  onSortingChange,
  isInitialLoading,
  isFetchingNextPage,
  hasNextPage,
  onLoadMore,
  showBannerRow = false
}) => {
  const tableData = useMemo$4(
    () => showBannerRow && data.length > 0 ? [BANNER_SENTINEL, ...data] : data,
    [showBannerRow, data]
  );
  const scrollRef = useRef$1(null);
  const sentinelRef = useInfiniteScroll({
    hasNextPage,
    isLoading: isFetchingNextPage,
    onLoadMore,
    rootRef: scrollRef,
    rootMargin: "120px"
  });
  const emptyState = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex w-full items-center justify-center p-4",
      "data-testid": "cardholder-transactions-empty-state",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm italic text-exp-grey-600", children: EMPTY_STATE_MESSAGE })
    }
  );
  const loadingState = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: scrollRef,
      className: "exp-custom-scrollbar flex min-h-0 flex-1 flex-col overflow-auto",
      "data-testid": "cardholder-transactions-table",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ni,
          {
            columns,
            data: tableData,
            getRowId: /* @__PURE__ */ __name((row) => String(row.transactionId), "getRowId"),
            enableSorting: true,
            manualSorting: true,
            sorting,
            onSortingChange,
            isLoading: isInitialLoading,
            loadingState,
            emptyState,
            styles: showBannerRow ? { bodyRow: "first:relative" } : void 0
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: sentinelRef, className: "h-px", "aria-hidden": "true" }),
        isFetchingNextPage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-3", "data-testid": "cardholder-transactions-next-spinner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5 text-exp-primary-blue-600" }) })
      ]
    }
  );
}, "CardholderTransactionsTable");
const { useCallback: useCallback$3, useEffect: useEffect$2, useMemo: useMemo$3 } = await importShared("react");
const MatchedExpenseDetail = /* @__PURE__ */ __name(({ formId, onClose, onCloseAutoFocus }) => {
  const companyShortName = useCompanyStore((s) => {
    var _a;
    return ((_a = s.userDefaultCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const { data: expenseItem, isPending, isFetching, isError, error } = useExpenseItem(formId, { companyShortName });
  const errorMessage = useMemo$3(
    () => isError ? getExpenseErrorMessage(error) : "",
    [isError, error]
  );
  useErrorToast(isError, errorMessage, 5e3);
  useEffect$2(() => {
    if (isError && !isFetching) onClose();
  }, [isError, isFetching, onClose]);
  useEffect$2(() => {
    if (expenseItem && expenseItem.status === "draft") {
      Zs.error("Expense form is still in draft and cannot be viewed in the transactions list.", { duration: 5e3 });
      onClose();
    }
  }, [expenseItem, onClose]);
  const header = useMemo$3(
    () => expenseItem ? buildHeaderFromExpenseItem(expenseItem) : null,
    [expenseItem]
  );
  const handleDialogOpenChange = useCallback$3(
    (open) => {
      if (!open) onClose();
    },
    [onClose]
  );
  const renderContent = /* @__PURE__ */ __name((expenseItemData) => {
    if (!isExpenseItemSubmitted(expenseItemData)) return null;
    if (!isSubmittedPreviewRenderable(expenseItemData)) return /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewLoadError, {});
    if (isRegularExpense(expenseItemData)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensePreview, { expense: expenseItemData });
    }
    if (isMileageExpense(expenseItemData)) {
      if (isMileageTripData(expenseItemData.data)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MileageTripPreview, { mileage: { ...expenseItemData, data: expenseItemData.data } });
      }
      if (isMileagePeriodData(expenseItemData.data)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MileagePeriodPreview, { mileage: { ...expenseItemData, data: expenseItemData.data } });
      }
    }
    return null;
  }, "renderContent");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { open: true, onOpenChange: handleDialogOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    rs,
    {
      className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col",
      "data-testid": "matched-expense-dialog",
      onInteractOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onInteractOutside"),
      onCloseAutoFocus,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExpenseDialogHeader,
          {
            header,
            historyLog: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormHistoryLog, { expenseFormId: (expenseItem == null ? void 0 : expenseItem.id) ? Number(expenseItem.id) : 0, className: "ml-2" }),
            mode: "preview"
          }
        ),
        expenseItem && isExpenseItemSubmitted(expenseItem) && expenseItem.hasEtlError && /* @__PURE__ */ jsxRuntimeExports.jsx(EtlErrorBanner, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }) }) : expenseItem && renderContent(expenseItem) }) })
      ]
    }
  ) });
}, "MatchedExpenseDetail");
const dedupeTransactions = /* @__PURE__ */ __name((pages) => {
  const byId = /* @__PURE__ */ new Map();
  for (const page of pages ?? []) {
    for (const row of page.results) byId.set(row.transactionId, row);
  }
  return [...byId.values()];
}, "dedupeTransactions");
const resolveMatchableViewAction = /* @__PURE__ */ __name((formId, status, creatorName) => {
  if (status === "draft") {
    return creatorName ? { kind: "masked", formId } : { kind: "edit", formId };
  }
  return { kind: "preview", formId };
}, "resolveMatchableViewAction");
const { useEffect: useEffect$1, useMemo: useMemo$2 } = await importShared("react");
const CardholderTransactionsMaskedDraftDetail = /* @__PURE__ */ __name(({
  formId,
  creatorName,
  isOpen,
  onClose
}) => {
  const companyShortName = useCompanyStore((s) => {
    var _a;
    return ((_a = s.userDefaultCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const { data: expenseItem, isPending, isFetching, isError, error } = useExpenseItem(formId, { companyShortName, enabled: isOpen });
  const errorMessage = useMemo$2(
    () => isError ? getExpenseErrorMessage(error) : "",
    [isError, error]
  );
  useErrorToast(isError, errorMessage, 5e3);
  const header = useMemo$2(() => {
    if (!expenseItem) return null;
    const base = buildHeaderFromExpenseItem(expenseItem);
    return { ...base, title: creatorName };
  }, [expenseItem, creatorName]);
  useEffect$1(() => {
    if (isError && !isFetching) onClose();
  }, [isError, isFetching, onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    rs,
    {
      className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col",
      "data-testid": "cardholder-transaction-masked-draft-dialog",
      onInteractOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onInteractOutside"),
      onCloseAutoFocus: /* @__PURE__ */ __name((e) => e.preventDefault(), "onCloseAutoFocus"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExpenseDialogHeader,
          {
            header,
            historyLog: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormHistoryLog, { expenseFormId: (expenseItem == null ? void 0 : expenseItem.id) ? Number(expenseItem.id) : 0, className: "ml-2" }),
            mode: "draft"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }) }) : expenseItem && // inert fully blocks interaction on the reused editable form (native AND custom
        // widgets). It also hides the subtree from screen readers - an accepted limitation
        // of masking an editable form this way.
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { inert: true, children: [
          isRegularExpense(expenseItem) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExpenseForm,
            {
              initialData: expenseItem.data
            }
          ),
          isMileageExpense(expenseItem) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            isMileageTripData(expenseItem.data) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              MileageTripForm,
              {
                initialData: expenseItem.data
              }
            ),
            isMileagePeriodData(expenseItem.data) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              MileagePeriodForm,
              {
                initialData: expenseItem.data
              }
            )
          ] })
        ] }) }) })
      ]
    }
  ) });
}, "CardholderTransactionsMaskedDraftDetail");
const { useCallback: useCallback$2, useEffect } = await importShared("react");
const CardholderReconciliationDraftDetail = /* @__PURE__ */ __name(({
  formId,
  onClose
}) => {
  const queryClient = useQueryClient();
  const handleAfterMutation = useCallback$2(
    (kind) => {
      queryClient.invalidateQueries({
        queryKey: kind === "saved" ? queryKeys.cardholderTransactions.matchableExpensesAll() : queryKeys.cardholderTransactions.all()
      });
    },
    [queryClient]
  );
  const handleLoadError = useCallback$2(
    (error) => {
      Zs.error(getExpenseErrorMessage(error), { duration: 5e3 });
      queryClient.invalidateQueries({ queryKey: queryKeys.cardholderTransactions.all() });
      onClose();
    },
    [onClose, queryClient]
  );
  const result = useExpenseItemForm({
    itemId: formId,
    onExit: onClose,
    onLoadError: handleLoadError,
    onAfterMutation: handleAfterMutation
  });
  const { mode, isLoading, title, titleSuffix, amount, status, headerSubtitle, handleOpenChange } = result;
  useEffect(() => {
    if (mode === "preview") {
      Zs.error("This expense has already been submitted.", { duration: 5e3 });
      queryClient.invalidateQueries({ queryKey: queryKeys.cardholderTransactions.all() });
      onClose();
    }
  }, [mode, onClose, queryClient]);
  const { footer, deleteDialog } = buildExpenseItemFormDialogProps(result);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormPageDialog,
    {
      contentTestId: "cardholder-reconciliation-draft-dialog",
      header: {
        title,
        titleSuffix: titleSuffix ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          ls,
          {
            variant: "light",
            size: "sm",
            maxWidth: 320,
            className: "text-base font-medium text-exp-neutral-900",
            children: titleSuffix
          }
        ) : null,
        amount,
        statusBadge: status ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status }) : void 0,
        subtitle: headerSubtitle
      },
      footer,
      deleteDialog,
      isLoading: isLoading || mode === "preview",
      onOpenChange: handleOpenChange,
      onCloseAutoFocus: /* @__PURE__ */ __name((e) => e.preventDefault(), "onCloseAutoFocus"),
      renderContent: /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseItemFormBody, { result }), "renderContent")
    }
  );
}, "CardholderReconciliationDraftDetail");
const { useCallback: useCallback$1, useMemo: useMemo$1, useRef, useState: useState$1 } = await importShared("react");
const formatTitle = /* @__PURE__ */ __name((name, currency) => `${name || EMPTY_CURRENCY_SYMBOL} (${currency || EMPTY_CURRENCY_SYMBOL})`, "formatTitle");
const formatSubtitle = /* @__PURE__ */ __name((period, due) => `${period || EMPTY_CURRENCY_SYMBOL} • Due on ${due || EMPTY_CURRENCY_SYMBOL}`, "formatSubtitle");
const CardholderTransactionsView = /* @__PURE__ */ __name(({
  header,
  statementId,
  onBack
}) => {
  const { currentTab, sorting, sortOrder, setTab, handleSortingChange } = useCardholderTransactionsUrlFilters();
  const [openedExpenseFormId, setOpenedExpenseFormId] = useState$1(null);
  const [previewFromPopover, setPreviewFromPopover] = useState$1(false);
  const [openedMaskedDraft, setOpenedMaskedDraft] = useState$1(null);
  const [openedDraftFormId, setOpenedDraftFormId] = useState$1(null);
  const [openTxnId, setOpenTxnId] = useState$1(null);
  const reopenTxnIdRef = useRef(null);
  const matchPopoverValue = useMemo$1(() => ({ openTxnId, setOpenTxnId }), [openTxnId]);
  const reopenPopover = useCallback$1(() => {
    setOpenTxnId(reopenTxnIdRef.current);
    reopenTxnIdRef.current = null;
  }, []);
  const {
    data,
    isPending,
    isPlaceholderData,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useCardholderTransactions({ tab: currentTab, sortOrder, statementId });
  useErrorToast(isError, "Failed to load transactions. Please try again later.");
  const firstPage = data == null ? void 0 : data.pages[0];
  const summary = firstPage == null ? void 0 : firstPage.statusSummary;
  const matchingDisabled = (firstPage == null ? void 0 : firstPage.hasMatchableExpenses) === false;
  const masterAccountName = (firstPage == null ? void 0 : firstPage.masterAccountName) ?? (header == null ? void 0 : header.masterAccountName);
  const currencyCode = (firstPage == null ? void 0 : firstPage.currencyCode) ?? (header == null ? void 0 : header.currencyCode);
  const statementPeriod = (firstPage == null ? void 0 : firstPage.statementPeriod) ?? (header == null ? void 0 : header.statementPeriod);
  const reconciliationDueDate = (firstPage == null ? void 0 : firstPage.reconciliationDueDate) ?? (header == null ? void 0 : header.reconciliationDueDate);
  const isTableLoading = isPending || isPlaceholderData;
  const rows = useMemo$1(() => dedupeTransactions(data == null ? void 0 : data.pages), [data]);
  const unmatchTransaction = useUnmatchTransaction();
  const handleUnmatch = /* @__PURE__ */ __name((row) => {
    unmatchTransaction.mutate(String(row.transactionId));
  }, "handleUnmatch");
  const { columns } = useCardholderTransactionsColumns({
    currencyCode,
    currentTab,
    matchingDisabled,
    onViewMatchedExpense: /* @__PURE__ */ __name((row) => {
      if (row.matchedExpenseFormId) {
        setPreviewFromPopover(false);
        setOpenedExpenseFormId(row.matchedExpenseFormId);
      }
    }, "onViewMatchedExpense"),
    onViewMatchableExpense: /* @__PURE__ */ __name((formId, status, creatorName, transactionId) => {
      const action = resolveMatchableViewAction(formId, status, creatorName);
      reopenTxnIdRef.current = transactionId;
      setOpenTxnId(null);
      if (action.kind === "edit") {
        setOpenedDraftFormId(action.formId);
      } else if (action.kind === "masked") {
        setOpenedMaskedDraft({ formId: action.formId, creatorName: creatorName ?? "" });
      } else {
        setPreviewFromPopover(true);
        setOpenedExpenseFormId(action.formId);
      }
    }, "onViewMatchableExpense"),
    onUnmatch: handleUnmatch
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-0 flex-col p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        type: "button",
        variant: "outlined",
        onClick: onBack,
        className: "flex items-center gap-1 px-0! text-exp-neutral-600 hover:text-exp-primary-blue-600",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back", className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "Reconciliation" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-4 shrink-0 rounded-lg bg-exp-neutral-10 px-4 py-2 shadow-exp-menu", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "truncate text-xl font-bold text-exp-neutral-900", children: formatTitle(masterAccountName, currencyCode) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-exp-neutral-600", children: formatSubtitle(statementPeriod, reconciliationDueDate) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardholderTransactionTabs, { currentTab, summary, onChange: setTab }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Kr, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchPopoverProvider, { value: matchPopoverValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardholderTransactionsTable,
      {
        columns,
        data: rows,
        sorting,
        onSortingChange: handleSortingChange,
        isInitialLoading: isTableLoading,
        isFetchingNextPage,
        hasNextPage,
        onLoadMore: fetchNextPage,
        showBannerRow: currentTab === CardholderTransactionTab.Flagged
      }
    ) }) }),
    openedExpenseFormId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MatchedExpenseDetail,
      {
        formId: openedExpenseFormId,
        onCloseAutoFocus: previewFromPopover ? (e) => e.preventDefault() : void 0,
        onClose: /* @__PURE__ */ __name(() => {
          setOpenedExpenseFormId(null);
          reopenPopover();
        }, "onClose")
      }
    ),
    openedMaskedDraft && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardholderTransactionsMaskedDraftDetail,
      {
        formId: openedMaskedDraft.formId,
        creatorName: openedMaskedDraft.creatorName,
        isOpen: true,
        onClose: /* @__PURE__ */ __name(() => {
          setOpenedMaskedDraft(null);
          reopenPopover();
        }, "onClose")
      }
    ),
    openedDraftFormId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardholderReconciliationDraftDetail,
      {
        formId: openedDraftFormId,
        onClose: /* @__PURE__ */ __name(() => {
          setOpenedDraftFormId(null);
          reopenPopover();
        }, "onClose")
      }
    )
  ] });
}, "CardholderTransactionsView");
const { useState } = await importShared("react");
const SummaryRow = /* @__PURE__ */ __name(({ label, formatted, colorClass }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-200", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "dd",
    {
      className: h(
        "font-medium tabular-nums",
        formatted.isPlaceholder ? "text-exp-neutral-200" : colorClass
      ),
      children: formatted.text
    }
  )
] }), "SummaryRow");
const CompanySummaryCard = /* @__PURE__ */ __name(({
  title,
  subtitle,
  totalAmount,
  reconciledAmount,
  varianceAmount,
  currencyCode,
  isSelected,
  onSelect,
  ariaLabel
}) => {
  const [isHover, setIsHover] = useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "aria-pressed": isSelected,
      "aria-label": ariaLabel ?? title,
      onClick: onSelect,
      onMouseEnter: /* @__PURE__ */ __name(() => setIsHover(true), "onMouseEnter"),
      onMouseLeave: /* @__PURE__ */ __name(() => setIsHover(false), "onMouseLeave"),
      className: h(
        "w-full text-left rounded-lg px-3 py-2.5 transition-colors bg-exp-neutral-0 border border-exp-neutral-0",
        !isSelected && !isHover && "shadow-exp-menu",
        (isSelected || isHover) && "border-exp-primary-blue-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-exp-primary-blue-600 focus-visible:ring-offset-2",
        isSelected && "bg-exp-primary-blue-50"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ls,
          {
            as: "div",
            size: "sm",
            delayDuration: TOOLTIP_DELAY_TRUNCATED_TEXT,
            className: h(
              "text-sm font-medium leading-5 block text-exp-neutral-600 ",
              isSelected && "text-exp-primary-blue-600 font-semibold"
            ),
            children: title
          }
        ),
        subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          ls,
          {
            as: "div",
            size: "sm",
            delayDuration: TOOLTIP_DELAY_TRUNCATED_TEXT,
            className: h(
              "mt-0.5 block text-xs leading-4 text-exp-neutral-200 font-medium",
              isHover && "text-exp-neutral-100"
            ),
            children: subtitle
          }
        ) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-2 space-y-1 text-xs leading-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SummaryRow,
            {
              label: "Total",
              formatted: formatTotalAmount(totalAmount, currencyCode),
              colorClass: "text-exp-neutral-900"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SummaryRow,
            {
              label: "Reconciled",
              formatted: formatSummaryAmount(reconciledAmount, currencyCode),
              colorClass: "text-exp-green-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SummaryRow,
            {
              label: "Variance",
              formatted: formatSummaryAmount(varianceAmount, currencyCode),
              colorClass: "text-exp-red-500"
            }
          )
        ] })
      ]
    }
  );
}, "CompanySummaryCard");
const { useCallback, useMemo } = await importShared("react");
const STATUS_FILTER_OPTIONS = [
  { value: TransactionStatusTab.Unmatched, label: "Unmatched" },
  { value: TransactionStatusTab.Matched, label: "Matched" },
  { value: TransactionStatusTab.Reconciled, label: "Reconciled" }
];
const assertNever = /* @__PURE__ */ __name((value) => {
  throw new Error(`Unhandled TransactionStatusTab: ${String(value)}`);
}, "assertNever");
const tabToStatus = /* @__PURE__ */ __name((tab) => {
  switch (tab) {
    case TransactionStatusTab.All:
      return void 0;
    case TransactionStatusTab.Matched:
      return TransactionStatus.Matched;
    case TransactionStatusTab.Unmatched:
      return TransactionStatus.Unmatched;
    case TransactionStatusTab.Reconciled:
      return TransactionStatus.Reconciled;
    default:
      return assertNever(tab);
  }
}, "tabToStatus");
const countForTab = /* @__PURE__ */ __name((tab, summary) => {
  if (!summary) return 0;
  switch (tab) {
    case TransactionStatusTab.All:
      return summary.all;
    case TransactionStatusTab.Matched:
      return summary.matched;
    case TransactionStatusTab.Unmatched:
      return summary.unmatched;
    case TransactionStatusTab.Reconciled:
      return summary.reconciled;
    default:
      return assertNever(tab);
  }
}, "countForTab");
const TransactionsList = /* @__PURE__ */ __name(({
  statementId,
  currencyCode,
  logicalCompanyShortName,
  onMatchedExpenseClick
}) => {
  const {
    currentTab,
    columnFilters,
    pagination,
    sorting,
    sortOrder,
    handleColumnFiltersChange,
    handlePaginationChange,
    handleSortingChange
  } = useTransactionsUrlFilters(logicalCompanyShortName);
  const status = tabToStatus(currentTab);
  const { data, isPending, isFetching, isError } = useTransactionsList(
    {
      statementId: statementId ?? "",
      logicalCompanyShortName,
      status,
      pageNumber: pagination.pageIndex + 1,
      pageSize: DEFAULT_PAGE_SIZE,
      sortOrder
    },
    { enabled: !!statementId }
  );
  useErrorToast(isError, "Failed to load transactions. Please try again later.");
  const { columns } = useTransactionsColumns({
    currentTab,
    currencyCode,
    onMatchedExpenseClick
  });
  const isLoading = isPending || isFetching;
  const summary = data == null ? void 0 : data.statusSummary;
  const filterOptions = useMemo(
    () => STATUS_FILTER_OPTIONS.map((option) => ({
      label: `${option.label} (${countForTab(option.value, summary)})`,
      value: option.value
    })),
    [summary]
  );
  const allOptionLabel = useMemo(
    () => `All transactions (${countForTab(TransactionStatusTab.All, summary)})`,
    [summary]
  );
  const renderToolbar = useCallback(
    (table) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ta, { table, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      za,
      {
        className: "gap-2",
        column: "status",
        allOptionLabel,
        options: filterOptions
      }
    ) }),
    [allOptionLabel, filterOptions]
  );
  const customLoadingState = useMemo(
    () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading" })
    ] }),
    []
  );
  const emptyState = useMemo(
    () => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-full justify-center items-center flex p-4",
        "data-testid": "transactions-empty-state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm italic text-exp-grey-600", children: "No results to display" })
      }
    ),
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex-1 min-w-0 flex flex-col min-h-0 overflow-auto exp-custom-scrollbar",
      "data-testid": "transactions-list",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ni,
        {
          className: "rounded-l-none",
          columns,
          data: (data == null ? void 0 : data.results) ?? [],
          getRowId: /* @__PURE__ */ __name((row) => String(row.id), "getRowId"),
          enablePagination: true,
          enableFiltering: true,
          enableSorting: true,
          manualPagination: true,
          manualFiltering: true,
          manualSorting: true,
          pageCount: (data == null ? void 0 : data.totalPages) ?? 0,
          rowCount: (data == null ? void 0 : data.totalObjects) ?? 0,
          pagination,
          onPaginationChange: handlePaginationChange,
          columnFilters,
          onColumnFiltersChange: handleColumnFiltersChange,
          sorting,
          onSortingChange: handleSortingChange,
          isLoading,
          loadingState: customLoadingState,
          styles: {
            pagination: {
              selectContentWidthMode: "trigger"
            }
          },
          toolbar: renderToolbar,
          emptyState
        }
      )
    }
  );
}, "TransactionsList");
export {
  ALL_COMPANIES_SELECTION as A,
  CompanySummaryCard as C,
  MatchedExpenseDetail as M,
  TransactionsList as T,
  CardholderTransactionsView as a
};

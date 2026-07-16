var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { r as useQuery, F as RECONCILIATION_ENDPOINTS, q as queryKeys, m as useParams, u as useLocation, w as useNavigateBack, a as RoutePaths, G as EMPTY_CURRENCY_SYMBOL } from "./use-scroll-into-view-ref-BwZ0vqtT.js";
import { b as apiClient, Y as Yn, q as h, U as Ue } from "./configuration-BMQ0fbSl.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
import "./CardholderReconciliationList-BLhvCFWU.js";
import { C as CompanySummaryCard, A as ALL_COMPANIES_SELECTION, T as TransactionsList, M as MatchedExpenseDetail } from "./TransactionsList-Bk1o2YzT.js";
const sortCompanyBreakdown = /* @__PURE__ */ __name((items) => {
  return [...items].sort((a, b) => {
    const physicalCmp = a.physicalCompanyName.localeCompare(b.physicalCompanyName);
    if (physicalCmp !== 0) return physicalCmp;
    return a.logicalCompanyName.localeCompare(b.logicalCompanyName);
  });
}, "sortCompanyBreakdown");
const parseDecimal = /* @__PURE__ */ __name((value) => {
  if (value == null) return 0;
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}, "parseDecimal");
const mapSummary = /* @__PURE__ */ __name((api) => ({
  totalAmount: parseDecimal(api.totalAmount),
  reconciledAmount: parseDecimal(api.reconciledAmount),
  varianceAmount: parseDecimal(api.varianceAmount)
}), "mapSummary");
const mapBreakdown = /* @__PURE__ */ __name((api) => ({
  ...mapSummary(api),
  logicalCompanyId: api.logicalCompanyId,
  logicalCompanyName: api.logicalCompanyName,
  logicalCompanyShortName: api.logicalCompanyShortName,
  physicalCompanyName: api.physicalCompanyName
}), "mapBreakdown");
const mapCompanyTransactionsAggregation = /* @__PURE__ */ __name((api) => ({
  // Not yet returned by BE; each falls back to "-" until shipped.
  currencyCode: api.currencyCode,
  masterAccountName: api.masterAccountName,
  statementPeriod: api.statementPeriod,
  reconciliationDueDate: api.reconciliationDueDate,
  allCompanies: mapSummary(api.allCompanies),
  logicalCompanyBreakdown: sortCompanyBreakdown(
    api.logicalCompanyBreakdown.map(mapBreakdown)
  )
}), "mapCompanyTransactionsAggregation");
const useCompanyTransactionsAggregation = /* @__PURE__ */ __name((statementId, { enabled = true } = {}) => {
  return useQuery({
    queryKey: queryKeys.companyTransactions.aggregation(statementId ?? ""),
    enabled: enabled && !!statementId,
    queryFn: /* @__PURE__ */ __name(async () => {
      if (!statementId) {
        throw new Error("statementId is required");
      }
      const url = RECONCILIATION_ENDPOINTS.GET_COMPANY_TRANSACTIONS_AGGREGATION.build({ statementId });
      const response = await apiClient.get(url);
      return mapCompanyTransactionsAggregation(response.data);
    }, "queryFn"),
    staleTime: 60 * 1e3
  });
}, "useCompanyTransactionsAggregation");
const ALL_COMPANIES_LABEL = "All companies";
const PanelShell = /* @__PURE__ */ __name(({
  className,
  children
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { "aria-label": "Company summary", className: h(
  "flex flex-col gap-2 w-60 shrink-0 overflow-y-auto p-4",
  className
), children }), "PanelShell");
const CompanySummaryPanel = /* @__PURE__ */ __name(({
  statementId,
  currencyCode,
  selection,
  onSelectionChange,
  className
}) => {
  const { data, isPending, isError, refetch } = useCompanyTransactionsAggregation(statementId);
  if (isPending) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PanelShell, { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        "aria-label": "Loading company summary",
        className: "size-6 text-exp-primary-blue-600"
      }
    ) }) });
  }
  if (isError || !data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PanelShell, { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-exp-neutral-30 bg-exp-neutral-0 px-3 py-3 text-xs text-exp-neutral-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Couldn't load company summary." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: /* @__PURE__ */ __name(() => refetch(), "onClick"),
          className: "mt-1 font-semibold text-exp-primary-blue-600 hover:underline",
          children: "Try again"
        }
      )
    ] }) });
  }
  const isAllSelected = selection.type === "all";
  const selectedLogicalId = selection.type === "logical" ? selection.logicalCompanyId : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PanelShell, { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompanySummaryCard,
      {
        title: ALL_COMPANIES_LABEL,
        totalAmount: data.allCompanies.totalAmount,
        reconciledAmount: data.allCompanies.reconciledAmount,
        varianceAmount: data.allCompanies.varianceAmount,
        currencyCode,
        isSelected: isAllSelected,
        onSelect: /* @__PURE__ */ __name(() => onSelectionChange(ALL_COMPANIES_SELECTION), "onSelect"),
        ariaLabel: `${ALL_COMPANIES_LABEL} summary`
      }
    ),
    data.logicalCompanyBreakdown.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompanySummaryCard,
      {
        title: item.logicalCompanyName,
        subtitle: item.physicalCompanyName,
        totalAmount: item.totalAmount,
        reconciledAmount: item.reconciledAmount,
        varianceAmount: item.varianceAmount,
        currencyCode,
        isSelected: selectedLogicalId === item.logicalCompanyId,
        onSelect: /* @__PURE__ */ __name(() => onSelectionChange({
          type: "logical",
          logicalCompanyId: item.logicalCompanyId
        }), "onSelect"),
        ariaLabel: `${item.logicalCompanyName}, ${item.physicalCompanyName}`
      },
      item.logicalCompanyId
    ))
  ] });
}, "CompanySummaryPanel");
const { useEffect, useMemo, useState } = await importShared("react");
const formatHeaderTitle = /* @__PURE__ */ __name((name, currency) => `${name || EMPTY_CURRENCY_SYMBOL} (${currency || EMPTY_CURRENCY_SYMBOL})`, "formatHeaderTitle");
const formatHeaderSubtitle = /* @__PURE__ */ __name((period, due) => `${period || EMPTY_CURRENCY_SYMBOL} • Due on ${due || EMPTY_CURRENCY_SYMBOL}`, "formatHeaderSubtitle");
const ReconciliationDetailPage = /* @__PURE__ */ __name(() => {
  const { id } = useParams();
  const { state } = useLocation();
  const { navigateBack } = useNavigateBack({
    fallback: RoutePaths.Reconciliations,
    basePath: RoutePaths.Reconciliations
  });
  const { data: aggregation } = useCompanyTransactionsAggregation(id);
  const snapshot = state == null ? void 0 : state.item;
  const masterAccountName = (aggregation == null ? void 0 : aggregation.masterAccountName) ?? (snapshot == null ? void 0 : snapshot.name);
  const currencyCode = (aggregation == null ? void 0 : aggregation.currencyCode) ?? (snapshot == null ? void 0 : snapshot.currencyCode);
  const statementPeriod = (aggregation == null ? void 0 : aggregation.statementPeriod) ?? (snapshot == null ? void 0 : snapshot.statementPeriod);
  const reconciliationDueDate = (aggregation == null ? void 0 : aggregation.reconciliationDueDate) ?? (snapshot == null ? void 0 : snapshot.reconciliationDueDate);
  const headerTitle = formatHeaderTitle(masterAccountName, currencyCode);
  const headerSubtitle = formatHeaderSubtitle(statementPeriod, reconciliationDueDate);
  const [selection, setSelection] = useState(ALL_COMPANIES_SELECTION);
  const [openedExpenseFormId, setOpenedExpenseFormId] = useState(null);
  useEffect(() => {
    setSelection(ALL_COMPANIES_SELECTION);
    setOpenedExpenseFormId(null);
  }, [id]);
  const logicalCompanyShortName = useMemo(() => {
    var _a;
    if (selection.type === "all") return void 0;
    return (_a = aggregation == null ? void 0 : aggregation.logicalCompanyBreakdown.find(
      (b) => b.logicalCompanyId === selection.logicalCompanyId
    )) == null ? void 0 : _a.logicalCompanyShortName;
  }, [selection, aggregation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        type: "button",
        variant: "outlined",
        onClick: navigateBack,
        className: "flex items-center gap-1 text-exp-neutral-600 hover:text-exp-primary-blue-600 px-0!",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back", className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "Reconciliations" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-4 shrink-0 px-4 py-2 bg-exp-neutral-10 shadow-exp-menu rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-exp-neutral-900 truncate", children: headerTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-exp-neutral-600", children: headerSubtitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-neutral-10 pr-4 border-t border-b border-l border-exp-neutral-30 rounded-l-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CompanySummaryPanel,
        {
          statementId: id,
          currencyCode,
          selection,
          onSelectionChange: setSelection
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TransactionsList,
        {
          statementId: id,
          currencyCode,
          logicalCompanyShortName,
          onMatchedExpenseClick: /* @__PURE__ */ __name((row) => row.matchedExpenseFormId && setOpenedExpenseFormId(row.matchedExpenseFormId), "onMatchedExpenseClick")
        }
      ),
      openedExpenseFormId && /* @__PURE__ */ jsxRuntimeExports.jsx(
        MatchedExpenseDetail,
        {
          formId: openedExpenseFormId,
          onClose: /* @__PURE__ */ __name(() => setOpenedExpenseFormId(null), "onClose")
        }
      )
    ] })
  ] });
}, "ReconciliationDetailPage");
export {
  ReconciliationDetailPage as default
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-B1oJrOwd.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { i as useQuery, q as queryKeys, r as useParams, l as useLocation, w as useNavigateBack, a as RoutePaths } from "./date-format-DVvigOUX.js";
import { B as Bn, p, U as Ue } from "./index.es-e_EjaQiF.js";
import { I as Icon } from "./Icon-CjLzMHV-.js";
import { a as RECONCILIATION_ENDPOINTS, C as CompanySummaryCard } from "./CompanySummaryCard-BRTITMIn.js";
import { a as apiClient } from "./axiosInstance-QVJPXrUf.js";
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
  totalAmount: parseDecimal(api.total_amount),
  reconciledAmount: parseDecimal(api.reconciled_amount),
  varianceAmount: parseDecimal(api.variance_amount)
}), "mapSummary");
const mapBreakdown = /* @__PURE__ */ __name((api) => ({
  ...mapSummary(api),
  logicalCompanyId: api.logical_company_id,
  logicalCompanyName: api.logical_company_name,
  physicalCompanyName: api.physical_company_name
}), "mapBreakdown");
const mapCompanyTransactionsAggregation = /* @__PURE__ */ __name((api) => ({
  allCompanies: mapSummary(api.all_companies),
  logicalCompanyBreakdown: sortCompanyBreakdown(
    api.logical_company_breakdown.map(mapBreakdown)
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
      const url = RECONCILIATION_ENDPOINTS.GET_COMPANY_TRANSACTIONS_AGGREGATION(statementId);
      const response = await apiClient.get(url);
      return mapCompanyTransactionsAggregation(response.data);
    }, "queryFn"),
    staleTime: 60 * 1e3
  });
}, "useCompanyTransactionsAggregation");
const ALL_COMPANIES_SELECTION = { type: "all" };
const ALL_COMPANIES_LABEL = "All companies";
const PanelShell = /* @__PURE__ */ __name(({
  className,
  children
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { "aria-label": "Company summary", className: p(
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
      Bn,
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
const { useEffect, useState } = await importShared("react");
const formatHeaderTitle = /* @__PURE__ */ __name((item) => {
  if (!item) return "Reconciliation";
  return item.currencyCode ? `${item.name} (${item.currencyCode})` : item.name;
}, "formatHeaderTitle");
const formatHeaderSubtitle = /* @__PURE__ */ __name((item) => {
  if (!item) return null;
  const parts = [];
  if (item.statementPeriod) parts.push(item.statementPeriod);
  if (item.reconciliationDueDate) parts.push(`Due on ${item.reconciliationDueDate}`);
  return parts.length > 0 ? parts.join(" • ") : null;
}, "formatHeaderSubtitle");
const FilterPreview = /* @__PURE__ */ __name(({
  statementId,
  selection,
  matchedBreakdown
}) => {
  const selectionJson = selection.type === "all" ? '{ type: "all" }' : `{ type: "logical", logicalCompanyId: ${selection.logicalCompanyId} }`;
  const beQuery = selection.type === "all" ? `GET /api/v1.0/reconciliation/${statementId ?? "{statementId}"}/transactions` : `GET /api/v1.0/reconciliation/${statementId ?? "{statementId}"}/transactions?company=${selection.logicalCompanyId}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 p-6 flex flex-col gap-4 overflow-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-exp-neutral-600", children: "Transactions table" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-exp-neutral-200", children: "Placeholder. The transactions table reads the selection from the page and refilters; until then this panel reflects the selection state for verification." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-md border border-exp-neutral-30 bg-exp-neutral-10 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wide text-exp-neutral-200 mb-1", children: "Active selection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "block text-xs text-exp-primary-blue-600 font-mono break-all", children: selectionJson })
    ] }),
    selection.type === "logical" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-md border border-exp-neutral-30 bg-exp-neutral-10 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wide text-exp-neutral-200 mb-1", children: "Selected logical company" }),
      matchedBreakdown ? /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-300", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-exp-neutral-700", children: matchedBreakdown.logicalCompanyName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-300", children: "Physical company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-exp-neutral-700", children: matchedBreakdown.physicalCompanyName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-300", children: "Logical company id" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-exp-neutral-700 font-mono", children: matchedBreakdown.logicalCompanyId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-300", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-exp-neutral-700 font-mono", children: matchedBreakdown.totalAmount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-300", children: "Reconciled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-exp-green-500 font-mono", children: matchedBreakdown.reconciledAmount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-300", children: "Variance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-exp-red-500 font-mono", children: matchedBreakdown.varianceAmount })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-exp-neutral-300", children: [
        "No matching breakdown for id ",
        selection.logicalCompanyId,
        "."
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-md border border-exp-neutral-30 bg-exp-neutral-10 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wide text-exp-neutral-200 mb-1", children: "Scope" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-exp-neutral-700", children: "Showing all transactions for the master account." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-md border border-exp-neutral-30 bg-exp-neutral-10 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wide text-exp-neutral-200 mb-1", children: "Equivalent BE call" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "block text-xs text-exp-neutral-700 font-mono break-all", children: beQuery })
    ] })
  ] });
}, "FilterPreview");
const ReconciliationDetailPage = /* @__PURE__ */ __name(() => {
  const { id } = useParams();
  const { state } = useLocation();
  const { navigateBack } = useNavigateBack({
    fallback: RoutePaths.Reconciliations,
    basePath: RoutePaths.Reconciliations
  });
  const item = state == null ? void 0 : state.item;
  const headerTitle = formatHeaderTitle(item);
  const headerSubtitle = formatHeaderSubtitle(item);
  const [selection, setSelection] = useState(ALL_COMPANIES_SELECTION);
  useEffect(() => {
    setSelection(ALL_COMPANIES_SELECTION);
  }, [id]);
  const { data: aggregation } = useCompanyTransactionsAggregation(id);
  const matchedBreakdown = selection.type === "logical" ? aggregation == null ? void 0 : aggregation.logicalCompanyBreakdown.find(
    (b) => b.logicalCompanyId === selection.logicalCompanyId
  ) : void 0;
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
      headerSubtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-exp-neutral-600", children: headerSubtitle }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex gap-4 min-h-0 bg-exp-neutral-10 rounded-lg border border-exp-neutral-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CompanySummaryPanel,
        {
          statementId: id,
          currencyCode: item == null ? void 0 : item.currencyCode,
          selection,
          onSelectionChange: setSelection
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FilterPreview,
        {
          statementId: id,
          selection,
          matchedBreakdown
        }
      )
    ] })
  ] });
}, "ReconciliationDetailPage");
export {
  ReconciliationDetailPage as default
};

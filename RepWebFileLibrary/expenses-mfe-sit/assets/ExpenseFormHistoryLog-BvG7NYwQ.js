import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { v as p, a7 as mt, a8 as Dt, U as Ue, A as An, a9 as ht } from "./index.es-BcmpdPPF.js";
import { E as ExpenseFormStatus } from "./expense-data-Du2WjKhi.js";
import { b as useCompanyStore, e as useQuery, q as queryKeys, E as EXPENSE_ENDPOINTS, ah as formatHistoryTimestamp } from "./expense-api-DDqwJ3Mw.js";
import { a as apiClient } from "./axiosInstance-CEIQAuKQ.js";
import { I as Info } from "./info-VmUiqK8b.js";
import { R as RefreshCw } from "./refresh-cw-BCumYqkP.js";
var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Submitted"] = "submitted";
  ActionType2["Approved"] = "approved";
  ActionType2["Rejected"] = "rejected";
  ActionType2["Cancelled"] = "cancelled";
  ActionType2["Resubmitted"] = "resubmitted";
  ActionType2["Saved"] = "saved";
  return ActionType2;
})(ActionType || {});
const normalizeLower = (value) => value == null ? void 0 : value.toLowerCase();
function mapActionType(value) {
  const normalized = normalizeLower(value);
  if (Object.values(ActionType).includes(normalized)) {
    return normalized;
  }
  throw new Error(`Invalid ActionType: ${value}`);
}
function mapFormStatus(value) {
  const normalized = normalizeLower(value);
  if (Object.values(ExpenseFormStatus).includes(normalized)) {
    return normalized;
  }
  throw new Error(`Invalid FormStatus: ${value}`);
}
const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const useExpenseFormHistory = ({
  expenseFormId,
  enabled = true
}) => {
  const logicalCompanyShortName = useCompanyStore(
    (state) => {
      var _a;
      return (_a = state.userDefaultCompany) == null ? void 0 : _a.shortName;
    }
  );
  return useQuery({
    queryKey: queryKeys.expenseHistory.detail(
      logicalCompanyShortName ?? "",
      expenseFormId.toString()
    ),
    queryFn: async () => {
      var _a;
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_APPROVAL_HISTORY(logicalCompanyShortName, expenseFormId.toString())
      );
      const history = ((_a = response.data.history) == null ? void 0 : _a.map((entry) => ({
        ...entry,
        actionType: mapActionType(entry.actionType),
        formStatus: mapFormStatus(entry.formStatus)
      }))) ?? [];
      return {
        ...response.data,
        history
      };
    },
    enabled: enabled && !!logicalCompanyShortName && !!expenseFormId,
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  });
};
const ExpenseHistoryLogEntry = ({ entry }) => {
  const formattedTimestamp = formatHistoryTimestamp(entry.actionTimestamp);
  const actionLabel = capitalize(entry.actionType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs w-auto font-semibold text-exp-neutral-600 whitespace-nowrap", children: [
      actionLabel,
      " by ",
      entry.actorFullName,
      " ",
      formattedTimestamp
    ] }),
    entry.comment && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: p("text-xs italic text-wrap text-exp-neutral-600", {
          "text-exp-red-500": entry.actionType === ActionType.Rejected,
          "text-exp-grey-600": entry.actionType === ActionType.Cancelled
        }),
        children: [
          '"',
          entry.comment,
          '"'
        ]
      }
    )
  ] });
};
const { useState } = await importShared("react");
const ExpenseFormHistoryLog = ({
  expenseFormId,
  className = ""
}) => {
  var _a, _b;
  const [open, setOpen] = useState(false);
  const {
    data: historyData,
    isLoading,
    isError,
    refetch
  } = useExpenseFormHistory({
    expenseFormId
  });
  const mostRecentStatus = ((_b = (_a = historyData == null ? void 0 : historyData.history) == null ? void 0 : _a[0]) == null ? void 0 : _b.formStatus) ?? null;
  const statusLabel = mostRecentStatus ? capitalize(mostRecentStatus) : null;
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-6 text-exp-primary-blue-600" }) });
    }
    if (isError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 px-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-700 text-center mb-4 text-nowrap", children: "Failed to load history. Please try again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            variant: "outlined",
            size: "sm",
            onClick: () => refetch(),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "size-4" }),
            children: "Retry"
          }
        )
      ] });
    }
    if (!(historyData == null ? void 0 : historyData.history) || historyData.history.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-500 text-center w-full text-nowrap", children: "No history available for this expense form." }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 py-3 px-4", children: historyData.history.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseHistoryLogEntry, { entry }, entry.id)) });
  };
  const getStatusColor = (status) => {
    if (!status || isLoading)
      return "bg-exp-grey-100 text-exp-primary-blue-800";
    switch (status) {
      case ExpenseFormStatus.Draft:
        return "bg-exp-neutral-100 text-exp-neutral-700";
      case ExpenseFormStatus.Submitted:
        return "bg-exp-primary-blue-100 text-exp-primary-blue-600";
      case ExpenseFormStatus.Approved:
        return "bg-exp-green-100 text-exp-green-800";
      case ExpenseFormStatus.Rejected:
        return "bg-exp-red-100 text-exp-red-600";
      case ExpenseFormStatus.Cancelled:
        return "bg-exp-grey-100 text-exp-primary-blue-800";
      default:
        return "bg-exp-grey-100 text-exp-primary-blue-800";
    }
  };
  if (!isLoading && !mostRecentStatus) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(mt, { open, onOpenChange: handleOpenChange, modal: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "outlined",
        size: "sm",
        className: p(
          "text-sm rounded-full py-1 px-2 hover:cursor-pointer",
          getStatusColor(mostRecentStatus),
          className
        ),
        children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(An, { className: "size-4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          statusLabel,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-4" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ht,
      {
        side: "bottom",
        align: "start",
        className: "rounded-lg flex w-min bg-exp-neutral-0 p-0",
        children: renderContent()
      }
    )
  ] });
};
export {
  ExpenseFormHistoryLog as E
};

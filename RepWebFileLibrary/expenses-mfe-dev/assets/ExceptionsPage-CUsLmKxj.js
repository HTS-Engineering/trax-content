var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { C as useQueryClient, aJ as replaceEqualDeep, aK as notifyManager, aB as isRecord, aL as isWholeNumber, aM as unexpected, aN as isId, aO as isOptionalString, aP as queryOptions, a6 as keepPreviousData, G as queryKeys, H as apiClient, aQ as EXCEPTION_ENDPOINTS, aR as readOrReport, a5 as useAppQuery, ah as useErrorSurface, aS as exceptionsCountQueryOptions, aG as formatDate, F as useMutation, N as Ni, K as classifyError, L as AppError, v as jsxRuntimeExports, au as je, an as ir, ae as Icon, aT as gt, aU as jt, aV as St, aW as BASE_SYSTEM_FOOTER_COLLISION_PADDING, aX as us, aY as isExpenseStatus, a4 as Ts, aZ as TOOLTIP_DELAY_TRUNCATED_TEXT, a_ as m, a8 as ts, af as Cr, a$ as useQuery, b0 as to, av as Tt, b1 as TOOLTIP_DELAY_QUICK, b2 as no, aw as zt, ax as Lt, b3 as ro, b4 as ci, b5 as fi, ak as DataLoadError, aj as Mi, al as ns } from "./__federation_expose_Mount-CJ4ONQif.js";
import { importShared } from "./__federation_fn_import-C6RcFm-3.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-BNrOFt_k.js";
const React = await importShared("react");
function useIsMutating(filters, queryClient) {
  const client = useQueryClient(queryClient);
  return useMutationState(
    { filters: { ...filters, status: "pending" } },
    client
  ).length;
}
__name(useIsMutating, "useIsMutating");
function getResult(mutationCache, options) {
  return mutationCache.findAll(options.filters).map(
    (mutation) => options.select ? options.select(mutation) : mutation.state
  );
}
__name(getResult, "getResult");
function useMutationState(options = {}, queryClient) {
  const mutationCache = useQueryClient(queryClient).getMutationCache();
  const optionsRef = React.useRef(options);
  const result = React.useRef(null);
  if (result.current === null) {
    result.current = getResult(mutationCache, options);
  }
  React.useEffect(() => {
    optionsRef.current = options;
  });
  return React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => mutationCache.subscribe(() => {
        const nextResult = replaceEqualDeep(
          result.current,
          getResult(mutationCache, optionsRef.current)
        );
        if (result.current !== nextResult) {
          result.current = nextResult;
          notifyManager.schedule(onStoreChange);
        }
      }),
      [mutationCache]
    ),
    () => result.current,
    () => result.current
  );
}
__name(useMutationState, "useMutationState");
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
function toTryAgainResponse(data) {
  if (!isRecord(data) || !isId(data.id) || typeof data.businessId !== "string") throw unexpected("Try Again");
  const answer = { id: data.id, businessId: data.businessId };
  if (typeof data.state === "string") answer.state = data.state;
  return answer;
}
__name(toTryAgainResponse, "toTryAgainResponse");
function toMoveToDraftResponse(data) {
  if (!isRecord(data) || !isId(data.id) || typeof data.businessId !== "string") throw unexpected("Move to Draft");
  const answer = { id: data.id, businessId: data.businessId };
  if (typeof data.status === "string") answer.status = data.status;
  return answer;
}
__name(toMoveToDraftResponse, "toMoveToDraftResponse");
async function tryAgainException(id) {
  const { data } = await apiClient.post(EXCEPTION_ENDPOINTS.TRY_AGAIN.build({ id }));
  return readOrReport(toTryAgainResponse, data);
}
__name(tryAgainException, "tryAgainException");
async function moveExceptionToDraft(id, request) {
  const { data } = await apiClient.post(EXCEPTION_ENDPOINTS.MOVE_TO_DRAFT.build({ id }), request);
  return readOrReport(toMoveToDraftResponse, data);
}
__name(moveExceptionToDraft, "moveExceptionToDraft");
const changedByTryAgain = /* @__PURE__ */ __name(() => [
  queryKeys.expensesList.all(),
  queryKeys.approvalsList.all(),
  queryKeys.expenseItem.all()
], "changedByTryAgain");
const changedByMoveToDraft = /* @__PURE__ */ __name(() => [
  ...changedByTryAgain(),
  queryKeys.expenseHistory.all(),
  queryKeys.cardholderTransactions.all(),
  queryKeys.transactions.all(),
  queryKeys.bankStatements.all(),
  queryKeys.companyTransactions.all(),
  queryKeys.cardholderReconciliations.all()
], "changedByMoveToDraft");
function invalidateAfterAction(queryClient, changedElsewhere) {
  for (const queryKey of changedElsewhere) void queryClient.invalidateQueries({ queryKey });
  return queryClient.invalidateQueries({ queryKey: queryKeys.exceptions.all() });
}
__name(invalidateAfterAction, "invalidateAfterAction");
function invalidateAfterTryAgain(queryClient) {
  return invalidateAfterAction(queryClient, changedByTryAgain());
}
__name(invalidateAfterTryAgain, "invalidateAfterTryAgain");
function invalidateAfterMoveToDraft(queryClient) {
  return invalidateAfterAction(queryClient, changedByMoveToDraft());
}
__name(invalidateAfterMoveToDraft, "invalidateAfterMoveToDraft");
var ExceptionsSortField = /* @__PURE__ */ ((ExceptionsSortField2) => {
  ExceptionsSortField2["DetectedOn"] = "detectedOn";
  return ExceptionsSortField2;
})(ExceptionsSortField || {});
const MOVE_TO_DRAFT_COMMENT_MAX_LENGTH = 150;
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
  moveToDraft: "Move to Draft",
  moveToDraftComment: "Comment",
  moveToDraftPlaceholder: "Add a resolution note to submitter",
  moveToDraftCancel: "Cancel",
  moveToDraftConfirm: "Confirm",
  issueResolved: "Issue resolved",
  movedToDraft: "Moved to draft",
  // Try Again per-status copy (shown instead of the backend text that contains internal form ids)
  tryAgainNotFound: "This expense form was not found. It may have already been resolved.",
  tryAgainConflict: "This exception is already being retried.",
  tryAgainValidation: "This exception is no longer in an error state.",
  // Move to Draft per-status copy
  moveToDraftNotFound: "This expense form was not found. It may have already been resolved.",
  moveToDraftConflict: "This exception is already being moved to draft.",
  moveToDraftValidation: "This exception is no longer in an error state."
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
const useMoveExceptionToDraft = /* @__PURE__ */ __name((id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["exceptions", id, "move-to-draft"],
    meta: { errorCopy: { fallback: "Failed to move. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async (comment) => {
      try {
        return await moveExceptionToDraft(id, { comment });
      } catch (error) {
        const { kind } = classifyError(error);
        if (kind === "notFound") throw new AppError(EXCEPTIONS_LIST_COPY.moveToDraftNotFound);
        if (kind === "conflict") throw new AppError(EXCEPTIONS_LIST_COPY.moveToDraftConflict);
        if (kind === "validation") throw new AppError(EXCEPTIONS_LIST_COPY.moveToDraftValidation);
        throw error;
      }
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      Ni.success(EXCEPTIONS_LIST_COPY.movedToDraft, {
        style: { backgroundColor: "white" },
        className: "[&_button]:hidden [&>div]:gap-2"
      });
    }, "onSuccess"),
    // Refresh after both outcomes: a 422 means another admin already handled the form.
    onSettled: /* @__PURE__ */ __name(() => invalidateAfterMoveToDraft(queryClient), "onSettled")
  });
}, "useMoveExceptionToDraft");
const useTryAgainException = /* @__PURE__ */ __name((id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["exceptions", id, "try-again"],
    meta: { errorCopy: { fallback: "Could not retry the exception. Please try again." } },
    mutationFn: /* @__PURE__ */ __name(async () => {
      try {
        return await tryAgainException(id);
      } catch (error) {
        const { kind } = classifyError(error);
        if (kind === "notFound") throw new AppError(EXCEPTIONS_LIST_COPY.tryAgainNotFound);
        if (kind === "conflict") throw new AppError(EXCEPTIONS_LIST_COPY.tryAgainConflict);
        if (kind === "validation") throw new AppError(EXCEPTIONS_LIST_COPY.tryAgainValidation);
        throw error;
      }
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      Ni.success(EXCEPTIONS_LIST_COPY.issueResolved, {
        style: { backgroundColor: "white" },
        // Close button is baked into ShowToast.success; hide it and tighten icon-to-text gap
        className: "[&_button]:hidden [&>div]:gap-2"
      });
    }, "onSuccess"),
    // Called after both success and failure: a 409 or 422 means someone else already handled
    // the form, and a timeout may still have gone through, so the list must refresh either way.
    onSettled: /* @__PURE__ */ __name(() => invalidateAfterTryAgain(queryClient), "onSettled")
  });
}, "useTryAgainException");
const { useState: useState$2 } = await importShared("react");
const ExceptionActionsCell = /* @__PURE__ */ __name(({ id, businessId }) => {
  const { mutate: tryAgain } = useTryAgainException(id);
  const { mutate: moveToDraft } = useMoveExceptionToDraft(id);
  const isTrying = useIsMutating({ mutationKey: ["exceptions", id, "try-again"] }) > 0;
  const isMoving = useIsMutating({ mutationKey: ["exceptions", id, "move-to-draft"] }) > 0;
  const isRowBusy = isTrying || isMoving;
  const [open, setOpen] = useState$2(false);
  const [comment, setComment] = useState$2("");
  const handleOpenChange = /* @__PURE__ */ __name((next) => {
    if (!next && isMoving) return;
    setOpen(next);
  }, "handleOpenChange");
  const handleCancel = /* @__PURE__ */ __name(() => {
    if (isMoving) return;
    setComment("");
    setOpen(false);
  }, "handleCancel");
  const handleConfirm = /* @__PURE__ */ __name(() => {
    moveToDraft(comment, {
      onSuccess: /* @__PURE__ */ __name(() => {
        setComment("");
        setOpen(false);
      }, "onSuccess")
    });
  }, "handleConfirm");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      je,
      {
        type: "button",
        variant: "ghost",
        iconPosition: "center",
        icon: isTrying ? /* @__PURE__ */ jsxRuntimeExports.jsx(ir, { "aria-hidden": true, className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: "size-4 svg-color-inherit" }),
        className: "p-1!",
        disabled: isRowBusy,
        "aria-label": `${EXCEPTIONS_LIST_COPY.tryAgain} for expense ${businessId}`,
        "data-testid": `exceptions-try-again-button-${businessId}`,
        onClick: /* @__PURE__ */ __name(() => tryAgain(), "onClick")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(gt, { open, onOpenChange: handleOpenChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(jt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        je,
        {
          type: "button",
          variant: "soft",
          size: "sm",
          "aria-label": `${EXCEPTIONS_LIST_COPY.moveToDraft} for expense ${businessId}`,
          "data-testid": `exceptions-move-to-draft-button-${businessId}`,
          className: "data-[state=open]:bg-trax-primary-blue-100",
          disabled: isRowBusy,
          children: EXCEPTIONS_LIST_COPY.moveToDraft
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        St,
        {
          side: "bottom",
          align: "end",
          sideOffset: 8,
          collisionPadding: BASE_SYSTEM_FOOTER_COLLISION_PADDING,
          className: "w-[352px]",
          "aria-label": EXCEPTIONS_LIST_COPY.moveToDraft,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              us,
              {
                label: EXCEPTIONS_LIST_COPY.moveToDraftComment,
                value: comment,
                onChange: /* @__PURE__ */ __name((e) => setComment(e.target.value), "onChange"),
                placeholder: EXCEPTIONS_LIST_COPY.moveToDraftPlaceholder,
                maxCharacters: MOVE_TO_DRAFT_COMMENT_MAX_LENGTH,
                showCharacterCount: true,
                enforceMaxLength: true,
                className: "h-24 resize-none overflow-y-auto text-sm",
                "data-testid": `exceptions-move-to-draft-comment-${businessId}`,
                required: true,
                "aria-required": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                je,
                {
                  type: "button",
                  variant: "soft",
                  size: "sm",
                  disabled: isMoving,
                  onClick: handleCancel,
                  "data-testid": `exceptions-move-to-draft-cancel-${businessId}`,
                  children: EXCEPTIONS_LIST_COPY.moveToDraftCancel
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                je,
                {
                  type: "button",
                  size: "sm",
                  "aria-label": EXCEPTIONS_LIST_COPY.moveToDraftConfirm,
                  disabled: comment.trim().length === 0 || isMoving,
                  onClick: handleConfirm,
                  "data-testid": `exceptions-move-to-draft-confirm-${businessId}`,
                  children: isMoving ? /* @__PURE__ */ jsxRuntimeExports.jsx(ir, { "aria-hidden": true, className: "size-4" }) : EXCEPTIONS_LIST_COPY.moveToDraftConfirm
                }
              )
            ] })
          ] })
        }
      )
    ] })
  ] });
}, "ExceptionActionsCell");
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
    cell: /* @__PURE__ */ __name(({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExceptionActionsCell, { id: row.original.id, businessId: row.original.businessId }), "cell")
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
  // DataTable gives N-10 only to clickable rows, and these open nothing.
  // has-[[data-state=open]] keeps the highlight while the comment box is open (Radix sets
  // data-state="open" on the PopoverTrigger, which lives inside the row).
  bodyRow: "hover:bg-exp-neutral-10 has-[[data-state=open]]:bg-exp-neutral-10",
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

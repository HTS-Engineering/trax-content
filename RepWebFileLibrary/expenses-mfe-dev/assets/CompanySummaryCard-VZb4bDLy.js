const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/core-h6I_NSVU.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/_commonjsHelpers-CUmg6egw.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { importShared } from "./__federation_fn_import-CJZmLbkm.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as createLucideIcon, b as Us, U as Ue, B as Bn, a as Tr, a8 as wn, a9 as Do, aa as Pt, ab as Mo, ac as Eo, ad as yn, f as Js, Z as Za, _ as ti, Q as Qa, g as es, W as Ws, E as Ea, h as Zs, n as ns, p } from "./index.es-CApEQq_T.js";
import { d as useCompanyStore, i as useQuery, q as queryKeys, k as keepPreviousData, h as formatExpenseDate, v as formatExpensePeriod, t as parseDateOnlyAsLocal, n as useMutation, m as useQueryClient, B as getCurrencySymbol, j as useSearchParams, l as useLocation, a as RoutePaths, x as useNavigateWithReturn, p as useErrorToast, g as generatePath, E as EMPTY_CURRENCY_SYMBOL } from "./date-format-DIhAE6zS.js";
import { a as apiClient } from "./axiosInstance-Dka64nrW.js";
import { I as Icon } from "./Icon-08JP3B1K.js";
import { d as formatCurrency, f as formatAmountWithCurrency } from "./formatters-DaCXJPio.js";
import { i as isHttpApiError, a as TOOLTIP_DELAY_TRUNCATED_TEXT } from "./http-errors-B33aXf1a.js";
import { d as devError } from "./index-DGIiGjWN.js";
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
import { E as EmptyState } from "./EmptyState-h7_szy0g.js";
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const RECONCILIATION_ENDPOINTS = {
  // CSV upload for a given master account. `statement_id` is sent as a query param.
  CSV_UPLOAD: (masterAccountId) => `/api/v1.0/reconciliation/${encodeURIComponent(masterAccountId)}/csv-upload`,
  // Get bank statements
  GET_BANK_STATEMENTS: "/api/v1.0/reconciliation/bank-statements",
  // Release a staged bank statement (commits the uploaded transactions).
  BANK_STATEMENT_RELEASE: (statementId) => `/api/v1.0/reconciliation/bank-statements/${encodeURIComponent(statementId)}/release`,
  // Cancel (delete) a staged bank statement upload (abandons the temp data).
  BANK_STATEMENT_CANCEL: (statementId) => `/api/v1.0/reconciliation/bank-statements/${encodeURIComponent(statementId)}/cancel`,
  // Aggregated transaction totals per logical company for a given statement.
  GET_COMPANY_TRANSACTIONS_AGGREGATION: (statementId) => `/api/v1.0/reconciliation/${encodeURIComponent(statementId)}/transactions-company`
};
const bankStatementTemplateUrl = "data:text/csv;base64,77u/VHJhbnNhY3Rpb24gRGF0ZSxUcmFuc2FjdGlvbiBBbW91bnQsVmVuZG9yIE5hbWUsTWFzdGVyIEFjY291bnQgRGVzY3JpcHRpb24sTGFzdCA0IGRpZ2l0cyBvZiBhY2NvdW50ICMgDQoxMi8zMS8yMDI1LCQxMDUuMDAgLEFpciBDYW5hZGEsSFRTIEVOR0lORUVSSU5HIFVTRCw3MTE5DQoxLzUvMjAyNiwkOTkyLjQ4ICxBaXIgQ2FuYWRhIDEsSFRTIEVOR0lORUVSSU5HIFVTRCw4NjA0DQoxLzI5LzIwMjYsKCQyOS4yOSksQWlyIENhbmFkYSAyLEhUUyBFTkdJTkVFUklORyBVU0QsOTk5OQ0K";
var ReconciliationSortableColumn = /* @__PURE__ */ ((ReconciliationSortableColumn2) => {
  ReconciliationSortableColumn2["ReconciliationDueDate"] = "reconciliationDueDate";
  return ReconciliationSortableColumn2;
})(ReconciliationSortableColumn || {});
var ReconciliationStatus = /* @__PURE__ */ ((ReconciliationStatus2) => {
  ReconciliationStatus2["Upload"] = "upload";
  ReconciliationStatus2["InProgress"] = "in progress";
  ReconciliationStatus2["Overdue"] = "overdue";
  ReconciliationStatus2["Complete"] = "complete";
  return ReconciliationStatus2;
})(ReconciliationStatus || {});
const parseReconciliationStatus = (value) => {
  if (!value) return null;
  const normalized = value.toLowerCase();
  const known = Object.values(ReconciliationStatus).find((s) => s === normalized);
  return known ?? null;
};
const mapReconciliationApiItem = (item) => {
  return {
    id: item.id,
    masterAccountId: item.master_account_id,
    name: item.master_account_name,
    currencyCode: item.currency,
    statementPeriod: formatExpensePeriod({
      from: parseDateOnlyAsLocal(item.start_period),
      to: parseDateOnlyAsLocal(item.end_period)
    }),
    reconciliationDueDate: formatExpenseDate(item.reconciliation_due_date),
    totalAmount: item.total_amount ? parseFloat(item.total_amount) : void 0,
    reconciledAmount: item.reconciled_amount ? parseFloat(item.reconciled_amount) : void 0,
    varianceAmount: item.variance ? parseFloat(item.variance) : void 0,
    actionOrStatus: parseReconciliationStatus(item.status)
  };
};
const useReconciliationsList = (queryParams, options = {}) => {
  const selectedCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.bankStatements.list({ ...queryParams, company: selectedCompany == null ? void 0 : selectedCompany.shortName }),
    enabled: enabled && !!(selectedCompany == null ? void 0 : selectedCompany.shortName),
    placeholderData: keepPreviousData,
    queryFn: async () => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const params = new URLSearchParams();
      if (queryParams.sortOrder) {
        params.append("sortOrder", queryParams.sortOrder);
      }
      if (queryParams.pageNumber !== void 0) {
        params.append("pageNumber", String(queryParams.pageNumber));
      }
      if (queryParams.pageSize !== void 0) {
        params.append("pageSize", String(queryParams.pageSize));
      }
      const url = `${RECONCILIATION_ENDPOINTS.GET_BANK_STATEMENTS}?${params.toString()}`;
      const response = await apiClient.get(url);
      return {
        items: response.data.results.filter((item) => item.master_account_active || parseReconciliationStatus(item.status) !== ReconciliationStatus.Upload).map(mapReconciliationApiItem),
        totalPages: response.data.totalPages ?? 0,
        totalObjects: response.data.totalObjects ?? 0
      };
    },
    staleTime: 60 * 1e3
  });
};
const CSV_MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;
const CSV_ACCEPT_ATTRIBUTE = ".csv,text/csv";
const UPLOAD_TIMEOUT_MS = 12e4;
const PROCESSING_PHASE_DURATION_MS = 1e3;
const PROCESSING_PHASE_ORDER = [
  "uploading",
  "validating",
  "importing"
];
const PROCESSING_PHASE_LABEL = {
  uploading: "Uploading...",
  validating: "Validating...",
  importing: "Importing..."
};
const UPLOAD_ERROR_TITLE = {
  unsupportedType: "Unsupported file type",
  empty: "Empty file",
  templateMismatch: "Template format mismatch",
  tooLarge: "File size too large",
  corrupted: "Corrupted file",
  generic: "Upload error"
};
const UPLOAD_ERROR_MESSAGE = {
  unsupportedType: "The file must be in .csv format. Replace file with a valid format.",
  empty: "The uploaded file is empty. Upload a valid file.",
  templateMismatch: "The file doesn't match the import template. Use matching column headers.",
  tooLarge: "The file must be under 50MB. Ensure the selected file is within this limit.",
  corrupted: "The file cannot be opened. Upload a valid file.",
  generic: "Fail to upload. Please try again."
};
const VALIDATION_ERROR_COPY = {
  masterAccountTitle: "Master account mismatch",
  masterAccountMessage: "Master account description in one or more rows doesn't match this master account. Update the file or select the correct account for upload.",
  dataErrorsTitle: "Data errors",
  dataErrorsMessage: "Fix these issues in the file and upload again",
  columnRow: "ROW",
  columnIssue: "ISSUE"
};
const VALIDATION_ERROR_TYPE = {
  MasterAccountMismatch: "Master account mismatch",
  DataErrors: "Data Errors",
  UnrecognizedCardholders: "Unrecognized cardholders"
};
const IMPORT_ERROR_COPY = {
  title: "Unrecognized cardholders",
  description: "Verify and configure cardholders with the following card ending digits in the system before continuing"
};
const useUploadStatementCsv = () => useMutation({
  mutationFn: async ({
    masterAccountId,
    statementId,
    file,
    signal
  }) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await apiClient.post(
      RECONCILIATION_ENDPOINTS.CSV_UPLOAD(masterAccountId),
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: UPLOAD_TIMEOUT_MS,
        signal,
        params: { statement_id: statementId }
      }
    );
    return response.data;
  }
});
const useReleaseStatement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ statementId }) => {
      const response = await apiClient.post(
        RECONCILIATION_ENDPOINTS.BANK_STATEMENT_RELEASE(statementId)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reconciliations.all() });
    }
  });
};
const useCancelStatement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ statementId }) => {
      const response = await apiClient.delete(
        RECONCILIATION_ENDPOINTS.BANK_STATEMENT_CANCEL(statementId)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reconciliations.all() });
    }
  });
};
const CONTENT_SNIFF_BYTES = 4100;
const preValidateCsvFile = (file) => {
  if (!file.name.toLowerCase().endsWith(".csv")) {
    return "unsupportedType";
  }
  if (file.size === 0) {
    return "empty";
  }
  if (file.size > CSV_MAX_FILE_SIZE_BYTES) {
    return "tooLarge";
  }
  return null;
};
const validateCsvContent = async (file) => {
  try {
    const { fileTypeFromBuffer } = await __vitePreload(async () => {
      const { fileTypeFromBuffer: fileTypeFromBuffer2 } = await import("./core-h6I_NSVU.js");
      return { fileTypeFromBuffer: fileTypeFromBuffer2 };
    }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
    const head = await file.slice(0, CONTENT_SNIFF_BYTES).arrayBuffer();
    const detected = await fileTypeFromBuffer(new Uint8Array(head));
    if (detected) {
      return "unsupportedType";
    }
    return null;
  } catch (error) {
    devError("CSV content sniffing failed", error);
    return null;
  }
};
const isAbortError = (error) => error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError");
const mapUploadError = (error) => {
  var _a, _b;
  if (!isHttpApiError(error)) return "generic";
  const status = (_a = error.response) == null ? void 0 : _a.status;
  const data = (_b = error.response) == null ? void 0 : _b.data;
  const detail = typeof (data == null ? void 0 : data.detail) === "string" ? data.detail : "";
  if (status === 413) return "tooLarge";
  if (status === 415) return "unsupportedType";
  if (status === 400) {
    const d = detail.toLowerCase();
    if (d.includes(UPLOAD_ERROR_MESSAGE.empty.toLowerCase()) || d.includes("empty")) {
      return "empty";
    }
    if (d.includes(".csv format") || d.includes("valid format")) {
      return "unsupportedType";
    }
    if (d.includes("import template") || d.includes("column headers")) {
      return "templateMismatch";
    }
    if (d.includes("under 50mb") || d.includes("within this limit")) {
      return "tooLarge";
    }
    if (d.includes("cannot be opened")) {
      return "corrupted";
    }
    return "generic";
  }
  return "generic";
};
const isValidationOrImportError = (error) => {
  var _a;
  if (!isHttpApiError(error)) return false;
  return ((_a = error.response) == null ? void 0 : _a.status) === 422;
};
const parseDataErrorRows = (raw) => {
  if (!Array.isArray(raw)) return [];
  const rows = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue;
    const { row, issues } = entry;
    if (typeof row !== "string") continue;
    if (!Array.isArray(issues) || issues.length === 0) continue;
    if (!issues.every((issue) => typeof issue === "string")) continue;
    rows.push({ row, issues });
  }
  return rows;
};
const parseValidationErrorPayload = (error) => {
  var _a, _b, _c;
  if (!isValidationOrImportError(error)) return null;
  const rawDetail = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail;
  if (!Array.isArray(rawDetail)) return null;
  let hasMasterAccountMismatch = false;
  const dataErrors = [];
  for (const entry of rawDetail) {
    if (!entry || typeof entry.type !== "string") continue;
    if (entry.type === VALIDATION_ERROR_TYPE.MasterAccountMismatch) {
      hasMasterAccountMismatch = true;
      continue;
    }
    if (entry.type === VALIDATION_ERROR_TYPE.DataErrors) {
      dataErrors.push(...parseDataErrorRows((_c = entry.errors) == null ? void 0 : _c.details));
      continue;
    }
  }
  if (!hasMasterAccountMismatch && dataErrors.length === 0) return null;
  return { hasMasterAccountMismatch, dataErrors };
};
const parseCardEndings = (raw) => {
  if (!Array.isArray(raw)) return [];
  const endings = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue;
    const { card_last_digits } = entry;
    if (typeof card_last_digits !== "string" || card_last_digits.length === 0) continue;
    endings.push(card_last_digits);
  }
  return endings;
};
const parseImportErrorPayload = (error) => {
  var _a, _b, _c;
  if (!isValidationOrImportError(error)) return null;
  const rawDetail = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail;
  if (!Array.isArray(rawDetail)) return null;
  const endings = [];
  for (const entry of rawDetail) {
    if (!entry || typeof entry.type !== "string" || entry.type !== VALIDATION_ERROR_TYPE.UnrecognizedCardholders) continue;
    endings.push(...parseCardEndings((_c = entry.errors) == null ? void 0 : _c.details));
  }
  if (endings.length === 0) return null;
  return endings;
};
const { useCallback: useCallback$3, useEffect: useEffect$1, useRef: useRef$2, useState: useState$2 } = await importShared("react");
const useUploadFlow = ({
  context,
  onFinished
}) => {
  const [state, setState] = useState$2({ kind: "idle" });
  const abortControllerRef = useRef$2(null);
  const phaseIntervalRef = useRef$2(null);
  const attemptRef = useRef$2(0);
  const { mutateAsync: uploadMutate } = useUploadStatementCsv();
  const { mutate: releaseMutate } = useReleaseStatement();
  const { mutate: cancelMutate } = useCancelStatement();
  const stopPhaseAnimation = useCallback$3(() => {
    if (phaseIntervalRef.current) {
      clearInterval(phaseIntervalRef.current);
      phaseIntervalRef.current = null;
    }
  }, []);
  const startPhaseAnimation = useCallback$3(() => {
    stopPhaseAnimation();
    let index = 0;
    setState({ kind: "processing", phase: PROCESSING_PHASE_ORDER[0] });
    phaseIntervalRef.current = setInterval(() => {
      index += 1;
      if (index >= PROCESSING_PHASE_ORDER.length) {
        stopPhaseAnimation();
        return;
      }
      setState({ kind: "processing", phase: PROCESSING_PHASE_ORDER[index] });
    }, PROCESSING_PHASE_DURATION_MS);
  }, [stopPhaseAnimation]);
  const performUpload = useCallback$3(
    async (file) => {
      var _a;
      const myAttempt = ++attemptRef.current;
      const isStale = () => myAttempt !== attemptRef.current;
      const preError = preValidateCsvFile(file);
      if (preError) {
        if (isStale()) return;
        setState({ kind: "uploadError", error: preError });
        return;
      }
      const contentError = await validateCsvContent(file);
      if (isStale()) return;
      if (contentError) {
        setState({ kind: "uploadError", error: contentError });
        return;
      }
      (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;
      startPhaseAnimation();
      try {
        const summary = await uploadMutate({
          masterAccountId: context.masterAccountId,
          statementId: context.statementId,
          file,
          signal: controller.signal
        });
        if (isStale()) return;
        stopPhaseAnimation();
        if (controller.signal.aborted) {
          setState({ kind: "idle" });
          return;
        }
        setState({ kind: "success", summary });
      } catch (error) {
        if (isStale()) return;
        stopPhaseAnimation();
        if (isAbortError(error) || controller.signal.aborted) {
          setState({ kind: "idle" });
          return;
        }
        if (isValidationOrImportError(error)) {
          const validationPayload = parseValidationErrorPayload(error);
          if (validationPayload) {
            setState({ kind: "validationError", payload: validationPayload });
            return;
          }
          const cardEndings = parseImportErrorPayload(error);
          if (cardEndings) {
            setState({ kind: "importError", payload: { cardEndings, file } });
            return;
          }
          Us.error(
            "Validation failed. The uploaded file contains issues that must be fixed.",
            { duration: 4e3 }
          );
          setState({ kind: "idle" });
          return;
        }
        setState({ kind: "uploadError", error: mapUploadError(error) });
      } finally {
        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }
      }
    },
    [
      context.masterAccountId,
      context.statementId,
      startPhaseAnimation,
      stopPhaseAnimation,
      uploadMutate
    ]
  );
  const startUpload = useCallback$3(
    (file) => {
      void performUpload(file);
    },
    [performUpload]
  );
  const cancelProcessing = useCallback$3(() => {
    var _a;
    if (state.kind !== "processing") return;
    setState({ kind: "cancelling" });
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
  }, [state.kind]);
  const replaceFile = useCallback$3(
    (file) => {
      void performUpload(file);
    },
    [performUpload]
  );
  const retryImport = useCallback$3(() => {
    if (state.kind !== "importError") return;
    void performUpload(state.payload.file);
  }, [state, performUpload]);
  const resetToIdle = useCallback$3(() => {
    var _a;
    attemptRef.current += 1;
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
    stopPhaseAnimation();
    setState({ kind: "idle" });
  }, [stopPhaseAnimation]);
  const cancelStagedUpload = useCallback$3(() => {
    if (state.kind !== "success") return;
    const { summary } = state;
    setState({ kind: "cancellingSuccess", summary });
    cancelMutate(
      { statementId: summary.statementId },
      {
        onSuccess: () => {
          attemptRef.current += 1;
          setState({ kind: "idle" });
        },
        onError: (error) => {
          var _a;
          devError("Cancel staged upload failed", error);
          if (isHttpApiError(error) && ((_a = error.response) == null ? void 0 : _a.status) === 404) {
            attemptRef.current += 1;
            setState({ kind: "idle" });
            return;
          }
          Us.error("Failed to cancel the upload. Please try again.", {
            duration: 3e3
          });
          setState({ kind: "success", summary });
        }
      }
    );
  }, [state, cancelMutate]);
  const release = useCallback$3(() => {
    if (state.kind !== "success") return;
    const { summary } = state;
    setState({ kind: "releasing", summary });
    releaseMutate(
      { statementId: summary.statementId },
      {
        onSuccess: () => {
          onFinished();
        },
        onError: (error) => {
          var _a, _b;
          devError("Release statement failed", error);
          if (isHttpApiError(error) && ((_a = error.response) == null ? void 0 : _a.status) === 409) {
            Us.error(
              "This statement has already been released.",
              { duration: 4e3 }
            );
            onFinished();
            return;
          }
          if (isHttpApiError(error) && ((_b = error.response) == null ? void 0 : _b.status) === 404) {
            attemptRef.current += 1;
            setState({ kind: "idle" });
            Us.error(
              "Your upload session expired. Please upload the file again.",
              { duration: 4e3 }
            );
            return;
          }
          Us.error("Failed to release the statement. Please try again.", {
            duration: 3e3
          });
          setState({ kind: "success", summary });
        }
      }
    );
  }, [state, releaseMutate, onFinished]);
  useEffect$1(
    () => () => {
      var _a;
      (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
      stopPhaseAnimation();
    },
    [stopPhaseAnimation]
  );
  return {
    state,
    startUpload,
    cancelProcessing,
    replaceFile,
    retryImport,
    cancelStagedUpload,
    resetToIdle,
    release
  };
};
await importShared("react");
const DialogHeader = ({ context }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "file-upload", className: "size-4 text-exp-primary-blue-800" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate min-w-0", children: [
    context.masterAccountName,
    " (",
    context.currencyCode,
    ") ",
    context.statementPeriod
  ] })
] });
await importShared("react");
const IdleView = ({ onChooseFile }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-exp-neutral-10 flex flex-col items-center justify-center gap-4 py-16 px-8", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 rounded-full bg-exp-teal-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "note-stack-add", className: "size-12 text-exp-teal-600" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-600", children: "Upload a CSV file that matches the template" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", size: "sm", onClick: onChooseFile, "data-testid": "csv-choose-file", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-exp-neutral-300 font-semibold text-sm", children: "Choose file" }) })
] });
await importShared("react");
const ProcessingView = ({ phase, onCancel }) => {
  const cancelling = phase === null;
  const label = cancelling ? "Cancelling..." : PROCESSING_PHASE_LABEL[phase];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-exp-grey-100 flex flex-col items-center justify-center gap-3 py-16 px-8 min-h-[280px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 rounded-full bg-exp-teal-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-16" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-600", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "soft",
        size: "sm",
        onClick: onCancel,
        disabled: cancelling,
        "data-testid": "csv-cancel-upload",
        children: cancelling ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-exp-neutral-300 font-semibold text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-4" }),
          "Cancel"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-exp-neutral-300 font-semibold text-sm", children: "Cancel" })
      }
    ) })
  ] });
};
await importShared("react");
const UploadErrorView = ({
  error,
  onReplaceFile
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-exp-grey-100 flex flex-col items-center justify-center gap-4 py-12 px-8 min-h-[280px]", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 rounded-full bg-exp-red-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-16 text-exp-red-500" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-exp-red-500", children: UPLOAD_ERROR_TITLE[error] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-600 text-center max-w-sm", children: UPLOAD_ERROR_MESSAGE[error] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ue,
    {
      variant: "soft",
      size: "sm",
      onClick: onReplaceFile,
      "data-testid": "csv-replace-file",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-exp-neutral-300 font-semibold text-sm", children: "Replace file" })
    }
  )
] });
await importShared("react");
const BgSection = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex flex-col gap-3 p-4 rounded-lg bg-exp-neutral-10", children });
await importShared("react");
const ValidationErrorView = ({
  payload,
  onCancel,
  onReplaceFile
}) => {
  const { hasMasterAccountMismatch, dataErrors } = payload;
  const showDataErrors = dataErrors.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-1",
        "data-testid": "csv-validation-scroll",
        children: [
          hasMasterAccountMismatch && /* @__PURE__ */ jsxRuntimeExports.jsx(MasterAccountMismatchSection, {}),
          showDataErrors && /* @__PURE__ */ jsxRuntimeExports.jsx(DataErrorsSection, { rows: dataErrors })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "soft",
          size: "sm",
          onClick: onCancel,
          "data-testid": "csv-validation-cancel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-exp-neutral-300 font-semibold text-sm", children: "Cancel" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          size: "sm",
          onClick: onReplaceFile,
          "data-testid": "csv-validation-replace-file",
          children: "Replace File"
        }
      )
    ] })
  ] });
};
const MasterAccountMismatchSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(BgSection, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-exp-red-500", children: VALIDATION_ERROR_COPY.masterAccountTitle }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-300", children: VALIDATION_ERROR_COPY.masterAccountMessage })
] });
const totalIssueCount = (rows) => rows.reduce((acc, row) => acc + row.issues.length, 0);
const DataErrorsSection = ({ rows }) => {
  const count = totalIssueCount(rows);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BgSection, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-exp-red-500", children: VALIDATION_ERROR_COPY.dataErrorsTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tr,
        {
          variant: "outline",
          className: "h-5 px-2 py-0 rounded-full bg-exp-red-100 text-exp-red-500 text-sm font-semibold",
          "data-testid": "csv-validation-error-count",
          children: count
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-exp-neutral-300", children: VALIDATION_ERROR_COPY.dataErrorsMessage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(wn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Do, { className: "[&_tr]:border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pt, { className: "border-0 hover:bg-transparent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mo, { className: "w-16 text-exp-neutral-200 font-semibold", children: VALIDATION_ERROR_COPY.columnRow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mo, { className: "text-exp-neutral-200 font-semibold", children: VALIDATION_ERROR_COPY.columnIssue })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eo, { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Pt,
        {
          className: "border-0 hover:bg-transparent",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(yn, { className: "align-top text-sm text-exp-neutral-500", children: row.row }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(yn, { className: "align-top whitespace-normal text-sm text-exp-neutral-500", children: row.issues.map((issue, issueIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: issue }, issueIndex)) })
          ]
        },
        `${row.row}-${index}`
      )) })
    ] }) })
  ] });
};
await importShared("react");
const ImportErrorView = ({
  cardEndings,
  onCancel,
  onContinue
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(BgSection, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-exp-yellow-800", children: IMPORT_ERROR_COPY.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tr,
        {
          variant: "outline",
          className: "h-5 px-2 py-0 rounded-full bg-exp-yellow-200 text-exp-yellow-800 text-sm font-semibold",
          "data-testid": "csv-import-error-count",
          children: cardEndings.length
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-exp-grey-600", children: IMPORT_ERROR_COPY.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "ul",
      {
        className: "mt-2 max-h-[40vh] overflow-y-auto pr-1",
        "data-testid": "csv-import-error-scroll",
        children: cardEndings.map((ending, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: "py-1.5 text-sm text-exp-grey-600",
            children: ending
          },
          `${ending}-${index}`
        ))
      }
    )
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "soft",
        size: "sm",
        onClick: onCancel,
        "data-testid": "csv-import-error-cancel",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: "Cancel" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        size: "sm",
        onClick: onContinue,
        "data-testid": "csv-import-error-continue",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: "Continue" })
      }
    )
  ] })
] });
await importShared("react");
const SuccessView = ({
  summary,
  formatAmount,
  onCancel,
  onRelease,
  releasing,
  cancelling
}) => {
  const busy = releasing || cancelling;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-exp-green-50 flex items-center gap-2 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle-fill", className: "size-4 text-trax-green-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-trax-green-800", children: "Statement uploaded successfully!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-exp-neutral-10 flex items-center gap-2 px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "space-y-3 text-base w-full text-exp-neutral-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow$1, { label: "Total transactions", value: summary.totalTransactions.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow$1, { label: "Total amount", value: formatAmount(summary.totalAmount) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow$1, { label: "Cardholders", value: summary.totalCardholders.toString() })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "soft",
          size: "sm",
          onClick: onCancel,
          disabled: busy,
          "data-testid": "csv-success-cancel",
          children: cancelling ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-exp-neutral-300 font-semibold text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-4" }),
            "Cancel"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-exp-neutral-300 font-semibold text-sm", children: "Cancel" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          onClick: onRelease,
          disabled: busy,
          "data-testid": "csv-release-statement",
          children: releasing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-4" }),
            "Releasing..."
          ] }) : "Release Statement"
        }
      )
    ] })
  ] });
};
const SummaryRow$1 = ({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-medium", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-semibold", children: value })
] });
const React = await importShared("react");
const { useCallback: useCallback$2, useMemo: useMemo$3, useRef: useRef$1 } = React;
const UploadStatementDialog = ({
  open,
  context,
  onClose
}) => {
  const fileInputRef = useRef$1(null);
  const {
    state,
    startUpload,
    cancelProcessing,
    replaceFile,
    retryImport,
    cancelStagedUpload,
    resetToIdle,
    release
  } = useUploadFlow({ context, onFinished: onClose });
  const formatAmount = useMemo$3(() => {
    const currency = {
      code: context.currencyCode,
      symbol: getCurrencySymbol(context.currencyCode)
    };
    return (amount) => formatCurrency(amount, { currency, includeCurrencyCode: false });
  }, [context.currencyCode]);
  const openFilePicker = useCallback$2(() => {
    var _a;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, []);
  const handleFileSelect = useCallback$2(
    (event) => {
      var _a;
      const file = (_a = event.target.files) == null ? void 0 : _a[0];
      if (!file) return;
      const isReplace = state.kind === "uploadError" || state.kind === "validationError";
      if (isReplace) {
        replaceFile(file);
      } else {
        startUpload(file);
      }
      event.target.value = "";
    },
    [state.kind, startUpload, replaceFile]
  );
  const showHeaderClose = state.kind === "idle" || state.kind === "uploadError";
  const handleOpenChange = useCallback$2(
    (nextOpen) => {
      if (nextOpen) return;
      if (!showHeaderClose) return;
      onClose();
    },
    [showHeaderClose, onClose]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Js, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Za,
    {
      className: "max-w-[640px] p-6",
      showCloseButton: false,
      onInteractOutside: (e) => e.preventDefault(),
      onEscapeKeyDown: (e) => {
        if (!showHeaderClose) e.preventDefault();
      },
      children: [
        showHeaderClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ti,
          {
            "aria-label": "Close",
            className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Qa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(es, { className: "flex items-center gap-2 min-w-0 text-base font-semibold leading-[1.4] text-exp-primary-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { context }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileInputRef,
            type: "file",
            accept: CSV_ACCEPT_ATTRIBUTE,
            onChange: handleFileSelect,
            className: "hidden",
            "data-testid": "csv-upload-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          state.kind === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(IdleView, { onChooseFile: openFilePicker }),
          state.kind === "processing" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessingView, { phase: state.phase, onCancel: cancelProcessing }),
          state.kind === "cancelling" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessingView, { phase: null, onCancel: cancelProcessing }),
          state.kind === "uploadError" && /* @__PURE__ */ jsxRuntimeExports.jsx(UploadErrorView, { error: state.error, onReplaceFile: openFilePicker }),
          state.kind === "validationError" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ValidationErrorView,
            {
              payload: state.payload,
              onCancel: resetToIdle,
              onReplaceFile: openFilePicker
            }
          ),
          state.kind === "importError" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImportErrorView,
            {
              cardEndings: state.payload.cardEndings,
              onCancel: resetToIdle,
              onContinue: retryImport
            }
          ),
          (state.kind === "success" || state.kind === "releasing" || state.kind === "cancellingSuccess") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SuccessView,
            {
              summary: state.summary,
              formatAmount,
              onCancel: cancelStagedUpload,
              onRelease: release,
              releasing: state.kind === "releasing",
              cancelling: state.kind === "cancellingSuccess"
            }
          )
        ] })
      ]
    }
  ) });
};
const DEFAULT_PAGE_SIZE = 20;
const { useMemo: useMemo$2 } = await importShared("react");
const TextCell = ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal truncate", children: value });
const AmountCell = ({ value, currencyCode }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium truncate", children: formatAmountWithCurrency(value, currencyCode) }) });
const ACTION_STATUS_CONFIG = {
  [ReconciliationStatus.Complete]: { textColor: "text-exp-green-800", bgColor: "bg-exp-green-100", label: "Complete" },
  [ReconciliationStatus.Overdue]: { textColor: "text-exp-red-600", bgColor: "bg-exp-red-100", label: "Overdue" },
  [ReconciliationStatus.InProgress]: { textColor: "text-exp-primary-blue-600", bgColor: "bg-exp-primary-blue-100", label: "In progress" }
};
const ActionStatusCell = ({ value, onUpload }) => {
  if (value === ReconciliationStatus.Upload) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "primary",
        size: "sm",
        className: "px-2 py-1 font-medium",
        onClick: (e) => {
          e.stopPropagation();
          onUpload == null ? void 0 : onUpload();
        },
        children: "Upload"
      }
    );
  }
  if (value === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: "-" });
  }
  const config = ACTION_STATUS_CONFIG[value];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tr, { variant: "outline", className: `${config.bgColor} ${config.textColor} rounded-[20px]`, children: config.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 text-exp-neutral-50 group-hover:text-exp-neutral-200 transition-colors shrink-0" })
  ] });
};
const useReconciliationsColumns = ({ onUpload }) => {
  const staticColumns = useMemo$2(() => [
    {
      id: "name",
      accessorKey: "name",
      enableSorting: false,
      minSize: 150,
      maxSize: 250,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Master Account" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      )
    },
    {
      id: "currencyCode",
      accessorKey: "currencyCode",
      enableSorting: false,
      size: 100,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Currency" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      )
    },
    {
      id: "statementPeriod",
      accessorKey: "statementPeriod",
      enableSorting: false,
      size: 160,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Statement Period" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      )
    },
    {
      id: ReconciliationSortableColumn.ReconciliationDueDate,
      accessorKey: "reconciliationDueDate",
      enableSorting: true,
      size: 160,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Due Date" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      )
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
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AmountCell,
            {
              value: context.getValue(),
              currencyCode: context.row.original.currencyCode
            }
          )
        }
      )
    },
    {
      id: "reconciledAmount",
      accessorKey: "reconciledAmount",
      enableSorting: false,
      size: 140,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Reconciled" }) }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AmountCell,
            {
              value: context.getValue(),
              currencyCode: context.row.original.currencyCode
            }
          )
        }
      )
    },
    {
      id: "varianceAmount",
      accessorKey: "varianceAmount",
      enableSorting: false,
      size: 140,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Variance" }) }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AmountCell,
            {
              value: context.getValue(),
              currencyCode: context.row.original.currencyCode
            }
          )
        }
      )
    },
    {
      id: "actionOrStatus",
      accessorKey: "actionOrStatus",
      enableSorting: false,
      size: 140,
      header: ({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ea, { column, title: "Action/Status" }),
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ws,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ActionStatusCell,
            {
              value: context.getValue(),
              onUpload: () => onUpload(context.row.original)
            }
          )
        }
      )
    }
  ], [onUpload]);
  return { columns: staticColumns };
};
const URL_PARAM_SORT_BY = "sortBy";
const URL_PARAM_SORT_ORDER = "sortOrder";
const URL_PARAM_PAGE = "page";
const DEFAULT_PAGE_INDEX = 0;
const MIN_PAGE_NUMBER = 1;
const isValidSortField = (value) => value !== null && Object.values(ReconciliationSortableColumn).includes(value);
const isValidSortOrder = (value) => value === "asc" || value === "desc";
const getDefaultSortOrder = () => "desc";
const getDefaultSortField = () => ReconciliationSortableColumn.ReconciliationDueDate;
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
const createDefaultFilterState = () => ({
  sorting: [{ id: ReconciliationSortableColumn.ReconciliationDueDate, desc: true }],
  pageIndex: DEFAULT_PAGE_INDEX
});
const parseReturnUrl = (returnUrl) => {
  if (!returnUrl) return null;
  try {
    const url = new URL(returnUrl, window.location.origin);
    const params = url.searchParams;
    const sortBy = params.get(URL_PARAM_SORT_BY);
    const sortOrder = params.get(URL_PARAM_SORT_ORDER);
    const page = params.get(URL_PARAM_PAGE);
    const validSortBy = isValidSortField(sortBy) ? sortBy : getDefaultSortField();
    const validSortOrder = isValidSortOrder(sortOrder) ? sortOrder : getDefaultSortOrder();
    const pageIndex = parsePageNumber(page);
    return {
      sorting: [{ id: validSortBy, desc: validSortOrder === "desc" }],
      pageIndex
    };
  } catch {
    return null;
  }
};
const { useCallback: useCallback$1, useEffect, useMemo: useMemo$1, useRef } = await importShared("react");
const useReconciliationsUrlFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isOnListPage = location.pathname.startsWith(RoutePaths.Reconciliations);
  const locationState = location.state;
  const urlSortBy = searchParams.get(URL_PARAM_SORT_BY);
  const urlSortOrder = searchParams.get(URL_PARAM_SORT_ORDER);
  const urlPage = searchParams.get(URL_PARAM_PAGE);
  const restoredState = useMemo$1(
    () => parseReturnUrl(locationState == null ? void 0 : locationState.returnUrl),
    [locationState == null ? void 0 : locationState.returnUrl]
  );
  const preservedStateRef = useRef(restoredState ?? createDefaultFilterState());
  useEffect(() => {
    if (!isOnListPage) return;
    const needsSortBy = !urlSortBy || !isValidSortField(urlSortBy);
    const needsSortOrder = !urlSortOrder || !isValidSortOrder(urlSortOrder);
    if (needsSortBy || needsSortOrder) {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set(URL_PARAM_SORT_BY, getDefaultSortField());
        next.set(URL_PARAM_SORT_ORDER, getDefaultSortOrder());
        return next;
      }, { replace: true });
    }
  }, [isOnListPage, urlSortBy, urlSortOrder, setSearchParams]);
  const sorting = useMemo$1(() => {
    if (!isOnListPage) return preservedStateRef.current.sorting;
    const sortBy = isValidSortField(urlSortBy) ? urlSortBy : getDefaultSortField();
    const sortOrder = isValidSortOrder(urlSortOrder) ? urlSortOrder : getDefaultSortOrder();
    const result = [{ id: sortBy, desc: sortOrder === "desc" }];
    preservedStateRef.current.sorting = result;
    return result;
  }, [urlSortBy, urlSortOrder, isOnListPage]);
  const columnFilters = useMemo$1(() => [], []);
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
  const handleColumnFiltersChange = useCallback$1(
    (_updater) => {
    },
    []
  );
  const handleSortingChange = useCallback$1((updater) => {
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
  const handlePaginationChange = useCallback$1((updater) => {
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
    sorting,
    columnFilters,
    pagination,
    isOnListPage,
    handleColumnFiltersChange,
    handleSortingChange,
    handlePaginationChange
  };
};
const { useCallback, useMemo, useState: useState$1 } = await importShared("react");
const ReconciliationsList = () => {
  const navigateWithReturn = useNavigateWithReturn();
  const {
    columnFilters,
    sorting,
    pagination,
    isOnListPage,
    handleColumnFiltersChange,
    handleSortingChange,
    handlePaginationChange
  } = useReconciliationsUrlFilters();
  const queryParams = useMemo(() => {
    var _a;
    return {
      sortOrder: ((_a = sorting[0]) == null ? void 0 : _a.desc) ? "desc" : "asc",
      pageNumber: pagination.pageIndex + 1,
      pageSize: DEFAULT_PAGE_SIZE
    };
  }, [sorting, pagination.pageIndex]);
  const { data, isFetching, isPending, isError } = useReconciliationsList(queryParams, { enabled: isOnListPage });
  const reconciliations = (data == null ? void 0 : data.items) ?? [];
  const pageCount = (data == null ? void 0 : data.totalPages) ?? 0;
  const totalItems = (data == null ? void 0 : data.totalObjects) ?? 0;
  const isLoading = isPending || isFetching;
  useErrorToast(isError, "Failed to load reconciliations. Please try again later.");
  const [uploadContext, setUploadContext] = useState$1(null);
  const handleUpload = useCallback((item) => {
    setUploadContext({
      masterAccountId: item.masterAccountId,
      statementId: item.id,
      masterAccountName: item.name,
      currencyCode: item.currencyCode,
      statementPeriod: item.statementPeriod
    });
  }, []);
  const handleUploadClose = useCallback(() => {
    setUploadContext(null);
  }, []);
  const { columns } = useReconciliationsColumns({ onUpload: handleUpload });
  const handleRowClick = useCallback((row) => {
    const { id, actionOrStatus } = row.original;
    if (actionOrStatus === ReconciliationStatus.Upload) return;
    navigateWithReturn(generatePath(RoutePaths.ReconciliationsId, { id: String(id) }), {
      state: { item: row.original }
    });
  }, [navigateWithReturn]);
  const customLoadingState = useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { className: "size-8 text-exp-primary-blue-600" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading" })
  ] }), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-list", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Reconciliations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Manage bank statement uploads and monitor corporate card reconciliations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ue,
        {
          variant: "soft",
          size: "sm",
          className: "ml-auto",
          onClick: () => {
            const link = document.createElement("a");
            link.href = bankStatementTemplateUrl;
            link.download = "bank-statement-template.csv";
            link.click();
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "file-download", className: "size-3.5" }),
            "Download Template"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Zs,
      {
        columns,
        data: reconciliations,
        getRowId: (row) => `reconciliation-${row.id}`,
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
          bodyRow: "group",
          pagination: {
            selectContentWidthMode: "trigger"
          }
        },
        emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "featured-play-list", className: "size-9 text-exp-neutral-100" }),
            title: "No statement available",
            description: "Statement periods for configured accounts will appear here on the statement end date for statement upload.",
            "data-testid": "reconciliation-empty-state"
          }
        )
      }
    ) }),
    uploadContext && /* @__PURE__ */ jsxRuntimeExports.jsx(
      UploadStatementDialog,
      {
        open: true,
        context: uploadContext,
        onClose: handleUploadClose
      }
    )
  ] });
};
const placeholder = () => ({
  text: EMPTY_CURRENCY_SYMBOL,
  isPlaceholder: true
});
const real = (text) => ({
  text,
  isPlaceholder: false
});
const formatSummaryAmount = (amount, currencyCode) => {
  if (amount == null || !Number.isFinite(amount) || amount === 0) {
    return placeholder();
  }
  const text = formatAmountWithCurrency(amount, currencyCode);
  return text === EMPTY_CURRENCY_SYMBOL ? placeholder() : real(text);
};
const formatTotalAmount = (amount, currencyCode) => {
  if (amount != null && !Number.isFinite(amount)) return placeholder();
  const text = formatAmountWithCurrency(amount, currencyCode);
  return text === EMPTY_CURRENCY_SYMBOL ? placeholder() : real(text);
};
const { useState } = await importShared("react");
const SummaryRow = ({ label, formatted, colorClass }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-exp-neutral-200", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "dd",
    {
      className: p(
        "font-medium tabular-nums",
        formatted.isPlaceholder ? "text-exp-neutral-200" : colorClass
      ),
      children: formatted.text
    }
  )
] });
const CompanySummaryCard = ({
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
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
      className: p(
        "w-full text-left rounded-lg px-3 py-2.5 transition-colors bg-exp-neutral-0 border border-exp-neutral-0",
        !isSelected && !isHover && "shadow-exp-menu",
        (isSelected || isHover) && "border-exp-primary-blue-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-exp-primary-blue-600 focus-visible:ring-offset-2",
        isSelected && "bg-exp-primary-blue-50"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ns,
          {
            as: "div",
            size: "sm",
            delayDuration: TOOLTIP_DELAY_TRUNCATED_TEXT,
            className: p(
              "text-sm font-medium leading-5 block text-exp-neutral-600 ",
              isSelected && "text-exp-primary-blue-600 font-semibold"
            ),
            children: title
          }
        ),
        subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          ns,
          {
            as: "div",
            size: "sm",
            delayDuration: TOOLTIP_DELAY_TRUNCATED_TEXT,
            className: p(
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
};
export {
  CompanySummaryCard as C,
  ReconciliationsList as R,
  RECONCILIATION_ENDPOINTS as a
};

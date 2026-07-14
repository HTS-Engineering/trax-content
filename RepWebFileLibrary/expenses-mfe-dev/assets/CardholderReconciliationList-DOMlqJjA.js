const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/core-B6fVcA1e.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/_commonjsHelpers-DRoQK5uS.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { c as createLucideIcon, b as apiClient, d as devError, Z as Zs, U as Ue, Y as Yn, B as Br, al as Rn, am as Vo, an as Ht, ao as To, ap as $o, aq as Nn, o as oi, r as rs, G as si, l as os, m as ss, h as ei, $ as $a, n as ni } from "./configuration-C1Nhb7Ag.js";
import { e as useCompanyStore, r as useQuery, s as keepPreviousData, F as RECONCILIATION_ENDPOINTS, q as queryKeys, p as formatExpenseDate, H as formatExpensePeriod, B as parseDateOnlyAsLocal, i as useMutation, h as useQueryClient, U as getCurrencySymbol, J as formatCurrency, n as formatAmountWithCurrency, t as useSearchParams, u as useLocation, a as RoutePaths, x as useNavigateWithReturn, k as useErrorToast, v as generatePath } from "./use-scroll-into-view-ref-DGEXoh0D.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
import { i as isHttpApiError } from "./http-errors-BNeGbjSk.js";
import { _ as __vitePreload } from "./preload-helper-Bsq79q8M.js";
import { E as EmptyState } from "./EmptyState-BO6SZY8c.js";
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const bankStatementTemplateUrl = "data:text/csv;base64,77u/VHJhbnNhY3Rpb24gRGF0ZSxUcmFuc2FjdGlvbiBBbW91bnQsVmVuZG9yIE5hbWUsTWFzdGVyIEFjY291bnQgRGVzY3JpcHRpb24sTGFzdCA0IGRpZ2l0cyBvZiBhY2NvdW50ICMgDQoxMi8zMS8yMDI1LCQxMDUuMDAgLEFpciBDYW5hZGEsSFRTIEVOR0lORUVSSU5HIFVTRCw3MTE5DQoxLzUvMjAyNiwkOTkyLjQ4ICxBaXIgQ2FuYWRhIDEsSFRTIEVOR0lORUVSSU5HIFVTRCw4NjA0DQoxLzI5LzIwMjYsKCQyOS4yOSksQWlyIENhbmFkYSAyLEhUUyBFTkdJTkVFUklORyBVU0QsOTk5OQ0K";
var ReconciliationSortableColumn = /* @__PURE__ */ ((ReconciliationSortableColumn2) => {
  ReconciliationSortableColumn2["ReconciliationDueDate"] = "reconciliationDueDate";
  return ReconciliationSortableColumn2;
})(ReconciliationSortableColumn || {});
var ReconciliationStatus = /* @__PURE__ */ ((ReconciliationStatus2) => {
  ReconciliationStatus2["Upload"] = "upload";
  ReconciliationStatus2["InProgress"] = "in_progress";
  ReconciliationStatus2["Overdue"] = "overdue";
  ReconciliationStatus2["Complete"] = "complete";
  return ReconciliationStatus2;
})(ReconciliationStatus || {});
const parseReconciliationStatus$1 = /* @__PURE__ */ __name((value) => {
  if (!value) return null;
  const normalized = value.toLowerCase().replace(/\s+/g, "_");
  const known = Object.values(ReconciliationStatus).find((s) => s === normalized);
  return known ?? null;
}, "parseReconciliationStatus$1");
const mapReconciliationApiItem$1 = /* @__PURE__ */ __name((item) => {
  return {
    id: item.id,
    masterAccountId: item.masterAccountId,
    name: item.masterAccountName,
    currencyCode: item.currency,
    statementPeriod: formatExpensePeriod({
      from: parseDateOnlyAsLocal(item.startPeriod),
      to: parseDateOnlyAsLocal(item.endPeriod)
    }),
    reconciliationDueDate: formatExpenseDate(item.reconciliationDueDate),
    totalAmount: item.totalAmount ? parseFloat(item.totalAmount) : void 0,
    reconciledAmount: item.reconciledAmount ? parseFloat(item.reconciledAmount) : void 0,
    varianceAmount: item.variance ? parseFloat(item.variance) : void 0,
    actionOrStatus: parseReconciliationStatus$1(item.status)
  };
}, "mapReconciliationApiItem$1");
const useReconciliationsList = /* @__PURE__ */ __name((queryParams, options = {}) => {
  const selectedCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.bankStatements.list({ ...queryParams, company: selectedCompany == null ? void 0 : selectedCompany.shortName }),
    enabled: enabled && !!(selectedCompany == null ? void 0 : selectedCompany.shortName),
    placeholderData: keepPreviousData,
    queryFn: /* @__PURE__ */ __name(async () => {
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
      const url = `${RECONCILIATION_ENDPOINTS.GET_BANK_STATEMENTS.build()}?${params.toString()}`;
      const response = await apiClient.get(url);
      return {
        items: response.data.results.filter((item) => item.masterAccountActive || parseReconciliationStatus$1(item.status) !== ReconciliationStatus.Upload).map(mapReconciliationApiItem$1),
        totalPages: response.data.totalPages ?? 0,
        totalObjects: response.data.totalObjects ?? 0
      };
    }, "queryFn"),
    staleTime: 60 * 1e3
  });
}, "useReconciliationsList");
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
const useUploadStatementCsv = /* @__PURE__ */ __name(() => useMutation({
  mutationFn: /* @__PURE__ */ __name(async ({
    masterAccountId,
    statementId,
    file,
    signal
  }) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await apiClient.post(
      RECONCILIATION_ENDPOINTS.CSV_UPLOAD.build({ masterAccountId }),
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: UPLOAD_TIMEOUT_MS,
        signal,
        params: { statement_id: statementId }
      }
    );
    return response.data;
  }, "mutationFn")
}), "useUploadStatementCsv");
const useReleaseStatement = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ statementId }) => {
      const response = await apiClient.post(
        RECONCILIATION_ENDPOINTS.BANK_STATEMENT_RELEASE.build({ statementId })
      );
      return response.data;
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reconciliations.all() });
    }, "onSuccess")
  });
}, "useReleaseStatement");
const useCancelStatement = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ statementId }) => {
      const response = await apiClient.delete(
        RECONCILIATION_ENDPOINTS.BANK_STATEMENT_CANCEL.build({ statementId })
      );
      return response.data;
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(() => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reconciliations.all() });
    }, "onSuccess")
  });
}, "useCancelStatement");
const CONTENT_SNIFF_BYTES = 4100;
const preValidateCsvFile = /* @__PURE__ */ __name((file) => {
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
}, "preValidateCsvFile");
const validateCsvContent = /* @__PURE__ */ __name(async (file) => {
  try {
    const { fileTypeFromBuffer } = await __vitePreload(async () => {
      const { fileTypeFromBuffer: fileTypeFromBuffer2 } = await import("./core-B6fVcA1e.js");
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
}, "validateCsvContent");
const isAbortError = /* @__PURE__ */ __name((error) => error instanceof Error && (error.name === "AbortError" || error.name === "CanceledError"), "isAbortError");
const mapUploadError = /* @__PURE__ */ __name((error) => {
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
}, "mapUploadError");
const isValidationOrImportError = /* @__PURE__ */ __name((error) => {
  var _a;
  if (!isHttpApiError(error)) return false;
  return ((_a = error.response) == null ? void 0 : _a.status) === 422;
}, "isValidationOrImportError");
const parseDataErrorRows = /* @__PURE__ */ __name((raw) => {
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
}, "parseDataErrorRows");
const parseValidationErrorPayload = /* @__PURE__ */ __name((error) => {
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
}, "parseValidationErrorPayload");
const parseCardEndings = /* @__PURE__ */ __name((raw) => {
  if (!Array.isArray(raw)) return [];
  const endings = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue;
    const { card_last_digits } = entry;
    if (typeof card_last_digits !== "string" || card_last_digits.length === 0) continue;
    endings.push(card_last_digits);
  }
  return endings;
}, "parseCardEndings");
const parseImportErrorPayload = /* @__PURE__ */ __name((error) => {
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
}, "parseImportErrorPayload");
const { useCallback: useCallback$5, useEffect: useEffect$2, useRef: useRef$2, useState: useState$1 } = await importShared("react");
const useUploadFlow = /* @__PURE__ */ __name(({
  context,
  onFinished
}) => {
  const [state, setState] = useState$1({ kind: "idle" });
  const abortControllerRef = useRef$2(null);
  const phaseIntervalRef = useRef$2(null);
  const attemptRef = useRef$2(0);
  const { mutateAsync: uploadMutate } = useUploadStatementCsv();
  const { mutate: releaseMutate } = useReleaseStatement();
  const { mutate: cancelMutate } = useCancelStatement();
  const stopPhaseAnimation = useCallback$5(() => {
    if (phaseIntervalRef.current) {
      clearInterval(phaseIntervalRef.current);
      phaseIntervalRef.current = null;
    }
  }, []);
  const startPhaseAnimation = useCallback$5(() => {
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
  const performUpload = useCallback$5(
    async (file) => {
      var _a;
      const myAttempt = ++attemptRef.current;
      const isStale = /* @__PURE__ */ __name(() => myAttempt !== attemptRef.current, "isStale");
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
          Zs.error(
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
  const startUpload = useCallback$5(
    (file) => {
      void performUpload(file);
    },
    [performUpload]
  );
  const cancelProcessing = useCallback$5(() => {
    var _a;
    if (state.kind !== "processing") return;
    setState({ kind: "cancelling" });
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
  }, [state.kind]);
  const replaceFile = useCallback$5(
    (file) => {
      void performUpload(file);
    },
    [performUpload]
  );
  const retryImport = useCallback$5(() => {
    if (state.kind !== "importError") return;
    void performUpload(state.payload.file);
  }, [state, performUpload]);
  const resetToIdle = useCallback$5(() => {
    var _a;
    attemptRef.current += 1;
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
    stopPhaseAnimation();
    setState({ kind: "idle" });
  }, [stopPhaseAnimation]);
  const cancelStagedUpload = useCallback$5(() => {
    if (state.kind !== "success") return;
    const { summary } = state;
    setState({ kind: "cancellingSuccess", summary });
    cancelMutate(
      { statementId: summary.statementId },
      {
        onSuccess: /* @__PURE__ */ __name(() => {
          attemptRef.current += 1;
          setState({ kind: "idle" });
        }, "onSuccess"),
        onError: /* @__PURE__ */ __name((error) => {
          var _a;
          devError("Cancel staged upload failed", error);
          if (isHttpApiError(error) && ((_a = error.response) == null ? void 0 : _a.status) === 404) {
            attemptRef.current += 1;
            setState({ kind: "idle" });
            return;
          }
          Zs.error("Failed to cancel the upload. Please try again.", {
            duration: 3e3
          });
          setState({ kind: "success", summary });
        }, "onError")
      }
    );
  }, [state, cancelMutate]);
  const release = useCallback$5(() => {
    if (state.kind !== "success") return;
    const { summary } = state;
    setState({ kind: "releasing", summary });
    releaseMutate(
      { statementId: summary.statementId },
      {
        onSuccess: /* @__PURE__ */ __name(() => {
          onFinished();
        }, "onSuccess"),
        onError: /* @__PURE__ */ __name((error) => {
          var _a, _b;
          devError("Release statement failed", error);
          if (isHttpApiError(error) && ((_a = error.response) == null ? void 0 : _a.status) === 409) {
            Zs.error(
              "This statement has already been released.",
              { duration: 4e3 }
            );
            onFinished();
            return;
          }
          if (isHttpApiError(error) && ((_b = error.response) == null ? void 0 : _b.status) === 404) {
            attemptRef.current += 1;
            setState({ kind: "idle" });
            Zs.error(
              "Your upload session expired. Please upload the file again.",
              { duration: 4e3 }
            );
            return;
          }
          Zs.error("Failed to release the statement. Please try again.", {
            duration: 3e3
          });
          setState({ kind: "success", summary });
        }, "onError")
      }
    );
  }, [state, releaseMutate, onFinished]);
  useEffect$2(
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
}, "useUploadFlow");
await importShared("react");
const DialogHeader = /* @__PURE__ */ __name(({ context }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 bg-exp-primary-blue-50 size-6 flex items-center justify-center rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "file-upload", className: "size-4 text-exp-primary-blue-800" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate min-w-0", children: [
    context.masterAccountName,
    " (",
    context.currencyCode,
    ") ",
    context.statementPeriod
  ] })
] }), "DialogHeader");
await importShared("react");
const IdleView = /* @__PURE__ */ __name(({ onChooseFile }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-exp-neutral-10 flex flex-col items-center justify-center gap-4 py-16 px-8", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 rounded-full bg-exp-teal-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "note-stack-add", className: "size-12 text-exp-teal-600" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-600", children: "Upload a CSV file that matches the template" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", size: "sm", onClick: onChooseFile, "data-testid": "csv-choose-file", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-exp-neutral-300 font-semibold text-sm", children: "Choose file" }) })
] }), "IdleView");
await importShared("react");
const ProcessingView = /* @__PURE__ */ __name(({ phase, onCancel }) => {
  const cancelling = phase === null;
  const label = cancelling ? "Cancelling..." : PROCESSING_PHASE_LABEL[phase];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-exp-grey-100 flex flex-col items-center justify-center gap-3 py-16 px-8 min-h-[280px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 rounded-full bg-exp-teal-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-16" }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }),
          "Cancel"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-exp-neutral-300 font-semibold text-sm", children: "Cancel" })
      }
    ) })
  ] });
}, "ProcessingView");
await importShared("react");
const UploadErrorView = /* @__PURE__ */ __name(({
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
] }), "UploadErrorView");
await importShared("react");
const BgSection = /* @__PURE__ */ __name(({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex flex-col gap-3 p-4 rounded-lg bg-exp-neutral-10", children }), "BgSection");
await importShared("react");
const ValidationErrorView = /* @__PURE__ */ __name(({
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
}, "ValidationErrorView");
const MasterAccountMismatchSection = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(BgSection, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-exp-red-500", children: VALIDATION_ERROR_COPY.masterAccountTitle }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-300", children: VALIDATION_ERROR_COPY.masterAccountMessage })
] }), "MasterAccountMismatchSection");
const totalIssueCount = /* @__PURE__ */ __name((rows) => rows.reduce((acc, row) => acc + row.issues.length, 0), "totalIssueCount");
const DataErrorsSection = /* @__PURE__ */ __name(({ rows }) => {
  const count = totalIssueCount(rows);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BgSection, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-exp-red-500", children: VALIDATION_ERROR_COPY.dataErrorsTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Br,
        {
          variant: "outline",
          className: "h-5 px-2 py-0 rounded-full bg-exp-red-100 text-exp-red-500 text-sm font-semibold",
          "data-testid": "csv-validation-error-count",
          children: count
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-exp-neutral-300", children: VALIDATION_ERROR_COPY.dataErrorsMessage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Rn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Vo, { className: "[&_tr]:border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ht, { className: "border-0 hover:bg-transparent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(To, { className: "w-16 text-exp-neutral-200 font-semibold", children: VALIDATION_ERROR_COPY.columnRow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(To, { className: "text-exp-neutral-200 font-semibold", children: VALIDATION_ERROR_COPY.columnIssue })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx($o, { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ht,
        {
          className: "border-0 hover:bg-transparent",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "align-top text-sm text-exp-neutral-500", children: row.row }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Nn, { className: "align-top whitespace-normal text-sm text-exp-neutral-500", children: row.issues.map((issue, issueIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: issue }, issueIndex)) })
          ]
        },
        `${row.row}-${index}`
      )) })
    ] }) })
  ] });
}, "DataErrorsSection");
await importShared("react");
const ImportErrorView = /* @__PURE__ */ __name(({
  cardEndings,
  onCancel,
  onContinue
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(BgSection, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-exp-yellow-800", children: IMPORT_ERROR_COPY.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Br,
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
] }), "ImportErrorView");
await importShared("react");
const SuccessView = /* @__PURE__ */ __name(({
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Total transactions", value: summary.totalTransactions.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Total amount", value: formatAmount(summary.totalAmount) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Cardholders", value: summary.totalCardholders.toString() })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-4" }),
            "Releasing..."
          ] }) : "Release Statement"
        }
      )
    ] })
  ] });
}, "SuccessView");
const SummaryRow = /* @__PURE__ */ __name(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-medium", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-semibold", children: value })
] }), "SummaryRow");
const React = await importShared("react");
const { useCallback: useCallback$4, useMemo: useMemo$6, useRef: useRef$1 } = React;
const UploadStatementDialog = /* @__PURE__ */ __name(({
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
  const formatAmount = useMemo$6(() => {
    const currency = {
      code: context.currencyCode,
      symbol: getCurrencySymbol(context.currencyCode)
    };
    return (amount) => formatCurrency(amount, { currency, includeCurrencyCode: false });
  }, [context.currencyCode]);
  const openFilePicker = useCallback$4(() => {
    var _a;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, []);
  const handleFileSelect = useCallback$4(
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
  const handleOpenChange = useCallback$4(
    (nextOpen) => {
      if (nextOpen) return;
      if (!showHeaderClose) return;
      onClose();
    },
    [showHeaderClose, onClose]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    rs,
    {
      className: "max-w-[640px] p-6",
      showCloseButton: false,
      onInteractOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onInteractOutside"),
      onEscapeKeyDown: /* @__PURE__ */ __name((e) => {
        if (!showHeaderClose) e.preventDefault();
      }, "onEscapeKeyDown"),
      children: [
        showHeaderClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
          si,
          {
            "aria-label": "Close",
            className: "absolute right-6 top-6 text-exp-neutral-100 hover:text-exp-primary-blue-600 focus:text-exp-primary-blue-800 disabled:text-exp-neutral-70 focus:outline-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(os, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ss, { className: "flex items-center gap-2 min-w-0 text-base font-semibold leading-[1.4] text-exp-primary-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { context }) }) }),
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
}, "UploadStatementDialog");
const DEFAULT_PAGE_SIZE$1 = 20;
const { useMemo: useMemo$5 } = await importShared("react");
const TextCell$1 = /* @__PURE__ */ __name(({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal truncate", children: value }), "TextCell$1");
const AmountCell = /* @__PURE__ */ __name(({ value, currencyCode }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium truncate", children: formatAmountWithCurrency(value, currencyCode) }) }), "AmountCell");
const ACTION_STATUS_CONFIG$1 = {
  [ReconciliationStatus.Complete]: { textColor: "text-exp-green-800", bgColor: "bg-exp-green-100", label: "Complete" },
  [ReconciliationStatus.Overdue]: { textColor: "text-exp-red-600", bgColor: "bg-exp-red-100", label: "Overdue" },
  [ReconciliationStatus.InProgress]: { textColor: "text-exp-primary-blue-600", bgColor: "bg-exp-primary-blue-100", label: "In progress" }
};
const ActionStatusCell = /* @__PURE__ */ __name(({ value, onUpload }) => {
  if (value === ReconciliationStatus.Upload) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: "primary",
        size: "sm",
        className: "px-2 py-1 font-medium",
        onClick: /* @__PURE__ */ __name((e) => {
          e.stopPropagation();
          onUpload == null ? void 0 : onUpload();
        }, "onClick"),
        children: "Upload"
      }
    );
  }
  if (value === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell$1, { value: "-" });
  }
  const config = ACTION_STATUS_CONFIG$1[value];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Br, { variant: "outline", className: `${config.bgColor} ${config.textColor} rounded-[20px]`, children: config.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 text-exp-neutral-50 group-hover:text-exp-neutral-200 transition-colors shrink-0" })
  ] });
}, "ActionStatusCell");
const useReconciliationsColumns = /* @__PURE__ */ __name(({ onUpload }) => {
  const staticColumns = useMemo$5(() => [
    {
      id: "name",
      accessorKey: "name",
      enableSorting: false,
      minSize: 150,
      maxSize: 250,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Master Account" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell$1, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: "currencyCode",
      accessorKey: "currencyCode",
      enableSorting: false,
      size: 100,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Currency" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell$1, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: "statementPeriod",
      accessorKey: "statementPeriod",
      enableSorting: false,
      size: 160,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Statement Period" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell$1, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: ReconciliationSortableColumn.ReconciliationDueDate,
      accessorKey: "reconciliationDueDate",
      enableSorting: true,
      size: 160,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Due Date" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell$1, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: "totalAmount",
      accessorKey: "totalAmount",
      enableSorting: false,
      size: 140,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Total Amount" }) }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
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
      ), "cell")
    },
    {
      id: "reconciledAmount",
      accessorKey: "reconciledAmount",
      enableSorting: false,
      size: 140,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Reconciled" }) }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
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
      ), "cell")
    },
    {
      id: "varianceAmount",
      accessorKey: "varianceAmount",
      enableSorting: false,
      size: 140,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Variance" }) }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
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
      ), "cell")
    },
    {
      id: "actionOrStatus",
      accessorKey: "actionOrStatus",
      enableSorting: false,
      size: 140,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Action/Status" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ActionStatusCell,
            {
              value: context.getValue(),
              onUpload: /* @__PURE__ */ __name(() => onUpload(context.row.original), "onUpload")
            }
          )
        }
      ), "cell")
    }
  ], [onUpload]);
  return { columns: staticColumns };
}, "useReconciliationsColumns");
const URL_PARAM_SORT_BY$1 = "sortBy";
const URL_PARAM_SORT_ORDER$1 = "sortOrder";
const URL_PARAM_PAGE$1 = "page";
const DEFAULT_PAGE_INDEX$1 = 0;
const MIN_PAGE_NUMBER$1 = 1;
const isValidSortField$1 = /* @__PURE__ */ __name((value) => value !== null && Object.values(ReconciliationSortableColumn).includes(value), "isValidSortField$1");
const isValidSortOrder$1 = /* @__PURE__ */ __name((value) => value === "asc" || value === "desc", "isValidSortOrder$1");
const getDefaultSortOrder$1 = /* @__PURE__ */ __name(() => "desc", "getDefaultSortOrder$1");
const getDefaultSortField$1 = /* @__PURE__ */ __name(() => ReconciliationSortableColumn.ReconciliationDueDate, "getDefaultSortField$1");
const parsePageNumber$1 = /* @__PURE__ */ __name((value) => {
  if (value === null) return DEFAULT_PAGE_INDEX$1;
  const parsed = parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < MIN_PAGE_NUMBER$1) return DEFAULT_PAGE_INDEX$1;
  return parsed - 1;
}, "parsePageNumber$1");
const formatPageForUrl$1 = /* @__PURE__ */ __name((pageIndex) => {
  if (pageIndex === DEFAULT_PAGE_INDEX$1) return null;
  return String(pageIndex + 1);
}, "formatPageForUrl$1");
const createDefaultFilterState = /* @__PURE__ */ __name(() => ({
  sorting: [{ id: ReconciliationSortableColumn.ReconciliationDueDate, desc: true }],
  pageIndex: DEFAULT_PAGE_INDEX$1
}), "createDefaultFilterState");
const parseReturnUrl = /* @__PURE__ */ __name((returnUrl) => {
  if (!returnUrl) return null;
  try {
    const url = new URL(returnUrl, window.location.origin);
    const params = url.searchParams;
    const sortBy = params.get(URL_PARAM_SORT_BY$1);
    const sortOrder = params.get(URL_PARAM_SORT_ORDER$1);
    const page = params.get(URL_PARAM_PAGE$1);
    const validSortBy = isValidSortField$1(sortBy) ? sortBy : getDefaultSortField$1();
    const validSortOrder = isValidSortOrder$1(sortOrder) ? sortOrder : getDefaultSortOrder$1();
    const pageIndex = parsePageNumber$1(page);
    return {
      sorting: [{ id: validSortBy, desc: validSortOrder === "desc" }],
      pageIndex
    };
  } catch {
    return null;
  }
}, "parseReturnUrl");
const { useCallback: useCallback$3, useEffect: useEffect$1, useMemo: useMemo$4, useRef } = await importShared("react");
const useReconciliationsUrlFilters = /* @__PURE__ */ __name(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isOnListPage = location.pathname.startsWith(RoutePaths.Reconciliations);
  const locationState = location.state;
  const urlSortBy = searchParams.get(URL_PARAM_SORT_BY$1);
  const urlSortOrder = searchParams.get(URL_PARAM_SORT_ORDER$1);
  const urlPage = searchParams.get(URL_PARAM_PAGE$1);
  const restoredState = useMemo$4(
    () => parseReturnUrl(locationState == null ? void 0 : locationState.returnUrl),
    [locationState == null ? void 0 : locationState.returnUrl]
  );
  const preservedStateRef = useRef(restoredState ?? createDefaultFilterState());
  useEffect$1(() => {
    if (!isOnListPage) return;
    const needsSortBy = !urlSortBy || !isValidSortField$1(urlSortBy);
    const needsSortOrder = !urlSortOrder || !isValidSortOrder$1(urlSortOrder);
    if (needsSortBy || needsSortOrder) {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set(URL_PARAM_SORT_BY$1, getDefaultSortField$1());
        next.set(URL_PARAM_SORT_ORDER$1, getDefaultSortOrder$1());
        return next;
      }, { replace: true });
    }
  }, [isOnListPage, urlSortBy, urlSortOrder, setSearchParams]);
  const sorting = useMemo$4(() => {
    if (!isOnListPage) return preservedStateRef.current.sorting;
    const sortBy = isValidSortField$1(urlSortBy) ? urlSortBy : getDefaultSortField$1();
    const sortOrder = isValidSortOrder$1(urlSortOrder) ? urlSortOrder : getDefaultSortOrder$1();
    const result = [{ id: sortBy, desc: sortOrder === "desc" }];
    preservedStateRef.current.sorting = result;
    return result;
  }, [urlSortBy, urlSortOrder, isOnListPage]);
  const columnFilters = useMemo$4(() => [], []);
  const pagination = useMemo$4(() => {
    if (!isOnListPage) {
      return {
        pageIndex: preservedStateRef.current.pageIndex,
        pageSize: DEFAULT_PAGE_SIZE$1
      };
    }
    const pageIndex = parsePageNumber$1(urlPage);
    preservedStateRef.current.pageIndex = pageIndex;
    return { pageIndex, pageSize: DEFAULT_PAGE_SIZE$1 };
  }, [urlPage, isOnListPage]);
  const handleColumnFiltersChange = useCallback$3(
    (_updater) => {
    },
    []
  );
  const handleSortingChange = useCallback$3((updater) => {
    const newSorting = typeof updater === "function" ? updater(sorting) : updater;
    const sortConfig = newSorting[0];
    const sortBy = (sortConfig == null ? void 0 : sortConfig.id) ?? getDefaultSortField$1();
    const sortOrder = (sortConfig == null ? void 0 : sortConfig.desc) ? "desc" : "asc";
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(URL_PARAM_SORT_BY$1, sortBy);
      next.set(URL_PARAM_SORT_ORDER$1, sortOrder);
      next.delete(URL_PARAM_PAGE$1);
      return next;
    }, { replace: true });
  }, [sorting, setSearchParams]);
  const handlePaginationChange = useCallback$3((updater) => {
    const newPagination = typeof updater === "function" ? updater(pagination) : updater;
    if (newPagination.pageIndex === pagination.pageIndex) return;
    const pageForUrl = formatPageForUrl$1(newPagination.pageIndex);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (pageForUrl === null) {
        next.delete(URL_PARAM_PAGE$1);
      } else {
        next.set(URL_PARAM_PAGE$1, pageForUrl);
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
}, "useReconciliationsUrlFilters");
const { useCallback: useCallback$2, useMemo: useMemo$3, useState } = await importShared("react");
const ReconciliationsList = /* @__PURE__ */ __name(() => {
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
  const queryParams = useMemo$3(() => {
    var _a;
    return {
      sortOrder: ((_a = sorting[0]) == null ? void 0 : _a.desc) ? "desc" : "asc",
      pageNumber: pagination.pageIndex + 1,
      pageSize: DEFAULT_PAGE_SIZE$1
    };
  }, [sorting, pagination.pageIndex]);
  const { data, isFetching, isPending, isError } = useReconciliationsList(queryParams, { enabled: isOnListPage });
  const reconciliations = (data == null ? void 0 : data.items) ?? [];
  const pageCount = (data == null ? void 0 : data.totalPages) ?? 0;
  const totalItems = (data == null ? void 0 : data.totalObjects) ?? 0;
  const isLoading = isPending || isFetching;
  useErrorToast(isError, "Failed to load reconciliations. Please try again later.");
  const [uploadContext, setUploadContext] = useState(null);
  const handleUpload = useCallback$2((item) => {
    setUploadContext({
      masterAccountId: item.masterAccountId,
      statementId: item.id,
      masterAccountName: item.name,
      currencyCode: item.currencyCode,
      statementPeriod: item.statementPeriod
    });
  }, []);
  const handleUploadClose = useCallback$2(() => {
    setUploadContext(null);
  }, []);
  const { columns } = useReconciliationsColumns({ onUpload: handleUpload });
  const handleRowClick = useCallback$2((row) => {
    const { id, actionOrStatus } = row.original;
    if (actionOrStatus === ReconciliationStatus.Upload) return;
    navigateWithReturn(generatePath(RoutePaths.ReconciliationsId, { id: String(id) }), {
      state: { item: row.original }
    });
  }, [navigateWithReturn]);
  const customLoadingState = useMemo$3(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }),
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
          onClick: /* @__PURE__ */ __name(() => {
            const link = document.createElement("a");
            link.href = bankStatementTemplateUrl;
            link.download = "bank-statement-template.csv";
            link.click();
          }, "onClick"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "file-download", className: "size-3.5" }),
            "Download Template"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ni,
      {
        columns,
        data: reconciliations,
        getRowId: /* @__PURE__ */ __name((row) => `reconciliation-${row.id}`, "getRowId"),
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
}, "ReconciliationsList");
var CardholderReconciliationSortableColumn = /* @__PURE__ */ ((CardholderReconciliationSortableColumn2) => {
  CardholderReconciliationSortableColumn2["ReconciliationDueDate"] = "reconciliationDueDate";
  return CardholderReconciliationSortableColumn2;
})(CardholderReconciliationSortableColumn || {});
var CardholderReconciliationStatus = /* @__PURE__ */ ((CardholderReconciliationStatus2) => {
  CardholderReconciliationStatus2["ActionRequired"] = "in_progress";
  CardholderReconciliationStatus2["ActionRequiredOverdue"] = "overdue";
  CardholderReconciliationStatus2["Matched"] = "complete";
  return CardholderReconciliationStatus2;
})(CardholderReconciliationStatus || {});
const parseReconciliationStatus = /* @__PURE__ */ __name((value) => {
  if (!value) return null;
  const normalized = value.toLowerCase();
  const known = Object.values(CardholderReconciliationStatus).find((s) => s === normalized);
  return known ?? null;
}, "parseReconciliationStatus");
const mapReconciliationApiItem = /* @__PURE__ */ __name((item) => {
  return {
    id: item.id,
    masterAccountId: item.masterAccountId,
    name: item.masterAccountName,
    currencyCode: item.currency,
    statementPeriod: formatExpensePeriod({
      from: parseDateOnlyAsLocal(item.startPeriod),
      to: parseDateOnlyAsLocal(item.endPeriod)
    }),
    reconciliationDueDate: formatExpenseDate(item.reconciliationDueDate),
    status: parseReconciliationStatus(item.status)
  };
}, "mapReconciliationApiItem");
const useCardholderReconciliationList = /* @__PURE__ */ __name((queryParams, options = {}) => {
  const selectedCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.cardholderReconciliations.list({ ...queryParams, company: selectedCompany == null ? void 0 : selectedCompany.shortName }),
    enabled: enabled && !!(selectedCompany == null ? void 0 : selectedCompany.shortName),
    placeholderData: keepPreviousData,
    queryFn: /* @__PURE__ */ __name(async () => {
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
      const url = `${RECONCILIATION_ENDPOINTS.GET_CARDHOLDER_DASHBOARD.build()}?${params.toString()}`;
      const response = await apiClient.get(url);
      return {
        items: response.data.results.map(mapReconciliationApiItem),
        totalPages: response.data.totalPages ?? 0,
        totalObjects: response.data.totalObjects ?? 0,
        statusSummary: {
          in_progress: response.data.statusSummary.in_progress,
          overdue: response.data.statusSummary.overdue,
          complete: response.data.statusSummary.complete
        }
      };
    }, "queryFn"),
    staleTime: 60 * 1e3
  });
}, "useCardholderReconciliationList");
const DEFAULT_PAGE_SIZE = 20;
const { useMemo: useMemo$2 } = await importShared("react");
const ACTION_STATUS_CONFIG = {
  [CardholderReconciliationStatus.Matched]: { textColor: "text-exp-green-800", bgColor: "bg-exp-green-100", label: "Matched" },
  [CardholderReconciliationStatus.ActionRequiredOverdue]: { textColor: "text-exp-red-600", bgColor: "bg-exp-red-100", label: "Action Required" },
  [CardholderReconciliationStatus.ActionRequired]: { textColor: "text-exp-yellow-800", bgColor: "bg-exp-yellow-200", label: "Action Required" }
};
const TextCell = /* @__PURE__ */ __name(({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal truncate", children: value }), "TextCell");
const StatusCell = /* @__PURE__ */ __name(({ value }) => {
  if (value === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: "-" });
  }
  const config = ACTION_STATUS_CONFIG[value];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Br, { variant: "outline", className: `${config.bgColor} ${config.textColor} rounded-20!`, children: config.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 text-exp-neutral-50 group-hover:text-exp-neutral-200 transition-colors shrink-0" })
  ] });
}, "StatusCell");
const useCardholderReconciliationColumns = /* @__PURE__ */ __name(() => {
  const columns = useMemo$2(() => [
    {
      id: "name",
      accessorKey: "name",
      enableSorting: false,
      minSize: 150,
      maxSize: 250,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Corporate Card" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: "currencyCode",
      accessorKey: "currencyCode",
      enableSorting: false,
      size: 100,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Currency" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: "statementPeriod",
      accessorKey: "statementPeriod",
      enableSorting: false,
      size: 160,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Statement Period" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: CardholderReconciliationSortableColumn.ReconciliationDueDate,
      accessorKey: "reconciliationDueDate",
      enableSorting: true,
      size: 160,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Due Date" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(TextCell, { value: context.getValue() })
        }
      ), "cell")
    },
    {
      id: "status",
      accessorKey: "status",
      enableSorting: false,
      size: 140,
      header: /* @__PURE__ */ __name(({ column }) => /* @__PURE__ */ jsxRuntimeExports.jsx($a, { column, title: "Status" }), "header"),
      cell: /* @__PURE__ */ __name((context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ei,
        {
          context,
          viewContent: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCell, { value: context.getValue() })
        }
      ), "cell")
    }
  ], []);
  return { columns };
}, "useCardholderReconciliationColumns");
const URL_PARAM_SORT_BY = "sortBy";
const URL_PARAM_SORT_ORDER = "sortOrder";
const URL_PARAM_PAGE = "page";
const DEFAULT_PAGE_INDEX = 0;
const MIN_PAGE_NUMBER = 1;
const isValidSortField = /* @__PURE__ */ __name((value) => value !== null && Object.values(CardholderReconciliationSortableColumn).includes(value), "isValidSortField");
const isValidSortOrder = /* @__PURE__ */ __name((value) => value === "asc" || value === "desc", "isValidSortOrder");
const getDefaultSortOrder = /* @__PURE__ */ __name(() => "desc", "getDefaultSortOrder");
const getDefaultSortField = /* @__PURE__ */ __name(() => CardholderReconciliationSortableColumn.ReconciliationDueDate, "getDefaultSortField");
const parsePageNumber = /* @__PURE__ */ __name((value) => {
  if (value === null) return DEFAULT_PAGE_INDEX;
  const parsed = parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < MIN_PAGE_NUMBER) return DEFAULT_PAGE_INDEX;
  return parsed - 1;
}, "parsePageNumber");
const formatPageForUrl = /* @__PURE__ */ __name((pageIndex) => {
  if (pageIndex === DEFAULT_PAGE_INDEX) return null;
  return String(pageIndex + 1);
}, "formatPageForUrl");
const { useCallback: useCallback$1, useEffect, useMemo: useMemo$1 } = await importShared("react");
const useCardholderReconciliationUrlFilters = /* @__PURE__ */ __name(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSortBy = searchParams.get(URL_PARAM_SORT_BY);
  const urlSortOrder = searchParams.get(URL_PARAM_SORT_ORDER);
  const urlPage = searchParams.get(URL_PARAM_PAGE);
  useEffect(() => {
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
  }, [urlSortBy, urlSortOrder, setSearchParams]);
  const sorting = useMemo$1(() => {
    const sortBy = isValidSortField(urlSortBy) ? urlSortBy : getDefaultSortField();
    const sortOrder = isValidSortOrder(urlSortOrder) ? urlSortOrder : getDefaultSortOrder();
    return [{ id: sortBy, desc: sortOrder === "desc" }];
  }, [urlSortBy, urlSortOrder]);
  const columnFilters = useMemo$1(() => [], []);
  const pagination = useMemo$1(() => ({
    pageIndex: parsePageNumber(urlPage),
    pageSize: DEFAULT_PAGE_SIZE
  }), [urlPage]);
  const handleColumnFiltersChange = useCallback$1((_updater) => {
  }, []);
  const handleSortingChange = useCallback$1((updater) => {
    const newSorting = typeof updater === "function" ? updater(sorting) : updater;
    const sortConfig = newSorting[0];
    const sortBy = (sortConfig == null ? void 0 : sortConfig.id) ?? getDefaultSortField();
    const sortOrder = sortConfig ? sortConfig.desc ? "desc" : "asc" : getDefaultSortOrder();
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
    columnFilters,
    sorting,
    pagination,
    handleColumnFiltersChange,
    handleSortingChange,
    handlePaginationChange
  };
}, "useCardholderReconciliationUrlFilters");
const { useCallback, useMemo } = await importShared("react");
const CardholderReconciliationList = /* @__PURE__ */ __name(() => {
  const navigateWithReturn = useNavigateWithReturn();
  const {
    columnFilters,
    sorting,
    pagination,
    handleColumnFiltersChange,
    handleSortingChange,
    handlePaginationChange
  } = useCardholderReconciliationUrlFilters();
  const queryParams = useMemo(() => {
    var _a;
    return {
      sortOrder: ((_a = sorting[0]) == null ? void 0 : _a.desc) ? "desc" : "asc",
      pageNumber: pagination.pageIndex + 1,
      pageSize: DEFAULT_PAGE_SIZE
    };
  }, [sorting, pagination.pageIndex]);
  const { data, isPending, isError } = useCardholderReconciliationList(queryParams);
  const reconciliations = (data == null ? void 0 : data.items) ?? [];
  const pageCount = (data == null ? void 0 : data.totalPages) ?? 0;
  const totalItems = (data == null ? void 0 : data.totalObjects) ?? 0;
  const isLoading = isPending;
  useErrorToast(isError, "Failed to load reconciliations. Please try again later.");
  const { columns } = useCardholderReconciliationColumns();
  const handleRowClick = useCallback(
    (row) => {
      navigateWithReturn(
        generatePath(RoutePaths.CardholderReconciliationId, { id: String(row.original.id) }),
        { state: { item: row.original } }
      );
    },
    [navigateWithReturn]
  );
  const customLoadingState = useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-exp-neutral-600", children: "Loading" })
  ] }), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-6 pt-0!", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4 mb-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 size-11.5 flex items-center justify-center fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-list", className: "size-6 shrink-0 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Reconciliation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Review and match corporate card transactions to expenses for each statement period" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto exp-custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ni,
      {
        columns,
        data: reconciliations,
        getRowId: /* @__PURE__ */ __name((row) => `reconciliation-${row.id}`, "getRowId"),
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
          bodyRow: "group hover:bg-exp-neutral-10",
          pagination: {
            selectContentWidthMode: "trigger"
          }
        },
        emptyState: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            iconComponent: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "featured-play-list", className: "size-9 text-exp-neutral-100" }),
            title: "No statements to reconcile",
            description: "Statements appear here once your AP team uploads them for a corporate card assigned to you. You can then review and match transactions for each statement period.",
            "data-testid": "reconciliation-empty-state"
          }
        )
      }
    ) })
  ] });
}, "CardholderReconciliationList");
export {
  CardholderReconciliationList as C,
  ReconciliationsList as R,
  useCardholderReconciliationList as u
};

import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as createLucideIcon, W as Ws, q as qa, Y as Ya, b as Wa, $ as $e, E as En, K as Ka, M as Mn, P as Pn, V as Vn, B as Bs, d as cs, g as gs, Q as Qn, p as ps, u as us, e as $r, Z as Za } from "./configuration-3lnepm44.js";
import { a as ExpenseStatusBadge, E as ExpensesList } from "./ExpensesList-mXvT1FCf.js";
import { a as apiClient } from "./axiosInstance-Cvzcyh16.js";
import { D as DEFAULT_CURRENCY_CODE, b as useQueryClient, a as useCompanyStore, q as queryKeys, E as EXPENSE_ENDPOINTS, c as DEFAULT_CURRENCY } from "./currency-D0toBGrD.js";
import { C as ConfirmDialog, t as toISODateString, D as DEFAULT_MILEAGE_VENDOR, m as mapCostAllocation, p as parseOptionalInt, a as parseOptionalDecimal, b as DEFAULT_PAYMENT_METHOD, g as getMileageTypesFromCache, i as isMileageTripData, r as resolveFileUrl, c as isMileagePeriodData, u as useSaveExpenseDraft, d as useSubmitExpense, e as useDeleteExpenseDraft, M as MileageFormType, f as usePendingUploadStore, h as MileageTripForm, j as MileagePeriodForm, E as ExpenseForm } from "./ExpenseFormDialog-DZmYC_rN.js";
import { C as ChevronRight } from "./chevron-right-Dbj1956R.js";
import { T as Trash2, S as Send } from "./trash-2-BeHQvGs0.js";
import { d as devError, a as devLog } from "./index-CvL7PQqL.js";
import { I as ItemCategory, E as ECostAllocation, i as isRegularExpense, a as isMileageExpense, b as isExpenseItemSubmitted, c as isExpenseItemDraft } from "./expense-item-oPdxtthH.js";
import { F as FormTypeId, b as useMutation, c as useTaxTypesDisplay, d as useFormTypeName, E as ExpenseFormType, e as useCountries, f as useExpenseItem } from "./expense-api-BgWYDmq7.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { f as formatDate, a as formatCurrency, g as getCurrencySymbol, b as formatDistance, c as formatRate } from "./formatters-DM7qZzq1.js";
import { a as useNavigateBack } from "./use-prevent-page-reload-BdZ5xOlX.js";
import { u as useNavigate, j as generatePath, a as RoutePaths, f as useParams, k as useSearchParams } from "./routes-D4lYvRIf.js";
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
function FormPageDialog({
  header,
  footer,
  deleteDialog,
  isLoading,
  onOpenChange,
  renderContent,
  backgroundContent
}) {
  const renderHeader = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Ya, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wa, { className: "text-exp-neutral-900 text-xl font-bold", children: header.title }),
        header.titleSuffix,
        header.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
          "$",
          header.amount
        ] }),
        header.status && /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status: header.status })
      ] }),
      header.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: header.subtitle }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-38px] flex flex-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          variant: "outlined",
          iconPosition: "center",
          className: "text-exp-neutral-70 hover:text-exp-neutral-200",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          variant: "outlined",
          iconPosition: "center",
          className: "text-exp-neutral-70 hover:text-exp-neutral-200",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
        }
      )
    ] }) })
  ] }) });
  const renderFooter = () => {
    if (!footer) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ka, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: footer.showDeleteButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          $e,
          {
            type: "button",
            variant: "ghost",
            onClick: footer.onDeleteClick,
            className: "text-exp-red-500 hover:text-exp-red-600",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }),
              "Delete"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { className: "text-sm", children: "Delete draft" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              type: "button",
              variant: "outlined",
              onClick: footer.onSaveDraftClick,
              disabled: footer.saveDraftButtonState.disabled,
              children: footer.isSavingDraft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-5" }),
                "Save Draft"
              ] }) : "Save Draft"
            }
          ) }) }),
          footer.saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: footer.saveDraftButtonState.tooltip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            $e,
            {
              type: "button",
              variant: "primary",
              onClick: footer.onSubmitClick,
              disabled: footer.submitButtonState.disabled,
              children: [
                footer.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                "Submit Expense"
              ]
            }
          ) }) }),
          footer.submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Vn, { className: "text-sm", children: footer.submitButtonState.tooltip })
        ] })
      ] })
    ] }) });
  };
  const renderLoadingOrContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "size-8 text-exp-primary-blue-600" }) });
    }
    return renderContent();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    backgroundContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ws, { open: true, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(qa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      renderHeader(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: renderLoadingOrContent() }),
        renderFooter()
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: deleteDialog.isOpen,
        onOpenChange: deleteDialog.onOpenChange,
        title: "Delete draft",
        description: deleteDialog.description,
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: deleteDialog.onConfirm,
        onCancel: deleteDialog.onCancel,
        onCloseComplete: deleteDialog.onCloseComplete,
        isLoading: deleteDialog.isDeleting
      }
    )
  ] });
}
function dateToISOString(date) {
  if (!date) return null;
  try {
    return date.toISOString();
  } catch {
    return null;
  }
}
function resolveMileageTypeFields(mileageType, expenseTypes) {
  var _a;
  const typeId = parseOptionalInt(mileageType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? FormTypeId.MILEAGE,
    effectiveMileageRateId: ((_a = selectedExpenseType == null ? void 0 : selectedExpenseType.mileageEffectiveRate) == null ? void 0 : _a.id) ?? null
  };
}
function mapCommonMileageFields(data, expenseTypes) {
  const { typeId, formTypeId, effectiveMileageRateId } = resolveMileageTypeFields(data.mileageType, expenseTypes);
  return {
    typeId,
    formTypeId,
    effectiveMileageRateId,
    vendor: DEFAULT_MILEAGE_VENDOR,
    paymentMethodId: parseInt(DEFAULT_PAYMENT_METHOD.id, 10),
    totalDistance: parseOptionalDecimal(data.totalDistance),
    totalAmount: parseOptionalDecimal(data.reimbursableAmount),
    totalCurrencyCode: DEFAULT_CURRENCY_CODE,
    businessPurposeId: parseOptionalInt(data.businessPurpose),
    description: data.expenseDescription || null,
    additionalComments: data.additionalComments || null,
    costAllocationDeferred: data.deferToApprover ?? null,
    costAllocations: data.costAllocations && data.costAllocations.length > 0 ? data.costAllocations.map(mapCostAllocation) : null
  };
}
function mapMileageTripToCreateRequest(data, expenseTypes) {
  return {
    ...mapCommonMileageFields(data, expenseTypes),
    date: toISODateString(data.expenseDate),
    fromLocation: data.fromLocation || null,
    toLocation: data.toLocation || null,
    roundTrip: data.isRoundTrip ?? null
  };
}
function mapMileagePeriodToCreateRequest(data, expenseTypes) {
  var _a, _b;
  return {
    ...mapCommonMileageFields(data, expenseTypes),
    periodStart: dateToISOString((_a = data.expensePeriod) == null ? void 0 : _a.from),
    periodEnd: dateToISOString((_b = data.expensePeriod) == null ? void 0 : _b.to)
  };
}
const mapMileageTripToUpdateRequest = mapMileageTripToCreateRequest;
const mapMileagePeriodToUpdateRequest = mapMileagePeriodToCreateRequest;
function normalizeMileageDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
function buildMileageItemForCache(response, formData) {
  return {
    id: String(response.id),
    itemType: ItemCategory.Mileage,
    status: "draft",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate ?? response.createdDate,
    userId: response.formOwner,
    data: formData
  };
}
const useSaveMileageDraft = () => {
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ data, draftId, signal }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      const expenseTypes = getMileageTypesFromCache(queryClient, company);
      if (draftId) {
        const payload = isMileageTripData(data) ? mapMileageTripToUpdateRequest(data, expenseTypes) : mapMileagePeriodToUpdateRequest(data, expenseTypes);
        devLog("📤 Update mileage draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT(company, draftId),
          payload,
          { signal }
        );
        devLog("📥 Update mileage draft response:", response.data);
        return {
          draft: normalizeMileageDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      } else {
        const payload = isMileageTripData(data) ? mapMileageTripToCreateRequest(data, expenseTypes) : mapMileagePeriodToCreateRequest(data, expenseTypes);
        devLog("📤 Create mileage draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT(company),
          payload,
          { signal }
        );
        devLog("📥 Create mileage draft response:", response.data);
        return {
          draft: normalizeMileageDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      }
    },
    onSuccess: ({ draft, response, formData }, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      const mileageItem = buildMileageItemForCache(response, formData);
      if (variables.draftId) {
        queryClient.setQueryData(
          queryKeys.expenseItem.detail(variables.draftId),
          mileageItem
        );
      } else {
        queryClient.setQueryData(queryKeys.expenseItem.detail(draft.id), mileageItem);
      }
      Bs.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      devError("Failed to save mileage draft:", error);
      Bs.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitMileage = () => {
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ draftId }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.SUBMIT_DRAFT(company, draftId)
      );
      return normalizeMileageDraftResponse(response.data);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageTrips.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileagePeriods.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(data.id)
      });
      Bs.success("Mileage claim submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      devError("Failed to submit mileage:", error);
      Bs.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useDeleteMileageDraft = (options) => {
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ draftId }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT(company, draftId));
    },
    onSuccess: async (_data, variables) => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      Bs.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      devError("Failed to delete draft:", error);
      Bs.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
const isValidDate = (date) => !isNaN(date.getTime());
const parseISODateAsLocal = (dateString) => {
  const isoDateMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoDateMatch) {
    const [, year, month, day] = isoDateMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return new Date(dateString);
};
const normalizeDateRange = (range) => {
  if (!(range == null ? void 0 : range.from)) return void 0;
  try {
    const fromDate = typeof range.from === "string" ? parseISODateAsLocal(range.from) : range.from;
    if (!isValidDate(fromDate)) return void 0;
    const toDate = range.to ? typeof range.to === "string" ? parseISODateAsLocal(range.to) : range.to : void 0;
    if (toDate && !isValidDate(toDate)) return void 0;
    return { from: fromDate, to: toDate };
  } catch {
    return void 0;
  }
};
const formatExpensePeriod = (range) => {
  const normalizedRange = normalizeDateRange(range);
  if (!(normalizedRange == null ? void 0 : normalizedRange.from)) return "";
  try {
    const fromDate = normalizedRange.from;
    const toDate = normalizedRange.to;
    const formatDate2 = (date, includeYear = false) => {
      const month = date.toLocaleDateString("en-US", { month: "short" });
      const day = date.getDate();
      const year = date.getFullYear();
      return includeYear ? `${month} ${day}, ${year}` : `${month} ${day}`;
    };
    if (toDate && fromDate.getTime() !== toDate.getTime()) {
      const isCrossYear = fromDate.getFullYear() !== toDate.getFullYear();
      if (isCrossYear) {
        return `${formatDate2(fromDate, true)} - ${formatDate2(toDate, true)}`;
      }
      return `${formatDate2(fromDate)} - ${formatDate2(toDate)}, ${fromDate.getFullYear()}`;
    }
    return `${formatDate2(fromDate)}, ${fromDate.getFullYear()}`;
  } catch {
    return "";
  }
};
const { useEffect: useEffect$2, useState: useState$2 } = await importShared("react");
const PreviewReceiptSection = ({ receipt, stretchToFill = false }) => {
  var _a;
  const [imageError, setImageError] = useState$2(false);
  useEffect$2(() => {
    setImageError(false);
  }, [receipt == null ? void 0 : receipt.id, receipt == null ? void 0 : receipt.blobUrl, receipt == null ? void 0 : receipt.url]);
  if (!receipt) {
    return null;
  }
  const isImage = (_a = receipt.mimeType) == null ? void 0 : _a.startsWith("image/");
  const isPdf = receipt.mimeType === "application/pdf";
  const fileUrl = resolveFileUrl(receipt.blobUrl, receipt.url);
  const handlePreviewClick = () => {
    if (fileUrl) {
      window.open(fileUrl, "_blank", "noopener,noreferrer");
    }
  };
  const handleImageError = () => {
    setImageError(true);
  };
  const renderImagePlaceholder = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 bg-exp-neutral-30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-img", className: "size-16 text-exp-neutral-200 mb-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-neutral-500", children: receipt.filename }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-exp-neutral-300 mt-1", children: "Receipt image" })
  ] });
  const renderPdfPreview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center h-48 bg-exp-neutral-30 cursor-pointer",
      onClick: handlePreviewClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pdf-file-green-check", className: "size-12 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-grey-700 text-center px-2 max-w-full truncate", children: receipt.filename }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-exp-grey-600 mt-1", children: "PDF preview isn't available." })
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "RECEIPT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 justify-center items-center flex"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden bg-exp-neutral-30 border border-exp-primary-blue-100", children: [
      isImage && !imageError && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: fileUrl,
          alt: "Receipt",
          loading: "lazy",
          className: `w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity ${stretchToFill ? "" : "max-h-80"}`,
          onError: handleImageError,
          onClick: handlePreviewClick
        }
      ),
      isImage && imageError && renderImagePlaceholder(),
      isPdf && renderPdfPreview(),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handlePreviewClick,
          className: "absolute bottom-2 left-2 p-1.5 bg-white/70 backdrop-blur-sm hover:bg-white rounded-full shadow-sm transition-colors",
          title: "Preview file",
          "aria-label": "Preview file",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 text-exp-neutral-600" })
        }
      )
    ] }) })
  ] });
};
const AFFIDAVIT_DECLARATION = "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable.";
const AFFIDAVIT_DISCLAIMER = "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action.";
const PreviewAffidavitSection = ({ affidavit }) => {
  if (!affidavit) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "AFFIDAVIT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-exp-yellow-200 bg-exp-yellow-100 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-yellow-900 mb-4", children: AFFIDAVIT_DECLARATION }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2 py-0.5 bg-exp-yellow-200 text-exp-yellow-800 text-xs font-medium rounded mb-2", children: "Justification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-grey-900", children: affidavit.justification })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-yellow-900 mb-4", children: AFFIDAVIT_DISCLAIMER }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2 py-0.5 bg-exp-yellow-200 text-exp-yellow-800 text-xs font-medium rounded mb-2", children: "Digital signature" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-exp-neutral-900", children: affidavit.digitalSignature })
      ] })
    ] }) })
  ] });
};
const PreviewField = ({ label, value, className = "", icon }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-xs text-exp-neutral-300 mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-normal text-sm text-exp-grey-900 wrap-break-word relative", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-6", children: icon }),
      value || "—"
    ] })
  ] });
};
const TAX_CURRENCY_CODE = "CAD";
const PreviewExpenseDetailsSection = ({ data }) => {
  var _a, _b, _c, _d, _e;
  const isForeignCurrency = data.isDifferentCurrency && ((_a = data.netCurrency) == null ? void 0 : _a.code) !== ((_b = data.totalCurrency) == null ? void 0 : _b.code);
  const hasTaxData = !!(data.taxType || data.taxAmount);
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const { data: taxTypes } = useTaxTypesDisplay({
    companyShortName: (selectedCompany == null ? void 0 : selectedCompany.shortName) ?? null,
    enabled: !!data.taxType
  });
  const taxTypeDisplay = taxTypes == null ? void 0 : taxTypes.find((tt) => tt.id.toString() === data.taxType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense type", value: data.expenseType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Vendor", value: data.vendor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense date",
          value: data.expenseDate ? formatDate(data.expenseDate) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense location", value: data.expenseLocation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Payment method",
          value: data.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "credit-card", className: "size-5 text-exp-neutral-700" }),
            data.paymentMethod
          ] })
        }
      ),
      isForeignCurrency ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Receipt total",
            value: formatCurrency(data.netAmount, { currencyCode: (_c = data.netCurrency) == null ? void 0 : _c.code })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Converted total",
            value: formatCurrency(data.totalAmount, { currencyCode: (_d = data.totalCurrency) == null ? void 0 : _d.code })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Receipt total",
          value: formatCurrency(data.totalAmount, { currencyCode: (_e = data.totalCurrency) == null ? void 0 : _e.code })
        }
      ),
      hasTaxData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-2 grid grid-cols-2 gap-x-4", children: [
        data.taxType && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Tax type",
            value: taxTypeDisplay ? `${taxTypeDisplay.taxCode} ${taxTypeDisplay.taxRate}%` : data.taxType
          }
        ),
        data.taxAmount && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Tax amount",
            value: formatCurrency(data.taxAmount, { currencyCode: TAX_CURRENCY_CODE })
          }
        )
      ] })
    ] }) })
  ] });
};
const PreviewExpenseJustificationSection = ({
  data
}) => {
  const companyShortName = useCompanyStore((state) => {
    var _a;
    return ((_a = state.selectedCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const expenseTypeName = data.expenseType;
  const formType = useFormTypeName(expenseTypeName, companyShortName);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "EXPENSE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: data.businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: data.expenseDescription }),
      formType === ExpenseFormType.ENTERTAINMENT && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Persons entertained", value: data.personsEntertained })
    ] }) })
  ] });
};
const ALLOCATION_TYPE_LABELS = {
  [ECostAllocation.Project]: "PROJECT",
  [ECostAllocation.Admin]: "ADMIN",
  [ECostAllocation.Rep]: "CCB REP",
  [ECostAllocation.Team]: "CCB TEAM"
};
const formatPercentage = (value) => {
  if (Number.isInteger(value)) {
    return `${value}%`;
  }
  return `${value.toFixed(2).replace(/\.?0+$/, "")}%`;
};
const getAllocationDisplay = (allocation) => {
  const entityData = allocation.entityData;
  switch (allocation.type) {
    case ECostAllocation.Project: {
      const poNumber = (entityData == null ? void 0 : entityData.poNumber) || "";
      const supplier = (entityData == null ? void 0 : entityData.supplier) || "";
      const poDisplay = supplier ? `PO ${poNumber} ${supplier}` : poNumber ? `PO ${poNumber}` : allocation.name;
      return {
        primaryText: poDisplay,
        secondaryText: entityData == null ? void 0 : entityData.description,
        allocatedTo: (entityData == null ? void 0 : entityData.projectId) ? {
          code: entityData.projectId,
          description: entityData.projectDescription
        } : void 0
      };
    }
    case ECostAllocation.Admin: {
      const poNumber = (entityData == null ? void 0 : entityData.poNumber) || "";
      const supplier = (entityData == null ? void 0 : entityData.supplier) || "";
      const primaryText = poNumber ? supplier ? `${poNumber} ${supplier}` : poNumber : allocation.name;
      return {
        primaryText,
        secondaryText: entityData == null ? void 0 : entityData.description,
        allocatedTo: (entityData == null ? void 0 : entityData.projectId) ? {
          code: entityData.projectId,
          description: entityData.projectDescription
        } : void 0
      };
    }
    case ECostAllocation.Rep:
      return {
        primaryText: (entityData == null ? void 0 : entityData.name) || allocation.name
      };
    case ECostAllocation.Team: {
      const number = (entityData == null ? void 0 : entityData.number) || "";
      const description = (entityData == null ? void 0 : entityData.description) || "";
      return {
        primaryText: number && description ? `${number} / ${description}` : allocation.name
      };
    }
    default:
      return { primaryText: allocation.name };
  }
};
const PreviewCostAllocationSection = ({
  allocations,
  deferred,
  currency
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: deferred ? "shadow-none border-0 bg-transparent p-0 gap-0" : "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: deferred ? "p-0 gap-0" : "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qn,
        {
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(
        us,
        {
          id: "deferred-to-approver",
          label: "Deferred to approver",
          checked: true,
          disabled: true
        }
      )
    ] }) }),
    allocations && !deferred && /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: allocations.map((allocation, index) => {
      const { primaryText, secondaryText, allocatedTo } = getAllocationDisplay(allocation);
      const isLast = index === allocations.length - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex items-start gap-4 ${!isLast ? "pb-4 border-b border-exp-primary-blue-100" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 shrink-0 inline-flex mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-exp-neutral-300 uppercase tracking-wide whitespace-nowrap", children: ALLOCATION_TYPE_LABELS[allocation.type] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-900", children: primaryText }),
              secondaryText && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600 wrap-break-word", children: secondaryText }),
              allocatedTo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-grey-900", children: allocatedTo.code }),
                allocatedTo.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600 wrap-break-word", children: allocatedTo.description })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-right flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { className: "rounded-lg bg-exp-primary-blue-50 text-exp-neutral-900 hover:bg-exp-primary-blue-50", children: [
              getCurrencySymbol(currency || DEFAULT_CURRENCY),
              " ",
              allocation.amount.toFixed(2),
              " (",
              formatPercentage(allocation.percentage),
              ")"
            ] }) })
          ]
        },
        allocation.id
      );
    }) }) })
  ] });
};
const getFileIcon = (mimeType) => {
  if (mimeType === "application/pdf") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-pdf", className: "size-5" });
  }
  if (mimeType.startsWith("image/")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "icon-file-img", className: "size-5" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-5 text-exp-neutral-500" });
};
const PreviewSupportingFilesSection = ({
  files
}) => {
  if (!files || files.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "SUPPORTING FILES",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-neutral-30 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: resolveFileUrl(file.blobUrl, file.url),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-2 px-2 py-1 bg-exp-primary-blue-50 rounded-lg w-fit group",
        children: [
          getFileIcon(file.mimeType),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-exp-neutral-700  group-hover:underline truncate", children: file.filename })
        ]
      },
      file.id
    )) }) })
  ] });
};
const PreviewAdditionalCommentsSection = ({
  comments
}) => {
  if (!comments) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "ADDITIONAL COMMENTS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-900 wrap-break-word", children: comments }) })
  ] });
};
const PreviewMileageTripDetailsSection = ({ data }) => {
  var _a;
  const { data: countries } = useCountries();
  const currencyCode = ((_a = countries == null ? void 0 : countries[0]) == null ? void 0 : _a.defaultCurrencyIso) || DEFAULT_CURRENCY_CODE;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(gs, { className: "p-0 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Qn,
        {
          title: "MILEAGE DETAILS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      data.isRoundTrip && /* @__PURE__ */ jsxRuntimeExports.jsx($r, { className: "bg-exp-neutral-30 text-exp-neutral-600 font-medium hover:bg-none! cursor-default", children: "Round trip" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Mileage type", value: data.mileageType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense date",
          value: data.expenseDate ? formatDate(data.expenseDate) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "From", value: data.fromLocation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "To",
          value: data.toLocation,
          icon: data.isRoundTrip ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sync-alt", className: "size-4 text-exp-neutral-500" }) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Total distance",
            value: formatDistance(data.totalDistance, data.rateUnit)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Rate",
            value: data.ratePerUnit && data.rateUnit ? formatRate(data.ratePerUnit, data.rateUnit, { currencyCode }) : void 0
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Reimbursable amount",
          value: data.reimbursableAmount ? formatCurrency(data.reimbursableAmount, { currencyCode }) : void 0
        }
      )
    ] }) })
  ] });
};
const PreviewMileagePeriodDetailsSection = ({ data }) => {
  var _a;
  const { data: countries } = useCountries();
  const currencyCode = ((_a = countries == null ? void 0 : countries[0]) == null ? void 0 : _a.defaultCurrencyIso) || DEFAULT_CURRENCY_CODE;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "MILEAGE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Mileage type", value: data.mileageType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Expense period",
          value: data.expensePeriod ? formatExpensePeriod(data.expensePeriod) : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Total distance",
            value: formatDistance(data.totalDistance, data.rateUnit)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            className: "w-full",
            label: "Rate",
            value: data.ratePerUnit && data.rateUnit ? formatRate(data.ratePerUnit, data.rateUnit, { currencyCode }) : void 0
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Reimbursable amount",
          value: data.reimbursableAmount ? formatCurrency(data.reimbursableAmount, { currencyCode }) : void 0
        }
      )
    ] }) })
  ] });
};
const PreviewMileageJustificationSection = ({
  businessPurpose,
  expenseDescription
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(gs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qn,
      {
        title: "MILEAGE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: expenseDescription })
    ] }) })
  ] });
};
const ExpensePreview = ({ expense }) => {
  const { data } = expense;
  const hasReceipt = !!data.receiptAttachment;
  const hasAffidavit = data.isReceiptUnavailable && !!data.affidavit;
  const hasSupportingFiles = data.supportingFiles && data.supportingFiles.length > 0;
  const hasLeftColumn = hasReceipt || hasAffidavit || hasSupportingFiles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 h-full", children: [
    hasLeftColumn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 shrink-0 space-y-6 self-start sticky top-0", children: [
      hasReceipt && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewReceiptSection, { receipt: data.receiptAttachment, stretchToFill: !hasSupportingFiles }),
      hasAffidavit && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAffidavitSection, { affidavit: data.affidavit }),
      hasSupportingFiles && /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewSupportingFilesSection, { files: data.supportingFiles })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewExpenseDetailsSection, { data }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewExpenseJustificationSection, { data }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewCostAllocationSection,
        {
          allocations: data.costAllocations,
          deferred: data.deferToApprover,
          currency: data.totalCurrency
        }
      ),
      data.additionalComments && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAdditionalCommentsSection, { comments: data.additionalComments })
      ] })
    ] })
  ] });
};
const MileageTripPreview = ({ mileage }) => {
  const { data } = mileage;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewMileageTripDetailsSection, { data }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewMileageJustificationSection,
      {
        businessPurpose: data.businessPurpose,
        expenseDescription: data.expenseDescription
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewCostAllocationSection,
      {
        allocations: data.costAllocations,
        deferred: data.deferToApprover
      }
    ),
    data.additionalComments && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAdditionalCommentsSection, { comments: data.additionalComments })
    ] })
  ] }) });
};
const MileagePeriodPreview = ({ mileage }) => {
  const { data } = mileage;
  const hasSupportingFiles = data.supportingFiles && data.supportingFiles.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewMileagePeriodDetailsSection, { data }),
    hasSupportingFiles && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewSupportingFilesSection, { files: data.supportingFiles })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewMileageJustificationSection,
      {
        businessPurpose: data.businessPurpose,
        expenseDescription: data.expenseDescription
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewCostAllocationSection,
      {
        allocations: data.costAllocations,
        deferred: data.deferToApprover
      }
    ),
    data.additionalComments && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAdditionalCommentsSection, { comments: data.additionalComments })
    ] })
  ] }) });
};
const { useCallback: useCallback$2, useEffect: useEffect$1, useRef: useRef$1, useState: useState$1 } = await importShared("react");
function useDeleteDialog(options = {}) {
  const { onDeleteSuccess } = options;
  const [isOpen, setIsOpen] = useState$1(false);
  const [isDeleteFlowActive, setIsDeleteFlowActive] = useState$1(false);
  const shouldNavigateRef = useRef$1(false);
  useEffect$1(() => {
    return () => {
      shouldNavigateRef.current = false;
    };
  }, []);
  const open = useCallback$2(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback$2(() => {
    setIsOpen(false);
  }, []);
  const handleOpenChange = useCallback$2((isOpen2) => {
    setIsOpen(isOpen2);
  }, []);
  const markForNavigation = useCallback$2(() => {
    shouldNavigateRef.current = true;
    setIsDeleteFlowActive(true);
    setIsOpen(false);
  }, []);
  const handleCloseComplete = useCallback$2(() => {
    if (shouldNavigateRef.current) {
      shouldNavigateRef.current = false;
      onDeleteSuccess == null ? void 0 : onDeleteSuccess();
    }
  }, [onDeleteSuccess]);
  return {
    isOpen,
    isDeleteFlowActive,
    open,
    close,
    handleOpenChange,
    handleCloseComplete,
    markForNavigation
  };
}
var ExpenseItemType = /* @__PURE__ */ ((ExpenseItemType2) => {
  ExpenseItemType2["Expense"] = "expense";
  ExpenseItemType2["MileageTrip"] = "mileage-trip";
  ExpenseItemType2["MileagePeriod"] = "mileage-period";
  return ExpenseItemType2;
})(ExpenseItemType || {});
const { useMemo: useMemo$1 } = await importShared("react");
function getItemTitle(item, mode, isNewItem, effectiveItemType) {
  if (!item) {
    if (isNewItem) {
      if (effectiveItemType === ExpenseItemType.MileageTrip || effectiveItemType === ExpenseItemType.MileagePeriod) {
        return "New Mileage Claim";
      }
      return "New Expense";
    }
    if (effectiveItemType === ExpenseItemType.MileageTrip || effectiveItemType === ExpenseItemType.MileagePeriod) {
      return "Mileage";
    }
    return "Expense";
  }
  if (isRegularExpense(item)) {
    if (mode === "preview") return item.data.vendor || "Expense";
    if (mode === "draft") return item.data.vendor || "Draft Expense";
    return "New Expense";
  }
  if (isMileageExpense(item)) {
    return mode === "preview" || mode === "draft" ? "Mileage" : "New Mileage Claim";
  }
  return effectiveItemType === ExpenseItemType.Expense ? "Expense" : "Mileage";
}
function getTitleSuffix(item) {
  if (!item || !isMileageExpense(item)) return null;
  if (isMileageTripData(item.data)) {
    return item.data.toLocation || null;
  }
  if (isMileagePeriodData(item.data) && item.data.expensePeriod) {
    return formatExpensePeriod(item.data.expensePeriod) || null;
  }
  return null;
}
function getItemAmount(item) {
  if (!item) return void 0;
  if (isRegularExpense(item)) return item.data.totalAmount;
  return void 0;
}
function getHeaderSubtitle(item, mode, itemId) {
  if (!item) return void 0;
  if (mode === "preview" && isExpenseItemSubmitted(item)) {
    return `${item.id} • Submitted on ${formatDate(item.submittedAt)}`;
  }
  if (mode === "draft") {
    return `${itemId} • Created on ${formatDate(item.createdAt)}`;
  }
  return void 0;
}
function useExpenseItemHeader(options) {
  const { expenseItem, mode, isNewItem, itemType, itemId } = options;
  const title = useMemo$1(
    () => getItemTitle(expenseItem, mode, isNewItem, itemType),
    [expenseItem, mode, isNewItem, itemType]
  );
  const titleSuffix = useMemo$1(
    () => getTitleSuffix(expenseItem),
    [expenseItem]
  );
  const amount = useMemo$1(
    () => getItemAmount(expenseItem),
    [expenseItem]
  );
  const subtitle = useMemo$1(
    () => getHeaderSubtitle(expenseItem, mode, itemId),
    [expenseItem, mode, itemId]
  );
  const status = expenseItem == null ? void 0 : expenseItem.status;
  return {
    title,
    titleSuffix,
    amount,
    status,
    subtitle
  };
}
const { useCallback: useCallback$1 } = await importShared("react");
function useExpenseItemMutations(options) {
  const { currentDraftId, itemType, onDeleteSuccess } = options;
  const navigate = useNavigate();
  const { navigateBack } = useNavigateBack();
  const saveExpenseDraftMutation = useSaveExpenseDraft();
  const submitExpenseMutation = useSubmitExpense();
  const deleteExpenseDraftMutation = useDeleteExpenseDraft({
    onSuccess: onDeleteSuccess
  });
  const saveMileageDraftMutation = useSaveMileageDraft();
  const submitMileageMutation = useSubmitMileage();
  const deleteMileageDraftMutation = useDeleteMileageDraft({
    onSuccess: onDeleteSuccess
  });
  const isSavingDraft = saveExpenseDraftMutation.isPending || saveMileageDraftMutation.isPending;
  const isSubmitting = submitExpenseMutation.isPending || submitMileageMutation.isPending;
  const isDeleting = deleteExpenseDraftMutation.isPending || deleteMileageDraftMutation.isPending;
  const draftSaveError = saveExpenseDraftMutation.isError || saveMileageDraftMutation.isError;
  const handleExpenseSubmit = useCallback$1(async (data, options2) => {
    var _a;
    try {
      let draftId = currentDraftId;
      if (!draftId) {
        const { draft } = await saveExpenseDraftMutation.mutateAsync({
          data,
          signal: options2 == null ? void 0 : options2.signal
        });
        draftId = draft.id;
      } else {
        await saveExpenseDraftMutation.mutateAsync({
          data,
          draftId,
          signal: options2 == null ? void 0 : options2.signal
        });
      }
      await submitExpenseMutation.mutateAsync({ draftId });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      navigateBack();
    } catch {
    }
  }, [submitExpenseMutation, saveExpenseDraftMutation, currentDraftId, navigateBack]);
  const handleExpenseSaveDraft = useCallback$1(async (data, options2) => {
    var _a;
    try {
      const { draft } = await saveExpenseDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId,
        signal: options2 == null ? void 0 : options2.signal
      });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      if (draft.id && !currentDraftId) {
        navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), { replace: true });
      }
    } catch {
    }
  }, [saveExpenseDraftMutation, currentDraftId, navigate]);
  const handleExpenseSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveExpenseDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), { replace: true });
    }
    return { draftId: draft.id };
  }, [saveExpenseDraftMutation, currentDraftId, navigate]);
  const handleMileageSubmit = useCallback$1(async (data, options2) => {
    var _a;
    try {
      let draftId = currentDraftId;
      if (!draftId) {
        const { draft } = await saveMileageDraftMutation.mutateAsync({
          data,
          signal: options2 == null ? void 0 : options2.signal
        });
        draftId = draft.id;
      } else {
        await saveMileageDraftMutation.mutateAsync({
          data,
          draftId,
          signal: options2 == null ? void 0 : options2.signal
        });
      }
      await submitMileageMutation.mutateAsync({ draftId });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      navigateBack();
    } catch {
    }
  }, [submitMileageMutation, saveMileageDraftMutation, currentDraftId, navigateBack]);
  const handleMileageSaveDraft = useCallback$1(async (data, options2) => {
    var _a;
    try {
      const { draft } = await saveMileageDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId,
        signal: options2 == null ? void 0 : options2.signal
      });
      if ((_a = options2 == null ? void 0 : options2.signal) == null ? void 0 : _a.aborted) return;
      if (draft.id && !currentDraftId) {
        const typeParam = data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
        const path = generatePath(RoutePaths.ExpensesId, { id: draft.id });
        navigate(`${path}?type=${typeParam}`, { replace: true });
      }
    } catch {
    }
  }, [saveMileageDraftMutation, currentDraftId, navigate]);
  const handleMileageSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveMileageDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      const typeParam = data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
      const path = generatePath(RoutePaths.ExpensesId, { id: draft.id });
      navigate(`${path}?type=${typeParam}`, { replace: true });
    }
    return { draftId: draft.id };
  }, [saveMileageDraftMutation, currentDraftId, navigate]);
  const handleDeleteConfirm = useCallback$1(() => {
    if (!currentDraftId || !itemType) return;
    if (itemType === ExpenseItemType.Expense) {
      deleteExpenseDraftMutation.mutate({ draftId: currentDraftId });
    } else if (itemType === ExpenseItemType.MileageTrip || itemType === ExpenseItemType.MileagePeriod) {
      deleteMileageDraftMutation.mutate({ draftId: currentDraftId });
    }
  }, [currentDraftId, itemType, deleteExpenseDraftMutation, deleteMileageDraftMutation]);
  return {
    isSavingDraft,
    isSubmitting,
    isDeleting,
    draftSaveError,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload,
    handleDeleteConfirm
  };
}
const { useCallback, useEffect, useMemo, useRef, useState } = await importShared("react");
const VALID_EXPENSE_TYPES = /* @__PURE__ */ new Set([
  ExpenseItemType.Expense,
  ExpenseItemType.MileageTrip,
  ExpenseItemType.MileagePeriod
]);
function parseExpenseTypeFromQuery(typeParam) {
  if (typeParam && VALID_EXPENSE_TYPES.has(typeParam)) {
    return typeParam;
  }
  return ExpenseItemType.Expense;
}
function determineItemType(item) {
  if (!item) return null;
  if (isRegularExpense(item)) return ExpenseItemType.Expense;
  if (isMileageExpense(item)) {
    if (isMileageTripData(item.data)) return ExpenseItemType.MileageTrip;
    if (isMileagePeriodData(item.data)) return ExpenseItemType.MileagePeriod;
  }
  return null;
}
function useUnifiedExpensePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { navigateBack } = useNavigateBack();
  const typeQueryParam = searchParams.get("type");
  const defaultItemType = useMemo(
    () => parseExpenseTypeFromQuery(typeQueryParam),
    [typeQueryParam]
  );
  const formRef = useRef(null);
  const abortControllerRef = useRef(new AbortController());
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const isNewItem = !id || id === "new";
  const [formKey, setFormKey] = useState(() => isNewItem ? "new" : `loading-${id}`);
  const {
    isOpen: isDeleteDialogOpen,
    isDeleteFlowActive,
    open: openDeleteDialog,
    close: closeDeleteDialog,
    handleOpenChange: handleDeleteDialogOpenChangeBase,
    handleCloseComplete: handleDeleteDialogCloseComplete,
    markForNavigation
  } = useDeleteDialog({
    onDeleteSuccess: navigateBack
  });
  const {
    data: expenseItem,
    error: itemError,
    isLoading
  } = useExpenseItem(isNewItem ? null : id, { enabled: !isDeleteFlowActive });
  const dataItemType = useMemo(() => determineItemType(expenseItem), [expenseItem]);
  const itemType = isNewItem ? defaultItemType : dataItemType ?? defaultItemType;
  const mode = useMemo(() => {
    if (isNewItem) return "new";
    if (expenseItem && isExpenseItemDraft(expenseItem)) return "draft";
    if (expenseItem && isExpenseItemSubmitted(expenseItem)) return "preview";
    return "new";
  }, [isNewItem, expenseItem]);
  const currentDraftId = isNewItem ? void 0 : id;
  const header = useExpenseItemHeader({
    expenseItem,
    mode,
    isNewItem,
    itemType,
    itemId: id
  });
  const mutations = useExpenseItemMutations({
    currentDraftId,
    itemType,
    onDeleteSuccess: markForNavigation
  });
  const hasError = !isNewItem && !!itemError;
  const { reset: resetUploadStore, updateDraftId } = usePendingUploadStore();
  useEffect(() => {
    if (hasError && !isDeleteFlowActive) {
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [hasError, isDeleteFlowActive, navigate]);
  useEffect(() => {
    return () => {
      const { receipt, supportingFiles } = usePendingUploadStore.getState();
      const receiptBusy = receipt.status === "saving-draft" || receipt.status === "uploading";
      const supportingFilesBusy = supportingFiles.status === "saving-draft" || supportingFiles.status === "uploading";
      if (receiptBusy || supportingFilesBusy) {
        return;
      }
      resetUploadStore();
    };
  }, []);
  useEffect(() => {
    if (currentDraftId) {
      updateDraftId(currentDraftId);
    }
  }, [currentDraftId, updateDraftId]);
  useEffect(() => {
    const { receipt, supportingFiles } = usePendingUploadStore.getState();
    const isUploadBusy = receipt.status === "uploading" || receipt.status === "saving-draft" || supportingFiles.status === "uploading" || supportingFiles.status === "saving-draft";
    if (isUploadBusy) return;
    if (isNewItem) {
      setFormKey("new");
    } else if (expenseItem && isExpenseItemDraft(expenseItem)) {
      setFormKey(`loaded-${id}`);
    }
  }, [isNewItem, expenseItem, id]);
  const handleDeleteDraft = useCallback(() => {
    if (!currentDraftId) return;
    openDeleteDialog();
  }, [currentDraftId, openDeleteDialog]);
  const handleDeleteCancel = useCallback(() => {
    closeDeleteDialog();
  }, [closeDeleteDialog]);
  const handleDeleteDialogOpenChange = useCallback((open) => {
    if (!open && mutations.isDeleting) return;
    handleDeleteDialogOpenChangeBase(open);
  }, [mutations.isDeleting, handleDeleteDialogOpenChangeBase]);
  const handleOpenChange = useCallback((open) => {
    if (!open) {
      abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      resetUploadStore();
      navigateBack();
    }
  }, [navigateBack, resetUploadStore]);
  const handleSaveDraftClick = useCallback((e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.saveDraft();
  }, []);
  const handleSubmitClick = useCallback((e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = formRef.current) == null ? void 0 : _a.submitForm();
  }, []);
  const handleButtonStateChange = useCallback((submitState, draftState) => {
    setSubmitButtonState(submitState);
    setSaveDraftButtonState(draftState);
  }, []);
  const handleExpenseSubmit = useCallback(
    (data) => mutations.handleExpenseSubmit(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleExpenseSaveDraft = useCallback(
    (data) => mutations.handleExpenseSaveDraft(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleMileageSubmit = useCallback(
    (data) => mutations.handleMileageSubmit(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  const handleMileageSaveDraft = useCallback(
    (data) => mutations.handleMileageSaveDraft(data, { signal: abortControllerRef.current.signal }),
    [mutations]
  );
  return {
    formRef,
    formKey,
    isDeleteDialogOpen,
    submitButtonState,
    saveDraftButtonState,
    mode,
    itemType,
    isLoading,
    isNewItem,
    currentDraftId,
    expenseItem,
    title: header.title,
    titleSuffix: header.titleSuffix,
    amount: header.amount,
    status: header.status,
    headerSubtitle: header.subtitle,
    isSavingDraft: mutations.isSavingDraft,
    isSubmitting: mutations.isSubmitting,
    isDeleting: mutations.isDeleting,
    draftSaveError: mutations.draftSaveError,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload: mutations.handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload: mutations.handleMileageSaveDraftForUpload,
    handleDeleteDraft,
    handleDeleteConfirm: mutations.handleDeleteConfirm,
    handleDeleteCancel,
    handleDeleteDialogOpenChange,
    handleDeleteDialogCloseComplete,
    handleOpenChange,
    handleSaveDraftClick,
    handleSubmitClick,
    handleButtonStateChange
  };
}
const UnifiedExpensePage = () => {
  const pageState = useUnifiedExpensePage();
  const {
    formRef,
    formKey,
    mode,
    itemType,
    isLoading,
    isNewItem,
    currentDraftId,
    expenseItem,
    title,
    titleSuffix,
    amount,
    status,
    headerSubtitle,
    submitButtonState,
    saveDraftButtonState,
    isSavingDraft,
    isSubmitting,
    isDeleting,
    draftSaveError,
    isDeleteDialogOpen,
    handleDeleteDialogOpenChange,
    handleDeleteDialogCloseComplete,
    handleDeleteConfirm,
    handleDeleteCancel,
    handleOpenChange,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleExpenseSaveDraftForUpload,
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleMileageSaveDraftForUpload,
    handleDeleteDraft,
    handleSaveDraftClick,
    handleSubmitClick,
    handleButtonStateChange
  } = pageState;
  const renderTitleSuffix = () => {
    if (!titleSuffix) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Za,
      {
        variant: "light",
        size: "sm",
        maxWidth: 320,
        className: "text-base font-medium text-exp-neutral-900",
        children: titleSuffix
      }
    );
  };
  const renderContent = () => {
    if (mode === "preview" && expenseItem && isExpenseItemSubmitted(expenseItem)) {
      if (isRegularExpense(expenseItem)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensePreview, { expense: expenseItem });
      }
      if (isMileageExpense(expenseItem)) {
        if (isMileageTripData(expenseItem.data)) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            MileageTripPreview,
            {
              mileage: {
                ...expenseItem,
                data: expenseItem.data
              }
            }
          );
        }
        if (isMileagePeriodData(expenseItem.data)) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            MileagePeriodPreview,
            {
              mileage: {
                ...expenseItem,
                data: expenseItem.data
              }
            }
          );
        }
      }
    }
    if (itemType === "mileage-trip" || expenseItem && isMileageExpense(expenseItem) && isMileageTripData(expenseItem.data)) {
      const initialData2 = expenseItem && isExpenseItemDraft(expenseItem) && isMileageExpense(expenseItem) && isMileageTripData(expenseItem.data) ? expenseItem.data : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MileageTripForm,
        {
          ref: formRef,
          onSubmit: handleMileageSubmit,
          onSaveDraft: handleMileageSaveDraft,
          initialData: initialData2,
          draftId: currentDraftId,
          isSubmitting,
          isDrafting: isSavingDraft,
          draftSaveError,
          onButtonStateChange: handleButtonStateChange
        },
        formKey
      );
    }
    if (itemType === "mileage-period" || expenseItem && isMileageExpense(expenseItem) && isMileagePeriodData(expenseItem.data)) {
      const initialData2 = expenseItem && isExpenseItemDraft(expenseItem) && isMileageExpense(expenseItem) && isMileagePeriodData(expenseItem.data) ? expenseItem.data : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MileagePeriodForm,
        {
          ref: formRef,
          onSubmit: handleMileageSubmit,
          onSaveDraft: handleMileageSaveDraft,
          onSaveDraftForUpload: handleMileageSaveDraftForUpload,
          initialData: initialData2,
          draftId: currentDraftId,
          isSubmitting,
          isDrafting: isSavingDraft,
          draftSaveError,
          onButtonStateChange: handleButtonStateChange
        },
        formKey
      );
    }
    const initialData = expenseItem && isExpenseItemDraft(expenseItem) && isRegularExpense(expenseItem) ? expenseItem.data : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseForm,
      {
        ref: formRef,
        onSubmit: handleExpenseSubmit,
        onSaveDraft: handleExpenseSaveDraft,
        onSaveDraftForUpload: handleExpenseSaveDraftForUpload,
        initialData,
        draftId: currentDraftId,
        isSubmitting,
        isDrafting: isSavingDraft,
        draftSaveError,
        onButtonStateChange: handleButtonStateChange
      },
      formKey
    );
  };
  const showFooter = mode !== "preview" && (isNewItem || !isLoading);
  const getDeleteDialogDescription = () => {
    if (itemType === "expense") {
      return "Are you sure you want to delete this expense draft? This action cannot be undone.";
    }
    return "Are you sure you want to delete this mileage draft? This action cannot be undone.";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormPageDialog,
    {
      header: {
        title,
        titleSuffix: renderTitleSuffix(),
        amount,
        status,
        subtitle: headerSubtitle
      },
      footer: showFooter ? {
        showDeleteButton: !!currentDraftId,
        submitButtonState,
        saveDraftButtonState,
        isSavingDraft,
        isSubmitting,
        onDeleteClick: handleDeleteDraft,
        onSaveDraftClick: handleSaveDraftClick,
        onSubmitClick: handleSubmitClick
      } : void 0,
      deleteDialog: {
        isOpen: isDeleteDialogOpen,
        isDeleting,
        description: getDeleteDialogDescription(),
        onOpenChange: handleDeleteDialogOpenChange,
        onCloseComplete: handleDeleteDialogCloseComplete,
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel
      },
      isLoading,
      onOpenChange: handleOpenChange,
      renderContent,
      backgroundContent: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {})
    }
  );
};
export {
  UnifiedExpensePage as default
};

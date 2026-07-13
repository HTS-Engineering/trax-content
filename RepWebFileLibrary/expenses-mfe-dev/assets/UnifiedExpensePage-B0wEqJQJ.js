var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { d as devError, Z as Zs, a as devLog, b as apiClient, o as oi, r as rs, l as os, m as ss, p as ls, Y as Yn, h as as, j as Mt, E as Et, U as Ue, P as Pt } from "./configuration-CXYlvGz8.js";
import { E as ExpensesList } from "./ExpensesList-DKwjM5zW.js";
import { D as formatToISODate, G as DEFAULT_CURRENCY_CODE, F as FormTypeId, t as useQueryClient, e as useCompanyStore, v as useMutation, q as queryKeys, E as EXPENSE_ENDPOINTS, I as ItemCategory, w as isRegularExpense, x as isMileageExpense, H as formatExpensePeriod, s as isExpenseItemSubmitted, J as isExpenseItemDraft, k as formatDate, d as useNavigate, u as useLocation, K as useNavigateBack, r as generatePath, a as RoutePaths, C as useParams, p as useSearchParams, z as useExpenseItem } from "./use-scroll-into-view-ref-DRd2DuRO.js";
import { D as DEFAULT_MILEAGE_VENDOR, k as mapCostAllocations, p as parseOptionalInt, l as parseOptionalDecimal, n as DEFAULT_PAYMENT_METHOD, o as getMileageTypesFromCache, i as isMileageTripData, r as findActiveSelectedMileageType, e as isMileagePeriodData, s as getExpenseActionSubtitle, t as MileageFormType, w as usePendingUploadStore, d as getExpenseErrorMessage, h as ExpenseFormHistoryLog, j as EtlErrorBanner, E as ExpensePreview, M as MileageTripPreview, f as MileagePeriodPreview } from "./CostAllocationSection-CC7EWCqn.js";
import { M as MILEAGE_RATES_STALE_TIME, f as fetchEffectiveMileageRate, C as ConfirmDialog } from "./useMileageRates-CjKYx2Sx.js";
import { c as computeMileageEffectiveOn, u as useSaveExpenseDraft, a as useSubmitExpense, b as useDeleteExpenseDraft, M as MileageTripForm, d as MileagePeriodForm, E as ExpenseForm } from "./ExpenseFormDialog-BhjcdZ3L.js";
import "./Icon-DBeU9qcx.js";
import { E as ExpenseStatusBadge } from "./ExpenseStatusBadge-DKcCF02m.js";
import { T as Trash2, S as Send } from "./trash-2-wS67d9sK.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
function resolveMileageTypeFields(mileageType, expenseTypes) {
  const typeId = parseOptionalInt(mileageType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? FormTypeId.MILEAGE
  };
}
__name(resolveMileageTypeFields, "resolveMileageTypeFields");
function mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId) {
  const { typeId, formTypeId } = resolveMileageTypeFields(data.mileageType, expenseTypes);
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
    costAllocations: mapCostAllocations(data.costAllocations)
  };
}
__name(mapCommonMileageFields, "mapCommonMileageFields");
function mapMileageTripToCreateRequest(data, expenseTypes, effectiveMileageRateId) {
  return {
    ...mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId),
    date: formatToISODate(data.expenseDate),
    fromLocation: data.fromLocation || null,
    toLocation: data.toLocation || null,
    roundTrip: data.isRoundTrip ?? null
  };
}
__name(mapMileageTripToCreateRequest, "mapMileageTripToCreateRequest");
function mapMileagePeriodToCreateRequest(data, expenseTypes, effectiveMileageRateId) {
  var _a, _b;
  return {
    ...mapCommonMileageFields(data, expenseTypes, effectiveMileageRateId),
    periodStart: formatToISODate((_a = data.expensePeriod) == null ? void 0 : _a.from),
    periodEnd: formatToISODate((_b = data.expensePeriod) == null ? void 0 : _b.to)
  };
}
__name(mapMileagePeriodToCreateRequest, "mapMileagePeriodToCreateRequest");
const mapMileageTripToUpdateRequest = mapMileageTripToCreateRequest;
const mapMileagePeriodToUpdateRequest = mapMileagePeriodToCreateRequest;
async function resolveEffectiveMileageRateId(queryClient, companyShortName, expenseTypes, mileageTypeId, effectiveOn) {
  const selectedType = findActiveSelectedMileageType(expenseTypes, mileageTypeId);
  if (!(selectedType == null ? void 0 : selectedType.mileageRateId)) return null;
  if (!effectiveOn) return null;
  const rate = await queryClient.fetchQuery({
    queryKey: queryKeys.mileageRates.effectiveByIdOnDate(
      companyShortName,
      selectedType.mileageRateId,
      effectiveOn
    ),
    queryFn: /* @__PURE__ */ __name(() => fetchEffectiveMileageRate(companyShortName, selectedType.mileageRateId, effectiveOn), "queryFn"),
    staleTime: MILEAGE_RATES_STALE_TIME
  });
  return (rate == null ? void 0 : rate.id) ?? null;
}
__name(resolveEffectiveMileageRateId, "resolveEffectiveMileageRateId");
function resolveFormEffectiveDate(data) {
  var _a;
  const expenseDate = isMileageTripData(data) ? data.expenseDate : void 0;
  const periodFrom = isMileageTripData(data) ? void 0 : (_a = data.expensePeriod) == null ? void 0 : _a.from;
  return computeMileageEffectiveOn(expenseDate, periodFrom);
}
__name(resolveFormEffectiveDate, "resolveFormEffectiveDate");
function normalizeMileageDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
__name(normalizeMileageDraftResponse, "normalizeMileageDraftResponse");
function buildMileageItemForCache(response, formData) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    itemType: ItemCategory.Mileage,
    status: "draft",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate ?? response.createdDate,
    userId: response.formOwner,
    data: formData
  };
}
__name(buildMileageItemForCache, "buildMileageItemForCache");
const useSaveMileageDraft = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ data, draftId, signal }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      const expenseTypes = getMileageTypesFromCache(queryClient, company);
      const effectiveOn = resolveFormEffectiveDate(data);
      const effectiveMileageRateId = await resolveEffectiveMileageRateId(
        queryClient,
        company,
        expenseTypes,
        data.mileageType,
        effectiveOn
      );
      if (draftId) {
        const payload = isMileageTripData(data) ? mapMileageTripToUpdateRequest(data, expenseTypes, effectiveMileageRateId) : mapMileagePeriodToUpdateRequest(data, expenseTypes, effectiveMileageRateId);
        devLog("📤 Update mileage draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT.build({ tenant: company, id: draftId }),
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
        const payload = isMileageTripData(data) ? mapMileageTripToCreateRequest(data, expenseTypes, effectiveMileageRateId) : mapMileagePeriodToCreateRequest(data, expenseTypes, effectiveMileageRateId);
        devLog("📤 Create mileage draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT.build({ tenant: company }),
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
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(({ draft, response, formData }, variables) => {
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
      Zs.success("All changes are saved", {
        duration: 3e3
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      devError("Failed to save mileage draft:", error);
      Zs.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useSaveMileageDraft");
const useSubmitMileage = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.post(EXPENSE_ENDPOINTS.SUBMIT_DRAFT.build({ tenant: company, id: draftId }));
      return { draftId };
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name((_data, { draftId }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageTrips.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileagePeriods.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Zs.success("Mileage claim submitted", {
        duration: 3e3
      });
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to submit mileage:", error);
      Zs.error("Fail to submit", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useSubmitMileage");
const useDeleteMileageDraft = /* @__PURE__ */ __name((options) => {
  const queryClient = useQueryClient();
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  return useMutation({
    mutationFn: /* @__PURE__ */ __name(async ({ draftId }) => {
      if (!(userDefaultCompany == null ? void 0 : userDefaultCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = userDefaultCompany.shortName;
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT.build({ tenant: company, id: draftId }));
    }, "mutationFn"),
    onSuccess: /* @__PURE__ */ __name(async (_data, variables) => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      await queryClient.cancelQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(variables.draftId)
      });
      Zs.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    }, "onSuccess"),
    onError: /* @__PURE__ */ __name((error) => {
      devError("Failed to delete draft:", error);
      Zs.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }, "onError")
  });
}, "useDeleteMileageDraft");
function FormPageDialog({
  header,
  footer,
  deleteDialog,
  isLoading,
  onOpenChange,
  renderContent,
  backgroundContent,
  banner
}) {
  const renderHeader = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx(os, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ss, { className: "text-exp-neutral-900 text-xl font-bold flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { variant: "light", size: "sm", maxWidth: 320, tooltipDisabled: true, className: "text-exp-neutral-900 text-xl font-bold", children: header.title }) }),
      header.titleSuffix,
      header.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
        "$",
        header.amount
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", "data-testid": "expense-status-badge", children: header.statusBadge })
    ] }),
    header.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: header.subtitle }) })
  ] }) }) }) }), "renderHeader");
  const renderFooter = /* @__PURE__ */ __name(() => {
    if (!footer) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(as, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: footer.showDeleteButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Ue,
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { className: "text-sm", children: "Delete draft" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              type: "button",
              variant: "outlined",
              onClick: footer.onSaveDraftClick,
              disabled: footer.saveDraftButtonState.disabled,
              children: footer.isSavingDraft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }),
                "Save Draft"
              ] }) : "Save Draft"
            }
          ) }) }),
          footer.saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: footer.saveDraftButtonState.tooltip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Ue,
            {
              type: "button",
              variant: "primary",
              onClick: footer.onSubmitClick,
              disabled: footer.submitButtonState.disabled,
              children: [
                footer.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                "Submit Expense"
              ]
            }
          ) }) }),
          footer.submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { className: "text-sm", children: footer.submitButtonState.tooltip })
        ] })
      ] })
    ] }) });
  }, "renderFooter");
  const renderLoadingOrContent = /* @__PURE__ */ __name(() => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-8 text-exp-primary-blue-600" }) });
    }
    return renderContent();
  }, "renderLoadingOrContent");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    backgroundContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { open: true, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      rs,
      {
        className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col",
        onEscapeKeyDown: /* @__PURE__ */ __name((e) => {
          if (document.querySelector('[role="listbox"]')) {
            e.preventDefault();
          }
        }, "onEscapeKeyDown"),
        onInteractOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onInteractOutside"),
        children: [
          renderHeader(),
          banner,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4 exp-custom-scrollbar", children: renderLoadingOrContent() }),
            renderFooter()
          ] })
        ]
      }
    ) }),
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
__name(FormPageDialog, "FormPageDialog");
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
__name(useDeleteDialog, "useDeleteDialog");
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
__name(getItemTitle, "getItemTitle");
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
__name(getTitleSuffix, "getTitleSuffix");
function getItemAmount(item) {
  if (!item) return void 0;
  if (isRegularExpense(item)) return item.data.totalAmount;
  return void 0;
}
__name(getItemAmount, "getItemAmount");
function getHeaderSubtitle(item, mode) {
  if (!item) return void 0;
  if (mode === "preview" && isExpenseItemSubmitted(item)) {
    return getExpenseActionSubtitle(item);
  }
  if (mode === "draft" && isExpenseItemDraft(item)) {
    const parts = [item.businessId, `Created on ${formatDate(item.createdAt)}`].filter(Boolean);
    return parts.join(" • ");
  }
  return void 0;
}
__name(getHeaderSubtitle, "getHeaderSubtitle");
function useExpenseItemHeader(options) {
  const { expenseItem, mode, isNewItem, itemType } = options;
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
    () => getHeaderSubtitle(expenseItem, mode),
    [expenseItem, mode]
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
__name(useExpenseItemHeader, "useExpenseItemHeader");
const { useCallback: useCallback$1 } = await importShared("react");
function useExpenseItemMutations(options) {
  const { currentDraftId, itemType, onDeleteSuccess } = options;
  const navigate = useNavigate();
  const location = useLocation();
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
        navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), {
          replace: true,
          state: location.state
        });
      }
    } catch {
    }
  }, [saveExpenseDraftMutation, currentDraftId, navigate, location.state]);
  const handleExpenseSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveExpenseDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      navigate(generatePath(RoutePaths.ExpensesId, { id: draft.id }), {
        replace: true,
        state: location.state
      });
    }
    return { draftId: draft.id };
  }, [saveExpenseDraftMutation, currentDraftId, navigate, location.state]);
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
        navigate(`${path}?type=${typeParam}`, { replace: true, state: location.state });
      }
    } catch {
    }
  }, [saveMileageDraftMutation, currentDraftId, navigate, location.state]);
  const handleMileageSaveDraftForUpload = useCallback$1(async (data) => {
    const { draft } = await saveMileageDraftMutation.mutateAsync({
      data,
      draftId: currentDraftId
    });
    if (draft.id && !currentDraftId) {
      const typeParam = data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
      const path = generatePath(RoutePaths.ExpensesId, { id: draft.id });
      navigate(`${path}?type=${typeParam}`, { replace: true, state: location.state });
    }
    return { draftId: draft.id };
  }, [saveMileageDraftMutation, currentDraftId, navigate, location.state]);
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
__name(useExpenseItemMutations, "useExpenseItemMutations");
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
__name(parseExpenseTypeFromQuery, "parseExpenseTypeFromQuery");
function determineItemType(item) {
  if (!item) return null;
  if (isRegularExpense(item)) return ExpenseItemType.Expense;
  if (isMileageExpense(item)) {
    if (isMileageTripData(item.data)) return ExpenseItemType.MileageTrip;
    if (isMileagePeriodData(item.data)) return ExpenseItemType.MileagePeriod;
  }
  return null;
}
__name(determineItemType, "determineItemType");
function useUnifiedExpensePage() {
  const navigate = useNavigate();
  const location = useLocation();
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
    isLoading: isQueryLoading
  } = useExpenseItem(isNewItem ? null : id, { enabled: !isDeleteFlowActive });
  const isLoading = !isNewItem && (isQueryLoading || !expenseItem && !itemError);
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
    itemType
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
      const state = location.state;
      if (state == null ? void 0 : state.returnUrl) {
        Zs.error(getExpenseErrorMessage(itemError), { duration: 5e3 });
        navigate(state.returnUrl, { replace: true });
        return;
      }
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [hasError, isDeleteFlowActive, itemError, location.state, navigate]);
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
  const queryClient = useQueryClient();
  const handleOpenChange = useCallback((open) => {
    if (!open) {
      abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      resetUploadStore();
      if (currentDraftId) {
        queryClient.removeQueries({ queryKey: queryKeys.expenseItem.detail(currentDraftId) });
      }
      navigateBack();
    }
  }, [navigateBack, resetUploadStore, currentDraftId, queryClient]);
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
__name(useUnifiedExpensePage, "useUnifiedExpensePage");
const UnifiedExpensePage = /* @__PURE__ */ __name(() => {
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
  const statusBadge = (() => {
    if (mode === "preview" && expenseItem && isExpenseItemSubmitted(expenseItem)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormHistoryLog, { expenseFormId: Number(expenseItem.id) });
    }
    return status ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status }) : void 0;
  })();
  const renderTitleSuffix = /* @__PURE__ */ __name(() => {
    if (!titleSuffix) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ls,
      {
        variant: "light",
        size: "sm",
        maxWidth: 320,
        className: "text-base font-medium text-exp-neutral-900",
        children: titleSuffix
      }
    );
  }, "renderTitleSuffix");
  const renderContent = /* @__PURE__ */ __name(() => {
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
  }, "renderContent");
  const showFooter = mode !== "preview" && (isNewItem || !isLoading);
  const getDeleteDialogDescription = /* @__PURE__ */ __name(() => {
    if (itemType === "expense") {
      return "Are you sure you want to delete this expense draft? This action cannot be undone.";
    }
    return "Are you sure you want to delete this mileage draft? This action cannot be undone.";
  }, "getDeleteDialogDescription");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormPageDialog,
    {
      header: {
        title,
        titleSuffix: renderTitleSuffix(),
        amount,
        statusBadge,
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
      backgroundContent: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
      banner: mode === "preview" && expenseItem && isExpenseItemSubmitted(expenseItem) && expenseItem.hasEtlError ? /* @__PURE__ */ jsxRuntimeExports.jsx(EtlErrorBanner, {}) : void 0
    }
  );
}, "UnifiedExpensePage");
export {
  UnifiedExpensePage as default
};

import { importShared } from "./__federation_fn_import-DCl-vMH-.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { E as ExpensesList } from "./ExpensesList-C9Ow_XUu.js";
import { M as MILEAGE_DETAILS_SECTION, a as MILEAGE_JUSTIFICATION_SECTION, b as MILEAGE_COST_ALLOCATION_SECTION, c as MILEAGE_ADDITIONAL_COMMENTS_SECTION } from "./mileage-trip-sections-BkC_1klf.js";
import { e as useMileageTripFormHandlers, m as mapMileageTripToDefaultValues, g as mileageTripValidationStrategy } from "./SupportingFilesSection-CKC18LuW.js";
import { c as createExpenseForm } from "./form-factory-ixyO7KxR.js";
import { u as useMileageFormSync, a as useSaveMileageDraft, b as useSubmitMileage, c as useDeleteMileageDraft, d as useMileageDraft, E as ExpenseFormDialog, f as formatExpenseDate } from "./mileage-BK6LmKVB.js";
import { u as useNavigate, f as useParams, a as RoutePaths } from "./routes-fA2LM82H.js";
import { u as useNavigateBack } from "./use-navigate-back-DfD3EFl-.js";
const MILEAGE_TRIP_SECTIONS_CONFIG = [
  MILEAGE_DETAILS_SECTION,
  MILEAGE_JUSTIFICATION_SECTION,
  MILEAGE_COST_ALLOCATION_SECTION,
  MILEAGE_ADDITIONAL_COMMENTS_SECTION
];
const MileageTripForm = createExpenseForm({
  validationStrategy: mileageTripValidationStrategy,
  sections: MILEAGE_TRIP_SECTIONS_CONFIG,
  layout: "single-column",
  initialDataTransformer: mapMileageTripToDefaultValues,
  errorDisplayRenderer: ({ errors }) => {
    console.log(errors);
    return null;
  },
  customHook: useMileageFormSync,
  handlersHook: useMileageTripFormHandlers
});
MileageTripForm.displayName = "MileageTripForm";
const { useCallback, useEffect, useState } = await importShared("react");
const MileageTripPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { navigateBack } = useNavigateBack();
  const isNewForm = !id || id === "new";
  const [formKey, setFormKey] = useState(() => isNewForm ? "new" : `loading-${id}`);
  const saveDraftMutation = useSaveMileageDraft();
  const submitMileageMutation = useSubmitMileage();
  const deleteDraftMutation = useDeleteMileageDraft({
    onSuccess: () => {
      setTimeout(() => {
        navigateBack();
      }, 100);
    }
  });
  const shouldFetchDraft = id && id !== "new";
  const { data: existingDraft, error: draftError, isLoading: isDraftLoading } = useMileageDraft(shouldFetchDraft ? id : null);
  const draftData = draftError || !existingDraft ? null : existingDraft;
  const tripData = draftData == null ? void 0 : draftData.data;
  const isDraft = !!draftData;
  const mileageTripTitle = isDraft ? "Mileage" : "New Mileage Claim";
  const currentDraftId = shouldFetchDraft && !draftError && (draftData || isDraftLoading) ? id : null;
  useEffect(() => {
    if (draftError && shouldFetchDraft) {
      navigate(RoutePaths.ExpensesNewMileageTrip, { replace: true });
    }
  }, [draftError, shouldFetchDraft, navigate]);
  useEffect(() => {
    if (!isNewForm && draftData) {
      setFormKey(`loaded-${id}`);
    }
  }, [isNewForm, draftData, id]);
  const handleSubmit = async (data) => {
    try {
      await submitMileageMutation.mutateAsync({ data });
      navigateBack();
    } catch (error) {
      console.error("Failed to submit mileage trip:", error);
    }
  };
  const handleSaveDraft = async (data) => {
    try {
      const result = await saveDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId || void 0
      });
      if (result.id && !currentDraftId) {
        navigate(RoutePaths.ExpensesMileageTripId.replace(":id", result.id), { replace: true });
      }
    } catch (error) {
      console.error("Failed to save mileage trip draft:", error);
    }
  };
  const handleDeleteDraft = useCallback(async () => {
    if (!currentDraftId) return;
    await deleteDraftMutation.mutateAsync(currentDraftId);
  }, [currentDraftId, deleteDraftMutation]);
  const handleClose = () => {
    navigateBack();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseFormDialog,
      {
        formKey,
        title: mileageTripTitle,
        formComponent: MileageTripForm,
        initialData: tripData,
        draftId: currentDraftId,
        isSubmitting: submitMileageMutation.isPending,
        isDrafting: saveDraftMutation.isPending,
        draftSaveError: saveDraftMutation.isError,
        onSubmit: handleSubmit,
        onSaveDraft: handleSaveDraft,
        onDeleteDraft: currentDraftId ? handleDeleteDraft : void 0,
        onClose: handleClose,
        isDraft,
        draftInfo: draftData ? { createdAt: draftData.createdAt } : void 0,
        amountDisplay: (tripData == null ? void 0 : tripData.expenseDate) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-exp-neutral-900", children: formatExpenseDate(tripData.expenseDate) }),
        statusBadge: isDraft && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 bg-exp-yellow-200 text-exp-yellow-900 text-sm font-medium rounded-20", children: "DRAFT" })
      }
    )
  ] });
};
export {
  MileageTripPage as default
};

import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { E as ExpensesList } from "./ExpensesList-Ny2FmLOX.js";
import { h as mileageDetailsSchema, F as FormSectionType, i as mileageJustificationSchema, M as MileagePeriodFormField, j as costAllocationSchema, s as supportingFilesSchema, k as additionalCommentsSchema, l as CostAllocationHeaderActions, n as CostAllocationSection, o as SupportingFilesFormSection, p as createValidationStrategy, q as createDraftSaveChecker, r as createRequiredFieldsChecker, t as additionalCommentsFieldOptional, v as supportingFilesField, w as expenseDescriptionFieldOptional, x as businessPurposeFieldOptional, y as reimbursableAmountFieldOptional, z as rateUnitFieldOptional, A as ratePerUnitFieldOptional, B as totalDistanceFieldOptional, D as expensePeriodFieldOptional, G as mileageTypeFieldOptional, H as costAllocationTypeSchema, I as useCostAllocationHandlers } from "./SupportingFilesFormSection-BUAfmG7V.js";
import { M as MileageDetailsSection, a as MileageJustificationSection, A as AdditionalCommentsSection, m as mileagePeriodFormSchema } from "./MileageJustificationSection-CLvy2znz.js";
import "./createLucideIcon-CJLbBnZK.js";
import "./api-nyXpf5b_.js";
import "./LoadingSpinner-oVaRtv3i.js";
import "./api-De49E1Ub.js";
import "./api-BmdlBUGU.js";
import { I as Icon } from "./Icon-DYEjfqv0.js";
import { o as object, b as boolean, a as array, c as unknown, n as number, s as string } from "./zod-hmtOKhFn.js";
import { c as createExpenseForm } from "./form-factory-pMqVnVZO.js";
import { u as useMileageFormSync, a as useSaveMileageDraft, b as useSubmitMileage, c as useDeleteMileageDraft, d as useMileageDraft, E as ExpenseFormDialog, e as formatExpensePeriod } from "./mileage-HhiwlVG9.js";
import { u as useNavigate, f as useParams, a as RoutePaths } from "./routes-BPGuc5lC.js";
const MILEAGE_PERIOD_DETAILS_SECTION = {
  id: "mileage-details",
  type: FormSectionType.MileageDetails,
  title: "MILEAGE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: mileageDetailsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "period" })
};
const MILEAGE_PERIOD_JUSTIFICATION_SECTION = {
  id: "mileage-justification",
  type: FormSectionType.MileageJustification,
  title: "MILEAGE JUSTIFICATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 2,
  schema: mileageJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props })
};
const MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  defaultCurrencyCode: "CAD"
};
const MILEAGE_PERIOD_COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 3,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG }),
  headerActions: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG
    }
  ),
  isEnabled: (formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  },
  dependsOn: [MileagePeriodFormField.ReimbursableAmount, MileagePeriodFormField.CostAllocations, MileagePeriodFormField.IsEqualSplit]
};
const MILEAGE_PERIOD_SUPPORTING_FILES_SECTION = {
  id: "supporting-files",
  type: FormSectionType.SupportingFiles,
  title: "SUPPORTING FILES",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "bg-trax-neutral-30 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 4,
  hideHeader: true,
  schema: supportingFilesSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(SupportingFilesFormSection, { ...props })
};
const MILEAGE_PERIOD_ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 5,
  schema: additionalCommentsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props })
};
const MILEAGE_PERIOD_SECTIONS_CONFIG = [
  MILEAGE_PERIOD_DETAILS_SECTION,
  MILEAGE_PERIOD_JUSTIFICATION_SECTION,
  MILEAGE_PERIOD_COST_ALLOCATION_SECTION,
  MILEAGE_PERIOD_SUPPORTING_FILES_SECTION,
  MILEAGE_PERIOD_ADDITIONAL_COMMENTS_SECTION
];
object({
  [MileagePeriodFormField.MileageType]: mileageTypeFieldOptional,
  [MileagePeriodFormField.ExpensePeriod]: expensePeriodFieldOptional,
  [MileagePeriodFormField.TotalDistance]: totalDistanceFieldOptional,
  [MileagePeriodFormField.RatePerUnit]: ratePerUnitFieldOptional,
  [MileagePeriodFormField.RateUnit]: rateUnitFieldOptional,
  [MileagePeriodFormField.ReimbursableAmount]: reimbursableAmountFieldOptional,
  [MileagePeriodFormField.BusinessPurpose]: businessPurposeFieldOptional,
  [MileagePeriodFormField.ExpenseDescription]: expenseDescriptionFieldOptional,
  [MileagePeriodFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })).optional(),
  [MileagePeriodFormField.IsEqualSplit]: boolean().optional(),
  [MileagePeriodFormField.SupportingFiles]: supportingFilesField,
  [MileagePeriodFormField.AdditionalComments]: additionalCommentsFieldOptional
});
const requiredFields = [
  MileagePeriodFormField.MileageType,
  MileagePeriodFormField.ExpensePeriod,
  MileagePeriodFormField.TotalDistance,
  MileagePeriodFormField.RatePerUnit,
  MileagePeriodFormField.RateUnit,
  MileagePeriodFormField.ReimbursableAmount,
  MileagePeriodFormField.BusinessPurpose,
  MileagePeriodFormField.ExpenseDescription
];
const draftSaveableFields = [
  MileagePeriodFormField.MileageType,
  MileagePeriodFormField.ExpensePeriod,
  MileagePeriodFormField.TotalDistance,
  MileagePeriodFormField.BusinessPurpose,
  MileagePeriodFormField.ExpenseDescription,
  MileagePeriodFormField.SupportingFiles,
  MileagePeriodFormField.AdditionalComments
];
const areRequiredFieldsFilled = createRequiredFieldsChecker(
  requiredFields,
  (data) => {
    const totalDistance = parseFloat(data[MileagePeriodFormField.TotalDistance] || "0");
    if (totalDistance <= 0) {
      return false;
    }
    return true;
  }
);
const canSaveDraft = createDraftSaveChecker(draftSaveableFields);
const getFormValidationErrors = (data) => {
  const errors = [];
  const result = mileagePeriodFormSchema.safeParse(data);
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors.push(issue.message);
    });
  }
  return errors;
};
const mileagePeriodValidationStrategy = createValidationStrategy(mileagePeriodFormSchema, {
  areRequiredFieldsFilled,
  canSaveDraft,
  getValidationErrors: getFormValidationErrors
});
const { useMemo: useMemo$1 } = await importShared("react");
const useMileagePeriodFormHandlers = (setValue, getValues) => {
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    MileagePeriodFormField.CostAllocations,
    MileagePeriodFormField.IsEqualSplit,
    MileagePeriodFormField.ReimbursableAmount
  );
  return useMemo$1(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers
    }),
    [costAllocationHandlers]
  );
};
const { useCallback: useCallback$1, useMemo } = await importShared("react");
const mapMileagePeriodToDefaultValues = (data) => {
  return {
    [MileagePeriodFormField.MileageType]: (data == null ? void 0 : data.mileageType) ?? "",
    [MileagePeriodFormField.ExpensePeriod]: (data == null ? void 0 : data.expensePeriod) ?? void 0,
    [MileagePeriodFormField.TotalDistance]: (data == null ? void 0 : data.totalDistance) ?? "",
    [MileagePeriodFormField.RatePerUnit]: (data == null ? void 0 : data.ratePerUnit) ?? "",
    [MileagePeriodFormField.RateUnit]: (data == null ? void 0 : data.rateUnit) ?? "",
    [MileagePeriodFormField.ReimbursableAmount]: (data == null ? void 0 : data.reimbursableAmount) ?? "",
    [MileagePeriodFormField.BusinessPurpose]: (data == null ? void 0 : data.businessPurpose) ?? "",
    [MileagePeriodFormField.ExpenseDescription]: (data == null ? void 0 : data.expenseDescription) ?? "",
    [MileagePeriodFormField.CostAllocations]: (data == null ? void 0 : data.costAllocations) ?? [],
    [MileagePeriodFormField.IsEqualSplit]: (data == null ? void 0 : data.isEqualSplit) ?? false,
    [MileagePeriodFormField.SupportingFiles]: (data == null ? void 0 : data.supportingFiles) ?? [],
    [MileagePeriodFormField.AdditionalComments]: (data == null ? void 0 : data.additionalComments) ?? ""
  };
};
const MileagePeriodForm = createExpenseForm({
  validationStrategy: mileagePeriodValidationStrategy,
  sections: MILEAGE_PERIOD_SECTIONS_CONFIG,
  layout: "single-column",
  initialDataTransformer: mapMileagePeriodToDefaultValues,
  errorDisplayRenderer: ({ errors }) => {
    console.log(errors);
    return null;
  },
  customHook: useMileageFormSync,
  handlersHook: useMileagePeriodFormHandlers
});
MileagePeriodForm.displayName = "MileagePeriodForm";
const { useCallback, useEffect, useState } = await importShared("react");
const MileagePeriodPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [stableFormKey] = useState(() => id || "new");
  const saveDraftMutation = useSaveMileageDraft();
  const submitMileageMutation = useSubmitMileage();
  const deleteDraftMutation = useDeleteMileageDraft({
    onSuccess: () => {
      setTimeout(() => {
        navigate(RoutePaths.Expenses);
      }, 100);
    }
  });
  const shouldFetchDraft = id && id !== "new";
  const { data: existingDraft, error: draftError, isLoading: isDraftLoading } = useMileageDraft(shouldFetchDraft ? id : null);
  const draftData = draftError || !existingDraft ? null : existingDraft;
  const periodData = draftData == null ? void 0 : draftData.data;
  const isDraft = !!draftData;
  const mileagePeriodTitle = isDraft ? "Mileage" : "New Mileage Claim";
  const currentDraftId = shouldFetchDraft && !draftError && (draftData || isDraftLoading) ? id : null;
  useEffect(() => {
    if (draftError && shouldFetchDraft) {
      navigate(RoutePaths.ExpensesNewMileagePeriod, { replace: true });
    }
  }, [draftError, shouldFetchDraft, navigate]);
  const handleSubmit = async (data) => {
    try {
      await submitMileageMutation.mutateAsync({ data });
      navigate(RoutePaths.Expenses);
    } catch (error) {
      console.error("Failed to submit mileage period:", error);
    }
  };
  const handleSaveDraft = async (data) => {
    try {
      const result = await saveDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId || void 0
      });
      if (result.id && !currentDraftId) {
        navigate(RoutePaths.ExpensesMileagePeriodId.replace(":id", result.id), { replace: true });
      }
    } catch (error) {
      console.error("Failed to save mileage period draft:", error);
    }
  };
  const handleDeleteDraft = useCallback(async () => {
    if (!currentDraftId) return;
    await deleteDraftMutation.mutateAsync(currentDraftId);
  }, [currentDraftId, deleteDraftMutation]);
  const handleClose = () => {
    navigate(RoutePaths.Expenses);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseFormDialog,
      {
        formKey: stableFormKey,
        title: mileagePeriodTitle,
        formComponent: MileagePeriodForm,
        initialData: periodData,
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
        amountDisplay: (periodData == null ? void 0 : periodData.expensePeriod) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-exp-neutral-900", children: formatExpensePeriod(periodData.expensePeriod) }),
        statusBadge: isDraft && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 bg-exp-yellow-200 text-exp-yellow-900 text-sm font-medium rounded-20", children: "DRAFT" })
      }
    )
  ] });
};
export {
  MileagePeriodPage as default
};

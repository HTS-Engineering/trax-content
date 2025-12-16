import { importShared } from "./__federation_fn_import-DCl-vMH-.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { E as ExpensesList } from "./ExpensesList-CONmvNeh.js";
import { h as mileageDetailsSchema, F as FormSectionType, i as mileageJustificationSchema, j as costAllocationSchema, s as supportingFilesSchema, k as additionalCommentsSchema, l as createValidationStrategy, n as additionalCommentsFieldOptional, o as supportingFilesField, p as expenseDescriptionFieldOptional, q as businessPurposeFieldOptional, t as reimbursableAmountFieldOptional, v as rateUnitFieldOptional, w as ratePerUnitFieldOptional, x as totalDistanceFieldOptional, y as expensePeriodFieldOptional, z as mileageTypeFieldOptional, A as costAllocationTypeSchema, B as createDraftSaveChecker, D as createRequiredFieldsChecker, G as useCostAllocationHandlers } from "./SupportingFilesSection-x5eH3RXh.js";
import { M as MileagePeriodFormField, a as MileageDetailsSection, b as MileageJustificationSection, C as CostAllocationHeaderActions, c as CostAllocationSection, S as SupportingFilesFormSection, A as AdditionalCommentsSection, m as mileagePeriodFormSchema } from "./MileageJustificationSection-Cm_ySPAm.js";
import "./axiosInstance-SeFXieo9.js";
import "./api-BFsICfEA.js";
import "./store-CSFUld4s.js";
import "./api-CtlXvzO4.js";
import "./api-C-fQGA6b.js";
import { I as Icon } from "./Icon-5_58Mq6r.js";
import { o as object, b as boolean, a as array, l as literal, u as unknown, n as number, s as string } from "./zod-QmC9MztX.js";
import { c as createExpenseForm } from "./form-factory-C1fawT8l.js";
import { u as useMileageFormSync, a as useSaveMileageDraft, b as useSubmitMileage, c as useDeleteMileageDraft, d as useMileageDraft, E as ExpenseFormDialog, e as formatExpensePeriod } from "./mileage-DHef0sDh.js";
import { u as useNavigate, f as useParams, a as RoutePaths } from "./routes-fA2LM82H.js";
import { u as useNavigateBack } from "./use-navigate-back-DWfQ-_Yh.js";
const MILEAGE_PERIOD_DETAILS_SECTION = {
  id: "mileage-details",
  type: FormSectionType.MileageDetails,
  title: "MILEAGE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
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
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
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
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
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
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "w-4 h-4 text-exp-neutral-950" }),
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
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
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
  formType: literal("period"),
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
const ensureDate = (value) => {
  if (!value) return void 0;
  if (value instanceof Date) return value;
  if (typeof value === "string") return new Date(value);
  return void 0;
};
const parseExpensePeriod = (period) => {
  if (!period) return void 0;
  const from = ensureDate(period.from);
  const to = ensureDate(period.to);
  if (!from || !to) return void 0;
  return { from, to };
};
const mapMileagePeriodToDefaultValues = (data) => {
  return {
    [MileagePeriodFormField.MileageType]: (data == null ? void 0 : data.mileageType) ?? "",
    [MileagePeriodFormField.ExpensePeriod]: parseExpensePeriod(data == null ? void 0 : data.expensePeriod),
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
  const periodData = draftData == null ? void 0 : draftData.data;
  const isDraft = !!draftData;
  const mileagePeriodTitle = isDraft ? "Mileage" : "New Mileage Claim";
  const currentDraftId = shouldFetchDraft && !draftError && (draftData || isDraftLoading) ? id : null;
  useEffect(() => {
    if (draftError && shouldFetchDraft) {
      navigate(RoutePaths.ExpensesNewMileagePeriod, { replace: true });
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
    navigateBack();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpenseFormDialog,
      {
        formKey,
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

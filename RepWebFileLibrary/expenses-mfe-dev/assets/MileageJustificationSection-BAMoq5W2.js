import { t as additionalCommentsFieldOptional, v as supportingFilesField, _ as expenseDescriptionField, $ as businessPurposeField, a0 as reimbursableAmountField, a1 as rateUnitField, a2 as ratePerUnitField, a3 as totalDistanceField, a4 as expensePeriodField, a5 as mileageTypeField, M as MileagePeriodFormField, H as costAllocationTypeSchema, a6 as CostAllocationValidationRules, u as useFormFieldValues } from "./SupportingFilesFormSection-BzjJ0GRA.js";
import { o as object, b as boolean, a as array, l as literal, u as unknown, n as number, s as string, C as Controller } from "./zod-BRdb-B2v.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { I as Ia, E as Ea, W as Da, F as Fa, X as rs } from "./axiosInstance-C-3zYJ_U.js";
import { c as useBusinessPurposes } from "./api-1GCezcmM.js";
import "./store-BA0spBdd.js";
import { a as useDefaultCompany } from "./api-ChGbT6q2.js";
const mileagePeriodFormSchema = object({
  formType: literal("period"),
  [MileagePeriodFormField.MileageType]: mileageTypeField,
  [MileagePeriodFormField.ExpensePeriod]: expensePeriodField,
  [MileagePeriodFormField.TotalDistance]: totalDistanceField,
  [MileagePeriodFormField.RatePerUnit]: ratePerUnitField,
  [MileagePeriodFormField.RateUnit]: rateUnitField,
  [MileagePeriodFormField.ReimbursableAmount]: reimbursableAmountField,
  [MileagePeriodFormField.BusinessPurpose]: businessPurposeField,
  [MileagePeriodFormField.ExpenseDescription]: expenseDescriptionField,
  [MileagePeriodFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })),
  [MileagePeriodFormField.IsEqualSplit]: boolean().optional(),
  [MileagePeriodFormField.SupportingFiles]: supportingFilesField,
  [MileagePeriodFormField.AdditionalComments]: additionalCommentsFieldOptional
}).superRefine((data, ctx) => {
  if (!data.costAllocations || data.costAllocations.length === 0) return;
  const allocations = data.costAllocations;
  const reimbursableAmount = parseFloat(data.reimbursableAmount || "0");
  allocations.forEach((allocation, index) => {
    if (allocation.percentage > 100) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getPercentageRangeErrorMessage(),
        path: ["costAllocations", index, "percentage"]
      });
    }
    if (reimbursableAmount > 0 && allocation.amount > reimbursableAmount) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getAmountExceedsErrorMessage(reimbursableAmount),
        path: ["costAllocations", index, "amount"]
      });
    }
  });
  if (!CostAllocationValidationRules.isPercentageValid(allocations)) {
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getPercentageErrorMessage(),
      path: ["costAllocations"]
    });
  }
  if (reimbursableAmount > 0 && !CostAllocationValidationRules.isSumValid(allocations, reimbursableAmount)) {
    const allocationsSum = allocations.reduce((sum, a) => sum + a.amount, 0);
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getSumErrorMessage(allocationsSum, reimbursableAmount),
      path: ["costAllocations"]
    });
  }
});
const BusinessPurposeSelect = ({
  value,
  onChange,
  onBlur,
  required = true,
  disabled = false,
  placeholder = "Select business purpose",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: businessPurposes, isLoading: isLoadingPurposes } = useBusinessPurposes(companyId, false);
  const options = (businessPurposes == null ? void 0 : businessPurposes.map((bp) => ({
    value: bp.id,
    label: bp.businessPurpose
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingPurposes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingPurposes ? "Loading business purposes..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ia,
    {
      label: "Business purpose",
      placeholder: displayPlaceholder,
      options,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled: disabled || isLoading || !companyId,
      error
    }
  );
};
const AdditionalCommentsSection = ({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "additionalComments",
      control,
      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ea,
        {
          ...field,
          placeholder: "Add any additional comments...",
          rows: 1,
          value: field.value || "",
          disabled
        }
      )
    }
  ) });
};
const MILEAGE_OPTIONS = [
  { value: "mileage-0", label: "Test" },
  { value: "mileage-1", label: "Business Mileage" },
  { value: "mileage-2", label: "Personal Vehicle - Business Use" },
  { value: "mileage-3", label: "Company Vehicle Mileage" }
];
const MileageTypeSelect = ({
  value,
  onChange,
  onBlur,
  required = true,
  disabled = false,
  placeholder = "Select mileage type",
  error
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ia,
    {
      label: "Mileage type",
      placeholder,
      options: MILEAGE_OPTIONS,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled,
      error
    }
  );
};
const MileageDetailsSection = ({
  control,
  disabled = false,
  mode = "trip"
}) => {
  const isTripMode = mode === "trip";
  const { ratePerUnit, rateUnit, reimbursableAmount } = useFormFieldValues(
    control,
    ["ratePerUnit", "rateUnit", "reimbursableAmount"]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "mileageType",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              MileageTypeSelect,
              {
                value: field.value || "",
                onChange: field.onChange,
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true,
                disabled
              }
            );
          }
        }
      ),
      isTripMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expenseDate",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Da,
              {
                mode: "single",
                label: "Expense date",
                placeholder: "Select date mileage incurred",
                value: typeof field.value === "string" && field.value ? new Date(field.value) : void 0,
                onChange: (date) => {
                  field.onChange(date ? date.toISOString() : "");
                },
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true,
                disabled,
                numberOfMonths: 1,
                maxDate: /* @__PURE__ */ new Date()
              }
            );
          }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expensePeriod",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Da,
              {
                mode: "range",
                label: "Expense period",
                placeholder: "Select period range",
                value: field.value,
                onChange: (range) => {
                  field.onChange(range);
                },
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true,
                disabled,
                numberOfMonths: 2,
                maxDate: /* @__PURE__ */ new Date()
              }
            );
          }
        }
      ),
      isTripMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "fromLocation",
            control,
            render: ({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Fa,
                {
                  label: "From",
                  placeholder: "Specify origin location",
                  ...field,
                  value: field.value || "",
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  required: true,
                  disabled,
                  maxCharacters: 100,
                  showCharacterCount: true,
                  enforceMaxLength: true
                }
              );
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center absolute top-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "isRoundTrip",
              control,
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                rs,
                {
                  label: "Round trip",
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  disabled
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "toLocation",
              control,
              render: ({ field, fieldState }) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Fa,
                  {
                    label: "To",
                    placeholder: "Specify destination location",
                    ...field,
                    value: field.value || "",
                    error: (_a = fieldState.error) == null ? void 0 : _a.message,
                    required: true,
                    disabled,
                    maxCharacters: 100,
                    showCharacterCount: true,
                    enforceMaxLength: true
                  }
                );
              }
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "totalDistance",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Fa,
              {
                label: `Total distance${rateUnit ? ` (${rateUnit})` : ""}`,
                placeholder: "0.00",
                ...field,
                value: field.value || "",
                type: "number",
                step: "0.01",
                min: "0",
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true,
                disabled
              }
            );
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Fa,
        {
          label: "Rate",
          value: ratePerUnit ? `$ ${ratePerUnit} per ${rateUnit || "unit"}` : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Fa,
        {
          label: "Reimbursable amount",
          value: reimbursableAmount ? `$ ${reimbursableAmount} CAD` : "$ CAD",
          disabled: true,
          readOnly: true
        }
      )
    ] })
  ] });
};
const MileageJustificationSection = ({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "businessPurpose",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            BusinessPurposeSelect,
            {
              value: field.value || "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true,
              disabled
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDescription",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ea,
            {
              label: "Expense description",
              placeholder: "Add any additional details about this claim",
              ...field,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true,
              disabled,
              maxLength: 500,
              rows: 4
            }
          );
        }
      }
    )
  ] });
};
export {
  AdditionalCommentsSection as A,
  BusinessPurposeSelect as B,
  MileageDetailsSection as M,
  MileageJustificationSection as a,
  mileagePeriodFormSchema as m
};

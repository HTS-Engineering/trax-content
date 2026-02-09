import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { o as additionalCommentsFieldOptional, p as supportingFilesField, $ as expenseDescriptionField, a0 as businessPurposeField, a1 as reimbursableAmountField, a2 as rateUnitField, a3 as ratePerUnitField, a4 as totalDistanceField, a5 as expensePeriodField, a6 as mileageTypeField, A as costAllocationTypeSchema, a7 as validateCostAllocation, a8 as PAYMENT_METHOD_DATA, u as useFormFieldValues, Q as EXPENSE_LOCATION_OPTIONS, a9 as CURRENCY_OPTIONS, aa as useFormTypeId, ab as useCostAllocation, ac as AllocationTypeChips, ad as CostAllocationField, ae as AddAllocationExpandable, af as useEqualSplit, ag as COST_ALLOCATION_LABELS, ah as SupportingFiles, ai as MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD, aj as expenseDetailsSchema, F as FormSectionType, ak as expenseJustificationSchema, l as costAllocationSchema, n as additionalCommentsSchema, al as MileageTripFormField, j as mileageDetailsSchema, k as mileageJustificationSchema } from "./ExpenseFormLeftColumn-DRsnqii4.js";
import { o as object, b as boolean, a as array, u as unknown, n as number, s as string, l as literal, C as Controller, f as useWatch } from "./zod-PpMdyx4R.js";
import { a as Pa, k as Ma, $ as $a, Z as Aa, d as ds, V as Va, a4 as ka, a5 as Ys, a6 as ze } from "./index.es-fHErn31W.js";
import { a as useExpenseTypes, E as ExpenseFormType } from "./api-BJgH85Oc.js";
import "./factory-12HpvfuQ.js";
import { a as useDefaultCompany } from "./api-BLw04uWH.js";
import { C as CreditCard } from "./credit-card-DGksABcy.js";
import { c as createLucideIcon } from "./createLucideIcon-CWwrLivU.js";
import { D as DEFAULT_CURRENCY, a as DEFAULT_CURRENCY_CODE } from "./currency-DF2IpVR4.js";
import "./axiosInstance-CnSxcvFl.js";
import "./use-debounced-callback-CVWzCf5M.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { c as useBusinessPurposes } from "./api-D-Q_-RiZ.js";
const __iconNode = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode);
var MileagePeriodFormField = /* @__PURE__ */ ((MileagePeriodFormField2) => {
  MileagePeriodFormField2["MileageType"] = "mileageType";
  MileagePeriodFormField2["ExpensePeriod"] = "expensePeriod";
  MileagePeriodFormField2["TotalDistance"] = "totalDistance";
  MileagePeriodFormField2["RatePerUnit"] = "ratePerUnit";
  MileagePeriodFormField2["RateUnit"] = "rateUnit";
  MileagePeriodFormField2["ReimbursableAmount"] = "reimbursableAmount";
  MileagePeriodFormField2["BusinessPurpose"] = "businessPurpose";
  MileagePeriodFormField2["ExpenseDescription"] = "expenseDescription";
  MileagePeriodFormField2["CostAllocations"] = "costAllocations";
  MileagePeriodFormField2["IsEqualSplit"] = "isEqualSplit";
  MileagePeriodFormField2["DeferToApprover"] = "deferToApprover";
  MileagePeriodFormField2["SupportingFiles"] = "supportingFiles";
  MileagePeriodFormField2["AdditionalComments"] = "additionalComments";
  return MileagePeriodFormField2;
})(MileagePeriodFormField || {});
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
  })).optional(),
  [MileagePeriodFormField.IsEqualSplit]: boolean().optional(),
  [MileagePeriodFormField.DeferToApprover]: boolean().optional(),
  [MileagePeriodFormField.SupportingFiles]: supportingFilesField,
  [MileagePeriodFormField.AdditionalComments]: additionalCommentsFieldOptional
}).superRefine((data, ctx) => {
  validateCostAllocation(ctx, data.costAllocations, data.reimbursableAmount, data.deferToApprover);
});
const ExpenseTypeSelect = ({
  value,
  onChange,
  onBlur,
  required = true,
  disabled = false,
  placeholder = "Select expense type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingExpenses } = useExpenseTypes(companyId, false);
  const options = (expenseTypes == null ? void 0 : expenseTypes.map((et) => ({
    value: et.id,
    label: et.name
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingExpenses;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingExpenses ? "Loading expense types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Pa,
    {
      label: "Expense type",
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
const getPaymentMethodOptions = () => {
  return PAYMENT_METHOD_DATA.map((method) => ({
    value: method.value,
    label: method.icon ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      method.icon === "credit-card" && /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 text-trax-neutral-1000" }),
      method.icon === "banknote" && /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 text-exp-yellow-y-700" }),
      method.label
    ] }) : method.label
  }));
};
const ExpenseDetailsSection = ({
  control,
  disabled = false,
  onCurrencyModeChange,
  onNetCurrencyChange,
  onTotalCurrencyChange
}) => {
  const { isDifferentCurrency, netCurrency, totalCurrency } = useFormFieldValues(control, [
    "isDifferentCurrency",
    "netCurrency",
    "totalCurrency"
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseType",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExpenseTypeSelect,
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
        name: "vendor",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ma,
            {
              label: "Vendor",
              placeholder: "Enter vendor name",
              ...field,
              value: field.value || "",
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
        name: "expenseDate",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            $a,
            {
              label: "Expense date",
              placeholder: "Select date expense incurred",
              value: field.value ? new Date(field.value) : void 0,
              onChange: (date) => field.onChange(date ? date.toISOString() : ""),
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true,
              disabled,
              maxDate: /* @__PURE__ */ new Date()
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseLocation",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pa,
            {
              label: "Expense location",
              placeholder: "Select location",
              options: [...EXPENSE_LOCATION_OPTIONS],
              value: field.value || "",
              onValueChange: field.onChange,
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
        name: "paymentMethod",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pa,
            {
              label: "Payment method",
              placeholder: "Select payment method",
              options: getPaymentMethodOptions(),
              value: field.value || "",
              onValueChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true,
              disabled
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "netAmount",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Aa,
              {
                label: isDifferentCurrency ? "Total (foreign)" : "HST/GST Amount",
                placeholder: "0.00",
                currencyCode: (netCurrency == null ? void 0 : netCurrency.code) || DEFAULT_CURRENCY.code,
                locale: (netCurrency == null ? void 0 : netCurrency.locale) || DEFAULT_CURRENCY.locale,
                symbolStyle: "narrow",
                ...field,
                value: field.value || "",
                enableCurrencySelector: isDifferentCurrency,
                currencyOptions: CURRENCY_OPTIONS,
                onCurrencyChange: (currency) => onNetCurrencyChange({ code: currency.code, locale: currency.locale || DEFAULT_CURRENCY.locale }),
                required: true,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "totalAmount",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Aa,
              {
                label: isDifferentCurrency ? "Total (converted)" : "Total (including taxes)",
                placeholder: "0.00",
                currencyCode: (totalCurrency == null ? void 0 : totalCurrency.code) || DEFAULT_CURRENCY.code,
                locale: (totalCurrency == null ? void 0 : totalCurrency.locale) || DEFAULT_CURRENCY.locale,
                symbolStyle: "narrow",
                ...field,
                value: field.value || "",
                enableCurrencySelector: isDifferentCurrency,
                currencyOptions: CURRENCY_OPTIONS,
                onCurrencyChange: (currency) => onTotalCurrencyChange({ code: currency.code, locale: currency.locale || DEFAULT_CURRENCY.locale }),
                required: true,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ds,
      {
        label: "Expense made in a different currency",
        checked: isDifferentCurrency,
        onCheckedChange: (checked) => onCurrencyModeChange(checked === true),
        disabled
      }
    )
  ] });
};
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
    Pa,
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
const ExpenseJustificationSection = ({
  control,
  disabled = false
}) => {
  const expenseTypeId = useFormFieldValues(control, ["expenseType"]).expenseType;
  const formType = useFormTypeId(expenseTypeId);
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
              required: true,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
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
            Va,
            {
              ...field,
              label: "Expense description",
              placeholder: "Describe what was purchased",
              rows: 1,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true,
              disabled
            }
          );
        }
      }
    ),
    formType === ExpenseFormType.ENTERTAINMENT && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "personsEntertained",
        control,
        render: ({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Va,
            {
              ...field,
              label: "Persons entertained",
              placeholder: "Enter the full names of clients/guests entertained",
              rows: 1,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: formType === ExpenseFormType.ENTERTAINMENT,
              disabled
            }
          );
        }
      }
    )
  ] });
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
        Va,
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
    Pa,
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
const { memo } = await importShared("react");
function CostAllocationHeaderActions({
  control,
  setValue,
  disabled,
  helpers,
  fieldConfig
}) {
  const totalAmount = useWatch({
    control,
    name: fieldConfig.totalAmountField
  });
  const costAllocations = useWatch({
    control,
    name: fieldConfig.costAllocationsField
  });
  const isEqualSplit = useWatch({
    control,
    name: fieldConfig.isEqualSplitField
  });
  const deferToApprover = useWatch({
    control,
    name: fieldConfig.deferToApproverField
  });
  const allocations = costAllocations || [];
  const parsedTotalAmount = parseFloat(totalAmount || "0");
  const {
    canEnableEqualSplit,
    toggleEqualSplit
  } = useEqualSplit({
    allocations,
    isEqualSplit: isEqualSplit ?? false,
    setValue,
    getValues: helpers.getValues,
    totalAmount: parsedTotalAmount,
    totalAmountField: fieldConfig.totalAmountField,
    costAllocationsField: fieldConfig.costAllocationsField,
    isEqualSplitField: fieldConfig.isEqualSplitField
  });
  const isEqualSplitDisabled = parsedTotalAmount === 0;
  const hasNoAllocations = allocations.length === 0;
  const noAmountEntered = totalAmount === "0" || totalAmount === "";
  if (hasNoAllocations) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ds,
      {
        id: "defer-to-approver",
        label: "Defer to approver",
        checked: deferToApprover ?? false,
        onCheckedChange: (checked) => setValue(
          fieldConfig.deferToApproverField,
          checked,
          {
            shouldValidate: true,
            shouldDirty: true
          }
        ),
        disabled: noAmountEntered
      }
    ) });
  }
  if (!canEnableEqualSplit) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ys,
      {
        id: "equal-split-toggle",
        checked: isEqualSplit ?? false,
        onCheckedChange: toggleEqualSplit,
        disabled: isEqualSplitDisabled || disabled
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ze,
      {
        htmlFor: "equal-split-toggle",
        className: "text-xs font-medium text-exp-neutral-700 cursor-pointer",
        children: COST_ALLOCATION_LABELS.EQUAL_SPLIT
      }
    )
  ] });
}
function CostAllocationSectionComponent({
  control,
  setValue,
  trigger,
  disabled = false,
  actions,
  helpers,
  fieldConfig
}) {
  const totalAmount = useWatch({
    control,
    name: fieldConfig.totalAmountField
  });
  const totalCurrency = fieldConfig.currencyField ? useWatch({
    control,
    name: fieldConfig.currencyField
  }) : void 0;
  const costAllocations = useWatch({
    control,
    name: fieldConfig.costAllocationsField
  });
  const deferToApprover = useWatch({
    control,
    name: fieldConfig.deferToApproverField
  });
  const allocations = costAllocations || [];
  const parsedTotalAmount = parseFloat(totalAmount || "0");
  const getCurrencyCode = () => {
    if (totalCurrency && typeof totalCurrency === "object" && "code" in totalCurrency) {
      return totalCurrency.code || fieldConfig.defaultCurrencyCode || DEFAULT_CURRENCY_CODE;
    }
    return fieldConfig.defaultCurrencyCode || DEFAULT_CURRENCY_CODE;
  };
  const {
    progressValue,
    progressError
  } = useCostAllocation({
    allocations,
    totalAmount: parsedTotalAmount
  });
  const hasAllocations = allocations.length > 0;
  const { addAllocation, updateAllocationEntity, removeAllocation } = actions;
  const { getSelectedValue } = helpers;
  const isProgressDisabled = !hasAllocations && parsedTotalAmount === 0;
  if (deferToApprover) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ka, { value: progressValue, disabled: isProgressDisabled, error: progressError }),
    !hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AllocationTypeChips,
      {
        onSelect: (type) => addAllocation(type),
        disabled
      }
    ) }),
    hasAllocations && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      allocations.map((allocation, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CostAllocationField,
        {
          control,
          setValue,
          trigger,
          getValues: helpers.getValues,
          index,
          type: allocation.type,
          value: getSelectedValue(allocation.id, allocations),
          onValueChange: (item) => updateAllocationEntity(allocation.id, item),
          totalAmount: parsedTotalAmount,
          currencyCode: getCurrencyCode(),
          disabled,
          onRemove: () => removeAllocation(allocation.id),
          isEqualSplitField: fieldConfig.isEqualSplitField
        },
        allocation.id
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AddAllocationExpandable,
        {
          onTypeSelect: (type) => addAllocation(type),
          disabled
        }
      )
    ] })
  ] });
}
const MemoizedCostAllocationSection = memo(CostAllocationSectionComponent);
const CostAllocationSection = MemoizedCostAllocationSection;
MemoizedCostAllocationSection.displayName = "CostAllocationSection";
const { useCallback } = await importShared("react");
const SupportingFilesFormSection = ({
  control,
  setValue,
  disabled = false
}) => {
  const supportingFiles = useWatch({
    control,
    name: MileagePeriodFormField.SupportingFiles
  });
  const handleFilesChange = useCallback(
    (attachments) => {
      setValue(MileagePeriodFormField.SupportingFiles, attachments, {
        shouldValidate: true,
        shouldDirty: true
      });
    },
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SupportingFiles,
    {
      onFilesChange: handleFilesChange,
      initialFiles: supportingFiles || [],
      disabled,
      maxFiles: MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD,
      title: "SUPPORTING FILE",
      tooltipContent: "Attach a JPEG/JPG, PNG, HEIC/HEIF, WebP (max. 25MB) or PDF (max. 50MB)",
      hideAddButtonWhenFull: true
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
              $a,
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
              $a,
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
                Ma,
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
                ds,
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
                  Ma,
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
              Ma,
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
        Ma,
        {
          label: "Rate",
          value: ratePerUnit ? `$ ${ratePerUnit} per ${rateUnit || "unit"}` : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ma,
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
            Va,
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
const EXPENSE_DETAILS_SECTION = {
  id: "expense-details",
  type: FormSectionType.ExpenseDetails,
  title: "EXPENSE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  requiresHandlers: true,
  schema: expenseDetailsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseDetailsSection, { ...props })
};
const EXPENSE_JUSTIFICATION_SECTION = {
  id: "expense-justification",
  type: FormSectionType.ExpenseJustification,
  title: "EXPENSE JUSTIFICATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 2,
  schema: expenseJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseJustificationSection, { ...props })
};
const EXPENSE_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "totalAmount",
  currencyField: "totalCurrency",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
};
const COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 3,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG }),
  headerActions: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG
    }
  ),
  isEnabled: (formValues) => {
    const totalAmount = parseFloat(formValues.totalAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || totalAmount > 0;
  },
  dependsOn: ["totalAmount", "totalCurrency", "costAllocations", "isEqualSplit", "deferToApprover"]
};
const ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 4,
  schema: additionalCommentsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props })
};
const MILEAGE_DETAILS_SECTION = {
  id: "mileage-details",
  type: FormSectionType.MileageDetails,
  title: "MILEAGE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: mileageDetailsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "trip" })
};
const MILEAGE_JUSTIFICATION_SECTION = {
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
const MILEAGE_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover",
  defaultCurrencyCode: DEFAULT_CURRENCY_CODE
};
const MILEAGE_COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 3,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG }),
  headerActions: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG
    }
  ),
  isEnabled: (formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  },
  dependsOn: [
    MileageTripFormField.ReimbursableAmount,
    MileageTripFormField.CostAllocations,
    MileageTripFormField.IsEqualSplit,
    MileageTripFormField.DeferToApprover
  ]
};
const MILEAGE_ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 4,
  schema: additionalCommentsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props })
};
export {
  ADDITIONAL_COMMENTS_SECTION as A,
  COST_ALLOCATION_SECTION as C,
  EXPENSE_DETAILS_SECTION as E,
  MILEAGE_DETAILS_SECTION as M,
  SupportingFilesFormSection as S,
  EXPENSE_JUSTIFICATION_SECTION as a,
  MILEAGE_JUSTIFICATION_SECTION as b,
  MILEAGE_COST_ALLOCATION_SECTION as c,
  MILEAGE_ADDITIONAL_COMMENTS_SECTION as d,
  MileagePeriodFormField as e,
  MileageDetailsSection as f,
  MileageJustificationSection as g,
  CostAllocationHeaderActions as h,
  CostAllocationSection as i,
  AdditionalCommentsSection as j,
  mileagePeriodFormSchema as m
};

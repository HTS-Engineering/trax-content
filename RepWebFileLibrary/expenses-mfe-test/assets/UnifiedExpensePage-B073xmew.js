import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as createLucideIcon, U as Us, B as Ba, G as Ga, f as Ua, P as Pe, j as ja, N as Nn, F as Fn, I as In, _ as _n, E as Ea, D as Da, M as Ma, H as Ha, s as ss, g as Pa, i as is, k as js, l as ze, $ as $a, m as ls, Y as Yn, n as cs, o as Er, p as ECostAllocation, R as RoutePaths, q as apiClient, r as EXPENSE_ENDPOINTS, t as isRegularExpense, u as isMileageExpense, v as isExpenseItemSubmitted, L as Ls, w as MILEAGE_ENDPOINTS, x as isExpenseItemDraft, y as Ya } from "./axiosInstance-BUU6Qp3s.js";
import { a as ExpenseStatusBadge, D as DEFAULT_CURRENCY, b as DEFAULT_CURRENCY_CODE, f as formatDate, c as formatDistance, d as formatRate, e as formatCurrency$1, E as ExpensesList } from "./ExpensesList-CST5z2Jl.js";
import { C as ConfirmDialog, a as additionalCommentsFieldOptional, s as supportingFilesField, e as expenseDescriptionField, b as businessPurposeField, r as reimbursableAmountField, c as rateUnitField, d as ratePerUnitField, t as totalDistanceField, f as expensePeriodField, m as mileageTypeField, g as costAllocationTypeSchema, h as CostAllocationValidationRules, P as PAYMENT_METHOD_DATA, E as ExpenseFormField, u as useFormFieldValues, i as useMileageRateSync, j as useReimbursableAmountSync, k as useAmountAllocationSync, l as useReceiptCheckboxEffects, n as EXPENSE_LOCATION_OPTIONS, o as CURRENCY_OPTIONS, p as useExpenseFormLeftColumn, R as ReceiptSection, S as SupportingFiles, q as useEqualSplit, v as COST_ALLOCATION_LABELS, w as useCostAllocation, A as AllocationTypeChips, x as CostAllocationField, y as AddAllocationExpandable, M as MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD, z as expenseDetailsSchema, F as FormSectionType, B as expenseJustificationSchema, D as costAllocationSchema, G as additionalCommentsSchema, H as MileageTripFormField, I as mileageDetailsSchema, J as mileageJustificationSchema, K as createExpenseForm, L as useExpenseFormHandlers, N as fullExpenseValidationStrategy, O as useMileageTripFormHandlers, Q as mapMileageTripToDefaultValues, T as mileageTripValidationStrategy, U as supportingFilesSchema, V as createValidationStrategy, W as expenseDescriptionFieldOptional, X as businessPurposeFieldOptional, Y as reimbursableAmountFieldOptional, Z as rateUnitFieldOptional, _ as ratePerUnitFieldOptional, $ as totalDistanceFieldOptional, a0 as expensePeriodFieldOptional, a1 as mileageTypeFieldOptional, a2 as createDraftSaveChecker, a3 as createRequiredFieldsChecker, a4 as useCostAllocationHandlers, a5 as resolveFileUrl } from "./form-factory-DuZnP7tz.js";
import { a as ChevronRight, C as CreditCard } from "./credit-card-BR-5YqhT.js";
import { T as Trash2, S as Send } from "./trash-2-C9QYnxBo.js";
import { o as object, b as boolean, a as array, l as literal, u as unknown, n as number, s as string, C as Controller, c as useWatch } from "./zod-Cj9_4baa.js";
import { a as useExpenseTypes } from "./api-1tPgeuEb.js";
import { a as useMutation } from "./store-DZS1L5aH.js";
import { a as useDefaultCompany } from "./api-DSxPCOnt.js";
import { u as useBusinessPurposes } from "./api-DMigLbib.js";
import { I as Icon } from "./Icon-31ae5cox.js";
import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
import { M as MileageFormType, i as isMileageTripData, a as isMileagePeriodData } from "./mileage-common-Dda5W0Me.js";
import { u as useNavigate, a as useLocation, g as generatePath, b as useParams, e as useSearchParams } from "./chunk-JMJ3UQ3L-B_7IlRKO.js";
import { u as useQuery, q as queryKeys, k as useQueryClient } from "./query-keys-g3E7RVOI.js";
const __iconNode$1 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$1);
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
  const renderHeader = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ua, { className: "text-exp-neutral-900 text-xl font-bold", children: header.title }),
        header.titleSuffix,
        header.amount !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
          "$",
          header.amount
        ] }),
        header.status && /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseStatusBadge, { status: header.status })
      ] }),
      header.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-exp-neutral-300", children: header.subtitle }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-38px] flex flex-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pe,
        {
          variant: "outlined",
          iconPosition: "center",
          className: "text-exp-neutral-70 hover:text-exp-neutral-200",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pe,
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ja, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: footer.showDeleteButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Fn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Pe,
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "text-sm", children: "Delete draft" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pe,
            {
              type: "button",
              variant: "outlined",
              onClick: footer.onSaveDraftClick,
              disabled: footer.saveDraftButtonState.disabled,
              children: footer.isSavingDraft ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(_n, { className: "size-5" }),
                "Save Draft"
              ] }) : "Save Draft"
            }
          ) }) }),
          footer.saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(In, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: footer.saveDraftButtonState.tooltip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Pe,
            {
              type: "button",
              variant: "primary",
              onClick: footer.onSubmitClick,
              disabled: footer.submitButtonState.disabled,
              children: [
                footer.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(_n, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                "Submit Expense"
              ]
            }
          ) }) }),
          footer.submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(In, { className: "text-sm", children: footer.submitButtonState.tooltip })
        ] })
      ] })
    ] }) });
  };
  const renderLoadingOrContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(_n, { className: "size-8 text-exp-primary-blue-600" }) });
    }
    return renderContent();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    backgroundContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Us, { open: true, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ba, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
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
    Ea,
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
const mapFullExpenseToDefaultValues = (initialData) => {
  return {
    [ExpenseFormField.ExpenseType]: (initialData == null ? void 0 : initialData.expenseType) ?? "",
    [ExpenseFormField.Vendor]: (initialData == null ? void 0 : initialData.vendor) ?? "",
    [ExpenseFormField.ExpenseDate]: (initialData == null ? void 0 : initialData.expenseDate) ?? "",
    [ExpenseFormField.ExpenseLocation]: (initialData == null ? void 0 : initialData.expenseLocation) ?? "",
    [ExpenseFormField.PaymentMethod]: (initialData == null ? void 0 : initialData.paymentMethod) ?? "",
    [ExpenseFormField.NetAmount]: (initialData == null ? void 0 : initialData.netAmount) ?? "",
    [ExpenseFormField.TotalAmount]: (initialData == null ? void 0 : initialData.totalAmount) ?? "",
    [ExpenseFormField.BusinessPurpose]: (initialData == null ? void 0 : initialData.businessPurpose) ?? "",
    [ExpenseFormField.ExpenseDescription]: (initialData == null ? void 0 : initialData.expenseDescription) ?? "",
    [ExpenseFormField.PersonsEntertained]: (initialData == null ? void 0 : initialData.personsEntertained) ?? "",
    [ExpenseFormField.AdditionalComments]: (initialData == null ? void 0 : initialData.additionalComments) ?? "",
    [ExpenseFormField.ReceiptAttachment]: (initialData == null ? void 0 : initialData.receiptAttachment) ?? null,
    [ExpenseFormField.IsReceiptUnavailable]: (initialData == null ? void 0 : initialData.isReceiptUnavailable) ?? false,
    [ExpenseFormField.Affidavit]: (initialData == null ? void 0 : initialData.affidavit) ?? null,
    [ExpenseFormField.SupportingFiles]: (initialData == null ? void 0 : initialData.supportingFiles) ?? [],
    [ExpenseFormField.IsDifferentCurrency]: (initialData == null ? void 0 : initialData.isDifferentCurrency) ?? false,
    [ExpenseFormField.NetCurrency]: (initialData == null ? void 0 : initialData.netCurrency) ?? DEFAULT_CURRENCY,
    [ExpenseFormField.TotalCurrency]: (initialData == null ? void 0 : initialData.totalCurrency) ?? DEFAULT_CURRENCY,
    [ExpenseFormField.CostAllocations]: (initialData == null ? void 0 : initialData.costAllocations) ?? [],
    [ExpenseFormField.IsEqualSplit]: (initialData == null ? void 0 : initialData.isEqualSplit) ?? false
  };
};
function useMileageFormSync({
  control,
  setValue,
  getValues
}) {
  const { mileageType, totalDistance, ratePerUnit, reimbursableAmount } = useFormFieldValues(
    control,
    ["mileageType", "totalDistance", "ratePerUnit", "reimbursableAmount"]
  );
  useMileageRateSync({
    mileageType: mileageType || "",
    setValue,
    getValues
  });
  useReimbursableAmountSync({
    totalDistance: totalDistance || "",
    ratePerUnit: ratePerUnit || "",
    setValue,
    getValues,
    reimbursableAmountField: "reimbursableAmount"
  });
  useAmountAllocationSync({
    amount: parseFloat(reimbursableAmount || "0"),
    setValue,
    getValues,
    costAllocationsField: "costAllocations",
    isEqualSplitField: "isEqualSplit"
  });
}
const useExpenseFormSync = ({
  control,
  setValue,
  getValues,
  watch
}) => {
  const { totalAmount } = useFormFieldValues(control, [
    ExpenseFormField.TotalAmount
  ]);
  useAmountAllocationSync({
    amount: parseFloat(totalAmount || "0"),
    setValue,
    getValues,
    costAllocationsField: ExpenseFormField.CostAllocations,
    isEqualSplitField: ExpenseFormField.IsEqualSplit
  });
  useReceiptCheckboxEffects({
    watch,
    setValue,
    receiptAttachmentField: ExpenseFormField.ReceiptAttachment,
    isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
    affidavitField: ExpenseFormField.Affidavit
  });
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
            Da,
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
            Ma,
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
            Ea,
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
            Ea,
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
              Ha,
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
              Ha,
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
      ss,
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
    Ea,
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
            Pa,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "personsEntertained",
        control,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pa,
          {
            ...field,
            label: "Persons entertained",
            placeholder: "Enter the full names of clients/guests entertained",
            rows: 1,
            value: field.value || "",
            disabled
          }
        )
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
        Pa,
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
    Ea,
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
const ExpenseFormLeftColumn = ({
  control,
  setValue,
  getValues,
  isSubmitting,
  isDrafting,
  draftId,
  onSaveDraft
}) => {
  const {
    receiptAttachment,
    supportingFiles,
    shouldShowReceiptCheckbox,
    handleReceiptChange,
    handleSupportingFilesChange,
    setIsReceiptUploading
  } = useExpenseFormLeftColumn({
    control,
    setValue,
    getValues,
    isDrafting,
    draftId,
    onSaveDraft
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "w-full h-full flex flex-col pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptSection,
      {
        control,
        isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
        receiptAttachment,
        shouldShowCheckbox: shouldShowReceiptCheckbox,
        onReceiptChange: handleReceiptChange,
        onUploadingChange: setIsReceiptUploading,
        disabled: isSubmitting
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex items-center h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SupportingFiles,
      {
        onFilesChange: handleSupportingFilesChange,
        initialFiles: supportingFiles || [],
        disabled: isSubmitting
      }
    ) })
  ] });
};
const { memo } = await importShared("react");
function CostAllocationHeaderActions({
  control,
  setValue,
  disabled = false,
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
  if (!canEnableEqualSplit) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      js,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx($a, { value: progressValue, disabled: isProgressDisabled, error: progressError }),
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
const { useCallback: useCallback$5 } = await importShared("react");
const SupportingFilesFormSection = ({
  control,
  setValue,
  disabled = false
}) => {
  const supportingFiles = useWatch({
    control,
    name: MileagePeriodFormField.SupportingFiles
  });
  const handleFilesChange = useCallback$5(
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
              Ma,
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
              Ma,
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
                Da,
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
                ss,
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
                  Da,
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
              Da,
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
        Da,
        {
          label: "Rate",
          value: ratePerUnit ? `$ ${ratePerUnit} per ${rateUnit || "unit"}` : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Da,
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
            Pa,
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
  isEqualSplitField: "isEqualSplit"
};
const COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
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
  dependsOn: ["totalAmount", "totalCurrency", "costAllocations", "isEqualSplit"]
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
  dependsOn: [MileageTripFormField.ReimbursableAmount, MileageTripFormField.CostAllocations, MileageTripFormField.IsEqualSplit]
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
const FULL_EXPENSE_SECTIONS_CONFIG = [
  EXPENSE_DETAILS_SECTION,
  EXPENSE_JUSTIFICATION_SECTION,
  COST_ALLOCATION_SECTION,
  ADDITIONAL_COMMENTS_SECTION
];
const ExpenseForm = createExpenseForm({
  validationStrategy: fullExpenseValidationStrategy,
  sections: FULL_EXPENSE_SECTIONS_CONFIG,
  layout: "two-column",
  initialDataTransformer: mapFullExpenseToDefaultValues,
  leftColumnRenderer: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormLeftColumn, { ...params }),
  // A placeholder for error displaing in a form
  errorDisplayRenderer: ({ errors }) => {
    console.log(errors);
    return null;
  },
  customHook: useExpenseFormSync,
  handlersHook: useExpenseFormHandlers
});
ExpenseForm.displayName = "ExpenseForm";
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
  order: 3,
  schema: mileageJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props })
};
const MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  defaultCurrencyCode: DEFAULT_CURRENCY_CODE
};
const MILEAGE_PERIOD_COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 4,
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
  order: 2,
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
  MILEAGE_PERIOD_SUPPORTING_FILES_SECTION,
  MILEAGE_PERIOD_JUSTIFICATION_SECTION,
  MILEAGE_PERIOD_COST_ALLOCATION_SECTION,
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
const { useMemo: useMemo$3 } = await importShared("react");
const useMileagePeriodFormHandlers = (setValue, getValues) => {
  const costAllocationHandlers = useCostAllocationHandlers(
    setValue,
    getValues,
    MileagePeriodFormField.CostAllocations,
    MileagePeriodFormField.IsEqualSplit,
    MileagePeriodFormField.ReimbursableAmount
  );
  return useMemo$3(
    () => ({
      [FormSectionType.CostAllocation]: costAllocationHandlers
    }),
    [costAllocationHandlers]
  );
};
const { useCallback: useCallback$4, useMemo: useMemo$2 } = await importShared("react");
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
    formType: MileageFormType.Period,
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
const { useEffect: useEffect$2, useState: useState$3 } = await importShared("react");
const PreviewReceiptSection = ({ receipt, stretchToFill = false }) => {
  var _a;
  const [imageError, setImageError] = useState$3(false);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "RECEIPT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 justify-center items-center flex"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden bg-exp-neutral-30 border border-exp-primary-blue-100", children: [
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "AFFIDAVIT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        iconClassName: "bg-exp-yellow-001 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-exp-yellow-200 bg-exp-yellow-100 p-4", children: [
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
const formatCurrency = (amount, currency) => {
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount)) return amount;
  const code = (currency == null ? void 0 : currency.code) ?? DEFAULT_CURRENCY_CODE;
  return `$ ${numAmount.toFixed(2)} ${code}`;
};
const calculateTaxAmount = (netAmount, totalAmount) => {
  if (!netAmount || !totalAmount) return null;
  const net = parseFloat(netAmount);
  const total = parseFloat(totalAmount);
  if (isNaN(net) || isNaN(total)) return null;
  return total - net;
};
const PreviewExpenseDetailsSection = ({ data }) => {
  var _a, _b;
  const isForeignCurrency = data.isDifferentCurrency && ((_a = data.netCurrency) == null ? void 0 : _a.code) !== ((_b = data.totalCurrency) == null ? void 0 : _b.code);
  const taxAmount = calculateTaxAmount(data.netAmount, data.totalAmount);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
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
            value: formatCurrency(data.netAmount, data.netCurrency)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreviewField,
          {
            label: "Converted total",
            value: formatCurrency(data.totalAmount, data.totalCurrency)
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Receipt total",
          value: formatCurrency(data.totalAmount, data.totalCurrency)
        }
      ),
      taxAmount !== null && taxAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Tax amount",
          value: formatCurrency(taxAmount.toFixed(2), data.totalCurrency)
        }
      )
    ] }) })
  ] });
};
const PreviewExpenseJustificationSection = ({
  data
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "EXPENSE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Business purpose", value: data.businessPurpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewField, { label: "Expense description", value: data.expenseDescription })
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
      const code = (entityData == null ? void 0 : entityData.code) || "";
      const primaryText = poNumber ? supplier ? `${poNumber} ${supplier}` : poNumber : code || allocation.name;
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
      const number2 = (entityData == null ? void 0 : entityData.number) || (entityData == null ? void 0 : entityData.teamNumber) || "";
      const description = (entityData == null ? void 0 : entityData.description) || (entityData == null ? void 0 : entityData.teamName) || "";
      return {
        primaryText: number2 && description ? `${number2} / ${description}` : allocation.name
      };
    }
    default:
      return { primaryText: allocation.name };
  }
};
const PreviewCostAllocationSection = ({
  allocations
}) => {
  if (!allocations || allocations.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "COST ALLOCATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: allocations.map((allocation, index) => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-right flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Er, { className: "rounded-lg bg-exp-primary-blue-50 text-exp-neutral-900 hover:bg-exp-primary-blue-50", children: [
              "$ ",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "SUPPORTING FILES",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "paper-clip", className: "size-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-neutral-30 flex justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "ADDITIONAL COMMENTS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-900 wrap-break-word", children: comments }) })
  ] });
};
const PreviewMileageTripDetailsSection = ({ data }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ls, { className: "p-0 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Yn,
        {
          title: "MILEAGE DETAILS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
          iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
        }
      ),
      data.isRoundTrip && /* @__PURE__ */ jsxRuntimeExports.jsx(Er, { className: "bg-exp-neutral-30 text-exp-neutral-600 font-medium hover:bg-none! cursor-default", children: "Round trip" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
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
            value: data.ratePerUnit && data.rateUnit ? formatRate(data.ratePerUnit, data.rateUnit) : void 0
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Reimbursable amount",
          value: data.reimbursableAmount ? formatCurrency$1(data.reimbursableAmount) : void 0
        }
      )
    ] }) })
  ] });
};
const PreviewMileagePeriodDetailsSection = ({ data }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "MILEAGE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
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
            value: data.ratePerUnit && data.rateUnit ? formatRate(data.ratePerUnit, data.rateUnit) : void 0
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PreviewField,
        {
          label: "Reimbursable amount",
          value: data.reimbursableAmount ? formatCurrency$1(data.reimbursableAmount) : void 0
        }
      )
    ] }) })
  ] });
};
const PreviewMileageJustificationSection = ({
  businessPurpose,
  expenseDescription
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "shadow-none border-0 bg-transparent p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "MILEAGE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-exp-neutral-950" }),
        iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewCostAllocationSection, { allocations: data.costAllocations }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewCostAllocationSection, { allocations: data.costAllocations }),
    data.additionalComments && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-exp-primary-blue-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewAdditionalCommentsSection, { comments: data.additionalComments })
    ] })
  ] }) });
};
const { useCallback: useCallback$3, useState: useState$2 } = await importShared("react");
const isNavigationState = (state) => {
  if (typeof state !== "object" || state === null) {
    return false;
  }
  if (!("returnUrl" in state)) {
    return false;
  }
  const { returnUrl } = state;
  return typeof returnUrl === "string" || returnUrl === void 0;
};
const isValidListUrl = (url, basePath) => {
  return url === basePath || url.startsWith(`${basePath}?`);
};
const getValidReturnUrl = (state, fallback, basePath) => {
  if (!isNavigationState(state) || !state.returnUrl) {
    return fallback;
  }
  return isValidListUrl(state.returnUrl, basePath) ? state.returnUrl : fallback;
};
const useNavigateBack = (options = {}) => {
  const {
    fallback = RoutePaths.ExpensesDefault,
    basePath = "/expenses"
  } = options;
  const navigate = useNavigate();
  const location = useLocation();
  const [returnUrl] = useState$2(
    () => getValidReturnUrl(location.state, fallback, basePath)
  );
  const navigateBack = useCallback$3(() => {
    navigate(returnUrl);
  }, [navigate, returnUrl]);
  return { navigateBack, returnUrl };
};
const useExpenseItem = (itemId) => {
  return useQuery({
    queryKey: itemId ? queryKeys.expenseItem.detail(itemId) : queryKeys.expenseItem.details(),
    queryFn: async () => {
      if (!itemId) throw new Error("Item ID is required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_EXPENSE_ITEM(itemId)
      );
      return response.data;
    },
    enabled: !!itemId,
    retry: false,
    staleTime: 30 * 1e3
    // 30 seconds - reasonable cache time for form data
  });
};
const { useCallback: useCallback$2, useEffect: useEffect$1, useRef: useRef$1, useState: useState$1 } = await importShared("react");
function useDeleteDialog(options = {}) {
  const { onDeleteSuccess } = options;
  const [isOpen, setIsOpen] = useState$1(false);
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
const useSaveExpenseDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, draftId }) => {
      const endpoint = draftId ? EXPENSE_ENDPOINTS.UPDATE_DRAFT(draftId) : EXPENSE_ENDPOINTS.SAVE_DRAFT;
      const method = draftId ? "put" : "post";
      const response = await apiClient[method](endpoint, { data });
      return response.data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      if (variables.draftId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.expenseItem.detail(variables.draftId)
        });
      } else {
        queryClient.setQueryData(queryKeys.expenseItem.detail(data.id), data);
      }
      Ls.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save expense draft:", error);
      Ls.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data }) => {
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.SUBMIT_EXPENSE,
        { data }
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(data.id)
      });
      Ls.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit expense:", error);
      Ls.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useDeleteExpenseDraft = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (draftId) => {
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT(draftId));
    },
    onSuccess: (_data, draftId) => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Ls.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      console.error("Failed to delete draft:", error);
      Ls.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
const useSaveMileageDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, draftId }) => {
      const endpoint = draftId ? MILEAGE_ENDPOINTS.UPDATE_DRAFT(draftId) : MILEAGE_ENDPOINTS.SAVE_DRAFT;
      const method = draftId ? "put" : "post";
      const response = await apiClient[method](endpoint, { data });
      return response.data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      if (variables.draftId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.expenseItem.detail(variables.draftId)
        });
      } else {
        queryClient.setQueryData(queryKeys.expenseItem.detail(data.id), data);
      }
      Ls.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save mileage draft:", error);
      Ls.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitMileage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data }) => {
      const response = await apiClient.post(
        MILEAGE_ENDPOINTS.SUBMIT_MILEAGE,
        { data }
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageTrips.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(data.id)
      });
      Ls.success("Mileage claim submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit mileage:", error);
      Ls.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useDeleteMileageDraft = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (draftId) => {
      await apiClient.delete(MILEAGE_ENDPOINTS.DELETE_DRAFT(draftId));
    },
    onSuccess: (_data, draftId) => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.mileageDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.removeQueries({
        queryKey: queryKeys.expenseItem.detail(draftId)
      });
      Ls.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      console.error("Failed to delete draft:", error);
      Ls.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
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
  const handleExpenseSubmit = useCallback$1(async (data) => {
    try {
      await submitExpenseMutation.mutateAsync({ data });
      navigateBack();
    } catch {
    }
  }, [submitExpenseMutation, navigateBack]);
  const handleExpenseSaveDraft = useCallback$1(async (data) => {
    try {
      const result = await saveExpenseDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId
      });
      if (result.id && !currentDraftId) {
        navigate(generatePath(RoutePaths.ExpensesId, { id: result.id }), { replace: true });
      }
    } catch {
    }
  }, [saveExpenseDraftMutation, currentDraftId, navigate]);
  const handleMileageSubmit = useCallback$1(async (data) => {
    try {
      await submitMileageMutation.mutateAsync({ data });
      navigateBack();
    } catch {
    }
  }, [submitMileageMutation, navigateBack]);
  const handleMileageSaveDraft = useCallback$1(async (data) => {
    try {
      const result = await saveMileageDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId
      });
      if (result.id && !currentDraftId) {
        const typeParam = data.formType === MileageFormType.Trip ? ExpenseItemType.MileageTrip : ExpenseItemType.MileagePeriod;
        const path = generatePath(RoutePaths.ExpensesId, { id: result.id });
        navigate(`${path}?type=${typeParam}`, { replace: true });
      }
    } catch {
    }
  }, [saveMileageDraftMutation, currentDraftId, navigate]);
  const handleDeleteConfirm = useCallback$1(() => {
    if (!currentDraftId || !itemType) return;
    if (itemType === ExpenseItemType.Expense) {
      deleteExpenseDraftMutation.mutate(currentDraftId);
    } else if (itemType === ExpenseItemType.MileageTrip || itemType === ExpenseItemType.MileagePeriod) {
      deleteMileageDraftMutation.mutate(currentDraftId);
    }
  }, [currentDraftId, itemType, deleteExpenseDraftMutation, deleteMileageDraftMutation]);
  return {
    isSavingDraft,
    isSubmitting,
    isDeleting,
    draftSaveError,
    handleExpenseSubmit,
    handleExpenseSaveDraft,
    handleMileageSubmit,
    handleMileageSaveDraft,
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
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const isNewItem = !id || id === "new";
  const [formKey, setFormKey] = useState(() => isNewItem ? "new" : `loading-${id}`);
  const {
    data: expenseItem,
    error: itemError,
    isLoading
  } = useExpenseItem(isNewItem ? null : id);
  const dataItemType = useMemo(() => determineItemType(expenseItem), [expenseItem]);
  const itemType = isNewItem ? defaultItemType : dataItemType ?? defaultItemType;
  const mode = useMemo(() => {
    if (isNewItem) return "new";
    if (expenseItem && isExpenseItemDraft(expenseItem)) return "draft";
    if (expenseItem && isExpenseItemSubmitted(expenseItem)) return "preview";
    return "new";
  }, [isNewItem, expenseItem]);
  const currentDraftId = mode === "draft" && id ? id : void 0;
  const {
    isOpen: isDeleteDialogOpen,
    open: openDeleteDialog,
    close: closeDeleteDialog,
    handleOpenChange: handleDeleteDialogOpenChangeBase,
    handleCloseComplete: handleDeleteDialogCloseComplete,
    markForNavigation
  } = useDeleteDialog({
    onDeleteSuccess: navigateBack
  });
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
  useEffect(() => {
    if (hasError) {
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [hasError, navigate]);
  useEffect(() => {
    if (!isNewItem && expenseItem && isExpenseItemDraft(expenseItem)) {
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
      navigateBack();
    }
  }, [navigateBack]);
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
    handleExpenseSubmit: mutations.handleExpenseSubmit,
    handleExpenseSaveDraft: mutations.handleExpenseSaveDraft,
    handleMileageSubmit: mutations.handleMileageSubmit,
    handleMileageSaveDraft: mutations.handleMileageSaveDraft,
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
    handleMileageSubmit,
    handleMileageSaveDraft,
    handleDeleteDraft,
    handleSaveDraftClick,
    handleSubmitClick,
    handleButtonStateChange
  } = pageState;
  const renderTitleSuffix = () => {
    if (!titleSuffix) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ya,
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

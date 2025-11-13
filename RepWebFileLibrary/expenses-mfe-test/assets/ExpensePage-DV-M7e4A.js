import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { E as ExpensesList } from "./ExpensesList-BzUToVhR.js";
import { c as createLucideIcon, e as ea, D as Da, P as Pa, b as Dn, z as za, Q as Qo, t as ta, u as ua, M as Ma, n as na, l as ls, p as ps, f as fa, m as ma, h as ha, G as Ge, d as pa, v as vr, w as wr, S as Sr } from "./createLucideIcon-moxpJjMi.js";
import { e as expenseDetailsSchema, a as expenseJustificationSchema, c as costAllocationSchema, b as additionalCommentsSchema, u as useFullExpenseForm, E as ExpenseFormField, d as useTotalAmountSync, f as useExpenseDetailsHandlers, g as useCostAllocationHandlers, h as useAutoSave, i as useFileHandlers, j as useReceiptCheckboxEffects, k as useFormButtonStateSync, l as useFormImperativeHandle, F as FormSectionProvider, m as FormRenderer, C as ConfirmDialog } from "./AddAllocationExpandable-D2rGlruZ.js";
import { u as useFormFieldValues, C as CostAllocationSection, S as SupportingFiles } from "./SupportingFilesSection-D0tfdXvE.js";
import { P as PAYMENT_METHOD_DATA, E as EXPENSE_LOCATION_OPTIONS, C as CURRENCY_OPTIONS, F as FormSectionType, s as sortFormSections, R as ReceiptSection } from "./ReceiptSection-CAodiOWy.js";
import { C as Controller, u as useMutation } from "./store-CHGJZQrO.js";
import { u as useExpenseTypes } from "./api-7KW5-cIh.js";
import { k as useQueryClient, l as useQuery, q as queryKeys, L as LoadingSpinner } from "./LoadingSpinner-RVX0UBjq.js";
import { a as useDefaultCompany, F as FileText } from "./api-1J9CdvDF.js";
import { c as CreditCard, u as useNavigate, h as useParams, a as RoutePaths, f as ChevronRight } from "./routes-DAJgTe7V.js";
import { u as useBusinessPurposes } from "./api-BFdkxOZU.js";
import { I as Icon } from "./Icon-Bji1Sbhm.js";
import { a as apiClient } from "./axiosInstance-S46OOVwd.js";
import { E as EXPENSE_ENDPOINTS } from "./config-CcAFLaBz.js";
import { T as Trash2, S as Send } from "./trash-2-B8BE4KBA.js";
const __iconNode$3 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$3);
const __iconNode$2 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
];
const FileSpreadsheet = createLucideIcon("file-spreadsheet", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }]
];
const MessageSquareMore = createLucideIcon("message-square-more", __iconNode);
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
    ea,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dn,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-trax-neutral-950" }),
        required: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(za, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
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
              Qo,
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
              ta,
              {
                label: "Expense date",
                placeholder: "Select date expense incurred",
                value: field.value ? new Date(field.value) : void 0,
                onChange: (date) => field.onChange(date ? date.toISOString() : ""),
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
          name: "expenseLocation",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              ea,
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
              ea,
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
                ua,
                {
                  label: isDifferentCurrency ? "Total (foreign)" : "HST/GST Amount",
                  placeholder: "0.00",
                  currencyCode: (netCurrency == null ? void 0 : netCurrency.code) || "CAD",
                  locale: (netCurrency == null ? void 0 : netCurrency.locale) || "en-CA",
                  symbolStyle: "narrow",
                  ...field,
                  value: field.value || "",
                  enableCurrencySelector: isDifferentCurrency,
                  currencyOptions: CURRENCY_OPTIONS,
                  onCurrencyChange: (currency) => onNetCurrencyChange({ code: currency.code, locale: currency.locale || "en-US" }),
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
                ua,
                {
                  label: isDifferentCurrency ? "Total (converted)" : "Total (including taxes)",
                  placeholder: "0.00",
                  currencyCode: (totalCurrency == null ? void 0 : totalCurrency.code) || "CAD",
                  locale: (totalCurrency == null ? void 0 : totalCurrency.locale) || "en-CA",
                  symbolStyle: "narrow",
                  ...field,
                  value: field.value || "",
                  enableCurrencySelector: isDifferentCurrency,
                  currencyOptions: CURRENCY_OPTIONS,
                  onCurrencyChange: (currency) => onTotalCurrencyChange({ code: currency.code, locale: currency.locale || "en-US" }),
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
        Ma,
        {
          label: "Expense made in a different currency",
          checked: isDifferentCurrency,
          onCheckedChange: (checked) => onCurrencyModeChange(checked === true),
          disabled
        }
      )
    ] }) })
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
    ea,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dn,
      {
        iconClassName: "bg-trax-blue-100",
        title: "EXPENSE JUSTIFICATION",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4 text-trax-neutral-950" }),
        required: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(za, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
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
              na,
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
            na,
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
    ] }) })
  ] });
};
const AdditionalCommentsSection = ({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pa, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dn,
      {
        iconClassName: "bg-trax-violet-100",
        title: "ADDITIONAL COMMENTS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareMore, { className: "w-4 h-4 text-trax-neutral-950" })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(za, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "additionalComments",
        control,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          na,
          {
            ...field,
            placeholder: "Add any additional comments...",
            rows: 1,
            value: field.value || "",
            disabled
          }
        )
      }
    ) }) })
  ] });
};
const EXPENSE_DETAILS_SECTION = {
  id: "expense-details",
  type: FormSectionType.ExpenseDetails,
  title: "EXPENSE DETAILS",
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
  required: true,
  order: 2,
  schema: expenseJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseJustificationSection, { ...props })
};
const COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  required: false,
  order: 3,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props }),
  isEnabled: (formValues) => {
    const totalAmount = parseFloat(formValues.totalAmount || "0");
    return totalAmount > 0;
  },
  dependsOn: ["totalAmount", "totalCurrency", "costAllocations", "isEqualSplit"]
};
const ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
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
const { forwardRef, useMemo, useState: useState$1 } = await importShared("react");
const ExpenseForm = forwardRef(({
  onSubmit,
  onSaveDraft,
  onDraftSaved,
  initialData,
  draftId,
  isSubmitting = false,
  isDrafting = false,
  draftSaveError = false,
  onButtonStateChange,
  sectionsConfig = FULL_EXPENSE_SECTIONS_CONFIG
}, ref) => {
  const fullForm = useFullExpenseForm({
    initialData,
    onSubmit,
    onSaveDraft,
    onDraftSaved,
    isSubmitting,
    isDrafting,
    draftSaveError
  });
  const { control, setValue, getValues, formState, trigger } = fullForm.form;
  const [formErrors, setFormErrors] = useState$1([]);
  const [isReceiptUploading, setIsReceiptUploading] = useState$1(false);
  const { receiptAttachment, supportingFiles, totalAmount } = useFormFieldValues(control, [
    ExpenseFormField.ReceiptAttachment,
    ExpenseFormField.SupportingFiles,
    ExpenseFormField.TotalAmount
  ]);
  useTotalAmountSync({
    totalAmount: parseFloat(totalAmount || "0"),
    setValue,
    getValues
  });
  const expenseDetailsHandlers = useExpenseDetailsHandlers(setValue);
  const costAllocationHandlers = useCostAllocationHandlers(setValue, getValues);
  const { triggerAutoSave } = useAutoSave({
    draftId,
    isDrafting,
    onSaveDraft,
    getFormValues: () => fullForm.getValues()
  });
  const { handleReceiptChange, handleSupportingFilesChange } = useFileHandlers({
    setValue,
    receiptAttachmentField: ExpenseFormField.ReceiptAttachment,
    supportingFilesField: ExpenseFormField.SupportingFiles,
    onReceiptUploaded: () => triggerAutoSave(),
    onSupportingFilesChanged: (attachments) => {
      if (attachments.length > 0) {
        triggerAutoSave();
      }
    }
  });
  useReceiptCheckboxEffects({
    watch: fullForm.form.watch,
    setValue,
    receiptAttachmentField: ExpenseFormField.ReceiptAttachment,
    isReceiptUnavailableField: ExpenseFormField.IsReceiptUnavailable,
    affidavitField: ExpenseFormField.Affidavit
  });
  useFormButtonStateSync({
    form: fullForm,
    formState,
    isSubmitting,
    isDrafting,
    onButtonStateChange
  });
  useFormImperativeHandle({
    ref,
    form: fullForm,
    onFormErrors: setFormErrors
  });
  const shouldShowReceiptCheckbox = useMemo(() => {
    return !receiptAttachment && !isReceiptUploading;
  }, [receiptAttachment, isReceiptUploading]);
  const formSections = useMemo(() => {
    return sortFormSections(sectionsConfig);
  }, [sectionsConfig]);
  const renderProps = useMemo(
    () => ({
      control,
      setValue,
      trigger,
      errors: formState.errors,
      disabled: isSubmitting
    }),
    [control, setValue, trigger, formState.errors, isSubmitting]
  );
  const handlersMap = useMemo(
    () => ({
      [FormSectionType.ExpenseDetails]: expenseDetailsHandlers,
      [FormSectionType.CostAllocation]: costAllocationHandlers
    }),
    [expenseDetailsHandlers, costAllocationHandlers]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 flex-1 sticky top-0 bottom-0 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Da, { className: "w-full h-full flex flex-col pt-1", children: [
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
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-2 flex-col gap-3 exp-custom-scrollbar", children: [
      formErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Da, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(za, { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Please correct the following errors:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1", children: formErrors.map((error, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm", children: error }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionProvider, { value: renderProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { sections: formSections, handlersMap }) })
    ] })
  ] });
});
ExpenseForm.displayName = "ExpenseForm";
const simulateApiDelay = (ms = 800) => new Promise((resolve) => setTimeout(resolve, ms));
const useSaveExpenseDraft = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, draftId }) => {
      await simulateApiDelay(600);
      const endpoint = draftId ? EXPENSE_ENDPOINTS.UPDATE_DRAFT(draftId) : EXPENSE_ENDPOINTS.SAVE_DRAFT;
      const method = draftId ? "put" : "post";
      const response = await apiClient[method](endpoint, { data });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      ls.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to save expense draft:", error);
      ls.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useSubmitExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data }) => {
      await simulateApiDelay(1e3);
      const response = await apiClient.post(
        EXPENSE_ENDPOINTS.SUBMIT_EXPENSE,
        { data }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      ls.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      console.error("Failed to submit expense:", error);
      ls.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const useExpenseDraft = (draftId) => {
  return useQuery({
    queryKey: draftId ? queryKeys.expenseDrafts.detail(draftId) : queryKeys.expenseDrafts.details(),
    queryFn: async () => {
      if (!draftId) throw new Error("Draft ID is required");
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_DRAFT(draftId)
      );
      return response.data;
    },
    enabled: !!draftId,
    retry: false,
    staleTime: 0
    // Always fetch when ID changes
  });
};
const useDeleteExpenseDraft = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (draftId) => {
      await simulateApiDelay(500);
      await apiClient.delete(EXPENSE_ENDPOINTS.DELETE_DRAFT(draftId));
    },
    onSuccess: () => {
      var _a;
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      ls.success("Draft deleted", {
        duration: 3e3
      });
      (_a = options == null ? void 0 : options.onSuccess) == null ? void 0 : _a.call(options);
    },
    onError: (error) => {
      console.error("Failed to delete draft:", error);
      ls.error("Fail to delete. Please try again.", {
        duration: 3e3
      });
    }
  });
};
const { useCallback, useEffect, useRef, useState } = await importShared("react");
const NewExpensePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const expenseFormRef = useRef(null);
  const [submitButtonState, setSubmitButtonState] = useState({ disabled: true });
  const [saveDraftButtonState, setSaveDraftButtonState] = useState({ disabled: true });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const saveDraftMutation = useSaveExpenseDraft();
  const submitExpenseMutation = useSubmitExpense();
  const deleteDraftMutation = useDeleteExpenseDraft({
    onSuccess: () => {
      setIsDeleteDialogOpen(false);
      setTimeout(() => {
        navigate(RoutePaths.Expenses);
      }, 100);
    }
  });
  const shouldFetchDraft = id && id !== "new";
  const { data: existingDraft, error: draftError, isLoading: isDraftLoading } = useExpenseDraft(shouldFetchDraft ? id : null);
  const draftData = draftError || !existingDraft ? null : existingDraft;
  const expenseTitle = (draftData == null ? void 0 : draftData.data.vendor) || "New Expense";
  const isDraft = !!draftData;
  const currentDraftId = shouldFetchDraft && !draftError && (draftData || isDraftLoading) ? id : null;
  useEffect(() => {
    if (draftError && shouldFetchDraft) {
      navigate(RoutePaths.ExpensesNew, { replace: true });
    }
  }, [draftError, shouldFetchDraft, navigate]);
  const handleSubmit = async (data) => {
    try {
      await submitExpenseMutation.mutateAsync({ data });
      navigate(RoutePaths.Expenses);
    } catch (error) {
      console.error("Failed to submit expense:", error);
    }
  };
  const handleSaveDraft = async (data) => {
    try {
      const result = await saveDraftMutation.mutateAsync({
        data,
        draftId: currentDraftId || void 0
      });
      if (result.id && !currentDraftId) {
        navigate(`/expenses/${result.id}`, { replace: true });
      }
    } catch (error) {
      console.error("Failed to save draft:", error);
    }
  };
  const handleDeleteDraft = () => {
    if (!currentDraftId) return;
    setIsDeleteDialogOpen(true);
  };
  const handleDeleteConfirm = () => {
    if (!currentDraftId) return;
    deleteDraftMutation.mutate(currentDraftId);
  };
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
  };
  const handleDeleteDialogOpenChange = (open) => {
    if (!open && deleteDraftMutation.isPending) {
      return;
    }
    setIsDeleteDialogOpen(open);
  };
  const handleOpenChange = (open) => {
    if (!open) {
      navigate(RoutePaths.Expenses);
    }
  };
  const handleSaveDraftClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = expenseFormRef.current) == null ? void 0 : _a.saveDraft();
  };
  const handleSubmitClick = (e) => {
    var _a;
    e.preventDefault();
    e.stopPropagation();
    (_a = expenseFormRef.current) == null ? void 0 : _a.submitForm();
  };
  const handleButtonStateChange = useCallback((submitState, draftState) => {
    setSubmitButtonState(submitState);
    setSaveDraftButtonState(draftState);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ps, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(fa, { className: "max-w-5xl max-h-[90vh] h-full overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ma, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ha, { className: "text-exp-neutral-900 text-xl font-bold", children: expenseTitle }),
            (draftData == null ? void 0 : draftData.data.totalAmount) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-medium text-exp-neutral-900", children: [
              "$",
              draftData.data.totalAmount
            ] }),
            isDraft && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 bg-exp-yellow-200 text-exp-yellow-900 text-sm font-medium rounded-20", children: "DRAFT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-nowrap items-center justify-center gap-2", children: currentDraftId && draftData && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-exp-neutral-300", children: [
            currentDraftId,
            " • Created on ",
            new Date(draftData.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-38px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ge, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ge, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExpenseForm,
          {
            ref: expenseFormRef,
            onSubmit: handleSubmit,
            onSaveDraft: handleSaveDraft,
            onDraftSaved: () => {
            },
            initialData: draftData == null ? void 0 : draftData.data,
            draftId: currentDraftId,
            isSubmitting: submitExpenseMutation.isPending,
            isDrafting: saveDraftMutation.isPending,
            draftSaveError: saveDraftMutation.isError,
            onButtonStateChange: handleButtonStateChange
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(pa, { className: "pt-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: currentDraftId && /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Ge,
              {
                type: "button",
                variant: "ghost",
                onClick: handleDeleteDraft,
                className: "text-red-600 hover:text-red-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }),
                  "Delete"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { className: "text-sm", children: "Delete draft" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ge,
                {
                  type: "button",
                  variant: "outlined",
                  onClick: handleSaveDraftClick,
                  disabled: saveDraftButtonState.disabled,
                  children: saveDraftMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }),
                    "Save Draft"
                  ] }) : "Save Draft"
                }
              ) }) }),
              saveDraftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { variant: "light", size: "sm", side: "bottom", showArrow: false, children: saveDraftButtonState.tooltip })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Ge,
                {
                  type: "button",
                  variant: "primary",
                  onClick: handleSubmitClick,
                  disabled: submitButtonState.disabled,
                  children: [
                    submitExpenseMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
                    "Submit Expense"
                  ]
                }
              ) }) }),
              submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Sr, { className: "text-sm", children: submitButtonState.tooltip })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: handleDeleteDialogOpenChange,
        title: "Delete draft",
        description: "Are you sure you want to delete this expense draft? This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: deleteDraftMutation.isPending
      }
    )
  ] });
};
export {
  NewExpensePage as default
};

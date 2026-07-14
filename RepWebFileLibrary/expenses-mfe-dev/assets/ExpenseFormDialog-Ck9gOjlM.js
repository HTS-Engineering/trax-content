var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "./jsx-runtime-aCTp6CKK.js";
import { c as createLucideIcon, O as Oa, H as Ha, a6 as Ba, D as gn, I as es, a7 as ja, J as ws, a as devLog } from "./configuration-CXYlvGz8.js";
import { p as useDefaultCompany, r as isValidFileAttachment, D as DEFAULT_PAYMENT_METHOD, s as ExpenseFormField, t as useFormFieldValues, w as computeMileageEffectiveOn, x as useMileageRateSync, y as useReimbursableAmountSync, z as useAmountAllocationSync, A as affidavitSchema, B as basicDetailsSchema, F as createValidationStrategy, G as createDraftSaveChecker, H as useTaxFieldVisibility, I as isConvertedExpense, J as usePaymentMethods, K as useSetDefaultCurrency, L as ExpenseTypeSelect, N as allowsNegativeAmounts, O as MileagePeriodFormField, S as SupportingFiles, P as MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD, Q as isSameCalendarMonth, R as NO_MILEAGE_RATE_FOR_DATE_MESSAGE, T as FormSectionType, U as expenseDetailsSchema, V as expenseJustificationSchema, W as costAllocationSchema, X as additionalCommentsSchema, g as getExpenseBaseAmount, C as CostAllocationHeaderActions, b as CostAllocationSection, Y as MileageTripFormField, Z as mileageDetailsSchema, _ as mileageJustificationSchema, $ as useBaseExpenseForm, a0 as useValidatePrefilledFields, a1 as useAutoSave, a2 as useFormButtonStateSync, a3 as useFormImperativeHandle, a4 as BaseExpenseFormRenderer, a5 as useExpenseFormHandlers, a6 as useExpenseFormSync, a7 as fullExpenseValidationStrategy, a8 as ExpenseFormLeftColumn, a9 as useMileageTripFormHandlers, aa as mapMileageTripToDefaultValues, ab as mileageTripValidationStrategy, ac as supportingFilesSchema, ad as useMileagePeriodFormHandlers, ae as mapMileagePeriodToDefaultValues, af as mileagePeriodValidationStrategy } from "./CostAllocationSection-IiHB05YU.js";
import { I as Icon } from "./Icon-DBeU9qcx.js";
import { i as useExpenseTypes, F as FormTypeId, e as useCompanyStore, U as useCurrencies, aa as useCountries, a2 as useTaxTypesDisplay, ab as useDefaultCurrency, V as formatToISODate, W as parseDateOnlyAsLocal, a1 as TaxTypeSearchSelect, ac as useFormTypeId, J as ExpenseFormType, _ as useMileageRates, ad as useEffectiveMileageRate, ae as formatRate, a8 as formatCurrency } from "./use-scroll-into-view-ref-Cu52scn4.js";
import { o as object, s as string, b as boolean, c as custom, e as Controller, h as createDecimalChangeHandler, f as useWatch } from "./schemas-D-iXGYUW.js";
import { importShared } from "./__federation_fn_import-CZ2UOLBn.js";
import { c as useBusinessPurposes } from "./business-purpose-api-31wPkntC.js";
const __iconNode$1 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$1);
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
const BusinessPurposeSelect = /* @__PURE__ */ __name(({
  value,
  onChange,
  onBlur,
  required = false,
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
    Oa,
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
}, "BusinessPurposeSelect");
const MileageTypeSelect = /* @__PURE__ */ __name(({
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  placeholder = "Select type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingTypes } = useExpenseTypes(companyId, {
    formTypeIds: [FormTypeId.MILEAGE]
  });
  const activeTypes = (expenseTypes == null ? void 0 : expenseTypes.filter((et) => et.status === "active")) ?? [];
  const isSingleType = activeTypes.length === 1;
  const options = activeTypes.map((et) => ({
    value: et.id,
    label: et.name
  }));
  const isLoading = isLoadingCompany || isLoadingTypes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingTypes ? "Loading mileage types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Oa,
    {
      label: "Mileage type",
      placeholder: displayPlaceholder,
      options,
      value,
      onValueChange: onChange,
      onBlur,
      required,
      disabled: disabled || isLoading || !companyId || isSingleType,
      error
    }
  );
}, "MileageTypeSelect");
const isReceiptValidSimple = /* @__PURE__ */ __name((data) => {
  if (data.isReceiptUnavailable) {
    return true;
  }
  if (!data.receiptAttachment) {
    return false;
  }
  return isValidFileAttachment(data.receiptAttachment);
}, "isReceiptValidSimple");
const mapFullExpenseToDefaultValues = /* @__PURE__ */ __name((initialData) => {
  return {
    [ExpenseFormField.ExpenseType]: (initialData == null ? void 0 : initialData.expenseType) ?? "",
    [ExpenseFormField.Vendor]: (initialData == null ? void 0 : initialData.vendor) ?? "",
    [ExpenseFormField.ExpenseDate]: (initialData == null ? void 0 : initialData.expenseDate) ?? "",
    [ExpenseFormField.ExpenseLocation]: (initialData == null ? void 0 : initialData.expenseLocation) ?? "",
    [ExpenseFormField.PaymentMethod]: (initialData == null ? void 0 : initialData.paymentMethod) ?? DEFAULT_PAYMENT_METHOD.id,
    [ExpenseFormField.NetAmount]: (initialData == null ? void 0 : initialData.netAmount) ?? "",
    [ExpenseFormField.TotalAmount]: (initialData == null ? void 0 : initialData.totalAmount) ?? "",
    [ExpenseFormField.TaxType]: (initialData == null ? void 0 : initialData.taxType) ?? "",
    [ExpenseFormField.TaxAmount]: (initialData == null ? void 0 : initialData.taxAmount) ?? "",
    [ExpenseFormField.BusinessPurpose]: (initialData == null ? void 0 : initialData.businessPurpose) ?? "",
    [ExpenseFormField.ExpenseDescription]: (initialData == null ? void 0 : initialData.expenseDescription) ?? "",
    [ExpenseFormField.PersonsEntertained]: (initialData == null ? void 0 : initialData.personsEntertained) ?? "",
    [ExpenseFormField.AdditionalComments]: (initialData == null ? void 0 : initialData.additionalComments) ?? "",
    [ExpenseFormField.ReceiptAttachment]: (initialData == null ? void 0 : initialData.receiptAttachment) ?? null,
    [ExpenseFormField.IsReceiptUnavailable]: (initialData == null ? void 0 : initialData.isReceiptUnavailable) ?? false,
    [ExpenseFormField.Affidavit]: (initialData == null ? void 0 : initialData.affidavit) ?? null,
    [ExpenseFormField.SupportingFiles]: (initialData == null ? void 0 : initialData.supportingFiles) ?? [],
    [ExpenseFormField.NetCurrency]: (initialData == null ? void 0 : initialData.netCurrency) ?? void 0,
    [ExpenseFormField.TotalCurrency]: (initialData == null ? void 0 : initialData.totalCurrency) ?? void 0,
    [ExpenseFormField.CostAllocations]: (initialData == null ? void 0 : initialData.costAllocations) ?? [],
    [ExpenseFormField.DeferToApprover]: (initialData == null ? void 0 : initialData.deferToApprover) ?? false,
    [ExpenseFormField.IsEqualSplit]: (initialData == null ? void 0 : initialData.isEqualSplit) ?? false
  };
}, "mapFullExpenseToDefaultValues");
function useMileageFormSync({
  control,
  setValue,
  getValues,
  trigger
}) {
  const { mileageType, expenseDate, expensePeriod, totalDistance, ratePerUnit, reimbursableAmount } = useFormFieldValues(
    control,
    [
      "mileageType",
      "expenseDate",
      "expensePeriod",
      "totalDistance",
      "ratePerUnit",
      "reimbursableAmount"
    ]
  );
  const effectiveOn = computeMileageEffectiveOn(
    expenseDate,
    expensePeriod == null ? void 0 : expensePeriod.from
  );
  useMileageRateSync({
    mileageType: mileageType || "",
    effectiveOn,
    setValue,
    getValues,
    trigger
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
    trigger,
    costAllocationsField: "costAllocations",
    isEqualSplitField: "isEqualSplit"
  });
}
__name(useMileageFormSync, "useMileageFormSync");
const affidavitExpenseSchema = object({
  affidavit: affidavitSchema,
  expenseDate: string().min(1, "Expense date is required")
}).extend(basicDetailsSchema.pick({ vendor: true }).shape);
const affidavitExpenseDraftSchema = object({
  affidavit: object({
    justification: string().optional(),
    digitalSignature: string().optional()
  }).optional(),
  vendor: string().optional(),
  expenseDate: string().optional()
});
createValidationStrategy(
  affidavitExpenseSchema,
  {
    validateForDraft: /* @__PURE__ */ __name((data) => affidavitExpenseDraftSchema.safeParse(data), "validateForDraft"),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseDate"],
      (data) => {
        var _a, _b;
        return !!(((_a = data.affidavit) == null ? void 0 : _a.justification) || ((_b = data.affidavit) == null ? void 0 : _b.digitalSignature));
      }
    )
  }
);
const minimalExpenseSchema = object({
  receiptAttachment: custom().optional().nullable(),
  isReceiptUnavailable: boolean()
}).safeExtend(basicDetailsSchema.shape).refine(
  (data) => isReceiptValidSimple(data),
  {
    message: "Receipt is required unless marked as unavailable",
    path: ["receiptAttachment"]
  }
);
const minimalExpenseDraftSchema = object({
  receiptAttachment: custom().optional().nullable(),
  isReceiptUnavailable: boolean(),
  vendor: string().optional(),
  expenseLocation: string().optional()
});
createValidationStrategy(
  minimalExpenseSchema,
  {
    validateForDraft: /* @__PURE__ */ __name((data) => minimalExpenseDraftSchema.safeParse(data), "validateForDraft"),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseLocation"],
      (data) => !!data.receiptAttachment
    )
  }
);
const { useCallback: useCallback$3, useEffect: useEffect$2, useMemo: useMemo$3, useRef: useRef$2 } = await importShared("react");
const TAX_CURRENCY = "CAD";
const ExpenseDetailsSection = /* @__PURE__ */ __name(({
  control,
  setValue,
  trigger,
  disabled = false
}) => {
  const { netCurrency, totalCurrency, expenseLocation, taxAmount, paymentMethod } = useFormFieldValues(control, [
    "netCurrency",
    "totalCurrency",
    "expenseLocation",
    "taxAmount",
    "paymentMethod"
  ]);
  const userDefaultCompany = useCompanyStore((state) => state.userDefaultCompany);
  const { showTaxFields } = useTaxFieldVisibility(expenseLocation);
  const showConvertedTotal = isConvertedExpense(netCurrency == null ? void 0 : netCurrency.code, totalCurrency == null ? void 0 : totalCurrency.code);
  const allowNegative = allowsNegativeAmounts(paymentMethod);
  const { data: currencies, isLoading: currenciesLoading } = useCurrencies();
  const { data: countriesResponse, isLoading: countriesLoading } = useCountries();
  const countries = countriesResponse == null ? void 0 : countriesResponse.items;
  const { data: paymentMethods, isLoading: paymentMethodsLoading } = usePaymentMethods({
    companyShortName: (userDefaultCompany == null ? void 0 : userDefaultCompany.shortName) ?? null
  });
  const { data: taxTypes, isLoading: taxTypesLoading } = useTaxTypesDisplay({
    companyShortName: (userDefaultCompany == null ? void 0 : userDefaultCompany.shortName) ?? null,
    enabled: showTaxFields
  });
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const codeToSymbolMap = useMemo$3(() => {
    return new Map(currencies == null ? void 0 : currencies.map((c) => [c.isoCode, c.symbol]));
  }, [currencies]);
  const totalCurrencyDefault = useMemo$3(() => {
    const selectedPm = paymentMethods == null ? void 0 : paymentMethods.find((pm) => pm.id === paymentMethod);
    const code = (selectedPm == null ? void 0 : selectedPm.currencyCode) ?? defaultCurrencyCode;
    const symbol = codeToSymbolMap.get(code) ?? defaultCurrencySymbol;
    return { code, symbol };
  }, [paymentMethods, paymentMethod, codeToSymbolMap, defaultCurrencyCode, defaultCurrencySymbol]);
  const isReferenceDataReady = !currenciesLoading && !countriesLoading && !paymentMethodsLoading;
  const isFormEmpty = !(netCurrency == null ? void 0 : netCurrency.code) && !(totalCurrency == null ? void 0 : totalCurrency.code);
  useSetDefaultCurrency({
    setValue,
    netCurrency: { code: defaultCurrencyCode, symbol: defaultCurrencySymbol },
    totalCurrency: totalCurrencyDefault,
    canSeed: isReferenceDataReady && isFormEmpty
  });
  const prevShowTaxFields = useRef$2(showTaxFields);
  useEffect$2(() => {
    if (prevShowTaxFields.current && !showTaxFields) {
      setValue("taxType", "", { shouldValidate: true, shouldDirty: true });
      setValue("taxAmount", "", { shouldValidate: true, shouldDirty: true });
    }
    prevShowTaxFields.current = showTaxFields;
  }, [showTaxFields, setValue]);
  const searchCountries = useCallback$3(async (query) => {
    const q = query.toLowerCase();
    return (countries ?? []).reduce((acc, option) => {
      if (option.name.toLowerCase().includes(q)) {
        acc.push({
          value: option.id.toString(),
          label: option.name,
          data: {
            code: option.defaultCurrencyIso,
            symbol: codeToSymbolMap.get(option.defaultCurrencyIso) ?? defaultCurrencySymbol
          }
        });
      }
      return acc;
    }, []);
  }, [countries, codeToSymbolMap, defaultCurrencySymbol]);
  const searchCurrencies = useCallback$3(async (query) => {
    const q = query.toLowerCase();
    return (currencies ?? []).reduce((acc, option) => {
      if (option.isoCode.toLowerCase().includes(q) || option.name.toLowerCase().includes(q)) {
        acc.push({ value: option.isoCode, label: option.name, data: option.symbol });
      }
      return acc;
    }, []);
  }, [currencies]);
  const prevShowConvertedTotal = useRef$2(showConvertedTotal);
  useEffect$2(() => {
    if (prevShowConvertedTotal.current === showConvertedTotal) return;
    if (prevShowConvertedTotal.current && !showConvertedTotal) {
      setValue("totalAmount", "", { shouldValidate: true, shouldDirty: true });
    }
    trigger("taxAmount");
    prevShowConvertedTotal.current = showConvertedTotal;
  }, [showConvertedTotal, setValue, trigger]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseType",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExpenseTypeSelect,
            {
              value: field.value ?? "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "vendor",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ha,
            {
              label: "Vendor",
              placeholder: "Enter vendor name",
              ...field,
              value: field.value ?? "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDate",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ba,
            {
              label: "Expense date",
              placeholder: "Select date expense incurred",
              value: field.value ? parseDateOnlyAsLocal(field.value) : void 0,
              onChange: /* @__PURE__ */ __name((date) => field.onChange(date ? formatToISODate(date) : ""), "onChange"),
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              maxDate: /* @__PURE__ */ new Date()
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseLocation",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          const selectedCountry = countries == null ? void 0 : countries.find((country) => country.id.toString() === field.value);
          const currencyIsoCode = (selectedCountry == null ? void 0 : selectedCountry.defaultCurrencyIso) ?? defaultCurrencyCode;
          const currencySymbol = codeToSymbolMap.get(currencyIsoCode) ?? defaultCurrencySymbol;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            gn,
            {
              label: "Expense location",
              placeholder: "Select country",
              value: field.value ? {
                value: field.value,
                label: (selectedCountry == null ? void 0 : selectedCountry.name) ?? "",
                data: {
                  code: currencyIsoCode,
                  symbol: currencySymbol
                }
              } : null,
              onValueChange: /* @__PURE__ */ __name((item) => {
                var _a2, _b;
                field.onChange((item == null ? void 0 : item.value) ?? "");
                setValue("netCurrency", {
                  code: ((_a2 = item == null ? void 0 : item.data) == null ? void 0 : _a2.code) ?? defaultCurrencyCode,
                  symbol: ((_b = item == null ? void 0 : item.data) == null ? void 0 : _b.symbol) ?? defaultCurrencySymbol
                });
              }, "onValueChange"),
              onSearch: searchCountries,
              searchOnFocus: true,
              searchDelay: 300,
              minSearchLength: 0,
              onBlur: field.onBlur,
              clearOnBlur: false,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled: disabled || countriesLoading
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "paymentMethod",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Oa,
            {
              label: "Payment method",
              placeholder: "Select payment method",
              options: (paymentMethods == null ? void 0 : paymentMethods.map((pm) => ({
                value: pm.id,
                label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex w-full min-w-0 items-center gap-2", children: [
                  pm.id === DEFAULT_PAYMENT_METHOD.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 shrink-0 text-exp-yellow-y-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 shrink-0 text-trax-neutral-1000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: pm.name })
                ] })
              }))) || [],
              value: field.value,
              onValueChange: /* @__PURE__ */ __name((id) => {
                const selectedPaymentMethod = paymentMethods == null ? void 0 : paymentMethods.find((pm) => pm.id === id);
                const currencyIsoCode = (selectedPaymentMethod == null ? void 0 : selectedPaymentMethod.currencyCode) ?? defaultCurrencyCode;
                const currencySymbol = codeToSymbolMap.get(currencyIsoCode) ?? defaultCurrencySymbol;
                field.onChange(id);
                setValue("totalCurrency", {
                  code: currencyIsoCode,
                  symbol: currencySymbol
                });
              }, "onValueChange"),
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled: disabled || paymentMethodsLoading
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-start-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: showConvertedTotal ? "grid grid-cols-2 gap-x-2" : void 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "netAmount",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                es,
                {
                  label: "Receipt total",
                  placeholder: "0.00",
                  textAlign: "right",
                  value: field.value ?? "",
                  onChange: createDecimalChangeHandler((value) => {
                    field.onChange(value);
                    if (taxAmount) trigger("taxAmount");
                  }, allowNegative),
                  onBlur: field.onBlur,
                  suffix: {
                    type: "searchSelect",
                    value: {
                      value: (netCurrency == null ? void 0 : netCurrency.code) ?? defaultCurrencyCode,
                      label: (netCurrency == null ? void 0 : netCurrency.code) ?? defaultCurrencyCode,
                      data: (netCurrency == null ? void 0 : netCurrency.symbol) ?? defaultCurrencySymbol
                    },
                    onValueChange: /* @__PURE__ */ __name((value) => {
                      setValue("netCurrency", { code: (value == null ? void 0 : value.value) ?? defaultCurrencyCode, symbol: (value == null ? void 0 : value.data) ?? defaultCurrencySymbol });
                    }, "onValueChange"),
                    placeholder: "Search currency",
                    buttonLabel: (netCurrency == null ? void 0 : netCurrency.code) ?? defaultCurrencyCode,
                    onSearch: searchCurrencies,
                    renderItem: /* @__PURE__ */ __name((item, highlight, isSelected) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight(item.value) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xxs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(item.label) })
                    ] }), "renderItem"),
                    searchOnFocus: true,
                    minSearchLength: 0,
                    searchDelay: 300,
                    dropdownClassName: "left-0 max-h-48 border-0 rounded-t-none",
                    popoverClassName: "w-[128px]",
                    disabled: disabled || currenciesLoading
                  },
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled: disabled || currenciesLoading
                }
              );
            }, "render")
          }
        ),
        showConvertedTotal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "totalAmount",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                es,
                {
                  label: "Converted total",
                  placeholder: "0.00",
                  textAlign: "right",
                  suffix: (totalCurrency == null ? void 0 : totalCurrency.code) ?? defaultCurrencyCode,
                  value: field.value ?? "",
                  onChange: createDecimalChangeHandler((value) => {
                    field.onChange(value);
                    if (taxAmount) trigger("taxAmount");
                  }, allowNegative),
                  onBlur: field.onBlur,
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled
                }
              );
            }, "render")
          }
        )
      ] }),
      showTaxFields && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "taxType",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                TaxTypeSearchSelect,
                {
                  label: "Tax type",
                  placeholder: "Select type",
                  value: field.value ? parseInt(field.value, 10) : null,
                  onChange: /* @__PURE__ */ __name((id) => field.onChange(id != null ? id.toString() : ""), "onChange"),
                  onBlur: field.onBlur,
                  taxTypes,
                  renderItem: /* @__PURE__ */ __name((tt, highlight, isSelected) => {
                    const [, ratePart] = tt.displayText.split(" - ");
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight(tt.taxDescription ?? tt.taxCode) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(ratePart ?? "") })
                    ] });
                  }, "renderItem"),
                  searchDelay: 300,
                  tooltipProps: { delayDuration: 300 },
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled: disabled || taxTypesLoading
                }
              );
            }, "render")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "taxAmount",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                es,
                {
                  label: "Tax amount",
                  placeholder: "0.00",
                  textAlign: "right",
                  suffix: TAX_CURRENCY,
                  value: field.value ?? "",
                  onBlur: field.onBlur,
                  onChange: createDecimalChangeHandler(field.onChange, allowNegative),
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled
                }
              );
            }, "render")
          }
        )
      ] })
    ] })
  ] });
}, "ExpenseDetailsSection");
const { useEffect: useEffect$1, useRef: useRef$1 } = await importShared("react");
const ExpenseJustificationSection = /* @__PURE__ */ __name(({
  control,
  setValue,
  disabled = false
}) => {
  const companyShortName = useCompanyStore((state) => {
    var _a;
    return ((_a = state.userDefaultCompany) == null ? void 0 : _a.shortName) ?? null;
  });
  const expenseTypeId = useFormFieldValues(control, ["expenseType"]).expenseType;
  const formType = useFormTypeId(expenseTypeId, companyShortName);
  const showPersonsEntertained = formType === ExpenseFormType.ENTERTAINMENT;
  const prevShowPersonsEntertained = useRef$1(showPersonsEntertained);
  useEffect$1(() => {
    if (prevShowPersonsEntertained.current && !showPersonsEntertained) {
      setValue("personsEntertained", "", { shouldValidate: false, shouldDirty: false });
    }
    prevShowPersonsEntertained.current = showPersonsEntertained;
  }, [showPersonsEntertained, setValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "businessPurpose",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            BusinessPurposeSelect,
            {
              value: field.value || "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDescription",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ja,
            {
              ...field,
              label: "Expense description",
              placeholder: "Describe what was purchased",
              rows: 1,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }, "render")
      }
    ),
    showPersonsEntertained && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "personsEntertained",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ja,
            {
              ...field,
              label: "Person entertained",
              placeholder: "Enter the full names of clients/guests entertained",
              rows: 1,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }, "render")
      }
    )
  ] });
}, "ExpenseJustificationSection");
const AdditionalCommentsSection = /* @__PURE__ */ __name(({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name: "additionalComments",
      control,
      render: /* @__PURE__ */ __name(({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ja,
        {
          ...field,
          placeholder: "Add any additional comments...",
          rows: 1,
          value: field.value || "",
          disabled
        }
      ), "render")
    }
  ) });
}, "AdditionalCommentsSection");
const { useCallback: useCallback$2 } = await importShared("react");
const SupportingFilesFormSection = /* @__PURE__ */ __name(({
  control,
  setValue,
  disabled = false,
  expenseId,
  onSaveDraftForUpload
}) => {
  const supportingFiles = useWatch({
    control,
    name: MileagePeriodFormField.SupportingFiles
  });
  const handleFilesChange = useCallback$2(
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
      hideAddButtonWhenFull: true,
      expenseId,
      onSaveDraftForUpload
    }
  );
}, "SupportingFilesFormSection");
const { useMemo: useMemo$2 } = await importShared("react");
const useMileageEffectiveRange = /* @__PURE__ */ __name(({
  companyShortName,
  mileageRateId
}) => {
  const { data, isLoading } = useMileageRates({
    companyShortName,
    mileageRateId,
    enabled: !!companyShortName && !!mileageRateId
  });
  const minEffectiveDate = useMemo$2(() => {
    if (!(data == null ? void 0 : data.length)) return void 0;
    let earliest;
    for (const rate of data) {
      if (!rate.active) continue;
      const localEffectiveDate = parseDateOnlyAsLocal(rate.effectiveDate);
      if (isNaN(localEffectiveDate.getTime())) continue;
      if (!earliest || localEffectiveDate < earliest) earliest = localEffectiveDate;
    }
    return earliest;
  }, [data]);
  return { minEffectiveDate, isLoading };
}, "useMileageEffectiveRange");
const REASON_NOT_YET_ACTIVE = "Mileage type is not yet active at this time";
const REASON_NOT_SAME_MONTH = "Period must fall within one calendar month";
function resolveMileageDisabledReason({
  date,
  minEffectiveDate,
  periodAnchorForMonth
}) {
  if (minEffectiveDate && date < startOfDay(minEffectiveDate)) {
    return REASON_NOT_YET_ACTIVE;
  }
  if (periodAnchorForMonth && !isSameCalendarMonth(date, periodAnchorForMonth)) {
    return REASON_NOT_SAME_MONTH;
  }
  return void 0;
}
__name(resolveMileageDisabledReason, "resolveMileageDisabledReason");
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
__name(startOfDay, "startOfDay");
const { useCallback: useCallback$1, useEffect, useMemo: useMemo$1 } = await importShared("react");
const MileageDetailsSection = /* @__PURE__ */ __name(({
  control,
  setValue,
  disabled = false,
  mode = "trip"
}) => {
  const isTripMode = mode === "trip";
  const { mileageType, expenseDate, expensePeriod, ratePerUnit, rateUnit, reimbursableAmount, totalCurrency } = useFormFieldValues(control, [
    "mileageType",
    "expenseDate",
    "expensePeriod",
    "ratePerUnit",
    "rateUnit",
    "reimbursableAmount",
    "totalCurrency"
  ]);
  const { isLoading: currenciesLoading } = useCurrencies();
  const { isLoading: countriesLoading } = useCountries();
  const { defaultCurrencyCode, defaultCurrencySymbol } = useDefaultCurrency();
  const currency = { code: defaultCurrencyCode, symbol: defaultCurrencySymbol };
  const setMileageValue = setValue;
  const { company } = useDefaultCompany();
  const companyShortName = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes } = useExpenseTypes(companyShortName, {
    formTypeIds: [FormTypeId.MILEAGE]
  });
  const activeTypes = useMemo$1(
    () => (expenseTypes == null ? void 0 : expenseTypes.filter((et) => et.status === "active")) ?? [],
    [expenseTypes]
  );
  const selectedType = useMemo$1(
    () => activeTypes.find((et) => et.id === mileageType),
    [activeTypes, mileageType]
  );
  useEffect(() => {
    if (mileageType) return;
    if (activeTypes.length !== 1) return;
    setMileageValue("mileageType", activeTypes[0].id, {
      shouldValidate: false,
      shouldDirty: false
    });
  }, [activeTypes, mileageType, setMileageValue]);
  useEffect(() => {
    const canSetDefaultCurrency = !currenciesLoading && !countriesLoading && !(totalCurrency == null ? void 0 : totalCurrency.code) && !(totalCurrency == null ? void 0 : totalCurrency.symbol);
    if (!canSetDefaultCurrency) return;
    setMileageValue(
      "totalCurrency",
      { code: defaultCurrencyCode, symbol: defaultCurrencySymbol },
      { shouldValidate: false, shouldDirty: false }
    );
  }, [
    countriesLoading,
    currenciesLoading,
    defaultCurrencyCode,
    defaultCurrencySymbol,
    setMileageValue,
    totalCurrency == null ? void 0 : totalCurrency.code,
    totalCurrency == null ? void 0 : totalCurrency.symbol
  ]);
  const { minEffectiveDate } = useMileageEffectiveRange({
    companyShortName,
    mileageRateId: (selectedType == null ? void 0 : selectedType.mileageRateId) ?? null
  });
  const effectiveOnForDisplay = useMemo$1(
    () => computeMileageEffectiveOn(
      expenseDate,
      expensePeriod == null ? void 0 : expensePeriod.from
    ),
    [expenseDate, expensePeriod]
  );
  const rateQueryEnabled = !!(selectedType == null ? void 0 : selectedType.mileageRateId) && !!effectiveOnForDisplay;
  const { data: effectiveRateData } = useEffectiveMileageRate({
    companyShortName,
    mileageRateId: (selectedType == null ? void 0 : selectedType.mileageRateId) ?? null,
    date: effectiveOnForDisplay,
    enabled: rateQueryEnabled
  });
  const hasConfirmedNoRate = rateQueryEnabled ? effectiveRateData === null : !!effectiveOnForDisplay && !!mileageType;
  const filterTransientNoRateError = useCallback$1(
    (msg) => msg === NO_MILEAGE_RATE_FOR_DATE_MESSAGE && !hasConfirmedNoRate ? void 0 : msg,
    [hasConfirmedNoRate]
  );
  const today = useMemo$1(() => /* @__PURE__ */ new Date(), []);
  const periodFrom = expensePeriod == null ? void 0 : expensePeriod.from;
  const periodTo = expensePeriod == null ? void 0 : expensePeriod.to;
  const periodAnchorForMonth = periodFrom && !periodTo ? periodFrom : void 0;
  const getDisabledReason = useCallback$1(
    (date) => resolveMileageDisabledReason({ date, minEffectiveDate, periodAnchorForMonth }),
    [minEffectiveDate, periodAnchorForMonth]
  );
  const isDateDisabledMatcher = useCallback$1(
    (date) => getDisabledReason(date) !== void 0,
    [getDisabledReason]
  );
  const isDatePickerDisabled = disabled || !mileageType;
  const datePlaceholder = mileageType ? isTripMode ? "Select date mileage incurred" : "Select date range incurred" : "Select mileage type first";
  const clearDateField = useCallback$1(() => {
    if (isTripMode) {
      setMileageValue("expenseDate", "", { shouldValidate: false, shouldDirty: true });
      return;
    }
    setMileageValue(
      "expensePeriod",
      void 0,
      { shouldValidate: false, shouldDirty: true }
    );
  }, [isTripMode, setMileageValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "mileageType",
          control,
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              MileageTypeSelect,
              {
                value: field.value || "",
                onChange: /* @__PURE__ */ __name((next) => {
                  if (next !== field.value && field.value) {
                    clearDateField();
                  }
                  field.onChange(next);
                }, "onChange"),
                onBlur: field.onBlur,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }, "render")
        }
      ),
      isTripMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expenseDate",
          control,
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                mode: "single",
                label: "Expense date",
                placeholder: datePlaceholder,
                value: typeof field.value === "string" && field.value ? parseDateOnlyAsLocal(field.value) : void 0,
                onChange: /* @__PURE__ */ __name((date) => {
                  field.onChange(date ? formatToISODate(date) : "");
                }, "onChange"),
                onBlur: field.onBlur,
                error: filterTransientNoRateError((_a = fieldState.error) == null ? void 0 : _a.message),
                disabled: isDatePickerDisabled,
                numberOfMonths: 1,
                maxDate: today,
                disabledDates: isDateDisabledMatcher,
                getDisabledTooltip: getDisabledReason
              }
            );
          }, "render")
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "expensePeriod",
          control,
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                mode: "range",
                label: "Expense period",
                placeholder: datePlaceholder,
                value: field.value,
                onChange: /* @__PURE__ */ __name((range) => {
                  field.onChange(range);
                }, "onChange"),
                onBlur: field.onBlur,
                error: filterTransientNoRateError((_a = fieldState.error) == null ? void 0 : _a.message),
                disabled: isDatePickerDisabled,
                numberOfMonths: 2,
                maxDate: today,
                disabledDates: isDateDisabledMatcher,
                getDisabledTooltip: getDisabledReason
              }
            );
          }, "render")
        }
      ),
      isTripMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: "fromLocation",
            control,
            render: /* @__PURE__ */ __name(({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ha,
                {
                  label: "From",
                  placeholder: "Specify origin location",
                  ...field,
                  value: field.value || "",
                  error: (_a = fieldState.error) == null ? void 0 : _a.message,
                  disabled,
                  maxCharacters: 100,
                  showCharacterCount: true,
                  enforceMaxLength: true
                }
              );
            }, "render")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center absolute top-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "isRoundTrip",
              control,
              render: /* @__PURE__ */ __name(({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ws,
                {
                  label: "Round trip",
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  disabled
                }
              ), "render")
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "toLocation",
              control,
              render: /* @__PURE__ */ __name(({ field, fieldState }) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Ha,
                  {
                    label: "To",
                    placeholder: "Specify destination location",
                    ...field,
                    value: field.value || "",
                    error: (_a = fieldState.error) == null ? void 0 : _a.message,
                    disabled,
                    maxCharacters: 100,
                    showCharacterCount: true,
                    enforceMaxLength: true
                  }
                );
              }, "render")
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
          render: /* @__PURE__ */ __name(({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ha,
              {
                label: `Total distance${rateUnit ? ` (${rateUnit})` : ""}`,
                placeholder: "0.00",
                ...field,
                value: field.value || "",
                onChange: createDecimalChangeHandler(field.onChange),
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled
              }
            );
          }, "render")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ha,
        {
          label: "Rate",
          value: ratePerUnit ? formatRate(ratePerUnit, rateUnit || "-", { currency }) : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ha,
        {
          label: "Reimbursable amount",
          value: formatCurrency(reimbursableAmount || "0", { currency }),
          disabled: true,
          readOnly: true
        }
      )
    ] })
  ] });
}, "MileageDetailsSection");
const MileageJustificationSection = /* @__PURE__ */ __name(({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "businessPurpose",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            BusinessPurposeSelect,
            {
              value: field.value || "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled
            }
          );
        }, "render")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: "expenseDescription",
        control,
        render: /* @__PURE__ */ __name(({ field, fieldState }) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ja,
            {
              label: "Expense description",
              placeholder: "Add any additional details about this claim",
              ...field,
              value: field.value || "",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              disabled,
              maxLength: 500,
              rows: 4
            }
          );
        }, "render")
      }
    )
  ] });
}, "MileageJustificationSection");
const EXPENSE_DETAILS_SECTION = {
  id: "expense-details",
  type: FormSectionType.ExpenseDetails,
  title: "EXPENSE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text_snippet", className: "size-full w-4 h-4 text-exp-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: expenseDetailsSchema,
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseDetailsSection, { ...props }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseJustificationSection, { ...props }), "render")
};
const EXPENSE_COST_ALLOCATION_FIELD_CONFIG = {
  netAmountField: "netAmount",
  totalAmountField: "totalAmount",
  netCurrencyField: "netCurrency",
  totalCurrencyField: "totalCurrency",
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG }), "render"),
  headerActions: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: EXPENSE_COST_ALLOCATION_FIELD_CONFIG
    }
  ), "headerActions"),
  isEnabled: /* @__PURE__ */ __name((formValues) => {
    var _a, _b;
    const amount = getExpenseBaseAmount((_a = formValues.netCurrency) == null ? void 0 : _a.code, (_b = formValues.totalCurrency) == null ? void 0 : _b.code, formValues.netAmount, formValues.totalAmount);
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || amount > 0;
  }, "isEnabled"),
  dependsOn: [
    ExpenseFormField.NetAmount,
    ExpenseFormField.TotalAmount,
    ExpenseFormField.NetCurrency,
    ExpenseFormField.TotalCurrency,
    ExpenseFormField.CostAllocations,
    ExpenseFormField.IsEqualSplit,
    ExpenseFormField.DeferToApprover
  ]
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "trip" }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props }), "render")
};
const MILEAGE_COST_ALLOCATION_FIELD_CONFIG = {
  netAmountField: "reimbursableAmount",
  totalAmountField: "reimbursableAmount",
  netCurrencyField: "totalCurrency",
  totalCurrencyField: "totalCurrency",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG }), "render"),
  headerActions: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG
    }
  ), "headerActions"),
  isEnabled: /* @__PURE__ */ __name((formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  }, "isEnabled"),
  dependsOn: [
    MileageTripFormField.ReimbursableAmount,
    MileageTripFormField.CostAllocations,
    MileageTripFormField.IsEqualSplit,
    MileageTripFormField.DeferToApprover,
    MileageTripFormField.TotalCurrency
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props }), "render")
};
const FULL_EXPENSE_SECTIONS_CONFIG = [
  EXPENSE_DETAILS_SECTION,
  EXPENSE_JUSTIFICATION_SECTION,
  COST_ALLOCATION_SECTION,
  ADDITIONAL_COMMENTS_SECTION
];
function sortFormSections(sections) {
  return [...sections].sort((a, b) => a.order - b.order);
}
__name(sortFormSections, "sortFormSections");
const { forwardRef, useMemo } = await importShared("react");
const createExpenseForm = /* @__PURE__ */ __name((config) => {
  const FormComponent = forwardRef(
    (props, ref) => {
      var _a;
      const {
        onSubmit,
        onSaveDraft,
        onDraftSaved,
        initialData,
        draftId,
        isSubmitting = false,
        isDrafting = false,
        draftSaveError = false,
        onButtonStateChange,
        onSaveDraftForUpload
      } = props;
      const defaultValues = ((_a = config.initialDataTransformer) == null ? void 0 : _a.call(config, initialData)) ?? initialData;
      const validationConfig = {
        ...config.validationStrategy,
        defaultValues
      };
      const form = useBaseExpenseForm(validationConfig, {
        onSubmit,
        onSaveDraft,
        onDraftSaved,
        isSubmitting,
        isDrafting,
        draftSaveError
      });
      const { control, setValue, getValues, formState, watch, trigger } = form.form;
      useValidatePrefilledFields(form.form, initialData);
      config.customHook({ control, setValue, getValues, formState, watch, trigger });
      useAutoSave({
        draftId,
        isDrafting,
        onSaveDraft,
        getFormValues: /* @__PURE__ */ __name(() => form.getValues(), "getFormValues")
      });
      useFormButtonStateSync({
        form,
        formState,
        onButtonStateChange,
        isSubmitting,
        isDrafting
      });
      useFormImperativeHandle({
        ref,
        form
      });
      const formSections = useMemo(() => sortFormSections(config.sections), []);
      const handlersMap = config.handlersHook(setValue, getValues, trigger, { draftId, onSaveDraftForUpload });
      const leftColumn = useMemo(
        () => {
          var _a2;
          return (_a2 = config.leftColumnRenderer) == null ? void 0 : _a2.call(config, {
            control,
            setValue,
            getValues,
            isSubmitting,
            isDrafting,
            draftId,
            onSaveDraft,
            onSaveDraftForUpload
          });
        },
        [control, setValue, getValues, isSubmitting, isDrafting, draftId, onSaveDraft, onSaveDraftForUpload]
      );
      const errorDisplay = useMemo(
        () => {
          var _a2;
          return (_a2 = config.errorDisplayRenderer) == null ? void 0 : _a2.call(config, { errors: form.validationErrors });
        },
        [form.validationErrors]
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        BaseExpenseFormRenderer,
        {
          control,
          setValue,
          trigger: form.form.trigger,
          errors: formState.errors,
          disabled: isSubmitting,
          sections: formSections,
          handlersMap,
          layout: config.layout,
          leftColumn,
          errorDisplay
        }
      );
    }
  );
  FormComponent.displayName = "ExpenseForm";
  return FormComponent;
}, "createExpenseForm");
const ExpenseForm = createExpenseForm({
  validationStrategy: fullExpenseValidationStrategy,
  sections: FULL_EXPENSE_SECTIONS_CONFIG,
  layout: "two-column",
  initialDataTransformer: mapFullExpenseToDefaultValues,
  leftColumnRenderer: /* @__PURE__ */ __name((params) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseFormLeftColumn, { ...params }), "leftColumnRenderer"),
  // A placeholder for error displaying in a form
  errorDisplayRenderer: /* @__PURE__ */ __name(({ errors }) => {
    devLog("Form validation errors:", errors);
    return null;
  }, "errorDisplayRenderer"),
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
  errorDisplayRenderer: /* @__PURE__ */ __name(({ errors }) => {
    devLog(errors);
    return null;
  }, "errorDisplayRenderer"),
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "period" }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props }), "render")
};
const MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG = {
  netAmountField: "reimbursableAmount",
  totalAmountField: "reimbursableAmount",
  netCurrencyField: "totalCurrency",
  totalCurrencyField: "totalCurrency",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  deferToApproverField: "deferToApprover"
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG }), "render"),
  headerActions: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      trigger: props.trigger,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_PERIOD_COST_ALLOCATION_FIELD_CONFIG
    }
  ), "headerActions"),
  isEnabled: /* @__PURE__ */ __name((formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  }, "isEnabled"),
  dependsOn: [
    MileagePeriodFormField.ReimbursableAmount,
    MileagePeriodFormField.CostAllocations,
    MileagePeriodFormField.IsEqualSplit,
    MileagePeriodFormField.DeferToApprover,
    MileagePeriodFormField.TotalCurrency
  ]
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(SupportingFilesFormSection, { ...props }), "render")
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
  render: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props }), "render")
};
const MILEAGE_PERIOD_SECTIONS_CONFIG = [
  MILEAGE_PERIOD_DETAILS_SECTION,
  MILEAGE_PERIOD_SUPPORTING_FILES_SECTION,
  MILEAGE_PERIOD_JUSTIFICATION_SECTION,
  MILEAGE_PERIOD_COST_ALLOCATION_SECTION,
  MILEAGE_PERIOD_ADDITIONAL_COMMENTS_SECTION
];
const MileagePeriodForm = createExpenseForm({
  validationStrategy: mileagePeriodValidationStrategy,
  sections: MILEAGE_PERIOD_SECTIONS_CONFIG,
  layout: "single-column",
  initialDataTransformer: mapMileagePeriodToDefaultValues,
  errorDisplayRenderer: /* @__PURE__ */ __name(({ errors }) => {
    devLog(errors);
    return null;
  }, "errorDisplayRenderer"),
  customHook: useMileageFormSync,
  handlersHook: useMileagePeriodFormHandlers
});
MileagePeriodForm.displayName = "MileagePeriodForm";
const { useCallback, useRef, useState } = await importShared("react");
export {
  ExpenseForm as E,
  MileageTripForm as M,
  MileagePeriodForm as a
};

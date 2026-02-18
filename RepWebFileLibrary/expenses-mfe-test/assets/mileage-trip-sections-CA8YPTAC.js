import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { o as additionalCommentsFieldOptional, p as supportingFilesField, _ as expenseDescriptionField, $ as businessPurposeField, a0 as reimbursableAmountField, a1 as rateUnitField, a2 as ratePerUnitField, a3 as totalDistanceField, a4 as expensePeriodField, a5 as mileageTypeField, A as costAllocationTypeSchema, a6 as validateCostAllocation, K as ECostAllocation, u as useFormFieldValues, a7 as useFormTypeId, a8 as useCostAllocation, a9 as AllocationTypeChips, aa as CostAllocationField, ab as AddAllocationExpandable, ac as useEqualSplit, ad as COST_ALLOCATION_LABELS, ae as SupportingFiles, af as MAX_SUPPORTING_FILES_FOR_MILEAGE_PERIOD, ag as expenseDetailsSchema, F as FormSectionType, ah as expenseJustificationSchema, l as costAllocationSchema, n as additionalCommentsSchema, ai as MileageTripFormField, j as mileageDetailsSchema, k as mileageJustificationSchema } from "./ExpenseFormLeftColumn-BTd4x-kY.js";
import { o as object, b as boolean, a as array, u as unknown, n as number, s as string, l as literal, C as Controller, f as useWatch } from "./zod-PpMdyx4R.js";
import { a as $a, B as Bs, h as Va, H as ka, J as Jn, G as Ga, T as Ta, L as za, u as us, O as Ks, a0 as Te } from "./index.es-BigkB81S.js";
import { a as useExpenseTypes, f as useCurrencies, g as useCountries, E as ExpenseFormType, F as FormTypeId } from "./api-CHmh4449.js";
import { i as useQueryClient, u as useCompanyStore, q as queryKeys, g as useQuery } from "./factory-ZvSQ5Di1.js";
import { a as useDefaultCompany } from "./api-DGOb4UR4.js";
import { u as useMutation } from "./use-debounced-callback-Ci-JorzK.js";
import { a as apiClient } from "./axiosInstance-BlSBS3Xg.js";
import { E as EXPENSE_ENDPOINTS } from "./expenses-DrZhDcIg.js";
import { d as devError, a as devLog } from "./index-CvL7PQqL.js";
import { a as DEFAULT_CURRENCY_CODE, g as getCurrencyLocale } from "./currency-JXWfr4-r.js";
import { c as createLucideIcon } from "./createLucideIcon-CWwrLivU.js";
import { C as CreditCard } from "./credit-card-DGksABcy.js";
import { I as Icon } from "./Icon-BxYHdB7c.js";
import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { c as useBusinessPurposes } from "./api-DApDsliX.js";
const __iconNode = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode);
const DEFAULT_PAYMENT_METHOD = { id: "1" };
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
    $a,
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
var ItemCategory = /* @__PURE__ */ ((ItemCategory2) => {
  ItemCategory2["Expense"] = "expense";
  ItemCategory2["Mileage"] = "mileage";
  return ItemCategory2;
})(ItemCategory || {});
function isRegularExpense(item) {
  return item.itemType === "expense";
}
function isMileageExpense(item) {
  return item.itemType === "mileage";
}
function isExpenseItemDraft(item) {
  return item.status === "draft";
}
function isExpenseItemSubmitted(item) {
  return item.status !== "draft";
}
function parseOptionalInt(value) {
  if (!value || value.trim() === "") return null;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? null : parsed;
}
function parseOptionalDecimal(value) {
  if (!value || value.trim() === "") return null;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}
function toISODateString(dateStr) {
  if (!dateStr || dateStr.trim() === "") return null;
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return null;
    return date.toISOString();
  } catch {
    return null;
  }
}
function mapCostAllocation(allocation) {
  const entityData = allocation.entityData;
  const base = {
    businessId: allocation.id,
    amount: allocation.amount,
    percentage: allocation.percentage
  };
  switch (allocation.type) {
    case ECostAllocation.Rep:
      return {
        ...base,
        salesRepId: (entityData == null ? void 0 : entityData.id) ?? null
      };
    case ECostAllocation.Team:
      return {
        ...base,
        teamId: (entityData == null ? void 0 : entityData.id) ? parseInt(entityData.id, 10) : null
      };
    case ECostAllocation.Project:
      return {
        ...base,
        projectId: (entityData == null ? void 0 : entityData.projectId) ? parseInt(entityData.projectId, 10) : null,
        purchaseOrderId: (entityData == null ? void 0 : entityData.id) ? parseInt(entityData.id, 10) : null,
        supplierId: null
      };
    case ECostAllocation.Admin:
      return {
        ...base,
        projectId: (entityData == null ? void 0 : entityData.projectId) ? parseInt(entityData.projectId, 10) : null,
        purchaseOrderId: (entityData == null ? void 0 : entityData.id) ? parseInt(entityData.id, 10) : null,
        supplierId: null
      };
    default:
      return base;
  }
}
function mapFormDataToCreateRequest(data, expenseTypes) {
  var _a, _b, _c, _d, _e;
  const typeId = parseOptionalInt(data.expenseType);
  const selectedExpenseType = typeId !== null ? expenseTypes == null ? void 0 : expenseTypes.find((et) => parseInt(et.id, 10) === typeId) : void 0;
  return {
    typeId,
    formTypeId: (selectedExpenseType == null ? void 0 : selectedExpenseType.formTypeId) ?? null,
    vendor: data.vendor || null,
    date: toISODateString(data.expenseDate),
    locationId: parseOptionalInt(data.expenseLocation),
    paymentMethodId: parseOptionalInt(data.paymentMethod),
    foreignAmount: parseOptionalDecimal(data.netAmount),
    totalAmount: parseOptionalDecimal(data.totalAmount),
    businessPurposeId: parseOptionalInt(data.businessPurpose),
    description: data.expenseDescription || null,
    personsEntertained: data.personsEntertained || null,
    additionalComments: data.additionalComments || null,
    affidavitJustification: ((_a = data.affidavit) == null ? void 0 : _a.justification) || null,
    affidavitInitials: ((_b = data.affidavit) == null ? void 0 : _b.digitalSignature) || null,
    taxCurrencyCode: ((_c = data.totalCurrency) == null ? void 0 : _c.code) || null,
    foreignCurrencyCode: ((_d = data.netCurrency) == null ? void 0 : _d.code) || null,
    totalCurrencyCode: ((_e = data.totalCurrency) == null ? void 0 : _e.code) || null,
    costAllocationDeferred: data.deferToApprover ?? null,
    costAllocations: data.costAllocations && data.costAllocations.length > 0 ? data.costAllocations.map(mapCostAllocation) : null
  };
}
const mapFormDataToUpdateRequest = mapFormDataToCreateRequest;
const mapToPaymentMethod = (api) => ({
  id: String(api.id),
  name: api.name
});
function normalizeExpenseDraftResponse(response) {
  return {
    id: String(response.id),
    businessId: response.businessId,
    status: response.status,
    vendor: response.vendor,
    expenseDate: response.date,
    totalAmount: response.totalAmount,
    totalCurrencyCode: response.totalCurrencyCode,
    createdAt: response.createdDate,
    updatedAt: response.updatedDate
  };
}
function buildExpenseItemForCache(response, formData) {
  return {
    id: String(response.id),
    itemType: ItemCategory.Expense,
    status: "draft",
    createdAt: response.createdDate,
    updatedAt: response.updatedDate ?? response.createdDate,
    userId: response.formOwner,
    data: formData
  };
}
const useSaveExpenseDraft = () => {
  const queryClient = useQueryClient();
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  return useMutation({
    mutationFn: async ({ data, draftId, signal }) => {
      if (!(selectedCompany == null ? void 0 : selectedCompany.shortName)) {
        throw new Error("No company selected");
      }
      const company = selectedCompany.shortName;
      const expenseTypes = queryClient.getQueryData(
        queryKeys.expenseTypes.list(company, false)
      );
      if (draftId) {
        const payload = mapFormDataToUpdateRequest(data, expenseTypes);
        devLog("📤 Update draft payload:", payload);
        const response = await apiClient.put(
          EXPENSE_ENDPOINTS.UPDATE_DRAFT(company, draftId),
          payload,
          { signal }
        );
        devLog("📥 Update draft response:", response.data);
        return {
          draft: normalizeExpenseDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      } else {
        const payload = mapFormDataToCreateRequest(data, expenseTypes);
        devLog("📤 Create draft payload:", payload);
        const response = await apiClient.post(
          EXPENSE_ENDPOINTS.SAVE_DRAFT(company),
          payload,
          { signal }
        );
        devLog("📥 Create draft response:", response.data);
        return {
          draft: normalizeExpenseDraftResponse(response.data),
          response: response.data,
          formData: data
        };
      }
    },
    onSuccess: ({ draft, response, formData }, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      const expenseItem = buildExpenseItemForCache(response, formData);
      if (variables.draftId) {
        queryClient.setQueryData(
          queryKeys.expenseItem.detail(variables.draftId),
          expenseItem
        );
      } else {
        queryClient.setQueryData(queryKeys.expenseItem.detail(draft.id), expenseItem);
      }
      Bs.success("All changes are saved", {
        duration: 3e3
      });
    },
    onError: (error, variables) => {
      var _a;
      if ((_a = variables.signal) == null ? void 0 : _a.aborted) return;
      devError("Failed to save expense draft:", error);
      Bs.error("Failed to save. Please try again", {
        duration: 3e3
      });
    }
  });
};
const useDeleteExpenseDraft = (options) => {
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
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
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
const useSubmitExpense = () => {
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
      return normalizeExpenseDraftResponse(response.data);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expenseDrafts.all() });
      queryClient.invalidateQueries({ queryKey: queryKeys.expensesList.all() });
      queryClient.invalidateQueries({
        queryKey: queryKeys.expenseItem.detail(data.id)
      });
      Bs.success("Expense submitted", {
        duration: 3e3
      });
    },
    onError: (error) => {
      devError("Failed to submit expense:", error);
      Bs.error("Fail to submit", {
        duration: 3e3
      });
    }
  });
};
const usePaymentMethods = () => {
  const selectedCompany = useCompanyStore((state) => state.selectedCompany);
  const company = selectedCompany == null ? void 0 : selectedCompany.shortName;
  return useQuery({
    queryKey: queryKeys.paymentMethods.list(company ?? ""),
    queryFn: async () => {
      const response = await apiClient.get(
        EXPENSE_ENDPOINTS.GET_PAYMENT_METHODS(company)
      );
      return response.data.map(mapToPaymentMethod);
    },
    enabled: !!company,
    staleTime: 10 * 60 * 1e3,
    gcTime: 30 * 60 * 1e3
  });
};
const ExpenseDetailsSection = ({
  control,
  setValue,
  disabled = false
}) => {
  const { netCurrency } = useFormFieldValues(control, [
    // TODO(TRX-90): Refactor — add isDifferentCurrency, totalCurrency when needed
    "isDifferentCurrency",
    "netCurrency",
    "totalCurrency"
  ]);
  const { data: currencies, isLoading: currenciesLoading } = useCurrencies();
  const { data: countries, isLoading: countriesLoading } = useCountries();
  const { data: paymentMethods, isLoading: paymentMethodsLoading } = usePaymentMethods();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-2", children: [
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
            Va,
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
            ka,
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
          const selectedCountry = countries == null ? void 0 : countries.find((c) => c.id.toString() === field.value);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Jn,
            {
              label: "Expense location",
              placeholder: "Select country",
              value: field.value ? {
                value: field.value,
                label: (selectedCountry == null ? void 0 : selectedCountry.name) || "",
                data: (selectedCountry == null ? void 0 : selectedCountry.defaultCurrencyIso) || DEFAULT_CURRENCY_CODE
                // TODO(TRX-90): Implement user default currency based on home company
              } : null,
              onValueChange: (item) => {
                const currencyCode = (item == null ? void 0 : item.data) || DEFAULT_CURRENCY_CODE;
                field.onChange((item == null ? void 0 : item.value) || "");
                setValue("netCurrency", { code: currencyCode, locale: getCurrencyLocale(currencyCode) });
              },
              onSearch: async (query) => {
                return (countries ?? []).reduce((acc, option) => {
                  if (option.name.toLowerCase().includes(query.toLowerCase())) {
                    acc.push({ value: option.id.toString(), label: option.name, data: option.defaultCurrencyIso });
                  }
                  return acc;
                }, []);
              },
              searchOnFocus: true,
              searchDelay: 0,
              minSearchLength: 0,
              onBlur: field.onBlur,
              clearOnBlur: false,
              dropdownClassName: "max-h-47",
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true,
              disabled: disabled || countriesLoading
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
            $a,
            {
              label: "Payment method",
              placeholder: "Select payment method",
              options: (paymentMethods == null ? void 0 : paymentMethods.map((pm) => ({
                value: pm.id,
                label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  pm.id === DEFAULT_PAYMENT_METHOD.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 text-exp-yellow-y-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 text-trax-neutral-1000" }),
                  pm.name
                ] })
              }))) || [],
              value: field.value || "",
              onValueChange: field.onChange,
              onBlur: field.onBlur,
              error: (_a = fieldState.error) == null ? void 0 : _a.message,
              required: true,
              disabled: disabled || paymentMethodsLoading
            }
          );
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-start-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "netAmount",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ga,
              {
                label: "Receipt total",
                placeholder: "0.00",
                textAlign: "right",
                value: field.value || "",
                onChange: (value) => field.onChange(value),
                suffix: {
                  type: "searchSelect",
                  value: netCurrency ? {
                    value: netCurrency.code,
                    label: netCurrency.code
                  } : {
                    value: DEFAULT_CURRENCY_CODE,
                    label: DEFAULT_CURRENCY_CODE
                  },
                  onValueChange: (value) => {
                    const currencyCode = (value == null ? void 0 : value.value) || DEFAULT_CURRENCY_CODE;
                    setValue("netCurrency", { code: currencyCode, locale: getCurrencyLocale(currencyCode) });
                  },
                  placeholder: "Search currency",
                  buttonLabel: (netCurrency == null ? void 0 : netCurrency.code) || DEFAULT_CURRENCY_CODE,
                  onSearch: async (query) => {
                    return (currencies ?? []).reduce((acc, option) => {
                      if (option.isoCode.toLowerCase().includes(query.toLowerCase()) || option.name.toLowerCase().includes(query.toLowerCase())) {
                        acc.push({ value: option.isoCode, label: option.name });
                      }
                      return acc;
                    }, []);
                  },
                  renderItem: (item, highlight, isSelected) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-900"} font-medium [&_strong]:font-bold`, children: highlight(item.value) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xxs leading-[140%] ${isSelected ? "text-white" : "text-exp-grey-600"} [&_strong]:font-bold`, children: highlight(item.label) })
                  ] }),
                  searchOnFocus: true,
                  minSearchLength: 0,
                  searchDelay: 0,
                  dropdownClassName: "left-0 max-h-48 -mt-1 border-0 rounded-t-none",
                  popoverClassName: "w-[128px]",
                  disabled: disabled || currenciesLoading
                },
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true,
                disabled: disabled || currenciesLoading
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
              Ga,
              {
                label: "Total amount",
                placeholder: "0.00",
                textAlign: "right",
                suffix: (netCurrency == null ? void 0 : netCurrency.code) || DEFAULT_CURRENCY_CODE,
                value: field.value || "",
                onChange: (value) => field.onChange(value),
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true,
                disabled
              }
            );
          }
        }
      )
    ] })
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
    $a,
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
            Ta,
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
            Ta,
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
        Ta,
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
const MileageTypeSelect = ({
  value,
  onChange,
  onBlur,
  required = true,
  disabled = false,
  placeholder = "Select mileage type",
  error
}) => {
  const { company, isLoading: isLoadingCompany } = useDefaultCompany();
  const companyId = (company == null ? void 0 : company.shortName) || null;
  const { data: expenseTypes, isLoading: isLoadingTypes } = useExpenseTypes(companyId, {
    formTypeIds: [FormTypeId.MILEAGE]
  });
  const options = (expenseTypes == null ? void 0 : expenseTypes.map((et) => ({
    value: et.id,
    label: et.name
  }))) || [];
  const isLoading = isLoadingCompany || isLoadingTypes;
  const displayPlaceholder = isLoadingCompany ? "Loading company..." : isLoadingTypes ? "Loading mileage types..." : !companyId ? "No company selected" : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $a,
    {
      label: "Mileage type",
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
      us,
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
      Ks,
      {
        id: "equal-split-toggle",
        checked: isEqualSplit ?? false,
        onCheckedChange: toggleEqualSplit,
        disabled: isEqualSplitDisabled || disabled
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Te,
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
  const totalCurrency = useWatch({
    control,
    name: fieldConfig.currencyField ?? fieldConfig.totalAmountField,
    disabled: !fieldConfig.currencyField
  });
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(za, { value: progressValue, disabled: isProgressDisabled, error: progressError }),
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
  disabled = false,
  expenseId,
  onSaveDraftForUpload
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
      hideAddButtonWhenFull: true,
      expenseId,
      onSaveDraftForUpload
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
              ka,
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
              ka,
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
                Va,
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
                us,
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
                  Va,
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
              Va,
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
        Va,
        {
          label: "Rate",
          value: ratePerUnit ? `$ ${ratePerUnit} per ${rateUnit || "unit"}` : "",
          disabled: true,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Va,
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
            Ta,
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
  DEFAULT_PAYMENT_METHOD as D,
  EXPENSE_DETAILS_SECTION as E,
  ItemCategory as I,
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
  isRegularExpense as k,
  isMileageExpense as l,
  mileagePeriodFormSchema as m,
  isExpenseItemSubmitted as n,
  mapCostAllocation as o,
  parseOptionalInt as p,
  parseOptionalDecimal as q,
  useSubmitExpense as r,
  useDeleteExpenseDraft as s,
  toISODateString as t,
  useSaveExpenseDraft as u,
  isExpenseItemDraft as v
};

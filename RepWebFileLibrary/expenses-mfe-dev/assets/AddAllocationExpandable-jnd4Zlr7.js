const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[(()=>{const f="assets/core-fyjfEstr.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})(),(()=>{const f="assets/_commonjsHelpers-CUmg6egw.js";const rel=f.startsWith('assets/')?f.slice(7):f;return new URL(rel, import.meta.url).href;})()])))=>i.map(i=>d[i]);
import { a as useForm, b as a, c as useWatch, d as custom, s as string, o as object, e as boolean, f as array, g as unknown, n as number, C as Controller } from "./store-C9UItKRl.js";
import { importShared } from "./__federation_fn_import-DD1J_cWq.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { A as Ta, L as La, O as Oa, B as Ba, C as Ga, E as Aa, G as Ge, N as gr, R as sa, u as ua, Q as Qo, v as vr, w as wr, S as Sr, U as os, V as as, W as ss } from "./createLucideIcon-moxpJjMi.js";
import { I as Icon } from "./Icon-Bji1Sbhm.js";
import { L as LoadingSpinner, P as Plus } from "./LoadingSpinner-CWj5JVUu.js";
import { a as apiClient } from "./axiosInstance-Df66sy1J.js";
import { F as FILE_ENDPOINTS } from "./config-CcAFLaBz.js";
import { _ as __vitePreload } from "./preload-helper-e_IRvegh.js";
const { useCallback: useCallback$d, useEffect: useEffect$a, useMemo: useMemo$8, useRef: useRef$9 } = await importShared("react");
function useBaseExpenseForm(config, props) {
  const {
    onSubmit,
    onSaveDraft,
    onDraftSaved,
    isSubmitting = false,
    isDrafting = false,
    draftSaveError = false
  } = props;
  const FORM_VALIDATION_CONFIG = {
    validationTrigger: "onTouched",
    revalidationTrigger: "onChange",
    errorDisplayMode: "all"
  };
  const form = useForm({
    resolver: a(config.schema),
    defaultValues: config.defaultValues,
    mode: FORM_VALIDATION_CONFIG.validationTrigger,
    reValidateMode: FORM_VALIDATION_CONFIG.revalidationTrigger,
    criteriaMode: FORM_VALIDATION_CONFIG.errorDisplayMode
  });
  const {
    handleSubmit: rhfHandleSubmit,
    control,
    getValues,
    formState: { isDirty, errors },
    trigger,
    reset
  } = form;
  const prevIsDraftingRef = useRef$9(isDrafting);
  useEffect$a(() => {
    if (prevIsDraftingRef.current === true && isDrafting === false && !draftSaveError) {
      const currentValues = getValues();
      reset(currentValues, { keepValues: true, keepDirty: false });
      onDraftSaved == null ? void 0 : onDraftSaved();
    }
    prevIsDraftingRef.current = isDrafting;
  }, [isDrafting, draftSaveError, getValues, reset, onDraftSaved]);
  const fieldsForValidation = useMemo$8(() => {
    const requiredFields = config.fieldsForRequiredCheck || [];
    const draftFields = config.fieldsForDraftCheck || [];
    const uniqueFields = Array.from(/* @__PURE__ */ new Set([...requiredFields, ...draftFields]));
    return uniqueFields.length > 0 ? uniqueFields : void 0;
  }, [config.fieldsForRequiredCheck, config.fieldsForDraftCheck]);
  const watchedFieldValues = useWatch({
    control,
    name: fieldsForValidation,
    disabled: !fieldsForValidation
  });
  const allFormData = useWatch({ control, disabled: !!fieldsForValidation });
  const formDataForValidation = useMemo$8(() => {
    if (!fieldsForValidation) {
      return allFormData;
    }
    if (!Array.isArray(watchedFieldValues)) {
      return {};
    }
    return fieldsForValidation.reduce((acc, field, index) => {
      acc[field] = watchedFieldValues[index];
      return acc;
    }, {});
  }, [fieldsForValidation, watchedFieldValues, allFormData]);
  const requiredFieldsFilled = useMemo$8(
    () => config.areRequiredFieldsFilled(formDataForValidation),
    [formDataForValidation, config]
  );
  const validationErrors = useMemo$8(() => {
    const errorMessages = [];
    Object.values(errors).forEach((error) => {
      if (error == null ? void 0 : error.message) {
        errorMessages.push(error.message);
      }
    });
    return errorMessages;
  }, [errors]);
  const hasErrors = validationErrors.length > 0;
  const canSave = useMemo$8(
    () => config.canSaveDraft(formDataForValidation),
    [formDataForValidation, config]
  );
  const canSubmit = requiredFieldsFilled && !hasErrors && !isSubmitting;
  const handleFormSubmit = useCallback$d(
    async (data) => {
      try {
        const result = config.validateForSubmission(data);
        if (!result.success) {
          console.error("Validation failed:", result.error);
          return;
        }
        await (onSubmit == null ? void 0 : onSubmit(data));
      } catch (error) {
        console.error("Form submission error:", error);
        throw error;
      }
    },
    [config, onSubmit]
  );
  const handleDraftSave = useCallback$d(
    async () => {
      try {
        const data = getValues();
        if (!canSave) {
          return;
        }
        if (config.validateForDraft) {
          const result = config.validateForDraft(data);
          if (!result.success) {
            console.error("Draft validation failed:", result.error);
            return;
          }
        }
        await (onSaveDraft == null ? void 0 : onSaveDraft(data));
      } catch (error) {
        console.error("Draft save error:", error);
        throw error;
      }
    },
    [getValues, canSave, config, onSaveDraft]
  );
  const validateForm = useCallback$d(async () => {
    const isFormValid = await trigger();
    return isFormValid && canSubmit;
  }, [trigger, canSubmit]);
  const getSubmitButtonState = useCallback$d(() => {
    if (isSubmitting) {
      return { disabled: true, tooltip: "Submitting..." };
    }
    if (!requiredFieldsFilled) {
      return { disabled: true, tooltip: "Please fill all required fields" };
    }
    if (hasErrors) {
      return { disabled: true, tooltip: "Please fix validation errors" };
    }
    return { disabled: false };
  }, [isSubmitting, requiredFieldsFilled, hasErrors]);
  const getSaveDraftButtonState = useCallback$d(() => {
    if (isDrafting) {
      return { disabled: true, tooltip: "Saving draft..." };
    }
    if (!isDirty) {
      return { disabled: true, tooltip: "No changes to save" };
    }
    if (!canSave) {
      return { disabled: true, tooltip: "At least one field must be filled" };
    }
    return { disabled: false };
  }, [isDrafting, isDirty, canSave]);
  return {
    form,
    requiredFieldsFilled,
    validationErrors,
    hasErrors,
    canSave,
    canSubmit,
    handleSubmit: rhfHandleSubmit(handleFormSubmit),
    handleDraftSave,
    validateForm,
    getSubmitButtonState,
    getSaveDraftButtonState,
    getValues
  };
}
const { useMemo: useMemo$7 } = await importShared("react");
const useCostAllocation = ({
  allocations,
  totalAmount
}) => {
  const isEnabled = useMemo$7(() => totalAmount > 0, [totalAmount]);
  const allocatedPercentage = useMemo$7(() => {
    return allocations.reduce((sum, allocation) => sum + allocation.percentage, 0);
  }, [allocations]);
  const remainingPercentage = useMemo$7(() => {
    return Math.max(0, 100 - allocatedPercentage);
  }, [allocatedPercentage]);
  const progressValue = useMemo$7(() => {
    return parseFloat(allocatedPercentage.toFixed(2));
  }, [allocatedPercentage]);
  const progressError = useMemo$7(() => {
    if (allocatedPercentage > 100) {
      return "Total allocation cannot exceed 100%";
    }
    return void 0;
  }, [allocatedPercentage]);
  return {
    isEnabled,
    allocatedPercentage,
    remainingPercentage,
    progressValue,
    progressError
  };
};
var ExpenseFormField = /* @__PURE__ */ ((ExpenseFormField2) => {
  ExpenseFormField2["ExpenseType"] = "expenseType";
  ExpenseFormField2["Vendor"] = "vendor";
  ExpenseFormField2["ExpenseDate"] = "expenseDate";
  ExpenseFormField2["ExpenseLocation"] = "expenseLocation";
  ExpenseFormField2["PaymentMethod"] = "paymentMethod";
  ExpenseFormField2["NetAmount"] = "netAmount";
  ExpenseFormField2["TotalAmount"] = "totalAmount";
  ExpenseFormField2["BusinessPurpose"] = "businessPurpose";
  ExpenseFormField2["ExpenseDescription"] = "expenseDescription";
  ExpenseFormField2["PersonsEntertained"] = "personsEntertained";
  ExpenseFormField2["AdditionalComments"] = "additionalComments";
  ExpenseFormField2["ReceiptAttachment"] = "receiptAttachment";
  ExpenseFormField2["IsReceiptUnavailable"] = "isReceiptUnavailable";
  ExpenseFormField2["Affidavit"] = "affidavit";
  ExpenseFormField2["SupportingFiles"] = "supportingFiles";
  ExpenseFormField2["IsDifferentCurrency"] = "isDifferentCurrency";
  ExpenseFormField2["NetCurrency"] = "netCurrency";
  ExpenseFormField2["TotalCurrency"] = "totalCurrency";
  ExpenseFormField2["CostAllocations"] = "costAllocations";
  ExpenseFormField2["IsEqualSplit"] = "isEqualSplit";
  return ExpenseFormField2;
})(ExpenseFormField || {});
const generateId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
const { useCallback: useCallback$c, useMemo: useMemo$6 } = await importShared("react");
const useCostAllocationHandlers = (setValue, getValues) => {
  const addAllocation = useCallback$c(
    (type) => {
      const currentAllocations = getValues("costAllocations") || [];
      const newAllocation = {
        id: generateId(),
        name: "",
        percentage: 0,
        amount: 0,
        type
      };
      setValue(ExpenseFormField.CostAllocations, [...currentAllocations, newAllocation], {
        shouldValidate: true,
        shouldDirty: true
      });
    },
    [setValue, getValues]
  );
  const updateAllocationEntity = useCallback$c(
    (id, entity) => {
      const currentAllocations = getValues("costAllocations") || [];
      const updatedAllocations = currentAllocations.map(
        (allocation) => allocation.id === id ? {
          ...allocation,
          name: (entity == null ? void 0 : entity.label) || "",
          entityData: (entity == null ? void 0 : entity.data) || void 0
        } : allocation
      );
      setValue(ExpenseFormField.CostAllocations, updatedAllocations, {
        shouldValidate: true,
        shouldDirty: true
      });
    },
    [setValue, getValues]
  );
  const removeAllocation = useCallback$c(
    (id) => {
      const currentAllocations = getValues("costAllocations") || [];
      const filteredAllocations = currentAllocations.filter(
        (allocation) => allocation.id !== id
      );
      setValue(ExpenseFormField.CostAllocations, filteredAllocations, {
        shouldValidate: true,
        shouldDirty: true
      });
    },
    [setValue, getValues]
  );
  const getSelectedValue = useCallback$c(
    (allocationId, allocations) => {
      const allocation = allocations.find((a2) => a2.id === allocationId);
      if (!allocation || !allocation.name) {
        return null;
      }
      return {
        value: allocationId,
        label: allocation.name,
        data: allocation.entityData
      };
    },
    []
  );
  return useMemo$6(() => ({
    actions: {
      addAllocation,
      updateAllocationEntity,
      removeAllocation
    },
    helpers: {
      getSelectedValue,
      getValues
    }
  }), [addAllocation, updateAllocationEntity, removeAllocation, getSelectedValue, getValues]);
};
const COST_ALLOCATION_CONSTANTS = {
  DEFAULT_CURRENCY_CODE: "CAD",
  DECIMAL_PLACES: 2,
  MIN_SEARCH_LENGTH: 2,
  SEARCH_DELAY_MS: 300,
  LABELS: {
    PURCHASE_ORDER: "Purchase Order (PO)",
    EQUAL_SPLIT: "Equal Split",
    ADD_ALLOCATION: "Add Allocation",
    SECTION_TITLE: "COST ALLOCATION"
  },
  TOLERANCE: {
    FLOATING_POINT: 0.01
  }
};
const COST_ALLOCATION_LABELS = COST_ALLOCATION_CONSTANTS.LABELS;
const COST_ALLOCATION_TOLERANCE = COST_ALLOCATION_CONSTANTS.TOLERANCE.FLOATING_POINT;
const DEFAULT_CURRENCY_CODE = COST_ALLOCATION_CONSTANTS.DEFAULT_CURRENCY_CODE;
const DECIMAL_PLACES = COST_ALLOCATION_CONSTANTS.DECIMAL_PLACES;
const MIN_SEARCH_LENGTH = COST_ALLOCATION_CONSTANTS.MIN_SEARCH_LENGTH;
const SEARCH_DELAY_MS = COST_ALLOCATION_CONSTANTS.SEARCH_DELAY_MS;
const { useCallback: useCallback$b, useEffect: useEffect$9, useRef: useRef$8 } = await importShared("react");
const useAllocationSync = ({
  index,
  totalAmount,
  setValue,
  trigger
}) => {
  const isEditingAmountRef = useRef$8(false);
  const isEditingPercentageRef = useRef$8(false);
  const setAmountEditing = useCallback$b((editing) => {
    isEditingAmountRef.current = editing;
  }, []);
  const setPercentageEditing = useCallback$b((editing) => {
    isEditingPercentageRef.current = editing;
  }, []);
  const syncPercentageFromAmount = useCallback$b(
    (amount) => {
      if (isEditingPercentageRef.current) return;
      if (totalAmount === 0 || !isFinite(amount) || isNaN(amount) || amount < 0) return;
      const rawPercentage = amount / totalAmount * 100;
      const roundedPercentage = parseFloat(rawPercentage.toFixed(DECIMAL_PLACES));
      setValue(`costAllocations.${index}.percentage`, roundedPercentage, {
        shouldValidate: false,
        shouldDirty: true
      });
      trigger([
        `costAllocations.${index}.percentage`,
        `costAllocations.${index}.amount`,
        "costAllocations"
      ]);
    },
    [index, totalAmount, setValue, trigger]
  );
  const syncAmountFromPercentage = useCallback$b(
    (percentage) => {
      if (isEditingAmountRef.current) return;
      if (totalAmount === 0 || !isFinite(percentage) || isNaN(percentage)) return;
      const rawAmount = totalAmount * percentage / 100;
      const roundedAmount = parseFloat(rawAmount.toFixed(DECIMAL_PLACES));
      setValue(`costAllocations.${index}.amount`, roundedAmount, {
        shouldValidate: false,
        shouldDirty: true
      });
      trigger([
        `costAllocations.${index}.amount`,
        `costAllocations.${index}.percentage`,
        "costAllocations"
      ]);
    },
    [index, totalAmount, setValue, trigger]
  );
  useEffect$9(() => {
    return () => {
      isEditingAmountRef.current = false;
      isEditingPercentageRef.current = false;
    };
  }, []);
  return {
    syncPercentageFromAmount,
    syncAmountFromPercentage,
    setAmountEditing,
    setPercentageEditing
  };
};
const areAllocationsEqual = (allocations, totalAmount) => {
  if (allocations.length <= 1 || totalAmount === 0) return false;
  const expectedAmount = totalAmount / allocations.length;
  const expectedPercentage = 100 / allocations.length;
  return allocations.every((allocation, index) => {
    const isLastItem = index === allocations.length - 1;
    if (isLastItem) {
      const sumOfOthers = allocations.slice(0, -1).reduce((sum, a2) => sum + a2.amount, 0);
      const expectedLastAmount = totalAmount - sumOfOthers;
      return Math.abs(allocation.amount - expectedLastAmount) < COST_ALLOCATION_TOLERANCE;
    }
    return Math.abs(allocation.amount - expectedAmount) < COST_ALLOCATION_TOLERANCE && Math.abs(allocation.percentage - expectedPercentage) < COST_ALLOCATION_TOLERANCE;
  });
};
const calculateEqualDistribution = (allocations, totalAmount) => {
  if (allocations.length === 0 || totalAmount === 0) return allocations;
  const count = allocations.length;
  const equalAmount = totalAmount / count;
  const equalPercentage = 100 / count;
  return allocations.map((allocation, index) => {
    const isLastItem = index === count - 1;
    if (isLastItem) {
      const sumOfOthers = allocations.slice(0, -1).reduce((sum) => sum + equalAmount, 0);
      const lastAmount = totalAmount - sumOfOthers;
      const lastPercentage = lastAmount / totalAmount * 100;
      return {
        ...allocation,
        amount: parseFloat(lastAmount.toFixed(DECIMAL_PLACES)),
        percentage: parseFloat(lastPercentage.toFixed(DECIMAL_PLACES))
      };
    }
    return {
      ...allocation,
      amount: parseFloat(equalAmount.toFixed(DECIMAL_PLACES)),
      percentage: parseFloat(equalPercentage.toFixed(DECIMAL_PLACES))
    };
  });
};
const recalculatePercentages = (allocations, totalAmount) => {
  if (totalAmount === 0) return allocations;
  return allocations.map((allocation) => {
    const newPercentage = allocation.amount / totalAmount * 100;
    return {
      ...allocation,
      percentage: parseFloat(newPercentage.toFixed(DECIMAL_PLACES))
    };
  });
};
const { useCallback: useCallback$a, useEffect: useEffect$8, useMemo: useMemo$5 } = await importShared("react");
const useEqualSplit = ({
  allocations,
  isEqualSplit,
  setValue,
  getValues,
  totalAmount
}) => {
  const canEnableEqualSplit = useMemo$5(() => {
    return allocations.length > 1 && totalAmount > 0;
  }, [allocations.length, totalAmount]);
  const isCurrentlyEqual = useMemo$5(() => {
    return areAllocationsEqual(allocations, totalAmount);
  }, [allocations, totalAmount]);
  const distributeEqually = useCallback$a(() => {
    const currentAllocations = getValues(ExpenseFormField.CostAllocations) || [];
    const currentTotalAmount = parseFloat(getValues(ExpenseFormField.TotalAmount) || "0");
    if (currentAllocations.length <= 1 || currentTotalAmount <= 0) return;
    const distributedAllocations = calculateEqualDistribution(currentAllocations, currentTotalAmount);
    setValue(ExpenseFormField.CostAllocations, distributedAllocations, {
      shouldValidate: true,
      shouldDirty: true
    });
    setValue(ExpenseFormField.IsEqualSplit, true, {
      shouldValidate: false,
      shouldDirty: true
    });
  }, [getValues, setValue]);
  const toggleEqualSplit = useCallback$a(() => {
    if (!canEnableEqualSplit) return;
    if (isEqualSplit) {
      setValue(ExpenseFormField.IsEqualSplit, false, {
        shouldValidate: false,
        shouldDirty: true
      });
    } else {
      distributeEqually();
    }
  }, [isEqualSplit, canEnableEqualSplit, distributeEqually, setValue]);
  const shouldDisableEqualSplit = useMemo$5(() => {
    if (!isEqualSplit) return false;
    return !canEnableEqualSplit || !isCurrentlyEqual;
  }, [isEqualSplit, canEnableEqualSplit, isCurrentlyEqual]);
  useEffect$8(() => {
    if (shouldDisableEqualSplit) {
      setValue(ExpenseFormField.IsEqualSplit, false, {
        shouldValidate: false,
        shouldDirty: false
      });
    }
  }, [shouldDisableEqualSplit, setValue]);
  return {
    canEnableEqualSplit,
    isCurrentlyEqual,
    toggleEqualSplit,
    distributeEqually
  };
};
const { useEffect: useEffect$7, useRef: useRef$7 } = await importShared("react");
const useTotalAmountSync = ({
  totalAmount,
  setValue,
  getValues
}) => {
  const prevTotalAmountRef = useRef$7(totalAmount);
  const setValueRef = useRef$7(setValue);
  const getValuesRef = useRef$7(getValues);
  useEffect$7(() => {
    setValueRef.current = setValue;
    getValuesRef.current = getValues;
  }, [setValue, getValues]);
  useEffect$7(() => {
    const totalAmountChanged = prevTotalAmountRef.current !== totalAmount;
    prevTotalAmountRef.current = totalAmount;
    if (!totalAmountChanged || totalAmount <= 0) {
      return;
    }
    const currentAllocations = getValuesRef.current(ExpenseFormField.CostAllocations) || [];
    if (currentAllocations.length === 0) {
      return;
    }
    const currentIsEqualSplit = getValuesRef.current(ExpenseFormField.IsEqualSplit) ?? false;
    if (currentIsEqualSplit) {
      setValueRef.current(ExpenseFormField.IsEqualSplit, false, {
        shouldValidate: false,
        shouldDirty: true
      });
    }
    const recalculatedAllocations = recalculatePercentages(currentAllocations, totalAmount);
    setValueRef.current(ExpenseFormField.CostAllocations, recalculatedAllocations, {
      shouldValidate: true,
      shouldDirty: true
    });
  }, [totalAmount]);
};
const getRequiredExpenseFields = () => [
  ExpenseFormField.ExpenseType,
  ExpenseFormField.Vendor,
  ExpenseFormField.ExpenseDate,
  ExpenseFormField.ExpenseLocation,
  ExpenseFormField.PaymentMethod,
  ExpenseFormField.NetAmount,
  ExpenseFormField.TotalAmount,
  ExpenseFormField.BusinessPurpose,
  ExpenseFormField.ExpenseDescription
];
const getDraftSaveableFields = () => [
  ExpenseFormField.ExpenseType,
  ExpenseFormField.Vendor,
  ExpenseFormField.ExpenseDate,
  ExpenseFormField.ExpenseLocation,
  ExpenseFormField.PaymentMethod,
  ExpenseFormField.NetAmount,
  ExpenseFormField.TotalAmount,
  ExpenseFormField.BusinessPurpose,
  ExpenseFormField.ExpenseDescription,
  ExpenseFormField.PersonsEntertained,
  ExpenseFormField.AdditionalComments
];
const mapExpenseToDefaultValues = (initialData) => {
  return {
    [ExpenseFormField.ExpenseType]: (initialData == null ? void 0 : initialData.expenseType) ?? "",
    [ExpenseFormField.Vendor]: (initialData == null ? void 0 : initialData.vendor) ?? "",
    [ExpenseFormField.ExpenseDate]: typeof (initialData == null ? void 0 : initialData.expenseDate) === "string" ? initialData.expenseDate : (initialData == null ? void 0 : initialData.expenseDate) instanceof Date ? initialData.expenseDate.toISOString() : "",
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
    [ExpenseFormField.NetCurrency]: (initialData == null ? void 0 : initialData.netCurrency) ?? { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.TotalCurrency]: (initialData == null ? void 0 : initialData.totalCurrency) ?? { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.CostAllocations]: (initialData == null ? void 0 : initialData.costAllocations) ?? [],
    [ExpenseFormField.IsEqualSplit]: (initialData == null ? void 0 : initialData.isEqualSplit) ?? false
  };
};
const normalizeExpenseFormData = (data) => {
  return {
    ...data,
    [ExpenseFormField.ExpenseDate]: data[ExpenseFormField.ExpenseDate] || (/* @__PURE__ */ new Date()).toISOString(),
    [ExpenseFormField.PersonsEntertained]: data[ExpenseFormField.PersonsEntertained] || "",
    [ExpenseFormField.AdditionalComments]: data[ExpenseFormField.AdditionalComments] || "",
    [ExpenseFormField.ReceiptAttachment]: data[ExpenseFormField.ReceiptAttachment] || void 0,
    [ExpenseFormField.Affidavit]: data[ExpenseFormField.Affidavit] || void 0,
    [ExpenseFormField.IsReceiptUnavailable]: data[ExpenseFormField.IsReceiptUnavailable] ?? false,
    [ExpenseFormField.IsDifferentCurrency]: data[ExpenseFormField.IsDifferentCurrency] ?? false,
    [ExpenseFormField.NetCurrency]: data[ExpenseFormField.NetCurrency] || { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.TotalCurrency]: data[ExpenseFormField.TotalCurrency] || { code: "CAD", locale: "en-CA" },
    [ExpenseFormField.SupportingFiles]: data[ExpenseFormField.SupportingFiles] || [],
    [ExpenseFormField.CostAllocations]: data[ExpenseFormField.CostAllocations] || [],
    [ExpenseFormField.IsEqualSplit]: data[ExpenseFormField.IsEqualSplit] ?? false
  };
};
const isValidFileAttachment = (file) => {
  if (!file) return false;
  if (file.status === "error") return false;
  if (file.errorMessage) return false;
  return true;
};
const fileAttachmentSchema = custom((val) => {
  return isValidFileAttachment(val);
}, {
  message: "Invalid or corrupted file"
});
const validateReceiptRequirement = (data) => {
  var _a, _b;
  const errors = [];
  if (data.isReceiptUnavailable) {
    if (!data.affidavit) {
      errors.push("Affidavit is required when receipt is unavailable");
      return { isValid: false, errors };
    }
    if (!((_a = data.affidavit.justification) == null ? void 0 : _a.trim())) {
      errors.push("Affidavit justification is required");
    }
    if (!((_b = data.affidavit.digitalSignature) == null ? void 0 : _b.trim())) {
      errors.push("Affidavit digital signature is required");
    }
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  if (!data.receiptAttachment) {
    errors.push("Receipt is required unless marked as unavailable");
    return { isValid: false, errors };
  }
  if (!isValidFileAttachment(data.receiptAttachment)) {
    errors.push("Receipt file is invalid or corrupted");
    return { isValid: false, errors };
  }
  return { isValid: true, errors: [] };
};
const isReceiptValid = (data) => {
  return validateReceiptRequirement(data).isValid;
};
const isReceiptValidSimple = (data) => {
  if (data.isReceiptUnavailable) {
    return true;
  }
  if (!data.receiptAttachment) {
    return false;
  }
  return isValidFileAttachment(data.receiptAttachment);
};
string().min(1, "Vendor is required");
const vendorFieldWithMax = string().min(1, "Vendor is required").max(100, "Vendor name is too long");
string().max(100).optional();
string().min(1, "Expense location is required");
const expenseLocationFieldWithMax = string().min(1, "Expense location is required").max(100, "Location is too long");
string().max(100).optional();
const expenseDateField = string().min(1, "Expense date is required");
string().optional();
const expenseTypeField = string().min(1, "Expense type is required");
string().optional();
const paymentMethodField = string().min(1, "Payment method is required");
string().optional();
const amountRegex = /^\d+(\.\d{1,2})?$/;
const netAmountField = string().min(1, "HST/GST amount is required").regex(amountRegex, "Invalid amount format");
const totalAmountField = string().min(1, "Total amount is required").regex(amountRegex, "Invalid amount format");
string().optional();
string().optional();
const currencyObjectSchema = object({
  code: string(),
  locale: string()
});
const isDifferentCurrencyField = boolean().optional();
const netCurrencyField = currencyObjectSchema.optional();
const totalCurrencyField = currencyObjectSchema.optional();
const businessPurposeField = string().min(1, "Business purpose is required");
string().optional();
const expenseDescriptionField = string().min(1, "Expense description is required").max(500, "Description is too long");
string().max(500).optional();
const personsEntertainedField = string().optional();
const additionalCommentsField = string().max(500, "Comments are too long").optional();
const receiptAttachmentField = custom().optional().nullable();
const isReceiptUnavailableField = boolean().optional();
const affidavitSchema = object({
  justification: string().min(1, "Justification is required").max(150, "Maximum 150 characters allowed"),
  digitalSignature: string().min(1, "Digital signature is required").max(3, "Maximum 3 initials allowed").regex(/^[A-Z]{1,3}$/, "Must be 1-3 uppercase letters").refine((val) => val.length >= 1 && val.length <= 3, {
    message: "Digital signature must be 1-3 initials"
  })
});
const affidavitField = affidavitSchema.optional().nullable();
const supportingFilesField = array(fileAttachmentSchema).max(3, "Maximum 3 supporting files allowed").optional();
const expenseDetailsSchema = object({
  expenseType: expenseTypeField,
  vendor: vendorFieldWithMax,
  expenseDate: expenseDateField,
  expenseLocation: expenseLocationFieldWithMax,
  paymentMethod: paymentMethodField,
  isDifferentCurrency: isDifferentCurrencyField,
  netCurrency: netCurrencyField,
  totalCurrency: totalCurrencyField,
  netAmount: netAmountField,
  totalAmount: totalAmountField
});
const expenseJustificationSchema = object({
  businessPurpose: businessPurposeField,
  expenseDescription: expenseDescriptionField,
  personsEntertained: personsEntertainedField
});
var ECostAllocation = /* @__PURE__ */ ((ECostAllocation2) => {
  ECostAllocation2["Project"] = "project";
  ECostAllocation2["Admin"] = "admin";
  ECostAllocation2["Team"] = "team";
  ECostAllocation2["Rep"] = "rep";
  return ECostAllocation2;
})(ECostAllocation || {});
const CostAllocationValidationRules = {
  /**
   * Validates that the sum of all allocation amounts equals the total amount (within tolerance).
   */
  isSumValid(allocations, totalAmount) {
    if (!allocations || allocations.length === 0) {
      return true;
    }
    const allocationsSum = allocations.reduce((sum, allocation) => sum + allocation.amount, 0);
    return Math.abs(allocationsSum - totalAmount) <= COST_ALLOCATION_TOLERANCE;
  },
  /**
   * Validates that the sum of all allocation percentages equals 100% (within tolerance).
   */
  isPercentageValid(allocations) {
    if (!allocations || allocations.length === 0) {
      return true;
    }
    const totalPercentage = allocations.reduce((sum, allocation) => sum + allocation.percentage, 0);
    return Math.abs(totalPercentage - 100) <= COST_ALLOCATION_TOLERANCE;
  },
  /**
   * Validates that individual allocation amount doesn't exceed total amount.
   */
  isAmountWithinLimit(amount, totalAmount) {
    return amount <= totalAmount;
  },
  /**
   * Validates that percentage is within valid range (0-100).
   */
  isPercentageWithinRange(percentage) {
    return percentage >= 0 && percentage <= 100;
  },
  /**
   * Gets error message for sum validation failure.
   */
  getSumErrorMessage(allocationsSum, totalAmount) {
    return `Total allocations (${allocationsSum.toFixed(2)}) must equal total amount (${totalAmount.toFixed(2)})`;
  },
  /**
   * Gets error message for percentage validation failure.
   */
  getPercentageErrorMessage() {
    return "Total allocation must equal 100%";
  },
  /**
   * Gets error message for amount exceeding limit.
   */
  getAmountExceedsErrorMessage(totalAmount) {
    return `Exceeds ${totalAmount.toFixed(2)}`;
  },
  /**
   * Gets error message for invalid percentage range.
   */
  getPercentageRangeErrorMessage() {
    return "Exceeds 100%";
  }
};
const costAllocationTypeSchema = custom(
  (val) => Object.values(ECostAllocation).includes(val),
  { message: "Invalid cost allocation type" }
);
const costAllocationItemSchema = object({
  id: string(),
  name: string().min(1, "Name is required"),
  percentage: number().min(0, "Min 0"),
  amount: number().min(0, "Amount must be at least 0"),
  type: costAllocationTypeSchema,
  entityData: unknown().optional()
});
const costAllocationSchema = object({
  costAllocations: array(costAllocationItemSchema).optional(),
  isEqualSplit: boolean().optional().default(false)
});
const validateCostAllocationWithTotal = (data, ctx) => {
  if (!data.costAllocations || data.costAllocations.length === 0) return;
  const allocations = data.costAllocations;
  const totalAmount = parseFloat(data.totalAmount || "0");
  allocations.forEach((allocation, index) => {
    if (allocation.percentage > 100) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getPercentageRangeErrorMessage(),
        path: ["costAllocations", index, "percentage"]
      });
    }
    if (totalAmount > 0 && allocation.amount > totalAmount) {
      ctx.addIssue({
        code: "custom",
        message: CostAllocationValidationRules.getAmountExceedsErrorMessage(totalAmount),
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
  if (totalAmount > 0 && !CostAllocationValidationRules.isSumValid(allocations, totalAmount)) {
    const allocationsSum = allocations.reduce((sum, a2) => sum + a2.amount, 0);
    ctx.addIssue({
      code: "custom",
      message: CostAllocationValidationRules.getSumErrorMessage(allocationsSum, totalAmount),
      path: ["costAllocations"]
    });
  }
};
const additionalCommentsSchema = object({
  additionalComments: additionalCommentsField
});
const basicDetailsSchema = object({
  vendor: vendorFieldWithMax,
  expenseLocation: expenseLocationFieldWithMax
});
const receiptSchema = object({
  receiptAttachment: receiptAttachmentField,
  isReceiptUnavailable: isReceiptUnavailableField,
  affidavit: affidavitField
}).refine((data) => {
  if (data.isReceiptUnavailable) {
    return data.affidavit !== null && data.affidavit !== void 0 && data.affidavit.justification.length > 0 && data.affidavit.digitalSignature.length > 0;
  }
  if (!data.isReceiptUnavailable) {
    return data.receiptAttachment !== null && data.receiptAttachment !== void 0;
  }
  return true;
}, {
  message: ((data) => (data == null ? void 0 : data.isReceiptUnavailable) ? "Affidavit is required when receipt is unavailable" : "Receipt is required unless marked as unavailable")(),
  path: ["receiptAttachment"]
}).refine((data) => {
  if (data.receiptAttachment && !data.isReceiptUnavailable) {
    return isValidFileAttachment(data.receiptAttachment);
  }
  return true;
}, {
  message: "Receipt file is invalid or corrupted",
  path: ["receiptAttachment"]
});
const receiptWithSupportingFilesSchema = receiptSchema.safeExtend({
  supportingFiles: supportingFilesField
});
const fullExpenseFormSchema = receiptWithSupportingFilesSchema.safeExtend(expenseDetailsSchema.shape).safeExtend(expenseJustificationSchema.shape).safeExtend(costAllocationSchema.shape).safeExtend(additionalCommentsSchema.shape).refine((data) => {
  const net = parseFloat(data.netAmount || "0");
  const total = parseFloat(data.totalAmount || "0");
  return total >= net;
}, {
  message: "Total amount must be greater than or equal to HST/GST amount",
  path: [ExpenseFormField.TotalAmount]
}).superRefine((data, ctx) => {
  validateCostAllocationWithTotal(data, ctx);
});
function hasFieldValue(value) {
  if (value === null || value === void 0) {
    return false;
  }
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  if (typeof value === "number") {
    return !isNaN(value);
  }
  if (typeof value === "boolean") {
    return true;
  }
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length > 0;
  }
  return false;
}
function areFieldsFilled(data, fields) {
  return fields.every((field) => {
    const value = data[field];
    return hasFieldValue(value);
  });
}
function hasAnyFieldValue(data, fields) {
  return fields.some((field) => {
    const value = data[field];
    return hasFieldValue(value);
  });
}
function createRequiredFieldsChecker(requiredFields, additionalCheck) {
  return (data) => {
    const fieldsOk = areFieldsFilled(data, [...requiredFields]);
    if (!fieldsOk) {
      return false;
    }
    if (additionalCheck) {
      return additionalCheck(data);
    }
    return true;
  };
}
function createDraftSaveChecker(draftFields, additionalCheck) {
  return (data) => {
    const hasTextFields = hasAnyFieldValue(data, [...draftFields]);
    if (hasTextFields) {
      return true;
    }
    if (additionalCheck) {
      return additionalCheck(data);
    }
    return false;
  };
}
const defaultGetValidationErrors = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    return result.error.issues.map((issue) => issue.message);
  }
  return [];
};
const defaultCanSaveDraft = (data) => {
  return Object.values(data).some((value) => hasFieldValue(value));
};
const defaultAreRequiredFieldsFilled = (data) => {
  return Object.values(data).some((value) => hasFieldValue(value));
};
const createValidationStrategy = (schema, options) => {
  return {
    schema,
    validateForSubmission: (data) => schema.safeParse(data),
    validateForDraft: options == null ? void 0 : options.validateForDraft,
    areRequiredFieldsFilled: (options == null ? void 0 : options.areRequiredFieldsFilled) || ((data) => defaultAreRequiredFieldsFilled(data)),
    getValidationErrors: (options == null ? void 0 : options.getValidationErrors) || ((data) => defaultGetValidationErrors(schema, data)),
    canSaveDraft: (options == null ? void 0 : options.canSaveDraft) || ((data) => defaultCanSaveDraft(data)),
    fieldsForRequiredCheck: options == null ? void 0 : options.fieldsForRequiredCheck,
    fieldsForDraftCheck: options == null ? void 0 : options.fieldsForDraftCheck
  };
};
const expenseDraftSchema = object({
  [ExpenseFormField.ReceiptAttachment]: custom().optional().nullable(),
  [ExpenseFormField.IsReceiptUnavailable]: boolean().default(false),
  [ExpenseFormField.Affidavit]: object({
    justification: string().max(150).optional(),
    digitalSignature: string().max(3).optional()
  }).optional().nullable(),
  [ExpenseFormField.SupportingFiles]: array(custom()).max(3, "Maximum 3 supporting files allowed").optional().default([]),
  [ExpenseFormField.ExpenseType]: string().optional(),
  [ExpenseFormField.Vendor]: string().max(100).optional(),
  [ExpenseFormField.ExpenseDate]: string().optional(),
  [ExpenseFormField.ExpenseLocation]: string().max(100).optional(),
  [ExpenseFormField.PaymentMethod]: string().optional(),
  [ExpenseFormField.IsDifferentCurrency]: boolean().optional(),
  [ExpenseFormField.NetCurrency]: object({
    code: string(),
    locale: string()
  }).optional(),
  [ExpenseFormField.TotalCurrency]: object({
    code: string(),
    locale: string()
  }).optional(),
  [ExpenseFormField.NetAmount]: string().optional(),
  [ExpenseFormField.TotalAmount]: string().optional(),
  [ExpenseFormField.BusinessPurpose]: string().optional(),
  [ExpenseFormField.ExpenseDescription]: string().max(500).optional(),
  [ExpenseFormField.PersonsEntertained]: string().optional(),
  [ExpenseFormField.AdditionalComments]: string().max(500).optional(),
  [ExpenseFormField.CostAllocations]: array(object({
    id: string(),
    name: string(),
    percentage: number(),
    amount: number(),
    type: costAllocationTypeSchema,
    entityData: unknown().optional()
  })).optional()
});
const validateExpenseForSubmission = (data) => {
  return fullExpenseFormSchema.safeParse(data);
};
const validateExpenseForDraft = (data) => {
  return expenseDraftSchema.safeParse(data);
};
const areRequiredFieldsFilled = createRequiredFieldsChecker(
  getRequiredExpenseFields(),
  (data) => {
    const receiptValid = isReceiptValid({
      receiptAttachment: data[ExpenseFormField.ReceiptAttachment],
      isReceiptUnavailable: data[ExpenseFormField.IsReceiptUnavailable] ?? false,
      affidavit: data[ExpenseFormField.Affidavit]
    });
    if (!receiptValid) {
      return false;
    }
    const supportingFiles = data[ExpenseFormField.SupportingFiles];
    if (supportingFiles && supportingFiles.length > 0) {
      return !supportingFiles.some((file) => !isValidFileAttachment(file));
    }
    return true;
  }
);
const getFormValidationErrors = (data) => {
  const result = validateExpenseForSubmission(data);
  if (!result.success) {
    return result.error.issues.map((issue) => issue.message);
  }
  return [];
};
const canSaveDraft = createDraftSaveChecker(
  getDraftSaveableFields(),
  (data) => {
    var _a, _b, _c, _d, _e;
    const hasAffidavitData = !!(((_b = (_a = data[ExpenseFormField.Affidavit]) == null ? void 0 : _a.justification) == null ? void 0 : _b.trim()) || ((_d = (_c = data[ExpenseFormField.Affidavit]) == null ? void 0 : _c.digitalSignature) == null ? void 0 : _d.trim()));
    const hasFiles = !!(data[ExpenseFormField.ReceiptAttachment] || (((_e = data[ExpenseFormField.SupportingFiles]) == null ? void 0 : _e.length) ?? 0) > 0);
    return hasFiles || hasAffidavitData;
  }
);
const FIELDS_FOR_REQUIRED_CHECK = [
  ...getRequiredExpenseFields(),
  ExpenseFormField.ReceiptAttachment,
  ExpenseFormField.IsReceiptUnavailable,
  ExpenseFormField.Affidavit,
  ExpenseFormField.SupportingFiles
];
const FIELDS_FOR_DRAFT_CHECK = [
  ...getDraftSaveableFields(),
  ExpenseFormField.ReceiptAttachment,
  ExpenseFormField.IsReceiptUnavailable,
  ExpenseFormField.Affidavit,
  ExpenseFormField.SupportingFiles
];
createValidationStrategy(
  fullExpenseFormSchema,
  {
    validateForDraft: validateExpenseForDraft,
    areRequiredFieldsFilled,
    getValidationErrors: getFormValidationErrors,
    canSaveDraft,
    fieldsForRequiredCheck: FIELDS_FOR_REQUIRED_CHECK,
    fieldsForDraftCheck: FIELDS_FOR_DRAFT_CHECK
  }
);
const { useCallback: useCallback$9, useMemo: useMemo$4 } = await importShared("react");
const useFullExpenseForm = ({
  initialData,
  onSubmit,
  onSaveDraft,
  onDraftSaved,
  isSubmitting = false,
  isDrafting = false,
  draftSaveError = false
}) => {
  const defaultValues = useMemo$4(() => mapExpenseToDefaultValues(initialData), [initialData]);
  const handleSubmitWrapper = useCallback$9(
    async (data) => {
      const normalizedData = normalizeExpenseFormData(data);
      await (onSubmit == null ? void 0 : onSubmit(normalizedData));
    },
    [onSubmit]
  );
  const handleSaveDraftWrapper = useCallback$9(
    async (data) => {
      const normalizedData = normalizeExpenseFormData(data);
      await (onSaveDraft == null ? void 0 : onSaveDraft(normalizedData));
    },
    [onSaveDraft]
  );
  return useBaseExpenseForm(
    {
      schema: fullExpenseFormSchema,
      defaultValues,
      validateForSubmission: validateExpenseForSubmission,
      validateForDraft: validateExpenseForDraft,
      areRequiredFieldsFilled,
      getValidationErrors: getFormValidationErrors,
      canSaveDraft
    },
    {
      onSubmit: handleSubmitWrapper,
      onSaveDraft: handleSaveDraftWrapper,
      onDraftSaved,
      isSubmitting,
      isDrafting,
      draftSaveError
    }
  );
};
var AllowedMimeType = /* @__PURE__ */ ((AllowedMimeType2) => {
  AllowedMimeType2["PNG"] = "image/png";
  AllowedMimeType2["JPEG"] = "image/jpeg";
  AllowedMimeType2["JPG"] = "image/jpg";
  AllowedMimeType2["WEBP"] = "image/webp";
  AllowedMimeType2["HEIC"] = "image/heic";
  AllowedMimeType2["HEIF"] = "image/heif";
  AllowedMimeType2["PDF"] = "application/pdf";
  return AllowedMimeType2;
})(AllowedMimeType || {});
var FilePreviewType = /* @__PURE__ */ ((FilePreviewType2) => {
  FilePreviewType2["IMAGE"] = "image";
  FilePreviewType2["PDF"] = "pdf";
  FilePreviewType2["UNKNOWN"] = "unknown";
  return FilePreviewType2;
})(FilePreviewType || {});
let fileTypeModule = null;
const loadFileTypeModule = async () => {
  if (!fileTypeModule) {
    fileTypeModule = await __vitePreload(() => import("./core-fyjfEstr.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  }
  return fileTypeModule;
};
const validateFileContentEnhanced = async (file) => {
  try {
    const shouldUseFileType = file.type === "image/heic" || file.type === "image/heif" || !file.type || // Windows may not provide MIME type
    file.name.toLowerCase().endsWith(".heic") || file.name.toLowerCase().endsWith(".heif");
    if (shouldUseFileType) {
      try {
        const fileType = await loadFileTypeModule();
        const buffer = await file.slice(0, 4100).arrayBuffer();
        const result = await fileType.fileTypeFromBuffer(new Uint8Array(buffer));
        if (result) {
          const mimeMapping = {
            "image/heic": AllowedMimeType.HEIC,
            "image/heif": AllowedMimeType.HEIF,
            "image/jpeg": AllowedMimeType.JPEG,
            "image/png": AllowedMimeType.PNG,
            "image/webp": AllowedMimeType.WEBP,
            "application/pdf": AllowedMimeType.PDF
          };
          const mappedMime = mimeMapping[result.mime];
          if (mappedMime) {
            return {
              isValid: true,
              actualMimeType: mappedMime
            };
          } else {
            return {
              isValid: false,
              message: `Unsupported file type detected: ${result.mime}`
            };
          }
        } else {
          return {
            isValid: false,
            message: "Unable to verify file type. File may be corrupted or unsupported."
          };
        }
      } catch (error) {
        console.error("file-type validation failed:", error);
        return {
          isValid: false,
          message: "File validation failed. Please try again with a valid file."
        };
      }
    }
    const { validateFileContent: validateFileContent2 } = await __vitePreload(async () => {
      const { validateFileContent: validateFileContent3 } = await Promise.resolve().then(() => securityUtils);
      return { validateFileContent: validateFileContent3 };
    }, true ? void 0 : void 0, import.meta.url);
    return validateFileContent2(file);
  } catch (error) {
    console.error("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
};
const shouldUseEnhancedValidation = (file) => {
  const fileName = file.name.toLowerCase();
  return !file.type || // No MIME type - need enhanced detection
  fileName.endsWith(".heic") || fileName.endsWith(".heif") || file.type === "image/heic" || file.type === "image/heif";
};
const FILE_SIZE_LIMITS = {
  IMAGE_MAX_SIZE_MB: 25,
  PDF_MAX_SIZE_MB: 50,
  IMAGE_MAX_SIZE_BYTES: 25 * 1024 * 1024,
  PDF_MAX_SIZE_BYTES: 50 * 1024 * 1024
};
const MIME_TYPE_CONFIG = /* @__PURE__ */ new Map([
  [AllowedMimeType.PNG, {
    type: FilePreviewType.IMAGE,
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "PNG"
  }],
  [AllowedMimeType.JPEG, {
    type: FilePreviewType.IMAGE,
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "JPEG"
  }],
  [AllowedMimeType.JPG, {
    type: FilePreviewType.IMAGE,
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "JPG"
  }],
  [AllowedMimeType.WEBP, {
    type: FilePreviewType.IMAGE,
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "WebP"
  }],
  [AllowedMimeType.HEIC, {
    type: FilePreviewType.IMAGE,
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "HEIC"
  }],
  [AllowedMimeType.HEIF, {
    type: FilePreviewType.IMAGE,
    maxSizeBytes: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB,
    displayName: "HEIF"
  }],
  [AllowedMimeType.PDF, {
    type: FilePreviewType.PDF,
    maxSizeBytes: FILE_SIZE_LIMITS.PDF_MAX_SIZE_BYTES,
    maxSizeMB: FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB,
    displayName: "PDF"
  }]
]);
({
  allowedMimeTypes: Object.values(AllowedMimeType)
});
const MIME_TO_EXTENSION_MAP = {
  [AllowedMimeType.PNG]: [".png"],
  [AllowedMimeType.JPEG]: [".jpeg"],
  [AllowedMimeType.JPG]: [".jpg"],
  [AllowedMimeType.WEBP]: [".webp"],
  [AllowedMimeType.HEIC]: [".heic"],
  [AllowedMimeType.HEIF]: [".heif"],
  [AllowedMimeType.PDF]: [".pdf"]
};
const generateAcceptAttribute = () => {
  const mimeTypes = Object.values(AllowedMimeType);
  const extensions = mimeTypes.flatMap((mimeType) => MIME_TO_EXTENSION_MAP[mimeType]);
  return [...extensions, ...mimeTypes].join(",");
};
const receiptUploadInstructions = () => `Upload an image (max. ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB) or a PDF (max. ${FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB}MB)`;
const getSupportedFormatsText = () => {
  const imageFormats = ["PNG", "JPG/JPEG", "HEIC/HEIF", "WebP"];
  const pdfFormat = "PDF";
  return `Upload ${imageFormats.join(", ")} (max. ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB) or ${pdfFormat} (max. ${FILE_SIZE_LIMITS.PDF_MAX_SIZE_MB}MB)`;
};
({
  SUPPORTED_FORMATS: Object.values(AllowedMimeType),
  MAX_FILE_SIZE_PDF: MIME_TYPE_CONFIG.get(AllowedMimeType.PDF).maxSizeBytes,
  MAX_FILE_SIZE_IMAGE: MIME_TYPE_CONFIG.get(AllowedMimeType.PNG).maxSizeBytes
});
const { useCallback: useCallback$8, useEffect: useEffect$6, useMemo: useMemo$3, useRef: useRef$6 } = await importShared("react");
const { useCallback: useCallback$7, useMemo: useMemo$2 } = await importShared("react");
const useExpenseDetailsHandlers = (setValue) => {
  const handleCurrencyModeChange = useCallback$7(
    (isDifferent) => {
      setValue("isDifferentCurrency", isDifferent, { shouldValidate: true });
    },
    [setValue]
  );
  const handleNetCurrencyChange = useCallback$7(
    (currency) => {
      setValue("netCurrency", currency, { shouldValidate: true });
    },
    [setValue]
  );
  const handleTotalCurrencyChange = useCallback$7(
    (currency) => {
      setValue("totalCurrency", currency, { shouldValidate: true });
    },
    [setValue]
  );
  return useMemo$2(() => ({
    onCurrencyModeChange: handleCurrencyModeChange,
    onNetCurrencyChange: handleNetCurrencyChange,
    onTotalCurrencyChange: handleTotalCurrencyChange
  }), [handleCurrencyModeChange, handleNetCurrencyChange, handleTotalCurrencyChange]);
};
const { useCallback: useCallback$6, useImperativeHandle, useRef: useRef$5, useEffect: useEffect$5 } = await importShared("react");
const useFormImperativeHandle = ({
  ref,
  form,
  onFormErrors
}) => {
  const formRef = useRef$5(form);
  const onFormErrorsRef = useRef$5(onFormErrors);
  useEffect$5(() => {
    formRef.current = form;
    onFormErrorsRef.current = onFormErrors;
  });
  const handleFormSubmit = useCallback$6(async () => {
    var _a;
    const isValid = await formRef.current.validateForm();
    if (isValid) {
      await formRef.current.handleSubmit();
    } else {
      (_a = onFormErrorsRef.current) == null ? void 0 : _a.call(onFormErrorsRef, formRef.current.validationErrors);
    }
  }, []);
  const handleDraftSave = useCallback$6(async () => {
    await formRef.current.handleDraftSave();
  }, []);
  useImperativeHandle(
    ref,
    () => ({
      submitForm: handleFormSubmit,
      saveDraft: handleDraftSave,
      getFormData: () => formRef.current.getValues(),
      validateForm: () => ({
        isValid: formRef.current.canSubmit,
        errors: formRef.current.validationErrors
      }),
      get submitButtonState() {
        return formRef.current.getSubmitButtonState();
      },
      get saveDraftButtonState() {
        return formRef.current.getSaveDraftButtonState();
      }
    }),
    [handleFormSubmit, handleDraftSave]
  );
  return {
    handleFormSubmit,
    handleDraftSave
  };
};
const { useEffect: useEffect$4, useRef: useRef$4 } = await importShared("react");
const useFormButtonStateSync = ({
  form,
  formState,
  isSubmitting,
  isDrafting,
  onButtonStateChange
}) => {
  const formRef = useRef$4(form);
  const onButtonStateChangeRef = useRef$4(onButtonStateChange);
  useEffect$4(() => {
    formRef.current = form;
    onButtonStateChangeRef.current = onButtonStateChange;
  });
  useEffect$4(() => {
    if (!onButtonStateChangeRef.current) return;
    const submitState = formRef.current.getSubmitButtonState();
    const draftState = formRef.current.getSaveDraftButtonState();
    onButtonStateChangeRef.current(submitState, draftState);
  }, [
    formState.isDirty,
    formState.isValid,
    form.requiredFieldsFilled,
    form.hasErrors,
    form.canSave,
    isSubmitting,
    isDrafting
  ]);
};
const { useCallback: useCallback$5 } = await importShared("react");
const useFileHandlers = (options) => {
  const {
    setValue,
    receiptAttachmentField: receiptAttachmentField2,
    supportingFilesField: supportingFilesField2,
    onReceiptUploaded,
    onSupportingFilesChanged
  } = options;
  const handleReceiptChange = useCallback$5(
    (attachment) => {
      setValue(
        receiptAttachmentField2,
        attachment || null,
        { shouldValidate: true, shouldDirty: false }
      );
      if (attachment) {
        onReceiptUploaded == null ? void 0 : onReceiptUploaded(attachment);
      }
    },
    [setValue, receiptAttachmentField2, onReceiptUploaded]
  );
  const handleSupportingFilesChange = useCallback$5(
    (attachments) => {
      if (supportingFilesField2) {
        setValue(
          supportingFilesField2,
          attachments,
          { shouldValidate: true, shouldDirty: false }
        );
        onSupportingFilesChanged == null ? void 0 : onSupportingFilesChanged(attachments);
      }
    },
    [setValue, supportingFilesField2, onSupportingFilesChanged]
  );
  return {
    handleReceiptChange,
    handleSupportingFilesChange
  };
};
function debounce(func, delay) {
  let timeoutId = null;
  return function debounced(...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
}
const { useCallback: useCallback$4, useEffect: useEffect$3, useRef: useRef$3 } = await importShared("react");
function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef$3(callback);
  const debouncedRef = useRef$3(void 0);
  useEffect$3(() => {
    callbackRef.current = callback;
  }, [callback]);
  const debouncedCallback = useCallback$4(
    (...args) => {
      if (!debouncedRef.current) {
        debouncedRef.current = debounce(
          (...debouncedArgs) => callbackRef.current(...debouncedArgs),
          delay
        );
      }
      debouncedRef.current(...args);
    },
    [delay]
  );
  useEffect$3(() => {
    return () => {
      debouncedRef.current = void 0;
    };
  }, []);
  return debouncedCallback;
}
const { useCallback: useCallback$3, useRef: useRef$2 } = await importShared("react");
const DEFAULT_DEBOUNCE_MS = 500;
const useAutoSave = (options) => {
  const { draftId, isDrafting, onSaveDraft, getFormValues, debounceMs = DEFAULT_DEBOUNCE_MS } = options;
  const onSaveDraftRef = useRef$2(onSaveDraft);
  onSaveDraftRef.current = onSaveDraft;
  const performAutoSave = useCallback$3(() => {
    if (!draftId && onSaveDraftRef.current && !isDrafting) {
      const currentData = getFormValues();
      onSaveDraftRef.current(currentData);
    }
  }, [draftId, isDrafting, getFormValues]);
  const triggerAutoSave = useDebouncedCallback(performAutoSave, debounceMs);
  return { triggerAutoSave };
};
const { useEffect: useEffect$2 } = await importShared("react");
const useReceiptCheckboxEffects = (options) => {
  const {
    watch,
    setValue,
    receiptAttachmentField: receiptAttachmentField2,
    isReceiptUnavailableField: isReceiptUnavailableField2,
    affidavitField: affidavitField2
  } = options;
  const isReceiptUnavailable = watch(isReceiptUnavailableField2);
  const receiptAttachment = watch(receiptAttachmentField2);
  useEffect$2(() => {
    if (isReceiptUnavailable) {
      setValue(
        receiptAttachmentField2,
        null,
        { shouldValidate: false, shouldDirty: false }
      );
      if (affidavitField2) {
        setValue(
          affidavitField2,
          { justification: "", digitalSignature: "" },
          { shouldValidate: false }
        );
      }
    } else if (affidavitField2) {
      setValue(
        affidavitField2,
        null,
        { shouldValidate: false }
      );
    }
  }, [isReceiptUnavailable, setValue, receiptAttachmentField2, affidavitField2]);
  useEffect$2(() => {
    if (receiptAttachment && isReceiptUnavailable) {
      setValue(
        isReceiptUnavailableField2,
        false,
        { shouldValidate: false }
      );
      if (affidavitField2) {
        setValue(
          affidavitField2,
          null,
          { shouldValidate: false }
        );
      }
    }
  }, [receiptAttachment, isReceiptUnavailable, setValue, isReceiptUnavailableField2, affidavitField2]);
};
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
const minimalExpenseValidationStrategy = createValidationStrategy(
  minimalExpenseSchema,
  {
    validateForDraft: (data) => minimalExpenseDraftSchema.safeParse(data),
    areRequiredFieldsFilled: createRequiredFieldsChecker(
      ["vendor", "expenseLocation"],
      (data) => isReceiptValidSimple({
        receiptAttachment: data.receiptAttachment,
        isReceiptUnavailable: data.isReceiptUnavailable ?? false
      })
    ),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseLocation"],
      (data) => !!data.receiptAttachment
    )
  }
);
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
const affidavitExpenseValidationStrategy = createValidationStrategy(
  affidavitExpenseSchema,
  {
    validateForDraft: (data) => affidavitExpenseDraftSchema.safeParse(data),
    areRequiredFieldsFilled: createRequiredFieldsChecker(
      ["vendor", "expenseDate"],
      (data) => {
        var _a, _b;
        return !!(((_a = data.affidavit) == null ? void 0 : _a.justification) && ((_b = data.affidavit) == null ? void 0 : _b.digitalSignature));
      }
    ),
    canSaveDraft: createDraftSaveChecker(
      ["vendor", "expenseDate"],
      (data) => {
        var _a, _b;
        return !!(((_a = data.affidavit) == null ? void 0 : _a.justification) || ((_b = data.affidavit) == null ? void 0 : _b.digitalSignature));
      }
    )
  }
);
await importShared("react");
const ConfirmDialog = ({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false,
  variant = "error",
  confirmButtonClassName = "",
  cancelButtonClassName = ""
}) => {
  const handleConfirm = async () => {
    await onConfirm();
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onOpenChange(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ta, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(La, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Oa, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ba, { className: "text-base font-semibold text-exp-neutral-600", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { className: "text-sm font-normal text-exp-grey-600", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Aa, { className: "gap-3 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ge,
        {
          variant: "soft",
          onClick: handleCancel,
          disabled: isLoading,
          className: `min-w-20 ${cancelButtonClassName}`,
          children: cancelLabel
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ge,
        {
          variant,
          onClick: handleConfirm,
          disabled: isLoading,
          className: `min-w-20 ${confirmButtonClassName}`,
          children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-5" }) : confirmLabel
        }
      )
    ] })
  ] }) });
};
const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /<iframe/gi,
  /<embed/gi,
  /<object/gi,
  /data:text\/html/gi
];
const MAX_FILENAME_LENGTH = 255;
const sanitizeFileName = (fileName) => {
  if (!fileName || typeof fileName !== "string") {
    return "unnamed_file";
  }
  let sanitized = fileName.trim();
  sanitized = sanitized.replace(/\.\./g, "");
  sanitized = sanitized.replace(/[/\\]/g, "_");
  sanitized = sanitized.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
  sanitized = sanitized.replace(/[<>:"'|?*]/g, "_");
  if (sanitized.length > MAX_FILENAME_LENGTH) {
    const extension = sanitized.split(".").pop();
    const nameWithoutExt = sanitized.substring(0, sanitized.lastIndexOf("."));
    const maxNameLength = MAX_FILENAME_LENGTH - (extension ? extension.length + 1 : 0);
    sanitized = nameWithoutExt.substring(0, maxNameLength) + (extension ? `.${extension}` : "");
  }
  if (!sanitized || sanitized === "." || sanitized === "..") {
    sanitized = `file_${Date.now()}`;
  }
  return sanitized;
};
const sanitizeUrl = (url) => {
  if (!url || typeof url !== "string") {
    return null;
  }
  const trimmedUrl = url.trim();
  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(trimmedUrl)) {
      console.warn("Potentially dangerous URL detected:", trimmedUrl);
      return null;
    }
  }
  const allowedProtocols = ["http:", "https:", "blob:", "data:"];
  try {
    const urlObj = new URL(trimmedUrl);
    if (!allowedProtocols.includes(urlObj.protocol)) {
      return null;
    }
    if (urlObj.protocol === "data:") {
      const dataUrlPattern = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9+.-]+)(;base64)?,/;
      if (!dataUrlPattern.test(trimmedUrl)) {
        return null;
      }
      const safeMimeTypes = Object.values(AllowedMimeType);
      const mimeTypeMatch = trimmedUrl.match(/^data:([^;,]+)/);
      if (mimeTypeMatch && !safeMimeTypes.includes(mimeTypeMatch[1])) {
        return null;
      }
    }
    return trimmedUrl;
  } catch {
    return null;
  }
};
const validateFileContent = async (file) => {
  var _a;
  const fileSignatures = [
    {
      mimeTypes: [AllowedMimeType.PNG],
      signatures: [new Uint8Array([137, 80, 78, 71])],
      description: "PNG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.JPEG, AllowedMimeType.JPG],
      signatures: [
        new Uint8Array([255, 216, 255])
      ],
      description: "JPEG image signature"
    },
    {
      mimeTypes: [AllowedMimeType.PDF],
      signatures: [new Uint8Array([37, 80, 68, 70])],
      description: "PDF document signature"
    },
    {
      mimeTypes: [AllowedMimeType.WEBP],
      signatures: [
        new Uint8Array([82, 73, 70, 70])
      ],
      description: "WebP image signature (RIFF container)"
    }
  ];
  try {
    const headerSize = 512;
    const arrayBuffer = await file.slice(0, headerSize).arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let detectedType = null;
    for (const check of fileSignatures) {
      const matches = check.signatures.some((signature) => {
        if (bytes.length < signature.length) return false;
        return signature.every((byte, index) => bytes[index] === byte);
      });
      if (matches) {
        detectedType = check.mimeTypes[0];
        break;
      }
    }
    if (detectedType) {
      const maliciousSignatures = [
        [77, 90],
        // MZ (EXE/DLL)
        [127, 69, 76, 70],
        // ELF (Linux executable)
        [202, 254, 186, 190],
        // Mach-O (macOS executable)
        [35, 33],
        // #! (Shell script)
        [60, 63, 112, 104, 112]
      ];
      for (let i = 1; i < Math.min(bytes.length - 4, headerSize - 4); i++) {
        for (const malSig of maliciousSignatures) {
          if (malSig.every((byte, offset) => bytes[i + offset] === byte)) {
            return {
              isValid: false,
              message: "File contains suspicious executable patterns. Possible polyglot attack."
            };
          }
        }
      }
    }
    if (detectedType === AllowedMimeType.WEBP) {
      const webpCheck = new Uint8Array([87, 69, 66, 80]);
      const webpMatches = webpCheck.every((byte, index) => bytes[index + 8] === byte);
      if (!webpMatches) {
        detectedType = null;
      }
    }
    if (detectedType === AllowedMimeType.PDF) {
      const pdfText = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
      const dangerousPatterns = [
        "/JavaScript",
        "/JS",
        "/Launch",
        "/SubmitForm",
        "/ImportData"
      ];
      if (dangerousPatterns.some((pattern) => pdfText.includes(pattern))) {
        console.warn("PDF contains potentially dangerous features:", pdfText.substring(0, 200));
      }
    }
    if (!detectedType) {
      return {
        isValid: false,
        message: "Unable to verify file type. File content does not match any supported format."
      };
    }
    const expectedTypes = ((_a = fileSignatures.find(
      (s) => s.mimeTypes.includes(detectedType)
    )) == null ? void 0 : _a.mimeTypes) || [];
    if (expectedTypes.includes(file.type)) {
      return { isValid: true, actualMimeType: detectedType };
    }
    return {
      isValid: false,
      actualMimeType: detectedType,
      message: `File type mismatch. File appears to be ${detectedType} but was declared as ${file.type}`
    };
  } catch (error) {
    console.error("Error validating file content:", error);
    return {
      isValid: false,
      message: "Failed to validate file content"
    };
  }
};
const createSafeFileMetadata = (file, response) => {
  var _a;
  return {
    id: response.id || `receipt-${Date.now()}`,
    url: sanitizeUrl(response.url || "") || "",
    blobUrl: response.blobUrl,
    filename: sanitizeFileName(response.fileName || file.name),
    originalName: sanitizeFileName(file.name),
    size: Math.min(response.fileSize || file.size, Number.MAX_SAFE_INTEGER),
    type: ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")) || "unknown",
    mimeType: response.mimeType || file.type,
    uploadedAt: new Date(response.uploadedAt || Date.now()).toISOString(),
    status: "uploaded"
  };
};
const rateLimitMap = /* @__PURE__ */ new Map();
const checkRateLimit = (key, maxRequests = 5, windowMs = 6e4) => {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }
  if (entry.count >= maxRequests) {
    return false;
  }
  entry.count++;
  return true;
};
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 6e4);
const securityUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkRateLimit,
  createSafeFileMetadata,
  sanitizeFileName,
  sanitizeUrl,
  validateFileContent
}, Symbol.toStringTag, { value: "Module" }));
const canBrowserDisplayImage = (mimeType) => {
  const browserSupportedImages = [
    AllowedMimeType.PNG,
    AllowedMimeType.JPEG,
    AllowedMimeType.JPG,
    AllowedMimeType.WEBP
  ];
  return browserSupportedImages.includes(mimeType);
};
const getFilePreviewType = (mimeType) => {
  const config = MIME_TYPE_CONFIG.get(mimeType);
  if ((config == null ? void 0 : config.type) === FilePreviewType.IMAGE) {
    if (canBrowserDisplayImage(mimeType)) {
      return FilePreviewType.IMAGE;
    }
    return FilePreviewType.UNKNOWN;
  }
  if ((config == null ? void 0 : config.type) === FilePreviewType.PDF) {
    return FilePreviewType.PDF;
  }
  return FilePreviewType.UNKNOWN;
};
const isValidMimeType = (mimeType) => {
  return MIME_TYPE_CONFIG.has(mimeType);
};
const validateReceiptFile = (file) => {
  const fileName = file.name.toLowerCase();
  const hasAllowedExtension = [".png", ".jpg", ".jpeg", ".heic", ".heif", ".webp", ".pdf"].some((ext) => fileName.endsWith(ext));
  if (file.type && !isValidMimeType(file.type)) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Received MIME type: ${file.type}`
    };
  }
  if (!file.type && !hasAllowedExtension) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Unknown file type with extension: ${fileName.split(".").pop()}`
    };
  }
  let mimeType = file.type;
  if (!file.type && hasAllowedExtension) {
    if (fileName.endsWith(".heic")) mimeType = AllowedMimeType.HEIC;
    else if (fileName.endsWith(".heif")) mimeType = AllowedMimeType.HEIF;
    else if (fileName.endsWith(".png")) mimeType = AllowedMimeType.PNG;
    else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) mimeType = AllowedMimeType.JPEG;
    else if (fileName.endsWith(".webp")) mimeType = AllowedMimeType.WEBP;
    else if (fileName.endsWith(".pdf")) mimeType = AllowedMimeType.PDF;
  }
  const config = MIME_TYPE_CONFIG.get(mimeType);
  if (!config) {
    return {
      type: "type",
      message: "Unsupported file type: File must be PNG, JPG/JPEG, HEIC/HEIF, WebP or PDF",
      details: `Could not determine file configuration for: ${mimeType}`
    };
  }
  if (file.size > config.maxSizeBytes) {
    return {
      type: "size",
      message: `File size exceeds limit. Max size for ${config.displayName} is ${config.maxSizeMB}MB`,
      details: `File size: ${(file.size / 1024 / 1024).toFixed(1)}MB`
    };
  }
  return null;
};
const renderProjectItem = (item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.data.poNumber }),
      " ",
      item.data.supplier
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
};
const renderAdminItem = (item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.data.poNumber }),
      " ",
      item.data.supplier
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
};
const renderTeamItem = (item) => {
  if (!item.data) return item.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: item.data.number }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: item.data.description })
  ] });
};
const renderAllocationItem = (type, item) => {
  switch (type) {
    case ECostAllocation.Project:
      return renderProjectItem(item);
    case ECostAllocation.Admin:
      return renderAdminItem(item);
    case ECostAllocation.Team:
      return renderTeamItem(item);
    case ECostAllocation.Rep:
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: item.label });
  }
};
const getDisplayLabel = (type, item) => {
  if (!item || !item.data) return void 0;
  switch (type) {
    case ECostAllocation.Project: {
      const data = item.data;
      return `${data.poNumber} ${data.supplier} / ${data.description}`;
    }
    case ECostAllocation.Admin: {
      const data = item.data;
      return `${data.poNumber} ${data.supplier} / ${data.description}`;
    }
    case ECostAllocation.Team: {
      const data = item.data;
      return `${data.number} / ${data.description}`;
    }
    default:
      return void 0;
  }
};
const getProjectDetails = (item) => {
  if (!item || !item.data) return null;
  const data = item.data;
  return {
    projectId: data.projectId,
    projectDescription: data.projectDescription
  };
};
function isApiError(error) {
  return error instanceof Error && "response" in error;
}
function getErrorMessage(error) {
  var _a, _b;
  if (isApiError(error)) {
    return ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}
function calculateExponentialBackoff(retryCount, baseDelay = 1e3, maxDelay = 5e3) {
  const exponentialDelay = baseDelay * Math.pow(2, retryCount);
  return Math.min(exponentialDelay, maxDelay);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const UPLOAD_TIMEOUT = 12e4;
const MAX_RETRIES = 2;
const uploadReceiptFile = async (file, onProgress, retryCount = 0) => {
  var _a, _b, _c;
  const userKey = "global_upload";
  if (!checkRateLimit(userKey, 10, 6e4)) {
    throw new Error("Too many upload attempts. Please wait before trying again.");
  }
  const validationResult = shouldUseEnhancedValidation(file) ? await validateFileContentEnhanced(file) : await validateFileContent(file);
  if (!validationResult.isValid) {
    throw new Error(validationResult.message || "File content does not match the declared type.");
  }
  let fileToUpload = file;
  if (validationResult.actualMimeType && validationResult.actualMimeType !== file.type) {
    fileToUpload = new File([file], file.name, {
      type: validationResult.actualMimeType,
      lastModified: file.lastModified
    });
  }
  const formData = new FormData();
  formData.append("file", fileToUpload);
  formData.append("type", "receipt");
  formData.append("originalName", file.name);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT);
  try {
    const response = await apiClient.post(
      FILE_ENDPOINTS.RECEIPTS_UPLOAD,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        signal: controller.signal,
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) {
            const percentage = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            onProgress({
              loaded: progressEvent.loaded,
              total: progressEvent.total,
              percentage
            });
          }
        }
      }
    );
    clearTimeout(timeoutId);
    const blobUrl = URL.createObjectURL(fileToUpload);
    return {
      ...response.data.data,
      blobUrl
    };
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && (error.name === "CanceledError" || error.code === "ECONNABORTED")) {
      throw new Error("Upload timeout. Please check your connection and try again.");
    }
    if (isApiError(error)) {
      const status = (_a = error.response) == null ? void 0 : _a.status;
      const message = (_c = (_b = error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message;
      switch (status) {
        case 413:
          throw new Error("File size too large. Please choose a smaller file.");
        case 415:
          throw new Error("Unsupported file type. Please upload a PNG, JPG, or PDF file.");
        case 422:
          throw new Error(message || "File validation failed.");
        case 500:
        case 502:
        case 503:
        case 504:
          if (retryCount < MAX_RETRIES) {
            const delay = calculateExponentialBackoff(retryCount);
            await sleep(delay);
            return uploadReceiptFile(file, onProgress, retryCount + 1);
          }
          throw new Error("Server error. Please try again later.");
        case 401:
        case 403:
          throw new Error("Authentication failed. Please log in again.");
        default:
          throw new Error(message || "Upload failed. Please try again.");
      }
    }
    throw new Error(getErrorMessage(error));
  }
};
const deleteReceiptFile = async (receiptId) => {
  var _a, _b;
  try {
    await apiClient.delete(FILE_ENDPOINTS.RECEIPTS_DELETE(receiptId));
  } catch (error) {
    console.error("Failed to delete receipt:", error);
    const message = isApiError(error) ? ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to delete receipt" : getErrorMessage(error);
    throw new Error(message);
  }
};
const PREVIEWABLE_MIME_TYPES = /* @__PURE__ */ new Set([
  AllowedMimeType.PNG,
  AllowedMimeType.JPEG,
  AllowedMimeType.JPG,
  AllowedMimeType.PDF,
  AllowedMimeType.WEBP
]);
const canPreviewFile = (attachment) => {
  return PREVIEWABLE_MIME_TYPES.has(attachment.mimeType);
};
const BLOB_URL_CLEANUP_DELAY = 5e3;
const BLOB_URL_REGISTRY = /* @__PURE__ */ new WeakMap();
const registerBlobUrl = (window2, url) => {
  var _a;
  if (!BLOB_URL_REGISTRY.has(window2)) {
    BLOB_URL_REGISTRY.set(window2, /* @__PURE__ */ new Set());
  }
  (_a = BLOB_URL_REGISTRY.get(window2)) == null ? void 0 : _a.add(url);
};
const cleanupBlobUrl = (url) => {
  try {
    URL.revokeObjectURL(url);
  } catch (error) {
    console.warn("Failed to revoke blob URL:", error);
  }
};
const openFilePreview = async (attachment) => {
  const rawUrl = attachment.blobUrl || attachment.url;
  const previewUrl = sanitizeUrl(rawUrl);
  if (!previewUrl) {
    console.error("Invalid or unsafe URL detected");
    throw new Error("Cannot open file: Invalid URL");
  }
  if (!canPreviewFile(attachment)) {
    const link = document.createElement("a");
    link.href = previewUrl;
    link.download = attachment.originalName;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  if (previewUrl.startsWith("blob:") || previewUrl.startsWith("data:")) {
    const newWindow = window.open(previewUrl, "_blank", "noopener,noreferrer");
    if (newWindow && previewUrl.startsWith("blob:")) {
      registerBlobUrl(newWindow, previewUrl);
    }
    return;
  }
  if (previewUrl.startsWith("https://storage.expensesapp.com/")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT);
      const response = await fetch(previewUrl, {
        signal: controller.signal,
        mode: "cors",
        credentials: "omit"
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const newWindow = window.open(blobUrl, "_blank", "noopener,noreferrer");
      if (newWindow) {
        registerBlobUrl(newWindow, blobUrl);
        newWindow.addEventListener("beforeunload", () => cleanupBlobUrl(blobUrl), { once: true });
        setTimeout(() => cleanupBlobUrl(blobUrl), BLOB_URL_CLEANUP_DELAY);
      } else {
        cleanupBlobUrl(blobUrl);
      }
    } catch (error) {
      console.error("Failed to open file preview:", error);
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    }
    return;
  }
  window.open(previewUrl, "_blank", "noopener,noreferrer");
};
const React = await importShared("react");
const { useCallback: useCallback$2, useEffect: useEffect$1, useRef: useRef$1, useState: useState$2 } = React;
const ReceiptUpload = ({
  onReceiptChange,
  onUploadingChange,
  initialReceipt,
  disabled = false,
  className = ""
}) => {
  const fileInputRef = useRef$1(null);
  const [uploadState, setUploadState] = useState$2({
    attachment: initialReceipt,
    isUploading: false,
    error: void 0,
    dragActive: false
  });
  const [_uploadProgress, setUploadProgress] = useState$2(0);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState$2(false);
  const [isDeleting, setIsDeleting] = useState$2(false);
  const blobUrlsRef = useRef$1(/* @__PURE__ */ new Set());
  useEffect$1(() => {
    if (initialReceipt !== uploadState.attachment) {
      setUploadState((prev) => ({
        ...prev,
        attachment: initialReceipt
      }));
    }
  }, [initialReceipt, uploadState.attachment]);
  useEffect$1(() => {
    return () => {
      blobUrlsRef.current.forEach((url) => {
        try {
          URL.revokeObjectURL(url);
        } catch (error) {
          console.warn("Failed to revoke blob URL on cleanup:", error);
        }
      });
      blobUrlsRef.current.clear();
    };
  }, []);
  const handleError = useCallback$2((error) => {
    setUploadState((prev) => ({
      ...prev,
      error,
      isUploading: false
    }));
  }, []);
  const handleFileUpload = useCallback$2(async (file) => {
    const validationError = validateReceiptFile(file);
    if (validationError) {
      handleError(validationError);
      return;
    }
    setUploadState((prev) => ({
      ...prev,
      error: void 0,
      isUploading: true,
      attachment: void 0
    }));
    onUploadingChange == null ? void 0 : onUploadingChange(true);
    setUploadProgress(0);
    try {
      const uploadResponse = await uploadReceiptFile(file, (progress) => {
        setUploadProgress(progress.percentage);
      });
      const newAttachment = createSafeFileMetadata(file, uploadResponse);
      if (uploadResponse.blobUrl) {
        blobUrlsRef.current.add(uploadResponse.blobUrl);
      }
      setUploadState((prev) => ({
        ...prev,
        attachment: newAttachment,
        isUploading: false,
        error: void 0
      }));
      onUploadingChange == null ? void 0 : onUploadingChange(false);
      onReceiptChange == null ? void 0 : onReceiptChange(newAttachment);
    } catch (error) {
      handleError({
        type: "network",
        message: getErrorMessage(error),
        details: error instanceof Error ? error.toString() : String(error)
      });
      onUploadingChange == null ? void 0 : onUploadingChange(false);
    }
  }, [handleError, onReceiptChange, onUploadingChange]);
  const handleFileSelect = useCallback$2((event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      handleFileUpload(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [handleFileUpload]);
  const handleChooseFileClick = useCallback$2(() => {
    var _a;
    if (disabled || uploadState.isUploading) return;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, [disabled, uploadState.isUploading]);
  const handleDeleteClick = useCallback$2(() => {
    if (!uploadState.attachment || disabled) return;
    setIsDeleteDialogOpen(true);
  }, [uploadState.attachment, disabled]);
  const handleDeleteConfirm = useCallback$2(async () => {
    if (!uploadState.attachment || disabled) return;
    setIsDeleting(true);
    try {
      await deleteReceiptFile(uploadState.attachment.id);
      if (uploadState.attachment.blobUrl) {
        blobUrlsRef.current.delete(uploadState.attachment.blobUrl);
        try {
          URL.revokeObjectURL(uploadState.attachment.blobUrl);
        } catch (error) {
          console.warn("Failed to revoke blob URL:", error);
        }
      }
      setUploadState((prev) => ({
        ...prev,
        attachment: void 0,
        error: void 0
      }));
      onReceiptChange == null ? void 0 : onReceiptChange(void 0);
      setIsDeleteDialogOpen(false);
    } catch (error) {
      handleError({
        type: "network",
        message: "Failed to delete receipt",
        details: getErrorMessage(error)
      });
    } finally {
      setIsDeleting(false);
    }
  }, [uploadState.attachment, disabled, handleError, onReceiptChange]);
  const handleDeleteCancel = useCallback$2(() => {
    setIsDeleteDialogOpen(false);
  }, []);
  const handlePreviewClick = useCallback$2(async () => {
    if (uploadState.attachment) {
      try {
        await openFilePreview(uploadState.attachment);
      } catch (error) {
        console.error("Failed to open preview:", error);
      }
    }
  }, [uploadState.attachment]);
  const handleDragOver = useCallback$2((e) => {
    e.preventDefault();
    if (!disabled && !uploadState.isUploading) {
      setUploadState((prev) => ({ ...prev, dragActive: true }));
    }
  }, [disabled, uploadState.isUploading]);
  const handleDragLeave = useCallback$2((e) => {
    e.preventDefault();
    setUploadState((prev) => ({ ...prev, dragActive: false }));
  }, []);
  const handleDrop = useCallback$2((e) => {
    e.preventDefault();
    setUploadState((prev) => ({ ...prev, dragActive: false }));
    if (disabled || uploadState.isUploading) return;
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [disabled, uploadState.isUploading, handleFileUpload]);
  const renderUploadingState = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { className: "size-14" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600 font-normal", children: "Uploading file..." })
  ] });
  const renderErrorState = () => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full items-center justify-center p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-24 flex items-center justify-center bg-exp-red-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "error-outline", className: "size-14 text-exp-red-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-red-500 mb-3", children: (_a = uploadState.error) == null ? void 0 : _a.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ge, { variant: "soft", size: "sm", onClick: handleChooseFileClick, children: "Choose file" })
    ] });
  };
  const renderUploadedState = () => {
    const { attachment } = uploadState;
    if (!attachment) return null;
    const previewType = getFilePreviewType(attachment.mimeType);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 h-full", children: previewType === FilePreviewType.IMAGE ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: attachment.blobUrl || attachment.url,
          alt: attachment.originalName,
          className: "w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity",
          onClick: handlePreviewClick,
          onError: (_e) => {
            console.warn("Image failed to load:", attachment.blobUrl || attachment.url);
          }
        }
      ) : previewType === FilePreviewType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full scale-100 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors gap-1",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pdf-file-green-check", className: "size-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-exp-grey-700 text-center overflow-hidden text-ellipsis px-2 max-w-full", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: "PDF preview isn't available." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full scale-100 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors gap-1",
          onClick: handlePreviewClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "text-line-unknown", className: "w-12 h-12 text-trax-neutral-400 mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-trax-neutral-700 text-center overflow-hidden text-ellipsis whitespace-nowrap px-2 max-w-full", children: attachment.originalName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-trax-neutral-500", children: attachment.mimeType.includes("heif") || attachment.mimeType.includes("heic") ? "HEIF/HEIC preview not supported by browser" : "File preview isn't available." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full absolute bottom-0 left-0 right-0 pb-4 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ge,
          {
            variant: "ghost",
            onClick: handlePreviewClick,
            className: "rounded-full !bg-white/70 !backdrop-blur-2xl",
            title: "Preview file",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "open-in-new", className: "size-5 " })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ge,
          {
            variant: "error-ghost",
            onClick: handleDeleteClick,
            className: "rounded-full !bg-white/70",
            title: "Delete receipt",
            "data-testid": "delete-receipt-button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "delete", className: "size-5 text-exp-red-500" })
          }
        )
      ] })
    ] });
  };
  const renderEmptyState = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `flex-1 h-full items-center justify-center p-8 text-center bg-white rounded-lg transition-colors ${uploadState.dragActive ? "border-trax-blue-400 bg-trax-blue-50" : "border-trax-neutral-300 hover:border-trax-neutral-400"}`,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4.5 flex items-center justify-center bg-exp-teal-200 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "size-14 text-exp-teal-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-exp-grey-600", children: receiptUploadInstructions() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ge,
            {
              variant: "soft",
              size: "sm",
              onClick: handleChooseFileClick,
              disabled,
              "data-testid": "receipt-upload-choose-file-button",
              children: "Choose file"
            }
          )
        ] })
      ] })
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${className}`, children: [
    uploadState.isUploading && renderUploadingState(),
    uploadState.error && renderErrorState(),
    uploadState.attachment && !uploadState.isUploading && !uploadState.error && renderUploadedState(),
    !uploadState.attachment && !uploadState.isUploading && !uploadState.error && renderEmptyState(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: generateAcceptAttribute(),
        onChange: handleFileSelect,
        className: "hidden",
        disabled,
        "data-testid": "receipt-upload-input"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isDeleteDialogOpen,
        onOpenChange: setIsDeleteDialogOpen,
        title: "Delete receipt",
        description: "Are you sure you want to delete this receipt?",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel,
        isLoading: isDeleting
      }
    )
  ] });
};
const { createContext, useContext: useContext$1 } = await importShared("react");
const FormSectionContext = createContext(null);
function FormSectionProvider({
  value,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionContext.Provider, { value, children });
}
const { useEffect, useRef } = await importShared("react");
function ConditionalSection({
  control,
  behavior,
  children,
  onDisabledChange
}) {
  const shouldWatch = behavior.isVisible || behavior.isEnabled;
  const hasDependencies = behavior.dependsOn && behavior.dependsOn.length > 0;
  const previousDisabledRef = useRef(void 0);
  const watchedFieldsArray = useWatch({
    control,
    name: hasDependencies ? behavior.dependsOn : void 0,
    disabled: !shouldWatch || !hasDependencies
  });
  const allFormValues = useWatch({
    control,
    disabled: shouldWatch && hasDependencies
  });
  const formValues = hasDependencies && shouldWatch ? behavior.dependsOn.reduce((acc, fieldName, index) => {
    acc[fieldName] = Array.isArray(watchedFieldsArray) ? watchedFieldsArray[index] : watchedFieldsArray;
    return acc;
  }, {}) : allFormValues;
  if (behavior.isVisible && !behavior.isVisible(formValues)) {
    return null;
  }
  const isDisabled = behavior.isEnabled ? !behavior.isEnabled(formValues) : false;
  useEffect(() => {
    if (previousDisabledRef.current !== isDisabled) {
      previousDisabledRef.current = isDisabled;
      onDisabledChange == null ? void 0 : onDisabledChange(isDisabled);
    }
  }, [isDisabled, onDisabledChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
const { Fragment, memo: memo$3, useCallback: useCallback$1, useContext, useMemo: useMemo$1, useState: useState$1 } = await importShared("react");
const FormSectionComponent = ({
  section,
  handlersMap
}) => {
  const renderProps = useContext(FormSectionContext);
  const [conditionalDisabled, setConditionalDisabled] = useState$1(false);
  if (!renderProps) {
    throw new Error("FormSection must be used within FormSectionProvider");
  }
  const handleDisabledChange = useCallback$1((disabled) => {
    setConditionalDisabled((prev) => {
      if (prev !== disabled) {
        return disabled;
      }
      return prev;
    });
  }, []);
  const behavior = useMemo$1(
    () => ({
      isVisible: section.isVisible,
      isEnabled: section.isEnabled,
      dependsOn: section.dependsOn
    }),
    [section.isVisible, section.isEnabled, section.dependsOn]
  );
  const propsWithDisabled = useMemo$1(
    () => ({
      ...renderProps,
      disabled: conditionalDisabled || renderProps.disabled
    }),
    [renderProps, conditionalDisabled]
  );
  const finalProps = useMemo$1(() => {
    const sectionHandlers = handlersMap == null ? void 0 : handlersMap[section.type];
    return sectionHandlers ? { ...propsWithDisabled, ...sectionHandlers } : propsWithDisabled;
  }, [propsWithDisabled, handlersMap, section.type]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConditionalSection,
    {
      control: renderProps.control,
      behavior,
      onDisabledChange: handleDisabledChange,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-section-id": section.id, children: section.render(finalProps) }, section.id)
    }
  );
};
const FormSection = memo$3(FormSectionComponent);
function FormRenderer({
  sections,
  handlersMap
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Fragment, { children: sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormSection,
    {
      section,
      handlersMap
    },
    section.id
  )) });
}
const costAllocationTypes = () => [
  {
    type: ECostAllocation.Project,
    label: "Project",
    tooltip: "Allocate expense to a sales, parts, or service project"
  },
  {
    type: ECostAllocation.Admin,
    label: "Admin",
    tooltip: "Allocate expense to an internal project for admin and operational costs"
  },
  {
    type: ECostAllocation.Team,
    label: "CCB Team",
    tooltip: "Allocate expense to a commission sales team"
  },
  {
    type: ECostAllocation.Rep,
    label: "CCB Rep",
    tooltip: "Allocate expense to a commission sales rep"
  }
];
const MOCK_PROJECTS = [
  {
    id: "1",
    poNumber: "742096",
    supplier: "EXPENSES",
    description: "Heat Expenses",
    projectId: "22201292-MECH-MEP",
    projectDescription: "Arch Corp Leamington - 24 Franklin"
  },
  {
    id: "2",
    poNumber: "742102",
    supplier: "EXPENSES",
    description: "Heat Expenses",
    projectId: "22206458-MECH-1",
    projectDescription: "9825 Yonge Street - Richmond Hill"
  },
  {
    id: "3",
    poNumber: "742083",
    supplier: "EXP-VISA",
    description: "Material - Philip S",
    projectId: "22507204-SESA-1",
    projectDescription: "Supplement Source - Supply & Installation of Two Daikin 3-Ton Ductless Splits"
  }
];
const MOCK_ADMINS = [
  {
    id: "1",
    poNumber: "742999",
    supplier: "EXPENSES",
    description: "Phone Bill",
    projectId: "I50567",
    projectDescription: "Admin Expenses 2025"
  },
  {
    id: "2",
    poNumber: "742380",
    supplier: "EXP-VISA",
    description: "Oil Drum Registry Collection",
    projectId: "I50540",
    projectDescription: "Service London 2025"
  },
  {
    id: "3",
    poNumber: "742358",
    supplier: "EXP-VISA",
    description: "Boot Allowance - Visa",
    projectId: "I50669",
    projectDescription: "Service Bowes Road 2026"
  }
];
const MOCK_TEAMS = [
  { id: "1", number: "10", description: "Michael Vescio's Grp" },
  { id: "2", number: "102", description: "Chad Burton" },
  { id: "3", number: "103", description: "Ryan Morin" },
  { id: "4", number: "104", description: "Randy Ronson" },
  { id: "5", number: "106", description: "Andre Drapeau" },
  { id: "6", number: "109", description: "David Culliton" }
];
const MOCK_REPS = [
  { id: "1", name: "Andy Selin" },
  { id: "2", name: "Anthony Powell" },
  { id: "3", name: "Asif Ghayoor" },
  { id: "4", name: "Austin Kirkwood" },
  { id: "5", name: "Aziz Saqqa" },
  { id: "6", name: "Barry Jesso" },
  { id: "7", name: "Ben Bernier" },
  { id: "8", name: "Benjamin Schafer" },
  { id: "9", name: "Bob Boisvert" },
  { id: "10", name: "Brad Barkauskas" },
  { id: "11", name: "Brandon Garnett" },
  { id: "12", name: "Brian Gerow" },
  { id: "13", name: "Brian Heans" },
  { id: "14", name: "Brian McCullough" },
  { id: "15", name: "Brock Hutchison" }
];
const simulateNetworkDelay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));
const searchProjects = async (query) => {
  await simulateNetworkDelay();
  const lowerQuery = query.toLowerCase();
  const filtered = MOCK_PROJECTS.filter(
    (project) => project.poNumber.toLowerCase().includes(lowerQuery) || project.supplier.toLowerCase().includes(lowerQuery) || project.description.toLowerCase().includes(lowerQuery) || project.projectId.toLowerCase().includes(lowerQuery) || project.projectDescription.toLowerCase().includes(lowerQuery)
  );
  return filtered.map((project) => ({
    value: project.id,
    label: project.poNumber,
    data: project
  }));
};
const searchAdmins = async (query) => {
  await simulateNetworkDelay();
  const lowerQuery = query.toLowerCase();
  const filtered = MOCK_ADMINS.filter(
    (admin) => admin.poNumber.toLowerCase().includes(lowerQuery) || admin.supplier.toLowerCase().includes(lowerQuery) || admin.description.toLowerCase().includes(lowerQuery) || admin.projectId.toLowerCase().includes(lowerQuery) || admin.projectDescription.toLowerCase().includes(lowerQuery)
  );
  return filtered.map((admin) => ({
    value: admin.id,
    label: admin.poNumber,
    data: admin
  }));
};
const searchTeams = async (query) => {
  await simulateNetworkDelay();
  const lowerQuery = query.toLowerCase();
  const filtered = MOCK_TEAMS.filter(
    (team) => team.number.toLowerCase().includes(lowerQuery) || team.description.toLowerCase().includes(lowerQuery)
  );
  return filtered.map((team) => ({
    value: team.id,
    label: team.number,
    data: team
  }));
};
const searchReps = async (query) => {
  await simulateNetworkDelay();
  const lowerQuery = query.toLowerCase();
  const filtered = MOCK_REPS.filter(
    (rep) => rep.name.toLowerCase().includes(lowerQuery)
  );
  return filtered.map((rep) => ({
    value: rep.id,
    label: rep.name,
    data: rep
  }));
};
const getSearchFunctionByType = (type) => {
  const searchMap = {
    [ECostAllocation.Project]: searchProjects,
    [ECostAllocation.Admin]: searchAdmins,
    [ECostAllocation.Team]: searchTeams,
    [ECostAllocation.Rep]: searchReps
  };
  return searchMap[type];
};
const getPlaceholderByType = (type) => {
  const placeholderMap = {
    [ECostAllocation.Project]: "Enter the complete PO number",
    [ECostAllocation.Admin]: "Enter the complete internal PO number",
    [ECostAllocation.Team]: "Enter sales team # (e.g., 01)",
    [ECostAllocation.Rep]: "Enter sales rep's name"
  };
  return placeholderMap[type];
};
const { memo: memo$2, useMemo } = await importShared("react");
const CostAllocationFieldComponent = ({
  control,
  setValue,
  trigger,
  index,
  type,
  value,
  onValueChange,
  totalAmount,
  currencyCode,
  disabled = false,
  onRemove
}) => {
  const {
    syncPercentageFromAmount,
    syncAmountFromPercentage,
    setAmountEditing,
    setPercentageEditing
  } = useAllocationSync({
    index,
    totalAmount,
    setValue,
    trigger
  });
  const allocationConfig = useMemo(
    () => costAllocationTypes().find((config) => config.type === type),
    [type]
  );
  const searchFunction = useMemo(
    () => getSearchFunctionByType(type),
    [type]
  );
  const placeholder = useMemo(
    () => getPlaceholderByType(type),
    [type]
  );
  const displayLabel = useMemo(
    () => getDisplayLabel(type, value),
    [type, value]
  );
  const projectDetails = useMemo(
    () => type === ECostAllocation.Project || type === ECostAllocation.Admin ? getProjectDetails(value) : null,
    [type, value]
  );
  const inputLabel = useMemo(
    () => projectDetails ? COST_ALLOCATION_LABELS.PURCHASE_ORDER : "",
    [projectDetails]
  );
  if (!allocationConfig) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 bg-exp-neutral-10 rounded-lg p-3 shadow-exp-menu", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        pressed: true,
        disabled,
        onPressedChange: () => !disabled && onRemove(),
        children: allocationConfig.label
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        sa,
        {
          placeholder,
          label: inputLabel,
          value,
          onValueChange,
          onSearch: searchFunction,
          searchDelay: SEARCH_DELAY_MS,
          minSearchLength: MIN_SEARCH_LENGTH,
          searchingText: "Searching...",
          noResultsText: "No results found",
          disabled,
          clearOnBlur: false,
          displayLabel,
          renderItem: (item) => renderAllocationItem(type, item),
          tooltipProps: {
            delayDuration: 100,
            variant: "light",
            size: "sm",
            showArrow: false,
            renderContent: (displayValue) => {
              console.log("displayValue", displayValue);
              return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-full font-normal text-xs text-exp-grey-600", children: displayValue });
            }
          }
        }
      ),
      value && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 ${inputLabel ? "mt-5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: `costAllocations.${index}.amount`,
            control,
            render: ({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                ua,
                {
                  className: "min-w-32 rounded-r-none",
                  currencyCode,
                  locale: "en-CA",
                  ...field,
                  value: field.value && field.value !== 0 ? field.value : "",
                  onFocus: () => setAmountEditing(true),
                  onChange: (e) => {
                    const value2 = e.target.value;
                    const newAmount = value2 === "" ? 0 : parseFloat(value2);
                    field.onChange(newAmount);
                    if (!isNaN(newAmount)) {
                      syncPercentageFromAmount(newAmount);
                    }
                  },
                  onBlur: () => {
                    setAmountEditing(false);
                    field.onBlur();
                  },
                  disabled,
                  placeholder: "0.00",
                  error: (_a = fieldState.error) == null ? void 0 : _a.message
                }
              );
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 ${inputLabel ? "mt-5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            name: `costAllocations.${index}.percentage`,
            control,
            render: ({ field, fieldState }) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Qo,
                  {
                    type: "number",
                    step: "0.01",
                    min: "0",
                    ...field,
                    value: field.value && field.value !== 0 ? field.value : "",
                    onFocus: () => setPercentageEditing(true),
                    onChange: (e) => {
                      const value2 = e.target.value;
                      const newPercentage = value2 === "" ? 0 : parseFloat(value2);
                      field.onChange(newPercentage);
                      if (!isNaN(newPercentage)) {
                        syncAmountFromPercentage(newPercentage);
                      }
                    },
                    onBlur: () => {
                      setPercentageEditing(false);
                      field.onBlur();
                    },
                    disabled,
                    className: "text-right pr-7! min-w-28 rounded-l-none border-l-0!",
                    placeholder: "0.00",
                    error: (_a = fieldState.error) == null ? void 0 : _a.message
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-2 text-xs text-trax-grey-900 pointer-events-none", children: "%" })
              ] });
            }
          }
        ) })
      ] })
    ] }),
    projectDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-xs text-exp-grey-600 pl-1 mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-trax-grey-900 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Allocated to:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-trax-grey-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle-fill", className: "text-exp-green-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: projectDetails.projectId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-exp-grey-600", children: projectDetails.projectDescription })
        ] })
      ] })
    ] })
  ] });
};
const CostAllocationField = memo$2(
  CostAllocationFieldComponent,
  (prev, next) => {
    var _a, _b, _c, _d;
    return prev.index === next.index && prev.type === next.type && prev.totalAmount === next.totalAmount && prev.currencyCode === next.currencyCode && prev.disabled === next.disabled && ((_a = prev.value) == null ? void 0 : _a.value) === ((_b = next.value) == null ? void 0 : _b.value) && ((_c = prev.value) == null ? void 0 : _c.label) === ((_d = next.value) == null ? void 0 : _d.label);
  }
);
CostAllocationField.displayName = "CostAllocationField";
const { memo: memo$1 } = await importShared("react");
const AllocationTypeChips = memo$1(({
  onSelect,
  disabled = false
}) => {
  const allocationTypes = costAllocationTypes();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: allocationTypes.map((allocationType) => /* @__PURE__ */ jsxRuntimeExports.jsxs(vr, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(wr, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr,
      {
        disabled,
        onPressedChange: () => onSelect(allocationType.type),
        children: allocationType.label
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sr,
      {
        variant: "light",
        size: "sm",
        side: "bottom",
        showArrow: false,
        className: "max-w-full font-normal text-xs text-exp-grey-600",
        children: allocationType.tooltip
      }
    )
  ] }, allocationType.type)) });
});
AllocationTypeChips.displayName = "AllocationTypeChips";
const { memo, useState, useCallback } = await importShared("react");
const AddAllocationExpandable = memo(({
  onTypeSelect,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTypeSelect = useCallback(
    (type) => {
      onTypeSelect(type);
      setIsOpen(false);
    },
    [onTypeSelect]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ge, { variant: "outlined", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {}), disabled, children: COST_ALLOCATION_LABELS.ADD_ALLOCATION }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ss, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AllocationTypeChips, { onSelect: handleTypeSelect, disabled }) })
  ] });
});
AddAllocationExpandable.displayName = "AddAllocationExpandable";
export {
  AllowedMimeType as A,
  validateFileContent as B,
  ConfirmDialog as C,
  DEFAULT_CURRENCY_CODE as D,
  ExpenseFormField as E,
  FormSectionProvider as F,
  isApiError as G,
  sleep as H,
  getErrorMessage as I,
  calculateExponentialBackoff as J,
  validateReceiptFile as K,
  openFilePreview as L,
  MIME_TYPE_CONFIG as M,
  getSupportedFormatsText as N,
  generateAcceptAttribute as O,
  getFilePreviewType as P,
  FilePreviewType as Q,
  ReceiptUpload as R,
  expenseJustificationSchema as a,
  additionalCommentsSchema as b,
  costAllocationSchema as c,
  useTotalAmountSync as d,
  expenseDetailsSchema as e,
  useExpenseDetailsHandlers as f,
  useCostAllocationHandlers as g,
  useAutoSave as h,
  useFileHandlers as i,
  useReceiptCheckboxEffects as j,
  useFormButtonStateSync as k,
  useFormImperativeHandle as l,
  FormRenderer as m,
  useBaseExpenseForm as n,
  minimalExpenseValidationStrategy as o,
  affidavitExpenseValidationStrategy as p,
  useCostAllocation as q,
  useEqualSplit as r,
  COST_ALLOCATION_LABELS as s,
  AllocationTypeChips as t,
  useFullExpenseForm as u,
  CostAllocationField as v,
  AddAllocationExpandable as w,
  checkRateLimit as x,
  shouldUseEnhancedValidation as y,
  validateFileContentEnhanced as z
};

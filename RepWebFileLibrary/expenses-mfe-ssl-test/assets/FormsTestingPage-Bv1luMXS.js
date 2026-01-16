import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { i as is, l as ls, Y as Yn, b as cs, T as Pa, D as Da, V as fs, W as ms, P as Pe, X as ps, Z as hs, $ as vs, a0 as bs, a1 as xs, a2 as zr, N as Nn, F as Fn, I as In, E as Ea, a3 as Ma } from "./index.es-DjMdAnbR.js";
import { L as minimalExpenseValidationStrategy, N as useBaseExpenseForm, V as VENDOR_OPTIONS, O as EXPENSE_LOCATION_OPTIONS, F as FormSectionType, d as useReceiptCheckboxEffects, P as useFormButtonStateSync, Q as useFormImperativeHandle, R as FormSectionProvider, T as FormRenderer, U as affidavitExpenseValidationStrategy } from "./SupportingFilesSection-B7_YBnvK.js";
import { R as ReceiptSection, s as sortFormSections } from "./form-factory-BvMAyI0E.js";
import "./axiosInstance-C5DXrAKo.js";
import "./query-keys-lh9auI-Z.js";
import "./use-debounced-callback-C2QRma74.js";
import { I as Icon } from "./Icon-0rSrBywh.js";
import { C as Controller, e as useWatch } from "./zod-0mrSG730.js";
import { F as FileText } from "./file-text-B1dkFk-y.js";
function AffidavitSection({
  control,
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        iconClassName: "bg-exp-yellow-001 justify-center items-center flex",
        title: "AFFIDAVIT",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
        required: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "min-h-0 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(is, { className: "w-full max-h-full bg-yellow-50 border border-yellow-200 p-3 flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 h-full overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-normal text-exp-grey-600", children: "Please sign the affidavit:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "I affirm that this expense was for legitimate business purposes and the original receipt was accidentally lost, destroyed, or unobtainable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "affidavit.justification",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pa,
              {
                name: field.name,
                ref: field.ref,
                onBlur: field.onBlur,
                value: field.value || "",
                onChange: field.onChange,
                onInput: (e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = Math.min(el.scrollHeight + 5, 200) + "px";
                },
                className: "w-full text-wrap bg-white border resize-none overflow-y-auto min-h-16 max-h-34 leading-4 placeholder:text-sm placeholder:font-normal placeholder:text-exp-grey-500",
                label: "Justification",
                placeholder: "State reason for missing receipt",
                maxCharacters: 150,
                showCharacterCount: true,
                enforceMaxLength: true,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled,
                required: true
              }
            );
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-exp-yellow-900", children: "Information provided for this expense is complete and accurate. I understand that false claims may lead to disciplinary or legal action." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "affidavit.digitalSignature",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Da,
              {
                name: field.name,
                ref: field.ref,
                onBlur: field.onBlur,
                value: field.value || "",
                onChange: (e) => {
                  const upperValue = e.target.value.toUpperCase();
                  const filteredValue = upperValue.replace(/[^A-Z]/g, "").slice(0, 3);
                  field.onChange(filteredValue);
                },
                className: "w-full text-sm bg-white border h-6 resize-none placeholder:font-normal placeholder:text-exp-grey-500 px-2 py-4",
                label: "Digital Signature",
                placeholder: "Enter initials",
                maxLength: 3,
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                disabled,
                required: true
              }
            );
          }
        }
      )
    ] }) }) }) })
  ] });
}
const ReceiptSectionWrapper = ({
  control,
  disabled,
  isReceiptUnavailableField,
  onReceiptChange,
  onUploadingChange = () => {
  },
  hideUploadWhenUnavailable = false
}) => {
  const receiptAttachment = useWatch({
    control,
    name: "receiptAttachment"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ReceiptSection,
    {
      control,
      isReceiptUnavailableField,
      receiptAttachment,
      shouldShowCheckbox: true,
      hideUploadWhenUnavailable,
      onReceiptChange,
      onUploadingChange,
      disabled
    }
  );
};
const { useCallback, useRef, useState: useState$1 } = await importShared("react");
function ExpenseFormDialog({
  trigger,
  title,
  description,
  formComponent: FormComponent,
  initialData,
  onSubmit,
  onSaveDraft,
  dialogClassName = "max-w-3xl max-h-[90vh] overflow-y-auto"
}) {
  const [open, setOpen] = useState$1(false);
  const [isSubmitting, setIsSubmitting] = useState$1(false);
  const [isDrafting, setIsDrafting] = useState$1(false);
  const [draftSaveError, setDraftSaveError] = useState$1(false);
  const [submitButtonState, setSubmitButtonState] = useState$1({ disabled: true });
  const [draftButtonState, setDraftButtonState] = useState$1({ disabled: true });
  const formRef = useRef(null);
  const handleButtonStateChange = useCallback(
    (submitState, draftState) => {
      setSubmitButtonState((prev) => {
        if (prev.disabled !== submitState.disabled || prev.tooltip !== submitState.tooltip) {
          return submitState;
        }
        return prev;
      });
      setDraftButtonState((prev) => {
        if (prev.disabled !== draftState.disabled || prev.tooltip !== draftState.tooltip) {
          return draftState;
        }
        return prev;
      });
    },
    []
  );
  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    setDraftSaveError(false);
    try {
      await (onSubmit == null ? void 0 : onSubmit(data));
      setOpen(false);
    } catch (error) {
      console.error("Submit failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleSaveDraft = async (data) => {
    setIsDrafting(true);
    setDraftSaveError(false);
    try {
      await (onSaveDraft == null ? void 0 : onSaveDraft(data));
    } catch (error) {
      console.error("Save draft failed:", error);
      setDraftSaveError(true);
    } finally {
      setIsDrafting(false);
    }
  };
  const handleDraftSaved = () => {
  };
  const handleSubmitClick = () => {
    var _a;
    (_a = formRef.current) == null ? void 0 : _a.submitForm();
  };
  const handleDraftClick = () => {
    var _a;
    (_a = formRef.current) == null ? void 0 : _a.saveDraft();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(fs, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ms, { asChild: true, children: trigger || /* @__PURE__ */ jsxRuntimeExports.jsx(Pe, { children: "New Expense" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ps, { className: dialogClassName, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(hs, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(vs, { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(bs, { children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormComponent,
        {
          ref: formRef,
          initialData,
          onSubmit: handleSubmit,
          onSaveDraft: handleSaveDraft,
          onDraftSaved: handleDraftSaved,
          isSubmitting,
          isDrafting,
          draftSaveError,
          onButtonStateChange: handleButtonStateChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(xs, { className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pe,
          {
            type: "button",
            variant: "outline",
            onClick: () => setOpen(false),
            disabled: isSubmitting || isDrafting,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pe,
            {
              type: "button",
              variant: "secondary",
              onClick: handleDraftClick,
              disabled: draftButtonState.disabled,
              children: isDrafting ? "Saving..." : "Save Draft"
            }
          ) }) }),
          draftButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(In, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: draftButtonState.tooltip }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zr, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fn, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pe,
            {
              type: "button",
              onClick: handleSubmitClick,
              disabled: submitButtonState.disabled,
              children: isSubmitting ? "Submitting..." : "Submit"
            }
          ) }) }),
          submitButtonState.tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(In, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: submitButtonState.tooltip }) })
        ] }) })
      ] })
    ] })
  ] });
}
const {
  validateForSubmission: validateForSubmission$1,
  validateForDraft: validateForDraft$1,
  areRequiredFieldsFilled: areRequiredFieldsFilled$1,
  getValidationErrors: getFormValidationErrors$1,
  canSaveDraft: canSaveDraft$1
} = minimalExpenseValidationStrategy;
const useMinimalExpenseForm = (props) => {
  var _a, _b, _c, _d;
  const defaultValues = {
    receiptAttachment: ((_a = props.initialData) == null ? void 0 : _a.receiptAttachment) ?? null,
    isReceiptUnavailable: ((_b = props.initialData) == null ? void 0 : _b.isReceiptUnavailable) ?? false,
    vendor: ((_c = props.initialData) == null ? void 0 : _c.vendor) ?? "",
    expenseLocation: ((_d = props.initialData) == null ? void 0 : _d.expenseLocation) ?? ""
  };
  return useBaseExpenseForm(
    {
      ...minimalExpenseValidationStrategy,
      defaultValues
    },
    props
  );
};
function MinimalDetailsSection({
  control
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        iconClassName: "justify-center items-center flex bg-exp-neutral-100",
        title: "BASIC DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt", className: "text-white size-4" }),
        required: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: "vendor",
          control,
          render: ({ field, fieldState }) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ea,
              {
                label: "Vendor",
                placeholder: "Select vendor",
                value: field.value,
                onValueChange: field.onChange,
                onBlur: field.onBlur,
                options: [...VENDOR_OPTIONS],
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true
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
                label: "Expense Location",
                placeholder: "Select location",
                value: field.value,
                onValueChange: field.onChange,
                onBlur: field.onBlur,
                options: [...EXPENSE_LOCATION_OPTIONS],
                error: (_a = fieldState.error) == null ? void 0 : _a.message,
                required: true
              }
            );
          }
        }
      )
    ] })
  ] });
}
const AffidavitDetailsSection = ({
  control,
  disabled = false
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Yn,
      {
        title: "EXPENSE DETAILS",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-exp-neutral-950" }),
        required: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
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
      )
    ] }) })
  ] });
};
const BASIC_DETAILS_SECTION = {
  id: "basic-details",
  type: FormSectionType.ExpenseDetails,
  title: "BASIC DETAILS",
  required: true,
  order: 1,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MinimalDetailsSection, { ...props })
};
const MINIMAL_RECEIPT_SECTION = {
  id: "receipt",
  type: FormSectionType.Receipt,
  title: "RECEIPT",
  required: true,
  order: 0,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    ReceiptSectionWrapper,
    {
      ...props,
      isReceiptUnavailableField: "isReceiptUnavailable",
      hideUploadWhenUnavailable: true,
      onReceiptChange: (attachment) => {
        props.setValue("receiptAttachment", attachment || null);
      }
    }
  )
};
const { forwardRef: forwardRef$1, useMemo: useMemo$1 } = await importShared("react");
const MinimalExpenseForm = forwardRef$1(
  ({
    onSubmit,
    onSaveDraft,
    onDraftSaved,
    initialData,
    isSubmitting = false,
    isDrafting = false,
    draftSaveError = false,
    onButtonStateChange
  }, ref) => {
    const fullForm = useMinimalExpenseForm({
      initialData,
      onSubmit,
      onSaveDraft,
      onDraftSaved,
      isSubmitting,
      isDrafting,
      draftSaveError
    });
    const { control, setValue, formState } = fullForm.form;
    useReceiptCheckboxEffects({
      watch: fullForm.form.watch,
      setValue,
      receiptAttachmentField: "receiptAttachment",
      isReceiptUnavailableField: "isReceiptUnavailable"
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
      form: fullForm
    });
    const formSections = useMemo$1(() => {
      return sortFormSections([
        MINIMAL_RECEIPT_SECTION,
        BASIC_DETAILS_SECTION
      ]);
    }, []);
    const renderProps = useMemo$1(
      () => ({
        control,
        setValue,
        trigger: fullForm.form.trigger,
        errors: formState.errors,
        disabled: isSubmitting
      }),
      [control, setValue, fullForm.form.trigger, formState.errors, isSubmitting]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionProvider, { value: renderProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { sections: formSections }) });
  }
);
MinimalExpenseForm.displayName = "MinimalExpenseForm";
function MinimalExpenseDialog({
  trigger,
  initialData,
  onSubmit,
  onSaveDraft
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ExpenseFormDialog,
    {
      trigger,
      title: "Minimal Expense Form",
      description: "Enter receipt, vendor, and location",
      formComponent: MinimalExpenseForm,
      initialData,
      onSubmit,
      onSaveDraft
    }
  );
}
const {
  validateForSubmission,
  validateForDraft,
  areRequiredFieldsFilled,
  getValidationErrors: getFormValidationErrors,
  canSaveDraft
} = affidavitExpenseValidationStrategy;
const useAffidavitExpenseForm = (props) => {
  var _a, _b, _c;
  const defaultValues = {
    affidavit: ((_a = props.initialData) == null ? void 0 : _a.affidavit) ?? {
      justification: "",
      digitalSignature: ""
    },
    vendor: ((_b = props.initialData) == null ? void 0 : _b.vendor) ?? "",
    expenseDate: ((_c = props.initialData) == null ? void 0 : _c.expenseDate) ?? ""
  };
  return useBaseExpenseForm(
    {
      ...affidavitExpenseValidationStrategy,
      defaultValues
    },
    props
  );
};
const AFFIDAVIT_DETAILS_SECTION = {
  id: "affidavit-details",
  type: FormSectionType.ExpenseDetails,
  title: "EXPENSE DETAILS",
  required: true,
  order: 1,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AffidavitDetailsSection, { ...props })
};
const { forwardRef, useMemo } = await importShared("react");
const AffidavitExpenseForm = forwardRef(
  ({
    onSubmit,
    onSaveDraft,
    onDraftSaved,
    initialData,
    isSubmitting = false,
    isDrafting = false,
    draftSaveError = false,
    onButtonStateChange
  }, ref) => {
    const fullForm = useAffidavitExpenseForm({
      initialData,
      onSubmit,
      onSaveDraft,
      onDraftSaved,
      isSubmitting,
      isDrafting,
      draftSaveError
    });
    const { control, formState } = fullForm.form;
    useFormButtonStateSync({
      form: fullForm,
      formState,
      isSubmitting,
      isDrafting,
      onButtonStateChange
    });
    useFormImperativeHandle({
      ref,
      form: fullForm
    });
    const formSections = useMemo(() => {
      return sortFormSections([AFFIDAVIT_DETAILS_SECTION]);
    }, []);
    const renderProps = useMemo(
      () => ({
        control,
        setValue: fullForm.form.setValue,
        trigger: fullForm.form.trigger,
        errors: formState.errors,
        disabled: isSubmitting
      }),
      [control, fullForm.form.setValue, fullForm.form.trigger, formState.errors, isSubmitting]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AffidavitSection, { control, disabled: isSubmitting }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormSectionProvider, { value: renderProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormRenderer, { sections: formSections }) })
    ] });
  }
);
AffidavitExpenseForm.displayName = "AffidavitExpenseForm";
function AffidavitExpenseDialog({
  trigger,
  initialData,
  onSubmit,
  onSaveDraft
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ExpenseFormDialog,
    {
      trigger,
      title: "Affidavit Expense Form",
      description: "Expense with affidavit instead of receipt",
      formComponent: AffidavitExpenseForm,
      initialData,
      onSubmit,
      onSaveDraft
    }
  );
}
const { useState } = await importShared("react");
function generateId() {
  return `EXP-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
}
function FormsTestingPage() {
  var _a;
  const [lastSubmitted, setLastSubmitted] = useState(null);
  const [lastDraft, setLastDraft] = useState(null);
  const handleMinimalSubmit = (data) => {
    const submittedData = {
      formType: "minimal",
      id: generateId(),
      submittedAt: /* @__PURE__ */ new Date(),
      data
    };
    console.log("[Minimal] Form submitted:", submittedData);
    setLastSubmitted(submittedData);
  };
  const handleMinimalSaveDraft = (data) => {
    const draftData = {
      formType: "minimal",
      draftId: (lastDraft == null ? void 0 : lastDraft.formType) === "minimal" ? lastDraft.draftId : `DRAFT-${generateId()}`,
      savedAt: /* @__PURE__ */ new Date(),
      data
    };
    console.log("[Minimal] Draft saved:", draftData);
    setLastDraft(draftData);
  };
  const handleAffidavitSubmit = (data) => {
    const submittedData = {
      formType: "affidavit",
      id: generateId(),
      submittedAt: /* @__PURE__ */ new Date(),
      data
    };
    console.log("[Affidavit] Form submitted:", submittedData);
    setLastSubmitted(submittedData);
  };
  const handleAffidavitSaveDraft = (data) => {
    const draftData = {
      formType: "affidavit",
      draftId: (lastDraft == null ? void 0 : lastDraft.formType) === "affidavit" ? lastDraft.draftId : `DRAFT-${generateId()}`,
      savedAt: /* @__PURE__ */ new Date(),
      data
    };
    console.log("[Affidavit] Draft saved:", draftData);
    setLastDraft(draftData);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(is, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ls, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Form Builder Testing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Two form variants built with the same infrastructure - demonstrating reusability" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ls, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Minimal Expense Form" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2", children: "Simple form with basic fields:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-600 mt-1 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Receipt upload (with unavailable checkbox)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vendor selection" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Expense location" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MinimalExpenseDialog,
            {
              trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(Pe, { className: "w-full", children: "Open Minimal Expense Form" }),
              onSubmit: handleMinimalSubmit,
              onSaveDraft: handleMinimalSaveDraft
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ls, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Affidavit Expense Form" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2", children: "Form with affidavit instead of receipt:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-600 mt-1 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Affidavit (justification + digital signature)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vendor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Expense date" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AffidavitExpenseDialog,
            {
              trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(Pe, { className: "w-full", children: "Open Affidavit Expense Form" }),
              onSubmit: handleAffidavitSubmit,
              onSaveDraft: handleAffidavitSaveDraft
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Last Submitted" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { children: lastSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded p-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-green-800", children: "Form:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize text-green-600", children: lastSubmitted.formType })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-green-800", children: "ID:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-green-600", children: lastSubmitted.id })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-green-600", children: [
                "Submitted: ",
                lastSubmitted.submittedAt.toLocaleString()
              ] })
            ] }),
            lastSubmitted.formType === "minimal" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Vendor:" }),
                " ",
                lastSubmitted.data.vendor
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Location:" }),
                " ",
                lastSubmitted.data.expenseLocation
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Receipt:" }),
                " ",
                lastSubmitted.data.isReceiptUnavailable ? "Marked unavailable" : ((_a = lastSubmitted.data.receiptAttachment) == null ? void 0 : _a.filename) || "None"
              ] })
            ] }),
            lastSubmitted.formType === "affidavit" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Vendor:" }),
                " ",
                lastSubmitted.data.vendor
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Expense Date:" }),
                " ",
                new Date(lastSubmitted.data.expenseDate).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Affidavit:" }),
                " ",
                "Signed with ",
                lastSubmitted.data.affidavit.digitalSignature
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer text-sm text-exp-neutral-300", children: "View raw data" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-gray-100 p-2 rounded text-xs mt-2 overflow-auto max-h-60", children: JSON.stringify(lastSubmitted, null, 2) })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: "Submit a form to see data here" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Last Draft" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { children: lastDraft ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded p-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-800", children: "Form:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize text-blue-600", children: lastDraft.formType })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-800", children: "Draft ID:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-blue-600", children: lastDraft.draftId })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-blue-600", children: [
                "Saved: ",
                lastDraft.savedAt.toLocaleString()
              ] })
            ] }),
            lastDraft.formType === "minimal" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Vendor:" }),
                " ",
                lastDraft.data.vendor || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Not set" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Location:" }),
                " ",
                lastDraft.data.expenseLocation || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Not set" })
              ] })
            ] }),
            lastDraft.formType === "affidavit" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Vendor:" }),
                " ",
                lastDraft.data.vendor || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Not set" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Expense Date:" }),
                " ",
                lastDraft.data.expenseDate ? new Date(lastDraft.data.expenseDate).toLocaleDateString() : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Not set" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer text-sm text-exp-neutral-300", children: "View raw data" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-gray-100 p-2 rounded text-xs mt-2 overflow-auto max-h-60", children: JSON.stringify(lastDraft, null, 2) })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: "Save a draft to see data here" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Code Reusability Demonstration" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "prose prose-sm max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Both forms above share the same infrastructure:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mt-4 mb-2", children: "Shared Components" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-gray-100 px-1 rounded", children: "ExpenseFormDialog" }),
            " - Generic dialog wrapper"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-gray-100 px-1 rounded", children: "useBaseExpenseForm" }),
            " - Generic form hook"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-gray-100 px-1 rounded", children: "ExpenseFormBuilder" }),
            " - Builder pattern for sections"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-gray-100 px-1 rounded", children: "FormRenderer" }),
            " - Renders sections from config"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mt-4 mb-2", children: "What's Different" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Data models - each form has its own schema" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Validation rules - customized per form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Field sets - different combinations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sections - minimal = Receipt, affidavit = Affidavit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 font-medium", children: "✨ Result: Create new forms with ~150 lines instead of 400+" })
      ] })
    ] })
  ] });
}
export {
  FormsTestingPage as default
};

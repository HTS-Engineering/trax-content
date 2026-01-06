import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { C as Controller, e as useWatch } from "./zod-B48RR00p.js";
import { i as is, H as Pa, D as Da, l as ls, Y as Yn, $ as ss, b as cs } from "./axiosInstance-DIiEj-ev.js";
import { I as Icon } from "./Icon-31ae5cox.js";
import { R as ReceiptUpload, K as useBaseExpenseForm, T as useAutoSave, M as useFormButtonStateSync, N as useFormImperativeHandle, U as BaseExpenseFormRenderer } from "./SupportingFilesSection-BADWw9ET.js";
import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
function AffidavitContent({
  control,
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(is, { className: "w-full max-h-full bg-yellow-50 border border-yellow-200 p-3 flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 h-full overflow-y-auto", children: [
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
  ] }) }) });
}
function ReceiptSection({
  control,
  isReceiptUnavailableField,
  receiptAttachment,
  shouldShowCheckbox,
  onReceiptChange,
  onUploadingChange,
  disabled = false,
  hideUploadWhenUnavailable = false
}) {
  const isReceiptUnavailable = useWatch({
    control,
    name: isReceiptUnavailableField,
    defaultValue: false
  });
  const shouldHideUpload = hideUploadWhenUnavailable && isReceiptUnavailable;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(is, { className: "h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Yn,
        {
          iconClassName: "bg-exp-yellow-001 justify-center items-center flex",
          title: "RECEIPT",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "receipt_long", className: "text-exp-neutral-950" }),
          required: true,
          className: ""
        }
      ),
      shouldShowCheckbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          name: isReceiptUnavailableField,
          control,
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ss,
            {
              label: "Unavailable",
              checked: field.value,
              onCheckedChange: (checked) => field.onChange(checked),
              disabled
            }
          )
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(cs, { className: "min-h-0 h-full", children: isReceiptUnavailable ? hideUploadWhenUnavailable ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(AffidavitContent, { control, disabled }) : !shouldHideUpload && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptUpload,
      {
        onReceiptChange,
        onUploadingChange,
        initialReceipt: receiptAttachment || void 0,
        disabled: disabled || isReceiptUnavailable,
        className: "h-full"
      }
    ) })
  ] });
}
function sortFormSections(sections) {
  return [...sections].sort((a, b) => a.order - b.order);
}
const { forwardRef, useMemo } = await importShared("react");
const createExpenseForm = (config) => {
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
        onButtonStateChange
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
      const { control, setValue, getValues, formState, watch } = form.form;
      config.customHook({ control, setValue, getValues, formState, watch });
      useAutoSave({
        draftId,
        isDrafting,
        onSaveDraft,
        getFormValues: () => form.getValues()
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
      const formSections = useMemo(() => sortFormSections(config.sections), [config.sections]);
      const handlersMap = config.handlersHook(setValue, getValues);
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
            onSaveDraft
          });
        },
        [config.leftColumnRenderer, control, setValue, getValues, isSubmitting, isDrafting, draftId, onSaveDraft]
      );
      const errorDisplay = useMemo(
        () => {
          var _a2;
          return (_a2 = config.errorDisplayRenderer) == null ? void 0 : _a2.call(config, { errors: form.validationErrors });
        },
        [config.errorDisplayRenderer, form.validationErrors]
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
};
export {
  ReceiptSection as R,
  createExpenseForm as c,
  sortFormSections as s
};

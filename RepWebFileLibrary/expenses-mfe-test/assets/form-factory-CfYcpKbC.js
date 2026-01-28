import { importShared } from "./__federation_fn_import-DYyjX-5O.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { O as useBaseExpenseForm, X as useAutoSave, Q as useFormButtonStateSync, S as useFormImperativeHandle, Y as BaseExpenseFormRenderer } from "./ExpenseFormLeftColumn-BqvSLNAc.js";
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
            onSaveDraft,
            onSaveDraftForUpload
          });
        },
        [config.leftColumnRenderer, control, setValue, getValues, isSubmitting, isDrafting, draftId, onSaveDraft, onSaveDraftForUpload]
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
  createExpenseForm as c,
  sortFormSections as s
};

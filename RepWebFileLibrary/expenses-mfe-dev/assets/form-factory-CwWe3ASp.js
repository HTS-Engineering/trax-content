import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { Q as useBaseExpenseForm, Y as useAutoSave, T as useFormButtonStateSync, U as useFormImperativeHandle, Z as BaseExpenseFormRenderer } from "./ExpenseFormLeftColumn-DR3vi74A.js";
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
      const { control, setValue, getValues, formState, watch, trigger } = form.form;
      config.customHook({ control, setValue, getValues, formState, watch, trigger });
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
      const formSections = useMemo(() => sortFormSections(config.sections), []);
      const handlersMap = config.handlersHook(setValue, getValues, { draftId, onSaveDraftForUpload });
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
};
export {
  createExpenseForm as c,
  sortFormSections as s
};

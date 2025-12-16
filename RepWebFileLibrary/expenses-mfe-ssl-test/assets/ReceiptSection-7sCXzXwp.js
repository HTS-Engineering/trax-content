import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { C as Controller, e as useWatch } from "./zod-QmC9MztX.js";
import { o as os, E as Ea, F as Fa, b as as, A as An, Y as rs, l as ls } from "./axiosInstance-D567fVcX.js";
import { I as Icon } from "./Icon-5_58Mq6r.js";
import { R as ReceiptUpload } from "./SupportingFilesSection-CKC18LuW.js";
function AffidavitContent({
  control,
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(os, { className: "w-full max-h-full bg-yellow-50 border border-yellow-200 p-3 flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 h-full overflow-y-auto", children: [
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
            Ea,
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
            Fa,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(os, { className: "h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(as, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap justify-between items-center min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        An,
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
            rs,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(ls, { className: "min-h-0 h-full", children: isReceiptUnavailable ? hideUploadWhenUnavailable ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(AffidavitContent, { control, disabled }) : !shouldHideUpload && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
export {
  ReceiptSection as R
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, D as Ds, M as Ms, k as Es, l as ks, V as Vs, P as Ps, U as Ue, Y as Yn, d as devError } from "./index-CFVMMdzN.js";
const { useCallback, useEffect, useRef, useState } = await importShared("react");
const ANIMATION_FALLBACK_MS = 300;
const ConfirmDialog = /* @__PURE__ */ __name(({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  onCloseComplete,
  isLoading = false,
  variant = "error",
  confirmButtonClassName = "",
  cancelButtonClassName = ""
}) => {
  const [wasOpen, setWasOpen] = useState(open);
  const onCloseCompleteRef = useRef(onCloseComplete);
  const closeCompleteFiredRef = useRef(false);
  useEffect(() => {
    onCloseCompleteRef.current = onCloseComplete;
  }, [onCloseComplete]);
  useEffect(() => {
    let fallbackTimer;
    if (open) {
      setWasOpen(true);
      closeCompleteFiredRef.current = false;
    } else if (wasOpen && !closeCompleteFiredRef.current) {
      fallbackTimer = setTimeout(() => {
        var _a;
        if (!closeCompleteFiredRef.current) {
          closeCompleteFiredRef.current = true;
          setWasOpen(false);
          (_a = onCloseCompleteRef.current) == null ? void 0 : _a.call(onCloseCompleteRef);
        }
      }, ANIMATION_FALLBACK_MS);
    }
    return () => clearTimeout(fallbackTimer);
  }, [open, wasOpen]);
  const handleAnimationEnd = useCallback(() => {
    var _a;
    if (wasOpen && !open && !closeCompleteFiredRef.current) {
      closeCompleteFiredRef.current = true;
      setWasOpen(false);
      (_a = onCloseCompleteRef.current) == null ? void 0 : _a.call(onCloseCompleteRef);
    }
  }, [wasOpen, open]);
  const handleConfirm = /* @__PURE__ */ __name(() => {
    void Promise.resolve().then(onConfirm).catch((error) => {
      devError("ConfirmDialog: onConfirm rejected", error);
    });
  }, "handleConfirm");
  const handleCancel = useCallback(() => {
    onCancel == null ? void 0 : onCancel();
    onOpenChange(false);
  }, [onCancel, onOpenChange]);
  const handleOpenChange = useCallback(
    (next) => {
      if (next) {
        onOpenChange(true);
        return;
      }
      if (isLoading) return;
      handleCancel();
    },
    [isLoading, handleCancel, onOpenChange]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ds, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Ms,
    {
      className: "max-w-md",
      onAnimationEnd: handleAnimationEnd,
      onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Es, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ks, { className: "text-base font-semibold text-trax-neutral-600", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm font-normal text-trax-grey-600", children: description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Ps, { className: "gap-3 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "soft",
              onClick: handleCancel,
              disabled: isLoading,
              className: `min-w-20 ${cancelButtonClassName}`,
              children: cancelLabel
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant,
              onClick: handleConfirm,
              disabled: isLoading,
              className: `min-w-20 ${confirmButtonClassName}`,
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }) : confirmLabel
            }
          )
        ] })
      ]
    }
  ) });
}, "ConfirmDialog");
export {
  ConfirmDialog as C
};

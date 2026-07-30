var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { j as jsxRuntimeExports, U as Ue, h } from "./index-CFVMMdzN.js";
import { s as scopedPortalProps } from "./portal-contract-CYklgrML.js";
import "./mfe.config-tfp2F-Dw.js";
import { c as useEscapeHandler } from "./use-scroll-into-view-ref-D02hTq9p.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
const { useCallback, useEffect, useId, useRef } = await importShared("react");
const { createPortal } = await importShared("react-dom");
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
const Sheet = /* @__PURE__ */ __name(({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  dismissOnOverlayClick = false,
  className
}) => {
  const panelRef = useRef(null);
  const restoreFocusTo = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  useEffect(() => {
    var _a;
    if (!open) return;
    restoreFocusTo.current = document.activeElement;
    (_a = panelRef.current) == null ? void 0 : _a.focus();
    return () => {
      var _a2;
      if ((_a2 = restoreFocusTo.current) == null ? void 0 : _a2.isConnected) restoreFocusTo.current.focus();
    };
  }, [open]);
  const close = useCallback(() => onOpenChange(false), [onOpenChange]);
  const handleEscape = useCallback(() => {
    var _a;
    if ((_a = panelRef.current) == null ? void 0 : _a.contains(document.activeElement)) close();
  }, [close]);
  useEscapeHandler(open, handleEscape);
  const handleKeyDown = /* @__PURE__ */ __name((event) => {
    if (event.key !== "Tab" || !panelRef.current) return;
    const focusable = Array.from(
      panelRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
    ).filter((element) => element.offsetParent !== null);
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || active === panelRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }, "handleKeyDown");
  if (!open) return null;
  return createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...scopedPortalProps, className: "fixed inset-0 z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50",
          onClick: dismissOnOverlayClick ? close : void 0,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: panelRef,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": titleId,
          "aria-describedby": description ? descriptionId : void 0,
          tabIndex: -1,
          onKeyDown: handleKeyDown,
          className: h(
            "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-trax-neutral-0 shadow-trax-menu outline-none",
            className
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 border-b border-trax-neutral-30 px-5 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: titleId, className: "text-base font-semibold text-trax-neutral-600", children: title }),
                description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: descriptionId, className: "mt-0.5 text-sm text-trax-grey-600", children: description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ue,
                {
                  variant: "ghost-neutral",
                  size: "icon",
                  onClick: close,
                  "aria-label": "Close panel",
                  className: "shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "size-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trax-custom-scrollbar flex-1 px-5 py-4", children }),
            footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end gap-3 border-t border-trax-neutral-30 px-5 py-4", children: footer })
          ]
        }
      )
    ] }),
    document.body
  );
}, "Sheet");
export {
  Sheet as S
};

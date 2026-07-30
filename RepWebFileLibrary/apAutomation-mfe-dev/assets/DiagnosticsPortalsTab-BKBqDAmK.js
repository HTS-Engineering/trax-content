var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, D as Ds, M as Ms, k as Es, l as ks, V as Vs, B as Ba, X as Xa, v as gn, a2 as ja, e as $r, f as Tr, U as Ue, g as zr, A as Ar, Q as Qs, a6 as js, a7 as Gs, a8 as qs, O as Os, a3 as wt, a4 as zt, a5 as yt, I as Mt, L as Et, a0 as Pt, P as Ps, n as jr, h } from "./index-CFVMMdzN.js";
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { S as Sheet } from "./Sheet-C_e0O9pS.js";
import { C as ConfirmDialog } from "./ConfirmDialog-BPwbNvaf.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
import { T as TOOLTIP_DELAY_QUICK } from "./use-scroll-into-view-ref-D02hTq9p.js";
import { a as SCOPE_CLASS, C as CONTAINER_ID } from "./mfe.config-tfp2F-Dw.js";
import { s as scopedPortalProps } from "./portal-contract-CYklgrML.js";
const { useState: useState$3 } = await importShared("react");
const OPTIONS = [
  { value: "a", label: "Radix Select - popper wrapper" },
  { value: "b", label: "Portalled to body, not into the dialog" },
  { value: "c", label: "Must land above the dialog content" }
];
const ITEMS = [
  { value: "one", label: "Multi-select item one" },
  { value: "two", label: "Multi-select item two" },
  { value: "three", label: "Multi-select item three", description: "With a description line" }
];
const searchLayers = /* @__PURE__ */ __name((query) => Promise.resolve(
  ["Overlay", "Dialog content", "Popper wrapper", "Sonner toaster"].filter((layer) => layer.toLowerCase().includes(query.trim().toLowerCase())).map((layer) => ({ value: layer, label: layer }))
), "searchLayers");
const NestedPortalDialog = /* @__PURE__ */ __name(({ open, onOpenChange }) => {
  const [select, setSelect] = useState$3("");
  const [items, setItems] = useState$3([]);
  const [layer, setLayer] = useState$3(null);
  const [date, setDate] = useState$3(void 0);
  const [isSecondDialogOpen, setSecondDialogOpen] = useState$3(false);
  const [isConfirmOpen, setConfirmOpen] = useState$3(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ds, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ms,
      {
        className: "max-h-[85vh] max-w-2xl",
        onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Es, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ks, { className: "text-base font-semibold text-trax-neutral-600", children: "Nested portals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm text-trax-grey-600", children: "Open each control and check two things: it is styled, and it is on top." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "trax-custom-scrollbar -mx-1 max-h-[55vh] space-y-4 px-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Ba,
              {
                label: "Select inside a dialog",
                placeholder: "Open me",
                options: OPTIONS,
                value: select,
                onValueChange: setSelect
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Xa,
              {
                label: "Multi-select inside a dialog",
                items: ITEMS,
                value: items,
                onValueChange: setItems,
                placeholder: "Open me",
                modal: true,
                triggerClassName: "w-full"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              gn,
              {
                label: "Searchable popover inside a dialog",
                placeholder: "Type to search the layers",
                value: layer,
                onValueChange: setLayer,
                onSearch: searchLayers,
                searchOnFocus: true,
                portal: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ja,
              {
                label: "Calendar inside a dialog",
                value: date,
                onChange: setDate,
                placeholder: "Open the calendar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs($r, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tr, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "outlined", size: "sm", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "more-vertical", className: "size-4" }), children: "Dropdown with a submenu" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(zr, { align: "start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ar, { onSelect: /* @__PURE__ */ __name(() => Qs.success("Menu item chosen"), "onSelect"), children: "Plain item" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(js, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Gs, { children: "One level deeper" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(qs, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ar, { onSelect: /* @__PURE__ */ __name(() => Qs.success("Submenu item chosen"), "onSelect"), children: "Submenu item" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Os, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ar, { variant: "destructive", onSelect: /* @__PURE__ */ __name(() => setConfirmOpen(true), "onSelect"), children: "Item that opens a dialog" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(wt, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(zt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "outlined", size: "sm", children: "Popover" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(yt, { className: "w-64 text-sm text-trax-grey-600", children: "A popover portal, opened from inside a dialog. Both are children of the body." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Mt, { delayDuration: TOOLTIP_DELAY_QUICK, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Et, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "outlined", size: "sm", children: "Tooltip" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { variant: "dark", size: "sm", children: "Tooltips portal too" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ue,
                {
                  variant: "outlined",
                  size: "sm",
                  onClick: /* @__PURE__ */ __name(() => Qs.success("A toast has to clear every dialog layer"), "onClick"),
                  children: "Toast"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-dashed border-trax-neutral-40 p-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-trax-neutral-900", children: "Dialog over dialog" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: "Two overlays, two contents, four nodes under the body. Escape must close only the top one, and focus must come back here when it does." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ue,
                {
                  variant: "soft",
                  size: "sm",
                  className: "mt-2.5",
                  onClick: /* @__PURE__ */ __name(() => setSecondDialogOpen(true), "onClick"),
                  children: "Open a second dialog"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ps, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: /* @__PURE__ */ __name(() => onOpenChange(false), "onClick"), className: "min-w-20", children: "Close" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ds, { open: isSecondDialogOpen, onOpenChange: setSecondDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ms, { className: "max-w-md", onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Es, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ks, { className: "text-base font-semibold text-trax-neutral-600", children: "Second dialog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Vs, { className: "text-sm text-trax-grey-600", children: "Its own select is a third layer. If it opens above this dialog, the stacking holds all the way down." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ba,
        {
          label: "Third layer",
          placeholder: "Open me",
          options: OPTIONS,
          value: select,
          onValueChange: setSelect
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ps, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", onClick: /* @__PURE__ */ __name(() => setSecondDialogOpen(false), "onClick"), className: "min-w-20", children: "Close" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isConfirmOpen,
        onOpenChange: setConfirmOpen,
        title: "Opened from a menu item",
        description: "The menu unmounted as this appeared. Focus has to end up somewhere sensible rather than on the body.",
        confirmLabel: "Fine",
        variant: "primary",
        onConfirm: /* @__PURE__ */ __name(() => setConfirmOpen(false), "onConfirm")
      }
    )
  ] });
}, "NestedPortalDialog");
const { useCallback, useEffect, useState: useState$2 } = await importShared("react");
const INTERESTING_ATTRIBUTE = /^(data-radix|data-slot|data-sonner|data-mfe|data-state|role|id)/;
function describe(element) {
  return Array.from(element.attributes).filter((attribute) => INTERESTING_ATTRIBUTE.test(attribute.name)).map((attribute) => attribute.value ? `${attribute.name}="${attribute.value}"` : attribute.name);
}
__name(describe, "describe");
function scan() {
  const mfeRoot = document.getElementById(CONTAINER_ID) ?? document.getElementById("root");
  return Array.from(document.body.children).filter((child) => {
    if (child === mfeRoot) return false;
    if (child.tagName === "SCRIPT" || child.tagName === "STYLE" || child.tagName === "LINK") return false;
    return true;
  }).map((child, index) => {
    const markers = describe(child);
    const nested = child.querySelector("[data-slot],[data-radix-popper-content-wrapper]");
    return {
      id: `${child.tagName}-${index}`,
      tag: child.tagName.toLowerCase(),
      markers: markers.length > 0 ? markers : nested ? describe(nested) : ["no markers"],
      hasScopeClass: child.classList.contains(SCOPE_CLASS),
      zIndex: getComputedStyle(child).zIndex,
      // Anything the provider recognised. A node without the class is either the
      // host's own, or ours and unmarked - the two cases this panel separates.
      isOurs: child.classList.contains(SCOPE_CLASS)
    };
  });
}
__name(scan, "scan");
const PortalInventory = /* @__PURE__ */ __name(() => {
  const [rows, setRows] = useState$2([]);
  const refresh = useCallback(() => setRows(scan()), []);
  useEffect(() => {
    refresh();
    let frame = null;
    const observer = new MutationObserver(() => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        refresh();
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "data-state", "style"]
    });
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [refresh]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Live portal inventory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-trax-grey-600", children: [
          "Direct children of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono", children: "<body>" }),
          ", excluding the MFE container. Updates as you open things."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "outlined",
          size: "sm",
          onClick: refresh,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: "size-4" }),
          children: "Rescan"
        }
      )
    ] }),
    rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-lg border border-dashed border-trax-neutral-40 px-3.5 py-6 text-center text-sm text-trax-neutral-100", children: "Nothing but the MFE container. Open a dialog or a dropdown." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: h(
          "flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border px-3 py-2 text-xs",
          row.isOurs ? "border-trax-green-100 bg-trax-green-50" : "border-trax-neutral-40 bg-trax-neutral-10"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "font-mono font-semibold text-trax-neutral-900", children: [
            "<",
            row.tag,
            ">"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            jr,
            {
              variant: "outline",
              className: h(
                "rounded-full px-2 py-0.5 text-xs",
                row.hasScopeClass ? "border-trax-green-100 bg-trax-green-100 text-trax-green-800" : "border-trax-neutral-40 bg-trax-neutral-20 text-trax-neutral-500"
              ),
              children: row.hasScopeClass ? `.${SCOPE_CLASS}` : "not stamped"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-trax-neutral-100", children: [
            "z-index: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: row.zIndex })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate font-mono text-trax-grey-600", children: row.markers.join(" ") })
        ]
      },
      row.id
    )) })
  ] });
}, "PortalInventory");
const { useState: useState$1 } = await importShared("react");
const { createPortal } = await importShared("react-dom");
function Panel({ isMarked, onClose }) {
  const marking = isMarked ? scopedPortalProps : {};
  return createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ...marking,
        className: "fixed inset-x-4 bottom-4 z-50 rounded-xl border border-trax-primary-blue-300 bg-trax-neutral-0 p-4 shadow-trax-menu",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-trax-neutral-900", children: isMarked ? "Marked portal" : "Unmarked portal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-xl text-sm text-trax-grey-600", children: isMarked ? `This node carries data-mfe-portal, so the provider stamped it with .${SCOPE_CLASS} and every class here resolved.` : "This node carries no marker. Same classes, no scope class, so the border, background, radius, shadow, padding and type are all gone. Only position and z-index survive, because those utilities are also emitted unscoped." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "soft", size: "sm", onClick: onClose, children: "Close" })
        ] })
      }
    ),
    document.body
  );
}
__name(Panel, "Panel");
const UnmarkedPortalProbe = /* @__PURE__ */ __name(() => {
  const [shown, setShown] = useState$1("none");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "outlined",
          size: "sm",
          onClick: /* @__PURE__ */ __name(() => setShown("marked"), "onClick"),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "check-circle", className: "size-4" }),
          children: "Show the marked one"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "outlined-error",
          size: "sm",
          onClick: /* @__PURE__ */ __name(() => setShown("unmarked"), "onClick"),
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "alert-triangle", className: "size-4" }),
          children: "Show the unmarked one"
        }
      )
    ] }),
    shown !== "none" && // `key` is load-bearing. Without it React reuses the same DOM node when
    // switching between the two, and only removes the `data-mfe-portal`
    // attribute - while the scope class, which the provider added imperatively
    // and React knows nothing about, stays on the node. The unmarked panel then
    // renders fully styled and the comparison silently says the opposite of the
    // truth.
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { isMarked: shown === "marked", onClose: /* @__PURE__ */ __name(() => setShown("none"), "onClose") }, shown)
  ] });
}, "UnmarkedPortalProbe");
const { useState } = await importShared("react");
function Probe({ title, expectation, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 rounded-lg border border-trax-neutral-30 p-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-trax-neutral-900", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: expectation })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children })
  ] });
}
__name(Probe, "Probe");
const LAYER_OPTIONS = [
  { value: "popover", label: "Popover content" },
  { value: "select", label: "Select content" },
  { value: "both", label: "Both, stacked" }
];
const PortalMatrix = /* @__PURE__ */ __name(() => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isSheetDialogOpen, setSheetDialogOpen] = useState(false);
  const [sheetSelect, setSheetSelect] = useState("");
  const [popoverSelect, setPopoverSelect] = useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Probe,
        {
          title: "Everything inside one dialog",
          expectation: "Select, multi-select, searchable popover, calendar, submenu, tooltip, toast, and a second dialog on top. All styled, all above the dialog.",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "primary",
              size: "sm",
              onClick: /* @__PURE__ */ __name(() => setDialogOpen(true), "onClick"),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "layers", className: "size-4" }),
              children: "Open the nested dialog"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Probe,
        {
          title: "A portal this MFE owns",
          expectation: "A panel through createPortal, marked with scopedPortalProps. A select inside it, and a library dialog over it.",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              variant: "primary",
              size: "sm",
              onClick: /* @__PURE__ */ __name(() => setSheetOpen(true), "onClick"),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "panel-right", className: "size-4" }),
              children: "Open the side panel"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Probe,
        {
          title: "Marked against unmarked",
          expectation: "Identical markup and classes. The unmarked one loses everything the scope class carries, which is the whole isolation mechanism seen from the failing side.",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(UnmarkedPortalProbe, {})
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Probe,
        {
          title: "Popover holding a select",
          expectation: "Two poppers, no dialog. The inner one has to sit above the outer one and stay clickable.",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(wt, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(zt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "outlined", size: "sm", children: "Open a popover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(yt, { className: "w-72 space-y-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-trax-grey-600", children: "A select inside a popover. Both are portalled to the body." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ba,
                {
                  label: "Layer",
                  placeholder: "Open me",
                  options: LAYER_OPTIONS,
                  value: popoverSelect,
                  onValueChange: setPopoverSelect
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ue,
                {
                  variant: "soft",
                  size: "sm",
                  className: "w-full",
                  onClick: /* @__PURE__ */ __name(() => Qs.success("Toast from inside a popover"), "onClick"),
                  children: "Toast from here"
                }
              )
            ] })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortalInventory, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NestedPortalDialog, { open: isDialogOpen, onOpenChange: setDialogOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sheet,
      {
        open: isSheetOpen,
        onOpenChange: setSheetOpen,
        title: "Product-owned panel",
        description: "createPortal into the body, marked as ours",
        footer: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { variant: "primary", onClick: /* @__PURE__ */ __name(() => setSheetDialogOpen(true), "onClick"), children: "Open a dialog over this" }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-trax-grey-600", children: [
            "This panel is not a library component. It reaches the body through",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs", children: "createPortal" }),
            " and says it is ours with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs", children: "data-mfe-portal" }),
            ". Everything you can see about it - the background, the border, the spacing, the type - depends on that attribute."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ba,
            {
              label: "A select inside our own portal",
              placeholder: "Open me",
              options: LAYER_OPTIONS,
              value: sheetSelect,
              onValueChange: setSheetSelect
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-trax-grey-600", children: "Press Escape with focus in here and the panel closes. Open the dialog below first, and Escape closes the dialog instead - the panel checks whether focus is still inside it before acting, so the topmost layer wins without either one knowing about the other." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: isSheetDialogOpen,
        onOpenChange: setSheetDialogOpen,
        title: "Dialog over a hand-rolled portal",
        description: "A Radix dialog is appended after the panel, so it stacks above it on DOM order alone. Escape here must not also close the panel behind it.",
        confirmLabel: "Understood",
        variant: "primary",
        onConfirm: /* @__PURE__ */ __name(() => setSheetDialogOpen(false), "onConfirm")
      }
    )
  ] });
}, "PortalMatrix");
function DiagnosticsPortalsTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalMatrix, {});
}
__name(DiagnosticsPortalsTab, "DiagnosticsPortalsTab");
export {
  DiagnosticsPortalsTab as default
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, h, Y as Yn, U as Ue, w as oi } from "./index-CFVMMdzN.js";
import { importShared } from "./__federation_fn_import-BLt6jPdS.js";
import { c as SCOPE_PREFIX, a as SCOPE_CLASS, C as CONTAINER_ID } from "./mfe.config-tfp2F-Dw.js";
import { I as Icon } from "./Icon-DkzRydVK.js";
const { useEffect: useEffect$2, useRef, useState: useState$2 } = await importShared("react");
const SAMPLES = [
  { id: "spin", label: "animate-spin", className: "animate-spin", source: "Tailwind" },
  { id: "pulse", label: "animate-pulse", className: "animate-pulse", source: "Tailwind" },
  { id: "enter", label: "animate-in", className: "animate-in fade-in-0", source: "this MFE" }
];
const AnimationProbe = /* @__PURE__ */ __name(() => {
  const containerRef = useRef(null);
  const [resolved, setResolved] = useState$2({});
  useEffect$2(() => {
    const frame = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;
      const next = {};
      for (const sample of SAMPLES) {
        const element = container.querySelector(`[data-sample="${sample.id}"]`);
        if (element) next[sample.id] = getComputedStyle(element).animationName;
      }
      setResolved(next);
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Keyframe namespacing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: [
        "Every name should be prefixed with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "font-mono text-xs", children: [
          SCOPE_PREFIX,
          "-"
        ] }),
        ". A bare",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs", children: "spin" }),
        " or",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs", children: "pulse" }),
        " here means the rename missed it, and the host owns the animation."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "space-y-2", children: SAMPLES.map((sample) => {
      const name = resolved[sample.id];
      const isNamespaced = Boolean(name && name.startsWith(`${SCOPE_PREFIX}-`));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-trax-neutral-30 px-3.5 py-2.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "data-sample": sample.id,
                "aria-hidden": "true",
                className: h("size-4 shrink-0 rounded-full bg-trax-primary-blue-600", sample.className)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "font-mono text-xs font-semibold text-trax-neutral-900", children: [
              ".",
              sample.label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-trax-neutral-100", children: [
              "from ",
              sample.source
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon,
                {
                  name: isNamespaced ? "check-circle" : "alert-triangle",
                  className: h("size-4", isNamespaced ? "text-trax-green-500" : "text-trax-yellow-800")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "code",
                {
                  className: h(
                    "font-mono text-xs",
                    isNamespaced ? "text-trax-green-800" : "text-trax-yellow-800"
                  ),
                  children: name ?? "reading..."
                }
              )
            ] })
          ]
        },
        sample.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 px-3.5 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { className: "size-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-trax-grey-600", children: "The library's own spinner, for comparison. Its keyframes were renamed on the way out of the build too, even though its source is a pre-built dist." })
    ] })
  ] });
}, "AnimationProbe");
const RESET_EXPECTATIONS = [
  "Headings inherit their size and weight - h1 through h6 all look like body text",
  "Paragraphs, lists and pre have no margin or padding",
  "Lists have no bullets or numbers",
  "Links inherit the surrounding colour and have no underline",
  "Table cells have no padding and the borders are collapsed",
  "Form controls inherit the font, size and colour"
];
function Sample() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Heading level 1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Heading level 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "A paragraph with an ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reset-probe", children: "inline link" }),
      " in it."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Unordered item" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Second item" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ordered item" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: "A block quote." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: "preformatted  text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Header" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Header" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Cell" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Cell" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", children: "A button element" })
  ] });
}
__name(Sample, "Sample");
const ElementResetProbe = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", id: "reset-probe", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Element reset" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: "The same markup twice. On the left it carries no classes at all, so what you see is the reset. On the right the utilities are back." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-xs text-trax-grey-600", children: RESET_EXPECTATIONS.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "-" }),
    line
  ] }, line)) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-trax-neutral-30 p-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs font-semibold tracking-wide text-trax-neutral-100 uppercase", children: "No classes - the reset" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sample, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-trax-neutral-30 p-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs font-semibold tracking-wide text-trax-neutral-100 uppercase", children: "With utilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "[&_a]:text-trax-primary-blue-600 [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-trax-neutral-40 [&_blockquote]:pl-3 [&_blockquote]:text-trax-grey-600 [&_h1]:text-xl [&_h1]:font-semibold [&_h3]:mt-2 [&_h3]:text-base [&_h3]:font-semibold [&_li]:mb-0.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:my-2 [&_pre]:rounded [&_pre]:bg-trax-neutral-20 [&_pre]:p-2 [&_pre]:font-mono [&_pre]:text-xs [&_table]:my-2 [&_table]:w-full [&_td]:border [&_td]:border-trax-neutral-30 [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:border-trax-neutral-30 [&_th]:bg-trax-neutral-10 [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_ul]:list-disc [&_ul]:pl-5 [&>button]:mt-2 [&>button]:rounded-lg [&>button]:bg-trax-primary-blue-600 [&>button]:px-3 [&>button]:py-1.5 [&>button]:text-trax-neutral-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sample, {}) })
    ] })
  ] })
] }), "ElementResetProbe");
const { useEffect: useEffect$1, useState: useState$1 } = await importShared("react");
const { createPortal } = await importShared("react-dom");
const POLITE_HOST_CSS = `
h1, h2, h3, h4, h5, h6 { font-family: "Times New Roman", Times, serif; font-size: 30px; color: #7a0026; margin: 18px 0; }
p { font-family: Georgia, serif; font-size: 17px; margin: 14px 0; }
ul, ol { list-style: square; padding-left: 36px; margin: 14px 0; }
a { color: #0a7d00; text-decoration: underline; }
button { background: #ffd9f2; color: #7a0026; border: 2px solid #7a0026; border-radius: 0; padding: 8px 14px; font-family: cursive; }
table td, table th { padding: 14px; border: 2px dashed #7a0026; }
input, select, textarea { font-family: cursive; font-size: 18px; background: #fff8dc; }
`;
const HOSTILE_HOST_CSS = `
h1, h2, h3, h4, h5, h6 { font-size: 30px !important; color: #7a0026 !important; }
button { background: #ffd9f2 !important; color: #7a0026 !important; }
a { color: #0a7d00 !important; }
`;
const STYLE_ID = `${SCOPE_PREFIX}-host-css-probe`;
function setHostCss(css) {
  const existing = document.getElementById(STYLE_ID);
  if (existing) existing.remove();
  if (!css) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.append(style);
}
__name(setHostCss, "setHostCss");
function LeakProbe() {
  return createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "fixed",
          right: "1rem",
          bottom: "1rem",
          zIndex: 60,
          width: "22rem",
          background: "#ffffff",
          border: "2px solid #7a0026",
          padding: "12px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Host-owned region" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This node has no scope class. It should keep the browser's own heading size, list bullets and link colour - and pick up the simulated host CSS when that is switched on." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bulleted item" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Another item" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#host-css-probe", children: "A host link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", children: "A host button" })
        ]
      }
    ),
    document.body
  );
}
__name(LeakProbe, "LeakProbe");
const HostCssProbe = /* @__PURE__ */ __name(() => {
  const [mode, setMode] = useState$1("off");
  const [showLeakProbe, setShowLeakProbe] = useState$1(false);
  useEffect$1(() => {
    setHostCss(mode === "polite" ? POLITE_HOST_CSS : mode === "hostile" ? HOSTILE_HOST_CSS : null);
  }, [mode]);
  useEffect$1(() => () => setHostCss(null), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", id: "host-css-probe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Host CSS simulation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: "Injects a stylesheet into the document head, after this MFE's own, and leaves it unlayered - the position a host page is always in. Everything in this MFE should look unchanged." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: ["off", "polite", "hostile"].map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        variant: mode === option ? "primary" : "outlined",
        size: "sm",
        onClick: /* @__PURE__ */ __name(() => setMode(option), "onClick"),
        children: option === "off" ? "No host CSS" : option === "polite" ? "Typical host CSS" : "Host CSS with !important"
      },
      option
    )) }),
    mode !== "off" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: h(
          "flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-sm",
          mode === "polite" ? "border-trax-green-100 bg-trax-green-50 text-trax-green-800" : "border-trax-yellow-200 bg-trax-yellow-100 text-trax-yellow-800"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              name: mode === "polite" ? "check-circle" : "alert-triangle",
              className: "mt-0.5 size-4 shrink-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: mode === "polite" ? "Element selectors with no !important. Nothing inside the MFE should have moved - a single utility class outranks a bare element selector, and every utility ships unlayered so the host cannot win on layer order either." : "This is the case the design does not cover. !important sits outside the specificity argument, so headings and buttons here are now the host's. Worth knowing the limit rather than discovering it on a Friday." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 rounded-lg border border-trax-neutral-30 bg-trax-neutral-10 px-3.5 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-trax-neutral-900", children: "Show an unscoped region on the page" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-trax-grey-600", children: "A node with no scope class, standing in for the host's own DOM. It proves the reset does not escape: the heading, the bullets and the link colour stay the browser's." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        oi,
        {
          checked: showLeakProbe,
          onCheckedChange: setShowLeakProbe,
          "aria-label": "Show an unscoped region on the page"
        }
      )
    ] }),
    showLeakProbe && /* @__PURE__ */ jsxRuntimeExports.jsx(LeakProbe, {})
  ] });
}, "HostCssProbe");
const { useCallback, useEffect, useState } = await importShared("react");
const SAMPLED_TOKENS = [
  "--color-trax-primary-blue-600",
  "--color-trax-neutral-900",
  "--color-trax-red-500",
  "--shadow-trax-menu",
  "--spacing"
];
function read() {
  const container = document.getElementById(CONTAINER_ID) ?? document.getElementById("root");
  if (!container) {
    return { containerFound: false, containerHasScopeClass: false, readings: [] };
  }
  const scoped = getComputedStyle(container);
  const documentRoot = getComputedStyle(document.documentElement);
  return {
    containerFound: true,
    containerHasScopeClass: container.classList.contains(SCOPE_CLASS),
    readings: SAMPLED_TOKENS.map((token) => ({
      token,
      onScope: scoped.getPropertyValue(token).trim(),
      onDocumentRoot: documentRoot.getPropertyValue(token).trim()
    }))
  };
}
__name(read, "read");
const TokenProbe = /* @__PURE__ */ __name(() => {
  const [snapshot, setSnapshot] = useState({
    containerFound: false,
    containerHasScopeClass: false,
    readings: []
  });
  const refresh = useCallback(() => setSnapshot(read()), []);
  useEffect(refresh, [refresh]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-trax-neutral-900", children: "Design tokens" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-sm text-trax-grey-600", children: [
          "Read from the MFE container and from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs", children: ":root" }),
          ". The second column should be empty for every row."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          variant: "outlined",
          size: "sm",
          onClick: refresh,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "refresh", className: "size-4" }),
          children: "Re-read"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: h(
          "flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm",
          snapshot.containerHasScopeClass ? "border-trax-green-100 bg-trax-green-50 text-trax-green-800" : "border-trax-red-100 bg-trax-red-100 text-trax-red-600"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              name: snapshot.containerHasScopeClass ? "check-circle" : "x-circle",
              className: "size-4 shrink-0"
            }
          ),
          snapshot.containerFound ? snapshot.containerHasScopeClass ? `The container carries .${SCOPE_CLASS}, so every scoped rule applies inside it.` : `The container is missing .${SCOPE_CLASS}. Nothing in this MFE would be styled.` : `No element with id "${CONTAINER_ID}" or "root" on the page.`
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trax-custom-scrollbar overflow-x-auto rounded-lg border border-trax-neutral-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-2xl text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-trax-neutral-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "Token" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "On the scope class" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold tracking-wide text-trax-neutral-400 uppercase", children: "On :root" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: snapshot.readings.map((reading) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-trax-neutral-30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-xs text-trax-neutral-700", children: reading.token }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-xs text-trax-neutral-900", children: reading.onScope || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-trax-red-600", children: "missing" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-xs", children: reading.onDocumentRoot ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-trax-red-600", children: reading.onDocumentRoot }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-trax-green-800", children: "not published" }) })
      ] }, reading.token)) })
    ] }) })
  ] });
}, "TokenProbe");
function DiagnosticsStylesTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TokenProbe, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ElementResetProbe, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimationProbe, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HostCssProbe, {})
  ] });
}
__name(DiagnosticsStylesTab, "DiagnosticsStylesTab");
export {
  DiagnosticsStylesTab as default
};

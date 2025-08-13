import { importShared } from './__federation_fn_import-Bi7vPVnK.js';
import { j as jsxRuntimeExports } from './__federation_expose_Mount-BlhroOrS.js';
import { N as Navigation, B as Button } from './Navigation-CsZ1fjOa.js';

const {useState} = await importShared('react');

function ButtonPage() {
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleAsyncAction = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    setLoading(false);
    setClickCount((prev) => prev + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-md p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Button Components" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Button Variants" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "default", children: "Default" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", children: "Destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Outline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", children: "Secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", children: "Ghost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "link", children: "Link" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Button Sizes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", children: "Small" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "default", children: "Default" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", children: "Large" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", className: "h-10 w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Interactive Examples" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => setClickCount((prev) => prev + 1),
                  className: "bg-blue-600 hover:bg-blue-700",
                  children: [
                    "Click Me (",
                    clickCount,
                    ")"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setClickCount(0),
                  children: "Reset Counter"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleAsyncAction,
                disabled: loading,
                className: "bg-green-600 hover:bg-green-700",
                children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" }),
                  "Loading..."
                ] }) : "Async Action"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Button States" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Normal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: true, children: "Disabled" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-red-600 hover:bg-red-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
              "With Icon"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Custom Styled Buttons" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200", children: "Gradient Button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200", children: "Bordered Button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200", children: "Rounded Button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300", children: "Floating Effect" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Button Groups" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-lg shadow-sm", role: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700", children: "Left" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700", children: "Middle" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700", children: "Right" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", children: "Action 1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", children: "Action 2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", children: "Action 3" })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}

export { ButtonPage as default };

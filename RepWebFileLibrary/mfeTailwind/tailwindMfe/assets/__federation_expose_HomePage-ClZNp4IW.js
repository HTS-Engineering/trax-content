import { importShared } from './__federation_fn_import-Bi7vPVnK.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { Navigation, B as Button } from './__federation_expose_Navigation-C1b5tCXL.js';

const {useNavigate} = await importShared('react-router-dom');
function HomePage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-8", children: "React Components Demo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 mb-12 max-w-3xl mx-auto", children: "Welcome to our component showcase! This project demonstrates a modern React 19 + Vite architecture following feature-sliced design principles." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Input Components" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Explore various input components including text fields, textareas, and form controls." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "border bg-indigo-200 hover:bg-indigo-300  border-red-400 border-dotted shadow-lg hover:shadow-md shadow-black/20",
              onClick: () => navigate("input"),
              children: "View Input Demo"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Button Components" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Discover different button variants, sizes, and interactive states." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#/button",
              className: "inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors",
              children: "View Button Demo"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Datepicker Components" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Experience modern date selection components with various configurations." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#/datepicker",
              className: "inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors",
              children: "View Datepicker Demo"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}

export { HomePage as default };

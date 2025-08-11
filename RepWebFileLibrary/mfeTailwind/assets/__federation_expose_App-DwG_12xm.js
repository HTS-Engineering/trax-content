const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/__federation_expose_HomePage-ClZNp4IW.js","assets/__federation_fn_import-Bi7vPVnK.js","assets/jsx-runtime-XI9uIe3W.js","assets/__federation_expose_Navigation-C1b5tCXL.js","assets/__federation_expose_InputPage-FEFI7kDA.js","assets/__federation_expose_ButtonPage-CrzyuLJM.js","assets/__federation_expose_DatepickerPage-BKl_JwCP.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { _ as __vitePreload } from './preload-helper-DozDN73s.js';
import { importShared } from './__federation_fn_import-Bi7vPVnK.js';

const {createHashRouter,RouterProvider:ReactRouterProvider} = await importShared('react-router-dom');

const {lazy,Suspense} = await importShared('react');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = lazy(async () => {
  await delay(1e3);
  return __vitePreload(() => import('./__federation_expose_HomePage-ClZNp4IW.js'),true              ?__vite__mapDeps([0,1,2,3]):void 0);
});
const InputPage = lazy(async () => {
  await delay(1500);
  return __vitePreload(() => import('./__federation_expose_InputPage-FEFI7kDA.js'),true              ?__vite__mapDeps([4,1,2,3]):void 0);
});
const ButtonPage = lazy(async () => {
  await delay(1200);
  return __vitePreload(() => import('./__federation_expose_ButtonPage-CrzyuLJM.js'),true              ?__vite__mapDeps([5,1,2,3]):void 0);
});
const DatepickerPage = lazy(async () => {
  await delay(1800);
  return __vitePreload(() => import('./__federation_expose_DatepickerPage-BKl_JwCP.js'),true              ?__vite__mapDeps([6,1,2,3]):void 0);
});
const router = createHashRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {})
  },
  {
    path: "/input",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(InputPage, {})
  },
  {
    path: "/button",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonPage, {})
  },
  {
    path: "/datepicker",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(DatepickerPage, {})
  }
]);
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" }) });
function RouterProvider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRouterProvider, { router }) });
}

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, {});
}

export { App as default };

import { c as createLucideIcon, j as jsxRuntimeExports, e as et } from "./__federation_expose_Mount-B-4As_8k.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
];
const Receipt = createLucideIcon("receipt", __iconNode);
const ExpensesList = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(et, { className: "p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-gray-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-12 h-12 mx-auto mb-4 text-gray-400" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "No expenses yet" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: 'Click "New Expense" to add your first expense' })
  ] }) }) });
};
export {
  ExpensesList as E
};

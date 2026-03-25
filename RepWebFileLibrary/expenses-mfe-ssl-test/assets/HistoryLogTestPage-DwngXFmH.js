import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { h as cs, i as gs, Q as Qn, p as ps, a5 as bt } from "./configuration-DWZWsCI4.js";
import { E as ExpenseFormHistoryLog } from "./ExpenseFormHistoryLog-BFEShUmm.js";
const { useState } = await importShared("react");
const HistoryLogTestPage = () => {
  const [expenseFormId, setExpenseFormId] = useState("12345");
  const handleExpenseFormIdChange = (value) => {
    if (value === "" || /^\d+$/.test(value)) {
      setExpenseFormId(value);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-exp-neutral-900 mb-6", children: "Expense Form History Log - Test Page" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(cs, { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(gs, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Qn, { title: "Component Test" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-600 mt-2", children: "View the expense form component for a demo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ps, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-exp-neutral-900 mb-3", children: "Custom Input Parameters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-exp-neutral-700 mb-1", children: "Expense Form ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                bt,
                {
                  value: expenseFormId,
                  onChange: (e) => handleExpenseFormIdChange(e.target.value),
                  placeholder: "Enter expense form ID",
                  type: "text"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-exp-neutral-900 mb-3", children: "Demo Component (Click to Open)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-700 mb-4", children: "Click the button below to open the history log popover. The component will fetch mock data using the custom parameters above." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-white p-4 rounded-lg items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExpenseFormHistoryLog,
              {
                expenseFormId: parseInt(expenseFormId) || 0
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-exp-neutral-100 pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-exp-neutral-900 mb-3", children: "Usage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-700 mb-4", children: "Click the status button above to open the history log popover. The button text and color reflect the most recent status." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-exp-neutral-900 mb-3", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-exp-neutral-700 mb-4", children: "Since this component is used within an expense form that is submitted at least once, the history log will always show at least one entry on a form that exists. The blank states are just saftey nets and should never happen in normal operation." })
        ] })
      ] })
    ] })
  ] });
};
export {
  HistoryLogTestPage
};

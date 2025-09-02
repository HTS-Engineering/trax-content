import { c as createLucideIcon, j as jsxRuntimeExports, e as et, t as tt, K, F as FileText, o as ot, I as Ie, J, R as Re, L as Le, Z as Ze, a as Fe, C as ChartColumn, M as Me, u as useNavigate, _ as _t, A as Ae, G as Ge, $ as $e, H as He, U as Ue, b as I } from "./__federation_expose_Mount-DYWP1syE.js";
import { E as ExpensesList } from "./ExpensesList-DWSOxi1-.js";
import { importShared } from "./__federation_fn_import-CFnudcB9.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
];
const FileSpreadsheet = createLucideIcon("file-spreadsheet", __iconNode$1);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }]
];
const MessageSquareMore = createLucideIcon("message-square-more", __iconNode);
const { useState } = await importShared("react");
const ExpenseForm = ({ onSubmit }) => {
  console.log("onSubmit", onSubmit);
  const [formData, setFormData] = useState({
    expenseType: "",
    vendor: "",
    expenseDate: "",
    expenseLocation: "",
    paymentMethod: "",
    netAmount: "",
    totalAmount: "",
    businessPurpose: "",
    expenseDescription: "",
    additionalComments: ""
  });
  const [allocations, setAllocations] = useState([
    {
      id: "1",
      name: "Project",
      percentage: 50,
      amount: 35.8,
      type: "project"
    },
    {
      id: "3",
      name: "CCR Team",
      percentage: 25,
      amount: 17.9,
      type: "team"
    }
  ]);
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const expenseTypeOptions = [
    { value: "travel", label: "Travel" },
    { value: "meals", label: "Meals & Entertainment" },
    { value: "supplies", label: "Office Supplies" },
    { value: "software", label: "Software & Subscriptions" },
    { value: "other", label: "Other" }
  ];
  const paymentMethodOptions = [
    { value: "ca6252", label: "CA****6252" },
    { value: "ca1234", label: "CA****1234" },
    { value: "cash", label: "Cash" },
    { value: "personal", label: "Personal Card" }
  ];
  const expenseLocationOptions = [
    { value: "ontario-canada", label: "Ontario, Canada" },
    { value: "british-columbia", label: "British Columbia, Canada" },
    { value: "alberta", label: "Alberta, Canada" },
    { value: "quebec", label: "Quebec, Canada" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(et, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(tt, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        K,
        {
          title: "EXPENSE DETAILS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ot, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ie,
          {
            label: "Expense type",
            placeholder: "Select expense type",
            options: expenseTypeOptions,
            value: formData.expenseType,
            onValueChange: (value) => handleInputChange("expenseType", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          J,
          {
            label: "Vendor",
            placeholder: "Enter vendor name",
            value: formData.vendor,
            onChange: (e) => handleInputChange("vendor", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Re,
          {
            label: "Expense date",
            placeholder: "Select date expense incurred",
            value: formData.expenseDate || void 0,
            onChange: (date) => handleInputChange("expenseDate", (date == null ? void 0 : date.toISOString()) || "")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ie,
          {
            label: "Expense location",
            placeholder: "Select location",
            options: expenseLocationOptions,
            value: formData.expenseLocation,
            onValueChange: (value) => handleInputChange("expenseLocation", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ie,
          {
            label: "Payment method",
            placeholder: "Select payment method",
            options: paymentMethodOptions,
            value: formData.paymentMethod,
            onValueChange: (value) => handleInputChange("paymentMethod", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Le,
            {
              label: "NET/HST Amount",
              placeholder: "0.00",
              currencyCode: "USD",
              locale: "en-US",
              symbolStyle: "narrow",
              value: formData.netAmount,
              onChange: (e) => handleInputChange("netAmount", e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Le,
            {
              label: "Total (including taxes)",
              placeholder: "0.00",
              currencyCode: "CAD",
              symbolStyle: "narrow",
              value: formData.totalAmount,
              onChange: (e) => handleInputChange("totalAmount", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ze, { label: "Expense made in a different currency" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(et, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(tt, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        K,
        {
          iconClassName: "bg-trax-blue-100",
          title: "EXPENSE JUSTIFICATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ot, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ie,
          {
            label: "Business purpose",
            placeholder: "Specify what this expense was for",
            options: expenseTypeOptions,
            value: formData.businessPurpose,
            onValueChange: (value) => handleInputChange("businessPurpose", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Fe,
          {
            label: "Expense description",
            placeholder: "Describe what was purchased",
            rows: 1,
            value: formData.expenseDescription,
            onChange: (e) => handleInputChange("expenseDescription", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Fe,
          {
            label: "Persons entertained",
            placeholder: "Enter the full names of clients/guests entertained",
            rows: 1,
            value: formData.additionalComments,
            onChange: (e) => handleInputChange("personsEntertained", e.target.value)
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(et, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(tt, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        K,
        {
          iconClassName: "bg-trax-yellow-600",
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Me,
        {
          allocations,
          totalAmount: 71.6,
          currency: "CAD",
          onAddAllocation: () => {
            console.log("Add allocation clicked");
          },
          onRemoveAllocation: (id) => {
            setAllocations(allocations.filter((a) => a.id !== id));
          }
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(et, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(tt, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        K,
        {
          iconClassName: "bg-trax-violet-100",
          title: "ADDITIONAL COMMENTS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareMore, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ot, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Fe,
        {
          placeholder: "Add any additional comments...",
          rows: 1,
          value: formData.additionalComments,
          onChange: (e) => handleInputChange("additionalComments", e.target.value)
        }
      ) }) })
    ] })
  ] });
};
const NewExpensePage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e == null ? void 0 : e.preventDefault();
    console.log("Expense submitted");
    navigate("/expenses");
  };
  const handleCancel = (e) => {
    e == null ? void 0 : e.preventDefault();
    navigate("/expenses");
  };
  const handleOpenChange = (open) => {
    if (!open) {
      navigate("/expenses");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(_t, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ae, { className: "max-w-4xl max-h-[90vh] overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Ge, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx($e, { children: "New Expense" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(He, { children: "Fill in the details for your new expense submission." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseForm, { onSubmit: handleSubmit, onCancel: handleCancel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { className: "border-t pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { type: "button", variant: "outlined", onClick: handleCancel, children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { type: "submit", variant: "primary", children: "Save Expense" })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  NewExpensePage as default
};

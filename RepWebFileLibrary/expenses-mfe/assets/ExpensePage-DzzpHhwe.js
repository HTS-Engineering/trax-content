import { c as createLucideIcon, j as jsxRuntimeExports, W as Wn, Y as Yn, Z as Ze, F as FileText, a as Zn, _ as _n, Q as Qe, N as Nn, I as In, K as Kn, b as Fn, C as ChartColumn, P as Pn, d as CreditCard, u as useNavigate, e as Nr, z as zn, E as En, L as Ln, B, f as ChevronRight, H as Hn, g as RoutePaths } from "./__federation_expose_Mount-YLVdYaz1.js";
import { E as ExpensesList } from "./ExpensesList-DVwbW4-w.js";
import { importShared } from "./__federation_fn_import-CFnudcB9.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$4);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
];
const FileSpreadsheet = createLucideIcon("file-spreadsheet", __iconNode$2);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
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
const MessageSquareMore = createLucideIcon("message-square-more", __iconNode$1);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const { useState } = await importShared("react");
const ExpenseForm = (_) => {
  const [formData, setFormData] = useState({
    [
      "expenseType"
      /* ExpenseType */
    ]: "",
    [
      "vendor"
      /* Vendor */
    ]: "",
    [
      "expenseDate"
      /* ExpenseDate */
    ]: "",
    [
      "expenseLocation"
      /* ExpenseLocation */
    ]: "",
    [
      "paymentMethod"
      /* PaymentMethod */
    ]: "",
    [
      "netAmount"
      /* NetAmount */
    ]: "",
    [
      "totalAmount"
      /* TotalAmount */
    ]: "",
    [
      "businessPurpose"
      /* BusinessPurpose */
    ]: "",
    [
      "expenseDescription"
      /* ExpenseDescription */
    ]: "",
    [
      "personsEntertained"
      /* PersonsEntertained */
    ]: "",
    [
      "additionalComments"
      /* AdditionalComments */
    ]: ""
  });
  const [allocations, setAllocations] = useState([
    {
      id: "1",
      name: "Project",
      percentage: 0,
      amount: 0,
      type: "project"
    },
    {
      id: "2",
      name: "Admin",
      percentage: 0,
      amount: 0,
      type: "admin"
    },
    {
      id: "3",
      name: "CCB Team",
      percentage: 0,
      amount: 0,
      type: "team"
    },
    {
      id: "4",
      name: "CCB Rep",
      percentage: 0,
      amount: 0,
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
    { value: "ca6252", label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-5 text-trax-neutral-1000" }),
      "CA****6252"
    ] }) },
    { value: "ca1234", label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "size-5 text-exp-yellow-y-700" }),
      "CA****1234"
    ] }) },
    { value: "cash", label: "Cash" },
    { value: "personal", label: "Personal Card" }
  ];
  const expenseLocationOptions = [
    { value: "ontario-canada", label: "Ontario, Canada" },
    { value: "british-columbia", label: "British Columbia, Canada" },
    { value: "alberta", label: "Alberta, Canada" },
    { value: "quebec", label: "Quebec, Canada" }
  ];
  const currencyOptions = [
    { code: "USD", locale: "en-US" },
    { code: "CAD", locale: "en-CA" },
    { code: "EUR", locale: "de-DE" }
  ];
  const [formCurrencyData, setCurrencyFormData] = useState({
    netAmount: "",
    totalAmount: "",
    netCurrency: { code: "USD", locale: "en-US" },
    totalCurrency: { code: "CAD", locale: "en-CA" }
  });
  const [isDifferentCurrency, setEnableSelector] = useState(false);
  const handleCurrencyInputChange = (field, value) => {
    setCurrencyFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handleCurrencyChange = (field, currency) => {
    setCurrencyFormData((prev) => ({
      ...prev,
      [field]: currency
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Wn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ze,
        {
          title: "EXPENSE DETAILS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          _n,
          {
            label: "Expense type",
            placeholder: "Select expense type",
            options: expenseTypeOptions,
            value: formData.expenseType,
            onValueChange: (value) => handleInputChange("expenseType", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Qe,
          {
            label: "Vendor",
            placeholder: "Enter vendor name",
            value: formData.vendor,
            onChange: (e) => handleInputChange("vendor", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Nn,
          {
            label: "Expense date",
            placeholder: "Select date expense incurred",
            value: formData.expenseDate || void 0,
            onChange: (date) => handleInputChange("expenseDate", (date == null ? void 0 : date.toISOString()) || "")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          _n,
          {
            label: "Expense location",
            placeholder: "Select location",
            options: expenseLocationOptions,
            value: formData.expenseLocation,
            onValueChange: (value) => handleInputChange("expenseLocation", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          _n,
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
            In,
            {
              label: isDifferentCurrency ? "Total (foreign)" : "NET/HST Amount",
              placeholder: "0.00",
              currencyCode: formCurrencyData.netCurrency.code,
              locale: formCurrencyData.netCurrency.locale,
              symbolStyle: "narrow",
              value: formCurrencyData.netAmount,
              onChange: (e) => handleCurrencyInputChange("netAmount", e.target.value),
              enableCurrencySelector: isDifferentCurrency,
              currencyOptions,
              onCurrencyChange: (currency) => handleCurrencyChange("netCurrency", currency)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            In,
            {
              label: isDifferentCurrency ? "Total (converted)" : "Total (including taxes)",
              placeholder: "0.00",
              currencyCode: formCurrencyData.totalCurrency.code,
              locale: formCurrencyData.totalCurrency.locale,
              symbolStyle: "narrow",
              value: formCurrencyData.totalAmount,
              onChange: (e) => handleCurrencyInputChange("totalAmount", e.target.value),
              enableCurrencySelector: isDifferentCurrency,
              currencyOptions,
              onCurrencyChange: (currency) => handleCurrencyChange("totalCurrency", currency)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kn, { label: "Expense made in a different currency", checked: isDifferentCurrency, onCheckedChange: (checked) => setEnableSelector(checked) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Wn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ze,
        {
          iconClassName: "bg-trax-blue-100",
          title: "EXPENSE JUSTIFICATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          _n,
          {
            label: "Business purpose",
            placeholder: "Specify what this expense was for",
            options: expenseTypeOptions,
            value: formData.businessPurpose,
            onValueChange: (value) => handleInputChange("businessPurpose", value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Fn,
          {
            label: "Expense description",
            placeholder: "Describe what was purchased",
            rows: 1,
            value: formData.expenseDescription,
            onChange: (e) => handleInputChange("expenseDescription", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Fn,
          {
            label: "Persons entertained",
            placeholder: "Enter the full names of clients/guests entertained",
            rows: 1,
            value: formData.personsEntertained,
            onChange: (e) => handleInputChange("personsEntertained", e.target.value)
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Wn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ze,
        {
          iconClassName: "bg-trax-yellow-600",
          title: "COST ALLOCATION",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pn,
        {
          allocations,
          totalAmount: 71.6,
          currency: "CAD",
          showAddButton: false,
          onAddAllocation: () => {
            console.log("Add allocation clicked");
          },
          onRemoveAllocation: (id) => {
            setAllocations(allocations.filter((a) => a.id !== id));
          }
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Wn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ze,
        {
          iconClassName: "bg-trax-violet-100",
          title: "ADDITIONAL COMMENTS",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareMore, { className: "w-4 h-4 text-trax-neutral-950" }),
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Fn,
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
    navigate(RoutePaths.Expenses);
  };
  const handleOpenChange = (open) => {
    if (!open) {
      navigate(RoutePaths.Expenses);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("Click navigation");
    return false;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpensesList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nr, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(zn, { className: "max-w-4xl max-h-[90vh] overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(En, { className: "pb-3 mb-3 border-b border-exp-primary-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ln, { className: "text-exp-neutral-950", children: "New Expense" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-7 top-[-24px] flex flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(B, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(B, { variant: "outlined", iconPosition: "center", className: "text-exp-neutral-70 hover:text-exp-neutral-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex-1 overflow-y-auto flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseForm, { onSubmit: handleSubmit }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Hn, { className: "pt-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(B, { type: "button", variant: "outlined", onClick: handleClick, children: "Save Draft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(B, { type: "submit", variant: "primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-5" }),
            "Submit Expense"
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  NewExpensePage as default
};

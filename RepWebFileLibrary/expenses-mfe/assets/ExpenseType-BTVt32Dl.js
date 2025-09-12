import { c as createLucideIcon, i as useQuery, k as apiClient, l as useCompanyStore, j as jsxRuntimeExports, m as LoadingSpinner, n as Rr, B, o as Plus, y as yr, p as c, $ as $t, q as LayoutDashboard } from "./__federation_expose_Mount-DObzAJD3.js";
import { importShared } from "./__federation_fn_import-CFnudcB9.js";
import { u as useExpenseStore, P as Pencil } from "./store-Cmxwp0kn.js";
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$3);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
const EllipsisVertical = createLucideIcon("ellipsis-vertical", __iconNode$2);
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
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
];
const Table2 = createLucideIcon("table-2", __iconNode$1);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const { useEffect } = await importShared("react");
const useExpenseTypes = (companyId, includeInactive = false) => {
  const { setExpenseTypes, setLoadingExpenseTypes, setExpenseTypesError } = useExpenseStore();
  const query = useQuery({
    queryKey: ["expense-types", companyId, includeInactive],
    queryFn: async () => {
      if (!companyId) throw new Error("Company ID is required");
      const params = includeInactive ? { includeInactive: "true" } : {};
      const response = await apiClient.get(
        `/companies/${companyId}/expense-types`,
        { params }
      );
      return response.data.data;
    },
    enabled: !!companyId,
    staleTime: 3 * 60 * 1e3
    // 3 minutes
  });
  useEffect(() => {
    if (query.data) {
      setExpenseTypes(query.data);
      setLoadingExpenseTypes(false);
      setExpenseTypesError(null);
    }
  }, [query.data, setExpenseTypes, setLoadingExpenseTypes, setExpenseTypesError]);
  useEffect(() => {
    if (query.error) {
      setExpenseTypesError(query.error.message || "Failed to fetch expense types");
      setLoadingExpenseTypes(false);
    }
  }, [query.error, setExpenseTypesError, setLoadingExpenseTypes]);
  return query;
};
const React = await importShared("react");
const { useState } = React;
const statusConfig = {
  active: { color: "bg-trax-green-600", label: "Active" },
  inactive: { color: "bg-gray-400", label: "Inactive" }
};
const ExpenseTypeTable = () => {
  const { selectedCompany } = useCompanyStore();
  const { data: expenseTypes, isLoading, error } = useExpenseTypes((selectedCompany == null ? void 0 : selectedCompany.id) || null, true);
  const [editingRowId, setEditingRowId] = useState();
  const onSetEditingRowId = (rowId) => {
    setEditingRowId(void 0);
    console.log(rowId);
  };
  const columns = [
    {
      accessorKey: "name",
      header: "Expense type",
      cell: (context) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          yr,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: c(
                "size-2 rounded-full",
                (_a = statusConfig[context.row.original.status]) == null ? void 0 : _a.color
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: context.getValue() })
            ] }),
            editContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                defaultValue: context.getValue(),
                className: "w-full p-1 border rounded"
              }
            )
          }
        );
      }
    },
    {
      accessorKey: "description",
      header: "Description (optional)",
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        yr,
        {
          context,
          viewContent: context.getValue() || "—",
          editContent: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              defaultValue: context.getValue() || "",
              className: "w-full p-1 border rounded"
            }
          )
        }
      )
    },
    {
      accessorKey: "formType",
      header: "Form type",
      cell: (context) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        yr,
        {
          context,
          viewContent: (() => {
            const formType = context.getValue();
            const rowData = context.row.original;
            const mileage = rowData.mileage;
            switch (formType) {
              case "standard":
                return /* @__PURE__ */ jsxRuntimeExports.jsx($t, { variant: "outline", className: "text-trax-blue-600 bg-trax-primary-blue-50", children: "Standard" });
              case "entertainment":
                return /* @__PURE__ */ jsxRuntimeExports.jsx($t, { variant: "outline", className: "text-trax-green-800 bg-trax-green-100", children: "Entertainment" });
              case "mileage":
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-nowrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx($t, { variant: "outline", className: "text-trax-yellow-800 bg-trax-yellow-100", children: "Mileage" }),
                  mileage && /* @__PURE__ */ jsxRuntimeExports.jsxs($t, { variant: "outline", className: "bg-trax-neutral-20 text-trax-grey-900", children: [
                    "$",
                    mileage,
                    "/mile"
                  ] })
                ] });
              default:
                return null;
            }
          })(),
          editContent: (() => {
            const formType = context.getValue();
            const rowData = context.row.original;
            const mileage = rowData.mileage;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  defaultValue: formType,
                  className: "w-full p-1 border rounded",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "standard", children: "Standard" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "entertainment", children: "Entertainment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mileage", children: "Mileage" })
                  ]
                }
              ),
              formType === "mileage" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  step: "0.01",
                  placeholder: "Enter mileage rate",
                  defaultValue: mileage == null ? void 0 : mileage.toString(),
                  className: "w-full p-1 border rounded text-sm"
                }
              )
            ] });
          })()
        }
      )
    },
    {
      id: "actions",
      header: "Actions",
      cell: (context) => {
        const { isEditing, onSave, onCancel } = context;
        if (isEditing) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              B,
              {
                onClick: onSave,
                variant: "ghost",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "text-green-600" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              B,
              {
                onClick: onCancel,
                variant: "ghost",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "text-red-600" })
              }
            )
          ] });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          yr,
          {
            context,
            viewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                B,
                {
                  className: "cursor-pointer",
                  variant: "ghost",
                  onClick: () => onSetEditingRowId(context.row.id),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                B,
                {
                  className: "cursor-pointer",
                  variant: "ghost",
                  onClick: () => {
                    console.log("Delete expense type:", context.row.id);
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4" })
                }
              )
            ] }),
            editContent: (
              // TODO: implement edit functionality in the next user story
              /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
            )
          }
        );
      }
    }
  ];
  const customEmptyState = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 mb-6 bg-exp-primary-blue-50 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table2, { className: "size-9 text-exp-neutral-100" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center flex flex-col items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-exp-neutral-500 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No expense types setup yet" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-exp-grey-600 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Create expense types to streamline reporting and ensure employees submit the right information for different costs." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        B,
        {
          className: "px-4 py-2",
          variant: "primary",
          onClick: () => {
            console.log("Add expense type clicked");
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            "Add Expense Type"
          ]
        }
      )
    ] })
  ] });
  if (!selectedCompany) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-gray-500", children: "Please select a company to view expense types" });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-red-500", children: "Failed to load expense types. Please try again." });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}) });
  }
  const processedData = Array.isArray(expenseTypes) ? expenseTypes : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Rr,
      {
        className: "!rounded-b-none !mb-0",
        columns,
        data: processedData,
        editingRowId,
        emptyState: customEmptyState,
        onRowEdit: (row) => onSetEditingRowId(row.id),
        onRowSave: (row) => {
          console.log("Saving row:", row.original);
          onSetEditingRowId(void 0);
        },
        onRowCancel: () => onSetEditingRowId(void 0),
        getRowId: (row) => row.id,
        styles: {
          bodyCell: "py-1 px-4",
          bodyRow: "hover:exp-neutral-10 border-trax-neutral-20"
        }
      }
    ),
    processedData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-2 py-1.5 border !border-t-0 border-exp-neutral-30 rounded-b-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      B,
      {
        className: "border-0",
        variant: "secondary",
        onClick: () => {
          console.log("Add expense type from footer");
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
          "Add Expense Type"
        ]
      }
    ) })
  ] }) });
};
const ExpensesType = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-nowrap items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-exp-primary-blue-50 p-3.5 fit-content rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "size-4.5 text-exp-primary-blue-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-exp-primary-blue-800", children: "Expense Types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-normal text-exp-grey-700", children: "Configure expense types and form requirements" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExpenseTypeTable, {})
  ] });
};
export {
  ExpensesType as default
};

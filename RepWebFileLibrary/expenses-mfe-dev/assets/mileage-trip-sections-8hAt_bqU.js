import { j as jsxRuntimeExports } from "./jsx-runtime-CzdF90_e.js";
import { h as mileageDetailsSchema, F as FormSectionType, i as mileageJustificationSchema, Z as MileageTripFormField, j as costAllocationSchema, k as additionalCommentsSchema, l as CostAllocationHeaderActions, n as CostAllocationSection } from "./SupportingFilesFormSection-BzjJ0GRA.js";
import { M as MileageDetailsSection, a as MileageJustificationSection, A as AdditionalCommentsSection } from "./MileageJustificationSection-BAMoq5W2.js";
import "./axiosInstance-C-3zYJ_U.js";
import "./api-blHWSJam.js";
import "./store-BA0spBdd.js";
import "./api-ChGbT6q2.js";
import "./api-1GCezcmM.js";
import { I as Icon } from "./Icon-DYEjfqv0.js";
const MILEAGE_DETAILS_SECTION = {
  id: "mileage-details",
  type: FormSectionType.MileageDetails,
  title: "MILEAGE DETAILS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 1,
  schema: mileageDetailsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageDetailsSection, { ...props, mode: "trip" })
};
const MILEAGE_JUSTIFICATION_SECTION = {
  id: "mileage-justification",
  type: FormSectionType.MileageJustification,
  title: "MILEAGE JUSTIFICATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "sticky_note_2", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "bg-trax-blue-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 2,
  schema: mileageJustificationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(MileageJustificationSection, { ...props })
};
const MILEAGE_COST_ALLOCATION_FIELD_CONFIG = {
  totalAmountField: "reimbursableAmount",
  costAllocationsField: "costAllocations",
  isEqualSplitField: "isEqualSplit",
  defaultCurrencyCode: "CAD"
};
const MILEAGE_COST_ALLOCATION_SECTION = {
  id: "cost-allocation",
  type: FormSectionType.CostAllocation,
  title: "COST ALLOCATION",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "add_chart", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "bg-trax-yellow-600 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: true,
  order: 3,
  requiresHandlers: true,
  schema: costAllocationSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CostAllocationSection, { ...props, fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG }),
  headerActions: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    CostAllocationHeaderActions,
    {
      control: props.control,
      setValue: props.setValue,
      disabled: props.disabled,
      helpers: props.helpers,
      fieldConfig: MILEAGE_COST_ALLOCATION_FIELD_CONFIG
    }
  ),
  isEnabled: (formValues) => {
    const reimbursableAmount = parseFloat(formValues.reimbursableAmount || "0");
    const hasAllocations = (formValues.costAllocations || []).length > 0;
    return hasAllocations || reimbursableAmount > 0;
  },
  dependsOn: [MileageTripFormField.ReimbursableAmount, MileageTripFormField.CostAllocations, MileageTripFormField.IsEqualSplit]
};
const MILEAGE_ADDITIONAL_COMMENTS_SECTION = {
  id: "additional-comments",
  type: FormSectionType.AdditionalComments,
  title: "ADDITIONAL COMMENTS",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "textsms", className: "w-4 h-4 text-trax-neutral-950" }),
  iconClassName: "bg-trax-violet-100 flex p-0 size-6 max-h-6 max-w-6 justify-center items-center",
  required: false,
  order: 4,
  schema: additionalCommentsSchema,
  render: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalCommentsSection, { ...props })
};
export {
  MILEAGE_DETAILS_SECTION as M,
  MILEAGE_JUSTIFICATION_SECTION as a,
  MILEAGE_COST_ALLOCATION_SECTION as b,
  MILEAGE_ADDITIONAL_COMMENTS_SECTION as c
};

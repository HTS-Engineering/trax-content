import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { b as $r } from "./configuration-C3LtQzms.js";
import "./expense-api-Brv-MSgL.js";
const STATUS_BADGE_CONFIG = {
  draft: {
    bgColor: "bg-exp-yellow-200",
    textColor: "text-exp-yellow-800",
    label: "Draft"
  },
  submitted: {
    bgColor: "bg-exp-primary-blue-100",
    textColor: "text-exp-primary-blue-600",
    label: "Submitted"
  },
  approved: {
    bgColor: "bg-exp-green-100",
    textColor: "text-exp-green-800",
    label: "Approved"
  },
  rejected: {
    bgColor: "bg-exp-red-100",
    textColor: "text-exp-red-600",
    label: "Rejected"
  },
  cancelled: {
    bgColor: "bg-exp-grey-100",
    textColor: "text-exp-grey-600",
    label: "Cancelled"
  }
};
const ExpenseStatusBadge = ({ status, className = "" }) => {
  const config = STATUS_BADGE_CONFIG[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $r,
    {
      variant: "outline",
      className: `rounded-20! ${config.bgColor} ${config.textColor} ${className}`,
      children: config.label
    }
  );
};
const getExpenseTypeBadgeColor = (expenseType) => {
  const normalizedType = (expenseType || "").toLowerCase();
  if (normalizedType.includes("mileage")) {
    return {
      bgColor: "bg-exp-yellow-100",
      textColor: "text-exp-yellow-800"
    };
  }
  if (normalizedType.includes("entertainment")) {
    return {
      bgColor: "bg-exp-green-100",
      textColor: "text-exp-green-800"
    };
  }
  return {
    bgColor: "bg-exp-primary-blue-50",
    textColor: "text-exp-primary-blue-600"
  };
};
const getExpenseTypeBadgeConfig = (expenseType) => {
  return {
    ...getExpenseTypeBadgeColor(expenseType),
    label: expenseType
  };
};
export {
  ExpenseStatusBadge as E,
  getExpenseTypeBadgeConfig as g
};

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
  getExpenseTypeBadgeConfig as g
};

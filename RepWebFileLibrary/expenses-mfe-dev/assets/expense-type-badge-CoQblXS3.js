var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { F as FormTypeId } from "./use-scroll-into-view-ref-C9Kl5FyD.js";
const getExpenseTypeBadgeColor = /* @__PURE__ */ __name((formTypeId) => {
  switch (formTypeId) {
    case FormTypeId.MILEAGE:
      return {
        bgColor: "bg-exp-yellow-100",
        textColor: "text-exp-yellow-800"
      };
    case FormTypeId.ENTERTAINMENT:
      return {
        bgColor: "bg-exp-green-100",
        textColor: "text-exp-green-800"
      };
    case FormTypeId.STANDARD:
    default:
      return {
        bgColor: "bg-exp-primary-blue-50",
        textColor: "text-exp-primary-blue-600"
      };
  }
}, "getExpenseTypeBadgeColor");
const getExpenseTypeBadgeConfig = /* @__PURE__ */ __name(({ formTypeId, label }) => {
  return {
    ...getExpenseTypeBadgeColor(formTypeId),
    label
  };
}, "getExpenseTypeBadgeConfig");
export {
  getExpenseTypeBadgeConfig as g
};

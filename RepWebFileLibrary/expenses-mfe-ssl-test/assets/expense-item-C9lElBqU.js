var ItemCategory = /* @__PURE__ */ ((ItemCategory2) => {
  ItemCategory2["Expense"] = "expense";
  ItemCategory2["Mileage"] = "mileage";
  return ItemCategory2;
})(ItemCategory || {});
function isRegularExpense(item) {
  return item.itemType === "expense";
}
function isMileageExpense(item) {
  return item.itemType === "mileage";
}
function isExpenseItemDraft(item) {
  return item.status === "draft";
}
function isExpenseItemSubmitted(item) {
  return item.status !== "draft";
}
export {
  ItemCategory as I,
  isMileageExpense as a,
  isExpenseItemSubmitted as b,
  isExpenseItemDraft as c,
  isRegularExpense as i
};

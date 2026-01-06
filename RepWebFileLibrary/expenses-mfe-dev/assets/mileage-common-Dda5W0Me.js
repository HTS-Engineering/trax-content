var MileageFormType = /* @__PURE__ */ ((MileageFormType2) => {
  MileageFormType2["Trip"] = "trip";
  MileageFormType2["Period"] = "period";
  return MileageFormType2;
})(MileageFormType || {});
function isMileageTripData(data) {
  return data.formType === "trip";
}
function isMileagePeriodData(data) {
  return data.formType === "period";
}
export {
  MileageFormType as M,
  isMileagePeriodData as a,
  isMileageTripData as i
};

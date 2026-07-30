var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var AppMode = /* @__PURE__ */ ((AppMode2) => {
  AppMode2["Development"] = "development";
  AppMode2["Sit"] = "sit";
  AppMode2["Stage"] = "stage";
  AppMode2["Production"] = "production";
  AppMode2["Localdev"] = "localdev";
  return AppMode2;
})(AppMode || {});
const EnvConfig = {
  /** Get current Vite mode */
  getMode: /* @__PURE__ */ __name(() => "development", "getMode"),
  /** Get human-readable label for current environment */
  getLabel: /* @__PURE__ */ __name(() => {
    const labels = {
      [
        "development"
        /* Development */
      ]: "DEV"
    };
    return labels["development"];
  }, "getLabel")
};
({
  [
    "example-feature"
    /* ExampleFeature */
  ]: [AppMode.Development, AppMode.Sit]
});
export {
  EnvConfig as E
};

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const PREFIX = `[${"development".toUpperCase()}]`;
const devLog = /* @__PURE__ */ __name((...args) => console.log(PREFIX, ...args), "devLog");
const devWarn = /* @__PURE__ */ __name((...args) => console.warn(PREFIX, "⚠️", ...args), "devWarn");
const devError = /* @__PURE__ */ __name((...args) => console.error(PREFIX, "❌", ...args), "devError");
const devGroup = /* @__PURE__ */ __name((label) => console.group(PREFIX, label), "devGroup");
const devGroupEnd = console.groupEnd.bind(console);
export {
  devLog as a,
  devWarn as b,
  devGroup as c,
  devError as d,
  devGroupEnd as e
};

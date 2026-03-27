const PREFIX = `[${"development".toUpperCase()}]`;
const devLog = (...args) => console.log(PREFIX, ...args);
const devWarn = (...args) => console.warn(PREFIX, "⚠️", ...args);
const devError = (...args) => console.error(PREFIX, "❌", ...args);
const devGroup = (label) => console.group(PREFIX, label);
const devGroupEnd = console.groupEnd.bind(console);
export {
  devLog as a,
  devWarn as b,
  devGroup as c,
  devError as d,
  devGroupEnd as e
};

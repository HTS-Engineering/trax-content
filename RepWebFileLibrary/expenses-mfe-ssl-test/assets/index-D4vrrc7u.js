const PREFIX = `[${"test-ssl".toUpperCase()}]`;
const devLog = (...args) => console.log(PREFIX, ...args);
const devWarn = (...args) => console.warn(PREFIX, "⚠️", ...args);
const devError = (...args) => console.error(PREFIX, "❌", ...args);
console.groupEnd.bind(console);
export {
  devLog as a,
  devWarn as b,
  devError as d
};

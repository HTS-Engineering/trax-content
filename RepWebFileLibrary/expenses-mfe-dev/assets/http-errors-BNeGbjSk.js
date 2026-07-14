var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function isHttpApiError(error) {
  return error instanceof Error && "response" in error;
}
__name(isHttpApiError, "isHttpApiError");
function getHttpErrorMessage(error) {
  var _a;
  if (isHttpApiError(error)) {
    const data = (_a = error.response) == null ? void 0 : _a.data;
    const detail = typeof (data == null ? void 0 : data.detail) === "string" ? data.detail : void 0;
    return (data == null ? void 0 : data.message) || detail || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}
__name(getHttpErrorMessage, "getHttpErrorMessage");
export {
  getHttpErrorMessage as g,
  isHttpApiError as i
};

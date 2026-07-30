var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Q as Qs } from "./configuration-BGy6T4Ra.js";
import { aA as toErrorText, a3 as interpretError } from "./use-scroll-into-view-ref-PERXLDXX.js";
const TOAST_DURATION_MS = 5e3;
const DEDUPE_WINDOW_MS = 6e3;
const TOAST_CLASS_NAME = "max-w-md whitespace-pre-line";
const lastShownAt = /* @__PURE__ */ new Map();
function claimSlot(key) {
  const now = Date.now();
  const previous = lastShownAt.get(key);
  if (previous !== void 0 && now - previous < DEDUPE_WINDOW_MS) return false;
  for (const [seen, at] of lastShownAt) {
    if (now - at >= DEDUPE_WINDOW_MS) lastShownAt.delete(seen);
  }
  lastShownAt.set(key, now);
  return true;
}
__name(claimSlot, "claimSlot");
function show(text) {
  Qs.error(text, { duration: TOAST_DURATION_MS, className: TOAST_CLASS_NAME });
}
__name(show, "show");
function notifyError(error, options = {}) {
  const context = options.context ?? "load";
  const presentation = interpretError(error, { context, copy: options.copy });
  return notifyPresentation(presentation, options.dedupe ?? shouldDedupeByDefault(presentation, context));
}
__name(notifyError, "notifyError");
function notifyPresentation(presentation, dedupe = true) {
  if (presentation.isSilent) return null;
  if (dedupe && !claimSlot(presentation.dedupeKey)) return null;
  show(toErrorText(presentation));
  return presentation;
}
__name(notifyPresentation, "notifyPresentation");
function shouldDedupeByDefault(presentation, context) {
  return context === "load" || presentation.isSessionEvent || presentation.isConnectivity;
}
__name(shouldDedupeByDefault, "shouldDedupeByDefault");
function notifyMessage(message) {
  show(message);
}
__name(notifyMessage, "notifyMessage");
export {
  notifyError as a,
  notifyPresentation as b,
  notifyMessage as n
};

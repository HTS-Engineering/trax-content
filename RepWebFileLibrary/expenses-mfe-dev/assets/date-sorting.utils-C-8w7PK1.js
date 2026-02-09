import { importShared } from "./__federation_fn_import-VIrFz_yB.js";
const { useEffect } = await importShared("react");
function useSubmitOnEnter({
  onSubmit,
  canSubmit,
  isFormLoading,
  isEditing,
  enabled = true
}) {
  useEffect(() => {
    if (!enabled || !isEditing) return;
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && canSubmit && !isFormLoading) {
        const target = e.target;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
          e.preventDefault();
          onSubmit();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmit, canSubmit, isFormLoading, isEditing, enabled]);
}
function parseDate(dateValue) {
  if (!dateValue) return null;
  if (dateValue instanceof Date) {
    return isNaN(dateValue.getTime()) ? null : dateValue;
  }
  try {
    const date = new Date(dateValue);
    return isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}
function sortByCreatedDate(items, direction = "desc") {
  const itemsCopy = [...items];
  return itemsCopy.sort((a, b) => {
    const dateA = parseDate(a.created);
    const dateB = parseDate(b.created);
    if (dateA === null && dateB === null) return 0;
    if (dateA === null) return 1;
    if (dateB === null) return -1;
    const comparison = dateA.getTime() - dateB.getTime();
    return direction === "asc" ? comparison : -comparison;
  });
}
export {
  sortByCreatedDate as s,
  useSubmitOnEnter as u
};

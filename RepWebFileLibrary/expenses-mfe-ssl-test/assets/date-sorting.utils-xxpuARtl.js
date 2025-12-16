import { c as createLucideIcon } from "./axiosInstance-D567fVcX.js";
import { importShared } from "./__federation_fn_import-DCl-vMH-.js";
const __iconNode$4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
const EllipsisVertical = createLucideIcon("ellipsis-vertical", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
];
const Table2 = createLucideIcon("table-2", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
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
  Check as C,
  EllipsisVertical as E,
  Pencil as P,
  Table2 as T,
  X,
  sortByCreatedDate as s,
  useSubmitOnEnter as u
};

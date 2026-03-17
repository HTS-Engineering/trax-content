const isValidDate = (date) => !isNaN(date.getTime());
const parseISODateAsLocal = (dateString) => {
  const isoDateMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoDateMatch) {
    const [, year, month, day] = isoDateMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return new Date(dateString);
};
const normalizeDateRange = (range) => {
  if (!(range == null ? void 0 : range.from)) return void 0;
  try {
    const fromDate = typeof range.from === "string" ? parseISODateAsLocal(range.from) : range.from;
    if (!isValidDate(fromDate)) return void 0;
    const toDate = range.to ? typeof range.to === "string" ? parseISODateAsLocal(range.to) : range.to : void 0;
    if (toDate && !isValidDate(toDate)) return void 0;
    return { from: fromDate, to: toDate };
  } catch {
    return void 0;
  }
};
const formatExpenseDate = (date) => {
  if (!date) return "";
  try {
    const parsedDate = typeof date === "string" ? parseISODateAsLocal(date) : date;
    if (!isValidDate(parsedDate)) return "";
    const month = parsedDate.toLocaleDateString("en-US", { month: "short" });
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
    return `${month} ${day}, ${year}`;
  } catch {
    return "";
  }
};
const formatExpensePeriod = (range) => {
  const normalizedRange = normalizeDateRange(range);
  if (!(normalizedRange == null ? void 0 : normalizedRange.from)) return "";
  try {
    const fromDate = normalizedRange.from;
    const toDate = normalizedRange.to;
    const formatDate = (date, includeYear = false) => {
      const month = date.toLocaleDateString("en-US", { month: "short" });
      const day = date.getDate();
      const year = date.getFullYear();
      return includeYear ? `${month} ${day}, ${year}` : `${month} ${day}`;
    };
    if (toDate && fromDate.getTime() !== toDate.getTime()) {
      const isCrossYear = fromDate.getFullYear() !== toDate.getFullYear();
      if (isCrossYear) {
        return `${formatDate(fromDate, true)} - ${formatDate(toDate, true)}`;
      }
      return `${formatDate(fromDate)} - ${formatDate(toDate)}, ${fromDate.getFullYear()}`;
    }
    return `${formatDate(fromDate)}, ${fromDate.getFullYear()}`;
  } catch {
    return "";
  }
};
export {
  formatExpensePeriod as a,
  formatExpenseDate as f
};

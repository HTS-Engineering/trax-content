import { importShared } from './__federation_fn_import-Bi7vPVnK.js';
import { j as jsxRuntimeExports } from './__federation_expose_Mount-BlhroOrS.js';
import { N as Navigation } from './Navigation-CsZ1fjOa.js';

const {useState} = await importShared('react');

function DatepickerPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "";
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const onChangeMonth = (e) => {
    console.log(e.target.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-md p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Datepicker Components" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "date-input", className: "block text-sm font-medium text-gray-700 mb-2", children: "Date Picker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "date-input",
              type: "date",
              value: selectedDate,
              onChange: (e) => setSelectedDate(e.target.value),
              className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          selectedDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-600", children: [
            "Selected: ",
            formatDate(selectedDate)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "datetime-input", className: "block text-sm font-medium text-gray-700 mb-2", children: "Date & Time Picker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "datetime-input",
              type: "datetime-local",
              value: selectedDateTime,
              onChange: (e) => setSelectedDateTime(e.target.value),
              className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          selectedDateTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-600", children: [
            "Selected: ",
            formatDateTime(selectedDateTime)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "time-input", className: "block text-sm font-medium text-gray-700 mb-2", children: "Time Picker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "time-input",
              type: "time",
              value: selectedTime,
              onChange: (e) => setSelectedTime(e.target.value),
              className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          selectedTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-gray-600", children: [
            "Selected time: ",
            selectedTime
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Date Range Picker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "start-date", className: "block text-sm font-medium text-gray-700 mb-2", children: "Start Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "start-date",
                  type: "date",
                  value: dateRange.start,
                  onChange: (e) => setDateRange((prev) => ({ ...prev, start: e.target.value })),
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "end-date", className: "block text-sm font-medium text-gray-700 mb-2", children: "End Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "end-date",
                  type: "date",
                  value: dateRange.end,
                  onChange: (e) => setDateRange((prev) => ({ ...prev, end: e.target.value })),
                  min: dateRange.start,
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] })
          ] }),
          dateRange.start && dateRange.end && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-blue-50 rounded-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Selected Range:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "From: ",
              formatDate(dateRange.start),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "To: ",
              formatDate(dateRange.end)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-600 mt-2", children: [
              "Duration: ",
              Math.ceil((new Date(dateRange.end).getTime() - new Date(dateRange.start).getTime()) / (1e3 * 60 * 60 * 24)),
              " days"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Styled Date Inputs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Large Date Input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  className: "w-full max-w-sm px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Rounded Date Input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  className: "w-full max-w-sm px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Colored Date Input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  className: "w-full max-w-sm px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Date Constraints" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Future Dates Only (min: today)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                  className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Past Dates Only (max: today)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                  className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "This Year Only" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  min: `${(/* @__PURE__ */ new Date()).getFullYear()}-01-01`,
                  max: `${(/* @__PURE__ */ new Date()).getFullYear()}-12-31`,
                  className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Week & Month Pickers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Week Picker" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "week",
                  className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Month Picker" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "month",
                  className: "w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  onChange: onChangeMonth
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}

export { DatepickerPage as default };

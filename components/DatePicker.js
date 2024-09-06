"use client";

import { useState } from "react";
import useDatePickerStore from "../store/useDatePickerStore";

const DatePicker = () => {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    recurrence,
    setRecurrence,
  } = useDatePickerStore();
  const [interval, setInterval] = useState(recurrence.interval || 1);
  const [specificDays, setSpecificDays] = useState(
    recurrence.specificDays || []
  );
  const [nthDay, setNthDay] = useState(recurrence.nthDayOfMonth || "");

  const handleRecurrenceChange = (e) => {
    setRecurrence({ ...recurrence, frequency: e.target.value });
  };

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
    setRecurrence({ ...recurrence, interval: Number(e.target.value) });
  };

  const handleSpecificDaysChange = (e) => {
    const { value, checked } = e.target;
    setSpecificDays((prev) =>
      checked ? [...prev, value] : prev.filter((day) => day !== value)
    );
    setRecurrence({ ...recurrence, specificDays });
  };

  const handleNthDayChange = (e) => {
    setNthDay(e.target.value);
    setRecurrence({ ...recurrence, nthDayOfMonth: e.target.value });
  };

  return (
    <div className="p-8 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-black">
        Select Recurring Dates
      </h2>

      <label className="block mb-4">
        <span className="block text-white">Start Date:</span>
        <input
          type="date"
          className="border border-gray-300 p-3 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          value={startDate || ""}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>

      <label className="block mb-4">
        <span className="block text-white">End Date (optional):</span>
        <input
          type="date"
          className="border border-gray-300 p-3 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          value={endDate || ""}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>

      <label className="block mb-4">
        <span className="block text-white">Recurrence Frequency:</span>
        <select
          className="border border-gray-300 p-3 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          value={recurrence.frequency}
          onChange={handleRecurrenceChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>

      {recurrence.frequency !== "daily" && (
        <label className="block mb-4">
          <span className="block text-white">Interval:</span>
          <input
            type="number"
            value={interval}
            min="1"
            className="border border-gray-300 p-3 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            onChange={handleIntervalChange}
          />
        </label>
      )}

      {recurrence.frequency === "weekly" && (
        <fieldset className="mb-4">
          <legend className="block text-white">
            Specific Days of the Week:
          </legend>
          <div className="flex flex-wrap">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <label key={day} className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  value={day}
                  checked={specificDays.includes(day)}
                  onChange={handleSpecificDaysChange}
                  className="form-checkbox h-5 w-5 text-yellow-300"
                />
                <span className="ml-2 text-white">{day}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {recurrence.frequency === "monthly" && (
        <label className="block mb-4">
          <span className="block text-white">The nth Day of the Month:</span>
          <input
            type="text"
            value={nthDay}
            placeholder="e.g., 2nd Tuesday"
            className="border border-gray-300 p-3 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            onChange={handleNthDayChange}
          />
        </label>
      )}
    </div>
  );
};

export default DatePicker;

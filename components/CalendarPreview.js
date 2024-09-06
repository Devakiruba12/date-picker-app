"use client";

import { useEffect, useState } from "react";
import useDatePickerStore from "../store/useDatePickerStore";
import { format, addDays } from "date-fns";

const CalendarPreview = () => {
  const { startDate, recurrence } = useDatePickerStore();
  const [previewDates, setPreviewDates] = useState([]);

  useEffect(() => {
    if (startDate) {
      const dates = [];
      let currentDate = new Date(startDate);

      for (let i = 0; i < 5; i++) {
        dates.push(format(currentDate, "dd-MM-yyyy"));
        currentDate = addDays(currentDate, recurrence.interval || 1);
      }

      setPreviewDates(dates);
    }
  }, [startDate, recurrence]);

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-teal-400 via-teal-300 to-teal-200 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Recurring Dates Preview
      </h3>
      <ul className="l">
        {previewDates.map((date, index) => (
          <li key={index} className="text-gray-700">
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;

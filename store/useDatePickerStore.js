import create from "zustand";

const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrence: {
    frequency: "daily",
    interval: 1,
    daysOfWeek: [],
    nthDay: null,
  },
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrence: (recurrence) => set({ recurrence }),
}));

export default useDatePickerStore;

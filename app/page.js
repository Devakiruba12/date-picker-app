import DatePicker from "../components/DatePicker";
import CalendarPreview from "../components/CalendarPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <DatePicker />
        <CalendarPreview />
      </div>
    </div>
  );
}

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function CalendarCompo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="h-screen flex bg-blue-600">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border h-full flex items-center justify-center bg-red-500 w-full"
      />
    </section>
  );
}

export default CalendarCompo;

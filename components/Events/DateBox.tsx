import React from "react";

const DateBox = ({ eventDate }: { eventDate: Date }) => {
  const dayNumber = eventDate.getDay();
  const dayName = [
    "Neděle",
    "Pondělí",
    "Úterý",
    "Středa",
    "Čtvrtek",
    "Pátek",
    "Sobota",
  ][dayNumber];
  return (
    <div className="flex flex-col justify-center w-full sm:w-max mr-5 items-center rounded-xl bg-white text-[#3B3B3B] p-4">
      <span className="text-2xl font-bold">{dayName.slice(0, 2)}</span>
      <div className="flex text-sm  flex-col justify-center items-center">
        <div>
          <span>
            {eventDate.toLocaleDateString("cs-CZ", {
              day: "numeric",
            })}
          </span>
          <span>
            {eventDate.toLocaleDateString("cs-CZ", {
              month: "long",
            })}
          </span>
        </div>
        <span>
          {eventDate.toLocaleDateString("cs-CZ", {
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default DateBox;

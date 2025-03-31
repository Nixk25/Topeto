"use client";
import React from "react";
import { EVENTS } from "@/constants/events";
import { motion } from "motion/react";
import DateBox from "./DateBox";

const EventsList = () => {
  const now = new Date();

  const formatTimeLeft = (date: Date) => {
    const diff = date.getTime() - now.getTime();

    if (diff <= 0) return null;

    const totalMinutes = Math.floor(diff / 1000 / 60);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    if (days > 3) return `Za ${days} dní`;
    if (totalMinutes > 180) return `Za ${days * 24 + hours} hodin`;
    if (hours > 0) return `Za ${hours}h ${minutes}min`;
    return `Za ${minutes} minut`;
  };

  const upcomingEvents = EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getTime() > now.getTime();
  });

  return (
    <div className="pb-20 ">
      {upcomingEvents.map((event, i) => {
        const eventDate = new Date(event.date);
        const timeText = formatTimeLeft(eventDate);
        const isLast = i === upcomingEvents.length - 1;

        return (
          <motion.div
            id="events"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            key={event.name}
            className={`border-slate-50 border p-4 border-x-0 ${
              isLast ? "border-b" : "border-b-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:gap-0 gap-5 ">
              <DateBox eventDate={eventDate} />
              <div className="flex flex-col flex-1">
                <h2 className="text-4xl font-bold ">{event.name}</h2>
                <div className="flex">
                  {event.subText && <p className="text-2xl">{event.subText}</p>}
                </div>
                {event.description && (
                  <p className="text-xl tracking-wide w-full text-gray-400">
                    {event.description}
                  </p>
                )}
              </div>
              {timeText && (
                <span className="lg:text-8xl text-5xl flex  w-full flex-1 justify-center items-center font-black">
                  {timeText}
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default EventsList;

import React from "react";
import EventsHeadline from "./EventsHeadline";

import EventsList from "./EventsList";

const Events = () => {
  return (
    <section id="events" className="h-screen ">
      <EventsHeadline />
      <EventsList />
    </section>
  );
};

export default Events;

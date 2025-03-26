"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const EventsHeadline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["120%", "-400%"]);

  return (
    <div ref={containerRef} className=" my-[10vh]  z-10 overflow-hidden">
      <motion.h2
        className="font-black tracking-wide text-9xl lg:text-[20rem] whitespace-nowrap will-change-transform"
        style={{
          x,
        }}
      >
        NEJBLIŽŠÍ KONCERTY A AKCE
      </motion.h2>
    </div>
  );
};

export default EventsHeadline;

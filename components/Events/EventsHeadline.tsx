"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "react-responsive";
const EventsHeadline = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["120%", isMobile ? "-520%" : "-380%"]
  );

  return (
    <div ref={containerRef} className=" my-[10vh] h-[200vh]  z-10 ">
      <div className="top-1/2 -translate-y-1/2 sticky overflow-hidden">
        <motion.h2
          className="font-black tracking-wide text-9xl lg:text-[20rem] whitespace-nowrap will-change-transform"
          style={{
            x,
          }}
        >
          NEJBLIŽŠÍ KONCERTY A AKCE
        </motion.h2>
      </div>
    </div>
  );
};

export default EventsHeadline;

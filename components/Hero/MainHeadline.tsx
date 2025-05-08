"use client";
import React from "react";
import { motion } from "motion/react";
const MainHeadline = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.5, ease: "easeInOut" }}
      className="absolute bottom-4 right-2 w-full flex justify-end text-end mainHeadline leading-[0.8] font-bold z-[11] uppercase"
    >
      Antonín Hošek <br /> & Topeto
    </motion.h1>
  );
};

export default MainHeadline;

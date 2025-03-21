"use client";
import React from "react";
import { motion } from "motion/react";
const Overlay = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 3 }}
      className="absolute w-full h-full bg-[#3E3D3C] z-10 opacity-40"
    />
  );
};

export default Overlay;

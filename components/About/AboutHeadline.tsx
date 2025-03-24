"use client";
import React from "react";
import { motion } from "motion/react";
const AboutHeadline = () => {
  return (
    <motion.h2
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
      className="aboutHeadline font-bold leading-[0.8] pb-10"
    >
      O kapele
    </motion.h2>
  );
};

export default AboutHeadline;

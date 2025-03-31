"use client";
import React from "react";
import Image from "next/image";
import aboutPhoto from "../../public/aboutPhoto.webp";
import { motion } from "motion/react";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
      className="flex-1   mt-10 lg:mt-0 lg:pl-20 flex justify-center items-center"
    >
      <Image
        src={aboutPhoto}
        alt="About photo"
        width={700}
        height={700}
        className="w-full object-cover object-top lg:h-full lg:max-h-max  "
      />
    </motion.div>
  );
};

export default AboutImage;

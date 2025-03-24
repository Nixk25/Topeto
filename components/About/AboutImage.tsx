"use client";
import React from "react";
import Image from "next/image";
import aboutPhoto from "../../public/aboutPhoto.png";
import { motion } from "motion/react";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
      className="flex-1 origin-bottom-left w-full mt-10 lg:mt-0 lg:pl-20 flex justify-center items-center"
    >
      <Image
        src={aboutPhoto}
        alt="About photo"
        width={300}
        height={300}
        className="w-full object-cover object-top lg:h-full lg:max-h-max max-h-[500px] "
      />
    </motion.div>
  );
};

export default AboutImage;

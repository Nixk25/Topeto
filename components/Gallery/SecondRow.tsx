"use client";
import React from "react";
import Image from "next/image";
import photo3 from "../../public/gallery/gallery3.webp";
import photo4 from "../../public/gallery/gallery4.webp";
import { motion } from "motion/react";

const SecondRow = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        className="w-full xl:max-w-[60%]  lg:mb-20 rounded-xl "
      >
        <Image
          src={photo4}
          alt="Gallery Image 3"
          className="object-cover h-full w-full rounded-xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        className="w-full  lg:mt-5 rounded-xl "
      >
        <Image
          src={photo3}
          alt="Gallery Image 4"
          className="object-cover h-full w-full rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default SecondRow;

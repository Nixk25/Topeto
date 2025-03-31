"use client";
import React from "react";
import Image from "next/image";
import photo1 from "../../public/gallery/gallery1.webp";
import photo2 from "../../public/gallery/gallery2.webp";
import { motion } from "motion/react";
const FirstRow = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        className="w-full xl:max-w-[60%]  lg:mb-5 rounded-xl "
      >
        <Image
          src={photo1}
          alt="Gallery Image 1"
          className="object-cover h-full w-full rounded-xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        className="w-full lg:mt-20 rounded-xl "
      >
        <Image
          src={photo2}
          alt="Gallery Image 2"
          className="object-cover h-full w-full rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default FirstRow;

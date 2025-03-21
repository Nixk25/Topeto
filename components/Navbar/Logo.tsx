"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      initial={{
        top: "50vh",
        left: "50vw",
        scale: 5,
        transformOrigin: "center",
        x: "-50%",
        y: "-50%",
      }}
      animate={{ top: 16, left: 16, scale: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
      href="#"
      className="absolute left-4 z-50"
    >
      <Image src={logo} alt="logo" width={50} height={50} />
    </motion.a>
  );
};

export default Logo;

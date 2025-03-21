"use client";
import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "motion/react";
const Socials = () => {
  const Socials = [
    {
      label: "O nás",
      icon: (
        <FaInstagram
          size={20}
          className="hover:text-slate-200 cursor-pointer"
        />
      ),
    },
    {
      label: "Koncerty a akce",
      icon: (
        <FaFacebook size={20} className="hover:text-slate-200 cursor-pointer" />
      ),
    },
    {
      label: "Kontakt",
      icon: (
        <FaYoutube size={20} className="hover:text-slate-200 cursor-pointer" />
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center absolute left-4 top-1/2 -translate-y-1/2 gap-3 z-[11]">
      {Socials.map((social, index) => (
        <motion.a
          key={social.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (index + 3) * 0.2, duration: 0.4 }}
          href={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;

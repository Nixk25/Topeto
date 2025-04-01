"use client";
import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "motion/react";
const Socials = () => {
  const Socials = [
    {
      url: "https://m.youtube.com/@antoninhosek6701",
      icon: (
        <FaInstagram
          size={20}
          className="hover:text-slate-200 cursor-pointer"
        />
      ),
    },
    {
      url: "https://www.facebook.com/share/1681UGi2cV/?mibextid=wwXIfr",
      icon: (
        <FaFacebook size={20} className="hover:text-slate-200 cursor-pointer" />
      ),
    },
    {
      url: "https://www.instagram.com/topeto._?igsh=cHpuZGNkMnBrd3Ni",
      icon: (
        <FaYoutube size={20} className="hover:text-slate-200 cursor-pointer" />
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center absolute left-4 top-1/2 -translate-y-1/2 gap-3 z-[11]">
      {Socials.map((social, index) => (
        <motion.a
          key={social.url}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: (index + 3) * 0.2,
            duration: 0.4,
            ease: "easeInOut",
          }}
          href={social.url}
          target="_blank"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;

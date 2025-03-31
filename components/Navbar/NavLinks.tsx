"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "O nás", href: "#about" },
  { label: "Koncerty a akce", href: "#events" },
  { label: "Kontakt", href: "#contact" },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-4 w-full justify-end">
      {navItems.map((item, index) => (
        <motion.li
          key={item.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (index + 2) * 0.2, duration: 0.4 }}
        >
          <Link
            href={item.href}
            className="hover:text-slate-200 cursor-pointer"
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavLinks;

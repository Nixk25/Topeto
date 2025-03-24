"use client";
import React from "react";
import { motion } from "motion/react";

const AboutText = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
        className=" tracking-wider"
      >
        Autorské písně původně sólově vystupujícího kytaristy a zpěváka Antonína
        Hoška se postupně rozrostly o aranže pro trumpetu (Jan Tošovský), klavír
        (Ondřej Hejkrlík) a bicí (Ondřej Nešpor). Tak vznikla čtyřčlenná kapela
        Antonín Hošek & Topeto, která odehrála již desítky koncertů, účastnila
        se významných festivalů, soutěží, a dokonce i mezinárodních akcí.
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
        className=" list-disc mt-10 ml-4 tracking-wider"
      >
        <li>
          Skupina se poprvé představila na studentském festivalu GymJam,
          pořádaným zdejším gymnáziem
        </li>
        <li>
          Během svého koncertování vystoupila na Smetanově Litomyšli,
          Mejtofestu, Ostrofestu
        </li>
        <li>
          Úspěšně se účastnila dvou soutěží podporujících autorskou tvorbu;
          Svitavské Komoření – 1. místo a Hlas Česka – finále 3.místo
        </li>
        <li>
          V září 2023 skupina reprezentovala Vysoké Mýto na buskingovém
          festivalu v německém Korbachu
        </li>
        <li>
          Ve stejném roce získala Cenu města Vysokého Mýta za reprezentaci města
        </li>
      </motion.ul>
    </>
  );
};

export default AboutText;

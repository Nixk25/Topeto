import Image from "next/image";
import React from "react";
import aboutPhoto from "../../public/aboutPhoto.png";
const About = () => {
  return (
    <section id="about" className=" flex flex-col lg:flex-row p-4 pt-20 ">
      <div className="flex-1 text-xl">
        <h2 className="aboutHeadline font-bold leading-[0.8] pb-10">
          O kapele
        </h2>
        <p>
          Autorské písně původně sólově vystupujícího kytaristy a zpěváka
          Antonína Hoška se postupně rozrostly o aranže pro trumpetu (Jan
          Tošovský), klavír (Ondřej Hejkrlík) a bicí (Ondřej Nešpor). Tak
          vznikla čtyřčlenná kapela Antonín Hošek & Topeto, která odehrála již
          desítky koncertů, účastnila se významných festivalů, soutěží, a
          dokonce i mezinárodních akcí.
        </p>
        <ul className=" list-disc mt-10 ml-4">
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
            Ve stejném roce získala Cenu města Vysokého Mýta za reprezentaci
            města
          </li>
        </ul>
      </div>
      <div className="flex-1 w-full mt-10 lg:mt-0 lg:pl-20 flex justify-center items-center">
        <Image
          src={aboutPhoto}
          alt="About photo"
          width={300}
          height={300}
          className="w-full object-cover object-top lg:h-full lg:max-h-max max-h-[500px] "
        />
      </div>
    </section>
  );
};

export default About;

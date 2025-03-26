"use client";

import { MEMBERS } from "@/constants/members";
import Image from "next/image";
import React, { useState } from "react";

const Members = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, icons, image, description } = MEMBERS[activeIndex];

  return (
    <section className="px-4 py-10">
      <h2 className="membersHeadline font-bold flex justify-center items-center mb-10">
        Členové
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 overflow-hidden">
        <div className="h-full w-full flex-1">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
            width={400}
            height={400}
          />
        </div>

        <div className="relative flex flex-col  justify-between flex-1 p-5">
          <h3 className="text-4xl lg:text-6xl font-bold">{name}</h3>

          <div className="icons  w-full  mb-4">
            {icons.map(({ icon, position }, i) => (
              <Image
                key={i}
                width={200}
                height={200}
                src={icon}
                alt={name}
                className={`absolute ${position} z-[-1] `}
              />
            ))}
          </div>

          {description && (
            <p className="text-slate-400 text-lg lg:text-2xl">{description}</p>
          )}
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-1 ">
          {MEMBERS.map(({ name }, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-full lg:w-[40px] h-full rounded-full cursor-pointer transition-colors duration-300 hover:text-[#3B3B3B]  hover:bg-slate-200 ${
                i === activeIndex ? "bg-black" : "bg-gray-400"
              }`}
            >
              <p className="rotate-0 lg:rotate-270 uppercase  whitespace-nowrap text-xl">
                {name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;

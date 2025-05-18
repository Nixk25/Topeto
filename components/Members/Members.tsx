"use client";

import { MEMBERS } from "@/constants/members";
import Image from "next/image";
import React, { useState } from "react";

const Members = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, icons, image, description } = MEMBERS[activeIndex];

  return (
    <section className="px-4 py-10">
      <h2 className="membersHeadline font-bold flex justify-center items-center mb-10 uppercase">
        Členové
      </h2>

      <div className="flex flex-col order-2 xl:flex-row xl:order-1 gap-10 overflow-hidden">
        <div className="h-full w-full flex-1 order-2">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
            unoptimized
            width={400}
            height={400}
          />
        </div>

        <div className="relative flex flex-col order-3 xl:order-2  justify-between flex-1 p-5">
          <h3 className="text-4xl xl:text-6xl font-bold">{name}</h3>

          <div className="icons  w-full  mb-4">
            {icons.map(({ icon, position }, i) => (
              <Image
                key={i}
                width={200}
                height={200}
                src={icon}
                alt={name}
                unoptimized
                className={`absolute ${position} z-[-1] `}
              />
            ))}
          </div>

          {description && (
            <p className="text-white text-lg xl:text-2xl">{description}</p>
          )}
        </div>

        <div className="flex justify-center items-center order-1 xl:order-3 flex-col xl:flex-row gap-1 ">
          {MEMBERS.map(({ name }, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-full xl:w-[40px] h-full rounded-full cursor-pointer transition-colors duration-300 hover:text-[#3B3B3B]  hover:bg-slate-200 ${
                i === activeIndex ? "bg-black" : "bg-gray-400"
              }`}
            >
              <p className="rotate-0 xl:rotate-270 uppercase  whitespace-nowrap text-xl">
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

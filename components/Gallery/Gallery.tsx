import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

const Gallery = () => {
  return (
    <section>
      <h2 className="membersHeadline font-bold flex justify-center items-center  tracking-wide text-center text-xl sm:text-2xl md:text-3xl">
        Galerie
      </h2>
      <div className="flex flex-col gap-10 lg:gap-0 px-4  py-5">
        <FirstRow />
        <SecondRow />
      </div>
    </section>
  );
};

export default Gallery;

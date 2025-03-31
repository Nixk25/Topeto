import React from "react";
import Image from "next/image";
import photo1 from "../../public/gallery/gallery1.webp";
import photo2 from "../../public/gallery/gallery2.webp";
import photo3 from "../../public/gallery/gallery3.webp";
import photo4 from "../../public/gallery/gallery4.webp";

const Gallery = () => {
  return (
    <section>
      <h2 className="membersHeadline font-bold flex justify-center items-center  tracking-wide text-center text-xl sm:text-2xl md:text-3xl">
        Galerie
      </h2>
      <div className="flex flex-col gap-10 lg:gap-0 px-4  py-5">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full xl:max-w-[60%]  lg:mb-5 rounded-xl ">
            <Image
              src={photo1}
              alt="Gallery Image 1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-full lg:mt-20 rounded-xl ">
            <Image
              src={photo2}
              alt="Gallery Image 2"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full xl:max-w-[60%]  lg:mb-20 rounded-xl ">
            <Image
              src={photo4}
              alt="Gallery Image 3"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-full  lg:mt-5 rounded-xl ">
            <Image
              src={photo3}
              alt="Gallery Image 4"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

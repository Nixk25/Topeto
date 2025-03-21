import React from "react";
import Socials from "./Socials";
import MainHeadline from "./MainHeadline";
import Overlay from "./Overlay";

const Hero = () => {
  return (
    <section className="bg-[url('../public/mainBg.png')] h-[100dvh] relative bg-no-repeat bg-cover bg-[center] ">
      <Overlay />
      <Socials />
      <MainHeadline />
    </section>
  );
};

export default Hero;

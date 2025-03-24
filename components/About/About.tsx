import React from "react";
import AboutText from "./AboutText";
import AboutHeadline from "./AboutHeadline";
import AboutImage from "./AboutImage";
const About = () => {
  return (
    <section id="about" className=" flex flex-col lg:flex-row p-4 py-20 ">
      <div className="flex-1 text-xl">
        <AboutHeadline />
        <AboutText />
      </div>
      <AboutImage />
    </section>
  );
};

export default About;

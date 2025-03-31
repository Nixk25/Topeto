import React from "react";
import logo from "../../public/logoBlack.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="justify-center items-center p-4 bg-white flex flex-col gap-5">
      <Image src={logo} alt="logo" width={100} height={100} />
      <div className="text-background text-sm flex gap-5">
        <a href="#about">O nás</a>
        <a href="#events">Nadcházející koncerty a akce</a>
      </div>
      <div className="text-background text-sm flex flex-col justify-center items-center ">
        <span>©2025 Topeto · Všechna práva vyhrazena</span>
        <a href="https://nicolasmelda.com" target="_blank">
          Vytvořil Nicolas Melda
        </a>
      </div>
    </footer>
  );
};

export default Footer;

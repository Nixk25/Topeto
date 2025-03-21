import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <header className=" absolute top-0   w-full left-0 z-50">
      <nav className="flex items-center justify-between p-4 ">
        <Logo />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Navbar;

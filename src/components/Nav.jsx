import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

import close from "../assets/close.svg";
import hamburger from "../assets/hamburger.svg";
const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="bg-black relative z-[10] py-[2rem]  flex flex-row justify-between px-[80px] items-center">
      <NavLink to="/">
        <img className="cursor-pointer" src={logo} alt="Skyle-logo" />
      </NavLink>

      {showNavbar ? (
        <div className="flex flex-col bg-[#282828] h-[243px] w-[249px] absolute right-[80px] top-5 pl-[2rem] pt-[1rem]">
          <img className="absolute right-5 top-5 cursor-pointer" onClick={toggleNavbar} src={close} alt="Closenav" />
          <NavLink className='text-[white] py-[1rem] font-[400] text-[18px] leading-[21.78px]' to="/"> Home</NavLink>
          <NavLink className='text-[white] py-[1rem]  font-[400] text-[18px] leading-[21.78px]' to="/portfolio">Portfolio</NavLink>
          <NavLink className='text-[white] py-[1rem]  font-[400] text-[18px] leading-[21.78px]' to="/contact"> Contact</NavLink>
        </div>
      ) : (
        <img className="cursor-pointer" onClick={toggleNavbar} src={hamburger} alt="Hamburger-icon" />
      )}
    </nav>
  );
};
export default Nav;

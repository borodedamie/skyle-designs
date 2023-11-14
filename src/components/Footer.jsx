import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import arrow from '../assets/arrow.svg'
const Footer = () => {
  return (
    <div className="bg-[black] px-[80px] pt-[3rem] py-[5rem] flex flex-row items-end justify-between">
      <div>
        <NavLink>
          <img className="py-[1rem] w-[88px]" src={logo} alt="Skyle-logo" />
        </NavLink>
        <div className="text-[white]">
          <p className='text-[16px] pb-1 font-Helvetica leading-[18.4px] font-[400]'>+234 808 152 1302</p>
          <p className="text-[16px] font-Helvetica leading-[18.4px] font-[400]">
            info@skyledesignsstudios.com
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-[1rem] justify-center items-center">
        <img src={linkedin} alt="LinkedIn-logo" />
        <img src={facebook} alt="Facebook-logo" />
        <img src={twitter} alt="Twitter-logo" />
        <img src={instagram} alt="Instagram-logo" />
      </div>
      <div >
        <h2 className="text-[white] font-[700] leading-[22px] text-[20px] pb-[15px] font-Helvetica">Subscribe to our newsletter</h2>
        <form className="flex gap-[10px]">
          <input className="h-[43px] placeholder:text-[#D1D1D1] w-[356px] bg-[white] pl-[10px] font-Poppins font-[400]" type="email" placeholder="kevindurant@gmail.com" />
          <img className="w-[1.5rem]"  src={arrow} alt="Arrow-right" />
        </form>
      </div>
    </div>
  );
};

export default Footer;

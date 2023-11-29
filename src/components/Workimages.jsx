import React from "react";
import { svgCodes } from "../assets/utils/data";
import Button from "./Button";
import More from "./More";
import Brands from "./Brands";
import linebottom from "../assets/linebottom.svg";
import linebottom2 from "../assets/linebottom2.svg";

import { NavLink } from "react-router-dom";
import { Link, Route } from "react-router-dom";

const Workimages = () => {
  return (
    <div className=" bg-[#0C0C0C] pb-[0rem] md:pb-[10rem] px-[20px] md:px-[80px] relative ">
      <img
        className="hidden md:flex absolute w-[100vw] bottom-[40rem] md:bottom-[35rem] right-0 z-[1]"
        src={linebottom}
      />
       <img
        className="flex md:hidden absolute max-h-full w-[100vw] self-stretch bottom-[3rem] left-0 z-[1]"
        src={linebottom2}
      />


      <div className="flex z-[10]  relative flex-col md:flex-row justify-between items-start md:items-center py-[3rem] md:py-[5rem] ">
        <div>
          <h2 className="text-[22px] font-AtypDisplay pb-5 font-[700] text-[white] leading-[23.32px]">
            Our Works
          </h2>
          <p className="text-[16px] md:text-[18px] font-[Inter] font-[400] text-[white] leading-[22.64px]">
            Award winning designs, and nothing less.
          </p>
        </div>
        <NavLink to="/works">
          <div className="hidden md:flex">
            <Button title="view more works" />
          </div>
        </NavLink>
      </div>
      <div className="pb-[7rem] md:pb-[10rem] relative z-[10] items-center justify-center flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-10 place-items-center ">
          {svgCodes.map((svgCode, p) => {
            return (
              <Link key={p} to={`/works/${svgCode.pathname}`}>
                <img
                  
                  className=" cursor-pointer"
                  src={svgCode.designs}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <More />
      <Brands />
    </div>
  );
};

export default Workimages;

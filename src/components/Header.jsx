import React from "react";
import linetop from "../assets/linetop.svg";

const Header = () => {
  return (
    <div className="bg-[black] relative px-[80px] pt-[5rem] pb-[4rem]">
      <h2 className="uppercase font-AtypDisplay relative z-10 text-[70px] xl:text-[120px] leading-[100.2px] xl:leading-[124.2px] font-[700] text-[white]">
        from a <br /> creative point
      </h2>
      <div className="flex flex-row max-w-[100%] w-[100%] justify-between items-center py-[2rem]">
        <h2 className="text-[white] w-[50vw] xl:w-[35vw]  font-Inter font-[400] text-[18px] leading-[24.75px]">
          Skyle® is a graphic and digital design agency, we help established
          brands and ambitious start-ups achieve their full potential
          with scalable design subscription.
        </h2>
        <img className="absolute top-0 right-0 z-[1]" src={linetop} />
        <div className="flex  flex-row gap-5  z-10 ">
          <button className="border-2 font-Inter text-[black] border-[white] bg-[white] rounded-[15px] h-[54px] w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]">
            Start a project
          </button>
          <button className="border-2 font-Inter text-[white] border-[white] bg-none rounded-[15px] h-[54px] w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]">
            See plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

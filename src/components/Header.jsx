import React from "react";

const Header = () => {
  return (
    <div className="relative px-[20px] md:px-[80px] pb-[4rem] md:pb-[6rem]">
      <h2 className="uppercase relative font-AtypDisplay mt-[6rem] md:mt-[12rem] text-[47px] md:text-[70px] xl:text-[120px] leading-[44.4px] md:leading-[100.2px] xl:leading-[124.2px] font-[700] text-[white]">
        from a <br /> creative point
      </h2>
      <div className="flex flex-col max-w-[100%] w-[100%] md:flex-row justify-between items-start md:items-center py-[1rem] md:py-[2rem]">
        <h2 className="text-[white] w-[100%] md:w-[50vw] xl:w-[38vw] font-[Inter] font-[400] text-[19px] md:text-[18px] leading-[24.75px]">
          Skyle® is a graphic and digital design agency, we help established
          brands and ambitious start-ups achieve their full potential with
          scalable design subscription.
        </h2>

        
        <div className="flex w-[100%] md:w-fit flex-row gap-3 md:gap-5 mt-[2rem] md:mt-0 z-10 ">
        <button className="border-2 order-first md:order-last  font-[Inter] text-[white] w-[11rem] border-[white] bg-none hover:text-[black]  hover:bg-[white] rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]">
            See plans
          </button>
          <button className="border-2 font-[Inter] text-[black]  w-[11rem] hover:text-[white]  hover:bg-transparent border-[white] bg-[white] rounded-[15px] h-[54px] md:w-[145px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]">
            Start a project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

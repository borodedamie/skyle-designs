import React from "react";
import { brands } from "../assets/utils/data";
import { ReactSVG } from "react-svg";

const Brands = () => {
  return (
    <div className="flex bg-[#0C0C0C] flex-col items-center justify-center pt-[5rem] md:pt-[10rem] gap-[5rem]">
      <h2 className="text-[20px] md:text-[40px] text-center font-AtypDisplay capitalize font-[500] leading-[41.8px] text-[white]">
        Brands that love what we do
      </h2>
      <div className="grid grid-cols-4 place-items-center mx-auto justify-center w-[80%] gap-y-10 md:gap-x-[10rem] lg:gap-x-[3rem]">
        {brands.map((brands1, b) => {
          return (
            <div key={b}>
              <ReactSVG src={brands1.brandname} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;

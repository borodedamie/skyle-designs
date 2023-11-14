import React from "react";
import { brands } from "../assets/utils/data";

const Brands = () => {
  return (
    <div className="flex bg-[black] flex-col items-center justify-center pt-[10rem] gap-[5rem]">
      <h2 className="text-[40px] text-center font-AtypDisplay capitalize font-[500] leading-[41.8px] text-[white]">
        Brands that love what we do
      </h2>
      <div className="flex flex-row lg:gap-[3vw] xl:gap-[5vw]">
        {brands.map((brands1, b) => {
          return (
            <div key={b}>
              <img src={brands1.brandname} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;

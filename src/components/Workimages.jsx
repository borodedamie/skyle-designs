import React from "react";
import { data } from "../assets/utils/data";
import Button from "./Button";
import More from "./More";
import Brands from "./Brands";
import linebottom from '../assets/linebottom.svg'

const Workimages = () => {
  return (
    <div className="bg-black pb-[10rem] px-[80px] relative ">
          <img className='absolute w-full bottom-[30rem] right-0 z-[1]' src={linebottom}/>

      <div className="flex z-[10]  relative flex-row justify-between items-center py-[5rem] ">
        <div>
          <h2 className="text-[22px] font-AtypDisplay pb-5 font-[700] text-[white] leading-[23.32px]">
            Our Works
          </h2>
          <p className="text-[18px] font-Inter font-[400] text-[white] leading-[22.64px]">
            Award winning designs, and nothing less.
          </p>
        </div>
        <div>
          <Button title="view more works" />
        </div>
      </div>
      <div className="pb-[10rem] relative z-[10] items-center justify-center flex" >
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 place-items-center ">
          {data.map((datapicture, p) => {
            return (
              <div key={p}>
                <img src={datapicture.design} />
              </div>
            );
          })}
        </div>
      </div>

      <More/>
      <Brands/>
    </div>
  );
};

export default Workimages;

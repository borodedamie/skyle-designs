import React from "react";
import { whatwedo } from "../assets/utils/data";
import circle from '../assets/circle.svg'
const Whatwedo = () => {
  return (
    <div className="bg-[black] px-[80px]  flex flex-row justify-between items-start py-[8rem] gap-[10vw] max-w-[100%] w-[100%]">
      <div className="flex flex-col justify-between gap-10 items-start max-w-[33%] w-full"> 
        <div className=" pb-[1rem] xl:pb-[5rem]">
          <h2 className="pb-[20px] font-[700] font-AtypDisplay text-[40px] leading-[38.6px] text-[white]">
            What We Do
          </h2>
          <p className="font-[400] font-Inter text-[14px] leading-[19.88px] text-[white]">
            We build personalities through clever branding, bring ideas to life
            through our love for print and develop engaging experiences with
            web/mobile design and digital marketing.
          </p>
          <hr className="lg:mt-[1rem] xl:mt-[3rem] border-[#595959]"/>

        </div>
        <img src={circle} alt='Circle'/>
      </div>
      <div className="grid grid-cols-2 gap-x-[10vw] max-w-[66%] gap-y-[15vw] place-items-end ">
        {whatwedo.map((whatwedodata, a) => {
          return (
            <div className=" h-[70px]" key={a}>
              <h2 className="font-[400] pb-[10px] text-[22px] leading-[31.25px] text-[white]">
                {whatwedodata.header}
              </h2>
              <p className="font-[400] font-Inter text-[14px] leading-[19.88px] text-[white]">
                {whatwedodata.text}
              </p>
              <hr className="mt-[3rem] border-[#595959]"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whatwedo;

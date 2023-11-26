import React from 'react';
import { more } from '../assets/utils/data';
const More = () => {
  return (
    <div className='bg-[#0C0C0C]  px-[5px] md:px-0 lg:px-[80px]  relative'>
    <div className='border-[0.5px] z-[10] relative h-fit pt-[4rem] px-0 md:px-[5px] lg:px-0 md:pt-[2rem] lg:pt-0 md:h-[420px]  flex flex-col items-center justify-center bg-transparent mx-auto  text-[white] border-[white] bg-none rounded-[41px] '>
        <p className='text-[#FFFFFF] text-center text-[30px] md:text-[40px] px-[2rem] md:px-[1rem] lg:px-0 leading-[42.4px] font-[700] font-AtypDisplay'>Apps, Websites, Logos & More.</p>
      <div className="text-left justify-center flex" >
        <div className="grid grid-cols-2 place-items-start md:place-content-start md:grid-cols-5 text-left px-[1rem] md:px-[3rem] py-[5rem] md:py-[4rem] gap-x-[4rem] xl:gap-x-[10rem] gap-y-10 justify-center leading-[16.96px] font-[400] text-[16px]">
          {more.map((moretexts, m) => {
            return (
              <div className='font-Inter text-left relative z-[10] capitalize' key={m}>
                <p>{moretexts.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default More;

import React from 'react';
import { more } from '../assets/utils/data';
const More = () => {
  return (
    <div className='bg-[black] relative'>
    <div className='border-[0.5px] z-[10] relative  h-[420px]  flex flex-col items-center justify-center bg-transparent mx-auto  text-[white] border-[white] bg-none rounded-[41px] '>
        <p className='text-[#FFFFFF] text-[40px] leading-[42.4px] font-[700] font-AtypDisplay'>Apps, Websites, Logos & More.</p>
      <div className="text-left justify-center flex" >
        <div className="grid grid-cols-5 text-left px-[5rem] py-[4rem] gap-x-[2rem] xl:gap-x-[8rem] gap-y-10  justify-center leading-[16.96px] font-[400] text-[16px]">
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

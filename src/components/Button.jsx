import React from 'react';

const Button = ({title}) => {
  return (
    <div>
       <button className='border-2 font-[Inter] text-[white] hover:text-[black]  hover:bg-[white] border-[white] bg-none rounded-[15px] h-[54px] w-[159px] md:w-[196px] text-center flex items-center justify-center leading-[19.36px] font-[400] text-[16px]'>
        {title}
      </button>
    </div>
  );
}

export default Button;

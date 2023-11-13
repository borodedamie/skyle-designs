import React from 'react';
import tmlogo from '../assets/tmlogo.svg'
import Button from './Button';
const ContactHero = () => {
  return (
    <div className='bg-[#1A1919] h-[558px] items-center justify-center text-center flex flex-col gap-[2rem]'>
      <img src={tmlogo} alt='Tm-logo'/>
      <h2 className='text-[40px] font-[700] text-[white] leading-[47.21px] font-AtypDisplay w-[687px]'>Do you want to start a new project or collaborate with us ?</h2>
      <Button title="Contact us"/>
   
    </div>
  );
}

export default ContactHero;

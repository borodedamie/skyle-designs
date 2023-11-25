import React from "react";
import tmlogo from "../assets/tmlogo.svg";
import Button from "./Button";
const ContactHero = () => {
  return (
    <div className="bg-[#1A1919] h-fit py-[4rem] md:py-0 md:h-[558px] px-[3.5rem] md:px-0  items-center justify-center text-center flex flex-col gap-[2rem]">
      <svg
        width="102"
        height="75"
        viewBox="0 0 102 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.8771 63.4108L37.3189 39.8923L45.5193 36.9036L50.4382 46.4867L61.694 28.2466L0 49.4101L13.8686 42.0044C13.6701 40.4455 13.5653 38.8565 13.5653 37.2445C13.5653 16.6738 30.2392 0 50.8086 0C59.1513 0 66.8529 2.74288 73.0593 7.37397L67.6262 10.2943C62.7482 7.24353 56.9846 5.4801 50.8086 5.4801C33.266 5.4801 19.0471 19.702 19.0471 37.2445C19.0471 37.9044 19.0668 38.5593 19.1078 39.2081L87.7572 2.55207L80.3135 14.5131C85.1674 20.8012 88.0544 28.6849 88.0544 37.2445C88.0544 57.8152 71.3806 74.4891 50.8086 74.4891C34.1514 74.4891 19.5869 63.4668 14.9908 47.4738L20.1554 45.5966C23.825 59.0859 36.156 69.009 50.8082 69.009C68.3521 69.009 82.574 54.7871 82.574 37.2445C82.574 30.6895 80.589 24.5966 77.1849 19.5382L68.8178 32.9821L49.8771 63.4104V63.4108Z"
          fill="white"
        />
        <path
          d="M96.2836 8.88354V9.70988H94.8954V13.5323H93.914V9.70988H92.5195V8.88354H96.2836Z"
          fill="white"
        />
        <path
          d="M99.9289 8.88354H101.33V13.5323H100.42V10.3881C100.42 10.2977 100.42 10.1686 100.426 10.0071C100.426 9.84565 100.426 9.72289 100.426 9.63282L99.5483 13.5323H98.6055L97.7338 9.63282C97.7338 9.72322 97.7338 9.84598 97.7338 10.0071C97.7402 10.1686 97.7402 10.2977 97.7402 10.3881V13.5323H96.8364V8.88354H98.2439L99.0896 12.5378L99.9289 8.88354Z"
          fill="white"
        />
      </svg>

      <h2 className="text-[24px] md:text-[40px] font-[700] text-[white] leading-[28.33px] md:leading-[47.21px] font-AtypDisplay w-fit md:w-[687px]">
        Do you want to start a new project or collaborate with us ?
      </h2>
      <Button title="Contact us" />
    </div>
  );
};

export default ContactHero;

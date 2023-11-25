import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { worksPages } from "../assets/utils/data";
import "../App.css";
const WorksPage = () => {
  const { pathname } = useParams();
  const work = worksPages.find((work) => work.pathname === pathname);
  const numberOfImagesToDisplay = work?.numberOfImages || 0; 
  const images = [
    work?.one,
    work?.two,
    work?.three,
    work?.four,
    work?.five,
    work?.six,
    work?.seven,
    work?.eight,
    work?.nine,
    work?.ten,
  ];

  return (
    <div className="px-[20px] lg:px-[80px] relative">
      {work ? (
        <div>
          <div
            className="flex flex-col lg:flex-row h-fit py-[6rem] lg:py-0 lg:h-[100vh] text-[#FFFFFF] items-center justify-center px-0 lg:px-[5rem] max-w-[100%] w-[100%]"
            key={work.id}
          >
            <div className="max-w-[100%] w-[100%] lg:max-w-[50%] lg:w-[100%] pb-[6rem] lg:pb-0">
              <img src={work.logo} />
            </div>
            <div className="max-w-[100%] w-[100%] lg:max-w-[50%] lg:w-[100%] ">
              <div className="flex flex-col text-left pb-[1rem] border-b-[1px] border-[#595959]">
                <h2 className="text-[white] capitalize pb-[1rem] font-AtypDisplay font-[700] text-[25px] leading-[26.51px]">
                  {work.title}
                </h2>
                <p className="text-[white] pb-[2rem] font-Inter font-400 text-[16px] leading-[20.8px]">
                  {work.paragraph}
                </p>
              </div>
              <div className="flex flex-row border-b-[1px] border-[#595959] py-[2rem] justify-between items-center text-left">
                <div className="flex flex-col">
                  <h2 className="text-[white] font-AtypDisplay pb-[.5rem] font-[500] text-[18px] leading-[24.75px]">
                    {work.content1}
                  </h2>
                  <p className="font-Inter font-400 text-[16px] leading-[22px]">
                    {work.owner}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[white] font-AtypDisplay pb-[.5rem] font-[500] text-[18px] leading-[24.75px]">
                    {work.date}
                  </h2>
                  <p className="font-Inter  font-400 text-[16px] leading-[22px]">
                    {work.date1}
                  </p>
                </div>
              </div>
              <div className="flex flex-col pt-[2rem]">
                <h2 className="text-[white] font-AtypDisplay font-[500] pb-[.5rem] text-[18px] leading-[24.75px]">
                  {work.category1}
                </h2>
                <p className="font-Inter  font-400 text-[16px] leading-[22px]">
                  {work.category}
                </p>
              </div>
            </div>
          </div>
          <NavLink to="/works">
            <button className="border-b-[1px] mb-[4rem] font-Inter font-400 text-[20px] lg:text-[18px] leading-[21.78px] border-[white] text-[white]">
              Back to works
            </button>
          </NavLink>
          <div className="flex flex-col ">
            {images.slice(0, numberOfImagesToDisplay).map((image, index) => (
              <img
                key={index}
                className="pb-[4rem]"
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-[white]">Item not found</p>
      )}
    </div>
  );
};

export default WorksPage;

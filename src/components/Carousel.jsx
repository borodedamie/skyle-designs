import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel } from "../assets/utils/data";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";
import { ReactSVG } from "react-svg";
import cue from "../assets/cue.svg";
import press from "../assets/press.svg";
import happy from "../assets/happy.svg";
import fimid from "../assets/fimid.svg";

const Carousel = () => {
  // useEffect(() => {
  //   new Glide(".glide", {
  //     type: "carousel", 
  //     perView: 4,
  //     gap: 0,
  //   //   autoplay: 3000,
  //   }).mount();
  // }, []);

  return (
    // <div className="glide" style={{ backgroundColor: '#0C0C0C' }}>
    // <div className="glide__track" data-glide-el="track">
      <div className="flex flex-row bg-[#0C0C0C] items-center">
        {carousel.map((carouself, index) => {
          return (
            <div className="" key={index}>
                <img className="w-full h-[40rem]" src={carouself.carousel1}
                />
            </div>
          );
        })}
      </div>
  //   </div>
  // </div>
  );
};

export default Carousel;

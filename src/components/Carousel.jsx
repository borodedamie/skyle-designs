import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel } from "../assets/utils/data";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";
import { ReactSVG } from "react-svg";

const Carousel = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel", 
      perView: 4,
      gap: 0,
    //   autoplay: 3000,
    }).mount();
  }, []);

  return (
    <div>
      <div className="glide" style={{ backgroundColor: '#0C0C0C' }}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides flex flex-row justify-center gap-0 items-center w-[100vw] pb-0">
            {carousel.map((carouself, index) => {
              return (
                <div className="glide__slide " key={index}>
                    <img className="h-[498.11px] w-[1074px] " src={carouself.carousel1}
                    />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

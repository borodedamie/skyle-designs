import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel } from "../assets/utils/data";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";

const Carousel = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel", 
      perView: 4,
      gap: 5,
      autoplay: 3000,
    }).mount();
  }, []);

  return (
    <div>
      <div className="glide" style={{ backgroundColor: 'black' }}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides flex flex-row justify-center items-center w-full pb-0">
            {carousel.map((carouself, index) => {
              return (
                <div className="glide__slide" key={index}>
                  <img
                    className=" "
                    src={carouself.carousel1}
                    alt={`Slide ${index + 1}`}
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

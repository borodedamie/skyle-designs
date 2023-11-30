import React, { useEffect, useState } from "react";
import { brands, brands2 } from "../assets/utils/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import { ReactSVG } from "react-svg";
import "../css/glide.theme.css";
import arrowleft from "../assets/arrowleft.svg";
import arrowright from "../assets/arrowright.svg";

const Brands = () => {
  const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    return width;
  };
  const screenWidth = useScreenWidth();

  useEffect(() => {
    new Glide(".glide", {
      type: 'carousel',
      perView: 1,
      breakpoints: {
        420: {
          perView: 1,
        },
        768: {
          perView: 2.5,
        },
        1024: {
          perView: 3.5,
        },
        1280: {
          perView: 5,
        },
      },
      gap: 10,
    }).mount();
  }, []);
 
  return (
    <div className="flex flex-col items-center justify-center pt-[5rem] md:pt-[10rem] gap-[5rem]">
      <h2 className="text-[20px] md:text-[40px] text-center font-AtypDisplay capitalize font-[500] leading-[41.8px] text-[white]">
        Brands that love what we do
      </h2>
      <div>
        {screenWidth <= 767 ? (
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <div className="glide__slides">
                {brands2.map((brands, e) => {
                  return (
                    <div key={e} className="glide__slide relative grid">
                      <div className="flex left-0 flex-col items-center justify-center w-full">
                        <img className="py-[1rem]" src={brands.brandname} />
                        <img className="py-[1rem]" src={brands.brandname1} />
                        <img className="py-[1rem]" src={brands.brandname2} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div data-glide-el="controls" className="glide__arrows">
              <button
                className="glide__arrow1 glide__arrow--left"
                data-glide-dir="<"
              >
                <img src={arrowleft} />
              </button>
              <button
                className="glide__arrow1 glide__arrow--right"
                data-glide-dir=">"
              >
                <img src={arrowright} />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 place-items-center mx-auto justify-center w-[100%] gap-x-[10rem] gap-y-[3rem]">
            {brands.map((brands1, b) => {
              return (
                <div key={b}>
                  <ReactSVG src={brands1.brandname} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;

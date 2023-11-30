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
      type: "carousel",
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
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.62032 1.15845C8.50099 1.04141 8.35903 0.948503 8.20261 0.885104C8.04619 0.821704 7.87842 0.789062 7.70897 0.789062C7.53952 0.789062 7.37175 0.821704 7.21533 0.885104C7.05891 0.948503 6.91695 1.04141 6.79762 1.15845L0.379683 7.40242C0.259374 7.51851 0.163883 7.65663 0.0987168 7.80881C0.0335507 7.96098 0 8.12421 0 8.28906C0 8.45392 0.0335507 8.61714 0.0987168 8.76932C0.163883 8.9215 0.259374 9.05961 0.379683 9.1757L6.79762 15.4197C6.91695 15.5367 7.05891 15.6296 7.21533 15.693C7.37175 15.7564 7.53952 15.7891 7.70897 15.7891C7.87842 15.7891 8.04619 15.7564 8.20261 15.693C8.35903 15.6296 8.50099 15.5367 8.62032 15.4197C8.74063 15.3036 8.83612 15.1655 8.90128 15.0133C8.96645 14.8611 9 14.6979 9 14.533C9 14.3682 8.96645 14.2049 8.90128 14.0528C8.83612 13.9006 8.74063 13.7625 8.62032 13.6464L3.10089 8.28906L8.62032 2.93174C8.74063 2.81565 8.83612 2.67753 8.90128 2.52535C8.96645 2.37318 9 2.20995 9 2.0451C9 1.88024 8.96645 1.71702 8.90128 1.56484C8.83612 1.41266 8.74063 1.27454 8.62032 1.15845Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                className="glide__arrow1 glide__arrow--right"
                data-glide-dir=">"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.379683 1.15845C0.499009 1.04141 0.640975 0.948503 0.797392 0.885104C0.95381 0.821704 1.12158 0.789062 1.29103 0.789062C1.46048 0.789062 1.62825 0.821704 1.78467 0.885104C1.94109 0.948503 2.08305 1.04141 2.20238 1.15845L8.62032 7.40242C8.74063 7.51851 8.83612 7.65663 8.90128 7.80881C8.96645 7.96098 9 8.12421 9 8.28906C9 8.45392 8.96645 8.61714 8.90128 8.76932C8.83612 8.9215 8.74063 9.05961 8.62032 9.1757L2.20238 15.4197C2.08305 15.5367 1.94109 15.6296 1.78467 15.693C1.62825 15.7564 1.46048 15.7891 1.29103 15.7891C1.12158 15.7891 0.95381 15.7564 0.797392 15.693C0.640975 15.6296 0.499009 15.5367 0.379683 15.4197C0.259375 15.3036 0.163883 15.1655 0.0987167 15.0133C0.0335512 14.8611 0 14.6979 0 14.533C0 14.3682 0.0335512 14.2049 0.0987167 14.0528C0.163883 13.9006 0.259375 13.7625 0.379683 13.6464L5.89911 8.28906L0.379683 2.93174C0.259375 2.81565 0.163883 2.67753 0.0987167 2.52535C0.0335512 2.37318 0 2.20995 0 2.0451C0 1.88024 0.0335512 1.71702 0.0987167 1.56484C0.163883 1.41266 0.259375 1.27454 0.379683 1.15845Z"
                    fill="white"
                  />
                </svg>
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

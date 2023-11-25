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
      breakpoints: {
        420: {
          perView: 1.5,
        },
        768: {
          perView: 2.5,
        },
        1024: {
          perView: 4,
        },
        1280: {
          perView: 4,
        },
      },
      gap: 5,
      autoplay: 3000,
    }).mount();
  }, []);

  return (
    <div>
      <div className="glide" style={{ backgroundColor: '#0C0C0C' }}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {carousel.map((carouself, index) => {
              return (
                <div className="glide__slide " >
                  <div className="h-fit md:h-[45rem] flex items-center justify-center">
                  <img
                  key={index}
                  className=""
                    src={carouself.carousel1}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
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



// import React, { useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { carousel } from "../assets/utils/data";
// import Glide from "@glidejs/glide";
// import "../css/glide.core.css";
// import "../css/glide.theme.css";
// import { ReactSVG } from "react-svg";
// import cue from "../assets/cue.svg";
// import press from "../assets/press.svg";
// import happy from "../assets/happy.svg";
// import fimid from "../assets/fimid.svg";

// const Carousel = () => {
//   // useEffect(() => {
//   //   new Glide(".glide", {
//   //     type: "carousel", 
//   //     perView: 4,
//   //     gap: 0,
//   //   //   autoplay: 3000,
//   //   }).mount();
//   // }, []);

//   return (
//     // <div className="glide" style={{ backgroundColor: '#0C0C0C' }}>
//     // <div className="glide__track" data-glide-el="track">
//       <div className="flex flex-row bg-[#0C0C0C] justify-center">
//         {carousel.map((carouself, index) => {
//           return (
//             <div className="" key={index}>
//                 <img className="h-fit md:h-[45rem]" src={carouself.carousel1}
//                 />
//             </div>
//           );
//         })}
//       </div>
//   //   </div>
//   // </div>
//   );
// };

// export default Carousel;
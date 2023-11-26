import React from "react";
import { brands } from "../assets/utils/data";
import { ReactSVG } from "react-svg";

const Brands = () => {
  return (
    <div className="flex bg-[#0C0C0C] flex-col items-center justify-center pt-[5rem] md:pt-[10rem] gap-[5rem]">
      <h2 className="text-[20px] md:text-[40px] text-center font-AtypDisplay capitalize font-[500] leading-[41.8px] text-[white]">
        Brands that love what we do
      </h2>
      <div className="grid grid-cols-4 place-items-center mx-auto justify-center w-[80%] gap-y-10 md:gap-x-[10rem] lg:gap-x-[3rem]">
        {brands.map((brands1, b) => {
          return (
            <div key={b}>
              <ReactSVG src={brands1.brandname} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;


// import React, {useEffect, useState} from "react";
// import { brands } from "../assets/utils/data";
// import { ReactSVG } from "react-svg";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Glide from "@glidejs/glide";
// import "../css/glide.core.css";
// import "../css/glide.theme.css";
// const Brands = () => {

//   const useScreenWidth = () => {
//     const [width, setWidth] = useState(window.innerWidth);
  
//     useEffect(() => {
//       const handleResize = () => {
//         setWidth(window.innerWidth);
//       };
  
//       // Event listener for window resize
//       window.addEventListener("resize", handleResize);
  
//       // Clean up the event listener when the component unmounts
//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []); // Empty dependency array ensures this effect runs once after the initial render
  
//     return width;
//   };
  
//   useEffect(() => {
//     new Glide(".glide1", {
//       type: "carousel", 
//       perView: 1,
//       gap: 10,
//     }).mount();
//   }, []);
  
//   const screenWidth = useScreenWidth();

  
//   return (
//     <div className="flex bg-[#0C0C0C] flex-col items-center justify-center pt-[5rem] md:pt-[10rem] gap-[5rem]">
//       <h2 className="text-[20px] md:text-[40px] text-center font-AtypDisplay capitalize font-[500] leading-[41.8px] text-[white]">
//         Brands that love what we do
//       </h2>
//       <div>
//         {screenWidth <= 767 ? (
//          <div className="glide">
//          <div className="glide__track" data-glide-el="track">
//            <div className="glide__slides">
//             <div className="grid grid-cols-1 place-items-center mx-auto justify-center w-[80%] gap-y-10 md:gap-x-[10rem] lg:gap-x-[3rem]">
//              {brands.map((brands1, b) => {
//                return (
//                  <div className="glide__slide grid grid-rows-3" >
//                    <div className="h-fit md:h-[45rem] flex items-center justify-center">
//                    <ReactSVG key={b} src={brands1.brandname} />
//                  </div>
//                  </div>
//                );
//              })}
//              </div>
//              </div>

//            </div>
//          </div>
//         ) : (
//           // <div className="grid grid-cols-4 place-items-center mx-auto justify-center w-[80%] gap-y-10 md:gap-x-[10rem] lg:gap-x-[3rem]">
//           //   {brands.map((brands1, b) => {
//           //     return (
//           //       <div key={b}>
//           //         <ReactSVG src={brands1.brandname} />
//           //       </div>
//           //     );
//           //   })}
//           // </div>
//           <p>hh</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Brands;

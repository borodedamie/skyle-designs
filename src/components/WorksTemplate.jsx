// WorksTemplate.jsx
import React from "react";
import { worksPages } from "../assets/utils/data";
import { Link } from "react-router-dom";

const WorksTemplate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-[20px] md:px-0 gap-x-8 gap-y-10 place-items-center mb-[6rem]">
      {worksPages.map((page) => (
        <div className="cursor-pointer relative z-10" key={page.id}>
          <Link to={`/works/${page.pathname}`}>
            {page.pathname}
            <img src={page.brand} alt={page.pathname} />
          </Link>
        </div>
      ))}

      
    </div>
  );
};

export default WorksTemplate;

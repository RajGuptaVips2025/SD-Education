import React from "react";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";
import { useState } from 'react';
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Link } from 'react-router-dom';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export default function InfiniteMovingCardsDemo() {
  

  const [hoveredImg, setHoveredImg] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);

  const handleMouseOver = (imgSrc) => {
    setHoveredImg(imgSrc);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };

  const handleClick = (imgSrc) => {
    setClickedImg(imgSrc);
  };

  {
    /* <InfiniteMovingCards items={testimonials} direction="right" speed="slow" /> */
  }
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-gradient-to-b from-[#5e626c] to-[#111827] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div>
        <h1 className="text-center text-6xl text-[#1c2326] font-bold pb-12">
          Our Reviews
        </h1>
        <InfiniteMovingCards direction="right" speed="slow" />
      </div>
      <div className="flex justify-center items-center relative mt-16">
        {[
          "/src/assets/p1.jpeg",
          "/src/assets/p6.jpeg",
          "/src/assets/p7.jpeg",
          "/src/assets/p8.jpeg",
          "/src/assets/p4.jpeg",
          "/src/assets/p4.jpeg",
        ].map((imgSrc, index) => (
          <Link
          to=""
            key={index}
            data-tooltip-id={`my-tooltip-${index}`}
            data-tooltip-content="Hover over me"
            data-tooltip-place="top"
            className={`relative flex justify-center items-center ${
              index !== 0 ? "-ml-[15px]" : ""
            }`} // Apply negative margin for overlap
          >
            <img
              src={imgSrc}
              alt=""
              className={`w-12 rounded-full ${
                hoveredImg === imgSrc ? "hovered" : ""
              } ${clickedImg === imgSrc ? "clicked" : ""}`}
              onMouseOver={() => handleMouseOver(imgSrc)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(imgSrc)}
            />
            <CustomTooltip
              id={`my-tooltip-${index}`}
              imgSrc={imgSrc}
              hoveredImg={hoveredImg}
              clickedImg={clickedImg}
            />
          </Link>
        ))}
      </div>
      <div className="py-6">
        <Link to="/review" class="relative inline-block text-lg group">
          <span class="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative text-sm sm:text-base">Write Your Review</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
        </Link>
      </div>
    </div>
  );
}

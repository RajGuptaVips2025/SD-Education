import React from "react";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";
import { useState } from 'react';
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

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

  {/* <InfiniteMovingCards items={testimonials} direction="right" speed="slow" /> */ }
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-gradient-to-b from-[#5e626c] to-[#111827] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div>
        <h1 className="text-center text-6xl text-[#363161] font-bold pb-12">Our Reviews</h1>
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
      <div className="flex justify-center items-center relative mt-16">
        {[
          '/src/assets/p1.jpeg',
          '/src/assets/p6.jpeg',
          '/src/assets/p7.jpeg',
          '/src/assets/p8.jpeg',
          '/src/assets/p4.jpeg',
          '/src/assets/p4.jpeg'
        ].map((imgSrc, index) => (
          <a
            key={index}
            data-tooltip-id={`my-tooltip-${index}`}
            data-tooltip-content="Hover over me"
            data-tooltip-place="top"
            className={`relative flex justify-center items-center ${index !== 0 ? '-ml-[15px]' : ''}`} // Apply negative margin for overlap
          >
            <img
              src={imgSrc}
              alt=""
              className={`w-12 rounded-full ${hoveredImg === imgSrc ? 'hovered' : ''} ${clickedImg === imgSrc ? 'clicked' : ''}`}
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
          </a>
        ))}
      </div>
      <div className="py-6">
        <a href="#" class="relative inline-block text-lg group">
          <span class="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative text-sm sm:text-base">Write Your Review</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
        </a>
      </div>
    </div>
  );
}




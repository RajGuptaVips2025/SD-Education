import React, { useState, useEffect, useRef } from 'react';
import { IoIosPlay } from 'react-icons/io';
import Typed from 'typed.js';
import TypedText from '../TypedText/TypedText';

function Hero() {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <>
      <div className='h-[80vh] w-full banner gap-5 flex flex-row md:flex-col justify-center items-center px-4 md:px-20'
        style={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <div className='flex mt-28 flex-col md:flex-row justify-center items-center'>
          <div className='text text-center md:text-start text-white w-full md:w-2/3 mx-4'>
            <h1 className='text-center md:text-start text-[30px] md:text-[55px] sm:text-[50px] font-bold leading-tight'>
              <span>Learn </span>
              <span className='text-[#f3e388]'>
                <TypedText texts={['React', 'JavaScript', 'CSS', 'HTML', 'Tailwind CSS', 'Next js']} />
              </span>
            </h1>
            <p className='text-center mt-4 w-full md:w-4/5 md:text-start text-[18px] md:text-[18px] sm:text-[25px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit eius repellat quaerat, obcaecati enim reprehenderit quas, nesciunt dolores officia minus delectus. In ex animi eveniet delectus laudantium quae cumque.
            </p>
            <a href="/signup" className="relative inline-block text-lg group mt-4">
              <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative text-sm sm:text-base">Read More</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
            </a>
          </div>

          <div className='relative w-full max-w-md mt-8 md:mt-0 md:ml-8'>
            <video ref={videoRef} className="w-full rounded-md" controls style={{ display: isVideoPlaying ? 'block' : 'none' }}>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isVideoPlaying && (
              <div className="flex justify-center items-center cursor-pointer bg-black bg-opacity-50 rounded-md h-64" onClick={handleVideoPlay}>
                <IoIosPlay size={50} className="text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;



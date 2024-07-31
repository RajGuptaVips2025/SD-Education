import React, { useState, useRef } from "react";
import { IoIosPlay } from "react-icons/io";
import TypedText from "../TypedText/TypedText";
import { Link } from "react-router-dom";
import play_icon from '../../assets/play-icon.png'
import video from '../../assets/introVideo.mp4'
function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div
        className="h-[80vh] w-full banner gap-5 flex flex-row md:flex-col justify-center items-center px-4 md:px-20"
        style={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <div className="flex mt-28 flex-col md:flex-row justify-center items-center">
          <div className="text text-center md:text-start text-white w-full md:w-2/3 mx-4">
            <h1 className="text-center md:text-start text-[30px] md:text-[55px] sm:text-[50px] font-bold leading-tight">
              <span>Learn </span>
              <span className="text-[#f3e388]">
                <TypedText
                  texts={[
                    "React",
                    "JavaScript",
                    "CSS",
                    "HTML",
                    "Tailwind CSS",
                    "Next js",
                    "MongoDB",
                    "Express",
                    "NodeJs",
                    "Bootstrap",
                  ]}
                />
              </span>
            </h1>
            <p className="text-center mt-4 w-full md:w-4/5 md:text-start text-[18px] md:text-[18px] sm:text-[25px]">
              SD Education offers a user-friendly platform for beginners to
              learn programming with HTML, CSS, JavaScript, and React. Its
              interactive curriculum and responsive design ensure easy
              navigation, promoting inclusive and equitable quality education in
              line with SDG 4.{" "}
            </p>
            <Link
              to="https://sdgs.un.org/"
              className="relative inline-block text-lg group mt-4"
            >
              <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative text-sm sm:text-base">Read More</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
            </Link>
          </div>
          <div className="relative w-full flex justify-center items-center mr-6 max-w-md mt-8 md:mt-0 md:ml-8">
            {isPlaying ? (
              <video
                width="320"
                height="240"
                className="rounded-md"
                controls
                autoPlay
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={play_icon}
                alt="Play Icon"
                onClick={handlePlayClick}
                className="cursor-pointer md:ml-40"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

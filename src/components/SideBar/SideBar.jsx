import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function SideBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleButton() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the effect on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {/* Button for small screens */}
      <button
        onClick={toggleButton}
        className="text-2xl mt-16 block lg:hidden p-4 fixed top-4 right-4 z-50 text-white"
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>

      {/* Sidebar for larger screens */}
      <div className="w-[20%] max-h-[100vh] overflow-y-auto flex-col gap-2 text-white hidden lg:flex sticky top-0 ">
        <div className="bg-gradient-to-b from-[#0d253c] to-[#111827] max-h-full rounded overflow-x-hidden">
          {props.topics.map((col, index) => (
            <Link
              to={col.head}
              key={index}
              smooth={true}
              duration={1000}
              offset={-100}
              style={{ transition: "ease-in-out" }}
            >
              <div className="p-2 bg-[#1c40594d] my-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-[#2d4663] hover:scale-110 duration-150 cursor-pointer">
                <div className="mx-auto">
                  <h1 className="text-center">{col.head}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar dropdown for small screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 mt-24 w-full h-full bg-[#0d253c] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4 overflow-y-auto h-full">
          <button onClick={toggleButton} className="text-2xl mb-4 text-white">
            {/* <i className="fa-solid fa-xmark"></i> */}
          </button>
          <div className="flex flex-col gap-2">
            {props.topics.map((col, index) => (
              <Link
                to={col.head}
                key={index}
                smooth={true}
                duration={1000}
                offset={-100}
                style={{ transition: "ease-in-out" }}
                className="p-2 bg-[#1c40594d] my-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-[#2d4663] hover:scale-110 duration-150 cursor-pointer"
                onClick={toggleButton} // Close the menu when a link is clicked
              >
                <div className="mx-auto">
                  <h1 className="text-center">{col.head}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;

import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.js";

// import { a } from "react-router-dom";

function Navbar({ isAuth, setIsAuth }) {
  const links = [
    { linkName: "HTML", linkAddress: "/html" },
    { linkName: "CSS", linkAddress: "/css" },
    { linkName: "Javascript", linkAddress: "/javascript" },
    { linkName: "Tailwind", linkAddress: "/tailwind" },
    { linkName: "React", linkAddress: "/react" },
    { linkName: "Next.Js", linkAddress: "/nextjs" },
    { linkName: "MongoDB", linkAddress: "/mongodb" },
    { linkName: "Node Js", linkAddress: "/node" },
    { linkName: "Express", linkAddress: "/express" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    const menu = document.getElementById("dropdown-menu");
    const button = document.getElementById("dropdown-button");

    if (!button.contains(event.target) && !menu.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const logOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      setIsAuth(false);
    } catch (error) {
      console.error("Error signing out: ", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  function handleLogin() {
    if (!isAuth) {
      alert("Please Login");
    }
  }
  return (
    <header
      className={`fixed w-full top-0 z-50 border-x-[3px] border-b-[3px] border-t-0 shadow-md duration-500 ${
        isScrolled
          ? "bg-slate-100 bg-opacity-20 rounded-b-[16px] border-x-[1px] border-b-[1px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.5px] border-white border-opacity-32"
          : "bg-slate-100 border-[#000]"
      }`}
      style={{
        borderBottomLeftRadius: isScrolled ? "30px" : "30px",
        borderBottomRightRadius: isScrolled ? "30px" : "30px",
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        <a href="/">
          <img
            className="h-12 w-52 sm:w-32 md:w-40 lg:w-48 xl:w-52 object-contain"
            src={Logo}
            alt="Logo"
          />
        </a>

        <nav className="hidden md:flex flex-grow justify-center items-center text-white">
          <ul className="flex space-x-8 list-none p-0 m-0">
            <li>
              <a
                href="/"
                className="text-lg text-gray-800 group transition duration-300"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="/compiler"
                className="text-lg text-gray-800 group transition duration-300"
              >
                Compiler
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li className="relative">
              <button
                id="dropdown-button"
                onClick={handleDropdownToggle}
                className="text-lg text-gray-800 group transition duration-300 flex items-center"
              >
                Courses
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-300 transform"
                  style={{
                    transform: isDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul
                  id="dropdown-menu"
                  className={`absolute  overflow-hidden right-0 mt-2 w-48 rounded-md shadow-lg bg-[#e9eff7] ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isScrolled &&
                    "bg-slate-100 bg-opacity-20 rounded-b-[16px] border-x-[1px] border-b-[1px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.5px] border-white border-opacity-32"
                  } `}
                >
                  {links.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.linkAddress}
                        className="block px-4 py-2 text-gray-800 text-center text-sm hover:bg-[#ced7f377]  hover:scale-125 font-semibold duration-100 overflow-hidden "
                      >
                        {item.linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a
                onClick={handleLogin}
                href="/review"
                className="text-lg text-gray-800 group transition duration-300"
              >
                Review
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            {isAuth ? (
              <li>
                <a
                  href="/review/user"
                  className="text-lg text-gray-800 group transition duration-300"
                >
                  My Reviews
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          {isAuth ? (
            <a
              href="/login"
              className="relative md:inline-block hidden text-lg group "
            >
              <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative text-sm sm:text-base">
                  <button onClick={logOut}>Logout</button>
                </span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
            </a>
          ) : (
            <>
              <a
                href="/login"
                className="relative text-lg group md:inline-block hidden "
              >
                <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative text-sm sm:text-base">Login</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </a>
              <a
                href="/signup"
                className="relative text-lg group md:inline-block hidden"
              >
                <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative text-sm sm:text-base">Sign Up</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </a>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-slate-100 border-t-2 border-gray-200">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="/"
                className="text-lg text-gray-800 group transition duration-300"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lg text-gray-800 group transition duration-300"
              >
                compiler
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="/review"
                className="text-lg text-gray-800 group transition duration-300"
              >
                Review
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            {isAuth ? (
              <li>
                <a
                  href="/review/user"
                  className="text-lg text-gray-800 group transition duration-300"
                >
                  My Reviews
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </a>
              </li>
            ) : null}
            {isAuth ? (
              <li>
                <button
                  onClick={logOut}
                  className="text-lg text-gray-800 group transition duration-300"
                >
                  Logout
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </button>
              </li>
            ) : (
              <>
                <li>
                  <a
                    href="/login"
                    className="text-lg text-gray-800 group transition duration-300"
                  >
                    Login
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="text-lg text-gray-800 group transition duration-300"
                  >
                    Sign Up
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;

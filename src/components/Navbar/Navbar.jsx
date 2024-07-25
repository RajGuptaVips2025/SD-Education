// import React from "react";
import Logo from "../../assets/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import React, { useState, useEffect } from "react";

function Navbar({ isAuth, setIsAuth }) {
  useEffect(() => {
    console.log(isAuth);
  }, [])
  const logOut = () => {
    signOut(auth);
    setIsAuth(false);
  };
  return (
    <header
      className="fixed w-full top-0 z-50  border border-x-[3px] border-b-[3px] bg-slate-100 border-[#000] border-t-0 shadow-md "
      style={{
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
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
                href="#home"
                className="text-lg text-gray-800 group  transition duration-300"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg text-gray-800 group  transition duration-300"
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="text-lg text-gray-800 group  transition duration-300"
              >
                Courses
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-lg text-gray-800 group  transition duration-300"
              >
                Blog
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            {isAuth ? (
              <li>
                <a
                  href="/blog/user"
                  className="text-lg text-gray-800 group  transition duration-300"
                >
                  My Blogs
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          {isAuth ? (
            <a href="/login" className="relative inline-block text-lg group">
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
              <a href="/login" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative text-sm sm:text-base">Login</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </a>
              <a href="/signup" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative text-sm sm:text-base">Sign up</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

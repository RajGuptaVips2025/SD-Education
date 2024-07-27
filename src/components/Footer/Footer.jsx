import React from 'react';
import LogoWhite from '../../assets/LogoWhite.png'
import { svgArray } from '../../assets';
import { arr } from '../../assets';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 pt-28 pb-8 text-gray-400 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col gap-10 sm:flex-col md:flex-col lg:flex-row items-center justify-between">
            <div className="flex gap-16 md:gap-12 justify-center flex-row flex-wrap mb-6">
              {arr.map((col, index) => (
                <div key={index} className="mb-6 md:mr-16 w-1/3 md:w-1/12">
                  <h5 className="text-white uppercase font-bold mb-4">{col.head}</h5>
                  <ul>
                    {col.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2">
                        <a href={item.link} className="hover:text-white">
                          {item.content}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row items-center ml-5 justify-between w-full sm:w-auto">
              <div className="mb-6 md:mr-10 w-full sm:w-auto">
                <h5 className="text-white uppercase font-bold mb-4">
                  Subscribe to our newsletter
                </h5>
                <p className="text-gray-400 mb-4">
                  The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <input
                    type="email"
                    className="bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                    placeholder="Enter your email"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <img className="h-auto max-w-48 mb-4 md:mb-0" src={LogoWhite} alt="logo" />
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} SD Education, Inc. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {svgArray.map((svg, index) => (
                  <a key={index} href={svg.link} className="text-gray-400 hover:text-white">
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
                        d={svg.path_D}
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
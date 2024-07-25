import React from 'react';
import LogoWhite from '../../assets/LogoWhite.png'
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 pt-28 pb-8 text-gray-400 py-10">
        <div className="container mx-auto px-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex gap-10 flex-col md:flex-row mb-6">
              <div className="mb-6 md:mr-10">
                <h5 className="text-white uppercase font-bold mb-4">Solutions</h5>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Marketing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Analytics
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mr-10">
                <h5 className="text-white uppercase font-bold mb-4">Support</h5>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mr-10">
                <h5 className="text-white uppercase font-bold mb-4">Company</h5>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h5 className="text-white uppercase font-bold mb-4">Legal</h5>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Claim
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:mr-10 ml-40 mb-20">
                <h5 className="text-white uppercase font-bold mb-4">
                  Subscribe to our newsletter
                </h5>
                <p className="text-gray-400 mb-4">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <div className="flex flex-row items-center">
                  <input
                    type="email"
                    className="bg-gray-800 border border-gray-700 rounded px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <a href="#" className="hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <img className="h-auto max-w-48 " src={LogoWhite} alt="logo" />
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} SD Education, Inc. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http: www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http: www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http: www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http: www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 17.75l-6.172 3.828a2 2 0 00-.584 1.738 2 2 0 001.738-.584L12 15.5m0 2.25l6.172 3.828a2 2 0 00.584 1.738 2 2 0 001.738-.584L12 17.75m0-11.5l-6.172-3.828a2 2 0 00-.584-1.738 2 2 0 00-1.738.584L12 5.5m0-2.25l6.172-3.828a2 2 0 00.584-1.738 2 2 0 001.738.584L12 3.25"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http: www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.584 1.405L5 17m5-4v3m0 3h-3m2 1h-2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;



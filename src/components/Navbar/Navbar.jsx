import React from 'react'

function Navbar() {
  return (
    <>
      <header
        className="fixed w-full top-0 z-50 bg-white border border-x-[3px] border-b-[3px] border-[#dbc64c] border-t-0"
        style={{ borderBottomLeftRadius: '80px', borderBottomRightRadius: '80px' }}
      >
        <div className="container mx-auto flex justify-between items-center py-5 px-4">
          <a href="#" className="text-2xl text-gray-800 ml-3">Logo</a>

          <nav className="hidden md:flex flex-grow justify-center items-center text-white">
            <ul className="flex space-x-6 list-none p-0 m-0">
              <li>
                <a href="#home" className="text-lg text-black hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-lg text-black hover:text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="text-lg text-black hover:text-gray-600">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg text-black hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div>
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <a href="#" className="text-lg text-gray-800 hover:text-gray-600 mr-3">Signup</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

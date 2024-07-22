import React from 'react';
import TypedText from './TypedText';
import './App.css';
import logo from './assets/web.png'; // Import the image

function App() {
  return (
    <>
      <header
        class="fixed w-full top-0 z-50 bg-blue-300 bg-opacity-20 backdrop-blur-md">
        <div
          class="container mx-auto flex justify-between items-center py-2 px-4">
          <a href="#" class="text-2xl text-gray-800">Logo</a>

          <nav
            class="hidden md:flex flex-grow justify-center items-center text-white">
            <ul class="flex space-x-6 list-none p-0 m-0">
              <li><a href="#home"
                class="text-lg text-gray-800 hover:text-gray-600">Home</a></li>
              <li><a href="#about"
                class="text-lg text-gray-800 hover:text-gray-600">About</a></li>
              <li><a href="#courses"
                class="text-lg text-gray-800 hover:text-gray-600">Courses</a></li>
              <li><a href="#contact"
                class="text-lg text-gray-800 hover:text-gray-600">Contact</a></li>
            </ul>
          </nav>

          <div class="flex items-center gap-3">
            <div>
              <button><i
                class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <a href="#"
              class="text-lg text-gray-800 hover:text-gray-600">Login
              / Register</a>
          </div>
        </div>
      </header>
      <div className='dotted-background'>
        <div className="flex items-center row w-full bg-customColor bg-opacity-80 h-[60vh]">
          <div className="content flex items-center justify-center py-16">
            <div className="content-box flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-2 md:gap-12 sm:mx-40 md:mx-20">
              <div className='text order-2 text-start text-white w-full sm:w-2/3 mx-4'>
                <h1 className='text-center sm:text-start text-[30px] md:text-[55px] sm:text-[50px] font-bold leading-tight'>
                   <TypedText />
                </h1>
                <p className='text-center mt-4 sm:text-start text-[18px] md:text-[18px] sm:text-[25px]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit eius repellat quaerat, obcaecati enim reprehenderit quas, nesciunt dolores officia minus delectus. In ex animi eveniet delectus laudantium quae cumque.
                </p>
              </div>
              <div className="image relative overflow-hidden">
                <img src={logo} className='relative z-10 w-48 rounded-3xl' alt="Web Development" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

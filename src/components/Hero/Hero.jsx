import React, { useState, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Typed from 'typed.js';
import TypedText from '../TypedText/TypedText';

function Hero() {
  const [typed, setTyped] = useState(null);

  useEffect(() => {
    const options = {
      strings: ['Search for...', 'Explore...', 'Discover...', 'Learn...'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    };

    const typedInstance = new Typed('#search-placeholder', options);
    setTyped(typedInstance);

    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className='h-[80vh] w-full banner gap-5 flex flex-row md:flex-col justify-center items-center px-4 md:px-20'>
        <div className=' flex mt-28  flex-col md:flex-row justify-center items-center'>
          <div className='text text-center md:text-start text-white w-full md:w-2/3 mx-4'>
            <h1 className='text-center md:text-start text-[30px] md:text-[55px] sm:text-[50px] font-bold leading-tight'>
              <span>Learn </span>
              <span className='text-[#dbc64c]'>
              <TypedText texts={['React', 'JavaScript', 'CSS', 'HTML', 'Tailwind CSS', 'Next js']} />
              </span>
            </h1>
            <p className='text-center mt-4 w-full md:w-4/5 md:text-start text-[18px] md:text-[18px] sm:text-[25px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit eius repellat quaerat, obcaecati enim reprehenderit quas, nesciunt dolores officia minus delectus. In ex animi eveniet delectus laudantium quae cumque.
            </p>
          </div>

          <div className='relative w-full max-w-md mt-8 md:mt-0 md:ml-8'>
            <input
              type="text"
              className='border-none px-5 py-5 w-full rounded-full opacity-80 text-2xl focus:outline-none'
              name="search"
              id="search-placeholder"
            />
            <IoIosSearch
              size={30}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
            />
          </div>
        </div>
        <div className="btn mt-5 flex items-center">
          <button className='px-5 py-3 text-lg font-medium bg-[#dbc64c]  border-2 hover:border-[#dbc64c] hover:bg-white duration-500 hover:text-gray-800 rounded-full'> <span>  Read More</span> ➡️</button>
        </div>
      </div>
    </>
  );
}

export default Hero;

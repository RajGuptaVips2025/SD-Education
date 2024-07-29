import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import nextjs from '../../assets/nextjs.png';
import github from '../../assets/githubImg2.png';
import tailwind from '../../assets/tailwind.png';
import node from '../../assets/node.png'
import { Link } from 'react-router-dom';

const Card = () => {
    const tech = [
        {
            id: 1,
            src: html,
            link:"/html",
            title: 'HTML',
            style: 'hover:shadow-orange-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 2,
            src: css,
            link:"/css",
            title: 'CSS',
            style: 'hover:shadow-blue-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 3,
            src: javascript,
            link:"/javascript",
            title: 'JavaScript',
            style: 'hover:shadow-yellow-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 4,
            src: tailwind,
            link:"/tailwind",
            title: 'Tailwind',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 5,
            src: react,
            link:"/react",
            title: 'React',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 6,
            src: nextjs,
            link:"/nextjs",
            title: 'Next.js',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 7,
            src: github,
            link:"/github",
            title: 'GitHub',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 8,
            src: node,
            link:"/node",
            title: 'Node Js',
            style: 'hover:shadow-pink-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
    ];

    return (
        <>
            <div className='pt-16 bg-gradient-to-b from-[#e3e1e105] to-[#5e626c]'>
                <h1 className='text-center text-6xl text-[#1c2326] font-bold'>Our Courses</h1>
                <div className='flex flex-wrap justify-center gap-6 pt-12 pb-12 '>

                    {tech.map((item, index) => (
                        <Link to ={item.link}>

                        <div data-aos="fade-up"
                            key={index}
                            className="min-w-[70vw] sm:min-w-[20vw] max-w-[20vw] mb-3 rounded-lg overflow-hidden hover:scale-105 bg-white shadow-custom duration-500 "
                            >
                            <img className="w-[100px] mx-auto mt-3 rounded-md" src={item.src} alt={item.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl my-2 text-center text-gray-700">{item.title}</div>
                                <p className="text-base text-gray-500">
                                    {item.content}
                                </p>
                                <div className="flex justify-center mt-2">
                                    <span className="relative inline-block text-lg group">
                                        <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                            <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                                            <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                            <span className="relative text-sm sm:text-base">Explore</span>
                                        </span>
                                        <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
            </>
        );
};

export default Card;
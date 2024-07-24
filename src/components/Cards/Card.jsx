import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import nextjs from '../../assets/nextjs.png';
import graphql from '../../assets/graphql.png';
import github from '../../assets/githubImg2.png';
import tailwind from '../../assets/tailwind.png';

const Card = () => {
    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'hover:shadow-orange-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'hover:shadow-blue-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'hover:shadow-yellow-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 4,
            src: tailwind,
            title: 'Tailwind',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 6,
            src: nextjs,
            title: 'Next.js',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'hover:shadow-sky-500',
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            id: 8,
            src: graphql,
            title: 'GraphQL',
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
                        <div
                            key={index}
                            className="min-w-[70vw] sm:min-w-[20vw] max-w-[20vw] mb-3 rounded-lg overflow-hidden hover:scale-105 bg-white shadow-custom duration-500 "
                        >
                            <img className="w-[100px] mx-auto mt-3 rounded-md" src={item.src} alt={item.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl my-2 text-center text-gray-700">{item.title}</div>
                                <p className="text-base text-gray-500">
                                    {item.content}
                                </p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-center hover:text-gray-800 duration-500 bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                                        Explore
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;
// bg-gradient-to-b from-[#131313c5] to-gray-100


// 
// #111827
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
        <div className='flex flex-wrap justify-center gap-4 pt-12 pb-12 border-b-2 border-t-2 bg-gradient-to-b from-[#131313c5] to-gray-100  '>
            {tech.map((item, index) => (
                <div
                    key={index}
                    className="max-w-sm rounded-lg overflow-hidden hover:scale-105 bg-white shadow-custom duration-500"
                >
                    <img className="w-[100px] mx-auto mt-3 rounded-md" src={item.src} alt={item.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl my-2 text-center text-gray-700">{item.title}</div>
                        <p className="text-base text-gray-500">
                            {item.content}
                        </p>
                        <div className="flex justify-center">
                            <a href="#" className="text-center hover:bg-[#dbc64c] hover:text-gray-800 duration-500 bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;


// import React from 'react';
// import html from '../../assets/html.png';
// import css from '../../assets/css.png';
// import javascript from '../../assets/javascript.png';
// import react from '../../assets/react.png';
// import nextjs from '../../assets/nextjs.png';
// import graphql from '../../assets/graphql.png';
// import github from '../../assets/githubImg2.png';
// import tailwind from '../../assets/tailwind.png';

// const Card = () => {
//     const tech = [
//         {
//             id: 1,
//             src: html,
//             title: 'HTML',
//             style: 'hover:shadow-orange-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//         {
//             id: 2,
//             src: css,
//             title: 'CSS',
//             style: 'hover:shadow-blue-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//         {
//             id: 3,
//             src: javascript,
//             title: 'JavaScript',
//             style: 'hover:shadow-yellow-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//         {
//             id: 4,
//             src: tailwind,
//             title: 'Tailwind',
//             style: 'hover:shadow-sky-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//         {
//             id: 5,
//             src: react,
//             title: 'React',
//             style: 'hover:shadow-sky-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//         {
//             id: 6,
//             src: nextjs,
//             title: 'Next.js',
//             style: 'hover:shadow-sky-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//         {
//             id: 7,
//             src: github,
//             title: 'GitHub',
//             style: 'hover:shadow-sky-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//         {
//             id: 8,
//             src: graphql,
//             title: 'GraphQL',
//             style: 'hover:shadow-pink-500',
//             content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//         },
//     ];
    

//     return (
//         <div className='flex flex-wrap justify-center gap-4 mt-6 mb-6'>
//             {tech.map((item, index) => (
//                 <div
//                     key={index}
//                     className={`max-w-sm rounded-lg overflow-hidden ${item.style}`}
//                     style={{
//                         boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px'
//                     }}
//                 >
//                     <img className="w-[100px] mx-auto mt-3 rounded-md" src={item.src} alt={item.title} />
//                     <div className="px-6 py-4">
//                         <div className="font-bold text-xl my-2 text-center text-gray-700">{item.title}</div>
//                         <p className="text-base text-gray-500">
//                             {item.content}
//                         </p>
//                         <div className="flex justify-center">
//                             <a href="#" className="text-center hover:bg-[#dbc64c] hover:text-gray-800 duration-500 bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
//                                 Explore
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Card;

{/* <div name="experience" className='bg-gradient-to-b from-[#35097beb] to-black w-full h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col jus w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 py-2 inline'>Experiences</p>
            <p className='py-6'>There are the few projects I've worked on them</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8 px-12sm:px-0'>
            {tech.map((item) => (

                <div key={item.id} className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg ${item.style}`}>
                    <div>
                        <img src={item.src} alt="" className='w-20 mx-auto' />
                        <p className='capitalize'>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div> */}
{/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-[150px] object-center" src={html} alt="Card image cap" />
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Card title</div>
        <p class="text-gray-700 text-base">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
            Go somewhere
        </a>
    </div>
</div> */}

{/* <div className='flex justify-center gap-4 mt-6 mb-6'>
{
        
    tech.map((item, index) => (
        <div key={index} class="max-w-sm rounded-lg overflow-hidden shadow-lg "
        >
            <img class="w-[150px] mx-auto" src={item.src} alt="" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.title}</div>
                <p class="text-gray-700 text-base">
                    {item.content}
                </p>
                <a href="#" class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                    Go somewhere
                </a>
            </div>
        </div>
    ))
}
</div> */}
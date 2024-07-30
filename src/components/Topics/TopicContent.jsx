import React, { useState, useRef, useEffect } from 'react';
import '../../App'; // Make sure to import the stylesheet containing the no-scrollbar class
import { Link } from 'react-router-dom';



function TopicContent(props) {
    // #081827
    return (
        <>

            <div className='w-[100vw] lg:w-[80vw] sm:px-6 py-3 bg-gradient-to-b from-[#0d253c] to-[#111827] text-gray-200 flex flex-col justify-start items-start min-h-[100vh] overflow-x-hidden'>
                <div className='w-[85%] mx-auto my-16'>
                    <div className='mb-8'>
                        <div className="image">
                            <img src={props.image} className='mx-auto object-contain rounded-xl' alt="" srcset="" />
                        </div>
                        {
                            props.topics.map((points, index) => (<div key={index}>
                                {
                                    index === 0 ?
                                        <div className='py-1 my-24'>
                                            <div className='py-1 mt-12 mb-8'>
                                                <span className='text-3xl sm:text-6xl underline underline-offset-8'>{points.head}</span>
                                            </div>

                                            <div className='my-8'>
                                                <div>
                                                    <p className='text-xl tracking-tight'>{points.headContent} </p>
                                                </div>
                                            </div>
                                        </div> : ""
                                }
                                {points.Topics.map((po, index) => (
                                    <div key={index} id={po.heading}>
                                        <div className='mt-36 mb-8' >
                                            <p className='text-3xl sm:text-4xl underline underline-offset-[15px]'>{` ${po.heading}`} </p>
                                        </div>

                                        <div className='mt-2'>
                                            <div className='my-8'>
                                                <p className=' sm:text-xl tracking-tight'>{`${po.content}`}</p>
                                            </div>
                                            <div className='mt-2 w-[100%] sm:w-[80%] bg-[#182c3c] rounded-md p-3'>
                                                <ul className='list-disc px-3 '>
                                                    {
                                                        po.ulItems.map((liItem, index) => (

                                                            <li key={index} className='text-sm sm:text-lg tracking-tight my-4 leading-10'>{`${liItem}`}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            {po.Example && <div className='mt-2 w-[100%] sm:w-[80%] bg-[#182c3c] rounded-md p-3'>
                                                <ul className='list-disc px-3 '>
                                                    <span className='text-2xl'>Examples:</span><br />
                                                    {
                                                        po.Example.map((examples, index) => (

                                                            <li key={index} className='sm:text-lg tracking-tight my-4'>{`${examples}`}</li>
                                                        ))
                                                    }
                                                    <Link to="/compiler">
                                                        <div className='mt-2'>
                                                            <span className="relative inline-block text-lg group">
                                                                <span className="relative z-10 block px-4 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                                                    <span className="absolute inset-0 w-full h-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gray-50"></span>
                                                                    <span className="absolute left-0 w-40 sm:w-48 h-40 sm:h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                                                    <span className="relative text-sm sm:text-base">Click To Try Code</span>
                                                                </span>
                                                                <span className="absolute bottom-0 right-0 w-full h-8 sm:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </ul>
                                            </div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopicContent;

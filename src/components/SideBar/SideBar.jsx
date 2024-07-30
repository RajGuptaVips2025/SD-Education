import React from 'react'
import { Link } from 'react-scroll'


function SideBar(props) {

    return (
        <div className='w-[20%] max-h-[100vh] overflow-auto flex-col gap-2 text-white hidden lg:flex sticky top-0'>
            <div className='bg-gradient-to-b from-[#0d253c] to-[#111827] max-h-full rounded overflow-x-hidden overflow-y-auto'>
                {
                    props.topics.map((col, index) => (
                        <>
                            <Link to={col.head} key={index} smooth={true} duration={1000} offset={-100} style={{ transition: "ease-in-out" }}>
                                <div className='p-2 bg-[#1c40594d] my-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-[#2d4663] hover:scale-110 duration-150 cursor-pointer'>
                                    <div className='mx-auto'>
                                        <h1 className='text-center'>{col.head}</h1>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))
                };
            </div>
        </div>


    )
}

export default SideBar
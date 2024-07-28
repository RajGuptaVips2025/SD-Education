import React from 'react'

import reactTopics from '../../utils/reactTopics'
import { Link } from 'react-scroll'

function SideBar(props) {

    return (
        // #121212

        <div className='w-[20%] max-h-[100vh] overflow-auto flex-col gap-2 text-white hidden lg:flex sticky top-0'>
            <div className='bg-gradient-to-b from-[#0d253c] to-[#111827] max-h-full rounded overflow-x-hidden overflow-y-auto'>
                {/* <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>

                        <p>Your Content</p>
                    </div>
                </div> */}
                {
                    props.topics.map((col, index) => (
                        <>
                            <div key={index} className='p-2 bg-[#1c40594d] my-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-[#2d4663] hover:scale-110 duration-150 cursor-pointer'>
                                <div className='mx-auto'>
                                    <Link to={col.head}  smooth={true}  duration={1000} offset={-500} style={{transition:"ease-in-out"}}>
                                        <h1 className='text-center'>{col.head}</h1>
                                        </Link>
                                </div>
                            </div>
                        </>
                    ))
                };
            </div>
        </div>


)
}

export default SideBar

{/* <a href={t.link}> */}
{/* </a> */}

{/* <h1 className='p-2 bg-[#174270] m-1 mt-6 mb-2 rounded font-semibold text-center pl-4'>{col.head}</h1> */}
{/* {
    col.tags.map((t) => (

    ))
} */}
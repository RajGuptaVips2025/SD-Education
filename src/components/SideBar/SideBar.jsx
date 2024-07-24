import React from 'react'

function SideBar() {
    return (

        <div className='w-[25%] max-h-[100vh] overflow-auto p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] max-h-full rounded overflow-y-auto'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src="" alt="" />
                        <p>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src="" alt="" />
                        <img className="w-5" src="" alt="" />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>It's easy, we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
                </div>
                {/* Repeat the following blocks as needed */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>It's easy, we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>It's easy, we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
                </div>
                {/* Repeat the following blocks as needed */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>It's easy, we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
                </div>
                {/* Repeat as many blocks as needed */}
            </div>
        </div>


    )
}

export default SideBar

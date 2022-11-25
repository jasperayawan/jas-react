import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
    return(
        <div name='home' className='w-full h-screen bg-[#081527]'>

            {/**container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
                <p className='text-blue-500 font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jasper Ayawan</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Aspiring Software Engineer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Full Stack developer specializing in building and designing. Currently, I'm focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <button className='border-2 transition ease-in-out delay-200 duration-300 hover:bg-white py-2 px-4 hover:text-black rounded-sm'>View more</button>
                </div>
            </div>
            
        </div>
    )
}

export default Home
import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import RrEACT from '../assets/react.png';
import Mongodb from '../assets/mongo.png';


const Skills = () => {
    return(
        <div name='skills' className='w-full h-screen bg-[#081527] text-gray-300'>
            {/**container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='flex justify-center items-center'> 
                    <p className='text-4xl font-bold text-gray-300 py-4'>Experience</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 justify-center'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Html} alt='Html icon' style={{width: '50px'}}/>
                        <p>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Css} alt='Html icon' style={{width: '50px'}}/>
                        <p>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Javascript} alt='Html icon' style={{width: '50px'}}/>
                        <p>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='Html icon' style={{width: '50px'}}/>
                        <p>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={RrEACT} alt='Html icon' style={{width: '50px'}}/>
                        <p>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Mongodb} alt='Html icon' style={{width: '50px'}}/>
                        <p>MongoDb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
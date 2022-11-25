import React from 'react'
import Jas from '../assets/JASSSSSS.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#081527] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full flex justify-center items-center pb-8'>
                <div className='pb-8 pl-4'>
                    <p className='text-4xl font-bold '>About</p>
                </div>
                <div></div>
            </div>    
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='flex justify-center items-center'>
                        <img src={Jas} alt='My profile' style={{width: '300px'}} />
                    </div>
                    <div>
                        <p>I am passionate building excellent software that improves the lives
                            of those around me. I specializing in creating software for clients
                            ranging from individuals and small-business all the way to large enterprise
                            corporations. 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import Myportfolio from '../assets/projects/myportfolio.png';
import Business from '../assets/projects/business.png';
import Web from '../assets/projects/web.png';
import PongGame from '../assets/first pong game.png';
import Stripe from '../assets/stripeintegration.png';
import InstaClone from '../assets/websiteee.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#081527] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pb-8'>
            <div className='pb-8'>
                <p className='text-4xl font-bold flex justify-center items-center py-6'>Projects</p>
            </div>
   
      {/**container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/**Grid Item */}
               <div>
                   <img src={Myportfolio} alt="my portfolio" className='rounded-md'/>
               </div>
               <div>
                   <img src={Business} alt="my portfolio" className='rounded-md'/>
               </div>
               <div>
                   <img src={Web} alt="my portfolio" className='rounded-md'/>
               </div>
               <div>
                   <img src={PongGame} alt="my portfolio" className='rounded-md'/>
               </div>
               <div>
                   <img src={Stripe} alt="my portfolio" className='rounded-md'/>
               </div>
               <div>
                   <img src={InstaClone} alt="my portfolio" className='rounded-md'/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
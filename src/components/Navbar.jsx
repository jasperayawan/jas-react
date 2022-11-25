import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import Jlogo from '../assets/j logo (1).png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav) 
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#081527] text-gray-300'>
        <div>
            <img src={Jlogo} alt="my logo at navbar" width="40px"/>
        </div>

        {/**menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                     Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                     About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                     Skills
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                     Contact
                    </Link>
                </li>
                <li className='bg-blue-500 rounded-sm'>
                    <Link to='resume' smooth={true} duration={500}>
                     Resume
                    </Link>
                </li>
            </ul>

        {/**hamburger */}

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/**mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#081527] color-grey-300 flex flex-col justify-center items-center'}>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                     Home
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                     About
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                     Skills
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                     Contact
                    </Link>
                </li>
                <li className='text-2xl bg-blue-500 rounded-md px-4 py-2'>
                    <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
                     Resume
                    </Link>
                </li>
            </ul>
        
    </div>
  )
}

export default Navbar
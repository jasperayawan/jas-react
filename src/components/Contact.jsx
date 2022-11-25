import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-screen bg-[#131313] w-full flex justify-center items-center p-4'>
                <form method='POST' action='https://getform.io/f/a0b751f0-c53e-4e7c-8b29-4eccdefb8600' className='max-w-[600px] flex flex-col w-full'>
                    <div className='pb-8'>
                        <p className='text-gray-500 flex justify-center items-center text-4xl border-l-4 w-[150px] mx-auto border-violet-500'>Contact</p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2' type='text' name='name' placeholder='Enter your name' required/>
                    <input className='bg-[#ccd6f6] p-2 my-4' type='email' name='email' placeholder='Enter your email' required/>
                    <textarea className='bg-[#ccd6f6] p-2 ' name='message' rows='10' placeholder='Message'/>
                    <div className='inline-block'>
                    <input type='checkbox' name='subs' required/>
                    <label for='checkbox2' className='text-gray-500 mx-2'>I'd like to receive emails about the news and updates.</label>
                    </div>
                    <button className='rounded-md w-[150px] mx-auto my-4 py-3 text-gray-200 bg-gradient-to-br from-blue-600 to-violet-600'>let's collaborate</button>
                </form>
        </div>
  )
}

export default Contact
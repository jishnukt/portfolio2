import React from 'react'
import Pro1 from '../assets/8.png'
import Pro2 from '../assets/7.png'
import Pro3 from '../assets/9.png'
import { Link2 } from 'lucide-react';
import Github from '../assets/github1.png'

function project() {
    return (
        <div className=' flex flex-col justify-center items-center px-[8vw]'>
            <h1 className='heading'>Projects</h1>
            <div className="pro bg-r pr-10 pb-10 flex justify-center items-center">
                <img src={Pro1} alt="" className='h-[40vw]' />
                <div>
                    <h1 className='text-ylw text-[3vw] font-bold pb-2'>CUSTOMISED CHATBOT</h1>
                    <h1 className='text-wte text-[2vw] font-bold'>A Customised Chatbot for Kannur University using MERN Stack and OpenAI API</h1>
                    {/* <Link2 className='text-wte hover:scale-50 '/> */}
                    <img src={Github} className='w-8 mt-5' alt="" />
                </div>
            </div>

            <div className="pro bg-r pl-10 pb-10 flex justify-center items-center">
                <div>
                    <h1 className='text-ylw text-[3vw] font-bold pb-2'>FACE MASK DETECTION & HELMET DETECTION</h1>
                    <h1 className='text-wte text-[2vw] font-bold'>A Face mask and helmet detection software using Python Django framework.</h1>
                    <img src={Github} className='w-8 mt-5' alt="" />
                </div>
                <img src={Pro2} alt="" className='h-[30vw]' />
            </div>

            <div className="pro bg-r pl-10 flex justify-center gap-10 items-center">
                <img src={Pro3} alt="" className='h-[30vw]' />
                <div>
                    <h1 className='text-ylw text-[3vw] font-bold pb-2'>KEYLOGGER DETECTION</h1>
                    <h1 className='text-wte text-[2vw] font-bold'>A Face mask and helmet detection software using Python Django framework.</h1>
                    <img src={Github} className='w-8 mt-5' alt="" />
                </div>
            </div>
        </div>
    )
}

export default project

import React from 'react'
import Kuc from '../assets/5.jpg'
import Stems from '../assets/6.jpg'
import { SquareArrowOutUpRight } from 'lucide-react';


function education() {
    return (
        <div className='flex flex-col justify-center items-center px-[8vw]'>
            <h1 className='heading pb-10'>Education</h1>
            <img src={Kuc} className='w-[85vw] border-2 border-ylw rounded-3xl' alt="" />
            <div className='flex py-5 flex-col flex-start w-full'>
                <h1 className='text-ylw text-[3vw] font-bold'>MASTER OF COMPUTER APPLICATION</h1>
                <p className='text-wte text-[2vw] font-bold'>DEPARTMENT OF INFORMATION TECHNOLOGY , KANNUR UNIVERSITY</p>
                <p className='text-wte text-[2vw] font-bold'>2022-2024</p>
            </div>
            <img src={Stems} className=' w-[85vw] rounded-3xl border-2 border-ylw' alt="" />
            <div className='flex py-5 flex-col flex-start w-full'>
                <h1 className='text-ylw text-[3vw] font-bold'>BACHELOR OF COMPUTER APPLICATION</h1>
                <p className='text-wte text-[2vw] font-bold'>MORAZHA ARTS & SCIENCE COLLEGE , KANNUR UNIVERSITY</p>
                <p className='text-wte text-[2vw] font-bold'>2018-2021</p>
            </div>
        </div>
    )
}

export default education

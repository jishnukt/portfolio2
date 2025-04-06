import React from 'react'
import Photo10 from '../assets/10.png'
import ScrollReveal from './scrollReveal'
function card() {

    return (
        <ScrollReveal>
            <div
                className='flex-col items-center justify-center flex gap-10'>
                <div>
                    <h1 className='heading'>Services</h1>

                </div>
                <div className=' px-[8vw] flex gap-16 flex-wrap justify-center text-ylw font-bold items-center'>
                    <div className='card1  '>
                        <img src={Photo10} className='w-[8rem] ' alt="" />
                        <h1 className=' '>WEB DEVELOPMENT</h1>
                    </div>

                    <div className='card1 border-ylw rounded-xl border-2 w-[20rem] h-52 xl:w-[13rem] flex-col justify-center flex gap-5 items-center '>
                        <img src={Photo10} className='w-[8rem] ' alt="" />
                        <h1>MOBILE APPLICATION</h1>
                    </div>

                    <div className='card1 border-ylw rounded-xl border-2 w-[20rem]  bg-wt h-52 xl:w-[13rem] flex-col justify-center flex gap-5 items-center '>
                        <img src={Photo10} className='w-[8rem] ' alt="" />
                        <h1>MACHINE LEARNING</h1>
                    </div>

                    <div className='card1 border-ylw rounded-xl border-2 w-[20rem]  bg-wt h-52 xl:w-[13rem] flex-col justify-center flex gap-5 items-center '>
                        <img src={Photo10} className='w-[8rem] ' alt="" />
                        <h1>UI/UX DEVELOPMENT</h1>
                    </div>
                </div>

            </div>
        </ScrollReveal>

    )
}

export default card

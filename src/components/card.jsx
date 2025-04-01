import React from 'react'
import Photo10 from '../assets/10.png'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
function card() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it appears
                }
            },
            { threshold: 0.2}
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='flex-col items-center justify-center flex gap-10'>
            <div>
                <h1 className='heading'>Services</h1>

            </div>
            <div className=' px-[8vw] flex gap-16 flex-wrap justify-center items-center'>
                <div className='card1  '>
                    <img src={Photo10} className='w-[8rem] ' alt="" />
                    <h1 className='bg-wt text-ylw font-bold'>WEB DEVELOPMENT</h1>
                </div>

                <div className='card1 border-ylw rounded-xl border-2 w-[20rem] h-52 xl:w-[13rem] flex-col justify-center flex gap-5 items-center '>
                    <img src={Photo10} className='w-[8rem] ' alt="" />
                    <h1 className='bg-wt text-ylw font-bold'>MOBILE APPLICATION</h1>
                </div>

                <div className='card1 border-ylw rounded-xl border-2 w-[20rem]  bg-wt h-52 xl:w-[13rem] flex-col justify-center flex gap-5 items-center '>
                    <img src={Photo10} className='w-[8rem] ' alt="" />
                    <h1 className='bg-wt text-ylw font-bold'>MACHINE LEARNING</h1>
                </div>

                <div className='card1 border-ylw rounded-xl border-2 w-[20rem]  bg-wt h-52 xl:w-[13rem] flex-col justify-center flex gap-5 items-center '>
                    <img src={Photo10} className='w-[8rem] ' alt="" />
                    <h1 className='bg-wt text-ylw font-bold'>UI/UX DEVELOPMENT</h1>
                </div>
            </div>

        </motion.div>
    )
}

export default card

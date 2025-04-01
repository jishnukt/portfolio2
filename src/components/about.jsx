import React, { useState, useEffect } from 'react'
// import Photo4 from '../assets/4.jpg'
import { ArrowDownToLine } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion'
import photo1 from '../assets/4.jpg'
import photo2 from "../assets/img1.jpg";
import photo3 from "../assets/img2.jpg";
import photo4 from '../assets/img3.webp'
import { ChevronRight, ChevronLeft } from 'lucide-react';

// import {motion} from 'framer-motion'

function about() {
    const photos = [photo1, photo2, photo3, photo4]
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % photos.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='  text-wte pt-20  font-bold px-[8vw] flex flex-col items-center '>

            <div className="photos flex-row  sm:flex gap-20 w-[20rem] justify-center items-center  ">
                <AnimatePresence mode="wait">
                    <motion.img
                        initial={{ opacity: 0.1, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        exit={{ opacity: 0.1, x: 20 }}
                        key={index} src={photos[index]} alt="" className=' w-[20rem]   rounded-3xl border-ylw border-2' />
                </AnimatePresence>
                <div className="name flex flex-col py-10 gap-4 ">

                    <div className='text-[6vw] text-ylw '>JISHNU </div>
                    <p>Inquisitive, hard-working and Tech enthusiast. Looking for job opportunities where I can
                        apply my skills and contribute to real-world projects.</p>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }} className='h-10 flex gap-1 justify-center items-center bg-rd rounded-xl text-ylw'>
                        <ArrowDownToLine />

                        <button className='  '>Resume</button>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default about

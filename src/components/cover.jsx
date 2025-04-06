// import { useState } from 'react';
import React, { useEffect, useState } from 'react'
import Profilepic from '../assets/12.png'
import {motion,AnimatePresence} from 'framer-motion'
function cover() {
    const roles = ["Designer", "Developer"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className=' cover md:flex flex-row items-center justify-between' >
            <div className="covertext  pt-20 font-bold pl-[12vw] ">
                <h1 className='text-[1rem] md:text-[2vw] text-wte'>HELLO !!</h1>
                <h1 className='text-[3rem] md-text-[6vw]  text-wte'>I'm a <span className='text-rd'>web</span></h1>
                <AnimatePresence mode="wait">
                <motion.div initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:20}}
                transition={{duration:0.6}}
                key={roles[index]}
                className="developerclr z-10 bg-ylw rounded-full w-fit px-4 flex text-rd md:text-[5vw] text-[6vw] justify-center">
                    {/* <h1 className='text-rd md:text-[5vw] text-[6vw]'>developer</h1> */}
                    {roles[index]}
                </motion.div>
                </AnimatePresence>
            </div>
            <motion.div initial={{scale:1.2}}
            animate={{scale:1}}
            transition={{duration:0.5}}
             className="profile w-screen flex justify-end">
                <img src={Profilepic} alt="profilepic" className='profilepic h-[50vw]' />
            </motion.div>
        </div>
    )
}

export default cover

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
function contact() {
    return (
        <motion.div initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className='flex  flex-col items-center justify-center px-[8vw]'>
            <h1 className='heading'>Contact</h1>
            <div>
                <div className='flex-col flex gap-10 text-ylw '>
                    <div className='w-full flex  justify-center gap-10 flex-wrap'>
                        <input placeholder='Enter Name' className='w-full rounded-md h-10' type="text" />
                        <input placeholder='Enter Email' className='w-full rounded-md  h-10' type="text" />
                        <input placeholder='Enter Subject' className='w-full h-10 rounded-md' type="text" />
                    </div>
                    <textarea placeholder='Enter Message' className='w-full rounded-md h-40' name="" id=""></textarea>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }} className='w-full text-ylw bg-rd h-10 rounded-md'> Send Message</motion.button>
                </div>
                <div className='grid md:grid-cols-8 grid-cols-4 py-16 gap-10 place-items-center'>
                    <SocialIcon url="https://facebook.com" />
                    <SocialIcon url="https://twitter.com" />
                    <SocialIcon url="https://linkedin.com" />
                    <SocialIcon url="https://instagram.com" />
                    <SocialIcon url="https://github.com" />
                    <SocialIcon url="mailto:jsn18j@gmail.com" />
                    <SocialIcon url="tel:8138919696" />
                    <SocialIcon url="https://youtube.com" />
                </div>


            </div>
        </motion.div>
    )
}

export default contact

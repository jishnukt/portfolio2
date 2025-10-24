import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
function contact() {
    return (
        <motion.div initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className='flex  flex-col items-center justify-center px-[8vw]'>
            <h1 className='heading'>Contact</h1>
            <div>
                <ToastContainer position='top-center' autoClose={2000} />

                <div className='grid md:grid-cols-6 grid-cols-3 py-16 gap-10 place-items-center'>
                    {[
                        "https://facebook.com/jishnu.kt.33",
                        "https://twitter.com/jsn18j",
                        "https://www.linkedin.com/in/jishnu-kt/",
                        "https://instagram.com/jsn_18",
                        "https://github.com/jishnukt",
                        "mailto:jsn18j@gmail.com"
                    ].map((url, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <SocialIcon url={url} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default contact

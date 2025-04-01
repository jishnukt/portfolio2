import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { House } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import './nav.css'
import { div } from 'framer-motion/client';
// import { useState } from 'react';
function nav({ setPage, page }) {
    const [isOpen, setIsOpen] = useState(false);
    const SidebarVisible = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='flex flex-col'>
            <div className='nav z-50 top-0 bg-blk w-full sm:h-14 h-14 px-5 text-[1rem] text-ylw font-bold flex items-center justify-end'>
                {/* <div className="lnav">
                    <h1 className='name1'>JISHNU K T</h1>
                    <House className='house' />
                </div> */}
                <div className="rnav flex gap-10">
                    <div className={`contact ${page === "Home" ? "active" : ""}`} onClick={() => setPage("Home")}>About Me</div>
                    <div className={`contact ${page === "Contact" ? "active" : ""}`} onClick={() => setPage("Contact")}>Contact</div>
                    <div className={`contact ${page === "Resume" ? "active" : ""}`} onClick={() => setPage("Resume")}>Resume</div>
                    <div className={`contact ${page === "Portfolio" ? "active" : ""}`}>Portfolio</div>
                    <Menu className='menu' onClick={SidebarVisible} />
                </div>

            </div>
            <AnimatePresence>
                {isOpen &&
                    <motion.div  initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0, y: -40 }}
                        className='z-50 bg-blk flex font-bold flex-col pl-5 items-center gap-10 nn h-[15rem] mt-9 w-full text-ylw '>
                        <div className={`${page === "Home" ? "active" : ""}`} onClick={() => setPage("Home")& SidebarVisible() }>About Me</div>
                        <div className={`${page === "Contact" ? "active" : ""}`} onClick={() => setPage("Contact")& SidebarVisible()}>Contact</div>
                        <div className={` ${page === "Resume" ? "active" : ""}`} onClick={() => setPage("Resume")& SidebarVisible()}>Resume</div>
                        <div className=''>Portfolio</div>
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    )
}

export default nav

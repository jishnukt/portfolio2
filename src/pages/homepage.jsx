import React from 'react'
import Cover from '../components/cover'
import About from '../components/about'
import Card from '../components/card'
import { motion } from 'framer-motion'
function homepage() {
  return (
    <motion.div initial={{ opacity: 0, x: -40 }} transition={{ duration: 0.6 }}
      animate={{ opacity: 1, x: 0 }} className=' flex flex-col gap-10'>
      <Cover />
      <About />
      <Card />
    </motion.div>
  )
}

export default homepage

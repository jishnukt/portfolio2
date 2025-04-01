import React from 'react'
import Nav from '../components/nav/nav'
import Education from '../components/education'
import Project from '../components/project'
import Tech from '../components/tech'
import { motion } from 'framer-motion'
function resume() {
  return (
    <motion.div initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}>
      <Education />
      <Project />
      <Tech/>
    </motion.div>
  )
}

export default resume

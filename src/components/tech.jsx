import React from 'react'
import Github from '../assets/github1.png'
import React1 from '../assets/React.png'
import Html from '../assets/html1.png'
import Css from '../assets/css.png'
import Mongo1 from '../assets/mongodb.svg'
import Git from '../assets/git1.png'
import Express from '../assets/express1.png'
import Python from '../assets/python1.png'
import Tailwind from '../assets/tailwind.png'
import Node from '../assets/node1.png'
import Js from '../assets/js1.png'
import Bootstrap from '../assets/bootstrap1.png'
import Sql from '../assets/sql.png'
import { motion } from 'framer-motion'
import ScrollReveal from './scrollReveal'
const skills = [Github, React1, Html, Css, Mongo1, Git, Express, Python, Tailwind, Node, Js, Bootstrap, Sql]

function tech() {
  return (
    <ScrollReveal>
      <div id='Skills' className='flex flex-col justify-center items-center px-[8vw]'>
        <h1 className='heading'>Skills</h1>
        <div className='flex gap-10 flex-wrap justify-center items-center'>
          {skills.map((icon, index) => (
            <motion.img
              key={index}
              src={icon}
              alt={`tech-${index}`}
              class='h-14 cursor-pointer'
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}

        </div>
      </div>
    </ScrollReveal>
  )
}``
export default tech

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






function tech() {
  return (
    <div className='flex flex-col justify-center items-center px-[8vw]'>
            <h1 className='heading'>Skills</h1>
            <div className='flex gap-10 flex-wrap justify-center items-center'>
            <img className='h-10' src={Github} alt="" />
            <img className='h-10' src={React1} alt="" />
            <img className='h-10' src={Html} alt="" />
            <img className='h-10' src={Css} alt="" />
            <img className='h-10' src={Mongo1} alt="" />
            <img className='h-10' src={Git} alt="" />
            <img className='h-10' src={Express} alt="" />
            <img className='h-10' src={Python} alt="" />
            <img className='h-10' src={Tailwind} alt="" />
            <img className='h-10' src={Node} alt="" />
            <img className='h-10' src={Js} alt="" />
            <img className='h-10' src={Bootstrap} alt="" />
            <img className='h-10' src={Sql} alt="" />








            </div>


    </div>
  )
}

export default tech

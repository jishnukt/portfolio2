import React, { useState } from 'react'
import './App.css'
import Homepage from './homepage'
import Resume from './resume'
import Nav from '../components/nav/nav'
import Footer from '../components/footer'
import Contact from './contact'

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className='flex flex-col pt-5 cursor-default'>
      <Nav setPage={setPage} page={page} />
      <div id='home'>{page === "Home" && <Homepage />}   </div>
      <div id='resume'>{page === "Resume" && <Resume />}  </div>
      <div id='contact'>{page === "Contact" && <Contact />}    </div>
      <Footer setPage={setPage} page={page} />
    </div >
  )
}

export default App

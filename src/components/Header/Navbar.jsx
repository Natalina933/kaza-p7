import React from 'react'
import logo from "../../assets/logo.png"


function Navbar({titre}) {
  return (
    <nav className='banner'>
        <div>
          <img src={logo}  alt='banner'/>
        </div>
        
    </nav>
  )
}

export default Navbar
import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navContainer'> 
      <span className='logo'>Book<span style={{color:"rgb(48, 192, 48)"}}>IT</span></span>
      <div className='navItems'>
          <button className='navButton'>Register</button>
          <button className='navButton'> Login</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar

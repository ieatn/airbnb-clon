import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <img className='logo' style={{height: '90%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
        <div className="nav-middle">
            <input className='searchBar' type="text" />
        </div>
        <div className="nav-right">
            <div>Become a Host</div>
            <div>globe icon</div>
            <div>down arrow</div>
            <div>person icon</div>
        </div>
    </nav>
  )
}

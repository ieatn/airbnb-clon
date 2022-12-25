import React from 'react'
import './Navbar.css'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <Link to='/'>
        <img className='logo' style={{height: '50px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
        </Link>
      </div>
      <div className="nav-middle">
        <input className='searchBar' type="text" />
        <SearchIcon/>
      </div>
      <div className="nav-right">
        <div>Become a Host</div>
        <div><LanguageIcon fontSize='large' /></div>
        <div><KeyboardArrowDownIcon fontSize='large'/></div>
        <div><AccountCircleIcon fontSize='large'/></div>
      </div>
    </nav>
  )
}

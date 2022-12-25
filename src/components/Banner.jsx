import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => (
  <div className='banner'>
    <div className='banner-info'>
      <h2>Get out and stretch your imagination</h2>
      <p>Plan a different kind of getaway</p>
      <Link to='/search'>
        <button className='btn'>Explore Nearby</button>
      </Link>
      
    </div>
  </div>
)
export default Banner
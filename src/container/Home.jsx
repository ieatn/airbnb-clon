import React from 'react'
import './Home.css'
import Banner from '../components/Banner'
import Carousel from './Carousel'


const Home = () => (
  <div className='home'>
    <button>Search dates</button>
    <Banner />
    <Carousel />
  </div>
)
export default Home
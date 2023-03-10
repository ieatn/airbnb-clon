import React, { useState } from 'react'
import './Home.css'
import Banner from '../components/Banner'
import Carousel from './Carousel'
import Button from '@mui/material/Button';

export default function Home() {
  const [date, setDate] = useState(true)

  return (
    <div className='home'>
      <Button onClick={() => setDate(!date)} variant="outlined">
        {date ? 'Hide': 'Search Dates'}
      </Button>
      {date}
      <Banner />
      <Carousel />
  </div>
  )
}

import React, { useState } from 'react'
import './Home.css'
import Banner from '../components/Banner'
import Carousel from './Carousel'
import Button from '@mui/material/Button';
import DatePicker from '@mui/material/DatePicker';

export default function Home() {
  const [date, setDate] = useState(false)

  return (
    <div className='home'>
      <Button onClick={() => setDate(!date)} variant="outlined">
        {date ? 'Hide': 'Search Dates'}
      </Button>
      {date && <DatePicker />}
      <Banner />
      <Carousel />
  </div>
  )
}

import React from 'react'
import './SearchPage.css'
import Button from '@mui/material/Button';

const SearchPage = () => (
  <div className='searchpage'>
    <div className="searchpage-header">
      <p>62 stays · 26 august to 30 august · 2 guests</p>
      <h1>Stays nearby</h1>
      <Button variant="outlined"  sx={ { borderRadius: 28 } }>Cancellation Flexibility</Button>
      <Button variant="outlined"  sx={ { borderRadius: 28 } }>Type of place</Button>
      <Button variant="outlined"  sx={ { borderRadius: 28 } }>Price</Button>
      <Button variant="outlined"  sx={ { borderRadius: 28 } }>Rooms and beds</Button>
      <Button variant="outlined"  sx={ { borderRadius: 28 } }>More filters</Button>
    </div>
  </div>
)
export default SearchPage
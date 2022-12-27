import React from 'react'
import './SearchPage.css'
import Button from '@mui/material/Button';
import SearchResult from './SearchResult';

const SearchPage = () => (
  <div className='searchpage'>
    <div className="searchpage-header">
      <p>62 stays · 26 august to 30 august · 2 guests</p>
      <h1>Stays nearby</h1>
      <div className="searchpage-buttons">
        <Button variant="outlined"  sx={ { borderRadius: 28 } }>Cancellation Flexibility</Button>
        <Button variant="outlined"  sx={ { borderRadius: 28 } }>Type of place</Button>
        <Button variant="outlined"  sx={ { borderRadius: 28 } }>Price</Button>
        <Button variant="outlined"  sx={ { borderRadius: 28 } }>Rooms and beds</Button>
        <Button variant="outlined"  sx={ { borderRadius: 28 } }>More filters</Button>
      </div>

      <SearchResult 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        title='seattle apartment'
        body='very nice'
        rating={4}
        price='$30 / night'
      />
      <SearchResult 
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        title='seattle apartment'
        body='very nice'
        rating={4}
        price='$30 / night'
      />
      <SearchResult 
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        title='seattle apartment'
        body='very nice'
        rating={4}
        price='$30 / night'
      />
      <SearchResult 
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        title='seattle apartment'
        body='very nice'
        rating={4}
        price='$30 / night'
      />
      <SearchResult 
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        title='seattle apartment'
        body='very nice'
        rating={4}
        price='$30 / night'
      />
      <SearchResult 
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        title='seattle apartment'
        body='very nice'
        rating={4}
        price='$30 / night'
      />
      <SearchResult 
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        title='seattle apartment'
        body='very nice'
        rating={4}
        price='$30 / night'
      />
    </div>
  </div>
)
export default SearchPage
import React from 'react'
import Card from './Card'
import './carousel.css'

export default function Carousel() {
  return (
    <div className='carousel'>
      <Card price='' img='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720' title='unique stays' body='Unique activites we can do together, led by a world of hosts'/>
      <Card price='' img='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720' title='unique stays' body='Unique activites we can do together, led by a world of hosts'/>
      <Card price='' img='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720' title='unique stays' body='Unique activites we can do together, led by a world of hosts'/>
      <Card price='$350/night' img='https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg' title='unique stays' body='Unique activites we can do together, led by a world of hosts'/>
      <Card price='$350/night' img='https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg' title='unique stays' body='Unique activites we can do together, led by a world of hosts'/>
      <Card price='$350/night' img='https://media.nomadicmatt.com/2018/apartment.jpg' title='unique stays' body='Unique activites we can do together, led by a world of hosts'/>
    </div>
  )
}

import React from 'react'
import './Card.css'


export default function Card({title, body}) {
  return (
    <div className='card'>
      <img src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png" alt="" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

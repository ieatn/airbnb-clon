import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({img, title, body, price}) {
  return (
    <>
    <Link to='/search'>
    <div className='card'>
      <img src={img} alt="" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{body}</p>
        <p>{price}</p>
      </div>
    </div>
    </Link>
    </>
  )
}

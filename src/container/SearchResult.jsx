import React from 'react'
import { useState } from 'react';
import './SearchResult.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

export default function SearchResult({img, title, body, rating, price}) {

    const [heart, setHeart] = React.useState(false)
    // chatgpt made this function for me to toggle heart color
    const handleClick = () => {
        setHeart(!heart)
    }

    return (
        <>
            <div className='result'>
                <div className="result-left">
                    <img src={img} alt="" />
                    
                    <div className="result-body">
                        <h2>{title}</h2>
                        <p>{body}</p>
                        <div className="star">
                            <Rating value={rating} color="secondary" precision={0.5} />
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
                <div className="result-right">
                <FavoriteIcon
                    onClick={handleClick}
                    style={{ color: heart ? 'red' : 'black', cursor: 'pointer' }}
                />
                    <p>{price}</p>
                </div>
            </div>
        </>
    )
}

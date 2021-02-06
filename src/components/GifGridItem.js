import React from 'react'

const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s">
            <p >{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}

export default GifGridItem;

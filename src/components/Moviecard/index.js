import React from 'react'
import './index.css'


const Moviecard = ({ clickData }) => {
    console.log(clickData, 'op')
    return (
        <div className='card'>
            
            <img src={clickData.poster} alt={clickData.title} height={200} width={200}/>
            <div className='detals-card'>
                <p><span>Genare</span>:{clickData.title}</p>
                <p><span>Director</span>:{clickData.director}</p>
                <p><span>Language</span>:{clickData.language}</p>
                <p><span>Stars</span>:{clickData.stars}</p>
            </div>
        </div>
    )
}

export default Moviecard
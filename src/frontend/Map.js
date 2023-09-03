import React from 'react'
import Place from './Place'

const Map = ({ setDisplay, places }) => {
    return (
        <div>
            <div>{places.map((place, index) => (
                <Place place={place} key={index} setDisplay={setDisplay}/>
            ))}</div>
        </div>

    )
}

export default Map
import React from 'react'

const Place = ({ place, setDisplay }) => {
    return (
        <button onClick={() => (setDisplay("displayPlace", place))}>
            <div>{place.getName()}</div>
            <div>Enemies: {place.getNEnemies()}</div>
        </button>
    )
}

export default Place
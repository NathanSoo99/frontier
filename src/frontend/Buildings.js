import React, { useState } from 'react'

import Building from './Building'

const Buildings = ({ setDisplay }) => {
    const [buildings, setBuildings] = useState([{id: 1}, {id:2}])

    const addBuilding = () => {
        setBuildings(buildings.concat({id:3}))
    }

    return (
        <div>
            <div>{buildings.map((value, key) => (
                <Building key={key} info={value} setDisplay={setDisplay}/>
            ))}</div>
            <button onClick={() => (addBuilding)}>Add Building</button>
        </div>
    )
}

export default Buildings
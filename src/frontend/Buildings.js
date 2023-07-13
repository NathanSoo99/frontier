import React from 'react'

import Building from './Building'

const Buildings = ({ setDisplay, buildings }) => {
    return (
        <div>
            <div>{buildings.map((value, key) => (
                <Building key={key} info={value} setDisplay={setDisplay}/>
            ))}</div>
            <button onClick={() => (setDisplay("displayConstructBuilding"))}>
                Add Building
            </button>
        </div>
    )
}

export default Buildings
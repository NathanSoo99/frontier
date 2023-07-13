import React from 'react'

const Building = ({ info, setDisplay }) => {

    return (
        <button onClick={() => (setDisplay("displayBuilding", info))}>
            <div>{info.getName()}</div>
            <div>{info.getNPositions()}</div>
        </button>
    )
}

export default Building
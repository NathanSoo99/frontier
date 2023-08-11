import React from 'react'

const Building = ({ info, setDisplay }) => {

    return (
        <button onClick={() => (setDisplay("displayBuilding", info))}>
            <div>{info.getName()}</div>
            <div>Index: {info.getIndex()}</div>
            <div>Level: {info.getLevel()}</div>
            <div>Max Positions: {info.getNPositions()}</div>
        </button>
    )
}

export default Building
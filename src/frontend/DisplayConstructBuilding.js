import React from 'react'
import { buildingData } from '../backend/buildings/BuildingReference'

const DisplayConstructBuilding = ({ addBuilding }) => {
    return (
        <div>{Object.keys(buildingData).map((value, index) => (
            <button onClick={() => addBuilding(value)} key={index}>{value}</button>
        ))}</div>
    )
}

export default DisplayConstructBuilding
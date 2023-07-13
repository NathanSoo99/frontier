import React from 'react'

const DisplayBuilding = ({ info }) => {
    const buildingName = info.getName()
    const nPositions = info.getNPositions()
    const buildingWorkers = info.getWorkers()
    const buildingApprentice = info.getApprentice()

    return (
        <div>
            <div>{buildingName}</div>
            <div>{nPositions}</div>
            <div>{buildingWorkers.map()}</div>
            <div>{buildingApprentice}</div>
        </div>
    )
}

export default DisplayBuilding
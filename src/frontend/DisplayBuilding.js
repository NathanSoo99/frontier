import React, { useState, useEffect } from 'react'

const DisplayBuilding = ({ building, people }) => {
    const buildingName = building.getName()
    const nPositions = building.getNPositions()
    const [buildingWorkers, setBuildingWorkers] = useState(building.getWorkers())
    const [buildingApprentice, setBuildingApprentice] = useState(building.getApprentice())

    useEffect(() => {
        setBuildingWorkers(building.getWorkers())
        setBuildingApprentice(building.getApprentice())
    }, [building])

    const assignWorker = (person, position) => {
        building.hireWorker(person, position)
        setBuildingWorkers(buildingWorkers.map((value, index) => (index === position ? person : value)))
    }

    return (
        <div>
            <div>{buildingName}</div>
            <div>{nPositions}</div>
            <div>Workers</div>
            <div>{buildingWorkers.map((worker, position) => (<div key={position}>
                    <div>{worker !== null ? worker.getName() : "Empty"}</div>
                    <div>{people.filter(person => person.getWorkplace() === null).map((person, key) => (
                        <button key={key} onClick={() => (assignWorker(person, position))}>{person.getName()}</button>))}
                    </div>
                </div>))}
            </div>
            <div>Apprentice</div>
            <div>{buildingApprentice}</div>
        </div>
    )
}

export default DisplayBuilding
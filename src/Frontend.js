import React, { useRef, useState } from 'react'

import Buildings from './frontend/Buildings'
import Economy from './frontend/Economy'
import People from './frontend/People'

import DisplayBuilding from './frontend/DisplayBuilding'
import DisplayConstructBuilding from './frontend/DisplayConstructBuilding'

import Game from './backend/Game'

const Frontend = () => {
    const [displayKey, setDisplayKey] = useState("blank")
    const [displayInfo, setDisplayInfo] = useState(null)
    const [tabKey, setTabKey] = useState("buildings")

    const gameRef = useRef(new Game())

    const [buildings, setBuildings] = useState([])
    const [people, setPeople] = useState([])

    const updateDisplay = (key, info) => {
        setDisplayKey(key)
        setDisplayInfo(info)
    }

    const addBuilding = (type) => {
        setBuildings(buildings.concat([gameRef.current.addBuilding(type)]))
        console.log(gameRef.current.getBuildings())
        console.log(buildings)
    }

    const addPerson = () => {
        setPeople(people.concat([gameRef.current.addPerson()]))
    }

    const pages = {
        buildings: <Buildings setDisplay={updateDisplay} buildings={buildings}/>,
        economy: <Economy setDisplay={updateDisplay}/>,
        people: <People setDisplay={updateDisplay} people={people}/>
    }

    const displays = {
        blank: <div>Hello World</div>,
        displayBuilding: <DisplayBuilding building={displayInfo} people={people}/>,
        displayConstructBuilding: <DisplayConstructBuilding addBuilding={addBuilding}/>,
    }

    return (
        <div>
            <div>
                <div>
                    <button onClick = {() => setTabKey("buildings")}>Buildings</button>
                    <button onClick = {() => setTabKey("economy")}>Economy</button>
                    <button onClick = {() => setTabKey("people")}>People</button>
                </div>
                <div>{pages[tabKey]}</div>
            </div>
            <button onClick={() => addPerson()}>Add Person</button>
            <div className="display">{displays[displayKey]}</div>
        </div>
    )
}

export default Frontend
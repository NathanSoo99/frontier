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

    const [food, setFood] = useState(gameRef.current.getResource("food"))
    const [stone, setStone] = useState(gameRef.current.getResource("stone"))
    const [metal, setMetal] = useState(gameRef.current.getResource("metal"))
    const [wood, setWood] = useState(gameRef.current.getResource("wood"))

    const [buildings, setBuildings] = useState([])
    const [people, setPeople] = useState([])

    const updateDisplay = (key, info) => {
        setDisplayKey(key)
        setDisplayInfo(info)
    }

    const addBuilding = (type) => {
        const newBuilding = gameRef.current.addBuilding(type)
        if (newBuilding !== null) {
            setBuildings(buildings.concat([newBuilding]))
            setStone(gameRef.current.getResource("stone"))
            setMetal(gameRef.current.getResource("metal"))
            setWood(gameRef.current.getResource("wood"))
            console.log(gameRef.current.getResource("stone"))
        }
        console.log(newBuilding)
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
                <h2>Resources</h2>
                <div>Food: {food}</div>
                <div>Stone: {stone}</div>
                <div>Metal: {metal}</div>
                <div>Wood: {wood}</div>
            </div>
            <div>
                <h2>Menu</h2>
                <div>
                    <button onClick = {() => setTabKey("buildings")}>Buildings</button>
                    <button onClick = {() => setTabKey("economy")}>Economy</button>
                    <button onClick = {() => setTabKey("people")}>People</button>
                </div>
                <div>{pages[tabKey]}</div>
            </div>
            <div>
                <h2>Display</h2>
                <div className="display">{displays[displayKey]}</div>
            </div>
            <div>
                <h2>Dev Tools</h2>
                <button onClick={() => addPerson()}>Add Person</button>
            </div>
            
        </div>
    )
}

export default Frontend
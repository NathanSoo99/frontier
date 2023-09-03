import React, { useRef, useState } from 'react'

import Buildings from './frontend/Buildings'
import Map from './frontend/Map'
import People from './frontend/People'

import DisplayBuilding from './frontend/DisplayBuilding'
import DisplayConstructBuilding from './frontend/DisplayConstructBuilding'

import Game from './backend/Game'

import "./frontend/css/frontend.css"
import DisplayPlace from './frontend/DisplayPlace'

const Frontend = () => {
    const [displayKey, setDisplayKey] = useState("blank")
    const [displayInfo, setDisplayInfo] = useState(null)
    const [tabKey, setTabKey] = useState("buildings")

    const gameRef = useRef(new Game())

    const [day, setDay] = useState(gameRef.current.getDay())

    const [food, setFood] = useState(gameRef.current.getResource("food"))
    const [stone, setStone] = useState(gameRef.current.getResource("stone"))
    const [metal, setMetal] = useState(gameRef.current.getResource("metal"))
    const [wood, setWood] = useState(gameRef.current.getResource("wood"))

    const [defence, setDefence] = useState(gameRef.current.getDefence())
    const [danger, setDanger] = useState(gameRef.current.getDanger())

    const [buildings, setBuildings] = useState([])
    const [places, ] = useState(gameRef.current.getPlaces())
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
        }
    }

    const buildingLevelUp = (index) => {
        if (gameRef.current.buildingLevelUp(index)) {
            setBuildings([...gameRef.current.getBuildings()])
            setStone(gameRef.current.getResource("stone"))
            setMetal(gameRef.current.getResource("metal"))
            setWood(gameRef.current.getResource("wood"))
        }
        
    }

    const addPerson = () => {
        setPeople(people.concat([gameRef.current.addPerson()]))
    }

    const endDay = () => {
        gameRef.current.endDay()

        setDay(gameRef.current.getDay())

        setFood(gameRef.current.getResource("food"))
        setStone(gameRef.current.getResource("stone"))
        setMetal(gameRef.current.getResource("metal"))
        setWood(gameRef.current.getResource("wood"))

        setDefence(gameRef.current.getDefence())
        setDanger(gameRef.current.getDanger())
    }

    const setTabPlusDisplay = (key) => {
        setTabKey(key)
    }

    const pages = {
        buildings: <Buildings setDisplay={updateDisplay} buildings={buildings}/>,
        map: <Map setDisplay={updateDisplay} places={places}/>,
        people: <People setDisplay={updateDisplay} people={people}/>
    }

    const displays = {
        blank: <div>Hello World</div>,
        displayBuilding: <DisplayBuilding building={displayInfo} people={people} levelUp={buildingLevelUp}/>,
        displayConstructBuilding: <DisplayConstructBuilding addBuilding={addBuilding}/>,
        displayPlace: <DisplayPlace place={displayInfo} people={people}/>
    }

    return (
        <div className='frontend'>
            <div className='day-controls'>
                <div>Day: {day}</div>
                <button onClick={() => endDay()}>End Day</button>
            </div>
            <div className='resource-bar'>
                <div className='resource'>Stone: {stone}</div>
                <div className='resource'>Metal: {metal}</div>
                <div className='resource'>Wood: {wood}</div>
                <div className='resource'>Food: {food}</div>
                <div className='resource'>Defensive Strength: {defence}</div>
                <div className='resource'>Enemy Strength: {danger}</div>
            </div>
            <div className='menu'>
                <div>
                    <button className='menu-button' onClick = {() => setTabPlusDisplay("map")}>Map</button>
                    <button className='menu-button' onClick = {() => setTabKey("buildings")}>Buildings</button>
                    <button className='menu-button' onClick = {() => setTabKey("people")}>People</button>
                </div>
            </div>
            <div className='lists'>{pages[tabKey]}</div>
            <div className="display">{displays[displayKey]}</div>
            <div className='dev'>
                <h2>Dev Tools</h2>
                <button onClick={() => addPerson()}>Add Person</button>
            </div>
            
        </div>
    )
}

export default Frontend
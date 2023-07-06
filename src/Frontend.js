import React, { useState } from 'react'

import Buildings from './frontend/Buildings'
import Economy from './frontend/Economy'
import People from './frontend/People'

import Game from './backend/Game'

const Frontend = () => {

    const [display, setDisplay] = useState(<div>Hello World</div>)
    const game = new Game();
    game.addBuilding("encampment")
    game.addBuilding("mine")
    game.addBuilding("quarry")
    game.applyBuildingEffects()

    const updateDisplay = (number) => {
        console.log(number)
    }

    const pages = {
        buildings: <Buildings setDisplay={updateDisplay}/>,
        economy: <Economy setDisplay={updateDisplay}/>,
        people: <People setDisplay={updateDisplay}/>
    }

    const [tab, setTab] = useState(pages.buildings)


    return (
        <div>
            <div>
                <div>
                    <button onClick = {() => setTab(pages.buildings)}>Buildings</button>
                    <button onClick = {() => setTab(pages.economy)}>Economy</button>
                    <button onClick = {() => setTab(pages.people)}>People</button>
                </div>
                <div>{tab}</div>
            </div>
            <div className="display">{display}</div>
        </div>
    )
}

export default Frontend
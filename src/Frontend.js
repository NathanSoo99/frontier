import React, { useState } from 'react'

import Buildings from './frontend/Buildings'
import Economy from './frontend/Economy'
import People from './frontend/People'

import Display from './Display'

const Frontend = () => {
    const pages = {
        buildings: <Buildings/>,
        economy: <Economy/>,
        people: <People/>
    }

    const [tab, setTab] = useState(pages.buildings)

    return (
        <div>
            <div>
                <button onClick = {() => setTab(pages.buildings)}>Buildings</button>
                <button onClick = {() => setTab(pages.economy)}>Economy</button>
                <button onClick = {() => setTab(pages.people)}>People</button>
            </div>
            <div>{tab}</div>
            <Display/>
        </div>
    )
}

export default Frontend
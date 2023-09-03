import React, { useState } from 'react'

const DisplayPlace = ({ place, people }) => {
    const name = place.getName()
    const nEnemies = place.getNEnemies()
    const extermination = place.getExtermination()
    const [fighters, setFighters] = useState(extermination.getFighters())

    const [isAddPerson, setIsAddPerson] = useState(false)

    const addPerson = (person) => {
        extermination.addFighter(person)
        setFighters([...extermination.getFighters()])
        setIsAddPerson(false)
        console.log(extermination.getFighters())
    }

    return (
        <div>
            <div>{name}</div>
            <div>{nEnemies}</div>
            <div>
                <div>Send citizens to eliminate threat</div>
                <div>{fighters.map(fighter => (<div>{fighter.getName()}</div>))}</div>
                <div>{isAddPerson ?
                    <div>{people.filter(person => !fighters.includes(person)).map(person => 
                        <button onClick={() => addPerson(person)}>{person.getName()}</button>
                    )}</div>
                :
                    <button onClick={() => setIsAddPerson(true)}>Add Fighter</button>
                }</div>
            </div>
            
        </div>
    )
}

export default DisplayPlace
import React from 'react'

import Person from './Person'

const People = () => {
    const people = [
        {
            name: "p1",
            occupation: "a"
        },
        {
            name: "p2",
            occupation: "b"
        }
    ]

    return (
        <div>{people.map((value, key) => (<Person key={key} info={value}/>))}</div>
    )
}

export default People
import React from 'react'

import Person from './Person'

const People = ({ people }) => {
    return (
        <div>{people.map((value, key) => (<Person key={key} info={value}/>))}</div>
    )
}

export default People
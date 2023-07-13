import React from 'react'

const Person = ({ info }) => {
    const name = info.getName()

    return (
        <div>
            <div>{name}</div>
        </div>
    )
}

export default Person
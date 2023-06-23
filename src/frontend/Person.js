import React from 'react'

const Person = ({ info }) => {
    return (
        <div>
            <div>{info.name}</div>
            <div>{info.occupation}</div>
        </div>
    )
}

export default Person
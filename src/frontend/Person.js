import React from 'react'

const Person = ({ info }) => {
    const name = info.getName()
    const workplace = info.getWorkplace()

    return (
        <div>
            <div>{name}</div>
            <div>{workplace === null ? "Unemployed" : workplace.getName()}</div>
        </div>
    )
}

export default Person
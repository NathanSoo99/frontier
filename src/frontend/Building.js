import React from 'react'

const Building = ({ hello, info }) => {

    return (
        <div>
            <div>{hello}</div>
            <div>{info.id}</div>
        </div>
    )
}

export default Building
import React from 'react'

const Building = ({ info, setDisplay }) => {

    return (
        <button onClick={() => (setDisplay(2))}>
            <div>hello</div>
            <div>{info.id}</div>
        </button>
    )
}

export default Building
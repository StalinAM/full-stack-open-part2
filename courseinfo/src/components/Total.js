import React from 'react'

function Total({ total }) {

    return (
        <b>total of {total.reduce(
            (prev, next) => prev + next
        )} exercises</b>
    )
}

export default Total
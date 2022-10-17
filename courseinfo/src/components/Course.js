import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

function Course({ course }) {
    return (
        <>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts.map(item => item.exercises)} />
        </>
    )
}

export default Course
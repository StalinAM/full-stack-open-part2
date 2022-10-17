import React from 'react'
import Part from './Part'

function Content({ parts }) {
  return (
    <>
      {parts.map(item => (<Part key={item.id} name={item.name} exercises={item.exercises} />))}
    </>
  )
}

export default Content
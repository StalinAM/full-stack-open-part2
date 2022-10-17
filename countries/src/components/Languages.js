import React from 'react'
import Language from './Language'

function Languages({ languages }) {
    return (
        <ul>
            {Object.values(languages.languages).map((item, index) => <Language key={index} name={item} />)}
        </ul>
    )
}

export default Languages
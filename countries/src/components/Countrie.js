import React, { useState, useEffect } from 'react'
import CountrieDetails from './CountrieDetails'

function Countrie({ countrie, length }) {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        click ? setClick(false) : setClick(true)
    }
    return (
        <>
            {
                length == 1 ?
                    <CountrieDetails key={countrie.name.common} name={countrie.name.common} capital={countrie.capital[0]} population={countrie.population} languages={countrie} flag={countrie.flags.svg} /> :
                    <li>
                        {countrie.name.common} <button onClick={handleClick}>show</button>
                        {
                            click && (<CountrieDetails key={countrie.name.common} name={countrie.name.common} capital={countrie.capital[0]} population={countrie.population} languages={countrie} flag={countrie.flags.svg} />)
                        }
                    </li>
            }

        </>
    )
}

export default Countrie
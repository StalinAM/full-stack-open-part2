import React from 'react'
import Countrie from './Countrie'
function Countries({ countries }) {
    return (
        <>
            {
                countries.length > 10 ?
                    <p>Too many matches, specify another filter</p>
                    :
                    countries.length == 1 ?
                        <div>
                            <Countrie countrie={countries[0]} length={countries.length} />
                        </div>
                        :
                        <ul>
                            {countries.map((countrie, index) => <Countrie key={index} countrie={countrie} length={countries.length} />)}
                        </ul>
            }
        </>
    )
}

export default Countries
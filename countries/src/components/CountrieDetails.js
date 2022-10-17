import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Languages from './Languages';
function CountrieDetails({ name, capital, population, languages, flag }) {
    const api_key = process.env.REACT_APP_API_KEY
    const [temperature, setTemperature] = useState()
    const [wind, setWind] = useState()
    const [icon, setIcon] = useState("")
    const [direction, setDirection] = useState("")
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${name}`)
            .then(response => {
                const weatherApi = response.data
                setTemperature(weatherApi.current.temperature);
                setWind(weatherApi.current.wind_speed)
                setIcon(weatherApi.current.weather_icons[0])
                setDirection(weatherApi.current.wind_dir)
            })
    }, [])

    return (
        <>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>population {population}</p>
            <h2>languages</h2>
            <Languages languages={languages} />
            <img width={"200"} src={flag} />
            <br />
            <h2>Weather in {capital}</h2>
            <p>temperature: {temperature} Celsius</p>
            <img width={"100"} src={icon} />
            <p>wind {wind} km/h direction {direction}</p>
        </>
    )
}

export default CountrieDetails
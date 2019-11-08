import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {

    const [temp, setTemp] = useState('')
    const [windSpd, setWindSpd] = useState('')
    const [windDirtion, setWindDirection] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')

    useEffect(() => {
        const link = `http://api.weatherstack.com/current?access_key=5a8edbe79558b42d445bba9183fdfcb6&query=${country.name}`
        axios.get(link)
            .then(response => {
                setTemp(response.data.current.temperature)
                setWindSpd(response.data.current.wind_speed)
                setWindDirection(response.data.current.wind_dir)
                setWeatherIcon(response.data.current.weather_icons)
            })
    }, [])

    return (
        <div>
            <h2>{country.name}</h2>
            <section>Capital: {country.capital}</section>
            <section>Population: {country.population}</section>
            <section><h3>Languages:</h3>
                <ul>
                    {country.languages.map(language => (<li key={language.name}>{language.name}</li>))}
                </ul>
            </section>
            <section><img src={country.flag} alt={country.name} width='100' /></section>
            <section><h3>Weather in {country.name}</h3>
                <p><strong>temperature:</strong> {temp} Celsius/ {temp * 9 / 5 + 32} Fahrenheit</p>
                <img src={weatherIcon} alt='current weather' />
                <p><strong>wind:</strong> {windSpd} kph <strong>direction:</strong> {windDirtion}</p>
            </section>
        </div>
    )
}

export default Country
import React from 'react'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <section>Capital: {country.capital}</section>
            <section>Population: {country.population}</section>
            <section><h4>Languages:</h4>
                <ul>
                    {country.languages.map(language => (<li key={language.name}>{language.name}</li>))}
                </ul>
            </section>
            <section><img src={country.flag} alt={country.name} width='100' /></section>
        </div>
    )
}

export default Country
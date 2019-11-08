import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './components/Country'

function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data[239])
      setCountries(response.data)
    })
  }, [])

  const displayCountries = () => {
    const searchedCountries = search ? countries.filter(country => country.name.toLowerCase().match(search.toLowerCase())) : []
    return (
      searchedCountries.map(country => (
        <div key={country.name}>{country.name}
        </div>
      ))
    )
  }

  const displayCountry = () => {
    const country = countries.find(country => country.name.toLowerCase().match(search.toLowerCase()))
    return (
      <Country country={country} />
    )
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="App">
      <div>find countries <input type='text' value={search} onChange={handleSearch}></input></div>
      {displayCountries().length > 10
        ? <p>Too many matches, specify another filter</p>
        : displayCountries().length === 1
          ? displayCountry()
          : displayCountries()}
    </div>
  );
}

export default App;

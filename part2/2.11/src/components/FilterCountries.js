import React from 'react'
import CountryInfo from './CountryInfo'
import '../App.css';

const FilterCountries = ({ countryData, searchFilter, setSearchFilter, weatherData, setActiveCountry }) => {
  const filteredCountries = searchFilter 
    ? countryData.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase())) 
    : countryData

    if (filteredCountries.length < 1) {
        return <h4>Sorry, couldn't find any countries.</h4> 
    } else if (filteredCountries.length === 1) { 
        return (
          <CountryInfo 
            weatherData={weatherData} 
            setActiveCountry={setActiveCountry} 
            filteredCountries={filteredCountries} 
          />
        ) 
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return(  
          <ul>   
            {filteredCountries.map(country => 
              <li key={country.name} className="m-1 font-custom cursor-pointer text-xl">
                {country.name} 
                <button 
                  className="m-1 p-1 bg-orange-500 text-white text-xs rounded" 
                  type="submit"
                  onClick={() => {setSearchFilter(country.name)}}
                >Info</button>
              </li>
            )}     
          </ul>    
        ) 
    } 
    
    return(
 
      <div className="min-h-[24rem] h-[22rem] sm:min-h-[22rem] overflow-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-blue-50">
        <ul>
          {countryData.map(country => (
            <li 
              key={country.nativeName} 
              className="m-1 font-custom cursor-pointer text-xl" 
              onClick={() => setSearchFilter(country.name)}
            >
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    ) 
}

export default FilterCountries
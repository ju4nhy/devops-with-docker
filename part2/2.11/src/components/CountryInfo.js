import React from 'react'

const degToCardinal = (deg) => {
    const cardinals = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    const index = Math.round(deg / 45);
    return cardinals[index];
}

const formatTime = (time) => {
  const result = new Date(time * 1000).toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
  return result
}

const CountryInfo = ({ weatherData, setActiveCountry, filteredCountries }) => {
  const temp = Math.round(weatherData.main.temp) 
  const windDegrees = weatherData.wind.deg
  const windDirection = degToCardinal(windDegrees);

  const sunriseTime = weatherData.sys.sunrise
  const sunsetTime = weatherData.sys.sunset

  const sunrise = formatTime(sunriseTime)
  const sunset = formatTime(sunsetTime)

  return (
    <div className="flex bg-blue-400 bg-opacity-20 max-w-auto pl-5">
      {filteredCountries.map((country) => (
        <div key={country.alpha3Code}>
          <div 
            className="countryInfo flex-basis-1/2 float-left p-0 pl-7 pt-10 pb-5" 
            key={country.alpha3Code} 
            onLoad={() => setActiveCountry(country.name)}
          >
            <img className="w-30 h-20 mb-5" src={country.flag} alt="flag"></img>
            <h1 className="text-2xl font-bold mb-5 w-[200px]">{country.name}</h1>

            <table className="border-2 border-black">
              <tbody className="text-xs sm:text-base" >
                <tr className="border-2 border-black p-1 font-bold">
                    <td className="border-2 border-black">Native name</td>
                    <td className="pl-1 pr-2 w-[100px]">{country.nativeName}</td>
                </tr>
                <tr className="border-2 border-black">
                    <td className="border-2 border-black p-1 font-bold">Capital</td>
                    <td className="pl-1 pr-2">{country.capital}</td>
                </tr>
                <tr className="border-2 border-black">
                    <td className="border-2 border-black p-1 font-bold">Region</td>
                    <td className="pl-1 pr-2">{country.region}</td>
                </tr>
                <tr className="border-2 border-black">
                    <td className="border-2 border-black p-1 font-bold">Population</td>
                    <td className="pl-1 pr-2">{country.population.toLocaleString()}</td>
                </tr>
                <tr className="border-2 border-black">
                    <td className="border-2 border-black p-1 font-bold">Languages</td>
                    <td className="pl-1 pr-2">
                      <ul>
                        {country.languages.map((language) => (
                        <li key={language.name}>{language.name}</li>
                        ))}
                      </ul>
                    </td>
                </tr>
                <tr className="border-2 border-black">
                    <td className="border-2 border-black p-1 font-bold">Currencies</td>
                    <td className="pl-1 pr-2">
                      <ul>
                        {country.currencies.map((currency) => (
                          <li key={currency.name}>{currency.name}</li>
                        ))}
                      </ul>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="weather flex-basis-1/2 float-left lg:p-10 md:p-0 sm:p-0 pt-6">
              {weatherData.weather.map(weather => (
                  <img key={weather.icon} className="w-20 h-20 ml-12" src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weatherIcon"></img>
              ))}
              <h1 className="text-6xl m-8 mt-0 font-bold">{temp} °C</h1>
              <h3 className="text-xl m-8">{weatherData.weather[0].description}</h3>
              <div className="ml-8">
                <p className="text-md">Feels like {Math.round(weatherData.main.feels_like)} °C</p>
                <p className="text-md mt-2">Wind speed {weatherData.wind.speed} m/s</p>
                <p className="text-md">Wind direction {windDirection}</p>
                <p className="text-md">Wind gusts {weatherData.wind.gust ? Math.round(weatherData.wind.gust) * 3.6 : 0} km/h</p>
                <p className="text-md mt-2">Sunrise {sunrise}</p>
                <p className="text-md">Sunset {sunset}</p>
              </div>
          </div>
      </div>
      ))}
    </div>
  )
}

export default CountryInfo
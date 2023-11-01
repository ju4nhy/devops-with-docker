import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import FilterCountries from './components/FilterCountries';
import TotalCountries from './components/TotalCountries';
import bgImage from './bg.jpg';

const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [activeCountry, setActiveCountry] = useState('Finland');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountryData(response.data);
      });
  }, []);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    const trimmedActiveCountry = activeCountry.replace(/\([^)]*\)/, '').trim();
  
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${trimmedActiveCountry}&units=metric&appid=${api_key}`)
      .then(response => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error("API request error:", error);
      });
  }, [activeCountry]);

  const handleFilterChange = (event) =>
    setSearchFilter(event.target.value);

  return (
    <div className="flex lg:h-screen bg-blue-50 lg:bg-cover md:bg-repeat sm:bg-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-[650px] max-w-[700px] mx-auto p-10">
        <Header />
        <Search searchFilter={searchFilter} setSearchFilter={setSearchFilter} handleFilterChange={handleFilterChange} />
        <TotalCountries countryData={countryData} searchFilter={searchFilter} />
        <FilterCountries
          searchFilter={searchFilter}
          countryData={countryData}
          weatherData={weatherData}
          setSearchFilter={setSearchFilter}
          setActiveCountry={setActiveCountry}
        />
      </div>
    </div>
  );
};

export default App;
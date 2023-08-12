import React, { useState, useEffect } from "react";
import "./assets/style.css";
import { WEATHER_API_KEY, GEO_API_KEY } from "./api_key";

import Search from "./components/Search/Search";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState();



  function handleSubmit(event, searchCity) {
    event.preventDefault();
    
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=c308193ad0c1caec9cfac5dffd5f5aed`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { humidity, temp } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        const city = data.name;
        const weather = data.weather[0].main;

        setWeatherData({
          humidity: humidity,
          temp: temp,
          speed: speed,
          country: country,
          city: city,
          weather: weather
        });
      });

  }

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      {weatherData && <WeatherCard {...weatherData} />}
    </>
  );
}

export default App;

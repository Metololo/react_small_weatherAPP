import React from "react";
import rain from "../../assets/images/rain.svg";
import humidityLogo from "../../assets/images/humidity.svg";
import windLogo from "../../assets/images/wind.svg";

export default function WeatherCard({country,humidity,speed,temp,city,weather}) {

    let logoImg;
    switch(weather) {
        case 'Clear':
        logoImg = "./src/assets/images/clear.svg"
            break;
        case 'Brizzle':
        logoImg = "./src/assets/images/brizzle.svg"
            break;
        case 'Clouds':
        logoImg = "./src/assets/images/clouds.svg"
            break;
        case 'Thunderstorm':
        logoImg = "./src/assets/images/thunderstorm.svg"
            break;
        case 'Rain':
        logoImg = "./src/assets/images/rain.svg"
            break;
        case 'Snow':
        logoImg = "./src/assets/images/snow.svg"
            break;
    }

  return (
    <div id="weather--card">
      <h2 className="city--name">{city}, {country}</h2>
      <img className="weather--logo" src={logoImg} alt="weather logo" />
      <h1 className="temparature">{Math.round(temp)}°C</h1>
      <div className="infos--container">
        <div className="infos">
          <img src={humidityLogo} />
          <h3>{Math.round(humidity)}%</h3>
        </div>
        <div className="infos">
          <img src={windLogo} />
          <h3>{Math.round(speed)} km/h</h3>
        </div>
      </div>
    </div>
  );
}

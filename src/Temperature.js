import React from "react";

import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    temperature: 21,
    humidity: 48,
    wind: 3,
    feelsLike: 16,
  };

  return (
    <div className="row Temperature">
      <div className="col-6 text-start">
        <div className="clearfix weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="sun"
            id="icon"
          />
          <span>
            <strong>{weatherData.temperature}</strong>
          </span>
          <span className="units">°C</span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span>{weatherData.humidity}%</span>
          </li>
          <li>
            Wind: <span>{weatherData.wind} mph</span>
          </li>
          <li>
            Feels like: <span>{weatherData.feelsLike} °C</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

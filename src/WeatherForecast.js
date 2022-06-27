import React, { useState } from "react";

import axios from "axios";
import WeatherForecastData from "./WeatherForecastData";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data);
    return null;
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <WeatherForecastData data={forecastData.list[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "49377281846eee971852e0a6a46bc4a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}

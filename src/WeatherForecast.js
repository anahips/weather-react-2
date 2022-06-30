import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastData from "./WeatherForecastData";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            {" "}
            <WeatherForecastData data={forecastData[0]} />
          </div>
          <div className="col">
            {" "}
            <WeatherForecastData data={forecastData[1]} />
          </div>
          <div className="col">
            {" "}
            <WeatherForecastData data={forecastData[2]} />
          </div>
          <div className="col">
            {" "}
            <WeatherForecastData data={forecastData[3]} />
          </div>
          <div className="col">
            {" "}
            <WeatherForecastData data={forecastData[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "49377281846eee971852e0a6a46bc4a0";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

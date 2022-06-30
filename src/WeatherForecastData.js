import React from "react";
import WeatherIcons from "./WeatherIcons";

import "./WeatherForecast.css";

export default function WeatherForecastData(props) {
  function minimumTemp() {
    let minimum = Math.round(props.data.temp.min);
    return `${minimum}`;
  }

  function maximumTemp() {
    let maximum = Math.round(props.data.temp.max);
    return `${maximum}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={40} />
      <div>
        <span className="forecast-maximum">{maximumTemp()}</span>
        <span className="forecast-minimum">{minimumTemp()}</span>
      </div>
    </div>
  );
}

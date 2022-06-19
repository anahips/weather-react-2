import React from "react";
import WeatherIcons from "./WeatherIcons";

import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="row Temperature">
      <div className="col-6 text-start">
        <div className="clearfix weather-temperature">
          <WeatherIcons code={props.data.image} />
          <span>
            <strong>{props.data.temperature}</strong>
          </span>
          <span className="units">°C</span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span>{props.data.humidity}%</span>
          </li>
          <li>
            Wind: <span>{props.data.wind} mph</span>
          </li>
          <li>
            Feels like: <span>{props.data.feelsLike} °C</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

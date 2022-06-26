import React from "react";
import WeatherIcons from "./WeatherIcons";
import Temperature from "./Temperature";

import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="row mt-3">
      <div className="col-6 weather-temperature">
        <div className="clearfix">
          <div className="float-left">
            <WeatherIcons code={props.data.image} />
          </div>
          <div className="float-left">
            <Temperature data={props.data.temperature} />
          </div>
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

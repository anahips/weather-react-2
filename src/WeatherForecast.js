import React from "react";
import WeatherIcons from "./WeatherIcons";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="day">Mon</div>
          <WeatherIcons code="13d" size={40} />
          <div>
            <span className="forecast-minimum">10°</span>
            <span className="forecast-maximum">30°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

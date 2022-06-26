import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

import "./Search.css";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState("");

  function enterCity() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49377281846eee971852e0a6a46bc4a0&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    enterCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      image: response.data.weather[0].icon,
      date: response.data.dt * 1000,
      name: response.data.name,
    });
  }

  if (ready) {
    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                placeholder="Enter a city"
                id="city-input"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        <City data={weatherData} />
        <WeatherData data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    enterCity();
    return "Gathering information...";
  }
}

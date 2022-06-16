import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49377281846eee971852e0a6a46bc4a0&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 search-form">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          id="city-input"
          onChange={updateCity}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

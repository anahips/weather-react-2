import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span>
          <strong>{props.data}</strong>
        </span>
        <span className="units">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.data * 9) / 5 + 32);
    return (
      <div>
        <span>
          <strong>{fahrenheit}</strong>
        </span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}

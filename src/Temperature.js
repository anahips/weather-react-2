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
      <span>
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
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.data * 9) / 5 + 32);
    return (
      <span>
        <span>
          <strong>{fahrenheit}</strong>
        </span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | F
        </span>
      </span>
    );
  }
}

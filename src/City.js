import React from "react";

import "./City.css";

export default function City() {
  let cityData = {
    city: "London",
    lastUpdate: "Saturday 21:30",
    description: "Cloudy skies",
  };

  return (
    <div className="City">
      <h1>{cityData.city}</h1>
      <ul>
        <li id="update">
          Last updated <span>{cityData.lastUpdate}</span>
        </li>
        <li id="description">{cityData.description}</li>
      </ul>
    </div>
  );
}

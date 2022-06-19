import React from "react";

import "./City.css";

export default function City(props) {
  let date = new Date(props.data.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[date.getDay()];

  return (
    <div className="City">
      <h1>{props.data.name}</h1>
      <ul>
        <li id="update">
          Last updated{" "}
          <span>
            {day}, {hours}:{minutes}
          </span>
        </li>
        <li id="description">{props.data.description}</li>
      </ul>
    </div>
  );
}

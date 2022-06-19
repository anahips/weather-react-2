import React from "react";

import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1>{props.data.name}</h1>
      <ul>
        <li id="update">
          Last updated <span>{props.data.time}</span>
        </li>
        <li id="description">{props.data.description}</li>
      </ul>
    </div>
  );
}

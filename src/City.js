import React from "react";

import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1>London</h1>
      <ul>
        <li id="update">
          Last updated <span>{props.data.desription}</span>
        </li>
        <li id="description">{props.data.description}</li>
      </ul>
    </div>
  );
}

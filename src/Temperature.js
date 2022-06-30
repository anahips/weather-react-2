import React from "react";

export default function Temperature(props) {
  return (
    <span>
      <span>
        <strong>{props.data}</strong>
      </span>
      <span className="units">°C</span>
    </span>
  );
}

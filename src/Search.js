import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="input-group mb-3 search-form">
      <input
        type="text"
        class="form-control"
        placeholder="Enter a city"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        id="city-input"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
}

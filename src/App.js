import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="London" />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/ana-hipolito/">Ana Hipolito</a> and
        is
        <a href="https://github.com/anahips/weather-react-2">
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a href="https://mellifluous-khapse-9a573b.netlify.app">
          {" "}
          hosted on Netlify 😎{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;

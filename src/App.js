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
        <a href="https://github.com/anahips/weather-react-2">
          Open source code
        </a>{" "}
        by <a href="https://www.linkedin.com/in/ana-hipolito/">Ana Hipolito</a>
      </footer>
    </div>
  );
}

export default App;

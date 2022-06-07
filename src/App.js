import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <City />
        <Temperature />
      </div>
      <p>
        <a href="https://github.com/anahips/weather-react-2">
          Open source code
        </a>{" "}
        by <a href="https://www.linkedin.com/in/ana-hipolito/">Ana Hipolito</a>
      </p>
    </div>
  );
}

export default App;

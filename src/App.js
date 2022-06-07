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
    </div>
  );
}

export default App;

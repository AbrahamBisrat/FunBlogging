import Home from "./Home";
import Navbar from "./Navbar";
import Tbody from "./Tbody";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

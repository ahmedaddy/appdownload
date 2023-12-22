import "./App.css";
import Home from "./Componants/Home/Home";
import Navbar from "./Componants/NavBar/navbar";
import Downloads from "./Componants/downloads/downloads";

import "react-bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App holder">
      <Navbar />
      <Home />
      <Downloads />
      {/* <div className="container"></div> */}
    </div>
  );
}

export default App;

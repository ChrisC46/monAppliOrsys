import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Button from "./components/Button/Button";

const contentName = "Hello";

function App() {
  return (
    <div className="App">
      {/* comment dans XML*/}
      Hello World
      <hr />
      <Button action={() => alert("Le bouton est clické")}>
        <div>Hello</div>
      </Button>

      <Button action={() => alert("Le bouton est clické")}>
        <div>Hello</div>
        <hr />
        <div>De Lu</div>
      </Button>

      <Button action={() => alert("Le bouton est clické")}>Hello String</Button>
      
      <Button>With Child</Button>
    </div>
  );
}

export default App;

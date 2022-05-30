import React, { Component } from "react";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="app" style={{ textAlign: "center" }}>
        Valeur du compteur : 1
        <hr />
        <Button bgColor="tomato"> decrem -1</Button>
        <Button bgColor="skyblue"> increm -1</Button>
      </div>
    );
  }
}

export default App;

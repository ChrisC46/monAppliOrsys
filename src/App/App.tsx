import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Button, {DefaultButton, WarningButton} from "./components/Button/Button";
import ButtonStyle from "./components/Button/Button.module.css";

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
      <Button style={{fontWeight:900, fontsize:'x-large'}} >
        <div>Hello</div>
        <hr />
        <div>De Lu</div>
      </Button>
      <Button bgColor='tomato' color='blue' action={() => alert("Le bouton est clické")}>Hello String</Button>
      <Button className={ButtonStyle.underline}>With Child</Button>
      <WarningButton className={ButtonStyle.underline}>Alert Child</WarningButton>
      <DefaultButton className={ButtonStyle.underline}>Default Child</DefaultButton>
    </div>
  );
}

export default App;



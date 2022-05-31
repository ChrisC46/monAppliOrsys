import React, { Component } from "react";
import Button from "./components/Button/Button";
interface IAppState {
  message?: "hello" | "goodbye";
  counter: number;
}
interface IAppProps {}

class App extends Component<IAppProps, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = { message: "hello", counter: 0 };
  }
  render() {
    return (
      <div className="app" style={{ textAlign: "center" }}>
        Valeur du compteur : {this.state.counter}
        <hr />
        <Button
          action={() => {
            this.setState({counter:this.state.counter-1});
            console.log(this.state.counter);
          }}
          bgColor="tomato"
        >
          {" "}
          decrem -1
        </Button>
        <Button action={() => {
          this.setState({counter:this.state.counter+1});
          console.log(this.state.counter)
        }} bgColor="skyblue"> increm +1</Button>
      </div>
    );
  }
}

export default App;

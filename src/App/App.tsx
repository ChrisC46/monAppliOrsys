import { MemeSVGViewer } from "orsys-tjs-meme";
import React, { Component } from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Button from "./components/ui/Button/Button";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/ui/MemeForm/MemeForm";
import NavBar from "./components/ui/NavBar/NavBar";
interface IAppState {}
interface IAppProps {}

class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <div className="app" style={{ textAlign: "center" }}>
        <Header/>
        <NavBar/>
        <FlexLayout>
          <MemeSVGViewer></MemeSVGViewer>
          <MemeForm></MemeForm>
        </FlexLayout>
        <Footer/>
      </div>
    );
  }
}

export default App;

import { emptyMeme, ImageInterface, MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import React, { Component } from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Button from "./components/ui/Button/Button";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/ui/MemeForm/MemeForm";
import NavBar from "./components/ui/NavBar/NavBar";

interface IAppState {
  currentMeme: MemeInterface,
  images:Array<ImageInterface>,
}
interface IAppProps {}

class App extends Component<IAppProps, IAppState> {
  constructor(props:IAppProps){
    super(props);
    this.state ={currentMeme:emptyMeme, images: []}
    }
  
  render() {
    return (
      <div className="app" style={{ textAlign: "center" }}>
        <Header/>
        <NavBar/>
        <FlexLayout>
          <MemeSVGViewer image={undefined} meme={(this.state.currentMeme)}></MemeSVGViewer>
          <MemeForm></MemeForm>
        </FlexLayout>
        <Footer/>
      </div>
    );
  }
}

export default App;

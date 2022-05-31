import { emptyMeme, ImageInterface, MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import React, { Component } from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Button from "./components/ui/Button/Button";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/ui/MemeForm/MemeForm";
import NavBar from "./components/ui/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.css';

interface IAppState {
  currentMeme: MemeInterface,
  images:Array<ImageInterface>,
}
interface IAppProps {}

const images:Array<ImageInterface>=[
  {id:0,name:'goudig',h:168,w:300, url:"images"},
  {id:1,name:'quimper',h:183,w:275, url:"t2"},
  {id:2,name:'paris',h:182,w:277, url:"t3"},
  {id:3,name:'lyon',h:182,w:277, url:"t4"},
]

class App extends Component<IAppProps, IAppState> {
  constructor(props:IAppProps){
    super(props);
    this.state ={currentMeme:emptyMeme, images: []};
    }
  
  render() {
    return (
      <div className="app" style={{ textAlign: "center" }}>
        <Header/>
        <NavBar/>
        <FlexLayout>
          <MemeSVGViewer image={this.state.images.find(e=>e.id===this.state.currentMeme.imageId)} meme={(this.state.currentMeme)} basePath="/media/"/>
          <MemeForm images={images} meme={this.state.currentMeme} onMemeChange={(meme:MemeInterface)=>{
              this.setState({currentMeme: meme});
          }} ></MemeForm>
        </FlexLayout>
        <Footer/>
      </div>
    );
    
  }
}

export default App;

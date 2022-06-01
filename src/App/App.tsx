import {
  emptyMeme,
  ImageInterface,
  MemeInterface,
  MemeSVGThumbnail,
} from "orsys-tjs-meme";
import React, { Component, useEffect } from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import ConnectedMemeSVG from "./components/ui/ConnectedMemeSVGViewer/ConnectedMemeSVGViewer";
import Button from "./components/ui/Button/Button";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import MemeForm, { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import NavBar from "./components/ui/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import _store, { ACTIONS_CURRENT } from "./store/store";
import { useDispatch, useSelector } from "react-redux";

interface IAppState {}
interface IAppProps {}

class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <div className="app" style={{ textAlign: "center" }}>
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                Home ..
                <br /> Bienvenu sur cette page
              </div>
            }
          />
          <Route path="/editor" element={<MemeEditor />} />
          <Route path="/editor/:id" element={<MemeEditor />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

const MemeEditor = (props: any) => {
  const dispatch = useDispatch();
  const params = useParams();
  const memes = useSelector((state: any) =>  state.ressources.memes);
  useEffect(() => {
    if (params.id !== undefined) {
      dispatch({
        type: ACTIONS_CURRENT.UPDATE_CURRENT,
        value: memes.find((m: MemeInterface) => m.id === Number(params.id)),
      });
    } else {
      dispatch({ type: ACTIONS_CURRENT.CLEAR_CURRENT });
    }
  }, [params, memes, dispatch]);
  console.log(useParams(), useLocation());
  return (
    <FlexLayout>
      <ConnectedMemeSVG />
      <ConnectedMemeForm />
    </FlexLayout>
  );
};

export default App;

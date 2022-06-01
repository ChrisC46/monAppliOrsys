import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MemeForm, { ConnectedMemeForm } from "./MemeForm";
import { Provider } from "react-redux";
import _store from "../../../store/store";

describe("<MemeForm />", () => {
  test("it should mount", () => {
    render(
      <Provider store={_store}>
        <ConnectedMemeForm images={[]}/>
      </Provider>
    );

    const memeForm = screen.getByTestId("MemeForm");

    expect(memeForm).toBeInTheDocument();
  });
});

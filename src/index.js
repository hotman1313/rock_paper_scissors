import "normalize.css";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./main";

render(
  <BrowserRouter id="app">
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
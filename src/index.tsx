import * as React from "react";
import * as ReactDom from "react-dom";

import App from "./App";
import "./index.css";
import "./print";

ReactDom.render(
  <App compiler="tsts" framework />,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./print", () => {
    console.log("print updated..");
  });
}

console.log("webpack101");

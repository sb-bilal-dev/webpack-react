import * as React from "react";

import * as Icon from "./images/Icon.png";

export interface AppT {
  compiler: string;
  framework: boolean;
}

export const App = (props: AppT) => (
  <div>
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
    <img src={Icon} alt="no image" />
  </div>
);

export default App;

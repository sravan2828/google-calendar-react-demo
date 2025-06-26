import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Calender from "./containers/Calender";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Calender />
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

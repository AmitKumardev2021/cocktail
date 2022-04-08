import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/store'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Provider store={store}>

    <App />
  </Provider>
  </BrowserRouter>
);

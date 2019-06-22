// require('./css/styles.scss');
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


window.onload = function() {
   ReactDOM.render(
         <BrowserRouter>
            <App />
         </BrowserRouter>,
      document.getElementById("root")
   );
};

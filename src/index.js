// require('./css/styles.scss');
import "jquery";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

window.onload = function() {
   ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>,
      document.getElementById("root")
   );
};

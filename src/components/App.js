import React, { Component } from "react"
import "./css/styles.scss"
import Navbar from "./Navbar"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

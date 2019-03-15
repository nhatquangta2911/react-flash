import React, { Component } from "react"
import "./css/styles.scss"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact";

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

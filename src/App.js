import React, { Component } from "react";
import "./css/styles.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import User from "./components/User";

export default class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Navbar />
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/posts/:post_id" component={Post} />
                  <Route path="/users/:user_id" component={User} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
 } 

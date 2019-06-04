import React, { Component } from "react";
import "./css/styles.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Movies from "./components/Movies";
import Movie from "./components/Movies/Movie";
import Cards from "./components/Cards/";
import Card from "./components/Cards/Card";
import CardsRecent from "./components/CardsRecent";
import SearchBox from "./components/SearchBox/SearchBox";

export default class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Navbar />
               <SearchBox />
               <Switch>
                  <Route exact path="/" component={CardsRecent} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route exact path="/cards" component={Cards} />
                  <Route path="/cards/:id" component={Card} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
 } 

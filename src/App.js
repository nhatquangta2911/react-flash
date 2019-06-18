import React, { Component } from "react";
import "./css/styles.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Movies from "./components/Movies";
import Movie from "./components/Movies/Movie";
import Cards from "./components/Cards/";
import Card from "./components/Cards/Card";
import CardsRecent from "./components/CardsRecent";
import SearchBox from "./components/SearchBox/SearchBox";
import LoginForm from "./components/LoginForm";
import withAuth from "./high-order-components/withAuth";
import Profile from "./components/Profile/Profile";
import Chat from "./components/Chat";
import DashBoard from "./components/DashBoard/DashBoard";
import DashBoardAdd from "./components/DashBoardAdd/DashBoardAdd";
import { ToastContainer } from "react-toastify";
import { CircleArrow  as ScrollUpButton } from "react-scroll-up-button";
export default class App extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         token: null
      }
   }

   // componentWillMount() {
   //    let url = document.location.href.split('8080')[1];
   //    if(url === '/chat') {
   //       this.setState({
   //          hasSearchBox: false
   //       });
   //    } else {
         //       this.setState({
   //          hasSearchBox: true
   //       })
   //    }
   // }

   componentDidMount() {
      this.setState({
         token: window.localStorage.getItem('token')
      });
   }
   
   componentWillReceiveProps() {
      this.setState({
         token: window.localStorage.getItem('token')
      });
   }

   render() {
      const { token } = this.state;
      return ( 
            <div className="App">
                  <Navbar />
                  <ToastContainer />
                  {token && !document.location.href.includes('chat') && !document.location.href.includes('profile') && !document.location.href.includes('dashboard') && <SearchBox />}
                  <Switch>
                     {/* <Redirect from="/" to="/auth" exact /> */}
                     <Route exact path="/" component={CardsRecent} />
                     <Route path="/about" component={About} />
                     <Route exact path="/cards" component={withAuth(Cards)} />
                     <Route path="/cards/:id" component={Card} />
                     <Route path="/auth" component={LoginForm} />
                     <Route path="/logout" component={LoginForm} />
                     <Route path="/profile" component={withAuth(Profile)} />
                     <Route path="/chat" component={withAuth(Chat)} />
                     <Route path="/dashboard" component={withAuth(DashBoard)} />
                  </Switch>
                  <ScrollUpButton />
            </div>
      );
   }
 } 

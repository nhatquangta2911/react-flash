import React, { Component } from "react";
import "./css/styles.scss";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Cards from "./components/Cards/";
import Card from "./components/Cards/Card";
import CardsRecent from "./components/CardsRecent";
import SearchBox from "./components/SearchBox/SearchBox";
import LoginForm from "./components/LoginForm";
import withAuth from "./high-order-components/withAuth";
import Profile from "./components/Profile/Profile";
import Chat from "./components/Chat";
import DashBoard from "./components/DashBoard/DashBoard";
import { ToastContainer } from "react-toastify";
import { CircleArrow  as ScrollUpButton } from "react-scroll-up-button";
import Register from "./components/Register/Register";
import BlogHome from "./components/BlogHome/BlogHome";
import BlogDetails from "./components/BlogDetails";
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

   componentWillUnmount() {
      this.setState({
         token: ''
      })
   }

   render() {
      const { token } = this.state;
      return ( 
            <div className="App">
                  <Navbar />
                  <ToastContainer />
                  {token && !document.location.href.includes('chat') && !document.location.href.includes('profile') && !document.location.href.includes('dashboard') &&
                  !document.location.href.includes('blogs') && 
                  !document.location.href.includes('blog') && <SearchBox />}
                  <Switch>
                     {/* <Redirect from="/" to="/auth" exact /> */}
                     <Route exact path="/" component={CardsRecent} />
                     <Route exact path="/cards/:id" component={withAuth(Cards)} />
                     <Route path="/blogs" component={BlogHome} />
                     <Route path="/blog/:id" component={BlogDetails} />
                     <Route path="/cards/card/:id" component={Card} />
                     <Route path="/auth" component={LoginForm} />
                     <Route path="/register" component={Register} />
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

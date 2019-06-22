import styles from "./Profile.scss";
import React, { Component } from "react";
import jwt from "jsonwebtoken";
import {Link} from "react-router-dom";
import Toast from "../Toast/Toast";

export default class Profile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: null
      };
   }

   componentDidMount() {
      const token = window.localStorage.getItem("token");
      const user = jwt.decode(token);
      this.setState({
         user: user
      });
      document.title = 'My Profile';
   }

   handleLogout = () => {
      window.localStorage.clear();
      Toast.success('Logged out');
      this.props.history.push('/auth');
   }

   render() {
      const { user } = this.state;
      return (
         <div className="profile-item-container">
            <div className="profile-item-left">
               {user && user.avatarPicture && <img
                  // src="https://cdn-images-1.medium.com/max/1200/1*04AytyejhdInMFZme7p88w.png"
                  src={user.avatarPicture}
                  alt="Profile Picture"
                  />}
            </div>
            <div className="profile-item-right">
               <div className="profile-title">
                 {user && user.name && (
                  <p className="profile-item-name">{user.name}</p>
                  )} 
                  {user && user.isAdmin && (
                     <p className="profile-item-isVip">VIP</p>
                     )}
               </div>
               {user && user.email && (
                  <p className="profile-item-email">{user.email}</p>
                  )}
               {user && user.score !== null && (
                  <p className="profile-item-score"><span>{user.score}</span> Points</p>
                  )}
               {user && (
                     <p className="profile-item-manage"><Link to='/dashboard/stats'>Manage cards</Link></p>
               )}
               {user && (
                  <p onClick={this.handleLogout} className="profile-item-logout"><Link to='/'>Log out</Link></p>
               )}
            </div>
         </div>
      );
   }
}

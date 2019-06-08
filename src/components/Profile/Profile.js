import styles from "./Profile.scss";
import React, { Component } from "react";
import jwt from "jsonwebtoken";

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
   }

   render() {
      const { user } = this.state;
      return (
         <div className="profile-item-container">
            <div className="profile-item-left">
               <img
                  src="https://cdn-images-1.medium.com/max/1200/1*04AytyejhdInMFZme7p88w.png"
                  alt="Profile Picture"
               />
            </div>
            <div className="profile-item-right">
               {user && user.name && (
                  <p className="profile-item-name">{user.name}</p>
               )}
               {user && user.email && (
                  <p className="profile-item-email">{user.email}</p>
               )}
               {user && user.isAdmin && (
                  <p className="profile-item-isVip">VIP</p>
               )}
            </div>
         </div>
      );
   }
}

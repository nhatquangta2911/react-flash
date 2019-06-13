import styles from "./DashBoardEditProfile.scss";
import React, { Component } from "react";
import jwt from "jsonwebtoken";

export default class DashBoardEditProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: null
      };
   }

   componentDidMount() {
      this.setState({
         user: jwt.decode(window.localStorage.getItem("token"))
      });
   }

   componentWillReceiveProps() {
      this.setState({
         user: jwt.decode(window.localStorage.getItem("token"))
      });
   }

   render() {
      const { user } = this.state;
      return (
         <div className="dashboard-edit-profile-container">
            <p className="dashboard-edit-profile-title">Edit Profile</p>
            {user && <div className="">
               <input
                  type="text"
                  placeholder="Name"
                  id="context"
                  value={user.name}
               />
            </div>}
            {user && <div className="">
               <input                  type="text"
                  placeholder="Email"
                  id="type"
                  value={user.email}
                  disabled
               />
            </div>}
            <div className="dashboard-edit-profile-button">
               <p className="dashboard-edit-profile-button-cancel">Cancel</p>
               <p className="dashboard-edit-profile-button-edit">Edit</p>
            </div>
         </div>
      );
   }
}

import styles from "./DashBoardEditProfile.scss";
import React, { Component } from "react";
import jwt from "jsonwebtoken";
import Loading from "../Loading/Loading";

export default class DashBoardEditProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         user: null
      };
   }

   componentDidMount() {
      this.setState({
         isLoading: false,
         user: jwt.decode(window.localStorage.getItem("token"))
      });
   }

   componentWillReceiveProps() {
      this.setState({
         isLoading: false,
         user: jwt.decode(window.localStorage.getItem("token"))
      });
   }

   render() {
      const { isLoading, user } = this.state;
      return (
         <div className="dashboard-edit-profile-container">
            {isLoading && <Loading message="Loading your profile..." />}
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

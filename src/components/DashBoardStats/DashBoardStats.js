import styles from "./DashBoardStats.scss";
import React, { Component } from "react";
import CardApi from "../../api/CardApi";
import UserApi from "../../api/UserApi";
import { Link } from "react-router-dom";

export default class DashBoardStats extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         isError: false,
         totalCards: "",
         totalNotRememberedCards: "",
         totalUsers: ""
      };
   }

   componentDidMount() {
      CardApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               totalCards: res.data.length,
               totalNotRememberedCards: res.data.filter(c => !c.isRemember)
                  .length
            });
         })
         .catch(err => {
            this.setState({
               isError: true
            });
         });
      UserApi.list()
         .then(res => {
            this.setState({
               totalUsers: res.data.length
            });
         })
         .catch(err => {
            this.setState({
               totalUsers: 0
            });
         });
   }

   componentWillReceiveProps() {
      CardApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               totalCards: res.data.length,
               totalNotRememberedCards: res.data.filter(c => !c.isRemember)
                  .length
            });
         })
         .catch(err => {
            this.setState({
               isError: true
            });
         });
      UserApi.list()
         .then(res => {
            this.setState({
               totalUsers: res.data.length
            });
         })
         .catch(err => {
            this.setState({
               totalUsers: 0
            });
         });
   }

   render() {
      const {
         isLoading,
         isError,
         totalCards,
         totalNotRememberedCards,
         totalUsers
      } = this.state;
      return (
         <div>
            {isError && <p>Something went wrong</p>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && !isError && (
               <div className="dashboard-stats-container">
                  <div className="dashboard-stats-total-cards">
                     <Link to="/dashboard/all-cards">
                        <p className="dashboard-title-number">{totalCards}</p>
                     </Link>
                     <p>Total</p>
                  </div>
                  <div className="dashboard-stats-total-not-remembered-cards">
                     <p className="dashboard-title-number">
                        {totalNotRememberedCards}
                     </p>
                     <p>Not Remember</p>
                  </div>
                  <div className="dashboard-stats-total-users">
                     <p className="dashboard-title-number">{totalUsers}</p>
                     <p>Users</p>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

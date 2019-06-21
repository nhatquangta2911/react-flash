import styles from "./DashBoardStats.scss";
import React, { Component } from "react";
import CardApi from "../../api/CardApi";
import UserApi from "../../api/UserApi";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';

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

   handleClickToTotalCards = () => {
      this.props.history.push('/dashboard/all-cards');
   }

   handleClickToCardsNotRemembered = () => {
      this.props.history.push('/dashboard/all-cards-not-remembered');
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
            {isLoading && <Loading message="Waiting for getting data..."/>}
            {!isLoading && !isError && (
               <div className="dashboard-stats-container">
                  <div onClick={this.handleClickToTotalCards} className="dashboard-stats-total-cards">
                        <p className="dashboard-title-number">{totalCards}</p>
                        <p>Total</p>
                  </div>
                  <div onClick={this.handleClickToCardsNotRemembered} className="dashboard-stats-total-not-remembered-cards">
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

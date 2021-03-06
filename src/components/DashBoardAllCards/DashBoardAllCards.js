import styles from "./DashBoardAllCards.scss";
import React, { Component } from "react";
import CardApi from "../../api/CardApi";
import { Link } from "react-router-dom";
import Toast from "../Toast/Toast";
import jwt from "jsonwebtoken";
export default class DashBoardAllCards extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         cards: "",
         isError: false
      };
   }

   componentDidMount() {
      CardApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               cards: res.data
            });
         })
         .catch(err => {});
      document.title = "Manage All Cards";
   }

   componentWillReceiveProps() {
      CardApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               cards: res.data
            });
         })
         .catch(err => {});
      document.title = "Manage All Cards";
   }

   handleDelete = (id) => {
      const token = window.localStorage.getItem('token');
      CardApi.delete(id, token)
         .then(res => {
            this.props.history.push('/dashboard/all-cards');
            Toast.success('Deleted');
         })
         .catch(err => {
            this.setState({
               isError: true
            });
            Toast.error('You can not delete this card.');
         })
   }

   render() {
      const { isLoading, cards, isError } = this.state;
      const cardsResult =
         cards &&
         cards.map(c => (
            <div className="dashboard-all-cards-item" key={c._id}>
               <Link to={{pathname: '/dashboard/cards/card/' + c._id}}>
                  <div className="dashboard-all-cards-item-left">
                     <p className="dashboard-all-cards-item-left-english-title">
                        {c.englishTitle}
                     </p>
                     <p className="dashboard-all-cards-item-left-vietnamese-title">
                        {c.vietnameseTitle}
                     </p>
                  </div>
               </Link>
               <div className="dashboard-all-cards-item-right">
                  <Link to={{pathname: '/dashboard/edit/' + c._id}}>
                     <p className="dashboard-all-cards-item-right-edit">EDIT</p>
                  </Link>
                  {jwt.decode(window.localStorage.getItem('token')).isAdmin && <p onClick={() => this.handleDelete(c._id)} className="dashboard-all-cards-item-right-delete">
                     Delete
                  </p>}
               </div>
            </div>
         ));
      return (
         <div className="dashboard-all-cards-container">
            <div className="dashboard-all-cards-header">
               {cards && <p className="dashboard-all-cards-header-title"><span id="number-title">{cards.length} </span>Cards in total</p>}
               <Link to="/dashboard/add">
                  <p className="dashboard-all-cards-header-add-new">
                     Add New Card
                  </p>
               </Link>
            </div>
            {isLoading && <p>Loading...</p>}
            {cardsResult}
         </div>
      );
   }
}

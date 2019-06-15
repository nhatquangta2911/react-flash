import styles from "./DashBoardAllCards.scss";
import React, { Component } from "react";
import CardApi from "../../api/CardApi";
import { Link } from "react-router-dom";
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

   render() {
      const { isLoading, cards } = this.state;
      const cardsResult =
         cards &&
         cards.map(c => (
            <div className="dashboard-all-cards-item" key={c._id}>
               <Link to={{pathname: '/dashboard/edit/' + c._id}}>
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
                  <p className="dashboard-all-cards-item-right-delete">
                     Delete
                  </p>
               </div>
            </div>
         ));
      return (
         <div className="dashboard-all-cards-container">
            <div className="dashboard-all-cards-header">
               <p className="dashboard-all-cards-header-title">All Cards</p>
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

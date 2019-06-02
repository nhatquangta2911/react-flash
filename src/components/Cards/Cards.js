import styles from "./Cards.scss";
import React, { Component } from "react";
import Card from "../Cards/Card";
import CardApi from "../../api/CardApi";

export default class Cards extends Component {
   constructor(props) {
      super(props);
      this.state = {
         cards: null,
         isError: false
      };
   }

   componentDidMount() {
      CardApi.list()
         .then(res => {
            this.setState({
               cards: res.data
            });
         })
         .catch(() => {
            this.setState({
               isError: true
            });
         });
   }

   render() {
      const { cards, isError } = this.state;
      const listCards = cards && cards.map(card => (
         <div className="cards-item" key={card._id}>
            <p>{card.englishTitle}</p>
            <p>{card.vietnameseTitle}</p>
            <p>{card.example}</p>
            <p>{card.type}</p>
            <p>{card.context}</p>
            <p>{card.dateCreated}</p>
            <p>{card.isRemember}</p>
            <p>{card.image}</p>
         </div>
      ));
      return (
         <div className="card-page-container">
            {isError && <p>Something went wrong...</p>}
            {listCards}
         </div>
      );
   }
}

import styles from "./Cards.scss";
import React, { Component } from "react";
import Card from "../Cards/Card";
import CardApi from "../../api/CardApi";
import {Link} from "react-router-dom";
import { toCardLink } from "../../utils/Link";

export default class Cards extends Component {
   constructor(props) {
      super(props);
      this.state = {
         cards: null,
         isError: false
      };
   }

   componentDidMount() {
      CardApi.getRecent()
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
         <Link to={toCardLink(card._id)}>
         <div className="card-item" key={card._id}>
            <h3>{card.englishTitle}</h3>
            <p>{card.example}</p>
         </div>
         </Link>
      ));
      return (
         <div className="card-page-container">
            {isError && <p>Something went wrong...</p>}
            {listCards}
         </div>
      );
   }
}

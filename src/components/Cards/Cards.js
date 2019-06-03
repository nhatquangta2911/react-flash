import styles from "./Cards.scss";
import React, { Component } from "react";
import Card from "../Cards/Card";
import CardApi from "../../api/CardApi";
import { Link } from "react-router-dom";
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
      const listCards =
         cards &&
         cards.map(card => (
            <div className="cards-item" key={card._id}>
               <Link to={toCardLink(card._id)}>
                  <h4 className="hide-item">{card.englishTitle}</h4>
                  <h5>{card.vietnameseTitle}</h5>
               </Link>
                  <p className="type">{card.type}</p>
                  <img src={card.image} alt={card.englishTitle} />
                  <p className="hide-item">{card.example}</p>
                  <p className="hide-item">{card.context}</p>
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

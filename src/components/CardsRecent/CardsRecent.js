import styles from "./CardsRecent.scss";
import React, { Component } from "react";
import Card from "../Cards/Card";
import CardApi from "../../api/CardApi";
import { Link } from "react-router-dom";
import { toCardLink } from "../../utils/Link";
import Loading from "../Loading/Loading";

export default class Cards extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         cards: null,
         isError: false
      };
   }

   componentDidMount() {
      CardApi.getRandom()
         .then(res => {
            this.setState({
               isLoading: false,
               cards: res.data
            });
         })
         .catch(() => {
            this.setState({
               isError: true
            });
         });
      document.title = 'Random cards';
  }

   render() {
      const { isLoading, cards, isError } = this.state;
      const listCards =
         cards &&
         cards.map(card => (
            <div className="cards-item" key={card._id}>
             {card.isRemember && (
                <div className="flashcards-random-is-remember">
                 <Link to={toCardLink(card._id)}>
                  <h4 className="hide-item">{card.englishTitle}</h4>
                  <h5>{card.vietnameseTitle}</h5>
               </Link>
                  <p className="type">{card.type}</p>
                  <img src={card.image} alt={card.englishTitle} />
                  <p className="hide-item">{card.example}</p>
                  <p className="hide-item">{card.context}</p>
                </div>
             )}  
             {!card.isRemember && (
                <div>
                 <Link to={toCardLink(card._id)}>
                  <h4 className="hide-item">{card.englishTitle}</h4>
                  <h5>{card.vietnameseTitle}</h5>
               </Link>
                  <p className="type">{card.type}</p>
                  <img src={card.image} alt={card.englishTitle} />
                  <p className="hide-item">{card.example}</p>
                  <p className="hide-item">{card.context}</p>
                </div>
             )}
             
            </div>
         ));
      return (
         <div className="cards-page-container">
            {isLoading && <Loading message="Loading 4 random cards..." />}
            {isError && <p>Something went wrong...</p>}
            {listCards}
         </div>
      );
   }
}

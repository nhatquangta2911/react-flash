import styles from "./Cards.scss";
import React, { Component } from "react";
import Card from "../Cards/Card";
import CardApi from "../../api/CardApi";
import { Link } from "react-router-dom";
import { toCardLink } from "../../utils/Link";
import SearchBox from "../SearchBox/SearchBox";
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
      CardApi.list()
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
      document.title = 'All Flashcards';
   }

   render() {
      const { isLoading, cards, isError } = this.state;
      const listCards =
         cards &&
         cards.map(card => (
            <div className="flashcards-item" key={card._id}>
              
               {card.isRemember && (
               <div className="flashcards-is-remember">
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
         <div className="flashcards-page-container">
            {isLoading && <Loading message="Loading all cards..." />}
            {isError && <p>Something went wrong...</p>}
            {listCards}
         </div>
      );
   }
}

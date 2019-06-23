import styles from "./CardsRecent.scss";
import React, { Component } from "react";
import Card from "../Cards/Card";
import CardApi from "../../api/CardApi";
import { Link } from "react-router-dom";
import { toCardLink } from "../../utils/Link";
import Loading from "../Loading/Loading";
import { Parallax as ParallaxUI } from "react-materialize";

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
               <div className="flashcards-item" key={card._id}>
                  {card.isRemember && (
                     <Link to={toCardLink(card._id)}>
                        <div className="flashcards-is-remember">
                           <p className="hide-item card-englishTitle">
                              {card.englishTitle}
                           </p>
                           <p className="card-vietnameseTitle">{card.vietnameseTitle}</p>
                           {/* <p className="type">{card.type}</p> */}
                           <img src={card.image} alt={card.englishTitle} />
                           <p className="hide-item card-example">{card.example}</p>
                           {/* <p className="hide-item">{card.context}</p> */}
                        </div>
                     </Link>
                  )}
   
                  {!card.isRemember && (
                     <Link to={toCardLink(card._id)}>
                        <div className="flashcards-is-not-remembered">
                           <p className="hide-item card-englishTitle">
                              {card.englishTitle}
                           </p>
                           <p className="card-vietnameseTitle">{card.vietnameseTitle}</p>
                           {/* <p className="type">{card.type}</p> */}
                           <img src={card.image} alt={card.englishTitle} />
                           <p className="hide-item card-example">{card.example}</p>
                           {/* <p className="hide-item">{card.context}</p> */}
                        </div>
                     </Link>
                  )}
               </div>
         ));
      return (
         <div>
         <ParallaxUI image={<img id="parallax-image" src="https://images.template.net/wp-content/uploads/2016/11/16135851/Cartoon-Gif-Animated1.gif"/>} />
         {/* <div>4 Random Cards</div> */}
         <p className="super-title">Make your own cards <span><img src="https://img.icons8.com/cotton/2x/bank-card-back-side.png"/></span></p>
         <div className="cards-page-container">
            {isLoading && <Loading message="Loading 4 random cards..." />}
            {listCards}
         </div>
         <ParallaxUI image={<img id="parallax-image" src="https://images.template.net/wp-content/uploads/2016/11/16135851/Cartoon-Gif-Animated1.gif"/>} />    
         </div>
      );
   }
}

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
            <div className="cards-item" key={card._id}>
             {card.isRemember && (
                <div className="flashcards-random-is-remember">
                 <Link to={{pathname: `/cards/card/${card._id}`}}>
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
                 <Link to={{pathname: `/cards/card/${card._id}`}}>              
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
         <div>
         <ParallaxUI image={<img id="parallax-image" src="https://images.template.net/wp-content/uploads/2016/11/16135851/Cartoon-Gif-Animated1.gif"/>} />
         {/* <div>4 Random Cards</div> */}
         <div className="cards-page-container">
            {isLoading && <Loading message="Loading 4 random cards..." />}
            {listCards}
         </div>
         <ParallaxUI image={<img src="https://img1.akspic.com/image/123021-geometric_shape-cube-blue-triangle-light_blue-3840x2160.jpg"/>} />         
         </div>
      );
   }
}

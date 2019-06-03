import styles from "./Card.scss";
import React, { Component } from "react";
import { getIdBySplitingPath } from "../../../utils/Link";
import CardApi from "../../../api/CardApi";
export default class Card extends Component {
   constructor(props) {
      super(props);
      this.state = {
         card: null,
         isError: null,
         isError404: null
      };
   }

   componentDidMount() {
      var uri = document.location.href;
      var id = getIdBySplitingPath(uri, 'cards/card/');
         CardApi.get(id)
         .then(res => {
            this.setState({
               card: res.data
            });
            document.title = this.state.card.englishTitle;
         })
         .catch(err => {
            this.setState({
               isError: true
            });
         });
      }
   

   render() {
      const { card, isError, isError404 } = this.state;
      return (
         <div className="card-item-container">
            {isError && <p>Something Failed.</p>}
            {isError404 && <p>Not Found.</p>}
            {card && (
               <div className="card-item">
                  <h3>{card.englishTitle}</h3>
                  <h5>{card.vietnameseTitle}</h5>
                  <p>{card.type}</p>
                  <img src={card.image} alt={card.englishTitle} />
                  <p>{card.example}</p>
                  <h5>{card.context}</h5>
                  {/* <p>{card[0].dateCreated}</p> */}
                  {/* <p>{card[0].isRemember}</p> */}
               </div>
            )}
         </div>
      );
   }
}

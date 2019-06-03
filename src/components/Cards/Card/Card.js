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
      CardApi.getRandom()
         .then(res => {
            this.setState({
               card: res.data
            });
            document.title = this.state.card[0].englishTitle;
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
            {card && card[0] && (
               <div className="card-item">
                  <h3>{card[0].englishTitle}</h3>
                  <h5>{card[0].vietnameseTitle}</h5>
                  <img src={card[0].image} alt={card[0].englishTitle} />
                  <p>{card[0].example}</p>
                  {/* <p>{card[0].type}</p> */}
                  <p>{card[0].context}</p>
                  {/* <p>{card[0].dateCreated}</p> */}
                  {/* <p>{card[0].isRemember}</p> */}
               </div>
            )}
         </div>
      );
   }
}

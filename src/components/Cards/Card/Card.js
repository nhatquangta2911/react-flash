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
      // try {
      // var uri = document.location.href;
      // var id = getIdBySplitingPath(uri, "cards/random/");
      // if (!isNaN(id)) {
      CardApi.getRandom()
         .then(res => {
            this.setState({
               card: res.data
            });
            // document.title = card.englishTitle;
         })
         .catch(err => {
            this.setState({
               isError: true
            });
         });
      // }
      // } catch (err) {
      //    this.setState({
      //       isError404: true
      //    });
      // }
   }

   render() {
      const { card, isError, isError404 } = this.state;
      return (
         <div className="card-item-container">
            {isError && <p>Something Failed.</p>}
            {isError404 && <p>Not Found.</p>}
            <p>CARD ITEM</p>
            {card && (
               <div className="card-item">
                  <p>{card.englishTitle}</p>
                  <p>{card.vietnameseTitle}</p>
                  <p>{card.example}</p>
                  <p>{card.type}</p>
                  <p>{card.context}</p>
                  <p>{card.dateCreated}</p>
                  <p>{card.isRemember}</p>
                  <p>{card.image}</p>
               </div>
            )}
         </div>
      );
   }
}

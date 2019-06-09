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
      const uri = document.location.href;
      const id = getIdBySplitingPath(uri, 'cards/');
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
            console.log(err);
         });
      }

      componentDidUpdate() {
         const uri = document.location.href;
         const id = getIdBySplitingPath(uri, 'cards/');
            CardApi.get(id)
            .then(res => {
               this.setState({
                  card: res.data
               });
               // document.title = this.state.card.englishTitle;
            })
            .catch(err => {
               this.setState({
                  isError: true
               });
               console.log(err);
            });
         }

      handleChange = () => {  
         const newCard = {
            _id: this.state.card._id,
            englishTitle: this.state.card.englishTitle,
            vietnameseTitle: this.state.card.vietnameseTitle,
            image: this.state.card.image,
            example: this.state.card.example,
            type: this.state.card.type,
            context: this.state.card.context,
            isRemember: !this.state.card.isRemember
         }
         const token = window.localStorage.getItem('token');
         CardApi.update(newCard, token)
            .then(res => {
               this.setState({
                  card: res.data
               });
               console.log(res.data);
               document.title = this.state.card.englishTitle;
            })
            .catch(err => {
               this.setState({
                  isError: true
               });
               console.log(err);
            });
      }

   render() {
      const { card, isError, isError404 } = this.state;
      return (
         <div className="card-item-container">
            {isError && <p>Something Failed.</p>}
            {isError404 && <p>Not Found.</p>}
            {card && !card.isRemember && (
               <div className="cards-item">
                  <h3>{card.englishTitle}</h3>
                  <h5>{card.vietnameseTitle}</h5>
                  <p className="type">{card.type}</p>
                  <img src={card.image} alt={card.englishTitle} />
                  <p>{card.example}</p>
                  <h5>{card.context}</h5>
                  <p onClick={this.handleChange} className="is-not-remember">Not remembered yet</p>
               </div>
            )}
             {card && card.isRemember && (
               <div className="cards-item">
                  <h3>{card.englishTitle}</h3>
                  <h5>{card.vietnameseTitle}</h5>
                  <p className="type">{card.type}</p>
                  <img src={card.image} alt={card.englishTitle} />
                  <p>{card.example}</p>
                  <h5>{card.context}</h5>
                  <p onClick={this.handleChange} className="is-remember">Remembered</p>
               </div>
            )}
         </div>
      );
   }
}

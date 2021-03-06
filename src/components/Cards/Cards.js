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
         pageNumber: document.location.href.split("cards/")[1],
         totalPages: "",
         isLoading: true,
         cards: null,
         isError: false
      };
   }

   componentDidMount() {
      CardApi.getByPage(this.state.pageNumber)
         .then(res => {
            this.setState({
               isLoading: false,
               cards: res.data.cards,
               totalPages: res.data.numberOfPages
            });
         })
         .catch(() => {
            this.setState({
               isError: true
            });
         });
      document.title = "All Flashcards";
   }

   // componentWillReceiveProps() {
   //    this.setState({
   //       pageNumber: document.location.href.split("cards/")[1]
   //    });
   //    CardApi.getByPage(this.state.pageNumber)
   //       .then(res => {
   //          this.setState({
   //             isLoading: false,
   //             cards: res.data.cards,
   //             totalPages: res.data.numberOfPages
   //          });
   //       })
   //       .catch(() => {
   //          this.setState({
   //             isError: true
   //          });
   //       });
   //    document.title = "All Flashcards";
   // }  

   render() {
      const { pageNumber, totalPages, isLoading, cards, isError } = this.state;
      const pagination = (
         <div className="pagination-container">
            {pageNumber && pageNumber > 1 && (
               <Link
                  to={{ pathname: `${parseInt(this.state.pageNumber) - 1}` }}
               >
                  <span className="pagination-item">Prev</span>
               </Link>
            )}

            {pageNumber && pageNumber != 1 && (
               <Link
                  to={{
                     pathname: `${pageNumber - 5 > 1 ? pageNumber - 5 : 1}`
                  }}
               >
                  <span className="pagination-item">..</span>
               </Link>
            )}

            {pageNumber &&
               totalPages &&
               Array.from(Array(totalPages), (x, index) => index + 1)
                  .map(
                     p =>
                        p && (
                           <Link to={p && { pathname: `${p}` }} key={p}>
                              {p && pageNumber && p == pageNumber && (
                                 <span className="pagination-item-now-on">
                                    {p}
                                 </span>
                              )}
                              {p && pageNumber && p != pageNumber && (
                                 <span className="pagination-item">{p}</span>
                              )}
                           </Link>
                        )
                  )
                  .splice(pageNumber - 1, 5)}

            {pageNumber && pageNumber <= totalPages - 5 && (
               <Link to={{ pathname: `${parseInt(pageNumber) + 5}` }}>
                  <span className="pagination-item">..</span>
               </Link>
            )}

            {pageNumber && pageNumber < totalPages && (
               <Link
                  to={{ pathname: `${parseInt(this.state.pageNumber) + 1}` }}
               >
                  <span className="pagination-item">Next</span>
               </Link>
            )}
         </div>
      );
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
         <div className="flashcards-page-wrapper">
            {pagination}
            <div className="flashcards-page-container">
               {isLoading && <Loading message="Loading all cards..." />}
               {listCards}
            </div>
         </div>
      );
   }
}

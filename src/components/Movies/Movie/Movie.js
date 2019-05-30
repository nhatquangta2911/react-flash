import React, { Component } from "react";
import styles from "./Movie.scss";
import MovieApi from "../../../api/MovieApi";

export default class Movie extends Component {
   constructor(props) {
      super(props);
      this.state = {
         movie: null,
         isError: false
      };
   }

   componentDidMount() {
      MovieApi.get("5ced4e4ccfb01700170141d7")
         .then(res => {
            this.setState({
               movie: res.data
            });
         })
         .catch(err => {
            this.setState({
               isError: true
            });
         });
   }

   render() {
      const { movie, isError } = this.state;
      console.log(movie);
      const genreList =
         movie &&
         movie.genre &&
         movie.genres.map(genre => <li>{genre.name}</li>);
      return (
         movie && (
            <div className="movie-item">
               <p>{movie.title}</p>
               <p>{movie.numberInStock}</p>
               <p>{movie.dailyRentalRate}</p>
               <ul>{genreList}</ul>
            </div>
         )
      );
   }
}

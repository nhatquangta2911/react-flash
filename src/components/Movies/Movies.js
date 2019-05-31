import React, { Component } from 'react'
import styles from './Movies.scss';
import Movie from './Movie/Movie';

export default class Movies extends Component {
   
   constructor(props) {
      super(props);
      
   }

   render() {
      return (
         <div className="movies-container">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
         </div>
      )
   }
}

import styles from './Loading.scss';
import React, { Component } from 'react'

export default class Loading extends Component {
  
   constructor(props) {
      super(props);
      this.state = {
         message: this.props.message
      }
   }

   render() {
      const { message } = this.state;
      return (
         <div className="loading-container">
            <img src="https://shop.coppercolorado.com/bundles/spotliowebappfront/coppercolorado/images/ajax-loader.gif"/>
            <p>{message}</p>
         </div>
      )
   }
}

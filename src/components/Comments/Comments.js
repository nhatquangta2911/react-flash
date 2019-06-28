import styles from './Comments.scss';
import React, { Component } from 'react'
import Loading from '../Loading';

export default class Comments extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         comments: ''
      }
   }

   componentDidMount() {
      this.setState({
         isLoading: false,
         comments: this.props.comments
      })
   }

   render() {
      const { isLoading, comments } = this.state;
      return (
         <div className="comments-container">
            {isLoading && <Loading message="Loading comments..."/>}
            {!isLoading && <p className="comments-header">{comments}</p>}
         </div>
      )
   }
}

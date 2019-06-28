import styles from './Comments.scss';
import React, { Component } from 'react'
import Loading from '../Loading';
import CommentApi from '../../api/CommentApi';
import Toast from '../Toast/Toast';
import {Link} from 'react-router-dom';

export default class Comments extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         ofPost: document.location.href.split('blog/')[1],
         comments: ''
      }
   }

   componentDidMount() {
     CommentApi.getComments(this.state.ofPost)
         .then(res => {
            this.setState({
               isLoading: false,
               comments: res.data
            });
         })
         .catch(err => {
            Toast.error('Something went wrong. Please try again!');
         })
   }

   render() {
      const { isLoading, ofPost, comments } = this.state;
      const commentsResult = comments && comments.map(comment => (
         <div>
            <p>{comment && comment.content}</p>
         </div>
      ));
      return (
         <div className="comments-container">
            {isLoading && <Loading message="Loading comments..."/>}
            {!isLoading && comments && <div className="comments-header">{commentsResult}</div>}
         </div>
      )
   }
}

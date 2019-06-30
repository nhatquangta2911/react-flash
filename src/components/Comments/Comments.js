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
         comments: ''
      }
   }

   componentDidMount() {
     const ofPost = document.location.href.split('blog/')[1]; 
     CommentApi.getComments(ofPost)
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

   componentWillReceiveProps() {
     const ofPost = document.location.href.split('blog/')[1]; 
     CommentApi.getComments(ofPost)
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
      const { isLoading, comments } = this.state;
      const commentsResult = comments && comments.map(comment => (
         <div className="comments-item" key={comment.length > 0 && comment._id}>
            <p className="comments-user"><Link to={{ pathname: `/feed/${comment.user && comment.user._id}` }}>{comment.user && comment.user.name}</Link>  <span>| {comment.dateCreated && comment.dateCreated.split('T')[0] + ' - ' + comment.dateCreated.split('T')[1].split('.')[0]}</span></p>
            <p className="comments-content">{comment && comment.content}</p>
         </div>
      ));
      return (
         <div className="comments-container">
            {isLoading && <Loading message="Loading comments..."/>}
            {!isLoading && comments && <div className="comments-header"><p className="comments-title">Comments ({comments && comments.length})</p>
            {commentsResult}</div>}
         </div>
      )
   }
}

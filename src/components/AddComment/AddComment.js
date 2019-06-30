import styles from './AddComment.scss';
import React, { Component } from 'react';
import Toast from '../Toast';
import BlogApi from '../../api/BlogApi';

export default class AddComment extends Component {

   constructor(props){
      super(props);
      this.state = {
         content: ''
      }
   }

   handleChange = (event) => {
      this.setState({
         content: event.target.value
      });
   }

   handleSubmit = () => {
      if(this.state.content.length < 10) {
         this.setState({
            content: ''
         });
         Toast.notify('Leave a comment has at least 10 characters. Please try again!');
      } else {
      BlogApi.addComment(this.state.content, this.props.post,window.localStorage.getItem('token'))
         .then(res => {
            window.location.reload();
            Toast.success('Added your comment.');
         })
         .catch(err => {
            Toast.error('Something went wrong. Please try again!');
         });
      }
   }

   render() {
      const { content } = this.state;
      console.log(content);
      return (
         <div className="add-comment-container">
            <p>Leave a comment</p>
            <input
               type="text"
               placeholder="Type here..."
               value={this.state.content}
               onChange={this.handleChange}
            />
            <p onClick={this.handleSubmit} className="btn-send-comment">Send</p>
         </div>
      )
   }
}

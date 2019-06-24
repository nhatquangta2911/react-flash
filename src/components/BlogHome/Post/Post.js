import styles from './Post.scss';
import React, { Component } from 'react'
import Loading from '../../Loading';

export default class Post extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true, 
         post: ''
      }
   }

   componentDidMount() {
      this.setState({
         isLoading: false,
         post: this.props.post
      })
   }

   render() {
      const { isLoading, post } = this.state;
      return (
         <div className="post-item-container" key={post._id}>
            {isLoading && <Loading />}
            <p>{post.title}</p>
            <p>{post.header}</p>
            <p>{post.content}</p>
            <p>{post.views} views</p>
            <p>{post.likes && post.likes.length} likes</p>
            <p>by {post.user && post.user.name}</p>
            <p>at {post.dateCreated}</p>
         </div>
      )
   }
}

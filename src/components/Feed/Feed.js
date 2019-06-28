import styles from './Feed.scss';
import React, { Component } from 'react'
import BlogApi from '../../api/BlogApi';
import Toast from 'react-materialize/lib/Toast';
import Post from '../BlogHome/Post/Post';
import jwt from 'jsonwebtoken';
import Loading from '../Loading';

export default class Feed extends Component {

   constructor(props) {
      super(props);
      this.state = {
         user: document.location.href.split('feed/')[1],
         isLoading: true,
         posts: ''
      }
   }

   componentDidMount() {
      BlogApi.getMy(this.state.user)
         .then(res => {
            this.setState({
               isLoading: false,
               posts: res.data
            });
         })
         .catch(err => {
            Toast.error('Something went wrong.');
         });
   }

   render() {
      const {user, isLoading, posts} = this.state;
      const userInfo = posts && posts[0] && posts[0].user;
      console.log(userInfo);
      return (
         <div className="feed-container">
            {isLoading && <Loading message="Loading post..."/>}
            {posts && posts.map(post => <Post post={post} key={post._id}/>)}
            {!isLoading && userInfo && userInfo.name && <div className="feed-info">
               <p>Hi I'm {userInfo.name} !</p>
            </div>}
            {!userInfo && <p>Nothing here. Come back later on.</p>}
         </div>
      )
   }
}

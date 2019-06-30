import styles from './PersonalBlog.scss';
import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import BlogApi from '../../api/BlogApi';
import Post from '../BlogHome/Post/Post';
import Loading from '../Loading';
import jwt from 'jsonwebtoken';

export default class PersonalBlog extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         posts: ''
      }
   }

   componentDidMount() {
      BlogApi.getMy(jwt.decode(window.localStorage.getItem('token'))._id)
         .then(res => {
            this.setState({
               isLoading: false,
               posts: res.data
            })
         })
   }

   render() {
      const {isLoading, posts} = this.state;
      return (
         <div className="personal-blog-container">
            <Profile />
            <div className="personal-blog-my">
               {isLoading && <Loading message="Loading..."/>}
               {posts && posts.length === 0 && <p>No posts yet</p>}
               {posts && posts.length !== 0 && posts.map(post => <Post post={post} key={post._id} />)}
            </div>
         </div>
      )
   }
}

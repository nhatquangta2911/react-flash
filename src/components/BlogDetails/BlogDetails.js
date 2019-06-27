import styles from './BlogDetails.scss';
import React, { Component } from 'react';
import BlogApi from '../../api/BlogApi';
import Loading from '../Loading';
import Post from '../BlogHome/Post/Post';

export default class BlogDetails extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         post: ''
      }
   }

   componentDidMount() {
      BlogApi.get(document.location.href.split('blog/')[1])
         .then(res => {
            this.setState({
               isLoading: false,
               post: res.data
            });
         })
         .catch(err => {});
   }

   render() {
      const {isLoading, post} = this.state;
      return (
         <div className="blog-details-container">
            {isLoading && <Loading message="Loading..." />}
            <Post post={post} key={post._id} extended={true}/>
         </div>
      )
   }
}

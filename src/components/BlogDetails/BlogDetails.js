import styles from './BlogDetails.scss';
import React, { Component } from 'react';
import BlogApi from '../../api/BlogApi';
import Loading from '../Loading';
import Post from '../BlogHome/Post/Post';
import Comments from '../Comments/Comments';

export default class BlogDetails extends Component {

   constructor(props) {
      super(props);
      this.state = {
         id: document.location.href.split('blog/')[1],
         isLoading: true,
         post: ''
      }
   }

   componentDidMount() {
      BlogApi.view(this.state.id)
         .then(res => {
            this.setState({
               isLoading: false,
               post: res.data
            });
         })
         .catch(err => {});
   }

   componentWillReceiveProps() {
      BlogApi.view(this.state.id)
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
            <Comments comments={post.comments} />
         </div>
      )
   }
}

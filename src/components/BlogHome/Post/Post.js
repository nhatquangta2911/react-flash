import styles from './Post.scss';
import React, { Component } from 'react'
import Loading from '../../Loading';
import BlogApi from '../../../api/BlogApi';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class Post extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         post: '',
         comments: ''
      }
   }

   componentDidMount() {
      BlogApi.getComments(this.props.post._id)
         .then(res => {
            this.setState({
               comments: res.data.length
            });
         });
      this.setState({
         isLoading: false,
         post: this.props.post
      });
   }

   componentWillReceiveProps() {
      BlogApi.getComments(this.props.post._id)
      .then(res => {
         this.setState({
            comments: res.data.length
         });
      });
      this.setState({
         isLoading: false,
         post: this.props.post
      });
   }

   render() {
      const { isLoading, post, comments } = this.state;
      const dateCreated = post && post.dateCreated;
      const dateResult = dateCreated.split('T')[0];
      const timeResult = dateCreated.split('T')[1] && dateCreated.split('T')[1].split('.')[0];
      return (
         <div className="post-item-container" key={post._id}>
            {isLoading && <Loading />}
            <img className="post-item-image-title" src={post.image}/>
            <div className="post-item-wrapper">
               <p className="post-item-title">{post.title}</p>
               <div className="post-item-info">
                  <img src={post.user && post.user.avatarPicture}></img>
                  <div className="post-item-info-right">
                     <p className="post-item-info-username">{post.user && post.user.name}</p>
                     <p className="post-item-info-datetime">{dateResult} | {timeResult}</p>
                  </div>
               </div>
               {/* <p>{post.content}</p> */}
               <div className="post-item-header">{ReactHtmlParser(post.content)}</div>
               <div className="post-item-stats">
                  <p><span>{post.views}</span> views</p>
                  <p><span id="like">{post.likes && post.likes.length}</span> likes</p>
                  <p><span>{comments && comments}</span> comments</p>
               </div>
               <div className="post-item-tags">
                  <span>Tags: </span> {post.tags && post.tags.map(post => <p className="post-item-tag" key={post._id}>{post.name}</p>)}
               </div>
            </div>
         </div>
      )
   }
}

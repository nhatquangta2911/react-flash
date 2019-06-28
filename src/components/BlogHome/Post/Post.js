import styles from "./Post.scss";
import React, { Component, Fragment } from "react";
import Loading from "../../Loading";
import BlogApi from "../../../api/BlogApi";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import jwt from 'jsonwebtoken';
import Toast from "../../Toast/Toast";

export default class Post extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         post: "",
         isNewest: "",
         isLike: "",
         extended: "",
         comments: ""
      };
   }

   componentDidMount() {
      BlogApi.getComments(this.props.post._id).then(res => {
         this.setState({
            comments: res.data.length
         });
      });
      this.setState({
         isLoading: false,
         post: this.props.post,
         isNewest: this.props.isNewest,
         isLike: this.props.post.likes && this.props.post.likes.includes(jwt.decode(window.localStorage.getItem('token'))._id),
         extended: this.props.extended
      });
   }

   componentWillReceiveProps() {
      BlogApi.getComments(this.props.post._id).then(res => {
         this.setState({
            comments: res.data.length
         });
      });
      this.setState({
         isLoading: false,
         post: this.props.post,
         isNewest: this.props.isNewest,
         isLike: this.props.post.likes && this.props.post.likes.includes(jwt.decode(window.localStorage.getItem('token'))._id),
         extended: this.props.extended
      });
   }


   handleLike = () => {
      BlogApi.like(this.state.post._id, window.localStorage.getItem('token'))
         .then(res => {
            Toast.success('You liked this post.');
         })
         .catch(err => {
            Toast.error('Something went wrong. Please try again!');
         });
         this.setState({
            islike: !this.state.isLike
         });
   }

   render() {
      const { isLoading, post, isNewest, isLike, extended, comments } = this.state;
      const dateCreated = post && post.dateCreated;
      const dateResult = dateCreated.split("T")[0];
      const timeResult =
         dateCreated.split("T")[1] && dateCreated.split("T")[1].split(".")[0];
      // const isLike = post && post.likes && post.likes.includes(jwt.decode(window.localStorage.getItem('token'))._id);
      return (
         <div>
            {isLoading && <Loading />}
            {!isLoading && (
               <div className="post-item-container" key={post._id}>
                  {isNewest && <span className="post-item-newest">NEW</span>}
                  <img className="post-item-image-title" src={post.image} />
                  <div className="post-item-wrapper">
                     <p className="post-item-title">{post.title}</p>
                     <div className="post-item-info">
                        <Link to={{ pathname: `/feed/${post.user && post.user._id}` }}>
                        <div className="post-item-info-left">
                           <img src={post.user && post.user.avatarPicture} />
                           <div className="post-item-info-right">
                              <p className="post-item-info-username">
                                 {post.user && post.user.name}
                              </p>
                              <p className="post-item-info-datetime">
                                 {dateResult} | {timeResult}
                              </p>
                           </div>
                        </div>
                        </Link>
                        {!extended && (
                           <Link to={{ pathname: `/blog/${post._id}` }}>
                              <p className="post-item-info-read-more">
                                 Read more
                              </p>
                           </Link>
                        )}
                     </div>
                     {/* <p>{post.content}</p> */}
                     <div className="post-item-header">{post.header}</div>
                     <div className="post-item-like-stats">
                        <div className="post-item-like">
                           {!isLike && <img onClick={this.handleLike} src="https://image.flaticon.com/icons/svg/1182/1182772.svg"/>}
                           {isLike && <img onClick={this.handleLike} src="https://image.flaticon.com/icons/svg/1182/1182721.svg"/>}                           
                        </div>
                        <div className="post-item-stats">
                           <p>
                              <span>{post.views}</span> views
                           </p>
                           <p>
                              <span id="like">
                                 {post.likes && post.likes.length}
                              </span>{" "}
                              likes
                           </p>
                           <p>
                              <span>{comments && comments}</span> comments
                           </p>
                        </div>
                     </div>
                     {extended && (
                        <div className="post-item-content">
                           {ReactHtmlParser(post.content)}
                        </div>
                     )}
                     <div className="post-item-tags">
                        <span>Tags: </span>{" "}
                        {post.tags &&
                           post.tags.map(post => (
                              <p className="post-item-tag" key={post._id}>
                                 {post.name}
                              </p>
                           ))}
                     </div>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

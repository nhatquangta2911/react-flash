import styles from "./DashBoardAllPosts.scss";
import React, { Component, Fragment } from "react";
import BlogApi from "../../api/BlogApi";
import Toast from "../Toast";
import jwt from "jsonwebtoken";
import Loading from "../Loading";
import { Link } from 'react-router-dom';

export default class DashBoardAllPosts extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         posts: ""
      };
   }

   handleDelete = (id) => {
      const token = window.localStorage.getItem('token');
      BlogApi.delete(id, token)
         .then(res => {
            document.location.reload();
            Toast.success('Deteted Post');
         })
         .catch(err => {
            Toast.error('Something went wrong. Please try again!');
         });
   }

   componentDidMount() {
      BlogApi.getMy(jwt.decode(window.localStorage.getItem("token"))._id)
         .then(res => {
            this.setState({
               isLoading: false,
               posts: res.data
            });
            document.title = "All Posts";
         })
         .catch(err => {
            Toast.error("Something went wrong. Please try again!");
         });
   }

   render() {
      const { isLoading, posts } = this.state;
      const listPosts =
         posts &&
         posts.map(post => (
            <div className="dashboard-all-posts-item" key={post._id}>
               <Link to={{ pathname: `blogs/blog/${post._id}` }}>
                  <p className="dashboard-all-posts-item-name">{post.title}</p>
               </Link>
               <div className="dashboard-all-posts-item-control">
                  <Link to={{ pathname: `/dashboard/editPost/${post._id}` }}>
                     <p className="dashboard-all-posts-item-edit">EDIT</p>
                  </Link>
                  <p onClick={() => this.handleDelete(post._id)} className="dashboard-all-posts-item-delete">DELETE</p>
               </div>
            </div>
         ));
      return (
         <Fragment>
            {isLoading && <Loading message="Loading your posts..." />}
            {!isLoading && <div className="dashboard-all-posts-container">
               <p className="dashboard-all-posts-title">All Posts ({posts && posts.length})</p>
               <div className="dashboard-all-posts-list">{listPosts}</div>
            </div>}
         </Fragment>
      );
   }
}

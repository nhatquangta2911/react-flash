import styles from "./BlogHome.scss";
import React, { Component } from "react";
import BlogApi from "../../api/BlogApi";
import Toast from "../Toast";
import Loading from "../Loading";
import Post from "./Post/Post";
import Tag from "./Tag/Tag";

export default class BlogHome extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         posts: ""
      };
   }

   componentDidMount() {
      BlogApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               posts: res.data
            });
            document.title = "Blog Page";
         })
         .catch(err => {
            Toast.error("Something went wrong. Please try again.");
         });
   }

   componentWillReceiveProps() {
      BlogApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               posts: res.data
            });
            document.title = "Blog Page";
         })
         .catch(err => {
            Toast.error("Something went wrong. Please try again.");
         });
   }

   render() {
      const { isLoading, posts } = this.state;
      return (
         <div className="blog-home-container">
            <div className="blog-home-left">
               {isLoading && <Loading message="Loading Posts..." />}
               {posts && posts.map(post => <Post post={post} key={post._id}/>)}
            </div>
            <div className="blog-home-right">
               <div className="blog-home-tags">
                  <Tag />
               </div>
               <div className="blog-home-chart">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
               </div>
            </div>
         </div>
      );
   }
}

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Post extends Component {
   state = {
      post: null
   };

   componentDidMount() {
      let id = this.props.match.params.post_id;

      axios
         .get("https://jsonplaceholder.typicode.com/posts/" + id)
         .then(res => {
            this.setState({
               post: res.data
            });
         });
   }

   render() {
      const post = this.state.post ? (
         <div className="post card">
            <div className="card-content">
               <span className="new amber darken-2 badge" />
               <div className="card-title cyan-text">{this.state.post.title}</div>
               <p className="grey-text">{this.state.post.body}</p>
            </div>
         </div>
      ) : (
         <div className="center">Loading post...</div>
      );

      return (
         <div className="container">
            <br/>
            {post}
         </div>
      );
   }
}

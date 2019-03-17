import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Post extends Component {
   /* 
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
   */

   render() {
      const post = this.props.post ? (
         <div className="post card">
            <div className="card-content">
               <span className="new amber darken-2 badge" />
               <div className="card-title cyan-text">
                  {this.props.post.title}
               </div>
               <p className="grey-text">{this.props.post.body}</p>
            </div>
         </div>
      ) : (
         <div className="center">Loading post...</div>
      );

      return (
         <div className="container">
            <br />
            {post}
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   // single individual record
   // ownProps + additional props from Redux store
   let id = ownProps.match.params.post_id
   return {
      post: state.posts.find(post => post.id === id)
   }
}

export default connect(mapStateToProps)(Post);

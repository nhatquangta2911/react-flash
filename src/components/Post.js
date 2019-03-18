import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deletePost } from "../actions/postAction";
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

   handleClick = () => {
      this.props.deletePost(this.props.post.id);
      // redirect to the home page after deleting
      this.props.history.push("/");
   };

   render() {
      const post = this.props.post ? (
         <div className="post card">
            <div className="card-content">
               <span className="new amber darken-2 badge" />
               <div className="card-title cyan-text">
                  {this.props.post.title}
               </div>
               <p className="grey-text">{this.props.post.body}</p>
               <div className="center">
                  <button className="btn grey" onClick={this.handleClick}>
                     Delete Post
                  </button>
               </div>
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
   let id = ownProps.match.params.post_id;
   return {
      post: state.posts.find(post => post.id == id)
   };
};

const mapDispatchToProps = (dispatch) => {
   // this param: dispatch method !
   return {
      deletePost: id => dispatch(deletePost(id))
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Post);

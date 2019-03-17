import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Home extends Component {
   /*
      state = {
         posts: []
      };
   componentDidMount() {
      // async, don't know when it'll finish
      // this method return a Promise
      // this Promise means: OK! this action will complete at some point in time
      axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
         this.setState({ 
            posts: res.data.slice(0, 10)
         });
      });
   }
*/



   render() {
      console.log(this.props)
      const { posts } = this.props;
      const postList = posts.length ? (
         posts.map(post => {
            return (
               <div className="post card" key={post.id}>
                  <div className="card-content">
                     <span className="new amber darken-2 badge" />
                     <Link to={"/" + post.id}>
                        <div className="card-title cyan-text">{post.title}</div>
                     </Link>
                     <p className="grey-text">{post.body}</p>
                  </div>
               </div>
            );
         })
      ) : (
         <div className="center">No posts yet</div>
      );

      return (
         <div className="container">
            <h2 className="center cyan-text lighten-1">Posts</h2>
            {postList}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      posts: state.posts
   }
}

export default connect(mapStateToProps)(Home);

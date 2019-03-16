import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
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

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span class="new amber darken-2 badge"></span>
              <div className="card-title cyan-text">{post.title}</div>
              <p>{post.body}</p>
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

export default Home;

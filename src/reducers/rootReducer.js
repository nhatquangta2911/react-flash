import axios from "axios";

axios.get("http://jsonplaceholder.typicode.com/users").then(res => {
   initState.users = [...res.data];
});

axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
let somePosts = res.data.slice(0,30)   
initState.posts = [...somePosts];
});

const initState = {
   users: [],
   posts: []
};

const rootReducer = (state = initState, action) => {
   if (action.type === "DELETE_POST") {
      let newPosts = state.posts.filter(post => post.id !== action.id);
      return {
         ...state,
         posts: newPosts
      };
   }

   if (action.type === "DELETE_USER") {
      let newUsers = state.users.filter(user => user.id !== action.id);
      return {
         ...state,
         users: newUsers
      };
   }

   return state;
};

export default rootReducer;

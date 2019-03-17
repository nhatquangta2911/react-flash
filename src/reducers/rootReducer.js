const initState = {
   users: [],
   posts: [
      {
         id: '1',
         title: 'React',
         body: 'Full React Course'
      },
      {
         id: '2',
         title: 'React & Redux',
         body: 'Full React & Redux Course'
      },
      {
         id: '3',
         title: 'React & Redux & Firebase',
         body: 'Full React & Redux & Firebase Course'
      }
   ]
};

const rootReducer = (state = initState, action) => {

   if(action.type === 'DELETE_POST') {
      let newPosts = state.posts.filter(post => post.id !== action.id)
      return {
         ...state,
         posts: newPosts
      }
   }

   return state;

};

export default rootReducer;

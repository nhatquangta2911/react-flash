const initState = {
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
   return state;
};

export default rootReducer;

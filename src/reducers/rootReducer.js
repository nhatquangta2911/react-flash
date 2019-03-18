const initState = {
   users: [
      {
         id: "1",
         name: "Ryan",
         email: "ryan29@gmail.com"
      },
      {
         id: "2",
         name: "Shaun",
         email: "shaun909@gmail.com"
      },
      {
         id: "3",
         name: "Ryu",
         email: "ryu58@gmail.com"
      },
      {
         id: "4",
         name: "Christian",
         email: "chris001@gmail.com"
      },
      {
         id: "5",
         name: "Amber",
         email: "amber404@gmail.com"
      },
      {
         id: "6",
         name: "Darcy",
         email: "darcy2202@gmail.com"
      }
   ],
   posts: [
      {
         id: "1",
         title: "React",
         body: "Full React Course"
      },
      {
         id: "2",
         title: "React & Redux",
         body: "Full React & Redux Course"
      },
      {
         id: "3",
         title: "React & Redux & Firebase",
         body: "Full React & Redux & Firebase Course"
      },
      {
         id: "4",
         title: "Javascript OOP",
         body: "Full Javascript - Object Oriented Programming Course"
      },
      {
         id: "5",
         title: "CSS Flexbox",
         body: "Full CSS Flexbox Course"
      }
   ]
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

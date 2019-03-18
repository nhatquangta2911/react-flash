export const deletePost = (id) => {
   return {
      type: 'DELETE_POST',
      id
   }
}

export const deleteUser = (id) => {
   return {
      type: 'DELETE_USER',
      id
   }
}
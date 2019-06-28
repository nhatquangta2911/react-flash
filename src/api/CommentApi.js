import Caller from '../utils/APICaller';

const prefix = 'comments/';

export default {

   getComments(blogId) {
      return Caller(prefix + 'post/' + blogId, 'GET');
   },

}
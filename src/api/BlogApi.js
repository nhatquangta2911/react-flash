import Caller from '../utils/APICaller';

const prefix = 'blogs/';

export default {
   list() {
      return Caller(prefix, 'GET');
   },
   get(blogId) {
      return Caller(prefix + 'blog/' + blogId, 'GET');
   }, 
   view(blogId) {
      return Caller(prefix + '/view/' + blogId, 'GET');
   },
   getComments(blogId) {
      return Caller('comments/post/' + blogId, 'GET');
   }
}
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
   },
   add(post, token) {
      return Caller(prefix, 'POST', post, token);
   },
   view(blogId) {
      return Caller(prefix + 'view/' + blogId, 'GET');
   },
   like(blogId, token) {
      return Caller(prefix + 'like/' + blogId, 'PUT', { isLike: true }, token);
   },
   getMy(userId) {
      return Caller(prefix + 'my/' + userId, 'GET');
   }
}
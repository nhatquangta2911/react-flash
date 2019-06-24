import Caller from '../utils/APICaller';

const prefix = 'users/';

export default {
   list() {
      return Caller(prefix, 'GET');
   },
   register(user) {
      return Caller(prefix, 'POST', user);
   },
   get(userId) {
      return Caller(prefix + 'user/' + userId, 'GET');
   },
   getBest() {
      return Caller(prefix + 'best', 'GET');
   }
}
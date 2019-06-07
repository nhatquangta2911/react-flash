import Caller from '../utils/APICaller';

const prefix = 'auth/';

export default {
   auth(user) {
      return Caller(prefix, 'POST', user);
   },
   checkToken() {
      return Caller(prefix + 'checkToken', 'GET');
   },
   logout() {
      return Caller(prefix, 'GET');
   }
}
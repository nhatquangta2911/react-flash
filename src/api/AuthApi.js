import Caller from '../utils/APICaller';

const prefix = 'auth/';

export default {
   auth(user) {
      return Caller(prefix, 'POST', user);
   }
}
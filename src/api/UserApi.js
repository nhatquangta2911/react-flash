import Caller from '../utils/APICaller';

const prefix = 'users/';

export default {
   list() {
      return Caller(prefix, 'GET');
   }
}
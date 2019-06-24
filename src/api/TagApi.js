import Caller from '../utils/APICaller';

const prefix = 'tags/';

export default {
   list() {
      return Caller(prefix, 'GET');
   }
}
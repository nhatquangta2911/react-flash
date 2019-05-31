import Caller from '../utils/APICaller';

const prefix = 'movies/';

export default {

   list() {
      return Caller(prefix, 'GET');
   },

   get(movieId) {
      return Caller(prefix + 'movie/' + movieId, 'GET');
   }

};
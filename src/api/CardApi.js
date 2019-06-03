import Caller from '../utils/APICaller';

const prefix = 'cards/';

export default {
   list() {
      return Caller(prefix, 'GET');
   },
   get(cardId) {
      return Caller(prefix + 'card/' + cardId, 'GET');
   },
   getRandom() {
      return Caller(prefix + '/random', 'GET');
   },
   getRecent() {
      return Caller(prefix + '/recent', 'GET');
   }
}
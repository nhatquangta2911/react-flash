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
      return Caller(prefix + 'random', 'GET');
   },
   getRecent() {
      return Caller(prefix + 'recent', 'GET');
   },
   search(query) {
      return Caller(prefix + 'search/' + query, 'GET');
   }, 
   update(card, token) {
      const cardBody = {
         englishTitle: card.englishTitle,
         vietnameseTitle: card.vietnameseTitle,
         image: card.image,
         example: card.example,
         type: card.type,
         context: card.context,
         isRemember: card.isRemember
      }
      return Caller(prefix + card._id, 'PUT', cardBody, token);
   }
}
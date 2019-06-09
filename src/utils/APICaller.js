import axios from 'axios';

const baseUrl = 'https://shawn-movie-rental.herokuapp.com/api';


export default function Caller(endpoint, method = 'GET', body = {}, token='') {
   return axios(
      `${baseUrl}/${endpoint}`,
      {
         method: method,
         data: body,
         headers: {'x-auth-token': token}
      }
   );
};
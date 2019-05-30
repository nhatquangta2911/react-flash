import axios from 'axios';

const baseUrl = 'https://shawn-movie-rental.herokuapp.com/api';

axios.defaults.withCredentials = true;

export default function Caller(endpoint, method = 'GET', body = {}) {
   return axios(
      `${baseUrl}/${endpoint}`,
      {
         method: method,
         data: body,
         withCredentials: true
      }
   );
};
import axios from 'axios';

const baseUrl = 'http://localhost:2911/api';


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
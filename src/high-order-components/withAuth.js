import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentNeedToProtect) {
   return class extends Component {
      constructor() {
         super();
         this.state = {
            loading: true,
            redirect: false,
         };
      }

      componentDidMount() {
         
      }
   }
}
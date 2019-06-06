import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import AuthApi from '../api/AuthApi';

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
         AuthApi.checkToken()
            .then(res => {
               if(res.status === 200) {
                  this.setState({
                     loading: false
                  });
               } else {
                  this.setState({
                     loading: true
                  })
               }
            })
            .catch(err => {
               // console.error(err);
               this.setState({
                  loading: false,
                  redirect: true
               })
            })
      }
      render() {
         const {loading, redirect} = this.state;
         if(loading) {
            return <p>LOADING...</p>;
         }
         if(redirect) {
            return <Redirect to="/login" />
         }
         return (
            <React.Fragment>
               <ComponentNeedToProtect {...this.props} />
            </React.Fragment>
         )
      }
   }
}
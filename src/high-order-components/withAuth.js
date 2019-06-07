import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import AuthApi from '../api/AuthApi';

export default function withAuth(ComponentNeedToProtect) {
   return class extends Component {
      constructor() {
         super();
         this.state = {
            redirect: false
         };
      }

      componentDidMount() {
         const token = window.localStorage.getItem('token');
         if(token) {
            this.setState({
               redirect: false
            })
         } 
         this.setState({
            redirect: true
         });

         // AuthApi.checkToken()
         //    .then(res => {
         //       if(res.status === 200) {
         //          this.setState({
         //             loading: false
         //          });
         //       } else {
         //          this.setState({
         //             loading: true
         //          })
         //       }
         //    })
         //    .catch(err => {
         //       // console.error(err);
         //       this.setState({
         //          loading: false,
         //          redirect: true
         //       })
         //    })
      }
      render() {
         const {redirect} = this.state;
         if(redirect) {
            return <Redirect to="/auth" />
         }
         return (
            <React.Fragment>
               <ComponentNeedToProtect {...this.props} />
            </React.Fragment>
         )
      }
   }
}
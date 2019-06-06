import styles from './LoginForm.scss';
import React, { Component } from 'react'
import AuthApi from '../../api/AuthApi';

export default class LoginForm extends Component {

   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: ''
      };
   }

   handleInputChange = (event) => {
      const { value, name } = event.target;
      this.setState({
         [name]: value
      });
   }

   onSubmit = (event) => {
      event.preventDefault();
      AuthApi.auth(this.state)
         .then(res => {
            this.props.history.push('/');   
         })
         .catch(err => {
            this.props.history.push('/auth');
            setTimeout(() => {
               alert('Username or password might not correct. Please try again!');
            }, 300);
            this.setState({
               password: ''
            });
         });
   }

   render() {
      return (
         <div className="login-form-container">
            <form onSubmit={this.onSubmit}>
               <input 
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  autoComplete="new-email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
               />
               <input 
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
               />
               <input 
                  type="submit"
                  value="Submit"
               />
            </form>
         </div>
      )
   }
}

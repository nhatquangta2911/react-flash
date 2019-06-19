import styles from './Register.scss';
import React, { Component } from 'react'
import UserApi from '../../api/UserApi';
import Toast from '../Toast/Toast';

export default class Register extends Component {

   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         password: '',
         checkedPassword: ''
      }
   }

   componentDidMount() {
      document.title = 'Register'
   }

   handleInputChange = event => {
      const { value, name } = event.target;
      this.setState({
         [name]: value
      });
   }

   onSubmit = () => {
      if(this.state.password === this.state.checkedPassword) {
         UserApi.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
         })
         .then(res => {
            Toast.success('You are now our member.');
         window.localStorage.setItem('token', res.data);
         this.props.history.push('/profile');
      })
      .catch(err => {
         Toast.error('Something went wrong');
         this.props.history.push('/register');
         this.setState({
            password: '',
            checkedPassword: ''
         });
      })
      } else {
         Toast.notify('Password must be the same');
         this.setState({
            password: '',
            checkedPassword: ''
         });
      }
   }
   
   render() {
      const {name, email, password, checkedPassword} = this.state;
      return (
         <div className="register-form-container">
            <p>Register page</p>
            <form>
               <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="new-name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                  />
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
                  type="password"
                  name="checkedPassword"
                  autoComplete="new-checked-password"
                  placeholder="Enter password one more time"
                  value={this.state.checkedPassword}
                  onChange={this.handleInputChange}
                  required
               />
                  <p className="btn-submit" onClick={this.onSubmit}>Sign In</p>
            </form>
         </div>
      )
   }
}

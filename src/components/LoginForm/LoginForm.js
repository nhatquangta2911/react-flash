import styles from "./LoginForm.scss";
import React, { Component } from "react";
import AuthApi from "../../api/AuthApi";
// import Cookies from "universal-cookie";
export default class LoginForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         password: ""
      };
   }

   handleInputChange = event => {
      const { value, name } = event.target;
      this.setState({
         [name]: value
      });
   };

   //TODO: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2VkNDliNGQ2NjNkNTQ4YmNlYTY3ZjAiLCJlbWFpbCI6InNoYXduLmFkbWluQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU1OTgzMDE1NCwiZXhwIjoxNTU5ODMzNzU0fQ.iV462ANax4u4NILpF5NIIqc8fUk7LNMaTz8Zryx-BP4
   onSubmit = event => {
      event.preventDefault();
      AuthApi.auth(this.state)
         .then(res => {
            this.props.history.push("/cards");
         })
         .catch(err => {
            this.props.history.push("/auth");
            setTimeout(() => {
               alert(   
                  "Username or password might not correct. Please try again!"
               );
            }, 300);
            this.setState({
               password: ""
            });
         });
   };

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
               <input type="submit" value="Submit" />
            </form>
         </div>
      );
   }
}

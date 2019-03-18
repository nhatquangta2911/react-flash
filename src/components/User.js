import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions/postAction";

class User extends Component {
 
   handleClick = event => {
      this.props.deleteUser(this.props.user.id);
      this.props.history.push("/contact");
   };

   render() {
      const user = this.props.user ? (
         <div className="user card">
            <div className="card-content">
               <span className="new amber darken-2 badge" />
               <div className="card-title cyan-text">
                  {this.props.user.name}
               </div>
               <p className="grey-text">{this.props.user.email}</p>
               {/* <p className="grey-text">
               {this.props.user.email}
               </p> */}
               <div className="center">
                  <button className="btn grey" onClick={this.handleClick}>
                     Delete User
                  </button>
               </div>
            </div>
         </div>
      ) : (
         <div className="center">Loading user...</div>
      );
      return (
         <div className="container">
            <br />
            {user}
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.user_id;
   return {
      user: state.users.find(user => user.id === id)
   };
};

const mapDispatchToProps = dispatch => {
   return {
      deleteUser: id => dispatch(deleteUser(id))
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(User);

import React, { Component } from "react";
// import RandomTextColor from "../high-order-components/RandomTextColor";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Contact extends Component {
   render() {
      const { users } = this.props;
      const userList = users.length ? (
         users.map(user => {
            return (
               <Link to={"/users/" + user.id} key={user.id}>
                  <div className="post card" key={user.id}>
                     <div className="card-content center ">
                        <div className="cyan-text card-title">{user.name}</div>
                        <p className="grey-text">{user.email}</p>
                        {/* <p className="grey-text">{user.phone}</p> */}
                        {/* <p className="grey-text">{user.website}</p> */}
                     </div>
                  </div>
               </Link>
            );
         })
      ) : (
         <p className="center amber-text darken-3">Loading users...</p>
      );

      return (
         <div className="container">
            <h2 className="center" />
            {userList}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      users: state.users
   };
};

export default connect(mapStateToProps)(Contact);

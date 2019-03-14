import React, { Component } from "react";

export default class User extends Component {
  render() {
    const { users } = this.props.data;
    const deleteUser = this.props.deleteUser;
    // const chosenUserList = users.filter(user => {
    //     return user.id % 2 === 1;
    // });
    const userList = users.map(user => {
      return (
        <div className="userItem" key={user.id}>
          <p className="id">{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          {/* <a className="button-delete button is-danger is-outlined">
            <span>Delete</span>
            <span className="icon is-small">
              <i onClick={() => {deleteUser(use.id)}} className="fas fa-times" />
            </span>
          </a> */}
          <button onClick={() => {deleteUser(user.id)}} className="button-delete button is-danger is-outlined">Delete</button>
        </div>
      );
    });

    return <div className="userBox2">{userList}</div>;
  }
}

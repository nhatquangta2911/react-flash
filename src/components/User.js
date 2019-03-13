import React, { Component } from 'react'

export default class User extends Component {
  render() {
 
    const { users } = this.props.data;
    const chosenUserList = users.filter(user => {
        return user.id % 2 === 1;
    });
    const userList = chosenUserList.map(user => {
        return (
            <div className="userItem" key={user.id}>
               <p className="id">{user.id}</p>
               <p>{user.name}</p> 
               <p>{user.email}</p> 
               <p>{user.phone}</p> 
               <p>{user.website}</p> 
            </div>
        )
    });
  
    return (
      <div className="userBox">
        {userList}
      </div>
    )
  }
}

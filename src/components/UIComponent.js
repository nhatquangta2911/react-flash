import React from 'react';

// const UIComponent = (props) => {
const UIComponent = (props) => {
    const {users} = props.data
    const userList = users.map(user => {
    return (user.id % 2 === 1) ? (
      <div className="userItem" key={user.id}>
        <p className="id">{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
    ) : null;
  });

  return <div className="userBox2">{userList}</div>;
};

export default UIComponent

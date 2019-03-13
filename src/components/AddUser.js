import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    name: null,
    email: null,
    phone: null,
    website: null
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);   
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={this.handleChange} />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" onChange={this.handleChange} />
          <label htmlFor="website">Website:</label>
          <input type="text" id="website" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class AddUser extends Component {

  state = {
    id: this.props.data.users[this.props.data.users.length - 1]['id'] + 1,
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
    let newId = this.state.id + 1;  
    event.preventDefault();
      this.setState({
        id: newId
      })
      console.log(this.state);
      this.props.addUser(this.state);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="name">Name:</label>
          <input className="input" type="text" id="name" onChange={this.handleChange} /><br/>
          <label className="label" htmlFor="email">Email:</label>
          <input className="input" type="text" id="email" onChange={this.handleChange} /><br/>
          <label className="label" htmlFor="phone">Phone:</label>
          <input className="input" type="text" id="phone" onChange={this.handleChange} /><br/>
          <label className="label" htmlFor="website">Website:</label>
          <input className="input" type="text" id="website" onChange={this.handleChange} /><br/>
          <button className="button is-primary">Submit</button>
        </form>
      </div>
    );
  }
}

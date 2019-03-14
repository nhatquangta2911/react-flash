import React, { Component } from "react";

export default class AddTodo extends Component {
  
  state = {
    content: ''
  }

  handleChange = (event) => {
      this.setState({
          content: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.addTodo(this.state)      
      this.setState({
          content: ''
      })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo" className="cyan-text">Add new todo</label>
          <input className="center cyan-text" id="todo" type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
    );
  }
}

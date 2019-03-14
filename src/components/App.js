import React, { Component } from 'react'
import '../css/styles.scss'
import Todos from './Todos';
import AddTodo from './AddTodo';

export default class App extends Component {  
  
  state = {
    todos: [
      {
        id: 1,
        content: 'Go swimming'
      },
      {
        id: 2,
        content: 'Grab a coffee'
      },
      {
        id: 3,
        content: 'Buy a journal book'
      }
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let shallowTodos = [...this.state.todos, todo]
    this.setState({
      todos: shallowTodos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h2 className="cyan-text">Todo's</h2><br></br>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} /><br></br>
        <AddTodo addTodo={this.addTodo} todos={this.state} />
      </div> 
    )
  }
}
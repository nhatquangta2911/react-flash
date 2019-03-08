import React, { Component } from 'react'
import Countdown from './Countdown'

export default class App extends Component {
  
  state = {
    name: 'Ryan',
    age: 22,
    isShown: false
  }

  constructor(props) {
    super(props)
    this.title = "title"
  }

  handleClick = (event) => {
    
    this.setState({
      name: 'Shaun',
      age: 42,
      isShown: true,
      score: 9.94
    })

    if(this.state.isShown === true) {
      console.log(this.state);
    }
    console.log(event.target.innerHTML);
  }

  // // Can not access to the state because of this silly context
  // handleClick(event) {
  //   console.log(event.timeStamp)
  //   console.log(event.target.innerHTML)
  // }

  handleMouseOver(event) {
    console.log(event.target.innerHTML)
    console.log(event.pageX, event.pageY);
  }

  handleCopy(event) {
    console.log('Not easy to copy dude!');
  }

  render() {
    return (
      <div>
        <h1>Hey, dude!</h1>
        <p>My name is {this.state.name} and I'm turning {this.state.age} this year </p>
      <button onClick={this.handleClick} className="button is-primary">Click me!</button>
      <button onMouseOver={this.handleMouseOver} className="button is-warning">Hover me!</button>
      <p onCopy={this.handleCopy}>Best quote ever</p>
      <Countdown />
      </div> 
    )
  }

}
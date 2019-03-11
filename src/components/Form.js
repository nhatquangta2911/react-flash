import React, { Component } from 'react'
import SimpleBoxes from './SimpleBoxes'
export default class Form extends Component {
  
  state = {
    note: 'CONTENT',
    boxes: [
      {
      id: 1,
      rank: '1위',
      artist: '오마이걸',
      song: '비밀정원'
      },
      {
      id: 2,
      rank: '2위',
      artist: '오마이걸',
      song: '비밀정원'
      },
      {
      id: 3,
      rank: '3위',
      artist: '오마이걸',
      song: '비밀정원'
      }
    ]
  };

  handleChange = (event) => {
    this.setState({
      note: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
            <input className="inputText" type="text" onChange={this.handleChange}></input>
            <button className="btnSubmit">Submit</button>
        </form>
        <SimpleBoxes data={this.state} />
      </div>
    )
  }
}

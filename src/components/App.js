import React, { Component } from 'react';
import Countdown from './Countdown.js';

class App extends Component {

  // when the first load
  state = {
    name: 'CC',
    age: 22
  }

  render() {
    return (
      <div>
        <Countdown />
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react'
import '../css/styles.scss'
import Countdown from './Countdown'
import Footer from './Footer'
import Form from './Form'

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
        <Form />
      </div> 
    )
  }

}

// class Person {

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   talk() {
//     console.log('Talking...');
//   }

// }

// class Teacher extends Person {

//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }

//   teach() {
//     console.log('Teaching...');
    
//   }

// }

// // const personA = new Person('Ryan', 22);
// // const personB = new Teacher('Shaun', 40, 'Computer Science');

// const items = ['Flower', 'Wine', 'Book', 'Glasses'];

// for (const item of items) {
//   console.log(item);
// }
// // const listItems = items.map( item => `<li>${item}</li>\n`);
// // console.log(...listItems);

// const products = [
//   {
//     name: 'Book',
//     price: 20000
//   },
//   {
//     name: 'Glasses',
//     price: 150000
//   },
//   {
//     name: 'Milk',
//     price: 9000
//   }
// ];

// // for of is recommended 
// for (const [k, v] of products.entries()) {
//   console.log(k, v);
// }

// const expensiveProducts = products.filter( product => product.price >= 10000);
// console.log(...expensiveProducts);

// const [book, glasses, milk] = products;
// console.log(book, glasses, milk);
// console.log(book.name, glasses.name, milk.name);

// console.log(__filename);
// console.log(__dirname);
// console.log(module);

// built-in modules

// 1. Path module --> working with path easily
// const path = require('path'); 

// var pathObject = path.parse(__filename);

// console.log(pathObject);

// 2. OS module

// const os = require('os');
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());

// 3. Event Emitter --> class --> EventEmitter, not eventEmitter

// // emit: Making a noise, produce something (signalling that an event happen)
// const EventEmitter = require('events');
// // create an instance of this class
// const emitter = new EventEmitter();
// // pass a name of the event, Raise an event

// // register a listener
// // a listener - a (callback) function will be called when raising an event
// emitter.on('messageLogged', (event) => {
//     console.log('Listener called', event)
// });

// // Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://'});

// 4. Http module --> creating networking app
// creating a web server that listen to Http request on the given port, creating backend services for client web server (React, Mobile App)

// const http = require('http');
// const server = http.createServer((request, response) => {
    
//     if (request.url === '/') {
//         response.write('hi there!');
//         response.end();
//     }

//     // add more route
//     if (request.url === '/api/courses') {
//         response.write(JSON.stringify([1, 2, 3]));
//         response.end();
//     }

// });

// server.on('connection', (socket) => { 
//     console.log('New connection...');
// });

// //this server is an EventEmitter
// server.listen(2911);

// console.log('Listening on port 2911...');



 

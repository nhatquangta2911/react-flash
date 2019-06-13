import React, { Component } from "react";
import io from "socket.io-client";
import styles from "./Chat.scss";
import jwt from "jsonwebtoken";
export default class Chat extends Component {
   constructor(props) {
      super(props);
      this.state = {
         message: "",
         handle: "",
         output: [],
         feedback: "",
         socket: io("https://shawn-movie-rental.herokuapp.com"),
         user: ""
      };
   }

   componentDidMount() {
      this.handleSocket();
      const token = window.localStorage.getItem('token');
      const user = jwt.decode(token);
      if (user) {
         this.setState({
            handle: user.name
         });
      }
      document.title = user && user.name && `Chat Room - ${user.name}`;
   }

   handleSocket = () => {
      this.state.socket.on("chat", data => {
         this.setState({
            output: [
               ...this.state.output,
               {
                  message: data.message,
                  handle: data.handle
               }
            ],
            feedback: ""
         });
      });
      this.state.socket.on("typing", data => {
         this.setState({
            feedback: data
         });
      });
   };

   handleClick = () => {
      if(this.state.message.length === 0) return;
      this.state.socket.emit("chat", {
         message: this.state.message,
         handle: this.state.handle
      });
      this.setState({
         message: ''
      })
   };

   handleTyping = () => {
      this.state.socket.emit("typing", this.state.handle);
   };

   handleChangeHandle = event => {
      this.setState({
         handle: event.target.value
      });
   };

   handleChangeMessage = event => {
      this.setState({
         message: event.target.value
      });
   };

   render() {
      const { message, handle, output, feedback, socket } = this.state;
      const outputResult =
         output &&
         output.map(o => (
            <div id="chat-item-container" key={output.indexOf(o)}>
               <div id="chat-item-handle">{o.handle}
               </div>
               <div id="chat-item-messages">
                 <p>{o.message}</p> 
               </div> 
            </div>
         ));
      const feedbackOutput = feedback && (
         <p>
            <em>
               <b>{feedback}</b> is typing a message...
            </em>
         </p>
      );
      return (
         <div>
         <div id="chat-room-title">
            <p>Chat Room</p>
         </div>
         <div id="flash-chat">
            <div id="chat-window">
               <div id="output">{outputResult}</div>
               <div id="feedback">{feedbackOutput}</div>
            </div>
            <div id="input-handle">
               <input
                  onChange={this.handleChangeHandle}
                  type="text"
                  id="handle"
                  value={handle}
                  disabled
                  />
            </div>
            <div id="input-message">
               <input
                  onChange={this.handleChangeMessage}
                  onKeyPress={this.handleTyping}
                  type="text"
                  id="message"
                  placeholder="Message"
                  value={message}
                  />
            </div>
            <button id="send" onClick={this.handleClick}>
               Send
            </button>
         </div>
      </div>
      );
   }
}

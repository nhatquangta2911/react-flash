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
      document.title = 'Chat Room';
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
            <p>
               <strong>{o.handle}</strong>
               {o.message}
            </p>
         ));
      const feedbackOutput = feedback && (
         <p>
            <em>
               <b>{feedback}</b> is typing a message...
            </em>
         </p>
      );
      return (
         <div id="flash-chat">
            <div id="chat-window">
               <div id="output">{outputResult}</div>
               <div id="feedback">{feedbackOutput}</div>
            </div>
            <input
               onChange={this.handleChangeHandle}
               type="text"
               id="handle"
               placeholder="Handle"
               value={handle}
               disabled
            />
            <input
               onChange={this.handleChangeMessage}
               onKeyPress={this.handleTyping}
               type="text"
               id="message"
               placeholder="Message"
               value={message}
            />
            <button id="send" onClick={this.handleClick}>
               Send
            </button>
         </div>
      );
   }
}

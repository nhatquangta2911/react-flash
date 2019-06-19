import React, { Component } from 'react';
import { toast } from 'react-toastify';
import styles from './Toast.scss';
import 'react-toastify/dist/ReactToastify.css';

export default {
   success(message, title='Success!', option = {}) {
      return toast(
      <div className="toast-container">
            <img src="https://dumielauxepices.net/sites/default/files/green-tick-clipart-animation-627696-3105204.gif"/>
            <div className="toast-content">
               <p className="toast-title">{title}</p>
               <p className="toast-message">{message}</p>
            </div>
       </div>,
         {
            ...option,
            autoClose: 2000,
            className: "green-toast",
            hideProgressBar: true,
            closeButton: false
         }
      );
   },
   error(message, title='Error!', option = {}) {
      return toast(
      <div className="toast-container">
            <img src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/08-512.png"/>
            <div className="toast-content">
               <p className="toast-title-error">{title}</p>
               <p className="toast-message">{message}</p>
            </div>
       </div>,
         {
            ...option,
            autoClose: 2000,
            className: "red-toast",
            hideProgressBar: true,
            closeButton: false
         }
      );
   },
   notify(message, title=`You've got a new message!`, option = {}) {
      return toast(
      <div className="toast-container">
            <img src="https://cdn.dribbble.com/users/4874/screenshots/1776423/inboxiconanimation_30.gif"/>
            <div className="toast-content">
               <p className="toast-title-info">{title}</p>
               <p className="toast-message">{message}</p>
            </div>
       </div>,
         {
            ...option,
            autoClose: 5000,
            className: "blue-toast",
            hideProgressBar: true,
            closeButton: false
         }
      );
   }
}
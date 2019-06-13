import styles from './DashBoardAdd.scss';
import React, { Component } from 'react'

export default class DashBoardAdd extends Component {
   render() {
      return (
         <div className="dashboard-add-container">
            <p className="dashboard-add-title">Add new card</p>
            <div className="dashboard-add-english-title">
               <input
                  type="text"
                  placeholder="English Title"
                  id="english-title"
               />
            </div>
            <div className="dashboard-add-vietnamese-title">
               <input
                  type="text"
                  placeholder="Vietnamese Title"
                  id="vietnamese-title"
               />
            </div>
            <div className="dashboard-add-example">
               <input
                  type="text"
                  placeholder="Example"
                  id="example"
               />
            </div>
            <div className="dashboard-add-context">
               <input
                  type="text"
                  placeholder="Context"
                  id="context"
               />
            </div>
            <div className="dashboard-add-type">
               <input
                  type="text"
                  placeholder="Type"
                  id="type"
               />
            </div>
            <div className="dashboard-add-image">
               <input
                  type="text"
                  placeholder="Image"
                  id="image"
               />
            </div>
            <div className="dashboard-add-button">
               <p className="dashboard-add-button-cancel">Cancel</p>
               <p className="dashboard-add-button-add">Add</p>
            </div>
         </div>
      )
   }
}

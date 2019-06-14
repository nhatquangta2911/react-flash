import styles from "./DashboardEdit.scss";
import React, { Component } from "react";

export default class DashboardEdit extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         id: '',
         card: ''
      }
   }

   componentDidMount() {
      
   }

   render() {
      return (
         <div className="dashboard-edit-container">
            <p className="dashboard-edit-title">Edit card</p>
            <div className="dashboard-edit-english-title">
               <input
                  type="text"
                  placeholder="English Title"
                  id="english-title"
               />
            </div>
            <div className="dashboard-edit-vietnamese-title">
               <input
                  type="text"
                  placeholder="Vietnamese Title"
                  id="vietnamese-title"
               />
            </div>
            <div className="dashboard-edit-example">
               <input type="text" placeholder="Example" id="example" />
            </div>
            <div className="dashboard-edit-context">
               <input type="text" placeholder="Context" id="context" />
            </div>
            <div className="dashboard-edit-type">
               <input type="text" placeholder="Type" id="type" />
            </div>
            <div className="dashboard-edit-image">
               <input type="text" placeholder="Image" id="image" />
            </div>
            <div className="dashboard-edit-button">
               <p className="dashboard-edit-button-cancel">Cancel</p>
               <p className="dashboard-edit-button-edit">Edit</p>
            </div>
         </div>
      );
   }
}

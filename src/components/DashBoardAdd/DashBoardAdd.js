import styles from './DashBoardAdd.scss';
import React, { Component } from 'react'
import CardApi from '../../api/CardApi';

export default class DashBoardAdd extends Component {

   constructor(props) {
      super(props);
      this.state = {
         card: {
            _id: '',
            englishTitle: '',
            vietnameseTitle: '',
            example: '',
            context: '',
            type: '',
            image: '',
            isRemember: ''
         }
      }
   }

   setFormData = (key, value) => {
      let card = this.state.card;
      card[key] = value;
      this.setState({
         card
      });
   } 

   handleAdd = () => {
      CardApi.add(this.state.card, window.localStorage.getItem('token'))
         .then(res => {
            this.props.history.push(`/dashboard/cards/${res.data._id}`);
         })
         .catch(err => {})
   }

   render() {
      const { card } = this.state;
      return (
         <div className="dashboard-add-container">
            <p className="dashboard-add-title">Add new card</p>
            <div className="dashboard-add-english-title">
               <input
                  type="text"
                  placeholder="English Title"
                  id="englishTitle"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
               />
            </div>
            <div className="dashboard-add-vietnamese-title">
               <input
                  type="text"
                  placeholder="Vietnamese Title"
                  id="vietnameseTitle"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
               />
            </div>
            <div className="dashboard-add-example">
               <input
                  type="text"
                  placeholder="Example"
                  id="example"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
               />
            </div>
            <div className="dashboard-add-context">
               <input
                  type="text"
                  placeholder="Context"
                  id="context"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
               />
            </div>
            <div className="dashboard-add-type">
               <input
                  type="text"
                  placeholder="Type"
                  id="type"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
               />
            </div>
            <div className="dashboard-add-image">
               <input
                  type="text"
                  placeholder="Image"
                  id="image"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
               />
            </div>
            <div className="dashboard-add-button">
               <p className="dashboard-add-button-cancel">Cancel</p>
               <p onClick={this.handleAdd} className="dashboard-add-button-add">Add</p>
            </div>
         </div>
      )
   }
}

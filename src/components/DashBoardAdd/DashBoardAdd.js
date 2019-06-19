import styles from './DashBoardAdd.scss';
import React, { Component } from 'react'
import CardApi from '../../api/CardApi';
import { Link } from 'react-router-dom';
import Toast from '../Toast/Toast';

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

   validate = (field, regex) => {
      if(regex && !regex.test(field.value)) 
         console.log(field); 
   }

   doValidate = () => {
      const inputs = document.querySelectorAll('input');
      const patterns = {
         englishTitle: /^[a-z\d]{5}$/i
     }
     inputs.forEach((input) => {
        input.addEventListener('keyup', (event) => {
           this.validate(event.target, patterns[event.target.attributes.className.value]);
        })
     })

   }

   handleAdd = () => {
      if(this.state.card.englishTitle.length < 4) {
         Toast.notify('English Title must have at least 4 characters', 'Invalid input');
      } else {
         if(this.state.card.vietnameseTitle.length < 4) {
            Toast.notify('Vietnamese Title must have at least 4 characters', 'Invalid input');
         } else {
            if(this.state.card.example.length < 10) {
               Toast.notify('Example must have at least 10 characters', 'Invalid input');
            } else {
               if(this.state.card.context.length < 3) {
                  Toast.notify('Context must have at least 3 characters', 'Invalid input');
               } else {
                  if(this.state.card.type.length < 3) {
                     Toast.notify('Type must have at least 3 characters', 'Invalid input');
                  } else {
                     if(!this.state.card.image.endsWith('gif') && !this.state.card.image.endsWith('png') && !this.state.card.image.endsWith('jpg')) {
                        Toast.notify('Image link must end with .gif .png or .jpg', 'Invalid input');
                     } else {
                           CardApi.add(this.state.card, window.localStorage.getItem('token'))
                           .then(res => {
                              this.props.history.push(`/dashboard/cards/${res.data._id}`);
                              Toast.success(`Created Card`);
                           })
                           .catch(err => {
                              err && Toast.error('Something went wrong! Please try again!');
                           });
                        }
                     }
                  }
               }
            }
         }
      
   }

   render() {
      const { isValid, card } = this.state;
      return (
         <div className="dashboard-add-container">
            <p className="dashboard-add-title">Add new card</p>
            <form>

            <div className="dashboard-add-english-title">
               <input
                  type="text"
                  className="validation"
                  placeholder="English Title"
                  id="englishTitle"
                  required
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
                  />
            </div>
            <div className="dashboard-add-vietnamese-title">
               <input
                  type="text"
                  placeholder="Vietnamese Title"
                  required
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
                  required
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
                  required
                  id="context"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
                  />
            </div>
            <div className="dashboard-add-type">
               <input
                  required
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
                  required
                  id="image"
                  onChange={event => {
                     this.setFormData(event.target.id, event.target.value);
                  }}
                  />
            </div>
            <div className="dashboard-add-button">
               <Link to="/dashboard/all-cards">
                  <p className="dashboard-add-button-cancel">Cancel</p>
               </Link>
               <p onClick={this.handleAdd} className="dashboard-add-button-add">Add</p>
            </div>
         </form>
         </div>
      )
   }
}

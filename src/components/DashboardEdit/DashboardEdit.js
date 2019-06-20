import styles from "./DashboardEdit.scss";
import React, { Component } from "react";
import { getIdBySplitingPath } from "../../utils/Link";
import CardApi from "../../api/CardApi";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import Modal from "react-materialize/lib/Modal";
export default class DashboardEdit extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         id: "",
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
      };
   }

   componentWillMount() {
      this.setState({
         id: getIdBySplitingPath(document.location.href, "edit/") 
      });
   }

   componentDidMount() {
      CardApi.get(this.state.id)
         .then(res => {
            this.setState({
               isLoading: false,
               card: {
                  _id: res.data._id,
                  englishTitle: res.data.englishTitle,
                  vietnameseTitle: res.data.vietnameseTitle,
                  example: res.data.example,
                  context: res.data.context,
                  type: res.data.type,
                  isRemember: res.data.isRemember,
                  image: res.data.image
               }
            });
            document.title = `Edit Card - ${res.data.englishTitle}`;
         })
         .catch(err => {});
   }

   
   componentWillReceiveProps() {
      CardApi.get(this.state.id)
         .then(res => {
            this.setState({
               isLoading: false,
               card: {
                  _id: res.data._id,
                  englishTitle: res.data.englishTitle,
                  vietnameseTitle: res.data.vietnameseTitle,
                  example: res.data.example,
                  context: res.data.context,
                  type: res.data.type,
                  image: res.data.image,
                  isRemember: res.data.isRemember
               }
            });
         })
         .catch(err => {});
      document.title = `Edit Card - ${res.data.englishTitle}`;
   }

   setFormData = (key, value) => {
      let card = this.state.card;
      card[key] = value;
      this.setState({
         card
      });
   } 

   handleSubmit = () => {
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
      const token = window.localStorage.getItem('token');
      CardApi.update(this.state.card, token)
         .then(res => {})
         .catch(err => {
            this.setState({
               isLoading: true
            });
         })
      this.props.history.push(`/dashboard/cards/${this.state.id}`);
      }
   }
}}}}}

   render() {
      const { isLoading, id, card } = this.state;
      return (
         <div>
            {isLoading && <Loading message="Loading..." />}
            {!isLoading && (
               <div className="dashboard-edit-container">
                  <p className="dashboard-edit-title">Edit card</p>
                     <div className="dashboard-edit-english-title">
                        <input
                           type="text"
                           placeholder="English Title"
                           id="englishTitle"
                           value={this.state.card.englishTitle}
                           onChange={event => {
                              this.setFormData(event.target.id, event.target.value);
                           }}
                           />
                     </div>
                  
                  <div className="dashboard-edit-vietnamese-title">
                     <input
                        type="text"
                        placeholder="Vietnamese Title"
                        id="vietnameseTitle"
                        value={this.state.card.vietnameseTitle}
                        onChange={event => {
                           this.setFormData(event.target.id, event.target.value);
                        }}
                        />
                  </div>
                  <div className="dashboard-edit-example">
                     <input
                         type="text" 
                         placeholder="Example" 
                         id="example" 
                         onChange={event => {
                            this.setFormData(event.target.id, event.target.value);
                           }}
                           value={this.state.card.example}
                           />
                  </div>
                  <div className="dashboard-edit-context">
                     <input
                        type="text"
                        placeholder="Context"
                        id="context"
                        onChange={event => {
                           this.setFormData(event.target.id, event.target.value);
                        }}
                        value={this.state.card.context}
                        />
                  </div>
                  <div className="dashboard-edit-type">
                     <input 
                        type="text"
                        placeholder="Type" 
                        id="type"
                        onChange={event => {
                           this.setFormData(event.target.id, event.target.value);
                        }}
                        value={this.state.card.type}
                        />
                  </div>
                  <div className="dashboard-edit-image">
                     <input 
                        type="text"
                        placeholder="Image" 
                        id="image" 
                        onChange={event => {
                           this.setFormData(event.target.id, event.target.value);
                        }}
                        value={this.state.card.image}
                        />
                  </div>
                  <div className="dashboard-edit-button">
                     <Link to="/dashboard/all-cards">
                        <p className="dashboard-edit-button-cancel">Cancel</p>
                     </Link>
                     <p onClick={this.handleSubmit} className="dashboard-edit-button-edit">Edit</p>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

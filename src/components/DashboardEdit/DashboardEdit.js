import styles from "./DashboardEdit.scss";
import React, { Component } from "react";
import { getIdBySplitingPath } from "../../utils/Link";
import CardApi from "../../api/CardApi";
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

   render() {
      const { isLoading, id, card } = this.state;
      return (
         <div>
            {isLoading && <p className="dashboard-loading">Loading...</p>}
            {!isLoading && (
               <div className="dashboard-edit-container">
                  <p className="dashboard-edit-title">Edit card</p>
                  {card && card.englishTitle && (
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
                  )}
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
                     <p className="dashboard-edit-button-cancel">Cancel</p>
                     <p onClick={this.handleSubmit} className="dashboard-edit-button-edit">Edit</p>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

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
         card: ""
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
               card: res.data
            });
         })
         .catch(err => {});
      document.title = `Edit Card - ${this.state.card.englishTitle}`;
   }

   componentWillReceiveProps() {
      CardApi.get(this.state.id)
         .then(res => {
            this.setState({
               isLoading: false,
               card: res.data
            });
         })
         .catch(err => {});
      document.title = `Edit Card - ${this.state.card.englishTitle}`;
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
                           id="english-title"
                           value={card.englishTitle}
                        />
                     </div>
                  )}
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
            )}
         </div>
      );
   }
}

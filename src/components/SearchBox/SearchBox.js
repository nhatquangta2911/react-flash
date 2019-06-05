import styles from './SearchBox.scss';
import React, { Component } from 'react'
import CardApi from '../../api/CardApi';
import { toCardLink } from '../../utils/Link';
import AsyncSelect from "react-select/async";


export default class SearchBox extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         selectedCard: null
      }
   }


   getCard(key, callback) {
      if(key.length === 0) return null;
      CardApi.search(key)
         .then(res => {
            let data = [];
            res.data.forEach(card => {
               data.push({ label: card.englishTitle, value: card._id });
            });
            callback(data);
         });
   }

   render() {
      return (
         <div className="search-box-container">
            <AsyncSelect 
               cacheOptions
               placeholder="Find Flashcard..."
               loadOptions={(v, c) => {
                  this.getCard(v, c);
               }}
               value={this.state.selectedCard}
               onChange={v => {
                  this.setState({
                     selectedCard: v.value
                  });
                  window.location.href = toCardLink(v.value);
               }}
               theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#FFC107',
                    primary: '#00ACC1'
                  },
                })}
            />
         </div>
      )
   }
}

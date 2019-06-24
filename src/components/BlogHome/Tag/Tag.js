import styles from './Tag.scss';
import React, { Component } from 'react'
import TagApi from '../../../api/TagApi';
import Loading from '../../Loading';

export default class Tag extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         tags: ''
      }
   }

   componentDidMount() {
      TagApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               tags: res.data
            })
         })
         .catch(err => {})
   }

   componentWillReceiveProps() {
      TagApi.list()
         .then(res => {
            this.setState({
               isLoading: false,
               tags: res.data
            })
         })
         .catch(err => {})
   }

   render() {
      const { isLoading, tags } = this.state;
      return (
         <div className="tags-container">
            {isLoading && <Loading />}
            {tags && tags.map(tag => (
               <p className="tags-name" key={tag._id}>{tag.name}</p>
            ))}
         </div>
      )
   }
}

import styles from './UserChart.scss';
import React, { Component } from 'react'
import UserApi from '../../api/UserApi';
import Toast from '../Toast';
import Loading from '../Loading';1
import {Link} from 'react-router-dom';

export default class UserChart extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         users: ''
      }
   }

   componentDidMount() {
      UserApi.getBest()
         .then(res => {
            this.setState({
               isLoading: false,
               users: res.data
            })
         })
         .catch(err => {
            Toast.error('Something went wrong');
         })
   }

   componentWillReceiveProps() {
      UserApi.getBest()
         .then(res => {
            this.setState({
               isLoading: false,
               users: res.data
            })
         })
         .catch(err => {
            Toast.error('Something went wrong');
         })
   }

   render() {
      const { isLoading, users } = this.state;
      const CHART_SIZE = 5;
      const usersChart = users && users.map(user => (
         <Link to={{ pathname: `/feed/${user._id}` }} key={user._id}>
         <div className="user-chart-item" key={user._id}>
            {users.indexOf(user) === 0 && 
            <p className="user-chart-item-rank rank-best">1<span className="rank-suffix">st</span></p>}
            {users.indexOf(user) !== 0 && 
            <p className="user-chart-item-rank">{users.indexOf(user) + 1}</p>}
            <p className="user-chart-item-name">{user.name}</p>
            <p className="user-chart-item-score">{user.score}</p>
         </div>
            </Link>
      )).splice(0, CHART_SIZE);
      return (
         <div className="users-chart-container">
            {isLoading && <Loading message="Loading top users..."/>}
            {usersChart}
         </div>
      )
   }
}
